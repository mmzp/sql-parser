@builtin "number.ne"

# 字段类型
data_type
	-> numeric_type {% d => d[0] %}
    | datetime_type {% d => d[0] %}
    | string_type {% d => d[0] %}
    | spatial_data_type {% d => d[0] %}

# 数值类型
numeric_type
    -> integer_type {% d => d[0] %}
    | ("DECIMAL"i | "NUMERIC"i | "FLOAT"i | "DOUBLE"i) (_ "(" _ (unsigned_int | unsigned_int _ "," _ unsigned_int) _ ")" _):? {%
            d => {
                let type = d[0][0].toUpperCase();
                if (type === 'NUMERIC') {
                    type = 'DECIMAL';
                }
                const default_m_data = {
                    DECIMAL: 10,
                    FLOAT: 23,
                    DOUBLE: 53,
                };
                let _m = default_m_data[type];
                let _d = 0;
                if (d[1] && d[1][3]) {
                    if (d[1][3].length === 1) {
                        _m = d[1][3][0];
                    } else if (d[1][3].length === 5) {
                        _m = d[1][3][0];
                        _d = d[1][3][4];
                    }
                }
                return {
                    type,
                    params: [ _m, _d ],
                };
            }
        %}
    | "BIT"i _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: 'BIT',
                    params: [ d[4] ],
                };
            }
        %}

# 整数类型
integer_type
    -> ("TINYINT"i | "SMALLINT"i | "MEDIUMINT"i | "INT"i | "BIGINT"i) (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const type = d[0][0].toUpperCase();
                const default_length_data = {
                    TINYINT: 4,
                    SMALLINT: 6,
                    MEDIUMINT: 8,
                    INT: 11,
                    BIGINT: 20,
                };
                const length = d[1] ? d[1][3] : default_length_data[type];
                const result = {
                    type,
                    params: [ length ],
                };
                if (d[2] && d[2][1]) {
                    result.unsigned = true;
                }
                if (d[3] && d[3][1]) {
                    result.zerofill = true;
                }
                return result;
            }
        %}

# 日期时间类型
datetime_type
    -> "DATE"i {%
            d => {
                return {
                    type: 'DATE',
                };
            }
        %}
    | ("DATETIME"i | "TIMESTAMP"i | "TIME"i | "YEAR"i) (_ "(" _ unsigned_int _ ")" _):? {%
            d => {
                let params = [];
                if (d[1] && d[1][3]) {
                    params.push(d[1][3]);
                }
                const result = {
                    type: d[0][0].toUpperCase(),
                };
                if (params) {
                    result.params = params;
                }
                return result;
            }
        %}

# 字符串类型        
string_type
    -> ("CHAR"i | "VARCHAR"i | "BINARY"i | "VARBINARY"i ) _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: d[0][0].toUpperCase(),
                    params: [ d[4] ],
                };
            }
        %}
    | ("TINYBLOB"i | "BLOB"i | "MEDIUMBLOB"i | "LONGBLOB"i | "TINYTEXT"i | "TEXT"i | "MEDIUMTEXT"i | "LONGTEXT"i | "JSON"i ) {%
            d => {
                return {
                    type: d[0][0].toUpperCase(),
                };
            }
        %}
    | ("ENUM"i | "SET"i) _ "(" _ (string _ ("," _):?):+ _ ")" {%
            d => {
                return {
                    type: d[0][0].toUpperCase(),
                    params: d[4].map(i => i[0]),
                };
            }
        %}

# 空间数据类型
spatial_data_type
    -> ("GEOMETRY"i | "POINT"i | "LINESTRING"i | "POLYGON"i | "MULTIPOINT"i | "MULTILINESTRING"i | "MULTIPOLYGON"i | "GEOMETRYCOLLECTION"i ) {%
            d => {
                return {
                    type: d[0][0].toUpperCase(),
                };
            }
        %}

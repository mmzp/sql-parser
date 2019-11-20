data_type
	-> numeric_type {% d => d[0] %}
    | datetime_type {% d => d[0] %}
    | string_type {% d => d[0] %}
    | spatial_data_type {% d => d[0] %}
numeric_type
    -> integer_type {% d => d[0] %}
    | ("DECIMAL"i | "NUMERIC"i) (_ "(" _ (unsigned_int | unsigned_int _ "," _ unsigned_int) _ ")" _):? {%
            d => {
                let _m = 10;
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
                    type: 'DECIMAL',
                    params: [ _m, _d ],
                };
            }
        %}
    | "FLOAT"i (_ "(" _ (unsigned_int | unsigned_int _ "," _ unsigned_int) _ ")" _):? {%
            d => {
                let _m = 23;
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
                    type: 'FLOAT',
                    params: [ _m, _d ],
                };
            }
        %}
    | "DOUBLE"i (_ "(" _ (unsigned_int | unsigned_int _ "," _ unsigned_int) _ ")"):? {%
            d => {
                let _m = 53;
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
                    type: 'DOUBLE',
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
integer_type
    -> "TINYINT"i (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const length = d[1] ? d[1][3] : 4;
                const result = {
                    type: 'TINYINT',
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
    | "SMALLINT"i (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const length = d[1] ? d[1][3] : 6;
                const result = {
                    type: 'SMALLINT',
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
    | "MEDIUMINT"i (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const length = d[1] ? d[1][3] : 8;
                const result = {
                    type: 'MEDIUMINT',
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
    | "INT"i (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const length = d[1] ? d[1][3] : 11;
                const result = {
                    type: 'INT',
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
    | "BIGINT"i (_ "(" _ unsigned_int _ ")" _):? (__ "UNSIGNED"i):? (__ "ZEROFILL"i):? {%
            d => {
                const length = d[1] ? d[1][3] : 20;
                const result = {
                    type: 'BIGINT',
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
datetime_type
    -> "DATE"i {%
            d => {
                const result = {
                    type: 'DATE',
                };
                return result;
            }
        %}
    | "DATETIME"i (_ "(" _ unsigned_int _ ")" _):? {%
            d => {
                let params;
                if (d[1] && d[1][3]) {
                    params.push(d[1][3]);
                }
                const result = {
                    type: 'DATETIME',
                };
                if (params) {
                    result.params = params;
                }
                return result;
            }
        %}
    | "TIMESTAMP"i (_ "(" _ unsigned_int _ ")" _):? {%
            d => {
                let params;
                if (d[1] && d[1][3]) {
                    params.push(d[1][3]);
                }
                const result = {
                    type: 'TIMESTAMP',
                };
                if (params) {
                    result.params = params;
                }
                return result;
            }
        %}
    | "TIME"i (_ "(" _ unsigned_int _ ")" _):? {%
            d => {
                let params;
                if (d[1] && d[1][3]) {
                    params.push(d[1][3]);
                }
                const result = {
                    type: 'TIME',
                };
                if (params) {
                    result.params = params;
                }
                return result;
            }
        %}
    | "YEAR"i (_ "(" _ unsigned_int _ ")" _):? {%
            d => {
                const result = {
                    type: 'YEAR',
                };
                return result;
            }
        %}
string_type
    -> "CHAR"i _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: 'CHAR',
                    params: [ d[4] ],
                };
            }
        %}
    | "VARCHAR"i _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: 'VARCHAR',
                    params: [ d[4] ],
                };
            }
        %}
    | "BINARY"i _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: 'BINARY',
                    params: [ d[4] ],
                };
            }
        %}
    | "VARBINARY"i _ "(" _ unsigned_int _ ")" {%
            d => {
                return {
                    type: 'VARBINARY',
                    params: [ d[4] ],
                };
            }
        %}
    | "TINYBLOB"i {%
            d => {
                return {
                    type: 'TINYBLOB',
                };
            }
        %}
    | "BLOB"i {%
            d => {
                return {
                    type: 'BLOB',
                };
            }
        %}
    | "MEDIUMBLOB"i {%
            d => {
                return {
                    type: 'MEDIUMBLOB',
                };
            }
        %}
    | "LONGBLOB"i {%
            d => {
                return {
                    type: 'LONGBLOB',
                };
            }
        %}
    | "TINYTEXT"i {%
            d => {
                return {
                    type: 'TINYTEXT',
                };
            }
        %}
    | "TEXT"i {%
            d => {
                return {
                    type: 'TEXT',
                };
            }
        %}
    | "MEDIUMTEXT"i {%
            d => {
                return {
                    type: 'MEDIUMTEXT',
                };
            }
        %}
    | "LONGTEXT"i {%
            d => {
                return {
                    type: 'LONGTEXT',
                };
            }
        %}
    | "JSON"i {%
            d => {
                return {
                    type: 'JSON',
                };
            }
        %}
    | "ENUM"i _ "(" _ (string _ ("," _):?):+ _ ")" {%
            d => {
                return {
                    type: 'ENUM',
                    params: d[4].map(i => i[0]),
                };
            }
        %}
    | "SET"i _ "(" _ (string _ ("," _):?):+ _ ")" {%
            d => {
                return {
                    type: 'SET',
                    params: d[4].map(i => i[0]),
                };
            }
        %}

spatial_data_type
    -> "GEOMETRY"i {%
            d => {
                return {
                    type: 'GEOMETRY',
                };
            }
        %}
    | "POINT"i {%
            d => {
                return {
                    type: 'POINT',
                };
            }
        %}
    | "LINESTRING"i {%
            d => {
                return {
                    type: 'LINESTRING',
                };
            }
        %}
    | "POLYGON"i {%
            d => {
                return {
                    type: 'POLYGON',
                };
            }
        %}
    | "MULTIPOINT"i {%
            d => {
                return {
                    type: 'MULTIPOINT',
                };
            }
        %}
    | "MULTILINESTRING"i {%
            d => {
                return {
                    type: 'MULTILINESTRING',
                };
            }
        %}
    | "MULTIPOLYGON"i {%
            d => {
                return {
                    type: 'MULTIPOLYGON',
                };
            }
        %}
    | "GEOMETRYCOLLECTION"i {%
            d => {
                return {
                    type: 'GEOMETRYCOLLECTION',
                };
            }
        %}

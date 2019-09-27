@include "./data_type.ne"

column_def
	-> field_name __ data_type (__ column_def_options):? {%
		d => {
            let allow_null = true;
            let auto_increment = false;
            let comment = '';
            let default_value = null;
            let on_update_current_timestamp = false;
            if (d[3] && d[3][1]) {
                for (let _item of d[3][1]) {
                    const optionInfo = _item;
                    if (optionInfo && optionInfo.key) {
                        switch (optionInfo.key) {
                            case 'NOT NULL': allow_null = !optionInfo.value; break;
                            case 'AUTO_INCREMENT': auto_increment = optionInfo.value; break;
                            case 'COMMENT': comment = optionInfo.value; break;
                            case 'DEFAULT': default_value = optionInfo.value; break;
                            case 'ON UPDATE CURRENT_TIMESTAMP': on_update_current_timestamp = optionInfo.value; break;
                        }
                    }
                }
            }
            const result = {
                type: 'column',
                name: d[0],
                data_type: d[2],
                allow_null,
                comment,
            };
            if (auto_increment) {
                result.auto_increment = auto_increment;
            }
            if (default_value !== null) {
                result.default_value = default_value;
            }
            if (on_update_current_timestamp) {
                result.on_update_current_timestamp = on_update_current_timestamp;
            }
            return result;
        }
	%}

column_def_options
    -> _ column_def_option _ {% d => [d[1]] %}
    | column_def_options __ column_def_option {% d => d[0].concat(d[2]) %}

column_def_option
    -> field_not_null {% d => d[0] %}
    | field_auto_increment {% d => d[0] %}
    | field_comment {% d => d[0] %}
    | field_default_value {% d => d[0] %}
    | field_update_value {% d => d[0] %}

field_not_null
    -> ("NOT NULL"i | "NULL"i) {%
            d => {
                return {
                    key: 'NOT NULL',
                    value: d[0][0] && d[0][0].toUpperCase() === 'NOT NULL',
                };
            }
        %}

field_auto_increment
    -> "AUTO_INCREMENT"i {% 
            d => {
                return {
                    key: 'AUTO_INCREMENT',
                    value: true,
                };
            }
        %}

field_default_value
    -> "DEFAULT"i __ (decimal|string|"CURRENT_TIMESTAMP"i|"NULL"i) {%
            d => {
                return {
                    key: 'DEFAULT',
                    value: d[2][0],
                };
            }
        %}

field_update_value
    -> "ON UPDATE CURRENT_TIMESTAMP"i {%
            d => {
                return {
                    key: 'ON UPDATE CURRENT_TIMESTAMP',
                    value: true,
                };
            }
        %}

field_comment
    -> "COMMENT"i __ string {% 
            d => {
                return {
                    key: 'COMMENT',
                    value: d[2],
                };
            }
        %}

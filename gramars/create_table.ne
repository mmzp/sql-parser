@include "./common.ne"
@include "./column.ne"

create_definition_list
    -> _ create_definition _ {% d => [d[1]] %}
    | create_definition_list _ "," _ create_definition {%
            d => {
                return d[0].concat(d[4]) 
            }
        %}
create_definition
    -> column_def {% d => d[0] %}
    | primary_key {% d => d[0] %}
    | index_key {% d => d[0] %}
    | unique_key {% d => d[0] %}

table_options
    -> _ table_option _ {% d => [d[1]] %}
    | table_options __ table_option {% d => d[0].concat(d[2]) %}
table_option
    -> table_option_engine {% d => ({ key: 'ENGINE', value: d[0] }) %}
    | table_option_auto_increment {% d => ({ key: 'AUTO_INCREMENT', value: d[0] }) %}
    | table_option_charset {% d => ({ key: 'CHARSET', value: d[0] }) %}
    | table_option_collate {% d => ({ key: 'COLLATE', value: d[0] }) %}
    | table_option_comment {% d => ({ key: 'COMMENT', value: d[0] }) %}
table_option_engine
    -> "ENGINE"i _ "=" _ word {% d => d[4] %}
table_option_auto_increment
    -> "AUTO_INCREMENT"i _ "=" _ int {% d => d[4] %}
table_option_charset
    -> ("DEFAULT"i __):? ("CHARSET"i | "CHARACTER SET"i) _ "=" _ word {% d => d[5] %}
table_option_collate
    -> ("DEFAULT"i __):? "COLLATE"i _ "=" _ word {% d => d[5] %}
table_option_comment
    -> "COMMENT"i _ "=" _ string {% d => d[4] %}

primary_key
    -> _ "PRIMARY KEY"i _ "(" key_field_list ")" _ ",":? {%
            d => {
                return {
                    type: 'primary_key',
                    fields: d[4],
                };
            }
        %}
index_key
    -> _ "KEY"i __ field_name _ "(" key_field_list ")" _ ",":? {%
            d => {
                return {
                    type: 'index_key',
                    name: d[3],
                    fields: d[6],
                };
            }
        %}
unique_key
    -> _ "UNIQUE KEY"i __ field_name _ "(" key_field_list ")" _ ",":? {%
            d => {
                return {
                    type: 'unique_key',
                    name: d[3],
                    fields: d[6],
                };
            }
        %}
key_field_list
    -> _ field_name ("(" _ unsigned_int _ ")"):? _ {% d => [d[1]] %}
    | key_field_list _ "," _ field_name {%
            d => {
                return d[0].concat(d[4]);
            }
        %}

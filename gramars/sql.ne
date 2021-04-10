@include "./common.ne"
@include "./create_table.ne"
@include "./comment.ne"

main
	-> blocks {% d => d[0] %}

blocks
	->  block ";":* {% d => d[0] %}
	| blocks ";":+ block ";":* {% d => {
        const result = d[0] || [];
		return result.concat(d[2] || []);
	} %}

block
	-> space {% d => null %}
	| comment:+ {% d => null %}
	| statement:+ {% d => d[0].filter(i => i) %}

statement
	-> comment:* P_CREATE_TABLE comment:* {% d => d[1] %}
    | comment:* P_SET comment:* {% d => null %}

# https://dev.mysql.com/doc/refman/8.0/en/create-table.html
P_CREATE_TABLE
    -> _ "CREATE"i (__ "TEMPORARY"i):? __ "TABLE"i (__ "IF NOT EXISTS"i):? __ table_name _
        "("
        create_definition_list
        ")" table_options:? _ {%
            d => {
                return {
                    type: 'create_table',
                    name: d[7],
                    columns: d[10],
                    options: d[12],
                };
            }
        %}

P_SET
    -> _ "SET"i __ ("NAMES"i) __ set_value _ {% d => null %}

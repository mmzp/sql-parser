@builtin "whitespace.ne"
@builtin "number.ne"
@builtin "string.ne"

table_name
	-> word {% d => d[0] %}
	| "`" word "`" {% d => d[1] %}

field_name
    -> word {% d => d[0] %}
    | "`" word "`" {% d => d[1] %}

string
    -> dqstring|sqstring {% d => d[0] %}

word
    -> [A-Za-z_] {% id %}
    | word [A-Za-z0-9_] {% d => '' + d[0] + d[1] %}
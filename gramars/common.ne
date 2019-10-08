@builtin "whitespace.ne"
@builtin "number.ne"
@builtin "string.ne"

table_name
	-> word {% d => d[0] %}
	| btstring {% d => d[0] %}

field_name
    -> word {% d => d[0] %}
    | btstring {% d => d[0] %}

string
    -> dqstring {% d => d[0] %}
    | sqstring {% d => d[0] %}

word
    -> [A-Za-z_] {% id %}
    | word [A-Za-z0-9_] {% d => '' + d[0] + d[1] %}
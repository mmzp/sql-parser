@builtin "whitespace.ne"
@builtin "number.ne"
@builtin "string.ne"

# 表名
table_name
	-> word {% d => d[0] %}
	| btstring {% d => d[0] %}

# 字段名
field_name
    -> word {% d => d[0] %}
    | btstring {% d => d[0] %}

set_value
    -> word {% d => d[0] %}
    | btstring {% d => d[0] %}

string
    -> dqstring {% d => d[0] %}
    | sqstring {% d => d[0] %}

word
    -> [A-Za-z_] {% id %}
    | word [A-Za-z0-9_] {% d => '' + d[0] + d[1] %}

newline
	-> [ \t\v\f]:* [\r?\n] {% d => null %}

space
	-> [ \t\v\f]:* {% d => null %}

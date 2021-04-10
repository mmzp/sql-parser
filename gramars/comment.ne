@builtin "whitespace.ne"

comment
	-> inline_comment {% d => d[0] %}
	| multiline_comment {% d => d[0] %}
	| newline {% d => null %}
 
inline_comment
    -> space ("#" | "--") [^\n]:* [\n] {% d => {
        return d[2].join('');
    } %}

multiline_comment
    -> space "/*" ([^\*]|[\*] [^\/\*]):* "*/" space {% d => {
		return [].concat(...d[2]).join('');
    } %}
// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "table_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "table_name", "symbols": ["btstring"], "postprocess": d => d[0]},
    {"name": "field_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "field_name", "symbols": ["btstring"], "postprocess": d => d[0]},
    {"name": "string", "symbols": ["dqstring"], "postprocess": d => d[0]},
    {"name": "string", "symbols": ["sqstring"], "postprocess": d => d[0]},
    {"name": "word", "symbols": [/[A-Za-z_]/], "postprocess": id},
    {"name": "word", "symbols": ["word", /[A-Za-z0-9_]/], "postprocess": d => '' + d[0] + d[1]},
    {"name": "data_type", "symbols": ["numeric_type"], "postprocess": d => d[0]},
    {"name": "data_type", "symbols": ["datetime_type"], "postprocess": d => d[0]},
    {"name": "data_type", "symbols": ["string_type"], "postprocess": d => d[0]},
    {"name": "data_type", "symbols": ["spatial_data_type"], "postprocess": d => d[0]},
    {"name": "numeric_type", "symbols": ["integer_type"], "postprocess": d => d[0]},
    {"name": "numeric_type$subexpression$1$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[cC]/, /[iI]/, /[mM]/, /[aA]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "numeric_type$subexpression$1", "symbols": ["numeric_type$subexpression$1$subexpression$1"]},
    {"name": "numeric_type$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[uU]/, /[mM]/, /[eE]/, /[rR]/, /[iI]/, /[cC]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "numeric_type$subexpression$1", "symbols": ["numeric_type$subexpression$1$subexpression$2"]},
    {"name": "numeric_type$ebnf$1$subexpression$1$subexpression$1", "symbols": ["unsigned_int"]},
    {"name": "numeric_type$ebnf$1$subexpression$1$subexpression$1", "symbols": ["unsigned_int", "_", {"literal":","}, "_", "unsigned_int"]},
    {"name": "numeric_type$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "numeric_type$ebnf$1$subexpression$1$subexpression$1", "_", {"literal":")"}, "_"]},
    {"name": "numeric_type$ebnf$1", "symbols": ["numeric_type$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "numeric_type$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "numeric_type", "symbols": ["numeric_type$subexpression$1", "numeric_type$ebnf$1"], "postprocess": 
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
                },
    {"name": "numeric_type$subexpression$2", "symbols": [/[fF]/, /[lL]/, /[oO]/, /[aA]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "numeric_type$ebnf$2$subexpression$1$subexpression$1", "symbols": ["unsigned_int"]},
    {"name": "numeric_type$ebnf$2$subexpression$1$subexpression$1", "symbols": ["unsigned_int", "_", {"literal":","}, "_", "unsigned_int"]},
    {"name": "numeric_type$ebnf$2$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "numeric_type$ebnf$2$subexpression$1$subexpression$1", "_", {"literal":")"}, "_"]},
    {"name": "numeric_type$ebnf$2", "symbols": ["numeric_type$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "numeric_type$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "numeric_type", "symbols": ["numeric_type$subexpression$2", "numeric_type$ebnf$2"], "postprocess": 
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
                },
    {"name": "numeric_type$subexpression$3", "symbols": [/[dD]/, /[oO]/, /[uU]/, /[bB]/, /[lL]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "numeric_type$ebnf$3$subexpression$1$subexpression$1", "symbols": ["unsigned_int"]},
    {"name": "numeric_type$ebnf$3$subexpression$1$subexpression$1", "symbols": ["unsigned_int", "_", {"literal":","}, "_", "unsigned_int"]},
    {"name": "numeric_type$ebnf$3$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "numeric_type$ebnf$3$subexpression$1$subexpression$1", "_", {"literal":")"}]},
    {"name": "numeric_type$ebnf$3", "symbols": ["numeric_type$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "numeric_type$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "numeric_type", "symbols": ["numeric_type$subexpression$3", "numeric_type$ebnf$3"], "postprocess": 
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
                },
    {"name": "numeric_type$subexpression$4", "symbols": [/[bB]/, /[iI]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "numeric_type", "symbols": ["numeric_type$subexpression$4", "_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'BIT',
                params: [ d[4] ],
            };
        }
                },
    {"name": "integer_type$subexpression$1", "symbols": [/[tT]/, /[iI]/, /[nN]/, /[yY]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "integer_type$ebnf$1", "symbols": ["integer_type$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$2$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[sS]/, /[iI]/, /[gG]/, /[nN]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$2$subexpression$1", "symbols": ["__", "integer_type$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$2", "symbols": ["integer_type$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$3$subexpression$1$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/, /[fF]/, /[iI]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$3$subexpression$1", "symbols": ["__", "integer_type$ebnf$3$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$3", "symbols": ["integer_type$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type", "symbols": ["integer_type$subexpression$1", "integer_type$ebnf$1", "integer_type$ebnf$2", "integer_type$ebnf$3"], "postprocess": 
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
                },
    {"name": "integer_type$subexpression$2", "symbols": [/[sS]/, /[mM]/, /[aA]/, /[lL]/, /[lL]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$4$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "integer_type$ebnf$4", "symbols": ["integer_type$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$5$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[sS]/, /[iI]/, /[gG]/, /[nN]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$5$subexpression$1", "symbols": ["__", "integer_type$ebnf$5$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$5", "symbols": ["integer_type$ebnf$5$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$6$subexpression$1$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/, /[fF]/, /[iI]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$6$subexpression$1", "symbols": ["__", "integer_type$ebnf$6$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$6", "symbols": ["integer_type$ebnf$6$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type", "symbols": ["integer_type$subexpression$2", "integer_type$ebnf$4", "integer_type$ebnf$5", "integer_type$ebnf$6"], "postprocess": 
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
                },
    {"name": "integer_type$subexpression$3", "symbols": [/[mM]/, /[eE]/, /[dD]/, /[iI]/, /[uU]/, /[mM]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$7$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "integer_type$ebnf$7", "symbols": ["integer_type$ebnf$7$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$8$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[sS]/, /[iI]/, /[gG]/, /[nN]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$8$subexpression$1", "symbols": ["__", "integer_type$ebnf$8$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$8", "symbols": ["integer_type$ebnf$8$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$9$subexpression$1$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/, /[fF]/, /[iI]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$9$subexpression$1", "symbols": ["__", "integer_type$ebnf$9$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$9", "symbols": ["integer_type$ebnf$9$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$9", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type", "symbols": ["integer_type$subexpression$3", "integer_type$ebnf$7", "integer_type$ebnf$8", "integer_type$ebnf$9"], "postprocess": 
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
                },
    {"name": "integer_type$subexpression$4", "symbols": [/[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$10$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "integer_type$ebnf$10", "symbols": ["integer_type$ebnf$10$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$10", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$11$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[sS]/, /[iI]/, /[gG]/, /[nN]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$11$subexpression$1", "symbols": ["__", "integer_type$ebnf$11$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$11", "symbols": ["integer_type$ebnf$11$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$11", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$12$subexpression$1$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/, /[fF]/, /[iI]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$12$subexpression$1", "symbols": ["__", "integer_type$ebnf$12$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$12", "symbols": ["integer_type$ebnf$12$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$12", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type", "symbols": ["integer_type$subexpression$4", "integer_type$ebnf$10", "integer_type$ebnf$11", "integer_type$ebnf$12"], "postprocess": 
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
                },
    {"name": "integer_type$subexpression$5", "symbols": [/[bB]/, /[iI]/, /[gG]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$13$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "integer_type$ebnf$13", "symbols": ["integer_type$ebnf$13$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$13", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$14$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[sS]/, /[iI]/, /[gG]/, /[nN]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$14$subexpression$1", "symbols": ["__", "integer_type$ebnf$14$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$14", "symbols": ["integer_type$ebnf$14$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$14", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type$ebnf$15$subexpression$1$subexpression$1", "symbols": [/[zZ]/, /[eE]/, /[rR]/, /[oO]/, /[fF]/, /[iI]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "integer_type$ebnf$15$subexpression$1", "symbols": ["__", "integer_type$ebnf$15$subexpression$1$subexpression$1"]},
    {"name": "integer_type$ebnf$15", "symbols": ["integer_type$ebnf$15$subexpression$1"], "postprocess": id},
    {"name": "integer_type$ebnf$15", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer_type", "symbols": ["integer_type$subexpression$5", "integer_type$ebnf$13", "integer_type$ebnf$14", "integer_type$ebnf$15"], "postprocess": 
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
                },
    {"name": "datetime_type$subexpression$1", "symbols": [/[dD]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "datetime_type", "symbols": ["datetime_type$subexpression$1"], "postprocess": 
        d => {
            const result = {
                type: 'DATE',
            };
            return result;
        }
                },
    {"name": "datetime_type$subexpression$2", "symbols": [/[dD]/, /[aA]/, /[tT]/, /[eE]/, /[tT]/, /[iI]/, /[mM]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "datetime_type$ebnf$1$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "datetime_type$ebnf$1", "symbols": ["datetime_type$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "datetime_type$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "datetime_type", "symbols": ["datetime_type$subexpression$2", "datetime_type$ebnf$1"], "postprocess": 
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
                },
    {"name": "datetime_type$subexpression$3", "symbols": [/[tT]/, /[iI]/, /[mM]/, /[eE]/, /[sS]/, /[tT]/, /[aA]/, /[mM]/, /[pP]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "datetime_type$ebnf$2$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "datetime_type$ebnf$2", "symbols": ["datetime_type$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "datetime_type$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "datetime_type", "symbols": ["datetime_type$subexpression$3", "datetime_type$ebnf$2"], "postprocess": 
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
                },
    {"name": "datetime_type$subexpression$4", "symbols": [/[tT]/, /[iI]/, /[mM]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "datetime_type$ebnf$3$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "datetime_type$ebnf$3", "symbols": ["datetime_type$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "datetime_type$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "datetime_type", "symbols": ["datetime_type$subexpression$4", "datetime_type$ebnf$3"], "postprocess": 
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
                },
    {"name": "datetime_type$subexpression$5", "symbols": [/[yY]/, /[eE]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "datetime_type$ebnf$4$subexpression$1", "symbols": ["_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}, "_"]},
    {"name": "datetime_type$ebnf$4", "symbols": ["datetime_type$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "datetime_type$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "datetime_type", "symbols": ["datetime_type$subexpression$5", "datetime_type$ebnf$4"], "postprocess": 
        d => {
            const result = {
                type: 'YEAR',
            };
            return result;
        }
                },
    {"name": "string_type$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$1", "_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'CHAR',
                params: [ d[4] ],
            };
        }
                },
    {"name": "string_type$subexpression$2", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$2", "_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'VARCHAR',
                params: [ d[4] ],
            };
        }
                },
    {"name": "string_type$subexpression$3", "symbols": [/[bB]/, /[iI]/, /[nN]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$3", "_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'BINARY',
                params: [ d[4] ],
            };
        }
                },
    {"name": "string_type$subexpression$4", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[bB]/, /[iI]/, /[nN]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$4", "_", {"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'VARBINARY',
                params: [ d[4] ],
            };
        }
                },
    {"name": "string_type$subexpression$5", "symbols": [/[tT]/, /[iI]/, /[nN]/, /[yY]/, /[bB]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$5"], "postprocess": 
        d => {
            return {
                type: 'TINYBLOB',
            };
        }
                },
    {"name": "string_type$subexpression$6", "symbols": [/[bB]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$6"], "postprocess": 
        d => {
            return {
                type: 'BLOB',
            };
        }
                },
    {"name": "string_type$subexpression$7", "symbols": [/[mM]/, /[eE]/, /[dD]/, /[iI]/, /[uU]/, /[mM]/, /[bB]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$7"], "postprocess": 
        d => {
            return {
                type: 'MEDIUMBLOB',
            };
        }
                },
    {"name": "string_type$subexpression$8", "symbols": [/[lL]/, /[oO]/, /[nN]/, /[gG]/, /[bB]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$8"], "postprocess": 
        d => {
            return {
                type: 'LONGBLOB',
            };
        }
                },
    {"name": "string_type$subexpression$9", "symbols": [/[tT]/, /[iI]/, /[nN]/, /[yY]/, /[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$9"], "postprocess": 
        d => {
            return {
                type: 'TINYTEXT',
            };
        }
                },
    {"name": "string_type$subexpression$10", "symbols": [/[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$10"], "postprocess": 
        d => {
            return {
                type: 'TEXT',
            };
        }
                },
    {"name": "string_type$subexpression$11", "symbols": [/[mM]/, /[eE]/, /[dD]/, /[iI]/, /[uU]/, /[mM]/, /[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$11"], "postprocess": 
        d => {
            return {
                type: 'MEDIUMTEXT',
            };
        }
                },
    {"name": "string_type$subexpression$12", "symbols": [/[lL]/, /[oO]/, /[nN]/, /[gG]/, /[tT]/, /[eE]/, /[xX]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$12"], "postprocess": 
        d => {
            return {
                type: 'LONGTEXT',
            };
        }
                },
    {"name": "string_type$subexpression$13", "symbols": [/[jJ]/, /[sS]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type", "symbols": ["string_type$subexpression$13"], "postprocess": 
        d => {
            return {
                type: 'JSON',
            };
        }
                },
    {"name": "string_type$subexpression$14", "symbols": [/[eE]/, /[nN]/, /[uU]/, /[mM]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_"]},
    {"name": "string_type$ebnf$1$subexpression$1$ebnf$1", "symbols": ["string_type$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "string_type$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "string_type$ebnf$1$subexpression$1", "symbols": ["string", "_", "string_type$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "string_type$ebnf$1", "symbols": ["string_type$ebnf$1$subexpression$1"]},
    {"name": "string_type$ebnf$1$subexpression$2$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_"]},
    {"name": "string_type$ebnf$1$subexpression$2$ebnf$1", "symbols": ["string_type$ebnf$1$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "string_type$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "string_type$ebnf$1$subexpression$2", "symbols": ["string", "_", "string_type$ebnf$1$subexpression$2$ebnf$1"]},
    {"name": "string_type$ebnf$1", "symbols": ["string_type$ebnf$1", "string_type$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string_type", "symbols": ["string_type$subexpression$14", "_", {"literal":"("}, "_", "string_type$ebnf$1", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'ENUM',
                params: d[4].map(i => i[0]),
            };
        }
                },
    {"name": "string_type$subexpression$15", "symbols": [/[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "string_type$ebnf$2$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_"]},
    {"name": "string_type$ebnf$2$subexpression$1$ebnf$1", "symbols": ["string_type$ebnf$2$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "string_type$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "string_type$ebnf$2$subexpression$1", "symbols": ["string", "_", "string_type$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "string_type$ebnf$2", "symbols": ["string_type$ebnf$2$subexpression$1"]},
    {"name": "string_type$ebnf$2$subexpression$2$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_"]},
    {"name": "string_type$ebnf$2$subexpression$2$ebnf$1", "symbols": ["string_type$ebnf$2$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "string_type$ebnf$2$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "string_type$ebnf$2$subexpression$2", "symbols": ["string", "_", "string_type$ebnf$2$subexpression$2$ebnf$1"]},
    {"name": "string_type$ebnf$2", "symbols": ["string_type$ebnf$2", "string_type$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string_type", "symbols": ["string_type$subexpression$15", "_", {"literal":"("}, "_", "string_type$ebnf$2", "_", {"literal":")"}], "postprocess": 
        d => {
            return {
                type: 'SET',
                params: d[4].map(i => i[0]),
            };
        }
                },
    {"name": "spatial_data_type$subexpression$1", "symbols": [/[gG]/, /[eE]/, /[oO]/, /[mM]/, /[eE]/, /[tT]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$1"], "postprocess": 
        d => {
            return {
                type: 'GEOMETRY',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$2", "symbols": [/[pP]/, /[oO]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$2"], "postprocess": 
        d => {
            return {
                type: 'POINT',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$3", "symbols": [/[lL]/, /[iI]/, /[nN]/, /[eE]/, /[sS]/, /[tT]/, /[rR]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$3"], "postprocess": 
        d => {
            return {
                type: 'LINESTRING',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$4", "symbols": [/[pP]/, /[oO]/, /[lL]/, /[yY]/, /[gG]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$4"], "postprocess": 
        d => {
            return {
                type: 'POLYGON',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$5", "symbols": [/[mM]/, /[uU]/, /[lL]/, /[tT]/, /[iI]/, /[pP]/, /[oO]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$5"], "postprocess": 
        d => {
            return {
                type: 'MULTIPOINT',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$6", "symbols": [/[mM]/, /[uU]/, /[lL]/, /[tT]/, /[iI]/, /[lL]/, /[iI]/, /[nN]/, /[eE]/, /[sS]/, /[tT]/, /[rR]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$6"], "postprocess": 
        d => {
            return {
                type: 'MULTILINESTRING',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$7", "symbols": [/[mM]/, /[uU]/, /[lL]/, /[tT]/, /[iI]/, /[pP]/, /[oO]/, /[lL]/, /[yY]/, /[gG]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$7"], "postprocess": 
        d => {
            return {
                type: 'MULTIPOLYGON',
            };
        }
                },
    {"name": "spatial_data_type$subexpression$8", "symbols": [/[gG]/, /[eE]/, /[oO]/, /[mM]/, /[eE]/, /[tT]/, /[rR]/, /[yY]/, /[cC]/, /[oO]/, /[lL]/, /[lL]/, /[eE]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "spatial_data_type", "symbols": ["spatial_data_type$subexpression$8"], "postprocess": 
        d => {
            return {
                type: 'GEOMETRYCOLLECTION',
            };
        }
                },
    {"name": "column_def$ebnf$1$subexpression$1", "symbols": ["__", "column_def_options"]},
    {"name": "column_def$ebnf$1", "symbols": ["column_def$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "column_def$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "column_def", "symbols": ["field_name", "__", "data_type", "column_def$ebnf$1"], "postprocess": 
        d => {
                    let allow_null = true;
                    let auto_increment = false;
                    let comment = '';
                    let default_value = null;
                    let on_update_current_timestamp = false;
                    let charset = '';
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
                                    case 'CHARSET': charset = optionInfo.value; break;
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
                    if (charset) {
                        result.charset = charset;
                    }
                    return result;
                }
        	},
    {"name": "column_def_options", "symbols": ["_", "column_def_option", "_"], "postprocess": d => [d[1]]},
    {"name": "column_def_options", "symbols": ["column_def_options", "__", "column_def_option"], "postprocess": d => d[0].concat(d[2])},
    {"name": "column_def_option", "symbols": ["field_not_null"], "postprocess": d => d[0]},
    {"name": "column_def_option", "symbols": ["field_auto_increment"], "postprocess": d => d[0]},
    {"name": "column_def_option", "symbols": ["field_comment"], "postprocess": d => d[0]},
    {"name": "column_def_option", "symbols": ["field_default_value"], "postprocess": d => d[0]},
    {"name": "column_def_option", "symbols": ["field_update_value"], "postprocess": d => d[0]},
    {"name": "column_def_option", "symbols": ["field_charset"], "postprocess": d => d[0]},
    {"name": "field_not_null$subexpression$1$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[tT]/, {"literal":" "}, /[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_not_null$subexpression$1", "symbols": ["field_not_null$subexpression$1$subexpression$1"]},
    {"name": "field_not_null$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_not_null$subexpression$1", "symbols": ["field_not_null$subexpression$1$subexpression$2"]},
    {"name": "field_not_null", "symbols": ["field_not_null$subexpression$1"], "postprocess": 
        d => {
            return {
                key: 'NOT NULL',
                value: d[0][0] && d[0][0].toUpperCase() === 'NOT NULL',
            };
        }
                },
    {"name": "field_auto_increment$subexpression$1", "symbols": [/[aA]/, /[uU]/, /[tT]/, /[oO]/, {"literal":"_"}, /[iI]/, /[nN]/, /[cC]/, /[rR]/, /[eE]/, /[mM]/, /[eE]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_auto_increment", "symbols": ["field_auto_increment$subexpression$1"], "postprocess":  
        d => {
            return {
                key: 'AUTO_INCREMENT',
                value: true,
            };
        }
                },
    {"name": "field_default_value$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_default_value$subexpression$2", "symbols": ["decimal"]},
    {"name": "field_default_value$subexpression$2", "symbols": ["string"]},
    {"name": "field_default_value$subexpression$2$subexpression$1", "symbols": [/[cC]/, /[uU]/, /[rR]/, /[rR]/, /[eE]/, /[nN]/, /[tT]/, {"literal":"_"}, /[tT]/, /[iI]/, /[mM]/, /[eE]/, /[sS]/, /[tT]/, /[aA]/, /[mM]/, /[pP]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_default_value$subexpression$2", "symbols": ["field_default_value$subexpression$2$subexpression$1"]},
    {"name": "field_default_value$subexpression$2$subexpression$2", "symbols": [/[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_default_value$subexpression$2", "symbols": ["field_default_value$subexpression$2$subexpression$2"]},
    {"name": "field_default_value", "symbols": ["field_default_value$subexpression$1", "__", "field_default_value$subexpression$2"], "postprocess": 
        d => {
            return {
                key: 'DEFAULT',
                value: d[2][0],
            };
        }
                },
    {"name": "field_update_value$subexpression$1", "symbols": [/[oO]/, /[nN]/, {"literal":" "}, /[uU]/, /[pP]/, /[dD]/, /[aA]/, /[tT]/, /[eE]/, {"literal":" "}, /[cC]/, /[uU]/, /[rR]/, /[rR]/, /[eE]/, /[nN]/, /[tT]/, {"literal":"_"}, /[tT]/, /[iI]/, /[mM]/, /[eE]/, /[sS]/, /[tT]/, /[aA]/, /[mM]/, /[pP]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_update_value", "symbols": ["field_update_value$subexpression$1"], "postprocess": 
        d => {
            return {
                key: 'ON UPDATE CURRENT_TIMESTAMP',
                value: true,
            };
        }
                },
    {"name": "field_charset$subexpression$1$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/, /[aA]/, /[cC]/, /[tT]/, /[eE]/, /[rR]/, {"literal":" "}, /[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_charset$subexpression$1", "symbols": ["field_charset$subexpression$1$subexpression$1"]},
    {"name": "field_charset$subexpression$1$subexpression$2", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/, /[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_charset$subexpression$1", "symbols": ["field_charset$subexpression$1$subexpression$2"]},
    {"name": "field_charset", "symbols": ["field_charset$subexpression$1", "__", "word"], "postprocess": 
        d => {
            return {
                key: 'CHARSET',
                value: d[2],
            };
        }
                },
    {"name": "field_comment$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[mM]/, /[mM]/, /[eE]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "field_comment", "symbols": ["field_comment$subexpression$1", "__", "string"], "postprocess":  
        d => {
            return {
                key: 'COMMENT',
                value: d[2],
            };
        }
                },
    {"name": "create_definition_list", "symbols": ["_", "create_definition", "_"], "postprocess": d => [d[1]]},
    {"name": "create_definition_list", "symbols": ["create_definition_list", "_", {"literal":","}, "_", "create_definition"], "postprocess": 
        d => {
            return d[0].concat(d[4]) 
        }
                },
    {"name": "create_definition", "symbols": ["column_def"], "postprocess": d => d[0]},
    {"name": "create_definition", "symbols": ["primary_key"], "postprocess": d => d[0]},
    {"name": "create_definition", "symbols": ["index_key"], "postprocess": d => d[0]},
    {"name": "create_definition", "symbols": ["unique_key"], "postprocess": d => d[0]},
    {"name": "table_options", "symbols": ["_", "table_option", "_"], "postprocess": d => [d[1]]},
    {"name": "table_options", "symbols": ["table_options", "__", "table_option"], "postprocess": d => d[0].concat(d[2])},
    {"name": "table_option", "symbols": ["table_option_engine"], "postprocess": d => ({ key: 'ENGINE', value: d[0] })},
    {"name": "table_option", "symbols": ["table_option_auto_increment"], "postprocess": d => ({ key: 'AUTO_INCREMENT', value: d[0] })},
    {"name": "table_option", "symbols": ["table_option_charset"], "postprocess": d => ({ key: 'CHARSET', value: d[0] })},
    {"name": "table_option", "symbols": ["table_option_collate"], "postprocess": d => ({ key: 'COLLATE', value: d[0] })},
    {"name": "table_option", "symbols": ["table_option_comment"], "postprocess": d => ({ key: 'COMMENT', value: d[0] })},
    {"name": "table_option_engine$subexpression$1", "symbols": [/[eE]/, /[nN]/, /[gG]/, /[iI]/, /[nN]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_engine", "symbols": ["table_option_engine$subexpression$1", "_", {"literal":"="}, "_", "word"], "postprocess": d => d[4]},
    {"name": "table_option_auto_increment$subexpression$1", "symbols": [/[aA]/, /[uU]/, /[tT]/, /[oO]/, {"literal":"_"}, /[iI]/, /[nN]/, /[cC]/, /[rR]/, /[eE]/, /[mM]/, /[eE]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_auto_increment", "symbols": ["table_option_auto_increment$subexpression$1", "_", {"literal":"="}, "_", "int"], "postprocess": d => d[4]},
    {"name": "table_option_charset$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_charset$ebnf$1$subexpression$1", "symbols": ["table_option_charset$ebnf$1$subexpression$1$subexpression$1", "__"]},
    {"name": "table_option_charset$ebnf$1", "symbols": ["table_option_charset$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "table_option_charset$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "table_option_charset$subexpression$1$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/, /[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_charset$subexpression$1", "symbols": ["table_option_charset$subexpression$1$subexpression$1"]},
    {"name": "table_option_charset$subexpression$1$subexpression$2", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/, /[aA]/, /[cC]/, /[tT]/, /[eE]/, /[rR]/, {"literal":" "}, /[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_charset$subexpression$1", "symbols": ["table_option_charset$subexpression$1$subexpression$2"]},
    {"name": "table_option_charset", "symbols": ["table_option_charset$ebnf$1", "table_option_charset$subexpression$1", "_", {"literal":"="}, "_", "word"], "postprocess": d => d[5]},
    {"name": "table_option_collate$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_collate$ebnf$1$subexpression$1", "symbols": ["table_option_collate$ebnf$1$subexpression$1$subexpression$1", "__"]},
    {"name": "table_option_collate$ebnf$1", "symbols": ["table_option_collate$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "table_option_collate$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "table_option_collate$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[lL]/, /[lL]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_collate", "symbols": ["table_option_collate$ebnf$1", "table_option_collate$subexpression$1", "_", {"literal":"="}, "_", "word"], "postprocess": d => d[5]},
    {"name": "table_option_comment$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[mM]/, /[mM]/, /[eE]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "table_option_comment", "symbols": ["table_option_comment$subexpression$1", "_", {"literal":"="}, "_", "string"], "postprocess": d => d[4]},
    {"name": "index_type$subexpression$1", "symbols": [/[uU]/, /[sS]/, /[iI]/, /[nN]/, /[gG]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "index_type$subexpression$2$subexpression$1", "symbols": [/[bB]/, /[tT]/, /[rR]/, /[eE]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "index_type$subexpression$2", "symbols": ["index_type$subexpression$2$subexpression$1"]},
    {"name": "index_type$subexpression$2$subexpression$2", "symbols": [/[hH]/, /[aA]/, /[sS]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "index_type$subexpression$2", "symbols": ["index_type$subexpression$2$subexpression$2"]},
    {"name": "index_type", "symbols": ["_", "index_type$subexpression$1", "_", "index_type$subexpression$2", "_"], "postprocess": d => d[3]},
    {"name": "primary_key$subexpression$1", "symbols": [/[pP]/, /[rR]/, /[iI]/, /[mM]/, /[aA]/, /[rR]/, /[yY]/, {"literal":" "}, /[kK]/, /[eE]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "primary_key$ebnf$1", "symbols": ["index_type"], "postprocess": id},
    {"name": "primary_key$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "primary_key$ebnf$2", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "primary_key$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "primary_key", "symbols": ["_", "primary_key$subexpression$1", "_", {"literal":"("}, "key_field_list", {"literal":")"}, "primary_key$ebnf$1", "_", "primary_key$ebnf$2"], "postprocess": 
        d => {
            return {
                type: 'primary_key',
                fields: d[4],
            };
        }
                },
    {"name": "index_key$subexpression$1", "symbols": [/[kK]/, /[eE]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "index_key$ebnf$1", "symbols": ["index_type"], "postprocess": id},
    {"name": "index_key$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "index_key$ebnf$2", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "index_key$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "index_key", "symbols": ["_", "index_key$subexpression$1", "__", "field_name", "_", {"literal":"("}, "key_field_list", {"literal":")"}, "index_key$ebnf$1", "_", "index_key$ebnf$2"], "postprocess": 
        d => {
            return {
                type: 'index_key',
                name: d[3],
                fields: d[6],
            };
        }
                },
    {"name": "unique_key$subexpression$1", "symbols": [/[uU]/, /[nN]/, /[iI]/, /[qQ]/, /[uU]/, /[eE]/, {"literal":" "}, /[kK]/, /[eE]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "unique_key$ebnf$1", "symbols": ["index_type"], "postprocess": id},
    {"name": "unique_key$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unique_key$ebnf$2", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "unique_key$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unique_key", "symbols": ["_", "unique_key$subexpression$1", "__", "field_name", "_", {"literal":"("}, "key_field_list", {"literal":")"}, "unique_key$ebnf$1", "_", "unique_key$ebnf$2"], "postprocess": 
        d => {
            return {
                type: 'unique_key',
                name: d[3],
                fields: d[6],
            };
        }
                },
    {"name": "key_field_list$ebnf$1$subexpression$1", "symbols": [{"literal":"("}, "_", "unsigned_int", "_", {"literal":")"}]},
    {"name": "key_field_list$ebnf$1", "symbols": ["key_field_list$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "key_field_list$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "key_field_list", "symbols": ["_", "field_name", "key_field_list$ebnf$1", "_"], "postprocess": d => [d[1]]},
    {"name": "key_field_list", "symbols": ["key_field_list", "_", {"literal":","}, "_", "field_name"], "postprocess": 
        d => {
            return d[0].concat(d[4]);
        }
                },
    {"name": "main$ebnf$1", "symbols": ["P_CREATE_TABLE"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "P_CREATE_TABLE"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"], "postprocess": d => d[0]},
    {"name": "P_CREATE_TABLE$subexpression$1", "symbols": [/[cC]/, /[rR]/, /[eE]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "P_CREATE_TABLE$ebnf$1$subexpression$1$subexpression$1", "symbols": [/[tT]/, /[eE]/, /[mM]/, /[pP]/, /[oO]/, /[rR]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "P_CREATE_TABLE$ebnf$1$subexpression$1", "symbols": ["__", "P_CREATE_TABLE$ebnf$1$subexpression$1$subexpression$1"]},
    {"name": "P_CREATE_TABLE$ebnf$1", "symbols": ["P_CREATE_TABLE$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "P_CREATE_TABLE$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "P_CREATE_TABLE$subexpression$2", "symbols": [/[tT]/, /[aA]/, /[bB]/, /[lL]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "P_CREATE_TABLE$ebnf$2$subexpression$1$subexpression$1", "symbols": [/[iI]/, /[fF]/, {"literal":" "}, /[nN]/, /[oO]/, /[tT]/, {"literal":" "}, /[eE]/, /[xX]/, /[iI]/, /[sS]/, /[tT]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "P_CREATE_TABLE$ebnf$2$subexpression$1", "symbols": ["__", "P_CREATE_TABLE$ebnf$2$subexpression$1$subexpression$1"]},
    {"name": "P_CREATE_TABLE$ebnf$2", "symbols": ["P_CREATE_TABLE$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "P_CREATE_TABLE$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "P_CREATE_TABLE$ebnf$3", "symbols": ["table_options"], "postprocess": id},
    {"name": "P_CREATE_TABLE$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "P_CREATE_TABLE$ebnf$4", "symbols": []},
    {"name": "P_CREATE_TABLE$ebnf$4", "symbols": ["P_CREATE_TABLE$ebnf$4", {"literal":";"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "P_CREATE_TABLE", "symbols": ["_", "P_CREATE_TABLE$subexpression$1", "P_CREATE_TABLE$ebnf$1", "__", "P_CREATE_TABLE$subexpression$2", "P_CREATE_TABLE$ebnf$2", "__", "table_name", "_", {"literal":"("}, "create_definition_list", {"literal":")"}, "P_CREATE_TABLE$ebnf$3", "_", "P_CREATE_TABLE$ebnf$4", "_"], "postprocess": 
        d => {
            return {
                type: 'create_table',
                name: d[7],
                columns: d[10],
                options: d[12],
            };
        }
                }
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();

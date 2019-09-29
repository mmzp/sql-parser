const nearley = require('nearley');
const grammar = require('./grammar.js');

const sqlParser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

module.exports = {
    parse(sqlContent) {
        sqlParser.feed(sqlContent);
        return sqlParser.results[0];
    },
};

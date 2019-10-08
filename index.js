const nearley = require('nearley');
const grammar = require('./grammar.js');

module.exports = {
    parse(sqlContent) {
        const sqlParser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        sqlParser.feed(sqlContent);
        return sqlParser.results[0];
    },
};

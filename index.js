const nearley = require('nearley');
const grammar = require('./grammar.js');
const fs = require('fs');
const { dump } = require('dumper.js');

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const content = fs.readFileSync('./sql.txt').toString();
try {
    parser.feed(content);
    dump(parser.results[0]);
    console.log('result count: ', parser.results[0].length);
} catch (err) {
    const lines = err.message.split('\n');
    console.log(lines.slice(0, 15).join('\n'));
}

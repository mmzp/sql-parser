const sqlParser = require('./index');
const fs = require('fs');
const { dump } = require('dumper.js');

(async () => {
    const content = fs.readFileSync('./sql.txt').toString();
    try {
        const result = sqlParser.parse(content);
        // dump(result);
        console.log(JSON.stringify(result, null, '    '));
        console.log('result count: ', result.length);
    } catch (err) {
        const lines = err.message.split('\n');
        console.log(lines.slice(0, 15).join('\n'));
    }
})();

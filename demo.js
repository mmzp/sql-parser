const sqlParser = require('./index');
const fs = require('fs');

(async () => {
    const content = fs.readFileSync('./sql.txt').toString();
    try {
        const result = sqlParser.parse(content);
        console.log(JSON.stringify(result, null, '    '));
        console.log('result count: ', result.length);
    } catch (err) {
        console.log('err: ', err.message.substring(0, 200));
    }
})();

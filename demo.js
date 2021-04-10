const sqlParser = require('./index');
const fs = require('fs');

(async () => {
    // const sqlFilename = './sql.txt';
    const sqlFilename = './db.sql';
    const content = fs.readFileSync(sqlFilename).toString();
    try {
        const result = sqlParser.parse(content);
        console.log(JSON.stringify(result, null, '    '));
        console.log('result count: ', result.length);
    } catch (err) {
        console.log('err: ', err.message.substring(0, 200));
    }
})();

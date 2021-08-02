# sql-parser

解析 mysql create table 语句，用于通过建表语句生成 model 代码文件。

```
yarn install @mmzp/sql-parser
yarn dev
```

或

```
npm i @mmzp/sql-parser
npm run dev
```

```
// 构建支持浏览器环境的代码文件，浏览器端直接引用构建出来的 browser/sql-parser.min.js 文件即可，browser/demo.html 为调用示例

yarn browser
或
npm run browser
```

[在线示例 https://mmzp.github.io/sql-parser/browser/demo.html](https://mmzp.github.io/sql-parser/browser/demo.html)

---

解析结果如下：

```json
[
    {
        "type": "create_table",
        "name": "tbl1",
        "columns": [
            {
                "type": "column",
                "name": "id",
                "data_type": {
                    "type": "INT",
                    "params": [10],
                    "unsigned": true
                },
                "allow_null": false,
                "comment": "",
                "auto_increment": true
            },
            {
                "type": "column",
                "name": "name",
                "data_type": {
                    "type": "VARCHAR",
                    "params": [50]
                },
                "allow_null": true,
                "comment": "",
                "default_value": ""
            },
            {
                "type": "column",
                "name": "weight",
                "data_type": {
                    "type": "DECIMAL",
                    "params": [5, 2]
                },
                "allow_null": true,
                "comment": ""
            },
            {
                "type": "column",
                "name": "roles_BIT",
                "data_type": {
                    "type": "BIT",
                    "params": [10]
                },
                "allow_null": true,
                "comment": ""
            },
            {
                "type": "column",
                "name": "size",
                "data_type": {
                    "type": "ENUM",
                    "params": ["x-small", "small", "medium", "large", "x-large"]
                },
                "allow_null": true,
                "comment": ["尺寸"]
            },
            {
                "type": "column",
                "name": "type",
                "data_type": {
                    "type": "TINYINT",
                    "params": [3],
                    "unsigned": true
                },
                "allow_null": false,
                "comment": "客户端类型，0：未知；1：微信小程序；",
                "default_value": 0
            },
            {
                "type": "column",
                "name": "t",
                "data_type": {
                    "type": "TIMESTAMP"
                },
                "allow_null": false,
                "comment": "",
                "default_value": "CURRENT_TIMESTAMP"
            },
            {
                "type": "column",
                "name": "url",
                "data_type": {
                    "type": "VARCHAR",
                    "params": [255]
                },
                "allow_null": false,
                "comment": "地址",
                "default_value": "",
                "charset": "utf8"
            },
            {
                "type": "primary_key",
                "fields": ["id"]
            },
            {
                "type": "unique_key",
                "name": "uniq_name",
                "fields": ["name"]
            },
            {
                "type": "index_key",
                "name": "idx_app_id",
                "fields": ["app_id", "id"]
            }
        ],
        "options": [
            {
                "key": "ENGINE",
                "value": "InnoDB"
            },
            {
                "key": "AUTO_INCREMENT",
                "value": 2
            },
            {
                "key": "CHARSET",
                "value": "utf8mb4"
            },
            {
                "key": "COMMENT",
                "value": "应用表"
            }
        ]
    }
]
```

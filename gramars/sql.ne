@include "./common.ne"
@include "./create_table.ne"


main
    -> P_CREATE_TABLE:+ {% d => d[0] %}

# https://dev.mysql.com/doc/refman/8.0/en/create-table.html
P_CREATE_TABLE
    -> _ "CREATE"i (__ "TEMPORARY"i):? __ "TABLE"i (__ "IF NOT EXISTS"i):? __ table_name _
        "("
        create_definition_list
        ")" table_options:? _ ";":* _ {%
            d => {
                return {
                    type: 'create_table',
                    name: d[7],
                    columns: d[10],
                    options: d[12],
                };
            }
        %}



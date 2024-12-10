"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[42636],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),i=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,c(c({ref:n},u),{},{components:t})):a.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=t(58168),o=(t(96540),t(15680));const r={},c="Schema evolution",s={unversionedId:"concept/schema-evolution",id:"concept/schema-evolution",title:"Schema evolution",description:"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations.",source:"@site/docs/concept/schema-evolution.md",sourceDirName:"concept",slug:"/concept/schema-evolution",permalink:"/docs/concept/schema-evolution",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/concept/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Event Listener",permalink:"/docs/concept/event-listener"},next:{title:"Source",permalink:"/docs/connector-v2/source"}},l={},i=[{value:"Supported connectors",id:"supported-connectors",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Enable schema evolution",id:"enable-schema-evolution",level:2},{value:"Examples",id:"examples",level:2},{value:"Mysql-CDC -&gt; Jdbc-Mysql",id:"mysql-cdc---jdbc-mysql",level:3},{value:"Oracle-cdc -&gt; Jdbc-Oracle",id:"oracle-cdc---jdbc-oracle",level:3},{value:"Oracle-cdc -&gt; Jdbc-Mysql",id:"oracle-cdc---jdbc-mysql",level:3},{value:"Mysql-cdc -&gt; StarRocks",id:"mysql-cdc---starrocks",level:3}],u={toc:i},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"schema-evolution"},"Schema evolution"),(0,o.yg)("p",null,"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations.\nNow we only support the operation about ",(0,o.yg)("inlineCode",{parentName:"p"},"add column"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"drop column"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"rename column")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"modify column")," of the table in CDC source. This feature is only support zeta engine at now. "),(0,o.yg)("h2",{id:"supported-connectors"},"Supported connectors"),(0,o.yg)("h3",{id:"source"},"Source"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/MySQL-CDC.md"},"Mysql-CDC"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/Oracle-CDC.md"},"Oracle-CDC")),(0,o.yg)("h3",{id:"sink"},"Sink"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Mysql"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Oracle"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/StarRocks.md"},"StarRocks"),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Paimon.md#Schema-Evolution"},"Paimon")),(0,o.yg)("p",null,"Note: The schema evolution is not support the transform at now. The schema evolution of different types of databases\uff08Oracle-CDC -> Jdbc-Mysql\uff09is currently not supported the default value of the column in ddl."),(0,o.yg)("p",null,"When you use the Oracle-CDC\uff0cyou can not use the username named ",(0,o.yg)("inlineCode",{parentName:"p"},"SYS")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"SYSTEM")," to modify the table schema, otherwise the ddl event will be filtered out which can lead to the schema evolution not working.\nOtherwise, If your table name start with ",(0,o.yg)("inlineCode",{parentName:"p"},"ORA_TEMP_")," will also has the same problem."),(0,o.yg)("h2",{id:"enable-schema-evolution"},"Enable schema evolution"),(0,o.yg)("p",null,"Schema evolution is disabled by default in CDC source. You need configure ",(0,o.yg)("inlineCode",{parentName:"p"},"debezium.include.schema.changes = true")," which is only supported in CDC to enable it. When you use Oracle-CDC with schema-evolution enabled, you must specify ",(0,o.yg)("inlineCode",{parentName:"p"},"redo_log_catalog")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"log.mining.strategy")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"debezium")," attribute."),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("h3",{id:"mysql-cdc---jdbc-mysql"},"Mysql-CDC -> Jdbc-Mysql"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    debezium = {\n      include.schema.changes = true\n    }\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    database = shop\n    table = mysql_cdc_e2e_sink_table_with_schema_change_exactly_once\n    primary_keys = ["id"]\n    is_exactly_once = true\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n  }\n}\n')),(0,o.yg)("h3",{id:"oracle-cdc---jdbc-oracle"},"Oracle-cdc -> Jdbc-Oracle"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    debezium {\n        include.schema.changes = true\n        log.mining.strategy = redo_log_catalog\n    }\n  }\n}\n\nsink {\n    Jdbc {\n      plugin_input = "customers"\n      driver = "oracle.jdbc.driver.OracleDriver"\n      url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n      user = "dbzuser"\n      password = "dbz"\n      generate_sink_sql = true\n      database = "ORCLCDB"\n      table = "DEBEZIUM.FULL_TYPES_SINK"\n      batch_size = 1\n      primary_keys = ["ID"]\n      connection.pool.size = 1\n    }\n}\n')),(0,o.yg)("h3",{id:"oracle-cdc---jdbc-mysql"},"Oracle-cdc -> Jdbc-Mysql"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    debezium {\n        include.schema.changes = true\n        log.mining.strategy = redo_log_catalog\n    }\n  }\n}\n\nsink {\n  jdbc {\n    plugin_input = "customers"\n    url = "jdbc:mysql://oracle-host:3306/oracle_sink"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = oracle_sink\n    table = oracle_cdc_2_mysql_sink_table\n    primary_keys = ["ID"]\n  }\n}\n')),(0,o.yg)("h3",{id:"mysql-cdc---starrocks"},"Mysql-cdc -> StarRocks"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  MySQL-CDC {\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    debezium = {\n      include.schema.changes = true\n    }\n  }\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["starrocks_cdc_e2e:8030"]\n    username = "root"\n    password = ""\n    database = "shop"\n    table = "${table_name}"\n    base-url = "jdbc:mysql://starrocks_cdc_e2e:9030/shop"\n    max_retries = 3\n    enable_upsert_delete = true\n    schema_save_mode="RECREATE_SCHEMA"\n    data_save_mode="DROP_DATA"\n    save_mode_create_template = """\n    CREATE TABLE IF NOT EXISTS shop.`${table_name}` (\n        ${rowtype_primary_key},\n        ${rowtype_fields}\n        ) ENGINE=OLAP\n        PRIMARY KEY (${rowtype_primary_key})\n        DISTRIBUTED BY HASH (${rowtype_primary_key})\n        PROPERTIES (\n                "replication_num" = "1",\n                "in_memory" = "false",\n                "enable_persistent_index" = "true",\n                "replicated_storage" = "true",\n                "compression" = "LZ4"\n          )\n    """\n  }\n}\n')))}p.isMDXComponent=!0}}]);
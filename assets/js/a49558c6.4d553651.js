"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[70442],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(g,".").concat(s)]||d[s]||y[s]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="Snowflake",i={unversionedId:"connector-v2/sink/Snowflake",id:"version-2.3.7/connector-v2/sink/Snowflake",title:"Snowflake",description:"JDBC Snowflake Sink Connector",source:"@site/versioned_docs/version-2.3.7/connector-v2/sink/Snowflake.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Snowflake",permalink:"/docs/2.3.7/connector-v2/sink/Snowflake",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.7/connector-v2/sink/Snowflake.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"Slack",permalink:"/docs/2.3.7/connector-v2/sink/Slack"},next:{title:"Socket",permalink:"/docs/2.3.7/connector-v2/sink/Socket"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource list",id:"supported-datasource-list",level:2},{value:"Database dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Options",id:"options",level:2},{value:"tips",id:"tips",level:2},{value:"simple:",id:"simple",level:3},{value:"CDC(Change data capture) event",id:"cdcchange-data-capture-event",level:3}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snowflake"},"Snowflake"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC Snowflake Sink Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.7/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing."),(0,r.yg)("h2",{id:"supported-datasource-list"},"Supported DataSource list"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snowflake"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc",":","snowflake://<account_name>.snowflakecomputing.com"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example Snowflake datasource: cp snowflake-connector-java-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Snowflake Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null),"SMALLINT",(0,r.yg)("br",null),"BYTEINT",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"SHORT_TYPE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,r.yg)("br",null),"NUMERIC",(0,r.yg)("br",null),"NUMBER",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL",(0,r.yg)("br",null),"FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"DOUBLE PRECISION",(0,r.yg)("br",null),"FLOAT8",(0,r.yg)("br",null),"FLOAT",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"CHARACTER",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"STRING",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"VARIANT",(0,r.yg)("br",null),"OBJECT"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"TIMESTAMP",(0,r.yg)("br",null),"TIMESTAMP_LTZ",(0,r.yg)("br",null),"TIMESTAMP_NTZ",(0,r.yg)("br",null),"TIMESTAMP_TZ"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY",(0,r.yg)("br",null),"VARBINARY",(0,r.yg)("br",null),"GEOGRAPHY",(0,r.yg)("br",null),"GEOMETRY"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc",":","snowflake://<account_name>.snowflakecomputing.com")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use Snowflake the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"net.snowflake.client.jdbc.SnowflakeDriver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,r.yg)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,r.yg)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this ",(0,r.yg)("inlineCode",{parentName:"td"},"database")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,r.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,r.yg)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,r.yg)("br",null),", the data will be flushed into the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,r.yg)("br",null),"exactly-once semantics")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"properties"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,r.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.7/connector-v2/sink/common-options"},"Sink Common Options")," for details")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable upsert by primary_keys exist, If the task has no key duplicate data, setting this parameter to ",(0,r.yg)("inlineCode",{parentName:"td"},"false")," can speed up data import")))),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks."),(0,r.yg)("h2",{parentName:"blockquote",id:"task-example"},"Task Example")),(0,r.yg)("h3",{id:"simple"},"simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your snowflake database. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.7/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n    parallelism = 1\n    job.mode = "BATCH"\n}\nsource {\n    # This is a example source plugin **only for test and demonstrate the feature source plugin**\n    FakeSource {\n        parallelism = 1\n        result_table_name = "fake"\n        row.num = 16\n        schema = {\n            fields {\n                name = "string"\n                age = "int"\n            }\n        }\n    }\n    # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n    # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\ntransform {\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\nsink {\n    jdbc {\n        url = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\n        driver = "net.snowflake.client.jdbc.SnowflakeDriver"\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n    }\n    # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n    # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,r.yg)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change data capture) event"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"CDC change data is also supported by us In this case, you need config database, table and primary_keys.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n   jdbc {\n   url = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\n   driver = "net.snowflake.client.jdbc.SnowflakeDriver"\n   user = "root"\n   password = "123456"\n   generate_sink_sql = true\n   \n   \n   # You need to configure both database and table\n   database = test\n   table = sink_table\n   primary_keys = ["id","name"]\n  }\n}\n')))}y.isMDXComponent=!0}}]);
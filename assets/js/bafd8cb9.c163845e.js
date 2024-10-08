"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18266],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=r,m=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},33001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="MongoDB",i={unversionedId:"connector-v2/sink/MongoDB",id:"version-2.3.3/connector-v2/sink/MongoDB",title:"MongoDB",description:"MongoDB Sink Connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/sink/MongoDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/MongoDB",permalink:"/docs/2.3.3/connector-v2/sink/MongoDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/sink/MongoDB.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"Maxcompute",permalink:"/docs/2.3.3/connector-v2/sink/Maxcompute"},next:{title:"MySQL",permalink:"/docs/2.3.3/connector-v2/sink/Mysql"}},g={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"How to Create a MongoDB Data Synchronization Jobs",id:"how-to-create-a-mongodb-data-synchronization-jobs",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"MongoDB Database Connection URI Examples",id:"mongodb-database-connection-uri-examples",level:3},{value:"Buffer Flush",id:"buffer-flush",level:3},{value:"Why is Not Recommended to Use Transactions for Operation?",id:"why-is-not-recommended-to-use-transactions-for-operation",level:3},{value:"Idempotent Writes",id:"idempotent-writes",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta",id:"220-beta",level:3},{value:"2.3.1-release",id:"231-release",level:3},{value:"Next Version",id:"next-version",level:3}],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mongodb"},"MongoDB"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"MongoDB Sink Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.3/concept/connector-v2-features"},"cdc"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.If you want to use CDC-written features, recommend enable the upsert-enable configuration.")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The MongoDB Connector provides the ability to read and write data from and to MongoDB.\nThis document describes how to set up the MongoDB connector to run data writers against MongoDB."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Mongodb connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.yg)("td",{parentName:"tr",align:null},"universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-mongodb"},"Download"))))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("p",null,"The following table lists the field data type mapping from MongoDB BSON type to Seatunnel data type."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Seatunnel Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"MongoDB BSON Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"ObjectId")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"Binary")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"Int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Int64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"Date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Timestamp","[Date]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"Object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"Array")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.When using SeaTunnel to write Date and Timestamp types to MongoDB, both will produce a Date data type in MongoDB, but the precision will be different. The data generated by the SeaTunnel Date type has second-level precision, while the data generated by the SeaTunnel Timestamp type has millisecond-level precision.",(0,r.yg)("br",null),"\n2.When using the DECIMAL type in SeaTunnel, be aware that the maximum range cannot exceed 34 digits, which means you should use decimal(34, 18).",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uri"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The MongoDB standard connection uri. eg. mongodb://user:password@hosts:27017/database?readPreference=secondary&slaveOk=true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of MongoDB database to read or write.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of MongoDB collection to read or write.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"MongoDB's BSON and seatunnel data structure mapping.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buffer-flush.max-rows"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the maximum number of buffered rows per batch request.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"buffer-flush.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the maximum interval of buffered rows per batch request, the unit is millisecond.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry.max"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the max number of retry if writing records to database failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry.interval"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Specifies the retry time interval if writing records to database failed, the unit is millisecond.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"upsert-enable"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to write documents via upsert mode.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary-key"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The primary keys for upsert/update. Keys are in ",(0,r.yg)("inlineCode",{parentName:"td"},'["id","name",...]')," format for properties.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to use transactions in MongoSink (requires MongoDB 4.2+).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.3/connector-v2/sink/common-options"},"Source Common Options")," for details")))),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"1.The data flushing logic of the MongoDB Sink Connector is jointly controlled by three parameters: ",(0,r.yg)("inlineCode",{parentName:"p"},"buffer-flush.max-rows"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"buffer-flush.interval"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint.interval"),".",(0,r.yg)("br",null),"\nData flushing will be triggered if any of these conditions are met.",(0,r.yg)("br",null),"\n2.Compatible with the historical parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert-key"),". If ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert-key")," is set, please do not set ",(0,r.yg)("inlineCode",{parentName:"p"},"primary-key"),".",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"how-to-create-a-mongodb-data-synchronization-jobs"},"How to Create a MongoDB Data Synchronization Jobs"),(0,r.yg)("p",null,"The following example demonstrates how to create a data synchronization job that writes randomly generated data to a MongoDB database:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval  = 1000\n}\n\nsource {\n  FakeSource {\n      row.num = 2\n      bigint.min = 0\n      bigint.max = 10000000\n      split.num = 1\n      split.read-interval = 300\n      schema {\n        fields {\n          c_bigint = bigint\n        }\n      }\n    }\n}\n\nsink {\n  MongoDB{\n    uri = mongodb://user:password@127.0.0.1:27017\n    database = "test"\n    collection = "test"\n    schema = {\n      fields {\n        _id = string\n        c_bigint = bigint\n      }\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,r.yg)("h3",{id:"mongodb-database-connection-uri-examples"},"MongoDB Database Connection URI Examples"),(0,r.yg)("p",null,"Unauthenticated single node connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb\n")),(0,r.yg)("p",null,"Replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb?replicaSet=xxx\n")),(0,r.yg)("p",null,"Authenticated replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://admin:password@127.0.0.0:27017/mydb?replicaSet=xxx&authSource=admin\n")),(0,r.yg)("p",null,"Multi-node replica set connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0..1:27017,127.0.0..2:27017,127.0.0.3:27017/mydb?replicaSet=xxx\n")),(0,r.yg)("p",null,"Sharded cluster connection:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb\n")),(0,r.yg)("p",null,"Multiple mongos connections:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb\n")),(0,r.yg)("p",null,"Note: The username and password in the URI must be URL-encoded before being concatenated into the connection string."),(0,r.yg)("h3",{id:"buffer-flush"},"Buffer Flush"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    buffer-flush.max-rows = 2000\n    buffer-flush.interval = 1000\n    schema = {\n      fields {\n        _id = string\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n')),(0,r.yg)("h3",{id:"why-is-not-recommended-to-use-transactions-for-operation"},"Why is Not Recommended to Use Transactions for Operation?"),(0,r.yg)("p",null,"Although MongoDB has fully supported multi-document transactions since version 4.2, it doesn't mean that everyone should use them recklessly.\nTransactions are equivalent to locks, node coordination, additional overhead, and performance impact.\nInstead, the principle for using transactions should be: avoid using them if possible.\nThe necessity for using transactions can be greatly avoided by designing systems rationally."),(0,r.yg)("h3",{id:"idempotent-writes"},"Idempotent Writes"),(0,r.yg)("p",null,"By specifying a clear primary key and using the upsert method, exactly-once write semantics can be achieved."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"primary-key")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"upsert-enable")," is defined in the configuration, the MongoDB sink will use upsert semantics instead of regular INSERT statements. We combine the primary keys declared in upsert-key as the MongoDB reserved primary key and use upsert mode for writing to ensure idempotent writes.\nIn the event of a failure, Seatunnel jobs will recover from the last successful checkpoint and reprocess, which may result in duplicate message processing during recovery. It is highly recommended to use upsert mode, as it helps to avoid violating database primary key constraints and generating duplicate data if records need to be reprocessed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    upsert-enable = true\n    primary-key = ["name","status"]\n    schema = {\n      fields {\n        _id = string\n        name = string\n        status = string\n      }\n    }\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta"},"2.2.0-beta"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add MongoDB Source Connector")),(0,r.yg)("h3",{id:"231-release"},"2.3.1-release"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]","Refactor mongodb source connector(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/4620"},"4620"),")")),(0,r.yg)("h3",{id:"next-version"},"Next Version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]","Mongodb support cdc sink(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4833"},"4833"),")")))}u.isMDXComponent=!0}}]);
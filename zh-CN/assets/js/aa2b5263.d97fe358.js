"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44757],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(g,".").concat(s)]||d[s]||y[s]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="DB2",o={unversionedId:"connector-v2/sink/DB2",id:"version-2.3.3/connector-v2/sink/DB2",title:"DB2",description:"JDBC DB2 Sink Connector",source:"@site/versioned_docs/version-2.3.3/connector-v2/sink/DB2.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/DB2",permalink:"/zh-CN/docs/2.3.3/connector-v2/sink/DB2",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/sink/DB2.md",tags:[],version:"2.3.3",frontMatter:{},sidebar:"docs",previous:{title:"CosFile",permalink:"/zh-CN/docs/2.3.3/connector-v2/sink/CosFile"},next:{title:"DataHub",permalink:"/zh-CN/docs/2.3.3/connector-v2/sink/Datahub"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"Exactly-once :",id:"exactly-once-",level:3}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"db2"},"DB2"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC DB2 Sink Connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.3/concept/connector-v2-features"},"cdc"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,r.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it.")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DB2"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"com.ibm.db2.jdbc.app.DB2Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:db2://127.0.0.1:50000/dbname"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example DB2 datasource: cp db2-connector-java-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"DB2 Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SHORT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,r.yg)("br",null),"DEC",(0,r.yg)("br",null),"NUMERIC",(0,r.yg)("br",null),"NUM"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,r.yg)("br",null),"DOUBLE",(0,r.yg)("br",null),"DOUBLE PRECISION",(0,r.yg)("br",null),"DECFLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"LONG VARCHAR",(0,r.yg)("br",null),"CLOB",(0,r.yg)("br",null),"GRAPHIC",(0,r.yg)("br",null),"VARGRAPHIC",(0,r.yg)("br",null),"LONG VARGRAPHIC",(0,r.yg)("br",null),"DBCLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BLOB"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROWID",(0,r.yg)("br",null),"XML"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported yet"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"sink-options"},"Sink Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:db2://127.0.0.1:50000/dbname")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,r.yg)("br",null)," if you use DB2 the value is ",(0,r.yg)("inlineCode",{parentName:"td"},"com.ibm.db2.jdbc.app.DB2Driver"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,r.yg)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,r.yg)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use this ",(0,r.yg)("inlineCode",{parentName:"td"},"database")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,r.yg)("br",null),"This option is mutually exclusive with ",(0,r.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,r.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,r.yg)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30"),(0,r.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,r.yg)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,r.yg)("br",null),", the data will be flushed into the database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to",(0,r.yg)("br",null),"set ",(0,r.yg)("inlineCode",{parentName:"td"},"xa_data_source_class_name"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The xa data source class name of the database Driver, for example, DB2 is ",(0,r.yg)("inlineCode",{parentName:"td"},"com.db2.cj.jdbc.Db2XADataSource"),", and",(0,r.yg)("br",null),"please refer to appendix for other data sources")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,r.yg)("br",null),"exactly-once semantics")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.3/connector-v2/sink/common-options"},"Sink Common Options")," for details")))),(0,r.yg)("h3",{id:"tips"},"Tips"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your DB2. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.3/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.3/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n        url = "jdbc:db2://127.0.0.1:50000/dbname"\n        driver = "com.ibm.db2.jdbc.app.DB2Driver"\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n        }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,r.yg)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:db2://127.0.0.1:50000/dbname"\n        driver = "com.ibm.db2.jdbc.app.DB2Driver"\n        user = "root"\n        password = "123456"\n        # Automatically generate sql statements based on database table names\n        generate_sink_sql = true\n        database = test\n        table = test_table\n    }\n}\n')),(0,r.yg)("h3",{id:"exactly-once-"},"Exactly-once :"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For accurate write scene we guarantee accurate once")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:db2://127.0.0.1:50000/dbname"\n        driver = "com.ibm.db2.jdbc.app.DB2Driver"\n    \n        max_retries = 0\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n    \n        is_exactly_once = "true"\n    \n        xa_data_source_class_name = "com.db2.cj.jdbc.Db2XADataSource"\n    }\n}\n')))}y.isMDXComponent=!0}}]);
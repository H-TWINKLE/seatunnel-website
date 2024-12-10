"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65011],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="PostgreSQL CDC",o={unversionedId:"connector-v2/source/PostgreSQL-CDC",id:"connector-v2/source/PostgreSQL-CDC",title:"PostgreSQL CDC",description:"PostgreSQL CDC source connector",source:"@site/docs/connector-v2/source/PostgreSQL-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/PostgreSQL-CDC",permalink:"/zh-CN/docs/connector-v2/source/PostgreSQL-CDC",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/PostgreSQL-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/zh-CN/docs/connector-v2/source/Phoenix"},next:{title:"PostgreSQL",permalink:"/zh-CN/docs/connector-v2/source/PostgreSQL"}},g={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:4},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"postgresql-cdc"},"PostgreSQL CDC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"PostgreSQL CDC source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,r.yg)("br",null),"\nFlink ",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The Postgre CDC connector allows for reading snapshot data and incremental data from Postgre database. This document\ndescribes how to set up the Postgre CDC connector to run SQL queries against Postgre databases."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"Download"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"If you want to manipulate the GEOMETRY type in PostgreSQL."),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.postgis/postgis-jdbc"},"Download"))))),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,r.yg)("h4",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h4",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("p",null,"Please download and put PostgreSQL driver in ",(0,r.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib/")," dir. For example: cp postgresql-xxx.jar ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/lib/")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Here are the steps to enable CDC (Change Data Capture) in PostgreSQL:")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'Ensure the wal_level is set to logical: Modify the postgresql.conf configuration file by adding "wal_level = logical",\nrestart the PostgreSQL server for the changes to take effect.\nAlternatively, you can use SQL commands to modify the configuration directly:')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM SET wal_level TO 'logical';\nSELECT pg_reload_conf();\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Change the REPLICA policy of the specified table to FULL")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE your_table_name REPLICA IDENTITY FULL;\n")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"PostgreSQL Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BOOL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","BOOLEAN",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTEA",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BYTEA",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","TINYINT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT2",(0,r.yg)("br",null),"SMALLSERIAL",(0,r.yg)("br",null),"INT4",(0,r.yg)("br",null),"SERIAL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_INT2",(0,r.yg)("br",null),"_INT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","INT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT8",(0,r.yg)("br",null),"BIGSERIAL",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_INT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","BIGINT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_FLOAT4",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","FLOAT",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_FLOAT8",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","DOUBLE",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size>0)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(Get the designated column's specified column size,Gets the number of digits in the specified column to the right of the decimal point)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size<0)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BPCHAR",(0,r.yg)("br",null),"CHARACTER",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"GEOMETRY",(0,r.yg)("br",null),"GEOGRAPHY",(0,r.yg)("br",null),"JSON",(0,r.yg)("br",null),"JSONB"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"_BPCHAR",(0,r.yg)("br",null),"_CHARACTER",(0,r.yg)("br",null),"_VARCHAR",(0,r.yg)("br",null),"_TEXT"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY","<","STRING",">")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OTHER DATA TYPES"),(0,r.yg)("td",{parentName:"tr",align:null},"NOT SUPPORTED YET")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"base-url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:postgresql://localhost:5432/postgres_cdc?loggerLevel=OFF"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name of the database to monitor. The table name needs to include the database name, for example: ",(0,r.yg)("inlineCode",{parentName:"td"},"database_name.table_name"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-names-config"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys": ','["key1"]',',"snapshotSplitColumn": "key2"}]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"INITIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional startup mode for PostgreSQL CDC consumer, valid enumerations are ",(0,r.yg)("inlineCode",{parentName:"td"},"initial"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"earliest")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),". ",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"initial"),": Synchronize historical data at startup, and then synchronize incremental data.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"earliest"),": Startup from the earliest offset possible.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),": Startup from the latest offset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"8096"),(0,r.yg)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot of table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slot.name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the PostgreSQL logical decoding slot that was created for streaming changes from a particular plug-in for a particular database/schema. The server uses this slot to stream events to the connector that you are configuring. Default is seatunnel.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decoding.plugin.name"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"pgoutput"),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the Postgres logical decoding plug-in installed on the server,Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming,wal2json_rds_streaming and pgoutput.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-time-zone"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC"),(0,r.yg)("td",{parentName:"tr",align:null},"The session time zone in database server. If not set, then ZoneId.systemDefault() is used to determine the server time zone.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc connection pool size.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0.05"),(0,r.yg)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"DEFAULT"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional output format for PostgreSQL CDC, valid enumerations are ",(0,r.yg)("inlineCode",{parentName:"td"},"DEFAULT"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"COMPATIBLE_DEBEZIUM_JSON"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Pass-through ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/debezium/debezium/blob/v1.9.8.Final/documentation/modules/ROOT/pages/connectors/postgresql.adoc#connector-configuration-properties"},"Debezium's properties")," to Debezium Embedded Engine which is used to capture data changes from PostgreSQL server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"../source-common-options.md"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Support multi-table reading")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\n\nenv {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  Postgres-CDC {\n    plugin_output = "customers_Postgre_cdc"\n    username = "postgres"\n    password = "postgres"\n    database-names = ["postgres_cdc"]\n    schema-names = ["inventory"]\n    table-names = ["postgres_cdc.inventory.postgres_cdc_table_1,postgres_cdc.inventory.postgres_cdc_table_2"]\n    base-url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n  }\n}\n\ntransform {\n\n}\n\nsink {\n  jdbc {\n    plugin_input = "customers_Postgre_cdc"\n    url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n    driver = "org.postgresql.Driver"\n    user = "postgres"\n    password = "postgres"\n\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = postgres_cdc\n    schema = "inventory"\n    tablePrefix = "sink_"\n    primary_keys = ["id"]\n  }\n}\n')),(0,r.yg)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n  Postgres-CDC {\n    plugin_output = "customers_mysql_cdc"\n    username = "postgres"\n    password = "postgres"\n    database-names = ["postgres_cdc"]\n    schema-names = ["inventory"]\n    table-names = ["postgres_cdc.inventory.full_types_no_primary_key"]\n    base-url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n    decoding.plugin.name = "decoderbufs"\n    exactly_once = false\n    table-names-config = [\n      {\n        table = "postgres_cdc.inventory.full_types_no_primary_key"\n        primaryKeys = ["id"]\n      }\n    ]\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add PostgreSQL CDC Source Connector")),(0,r.yg)("h3",{id:"next-version"},"next version"))}u.isMDXComponent=!0}}]);
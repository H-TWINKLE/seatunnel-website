"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16312],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),p=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return l.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(t),c=a,d=s["".concat(u,".").concat(c)]||s[c]||m[c]||r;return t?l.createElement(d,i(i({ref:n},g),{},{components:t})):l.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},78161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(58168),a=(t(96540),t(15680));const r={},i="InfluxDB",o={unversionedId:"connector-v2/source/InfluxDB",id:"connector-v2/source/InfluxDB",title:"InfluxDB",description:"InfluxDB source connector",source:"@site/docs/connector-v2/source/InfluxDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/InfluxDB",permalink:"/zh-CN/docs/connector-v2/source/InfluxDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/InfluxDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/zh-CN/docs/connector-v2/source/Iceberg"},next:{title:"IoTDB",permalink:"/zh-CN/docs/connector-v2/source/IoTDB"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url",id:"url",level:3},{value:"sql string",id:"sql-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"database string",id:"database-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"split_column string",id:"split_column-string",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"epoch string",id:"epoch-string",level:3},{value:"query_timeout_sec int",id:"query_timeout_sec-int",level:3},{value:"connect_timeout_ms long",id:"connect_timeout_ms-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],g={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,l.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"influxdb"},"InfluxDB"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"InfluxDB source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read external data source data through InfluxDB."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection"))),(0,a.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sql"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"schema"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"lower_bound"),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"upper_bound"),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"split_column"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"epoch"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"n")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"connect_timeout_ms"),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"15000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query_timeout_sec"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"url"},"url"),(0,a.yg)("p",null,"the url to connect to influxDB e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"http://influxdb-host:8086\n")),(0,a.yg)("h3",{id:"sql-string"},"sql ","[string]"),(0,a.yg)("p",null,"The query sql used to search data"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select name,age from test\n")),(0,a.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,a.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,a.yg)("p",null,"The schema information of upstream data.\ne.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"schema {\n    fields {\n        name = string\n        age = int\n    }\n  }\n")),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"influxDB")," database"),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"the username of the influxDB when you select"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"the password of the influxDB when you select"),(0,a.yg)("h3",{id:"split_column-string"},"split_column ","[string]"),(0,a.yg)("p",null,"the ",(0,a.yg)("inlineCode",{parentName:"p"},"split_column")," of the influxDB when you select"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Tips:"),(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},"influxDB tags is not supported as a segmented primary key because the type of tags can only be a string"),(0,a.yg)("li",{parentName:"ul"},"influxDB time is not supported as a segmented primary key because the time field cannot participate in mathematical calculation"),(0,a.yg)("li",{parentName:"ul"},"Currently, ",(0,a.yg)("inlineCode",{parentName:"li"},"split_column")," only supports integer data segmentation, and does not support ",(0,a.yg)("inlineCode",{parentName:"li"},"float"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"string"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"date")," and other types."))),(0,a.yg)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,a.yg)("p",null,"upper bound of the ",(0,a.yg)("inlineCode",{parentName:"p"},"split_column"),"column"),(0,a.yg)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,a.yg)("p",null,"lower bound of the ",(0,a.yg)("inlineCode",{parentName:"p"},"split_column")," column"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'     split the $split_column range into $partition_num parts\n     if partition_num is 1, use the whole `split_column` range\n     if partition_num < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, partition_num = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test where ($split_column >= 1 and $split_column < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test where ($split_column >= 6 and $split_column < 11) and (  age > 0 and age < 10 )\n\n')),(0,a.yg)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,a.yg)("p",null,"the ",(0,a.yg)("inlineCode",{parentName:"p"},"partition_num")," of the InfluxDB when you select"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Tips: Ensure that ",(0,a.yg)("inlineCode",{parentName:"p"},"upper_bound")," minus ",(0,a.yg)("inlineCode",{parentName:"p"},"lower_bound")," is divided ",(0,a.yg)("inlineCode",{parentName:"p"},"bypartition_num"),", otherwise the query results will overlap")),(0,a.yg)("h3",{id:"epoch-string"},"epoch ","[string]"),(0,a.yg)("p",null,"returned time precision"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Optional values: H, m, s, MS, u, n"),(0,a.yg)("li",{parentName:"ul"},"default value: n")),(0,a.yg)("h3",{id:"query_timeout_sec-int"},"query_timeout_sec ","[int]"),(0,a.yg)("p",null,"the ",(0,a.yg)("inlineCode",{parentName:"p"},"query_timeout")," of the InfluxDB when you select, in seconds"),(0,a.yg)("h3",{id:"connect_timeout_ms-long"},"connect_timeout_ms ","[long]"),(0,a.yg)("p",null,"the timeout for connecting to InfluxDB, in milliseconds"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"../source-common-options.md"},"Source Common Options")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Example of multi parallelism and multi partition scanning"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        upper_bound = 100\n        lower_bound = 1\n        partition_num = 4\n        split_column = "value"\n        schema {\n            fields {\n                label = STRING\n                value = INT\n                rt = STRING\n                time = BIGINT\n            }\n    }\n\n}\n\n')),(0,a.yg)("p",null,"Example of not using partition scan"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    InfluxDB {\n        url = "http://influxdb-host:8086"\n        sql = "select label, value, rt, time from test"\n        database = "test"\n        schema {\n            fields {\n                label = STRING\n                value = INT\n                rt = STRING\n                time = BIGINT\n            }\n    }\n\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add InfluxDB Source Connector")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[47942],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,u=m["".concat(s,".").concat(y)]||m[y]||d[y]||l;return n?a.createElement(u,i(i({ref:t},g),{},{components:n})):a.createElement(u,i({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},44647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Doris",o={unversionedId:"connector-v2/sink/Doris",id:"version-2.3.0/connector-v2/sink/Doris",title:"Doris",description:"Doris sink connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/sink/Doris.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Doris",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/Doris",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/sink/Doris.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"DingTalk",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/DingTalk"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/Elasticsearch"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"labelPrefix string",id:"labelprefix-string",level:3},{value:"batch_max_rows long",id:"batch_max_rows-long",level:3},{value:"batch_max_bytes int",id:"batch_max_bytes-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"sink.properties.*  doris stream load config",id:"sinkproperties--doris-stream-load-config",level:3},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],g={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"doris"},"Doris"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Doris sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to Doris. Both support streaming and batch mode.\nThe internal implementation of Doris sink connector is cached and imported by stream load in batches."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0/concept/connector-v2-features"},"schema projection"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"node_urls"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"labelPrefix"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_max_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"5 ",(0,r.yg)("em",{parentName:"td"}," 1024 ")," 1024")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.properties.*"),(0,r.yg)("td",{parentName:"tr",align:null},"doris stream load config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},'["fe_ip:fe_http_port", ...]')),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," user password"),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," database"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," table"),(0,r.yg)("h3",{id:"labelprefix-string"},"labelPrefix ","[string]"),(0,r.yg)("p",null,"The prefix of ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," stream load label"),(0,r.yg)("h3",{id:"batch_max_rows-long"},"batch_max_rows ","[long]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the Doris"),(0,r.yg)("h3",{id:"batch_max_bytes-int"},"batch_max_bytes ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the Doris"),(0,r.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,r.yg)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_rows")," or the byte size of ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_max_bytes")," or the time reaches ",(0,r.yg)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the Doris"),(0,r.yg)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,r.yg)("p",null,"The number of retries to flush failed"),(0,r.yg)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,r.yg)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,r.yg)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,r.yg)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris")),(0,r.yg)("h3",{id:"sinkproperties--doris-stream-load-config"},"sink.properties.*  ","[doris stream load config]"),(0,r.yg)("p",null,"The parameter of the stream load ",(0,r.yg)("inlineCode",{parentName:"p"},"data_desc"),"\nThe way to specify the parameter is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"sink.properties.")," to the original stream load parameter name\nFor example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"strip_outer_array")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"sink.properties.strip_outer_array")),(0,r.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,r.yg)("p",null,"The supported formats include CSV and JSON. Default value: CSV"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Use JSON format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        nodeUrls = ["e2e_dorisdb:8030"]\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        batch_max_rows = 100\n        sink.properties.format = "JSON"\n        sink.properties.strip_outer_array = true\n    }\n}\n\n')),(0,r.yg)("p",null,"Use CSV format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        nodeUrls = ["e2e_dorisdb:8030"]\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        batch_max_rows = 100\n        sink.properties.format = "CSV"\n        sink.properties.column_separator = ","\n    }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Doris Sink Connector")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43256],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={},l="Hbase",c={unversionedId:"connector-v2/source/Hbase",id:"version-2.3.6/connector-v2/source/Hbase",title:"Hbase",description:"Hbase Source Connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/source/Hbase.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Hbase",permalink:"/docs/2.3.6/connector-v2/source/Hbase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/source/Hbase.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Greenplum",permalink:"/docs/2.3.6/connector-v2/source/Greenplum"},next:{title:"HdfsFile",permalink:"/docs/2.3.6/connector-v2/source/HdfsFile"}},i={},s=[{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"zookeeper_quorum string",id:"zookeeper_quorum-string",level:3},{value:"table string",id:"table-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"hbase_extra_config config",id:"hbase_extra_config-config",level:3},{value:"caching",id:"caching",level:3},{value:"batch",id:"batch",level:3},{value:"cache_blocks",id:"cache_blocks",level:3},{value:"common-options",id:"common-options",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hbase"},"Hbase"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Hbase Source Connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Reads data from Apache Hbase."),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"schema projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"zookeeper_quorum"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hbase_extra_config"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"caching"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cache_blocks"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"zookeeper_quorum-string"},"zookeeper_quorum ","[string]"),(0,r.yg)("p",null,'The zookeeper quorum for Hbase cluster hosts, e.g., "hadoop001:2181,hadoop002:2181,hadoop003:2181".'),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,'The name of the table to write to, e.g., "seatunnel".'),(0,r.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.yg)("p",null,"Hbase stores data in byte arrays. Therefore, you need to configure the data types for each column in the table. For more information, see: ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.6/concept/schema-feature#how-to-declare-type-supported"},"guide"),"."),(0,r.yg)("h3",{id:"hbase_extra_config-config"},"hbase_extra_config ","[config]"),(0,r.yg)("p",null,"Additional configurations for Hbase."),(0,r.yg)("h3",{id:"caching"},"caching"),(0,r.yg)("p",null,"The caching parameter sets the number of rows fetched per server trip during scans. This reduces round-trips between client and server, improving scan efficiency. Default: -1."),(0,r.yg)("h3",{id:"batch"},"batch"),(0,r.yg)("p",null,"The batch parameter sets the maximum number of columns returned per scan. This is useful for rows with many columns to avoid fetching excessive data at once, thus saving memory and improving performance."),(0,r.yg)("h3",{id:"cache_blocks"},"cache_blocks"),(0,r.yg)("p",null,"The cache_blocks parameter determines whether to cache data blocks during scans. By default, HBase caches data blocks during scans. Setting this to false reduces memory usage during scans. Default in SeaTunnel: false."),(0,r.yg)("h3",{id:"common-options"},"common-options"),(0,r.yg)("p",null,"Common parameters for Source plugins, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.6/connector-v2/source/common-options"},"Common Source Options"),"."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  Hbase {\n    zookeeper_quorum = "hadoop001:2181,hadoop002:2181,hadoop003:2181" \n    table = "seatunnel_test" \n    caching = 1000 \n    batch = 100 \n    cache_blocks = false \n    schema = {\n      columns = [\n        { \n          name = "rowkey" \n          type = string \n        },\n        {\n          name = "columnFamily1:column1"\n          type = boolean\n        },\n        {\n          name = "columnFamily1:column2" \n          type = double\n        },\n        {\n          name = "columnFamily2:column1"\n          type = bigint\n        }\n      ]\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);
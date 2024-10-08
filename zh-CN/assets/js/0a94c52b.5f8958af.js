"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16929],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,m=u["".concat(d,".").concat(c)]||u[c]||g[c]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const i={},o="Hudi",l={unversionedId:"connector/source/Hudi",id:"version-2.1.2/connector/source/Hudi",title:"Hudi",description:"Description",source:"@site/versioned_docs/version-2.1.2/connector/source/Hudi.md",sourceDirName:"connector/source",slug:"/connector/source/Hudi",permalink:"/zh-CN/docs/2.1.2/connector/source/Hudi",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/source/Hudi.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/zh-CN/docs/2.1.2/connector/source/Http"},next:{title:"Iceberg",permalink:"/zh-CN/docs/2.1.2/connector/source/Iceberg"}},d={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hoodie.datasource.read.paths",id:"hoodiedatasourcereadpaths",level:3},{value:"hoodie.file.index.enable",id:"hoodiefileindexenable",level:3},{value:"hoodie.datasource.read.end.instanttime",id:"hoodiedatasourcereadendinstanttime",level:3},{value:"hoodie.datasource.write.precombine.field",id:"hoodiedatasourcewriteprecombinefield",level:3},{value:"hoodie.datasource.read.incr.filters",id:"hoodiedatasourcereadincrfilters",level:3},{value:"hoodie.datasource.merge.type",id:"hoodiedatasourcemergetype",level:3},{value:"hoodie.datasource.read.begin.instanttime",id:"hoodiedatasourcereadbegininstanttime",level:3},{value:"hoodie.enable.data.skipping",id:"hoodieenabledataskipping",level:3},{value:"as.of.instant",id:"asofinstant",level:3},{value:"hoodie.datasource.query.type",id:"hoodiedatasourcequerytype",level:3},{value:"hoodie.datasource.read.schema.use.end.instanttime",id:"hoodiedatasourcereadschemauseendinstanttime",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hudi"},"Hudi"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Hudi."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Hudi"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiefileindexenable"},"hoodie.file.index.enable")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcemergetype"},"hoodie.datasource.merge.type")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodieenabledataskipping"},"hoodie.enable.data.skipping")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#asofinstant"},"as.of.instant")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcequerytype"},"hoodie.datasource.query.type")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#Read-Options"},"hudi read options")," for configurations."),(0,r.yg)("h3",{id:"hoodiedatasourcereadpaths"},"hoodie.datasource.read.paths"),(0,r.yg)("p",null,"Comma separated list of file paths to read within a Hudi table."),(0,r.yg)("h3",{id:"hoodiefileindexenable"},"hoodie.file.index.enable"),(0,r.yg)("p",null,"Enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."),(0,r.yg)("h3",{id:"hoodiedatasourcereadendinstanttime"},"hoodie.datasource.read.end.instanttime"),(0,r.yg)("p",null,"Instant time to limit incrementally fetched data to. New data written with an instant_time <= END_INSTANTTIME are fetched out."),(0,r.yg)("h3",{id:"hoodiedatasourcewriteprecombinefield"},"hoodie.datasource.write.precombine.field"),(0,r.yg)("p",null,"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)"),(0,r.yg)("h3",{id:"hoodiedatasourcereadincrfilters"},"hoodie.datasource.read.incr.filters"),(0,r.yg)("p",null,"For use-cases like DeltaStreamer which reads from Hoodie Incremental table and applies opaque map functions, filters appearing late in the sequence of transformations cannot be automatically pushed down. This option allows setting filters directly on Hoodie Source."),(0,r.yg)("h3",{id:"hoodiedatasourcemergetype"},"hoodie.datasource.merge.type"),(0,r.yg)("p",null,"For Snapshot query on merge on read table, control whether we invoke the record payload implementation to merge (payload_combine) or skip merging altogetherskip_merge"),(0,r.yg)("h3",{id:"hoodiedatasourcereadbegininstanttime"},"hoodie.datasource.read.begin.instanttime"),(0,r.yg)("p",null,"Instant time to start incrementally pulling data from. The instanttime here need not necessarily correspond to an instant on the timeline. New data written with an instant_time > BEGIN_INSTANTTIME are fetched out. For e.g: \u201820170901080000\u2019 will get all new data written after Sep 1, 2017 08:00AM."),(0,r.yg)("h3",{id:"hoodieenabledataskipping"},"hoodie.enable.data.skipping"),(0,r.yg)("p",null,"enable data skipping to boost query after doing z-order optimize for current table"),(0,r.yg)("h3",{id:"asofinstant"},"as.of.instant"),(0,r.yg)("p",null,"The query instant for time travel. Without specified this option, we query the latest snapshot."),(0,r.yg)("h3",{id:"hoodiedatasourcequerytype"},"hoodie.datasource.query.type"),(0,r.yg)("p",null,"Whether data needs to be read, in incremental mode (new data since an instantTime) (or) Read Optimized mode (obtain latest view, based on base files) (or) Snapshot mode (obtain latest view, by merging base and (if any) log files)"),(0,r.yg)("h3",{id:"hoodiedatasourcereadschemauseendinstanttime"},"hoodie.datasource.read.schema.use.end.instanttime"),(0,r.yg)("p",null,"Uses end instant schema when incrementally fetched data to. Default: users latest instant schema."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'hudi {\n    hoodie.datasource.read.paths = "hdfs://"\n}\n')))}g.isMDXComponent=!0}}]);
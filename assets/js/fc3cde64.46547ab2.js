"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[76204],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),c=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(g.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,m=p["".concat(g,".").concat(u)]||p[u]||d[u]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={},i="MongoDb",l={unversionedId:"connector/source/MongoDB",id:"version-2.3.0-beta/connector/source/MongoDB",title:"MongoDb",description:"MongoDb source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/MongoDB.md",sourceDirName:"connector/source",slug:"/connector/source/MongoDB",permalink:"/docs/2.3.0-beta/connector/source/MongoDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/MongoDB.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/docs/2.3.0-beta/connector/source/Kudu"},next:{title:"Phoenix",permalink:"/docs/2.3.0-beta/connector/source/Phoenix"}},g={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"readconfig.uri string",id:"readconfiguri-string",level:3},{value:"readconfig.database string",id:"readconfigdatabase-string",level:3},{value:"readconfig.collection string",id:"readconfigcollection-string",level:3},{value:"readconfig.* string",id:"readconfig-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mongodb"},"MongoDb"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"MongoDb source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from MongoDB."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: MongoDb"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readconfig.uri"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readconfig.database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readconfig.collection"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"readconfig.*"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"schema"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"readconfiguri-string"},"readconfig.uri ","[string]"),(0,a.yg)("p",null,"MongoDB uri"),(0,a.yg)("h3",{id:"readconfigdatabase-string"},"readconfig.database ","[string]"),(0,a.yg)("p",null,"MongoDB database"),(0,a.yg)("h3",{id:"readconfigcollection-string"},"readconfig.collection ","[string]"),(0,a.yg)("p",null,"MongoDB collection"),(0,a.yg)("h3",{id:"readconfig-string"},"readconfig.* ","[string]"),(0,a.yg)("p",null,"More other parameters can be configured here, see ",(0,a.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Input Configuration section. The way to specify parameters is to prefix the original parameter name ",(0,a.yg)("inlineCode",{parentName:"p"},"readconfig.")," For example, the way to set ",(0,a.yg)("inlineCode",{parentName:"p"},"spark.mongodb.input.partitioner")," is ",(0,a.yg)("inlineCode",{parentName:"p"},'readconfig.spark.mongodb.input.partitioner="MongoPaginateBySizePartitioner"')," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,a.yg)("h3",{id:"schema-string"},"schema ","[string]"),(0,a.yg)("p",null,"Because ",(0,a.yg)("inlineCode",{parentName:"p"},"MongoDB")," does not have the concept of ",(0,a.yg)("inlineCode",{parentName:"p"},"schema"),", when spark reads ",(0,a.yg)("inlineCode",{parentName:"p"},"MongoDB")," , it will sample ",(0,a.yg)("inlineCode",{parentName:"p"},"MongoDB")," data and infer the ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," . In fact, this process will be slow and may be inaccurate. This parameter can be manually specified. Avoid these problems. ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")," is a ",(0,a.yg)("inlineCode",{parentName:"p"},"json")," string, such as ",(0,a.yg)("inlineCode",{parentName:"p"},'{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\ ",\\"city\\":\\"string\\"}}')),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source Plugin common parameters, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    readconfig.uri = "mongodb://username:password@127.0.0.1:27017/mypost"\n    readconfig.database = "mydatabase"\n    readconfig.collection = "mycollection"\n    readconfig.spark.mongodb.input.partitioner = "MongoPaginateBySizePartitioner"\n    schema="{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\",\\"city\\":\\"string\\"}}"\n    result_table_name = "mongodb_result_table"\n}\n')))}d.isMDXComponent=!0}}]);
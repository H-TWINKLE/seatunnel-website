"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37543],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=l,m=d["".concat(g,".").concat(u)]||d[u]||y[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(58168),l=(n(96540),n(15680));const r={},i="Redis",o={unversionedId:"connector-v2/sink/Redis",id:"version-2.3.0/connector-v2/sink/Redis",title:"Redis",description:"Redis sink connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/sink/Redis.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Redis",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/Redis",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/sink/Redis.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Rabbitmq",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/Rabbitmq"},next:{title:"S3Redshift",permalink:"/zh-CN/docs/2.3.0/connector-v2/sink/S3-Redshift"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"key string",id:"key-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"user string",id:"user-string",level:3},{value:"auth string",id:"auth-string",level:3},{value:"mode string",id:"mode-string",level:3},{value:"nodes list",id:"nodes-list",level:3},{value:"format string",id:"format-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],p={toc:s},d="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"redis"},"Redis"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Redis sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to write data to Redis."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.0/concept/connector-v2-features"},"schema projection"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auth"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"single")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"nodes"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes when mode=cluster"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"json")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"Redis host"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"Redis port"),(0,l.yg)("h3",{id:"key-string"},"key ","[string]"),(0,l.yg)("p",null,"The value of key you want to write to redis. "),(0,l.yg)("p",null,"For example, if you want to use value of a field from upstream data as key, you can assign it to the field name."),(0,l.yg)("p",null,"Upstream data is the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"500"),(0,l.yg)("td",{parentName:"tr",align:null},"internal error"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"If you assign field name to ",(0,l.yg)("inlineCode",{parentName:"p"},"code")," and data_type to ",(0,l.yg)("inlineCode",{parentName:"p"},"key"),", two data will be written to redis: "),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"200 -> {code: 200, message: true, data: get success}")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"500 -> {code: 500, message: false, data: internal error}"))),(0,l.yg)("p",null,"If you assign field name to ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," and data_type to ",(0,l.yg)("inlineCode",{parentName:"p"},"key"),", only one data will be written to redis because ",(0,l.yg)("inlineCode",{parentName:"p"},"value")," is not existed in upstream data's fields:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"value -> {code: 500, message: false, data: internal error}")," ")),(0,l.yg)("p",null,"Please see the data_type section for specific writing rules."),(0,l.yg)("p",null,"Of course, the format of the data written here I just take json as an example, the specific or user-configured ",(0,l.yg)("inlineCode",{parentName:"p"},"format")," prevails."),(0,l.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,l.yg)("p",null,"Redis data types, support ",(0,l.yg)("inlineCode",{parentName:"p"},"key")," ",(0,l.yg)("inlineCode",{parentName:"p"},"hash")," ",(0,l.yg)("inlineCode",{parentName:"p"},"list")," ",(0,l.yg)("inlineCode",{parentName:"p"},"set")," ",(0,l.yg)("inlineCode",{parentName:"p"},"zset")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"key"),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Each data from upstream will be updated to the configured key, which means the later data will overwrite the earlier data, and only the last data will be stored in the key."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"hash"),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Each data from upstream will be split according to the field and written to the hash key, also the data after will overwrite the data before."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"list"),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured list key."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"set"),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured set key."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"zset"),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"Each data from upstream will be added to the configured zset key with a weight of 1. So the order of data in zset is based on the order of data consumption.")))),(0,l.yg)("h3",{id:"user-string"},"user ","[string]"),(0,l.yg)("p",null,"redis authentication user, you need it when you connect to an encrypted cluster"),(0,l.yg)("h3",{id:"auth-string"},"auth ","[string]"),(0,l.yg)("p",null,"Redis authentication password, you need it when you connect to an encrypted cluster"),(0,l.yg)("h3",{id:"mode-string"},"mode ","[string]"),(0,l.yg)("p",null,"redis mode, ",(0,l.yg)("inlineCode",{parentName:"p"},"single")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"cluster"),", default is ",(0,l.yg)("inlineCode",{parentName:"p"},"single")),(0,l.yg)("h3",{id:"nodes-list"},"nodes ","[list]"),(0,l.yg)("p",null,"redis nodes information, used in cluster mode, must like as the following format:"),(0,l.yg)("p",null,"[host1:port1, host2:port2]"),(0,l.yg)("h3",{id:"format-string"},"format ","[string]"),(0,l.yg)("p",null,"The format of upstream data, now only support ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," will be supported later, default ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),"."),(0,l.yg)("p",null,"When you assign format is ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", for example:"),(0,l.yg)("p",null,"Upstream data is the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"Connector will generate data as the following and write it to redis:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  "true"}\n\n')),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"simple:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"  Redis {\n    host = localhost\n    port = 6379\n    key = age\n    data_type = list\n  }\n")),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Redis Sink Connector")),(0,l.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support redis cluster mode connection and user authentication ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3188"},"3188"))))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[93924],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(i,".").concat(m)]||u[m]||g[m]||l;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},o="Socket",c={unversionedId:"connector-v2/source/Socket",id:"version-2.3.0/connector-v2/source/Socket",title:"Socket",description:"Socket source connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/source/Socket.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Socket",permalink:"/docs/2.3.0/connector-v2/source/Socket",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/source/Socket.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/docs/2.3.0/connector-v2/source/SftpFile"},next:{title:"Common Options",permalink:"/docs/2.3.0/connector-v2/source/common-options"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port integer",id:"port-integer",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"socket"},"Socket"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Socket source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to read data from Socket."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"batch")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"stream")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"schema projection")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"parallelism")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"support user-defined split"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"Integer"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"socket server host"),(0,a.yg)("h3",{id:"port-integer"},"port ","[integer]"),(0,a.yg)("p",null,"socket server port"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.0/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"simple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'Socket {\n        host = "localhost"\n        port = 9999\n    }\n')),(0,a.yg)("p",null,"test:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Configuring the SeaTunnel config file")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n    Socket {\n        host = "localhost"\n        port = 9999\n    }\n}\n\ntransform {\n}\n\nsink {\n  Console {}\n}\n\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Start a port listening")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"nc -l 9999\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Start a SeaTunnel task")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Socket Source send test data"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"~ nc -l 9999\ntest\nhello\nflink\nspark\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Console Sink print data")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"[test]\n[hello]\n[flink]\n[spark]\n")),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Socket Source Connector")),(0,a.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"host")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"port")," become required (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3317"},"3317"),")")))}g.isMDXComponent=!0}}]);
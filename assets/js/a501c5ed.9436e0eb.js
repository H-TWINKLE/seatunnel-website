"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18847],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return t?o.createElement(y,l(l({ref:n},p),{},{components:t})):o.createElement(y,l({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const r={},l="Console",i={unversionedId:"connector-v2/sink/Console",id:"version-2.3.0-beta/connector-v2/sink/Console",title:"Console",description:"Console sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector-v2/sink/Console.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Console",permalink:"/docs/2.3.0-beta/connector-v2/sink/Console",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector-v2/sink/Console.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"ClickhouseFile",permalink:"/docs/2.3.0-beta/connector-v2/sink/ClickhouseFile"},next:{title:"Elasticsearch",permalink:"/docs/2.3.0-beta/connector-v2/sink/Elasticsearch"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"console"},"Console"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Console sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to send data to Console. Both support streaming and batch mode."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,a.yg)("inlineCode",{parentName:"p"},"age: 12, name: jared"),"]",", the content send to console is the following: ",(0,a.yg)("inlineCode",{parentName:"p"},'{"name":"jared","age":17}'))),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.0-beta/concept/connector-v2-features"},"schema projection"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.0-beta/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"simple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},"Console {\n\n    }\n")),(0,a.yg)("p",null,"test:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Configuring the SeaTunnel config file")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n      sql {\n        sql = "select name, age from fake"\n      }\n}\n\nsink {\n    Console {\n\n    }\n}\n\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Start a SeaTunnel task")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Console print data")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"row=1 : XTblOoJMBr, 1968671376\nrow=2 : NAoJoFrthI, 1603900622\nrow=3 : VHZBzqQAPr, 1713899051\nrow=4 : pfUYOOrPgA, 1412123956\nrow=5 : dCNFobURas, 202987936\nrow=6 : XGWVgFnfWA, 1879270917\nrow=7 : KIGOqnLhqe, 430165110\nrow=8 : goMdjHlRpX, 288221239\nrow=9 : VBtpiNGArV, 1906991577\n")),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Console Sink Connector")),(0,a.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[Improve]"," Console sink support print subtask index (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3000"},"3000"),")")))}m.isMDXComponent=!0}}]);
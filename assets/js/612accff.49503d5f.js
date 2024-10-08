"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[45625],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=g(n),u=a,d=p["".concat(s,".").concat(u)]||p[u]||y[u]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={},i="Tablestore",o={unversionedId:"connector-v2/sink/Tablestore",id:"connector-v2/sink/Tablestore",title:"Tablestore",description:"Tablestore sink connector",source:"@site/docs/connector-v2/sink/Tablestore.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Tablestore",permalink:"/docs/connector-v2/sink/Tablestore",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/Tablestore.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TDengine",permalink:"/docs/connector-v2/sink/TDengine"},next:{title:"Typesense",permalink:"/docs/connector-v2/sink/Typesense"}},s={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"end_point string",id:"end_point-string",level:3},{value:"instanceName string",id:"instancename-string",level:3},{value:"access_key_id string",id:"access_key_id-string",level:3},{value:"access_key_secret string",id:"access_key_secret-string",level:3},{value:"table string",id:"table-string",level:3},{value:"primaryKeys array",id:"primarykeys-array",level:3},{value:"common options  config ",id:"common-options--config-",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],c={toc:g},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tablestore"},"Tablestore"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Tablestore sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write data to ",(0,a.yg)("inlineCode",{parentName:"p"},"Tablestore")),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"end_point"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"instance_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"access_key_id"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"access_key_secret"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"25")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"end_point-string"},"end_point ","[string]"),(0,a.yg)("p",null,"endPoint to write to Tablestore."),(0,a.yg)("h3",{id:"instancename-string"},"instanceName ","[string]"),(0,a.yg)("p",null,"The instanceName of Tablestore."),(0,a.yg)("h3",{id:"access_key_id-string"},"access_key_id ","[string]"),(0,a.yg)("p",null,"The access id of Tablestore."),(0,a.yg)("h3",{id:"access_key_secret-string"},"access_key_secret ","[string]"),(0,a.yg)("p",null,"The access secret of Tablestore."),(0,a.yg)("h3",{id:"table-string"},"table ","[string]"),(0,a.yg)("p",null,"The table of Tablestore."),(0,a.yg)("h3",{id:"primarykeys-array"},"primaryKeys ","[array]"),(0,a.yg)("p",null,"The primaryKeys of Tablestore."),(0,a.yg)("h3",{id:"common-options--config-"},"common options ","[ config ]"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'Tablestore {\n    end_point = "xxxx"\n    instance_name = "xxxx"\n    access_key_id = "xxxx"\n    access_key_secret = "xxxx"\n    table = "sink"\n    primary_keys = ["pk_1","pk_2","pk_3","pk_4"]\n  }\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"next-version"},"next version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Tablestore Sink Connector")))}y.isMDXComponent=!0}}]);
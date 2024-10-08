"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[91817],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>c});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,c=g["".concat(s,".").concat(d)]||g[d]||m[d]||l;return t?r.createElement(c,o(o({ref:n},u),{},{components:t})):r.createElement(c,o({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},o="Sql",i={unversionedId:"transform/sql",id:"version-2.1.2/transform/sql",title:"Sql",description:"Description",source:"@site/versioned_docs/version-2.1.2/transform/sql.md",sourceDirName:"transform",slug:"/transform/sql",permalink:"/docs/2.1.2/transform/sql",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.2/transform/sql.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/docs/2.1.2/transform/common-options"},next:{title:"Split",permalink:"/docs/2.1.2/transform/split"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"sql string",id:"sql-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Simple Select",id:"simple-select",level:3},{value:"Use UDF",id:"use-udf",level:3},{value:"Use UDAF",id:"use-udaf",level:3}],u={toc:p},g="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sql"},"Sql"),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Use SQL to process data and support engine's UDF function."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This transform both supported by engine Spark and Flink.")),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sql"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"sql-string"},"sql ","[string]"),(0,a.yg)("p",null,"SQL statement, the table name used in SQL configured in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Source")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Transform")," plugin"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.2/transform/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"simple-select"},"Simple Select"),(0,a.yg)("p",null,"Use the SQL plugin for field deletion. Only the ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"address")," fields are reserved, and the remaining fields will be discarded. ",(0,a.yg)("inlineCode",{parentName:"p"},"user_info")," is the ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," configured by the previous plugin"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select username, address from user_info",\n}\n')),(0,a.yg)("h3",{id:"use-udf"},"Use UDF"),(0,a.yg)("p",null,"Use SQL plugin for data processing, use ",(0,a.yg)("inlineCode",{parentName:"p"},"substring")," functions to intercept the ",(0,a.yg)("inlineCode",{parentName:"p"},"telephone")," field"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select substring(telephone, 0, 10) from user_info",\n}\n')),(0,a.yg)("h3",{id:"use-udaf"},"Use UDAF"),(0,a.yg)("p",null,"Use SQL plugin for data aggregation, use avg functions to perform aggregation operations on the original data set, and take out the average value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"age")," field"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select avg(age) from user_info",\n    table_name = "user_info"\n}\n')))}m.isMDXComponent=!0}}]);
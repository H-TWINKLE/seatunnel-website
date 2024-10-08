"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[95679],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=a,m=c["".concat(d,".").concat(s)]||c[s]||g[s]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const l={},i="Druid",o={unversionedId:"connector/source/Druid",id:"version-2.2.0-beta/connector/source/Druid",title:"Druid",description:"Druid source connector",source:"@site/versioned_docs/version-2.2.0-beta/connector/source/Druid.md",sourceDirName:"connector/source",slug:"/connector/source/Druid",permalink:"/zh-CN/docs/2.2.0-beta/connector/source/Druid",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/connector/source/Druid.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Source",permalink:"/zh-CN/docs/2.2.0-beta/category/source"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.2.0-beta/connector/source/Elasticsearch"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"jdbc_url String",id:"jdbc_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"start_date String",id:"start_date-string",level:3},{value:"end_date String",id:"end_date-string",level:3},{value:"columns List<String>",id:"columns-liststring",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"druid"},"Druid"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Druid source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Apache Druid."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spark"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Druid"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"jdbc_url"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"datasource"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"start_date"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"end_date"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"String")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"columns"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"List<String>")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"*"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Int")),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"jdbc_url-string"},"jdbc_url ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The URL of JDBC of Apache Druid."),(0,a.yg)("h3",{id:"datasource-string"},"datasource ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The DataSource name in Apache Druid."),(0,a.yg)("h3",{id:"start_date-string"},"start_date ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The start date of DataSource, for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"'2016-06-27'"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"'2016-06-27 00:00:00'"),", etc."),(0,a.yg)("h3",{id:"end_date-string"},"end_date ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.yg)("p",null,"The end date of DataSource, for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"'2016-06-28'"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"'2016-06-28 00:00:00'"),", etc."),(0,a.yg)("h3",{id:"columns-liststring"},"columns ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,a.yg)("p",null,"These columns that you want to query of DataSource."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source Plugin common parameters, refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.2.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,a.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,a.yg)("p",null,"The parallelism of an individual operator, for DruidSource"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSource {\n  jdbc_url = "jdbc:avatica:remote:url=http://localhost:8082/druid/v2/sql/avatica/"\n  datasource = "wikipedia"\n  start_date = "2016-06-27 00:00:00"\n  end_date = "2016-06-28 00:00:00"\n  columns = ["flags","page"]\n}\n')))}g.isMDXComponent=!0}}]);
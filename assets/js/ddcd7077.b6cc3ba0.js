"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[54401],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,c=u["".concat(m,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={},l="Druid",o={unversionedId:"connector/sink/Druid",id:"version-2.1.2/connector/sink/Druid",title:"Druid",description:"# Sink plugin: Druid [Flink]",source:"@site/versioned_docs/version-2.1.2/connector/sink/Druid.md",sourceDirName:"connector/sink",slug:"/connector/sink/Druid",permalink:"/docs/2.1.2/connector/sink/Druid",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.2/connector/sink/Druid.md",tags:[],version:"2.1.2",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/docs/2.1.2/connector/sink/Doris"},next:{title:"Elasticsearch",permalink:"/docs/2.1.2/connector/sink/Elasticsearch"}},m={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"coordinator_url String",id:"coordinator_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"timestamp_column String",id:"timestamp_column-string",level:3},{value:"timestamp_format String",id:"timestamp_format-string",level:3},{value:"timestamp_missing_value String",id:"timestamp_missing_value-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Specified timestamp column and format",id:"specified-timestamp-column-and-format",level:3},{value:"Specified timestamp column, format and missing value",id:"specified-timestamp-column-format-and-missing-value",level:3}],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"druid"},"Druid"),(0,i.yg)("blockquote",null,(0,i.yg)("h1",{parentName:"blockquote",id:"sink-plugin-druid-flink"},"Sink plugin: Druid ","[Flink]")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Write data to Apache Druid."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,i.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spark"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Druid"))),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coordinator_url"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"datasource"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_column"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_format"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"auto")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_missing_value"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Int")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-")))),(0,i.yg)("h3",{id:"coordinator_url-string"},"coordinator_url ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The URL of Coordinator service in Apache Druid."),(0,i.yg)("h3",{id:"datasource-string"},"datasource ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The DataSource name in Apache Druid."),(0,i.yg)("h3",{id:"timestamp_column-string"},"timestamp_column ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp column name in Apache Druid, the default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,i.yg)("h3",{id:"timestamp_format-string"},"timestamp_format ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp format in Apache Druid, the default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"auto"),", it could be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"iso")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"ISO8601 with 'T' separator, like \"2000-01-01T01:02:03.456\""))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"posix")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"seconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"millis")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"milliseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"micro")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"microseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"nano")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"nanoseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"auto")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"automatically detects ISO (either 'T' or space separator) or millis format"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"any ",(0,i.yg)("a",{parentName:"p",href:"http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda DateTimeFormat")," string"))),(0,i.yg)("h3",{id:"timestamp_missing_value-string"},"timestamp_missing_value ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp missing value in Apache Druid, which is used for input records that have a null or missing timestamp. The value of ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp_missing_value")," should be in ISO 8601 format, for example ",(0,i.yg)("inlineCode",{parentName:"p"},'"2022-02-02T02:02:02.222"'),"."),(0,i.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,i.yg)("p",null,"The parallelism of an individual operator, for DruidSink"),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("h3",{id:"simple"},"Simple"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n}\n')),(0,i.yg)("h3",{id:"specified-timestamp-column-and-format"},"Specified timestamp column and format"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n}\n')),(0,i.yg)("h3",{id:"specified-timestamp-column-format-and-missing-value"},"Specified timestamp column, format and missing value"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n  timestamp_missing_value = "2022-02-02T02:02:02.222"\n}\n')))}g.isMDXComponent=!0}}]);
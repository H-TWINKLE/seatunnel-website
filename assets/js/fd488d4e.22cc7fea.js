"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[85732],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>c});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=m(t),d=i,c=g["".concat(p,".").concat(d)]||g[d]||s[d]||r;return t?a.createElement(c,l(l({ref:n},u),{},{components:t})):a.createElement(c,l({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(58168),i=(t(96540),t(15680));const r={},l="Druid",o={unversionedId:"flink/configuration/sink-plugins/Druid",id:"version-2.1.0/flink/configuration/sink-plugins/Druid",title:"Druid",description:"# Sink plugin: Druid [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Druid.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/Druid",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Druid",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/Druid.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doris",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Doris"},next:{title:"Elasticsearch",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Elasticsearch"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"coordinator_url String",id:"coordinator_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"timestamp_column String",id:"timestamp_column-string",level:3},{value:"timestamp_format String",id:"timestamp_format-string",level:3},{value:"timestamp_missing_value String",id:"timestamp_missing_value-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Specified timestamp column and format",id:"specified-timestamp-column-and-format",level:3},{value:"Specified timestamp column, format and missing value",id:"specified-timestamp-column-format-and-missing-value",level:3}],u={toc:m},g="wrapper";function s(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"druid"},"Druid"),(0,i.yg)("blockquote",null,(0,i.yg)("h1",{parentName:"blockquote",id:"sink-plugin-druid-flink"},"Sink plugin: Druid ","[Flink]")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Write data to Apache Druid."),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"coordinator_url"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"datasource"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_column"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_format"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"auto")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"timestamp_missing_value"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"String")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"Int")),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-")))),(0,i.yg)("h3",{id:"coordinator_url-string"},"coordinator_url ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The URL of Coordinator service in Apache Druid."),(0,i.yg)("h3",{id:"datasource-string"},"datasource ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The DataSource name in Apache Druid."),(0,i.yg)("h3",{id:"timestamp_column-string"},"timestamp_column ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp column name in Apache Druid, the default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,i.yg)("h3",{id:"timestamp_format-string"},"timestamp_format ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp format in Apache Druid, the default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"auto"),", it could be:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"iso")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"ISO8601 with 'T' separator, like \"2000-01-01T01:02:03.456\""))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"posix")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"seconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"millis")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"milliseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"micro")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"microseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"nano")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"nanoseconds since epoch"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"auto")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"automatically detects ISO (either 'T' or space separator) or millis format"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"any ",(0,i.yg)("a",{parentName:"p",href:"http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormat.html"},"Joda DateTimeFormat")," string"))),(0,i.yg)("h3",{id:"timestamp_missing_value-string"},"timestamp_missing_value ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.yg)("p",null,"The timestamp missing value in Apache Druid, which is used for input records that have a null or missing timestamp. The value of ",(0,i.yg)("inlineCode",{parentName:"p"},"timestamp_missing_value")," should be in ISO 8601 format, for example ",(0,i.yg)("inlineCode",{parentName:"p"},'"2022-02-02T02:02:02.222"'),"."),(0,i.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,i.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,i.yg)("p",null,"The parallelism of an individual operator, for DruidSink"),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("h3",{id:"simple"},"Simple"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n}\n')),(0,i.yg)("h3",{id:"specified-timestamp-column-and-format"},"Specified timestamp column and format"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n}\n')),(0,i.yg)("h3",{id:"specified-timestamp-column-format-and-missing-value"},"Specified timestamp column, format and missing value"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'DruidSink {\n  coordinator_url = "http://localhost:8081/"\n  datasource = "wikipedia"\n  timestamp_column = "timestamp"\n  timestamp_format = "auto"\n  timestamp_missing_value = "2022-02-02T02:02:02.222"\n}\n')))}s.isMDXComponent=!0}}]);
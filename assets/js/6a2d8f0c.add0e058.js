"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[90015],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),h=o,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},60595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={},a="Phoenix",c={unversionedId:"connector-v2/sink/Phoenix",id:"version-2.3.6/connector-v2/sink/Phoenix",title:"Phoenix",description:"Phoenix sink connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/sink/Phoenix.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Phoenix",permalink:"/docs/2.3.6/connector-v2/sink/Phoenix",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/sink/Phoenix.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Paimon",permalink:"/docs/2.3.6/connector-v2/sink/Paimon"},next:{title:"PostgreSql",permalink:"/docs/2.3.6/connector-v2/sink/PostgreSql"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"phoenix"},"Phoenix"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Phoenix sink connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Write Phoenix data through ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.6/connector-v2/sink/Jdbc"},"Jdbc connector"),".\nSupport Batch mode and Streaming mode. The tested Phoenix version is 4.xx and 5.xx\nOn the underlying implementation, through the jdbc driver of Phoenix, execute the upsert statement to write data to HBase.\nTwo ways of connecting Phoenix with Java JDBC. One is to connect to zookeeper through JDBC, and the other is to connect to queryserver through JDBC thin client."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tips: By default, the (thin) driver jar is used. If you want to use the (thick) driver  or other versions of Phoenix (thin) driver, you need to recompile the jdbc connector module"),(0,o.yg)("p",{parentName:"blockquote"},"Tips: Not support exactly-once semantics (XA transaction is not yet supported in Phoenix).")),(0,o.yg)("h2",{id:"key-features"},"Key features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"exactly-once"))),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,o.yg)("p",null,"if you use phoenix (thick) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.phoenix.jdbc.PhoenixDriver")," or you use (thin) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.phoenix.queryserver.client.Driver")),(0,o.yg)("h3",{id:"url-string"},"url ","[string]"),(0,o.yg)("p",null,"if you use phoenix (thick) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:phoenix:localhost:2182/hbase")," or you use (thin) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF")),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.3.6/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"use thick client drive"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.jdbc.PhoenixDriver\n        url = "jdbc:phoenix:localhost:2182/hbase"\n        query = "upsert into test.sink(age, name) values(?, ?)"\n    }\n\n')),(0,o.yg)("p",null,"use thin client drive"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'Jdbc {\n    driver = org.apache.phoenix.queryserver.client.Driver\n    url = "jdbc:phoenix:thin:url=http://spark_e2e_phoenix_sink:8765;serialization=PROTOBUF"\n    query = "upsert into test.sink(age, name) values(?, ?)"\n}\n')),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Phoenix Sink Connector")))}d.isMDXComponent=!0}}]);
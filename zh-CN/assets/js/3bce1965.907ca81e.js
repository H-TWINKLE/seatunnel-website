"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20049],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>s});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,s=u["".concat(o,".").concat(m)]||u[m]||y[m]||r;return t?a.createElement(s,i(i({ref:n},d),{},{components:t})):a.createElement(s,i({ref:n},d))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[u]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var a=t(58168),l=(t(96540),t(15680));const r={},i="Clickhouse",g={unversionedId:"connector-v2/sink/Clickhouse",id:"connector-v2/sink/Clickhouse",title:"Clickhouse",description:"Clickhouse \u6570\u636e\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Clickhouse.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cassandra",permalink:"/zh-CN/docs/connector-v2/sink/Cassandra"},next:{title:"ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"}},o={},p=[{value:"\u652f\u6301\u5f15\u64ce",id:"\u652f\u6301\u5f15\u64ce",level:2},{value:"\u6838\u5fc3\u7279\u6027",id:"\u6838\u5fc3\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"save_mode_create_template",id:"save_mode_create_template",level:3},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aclickhouse \u540c\u6b65\u4efb\u52a1",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aclickhouse-\u540c\u6b65\u4efb\u52a1",level:2},{value:"\u5c0f\u63d0\u793a",id:"\u5c0f\u63d0\u793a",level:3},{value:"Clickhouse \u63a5\u6536\u5668\u914d\u7f6e",id:"clickhouse-\u63a5\u6536\u5668\u914d\u7f6e",level:2},{value:"\u5207\u5206\u6a21\u5f0f",id:"\u5207\u5206\u6a21\u5f0f",level:2},{value:"CDC(Change data capture) Sink",id:"cdcchange-data-capture-sink",level:2},{value:"CDC(Change data capture) for *MergeTree engine",id:"cdcchange-data-capture-for-mergetree-engine",level:2}],d={toc:p},u="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"clickhouse"},"Clickhouse"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Clickhouse \u6570\u636e\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u5f15\u64ce"},"\u652f\u6301\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u6838\u5fc3\u7279\u6027"},"\u6838\u5fc3\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u51c6\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Clickhouse sink \u63d2\u4ef6\u901a\u8fc7\u5b9e\u73b0\u5e42\u7b49\u5199\u5165\u53ef\u4ee5\u8fbe\u5230\u7cbe\u51c6\u4e00\u6b21\uff0c\u9700\u8981\u914d\u5408 aggregating merge tree \u652f\u6301\u91cd\u590d\u6570\u636e\u5220\u9664\u7684\u5f15\u64ce\u3002")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165 Clickhouse\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("p",null,"\u4e3a\u4e86\u4f7f\u7528 Clickhouse \u8fde\u63a5\u5668\uff0c\u9700\u8981\u4ee5\u4e0b\u4f9d\u8d56\u9879\u3002\u5b83\u4eec\u53ef\u4ee5\u901a\u8fc7 install-plugin.sh \u6216\u4ece Maven \u4e2d\u592e\u5b58\u50a8\u5e93\u4e0b\u8f7d\u3002"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u4f9d\u8d56"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Clickhouse"),(0,l.yg)("td",{parentName:"tr",align:null},"universal"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-clickhouse"},"\u4e0b\u8f7d"))))),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"Clickhouse \u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"String / Int128 / UInt128 / Int256 / UInt256 / Point / Ring / Polygon MultiPolygon")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"Int8 / UInt8 / Int16 / UInt16 / Int32")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"UInt64 / Int64 / IntervalYear / IntervalQuarter / IntervalMonth / IntervalWeek / IntervalDay / IntervalHour / IntervalMinute / IntervalSecond")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"Float64")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"Decimal")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"Float32")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"Date")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"DateTime")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"Array")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP"),(0,l.yg)("td",{parentName:"tr",align:null},"Map")))),(0,l.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ClickHouse")," \u96c6\u7fa4\u5730\u5740, \u683c\u5f0f\u662f",(0,l.yg)("inlineCode",{parentName:"td"},"host:port")," , \u5141\u8bb8\u591a\u4e2a",(0,l.yg)("inlineCode",{parentName:"td"},"hosts"),"\u914d\u7f6e. \u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"td"},'"host1:8123,host2:8123"'),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ClickHouse")," \u6570\u636e\u5e93\u540d\u79f0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8868\u540d\u79f0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ClickHouse")," \u7528\u6237\u8d26\u53f7.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ClickHouse")," \u7528\u6237\u5bc6\u7801.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clickhouse.config"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u9664\u4e86\u4e0a\u8ff0\u5fc5\u987b\u7531 ",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse-jdbc")," \u6307\u5b9a\u7684\u5fc5\u586b\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u6db5\u76d6\u4e86 ",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse-jdbc")," \u63d0\u4f9b\u7684\u6240\u6709",(0,l.yg)("a",{parentName:"td",href:"https://github.com/ClickHouse/clickhouse-jdbc/tree/master/clickhouse-client#configuration"},"\u53c2\u6570"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bulk_size"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"20000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u901a\u8fc7",(0,l.yg)("a",{parentName:"td",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," \u5199\u5165\u7684\u884c\u6570\uff0c\u5373\u9ed8\u8ba4\u662f20000.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6b64\u6a21\u5f0f\u4ec5\u652f\u6301\u5f15\u64ce\u4e3a",(0,l.yg)("inlineCode",{parentName:"td"},"Distributed"),"\u7684 ",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse")," \u8868\u3002\u9009\u9879 ",(0,l.yg)("inlineCode",{parentName:"td"},"internal_replication")," \u5e94\u8be5\u662f ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," \u3002\u4ed6\u4eec\u5c06\u5728 seatunnel \u4e2d\u62c6\u5206\u5206\u5e03\u5f0f\u8868\u6570\u636e\uff0c\u5e76\u76f4\u63a5\u5bf9\u6bcf\u4e2a\u5206\u7247\u8fdb\u884c\u5199\u5165\u3002\u5206\u7247\u6743\u91cd\u5b9a\u4e49\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse")," \u5c06\u8ba1\u7b97\u5728\u5185\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sharding_key"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"split_mode")," \u65f6\uff0c\u5c06\u6570\u636e\u53d1\u9001\u5230\u54ea\u4e2a\u8282\u70b9\u662f\u4e2a\u95ee\u9898\uff0c\u9ed8\u8ba4\u4e3a\u968f\u673a\u9009\u62e9\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"td"},"sharding_key"),"\u53c2\u6570\u6765\u6307\u5b9a\u5206\u7247\u7b97\u6cd5\u7684\u5b57\u6bb5\u3002\u6b64\u9009\u9879\u4ec5\u5728",(0,l.yg)("inlineCode",{parentName:"td"},"split_mode"),"\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," \u65f6\u6709\u6548.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"primary_key"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6807\u8bb0",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse"),"\u8868\u4e2d\u7684\u4e3b\u952e\u5217\uff0c\u5e76\u6839\u636e\u4e3b\u952e\u6267\u884cINSERT/UPDATE/DELETE\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"clickhouse"),"\u8868.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"support_upsert"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u6309\u67e5\u8be2\u4e3b\u952e\u66f4\u65b0\u63d2\u5165\u884c.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"allow_experimental_lightweight_delete"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u57fa\u4e8e",(0,l.yg)("inlineCode",{parentName:"td"},"MergeTree"),"\u8868\u5f15\u64ce\u5b9e\u9a8c\u6027\u8f7b\u91cf\u7ea7\u5220\u9664.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"schema\u4fdd\u5b58\u6a21\u5f0f\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684",(0,l.yg)("inlineCode",{parentName:"td"},"schema_save_mode"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u4fdd\u5b58\u6a21\u5f0f\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684",(0,l.yg)("inlineCode",{parentName:"td"},"data_save_mode"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"see below"),(0,l.yg)("td",{parentName:"tr",align:null},"\u89c1\u4e0b\u6587\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink\u63d2\u4ef6\u67e5\u7528\u53c2\u6570,\u8be6\u89c1",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink\u5e38\u7528\u9009\u9879"),".")))),(0,l.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u5f00\u542f\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u73b0\u6709\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u521b\u5efa\uff0c\u8868\u4fdd\u5b58\u65f6\u5220\u9664\u5e76\u91cd\u5efa\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u8868\u5b58\u5728\u65f6\u8df3\u8fc7\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u62a5\u9519\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"IGNORE")," \uff1a\u5ffd\u7565\u5bf9\u8868\u7684\u5904\u7406\u3002"),(0,l.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u5f00\u542f\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u6709\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a \u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\u5e76\u5220\u9664\u6570\u636e\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1a\u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4fdd\u7559\u6570\u636e\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1a\u7528\u6237\u81ea\u5b9a\u4e49\u5904\u7406\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1a\u6709\u6570\u636e\u65f6\u62a5\u9519\u3002"),(0,l.yg)("h3",{id:"save_mode_create_template"},"save_mode_create_template"),(0,l.yg)("p",null,"\u4f7f\u7528\u6a21\u677f\u81ea\u52a8\u521b\u5efaDoris\u8868\uff0c\n\u4f1a\u6839\u636e\u4e0a\u6e38\u6570\u636e\u7c7b\u578b\u548cschema\u7c7b\u578b\u521b\u5efa\u76f8\u5e94\u7684\u5efa\u8868\u8bed\u53e5\uff0c\n\u9ed8\u8ba4\u6a21\u677f\u53ef\u4ee5\u6839\u636e\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u3002"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u6a21\u677f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS  `${database}`.`${table}` (\n    ${rowtype_primary_key},\n    ${rowtype_fields}\n) ENGINE = MergeTree()\nORDER BY (${rowtype_primary_key})\nPRIMARY KEY (${rowtype_primary_key})\nSETTINGS\n    index_granularity = 8192;\n")),(0,l.yg)("p",null,"\u5982\u679c\u6a21\u677f\u4e2d\u586b\u5199\u4e86\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u4f8b\u5982\u6dfb\u52a0 id \u5b57\u6bb5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS  `${database}`.`${table}` (\n    id,\n    ${rowtype_fields}\n) ENGINE = MergeTree()\n    ORDER BY (${rowtype_primary_key})\n    PRIMARY KEY (${rowtype_primary_key})\n    SETTINGS\n    index_granularity = 8192;\n")),(0,l.yg)("p",null,"\u8fde\u63a5\u5668\u4f1a\u81ea\u52a8\u4ece\u4e0a\u6e38\u83b7\u53d6\u5bf9\u5e94\u7c7b\u578b\u5b8c\u6210\u586b\u5145\uff0c\n\u5e76\u4ece\u201crowtype_fields\u201d\u4e2d\u5220\u9664 id \u5b57\u6bb5\u3002 \u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u7c7b\u578b\u548c\u5c5e\u6027\u7684\u4fee\u6539\u3002"),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"database\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u6570\u636e\u5e93\u3002"),(0,l.yg)("li",{parentName:"ul"},"table_name\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u8868\u540d\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_fields\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\uff0c\u81ea\u52a8\u6620\u5c04\u5230Doris\u7684\u5b57\u6bb5\u63cf\u8ff0\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_primary_key\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u6a21\u5f0f\u4e2d\u7684\u4e3b\u952e\uff08\u53ef\u80fd\u662f\u5217\u8868\uff09\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_unique_key\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u6a21\u5f0f\u4e2d\u7684\u552f\u4e00\u952e\uff08\u53ef\u80fd\u662f\u5217\u8868\uff09\u3002")),(0,l.yg)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aclickhouse-\u540c\u6b65\u4efb\u52a1"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aclickhouse \u540c\u6b65\u4efb\u52a1"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u521b\u5efa\u5c06\u968f\u673a\u751f\u6210\u7684\u6570\u636e\u5199\u5165Clickhouse\u6570\u636e\u5e93\u7684\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval  = 1000\n}\n\nsource {\n  FakeSource {\n      row.num = 2\n      bigint.min = 0\n      bigint.max = 10000000\n      split.num = 1\n      split.read-interval = 300\n      schema {\n        fields {\n          c_bigint = bigint\n        }\n      }\n    }\n}\n\nsink {\n  Clickhouse {\n    host = "127.0.0.1:9092"\n    database = "default"\n    table = "test"\n    username = "xxxxx"\n    password = "xxxxx"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u5c0f\u63d0\u793a"},"\u5c0f\u63d0\u793a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"1.",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"SeaTunnel \u90e8\u7f72\u6587\u6863"),". ",(0,l.yg)("br",null),"\n2.\u9700\u8981\u5728\u540c\u6b65\u524d\u63d0\u524d\u521b\u5efa\u8981\u5199\u5165\u7684\u8868.",(0,l.yg)("br",null),"\n3.\u5f53\u5199\u5165 ClickHouse \u8868,\u65e0\u9700\u8bbe\u7f6e\u5176\u7ed3\u6784\uff0c\u56e0\u4e3a\u8fde\u63a5\u5668\u4f1a\u5728\u5199\u5165\u524d\u5411 ClickHouse \u67e5\u8be2\u5f53\u524d\u8868\u7684\u7ed3\u6784\u4fe1\u606f.",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"clickhouse-\u63a5\u6536\u5668\u914d\u7f6e"},"Clickhouse \u63a5\u6536\u5668\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    clickhouse.config = {\n      max_rows_to_read = "100"\n      read_overflow_mode = "throw"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"\u5207\u5206\u6a21\u5f0f"},"\u5207\u5206\u6a21\u5f0f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # split mode options\n    split_mode = true\n    sharding_key = "age"\n  }\n}\n')),(0,l.yg)("h2",{id:"cdcchange-data-capture-sink"},"CDC(Change data capture) Sink"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n  }\n}\n')),(0,l.yg)("h2",{id:"cdcchange-data-capture-for-mergetree-engine"},"CDC(Change data capture) for *MergeTree engine"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Clickhouse {\n    host = "localhost:8123"\n    database = "default"\n    table = "fake_all"\n    username = "xxxxx"\n    password = "xxxxx"\n    \n    # cdc options\n    primary_key = "id"\n    support_upsert = true\n    allow_experimental_lightweight_delete = true\n  }\n}\n')))}y.isMDXComponent=!0}}]);
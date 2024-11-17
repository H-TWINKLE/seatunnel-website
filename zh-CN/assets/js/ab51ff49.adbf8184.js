"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[17581],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},y=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),o=m(n),s=l,u=o["".concat(p,".").concat(s)]||o[s]||d[s]||r;return n?a.createElement(u,g(g({ref:t},y),{},{components:n})):a.createElement(u,g({ref:t},y))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,g=new Array(r);g[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[o]="string"==typeof e?e:l,g[1]=i;for(var m=2;m<r;m++)g[m]=n[m];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(58168),l=(n(96540),n(15680));const r={},g="StarRocks",i={unversionedId:"connector-v2/sink/StarRocks",id:"version-2.3.8/connector-v2/sink/StarRocks",title:"StarRocks",description:"StarRocks \u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.8/connector-v2/sink/StarRocks.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/StarRocks",permalink:"/zh-CN/docs/2.3.8/connector-v2/sink/StarRocks",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.8/connector-v2/sink/StarRocks.md",tags:[],version:"2.3.8",frontMatter:{},sidebar:"docs",previous:{title:"SQL Server",permalink:"/zh-CN/docs/2.3.8/connector-v2/sink/SqlServer"},next:{title:"TDengine",permalink:"/zh-CN/docs/2.3.8/connector-v2/sink/TDengine"}},p={},m=[{value:"\u5f15\u64ce\u652f\u6301",id:"\u5f15\u64ce\u652f\u6301",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u63a5\u6536\u5668\u9009\u9879",id:"\u63a5\u6536\u5668\u9009\u9879",level:2},{value:"save_mode_create_template",id:"save_mode_create_template",level:3},{value:"table string",id:"table-string",level:3},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"custom_sqlString",id:"custom_sqlstring",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u652f\u6301\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f",level:4},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u652f\u6301\u5199\u5165cdc\u53d8\u66f4\u4e8b\u4ef6\uff08INSERT/UPDATE/DELETE\uff09\u793a\u4f8b",id:"\u652f\u6301\u5199\u5165cdc\u53d8\u66f4\u4e8b\u4ef6insertupdatedelete\u793a\u4f8b",level:3},{value:"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b",id:"json\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b",level:3},{value:"CSV\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b",id:"csv\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b",level:3},{value:"\u4f7f\u7528save_mode\u7684\u793a\u4f8b",id:"\u4f7f\u7528save_mode\u7684\u793a\u4f8b",level:3},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u968f\u540e\u7248\u672c",id:"\u968f\u540e\u7248\u672c",level:3}],y={toc:m},o="wrapper";function d(e){let{components:t,...n}=e;return(0,l.yg)(o,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"starrocks"},"StarRocks"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"StarRocks \u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h2",{id:"\u5f15\u64ce\u652f\u6301"},"\u5f15\u64ce\u652f\u6301"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.8/concept/connector-v2-features"},"\u7cbe\u51c6\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.8/concept/connector-v2-features"},"cdc"))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u8be5\u63a5\u6536\u5668\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165\u5230StarRocks\u4e2d\u3002\u652f\u6301\u6279\u548c\u6d41\u4e24\u79cd\u6a21\u5f0f\u3002\nStarRocks\u6570\u636e\u63a5\u6536\u5668\u5185\u90e8\u5b9e\u73b0\u91c7\u7528\u4e86\u7f13\u5b58\uff0c\u901a\u8fc7stream load\u5c06\u6570\u636e\u6279\u5bfc\u5165\u3002"),(0,l.yg)("h2",{id:"\u63a5\u6536\u5668\u9009\u9879"},"\u63a5\u6536\u5668\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"nodeUrls"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"StarRocks"),"\u96c6\u7fa4\u5730\u5740, \u683c\u5f0f\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},'["fe_ip:fe_http_port", ...]'))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"base-url"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC URL\u6837\u5f0f\u7684\u8fde\u63a5\u4fe1\u606f\u3002\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030/")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:9030/db"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807",(0,l.yg)("inlineCode",{parentName:"td"},"StarRocks")," \u7528\u6237\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807",(0,l.yg)("inlineCode",{parentName:"td"},"StarRocks")," \u5bc6\u7801")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u76ee\u6807 StarRocks \u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u7684\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u76ee\u6807 StarRocks \u8868\u7684\u540d\u79f0, \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8be5\u503c\uff0c\u5219\u8868\u540d\u4e0e\u4e0a\u6e38\u8868\u540d\u76f8\u540c")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"labelPrefix"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"StarRocks stream load\u4f5c\u4e1a\u6807\u7b7e\u524d\u7f00")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_max_rows"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u6279\u5199\u60c5\u51b5\u4e0b\uff0c\u5f53\u7f13\u51b2\u533a\u6570\u91cf\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"batch_max_rows"),"\u6570\u91cf\u6216",(0,l.yg)("inlineCode",{parentName:"td"},"batch_max_bytes"),"\u5b57\u8282\u5927\u5c0f\u6216\u8005\u65f6\u95f4\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),"\u65f6\uff0c\u6570\u636e\u4f1a\u88ab\u5237\u65b0\u5230StarRocks")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_max_bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5 ",(0,l.yg)("em",{parentName:"td"}," 1024 ")," 1024"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u6279\u5199\u60c5\u51b5\u4e0b\uff0c\u5f53\u7f13\u51b2\u533a\u6570\u91cf\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"batch_max_rows"),"\u6570\u91cf\u6216",(0,l.yg)("inlineCode",{parentName:"td"},"batch_max_bytes"),"\u5b57\u8282\u5927\u5c0f\u6216\u8005\u65f6\u95f4\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),"\u65f6\uff0c\u6570\u636e\u4f1a\u88ab\u5237\u65b0\u5230StarRocks")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5199\u5165StarRocks\u5931\u8d25\u540e\u7684\u91cd\u8bd5\u6b21\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4f5c\u751f\u6210\u4e0b\u4e00\u4e2a\u9000\u907f\u5ef6\u8fdf\u7684\u4e58\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5411StarRocks\u53d1\u9001\u91cd\u8bd5\u8bf7\u6c42\u4e4b\u524d\u7684\u7b49\u5f85\u65f6\u957f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_upsert_delete"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542fupsert/delete\u4e8b\u4ef6\u7684\u540c\u6b65\uff0c\u4ec5\u4ec5\u652f\u6301\u4e3b\u952e\u6a21\u578b\u7684\u8868")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53c2\u89c1\u8868\u4e0b\u65b9\u7684\u8bf4\u660e"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53c2\u89c1\u8868\u4e0b\u65b9\u7684\u8bf4\u660e")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"starrocks.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"stream load ",(0,l.yg)("inlineCode",{parentName:"td"},"data_desc"),"\u53c2\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"http_socket_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"180000"),(0,l.yg)("td",{parentName:"tr",align:null},"http socket\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a3\u5206\u949f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u540c\u6b65\u4efb\u52a1\u6253\u5f00\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u5b58\u5728\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u540c\u6b65\u4efb\u52a1\u6253\u5f00\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u5b58\u5728\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53data_save_mode\u8bbe\u7f6e\u4e3aCUSTOM_PROCESSING\u65f6\uff0c\u5fc5\u987b\u540c\u65f6\u8bbe\u7f6eCUSTOM_SQL\u53c2\u6570\u3002CUSTOM_SQL\u7684\u503c\u4e3a\u53ef\u6267\u884c\u7684SQL\u8bed\u53e5\uff0c\u5728\u540c\u6b65\u4efb\u52a1\u5f00\u542f\u524dSQL\u5c06\u4f1a\u88ab\u6267\u884c")))),(0,l.yg)("h3",{id:"save_mode_create_template"},"save_mode_create_template"),(0,l.yg)("p",null,"StarRocks\u6570\u636e\u63a5\u6536\u5668\u4f7f\u7528\u6a21\u677f\uff0c\u5728\u9700\u6c42\u9700\u8981\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u4fee\u6539\u6a21\u677f\uff0c\u5e76\u7ed3\u5408\u4e0a\u6e38\u6570\u636e\u7c7b\u578b\u548c\u7ed3\u6784\u751f\u6210\u8868\u7684\u521b\u5efa\u8bed\u53e5\u6765\u81ea\u52a8\u521b\u5efaStarRocks\u8868\u3002\u5f53\u524d\u4ec5\u5728\u591a\u8868\u6a21\u5f0f\u4e0b\u6709\u6548\u3002"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u6a21\u677f\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}` (\n${rowtype_primary_key},\n${rowtype_fields}\n) ENGINE=OLAP\nPRIMARY KEY (${rowtype_primary_key})\nDISTRIBUTED BY HASH (${rowtype_primary_key})PROPERTIES (\n"replication_num" = "1"\n)\n')),(0,l.yg)("p",null,"\u5728\u6a21\u677f\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u6bd4\u5982\u8bf4\u52a0\u4e0a",(0,l.yg)("inlineCode",{parentName:"p"},"id"),"\u5b57\u6bb5\u7684\u4fee\u6539\u6a21\u677f\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}`\n(   \n    id,\n    ${rowtype_fields}\n) ENGINE = OLAP DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,l.yg)("p",null,"StarRocks\u6570\u636e\u63a5\u6536\u5668\u6839\u636e\u4e0a\u6e38\u6570\u636e\u81ea\u52a8\u83b7\u53d6\u76f8\u5e94\u7684\u4fe1\u606f\u6765\u586b\u5145\u6a21\u677f\uff0c\u5e76\u4e14\u4f1a\u79fb\u9664",(0,l.yg)("inlineCode",{parentName:"p"},"rowtype_fields"),"\u4e2d\u7684id\u5b57\u6bb5\u4fe1\u606f\u3002\u4f7f\u7528\u6b64\u65b9\u6cd5\u53ef\u7528\u6765\u4e3a\u81ea\u5b9a\u4e49\u5b57\u6bb5\u4fee\u6539\u7c7b\u578b\u53ca\u76f8\u5173\u5c5e\u6027\u3002"),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u7684\u5360\u4f4d\u7b26\u6709\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"database: \u4e0a\u6e38\u6570\u636e\u6a21\u5f0f\u7684\u5e93\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"table_name: \u4e0a\u6e38\u6570\u636e\u6a21\u5f0f\u7684\u8868\u540d\u79f0"),(0,l.yg)("li",{parentName:"ul"},"rowtype_fields: \u4e0a\u6e38\u6570\u636e\u6a21\u5f0f\u7684\u6240\u6709\u5b57\u6bb5\u4fe1\u606f\uff0c\u8fde\u63a5\u5668\u4f1a\u5c06\u5b57\u6bb5\u4fe1\u606f\u81ea\u52a8\u6620\u5c04\u5230StarRocks\u5bf9\u5e94\u7684\u7c7b\u578b"),(0,l.yg)("li",{parentName:"ul"},"rowtype_primary_key: \u4e0a\u6e38\u6570\u636e\u6a21\u5f0f\u7684\u4e3b\u952e\u4fe1\u606f\uff0c\u7ed3\u679c\u53ef\u80fd\u662f\u5217\u8868"),(0,l.yg)("li",{parentName:"ul"},"rowtype_unique_key: \u4e0a\u6e38\u6570\u636e\u6a21\u5f0f\u7684\u552f\u4e00\u952e\u4fe1\u606f\uff0c\u7ed3\u679c\u53ef\u80fd\u662f\u5217\u8868")),(0,l.yg)("h3",{id:"table-string"},"table ","[string]"),(0,l.yg)("p",null,"\u4f7f\u7528\u9009\u9879\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"database"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"table-name"),"\u81ea\u52a8\u751f\u6210SQL\uff0c\u5e76\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165StarRocks\u4e2d\u3002"),(0,l.yg)("p",null,"\u6b64\u9009\u9879\u4e0e ",(0,l.yg)("inlineCode",{parentName:"p"},"query")," \u662f\u4e92\u65a5\u7684\uff0c\u5177\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002"),(0,l.yg)("p",null,"table\u9009\u9879\u53c2\u6570\u53ef\u4ee5\u586b\u5165\u4e00\u4efb\u610f\u8868\u540d\uff0c\u8fd9\u4e2a\u540d\u5b57\u6700\u7ec8\u4f1a\u88ab\u7528\u4f5c\u76ee\u6807\u8868\u7684\u8868\u540d\uff0c\u5e76\u4e14\u652f\u6301\u53d8\u91cf\uff08",(0,l.yg)("inlineCode",{parentName:"p"},"${table_name}"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"${schema_name}"),"\uff09\u3002\n\u66ff\u6362\u89c4\u5219\u5982\u4e0b\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"${schema_name}")," \u5c06\u66ff\u6362\u4f20\u9012\u7ed9\u76ee\u6807\u7aef\u7684 SCHEMA \u540d\u79f0\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"${table_name}")," \u5c06\u66ff\u6362\u4f20\u9012\u7ed9\u76ee\u6807\u7aef\u7684\u8868\u540d\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"test",(0,l.yg)("em",{parentName:"li"},"${schema_name}"),"${table_name}_test"),(0,l.yg)("li",{parentName:"ol"},"sink_sinktable"),(0,l.yg)("li",{parentName:"ol"},"ss_${table_name}")),(0,l.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u540c\u6b65\u4efb\u52a1\u6253\u5f00\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u5b58\u5728\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5\u3002\u53ef\u9009\u503c\u6709\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1a\u4e0d\u5b58\u5728\u7684\u8868\u4f1a\u76f4\u63a5\u521b\u5efa\uff0c\u5df2\u5b58\u5728\u7684\u8868\u4f1a\u5220\u9664\u5e76\u6839\u636e\u53c2\u6570\u91cd\u65b0\u521b\u5efa",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1a\u5ffd\u7565\u5df2\u5b58\u5728\u7684\u8868\uff0c\u4e0d\u5b58\u5728\u7684\u8868\u4f1a\u76f4\u63a5\u521b\u5efa",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1a\u5f53\u6709\u4e0d\u5b58\u5728\u7684\u8868\u65f6\u4f1a\u76f4\u63a5\u62a5\u9519",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"IGNORE")," \uff1a\u5ffd\u7565\u5bf9\u8868\u7684\u5904\u7406"),(0,l.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u540c\u6b65\u4efb\u52a1\u6253\u5f00\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u5b58\u5728\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5\u3002\u53ef\u9009\u503c\u6709\uff1a\n",(0,l.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a \u4fdd\u5b58\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4f46\u662f\u4f1a\u5220\u9664\u8868\u4e2d\u5b58\u91cf\u6570\u636e\n",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1a\u4fdd\u5b58\u6570\u636e\u5e93\u7ed3\u6784\u548c\u76f8\u5173\u7684\u8868\u5b58\u91cf\u6570\u636e\n",(0,l.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1a\u81ea\u5b9a\u4e49\u5904\u7406\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1a\u5f53\u5bf9\u5e94\u8868\u5b58\u5728\u6570\u636e\u65f6\u76f4\u63a5\u62a5\u9519"),(0,l.yg)("h3",{id:"custom_sqlstring"},"custom_sql","[String]"),(0,l.yg)("p",null,"\u5f53data_save_mode\u8bbe\u7f6e\u4e3aCUSTOM_PROCESSING\u65f6\uff0c\u5fc5\u987b\u540c\u65f6\u8bbe\u7f6eCUSTOM_SQL\u53c2\u6570\u3002CUSTOM_SQL\u7684\u503c\u4e3a\u53ef\u6267\u884c\u7684SQL\u8bed\u53e5\uff0c\u5728\u540c\u6b65\u4efb\u52a1\u5f00\u542f\u524dSQL\u5c06\u4f1a\u88ab\u6267\u884c\u3002"),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"StarRocks\u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel\u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")))),(0,l.yg)("h4",{id:"\u652f\u6301\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u5bfc\u5165\u7684\u6570\u636e\u683c\u5f0f"),(0,l.yg)("p",null,"StarRocks\u6570\u636e\u63a5\u6536\u5668\u652f\u6301\u7684\u683c\u5f0f\u6709CSV\u548cJSON\u683c\u5f0f\u3002"),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u7ed9\u51fa\u4e00\u4e2a\u793a\u4f8b\uff0c\u8be5\u793a\u4f8b\u5305\u542b\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\u5199\u5165\uff0c\u4e14\u7528\u6237\u9700\u8981\u4e3a\u76ee\u6807\u7aef\u4e0b\u6e38\u521b\u5efa\u76f8\u5e94\u8868")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    base-url = "jdbc:mysql://e2e_starRocksdb:9030/"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "JSON"\n      strip_outer_array = true\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u652f\u6301\u5199\u5165cdc\u53d8\u66f4\u4e8b\u4ef6insertupdatedelete\u793a\u4f8b"},"\u652f\u6301\u5199\u5165cdc\u53d8\u66f4\u4e8b\u4ef6\uff08INSERT/UPDATE/DELETE\uff09\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    base-url = "jdbc:mysql://e2e_starRocksdb:9030/"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    ...\n    \n    // \u652f\u6301upsert/delete\u4e8b\u4ef6\u7684\u540c\u6b65\uff08\u9700\u8981\u5c06\u9009\u9879\u53c2\u6570enable_upsert_delete\u8bbe\u7f6e\u4e3atrue\uff09\uff0c\u4ec5\u652f\u6301\u8868\u5f15\u64ce\u4e3a\u4e3b\u952e\u6a21\u578b\n    enable_upsert_delete = true\n  }\n}\n')),(0,l.yg)("h3",{id:"json\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b"},"JSON\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    base-url = "jdbc:mysql://e2e_starRocksdb:9030/"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "JSON"\n      strip_outer_array = true\n    }\n  }\n}\n\n')),(0,l.yg)("h3",{id:"csv\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b"},"CSV\u683c\u5f0f\u6570\u636e\u5bfc\u5165\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    base-url = "jdbc:mysql://e2e_starRocksdb:9030/"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "CSV"\n      column_separator = "\\\\x01"\n      row_delimiter = "\\\\x02"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"\u4f7f\u7528save_mode\u7684\u793a\u4f8b"},"\u4f7f\u7528save_mode\u7684\u793a\u4f8b"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n  StarRocks {\n    nodeUrls = ["e2e_starRocksdb:8030"]\n    base-url = "jdbc:mysql://e2e_starRocksdb:9030/"\n    username = root\n    password = ""\n    database = "test"\n    table = "test_${schema_name}_${table_name}"\n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode="APPEND_DATA"\n    batch_max_rows = 10\n    starrocks.config = {\n      format = "CSV"\n      column_separator = "\\\\x01"\n      row_delimiter = "\\\\x02"\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,l.yg)("h3",{id:"\u968f\u540e\u7248\u672c"},"\u968f\u540e\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u589e\u52a0StarRocks\u6570\u636e\u63a5\u6536\u5668"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," \u5c06\u8fde\u63a5\u5668\u81ea\u5b9a\u4e49\u914d\u7f6e\u524d\u7f00\u7684\u6570\u636e\u7c7b\u578b\u66f4\u6539\u4e3aMap ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3719"},"3719")),(0,l.yg)("li",{parentName:"ul"},"[Feature]"," \u652f\u6301\u5199\u5165cdc\u53d8\u66f4\u4e8b\u4ef6(INSERT/UPDATE/DELETE) ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3865"},"3865"))))}d.isMDXComponent=!0}}]);
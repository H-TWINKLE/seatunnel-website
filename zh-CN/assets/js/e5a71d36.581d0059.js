"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[10973],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),m=o(t),s=l,d=m["".concat(u,".").concat(s)]||m[s]||y[s]||r;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var g={};for(var u in n)hasOwnProperty.call(n,u)&&(g[u]=n[u]);g.originalType=e,g[m]="string"==typeof e?e:l,i[1]=g;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},30261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={},i="Pulsar",g={unversionedId:"connector-v2/sink/Pulsar",id:"version-2.3.7/connector-v2/sink/Pulsar",title:"Pulsar",description:"Pulsar \u6570\u636e\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/connector-v2/sink/Pulsar.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Pulsar",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/Pulsar",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/connector-v2/sink/Pulsar.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"PostgreSql",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/PostgreSql"},next:{title:"Rabbitmq",permalink:"/zh-CN/docs/2.3.7/connector-v2/sink/Rabbitmq"}},u={},o=[{value:"\u5f15\u64ce\u652f\u6301",id:"\u5f15\u64ce\u652f\u6301",level:2},{value:"\u6838\u5fc3\u7279\u6027",id:"\u6838\u5fc3\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u8f93\u51fa\u9009\u9879",id:"\u8f93\u51fa\u9009\u9879",level:2},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:2},{value:"client.service-url String",id:"clientservice-url-string",level:3},{value:"admin.service-url String",id:"adminservice-url-string",level:3},{value:"auth.plugin-class String",id:"authplugin-class-string",level:3},{value:"auth.params String",id:"authparams-string",level:3},{value:"format String",id:"format-string",level:3},{value:"field_delimiter String",id:"field_delimiter-string",level:3},{value:"semantics Enum",id:"semantics-enum",level:3},{value:"transaction_timeout Int",id:"transaction_timeout-int",level:3},{value:"pulsar.config Map",id:"pulsarconfig-map",level:3},{value:"message.routing.mode Enum",id:"messageroutingmode-enum",level:3},{value:"partition_key_fields String",id:"partition_key_fields-string",level:3},{value:"\u5e38\u89c1\u9009\u9879",id:"\u5e38\u89c1\u9009\u9879",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355:",id:"\u7b80\u5355",level:3},{value:"\u66f4\u6539\u65e5\u5fd7",id:"\u66f4\u6539\u65e5\u5fd7",level:2},{value:"\u4e0b\u4e00\u4e2a\u7248\u672c",id:"\u4e0b\u4e00\u4e2a\u7248\u672c",level:3}],p={toc:o},m="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"pulsar"},"Pulsar"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Pulsar \u6570\u636e\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u5f15\u64ce\u652f\u6301"},"\u5f15\u64ce\u652f\u6301"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeatunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u6838\u5fc3\u7279\u6027"},"\u6838\u5fc3\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.7/concept/connector-v2-features"},"\u7cbe\u51c6\u4e00\u6b21"))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"Apache Pulsar \u7684\u63a5\u6536\u8fde\u63a5\u5668\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Pulsar"),(0,l.yg)("td",{parentName:"tr",align:null},"Universal")))),(0,l.yg)("h2",{id:"\u8f93\u51fa\u9009\u9879"},"\u8f93\u51fa\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"topic"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5230Pulsar\u4e3b\u9898\u540d\u79f0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client.service-url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Pulsar \u670d\u52a1\u7684\u670d\u52a1 URL \u63d0\u4f9b\u8005.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"admin.service-url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u7aef\u70b9\u7684 Pulsar \u670d\u52a1 HTTP URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auth.plugin-class"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u9a8c\u8bc1\u63d2\u4ef6\u7684\u540d\u79f0.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auth.params"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u9a8c\u8bc1\u63d2\u4ef6\u7684\u53c2\u6570.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"format"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"json"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u4e3a json\u3002\u53ef\u9009\u7684\u6587\u672c\u683c\u5f0f.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},","),(0,l.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"semantics"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"AT_LEAST_ONCE"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5199\u5165 pulsar \u7684\u4e00\u81f4\u6027\u8bed\u4e49.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transaction_timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"600"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e8b\u52a1\u8d85\u65f6\u6307\u5b9a\u4e3a 10 \u5206\u949f.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"pulsar.config"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9664\u4e86\u4e0a\u8ff0\u5fc5\u987b\u7531 Pulsar \u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u53c2\u6570\u5916.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"message.routing.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"RoundRobinPartition"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8981\u5206\u533a\u7684\u6d88\u606f\u7684\u9ed8\u8ba4\u8def\u7531\u6a21\u5f0f.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_key_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u54ea\u4e9b\u5b57\u6bb5\u7528\u4f5c pulsar \u6d88\u606f\u7684\u952e.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8be6\u89c1\u6e90\u7801 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/2.3.7/connector-v2/sink/common-options"},"\u5e38\u7528\u9009\u9879"),".")))),(0,l.yg)("h2",{id:"\u53c2\u6570\u89e3\u91ca"},"\u53c2\u6570\u89e3\u91ca"),(0,l.yg)("h3",{id:"clientservice-url-string"},"client.service-url ","[String]"),(0,l.yg)("p",null,"Pulsar \u670d\u52a1\u7684 Service URL \u63d0\u4f9b\u7a0b\u5e8f\u3002\u8981\u4f7f\u7528\u5ba2\u6237\u7aef\u5e93\u8fde\u63a5\u5230 Pulsar\uff0c\n\u60a8\u9700\u8981\u6307\u5b9a\u4e00\u4e2a Pulsar \u534f\u8bae URL\u3002\u60a8\u53ef\u4ee5\u5c06 Pulsar \u534f\u8bae URL \u5206\u914d\u7ed9\u7279\u5b9a\u96c6\u7fa4\u5e76\u4f7f\u7528 Pulsar \u65b9\u6848\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982, ",(0,l.yg)("inlineCode",{parentName:"p"},"localhost"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar://localhost:6650,localhost:6651"),"."),(0,l.yg)("h3",{id:"adminservice-url-string"},"admin.service-url ","[String]"),(0,l.yg)("p",null,"\u7ba1\u7406\u7aef\u70b9\u7684 Pulsar \u670d\u52a1 HTTP URL."),(0,l.yg)("p",null,"\u4f8b\u5982, ",(0,l.yg)("inlineCode",{parentName:"p"},"http://my-broker.example.com:8080"),", or ",(0,l.yg)("inlineCode",{parentName:"p"},"https://my-broker.example.com:8443")," for TLS."),(0,l.yg)("h3",{id:"authplugin-class-string"},"auth.plugin-class ","[String]"),(0,l.yg)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u63d2\u4ef6\u7684\u540d\u79f0\u3002"),(0,l.yg)("h3",{id:"authparams-string"},"auth.params ","[String]"),(0,l.yg)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u63d2\u4ef6\u7684\u53c2\u6570\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982, ",(0,l.yg)("inlineCode",{parentName:"p"},"key1:val1,key2:val2")),(0,l.yg)("h3",{id:"format-string"},"format ","[String]"),(0,l.yg)("p",null,'\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u4e3a json\u3002\u53ef\u9009\u7684\u6587\u672c\u683c\u5f0f\u3002\u9ed8\u8ba4\u5b57\u6bb5\u5206\u9694\u7b26\u4e3a","\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u8bf7\u6dfb\u52a0"field_delimiter"\u9009\u9879\u3002'),(0,l.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[String]"),(0,l.yg)("p",null,"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26\u3002\u9ed8\u8ba4field_delimiter\u4e3a','\u3002"),(0,l.yg)("h3",{id:"semantics-enum"},"semantics ","[Enum]"),(0,l.yg)("p",null,"\u5199\u5165 pulsar \u7684\u4e00\u81f4\u6027\u8bed\u4e49\u3002\u53ef\u7528\u9009\u9879\u5305\u62ec EXACTLY_ONCE\u3001NON\u3001AT_LEAST_ONCE\u3001\u9ed8\u8ba4AT_LEAST_ONCE\u3002\n\u5982\u679c\u8bed\u4e49\u88ab\u6307\u5b9a\u4e3a EXACTLY_ONCE\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 2pc \u6765\u4fdd\u8bc1\u6d88\u606f\u88ab\u51c6\u786e\u5730\u53d1\u9001\u5230 pulsar \u4e00\u6b21\u3002\n\u5982\u679c\u8bed\u4e49\u6307\u5b9a\u4e3a NON\uff0c\u6211\u4eec\u5c06\u76f4\u63a5\u5c06\u6d88\u606f\u53d1\u9001\u5230 pulsar\uff0c\u5982\u679c\u4f5c\u4e1a\u91cd\u542f/\u91cd\u8bd5\u6216\u7f51\u7edc\u9519\u8bef\uff0c\u6570\u636e\u53ef\u80fd\u4f1a\u91cd\u590d/\u4e22\u5931\u3002"),(0,l.yg)("h3",{id:"transaction_timeout-int"},"transaction_timeout ","[Int]"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e8b\u52a1\u8d85\u65f6\u6307\u5b9a\u4e3a 10 \u5206\u949f\u3002\u5982\u679c\u4e8b\u52a1\u672a\u5728\u6307\u5b9a\u7684\u8d85\u65f6\u65f6\u95f4\u5185\u63d0\u4ea4\uff0c\u5219\u4e8b\u52a1\u5c06\u81ea\u52a8\u4e2d\u6b62\u3002\u56e0\u6b64\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u8d85\u65f6\u5927\u4e8e\u68c0\u67e5\u70b9\u95f4\u9694\u3002"),(0,l.yg)("h3",{id:"pulsarconfig-map"},"pulsar.config ","[Map]"),(0,l.yg)("p",null,"\u9664\u4e86\u4e0a\u8ff0 Pulsar \u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u5fc5\u987b\u6307\u5b9a\u7684\u53c2\u6570\u5916\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u4e3a\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u6307\u5b9a\u591a\u4e2a\u975e\u5f3a\u5236\u6027\u53c2\u6570\uff0c\n\u6db5\u76d6 Pulsar \u5b98\u65b9\u6587\u6863\u4e2d\u6307\u5b9a\u7684\u6240\u6709\u751f\u4ea7\u8005\u53c2\u6570\u3002"),(0,l.yg)("h3",{id:"messageroutingmode-enum"},"message.routing.mode ","[Enum]"),(0,l.yg)("p",null,"\u8981\u5206\u533a\u7684\u6d88\u606f\u7684\u9ed8\u8ba4\u8def\u7531\u6a21\u5f0f\u3002\u53ef\u7528\u9009\u9879\u5305\u62ec SinglePartition\u3001RoundRobinPartition\u3002\n\u5982\u679c\u9009\u62e9 SinglePartition\uff0c\u5982\u679c\u672a\u63d0\u4f9b\u5bc6\u94a5\uff0c\u5206\u533a\u751f\u4ea7\u8005\u5c06\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u5206\u533a\u5e76\u5c06\u6240\u6709\u6d88\u606f\u53d1\u5e03\u5230\u8be5\u5206\u533a\u4e2d\uff0c\u5982\u679c\u6d88\u606f\u4e0a\u63d0\u4f9b\u4e86\u5bc6\u94a5\uff0c\u5219\u5206\u533a\u751f\u4ea7\u8005\u5c06\u5bf9\u5bc6\u94a5\u8fdb\u884c\u54c8\u5e0c\u5904\u7406\u5e76\u5c06\u6d88\u606f\u5206\u914d\u7ed9\u7279\u5b9a\u5206\u533a\u3002\n\u5982\u679c\u9009\u62e9 RoundRobinPartition\uff0c\u5219\u5982\u679c\u672a\u63d0\u4f9b\u5bc6\u94a5\uff0c\u5219\u751f\u4ea7\u8005\u5c06\u4ee5\u5faa\u73af\u65b9\u5f0f\u8de8\u6240\u6709\u5206\u533a\u53d1\u5e03\u6d88\u606f\uff0c\u4ee5\u5b9e\u73b0\u6700\u5927\u541e\u5410\u91cf\u3002\u8bf7\u6ce8\u610f\uff0c\u8f6e\u8be2\u4e0d\u662f\u6309\u5355\u4e2a\u6d88\u606f\u5b8c\u6210\u7684\uff0c\u800c\u662f\u8bbe\u7f6e\u4e3a\u76f8\u540c\u7684\u6279\u5904\u7406\u5ef6\u8fdf\u8fb9\u754c\uff0c\u4ee5\u786e\u4fdd\u6279\u5904\u7406\u6709\u6548\u3002"),(0,l.yg)("h3",{id:"partition_key_fields-string"},"partition_key_fields ","[String]"),(0,l.yg)("p",null,"\u914d\u7f6e\u54ea\u4e9b\u5b57\u6bb5\u7528\u4f5c pulsar \u6d88\u606f\u7684\u952e\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8981\u4f7f\u7528\u4e0a\u6e38\u6570\u636e\u4e2d\u7684\u5b57\u6bb5\u503c\u4f5c\u4e3a\u952e\uff0c\u5219\u53ef\u4ee5\u4e3a\u6b64\u5c5e\u6027\u5206\u914d\u5b57\u6bb5\u540d\u79f0\u3002"),(0,l.yg)("p",null,"\u4e0a\u6e38\u6570\u636e\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"data"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Jack"),(0,l.yg)("td",{parentName:"tr",align:null},"16"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mary"),(0,l.yg)("td",{parentName:"tr",align:null},"23"),(0,l.yg)("td",{parentName:"tr",align:null},"data-example2")))),(0,l.yg)("p",null,"\u5982\u679c\u5c06 name \u8bbe\u7f6e\u4e3a\u952e\uff0c\u5219 name \u5217\u7684\u54c8\u5e0c\u503c\u5c06\u786e\u5b9a\u6d88\u606f\u53d1\u9001\u5230\u54ea\u4e2a\u5206\u533a\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e\u5206\u533a\u952e\u5b57\u6bb5\uff0c\u5219\u5c06\u5411 null \u6d88\u606f\u952e\u53d1\u9001\u81f3\u3002"),(0,l.yg)("p",null,"\u6d88\u606f\u952e\u7684\u683c\u5f0f\u4e3a json\uff0c\u5982\u679c name \u8bbe\u7f6e\u4e3a\u952e\uff0c\u4f8b\u5982 '{\u201cname\u201d\uff1a\u201cJack\u201d}'\u3002"),(0,l.yg)("p",null,"\u6240\u9009\u5b57\u6bb5\u5fc5\u987b\u662f\u4e0a\u6e38\u7684\u73b0\u6709\u5b57\u6bb5\u3002"),(0,l.yg)("h3",{id:"\u5e38\u89c1\u9009\u9879"},"\u5e38\u89c1\u9009\u9879"),(0,l.yg)("p",null,"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8be6\u89c1\u6e90\u7801",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/connector-v2/sink/common-options"},"\u5e38\u7528\u9009\u9879")," ."),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355"},"\u7b80\u5355:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u8be5\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a SeaTunnel \u540c\u6b65\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u901a\u8fc7 FakeSource \u81ea\u52a8\u751f\u6210\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230 Pulsar Sink\u3002FakeSource \u603b\u5171\u751f\u6210 16 \u884c\u6570\u636e \uff08row.num=16\uff09\uff0c\u6bcf\u884c\u6709\u4e24\u4e2a\u5b57\u6bb5\uff0cname\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u548c age\uff08int \u7c7b\u578b\uff09\u3002\u6700\u7ec8\u76ee\u6807\u4e3b\u9898\u662ftest_topic\u4e3b\u9898\u4e2d\u8fd8\u5c06\u6709 16 \u884c\u6570\u636e\u3002 \u5982\u679c\u60a8\u5c1a\u672a\u5b89\u88c5\u548c\u90e8\u7f72 SeaTunnel\uff0c\u5219\u9700\u8981\u6309\u7167",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/deployment"},"\u5b89\u88c5Seatunnel")," SeaTunnel \u4e2d\u7684\u8bf4\u660e\u5b89\u88c5\u548c\u90e8\u7f72 SeaTunnel\u3002\u7136\u540e\u6309\u7167 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"},"SeaTunnel \u5f15\u64ce\u5feb\u901f\u5165\u95e8"),"\u4e2d\u7684\u8bf4\u660e\u8fd0\u884c\u6b64\u4f5c\u4e1a\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Pulsar {\n    topic = "example"\n    client.service-url = "localhost:pulsar://localhost:6650"\n    admin.service-url = "http://my-broker.example.com:8080"\n    result_table_name = "test"\n    pulsar.config = {\n        sendTimeoutMs = 30000\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"\u66f4\u6539\u65e5\u5fd7"},"\u66f4\u6539\u65e5\u5fd7"),(0,l.yg)("h3",{id:"\u4e0b\u4e00\u4e2a\u7248\u672c"},"\u4e0b\u4e00\u4e2a\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 Pulsar Sink \u8fde\u63a5\u5668")))}y.isMDXComponent=!0}}]);
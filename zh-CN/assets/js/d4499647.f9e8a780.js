"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[60144],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(t),v=r,y=s["".concat(o,".").concat(v)]||s[v]||g[v]||l;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=v;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},91639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const l={},i="\u4e8b\u4ef6\u76d1\u542c\u5668",p={unversionedId:"concept/event-listener",id:"version-2.3.7/concept/event-listener",title:"\u4e8b\u4ef6\u76d1\u542c\u5668",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/concept/event-listener.md",sourceDirName:"concept",slug:"/concept/event-listener",permalink:"/zh-CN/docs/2.3.7/concept/event-listener",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/concept/event-listener.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"\u901f\u5ea6\u63a7\u5236",permalink:"/zh-CN/docs/2.3.7/concept/speed-limit"},next:{title:"\u8fde\u63a5\u5668\u53d1\u5e03\u72b6\u6001",permalink:"/zh-CN/docs/2.3.7/Connector-v2-release-state"}},o={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"API",id:"api",level:2},{value:"Event Data API",id:"event-data-api",level:3},{value:"Event Listener API",id:"event-listener-api",level:3},{value:"Event Collect API",id:"event-collect-api",level:3},{value:"\u8bbe\u7f6e\u76d1\u542c\u5668",id:"\u8bbe\u7f6e\u76d1\u542c\u5668",level:2},{value:"Zeta \u5f15\u64ce",id:"zeta-\u5f15\u64ce",level:3},{value:"Flink \u5f15\u64ce",id:"flink-\u5f15\u64ce",level:3},{value:"Spark \u5f15\u64ce",id:"spark-\u5f15\u64ce",level:3}],c={toc:u},s="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4e8b\u4ef6\u76d1\u542c\u5668"},"\u4e8b\u4ef6\u76d1\u542c\u5668"),(0,r.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.yg)("p",null,"SeaTunnel\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u529f\u80fd\uff0c\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u540c\u6b65\u65f6\u7684\u72b6\u6001\u3002\u6b64\u529f\u80fd\u5728\u9700\u8981\u76d1\u542c\u4efb\u52a1\u8fd0\u884c\u72b6\u6001\u65f6\u5341\u5206\u91cd\u8981(",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event"),")\u3002\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u53c2\u6570\u5e76\u6709\u6548\u5730\u5229\u7528\u4ed6\u4eec\u3002"),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSpark",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("p",null,"\u4e8b\u4ef6(event)API\u7684\u5b9a\u4e49\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event"),"\u5305\u4e2d\u3002"),(0,r.yg)("h3",{id:"event-data-api"},"Event Data API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.Event")," - \u4e8b\u4ef6\u6570\u636e\u7684\u63a5\u53e3\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.EventType")," - \u4e8b\u4ef6\u6570\u636e\u7684\u679a\u4e3e\u503c\u3002")),(0,r.yg)("h3",{id:"event-listener-api"},"Event Listener API"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5904\u7406\u5668\uff0c\u4f8b\u5982\u5c06\u4e8b\u4ef6\u53d1\u9001\u5230\u5916\u90e8\u7cfb\u7edf\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.event.EventHandler")," - \u4e8b\u4ef6\u5904\u7406\u5668\u7684\u63a5\u53e3\uff0cSPI\u5c06\u4f1a\u81ea\u52a8\u4ece\u7c7b\u8def\u5f84\u4e2d\u52a0\u8f7d\u5b50\u7c7b\u3002")),(0,r.yg)("h3",{id:"event-collect-api"},"Event Collect API"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.source.SourceSplitEnumerator")," - \u5728",(0,r.yg)("inlineCode",{parentName:"li"},"SourceSplitEnumerator"),"\u52a0\u8f7d\u4e8b\u4ef6\u76d1\u542c\u5668\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.source;\n\npublic interface SourceSplitEnumerator {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this enumerator.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.source.SourceReader")," - \u5728",(0,r.yg)("inlineCode",{parentName:"li"},"SourceReader"),"\u52a0\u8f7d\u4e8b\u4ef6\u76d1\u542c\u5668\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.source;\n\npublic interface SourceReader {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this reader.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.seatunnel.api.sink.SinkWriter")," - \u5728",(0,r.yg)("inlineCode",{parentName:"li"},"SinkWriter"),"\u52a0\u8f7d\u4e8b\u4ef6\u76d1\u542c\u5668\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.api.sink;\n\npublic interface SinkWriter {\n\n    interface Context {\n\n        /**\n         * Get the {@link org.apache.seatunnel.api.event.EventListener} of this writer.\n         *\n         * @return\n         */\n        EventListener getEventListener();\n    }\n}\n")),(0,r.yg)("h2",{id:"\u8bbe\u7f6e\u76d1\u542c\u5668"},"\u8bbe\u7f6e\u76d1\u542c\u5668"),(0,r.yg)("p",null,"\u60a8\u9700\u8981\u8bbe\u7f6e\u5f15\u64ce\u914d\u7f6e\u4ee5\u4f7f\u7528\u4e8b\u4ef6\u76d1\u542c\u5668\u529f\u80fd\u3002"),(0,r.yg)("h3",{id:"zeta-\u5f15\u64ce"},"Zeta \u5f15\u64ce"),(0,r.yg)("p",null,"\u914d\u7f6e\u6837\u4f8b(seatunnel.yaml):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'seatunnel:\n  engine:\n    event-report-http:\n      url: "http://example.com:1024/event/report"\n      headers:\n        Content-Type: application/json\n')),(0,r.yg)("h3",{id:"flink-\u5f15\u64ce"},"Flink \u5f15\u64ce"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.EventHandler")," \u63a5\u53e3\u5e76\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84\uff0cSPI\u4f1a\u81ea\u52a8\u52a0\u8f7d\u3002"),(0,r.yg)("p",null,"\u652f\u6301\u7684flink\u7248\u672c: 1.14.0+"),(0,r.yg)("p",null,"\u6837\u4f8b: ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.LoggingEventHandler")),(0,r.yg)("h3",{id:"spark-\u5f15\u64ce"},"Spark \u5f15\u64ce"),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.event.EventHandler")," \u63a5\u53e3\u5e76\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84\uff0cSPI\u4f1a\u81ea\u52a8\u52a0\u8f7d\u3002"))}g.isMDXComponent=!0}}]);
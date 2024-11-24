"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[33366],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,y=s["".concat(p,".").concat(m)]||s[m]||g[m]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={sidebar_position:4},i="Sink \u5e38\u7528\u9009\u9879",o={unversionedId:"connector-v2/sink-common-options",id:"connector-v2/sink-common-options",title:"Sink \u5e38\u7528\u9009\u9879",description:"Sink \u8fde\u63a5\u5668\u5e38\u7528\u53c2\u6570",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink-common-options.md",sourceDirName:"connector-v2",slug:"/connector-v2/sink-common-options",permalink:"/zh-CN/docs/connector-v2/sink-common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink-common-options.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Source Common Options",permalink:"/zh-CN/docs/connector-v2/source-common-options"},next:{title:"Error Quick Reference Manual",permalink:"/zh-CN/docs/connector-v2/Error-Quick-Reference-Manual"}},p={},u=[{value:"plugin_input string",id:"plugin_input-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],c={toc:u},s="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sink-\u5e38\u7528\u9009\u9879"},"Sink \u5e38\u7528\u9009\u9879"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sink \u8fde\u63a5\u5668\u5e38\u7528\u53c2\u6570")),(0,a.yg)("p",null,":::warn"),(0,a.yg)("p",null,"\u65e7\u7684\u914d\u7f6e\u540d\u79f0 ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u5c3d\u5feb\u8fc1\u79fb\u5230\u65b0\u540d\u79f0 ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input"),"\u3002"),(0,a.yg)("p",null,":::"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plugin_input"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"plugin_input-string"},"plugin_input ","[string]"),(0,a.yg)("p",null,"\u5f53\u4e0d\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input")," \u65f6\uff0c\u5f53\u524d\u63d2\u4ef6\u5904\u7406\u914d\u7f6e\u6587\u4ef6\u4e2d\u4e0a\u4e00\u4e2a\u63d2\u4ef6\u8f93\u51fa\u7684\u6570\u636e\u96c6 ",(0,a.yg)("inlineCode",{parentName:"p"},"dataset")),(0,a.yg)("p",null,"\u5f53\u6307\u5b9a\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input")," \u65f6\uff0c\u5f53\u524d\u63d2\u4ef6\u6b63\u5728\u5904\u7406\u8be5\u53c2\u6570\u5bf9\u5e94\u7684\u6570\u636e\u96c6"),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,a.yg)("p",null,"\u5f53\u6ca1\u6709\u6307\u5b9a",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528 env \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u3002"),(0,a.yg)("p",null,"\u5f53\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism")," \u65f6\uff0c\u5b83\u5c06\u8986\u76d6 env \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u3002"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      plugin_output = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      plugin_input = "fake"\n      fields = [name]\n      plugin_output = "fake_name"\n    }\n    Filter {\n      plugin_input = "fake"\n      fields = [age]\n      plugin_output = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      plugin_input = "fake_name"\n    }\n    Console {\n      plugin_input = "fake_age"\n    }\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u4f5c\u4e1a\u53ea\u6709\u4e00\u4e2a source \u548c\u4e00\u4e2a\uff08\u6216\u96f6\u4e2a\uff09transform \u548c\u4e00\u4e2a sink \uff0c\u5219\u4e0d\u9700\u8981\u4e3a\u8fde\u63a5\u5668\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_output"),"\u3002\n\u5982\u679c source \u3001transform \u548c sink \u4e2d\u4efb\u610f\u8fd0\u7b97\u7b26\u7684\u6570\u91cf\u5927\u4e8e 1\uff0c\u5219\u5fc5\u987b\u4e3a\u4f5c\u4e1a\u4e2d\u7684\u6bcf\u4e2a\u8fde\u63a5\u5668\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_output"))))}g.isMDXComponent=!0}}]);
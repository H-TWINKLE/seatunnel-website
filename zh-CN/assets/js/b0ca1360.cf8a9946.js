"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79407],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),o=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=o(n),u=r,m=y["".concat(g,".").concat(u)]||y[u]||d[u]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={},i="Elasticsearch",s={unversionedId:"connector-v2/sink/Elasticsearch",id:"version-2.3.5/connector-v2/sink/Elasticsearch",title:"Elasticsearch",description:"\u63cf\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Elasticsearch.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Elasticsearch",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Elasticsearch",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.5/connector-v2/sink/Elasticsearch.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"INFINI Easysearch",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Easysearch"},next:{title:"Email",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Email"}},g={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"index string",id:"index-string",level:3},{value:"index_type string",id:"index_type-string",level:3},{value:"primary_keys list",id:"primary_keys-list",level:3},{value:"key_delimiter string",id:"key_delimiter-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_retry_count int",id:"max_retry_count-int",level:3},{value:"max_batch_size int",id:"max_batch_size-int",level:3},{value:"tls_verify_certificate boolean",id:"tls_verify_certificate-boolean",level:3},{value:"tls_verify_hostname boolean",id:"tls_verify_hostname-boolean",level:3},{value:"tls_keystore_path string",id:"tls_keystore_path-string",level:3},{value:"tls_keystore_password string",id:"tls_keystore_password-string",level:3},{value:"tls_truststore_path string",id:"tls_truststore_path-string",level:3},{value:"tls_truststore_password string",id:"tls_truststore_password-string",level:3},{value:"common options",id:"common-options",level:3},{value:"schema_save_mode",id:"schema_save_mode",level:3},{value:"data_save_mode",id:"data_save_mode",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u4e0b\u4e00\u7248\u672c",id:"\u4e0b\u4e00\u7248\u672c",level:3}],p={toc:o},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u8f93\u51fa\u6570\u636e\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.5/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.5/concept/connector-v2-features"},"cdc"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5f15\u64ce\u652f\u6301"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"\u652f\u6301  ",(0,r.yg)("inlineCode",{parentName:"li"},"ElasticSearch \u7248\u672c >= 2.x \u5e76\u4e14 <= 8.x")))),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hosts"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"index_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"key_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"_"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_retry_count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"max_batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_verify_certificate"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_verify_hostnames"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_keystore_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_keystore_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_truststore_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tls_truststore_password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")," \u96c6\u7fa4http\u5730\u5740\uff0c\u683c\u5f0f\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port")," \uff0c\u5141\u8bb8\u6307\u5b9a\u591a\u4e2a\u4e3b\u673a\u3002\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},'["host1:9200"\uff0c "host2:9200"]')),(0,r.yg)("h3",{id:"index-string"},"index ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"index")," \u540d\u79f0\u3002\u7d22\u5f15\u652f\u6301\u5305\u542b\u5b57\u6bb5\u540d\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel_${age}"),"\uff0c\u5e76\u4e14\u8be5\u5b57\u6bb5\u5fc5\u987b\u51fa\u73b0\u5728 seatunnel Row \u4e2d\u3002\u5982\u679c\u6ca1\u6709\uff0c\u6211\u4eec\u5c06\u628a\u5b83\u89c6\u4e3a\u666e\u901a\u7d22\u5f15"),(0,r.yg)("h3",{id:"index_type-string"},"index_type ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Elasticsearch")," \u7d22\u5f15\u7c7b\u578b\uff0celasticsearch 6\u53ca\u4ee5\u4e0a\u7248\u672c\u5efa\u8bae\u4e0d\u8981\u6307\u5b9a"),(0,r.yg)("h3",{id:"primary_keys-list"},"primary_keys ","[list]"),(0,r.yg)("p",null,"\u4e3b\u952e\u5b57\u6bb5\u7528\u4e8e\u751f\u6210\u6587\u6863 ",(0,r.yg)("inlineCode",{parentName:"p"},"_id")," \uff0c\u8fd9\u662f CDC \u5fc5\u9700\u7684\u9009\u9879\u3002"),(0,r.yg)("h3",{id:"key_delimiter-string"},"key_delimiter ","[string]"),(0,r.yg)("p",null,"\u8bbe\u5b9a\u590d\u5408\u952e\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"_"),"\uff09\uff0c\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"$")," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u90a3\u4e48\u6587\u6863\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"_id")," \u5c06\u5448\u73b0\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY1$KEY2$KEY3")," \u7684\u683c\u5f0f"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"x-pack \u7528\u6237\u540d"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"x-pack \u5bc6\u7801"),(0,r.yg)("h3",{id:"max_retry_count-int"},"max_retry_count ","[int]"),(0,r.yg)("p",null,"\u6279\u6b21\u6279\u91cf\u8bf7\u6c42\u6700\u5927\u5c1d\u8bd5\u5927\u5c0f"),(0,r.yg)("h3",{id:"max_batch_size-int"},"max_batch_size ","[int]"),(0,r.yg)("p",null,"\u6279\u6b21\u6279\u91cf\u6587\u6863\u6700\u5927\u5927\u5c0f"),(0,r.yg)("h3",{id:"tls_verify_certificate-boolean"},"tls_verify_certificate ","[boolean]"),(0,r.yg)("p",null,"\u4e3a HTTPS \u7aef\u70b9\u542f\u7528\u8bc1\u4e66\u9a8c\u8bc1"),(0,r.yg)("h3",{id:"tls_verify_hostname-boolean"},"tls_verify_hostname ","[boolean]"),(0,r.yg)("p",null,"\u4e3a HTTPS \u7aef\u70b9\u542f\u7528\u4e3b\u673a\u540d\u9a8c\u8bc1"),(0,r.yg)("h3",{id:"tls_keystore_path-string"},"tls_keystore_path ","[string]"),(0,r.yg)("p",null,"\u6307\u5411 PEM \u6216 JKS \u5bc6\u94a5\u5b58\u50a8\u7684\u8def\u5f84\u3002\u8fd0\u884c SeaTunnel \u7684\u64cd\u4f5c\u7cfb\u7edf\u7528\u6237\u5fc5\u987b\u80fd\u591f\u8bfb\u53d6\u6b64\u6587\u4ef6"),(0,r.yg)("h3",{id:"tls_keystore_password-string"},"tls_keystore_password ","[string]"),(0,r.yg)("p",null,"\u6307\u5b9a\u7684\u5bc6\u94a5\u5b58\u50a8\u7684\u5bc6\u94a5\u5bc6\u7801"),(0,r.yg)("h3",{id:"tls_truststore_path-string"},"tls_truststore_path ","[string]"),(0,r.yg)("p",null,"\u6307\u5411 PEM \u6216 JKS \u4fe1\u4efb\u5b58\u50a8\u7684\u8def\u5f84\u3002\u8fd0\u884c SeaTunnel \u7684\u64cd\u4f5c\u7cfb\u7edf\u7528\u6237\u5fc5\u987b\u80fd\u591f\u8bfb\u53d6\u6b64\u6587\u4ef6"),(0,r.yg)("h3",{id:"tls_truststore_password-string"},"tls_truststore_password ","[string]"),(0,r.yg)("p",null,"\u6307\u5b9a\u7684\u4fe1\u4efb\u5b58\u50a8\u7684\u5bc6\u94a5\u5bc6\u7801"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.5/connector-v2/sink/common-options"},"Sink\u5e38\u7528\u9009\u9879")," \u4e86\u89e3\u8be6\u60c5"),(0,r.yg)("h3",{id:"schema_save_mode"},"schema_save_mode"),(0,r.yg)("p",null,"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u4fa7\u5df2\u6709\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848",(0,r.yg)("br",null),"\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u4f1a\u5220\u9664\u5e76\u91cd\u5efa",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u5219\u8df3\u8fc7\u521b\u5efa",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u5c06\u629b\u51fa\u9519\u8bef",(0,r.yg)("br",null)),(0,r.yg)("h3",{id:"data_save_mode"},"data_save_mode"),(0,r.yg)("p",null,"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u4fa7\u5df2\u5b58\u5728\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848",(0,r.yg)("br",null),"\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a \u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u5220\u9664\u6570\u636e",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1a\u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4fdd\u7559\u6570\u636e",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1a\u5f53\u6709\u6570\u636e\u65f6\u629b\u51fa\u9519\u8bef",(0,r.yg)("br",null)),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u7b80\u5355\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n    }\n}\n')),(0,r.yg)("p",null,"\u53d8\u66f4\u6570\u636e\u6355\u83b7 (Change data capture) \u4e8b\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Elasticsearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n        \n        # CDC required options\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,r.yg)("p",null,"SSL \u7981\u7528\u8bc1\u4e66\u9a8c\u8bc1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_certificate = false\n    }\n}\n')),(0,r.yg)("p",null,"SSL \u7981\u7528\u4e3b\u673a\u540d\u9a8c\u8bc1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_verify_hostname = false\n    }\n}\n')),(0,r.yg)("p",null,"SSL \u542f\u7528\u8bc1\u4e66\u9a8c\u8bc1"),(0,r.yg)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"tls_keystore_path")," \u4e0e ",(0,r.yg)("inlineCode",{parentName:"p"},"tls_keystore_password")," \u6307\u5b9a\u8bc1\u4e66\u8def\u5f84\u53ca\u5bc6\u7801"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        tls_keystore_path = "${your elasticsearch home}/config/certs/http.p12"\n        tls_keystore_password = "${your password}"\n    }\n}\n')),(0,r.yg)("p",null,"\u914d\u7f6e\u8868\u751f\u6210\u7b56\u7565 (schema_save_mode)"),(0,r.yg)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"schema_save_mode")," \u914d\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \u6765\u652f\u6301\u4e0d\u5b58\u5728\u8868\u65f6\u521b\u5efa\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Elasticsearch {\n        hosts = ["https://localhost:9200"]\n        username = "elastic"\n        password = "elasticsearch"\n        \n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode = "APPEND_DATA"\n    }\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)("h3",{id:"\u4e0b\u4e00\u7248\u672c"},"\u4e0b\u4e00\u7248\u672c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support CDC write DELETE/UPDATE/INSERT events (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3673"},"3673"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support https protocol & compatible with opensearch (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3997"},"3997"),")")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[53173],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),m=d(n),s=l,u=m["".concat(p,".").concat(s)]||m[s]||o[s]||r;return n?a.createElement(u,i(i({ref:t},y),{},{components:n})):a.createElement(u,i({ref:t},y))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[m]="string"==typeof e?e:l,i[1]=g;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>g,toc:()=>d});var a=n(58168),l=(n(96540),n(15680));const r={},i="Hdfs\u6587\u4ef6",g={unversionedId:"connector-v2/source/HdfsFile",id:"connector-v2/source/HdfsFile",title:"Hdfs\u6587\u4ef6",description:"Hdfs\u6587\u4ef6 \u6570\u636e\u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/HdfsFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/HdfsFile",permalink:"/zh-CN/docs/connector-v2/source/HdfsFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/HdfsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/zh-CN/docs/connector-v2/source/Hbase"},next:{title:"Hive",permalink:"/zh-CN/docs/connector-v2/source/Hive"}},p={},d=[{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6e90\u9009\u9879",id:"\u6e90\u9009\u9879",level:2},{value:"delimiter/field_delimiter string",id:"delimiterfield_delimiter-string",level:3},{value:"file_filter_pattern string",id:"file_filter_pattern-string",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"Filter File",id:"filter-file",level:3}],y={toc:d},m="wrapper";function o(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hdfs\u6587\u4ef6"},"Hdfs\u6587\u4ef6"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hdfs\u6587\u4ef6 \u6570\u636e\u6e90\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,l.yg)("p",null,"\u5728\u4e00\u6b21 pollNext \u8c03\u7528\u4e2d\u8bfb\u53d6\u5206\u7247\u4e2d\u7684\u6240\u6709\u6570\u636e\u3002\u5c06\u8bfb\u53d6\u7684\u5206\u7247\u4fdd\u5b58\u5728\u5feb\u7167\u4e2d\u3002"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5217\u6295\u5f71")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u5b9a\u4e49\u7684\u5206\u7247")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u4ef6\u683c\u5f0f",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u672c"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CSV"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ORC"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","JSON"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Excel")))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u4eceHdfs\u6587\u4ef6\u7cfb\u7edf\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Hdfs\u6587\u4ef6"),(0,l.yg)("td",{parentName:"tr",align:null},"hadoop 2.x \u548c 3.x")))),(0,l.yg)("h2",{id:"\u6e90\u9009\u9879"},"\u6e90\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6e90\u6587\u4ef6\u8def\u5f84\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u6587\u4ef6\u7c7b\u578b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"td"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"td"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"td"},"excel"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u6700\u7ec8\u6587\u4ef6\u540d\u5c06\u4ee5\u6587\u4ef6\u683c\u5f0f\u7684\u540e\u7f00\u7ed3\u675f\uff0c\u6587\u672c\u6587\u4ef6\u7684\u540e\u7f00\u662f ",(0,l.yg)("inlineCode",{parentName:"td"},"txt"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fs.defaultFS"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ee5 ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://")," \u5f00\u5934\u7684 Hadoop \u96c6\u7fa4\u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://hadoopcluster"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u6e90\u7684\u8bfb\u53d6\u5217\u5217\u8868\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5b83\u5b9e\u73b0\u5b57\u6bb5\u6295\u5f71\u3002\u652f\u6301\u7684\u6587\u4ef6\u7c7b\u578b\u7684\u5217\u6295\u5f71\u5982\u4e0b\u6240\u793a\uff1a","[text,json,csv,orc,parquet,excel]","\u3002\u63d0\u793a\uff1a\u5982\u679c\u7528\u6237\u5728\u8bfb\u53d6 ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," \u6587\u4ef6\u65f6\u60f3\u8981\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u5fc5\u987b\u914d\u7f6e schema \u9009\u9879\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hdfs-site.xml")," \u7684\u8def\u5f84\uff0c\u7528\u4e8e\u52a0\u8f7d namenodes \u7684 ha \u914d\u7f6e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter/field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b57\u6bb5\u5206\u9694\u7b26\uff0c\u7528\u4e8e\u544a\u8bc9\u8fde\u63a5\u5668\u5728\u8bfb\u53d6\u6587\u672c\u6587\u4ef6\u65f6\u5982\u4f55\u5207\u5206\u5b57\u6bb5\u3002\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"td"},"\\001"),"\uff0c\u4e0e Hive \u7684\u9ed8\u8ba4\u5206\u9694\u7b26\u76f8\u540c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u662f\u5426\u4ece\u6587\u4ef6\u8def\u5f84\u4e2d\u89e3\u6790\u5206\u533a\u952e\u548c\u503c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u4ece\u8def\u5f84 ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")," \u8bfb\u53d6\u6587\u4ef6\uff0c\u5219\u6765\u81ea\u6587\u4ef6\u7684\u6bcf\u6761\u8bb0\u5f55\u6570\u636e\u5c06\u6dfb\u52a0\u8fd9\u4e24\u4e2a\u5b57\u6bb5\uff1a","[name:tyrantlucifer,age:26]","\u3002\u63d0\u793a\uff1a\u4e0d\u8981\u5728 schema \u9009\u9879\u4e2d\u5b9a\u4e49\u5206\u533a\u5b57\u6bb5\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,l.yg)("td",{parentName:"tr",align:null},"\u65e5\u671f\u7c7b\u578b\u683c\u5f0f\uff0c\u7528\u4e8e\u544a\u8bc9\u8fde\u63a5\u5668\u5982\u4f55\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f\uff0c\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd"),"\uff0c\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd"),"\u3002\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u683c\u5f0f\uff0c\u7528\u4e8e\u544a\u8bc9\u8fde\u63a5\u5668\u5982\u4f55\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65e5\u671f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss"),"\uff0c\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u7c7b\u578b\u683c\u5f0f\uff0c\u7528\u4e8e\u544a\u8bc9\u8fde\u63a5\u5668\u5982\u4f55\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u65f6\u95f4\uff0c\u652f\u6301\u7684\u683c\u5f0f\u5982\u4e0b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS"),"\uff0c\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"td"},"HH:mm:ss"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"remote_user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5 Hadoop \u7684\u767b\u5f55\u7528\u6237\u3002\u5b83\u65e8\u5728\u7528\u4e8e RPC \u4e2d\u7684\u8fdc\u7a0b\u7528\u6237\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u51ed\u636e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684 krb5 \u8def\u5f84\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684 principal\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684 keytab \u8def\u5f84\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u524d\u51e0\u884c\uff0c\u4f46\u4ec5\u9002\u7528\u4e8e txt \u548c csv\u3002\u4f8b\u5982\uff0c\u8bbe\u7f6e\u5982\u4e0b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"skip_header_row_number = 2"),"\u3002\u7136\u540e Seatunnel \u5c06\u8df3\u8fc7\u6e90\u6587\u4ef6\u4e2d\u7684\u524d\u4e24\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u7528\u4e8e\u8fc7\u6ee4\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u6570\u636e\u7684\u6a21\u5f0f\u5b57\u6bb5\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8bfb\u53d6\u5de5\u4f5c\u7c3f\u7684\u8868\u683c\uff0c\u4ec5\u5728\u6587\u4ef6\u683c\u5f0f\u4e3a excel \u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7684\u538b\u7f29\u7f16\u89e3\u7801\u5668\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"td",href:"../../../en/connector-v2/source-common-options.md"},"\u6e90\u901a\u7528\u9009\u9879")," \u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u3002")))),(0,l.yg)("h3",{id:"delimiterfield_delimiter-string"},"delimiter/field_delimiter ","[string]"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"delimiter")," \u53c2\u6570\u5728\u7248\u672c 2.3.5 \u540e\u5c06\u88ab\u5f03\u7528\uff0c\u8bf7\u6539\u7528 ",(0,l.yg)("strong",{parentName:"p"},"field_delimiter"),"\u3002"),(0,l.yg)("h3",{id:"file_filter_pattern-string"},"file_filter_pattern ","[string]"),(0,l.yg)("p",null,"\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u7528\u4e8e\u8fc7\u6ee4\u6587\u4ef6\u3002"),(0,l.yg)("p",null,"\u8fd9\u4e2a\u8fc7\u6ee4\u89c4\u5219\u9075\u5faa\u6b63\u5219\u8868\u8fbe\u5f0f. \u5173\u4e8e\u8be6\u60c5\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regular_expression"},"https://en.wikipedia.org/wiki/Regular_expression")," \u5b66\u4e60"),(0,l.yg)("p",null,"\u8fd9\u91cc\u662f\u4e00\u4e9b\u4f8b\u5b50."),(0,l.yg)("p",null,"\u6587\u4ef6\u6e05\u5355:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/report.txt\n/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n/data/seatunnel/20241005/old_data.csv\n/data/seatunnel/20241012/logo.png\n")),(0,l.yg)("p",null,"\u5339\u914d\u89c4\u5219:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4f8b\u5b50 1"),": ",(0,l.yg)("em",{parentName:"p"},"\u5339\u914d\u6240\u6709txt\u4e3a\u540e\u7f00\u540d\u7684\u6587\u4ef6"),"\uff0c\u5339\u914d\u6b63\u5219\u4e3a:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/.*\\.txt\n")),(0,l.yg)("p",null,"\u5339\u914d\u7684\u7ed3\u679c\u662f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/report.txt\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4f8b\u5b50 2"),": ",(0,l.yg)("em",{parentName:"p"},"\u5339\u914d\u6240\u6709\u6587\u4ef6\u540d\u4ee5abc\u5f00\u5934\u7684\u6587\u4ef6"),"\uff0c\u5339\u914d\u6b63\u5219\u4e3a:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241002/abc.*\n")),(0,l.yg)("p",null,"\u5339\u914d\u7684\u7ed3\u679c\u662f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4f8b\u5b50 3"),": ",(0,l.yg)("em",{parentName:"p"},"\u5339\u914d\u6240\u6709\u6587\u4ef6\u540d\u4ee5abc\u5f00\u5934\uff0c\u5e76\u4e14\u6587\u4ef6\u7b2c\u56db\u4e2a\u5b57\u6bcd\u662f h \u6216\u8005 g \u7684\u6587\u4ef6"),", \u5339\u914d\u6b63\u5219\u4e3a:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abc[h,g].*\n")),(0,l.yg)("p",null,"\u5339\u914d\u7684\u7ed3\u679c\u662f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u4f8b\u5b50 4"),": ",(0,l.yg)("em",{parentName:"p"},"\u5339\u914d\u6240\u6709\u6587\u4ef6\u5939\u7b2c\u4e09\u7ea7\u4ee5 202410 \u5f00\u5934\u5e76\u4e14\u6587\u4ef6\u540e\u7f00\u540d\u662f.csv\u7684\u6587\u4ef6"),", \u5339\u914d\u6b63\u5219\u4e3a:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/202410\\d*/.*\\.csv\n")),(0,l.yg)("p",null,"\u5339\u914d\u7684\u7ed3\u679c\u662f:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n/data/seatunnel/20241005/old_data.csv\n")),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"\u6587\u4ef6\u7684\u538b\u7f29\u7f16\u89e3\u7801\u5668\u53ca\u652f\u6301\u7684\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc/parquet\uff1a",(0,l.yg)("br",{parentName:"li"}),"\u81ea\u52a8\u8bc6\u522b\u538b\u7f29\u7c7b\u578b\uff0c\u65e0\u9700\u989d\u5916\u8bbe\u7f6e\u3002")),(0,l.yg)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u4f7f\u7528 spark/flink\uff0c\u4e3a\u4e86")),(0,l.yg)("p",null,"\u4f7f\u7528\u6b64\u8fde\u63a5\u5668\uff0c\u60a8\u5fc5\u987b\u786e\u4fdd\u60a8\u7684 spark/flink \u96c6\u7fa4\u5df2\u7ecf\u96c6\u6210\u4e86 hadoop\u3002\u6d4b\u8bd5\u8fc7\u7684 hadoop \u7248\u672c\u662f 2.x\u3002\u5982\u679c\u60a8\u4f7f\u7528 SeaTunnel Engine\uff0c\u5219\u5728\u4e0b\u8f7d\u548c\u5b89\u88c5 SeaTunnel Engine \u65f6\u4f1a\u81ea\u52a8\u96c6\u6210 hadoop jar\u3002\u60a8\u53ef\u4ee5\u68c0\u67e5 ",(0,l.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib")," \u4e0b\u7684 jar \u5305\u6765\u786e\u8ba4\u8fd9\u4e00\u70b9\u3002"),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a SeaTunnel \u540c\u6b65\u4efb\u52a1\uff0c\u4ece Hdfs \u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230 Hdfs\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# \u5b9a\u4e49\u8fd0\u884c\u65f6\u73af\u5883\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  HdfsFile {\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n  path = "/apps/hive/demo/student"\n  type = "json"\n  fs.defaultFS = "hdfs://namenode001"\n  }\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u548c\u67e5\u770b\u6e90\u63d2\u4ef6\u5b8c\u6574\u5217\u8868\u7684\u66f4\u591a\u4fe1\u606f\uff0c\n  # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/source\n}\n\ntransform {\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u548c\u67e5\u770b\u8f6c\u6362\u63d2\u4ef6\u5b8c\u6574\u5217\u8868\u7684\u66f4\u591a\u4fe1\u606f\uff0c\n    # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    HdfsFile {\n      fs.defaultFS = "hdfs://hadoopcluster"\n      path = "/tmp/hive/warehouse/test2"\n      file_format = "orc"\n    }\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u548c\u67e5\u770b\u63a5\u6536\u5668\u63d2\u4ef6\u5b8c\u6574\u5217\u8868\u7684\u66f4\u591a\u4fe1\u606f\uff0c\n  # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/sink\n}\n')),(0,l.yg)("h3",{id:"filter-file"},"Filter File"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  HdfsFile {\n    path = "/apps/hive/demo/student"\n    file_format_type = "json"\n    fs.defaultFS = "hdfs://namenode001"\n    file_filter_pattern = "abc[DX]*.*"\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')))}o.isMDXComponent=!0}}]);
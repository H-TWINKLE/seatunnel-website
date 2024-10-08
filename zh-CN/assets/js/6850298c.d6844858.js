"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56310],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),o=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=o(t),s=l,u=m["".concat(g,".").concat(s)]||m[s]||y[s]||r;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var d={};for(var g in n)hasOwnProperty.call(n,g)&&(d[g]=n[g]);d.originalType=e,d[m]="string"==typeof e?e:l,i[1]=d;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},22067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={},i="Hdfs\u6587\u4ef6",d={unversionedId:"connector-v2/sink/HdfsFile",id:"connector-v2/sink/HdfsFile",title:"Hdfs\u6587\u4ef6",description:"Hdfs\u6587\u4ef6 \u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/HdfsFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/HdfsFile",permalink:"/zh-CN/docs/connector-v2/sink/HdfsFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/HdfsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/zh-CN/docs/connector-v2/sink/Hbase"},next:{title:"Hive",permalink:"/zh-CN/docs/connector-v2/sink/Hive"}},g={},o=[{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u63a5\u6536\u5668\u9009\u9879",id:"\u63a5\u6536\u5668\u9009\u9879",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"orc \u6587\u4ef6\u683c\u5f0f\u7684\u7b80\u5355\u914d\u7f6e",id:"orc-\u6587\u4ef6\u683c\u5f0f\u7684\u7b80\u5355\u914d\u7f6e",level:3},{value:"text \u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\uff0c\u5305\u62ec <code>have_partition</code>\u3001<code>custom_filename</code> \u548c <code>sink_columns</code>",id:"text-\u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\u5305\u62ec-have_partitioncustom_filename-\u548c-sink_columns",level:3},{value:"parquet \u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\uff0c\u5305\u62ec <code>have_partition</code>\u3001<code>custom_filename</code> \u548c <code>sink_columns</code>",id:"parquet-\u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\u5305\u62ec-have_partitioncustom_filename-\u548c-sink_columns",level:3},{value:"kerberos \u7684\u7b80\u5355\u914d\u7f6e",id:"kerberos-\u7684\u7b80\u5355\u914d\u7f6e",level:3},{value:"\u538b\u7f29\u7684\u7b80\u5355\u914d\u7f6e",id:"\u538b\u7f29\u7684\u7b80\u5355\u914d\u7f6e",level:3}],p={toc:o},m="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hdfs\u6587\u4ef6"},"Hdfs\u6587\u4ef6"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hdfs\u6587\u4ef6 \u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../../en/concept/connector-v2-features.md"},"\u7cbe\u786e\u4e00\u6b21"))),(0,l.yg)("p",null,'\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u75282PC\u63d0\u4ea4\u6765\u786e\u4fdd"\u7cbe\u786e\u4e00\u6b21"'),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u4ef6\u683c\u5f0f\u7c7b\u578b",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u672c"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CSV"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","ORC"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","JSON"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Excel"))),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u538b\u7f29\u7f16\u89e3\u7801\u5668",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","lzo")))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u5c06\u6570\u636e\u8f93\u51fa\u5230Hdfs\u6587\u4ef6"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Hdfs\u6587\u4ef6"),(0,l.yg)("td",{parentName:"tr",align:null},"hadoop 2.x \u548c 3.x")))),(0,l.yg)("h2",{id:"\u63a5\u6536\u5668\u9009\u9879"},"\u63a5\u6536\u5668\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fs.defaultFS"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ee5 ",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://")," \u5f00\u5934\u7684 Hadoop \u96c6\u7fa4\u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"hdfs://hadoopcluster"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807\u76ee\u5f55\u8def\u5f84\u662f\u5fc5\u9700\u7684\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tmp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u6587\u4ef6\u5c06\u9996\u5148\u5199\u5165\u4e34\u65f6\u8def\u5f84\uff0c\u7136\u540e\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"mv")," \u547d\u4ee4\u5c06\u4e34\u65f6\u76ee\u5f55\u63d0\u4ea4\u5230\u76ee\u6807\u76ee\u5f55\u3002\u9700\u8981\u4e00\u4e2aHdfs\u8def\u5f84\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hdfs-site.xml")," \u7684\u8def\u5f84\uff0c\u7528\u4e8e\u52a0\u8f7d namenodes \u7684 ha \u914d\u7f6e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 ",(0,l.yg)("inlineCode",{parentName:"td"},"custom_filename")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," \u65f6\u4f7f\u7528\u3002",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression")," \u63cf\u8ff0\u5c06\u521b\u5efa\u5230 ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," \u4e2d\u7684\u6587\u4ef6\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression")," \u4e2d\u6dfb\u52a0\u53d8\u91cf ",(0,l.yg)("inlineCode",{parentName:"td"},"${now}")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"td"},"${uuid}"),"\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"td"},"test_${uuid}_${now}"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"td"},"${now}")," \u8868\u793a\u5f53\u524d\u65f6\u95f4\uff0c\u5176\u683c\u5f0f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u9009\u9879 ",(0,l.yg)("inlineCode",{parentName:"td"},"filename_time_format")," \u6765\u5b9a\u4e49\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\uff0c\u6211\u4eec\u5c06\u5728\u6587\u4ef6\u5934\u90e8\u81ea\u52a8\u6dfb\u52a0 ",(0,l.yg)("inlineCode",{parentName:"td"},"${transactionId}_"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 ",(0,l.yg)("inlineCode",{parentName:"td"},"custom_filename")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," \u65f6\u4f7f\u7528\u3002\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"file_name_expression")," \u53c2\u6570\u4e2d\u7684\u683c\u5f0f\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"xxxx-${now}")," \u65f6\uff0c",(0,l.yg)("inlineCode",{parentName:"td"},"filename_time_format")," \u53ef\u4ee5\u6307\u5b9a\u8def\u5f84\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"yyyy.MM.dd"),"\u3002\u5e38\u7528\u7684\u65f6\u95f4\u683c\u5f0f\u5982\u4e0b\u6240\u793a\uff1a","[y:\u5e74,M:\u6708,d:\u6708\u4e2d\u7684\u4e00\u5929,H:\u4e00\u5929\u4e2d\u7684\u5c0f\u65f6\uff080-23\uff09\uff0cm:\u5c0f\u65f6\u4e2d\u7684\u5206\u949f\uff0cs:\u5206\u949f\u4e2d\u7684\u79d2]")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u6587\u4ef6\u7c7b\u578b\uff1a",(0,l.yg)("inlineCode",{parentName:"td"},"text")," ",(0,l.yg)("inlineCode",{parentName:"td"},"json")," ",(0,l.yg)("inlineCode",{parentName:"td"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"td"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"td"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"td"},"excel"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u6700\u7ec8\u6587\u4ef6\u540d\u5c06\u4ee5\u6587\u4ef6\u683c\u5f0f\u7684\u540e\u7f00\u7ed3\u675f\uff0c\u6587\u672c\u6587\u4ef6\u7684\u540e\u7f00\u662f ",(0,l.yg)("inlineCode",{parentName:"td"},"txt"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 file_format \u4e3a text \u65f6\u4f7f\u7528\uff0c\u6570\u636e\u884c\u4e2d\u5217\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u4ec5\u9700\u8981 ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," \u6587\u4ef6\u683c\u5f0f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 file_format \u4e3a text \u65f6\u4f7f\u7528\uff0c\u6587\u4ef6\u4e2d\u884c\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u4ec5\u9700\u8981 ",(0,l.yg)("inlineCode",{parentName:"td"},"text")," \u6587\u4ef6\u683c\u5f0f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5904\u7406\u5206\u533a\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 have_partition \u4e3a true \u65f6\u4f7f\u7528\uff0c\u6839\u636e\u9009\u5b9a\u7684\u5b57\u6bb5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728 have_partition \u4e3a true \u65f6\u4f7f\u7528\uff0c\u5982\u679c\u6307\u5b9a\u4e86 ",(0,l.yg)("inlineCode",{parentName:"td"},"partition_by"),"\uff0c\u6211\u4eec\u5c06\u6839\u636e\u5206\u533a\u4fe1\u606f\u751f\u6210\u76f8\u5e94\u7684\u5206\u533a\u76ee\u5f55\uff0c\u5e76\u5c06\u6700\u7ec8\u6587\u4ef6\u653e\u7f6e\u5728\u5206\u533a\u76ee\u5f55\u4e2d\u3002\u9ed8\u8ba4 ",(0,l.yg)("inlineCode",{parentName:"td"},"partition_dir_expression")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),"\u3002",(0,l.yg)("inlineCode",{parentName:"td"},"k0")," \u662f\u7b2c\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\uff0c",(0,l.yg)("inlineCode",{parentName:"td"},"v0")," \u662f\u7b2c\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\u7684\u503c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 ",(0,l.yg)("inlineCode",{parentName:"td"},"have_partition")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," \u65f6\u4f7f\u7528\u3002\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"is_partition_field_write_in_file")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5219\u5206\u533a\u5b57\u6bb5\u53ca\u5176\u503c\u5c06\u5199\u5165\u6570\u636e\u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u5199\u5165Hive\u6570\u636e\u6587\u4ef6\uff0c\u5219\u5176\u503c\u5e94\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u6b64\u53c2\u6570\u4e3a\u7a7a\u65f6\uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u662f\u63a5\u6536\u5668\u5217\u3002\u9700\u8981\u5199\u5165\u6587\u4ef6\u7684\u5217\uff0c\u9ed8\u8ba4\u503c\u662f\u4ece ",(0,l.yg)("inlineCode",{parentName:"td"},"Transform")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"td"},"Source")," \u83b7\u53d6\u7684\u6240\u6709\u5217\u3002\u5b57\u6bb5\u7684\u987a\u5e8f\u786e\u5b9a\u4e86\u5b9e\u9645\u5199\u5165\u6587\u4ef6\u65f6\u7684\u987a\u5e8f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," \u4e3a true\uff0c\u5219\u5728\u5c06\u6570\u636e\u5199\u5165\u76ee\u6807\u76ee\u5f55\u65f6\uff0c\u6211\u4eec\u5c06\u786e\u4fdd\u6570\u636e\u4e0d\u4f1a\u4e22\u5931\u6216\u91cd\u590d\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"is_enable_transaction")," \u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\uff0c\u6211\u4eec\u5c06\u5728\u6587\u4ef6\u5934\u90e8\u81ea\u52a8\u6dfb\u52a0 ",(0,l.yg)("inlineCode",{parentName:"td"},"${transactionId}_"),"\u3002\u76ee\u524d\u4ec5\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1000000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u4e2d\u7684\u6700\u5927\u884c\u6570\u3002\u5bf9\u4e8e SeaTunnel Engine\uff0c\u6587\u4ef6\u4e2d\u7684\u884c\u6570\u7531 ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," \u5171\u540c\u51b3\u5b9a\u3002\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," \u7684\u503c\u8db3\u591f\u5927\uff0c\u5219\u63a5\u6536\u5668\u5199\u5165\u5668\u5c06\u5728\u6587\u4ef6\u4e2d\u5199\u5165\u884c\uff0c\u76f4\u5230\u6587\u4ef6\u4e2d\u7684\u884c\u5927\u4e8e ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size"),"\u3002\u5982\u679c ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval")," \u5f88\u5c0f\uff0c\u5219\u63a5\u6536\u5668\u5199\u5165\u5668\u5c06\u5728\u65b0\u68c0\u67e5\u70b9\u89e6\u53d1\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u7684\u538b\u7f29\u7f16\u89e3\u7801\u5668\u53ca\u5176\u652f\u6301\u7684\u7ec6\u8282\u5982\u4e0b\u6240\u793a\uff1a","[txt: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"\uff0cjson: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"\uff0ccsv: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"\uff0corc: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"\uff0cparquet: ",(0,l.yg)("inlineCode",{parentName:"td"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"td"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"td"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"td"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"td"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"td"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"td"},"none"),"]","\u3002\u63d0\u793a\uff1aexcel\u7c7b\u578b\u4e0d\u652f\u6301\u4efb\u4f55\u538b\u7f29\u683c\u5f0f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"krb5_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"/etc/krb5.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684 krb5 \u8def\u5f84")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684\u4e3b\u4f53")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"kerberos \u7684 keytab \u8def\u5f84")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null},"\u538b\u7f29\u7f16\u89e3\u7801\u5668")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5668\u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink-common-options"},"\u63a5\u6536\u5668\u901a\u7528\u9009\u9879")," \u4e86\u89e3\u8be6\u60c5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 file_format \u4e3a excel \u65f6\u4f7f\u7528\u3002\u5f53\u6587\u4ef6\u683c\u5f0f\u4e3a Excel \u65f6\uff0c\u53ef\u4ee5\u7f13\u5b58\u5728\u5185\u5b58\u4e2d\u7684\u6700\u5927\u6570\u636e\u9879\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53 file_format \u4e3a excel \u65f6\u4f7f\u7528\u3002\u5c06\u5de5\u4f5c\u7c3f\u7684\u8868\u5199\u5165\u6307\u5b9a\u7684\u8868\u540d")))),(0,l.yg)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u4f7f\u7528 spark/flink\uff0c\u4e3a\u4e86\u4f7f\u7528\u6b64\u8fde\u63a5\u5668\uff0c\u60a8\u5fc5\u987b\u786e\u4fdd\u60a8\u7684 spark/flink \u96c6\u7fa4\u5df2\u7ecf\u96c6\u6210\u4e86 hadoop\u3002\u6d4b\u8bd5\u8fc7\u7684 hadoop \u7248\u672c\u662f\n2.x\u3002\u5982\u679c\u60a8\u4f7f\u7528 SeaTunnel Engine\uff0c\u5219\u5728\u4e0b\u8f7d\u548c\u5b89\u88c5 SeaTunnel Engine \u65f6\u4f1a\u81ea\u52a8\u96c6\u6210 hadoop\njar\u3002\u60a8\u53ef\u4ee5\u68c0\u67e5 ",(0,l.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib")," \u4e0b\u7684 jar \u5305\u6765\u786e\u8ba4\u8fd9\u4e00\u70b9\u3002")),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a SeaTunnel \u540c\u6b65\u4efb\u52a1\uff0c\u901a\u8fc7 FakeSource \u81ea\u52a8\u751f\u6210\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230 Hdfs\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# \u5b9a\u4e49\u8fd0\u884c\u65f6\u73af\u5883\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # \u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\u6e90\u63d2\u4ef6 **\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u548c\u6f14\u793a\u529f\u80fd\u6e90\u63d2\u4ef6**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        c_map = "map<string, smallint>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u7684\u66f4\u591a\u4fe1\u606f\u548c\u67e5\u770b\u5b8c\u6574\u7684\u6e90\u7aef\u63d2\u4ef6\u5217\u8868\uff0c\n  # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/source\n}\n\ntransform {\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u7684\u66f4\u591a\u4fe1\u606f\u548c\u67e5\u770b\u5b8c\u6574\u7684\u8f6c\u6362\u63d2\u4ef6\u5217\u8868\uff0c\n    # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    HdfsFile {\n      fs.defaultFS = "hdfs://hadoopcluster"\n      path = "/tmp/hive/warehouse/test2"\n      file_format_type = "orc"\n    }\n  # \u5982\u679c\u60a8\u60f3\u83b7\u53d6\u6709\u5173\u5982\u4f55\u914d\u7f6e seatunnel \u7684\u66f4\u591a\u4fe1\u606f\u548c\u67e5\u770b\u5b8c\u6574\u7684\u63a5\u6536\u5668\u63d2\u4ef6\u5217\u8868\uff0c\n  # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/sink\n}\n')),(0,l.yg)("h3",{id:"orc-\u6587\u4ef6\u683c\u5f0f\u7684\u7b80\u5355\u914d\u7f6e"},"orc \u6587\u4ef6\u683c\u5f0f\u7684\u7b80\u5355\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    file_format_type = "orc"\n}\n')),(0,l.yg)("h3",{id:"text-\u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\u5305\u62ec-have_partitioncustom_filename-\u548c-sink_columns"},"text \u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\uff0c\u5305\u62ec ",(0,l.yg)("inlineCode",{parentName:"h3"},"have_partition"),"\u3001",(0,l.yg)("inlineCode",{parentName:"h3"},"custom_filename")," \u548c ",(0,l.yg)("inlineCode",{parentName:"h3"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n}\n')),(0,l.yg)("h3",{id:"parquet-\u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\u5305\u62ec-have_partitioncustom_filename-\u548c-sink_columns"},"parquet \u6587\u4ef6\u683c\u5f0f\u7684\u914d\u7f6e\uff0c\u5305\u62ec ",(0,l.yg)("inlineCode",{parentName:"h3"},"have_partition"),"\u3001",(0,l.yg)("inlineCode",{parentName:"h3"},"custom_filename")," \u548c ",(0,l.yg)("inlineCode",{parentName:"h3"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    file_format_type = "parquet"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n}\n')),(0,l.yg)("h3",{id:"kerberos-\u7684\u7b80\u5355\u914d\u7f6e"},"kerberos \u7684\u7b80\u5355\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    hdfs_site_path = "/path/to/your/hdfs_site_path"\n    kerberos_principal = "your_principal@EXAMPLE.COM"\n    kerberos_keytab_path = "/path/to/your/keytab/file.keytab"\n}\n')),(0,l.yg)("h3",{id:"\u538b\u7f29\u7684\u7b80\u5355\u914d\u7f6e"},"\u538b\u7f29\u7684\u7b80\u5355\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'HdfsFile {\n    fs.defaultFS = "hdfs://hadoopcluster"\n    path = "/tmp/hive/warehouse/test2"\n    compress_codec = "lzo"\n}\n')))}y.isMDXComponent=!0}}]);
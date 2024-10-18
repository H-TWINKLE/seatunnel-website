"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[15765],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),d=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(g.Provider,{value:n},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),y=l,u=m["".concat(g,".").concat(y)]||m[y]||o[y]||r;return t?a.createElement(u,i(i({ref:n},s),{},{components:t})):a.createElement(u,i({ref:n},s))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=y;var p={};for(var g in n)hasOwnProperty.call(n,g)&&(p[g]=n[g]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},16066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=t(58168),l=(t(96540),t(15680));const r={},i="Hudi",p={unversionedId:"connector-v2/sink/Hudi",id:"connector-v2/sink/Hudi",title:"Hudi",description:"Hudi \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Hudi.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hudi",permalink:"/zh-CN/docs/connector-v2/sink/Hudi",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Hudi.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/zh-CN/docs/connector-v2/sink/Http"},next:{title:"Apache Iceberg",permalink:"/zh-CN/docs/connector-v2/sink/Iceberg"}},g={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u70b9",id:"\u4e3b\u8981\u7279\u70b9",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table_dfs_path string",id:"table_dfs_path-string",level:3},{value:"table_type enum",id:"table_type-enum",level:3},{value:"record_key_fields string",id:"record_key_fields-string",level:3},{value:"partition_fields string",id:"partition_fields-string",level:3},{value:"index_type string",id:"index_type-string",level:3},{value:"index_class_name string",id:"index_class_name-string",level:3},{value:"record_byte_size Int",id:"record_byte_size-int",level:3},{value:"conf_files_path string",id:"conf_files_path-string",level:3},{value:"op_type enum",id:"op_type-enum",level:3},{value:"batch_interval_ms Int",id:"batch_interval_ms-int",level:3},{value:"batch_size Int",id:"batch_size-int",level:3},{value:"insert_shuffle_parallelism Int",id:"insert_shuffle_parallelism-int",level:3},{value:"upsert_shuffle_parallelism Int",id:"upsert_shuffle_parallelism-int",level:3},{value:"min_commits_to_keep Int",id:"min_commits_to_keep-int",level:3},{value:"max_commits_to_keep Int",id:"max_commits_to_keep-int",level:3},{value:"cdc_enabled boolean",id:"cdc_enabled-boolean",level:3},{value:"schema_save_mode Enum",id:"schema_save_mode-enum",level:3},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5355\u8868",id:"\u5355\u8868",level:3},{value:"\u591a\u8868",id:"\u591a\u8868",level:3}],s={toc:d},m="wrapper";function o(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hudi"},"Hudi"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hudi \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165 Hudi\u3002"),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u70b9"},"\u4e3b\u8981\u7279\u70b9"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support multiple table write"))),(0,l.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.yg)("p",null,"\u57fa\u7840\u914d\u7f6e:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_dfs_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"conf_files_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_list"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("p",null,"\u8868\u6e05\u5355\u914d\u7f6e:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"default")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"COPY_ON_WRITE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"op_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"insert")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record_key_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"insert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upsert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"min_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"20")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"30")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"index_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"BLOOM")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"index_class_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record_byte_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1024")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cdc_enabled"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")))),(0,l.yg)("p",null,"\u6ce8\u610f: \u5f53\u6b64\u914d\u7f6e\u5bf9\u5e94\u4e8e\u5355\u4e2a\u8868\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06table_list\u4e2d\u7684\u914d\u7f6e\u9879\u5c55\u5e73\u5230\u5916\u5c42\u3002"),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," Hudi \u8868\u7684\u540d\u79f0\u3002"),(0,l.yg)("h3",{id:"database-string"},"database ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"database")," Hudi \u8868\u7684database."),(0,l.yg)("h3",{id:"table_dfs_path-string"},"table_dfs_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_dfs_path"),' Hudi \u8868\u7684 DFS \u6839\u8def\u5f84\uff0c\u4f8b\u5982 "hdfs://nameservice/data/hudi/"\u3002'),(0,l.yg)("h3",{id:"table_type-enum"},"table_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_type")," Hudi \u8868\u7684\u7c7b\u578b\u3002"),(0,l.yg)("h3",{id:"record_key_fields-string"},"record_key_fields ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"record_key_fields")," Hudi \u8868\u7684\u8bb0\u5f55\u952e\u5b57\u6bb5, \u5f53op_type\u662f",(0,l.yg)("inlineCode",{parentName:"p"},"UPSERT"),"\u7c7b\u578b\u65f6, \u5fc5\u987b\u914d\u7f6e\u8be5\u9879."),(0,l.yg)("h3",{id:"partition_fields-string"},"partition_fields ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"partition_fields")," Hudi \u8868\u7684\u5206\u533a\u5b57\u6bb5."),(0,l.yg)("h3",{id:"index_type-string"},"index_type ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"index_type")," Hudi \u8868\u7684\u7d22\u5f15\u7c7b\u578b. \u5f53\u524d\u53ea\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"p"},"BLOOM"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"SIMPLE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"GLOBAL SIMPLE"),"\u4e09\u79cd\u7c7b\u578b."),(0,l.yg)("h3",{id:"index_class_name-string"},"index_class_name ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"index_class_name")," Hudi \u8868\u81ea\u5b9a\u4e49\u7d22\u5f15\u540d\u79f0\uff0c\u4f8b\u5982: ",(0,l.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.connectors.seatunnel.hudi.index.CustomHudiIndex"),"."),(0,l.yg)("h3",{id:"record_byte_size-int"},"record_byte_size ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"record_byte_size")," Hudi \u8868\u5355\u884c\u8bb0\u5f55\u7684\u5927\u5c0f, \u8be5\u503c\u53ef\u7528\u4e8e\u9884\u4f30\u6bcf\u4e2ahudi\u6570\u636e\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u5927\u81f4\u6570\u91cf\u3002\u8c03\u6574\u6b64\u53c2\u6570\u4e0e",(0,l.yg)("inlineCode",{parentName:"p"},"batch_size"),"\u53ef\u4ee5\u6709\u6548\u51cf\u5c11hudi\u6570\u636e\u6587\u4ef6\u5199\u653e\u5927\u6b21\u6570."),(0,l.yg)("h3",{id:"conf_files_path-string"},"conf_files_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"conf_files_path"),' \u73af\u5883\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u5217\u8868\uff08\u672c\u5730\u8def\u5f84\uff09\uff0c\u7528\u4e8e\u521d\u59cb\u5316 HDFS \u5ba2\u6237\u7aef\u4ee5\u8bfb\u53d6 Hudi \u8868\u6587\u4ef6\u3002\u793a\u4f8b\uff1a"/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\u3002'),(0,l.yg)("h3",{id:"op_type-enum"},"op_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"op_type")," Hudi \u8868\u7684\u64cd\u4f5c\u7c7b\u578b\u3002\u503c\u53ef\u4ee5\u662f ",(0,l.yg)("inlineCode",{parentName:"p"},"insert"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"upsert")," \u6216 ",(0,l.yg)("inlineCode",{parentName:"p"},"bulk_insert"),"\u3002"),(0,l.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_interval_ms")," \u6279\u91cf\u5199\u5165 Hudi \u8868\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,l.yg)("h3",{id:"batch_size-int"},"batch_size ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_size")," \u6279\u91cf\u5199\u5165 Hudi \u8868\u7684\u8bb0\u5f55\u6570\u5927\u5c0f."),(0,l.yg)("h3",{id:"insert_shuffle_parallelism-int"},"insert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"insert_shuffle_parallelism")," \u63d2\u5165\u6570\u636e\u5230 Hudi \u8868\u7684\u5e76\u884c\u5ea6\u3002"),(0,l.yg)("h3",{id:"upsert_shuffle_parallelism-int"},"upsert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"upsert_shuffle_parallelism")," \u66f4\u65b0\u63d2\u5165\u6570\u636e\u5230 Hudi \u8868\u7684\u5e76\u884c\u5ea6\u3002"),(0,l.yg)("h3",{id:"min_commits_to_keep-int"},"min_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"min_commits_to_keep")," Hudi \u8868\u4fdd\u7559\u7684\u6700\u5c11\u63d0\u4ea4\u6570\u3002"),(0,l.yg)("h3",{id:"max_commits_to_keep-int"},"max_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_commits_to_keep")," Hudi \u8868\u4fdd\u7559\u7684\u6700\u591a\u63d0\u4ea4\u6570\u3002"),(0,l.yg)("h3",{id:"cdc_enabled-boolean"},"cdc_enabled ","[boolean]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"cdc_enabled")," \u662f\u5426\u6301\u4e45\u5316Hudi\u8868\u7684CDC\u53d8\u66f4\u65e5\u5fd7\u3002\u542f\u7528\u540e\uff0c\u5728\u5fc5\u8981\u65f6\u6301\u4e45\u5316\u66f4\u6539\u6570\u636e\uff0c\u8868\u53ef\u4ee5\u4f5c\u4e3aCDC\u6a21\u5f0f\u8fdb\u884c\u67e5\u8be2."),(0,l.yg)("h3",{id:"schema_save_mode-enum"},"schema_save_mode ","[Enum]"),(0,l.yg)("p",null,"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u4fa7\u5df2\u6709\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848",(0,l.yg)("br",null),"\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,l.yg)("br",null),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA"),"\uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u4f1a\u5220\u9664\u5e76\u91cd\u5efa",(0,l.yg)("br",null),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST"),"\uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u5f53\u8868\u5df2\u5b58\u5728\u65f6\u5219\u8df3\u8fc7\u521b\u5efa",(0,l.yg)("br",null),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST"),"\uff1a\u5f53\u8868\u4e0d\u5b58\u5728\u65f6\u5c06\u629b\u51fa\u9519\u8bef",(0,l.yg)("br",null),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"IGNORE")," \uff1a\u5ffd\u7565\u5bf9\u8868\u7684\u5904\u7406",(0,l.yg)("br",null)),(0,l.yg)("h3",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,l.yg)("p",null,"\u6570\u636e\u6e90\u63d2\u4ef6\u7684\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Source Common Options")," \u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u5355\u8868"},"\u5355\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Hudi {\n    table_dfs_path = "hdfs://nameserivce/data/"\n    database = "st"\n    table_name = "test_table"\n    table_type = "COPY_ON_WRITE"\n    conf_files_path = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    batch_size = 10000\n    use.kerberos = true\n    kerberos.principal = "test_user@xxx"\n    kerberos.principal.file = "/home/test/test_user.keytab"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u591a\u8868"},"\u591a\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Hudi {\n    table_dfs_path = "hdfs://nameserivce/data/"\n    conf_files_path = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    table_list = [\n      {\n        database = "st1"\n        table_name = "role"\n        table_type = "COPY_ON_WRITE"\n        op_type="INSERT"\n        batch_size = 10000\n      },\n      {\n        database = "st1"\n        table_name = "user"\n        table_type = "COPY_ON_WRITE"\n        op_type="UPSERT"\n        # op_type is \'UPSERT\', must configured record_key_fields\n        record_key_fields = "user_id"\n        batch_size = 10000\n      },\n      {\n        database = "st1"\n        table_name = "Bucket"\n        table_type = "MERGE_ON_READ"\n      }\n    ]\n    ...\n  }\n}\n')))}o.isMDXComponent=!0}}]);
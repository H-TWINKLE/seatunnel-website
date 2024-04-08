"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26991],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=m(n),k=l,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(c,r(r({ref:e},s),{},{components:n})):a.createElement(c,r({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54533:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return s},toc:function(){return d},default:function(){return k}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],o={},p="FtpFile",m={unversionedId:"connector-v2/sink/FtpFile",id:"connector-v2/sink/FtpFile",title:"FtpFile",description:"Ftp file sink connector",source:"@site/docs/connector-v2/sink/FtpFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/FtpFile",permalink:"/zh-CN/docs/connector-v2/sink/FtpFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/FtpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u98de\u4e66",permalink:"/zh-CN/docs/connector-v2/sink/Feishu"},next:{title:"GoogleFirestore",permalink:"/zh-CN/docs/connector-v2/sink/GoogleFirestore"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"path string",id:"path-string",level:3},{value:"connection_mode string",id:"connection_mode-string",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"max_rows_in_memory int",id:"max_rows_in_memory-int",level:3},{value:"sheet_name string",id:"sheet_name-string",level:3},{value:"xml_root_tag string",id:"xml_root_tag-string",level:3},{value:"xml_row_tag string",id:"xml_row_tag-string",level:3},{value:"xml_use_attr_format boolean",id:"xml_use_attr_format-boolean",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],u={toc:d};function k(t){var e=t.components,n=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ftpfile"},"FtpFile"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ftp file sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to Ftp ."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,i.kt)("p",{parentName:"div"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."))),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,i.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"port"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tmp_path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,i.kt)("td",{parentName:"tr",align:null},"The result file will write to a tmp path first and then use ",(0,i.kt)("inlineCode",{parentName:"td"},"mv")," to submit tmp dir to target dir. Need a FTP dir.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connection_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"active_local"),(0,i.kt)("td",{parentName:"tr",align:null},"The target ftp connection mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"custom_filename"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file_format_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"csv"'),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"'\\001'"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"\\n"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"have_partition"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1000000"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sheet_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"xml_root_tag"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"RECORDS"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"RECORD"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"encoding"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,i.kt)("td",{parentName:"tr",align:null},"Only used when file_format_type is json,text,csv,xml.")))),(0,i.kt)("h3",{id:"host-string"},"host ","[string]"),(0,i.kt)("p",null,"The target ftp host is required"),(0,i.kt)("h3",{id:"port-int"},"port ","[int]"),(0,i.kt)("p",null,"The target ftp port is required"),(0,i.kt)("h3",{id:"user-string"},"user ","[string]"),(0,i.kt)("p",null,"The target ftp username is required"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"The target ftp password is required"),(0,i.kt)("h3",{id:"path-string"},"path ","[string]"),(0,i.kt)("p",null,"The target dir path is required."),(0,i.kt)("h3",{id:"connection_mode-string"},"connection_mode ","[string]"),(0,i.kt)("p",null,"The target ftp connection mode , default is active mode, supported as the following modes:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"active_local")," ",(0,i.kt)("inlineCode",{parentName:"p"},"passive_local")),(0,i.kt)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,i.kt)("p",null,"Whether custom the filename"),(0,i.kt)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,i.kt)("p",null,"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,i.kt)("p",null,"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,i.kt)("p",null,"We supported as the following file types:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"text")," ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,i.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,i.kt)("inlineCode",{parentName:"p"},"excel")," ",(0,i.kt)("inlineCode",{parentName:"p"},"xml")),(0,i.kt)("p",null,"Please note that, The final file name will end with the file_format_type's suffix, the suffix of the text file is ",(0,i.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,i.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between columns in a row of data. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," file format."),(0,i.kt)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,i.kt)("p",null,"The separator between rows in a file. Only needed by ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," file format."),(0,i.kt)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,i.kt)("p",null,"Whether you need processing partitions."),(0,i.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.kt)("p",null,"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"Partition data based on selected fields."),(0,i.kt)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,i.kt)("p",null,"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,i.kt)("p",null,"Default ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,i.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,i.kt)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,i.kt)("p",null,"Only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,i.kt)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,i.kt)("p",null,"Which columns need be wrote to file, default value is all the columns get from ",(0,i.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,i.kt)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,i.kt)("p",null,"Please note that, If ",(0,i.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.kt)("p",null,"Only support ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," now."),(0,i.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,i.kt)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,i.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,i.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"txt: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"json: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"csv: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"orc: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zlib")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none")),(0,i.kt)("li",{parentName:"ul"},"parquet: ",(0,i.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.kt)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.kt)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip")," ",(0,i.kt)("inlineCode",{parentName:"li"},"brotli")," ",(0,i.kt)("inlineCode",{parentName:"li"},"zstd")," ",(0,i.kt)("inlineCode",{parentName:"li"},"none"))),(0,i.kt)("p",null,"Tips: excel type does not support any compression format"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,i.kt)("h3",{id:"max_rows_in_memory-int"},"max_rows_in_memory ","[int]"),(0,i.kt)("p",null,"When File Format is Excel,The maximum number of data items that can be cached in the memory."),(0,i.kt)("h3",{id:"sheet_name-string"},"sheet_name ","[string]"),(0,i.kt)("p",null,"Writer the sheet of the workbook"),(0,i.kt)("h3",{id:"xml_root_tag-string"},"xml_root_tag ","[string]"),(0,i.kt)("p",null,"Specifies the tag name of the root element within the XML file."),(0,i.kt)("h3",{id:"xml_row_tag-string"},"xml_row_tag ","[string]"),(0,i.kt)("p",null,"Specifies the tag name of the data rows within the XML file."),(0,i.kt)("h3",{id:"xml_use_attr_format-boolean"},"xml_use_attr_format ","[boolean]"),(0,i.kt)("p",null,"Specifies Whether to process data using the tag attribute format."),(0,i.kt)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,i.kt)("p",null,"Only used when file_format_type is json,text,csv,xml.\nThe encoding of the file to write. This param will be parsed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For text file format simple config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nFtpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 21\n    user = "username"\n    password = "password"\n    path = "/data/ftp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    sink_columns = ["name","age"]\n}\n\n')),(0,i.kt)("p",null,"For text file format with ",(0,i.kt)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sink_columns")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\nFtpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 21\n    user = "username"\n    password = "password"\n    path = "/data/ftp/seatunnel/job1"\n    tmp_path = "/data/ftp/seatunnel/tmp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    sink_columns = ["name","age"]\n    filename_time_format = "yyyy.MM.dd"\n}\n\n')),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Ftp File Sink Connector")),(0,i.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2980"},"2980"),")"),(0,i.kt)("li",{parentName:"ul"},"[BugFix]"," Fix filesystem get error (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3117"},"3117"),")"),(0,i.kt)("li",{parentName:"ul"},"[BugFix]"," Solved the bug of can not parse '\\t' as delimiter from config file (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3083"},"3083"),")")),(0,i.kt)("h3",{id:"next-version"},"Next version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3258"},"3258"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,i.kt)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,i.kt)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Support setting batch size for every file (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3625"},"3625"),")"),(0,i.kt)("li",{parentName:"ul"},"[Improve]"," Support file compress (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3899"},"3899"),")")))}k.isMDXComponent=!0}}]);
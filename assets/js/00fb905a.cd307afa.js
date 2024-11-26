"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[29454],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={sidebar_position:1},o="Transform Common Options",l={unversionedId:"transform-v2/common-options",id:"transform-v2/common-options",title:"Transform Common Options",description:"This is a process of intermediate conversion between the source and sink terminals,You can use sql statements to smoothly complete the conversion process",source:"@site/docs/transform-v2/common-options.md",sourceDirName:"transform-v2",slug:"/transform-v2/common-options",permalink:"/docs/transform-v2/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/transform-v2/common-options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Transform-V2",permalink:"/docs/transform-v2"},next:{title:"Multi-Table Transform in SeaTunnel",permalink:"/docs/transform-v2/transform-multi-table"}},s={},p=[{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"transform-common-options"},"Transform Common Options"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is a process of intermediate conversion between the source and sink terminals,You can use sql statements to smoothly complete the conversion process")),(0,a.yg)("p",null,":::warn"),(0,a.yg)("p",null,"The old configuration name ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," is deprecated, please migrate to the new name ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_input"),"/",(0,a.yg)("inlineCode",{parentName:"p"},"plugin_output")," as soon as possible."),(0,a.yg)("p",null,":::"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plugin_output"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"When ",(0,a.yg)("inlineCode",{parentName:"td"},"plugin_input")," is not specified, the current plugin processes the data set ",(0,a.yg)("inlineCode",{parentName:"td"},"(dataset)")," output by the previous plugin in the configuration file; ",(0,a.yg)("br",null),"When ",(0,a.yg)("inlineCode",{parentName:"td"},"plugin_input")," is specified, the current plugin is processing the data set corresponding to this parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"plugin_input"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"When ",(0,a.yg)("inlineCode",{parentName:"td"},"plugin_output")," is not specified, the data processed by this plugin will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"td"},"(table)"),"; ",(0,a.yg)("br",null),"When ",(0,a.yg)("inlineCode",{parentName:"td"},"plugin_output")," is specified, the data processed by this plugin will be registered as a data set ",(0,a.yg)("inlineCode",{parentName:"td"},"(dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"td"},"(table)")," . The dataset registered here can be directly accessed by other plugins by specifying ",(0,a.yg)("inlineCode",{parentName:"td"},"plugin_input")," .")))),(0,a.yg)("h2",{id:"task-example"},"Task Example"),(0,a.yg)("h3",{id:"simple"},"Simple:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is the process of converting the data source to fake and write it to two different sinks, Detailed reference ",(0,a.yg)("inlineCode",{parentName:"p"},"transform"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n        c_timestamp = "timestamp"\n        c_date = "date"\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_decimal = "decimal(30, 8)"\n        c_row = {\n          c_row = {\n            c_int = int\n          }\n        }\n      }\n    }\n  }\n}\n\ntransform {\n  Sql {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    # the query table name must same as field \'plugin_input\'\n    query = "select id, regexp_replace(name, \'.+\', \'b\') as name, age+1 as age, pi() as pi, c_timestamp, c_date, c_map, c_array, c_decimal, c_row from fake"\n  }\n  # The SQL transform support base function and criteria operation\n  # But the complex SQL unsupported yet, include: multi source table/rows JOIN and AGGREGATE operation and the like\n}\n\nsink {\n  Console {\n    plugin_input = "fake1"\n  }\n   Console {\n    plugin_input = "fake"\n  }\n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[34356],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,d=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="NullRate",i={unversionedId:"transform/nullRate",id:"version-2.2.0-beta/transform/nullRate",title:"NullRate",description:"NULL rate transform plugin",source:"@site/versioned_docs/version-2.2.0-beta/transform/nullRate.md",sourceDirName:"transform",slug:"/transform/nullRate",permalink:"/docs/2.2.0-beta/transform/nullRate",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/transform/nullRate.md",tags:[],version:"2.2.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Json",permalink:"/docs/2.2.0-beta/transform/json"},next:{title:"Nulltf",permalink:"/docs/2.2.0-beta/transform/nulltf"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field string_list",id:"field-string_list",level:3},{value:"rates double_list",id:"rates-double_list",level:3},{value:"throw_exception_enable boolean",id:"throw_exception_enable-boolean",level:3},{value:"save_to_table_name string",id:"save_to_table_name-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"nullrate"},"NullRate"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"NULL rate transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"When there is a large amount of data, the final result will always be greatly affected by the problem of data null value. Therefore, early null value detection is particularly important. For this reason, this function came into being"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This transform ",(0,r.yg)("strong",{parentName:"p"},"ONLY")," supported by Spark.")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},"string_list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rates"),(0,r.yg)("td",{parentName:"tr",align:null},"double_list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"throw_exception_enable"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_to_table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"field-string_list"},"field ","[string_list]"),(0,r.yg)("p",null,"Which fields do you want to monitor ."),(0,r.yg)("h3",{id:"rates-double_list"},"rates ","[double_list]"),(0,r.yg)("p",null,"It is consistent with the number of fields. Double type indicates the set null rate value ."),(0,r.yg)("h3",{id:"throw_exception_enable-boolean"},"throw_exception_enable ","[boolean]"),(0,r.yg)("p",null,"Whether to throw an exception when it is greater than the set value. The default value is false ."),(0,r.yg)("h3",{id:"save_to_table_name-string"},"save_to_table_name ","[string]"),(0,r.yg)("p",null,"Whether the current verification value is output to the table. It is not output by defaul ."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.0-beta/transform/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  nullRate {\n     fields = ["msg", "name"]\n     rates = [10.0,3.45]\n     save_to_table_name = "tmp"\n     throw_exception_enable = true\n  }\n}\n')),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"NullRate")," in transform's Dataset."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  transform {\n    NullRate {\n      fields = ["msg", "name"]\n      rates = [10.0,3.45]\n      save_to_table_name = "tmp"\n      throw_exception_enable = true\n    }\n  }\n')))}g.isMDXComponent=!0}}]);
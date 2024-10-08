"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79655],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(f,l(l({ref:t},g),{},{components:r})):n.createElement(f,l({ref:t},g))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(58168),i=(r(96540),r(15680));const a={},l=void 0,o={unversionedId:"configuration/filter-plugins/Lowercase",id:"version-1.x/configuration/filter-plugins/Lowercase",title:"Lowercase",description:"Filter plugin : Lowercase",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Lowercase.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Lowercase",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Lowercase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Lowercase.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Kv",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Kv"},next:{title:"Remove",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Remove"}},s={},u=[{value:"Filter plugin : Lowercase",id:"filter-plugin--lowercase",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5}],g={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"filter-plugin--lowercase"},"Filter plugin : Lowercase"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.yg)("li",{parentName:"ul"},"Homepage: ",(0,i.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"Lowercase specified string field."),(0,i.yg)("h3",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"raw_message")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"lowercased")))),(0,i.yg)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,i.yg)("p",null,"Source field, default is ",(0,i.yg)("inlineCode",{parentName:"p"},"raw_message")),(0,i.yg)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,i.yg)("p",null,"New field name, default is ",(0,i.yg)("inlineCode",{parentName:"p"},"lowercased")),(0,i.yg)("h1",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'lowercase {\n    source_field = "address"\n    target_field = "address_lowercased"\n}\n')))}c.isMDXComponent=!0}}]);
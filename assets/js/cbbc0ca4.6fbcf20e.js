"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43133],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(n),y=i,d=s["".concat(p,".").concat(y)]||s[y]||c[y]||a;return n?r.createElement(d,l(l({ref:t},g),{},{components:n})):r.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(58168),i=(n(96540),n(15680));const a={},l=void 0,o={unversionedId:"configuration/filter-plugins/Convert",id:"version-1.x/configuration/filter-plugins/Convert",title:"Convert",description:"Filter plugin : Convert",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Convert.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Convert",permalink:"/docs/1.x/configuration/filter-plugins/Convert",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Convert.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Checksum",permalink:"/docs/1.x/configuration/filter-plugins/Checksum"},next:{title:"Date",permalink:"/docs/1.x/configuration/filter-plugins/Date"}},p={},u=[{value:"Filter plugin : Convert",id:"filter-plugin--convert",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"new_type string",id:"new_type-string",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"Examples",id:"examples",level:3}],g={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"filter-plugin--convert"},"Filter plugin : Convert"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.yg)("li",{parentName:"ul"},"Homepage: ",(0,i.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"Convert a field\u2019s value to a different type, such as converting a string to an integer."),(0,i.yg)("h3",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"#new_type-string"},"new_type")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")))),(0,i.yg)("h5",{id:"new_type-string"},"new_type ","[string]"),(0,i.yg)("p",null,"Conversion type, supports ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"integer"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"long"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"float"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"double")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")," now."),(0,i.yg)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,i.yg)("p",null,"Source field."),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'convert {\n    source_field = "age"\n    new_type = "integer"\n}\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Convert the ",(0,i.yg)("inlineCode",{parentName:"p"},"age")," field to ",(0,i.yg)("inlineCode",{parentName:"p"},"integer")," type")))}c.isMDXComponent=!0}}]);
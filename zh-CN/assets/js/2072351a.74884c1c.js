"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68644],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var l=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=r,c=p["".concat(u,".").concat(y)]||p[y]||d[y]||a;return t?l.createElement(c,i(i({ref:n},g),{},{components:t})):l.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},68004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=t(58168),r=(t(96540),t(15680));const a={},i="Assert",o={unversionedId:"connector/sink/Assert",id:"version-2.3.0-beta/connector/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/sink/Assert.md",sourceDirName:"connector/sink",slug:"/connector/sink/Assert",permalink:"/zh-CN/docs/2.3.0-beta/connector/sink/Assert",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/sink/Assert.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/zh-CN/docs/2.3.0-beta/category/sink"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/2.3.0-beta/connector/sink/Clickhouse"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigList",id:"rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string",id:"field_type-string",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value double",id:"rule_value-double",level:3},{value:"Example",id:"example",level:2}],g={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,l.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"assert"},"Assert"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Assert sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"A flink sink plugin which can assert illegal data by user defined rules"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark\uff1aAssert"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Assert"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules"),(0,r.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules.field_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules.field_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules.field_value"),(0,r.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules.field_value.rule_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rules.field_value.rule_value"),(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"rules-configlist"},"rules ","[ConfigList]"),(0,r.yg)("p",null,"Rule definition of user's available data.  Each rule represents one field validation."),(0,r.yg)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,r.yg)("p",null,"field name\uff08string\uff09"),(0,r.yg)("h3",{id:"field_type-string"},"field_type ","[string]"),(0,r.yg)("p",null,"field type (string),  e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"string,boolean,byte,short,int,long,float,double,char,void,BigInteger,BigDecimal,Instant")),(0,r.yg)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,r.yg)("p",null,"A list value rule define the data value validation"),(0,r.yg)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,r.yg)("p",null,"The following rules are supported for now\n",(0,r.yg)("inlineCode",{parentName:"p"},"NOT_NULL,   // value can't be null\nMIN,        // define the minimum value of data\nMAX,        // define the maximum value of data\nMIN_LENGTH, // define the minimum string length of a string data\nMAX_LENGTH  // define the maximum string length of a string data")),(0,r.yg)("h3",{id:"rule_value-double"},"rule_value ","[double]"),(0,r.yg)("p",null,"the value related to rule type"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"the whole config obey with ",(0,r.yg)("inlineCode",{parentName:"p"},"hocon")," style"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"\nAssert {\n   rules = \n        [{\n            field_name = name\n            field_type = string\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN_LENGTH\n                    rule_value = 3\n                },\n                {\n                     rule_type = MAX_LENGTH\n                     rule_value = 5\n                }\n            ]\n        },{\n            field_name = age\n            field_type = int\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN\n                    rule_value = 10\n                },\n                {\n                     rule_type = MAX\n                     rule_value = 20\n                }\n            ]\n        }\n        ]\n    \n}\n\n")))}d.isMDXComponent=!0}}]);
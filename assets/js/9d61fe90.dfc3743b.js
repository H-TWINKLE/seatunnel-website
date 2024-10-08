"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[93419],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,y=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},l="Qdrant",i={unversionedId:"connector-v2/source/Qdrant",id:"connector-v2/source/Qdrant",title:"Qdrant",description:"Qdrant source connector",source:"@site/docs/connector-v2/source/Qdrant.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Qdrant",permalink:"/docs/connector-v2/source/Qdrant",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/Qdrant.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Pulsar",permalink:"/docs/connector-v2/source/Pulsar"},next:{title:"Rabbitmq",permalink:"/docs/connector-v2/source/Rabbitmq"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"collection_name string",id:"collection_name-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"api_key string",id:"api_key-string",level:3},{value:"use_tls bool",id:"use_tls-bool",level:3},{value:"common options",id:"common-options",level:3}],s={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"qdrant"},"Qdrant"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Qdrant source connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://qdrant.tech/"},"Qdrant")," is a high-performance vector search engine and vector database."),(0,a.yg)("p",null,"This connector can be used to read data from a Qdrant collection."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"collection_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"schema"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"localhost")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"6334")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"api_key"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"use_tls"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"collection_name-string"},"collection_name ","[string]"),(0,a.yg)("p",null,"The name of the Qdrant collection to read data from."),(0,a.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,a.yg)("p",null,"The schema of the table to read data into."),(0,a.yg)("p",null,"Eg:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},"schema = {\n  fields {\n    age = int\n    address = string\n    some_vector = float_vector\n  }\n}\n")),(0,a.yg)("p",null,"Each entry in Qdrant is called a point."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"float_vector")," type columns are read from the vectors of each point, others are read from the JSON payload associated with the point."),(0,a.yg)("p",null,"If a column is marked as primary key, the ID of the Qdrant point is written into it. It can be of type ",(0,a.yg)("inlineCode",{parentName:"p"},'"string"')," or ",(0,a.yg)("inlineCode",{parentName:"p"},'"int"'),". Since Qdrant only ",(0,a.yg)("a",{parentName:"p",href:"https://qdrant.tech/documentation/concepts/points/#point-ids"},"allows")," positive integers and UUIDs as point IDs."),(0,a.yg)("p",null,"If the collection was created with a single default/unnamed vector, use ",(0,a.yg)("inlineCode",{parentName:"p"},"default_vector")," as the vector name."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},"schema = {\n  fields {\n    age = int\n    address = string\n    default_vector = float_vector\n  }\n}\n")),(0,a.yg)("p",null,"The ID of the point in Qdrant will be written into the column which is marked as the primary key. It can be of type ",(0,a.yg)("inlineCode",{parentName:"p"},"int")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"."),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,'The host name of the Qdrant instance. Defaults to "localhost".'),(0,a.yg)("h3",{id:"port-int"},"port ","[int]"),(0,a.yg)("p",null,"The gRPC port of the Qdrant instance."),(0,a.yg)("h3",{id:"api_key-string"},"api_key ","[string]"),(0,a.yg)("p",null,"The API key to use for authentication if set."),(0,a.yg)("h3",{id:"use_tls-bool"},"use_tls ","[bool]"),(0,a.yg)("p",null,"Whether to use TLS(SSL) connection. Required if using Qdrant cloud(https)."),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Source plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details."))}u.isMDXComponent=!0}}]);
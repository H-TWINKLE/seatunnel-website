"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[49730],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(t),m=r,y=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const l={},o="Slack",i={unversionedId:"connector-v2/sink/Slack",id:"version-2.3.6/connector-v2/sink/Slack",title:"Slack",description:"Slack sink connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/sink/Slack.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Slack",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Slack",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/sink/Slack.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/SftpFile"},next:{title:"Snowflake",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Snowflake"}},p={},c=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Options",id:"options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],s={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"slack"},"Slack"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Slack sink connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"cdc"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to Slack Channel. Both support streaming and batch mode."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,r.yg)("inlineCode",{parentName:"p"},"age: 12, name: huan"),"]",", the content send to socket server is the following: ",(0,r.yg)("inlineCode",{parentName:"p"},'{"name":"huan","age":17}'))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("p",null,"All data types are mapped to string."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"webhooks_url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Slack webhook url")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oauth_token"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Slack oauth token used for the actual authentication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"slack_channel"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"slack channel for data write")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"common-options.md"},"Sink Common Options")," for details")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n SlackSink {\n  webhooks_url = "https://hooks.slack.com/services/xxxxxxxxxxxx/xxxxxxxxxxxx/xxxxxxxxxxxxxxxx"\n  oauth_token = "xoxp-xxxxxxxxxx-xxxxxxxx-xxxxxxxxx-xxxxxxxxxxx"\n  slack_channel = "channel name"\n }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Slack Sink Connector")))}u.isMDXComponent=!0}}]);
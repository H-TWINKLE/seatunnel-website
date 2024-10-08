"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[36823],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c="Connector Check Command Usage",s={unversionedId:"command/connector-check",id:"version-2.3.6/command/connector-check",title:"Connector Check Command Usage",description:"Command Entrypoint",source:"@site/versioned_docs/version-2.3.6/command/connector-check.md",sourceDirName:"command",slug:"/command/connector-check",permalink:"/docs/2.3.6/command/connector-check",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/command/connector-check.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Command Usage",permalink:"/docs/2.3.6/command/usage"},next:{title:"about",permalink:"/docs/2.3.6/seatunnel-engine/about"}},i={},l=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],p={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"connector-check-command-usage"},"Connector Check Command Usage"),(0,o.yg)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"bin/seatunnel-connector.sh\n")),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"Usage: seatunnel-connector.sh [options]\n  Options:\n    -h, --help         Show the usage message\n    -l, --list         List all supported plugins(sources, sinks, transforms) \n                       (default: false)\n    -o, --option-rule  Get option rule of the plugin by the plugin \n                       identifier(connector name or transform name)\n    -pt, --plugin-type SeaTunnel plugin type, support [source, sink, \n                       transform] \n")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# List all supported connectors(sources and sinks) and transforms\nbin/seatunnel-connector.sh -l\n# List all supported sinks\nbin/seatunnel-connector.sh -l -pt sink\n# Get option rule of the connector or transform by the name\nbin/seatunnel-connector.sh -o Paimon\n# Get option rule of paimon sink\nbin/seatunnel-connector.sh -o Paimon -pt sink\n")))}u.isMDXComponent=!0}}]);
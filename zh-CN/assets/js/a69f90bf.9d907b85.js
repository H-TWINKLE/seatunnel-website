"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[35824],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),y=l,g=s["".concat(c,".").concat(y)]||s[y]||d[y]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(58168),l=(t(96540),t(15680));const o={sidebar_position:4},a=void 0,i={unversionedId:"seatunnel-engine/local-mode-deployment",id:"seatunnel-engine/local-mode-deployment",title:"local-mode-deployment",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/local-mode-deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/local-mode-deployment",permalink:"/zh-CN/docs/seatunnel-engine/local-mode-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/local-mode-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"deployment",permalink:"/zh-CN/docs/seatunnel-engine/deployment"},next:{title:"hybrid-cluster-deployment",permalink:"/zh-CN/docs/seatunnel-engine/hybrid-cluster-deployment"}},c={},u=[{value:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72SeaTunnel Engine",id:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72seatunnel-engine",level:2},{value:"\u63d0\u4ea4\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4f5c\u4e1a",level:2},{value:"\u4f5c\u4e1a\u8fd0\u7ef4",id:"\u4f5c\u4e1a\u8fd0\u7ef4",level:2}],p={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("hr",null),(0,l.yg)("h1",{id:"\u4ee5local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a"},"\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a"),(0,l.yg)("p",null,"\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u3002"),(0,l.yg)("p",null,"Local\u6a21\u5f0f\u4e0b\u6bcf\u4e2a\u4efb\u52a1\u90fd\u4f1a\u542f\u52a8\u4e00\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\uff0c\u4efb\u52a1\u8fd0\u884c\u5b8c\u6210\u540e\u8fdb\u7a0b\u4f1a\u9000\u51fa\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u4efb\u52a1\u7684\u6682\u505c\u3001\u6062\u590d\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u83b7\u53d6\u4efb\u52a1\u5217\u8868\u67e5\u770b\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u53d6\u6d88\u4f5c\u4e1a\uff0c\u53ea\u80fd\u901a\u8fc7Kill\u8fdb\u7a0b\u7684\u65b9\u5f0f\u7ec8\u6b62\u4efb\u52a1\u3002"),(0,l.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301rest api\u3002")),(0,l.yg)("p",null,"\u6700\u63a8\u8350\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528SeaTunnel Engine\u7684",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/separated-cluster-deployment"},"\u5206\u79bb\u96c6\u7fa4\u6a21\u5f0f")),(0,l.yg)("h2",{id:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72seatunnel-engine"},"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72SeaTunnel Engine"),(0,l.yg)("p",null,"\u672c\u5730\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u90e8\u7f72SeaTunnel Engine\u96c6\u7fa4\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u63d0\u4ea4\u4f5c\u4e1a\u5373\u53ef\u3002\u7cfb\u7edf\u4f1a\u5728\u63d0\u4ea4\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u4e2d\u542f\u52a8SeaTunnel Engine(Zeta)\u670d\u52a1\u6765\u8fd0\u884c\u63d0\u4ea4\u7684\u4f5c\u4e1a\uff0c\u4f5c\u4e1a\u5b8c\u6210\u540e\u8fdb\u7a0b\u9000\u51fa\u3002"),(0,l.yg)("p",null,"\u8be5\u6a21\u5f0f\u4e0b\u53ea\u9700\u8981\u5c06\u4e0b\u8f7d\u548c\u5236\u4f5c\u597d\u7684\u5b89\u88c5\u5305\u62f7\u8d1d\u5230\u9700\u8981\u8fd0\u884c\u7684\u670d\u52a1\u5668\u4e0a\u5373\u53ef\uff0c\u5982\u679c\u9700\u8981\u8c03\u6574\u4f5c\u4e1a\u8fd0\u884c\u7684jvm\u53c2\u6570\uff0c\u53ef\u4ee5\u4fee\u6539$SEATUNNEL_HOME/config/jvm_client_options\u6587\u4ef6\u3002"),(0,l.yg)("h2",{id:"\u63d0\u4ea4\u4f5c\u4e1a"},"\u63d0\u4ea4\u4f5c\u4e1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -e local\n")),(0,l.yg)("h2",{id:"\u4f5c\u4e1a\u8fd0\u7ef4"},"\u4f5c\u4e1a\u8fd0\u7ef4"),(0,l.yg)("p",null,"Local\u6a21\u5f0f\u4e0b\u63d0\u4ea4\u7684\u4f5c\u4e1a\u4f1a\u5728\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u4e2d\u8fd0\u884c\uff0c\u4f5c\u4e1a\u5b8c\u6210\u540e\u8fdb\u7a0b\u4f1a\u9000\u51fa\uff0c\u5982\u679c\u8981\u4e2d\u6b62\u4f5c\u4e1a\u53ea\u9700\u8981\u9000\u51fa\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u5373\u53ef\u3002\u4f5c\u4e1a\u7684\u8fd0\u884c\u65e5\u5fd7\u4f1a\u8f93\u51fa\u5230\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u51fa\u4e2d\u3002"),(0,l.yg)("p",null,"\u4e0d\u652f\u6301\u5176\u5b83\u8fd0\u7ef4\u64cd\u4f5c\u3002"))}d.isMDXComponent=!0}}]);
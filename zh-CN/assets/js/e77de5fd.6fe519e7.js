"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[38114],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(58168),r=t(96540),l=t(20053),o=t(23104),u=t(56347),s=t(57485),i=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,i]=g({queryString:t,groupId:a}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),y(e)}),[i,y,l]),tabValues:l}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==u&&(p(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":u===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(v,(0,a.A)({},e,n)),r.createElement(h,(0,a.A)({},e,n)))}function w(e){const n=(0,f.A)();return r.createElement(N,(0,a.A)({key:String(n)},e))}},88803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=t(58168),r=(t(96540),t(15680));t(11470),t(19365);const l={sidebar_position:1},o=void 0,u={unversionedId:"start-v2/locally/deployment",id:"version-2.3.7/start-v2/locally/deployment",title:"deployment",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/deployment.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/deployment",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/deployment",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/deployment.md",tags:[],version:"2.3.7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u5173\u4e8e SeaTunnel",permalink:"/zh-CN/docs/2.3.7/about"},next:{title:"quick-start-seatunnel-engine",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"}},s={},i=[{value:"\u6b65\u9aa4 1: \u51c6\u5907\u5de5\u4f5c",id:"\u6b65\u9aa4-1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u6b65\u9aa4 2: \u4e0b\u8f7d SeaTunnel",id:"\u6b65\u9aa4-2-\u4e0b\u8f7d-seatunnel",level:2},{value:"\u6b65\u9aa4 3: \u4e0b\u8f7d\u8fde\u63a5\u5668\u63d2\u4ef6",id:"\u6b65\u9aa4-3-\u4e0b\u8f7d\u8fde\u63a5\u5668\u63d2\u4ef6",level:2}],c={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"\u672c\u5730\u90e8\u7f72"},"\u672c\u5730\u90e8\u7f72"),(0,r.yg)("h2",{id:"\u6b65\u9aa4-1-\u51c6\u5907\u5de5\u4f5c"},"\u6b65\u9aa4 1: \u51c6\u5907\u5de5\u4f5c"),(0,r.yg)("p",null,"\u5728\u5f00\u59cb\u672c\u5730\u8fd0\u884c\u524d\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86SeaTunnel\u6240\u9700\u8981\u7684\u4ee5\u4e0b\u8f6f\u4ef6\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5b89\u88c5",(0,r.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 \u6216 11\uff0c \u5176\u4ed6\u9ad8\u4e8eJava 8\u7684\u7248\u672c\u7406\u8bba\u4e0a\u4e5f\u53ef\u4ee5\u5de5\u4f5c) \u4ee5\u53ca\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_HOME"),"\u3002")),(0,r.yg)("h2",{id:"\u6b65\u9aa4-2-\u4e0b\u8f7d-seatunnel"},"\u6b65\u9aa4 2: \u4e0b\u8f7d SeaTunnel"),(0,r.yg)("p",null,"\u8fdb\u5165",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"SeaTunnel\u4e0b\u8f7d\u9875\u9762"),"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,r.yg)("p",null,"\u6216\u8005\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ec8\u7aef\u4e0b\u8f7d\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'export version="2.3.7"\nwget "https://archive.apache.org/dist/seatunnel/${version}/apache-seatunnel-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-${version}-bin.tar.gz"\n')),(0,r.yg)("h2",{id:"\u6b65\u9aa4-3-\u4e0b\u8f7d\u8fde\u63a5\u5668\u63d2\u4ef6"},"\u6b65\u9aa4 3: \u4e0b\u8f7d\u8fde\u63a5\u5668\u63d2\u4ef6"),(0,r.yg)("p",null,"\u4ece2.2.0-beta\u7248\u672c\u5f00\u59cb\uff0c\u4e8c\u8fdb\u5236\u5305\u4e0d\u518d\u9ed8\u8ba4\u63d0\u4f9b\u8fde\u63a5\u5668\u4f9d\u8d56\uff0c\u56e0\u6b64\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\uff0c\u60a8\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5\u8fde\u63a5\u5668\uff1a(\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/seatunnel/"},"Apache Maven Repository")," \u624b\u52a8\u4e0b\u8f7d\u8fde\u63a5\u5668\uff0c\u7136\u540e\u5c06\u5176\u79fb\u52a8\u81f3",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/seatunnel"),"\u76ee\u5f55\u4e0b)\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install-plugin.sh\n")),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6307\u5b9a\u7684\u8fde\u63a5\u5668\u7248\u672c\uff0c\u4ee52.3.7\u4e3a\u4f8b\uff0c\u60a8\u9700\u8981\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sh bin/install-plugin.sh 2.3.7\n")),(0,r.yg)("p",null,"\u901a\u5e38\u60a8\u5e76\u4e0d\u9700\u8981\u6240\u6709\u7684\u8fde\u63a5\u5668\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"config/plugin_config"),"\u6765\u6307\u5b9a\u60a8\u6240\u9700\u8981\u7684\u63d2\u4ef6\uff0c\u4f8b\u5982\uff0c\u60a8\u53ea\u9700\u8981",(0,r.yg)("inlineCode",{parentName:"p"},"connector-console"),"\u63d2\u4ef6\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4fee\u6539plugin.properties\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-console\n--end--\n")),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u63d2\u4ef6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-fake\nconnector-console\n--end--\n")),(0,r.yg)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/plugins-mapping.properties"),"\u4e0b\u627e\u5230\u6240\u6709\u652f\u6301\u7684\u8fde\u63a5\u5668\u548c\u76f8\u5e94\u7684plugin_config\u914d\u7f6e\u540d\u79f0\u3002"),(0,r.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u60f3\u901a\u8fc7\u624b\u52a8\u4e0b\u8f7d\u8fde\u63a5\u5668\u7684\u65b9\u5f0f\u6765\u5b89\u88c5\u8fde\u63a5\u5668\u63d2\u4ef6\uff0c\u5219\u9700\u8981\u4e0b\u8f7d\u60a8\u6240\u9700\u8981\u7684\u8fde\u63a5\u5668\u63d2\u4ef6\u5373\u53ef\uff0c\u5e76\u5c06\u5b83\u4eec\u653e\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/"),"\u76ee\u5f55\u4e0b\u3002")),(0,r.yg)("p",null,"\u73b0\u5728\uff0c\u60a8\u5df2\u7ecf\u5b8c\u6210\u4e86SeaTunnel\u90e8\u7f72\u3002\u60a8\u53ef\u4ee5\u6309\u7167",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"},"\u5feb\u901f\u5f00\u59cb"),"\u6765\u914d\u7f6e\u5e76\u8fd0\u884c\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u4e86\u3002"))}d.isMDXComponent=!0}}]);
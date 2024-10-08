"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[45782],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,y=p["".concat(g,".").concat(c)]||p[c]||m[c]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},i="Rabbitmq",o={unversionedId:"connector-v2/sink/Rabbitmq",id:"version-2.3.1/connector-v2/sink/Rabbitmq",title:"Rabbitmq",description:"Rabbitmq sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Rabbitmq.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Rabbitmq",permalink:"/docs/2.3.1/connector-v2/sink/Rabbitmq",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Rabbitmq.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/docs/2.3.1/connector-v2/sink/Phoenix"},next:{title:"Redis",permalink:"/docs/2.3.1/connector-v2/sink/Redis"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"virtual_host string",id:"virtual_host-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"queue_name string",id:"queue_name-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"network_recovery_interval int",id:"network_recovery_interval-int",level:3},{value:"topology_recovery string",id:"topology_recovery-string",level:3},{value:"automatic_recovery string",id:"automatic_recovery-string",level:3},{value:"connection_timeout int",id:"connection_timeout-int",level:3},{value:"rabbitmq.config map",id:"rabbitmqconfig-map",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"rabbitmq"},"Rabbitmq"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Rabbitmq sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to write data to Rabbitmq."),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"virtual_host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"queue_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"network_recovery_interval"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"topology_recovery_enabled"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"automatic_recovery_enabled"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"connection_timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rabbitmq.config"),(0,a.yg)("td",{parentName:"tr",align:null},"map"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"the default host to use for connections"),(0,a.yg)("h3",{id:"port-int"},"port ","[int]"),(0,a.yg)("p",null,"the default port to use for connections"),(0,a.yg)("h3",{id:"virtual_host-string"},"virtual_host ","[string]"),(0,a.yg)("p",null,"virtual host \u2013 the virtual host to use when connecting to the broker"),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"the AMQP user name to use when connecting to the broker"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"the password to use when connecting to the broker"),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"convenience method for setting the fields in an AMQP URI: host, port, username, password and virtual host"),(0,a.yg)("h3",{id:"queue_name-string"},"queue_name ","[string]"),(0,a.yg)("p",null,"the queue to write the message to"),(0,a.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,a.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,a.yg)("p",null,"the schema fields of upstream data."),(0,a.yg)("h3",{id:"network_recovery_interval-int"},"network_recovery_interval ","[int]"),(0,a.yg)("p",null,"how long will automatic recovery wait before attempting to reconnect, in ms"),(0,a.yg)("h3",{id:"topology_recovery-string"},"topology_recovery ","[string]"),(0,a.yg)("p",null,"if true, enables topology recovery"),(0,a.yg)("h3",{id:"automatic_recovery-string"},"automatic_recovery ","[string]"),(0,a.yg)("p",null,"if true, enables connection recovery"),(0,a.yg)("h3",{id:"connection_timeout-int"},"connection_timeout ","[int]"),(0,a.yg)("p",null,"connection TCP establishment timeout in milliseconds; zero for infinite"),(0,a.yg)("h3",{id:"rabbitmqconfig-map"},"rabbitmq.config ","[map]"),(0,a.yg)("p",null,"In addition to the above parameters that must be specified by the RabbitMQ client, the user can also specify multiple non-mandatory parameters for the client, covering ",(0,a.yg)("a",{parentName:"p",href:"https://www.rabbitmq.com/configure.html"},"all the parameters specified in the official RabbitMQ document"),"."),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"simple:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n      RabbitMQ {\n          host = "rabbitmq-e2e"\n          port = 5672\n          virtual_host = "/"\n          username = "guest"\n          password = "guest"\n          queue_name = "test1"\n          rabbitmq.config = {\n            requested-heartbeat = 10\n            connection-timeout = 10\n          }\n      }\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"next-version"},"next version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Rabbitmq Sink Connector"),(0,a.yg)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3719"},"3719"))))}m.isMDXComponent=!0}}]);
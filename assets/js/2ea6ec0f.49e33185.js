"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22235],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),g=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=g(n),c=l,m=d["".concat(u,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},o="Rabbitmq",i={unversionedId:"connector-v2/sink/Rabbitmq",id:"connector-v2/sink/Rabbitmq",title:"Rabbitmq",description:"Rabbitmq sink connector",source:"@site/docs/connector-v2/sink/Rabbitmq.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Rabbitmq",permalink:"/docs/connector-v2/sink/Rabbitmq",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/Rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Qdrant",permalink:"/docs/connector-v2/sink/Qdrant"},next:{title:"Redis",permalink:"/docs/connector-v2/sink/Redis"}},u={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"virtual_host string",id:"virtual_host-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"queue_name string",id:"queue_name-string",level:3},{value:"durable boolean",id:"durable-boolean",level:3},{value:"exclusive boolean",id:"exclusive-boolean",level:3},{value:"auto_delete boolean",id:"auto_delete-boolean",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"network_recovery_interval int",id:"network_recovery_interval-int",level:3},{value:"topology_recovery_enabled boolean",id:"topology_recovery_enabled-boolean",level:3},{value:"automatic_recovery_enabled boolean",id:"automatic_recovery_enabled-boolean",level:3},{value:"use_correlation_id boolean",id:"use_correlation_id-boolean",level:3},{value:"connection_timeout int",id:"connection_timeout-int",level:3},{value:"rabbitmq.config map",id:"rabbitmqconfig-map",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Example 2",id:"example-2",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],s={toc:g},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"rabbitmq"},"Rabbitmq"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Rabbitmq sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to write data to Rabbitmq."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"virtual_host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"queue_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"network_recovery_interval"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"topology_recovery_enabled"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"automatic_recovery_enabled"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"use_correlation_id"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rabbitmq.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"the default host to use for connections"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"the default port to use for connections"),(0,l.yg)("h3",{id:"virtual_host-string"},"virtual_host ","[string]"),(0,l.yg)("p",null,"virtual host \u2013 the virtual host to use when connecting to the broker"),(0,l.yg)("h3",{id:"username-string"},"username ","[string]"),(0,l.yg)("p",null,"the AMQP user name to use when connecting to the broker"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,"the password to use when connecting to the broker"),(0,l.yg)("h3",{id:"url-string"},"url ","[string]"),(0,l.yg)("p",null,"convenience method for setting the fields in an AMQP URI: host, port, username, password and virtual host"),(0,l.yg)("h3",{id:"queue_name-string"},"queue_name ","[string]"),(0,l.yg)("p",null,"the queue to write the message to"),(0,l.yg)("h3",{id:"durable-boolean"},"durable ","[boolean]"),(0,l.yg)("p",null,"true: The queue will survive a server restart.\nfalse: The queue will be deleted on server restart."),(0,l.yg)("h3",{id:"exclusive-boolean"},"exclusive ","[boolean]"),(0,l.yg)("p",null,"true: The queue is used only by the current connection and will be deleted when the connection closes.\nfalse: The queue can be used by multiple connections."),(0,l.yg)("h3",{id:"auto_delete-boolean"},"auto_delete ","[boolean]"),(0,l.yg)("p",null,"true: The queue will be deleted automatically when the last consumer unsubscribes.\nfalse: The queue will not be automatically deleted."),(0,l.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,l.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.yg)("p",null,"the schema fields of upstream data."),(0,l.yg)("h3",{id:"network_recovery_interval-int"},"network_recovery_interval ","[int]"),(0,l.yg)("p",null,"how long will automatic recovery wait before attempting to reconnect, in ms"),(0,l.yg)("h3",{id:"topology_recovery_enabled-boolean"},"topology_recovery_enabled ","[boolean]"),(0,l.yg)("p",null,"if true, enables topology recovery"),(0,l.yg)("h3",{id:"automatic_recovery_enabled-boolean"},"automatic_recovery_enabled ","[boolean]"),(0,l.yg)("p",null,"if true, enables connection recovery"),(0,l.yg)("h3",{id:"use_correlation_id-boolean"},"use_correlation_id ","[boolean]"),(0,l.yg)("p",null,"whether the messages received are supplied with a unique id to deduplicate messages (in case of failed acknowledgments)."),(0,l.yg)("h3",{id:"connection_timeout-int"},"connection_timeout ","[int]"),(0,l.yg)("p",null,"connection TCP establishment timeout in milliseconds; zero for infinite"),(0,l.yg)("h3",{id:"rabbitmqconfig-map"},"rabbitmq.config ","[map]"),(0,l.yg)("p",null,"In addition to the above parameters that must be specified by the RabbitMQ client, the user can also specify multiple non-mandatory parameters for the client, covering ",(0,l.yg)("a",{parentName:"p",href:"https://www.rabbitmq.com/configure.html"},"all the parameters specified in the official RabbitMQ document"),"."),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"simple:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n      RabbitMQ {\n          host = "rabbitmq-e2e"\n          port = 5672\n          virtual_host = "/"\n          username = "guest"\n          password = "guest"\n          queue_name = "test1"\n          rabbitmq.config = {\n            requested-heartbeat = 10\n            connection-timeout = 10\n          }\n      }\n}\n')),(0,l.yg)("h3",{id:"example-2"},"Example 2"),(0,l.yg)("p",null,"queue with durable, exclusive, auto_delete:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n      RabbitMQ {\n          host = "rabbitmq-e2e"\n          port = 5672\n          virtual_host = "/"\n          username = "guest"\n          password = "guest"\n          queue_name = "test1"\n          durable = "true"\n          exclusive = "false"\n          auto_delete = "false"\n          rabbitmq.config = {\n            requested-heartbeat = 10\n            connection-timeout = 10\n          }\n      }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"next-version"},"next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Rabbitmq Sink Connector"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Change Connector Custom Config Prefix To Map ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3719"},"3719"))))}p.isMDXComponent=!0}}]);
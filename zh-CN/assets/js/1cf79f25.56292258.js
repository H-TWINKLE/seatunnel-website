"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25184],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(n),c=r,m=g["".concat(u,".").concat(c)]||g[c]||d[c]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),l=n(20053),i=n(23104),o=n(56347),u=n(57485),s=n(31682),p=n(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:n,groupId:a}),[g,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=u??g;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(g(t),u(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(N,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,b.A)();return r.createElement(h,(0,a.A)({key:String(t)},e))}},43587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),l=n(11470),i=n(19365);const o={},u="Jdbc",s={unversionedId:"connector/source/Jdbc",id:"version-2.3.0-beta/connector/source/Jdbc",title:"Jdbc",description:"JDBC source connector",source:"@site/versioned_docs/version-2.3.0-beta/connector/source/Jdbc.mdx",sourceDirName:"connector/source",slug:"/connector/source/Jdbc",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Jdbc",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/connector/source/Jdbc.mdx",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/InfluxDB"},next:{title:"Kafka",permalink:"/zh-CN/docs/2.3.0-beta/connector/source/Kafka"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"password string",id:"password-string",level:3},{value:"password",id:"password",level:5},{value:"url string",id:"url-string",level:3},{value:"jdbc string",id:"jdbc-string",level:3},{value:"user string",id:"user-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"query string",id:"query-string",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound long",id:"partition_upper_bound-long",level:3},{value:"partition_lower_bound long",id:"partition_lower_bound-long",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],d={toc:g},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jdbc"},"Jdbc"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Jdbc"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Jdbc"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jdbc.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"))))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))))),(0,r.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc class name")," used to connect to the remote data source, if you use MySQL the value is ",(0,r.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,r.yg)("p",null,"Warn: for license compliance, you have to provide MySQL JDBC driver yourself, e.g. copy ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"$FLINK_HOME/lib")," for Standalone."),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("h5",{id:"password"},"password"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL of the JDBC connection. Refer to a case: ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc:postgresql://localhost/test")),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("h3",{id:"jdbc-string"},"jdbc ","[string]"),(0,r.yg)("p",null,"In addition to the parameters that must be specified above, users can also specify multiple optional parameters, which cover ",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/sql-programming-guide.html#jdbc-to-other-databases"},"all the parameters")," provided by Spark JDBC."),(0,r.yg)("p",null,"The way to specify parameters is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc.")," to the original parameter name. For example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"fetchsize")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc.fetchsize = 50000")," . If these non-essential parameters are not specified, they will use the default values given by Spark JDBC."),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"username"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"table name")),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"username"),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Query statement"),(0,r.yg)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,r.yg)("p",null,"fetch size"),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for JdbcSource."),(0,r.yg)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,r.yg)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,r.yg)("h3",{id:"partition_upper_bound-long"},"partition_upper_bound ","[long]"),(0,r.yg)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,r.yg)("h3",{id:"partition_lower_bound-long"},"partition_lower_bound ","[long]"),(0,r.yg)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."))),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/connector/source/common-options"},"Source Plugin")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.cj.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Read MySQL data through JDBC")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.cj.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n    jdbc.partitionColumn = "item_id"\n    jdbc.numPartitions = "10"\n    jdbc.lowerBound = 0\n    jdbc.upperBound = 100\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Divide partitions based on specified fields")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'jdbc {\n    driver = "com.mysql.cj.jdbc.Driver"\n    url = "jdbc:mysql://localhost:3306/info"\n    table = "access"\n    result_table_name = "access_log"\n    user = "username"\n    password = "password"\n    \n    jdbc.connect_timeout = 10000\n    jdbc.socket_timeout = 10000\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Timeout config"))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'JdbcSource {\n    driver = com.mysql.cj.jdbc.Driver\n    url = "jdbc:mysql://localhost/test"\n    username = root\n    query = "select * from test"\n}\n')))))}m.isMDXComponent=!0}}]);
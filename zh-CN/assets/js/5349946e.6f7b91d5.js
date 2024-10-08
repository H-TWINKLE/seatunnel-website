"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43526],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>p});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),f=o,p=h["".concat(l,".").concat(f)]||h[f]||d[f]||a;return t?r.createElement(p,i(i({ref:n},u),{},{components:t})):r.createElement(p,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const a={sidebar_position:2},i="Intro to config file",s={unversionedId:"concept/config",id:"version-2.1.3/concept/config",title:"Intro to config file",description:"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data",source:"@site/versioned_docs/version-2.1.3/concept/config.md",sourceDirName:"concept",slug:"/concept/config",permalink:"/zh-CN/docs/2.1.3/concept/config",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/concept/config.md",tags:[],version:"2.1.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Set Up with Kubernetes",permalink:"/zh-CN/docs/2.1.3/start/kubernetes"},next:{title:"Source",permalink:"/zh-CN/docs/2.1.3/category/source"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Config file structure",id:"config-file-structure",level:2},{value:"env",id:"env",level:3},{value:"source",id:"source",level:3},{value:"transform",id:"transform",level:3},{value:"sink",id:"sink",level:3},{value:"Other",id:"other",level:3},{value:"What&#39;s More",id:"whats-more",level:2}],u={toc:c},h="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(h,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"intro-to-config-file"},"Intro to config file"),(0,o.yg)("p",null,"In SeaTunnel, the most important thing is the Config file, through which users can customize their own data\nsynchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to\nconfigure the Config file."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"Before you read on, you can find config file\nexamples ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/config"},"here")," and in distribute package's\nconfig directory."),(0,o.yg)("h2",{id:"config-file-structure"},"Config file structure"),(0,o.yg)("p",null,"The Config file will be similar to the one below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    field_name = "name,age"\n  }\n}\n\ntransform {\n  sql {\n    sql = "select name,age from fake"\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name"]\n    username = "default"\n    password = ""\n  }\n}\n')),(0,o.yg)("p",null,"As you can see, the Config file contains several sections: env, source, transform, sink. Different modules\nhave different functions. After you understand these modules, you will understand how SeaTunnel works."),(0,o.yg)("h3",{id:"env"},"env"),(0,o.yg)("p",null,"Used to add some engine optional parameters, no matter which engine (Spark or Flink), the corresponding\noptional parameters should be filled in here."),(0,o.yg)("h3",{id:"source"},"source"),(0,o.yg)("p",null,"source is used to define where SeaTunnel needs to fetch data, and use the fetched data for the next step.\nMultiple sources can be defined at the same time. The supported source at now\ncheck ",(0,o.yg)("a",{parentName:"p",href:"../connector/source"},"Source of SeaTunnel"),". Each source has its own specific parameters to define how to\nfetch data, and SeaTunnel also extracts the parameters that each source will use, such as\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"result_table_name")," parameter, which is used to specify the name of the data generated by the current\nsource, which is convenient for follow-up used by other modules."),(0,o.yg)("h3",{id:"transform"},"transform"),(0,o.yg)("p",null,"When we have the data source, we may need to further process the data, so we have the transform module. Of\ncourse, this uses the word 'may', which means that we can also directly treat the transform as non-existent,\ndirectly from source to sink. Like below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"transform {\n  // no thing on here\n}\n")),(0,o.yg)("p",null,"Like source, transform has specific parameters that belong to each module. The supported source at now check.\nThe supported transform at now check ",(0,o.yg)("a",{parentName:"p",href:"../transform"},"Transform of SeaTunnel")),(0,o.yg)("h3",{id:"sink"},"sink"),(0,o.yg)("p",null,"Our purpose with SeaTunnel is to synchronize data from one place to another, so it is critical to define how\nand where data is written. With the sink module provided by SeaTunnel, you can complete this operation quickly\nand efficiently. Sink and source are very similar, but the difference is reading and writing. So go check out\nour ",(0,o.yg)("a",{parentName:"p",href:"../connector/sink"},"supported sinks"),"."),(0,o.yg)("h3",{id:"other"},"Other"),(0,o.yg)("p",null,"You will find that when multiple sources and multiple sinks are defined, which data is read by each sink, and\nwhich is the data read by each transform? We use ",(0,o.yg)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"source_table_name")," two key\nconfigurations. Each source module will be configured with a ",(0,o.yg)("inlineCode",{parentName:"p"},"result_table_name")," to indicate the name of the\ndata source generated by the data source, and other transform and sink modules can use ",(0,o.yg)("inlineCode",{parentName:"p"},"source_table_name")," to\nrefer to the corresponding data source name, indicating that I want to read the data for processing. Then\ntransform, as an intermediate processing module, can use both ",(0,o.yg)("inlineCode",{parentName:"p"},"result_table_name")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"source_table_name"),"\nconfigurations at the same time. But you will find that in the above example Config, not every module is\nconfigured with these two parameters, because in SeaTunnel, there is a default convention, if these two\nparameters are not configured, then the generated data from the last module of the previous node will be used.\nThis is much more convenient when there is only one source."),(0,o.yg)("h2",{id:"whats-more"},"What's More"),(0,o.yg)("p",null,"If you want to know the details of this format configuration, Please\nsee ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}d.isMDXComponent=!0}}]);
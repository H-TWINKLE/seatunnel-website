"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[88985],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,s=d["".concat(p,".").concat(u)]||d[u]||y[u]||l;return n?a.createElement(s,o(o({ref:t},g),{},{components:n})):a.createElement(s,o({ref:t},g))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(58168),r=(n(96540),n(15680));const l={},o="LLM",i={unversionedId:"transform-v2/llm",id:"version-2.3.7/transform-v2/llm",title:"LLM",description:"LLM transform plugin",source:"@site/versioned_docs/version-2.3.7/transform-v2/llm.md",sourceDirName:"transform-v2",slug:"/transform-v2/llm",permalink:"/docs/2.3.7/transform-v2/llm",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.7/transform-v2/llm.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"JsonPath",permalink:"/docs/2.3.7/transform-v2/jsonpath"},next:{title:"Replace",permalink:"/docs/2.3.7/transform-v2/replace"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"model_provider",id:"model_provider",level:3},{value:"output_data_type",id:"output_data_type",level:3},{value:"prompt",id:"prompt",level:3},{value:"model",id:"model",level:3},{value:"api_key",id:"api_key",level:3},{value:"openai.api_path",id:"openaiapi_path",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],g={toc:m},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"llm"},"LLM"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"LLM transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Leverage the power of a large language model (LLM) to process data by sending it to the LLM and receiving the\ngenerated results. Utilize the LLM's capabilities to label, clean, enrich data, perform data inference, and\nmore."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model_provider"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prompt"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"openai.api_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://api.openai.com/v1/chat/completions"},"https://api.openai.com/v1/chat/completions"))))),(0,r.yg)("h3",{id:"model_provider"},"model_provider"),(0,r.yg)("p",null,"The model provider to use. The available options are:\nOPENAI"),(0,r.yg)("h3",{id:"output_data_type"},"output_data_type"),(0,r.yg)("p",null,"The data type of the output data. The available options are:\nSTRING,INT,BIGINT,DOUBLE,BOOLEAN.\nDefault value is STRING."),(0,r.yg)("h3",{id:"prompt"},"prompt"),(0,r.yg)("p",null,"The prompt to send to the LLM. This parameter defines how LLM will process and return data, eg:"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20")))),(0,r.yg)("p",null,"The prompt can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Determine whether someone is Chinese or American by their name\n")),(0,r.yg)("p",null,"The result will be:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"llm_output"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"American")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")))),(0,r.yg)("h3",{id:"model"},"model"),(0,r.yg)("p",null,"The model to use. Different model providers have different models. For example, the OpenAI model can be ",(0,r.yg)("inlineCode",{parentName:"p"},"gpt-4o-mini"),".\nIf you use OpenAI model, please refer ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/model-endpoint-compatibility"},"https://platform.openai.com/docs/models/model-endpoint-compatibility")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"/v1/chat/completions")," endpoint."),(0,r.yg)("h3",{id:"api_key"},"api_key"),(0,r.yg)("p",null,"The API key to use for the model provider.\nIf you use OpenAI model, please refer ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/api-keys"},"https://platform.openai.com/docs/api-reference/api-keys")," of how to get the API key."),(0,r.yg)("h3",{id:"openaiapi_path"},"openai.api_path"),(0,r.yg)("p",null,"The API path to use for the OpenAI model provider. In most cases, you do not need to change this configuration. If you are using an API agent's service, you may need to configure it to the agent's API address."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.7/transform-v2/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Determine the user's country through a LLM."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Jia Fan"], kind = INSERT}\n      {fields = [2, "Hailin Wang"], kind = INSERT}\n      {fields = [3, "Tomas"], kind = INSERT}\n      {fields = [4, "Eric"], kind = INSERT}\n      {fields = [5, "Guangdong Liu"], kind = INSERT}\n    ]\n  }\n}\n\ntransform {\n  LLM {\n    model_provider = OPENAI\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    prompt = "Determine whether someone is Chinese or American by their name"\n  }\n}\n\nsink {\n  console {\n  }\n}\n')))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[12314],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?o.createElement(y,i(i({ref:n},p),{},{components:t})):o.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const l={sidebar_position:4},i=void 0,a={unversionedId:"seatunnel-engine/local-mode-deployment",id:"seatunnel-engine/local-mode-deployment",title:"local-mode-deployment",description:"----------------",source:"@site/docs/seatunnel-engine/local-mode-deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/local-mode-deployment",permalink:"/docs/seatunnel-engine/local-mode-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/local-mode-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"deployment",permalink:"/docs/seatunnel-engine/deployment"},next:{title:"hybrid-cluster-deployment",permalink:"/docs/seatunnel-engine/hybrid-cluster-deployment"}},s={},c=[{value:"Deploying SeaTunnel Engine in Local Mode",id:"deploying-seatunnel-engine-in-local-mode",level:2},{value:"Submitting Jobs",id:"submitting-jobs",level:2},{value:"Job Operations",id:"job-operations",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"run-jobs-in-local-mode"},"Run Jobs in Local Mode"),(0,r.yg)("p",null,"Only for testing."),(0,r.yg)("p",null,"In local mode, each task will start a separate process, and the process will exit when the task is completed. There are the following limitations in this mode:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Pausing and resuming tasks are not supported."),(0,r.yg)("li",{parentName:"ol"},"Viewing the task list is not supported."),(0,r.yg)("li",{parentName:"ol"},"Jobs cannot be cancelled via commands, only by killing the process."),(0,r.yg)("li",{parentName:"ol"},"REST API is not supported.")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/separated-cluster-deployment"},"separated cluster mode")," of SeaTunnel Engine is recommended for use in production environments."),(0,r.yg)("h2",{id:"deploying-seatunnel-engine-in-local-mode"},"Deploying SeaTunnel Engine in Local Mode"),(0,r.yg)("p",null,"In local mode, there is no need to deploy a SeaTunnel Engine cluster. You only need to use the following command to submit jobs. The system will start the SeaTunnel Engine (Zeta) service in the process that submitted the job to run the submitted job, and the process will exit after the job is completed."),(0,r.yg)("p",null,"In this mode, you only need to copy the downloaded and created installation package to the server where you need to run it. If you need to adjust the JVM parameters for job execution, you can modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_client_options")," file."),(0,r.yg)("h2",{id:"submitting-jobs"},"Submitting Jobs"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -e local\n")),(0,r.yg)("h2",{id:"job-operations"},"Job Operations"),(0,r.yg)("p",null,"Jobs submitted in local mode will run in the process that submitted the job, and the process will exit when the job is completed. If you want to abort the job, you only need to exit the process that submitted the job. The job's runtime logs will be output to the standard output of the process that submitted the job."),(0,r.yg)("p",null,"Other operation and maintenance operations are not supported."))}d.isMDXComponent=!0}}]);
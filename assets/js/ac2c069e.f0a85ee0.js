"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73942],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=o.createContext({}),c=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(r.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(t),b=a,h=g["".concat(r,".").concat(b)]||g[b]||p[b]||i;return t?o.createElement(h,l(l({ref:n},u),{},{components:t})):o.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[g]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},84954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(58168),a=(t(96540),t(15680));const i={sidebar_position:13},l="Command Line Tool",s={unversionedId:"seatunnel-engine/user-command",id:"seatunnel-engine/user-command",title:"Command Line Tool",description:"The SeaTunnel Engine provides a command line tool for managing the jobs of the SeaTunnel Engine. You can use the command line tool to submit, stop, pause, resume, delete jobs, view job status and monitoring metrics, etc.",source:"@site/docs/seatunnel-engine/user-command.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/user-command",permalink:"/docs/seatunnel-engine/user-command",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/seatunnel-engine/user-command.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docs",previous:{title:"RESTful API V2",permalink:"/docs/seatunnel-engine/rest-api-v2"},next:{title:"Logging",permalink:"/docs/seatunnel-engine/logging"}},r={},c=[{value:"Submitting Jobs",id:"submitting-jobs",level:2},{value:"Viewing The Job List",id:"viewing-the-job-list",level:2},{value:"Viewing The Job Status",id:"viewing-the-job-status",level:2},{value:"Getting The Monitoring Information Of Running Jobs",id:"getting-the-monitoring-information-of-running-jobs",level:2},{value:"Getting the Monitoring Information of a Specified Job",id:"getting-the-monitoring-information-of-a-specified-job",level:2},{value:"Pausing Jobs",id:"pausing-jobs",level:2},{value:"Resuming Jobs",id:"resuming-jobs",level:2},{value:"Canceling Jobs",id:"canceling-jobs",level:2}],u={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,a.yg)("p",null,"The SeaTunnel Engine provides a command line tool for managing the jobs of the SeaTunnel Engine. You can use the command line tool to submit, stop, pause, resume, delete jobs, view job status and monitoring metrics, etc."),(0,a.yg)("p",null,"You can obtain the help information of the command line tool through the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -h\n")),(0,a.yg)("p",null,"The output is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\nUsage: seatunnel.sh [options]\n  Options:\n    --async                         Run the job asynchronously. When the job is submitted, the client will exit (default: false).\n    -can, --cancel-job              Cancel the job by JobId.\n    --check                         Whether to check the config (default: false).\n    -cj, --close-job                Close the client and the task will also be closed (default: true).\n    -cn, --cluster                  The name of the cluster.\n    -c, --config                    Config file.\n    --decrypt                       Decrypt the config file. When both --decrypt and --encrypt are specified, only --encrypt will take effect (default: false). \n    -m, --master, -e, --deploy-mode SeaTunnel job submit master, support [local, cluster] (default: cluster).\n    --encrypt                       Encrypt the config file. When both --decrypt and --encrypt are specified, only --encrypt will take effect (default: false). \n    --get_running_job_metrics       Get metrics for running jobs (default: false).\n    -h, --help                      Show the usage message.\n    -j, --job-id                    Get the job status by JobId.\n    -l, --list                      List the job status (default: false).\n    --metrics                       Get the job metrics by JobId.\n    -n, --name                      The SeaTunnel job name (default: SeaTunnel).\n    -r, --restore                   Restore with savepoint by jobId.\n    -s, --savepoint                 Savepoint the job by jobId.\n    -i, --variable                  Variable substitution, such as -i city=beijing, or -i date=20190318. We use ',' as a separator. When inside \"\", ',' are treated as normal characters instead of delimiters. (default: []).\n\n")),(0,a.yg)("h2",{id:"submitting-jobs"},"Submitting Jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"--async")," parameter allows the job to run in the background. When the job is submitted, the client will exit."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"-n")," or ",(0,a.yg)("strong",{parentName:"p"},"--name")," parameter can specify the name of the job."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async -n myjob\n")),(0,a.yg)("h2",{id:"viewing-the-job-list"},"Viewing The Job List"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -l\n")),(0,a.yg)("p",null,"This command will output the list of all jobs in the current cluster (including completed historical jobs and running jobs)."),(0,a.yg)("h2",{id:"viewing-the-job-status"},"Viewing The Job Status"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -j <jobId>\n")),(0,a.yg)("p",null,"This command will output the status information of the specified job."),(0,a.yg)("h2",{id:"getting-the-monitoring-information-of-running-jobs"},"Getting The Monitoring Information Of Running Jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --get_running_job_metrics\n")),(0,a.yg)("p",null,"This command will output the monitoring information of running jobs."),(0,a.yg)("h2",{id:"getting-the-monitoring-information-of-a-specified-job"},"Getting the Monitoring Information of a Specified Job"),(0,a.yg)("p",null,"The --metrics parameter can get the monitoring information of a specified job."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --metrics <jobId>\n")),(0,a.yg)("h2",{id:"pausing-jobs"},"Pausing Jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -s <jobId>\n")),(0,a.yg)("p",null,"This command will pause the specified job. Note that only jobs with checkpoints enabled support pausing jobs (real-time synchronization jobs have checkpoints enabled by default, and batch jobs do not have checkpoints enabled by default and need to configure checkpoint.interval in ",(0,a.yg)("inlineCode",{parentName:"p"},"env")," to enable checkpoints)."),(0,a.yg)("p",null,"Pausing a job is in the smallest unit of split. That is, after pausing a job, it will wait for the currently running split to finish running and then pause. After the task is resumed, it will continue to run from the paused split."),(0,a.yg)("h2",{id:"resuming-jobs"},"Resuming Jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -r <jobId> -c $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,a.yg)("p",null,"This command will resume the specified job. Note that only jobs with checkpoints enabled support resuming jobs (real-time synchronization jobs have checkpoints enabled by default, and batch jobs do not have checkpoints enabled by default and need to configure checkpoint.interval in ",(0,a.yg)("inlineCode",{parentName:"p"},"env")," to enable checkpoints)."),(0,a.yg)("p",null,"Resuming a job requires the jobId and the configuration file of the job."),(0,a.yg)("p",null,"Both failed jobs and jobs paused by seatunnel.sh -s ","<","jobId",">"," can be resumed by this command."),(0,a.yg)("h2",{id:"canceling-jobs"},"Canceling Jobs"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -can <jobId1> [<jobId2> <jobId3> ...]\n")),(0,a.yg)("p",null,"This command will cancel the specified job. After canceling the job, the job will be stopped and its status will become ",(0,a.yg)("inlineCode",{parentName:"p"},"CANCELED"),"."),(0,a.yg)("p",null,"Supports batch cancellation of jobs, and can cancel multiple jobs at one time."),(0,a.yg)("p",null,"All breakpoint information of the canceled job will be deleted and cannot be resumed by seatunnel.sh -r ","<","jobId",">","."))}p.isMDXComponent=!0}}]);
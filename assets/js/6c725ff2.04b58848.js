"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[91748],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,d=p["".concat(i,".").concat(m)]||p[m]||g[m]||l;return a?t.createElement(d,o(o({ref:n},c),{},{components:a})):t.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>o});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>N});var t=a(58168),r=a(96540),l=a(20053),o=a(23104),u=a(56347),i=a(57485),s=a(31682),c=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function g(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??p(a);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:a}=e;const t=(0,u.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=g(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[i,s]=d({queryString:a,groupId:t}),[p,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),f=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),g=e=>{const n=e.currentTarget,a=c.indexOf(n),t=s[a].value;t!==u&&(p(n),i(t))},m=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},s.map((e=>{let{value:n,label:a,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:g},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":u===n})}),a??n)})))}function k(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,t.A)({},e,n)),r.createElement(k,(0,t.A)({},e,n)))}function N(e){const n=(0,f.A)();return r.createElement(v,(0,t.A)({key:String(n)},e))}},7941:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(96540),a(15680)),l=a(11470),o=a(19365);const u={sidebar_position:4},i="Set Up with Kubernetes",s={unversionedId:"start-v2/kubernetes",id:"version-2.2.0-beta/start-v2/kubernetes",title:"Set Up with Kubernetes",description:"This section provides a quick guide to using SeaTunnel with Kubernetes.",source:"@site/versioned_docs/version-2.2.0-beta/start-v2/kubernetes.mdx",sourceDirName:"start-v2",slug:"/start-v2/kubernetes",permalink:"/docs/2.2.0-beta/start-v2/kubernetes",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/start-v2/kubernetes.mdx",tags:[],version:"2.2.0-beta",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Set Up with Docker",permalink:"/docs/2.2.0-beta/start-v2/docker"},next:{title:"Intro to config file",permalink:"/docs/2.2.0-beta/concept/config"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"SeaTunnel docker image",id:"seatunnel-docker-image",level:3},{value:"Deploying the operator",id:"deploying-the-operator",level:3},{value:"Run SeaTunnel Application",id:"run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],g={toc:p},m="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"set-up-with-kubernetes"},"Set Up with Kubernetes"),(0,r.yg)("p",null,"This section provides a quick guide to using SeaTunnel with Kubernetes."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"We assume that you have a local installations of the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/"},"docker")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/"},"kubernetes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/quickstart/"},"helm"))),(0,r.yg)("p",null,"So that the ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"helm")," commands are available on your local system."),(0,r.yg)("p",null,"For kubernetes ",(0,r.yg)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," is our choice, at the time of writing this we are using version v1.23.3. You can start a cluster with the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube start --kubernetes-version=v1.23.3\n")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"seatunnel-docker-image"},"SeaTunnel docker image"),(0,r.yg)("p",null,"To run the image with SeaTunnel, first create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM flink:1.13\n\nENV SEATUNNEL_VERSION="2.2.0-beta"\nENV SEATUNNEL_HOME = "/opt/seatunnel"\n\nRUN mkdir -p $SEATUNNEL_HOME\n\nRUN wget https://archive.apache.org/dist/incubator/seatunnel/${SEATUNNEL_VERSION}/apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz\nRUN tar -xzvf apache-seatunnel-incubating-${SEATUNNEL_VERSION}-bin.tar.gz\n\nRUN cp -r apache-seatunnel-incubating-${SEATUNNEL_VERSION}/* $SEATUNNEL_HOME/\nRUN rm -rf apache-seatunnel-incubating-${SEATUNNEL_VERSION}*\nRUN rm -rf $SEATUNNEL_HOME/connectors/seatunnel\n')),(0,r.yg)("p",null,"Then run the following commands to build the image:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker build -t seatunnel:2.2.0-beta-flink-1.13 -f Dockerfile .\n")),(0,r.yg)("p",null,"Image ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel:2.2.0-beta-flink-1.13")," need to be present in the host (minikube) so that the deployment can take place."),(0,r.yg)("p",null,"Load image to minikube via:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube image load seatunnel:2.2.0-beta-flink-1.13\n")))),(0,r.yg)("h3",{id:"deploying-the-operator"},"Deploying the operator"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("p",null,"The steps below provide a quick walk-through on setting up the Flink Kubernetes Operator."),(0,r.yg)("p",null,"Install the certificate manager on your Kubernetes cluster to enable adding the webhook component (only needed once per Kubernetes cluster):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.yaml\n")),(0,r.yg)("p",null,"Now you can deploy the latest stable Flink Kubernetes Operator version using the included Helm chart:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nhelm repo add flink-operator-repo https://downloads.apache.org/flink/flink-kubernetes-operator-0.1.0/\n\nhelm install flink-kubernetes-operator flink-operator-repo/flink-kubernetes-operator\n")),(0,r.yg)("p",null,"You may verify your installation via ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\nNAME                                                   READY   STATUS    RESTARTS      AGE\nflink-kubernetes-operator-5f466b8549-mgchb             1/1     Running   3 (23h ago)   16d\n\n")))),(0,r.yg)("h2",{id:"run-seatunnel-application"},"Run SeaTunnel Application"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Run Application:"),": SeaTunnel already providers out-of-the-box ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/config"},"configurations"),"."),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("p",null,"In this guide we are going to use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/dev/config/flink.streaming.conf.template"},"flink.streaming.conf"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},'env {\n execution.parallelism = 1\n}\n\nsource {\n   FakeSourceStream {\n     result_table_name = "fake"\n     field_name = "name,age"\n   }\n}\n\ntransform {\n   sql {\n     sql = "select name,age from fake"\n   }\n}\n\nsink {\n ConsoleSink {}\n}\n')),(0,r.yg)("p",null,"This configuration need to be present when we are going to deploy the application (SeaTunnel) to Flink cluster (on Kubernetes), we also need to configure a Pod to Use a PersistentVolume for Storage."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create ",(0,r.yg)("inlineCode",{parentName:"li"},"/mnt/data")," on your Node. Open a shell to the single Node in your cluster. How you open a shell depends on how you set up your cluster. For example, in our case weare using Minikube, you can open a shell to your Node by entering ",(0,r.yg)("inlineCode",{parentName:"li"},"minikube ssh"),".\nIn your shell on that Node, create a /mnt/data directory:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'minikube ssh\n\n# This assumes that your Node uses "sudo" to run commands\n# as the superuser\nsudo mkdir /mnt/data\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Copy application (SeaTunnel) configuration files to your Node.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"minikube cp flink.streaming.conf /mnt/data/flink.streaming.conf\n")),(0,r.yg)("p",null,"Once the Flink Kubernetes Operator is running as seen in the previous steps you are ready to submit a Flink (SeaTunnel) job:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create ",(0,r.yg)("inlineCode",{parentName:"li"},"seatunnel-flink.yaml")," FlinkDeployment manifest:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: flink.apache.org/v1alpha1\nkind: FlinkDeployment\nmetadata:\n  namespace: default\n  name: seatunnel-flink-streaming-example\nspec:\n  image: seatunnel:2.2.0-beta-flink-1.13\n  flinkVersion: v1_14\n  flinkConfiguration:\n    taskmanager.numberOfTaskSlots: "2"\n  serviceAccount: flink\n  jobManager:\n    replicas: 1\n    resource:\n      memory: "2048m"\n      cpu: 1\n  taskManager:\n    resource:\n      memory: "2048m"\n      cpu: 2\n  podTemplate:\n    spec:\n      containers:\n        - name: flink-main-container\n          volumeMounts:\n            - mountPath: /data\n              name: config-volume\n      volumes:\n        - name: config-volume\n          hostPath:\n            path: "/mnt/data"\n            type: Directory\n\n  job:\n    jarURI: local:///opt/seatunnel/lib/seatunnel-flink-starter.jar\n    entryClass: org.apache.seatunnel.core.starter.flink.SeatunnelFlink\n    args: ["--config", "/data/flink.streaming.conf"]\n    parallelism: 2\n    upgradeMode: stateless\n\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run the example application:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f seatunnel-flink.yaml\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See The Output")),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"flink",values:[{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("p",null,"You may follow the logs of your job, after a successful startup (which can take on the order of a minute in a fresh environment, seconds afterwards) you can:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -f deploy/seatunnel-flink-streaming-example\n")),(0,r.yg)("p",null,"To expose the Flink Dashboard you may add a port-forward rule:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/seatunnel-flink-streaming-example-rest 8081\n")),(0,r.yg)("p",null,"Now the Flink Dashboard is accessible at ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:8081"},"localhost:8081"),"."),(0,r.yg)("p",null,"Or launch ",(0,r.yg)("inlineCode",{parentName:"p"},"minikube dashboard")," for a web-based Kubernetes user interface."),(0,r.yg)("p",null,"The content printed in the TaskManager Stdout log:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl logs \\\n-l 'app in (seatunnel-flink-streaming-example), component in (taskmanager)' \\\n--tail=-1 \\\n-f\n")),(0,r.yg)("p",null,"looks like the below (your content may be different since we use ",(0,r.yg)("inlineCode",{parentName:"p"},"FakeSourceStream")," to automatically generate random stream data):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"+I[Kid Xiong, 1650316786086]\n+I[Ricky Huo, 1650316787089]\n+I[Ricky Huo, 1650316788089]\n+I[Ricky Huo, 1650316789090]\n+I[Kid Xiong, 1650316790090]\n+I[Kid Xiong, 1650316791091]\n+I[Kid Xiong, 1650316792092]\n")),(0,r.yg)("p",null,"To stop your job and delete your FlinkDeployment you can simply:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f seatunnel-flink.yaml\n")))),(0,r.yg)("p",null,"Happy SeaTunneling!"),(0,r.yg)("h2",{id:"whats-more"},"What's More"),(0,r.yg)("p",null,"For now, you are already taking a quick look at SeaTunnel, you could see ",(0,r.yg)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all source and sink SeaTunnel supported.\nOr see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.2.0-beta/deployment"},"deployment")," if you want to submit your application in another kind of your engine cluster."))}d.isMDXComponent=!0}}]);
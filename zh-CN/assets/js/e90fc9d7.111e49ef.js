"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23640],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),i=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),g=t,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||l;return a?r.createElement(m,o(o({ref:n},p),{},{components:a})):r.createElement(m,o({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:t,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},80806:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(58168),t=(a(96540),a(15680));const l={sidebar_position:3},o="\u4f7f\u7528Docker\u8fdb\u884c\u90e8\u7f72",s={unversionedId:"start-v2/docker/docker",id:"start-v2/docker/docker",title:"\u4f7f\u7528Docker\u8fdb\u884c\u90e8\u7f72",description:"\u4f7f\u7528Docker\u542f\u7528\u672c\u5730\u6a21\u5f0f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/docker/docker.md",sourceDirName:"start-v2/docker",slug:"/start-v2/docker/",permalink:"/zh-CN/docs/start-v2/docker/",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/start-v2/docker/docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Spark \u5f15\u64ce\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/start-v2/locally/quick-start-spark"},next:{title:"Set Up with Kubernetes",permalink:"/zh-CN/docs/start-v2/kubernetes/"}},c={},i=[{value:"\u4f7f\u7528Docker\u542f\u7528\u672c\u5730\u6a21\u5f0f",id:"\u4f7f\u7528docker\u542f\u7528\u672c\u5730\u6a21\u5f0f",level:2},{value:"Zeta \u5f15\u64ce",id:"zeta-\u5f15\u64ce",level:3},{value:"\u4e0b\u8f7d\u955c\u50cf",id:"\u4e0b\u8f7d\u955c\u50cf",level:4},{value:"\u81ea\u5df1\u6784\u5efa\u955c\u50cf",id:"\u81ea\u5df1\u6784\u5efa\u955c\u50cf",level:4},{value:"\u4e00\u4e2a\u547d\u4ee4\u6765\u6784\u5efa\u5bb9\u5668",id:"\u4e00\u4e2a\u547d\u4ee4\u6765\u6784\u5efa\u5bb9\u5668",level:5},{value:"\u5206\u6b65\u9aa4\u6784\u5efa",id:"\u5206\u6b65\u9aa4\u6784\u5efa",level:5},{value:"Spark/Flink\u5f15\u64ce",id:"sparkflink\u5f15\u64ce",level:3},{value:"\u6302\u8f7d Spark/Flink",id:"\u6302\u8f7d-sparkflink",level:4},{value:"\u63d0\u4ea4\u4efb\u52a1",id:"\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"\u4f7f\u7528Docker\u914d\u7f6e\u96c6\u7fa4\u6a21\u5f0f",id:"\u4f7f\u7528docker\u914d\u7f6e\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"\u76f4\u63a5\u4f7f\u7528Docker",id:"\u76f4\u63a5\u4f7f\u7528docker",level:3},{value:"\u521b\u5efa\u4e00\u4e2anetwork",id:"\u521b\u5efa\u4e00\u4e2anetwork",level:4},{value:"\u542f\u52a8\u8282\u70b9",id:"\u542f\u52a8\u8282\u70b9",level:4},{value:"\u96c6\u7fa4\u6269\u5bb9",id:"\u96c6\u7fa4\u6269\u5bb9",level:4},{value:"\u4f7f\u7528docker-compose",id:"\u4f7f\u7528docker-compose",level:3},{value:"\u96c6\u7fa4\u6269\u5bb9",id:"\u96c6\u7fa4\u6269\u5bb9-1",level:4},{value:"\u63d0\u4ea4\u4f5c\u4e1a\u5230\u96c6\u7fa4",id:"\u63d0\u4ea4\u4f5c\u4e1a\u5230\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528docker container\u4f5c\u4e3a\u5ba2\u6237\u7aef",id:"\u4f7f\u7528docker-container\u4f5c\u4e3a\u5ba2\u6237\u7aef",level:4},{value:"\u4f7f\u7528RestAPI",id:"\u4f7f\u7528restapi",level:4}],p={toc:i},u="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u4f7f\u7528docker\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528Docker\u8fdb\u884c\u90e8\u7f72"),(0,t.yg)("h2",{id:"\u4f7f\u7528docker\u542f\u7528\u672c\u5730\u6a21\u5f0f"},"\u4f7f\u7528Docker\u542f\u7528\u672c\u5730\u6a21\u5f0f"),(0,t.yg)("h3",{id:"zeta-\u5f15\u64ce"},"Zeta \u5f15\u64ce"),(0,t.yg)("h4",{id:"\u4e0b\u8f7d\u955c\u50cf"},"\u4e0b\u8f7d\u955c\u50cf"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/seatunnel:<version_tag>\n")),(0,t.yg)("p",null,"\u5f53\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u63d0\u4ea4\u4efb\u52a1"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'# Run fake source to console sink\ndocker run --rm -it apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c config/v2.batch.config.template\n\n# Run job with custom config file\ndocker run --rm -it -v /<The-Config-Directory-To-Mount>/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c /config/fake_to_console.conf\n\n# Example\n# If you config file is in /tmp/job/fake_to_console.conf\ndocker run --rm -it -v /tmp/job/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c /config/fake_to_console.conf\n\n# Set JVM options when running\ndocker run --rm -it -v /tmp/job/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -DJvmOption="-Xms4G -Xmx4G" -m local -c /config/fake_to_console.conf\n')),(0,t.yg)("h4",{id:"\u81ea\u5df1\u6784\u5efa\u955c\u50cf"},"\u81ea\u5df1\u6784\u5efa\u955c\u50cf"),(0,t.yg)("p",null,"\u4ece\u6e90\u4ee3\u7801\u6784\u5efa\u3002\u4e0b\u8f7d\u6e90\u7801\u7684\u65b9\u5f0f\u548c\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\u7684\u65b9\u5f0f\u662f\u4e00\u6837\u7684\u3002\n\u4f60\u53ef\u4ee5\u4ece",(0,t.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/download/"},"\u4e0b\u8f7d\u5730\u5740"),"\u4e0b\u8f7d\u6e90\u7801\uff0c \u6216\u8005\u4ece",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/releases"},"GitHub \u4ed3\u5e93"),"\u514b\u9686\u6e90\u4ee3\u7801"),(0,t.yg)("h5",{id:"\u4e00\u4e2a\u547d\u4ee4\u6765\u6784\u5efa\u5bb9\u5668"},"\u4e00\u4e2a\u547d\u4ee4\u6765\u6784\u5efa\u5bb9\u5668"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'cd seatunnel\n# Use already sett maven profile\nmvn -B clean install -Dmaven.test.skip=true -Dmaven.javadoc.skip=true -Dlicense.skipAddThirdParty=true -D"docker.build.skip"=false -D"docker.verify.skip"=false -D"docker.push.skip"=true -D"docker.tag"=2.3.8 -Dmaven.deploy.skip -D"skip.spotless"=true --no-snapshot-updates -Pdocker,seatunnel\n\n# Check the docker image\ndocker images | grep apache/seatunnel\n')),(0,t.yg)("h5",{id:"\u5206\u6b65\u9aa4\u6784\u5efa"},"\u5206\u6b65\u9aa4\u6784\u5efa"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# Build binary package from source code\nmvn clean package -DskipTests -Dskip.spotless=true\n\n# Build docker image\ncd seatunnel-dist\ndocker build -f src/main/docker/Dockerfile --build-arg VERSION=2.3.8 -t apache/seatunnel:2.3.8 .\n\n# If you build from dev branch, you should add SNAPSHOT suffix to the version\ndocker build -f src/main/docker/Dockerfile --build-arg VERSION=2.3.8-SNAPSHOT -t apache/seatunnel:2.3.8-SNAPSHOT .\n\n# Check the docker image\ndocker images | grep apache/seatunnel\n")),(0,t.yg)("p",null,"Dockerfile\u6587\u4ef6\u5185\u5bb9\u4e3a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM openjdk:8\n\nARG VERSION\n# Build from Source Code And Copy it into image\nCOPY ./target/apache-seatunnel-${VERSION}-bin.tar.gz /opt/\n\n# Download From Internet\n# Please Note this file only include fake/console connector, You'll need to download the other connectors manually\n# wget -P /opt https://dlcdn.apache.org/seatunnel/2.3.6/apache-seatunnel-${VERSION}-bin.tar.gz\n\nRUN cd /opt && \\\n    tar -zxvf apache-seatunnel-${VERSION}-bin.tar.gz && \\\n    mv apache-seatunnel-${VERSION} seatunnel && \\\n    rm apache-seatunnel-${VERSION}-bin.tar.gz && \\\n    cp seatunnel/config/log4j2_client.properties seatunnel/config/log4j2.properties && \\\n    cp seatunnel/config/hazelcast-master.yaml seatunnel/config/hazelcast-worker.yaml\n\nWORKDIR /opt/seatunnel\n")),(0,t.yg)("h3",{id:"sparkflink\u5f15\u64ce"},"Spark/Flink\u5f15\u64ce"),(0,t.yg)("h4",{id:"\u6302\u8f7d-sparkflink"},"\u6302\u8f7d Spark/Flink"),(0,t.yg)("p",null,"\u9ed8\u8ba4\u8bbe\u503c\u4e0b\uff0cSpark\u7684\u76ee\u5f55\u4e3a",(0,t.yg)("inlineCode",{parentName:"p"},"/opt/spark"),", Flink\u7684\u76ee\u5f55\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"/opt/flink"),".\n\u5982\u679c\u4f60\u9700\u8981\u8fd0\u884cSpark\u6216Flink\u5f15\u64ce\uff0c\u4f60\u9700\u8981\u5c06\u76f8\u5173\u4f9d\u8d56\u6302\u8f7d\u5230",(0,t.yg)("inlineCode",{parentName:"p"},"/opt/spark"),"\u6216",(0,t.yg)("inlineCode",{parentName:"p"},"/opt/flink"),"\u76ee\u5f55\u4e0b."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker run \\ \n -v <SPARK_BINARY_PATH>:/opt/spark \\\n -v <FLINK_BINARY_PATH>:/opt/flink \\\n  ...\n")),(0,t.yg)("p",null,"\u6216\u8005\u4f60\u53ef\u4ee5\u5728Dockerfile\u4e2d\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"SPARK_HOME"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"FLINK_HOME"),"\u73af\u5883\u53d8\u91cf\uff0c\u5e76\u4e14\u91cd\u65b0\u6784\u5efa\u57fa\u7840\u955c\u50cf\uff0c\u7136\u540e\u518d\u8fdb\u884c\u6302\u8f7d."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apache/seatunnel\n\nENV SPARK_HOME=<YOUR_CUSTOMIZATION_PATH>\n\n...\n\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker run \\ \n -v <SPARK_BINARY_PATH>:<YOUR_CUSTOMIZATION_PATH> \\\n  ...\n")),(0,t.yg)("h3",{id:"\u63d0\u4ea4\u4efb\u52a1"},"\u63d0\u4ea4\u4efb\u52a1"),(0,t.yg)("p",null,"\u4e0d\u540c\u5f15\u64ce\u548c\u540c\u4e00\u5f15\u64ce\u7684\u4e0d\u540c\u7248\u672c\u547d\u4ee4\u4e0d\u540c\uff0c\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u547d\u4ee4\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Spark")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# spark2\ndocker run --rm -it apache/seatunnel bash ./bin/start-seatunnel-spark-2-connector-v2.sh -c config/v2.batch.config.template\n\n# spark3\ndocker run --rm -it apache/seatunnel bash ./bin/start-seatunnel-spark-3-connector-v2.sh -c config/v2.batch.config.template\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Flink\n\u5728\u63d0\u4ea4\u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5148\u542f\u52a8 Flink \u96c6\u7fa4\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# flink version between `1.12.x` and `1.14.x`\ndocker run --rm -it apache/seatunnel bash -c '<YOUR_FLINK_HOME>/bin/start-cluster.sh && ./bin/start-seatunnel-flink-13-connector-v2.sh -c config/v2.streaming.conf.template'\n# flink version between `1.15.x` and `1.16.x`\ndocker run --rm -it apache/seatunnel bash -c '<YOUR_FLINK_HOME>/bin/start-cluster.sh && ./bin/start-seatunnel-flink-15-connector-v2.sh -c config/v2.streaming.conf.template'\n")),(0,t.yg)("h2",{id:"\u4f7f\u7528docker\u914d\u7f6e\u96c6\u7fa4\u6a21\u5f0f"},"\u4f7f\u7528Docker\u914d\u7f6e\u96c6\u7fa4\u6a21\u5f0f"),(0,t.yg)("p",null,"docker\u4e0b\u7684\u96c6\u7fa4\u6a21\u5f0f\u4ec5\u652f\u6301Zeta\u5f15\u64ce"),(0,t.yg)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u542f\u52a8\u96c6\u7fa4"),(0,t.yg)("h3",{id:"\u76f4\u63a5\u4f7f\u7528docker"},"\u76f4\u63a5\u4f7f\u7528Docker"),(0,t.yg)("h4",{id:"\u521b\u5efa\u4e00\u4e2anetwork"},"\u521b\u5efa\u4e00\u4e2anetwork"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create seatunnel-network\n")),(0,t.yg)("h4",{id:"\u542f\u52a8\u8282\u70b9"},"\u542f\u52a8\u8282\u70b9"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u542f\u52a8master\u8282\u70b9")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"## start master and export 5801 port \ndocker run -d --name seatunnel_master \\\n    --network seatunnel-network \\\n    --rm \\\n    -p 5801:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r master\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u83b7\u53d6\u5bb9\u5668\u7684ip")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker inspect master-1\n")),(0,t.yg)("p",null,"\u8fd0\u884c\u6b64\u547d\u4ee4\u83b7\u53d6master\u5bb9\u5668\u7684ip"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u542f\u52a8worker\u8282\u70b9")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3amaster\u5bb9\u5668\u7684ip\ndocker run -d --name seatunnel_worker_1 \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker\n\n## \u542f\u52a8\u7b2c\u4e8c\u4e2aworker\u8282\u70b9\n# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3amaster\u5bb9\u5668\u7684ip\ndocker run -d --name seatunnel_worker_2 \\\n    --network seatunnel-network \\\n    --rm \\\n     -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker    \n\n")),(0,t.yg)("h4",{id:"\u96c6\u7fa4\u6269\u5bb9"},"\u96c6\u7fa4\u6269\u5bb9"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3a\u5df2\u7ecf\u542f\u52a8\u7684master\u5bb9\u5668\u7684ip \ndocker run -d --name seatunnel_master \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r master\n")),(0,t.yg)("p",null,"\u8fd0\u884c\u8fd9\u4e2a\u547d\u4ee4\u521b\u5efa\u4e00\u4e2aworker\u8282\u70b9"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3amaster\u5bb9\u5668\u7684ip\ndocker run -d --name seatunnel_worker_1 \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker\n")),(0,t.yg)("h3",{id:"\u4f7f\u7528docker-compose"},"\u4f7f\u7528docker-compose"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose.yaml")," \u914d\u7f6e\u6587\u4ef6\u4e3a\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  master:\n    image: apache/seatunnel\n    container_name: seatunnel_master\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r master\n      "    \n    ports:\n      - "5801:5801"\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.2\n\n  worker1:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_1\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.3\n\n  worker2:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_2\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.4\n\nnetworks:\n  seatunnel_network:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.16.0.0/24\n\n')),(0,t.yg)("p",null,"\u8fd0\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose up"),"\u547d\u4ee4\u6765\u542f\u52a8\u96c6\u7fa4\uff0c\u8be5\u914d\u7f6e\u4f1a\u542f\u52a8\u4e00\u4e2amaster\u8282\u70b9\uff0c2\u4e2aworker\u8282\u70b9"),(0,t.yg)("p",null,"\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u8fd0\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"docker logs -f seatunne_master"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"docker logs -f seatunnel_worker_1"),"\u6765\u67e5\u770b\u8282\u70b9\u7684\u65e5\u5fd7",(0,t.yg)("br",{parentName:"p"}),"\n","\u5f53\u4f60\u8bbf\u95ee",(0,t.yg)("inlineCode",{parentName:"p"},"http://localhost:5801/hazelcast/rest/maps/system-monitoring-information")," \u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u96c6\u7fa4\u7684\u72b6\u6001\u4e3a1\u4e2amaster\u8282\u70b9\uff0c2\u4e2aworker\u8282\u70b9."),(0,t.yg)("h4",{id:"\u96c6\u7fa4\u6269\u5bb9-1"},"\u96c6\u7fa4\u6269\u5bb9"),(0,t.yg)("p",null,"\u5f53\u4f60\u9700\u8981\u5bf9\u96c6\u7fa4\u6269\u5bb9, \u4f8b\u5982\u9700\u8981\u6dfb\u52a0\u4e00\u4e2aworker\u8282\u70b9\u65f6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  master:\n    image: apache/seatunnel\n    container_name: seatunnel_master\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4    \n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r master\n      "    \n    ports:\n      - "5801:5801"  \n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.2\n\n  worker1:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_1\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.3\n\n  worker2:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_2\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.4\n  ####\n  ## \u6dfb\u52a0\u65b0\u8282\u70b9\u914d\u7f6e\n  ####      \n  worker3:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_3\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4,172.16.0.5 # \u6dfb\u52a0ip\u5230\u8fd9\u91cc\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.5        # \u8bbe\u7f6e\u65b0\u8282\u70b9ip\n\nnetworks:\n  seatunnel_network:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.16.0.0/24\n\n')),(0,t.yg)("p",null,"\u7136\u540e\u8fd0\u884c",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose up -d"),"\u547d\u4ee4, \u5c06\u4f1a\u65b0\u5efa\u4e00\u4e2aworker\u8282\u70b9, \u5df2\u6709\u7684\u8282\u70b9\u4e0d\u4f1a\u91cd\u542f."),(0,t.yg)("h3",{id:"\u63d0\u4ea4\u4f5c\u4e1a\u5230\u96c6\u7fa4"},"\u63d0\u4ea4\u4f5c\u4e1a\u5230\u96c6\u7fa4"),(0,t.yg)("h4",{id:"\u4f7f\u7528docker-container\u4f5c\u4e3a\u5ba2\u6237\u7aef"},"\u4f7f\u7528docker container\u4f5c\u4e3a\u5ba2\u6237\u7aef"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u63d0\u4ea4\u4efb\u52a1")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3amaster\u5bb9\u5668\u7684ip\ndocker run --name seatunnel_client \\\n    --network seatunnel-network \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    --rm \\\n    apache/seatunnel \\\n    ./bin/seatunnel.sh  -c config/v2.batch.config.template\n")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u67e5\u770b\u4f5c\u4e1a\u5217\u8868")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06ST_DOCKER_MEMBER_LIST\u8bbe\u7f6e\u4e3amaster\u5bb9\u5668\u7684ip\ndocker run --name seatunnel_client \\\n    --network seatunnel-network \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\\n    --rm \\\n    apache/seatunnel \\\n    ./bin/seatunnel.sh  -l\n")),(0,t.yg)("p",null,"\u66f4\u591a\u5176\u4ed6\u547d\u4ee4\u8bf7\u53c2\u8003",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/user-command"},"\u547d\u4ee4\u884c\u5de5\u5177")),(0,t.yg)("h4",{id:"\u4f7f\u7528restapi"},"\u4f7f\u7528RestAPI"),(0,t.yg)("p",null,"\u8bf7\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/rest-api#%E6%8F%90%E4%BA%A4%E4%BD%9C%E4%B8%9A"},"\u63d0\u4ea4\u4f5c\u4e1a")))}d.isMDXComponent=!0}}]);
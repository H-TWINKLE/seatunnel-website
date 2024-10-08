"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22721],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,y=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return a?t.createElement(y,s(s({ref:n},c),{},{components:a})):t.createElement(y,s({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},63324:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const o={sidebar_position:7},s=void 0,l={unversionedId:"seatunnel-engine/checkpoint-storage",id:"version-2.3.7/seatunnel-engine/checkpoint-storage",title:"checkpoint-storage",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/seatunnel-engine/checkpoint-storage.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/checkpoint-storage",permalink:"/zh-CN/docs/2.3.7/seatunnel-engine/checkpoint-storage",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/seatunnel-engine/checkpoint-storage.md",tags:[],version:"2.3.7",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"savepoint",permalink:"/zh-CN/docs/2.3.7/seatunnel-engine/savepoint"},next:{title:"engine-jar-storage-mode",permalink:"/zh-CN/docs/2.3.7/seatunnel-engine/engine-jar-storage-mode"}},i={},p=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u68c0\u67e5\u70b9\u5b58\u50a8",id:"\u68c0\u67e5\u70b9\u5b58\u50a8-1",level:3},{value:"\u68c0\u67e5\u70b9\u5b58\u50a8\u914d\u7f6e",id:"\u68c0\u67e5\u70b9\u5b58\u50a8\u914d\u7f6e",level:3},{value:"OSS",id:"oss",level:4},{value:"S3",id:"s3",level:4},{value:"HDFS",id:"hdfs",level:4},{value:"\u672c\u5730\u6587\u4ef6",id:"\u672c\u5730\u6587\u4ef6",level:4},{value:"\u5f00\u542f\u9ad8\u901f\u7f13\u5b58",id:"\u5f00\u542f\u9ad8\u901f\u7f13\u5b58",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h1",{id:"\u68c0\u67e5\u70b9\u5b58\u50a8"},"\u68c0\u67e5\u70b9\u5b58\u50a8"),(0,r.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.yg)("p",null,"\u68c0\u67e5\u70b9\u662f\u4e00\u79cd\u5bb9\u9519\u6062\u590d\u673a\u5236\u3002\u8fd9\u79cd\u673a\u5236\u786e\u4fdd\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\uff0c\u5373\u4f7f\u7a81\u7136\u9047\u5230\u5f02\u5e38\uff0c\u4e5f\u80fd\u81ea\u884c\u6062\u590d\u3002"),(0,r.yg)("h3",{id:"\u68c0\u67e5\u70b9\u5b58\u50a8-1"},"\u68c0\u67e5\u70b9\u5b58\u50a8"),(0,r.yg)("p",null,"SeaTunnel Engine\u652f\u6301\u4ee5\u4e0b\u68c0\u67e5\u70b9\u5b58\u50a8\u7c7b\u578b:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"HDFS (OSS,S3,HDFS,LocalFile)"),(0,r.yg)("li",{parentName:"ul"},"LocalFile (\u672c\u5730)\uff0c(\u5df2\u5f03\u7528: \u4f7f\u7528HDFS(LocalFile)\u66ff\u4ee3).")),(0,r.yg)("p",null,"\u6211\u4eec\u4f7f\u7528\u5fae\u5185\u6838\u8bbe\u8ba1\u6a21\u5f0f\u5c06\u68c0\u67e5\u70b9\u5b58\u50a8\u6a21\u5757\u4ece\u5f15\u64ce\u4e2d\u5206\u79bb\u51fa\u6765\u3002\u8fd9\u5141\u8bb8\u7528\u6237\u5b9e\u73b0\u4ed6\u4eec\u81ea\u5df1\u7684\u68c0\u67e5\u70b9\u5b58\u50a8\u6a21\u5757\u3002"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"checkpoint-storage-api"),"\u662f\u68c0\u67e5\u70b9   \u5b58\u50a8\u6a21\u5757API\uff0c\u5b83\u5b9a\u4e49\u4e86\u68c0\u67e5\u70b9\u5b58\u50a8\u6a21\u5757\u7684\u63a5\u53e3\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u5b9e\u73b0\u4f60\u81ea\u5df1\u7684\u68c0\u67e5\u70b9\u5b58\u50a8\u6a21\u5757\uff0c\u4f60\u9700\u8981\u5b9e\u73b0",(0,r.yg)("inlineCode",{parentName:"p"},"CheckpointStorage"),"\u5e76\u63d0\u4f9b\u76f8\u5e94\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"CheckpointStorageFactory"),"\u5b9e\u73b0\u3002"),(0,r.yg)("h3",{id:"\u68c0\u67e5\u70b9\u5b58\u50a8\u914d\u7f6e"},"\u68c0\u67e5\u70b9\u5b58\u50a8\u914d\u7f6e"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-server"),"\u6a21\u5757\u7684\u914d\u7f6e\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml"),"\u6587\u4ef6\u4e2d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n    engine:\n        checkpoint:\n            storage:\n                type: hdfs #\u68c0\u67e5\u70b9\u5b58\u50a8\u7684\u63d2\u4ef6\u540d\u79f0\uff0c\u652f\u6301hdfs(S3, local, hdfs), \u9ed8\u8ba4\u4e3alocalfile (\u672c\u5730\u6587\u4ef6), \u4f46\u8fd9\u79cd\u65b9\u5f0f\u5df2\u5f03\u7528\n              # \u63d2\u4ef6\u914d\u7f6e\n                plugin-config: \n                  namespace: #\u68c0\u67e5\u70b9\u5b58\u50a8\u7236\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c\u4e3a/seatunnel/checkpoint/\n                  K1: V1 # \u63d2\u4ef6\u5176\u5b83\u914d\u7f6e\n                  K2: V2 # \u63d2\u4ef6\u5176\u5b83\u914d\u7f6e  \n")),(0,r.yg)("p",null,'\u6ce8\u610f: namespace\u5fc5\u987b\u4ee5"/"\u7ed3\u5c3e\u3002'),(0,r.yg)("h4",{id:"oss"},"OSS"),(0,r.yg)("p",null,"\u963f\u91cc\u4e91OSS\u662f\u57fa\u4e8ehdfs-file\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aliyun/tools/hadoop-aliyun/index.html"},"Hadoop OSS\u6587\u6863"),"\u6765\u914d\u7f6eoss."),(0,r.yg)("p",null,"OSS buckets\u4ea4\u4e92\u5916\uff0coss\u5ba2\u6237\u7aef\u9700\u8981\u4e0ebuckets\u4ea4\u4e92\u6240\u9700\u7684\u51ed\u636e\u3002\n\u5ba2\u6237\u7aef\u652f\u6301\u591a\u79cd\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\uff0c\u5e76\u4e14\u53ef\u4ee5\u914d\u7f6e\u4f7f\u7528\u54ea\u79cd\u673a\u5236\u53ca\u5176\u4f7f\u7528\u987a\u5e8f\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528of org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002\n\u5982\u679c\u60a8\u4f7f\u7528AliyunCredentialsProvider(\u53ef\u4ee5\u4ece\u963f\u91cc\u4e91\u8bbf\u95ee\u5bc6\u94a5\u7ba1\u7406\u4e2d\u83b7\u5f97)\uff0c\u5b83\u4eec\u5305\u62ec\u4e00\u4e2aaccess key\u548c\u4e00\u4e2asecret key\u3002\n\u4f60\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: oss\n          oss.bucket: your-bucket\n          fs.oss.accessKeyId: your-access-key\n          fs.oss.accessKeySecret: your-secret-key\n          fs.oss.endpoint: endpoint address\n          fs.oss.credentials.provider: org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\n")),(0,r.yg)("p",null,"\u6709\u5173Hadoop Credential Provider API\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1: ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"},"Credential Provider API"),"."),(0,r.yg)("p",null,"\u963f\u91cc\u4e91OSS\u51ed\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u5b9e\u73b0\u89c1: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aliyun/aliyun-oss-java-sdk/tree/master/src/main/java/com/aliyun/oss/common/auth"},"\u9a8c\u8bc1\u51ed\u8bc1\u63d0\u4f9b")),(0,r.yg)("h4",{id:"s3"},"S3"),(0,r.yg)("p",null,"S3\u57fa\u4e8ehdfs-file\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"Hadoop s3\u6587\u6863"),"\u6765\u914d\u7f6es3\u3002"),(0,r.yg)("p",null,"\u9664\u4e86\u4e0e\u516c\u5171S3 buckets\u4ea4\u4e92\u4e4b\u5916\uff0cS3A\u5ba2\u6237\u7aef\u9700\u8981\u4e0ebuckets\u4ea4\u4e92\u6240\u9700\u7684\u51ed\u636e\u3002\n\u5ba2\u6237\u7aef\u652f\u6301\u591a\u79cd\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236\uff0c\u5e76\u4e14\u53ef\u4ee5\u914d\u7f6e\u4f7f\u7528\u54ea\u79cd\u673a\u5236\u53ca\u5176\u4f7f\u7528\u987a\u5e8f\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528com.amazonaws.auth.AWSCredentialsProvider\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002\n\u5982\u679c\u60a8\u4f7f\u7528SimpleAWSCredentialsProvider(\u53ef\u4ee5\u4eceAmazon Security Token\u670d\u52a1\u4e2d\u83b7\u5f97)\uff0c\u5b83\u4eec\u5305\u62ec\u4e00\u4e2aaccess key\u548c\u4e00\u4e2asecret key\u3002\n\u60a8\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n    engine:\n        checkpoint:\n            interval: 6000\n            timeout: 7000\n            storage:\n                type: hdfs\n                max-retained: 3\n                plugin-config:\n                    storage.type: s3\n                    s3.bucket: your-bucket\n                    fs.s3a.access.key: your-access-key\n                    fs.s3a.secret.key: your-secret-key\n                    fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n                    \n\n")),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"InstanceProfileCredentialsProvider"),"\uff0c\u5b83\u652f\u6301\u5728EC2 VM\u4e2d\u8fd0\u884c\u65f6\u4f7f\u7528\u5b9e\u4f8b\u914d\u7f6e\u6587\u4ef6\u51ed\u636e\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html"},"iam-roles-for-amazon-ec2"),".\n\u60a8\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: s3\n          s3.bucket: your-bucket\n          fs.s3a.endpoint: your-endpoint\n          fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.InstanceProfileCredentialsProvider\n")),(0,r.yg)("p",null,"\u6709\u5173Hadoop Credential Provider API\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1: ",(0,r.yg)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"},"Credential Provider API"),"."),(0,r.yg)("h4",{id:"hdfs"},"HDFS"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528HDFS\uff0c\u60a8\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: hdfs://localhost:9000\n          // \u5982\u679c\u60a8\u4f7f\u7528kerberos\uff0c\u60a8\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:\n          kerberosPrincipal: your-kerberos-principal\n          kerberosKeytabFilePath: your-kerberos-keytab\n")),(0,r.yg)("p",null,"\u5982\u679cHDFS\u662fHA\u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6e:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: hdfs://usdp-bing\n          seatunnel.hadoop.dfs.nameservices: usdp-bing\n          seatunnel.hadoop.dfs.ha.namenodes.usdp-bing: nn1,nn2\n          seatunnel.hadoop.dfs.namenode.rpc-address.usdp-bing.nn1: usdp-bing-nn1:8020\n          seatunnel.hadoop.dfs.namenode.rpc-address.usdp-bing.nn2: usdp-bing-nn2:8020\n          seatunnel.hadoop.dfs.client.failover.proxy.provider.usdp-bing: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\n")),(0,r.yg)("p",null,"\u5982\u679cHDFS\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs-site.xml"),"\u6216",(0,r.yg)("inlineCode",{parentName:"p"},"core-site.xml"),"\u4e2d\u6709\u5176\u4ed6\u914d\u7f6e\uff0c\u53ea\u9700\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel.hadoop."),"\u524d\u7f00\u8bbe\u7f6eHDFS\u914d\u7f6e\u5373\u53ef\u3002"),(0,r.yg)("h4",{id:"\u672c\u5730\u6587\u4ef6"},"\u672c\u5730\u6587\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: file:/// # \u8bf7\u786e\u4fdd\u8be5\u76ee\u5f55\u5177\u6709\u5199\u6743\u9650\n\n")),(0,r.yg)("h3",{id:"\u5f00\u542f\u9ad8\u901f\u7f13\u5b58"},"\u5f00\u542f\u9ad8\u901f\u7f13\u5b58"),(0,r.yg)("p",null,"\u5f53storage:type\u4e3ahdfs\u65f6\uff0c\u9ed8\u8ba4\u5173\u95edcache\u3002\u5982\u679c\u60a8\u60f3\u542f\u7528\u5b83\uff0c\u8bf7\u8bbe\u7f6e\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"disable.cache: false"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          disable.cache: false\n          fs.defaultFS: hdfs:/// # Ensure that the directory has written permission\n")),(0,r.yg)("p",null,"or"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          disable.cache: false\n          fs.defaultFS: file:/// \n")))}u.isMDXComponent=!0}}]);
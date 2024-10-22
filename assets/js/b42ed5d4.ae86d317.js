"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92127],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>c});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=l,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?t.createElement(c,o(o({ref:n},g),{},{components:a})):t.createElement(c,o({ref:n},g))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15069:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(58168),l=(a(96540),a(15680));const r={},o="Paimon",i={unversionedId:"connector-v2/sink/Paimon",id:"connector-v2/sink/Paimon",title:"Paimon",description:"Paimon sink connector",source:"@site/docs/connector-v2/sink/Paimon.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Paimon",permalink:"/docs/connector-v2/sink/Paimon",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink/Paimon.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssJindoFile",permalink:"/docs/connector-v2/sink/OssJindoFile"},next:{title:"Phoenix",permalink:"/docs/connector-v2/sink/Phoenix"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Examples",id:"examples",level:2},{value:"Single table",id:"single-table",level:3},{value:"Single table(Specify hadoop HA config and kerberos config)",id:"single-tablespecify-hadoop-ha-config-and-kerberos-config",level:3},{value:"Single table(Hive catalog)",id:"single-tablehive-catalog",level:3},{value:"Single table with write props of paimon",id:"single-table-with-write-props-of-paimon",level:3},{value:"Write with the <code>changelog-producer</code> attribute",id:"write-with-the-changelog-producer-attribute",level:4},{value:"Write to dynamic bucket table",id:"write-to-dynamic-bucket-table",level:3},{value:"core options",id:"core-options",level:4},{value:"Multiple table",id:"multiple-table",level:3},{value:"example1",id:"example1",level:4},{value:"example2",id:"example2",level:4}],g={toc:s},d="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"paimon"},"Paimon"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Paimon sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Sink connector for Apache Paimon. It can support cdc mode \u3001auto create table."),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Dependent"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,l.yg)("td",{parentName:"tr",align:null},"hive-exec"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.hive/hive-exec"},"Download"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Paimon"),(0,l.yg)("td",{parentName:"tr",align:null},"libfb303"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.thrift/libfb303"},"Download"))))),(0,l.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"In order to be compatible with different versions of Hadoop and Hive, the scope of hive-exec in the project pom file are provided, so if you use the Flink engine, first you may need to add the following Jar packages to <FLINK_HOME>/lib directory, if you are using the Spark engine and integrated with Hadoop, then you do not need to add the following Jar packages.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"hive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Some versions of the hive-exec package do not have libfb303-xxx.jar, so you also need to manually import the Jar package.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support multiple table write"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"warehouse"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Paimon warehouse path")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_type"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"filesystem"),(0,l.yg)("td",{parentName:"tr",align:null},"Catalog type of Paimon, support filesystem and hive")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"catalog_uri"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Catalog uri of Paimon, only needed when catalog_type is hive")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The database you want to access")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The table you want to access")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hdfs_site_path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The path of hdfs-site.xml")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"The schema save mode")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"The data save mode")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.primary-keys"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Default comma-separated list of columns (primary key) that identify a row in tables.(Notice: The partition field needs to be included in the primary key fields)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.partition-keys"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Default comma-separated list of partition fields to use when creating tables.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.table.write-props"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Properties passed through to paimon table initialization, ",(0,l.yg)("a",{parentName:"td",href:"https://paimon.apache.org/docs/master/maintenance/configurations/#coreoptions"},"reference"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Properties in hadoop conf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"paimon.hadoop.conf-path"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The specified loading path for the 'core-site.xml', 'hdfs-site.xml', 'hive-site.xml' files")))),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("p",null,"You must configure the ",(0,l.yg)("inlineCode",{parentName:"p"},"changelog-producer=input")," option to enable the changelog producer mode of the paimon table. If you use the auto-create table function of paimon sink, you can configure this property in ",(0,l.yg)("inlineCode",{parentName:"p"},"paimon.table.write-props"),"."),(0,l.yg)("p",null,"The changelog producer mode of the paimon table has ",(0,l.yg)("a",{parentName:"p",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/"},"four mode")," which is ",(0,l.yg)("inlineCode",{parentName:"p"},"none"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"input"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"lookup")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"full-compaction"),"."),(0,l.yg)("p",null,"All ",(0,l.yg)("inlineCode",{parentName:"p"},"changelog-producer")," modes are currently supported. The default is ",(0,l.yg)("inlineCode",{parentName:"p"},"none"),"."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#none"},(0,l.yg)("inlineCode",{parentName:"a"},"none"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#input"},(0,l.yg)("inlineCode",{parentName:"a"},"input"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#lookup"},(0,l.yg)("inlineCode",{parentName:"a"},"lookup"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/#full-compaction"},(0,l.yg)("inlineCode",{parentName:"a"},"full-compaction")),(0,l.yg)("blockquote",{parentName:"li"},(0,l.yg)("p",{parentName:"blockquote"},"note\uff1a\nWhen you use a streaming mode to read paimon table\uff0cdifferent mode will produce ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/Paimon.md#changelog"},"different results"),"\u3002")))),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("h3",{id:"single-table"},"Single table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n  }\n}\n')),(0,l.yg)("h3",{id:"single-tablespecify-hadoop-ha-config-and-kerberos-config"},"Single table(Specify hadoop HA config and kerberos config)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="hdfs:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n      security.kerberos.login.principal = "your-kerberos-principal"\n      security.kerberos.login.keytab = "your-kerberos-keytab-path"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"single-tablehive-catalog"},"Single table(Hive catalog)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n      }\n      primaryKey {\n        name = "pk_id"\n        columnNames = [pk_id]\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100]\n      }\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100]\n      }\n    ]\n  }\n}\n\nsink {\n  Paimon {\n    schema_save_mode = "RECREATE_SCHEMA"\n    catalog_name="seatunnel_test"\n    catalog_type="hive"\n    catalog_uri="thrift://hadoop04:9083"\n    warehouse="hdfs:///tmp/seatunnel"\n    database="seatunnel_test"\n    table="st_test3"\n    paimon.hadoop.conf = {\n      fs.defaultFS = "hdfs://nameservice1"\n      dfs.nameservices = "nameservice1"\n      dfs.ha.namenodes.nameservice1 = "nn1,nn2"\n      dfs.namenode.rpc-address.nameservice1.nn1 = "hadoop03:8020"\n      dfs.namenode.rpc-address.nameservice1.nn2 = "hadoop04:8020"\n      dfs.client.failover.proxy.provider.nameservice1 = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n      dfs.client.use.datanode.hostname = "true"\n    }\n  }\n}\n\n')),(0,l.yg)("h3",{id:"single-table-with-write-props-of-paimon"},"Single table with write props of paimon"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = 2\n        file.format = "parquet"\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,l.yg)("h4",{id:"write-with-the-changelog-producer-attribute"},"Write with the ",(0,l.yg)("inlineCode",{parentName:"h4"},"changelog-producer")," attribute"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n parallelism = 1\n job.mode = "STREAMING"\n checkpoint.interval = 5000\n}\n\nsource {\n Mysql-CDC {\n  base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n  username = "root"\n  password = "******"\n  table-names = ["seatunnel.role"]\n }\n}\n\nsink {\n Paimon {\n  catalog_name = "seatunnel_test"\n  warehouse = "file:///tmp/seatunnel/paimon/hadoop-sink/"\n  database = "seatunnel"\n  table = "role"\n  paimon.table.write-props = {\n   changelog-producer = full-compaction\n   changelog-tmp-path = /tmp/paimon/changelog\n  }\n }\n}\n')),(0,l.yg)("h3",{id:"write-to-dynamic-bucket-table"},"Write to dynamic bucket table"),(0,l.yg)("p",null,"Single dynamic bucket table with write props of paimon\uff0coperates on the primary key table and bucket is -1."),(0,l.yg)("h4",{id:"core-options"},"core options"),(0,l.yg)("p",null,"Please ",(0,l.yg)("a",{parentName:"p",href:"https://paimon.apache.org/docs/master/primary-key-table/data-distribution/#dynamic-bucket"},"reference")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default values"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dynamic-bucket.target-row-num"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"2000000L"),(0,l.yg)("td",{parentName:"tr",align:null},"controls the target row number for one bucket.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dynamic-bucket.initial-buckets"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"controls the number of initialized bucket.")))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    table-names = ["seatunnel.role"]\n  }\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="seatunnel"\n    table="role"\n    paimon.table.write-props = {\n        bucket = -1\n        dynamic-bucket.target-row-num = 50000\n    }\n    paimon.table.partition-keys = "dt"\n    paimon.table.primary-keys = "pk_id,dt"\n  }\n}\n')),(0,l.yg)("h3",{id:"multiple-table"},"Multiple table"),(0,l.yg)("h4",{id:"example1"},"example1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${database_name}_test"\n    table="${table_name}_test"\n  }\n}\n')),(0,l.yg)("h4",{id:"example2"},"example2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Paimon {\n    catalog_name="seatunnel_test"\n    warehouse="file:///tmp/seatunnel/paimon/hadoop-sink/"\n    database="${schema_name}_test"\n    table="${table_name}_test"\n  }\n}\n')))}m.isMDXComponent=!0}}]);
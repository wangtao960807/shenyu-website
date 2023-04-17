"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[38376],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=o(t),d=r,m=g["".concat(i,".").concat(d)]||g[d]||p[d]||s;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[g]="string"==typeof e?e:r,l[1]=c;for(var o=2;o<s;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13023:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const s={title:"Consul\u793a\u4f8b"},l=void 0,c={unversionedId:"consul",id:"consul",isDocsHomePage:!1,title:"Consul\u793a\u4f8b",description:"\u4ee5Consul\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientGolang/current/consul.md",sourceDirName:".",slug:"/consul",permalink:"/zh/shenyuClientGolang/next/consul",version:"current",lastUpdatedBy:"Bird",lastUpdatedAt:1681696378,formattedLastUpdatedAt:"2023/4/17",frontMatter:{title:"Consul\u793a\u4f8b"},sidebar:"community",next:{title:"Etcd\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/next/etcd"}},i=[{value:"\u4ee5Consul\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",id:"\u4ee5consul\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173",children:[]},{value:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",children:[]}],o={toc:i},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ee5consul\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173"},"\u4ee5Consul\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.\u9996\u5148\u786e\u4fdd\u4f60\u7684Consul\u73af\u5883\u662f\u6b63\u786e\uff0c\u7136\u540e\u8bbe\u7f6e\u8fd9\u4e9bConsul\u5fc5\u8981\u7684\u53c2\u6570.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    //Create ShenYuConsulClient  start\n    ccp := &consul_client.ConsulClientParam{\n        Host:  "127.0.0.1",  //\u7528\u6237\u9009\u62e9\u6027\u63d0\u4f9b\n        Port:  8500,         //\u7528\u6237\u9009\u62e9\u6027\u63d0\u4f9b\n        Token: "",\n        }\n    \n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.CONSUL_CLIENT)\n    client, createResult, err := sdkClient.NewClient(ccp)\n    \n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuConsulClient error : %v", err)\n    }\n    \n    scc := client.(*consul_client.ShenYuConsulClient)\n    //Create ShenYuConsulClient end\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u51c6\u5907\u4f60\u8981\u6ce8\u518c\u670d\u52a1\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'//metaData is necessary param, this will be register to shenyu gateway to use\n    uuid1, _ := uuid.GenerateUUID()\n    uuid2, _ := uuid.GenerateUUID()\n    uuid3, _ := uuid.GenerateUUID()\n\n    //RegisterServiceInstance start\n    //init MetaDataRegister\n    metaData1 := &model.MetaDataRegister{\n        ServiceId: uuid1,\n        AppName:   "testMetaDataRegister1", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:      "/your/path1",           //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled:   true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:      "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:      "8080",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        RPCType:   "http",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n    \n    metaData2 := &model.MetaDataRegister{\n        ServiceId: uuid2,\n        AppName:   "testMetaDataRegister2", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:      "/your/path2",           //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled:   true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:      "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:      "8181",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        RPCType:   "http",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n    \n    metaData3 := &model.MetaDataRegister{\n        ServiceId: uuid3,\n        AppName:   "testMetaDataRegister3", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:      "/your/path3",           //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled:   true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:      "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:      "8282",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        RPCType:   "http",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u8282\u70b9\u4fe1\u606f\u6ce8\u518c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'   //register multiple metaData\n    registerResult1, err := scc.RegisterServiceInstance(metaData1)\n    if !registerResult1 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n    \n    registerResult2, err := scc.RegisterServiceInstance(metaData2)\n    if !registerResult2 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n    \n    registerResult3, err := scc.RegisterServiceInstance(metaData3)\n    if !registerResult3 && err != nil {\n    logger.Fatal("Register consul Instance error : %v", err)\n    }\n//RegisterServiceInstance end\n    //do your logic\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u6ce8\u518c\u8282\u70b9\u4fe1\u606f\u5220\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    //your can chose to invoke,not require\n    //DeregisterServiceInstance start\n    logger.Info("> DeregisterServiceInstance start")\n    deRegisterResult1, err := scc.DeregisterServiceInstance(metaData1)\n    if err != nil {\n    panic(err)\n    }\n    \n    deRegisterResult2, err := scc.DeregisterServiceInstance(metaData2)\n    if err != nil {\n    panic(err)\n    }\n    \n    deRegisterResult3, err := scc.DeregisterServiceInstance(metaData3)\n    if err != nil {\n    panic(err)\n    }\n    \n    if deRegisterResult1 && deRegisterResult2 && deRegisterResult3 {\n    logger.Info("DeregisterServiceInstance success !")\n    }\n    //DeregisterServiceInstance end\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.\u4f7f\u7528\u5ba2\u6237\u7aef\u83b7\u53d6\u6ce8\u518c\u8282\u70b9\u7684\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    //GetServiceInstanceInfo start\n    instanceDetail, err := scc.GetServiceInstanceInfo(metaData1)\n    nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n    }\n    \n    //range nodes\n    for index, node := range nodes1 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n    \n    instanceDetail2, err := scc.GetServiceInstanceInfo(metaData2)\n    nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n        if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n    }\n    \n    //range nodes2\n    for index, node := range nodes2 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n\n    //range nodes3\n    instanceDetail3, err := scc.GetServiceInstanceInfo(metaData3)\n    nodes3, ok := instanceDetail3.([]*model.MetaDataRegister)\n    if !ok {\n        logger.Fatal("get consul client metaData error %v:", err)\n        }\n    \n    for index, node := range nodes3 {\n    nodeJson, err := json.Marshal(node)\n    if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n    }\n//GetServiceInstanceInfo end\n\n')),(0,r.kt)("h2",{id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"},"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:77] Create default consul client success!\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:43 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:160] RegisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister1 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8080 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister1}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:115] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister1"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister2 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8181 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister2}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:129] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister2"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:121] GetServiceInstanceInfo,instance:&{AppName:testMetaDataRegister3 Path: ContextPath: RuleName: RPCType: Enabled:false Host:172.22.0.5 Port:8282 PluginNames:[] RegisterMetaData:false TimeMillis:0 ServiceId:testMetaDataRegister3}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:143] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister3","path":"","contextPath":"","ruleName":"","rpcType":"","enabled":false,"host":"172.22.0.5","port":"8282","pluginNames":null,"registerMetaData":false,"timeMillis":0,"serviceId":"testMetaDataRegister3"}\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:150] > DeregisterServiceInstance start\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/clients/consul_client/consul_client.go:100] DeregisterServiceInstance,result:true\n2022-07-26 18:05:44 [INFO] [github.com/apache/shenyu-client-golang/example/consul_client/consul_client.go:167] DeregisterServiceInstance success !\n\n')))}g.isMDXComponent=!0}}]);
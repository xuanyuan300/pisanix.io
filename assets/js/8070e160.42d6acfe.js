"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[651],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2257:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],i={sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},p="\u5feb\u901f\u5f00\u59cb",s={unversionedId:"quickstart",id:"quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\u4e00\u3001\u5b89\u88c5\u6559\u7a0b",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/intro"},next:{title:"SQL \u611f\u77e5\u7684\u6d41\u91cf\u6cbb\u7406",permalink:"/docs/Features/sql-aware-traffic-governance"}},u={},d=[{value:"\u4e00\u3001\u5b89\u88c5\u6559\u7a0b",id:"\u4e00\u5b89\u88c5\u6559\u7a0b",level:2},{value:"1.1 Pisa-Controller admission webhooks \u8bc1\u4e66\u914d\u7f6e",id:"11-pisa-controller-admission-webhooks-\u8bc1\u4e66\u914d\u7f6e",level:3},{value:"1.2 \u914d\u7f6e MutatingWebhookConfiguration",id:"12-\u914d\u7f6e-mutatingwebhookconfiguration",level:3},{value:"1.3 \u5b89\u88c5 Pisa-Controller",id:"13-\u5b89\u88c5-pisa-controller",level:3},{value:"1.3.1 \u90e8\u7f72rbac",id:"131-\u90e8\u7f72rbac",level:4},{value:"1.3.2 \u90e8\u7f72Service",id:"132-\u90e8\u7f72service",level:4},{value:"1.3.3 \u90e8\u7f72Pisa-Controller",id:"133-\u90e8\u7f72pisa-controller",level:4},{value:"1.4 \u4f7f\u7528\u8303\u4f8b",id:"14-\u4f7f\u7528\u8303\u4f8b",level:3},{value:"1.4.1 \u90e8\u7f72\u4f8b\u5b50",id:"141-\u90e8\u7f72\u4f8b\u5b50",level:4},{value:"\u4e8c\u3001\u914d\u7f6e\u6559\u7a0b",id:"\u4e8c\u914d\u7f6e\u6559\u7a0b",level:2},{value:"2.1 \u547d\u4ee4\u884c\u53c2\u6570",id:"21-\u547d\u4ee4\u884c\u53c2\u6570",level:3},{value:"2.2 \u73af\u5883\u53d8\u91cf",id:"22-\u73af\u5883\u53d8\u91cf",level:3},{value:"2.3 \u914d\u7f6e\u6587\u4ef6",id:"23-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"2.4 \u914d\u7f6e\u793a\u4f8b",id:"24-\u914d\u7f6e\u793a\u4f8b",level:3},{value:"2.4.1 \u914d\u7f6e\u591a\u4e2a\u4ee3\u7406",id:"241-\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406",level:5},{value:"2.4.2 \u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861",id:"242-\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861",level:4}],c={toc:d};function m(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h2",{id:"\u4e00\u5b89\u88c5\u6559\u7a0b"},"\u4e00\u3001\u5b89\u88c5\u6559\u7a0b"),(0,a.kt)("h3",{id:"11-pisa-controller-admission-webhooks-\u8bc1\u4e66\u914d\u7f6e"},"1.1 Pisa-Controller admission webhooks \u8bc1\u4e66\u914d\u7f6e"),(0,a.kt)("p",null,"Pisa-Controller admission webhooks \u548c kube-apiserver \u901a\u4fe1\u9700\u8981\u4f7f\u7528 https \u534f\u8bae,\u6211\u4eec\u9700\u8981\u5bf9\u6211\u4eec\u7684 https \u670d\u52a1\u8fdb\u884c\u8bc1\u4e66\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6267\u884cwebhook-create-signed-cert.sh \uff0c\u811a\u672c\u4e2d\u4f1a\u751f\u6210\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u7684csr \uff0c\u4ececsr\u4e2d\u83b7\u53d6token\u4f5c\u4e3aapiserver-server \u7684\u4ea4\u4e92\u8bc1\u4e66\u3002"),(0,a.kt)("p",null,"\u811a\u672c\u4f1a\u5b89\u88c5\u4e0b\u5217\u8d44\u6e90\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"csr  ${servicename}.${namespace}"),(0,a.kt)("li",{parentName:"ul"},"secret ${secretname}")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./tool/cert/webhook-create-signed-cert.sh\n")),(0,a.kt)("h3",{id:"12-\u914d\u7f6e-mutatingwebhookconfiguration"},"1.2 \u914d\u7f6e MutatingWebhookConfiguration"),(0,a.kt)("p",null,"\u4f7f\u7528 kubectl \u4e2d\u7684ca\u8bc1\u4e66\u66ff\u6362 mutatingwebhook.yaml \u4e2d\u7684 caBundle \u5b57\u6bb5,"),(0,a.kt)("p",null,"\u6b64\u6b65\u9aa4\u5c06\u5b89\u88c5\u4e0b\u5217\u8d44\u6e90\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MutatingWebhookConfiguration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat deploy/mutatingwebhook.yaml.tpl  | ./tool/cert/webhook-patch-ca-bundle.sh > ./deploy/mutatingwebhook.yaml\n\nkubectl apply -n ${namespace} -f ./deploy/mutatingwebhook.yaml\n")),(0,a.kt)("h3",{id:"13-\u5b89\u88c5-pisa-controller"},"1.3 \u5b89\u88c5 Pisa-Controller"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8ff0\u6587\u4ef6\u90fd\u5728deploy\u8def\u5f84\u4e0b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd deploy"))),(0,a.kt)("p",null,"\u5728\u4e0a\u6587\u4e2d\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u5728kuebrnetes \u96c6\u7fa4\u4e2d\u5bf9\u4e8e Pisa-Controller admission webhooks \u7684\u76f8\u5173\u5b9a\u4e49\u914d\u7f6e\uff0c\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72 Pisa-Controller  \u670d\u52a1"),(0,a.kt)("h4",{id:"131-\u90e8\u7f72rbac"},"1.3.1 \u90e8\u7f72rbac"),(0,a.kt)("p",null,"Pisa-Controller \u9700\u8981\u5bf9pod \u8fdb\u884c\u6ce8\u5165\uff0c\u6240\u4ee5\u9700\u8981\u7533\u8bf7\u5bf9\u4e8epod\u8d44\u6e90\u7684\u76f8\u5173\u6743\u9650\u3002Pisa-Controller \u540c\u65f6\u9700\u8981\u5bf9 networking.pisanix.io \u8fd9\u4e2aCRD\u8fdb\u884c\u64cd\u4f5c\uff0c\u7528\u6765\u4e0b\u53d1 Pisa-Proxy \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"yaml \u4e2d\u5c06\u90e8\u7f72\u4e0b\u5217\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ServiceAccount"),(0,a.kt)("li",{parentName:"ul"},"ClusterRole"),(0,a.kt)("li",{parentName:"ul"},"ClusterRoleBinding")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f rbac.yaml\n")),(0,a.kt)("h4",{id:"132-\u90e8\u7f72service"},"1.3.2 \u90e8\u7f72Service"),(0,a.kt)("p",null,"   Service \u662f Pisa-Controller admission webhooks  \u5bf9\u5916\u66b4\u9732\u670d\u52a1\u7684\u65b9\u5f0f\uff0cPisa-Controller \u5c06\u66b4\u9732\u4e09\u4e2a\u7aef\u53e3:80,6443,8080"),(0,a.kt)("p",null,"   80  \u7aef\u53e3\u81ea\u8eab\u5065\u5eb7\u68c0\u67e5\u7aef\u53e3"),(0,a.kt)("p",null,"   6443 \u7aef\u53e3 Pisa-Controller admission webhooks  \u4e0e kube-apiserver \u901a\u4fe1\u7aef\u53e3"),(0,a.kt)("p",null,"   8080 \u7aef\u53e3 Pisa-Controller \u4e0e Pisa-Proxy \u901a\u4fe1\u7aef\u53e3"),(0,a.kt)("p",null,"   yaml \u4e2d\u5c06\u90e8\u7f72\u4e0b\u5217\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f service.yaml\n")),(0,a.kt)("h4",{id:"133-\u90e8\u7f72pisa-controller"},"1.3.3 \u90e8\u7f72Pisa-Controller"),(0,a.kt)("p",null,"Pisa-Controller \u4f7f\u7528 Deployment \u5f62\u5f0f\u8fdb\u884c\u90e8\u7f72\uff0c\u5e76\u4e14\u4ee5 Service \u65b9\u5f0f\u8fdb\u884c\u66b4\u9732\u3002"),(0,a.kt)("p",null,"yaml \u4e2d\u5c06\u90e8\u7f72\u4e0b\u5217\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f deployment.yaml\n")),(0,a.kt)("h3",{id:"14-\u4f7f\u7528\u8303\u4f8b"},"1.4 \u4f7f\u7528\u8303\u4f8b"),(0,a.kt)("p",null,"Pisa-Controller admission webhooks \u901a\u8fc7\u6761\u4ef6\u9650\u5b9a\u8fdb\u884c sidecar \u6ce8\u5165"),(0,a.kt)("p",null,"\u6ce8\u5165\u6761\u4ef6\u4e3a\uff0clabel \u5bf9\u8c61\u4e2d\u5305\u542b  (label \u5c06\u4f1a\u5f71\u54cd namespace\uff0cdeployment \u4e2d pod template \u5b57\u6bb5\u4e2d\u7684 label \u5b57\u6bb5)"),(0,a.kt)("p",null,"label \u4e3a\u5982\u4e0b\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pisanix.io/inject: enabled\n")),(0,a.kt)("p",null,"\u73b0\u9636\u6bb5\u6761\u4ef6\u4e3a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"namespace"),(0,a.kt)("th",{parentName:"tr",align:null},"pod"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6ce8\u5165"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"labeled"),(0,a.kt)("td",{parentName:"tr",align:null},"labeled"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"labeled"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"labeled"),(0,a.kt)("td",{parentName:"tr",align:null},"no")))),(0,a.kt)("h4",{id:"141-\u90e8\u7f72\u4f8b\u5b50"},"1.4.1 \u90e8\u7f72\u4f8b\u5b50"),(0,a.kt)("p",null,"\u4e0b\u5217\u8d44\u6e90\u5bf9\u8c61\u5c06\u521b\u5efa\u5982\u4e0b\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"namespace injecttest"),(0,a.kt)("li",{parentName:"ul"},"deployment nginx-deployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f sample.yaml\n")),(0,a.kt)("p",null,"\u671f\u671b\u7ed3\u679c\u4e3a pod \u4e2d\u5305\u542b Pisa-Proxy  sidecar \u955c\u50cf"),(0,a.kt)("h2",{id:"\u4e8c\u914d\u7f6e\u6559\u7a0b"},"\u4e8c\u3001\u914d\u7f6e\u6559\u7a0b"),(0,a.kt)("p",null,"Pisa-Proxy \u652f\u6301\u4ece\u914d\u7f6e\u6587\u4ef6\u548c remote API \u83b7\u53d6\u914d\u7f6e\u3002Pisa-Proxy \u9ed8\u8ba4\u4ece remote API \u83b7\u53d6\u914d\u7f6e\uff0c\u82e5\u9700\u8981\u4ece\u672c\u5730\u6587\u4ef6\u52a0\u8f7d\u914d\u7f6e\u9700\u8981\u5bfc\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_CONFIG=true")," \u73af\u5883\u53d8\u91cf\uff0c\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"-c\uff0c--config")," \u53c2\u6570\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002\u82e5\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"./etc/config.toml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u52a0\u8f7d\u3002pisa-proxy \u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u670d\u52a1\u542f\u52a8\u914d\u7f6e\u3002\u914d\u7f6e\u8be6\u89e3\u5982\u4e0b\uff1a"),(0,a.kt)("h3",{id:"21-\u547d\u4ee4\u884c\u53c2\u6570"},"2.1 \u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./pisa-proxy -h\nPisa-Proxy \n\nUSAGE:\n    pisa-proxy [OPTIONS]\n\nOPTIONS:\n    -c, --config <config>         Config path               # \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n    -h, --help                    Print help information    # \u67e5\u770b\u4f7f\u7528\u5e2e\u52a9\n        --log-level <loglevel>    Log level                 # \u6307\u5b9a\u65e5\u5fd7\u7ea7\u522b\n    -p, --port <port>             Http port                 # \u6307\u5b9a api \u7aef\u53e3\u53f7\n")),(0,a.kt)("h3",{id:"22-\u73af\u5883\u53d8\u91cf"},"2.2 \u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u5305\u62ec\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PORT: api \u542f\u52a8\u7aef\u53e3\u53f7"),(0,a.kt)("li",{parentName:"ol"},"CONFIG: \u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u540c\u547d\u4ee4\u884c\u53c2\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"-c, --config"),"\u53c2\u6570"),(0,a.kt)("li",{parentName:"ol"},"LOGLEVEL: \u65e5\u5fd7\u7ea7\u522b"),(0,a.kt)("li",{parentName:"ol"},"LOCAL_CONFIG: \u6307\u5b9a Pisa-Proxy \u4ece\u672c\u5730\u52a0\u8f7d\u914d\u7f6e")),(0,a.kt)("h3",{id:"23-\u914d\u7f6e\u6587\u4ef6"},"2.3 \u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# api \u914d\u7f6e\u5757\uff0c\u5bf9\u5e94\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\n[admin]\n# api \u7aef\u53e3\nport = "8081"\n# \u65e5\u5fd7\u7ea7\u522b\nlog_level = "INFO"\n\n# pisa-proxy \u4ee3\u7406\u914d\u7f6e\u5757\n[proxy]\n# config a proxy\n[[proxy.configs]]\n# proxy \u4ee3\u7406\u5730\u5740\nlisten_addr = "0.0.0.0:9088"\n# proxy \u8ba4\u8bc1\u7528\u6237\u540d\nusername = "root"\n# proxy \u8ba4\u8bc1\u5bc6\u7801\npassword = "12345678"\n# proxy schema\ndb = "test"\n# \u914d\u7f6e\u540e\u7aef\u6570\u636e\u6e90\u7c7b\u578b\nbackend_type = "mysql"\n# proxy \u4e0e\u540e\u7aef\u6570\u636e\u5e93\u5efa\u8fde\u8fde\u63a5\u6c60\u5927\u5c0f\uff0c\u503c\u8303\u56f4\uff1a1 ~ 255, \u9ed8\u8ba4\u503c\uff1a64\npool_size = 3\n\n# \u540e\u7aef\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\n[proxy.configs.simple_loadbalancer]\n# \u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff1a[random/roundrobin], \u9ed8\u8ba4\u503c: random \u7b97\u6cd5\nbalancer_type = "random"\n# \u9009\u62e9\u6302\u8f7d\u540e\u7aef\u8282\u70b9\nnodes = ["ds001"]\n\n# \u540e\u7aef\u6570\u636e\u6e90\u914d\u7f6e\n[mysql]\n[[mysql.nodes]]\n# \u6570\u636e\u6e90 name\nname = "ds001"\n# database name\ndb = "kubestar_test"\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "root"\n# \u6570\u636e\u5e93\u5730\u5740\naddr = "127.0.0.1:3307"\n# \u8d1f\u8f7d\u5747\u8861\u8282\u70b9\u6743\u91cd\nweight = 1\n')),(0,a.kt)("h3",{id:"24-\u914d\u7f6e\u793a\u4f8b"},"2.4 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("h5",{id:"241-\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406"},"2.4.1 \u914d\u7f6e\u591a\u4e2a\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[admin]\nport = "8081"\nlog_level = "INFO"\n\n[proxy]\n[[proxy.configs]]\nlisten_addr = "0.0.0.0:9088"\nusername = "root"\npassword = "12345678"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.configs.simple_loadbalancer]\nbalancer_type = "random"\nnodes = ["ds001"]\n\n[proxy]\n[[proxy.configs]]\nlisten_addr = "0.0.0.0:9089"\nusername = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.configs.simple_loadbalancer]\nbalancer_type = "random"\nnodes = ["ds001"]\n\n[mysql]\n[[mysql.nodes]]\nname = "ds001"\ndb = "kubestar_test"\nuser = "root"\npassword = "root"\naddr = "127.0.0.1:3307"\nweight = 1\n')),(0,a.kt)("h4",{id:"242-\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861"},"2.4.2 \u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[proxy]\n[[proxy.configs]]\nlisten_addr = "0.0.0.0:9089"\nusername = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.configs.simple_loadbalancer]\nbalancer_type = "random"\nnodes = ["ds001", "ds002"]\n\n[mysql]\n[[mysql.nodes]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\naddr = "127.0.0.1:3307"\nweight = 1\n\n[[mysql.nodes]]\nname = "ds002"\ndb = "test"\nuser = "root"\npassword = "root"\naddr = "127.0.0.1:3308"\nweight = 2\n')))}m.isMDXComponent=!0}}]);
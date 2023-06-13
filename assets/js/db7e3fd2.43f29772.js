"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6687],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const o={sidebar_position:1.1,description:"Learn how to use the status light on DeviceScript to message application states. Control the status LED until a system LED pattern is scheduled by the runtime."},i="Status Light",s={unversionedId:"developer/status-light",id:"developer/status-light",title:"Status Light",description:"Learn how to use the status light on DeviceScript to message application states. Control the status LED until a system LED pattern is scheduled by the runtime.",source:"@site/docs/developer/status-light.mdx",sourceDirName:"developer",slug:"/developer/status-light",permalink:"/devicescript/developer/status-light",draft:!1,tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1,description:"Learn how to use the status light on DeviceScript to message application states. Control the status LED until a system LED pattern is scheduled by the runtime."},sidebar:"tutorialSidebar",previous:{title:"Console output",permalink:"/devicescript/developer/console"},next:{title:"Clients",permalink:"/devicescript/developer/clients"}},l={},c=[{value:"Network connectivity",id:"network-connectivity",level:2},{value:"Gateway messages",id:"gateway-messages",level:2},{value:"Errors",id:"errors",level:2},{value:"Controlling the status led",id:"controlling-the-status-led",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"status-light"},"Status Light"),(0,a.kt)("p",null,"DeviceScript uses various blinking patterns on the status LED to message application states."),(0,a.kt)("h2",{id:"network-connectivity"},"Network connectivity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"connecting to network: slow yellow glow"),(0,a.kt)("li",{parentName:"ul"},"connecting to gateway: fast yellow glow"),(0,a.kt)("li",{parentName:"ul"},"connected to gateway: very slow blue glow"),(0,a.kt)("li",{parentName:"ul"},"not connected to cloud: very slow red")),(0,a.kt)("h2",{id:"gateway-messages"},"Gateway messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"message uploaded: purple short blink"),(0,a.kt)("li",{parentName:"ul"},"message failed to upload: red short blink")),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jacdac line error: yellow blink"),(0,a.kt)("li",{parentName:"ul"},"packet overflow: magenta blink"),(0,a.kt)("li",{parentName:"ul"},"generic error: short red blink")),(0,a.kt)("p",null,"The blinking patterns are defined at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/jacdac-c/blob/main/inc/jd_io.h#L77"},"https://github.com/microsoft/jacdac-c/blob/main/inc/jd_io.h#L77")),(0,a.kt)("h2",{id:"controlling-the-status-led"},"Controlling the status led"),(0,a.kt)("p",null,"You can also set the status LED (until a system LED pattern is scheduled by the runtime)\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"setStatusLight")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { delay } from "@devicescript/core"\nimport { setStatusLight } from "@devicescript/runtime"\n\nsetInterval(async () => {\n    await setStatusLight(0x00ff00) // green\n    await delay(500)\n    await setStatusLight(0x000000) // off\n}, 500)\n')))}d.isMDXComponent=!0}}]);
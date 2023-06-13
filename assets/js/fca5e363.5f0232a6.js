"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4839],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Rain gauge service"},o="RainGauge",l={unversionedId:"api/clients/raingauge",id:"api/clients/raingauge",title:"RainGauge",description:"DeviceScript client for Rain gauge service",source:"@site/docs/api/clients/raingauge.md",sourceDirName:"api/clients",slug:"/api/clients/raingauge",permalink:"/devicescript/api/clients/raingauge",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Rain gauge service"},sidebar:"tutorialSidebar"},p={},c=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"readingResolution",id:"const:readingResolution",level:3}],u={toc:c},s="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"raingauge"},"RainGauge"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,a.kt)("p",null,"Measures the amount of liquid precipitation over an area in a predefined period of time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/raingauge/"},"Rain gauge service")),(0,a.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { RainGauge } from "@devicescript/core"\n\nconst rainGauge = new RainGauge()\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"ro:reading"},"reading"),(0,a.kt)("p",null,"Total precipitation recorded so far."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { RainGauge } from "@devicescript/core"\n\nconst rainGauge = new RainGauge()\n// ...\nconst value = await rainGauge.reading.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { RainGauge } from "@devicescript/core"\n\nconst rainGauge = new RainGauge()\n// ...\nrainGauge.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:readingResolution"},"readingResolution"),(0,a.kt)("p",null,"Typically the amount of rain needed for tipping the bucket."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { RainGauge } from "@devicescript/core"\n\nconst rainGauge = new RainGauge()\n// ...\nconst value = await rainGauge.readingResolution.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}g.isMDXComponent=!0}}]);
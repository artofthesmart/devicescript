"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6651],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const o={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Motor service"},i="Motor",l={unversionedId:"api/clients/motor",id:"api/clients/motor",title:"Motor",description:"DeviceScript client for Motor service",source:"@site/docs/api/clients/motor.md",sourceDirName:"api/clients",slug:"/api/clients/motor",permalink:"/devicescript/api/clients/motor",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Motor service"},sidebar:"tutorialSidebar"},p={},s=[{value:"Registers",id:"registers",level:2},{value:"speed",id:"rw:speed",level:3},{value:"enabled",id:"rw:enabled",level:3},{value:"loadTorque",id:"const:loadTorque",level:3},{value:"loadRotationSpeed",id:"const:loadRotationSpeed",level:3},{value:"reversible",id:"const:reversible",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"motor"},"Motor"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,a.kt)("p",null,"A DC motor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/motor/"},"Motor service")),(0,a.kt)("li",{parentName:"ul"},"inherits Role")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"rw:speed"},"speed"),(0,a.kt)("p",null,"Relative speed of the motor. Use positive/negative values to run the motor forwards and backwards.\nPositive is recommended to be clockwise rotation and negative counterclockwise. A speed of ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\nwhile ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," acts as brake."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"i1.15"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nconst value = await motor.speed.read()\nawait motor.speed.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nmotor.speed.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:enabled"},"enabled"),(0,a.kt)("p",null,"Turn the power to the motor on/off."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nconst value = await motor.enabled.read()\nawait motor.enabled.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nmotor.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:loadTorque"},"loadTorque"),(0,a.kt)("p",null,"Torque required to produce the rated power of an electrical motor at load speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nconst value = await motor.loadTorque.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:loadRotationSpeed"},"loadRotationSpeed"),(0,a.kt)("p",null,"Revolutions per minute of the motor under full load."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u16.16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nconst value = await motor.loadRotationSpeed.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:reversible"},"reversible"),(0,a.kt)("p",null,"Indicates if the motor can run backwards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { Motor } from "@devicescript/core"\n\nconst motor = new Motor()\n// ...\nconst value = await motor.reversible.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6209],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=n(25773),a=(n(27378),n(35318));const r={pagination_prev:null,pagination_next:null,description:"DeviceScript client for 7-segment display service"},l="SevenSegmentDisplay",s={unversionedId:"api/clients/sevensegmentdisplay",id:"api/clients/sevensegmentdisplay",title:"SevenSegmentDisplay",description:"DeviceScript client for 7-segment display service",source:"@site/docs/api/clients/sevensegmentdisplay.md",sourceDirName:"api/clients",slug:"/api/clients/sevensegmentdisplay",permalink:"/devicescript/api/clients/sevensegmentdisplay",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for 7-segment display service"},sidebar:"tutorialSidebar"},p={},o=[{value:"Commands",id:"commands",level:2},{value:"setNumber",id:"setnumber",level:3},{value:"Registers",id:"registers",level:2},{value:"intensity",id:"rw:intensity",level:3},{value:"doubleDots",id:"rw:doubleDots",level:3},{value:"digitCount",id:"const:digitCount",level:3},{value:"decimalPoint",id:"const:decimalPoint",level:3}],m={toc:o},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sevensegmentdisplay"},"SevenSegmentDisplay"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is rc and may change in the future.")),(0,a.kt)("p",null,"A 7-segment numeric display, with one or more digits."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/sevensegmentdisplay/"},"7-segment display service")),(0,a.kt)("li",{parentName:"ul"},"inherits Role")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"setnumber"},"setNumber"),(0,a.kt)("p",null,"Shows the number on the screen using the decimal dot if available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"sevenSegmentDisplay.setNumber(value: number): Promise<void>\n")),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"rw:intensity"},"intensity"),(0,a.kt)("p",null,"Controls the brightness of the LEDs. ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," means off."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u0.16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nconst value = await sevenSegmentDisplay.intensity.read()\nawait sevenSegmentDisplay.intensity.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nsevenSegmentDisplay.intensity.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:doubleDots"},"doubleDots"),(0,a.kt)("p",null,"Turn on or off the column LEDs (separating minutes from hours, etc.) in of the segment.\nIf the column LEDs is not supported, the value remains false."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nconst value = await sevenSegmentDisplay.doubleDots.read()\nawait sevenSegmentDisplay.doubleDots.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nsevenSegmentDisplay.doubleDots.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:digitCount"},"digitCount"),(0,a.kt)("p",null,"The number of digits available on the display."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nconst value = await sevenSegmentDisplay.digitCount.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:decimalPoint"},"decimalPoint"),(0,a.kt)("p",null,"True if decimal points are available (on all digits)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SevenSegmentDisplay } from "@devicescript/core"\n\nconst sevenSegmentDisplay = new SevenSegmentDisplay()\n// ...\nconst value = await sevenSegmentDisplay.decimalPoint.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}u.isMDXComponent=!0}}]);
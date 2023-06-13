"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7339],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(25773),i=(n(27378),n(35318));const a={title:"Settings and Secrets",sidebar_position:9,description:"Settings provides a friendly layer to read/write objects from the device flash. Keep it small, there's not a lot of space!"},s="Settings",o={unversionedId:"developer/settings",id:"developer/settings",title:"Settings and Secrets",description:"Settings provides a friendly layer to read/write objects from the device flash. Keep it small, there's not a lot of space!",source:"@site/docs/developer/settings.mdx",sourceDirName:"developer",slug:"/developer/settings",permalink:"/devicescript/developer/settings",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Settings and Secrets",sidebar_position:9,description:"Settings provides a friendly layer to read/write objects from the device flash. Keep it small, there's not a lot of space!"},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/devicescript/developer/commands"},next:{title:"Testing",permalink:"/devicescript/developer/testing"}},l={},p=[{value:".env files",id:"env-files",level:2},{value:"Special Settings",id:"special-settings",level:2},{value:"Using settings",id:"using-settings",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Settings ",(0,i.kt)("a",{parentName:"p",href:"/developer/packages"},"builtin package")," provides a friendly layer to read/write objects from the device flash. ",(0,i.kt)("strong",{parentName:"p"},"Keep it small, there's not a lot of space!")),(0,i.kt)("h2",{id:"env-files"},".env files"),(0,i.kt)("p",null,"Don't store secrets or settings in the code, use ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files instead."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./.env.defaults"),": store general settings (",(0,i.kt)("strong",{parentName:"li"},"tracked by version control"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./.env.local"),": store secrets or override for general settings (",(0,i.kt)("strong",{parentName:"li"},"untracked by version control"),")")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".env*")," file use a similar format to node.js ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. The content will be transfered in the device flash\nwhen deploying the DeviceScript bytecode."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The setting keys should be shorter than 14 characters!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title="./.env.defaults"',title:'"./.env.defaults"'},"# Default settings\n# This file is tracked by git.\n# DO NOT store secrets in this file.\ntemperature=68\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-env",metastring:'title="./.env.local"',title:'"./.env.local"'},"# Local settings and secrets\n# This file is/should **NOT** tracked by git\ntemperature=70 # override\nPASSWORD=secret\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In Visual Studio Code, open the command palette and run ",(0,i.kt)("strong",{parentName:"p"},"DeviceScript: Add Settings..."),".\nFrom the CLI, run ",(0,i.kt)("inlineCode",{parentName:"p"},"devs add settings"),".")),(0,i.kt)("h2",{id:"special-settings"},"Special Settings"),(0,i.kt)("p",null,"Some settings entries are treaty specially and routed to other services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WIFI_SSID"),": set the WiFi SSID to connect to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WIFI_PWD"),": set the WiFi password (skip or leave empty to connect to open WiFi)")),(0,i.kt)("h2",{id:"using-settings"},"Using settings"),(0,i.kt)("p",null,"Once your .env files are ready, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"readSetting")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeSetting")," to read/write settings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Temperature, Button } from "@devicescript/core"\nimport { readSetting, writeSetting } from "@devicescript/settings"\n\nconst temperature = new Temperature()\nconst button = new Button()\n// highlight-next-line\nlet threshold = await readSetting<number>("temperature")\n\n// show alert when temperature is above threshold\ntemperature.reading.subscribe(t => {\n    // highlight-next-line\n    if (t > threshold) {\n        // too hot!\n        console.log("hot!")\n    }\n})\n\n// increase threshold when button is pressed\nbutton.down.subscribe(async () => {\n    threshold++\n    // highlight-next-line\n    await writeSetting("temperature", threshold)\n})\n')),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/settings/"},"API reference"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1583],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(25773),a=(n(27378),n(35318));const o={sidebar_position:10,description:"Learn how to connect a thermostat device to a cloud gateway and configure the desired temperature from the cloud using DeviceScript.",keywords:["thermostat","gateway","devicescript","cloud","temperature control"]},i="Thermostat + Gateway",l={unversionedId:"getting-started/samples/thermostat-gateway",id:"getting-started/samples/thermostat-gateway",title:"Thermostat + Gateway",description:"Learn how to connect a thermostat device to a cloud gateway and configure the desired temperature from the cloud using DeviceScript.",source:"@site/docs/getting-started/samples/thermostat-gateway.mdx",sourceDirName:"getting-started/samples",slug:"/getting-started/samples/thermostat-gateway",permalink:"/devicescript/getting-started/samples/thermostat-gateway",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Learn how to connect a thermostat device to a cloud gateway and configure the desired temperature from the cloud using DeviceScript.",keywords:["thermostat","gateway","devicescript","cloud","temperature control"]},sidebar:"tutorialSidebar",previous:{title:"Homebridge + Humidity Sensor",permalink:"/devicescript/getting-started/samples/homebridge-humidity"},next:{title:"Workshop",permalink:"/devicescript/getting-started/samples/workshop/"}},s={},c=[{value:"Development Gateway",id:"development-gateway",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Environment updates",id:"environment-updates",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"thermostat--gateway"},"Thermostat + Gateway"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/samples/thermostat"},"Thermostat")," sample showed how to implement a thermostat controller\nusing local data. This part 2 of the sample shows how to connect the device to a cloud gateway and configure\nthe desired temperature from the cloud."),(0,a.kt)("h2",{id:"development-gateway"},"Development Gateway"),(0,a.kt)("p",null,"Start by setting up a ",(0,a.kt)("a",{parentName:"p",href:"/developer/development-gateway/gateway"},"Development Gateway")," and connecting the ESP to it."),(0,a.kt)("h2",{id:"telemetry"},"Telemetry"),(0,a.kt)("p",null,"Just like any web or desktop app, a DeviceScript app can be instrumented with ",(0,a.kt)("a",{parentName:"p",href:"/developer/development-gateway/telemetry"},"telemetry")," to get insights into\nhow it is behaving."),(0,a.kt)("p",null,"For example, we instrument the code to notify the cloud whenever the relay is enabled or disabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins } from "@dsboard/adafruit_qt_py_c3"\nimport { Temperature } from "@devicescript/core"\nimport { ewma, tap, auditTime, levelDetector } from "@devicescript/observables"\nimport { startRelay } from "@devicescript/servers"\nimport { trackEvent } from "@devicescript/cloud"\n\nconst thermometer = new Temperature()\nconst t_ref = 68 // degree F\nconst relay = startRelay({\n    pin: pins.A0,\n})\n\nthermometer.reading\n    .pipe(\n        tap(t_raw => console.data({ t_raw })),\n        ewma(0.9),\n        tap(t_ewma => console.data({ t_ewma })),\n        auditTime(5000),\n        tap(t_audit => console.data({ t_audit })),\n        levelDetector(t_ref - 1, t_ref + 1),\n        tap(level => console.data({ level }))\n    )\n    .subscribe(async level => {\n        const enabled = await relay.enabled.read()\n        const newEnabled = level < 0 ? true : level > 0 ? false : enabled\n        await relay.enabled.write(newEnabled)\n        // highlight-next-line\n        if (enabled !== newEnabled)\n            await trackEvent("relay.change", {\n                properties: { active: newEnabled ? "on" : "off" },\n            })\n    })\n')),(0,a.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"If you connect the ESP to the ",(0,a.kt)("a",{parentName:"p",href:"/developer/development-gateway/gateway"},"Development Gateway"),",\nyou can use environment variables configured in the cloud rather constants in the code."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"@devicescript/cloud")," downloads and caches the environment variables from the cloud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins } from "@dsboard/adafruit_qt_py_c3"\nimport { Temperature } from "@devicescript/core"\nimport { ewma, tap, auditTime, levelDetector } from "@devicescript/observables"\nimport { startRelay } from "@devicescript/servers"\n// highlight-next-line\nimport { environment } from "@devicescript/cloud"\n\nconst thermometer = new Temperature()\nconst relay = startRelay({\n    pin: pins.A0,\n})\n// highlight-start\nconst env = await environment<{ t_ref: number }>({ t_ref: 68 })\nconst { t_ref } = await env.read()\n// highlight-end\n\nthermometer.reading\n    .pipe(\n        tap(t_raw => console.data({ t_raw })),\n        ewma(0.9),\n        tap(t_ewma => console.data({ t_ewma })),\n        auditTime(5000),\n        tap(t_audit => console.data({ t_audit })),\n        levelDetector(t_ref - 1, t_ref + 1),\n        tap(level => console.data({ level }))\n    )\n    .subscribe(async level => {\n        if (level < 0) await relay.enabled.write(true)\n        else if (level > 0) await relay.enabled.write(false)\n        console.data({ relay: await relay.enabled.read() })\n    })\n')),(0,a.kt)("h2",{id:"environment-updates"},"Environment updates"),(0,a.kt)("p",null,"The environment variables can be updated in the cloud at any time.\nWe can track the changes and update the relay accordingly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { pins } from "@dsboard/adafruit_qt_py_c3"\nimport { Temperature } from "@devicescript/core"\nimport {\n    ewma,\n    tap,\n    auditTime,\n    levelDetector,\n    Subscription,\n} from "@devicescript/observables"\nimport { startRelay } from "@devicescript/servers"\n// highlight-next-line\nimport { environment } from "@devicescript/cloud"\n\nconst thermometer = new ds.Temperature()\nconst relay = startRelay({\n    pin: pins.A0,\n})\nconst env = await environment<{ t_ref: number }>({ t_ref: 68 })\nlet sub: Subscription\nconst controlTemperature = async () => {\n    // cleanup previous loop\n    if (sub) sub.unsubscribe()\n\n    // start new control loop\n    const { t_ref } = await env.read()\n    sub = thermometer.reading\n        .pipe(\n            tap(t_raw => console.data({ t_raw })),\n            ewma(0.9),\n            tap(t_ewma => console.data({ t_ewma })),\n            auditTime(5000),\n            tap(t_audit => console.data({ t_audit })),\n            levelDetector(t_ref - 1, t_ref + 1),\n            tap(level => console.data({ level }))\n        )\n        .subscribe(async level => {\n            if (level < 0) await relay.enabled.write(true)\n            else if (level > 0) await relay.enabled.write(false)\n            console.data({ relay: await relay.enabled.read() })\n        })\n}\n\n// hightline-next-line\nenv.subscribe(controlTemperature)\nawait controlTemperature()\n')))}m.isMDXComponent=!0}}]);
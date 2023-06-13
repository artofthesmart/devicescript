"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2899],{35318:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(g,o(o({ref:t},l),{},{components:a})):r.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(25773),n=(a(27378),a(35318));const i={description:"Seeed Studio XIAO ESP32C3 with MSR218 base"},o="Seeed Studio XIAO ESP32C3 with MSR218 base",s={unversionedId:"devices/esp32/seeed-xiao-esp32c3-msr218",id:"devices/esp32/seeed-xiao-esp32c3-msr218",title:"Seeed Studio XIAO ESP32C3 with MSR218 base",description:"Seeed Studio XIAO ESP32C3 with MSR218 base",source:"@site/docs/devices/esp32/seeed-xiao-esp32c3-msr218.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/seeed-xiao-esp32c3-msr218",permalink:"/devicescript/devices/esp32/seeed-xiao-esp32c3-msr218",draft:!1,tags:[],version:"current",frontMatter:{description:"Seeed Studio XIAO ESP32C3 with MSR218 base"},sidebar:"tutorialSidebar",previous:{title:"MSR JacdacIoT 48 v0.2",permalink:"/devicescript/devices/esp32/msr48"},next:{title:"Seeed Studio XIAO ESP32C3",permalink:"/devicescript/devices/esp32/seeed-xiao-esp32c3"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],l={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seeed-studio-xiao-esp32c3-with-msr218-base"},"Seeed Studio XIAO ESP32C3 with MSR218 base"),(0,n.kt)("p",null,"A tiny ESP32-C3 board mounted on base with Jacdac, Qwiic and Grove connectors."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/seeed-studio/xiaoesp32c3withmsr218base218v46.catalog.jpg",alt:"Seeed Studio XIAO ESP32C3 with MSR218 base picture"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jacdac on pin 5 using Jacdac connector"),(0,n.kt)("li",{parentName:"ul"},"I2C on SDA/SCL: 6/7 using Qwiic connector"),(0,n.kt)("li",{parentName:"ul"},"WS2812B RGB LED on 10  (use ",(0,n.kt)("a",{parentName:"li",href:"/developer/status-light"},"setStatusLight")," to control)")),(0,n.kt)("h2",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"))),(0,n.kt)("h2",{id:"pins"},"Pins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"A2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"D9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"LED_PWR")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"RX")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"bootUart,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"i2c.pinSCL")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"i2c.pinSDA")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"jacdac.pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"led.pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")))),(0,n.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nselect ",(0,n.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,n.kt)("p",null,"Run this ",(0,n.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board seeed_xiao_esp32c3_msr218\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-esp32/releases/latest/download/devicescript-esp32c3-seeed_xiao_esp32c3_msr218-0x0.bin"},"Firmware"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="seeed_xiao_esp32c3_msr218.json"',title:'"seeed_xiao_esp32c3_msr218.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-esp32/main/boards/esp32deviceconfig.schema.json",\n    "id": "seeed_xiao_esp32c3_msr218",\n    "devName": "Seeed Studio XIAO ESP32C3 with MSR218 base",\n    "productId": "0x36b64827",\n    "$description": "A tiny ESP32-C3 board mounted on base with Jacdac, Qwiic and Grove connectors.",\n    "archId": "esp32c3",\n    "url": "https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html",\n    "$services": [],\n    "i2c": {\n        "$connector": "Qwiic",\n        "pinSCL": 7,\n        "pinSDA": 6\n    },\n    "jacdac": {\n        "$connector": "Jacdac",\n        "pin": 5\n    },\n    "led": {\n        "pin": 10,\n        "type": 1\n    },\n    "pins": {\n        "@JD": 5,\n        "@LED": 10,\n        "@SCL": 7,\n        "@SDA": 6,\n        "@TX": 21,\n        "A0": 2,\n        "A1": 3,\n        "A2": 4,\n        "D9": 9,\n        "LED_PWR": 8,\n        "RX": 20\n    },\n    "sPin": {\n        "LED_PWR": 1\n    },\n    "uartLog": true\n}\n')))}m.isMDXComponent=!0}}]);
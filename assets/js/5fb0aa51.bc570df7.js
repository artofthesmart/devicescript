"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3709],{35318:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var a=r(27378);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},g="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),g=m(r),c=n,k=g["".concat(o,".").concat(c)]||g[c]||s[c]||i;return r?a.createElement(k,p(p({ref:e},d),{},{components:r})):a.createElement(k,p({ref:e},d))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,p=new Array(i);p[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[g]="string"==typeof t?t:n,p[1]=l;for(var m=2;m<i;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},90565:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=r(25773),n=(r(27378),r(35318));const i={description:"Raspberry Pi Pico W"},p="Raspberry Pi Pico W",l={unversionedId:"devices/rp2040/pico-w",id:"devices/rp2040/pico-w",title:"Raspberry Pi Pico W",description:"Raspberry Pi Pico W",source:"@site/docs/devices/rp2040/pico-w.mdx",sourceDirName:"devices/rp2040",slug:"/devices/rp2040/pico-w",permalink:"/devicescript/devices/rp2040/pico-w",draft:!1,tags:[],version:"current",frontMatter:{description:"Raspberry Pi Pico W"},sidebar:"tutorialSidebar",previous:{title:"MSR Brain RP2040 59 v0.1",permalink:"/devicescript/devices/rp2040/msr59"},next:{title:"Raspberry Pi Pico",permalink:"/devicescript/devices/rp2040/pico"}},o={},m=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:m},g="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(g,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raspberry-pi-pico-w"},"Raspberry Pi Pico W"),(0,n.kt)("p",null,"RP2040 board from Raspberry Pi with a WiFi chip."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/raspberry-pi/picowv00.catalog.jpg",alt:"Raspberry Pi Pico W picture"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serial logging on pin 0 at 115200 8N1")),(0,n.kt)("h2",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html"},"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/products/raspberry-pi-pico/"},"https://www.raspberrypi.com/products/raspberry-pi-pico/"))),(0,n.kt)("h2",{id:"pins"},"Pins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P16")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P19")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P20")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P21")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P22")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P26")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO26"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P27")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P28")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"log.pinTX")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")))),(0,n.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nselect ",(0,n.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,n.kt)("p",null,"Run this ",(0,n.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board pico_w\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-pico/releases/latest/download/devicescript-rp2040w-pico_w.uf2"},"Firmware"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="pico_w.json"',title:'"pico_w.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-pico/main/boards/rp2040deviceconfig.schema.json",\n    "id": "pico_w",\n    "devName": "Raspberry Pi Pico W",\n    "productId": "0x3a513204",\n    "$description": "RP2040 board from Raspberry Pi with a WiFi chip.",\n    "archId": "rp2040w",\n    "url": "https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",\n    "log": {\n        "baud": 115200,\n        "pinTX": 0\n    },\n    "pins": {\n        "P1": 1,\n        "P10": 10,\n        "P11": 11,\n        "P12": 12,\n        "P13": 13,\n        "P14": 14,\n        "P15": 15,\n        "P16": 16,\n        "P17": 17,\n        "P18": 18,\n        "P19": 19,\n        "P2": 2,\n        "P20": 20,\n        "P21": 21,\n        "P22": 22,\n        "P26": 26,\n        "P27": 27,\n        "P28": 28,\n        "P3": 3,\n        "P4": 4,\n        "P5": 5,\n        "P6": 6,\n        "P7": 7,\n        "P8": 8,\n        "P9": 9\n    }\n}\n')))}s.isMDXComponent=!0}}]);
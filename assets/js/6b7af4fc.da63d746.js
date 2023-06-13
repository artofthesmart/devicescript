"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8785],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(a),m=r,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||n;return a?i.createElement(f,s(s({ref:t},d),{},{components:a})):i.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(25773),r=(a(27378),a(35318));const n={},s="ESP32",o={unversionedId:"devices/esp32/index",id:"devices/esp32/index",title:"ESP32",description:"The following devices use the firmware from https://github.com/microsoft/devicescript-esp32 which builds on top of ESP-IDF.",source:"@site/docs/devices/esp32/index.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/",permalink:"/devicescript/devices/esp32/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Devices",permalink:"/devicescript/devices/"},next:{title:"Adafruit Feather ESP32-S2",permalink:"/devicescript/devices/esp32/adafruit-feather-esp32-s2"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Listing boards",id:"listing-boards",level:3},{value:"Targeting a specific board",id:"targeting-a-specific-board",level:3}],d={toc:c},l="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"esp32"},"ESP32"),(0,r.kt)("p",null,"The following devices use the firmware from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript-esp32"},"https://github.com/microsoft/devicescript-esp32")," which builds on top of ESP-IDF."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/adafruit-qt-py-c3"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/adafruit/qtpyesp32c3wifidevboardv10.avatar.jpg",alt:"photograph of Adafruit QT Py ESP32-C3 WiFi"})," Adafruit QT Py ESP32-C3 WiFi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/esp32-devkit-c"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/espressif/esp32devkitcdevicescriptv40.avatar.jpg",alt:"photograph of Espressif ESP32-DevKitC"})," Espressif ESP32-DevKitC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/esp32c3-rust-devkit"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/espressif/esp32c3rustdevkitv12a.avatar.jpg",alt:"photograph of Espressif ESP32-C3-RUST-DevKit"})," Espressif ESP32-C3-RUST-DevKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/feather-s2"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/unexpected-maker/feathers2esp32s2v20.avatar.jpg",alt:"photograph of Unexpected Maker FeatherS2 ESP32-S2"})," Unexpected Maker FeatherS2 ESP32-S2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/msr48"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/microsoft-research/jmbrainesp3248v03.avatar.jpg",alt:"photograph of MSR JacdacIoT 48 v0.2"})," MSR JacdacIoT 48 v0.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/seeed-xiao-esp32c3"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/seeed-studio/xiaoesp32c3v00.avatar.jpg",alt:"photograph of Seeed Studio XIAO ESP32C3"})," Seeed Studio XIAO ESP32C3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devices/esp32/seeed-xiao-esp32c3-msr218"},(0,r.kt)("img",{parentName:"a",src:"https://microsoft.github.io/jacdac-docs/images/devices/seeed-studio/xiaoesp32c3withmsr218base218v46.avatar.jpg",alt:"photograph of Seeed Studio XIAO ESP32C3 with MSR218 base"})," Seeed Studio XIAO ESP32C3 with MSR218 base"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Your device is not in the list? ",(0,r.kt)("a",{parentName:"p",href:"/devices/add-board"},"Add a new Device Configuration")," in your project.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You will need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"esptool.py")," first - you can do that using ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install esptool\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Connect your ESP32 board and run ",(0,r.kt)("inlineCode",{parentName:"p"},"devicescript flash esp32")," to flash DeviceScript runtime on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash esp32\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Output"',title:'"Output"'},"$ devicescript flash esp32\nusing serial port /dev/cu.usbmodem01 at 1500000\nesptool: /usr/local/bin/esptool.py\nIdentify arch\nesptool.py v4.5\nSerial port /dev/cu.usbmodem01\nConnecting...\nDetecting chip type... Unsupported detection protocol, switching and trying again...\nDetecting chip type... ESP32-S2\nChip is ESP32-S2 (revision v0.0)\nFeatures: WiFi, No Embedded Flash, No Embedded PSRAM, ADC and temperature sensor calibration in BLK2 of efuse V1\nCrystal is 40MHz\nMAC: 7c:df:a1:03:99:f4\nUploading stub...\nRunning stub...\nStub running...\nChanging baud rate to 1500000\nChanged.\nWarning: ESP32-S2 has no Chip ID. Reading MAC instead.\nMAC: 7c:df:a1:03:99:f4\nStaying in bootloader.\nPlease select board, available options:\n    --board msr207_v42                 JM Brain S2-mini 207 v4.2\n    --board msr207_v43                 JM Brain S2-mini 207 v4.3\n    --board msr48                      JacdacIoT 48 v0.2\n$\n")),(0,r.kt)("h3",{id:"listing-boards"},"Listing boards"),(0,r.kt)("p",null,"You can also get a full list of ESP32 boards without attempting any auto-detect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash esp32 --board list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Output"',title:'"Output"'},"$ devicescript flash esp32 --board list\nPlease select board, available options:\n    --board msr207_v42                 JM Brain S2-mini 207 v4.2\n    --board msr207_v43                 JM Brain S2-mini 207 v4.3\n    --board msr48                      JacdacIoT 48 v0.2\n    --board adafruit_qt_py_c3          Adafruit QT Py ESP32-C3 WiFi Dev Board\n    --board esp32_devkit_c             Espressif ESP32-DevKitC\n")),(0,r.kt)("h3",{id:"targeting-a-specific-board"},"Targeting a specific board"),(0,r.kt)("p",null,"Let's say your board is ",(0,r.kt)("inlineCode",{parentName:"p"},"adafruit_qt_py_c3"),". To target this board, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--board [boardid]")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash esp32 --board adafruit_qt_py_c3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Output"',title:'"Output"'},"$ devicescript flash esp32 --board adafruit_qt_py_c3\nusing serial port /dev/cu.usbmodem14211401 at 1500000\nesptool: /usr/local/bin/esptool.py\nfetch https://github.com/microsoft/jacdac-esp32/releases/latest/download/devicescript-esp32c3-adafruit_qt_py_c3-0x0.bin\nsaved .devicescript/cache/devicescript-esp32c3-adafruit_qt_py_c3-0x0.bin 982208 bytes\nesptool.py v4.5\nSerial port /dev/cu.usbmodem14211401\nConnecting....\nDetecting chip type... ESP32-C3\nChip is ESP32-C3 (revision v0.3)\nFeatures: WiFi, BLE\nCrystal is 40MHz\nMAC: 34:b4:72:ea:17:88\nUploading stub...\nRunning stub...\nStub running...\nChanging baud rate to 1500000\nChanged.\nConfiguring flash size...\nFlash will be erased from 0x00000000 to 0x000effff...\nCompressed 982208 bytes to 532293...\nWriting at 0x00000000... (3 %)\nWriting at 0x00011e9e... (6 %)\n[...snip...]\nWriting at 0x000e576f... (96 %)\nWriting at 0x000ec5d7... (100 %)\nWrote 982208 bytes (532293 compressed) at 0x00000000 in 7.5 seconds (effective 1042.1 kbit/s)...\nHash of data verified.\n\nLeaving...\nHard resetting via RTS pin...\n$\n")),(0,r.kt)("p",null,"After flashing, your board has the DeviceScript runtime and you can program it using DeviceScript."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/developer/errors"},"errors")," page if you run into any issues.")))}u.isMDXComponent=!0}}]);
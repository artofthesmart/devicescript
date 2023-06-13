"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1030],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(25773),i=(n(27378),n(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for MIDI output service"},o="MidiOutput",l={unversionedId:"api/clients/midioutput",id:"api/clients/midioutput",title:"MidiOutput",description:"DeviceScript client for MIDI output service",source:"@site/docs/api/clients/midioutput.md",sourceDirName:"api/clients",slug:"/api/clients/midioutput",permalink:"/devicescript/api/clients/midioutput",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for MIDI output service"},sidebar:"tutorialSidebar"},p={},u=[{value:"Commands",id:"commands",level:2},{value:"clear",id:"clear",level:3},{value:"send",id:"send",level:3},{value:"Registers",id:"registers",level:2},{value:"enabled",id:"rw:enabled",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"midioutput"},"MidiOutput"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,i.kt)("p",null,"A MIDI output device."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"client for ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/midioutput/"},"MIDI output service")),(0,i.kt)("li",{parentName:"ul"},"inherits Role")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { MidiOutput } from "@devicescript/core"\n\nconst midiOutput = new MidiOutput()\n')),(0,i.kt)("p",null),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"clear"},"clear"),(0,i.kt)("p",null,"Clears any pending send data that has not yet been sent from the MIDIOutput's queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"midiOutput.clear(): Promise<void>\n")),(0,i.kt)("h3",{id:"send"},"send"),(0,i.kt)("p",null,"Enqueues the message to be sent to the corresponding MIDI port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"midiOutput.send(data: Buffer): Promise<void>\n")),(0,i.kt)("h2",{id:"registers"},"Registers"),(0,i.kt)("h3",{id:"rw:enabled"},"enabled"),(0,i.kt)("p",null,"Opens or closes the port to the MIDI device"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read and write"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MidiOutput } from "@devicescript/core"\n\nconst midiOutput = new MidiOutput()\n// ...\nconst value = await midiOutput.enabled.read()\nawait midiOutput.enabled.write(value)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"track incoming values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { MidiOutput } from "@devicescript/core"\n\nconst midiOutput = new MidiOutput()\n// ...\nmidiOutput.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,i.kt)("p",null))}d.isMDXComponent=!0}}]);
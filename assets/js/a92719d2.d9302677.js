"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5346],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(25773),o=(n(27378),n(35318));const c={title:"net",sidebar_position:14},a="net",i={unversionedId:"developer/net",id:"developer/net",title:"net",description:"fetch",source:"@site/docs/developer/net.mdx",sourceDirName:"developer",slug:"/developer/net",permalink:"/devicescript/developer/net",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"net",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Low Power",permalink:"/devicescript/developer/low-power"},next:{title:"Packages",permalink:"/devicescript/developer/packages/"}},s={},p=[{value:"fetch",id:"fetch",level:2},{value:"TCP/TLS Sockets",id:"tcptls-sockets",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"net"},"net"),(0,o.kt)("h2",{id:"fetch"},"fetch"),(0,o.kt)("p",null,"DeviceScript provides the familiar ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," function to issue HTTP/HTTPS requests.\n",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," is designed to match the browser ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch API"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { fetch } from "@devicescript/net"\n\nconst res = await fetch(`https://github.com/status.json`)\nconst body = await res.json()\nconsole.log(`GitHub is ${body.status}`)\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/packages/net/src/fetch.ts"},"fetch sources"),"\ncan help you with understanding how to use sockets.")),(0,o.kt)("h2",{id:"tcptls-sockets"},"TCP/TLS Sockets"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"net.connect")," to open a socket TCP or TLS socket."),(0,o.kt)("p",null,"This example issues is HTTPS request to the Github.com status API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { connect } from "@devicescript/net"\n\nconst socket = await connect({ proto: "tls", host: "github.com", port: 443 })\nawait socket.send(`GET /status.json HTTP/1.1\nuser-agent: DeviceScript fetch()\naccept: */*\nhost: github.com\nconnection: close\n\n`)\nconst status = await socket.readLine()\nconsole.log(status)\nawait socket.close()\n')))}d.isMDXComponent=!0}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[7266],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7086:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(9603),o=n(120),r=(n(7378),n(5318)),i=["components"],s={title:"Ding Dong Bot"},d=void 0,l={unversionedId:"examples/basic/ding-dong-bot",id:"examples/basic/ding-dong-bot",isDocsHomePage:!1,title:"Ding Dong Bot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/ding-dong-bot.md",sourceDirName:"examples/basic",slug:"/examples/basic/ding-dong-bot",permalink:"/docs/examples/basic/ding-dong-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/basic/ding-dong-bot.md",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{title:"Ding Dong Bot"},sidebar:"docs",previous:{title:"World's shortest Chatbot",permalink:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines"},next:{title:"Contact Bot",permalink:"/docs/examples/basic/contact-bot"}},p=[{value:"Try out the bot",id:"try-out-the-bot",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Bot demonstration",id:"bot-demonstration",children:[]},{value:"References",id:"references",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,r.kt)("p",null,"Wechaty ",(0,r.kt)("strong",{parentName:"p"},"Ding Dong bot")," is a simple bot for replying with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dong")," for any message sent as ",(0,r.kt)("inlineCode",{parentName:"p"},"ding"),", no matter on which IM (WhatsApp or WeChat) your bot is running."),(0,r.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"},(0,r.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-ding-dong-bot"}))),(0,r.kt)("p",null,"You can try out the ",(0,r.kt)("strong",{parentName:"p"},"Wechaty Ding Dong bot")," using this interactive CodeSandbox."),(0,r.kt)("p",null,"Just scan the generated QR code with ",(0,r.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,r.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?fontsize=12&hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v12+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You should have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,r.kt)("p",null,"The Ding Dong bot is a part of the ",(0,r.kt)("strong",{parentName:"p"},"Wechaty Getting Started repository"),", you can learn how to run this bot locally from ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/hard-way"},"here"),"."),(0,r.kt)("h2",{id:"bot-demonstration"},"Bot demonstration"),(0,r.kt)("p",null,"For the demo, the bot is started on a device using ",(0,r.kt)("strong",{parentName:"p"},"WhatsApp"),". You can see in the below screenshot it responds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ding")," message with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dong"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ding Dong Bot Demo",src:n(2330).Z})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}m.isMDXComponent=!0},2330:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wechaty-ding-dong-bot-demo-422d83836c265eaa62d0330029473e30.png"}}]);
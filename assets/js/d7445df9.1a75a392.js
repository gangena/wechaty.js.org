(self.webpackChunk=self.webpackChunk||[]).push([[5594],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=o,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5377:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var r=n(9603),o=n(120),i=(n(7378),n(5318)),a=["components"],c={slug:"/contributing/",title:"Contributing to Wechaty"},u=void 0,s={unversionedId:"contributing/overview",id:"contributing/overview",isDocsHomePage:!1,title:"Contributing to Wechaty",description:"Wechaty is a community that lives on its volunteers. As it keeps growing, we",source:"@site/docs/contributing/overview.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/overview.md",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{slug:"/contributing/",title:"Contributing to Wechaty"},sidebar:"docs",previous:{title:"Co-marketing",permalink:"/docs/marketing/co-marketing"},next:{title:"Advice for new contributors",permalink:"/docs/contributing/new-contributors"}},l=[{value:"Work on the Wechaty framework",id:"work-on-the-wechaty-framework",children:[{value:"Writing code \ud83d\udcbb",id:"writing-code-",children:[]},{value:"Writing documentation \u270d\ufe0f",id:"writing-documentation-\ufe0f",children:[]},{value:"Building RPA Puppet Provider/Service \ud83d\uddfa\ufe0f",id:"building-rpa-puppet-providerservice-\ufe0f",children:[]}]},{value:"Join the Wechaty community \u2764\ufe0f",id:"join-the-wechaty-community-\ufe0f",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],p={toc:l};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty is a community that lives on its volunteers. As it keeps growing, we\nalways need more people to help others. You can contribute in many ways, either\non the framework itself or in the wider ecosystem."),(0,i.kt)("h2",{id:"work-on-the-wechaty-framework"},"Work on the Wechaty framework"),(0,i.kt)("p",null,"The work on Wechaty itself falls into three major areas:"),(0,i.kt)("h3",{id:"writing-code-"},"Writing code \ud83d\udcbb"),(0,i.kt)("p",null,"Fix a bug, or add a new feature. You can make a pull request and see ",(0,i.kt)("strong",{parentName:"p"},"your\ncode")," in the next version of Wechaty!"),(0,i.kt)("p",null,"Start from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/coding"},"writing code docs"),"."),(0,i.kt)("h3",{id:"writing-documentation-\ufe0f"},"Writing documentation \u270d\ufe0f"),(0,i.kt)("p",null,"Wechaty's documentation is one of its key strengths. It's informative\nand thorough. You can help to improve the documentation and keep it\nrelevant as the framework evolves."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/documentation"},"writing documentation")," for more."),(0,i.kt)("h3",{id:"building-rpa-puppet-providerservice-\ufe0f"},"Building RPA Puppet Provider/Service \ud83d\uddfa\ufe0f"),(0,i.kt)("p",null,"Wechaty supports over 10 Puppet Provider & Services.\nThe RPA team are always looking for hackers\nto help maintain and increase IMs that Wechaty ecosystem should support."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-providers/diy"},"creating your puppet providers"),"\nto help expand the RPA for Wechaty."),(0,i.kt)("p",null,"If you think working ",(0,i.kt)("em",{parentName:"p"},"with")," Wechaty is fun, wait until you start working ",(0,i.kt)("em",{parentName:"p"},"on"),"\nit. Really, ",(0,i.kt)("strong",{parentName:"p"},"ANYONE")," can do something to help make Wechaty better and greater!"),(0,i.kt)("p",null,"This contributing guide contains everything you need to know to help build the\nWechaty chatbot framework. Browse the following sections to find out how:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/new-contributors"},"New contributors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/issues"},"Bugs and features, Triaging issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/coding"},"Writing code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/documentation"},"Writing documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/contributing/pulls"},"Committing code"))),(0,i.kt)("h2",{id:"join-the-wechaty-community-\ufe0f"},"Join the Wechaty community \u2764\ufe0f"),(0,i.kt)("p",null,"We're passionate about helping Wechaty users make the jump to contributing\nmembers of the community. There are several other ways you can help the\nWechaty community and others to maintain a great ecosystem to work in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Join the ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"Wechaty channel"),"\non Gitter.im and answer questions.\nBy explaining Wechaty to other users, you're going to learn a lot about the\nframework yourself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Join the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/discussions"},"GitHub Discussions"),".\nThis forum is a place for discussing the Wechaty\nframework and applications and projects that use it. This is also a good\nplace to ask and answer any questions related to installing, using, or\ncontributing to Wechaty.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Join the ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com/g/wechaty"},"Google Group")," and answer questions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Blog about Wechaty. We syndicate all the Wechaty blogs we know about on\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/blog"},"community blogs"),";\nif you'd like to see your blog on that page you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing/blog"},"register it here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Contribute to open-source Wechaty projects, write some documentation, or\nrelease your own code as an open-source pluggable application. The\necosystem of pluggable applications is a big strength of Wechaty, help us\nbuild it!"))),(0,i.kt)("p",null,"We're looking forward to working with you. Welcome aboard! \u26f5\ufe0f"),(0,i.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,i.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/index.txt"},"Django contributing docs")))}h.isMDXComponent=!0}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[5531],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},517:function(e,t,r){"use strict";var n=r(7378);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6359:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7378),a=r(4309),i=r(8944),p="tabItem_c0e5",o="tabItemActive_28AG";var u=37,l=39;var s=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,n.useState)(s),y=v[0],b=v[1],k=n.Children.toArray(e.children),w=[];if(null!=m){var N=h[m];null!=N&&N!==y&&c.some((function(e){return e.value===N}))&&b(N)}var P=function(e){var t=e.currentTarget,r=w.indexOf(t),n=c[r].value;b(n),null!=m&&(g(m,n),setTimeout((function(){var e,r,n,a,i,p,u,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,p=window,u=p.innerHeight,l=p.innerWidth,r>=0&&i<=l&&a<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case l:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case u:var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:P,onClick:P},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4956:function(e,t,r){"use strict";var n=(0,r(7378).createContext)(void 0);t.Z=n},4309:function(e,t,r){"use strict";var n=r(7378),a=r(4956);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},3483:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),p=r(6359),o=r(517),u=["components"],l={title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},s=void 0,c={unversionedId:"puppet-providers/gitter",id:"puppet-providers/gitter",isDocsHomePage:!1,title:"Puppet Provider: Gitter",description:"Wechaty Puppet Gitter",source:"@site/docs/puppet-providers/gitter.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/gitter",permalink:"/docs/puppet-providers/gitter",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/gitter.md",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{title:"Puppet Provider: Gitter",sidebar_label:"Gitter"},sidebar:"docs",previous:{title:"Official Account",permalink:"/docs/puppet-providers/official-account"},next:{title:"Lark",permalink:"/docs/puppet-providers/lark"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"gitter"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Gitter-blueviolet",alt:"Wechaty Puppet Gitter"}))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/HEAD/docs/images/wechaty-puppet-gitter.png",alt:"Wechaty Puppet Gitter"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-gitter"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-gitter.svg",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-gitter?activeTab=versions"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-gitter/next.svg",alt:"npm (tag)"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Repo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter"},"https://github.com/wechaty/wechaty-puppet-gitter")),(0,i.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-gitter/issues"},"https://github.com/wechaty/wechaty-puppet-gitter/issues"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send & receive messages"),(0,i.kt)("li",{parentName:"ol"},"Message type support: TEXT & IMAGE")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(p.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nexport WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-gitter\nset WECHATY_PUPPET=wechaty-puppet-gitter\nnpm start\n")))),(0,i.kt)("h2",{id:"roadmap"},"Roadmap"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"roomList")," support"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"roomMembers")," support"),(0,i.kt)("li",{parentName:"ul"},"etc.")),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020"))),(0,i.kt)("h2",{id:"maintainers"},"Maintainers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}f.isMDXComponent=!0},8944:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[6590],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7378);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=c,y=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3596:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7378),c=r(8944),a="tableOfContentsInline_1jjz";function o(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return n.createElement("div",{className:(0,c.Z)(a)},n.createElement(o,{toc:t}))}},7388:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},Toc:function(){return f},default:function(){return y}});var n=r(9603),c=r(120),a=(r(7378),r(5318)),o=r(3596),i=["components"],l={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},s=void 0,u={unversionedId:"specs/overview",id:"specs/overview",isDocsHomePage:!1,title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/overview.mdx",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Service: DIY",permalink:"/docs/puppet-services/diy"},next:{title:"Wechaty",permalink:"/docs/specs/wechaty"}},p=[{value:"Table of Content",id:"table-of-content",children:[]}],f=function(){return(0,a.kt)(o.Z,{toc:p,mdxType:"TOCInline"})},m={toc:p,Toc:f};function y(e){var t=e.components,r=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),(0,a.kt)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),(0,a.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/wechaty"},"Polygram Wechaty"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Polygram Wechaty"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/service"},"Wechaty Puppet Service"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wechaty Puppet Service"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/specs/token"},"Wechaty Puppet Service Token"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}y.isMDXComponent=!0},8944:function(e,t,r){"use strict";function n(e){var t,r,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(c&&(c+=" "),c+=r);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}function c(){for(var e,t,r=0,c="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}r.d(t,{Z:function(){return c}})}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[4288],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),f=l,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";var n=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},6359:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7378),l=a(4309),r=a(8944),o="tabItem_c0e5",s="tabItemActive_28AG";var i=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,g=(0,l.Z)(),d=g.tabGroupChoices,v=g.setTabGroupChoices,y=(0,n.useState)(c),b=y[0],h=y[1],k=n.Children.toArray(e.children),T=[];if(null!=m){var x=d[m];null!=x&&x!==b&&p.some((function(e){return e.value===x}))&&h(x)}var w=function(e){var t=e.currentTarget,a=T.indexOf(t),n=p[a].value;h(n),null!=m&&(v(m,n),setTimeout((function(){var e,a,n,l,r,o,i,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,o=window,i=o.innerHeight,u=o.innerWidth,a>=0&&r<=u&&l<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case u:var n=T.indexOf(e.target)+1;a=T[n]||T[0];break;case i:var l=T.indexOf(e.target)-1;a=T[l]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},f)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},4956:function(e,t,a){"use strict";var n=(0,a(7378).createContext)(void 0);t.Z=n},4309:function(e,t,a){"use strict";var n=a(7378),l=a(4956);t.Z=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},9453:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var n=a(9603),l=a(120),r=(a(7378),a(5318)),o=a(6359),s=a(517),i=["components"],u={title:"Processing files"},c=void 0,p={unversionedId:"howto/file-box",id:"howto/file-box",isDocsHomePage:!1,title:"Processing files",description:"Sending File",source:"@site/docs/howto/file-box.md",sourceDirName:"howto",slug:"/howto/file-box",permalink:"/docs/howto/file-box",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/file-box.md",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{title:"Processing files"},sidebar:"docs",previous:{title:"Making friends",permalink:"/docs/howto/friendship"},next:{title:"Writing tests",permalink:"/docs/howto/testing"}},m=[{value:"Sending File",id:"sending-file",children:[]},{value:"Receiving File",id:"receiving-file",children:[]},{value:"About <code>FileBox</code>",id:"about-filebox",children:[]}],f={toc:m};function g(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sending-file"},"Sending File"),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { FileBox } from 'wechaty'\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { FileBox } = require('wechaty')\n\nconst fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import FileBox\n\nfileBox = FileBox.from_url('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,r.kt)("h2",{id:"receiving-file"},"Receiving File"),(0,r.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage (message: Message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage (message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,r.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty_puppet import FileBox\nfrom wechaty import Wechaty, Contact, Message\n\nclass MyBot(Wechaty):\n    async def on_message(self, msg: Message):\n        if msg.type() == MessageType.MESSAGE_TYPE_IMAGE:\n            image_file_box = await msg.to_file_box()\n            print(f'saving file<{image_file_box.name}>')\n            await image_file_box.to_file('/path/to/local/file')\n"))),(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,r.kt)("h2",{id:"about-filebox"},"About ",(0,r.kt)("inlineCode",{parentName:"h2"},"FileBox")),(0,r.kt)("p",null,"Learn more about how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"FileBox")," module by reading its document at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/huan/file-box"},"https://github.com/huan/file-box")))}g.isMDXComponent=!0},8944:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})}}]);
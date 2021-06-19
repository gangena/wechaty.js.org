(self.webpackChunk=self.webpackChunk||[]).push([[3837],{5318:function(t,e,a){"use strict";a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7378);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(a),k=o,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function k(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9775:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=a(9603),o=a(120),r=(a(7378),a(5318)),i=["components"],l={title:"Contact"},c=void 0,p={unversionedId:"api/contact",id:"api/contact",isDocsHomePage:!1,title:"Contact",description:"All wechat contacts(friend) will be encapsulated as a Contact.",source:"@site/docs/api/contact.md",sourceDirName:"api",slug:"/api/contact",permalink:"/docs/api/contact",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/contact.md",version:"current",lastUpdatedBy:"Lovely-Pig",lastUpdatedAt:1624093449,formattedLastUpdatedAt:"6/19/2021",frontMatter:{title:"Contact"},sidebar:"docs",previous:{title:"Message",permalink:"/docs/api/message"},next:{title:"Room",permalink:"/docs/api/room"}},s=[{value:"Classes",id:"classes",children:[]},{value:"Typedefs",id:"typedefs",children:[]},{value:"Contact",id:"contact",children:[{value:"contact.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void",children:[]},{value:"contact.name() \u21d2 <code>string</code>",id:"contactname-\u21d2-string",children:[]},{value:"contact.alias(newAlias) \u21d2 <code>Promise &lt;null | string | void&gt;</code>",id:"contactaliasnewalias-\u21d2-promise-null--string--void",children:[]},{value:"contact.friend() \u21d2 <code>boolean</code> | <code>null</code>",id:"contactfriend-\u21d2-boolean--null",children:[]},{value:"contact.type() \u21d2 <code>ContactType.Unknown</code> | <code>ContactType.Personal</code> | <code>ContactType.Official</code>",id:"contacttype-\u21d2-contacttypeunknown--contacttypepersonal--contacttypeofficial",children:[]},{value:"contact.gender() \u21d2 <code>ContactGender.Unknown</code> | <code>ContactGender.Male</code> | <code>ContactGender.Female</code>",id:"contactgender-\u21d2-contactgenderunknown--contactgendermale--contactgenderfemale",children:[]},{value:"contact.province() \u21d2 <code>string</code> | <code>null</code>",id:"contactprovince-\u21d2-string--null",children:[]},{value:"contact.city() \u21d2 <code>string</code> | <code>null</code>",id:"contactcity-\u21d2-string--null",children:[]},{value:"contact.avatar() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"contactavatar-\u21d2-promise-filebox",children:[]},{value:"contact.sync() \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactsync-\u21d2-promise-void",children:[]},{value:"contact.self() \u21d2 <code>boolean</code>",id:"contactself-\u21d2-boolean",children:[]},{value:"Contact.find(query) \u21d2 <code>Promise &lt;Contact | null&gt;</code>",id:"contactfindquery-\u21d2-promise-contact--null",children:[]},{value:"Contact.findAll([queryArg]) \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"contactfindallqueryarg-\u21d2-promise-contact-",children:[]}]},{value:"ContactQueryFilter",id:"contactqueryfilter",children:[]}],d={toc:s};function m(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All wechat contacts(friend) will be encapsulated as a Contact."),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},"Contact")),(0,r.kt)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts"},"Examples/Contact-Bot")),(0,r.kt)("h2",{id:"typedefs"},"Typedefs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#ContactQueryFilter"},"ContactQueryFilter")),(0,r.kt)("p",null,"The way to search Contact"),(0,r.kt)("h2",{id:"contact"},"Contact"),(0,r.kt)("p",null,"All wechat contacts","(","friend",")"," will be encapsulated as a Contact. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts"},"Examples/Contact-Bot")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class ",(0,r.kt)("strong",{parentName:"p"},"Properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get Contact id. This function is depending on the Puppet Implementation, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact"},"Contact"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"instance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+say"},".say","(","textOrContactOrFileOrUrl",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+name"},".name","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+alias"},".alias","(","newAlias",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <null | string | void>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+friend"},".friend","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+type"},".type","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactType.Unknown")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactType.Personal")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactType.Official")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+gender"},".gender","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactGender.Unknown")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactGender.Male")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"ContactGender.Female")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+province"},".province","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+city"},".city","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+avatar"},".avatar","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <FileBox>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+sync"},".sync","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <void>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact+self"},".self","(",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"static"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact.find"},".find","(","query",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <Contact | null>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/contact#Contact.findAll"},".findAll","(","[","queryArg","]",")")," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise <Contact []>"))))))),(0,r.kt)("h3",{id:"contactsaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void"},"contact.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"textOrContactOrFileOrUrlLinkOrMiniProgram"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,r.kt)("td",{parentName:"tr",align:"left"},"send text, Contact, file or UrlLink to contact.   You can use ",(0,r.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/file-box"},"FileBox")," to send file")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nawait bot.start()\nconst contact = await bot.Contact.find({name: 'lijiarui'})  // change 'lijiarui' to any of your contact name in wechat\n\n// 1. send text to contact\n\nawait contact.say('welcome to wechaty!')\n\n// 2. send media file to contact\n\nimport { FileBox }  from 'file-box'\nconst fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\nconst fileBox2 = FileBox.fromFile('/tmp/text.txt')\nawait contact.say(fileBox1)\nawait contact.say(fileBox2)\n\n// 3. send contact card to contact\n\nconst contactCard = bot.Contact.load('contactId')\nawait contact.say(contactCard)\n\n// 4. send url link to contact\n\nconst urlLink = new UrlLink({\n  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',\n  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',\n  title       : 'Welcome to Wechaty',\n  url         : 'https://github.com/wechaty/wechaty',\n})\nawait contact.say(urlLink)\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\nconst miniProgram = new MiniProgram ({\n  appid              : 'gh_0aa444a25adc',\n  title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n  pagePath           : 'routes/explore.html',\n  description        : '\u8eab\u4efd\u7ba1\u5bb6',\n  thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n  thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n});\n\nawait contact.say(miniProgram);\n")),(0,r.kt)("h3",{id:"contactname-\u21d2-string"},"contact.name","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,"Get the name from a contact"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const name = contact.name()\n")),(0,r.kt)("h3",{id:"contactaliasnewalias-\u21d2-promise-null--string--void"},"contact.alias","(","newAlias",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <null | string | void>")),(0,r.kt)("p",null,"GET / SET / DELETE the alias for a contact"),(0,r.kt)("p",null,"Tests show it will failed if set alias too frequently","(","60 times in one minute",")","."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"newAlias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"("," GET the alias for a contact, return {","(","Promise","<","string ","|"," null",">",")","}",")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const alias = await contact.alias()\nif (alias === null) {\n  console.log('You have not yet set any alias for contact ' + contact.name())\n} else {\n  console.log('You have already set an alias for contact ' + contact.name() + ':' + alias)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(","SET the alias for a contact",")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  await contact.alias('lijiarui')\n  console.log(`change ${contact.name()}'s alias successfully!`)\n} catch (e) {\n  console.log(`failed to change ${contact.name()} alias!`)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(","DELETE the alias for a contact",")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const oldAlias = await contact.alias(null)\n  console.log(`delete ${contact.name()}'s alias successfully!`)\n  console.log(`old alias is ${oldAlias}`)\n} catch (e) {\n  console.log(`failed to delete ${contact.name()}'s alias!`)\n}\n")),(0,r.kt)("h3",{id:"contactfriend-\u21d2-boolean--null"},"contact.friend","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"null")),(0,r.kt)("p",null,"Check if contact is friend"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"},"puppet-compatible-table"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," - True for friend of the bot False for not friend of the bot, null for unknown. ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const isFriend = contact.friend()\n")),(0,r.kt)("h3",{id:"contacttype-\u21d2-contacttypeunknown--contacttypepersonal--contacttypeofficial"},"contact.type","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactType.Unknown")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactType.Personal")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactType.Official")),(0,r.kt)("p",null,"Return the type of the Contact"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: ContactType is enum here.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nawait bot.start()\nconst isOfficial = contact.type() === bot.Contact.Type.Official\n")),(0,r.kt)("h3",{id:"contactgender-\u21d2-contactgenderunknown--contactgendermale--contactgenderfemale"},"contact.gender","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactGender.Unknown")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactGender.Male")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContactGender.Female")),(0,r.kt)("p",null,"Contact gender"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tips: ContactGender is enum here.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const gender = contact.gender() === bot.Contact.Gender.Male\n")),(0,r.kt)("h3",{id:"contactprovince-\u21d2-string--null"},"contact.province","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"null")),(0,r.kt)("p",null,"Get the region 'province' from a contact"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const province = contact.province()\n")),(0,r.kt)("h3",{id:"contactcity-\u21d2-string--null"},"contact.city","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"null")),(0,r.kt)("p",null,"Get the region 'city' from a contact"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const city = contact.city()\n")),(0,r.kt)("h3",{id:"contactavatar-\u21d2-promise-filebox"},"contact.avatar","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),(0,r.kt)("p",null,"Get avatar picture file stream"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Save avatar to local file like `1-name.jpg`\n\nconst file = await contact.avatar()\nconst name = file.name\nawait file.toFile(name, true)\nconsole.log(`Contact: ${contact.name()} with avatar file: ${name}`)\n")),(0,r.kt)("h3",{id:"contactsync-\u21d2-promise-void"},"contact.sync","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,r.kt)("p",null,"Force reload data for Contact, Sync data from lowlevel API again."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await contact.sync()\n")),(0,r.kt)("h3",{id:"contactself-\u21d2-boolean"},"contact.self","(",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,"Check if contact is self"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," - True for contact is self, False for contact is others ",(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const isSelf = contact.self()\n")),(0,r.kt)("h3",{id:"contactfindquery-\u21d2-promise-contact--null"},"Contact.find","(","query",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <Contact | null>")),(0,r.kt)("p",null,"Try to find a contact by filter: {name: string ","|"," RegExp} / {alias: string ","|"," RegExp}"),(0,r.kt)("p",null,"Find contact by name or alias, if the result more than one, return the first one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.")," - If can find the contact, return Contact, or return null"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"query"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/contact#ContactQueryFilter"},(0,r.kt)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const bot = new Wechaty()\nawait bot.start()\nconst contactFindByName = await bot.Contact.find({ name:"ruirui"} )\nconst contactFindByAlias = await bot.Contact.find({ alias:"lijiarui"} )\n')),(0,r.kt)("h3",{id:"contactfindallqueryarg-\u21d2-promise-contact-"},"Contact.findAll","(","[","queryArg","]",")"," \u21d2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),(0,r.kt)("p",null,"Find contact by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")),(0,r.kt)("p",null,"If use Contact.findAll","(",")"," get the contact list of the bot. Include the contacts from bot's rooms."),(0,r.kt)("h4",{id:"definition"},"definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),"   the name-string set by user-self, should be called name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias"),"  the name-string set by bot for others, should be called alias")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/contact#Contact"},(0,r.kt)("inlineCode",{parentName:"a"},"Contact"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryArg"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/contact#ContactQueryFilter"},(0,r.kt)("inlineCode",{parentName:"a"},"ContactQueryFilter")))))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const bot = new Wechaty()\nawait bot.start()\nconst contactList = await bot.Contact.findAll()                      // get the contact list of the bot\nconst contactList = await bot.Contact.findAll({ name: 'ruirui' })    // find all of the contacts whose name is 'ruirui'\nconst contactList = await bot.Contact.findAll({ alias: 'lijiarui' }) // find all of the contacts whose alias is 'lijiarui'\n")),(0,r.kt)("h2",{id:"contactqueryfilter"},"ContactQueryFilter"),(0,r.kt)("p",null,"The way to search Contact"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global typedef ",(0,r.kt)("strong",{parentName:"p"},"Properties")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name-string set by user-self, should be called name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name-string set by bot for others, should be called alias ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty/issues/365"},"More Detail"))))))}m.isMDXComponent=!0}}]);
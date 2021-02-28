(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(193));n(185),n(186),n(194),n(195),n(196),n(197);const i={title:"Calling Spells with SetCursor",author:"tte",steamId:"76561198003060848",date:"10.01.2015"},o={id:"abilities/calling-spells-with-setcursor",isDocsHomePage:!1,title:"Calling Spells with SetCursor",description:'CDotaBaseAbilitySetCursorCastTarget and CDOTABaseNPC:SetCursorPosition are used to "Call" spells.',source:"@site/_articles/abilities/calling-spells-with-setcursor.md",permalink:"/abilities/calling-spells-with-setcursor",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/calling-spells-with-setcursor.md",sidebar:"tutorials",previous:{title:"Making any ability use charges",permalink:"/abilities/making-any-ability-use-charges"},next:{title:"Lua Item Tutorial",permalink:"/abilities/lua-item-tutorial"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CDotaBaseAbility:OnSpellStart")," in combination with ",Object(a.b)("inlineCode",{parentName:"p"},"CDotaBaseNPC:SetCursorCastTarget")," and ",Object(a.b)("inlineCode",{parentName:"p"},"CDOTABaseNPC:SetCursorPosition"),' are used to "Call" spells.'),Object(a.b)("p",null,"This is a powerful way to interact with Valve's spells in particular. This allows you to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Activate hidden abilities"),Object(a.b)("li",{parentName:"ul"},"Ignore turn-restrictions"),Object(a.b)("li",{parentName:"ul"},"Ignore castpoint or cooldown"),Object(a.b)("li",{parentName:"ul"},"Ignore any other cruft associated with the formal spell-casting methods")),Object(a.b)("p",null,"This is easy to use, easy to configure and easy to think about. Here is an example that casts Tether on a hidden dummy unit, activated by a datadriven spell:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'local tether = caster:FindAbilityByName("trollsandelves_hidden_tether")\ntether:SetLevel(4)\ntether:EndCooldown()\ncaster:SetCursorCastTarget(dummy)\ntether:OnSpellStart()\n')))}s.isMDXComponent=!0},185:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(192),o=n(189),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=Object(i.a)(),[m,h]=Object(r.useState)(l);if(null!=d){const e=f[d];null!=e&&e!==m&&p.some(t=>t.value===e)&&h(e)}const y=e=>{h(e),null!=d&&b(d,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},186:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},187:function(e,t,n){"use strict";var r=n(0),a=n(34);t.a=function(){return Object(r.useContext)(a.a)}},188:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))},189:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(187),a=n(188);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:o}={}}=Object(r.a)();if(!e)return e;if(t)return i+e;if(!Object(a.a)(e))return e;const l=i+e.replace(/^\//,"");return n?o+l:l}},191:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},192:function(e,t,n){"use strict";var r=n(0),a=n(191);t.a=function(){return Object(r.useContext)(a.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,aspectRatio:t=4/3,hd:n="0"}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n(186),i=n(185),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){Object(r.a)("string"==typeof t||void 0===t);const o=l.a.Children.toArray(e).map((e,t)=>{var r,a,i,o;const l=null!==(r=null===(a=e.props.children.props.className)||void 0===a?void 0:a.replace(/language-/,""))&&void 0!==r?r:"Tab "+(t+1);return{id:t,languageName:null!==(i=null!==(o=(void 0!==n&&n.length>0?n.split("|"):[])[t])&&void 0!==o?o:c[l])&&void 0!==i?i:l,element:e}});return l.a.createElement(i.a,{groupId:void 0!==t?"multi-code-block-"+t:void 0,defaultValue:o[0].id,values:o.map(({id:e,languageName:t})=>({value:e,label:t}))},o.map(({id:e,element:t})=>l.a.createElement(a.a,{key:e,value:e},t)))}},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(190),a=n(0),i=n.n(a);function o({path:e,controls:t=!1}){return i.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},i.a.createElement("source",{src:Object(r.a)(e),type:"video/mp4"}))}}}]);
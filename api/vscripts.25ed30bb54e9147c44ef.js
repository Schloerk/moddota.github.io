(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[443],{LVUE:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>oe});var a=n("bkJV"),l=n("q1tI"),i=n("ESB5"),r=n("GlAS"),c=n("X6oG"),m=n("DCqk"),s=n("dVvj"),o=n("kDog"),p=n("f8wK"),d=n("TOw/"),E=n("BSJ3"),u=n("55Ip"),y=n("9R94"),f=n("x3Ba"),g=n("mhT9");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const x=({types:e})=>l.createElement(l.Fragment,null,(0,g.iD)(e.map(((e,t)=>l.createElement(_,{key:t,type:e})))," | ")),_=({type:e})=>{if("string"==typeof e)return l.createElement(C,{name:e});switch(e.kind){case"array":return l.createElement(N,{type:e});case"function":return l.createElement(P,{type:e});case"literal":return l.createElement(w,{type:e});case"table":return l.createElement(v,{type:e});default:(0,g.vE)(e)}},b=(0,p.ZP)(u.OL).withConfig({displayName:"types__TypeReferenceLink"})(["font-weight:600;&.active{text-decoration:none;}"]),k=p.ZP.span.withConfig({displayName:"types__TypeSpan"})(["font-weight:600;"]),C=({name:e})=>{const[t,n,i]=(0,l.useMemo)((()=>{if("nil"===e)return["nil"];const t=(0,a.findTypeByName)(e);return(0,y.Z)(void 0!==t,`Invalid type reference: ${e}`),"primitive"===t.kind||"nominal"===t.kind?["literal"]:["interface","class"===t.kind||"enum"===t.kind?e:"constant"===t.kind?"constants":"function"===t.kind?"functions":void 0,"constant"===t.kind||"function"===t.kind?e:void 0]}),[e]),r=i?`#${i}`:"",c={textDecorationColor:(0,f.E)((0,l.useContext)(p.Ni),t)};return n?l.createElement(b,{to:`/vscripts/${n}${r}`,style:c},l.createElement(f.P,{kind:t},e)):l.createElement(k,null,l.createElement(f.P,{kind:t},e))},w=({type:{value:e}})=>l.createElement(k,null,l.createElement(f.P,{kind:"literal"},e)),N=({type:{types:e}})=>l.createElement(k,null,"[",l.createElement(x,{types:e}),"]"),v=({type:{key:e,value:t}})=>l.createElement(k,null,"{"," [",l.createElement(x,{types:e}),"]: ",l.createElement(x,{types:t})," ","}"),P=({type:{args:e,returns:t}})=>l.createElement(k,null,l.createElement(Z,{args:e})," → ",l.createElement(x,{types:t}));function Z({args:e}){return l.createElement(l.Fragment,null,"(",(0,g.iD)(e.map((e=>l.createElement(F,h({key:e.name},e)))),", "),")")}const D=p.ZP.span.withConfig({displayName:"types__FunctionParameterWrapper"})(["font-weight:normal;"]),F=({name:e,types:t})=>l.createElement(D,null,l.createElement(f.P,{kind:"parameter"},e),": ",l.createElement(x,{types:t})),O=(0,p.ZP)(E.S9).withConfig({displayName:"Field__FieldWrapper"})(["padding:4px;"]),S=(0,p.ZP)(E.dU).withConfig({displayName:"Field__FieldSignature"})([""]),j=({className:e,context:t,element:n})=>{const a=(0,d.H_)({scope:t,hash:n.name});return l.createElement(O,{className:e,id:n.name,isLinked:a},l.createElement(E.c_,null,l.createElement(S,null,l.createElement(d.vI,{kind:"field",size:"small"}),n.name,n.types.includes("nil")&&"?",": ",l.createElement(x,{types:n.types.filter((e=>"nil"!==e))})),l.createElement(E.Yq,null,t&&l.createElement(d.RE,{scope:t,hash:n.name}))))},z=p.ZP.div.withConfig({displayName:"ObjectType__ObjectHeader"})(["font-size:12px;padding:4px;"]),T=p.ZP.span.withConfig({displayName:"ObjectType__ObjectName"})(["font-weight:600;"]),W=p.ZP.div.withConfig({displayName:"ObjectType__ObjectDescription"})(["font-size:14px;margin:5px 20px;"]),R=(0,p.ZP)(j).withConfig({displayName:"ObjectType__ObjectField"})(["font-size:12px;"]),I=({className:e,declaration:t})=>l.createElement(E.S9,{className:e},l.createElement(z,null,l.createElement(d.vI,{kind:"interface",size:"small"}),l.createElement(T,null,t.name),t.extend&&l.createElement(l.Fragment,null," extends ",t.extend.join(", "))),t.description&&l.createElement(W,null,t.description),t.fields.length>0&&l.createElement(E.aR,null,t.fields.map((e=>l.createElement(R,{key:e.name,element:e}))))),H=(0,p.ZP)(E.S9).withConfig({displayName:"FunctionDeclaration__FunctionWrapper"})(["padding:2px 5px;"]),U=(0,p.ZP)(E.dU).withConfig({displayName:"FunctionDeclaration__FunctionSignature"})(["margin-bottom:3px;"]),q=p.ZP.div.withConfig({displayName:"FunctionDeclaration__ObjectReferences"})(["margin:8px 25px 0 25px;margin-bottom:7px;>:not(:last-child){margin-bottom:7px;box-sizing:border-box;}"]),L=p.ZP.li.withConfig({displayName:"FunctionDeclaration__ParameterDescription"})(["list-style:none;margin-left:20px;margin-bottom:6px;padding:2px;font-size:13px;"]),M=p.ZP.span.withConfig({displayName:"FunctionDeclaration__ParameterDescriptionName"})(["font-weight:600;"]),Y=({className:e,style:t,context:n,declaration:a})=>{const i=(0,l.useMemo)((()=>(0,o.Tf)(a).map((e=>l.createElement(I,{key:e.name,declaration:e})))),[a]),r=(0,l.useMemo)((()=>a.args.filter((e=>e.description)).map((e=>l.createElement(L,{key:e.name},l.createElement(M,null,e.name),": ",e.description)))),[a]),c=(0,d.H_)({scope:n,hash:a.name});return l.createElement(H,{className:e,style:t,id:a.name,isLinked:c},l.createElement(E.c_,null,l.createElement(U,null,l.createElement(d.vI,{kind:"function",size:"big"}),a.name,a.abstract&&l.createElement("span",{title:"Abstract: this method does not exist on the class, but it can be implemented on subclass"},"?"),l.createElement(Z,{args:a.args}),": ",l.createElement(x,{types:a.returns})),l.createElement(E.Yq,null,l.createElement(d.TQ,{available:a.available}),l.createElement(d.zw,{name:a.name}),l.createElement(d.vf,{name:a.name}),n&&l.createElement(d.RE,{scope:n,hash:a.name}))),i.length>0&&l.createElement(q,null,i),l.createElement(E.Wh,{description:(a.description||r.length>0)&&l.createElement(l.Fragment,null,r,a.description)}))},$=(0,p.ZP)(E.S9).withConfig({displayName:"ClassDeclaration__ClassWrapper"})([""]),B=(0,p.ZP)(E.c_).withConfig({displayName:"ClassDeclaration__ClassHeader"})(["padding:5px;"]),A=p.ZP.span.withConfig({displayName:"ClassDeclaration__ClassName"})(["font-size:24px;font-weight:600;"]),J=p.ZP.span.withConfig({displayName:"ClassDeclaration__ClassExtendsWrapper"})(["font-size:14px;font-weight:normal;color:",";@media (max-width:768px){display:block;}"],(e=>e.theme.textDim)),K=({extend:e})=>l.createElement(J,null,"extends ",l.createElement(x,{types:[e]})),V=(0,p.ZP)(E.aR).withConfig({displayName:"ClassDeclaration__ClassMembers"})(["padding:8px;>:not(:last-child){margin-bottom:14px;}"]),G=({className:e,style:t,declaration:n})=>l.createElement($,{className:e,style:t},l.createElement(B,null,l.createElement(E.dU,null,l.createElement(d.vI,{kind:"class",size:"big"}),l.createElement(A,null,n.name)," ",n.extend&&l.createElement(K,{extend:n.extend})),l.createElement(E.Yq,null,l.createElement(d.Kw,{name:n.name}),l.createElement(d.TQ,{available:null!=n.clientName?"both":"server"}),l.createElement(d.RE,{scope:n.name}))),l.createElement(E.Wh,{description:n.description}),n.members.length>0&&l.createElement(V,null,n.members.map((e=>"field"===e.kind?l.createElement(j,{key:e.name,element:e,context:n.name}):l.createElement(Y,{key:e.name,declaration:e,context:n.name}))))),Q=(0,p.ZP)(E.S9).withConfig({displayName:"Constant__ConstantWrapper"})(["padding:5px;"]),X=(0,p.ZP)(E.dU).withConfig({displayName:"Constant__ConstantSignature"})(["font-size:20px;"]);function ee({className:e,style:t,element:n}){const a=(0,d.H_)({scope:"constants",hash:n.name});return l.createElement(Q,{className:e,style:t,id:n.name,isLinked:a},l.createElement(E.c_,null,l.createElement(X,null,l.createElement(d.vI,{kind:"constant",size:"medium"}),n.name,": ",n.value),l.createElement(E.Yq,null,l.createElement(d.RE,{scope:"constants",hash:n.name}))),l.createElement(E.Wh,{description:n.description}))}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ne=(0,p.ZP)(E.S9).withConfig({displayName:"Enum__EnumMemberWrapper"})(["padding:2px 5px;"]),ae=e=>l.createElement(ne,null,l.createElement(E.c_,null,l.createElement(E.dU,null,e.name," = ",l.createElement(f.P,{kind:"literal"},e.value))),l.createElement(E.Wh,{description:e.description})),le=(0,p.ZP)(E.c_).withConfig({displayName:"Enum__EnumHeader"})(["padding:5px;"]),ie=(0,p.ZP)(E.aR).withConfig({displayName:"Enum__EnumMembers"})([">:not(:last-child){margin-bottom:1px;}"]),re=({className:e,style:t,element:n})=>l.createElement(E.S9,{className:e,style:t},l.createElement(le,null,l.createElement(E.dU,null,l.createElement(d.vI,{kind:"enum",size:"big"}),n.name),l.createElement(E.Yq,null,l.createElement(d.Kw,{name:n.name}),l.createElement(d.RE,{scope:n.name}))),l.createElement(E.Wh,{description:n.description}),n.members.length>0&&l.createElement(ie,null,n.members.map((e=>l.createElement(ae,te({key:e.name},e))))));function ce(e,t){let n;switch(e.kind){case"class":n=l.createElement(G,{declaration:e});break;case"enum":n=l.createElement(re,{element:e});break;case"constant":n=l.createElement(ee,{element:e});break;case"function":n=l.createElement(Y,{context:"functions",declaration:e})}return l.createElement(c.HC,{style:t,key:e.name},n)}function me(){const{data:e,isSearching:t}=(0,o.pu)();return l.createElement(c.vs,null,l.createElement(c.IH,{baseUrl:"/vscripts"}),e.length>0?t?l.createElement(s.c,{data:e,render:ce}):l.createElement(s.A,{data:e,render:ce}):t?l.createElement(c.cv,null,"No results found"):l.createElement(c.cv,null,"Choose a category or use the search bar..."),!t&&!e.length&&l.createElement(m.S,null))}const se=()=>l.createElement(r.H,null,l.createElement(r.f,{icon:"function",text:"Functions",to:"/vscripts/functions"}),l.createElement(r.f,{icon:"constant",text:"Constants",to:"/vscripts/constants"}),a.allData.filter((e=>"class"===e.kind||"enum"===e.kind)).map((({name:e,kind:t})=>l.createElement(r.f,{key:e,icon:t,text:e,to:`/vscripts/${e}`}))));function oe(){return l.createElement(l.Fragment,null,l.createElement(i.J6,null),l.createElement(se,null),l.createElement(me,null))}}}]);
//# sourceMappingURL=vscripts.25ed30bb54e9147c44ef.js.map
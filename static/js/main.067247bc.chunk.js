(this["webpackJsonptssg-editor"]=this["webpackJsonptssg-editor"]||[]).push([[0],{220:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(30),o=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(21),s=t(4),c=t(229),u=t(83),m=(t(97),t(226)),p=t(41),d=t(228),y=t(224),g=t(70),f=t.n(g),v=function(e){var n=e.isOpen,t=e.onClose,i=Object(a.useState)(""),o=Object(l.a)(i,2),c=o[0],u=o[1];return Object(a.useEffect)((function(){"undefined"!==typeof fetch&&fetch("./readme.md").then((function(e){return e.text()})).then((function(e){return u(e)}))}),[]),r.a.createElement(d.a,{isOpen:n,onClose:t,size:"900px"},r.a.createElement(d.f,null),r.a.createElement(d.d,null,r.a.createElement(d.e,null,r.a.createElement(y.a,{size:"lg",backgroundColor:"royalblue",display:"inline-block",p:2,px:6,color:"white"},"How to use guide...")),r.a.createElement(d.c,null),r.a.createElement(d.b,null,r.a.createElement(s.a,{className:"how-to-guide"},r.a.createElement(f.a,{source:c,escapeHtml:!1})))))},E=t(230),b=t(225),x=t(89),h=function(e){var n=e.rightSection;return r.a.createElement(s.a,{pl:8},r.a.createElement(u.a,{alignItems:"center"},r.a.createElement(s.a,{flex:1},r.a.createElement(u.a,{alignItems:"center"},r.a.createElement(y.a,{color:"green.500"},"TSSG"),r.a.createElement(E.a,{color:"white",backgroundColor:"orange.400",mx:2},"Alpha"),r.a.createElement(y.a,{size:"xs",color:"black.200"},"The Swagger Schema Generator")),r.a.createElement(b.a,null,"Write schema in an easy, concise and short way")),r.a.createElement(s.a,null,r.a.createElement(u.a,{alignItems:"center",mr:4},r.a.createElement(s.a,{mr:4,mt:2},r.a.createElement(x.a,{href:"https://github.com/jskod/tssg-editor","data-size":"large","data-show-count":!0,"aria-label":"Star jskod/tssg-editor on GitHub"},"Star")),n))))},S=t(90),w=t(84),O=t(227),C=t(85),j=t.n(C),k=t(86),z=(t(204),t(205),t(206),t(210),t(211),t(212),t(213),t(40));function I(e){var n=e.title,t=e.onClick;return r.a.createElement(z.a,{onClick:t,p:2,bg:"blue.500",_hover:{bg:"blue.600"},mb:2,cursor:"pointer",color:"white",transition:"all .6s",borderRadius:4},n)}var A=function(e){var n=e.onLoadExample,t=Object(m.a)(),i=t.isOpen,o=t.onClose,l=t.onOpen,s=Object(a.useCallback)((function(e){n&&n(e),o()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{onClick:l,type:"button",size:"sm",variantColor:"blue"},"Load Examples"),r.a.createElement(d.a,{isOpen:i,onClose:o,size:"xl"},r.a.createElement(d.f,null),r.a.createElement(d.d,{borderRadius:4},r.a.createElement(d.e,null,r.a.createElement(y.a,{size:"lg",fontWeight:"bold"},"Select an example to load")),r.a.createElement(d.c,null),r.a.createElement(d.b,null,r.a.createElement(O.a,null,r.a.createElement(I,{title:"Simple Schema",onClick:function(){return s("{\n  name: !string,\n  age: number,\n  email: string,\n  phone: !n,\n  address: s,\n  isVerified: b,\n}")}}),r.a.createElement(I,{title:"Schema using Object data type",onClick:function(){return s("{\n  name: !string,\n  age: number,\n  email: s,\n  phone: !n,\n  address: {\n    street: string,\n    city: string,\n    country: string,\n    zipcode: string,\n  },\n  isVerified: boolean,\n}")}}),r.a.createElement(I,{title:"Simple using Array data type",onClick:function(){return s("{\n  data: [{\n    name: string,\n    age: number,\n    email: string,\n    address: {\n      street: string,\n      city: string,\n      country: string,\n      zipcode: string,\n    }\n  }]\n}")}}),r.a.createElement(I,{title:"Simple using Mixed data types",onClick:function(){return s("{\n  name: !string,\n  age: number,\n  email: !string,\n  phoneNumbers: ![string],\n  address: !{\n    street: string,\n    city: string,\n    country: !string,\n    zipcode: string,\n  },\n  posts: [{\n    _id: !s,\n    title: !s,\n    content: s,\n    views: integer,\n    commentsCount: i,\n  }]\n}")}}))))))},T=window.localStorage.getItem("savedValue"),_="/**\n* Example TSSG Syntax\n* Data Types:\n* \tstring | s, number | n, integer | i, boolean | b, [], {}\n* Marker:\n* \tuse `!` sign to mark an object property as required\n* Supported functions:\n* \toneOf, allOf, anyOf\n*\n* For more information read `how to use` guide.\n* This project is Work In Progress. It will soon support other swagger features.\n*/\n\n{\n\tname: s,\n\tage: !n,\n\taddress: {\n    \tcity: string,\n        country: !string\n    },\n    choices: oneOf(s, n, b),\n}",q=T||_,L=function(e){var n=e.setParsedData,t=e.width,i=e.height,o=Object(a.useState)(q),u=Object(l.a)(o,2),m=u[0],d=u[1],y=Object(a.useState)(""),g=Object(l.a)(y,2),f=g[0],v=g[1],E=Object(a.useCallback)(j()((function(e){if(e)try{var t=Object(k.ssgToOASParser)("(".concat(e,")"));n(t),window.localStorage.setItem("savedValue",e),v("")}catch(a){v(a.message)}}),1e3,{trailing:!0}),[]);return Object(a.useEffect)((function(){E(m)}),[m]),r.a.createElement(s.a,{position:"relative"},f&&r.a.createElement(M,Object.assign({error:f},{position:"absolute",left:0,bottom:0,zIndex:999,width:"100%",color:"white"})),r.a.createElement(s.a,{position:"absolute",top:2,right:6,style:{zIndex:999}},r.a.createElement(O.a,{direction:"row"},r.a.createElement(c.a,{type:"button",size:"sm",variantColor:"blue",onClick:function(){window.localStorage.setItem("savedValue",_),d(_)}},r.a.createElement(p.a,{name:"repeat",mr:2})," Reset"),r.a.createElement(A,{onLoadExample:function(e){d(e)}}))),r.a.createElement(w.Controlled,{editorDidMount:function(e){e.setSize(t/2,i-80)},className:"tssg-editor",value:m,options:{lineWrapping:!0,lineNumbers:!0,theme:"material",smartIndent:!1,autoCloseBrackets:!0,highlightSelectionMatches:!0,matchBrackets:!0,mode:"javascript"},onBeforeChange:function(e,n,t){d(t)},onChange:function(e,n,t){}}))},M=function(e){var n=e.error,t=Object(S.a)(e,["error"]);return console.log(n),r.a.createElement(s.a,Object.assign({padding:2,bg:"orange.400"},t),n||"")},P=t(87),W=function(){var e,n,t=Object(a.useState)(),i=Object(l.a)(t,2),o=i[0],d=i[1],y=Object(a.useState)(!1),g=Object(l.a)(y,2),f=g[0],E=g[1];Object(a.useEffect)((function(){E(!1)}),[o]);var b=null===(e=window)||void 0===e?void 0:e.innerHeight,x=null===(n=window)||void 0===n?void 0:n.innerWidth,S=Object(m.a)(),w=S.isOpen,O=S.onClose,C=S.onOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{h:80,position:"relative"},r.a.createElement(h,{rightSection:r.a.createElement(c.a,{onClick:C,size:"md"},r.a.createElement(p.a,{name:"info-outline",mr:2})," How to use?")})),r.a.createElement(u.a,null,r.a.createElement(s.a,{flex:1},r.a.createElement(L,{setParsedData:d,width:x,height:b})),r.a.createElement(s.a,{flex:1,bg:"green.500",color:"white",position:"relative"},r.a.createElement(s.a,{position:"absolute",top:2,right:6},r.a.createElement(P.CopyToClipboard,{text:JSON.stringify(o,null,2),onCopy:function(){return E(!0)}},r.a.createElement(c.a,{size:"sm",variantColor:"blue"},r.a.createElement(p.a,{name:f?"check":"copy",mr:2})," Copy to clipboard"))),r.a.createElement("pre",{style:{overflowY:"scroll",height:b-80,padding:"10px",fontSize:"16px"}},JSON.stringify(o,null,2)))),r.a.createElement(v,{isOpen:w,onClose:O}))},N=t(35),U=t(222),B=t(231);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{theme:U.a},r.a.createElement(B.a,null),r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,n,t){"use strict";var a=t(201),r=t(7),i=t(202),o=t(66),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var s=l(t(203));function c(e,n,t){var a,r,i,o;try{if(t.value.type===s.Syntax.ArrayExpression||t.value.type===s.Syntax.UnaryExpression&&t.value.argument.type===s.Syntax.ArrayExpression||t.value.type===s.Syntax.CallExpression||t.value.type===s.Syntax.UnaryExpression&&t.value.argument.type===s.Syntax.CallExpression)return{type:m(n.name)};e.properties[t.key.name]={type:m(null===(a=n)||void 0===a?void 0:a.name)}}catch(l){throw new Error("Line ".concat(null===(o=null===(i=null===(r=t)||void 0===r?void 0:r.loc)||void 0===i?void 0:i.start)||void 0===o?void 0:o.line,": ").concat(l.message))}return e}var u=["s","string","i","integer","n","number","b","boolean"];function m(e){if(!u.includes(e))throw new Error("ssg error: '".concat(e,"' is not a valid data type"));return{s:"string",i:"integer",n:"number",b:"boolean"}[e]||e}function p(e,n,t){var a,r,i,l;if("!"===n.operator){if(e.required=[].concat(o((null===(a=e)||void 0===a?void 0:a.required)||[]),[t.key.name]),n.argument.type===s.Syntax.Identifier)return c(e,n.argument,t);if(n.argument.type===s.Syntax.ObjectExpression)return d(e,n.argument,t);if(n.argument.type===s.Syntax.ArrayExpression)return y(e,n.argument,t);if(n.argument.type===s.Syntax.CallExpression)return v(e,n.argument,t)}throw new Error("Line ".concat(null===(l=null===(i=null===(r=t)||void 0===r?void 0:r.loc)||void 0===i?void 0:i.start)||void 0===l?void 0:l.line,": Syntax error"))}function d(e,n,t){return t.value.type===s.Syntax.ArrayExpression||t.value.type===s.Syntax.UnaryExpression&&t.value.argument.type===s.Syntax.ArrayExpression||t.value.type===s.Syntax.CallExpression||t.value.type===s.Syntax.UnaryExpression&&t.value.argument.type===s.Syntax.CallExpression?i({type:"object"},n.properties.reduce(b,void 0)):(e.properties[t.key.name]=i({type:"object"},n.properties.reduce(b,void 0)),e)}function y(e,n,t){return e.properties[t.key.name]={type:"array",items:function(){var e=n.elements[0];if(!e)return{};switch(e.type){case s.Syntax.Identifier:return c({},e,t);case s.Syntax.ObjectExpression:return d({},e,t);case s.Syntax.CallExpression:return v(null,e,t)}}()},e}var g=["oneOf","allOf","anyOf","enumOf"],f=["string","s","number","n","integer","i"];function v(e,n,t){var o,l,u,m,p;if(!g.includes(n.callee.name))throw new Error("Line ".concat(null===(u=null===(l=null===(o=t)||void 0===o?void 0:o.loc)||void 0===l?void 0:l.start)||void 0===u?void 0:u.line,": '").concat(n.callee.name,"' is an invalid keyword"));if(g.includes(n.callee.name)){if(!e&&(t.value.type===s.Syntax.ArrayExpression||t.value.type===s.Syntax.UnaryExpression&&t.value.argument.type===s.Syntax.ArrayExpression))return r({},n.callee.name,n.arguments.map((function(e){return e.type===s.Syntax.Identifier?c({},e,t):e.type===s.Syntax.ObjectExpression?d({},e,t):void 0})));e.properties[t.key.name]=r({},n.callee.name,n.arguments.map((function(e){return e.type===s.Syntax.Identifier?c({},e,t):e.type===s.Syntax.ObjectExpression?d({},e,t):void 0})))}if(["enumOf"].includes(n.callee.name)){var y=a(n.arguments),v=y[0],E=y.slice(1);m=v.name,p=E.map((function(e){return e.value})),f.includes(m)&&p.forEach((function(e){if(!f.includes(typeof e))throw new Error("ssg error: enum type mismatch, expected type is ".concat(m))}));var b=E.map((function(e){if(e.type===s.Syntax.Literal)return e.value}));e.properties[t.key.name]=i({},c(void 0,v,t),{enum:b})}return e}function E(e){var n;return"undefined"===typeof e.required||(null===(n=e.required)||void 0===n?void 0:n.length)||delete e.required,e}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"object",required:[],properties:{}},n=arguments.length>1?arguments[1]:void 0;return n.value.type===s.Syntax.Identifier?E(c(e,n.value,n)):n.value.type===s.Syntax.UnaryExpression?E(p(e,n.value,n)):n.value.type===s.Syntax.ObjectExpression?E(d(e,n.value,n)):n.value.type===s.Syntax.ArrayExpression?y(e,n.value,n):n.value.type===s.Syntax.CallExpression?E(v(e,n.value,n)):void 0};n.ssgToOASParser=function(e){return s.parseScript("(".concat(e,")"),{loc:!1}).body[0].expression.properties.reduce(b,void 0)}},92:function(e,n,t){e.exports=t(220)},97:function(e,n,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.067247bc.chunk.js.map
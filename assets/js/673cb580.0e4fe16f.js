"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[707],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=c(n),s=a,k=u["".concat(i,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6905:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,p={unversionedId:"frontend/api/fetchOrder",id:"frontend/api/fetchOrder",title:"fetchOrder",description:"Constants",source:"@site/docs/frontend/api/fetchOrder.md",sourceDirName:"frontend/api",slug:"/frontend/api/fetchOrder",permalink:"/documentation/frontend/api/fetchOrder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fetchCategories",permalink:"/documentation/frontend/api/fetchCategories"},next:{title:"fetchProducts",permalink:"/documentation/frontend/api/fetchProducts"}},i={},c=[{value:"Constants",id:"constants",level:2},{value:"fetchOrder \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchorder--promiseobject",level:2},{value:"placeOrder \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"placeorder--promiseobject",level:2},{value:"getPaymentIntent \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"getpaymentintent--promiseobject",level:2}],d={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchOrder"},"fetchOrder")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch the order.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#placeOrder"},"placeOrder")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Place an order.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#getPaymentIntent"},"getPaymentIntent")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Get payment intent."))),(0,a.kt)("a",{name:"fetchOrder"}),(0,a.kt)("h2",{id:"fetchorder--promiseobject"},"fetchOrder \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch the order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")))),(0,a.kt)("a",{name:"placeOrder"}),(0,a.kt)("h2",{id:"placeorder--promiseobject"},"placeOrder \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Place an order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 201.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"order"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"The order data.")))),(0,a.kt)("a",{name:"getPaymentIntent"}),(0,a.kt)("h2",{id:"getpaymentintent--promiseobject"},"getPaymentIntent \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Get payment intent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 201.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The amount to be paid.")))))}m.isMDXComponent=!0}}]);
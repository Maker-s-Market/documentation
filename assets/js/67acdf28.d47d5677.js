"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6345],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2894:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"frontend/utils/PrivateRoute",id:"frontend/utils/PrivateRoute",title:"PrivateRoute",description:"PrivateRoute \u21d2 React.Component",source:"@site/docs/frontend/utils/PrivateRoute.md",sourceDirName:"frontend/utils",slug:"/frontend/utils/PrivateRoute",permalink:"/documentation/frontend/utils/PrivateRoute",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Utils",permalink:"/documentation/category/utils"},next:{title:"Router",permalink:"/documentation/frontend/utils/Router"}},p={},u=[{value:"PrivateRoute \u21d2 <code>React.Component</code>",id:"privateroute--reactcomponent",level:2}],c={toc:u},s="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"PrivateRoute"}),(0,o.kt)("h2",{id:"privateroute--reactcomponent"},"PrivateRoute \u21d2 ",(0,o.kt)("code",null,"React.Component")),(0,o.kt)("p",null,"PrivateRoute component.\nThis component is used to protect routes that require authentication.\nIf the user is authenticated, it renders the passed component.\nIf the user is not authenticated, it redirects to the signIn page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Returns"),": ",(0,o.kt)("code",null,"React.Component")," - - The Component if the user is authenticated, otherwise a Navigate component to the signIn page.  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Object")),(0,o.kt)("td",{parentName:"tr",align:null},"The properties passed to the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props.component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"React.Component")),(0,o.kt)("td",{parentName:"tr",align:null},"The component to render if the user is authenticated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"props.rest"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"Object")),(0,o.kt)("td",{parentName:"tr",align:null},"The rest of the properties passed to the component.")))))}m.isMDXComponent=!0}}]);
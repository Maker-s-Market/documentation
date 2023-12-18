"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},l="Sprint 2",o={unversionedId:"sprints/sprint-2",id:"sprints/sprint-2",title:"Sprint 2",description:"Duration",source:"@site/docs/sprints/sprint-2.md",sourceDirName:"sprints",slug:"/sprints/sprint-2",permalink:"/documentation/sprints/sprint-2",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sprint 1",permalink:"/documentation/sprints/sprint-1"},next:{title:"Sprint 3",permalink:"/documentation/sprints/sprint-3"}},p={},s=[{value:"Duration",id:"duration",level:2},{value:"Attendees",id:"attendees",level:2},{value:"Sprint Goal",id:"sprint-goal",level:2},{value:"Product Backlog Items (PBI)",id:"product-backlog-items-pbi",level:2},{value:"Planned PBI",id:"planned-pbi",level:3},{value:"Completed PBI",id:"completed-pbi",level:3},{value:"Incomplete PBI",id:"incomplete-pbi",level:3},{value:"Demonstrations",id:"demonstrations",level:2},{value:"Sprint Review",id:"sprint-review",level:2},{value:"Next Sprint Planning",id:"next-sprint-planning",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sprint-2"},"Sprint 2"),(0,i.kt)("h2",{id:"duration"},"Duration"),(0,i.kt)("p",null,"23 October 2023 to 05 November 2023"),(0,i.kt)("h2",{id:"attendees"},"Attendees"),(0,i.kt)("p",null,"Team Members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bruna Sim\xf5es"),(0,i.kt)("li",{parentName:"ul"},"Filipe Silveira"),(0,i.kt)("li",{parentName:"ul"},"Mariana Andrade",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Product Owner"))),(0,i.kt)("li",{parentName:"ul"},"Mateus Almeida",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Scrum Master"))),(0,i.kt)("li",{parentName:"ul"},"Vicente Barros")),(0,i.kt)("h2",{id:"sprint-goal"},"Sprint Goal"),(0,i.kt)("p",null,"For our second sprint, our goal was to fully develop authentication using AWS Cognito and implement the user features of editing profile and reviewing products listed on the website."),(0,i.kt)("h2",{id:"product-backlog-items-pbi"},"Product Backlog Items (PBI)"),(0,i.kt)("h3",{id:"planned-pbi"},"Planned PBI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MM-9 Edit Profile"),(0,i.kt)("li",{parentName:"ul"},"MM-4 Create an Account"),(0,i.kt)("li",{parentName:"ul"},"MM-15 Authenticate with email and password"),(0,i.kt)("li",{parentName:"ul"},"MM-17 Reset Password"),(0,i.kt)("li",{parentName:"ul"},"MM-20 View Personal Information"),(0,i.kt)("li",{parentName:"ul"},"MM-33 Check Reviews"),(0,i.kt)("li",{parentName:"ul"},"MM-29 Delete Review of Product"),(0,i.kt)("li",{parentName:"ul"},"MM-31 Create Review of Product"),(0,i.kt)("li",{parentName:"ul"},"MM-6 Authenticate with Third Party Services")),(0,i.kt)("h3",{id:"completed-pbi"},"Completed PBI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MM-9 Edit Profile"),(0,i.kt)("li",{parentName:"ul"},"MM-4 Create an Account"),(0,i.kt)("li",{parentName:"ul"},"MM-15 Authenticate with email and password"),(0,i.kt)("li",{parentName:"ul"},"MM-17 Reset Password"),(0,i.kt)("li",{parentName:"ul"},"MM-20 View Personal Information"),(0,i.kt)("li",{parentName:"ul"},"MM-33 Check Reviews"),(0,i.kt)("li",{parentName:"ul"},"MM-29 Delete Review of Product"),(0,i.kt)("li",{parentName:"ul"},"MM-31 Create Review of Product")),(0,i.kt)("h3",{id:"incomplete-pbi"},"Incomplete PBI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MM-6 Authenticate with Third Party Services")),(0,i.kt)("h2",{id:"demonstrations"},"Demonstrations"),(0,i.kt)("p",null,"The Sprint progressed almost linearly, with a steady completion of tasks. Only one User Story was carried on to the next sprint."),(0,i.kt)("p",null,"Below are the graphs extracted from Jira after concluding the sprint."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sprint Progress",src:n(3823).Z,width:"490",height:"130"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sprint Burndown",src:n(3915).Z,width:"499",height:"298"})),(0,i.kt)("h2",{id:"sprint-review"},"Sprint Review"),(0,i.kt)("p",null,"We successfully managed to complete the authentication feature, integrated with AWS Cognito and fully tested. However, we struggled to connect to third-party authentication tools, therefore that should be completed in the next sprint."),(0,i.kt)("p",null,"We also added the ability to add reviews to products, which was fully implemented on the frontend of the application."),(0,i.kt)("p",null,"For the next sprint, we will focus on completing any pending tasks and implementing user-end features such as the wishlist, as well as develop the admin dashboard for the admin role."),(0,i.kt)("h2",{id:"next-sprint-planning"},"Next Sprint Planning"),(0,i.kt)("p",null,"For the next sprint, our goal is to begin development on the admin dashboard, as well as implement user features such as the wishlist page and the following feature."))}c.isMDXComponent=!0},3915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint2_burndown-b8a6073ddf4e2aa06cecd228dd5a4b80.png"},3823:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint2_prog-9e9a874ddecfe8c42d8176343329510e.png"}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="Sprint 1",o={unversionedId:"sprints/sprint-1",id:"sprints/sprint-1",title:"Sprint 1",description:"Duration",source:"@site/docs/sprints/sprint-1.md",sourceDirName:"sprints",slug:"/sprints/sprint-1",permalink:"/documentation/sprints/sprint-1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sprint 0",permalink:"/documentation/sprints/sprint-0"},next:{title:"Sprint 2",permalink:"/documentation/sprints/sprint-2"}},p={},s=[{value:"Duration",id:"duration",level:2},{value:"Attendees",id:"attendees",level:2},{value:"Sprint Goal",id:"sprint-goal",level:2},{value:"Product Backlog Items (PBI)",id:"product-backlog-items-pbi",level:2},{value:"Planned PBI",id:"planned-pbi",level:3},{value:"Completed PBI",id:"completed-pbi",level:3},{value:"Incomplete PBI",id:"incomplete-pbi",level:3},{value:"Demonstrations",id:"demonstrations",level:2},{value:"Sprint Review",id:"sprint-review",level:2},{value:"Next Sprint Planning",id:"next-sprint-planning",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sprint-1"},"Sprint 1"),(0,a.kt)("h2",{id:"duration"},"Duration"),(0,a.kt)("p",null,"9 October 2023 to 22 October 2023"),(0,a.kt)("h2",{id:"attendees"},"Attendees"),(0,a.kt)("p",null,"Team Members"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bruna Sim\xf5es"),(0,a.kt)("li",{parentName:"ul"},"Filipe Silveira"),(0,a.kt)("li",{parentName:"ul"},"Mariana Andrade",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Scrum Master"))),(0,a.kt)("li",{parentName:"ul"},"Mateus Almeida"),(0,a.kt)("li",{parentName:"ul"},"Vicente Barros",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Product Owner")))),(0,a.kt)("h2",{id:"sprint-goal"},"Sprint Goal"),(0,a.kt)("p",null,"For our first sprint, we started the development of the project by creating a rough sketch of the database and the architecture, as well as starting the development of the frontend and backend of the project, by completing our epic ",(0,a.kt)("a",{parentName:"p",href:"https://es-proj.atlassian.net/browse/MM-58?atlOrigin=eyJpIjoiMjliMDhjOTBlNzEyNDg0Zjg5Nzk0M2Q1ZTdlY2Q3YzAiLCJwIjoiaiJ9"},'"MM-58: Product Management"'),"."),(0,a.kt)("p",null,"On the side, we also created the brand logo for our project and started exploring the AWS services that we will use/need for our project."),(0,a.kt)("h2",{id:"product-backlog-items-pbi"},"Product Backlog Items (PBI)"),(0,a.kt)("h3",{id:"planned-pbi"},"Planned PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MM-10 Create rough sketch of database"),(0,a.kt)("li",{parentName:"ul"},"MM-11 Create rough sketch of the architecture"),(0,a.kt)("li",{parentName:"ul"},"MM-19 Search a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-7 View Catalog"),(0,a.kt)("li",{parentName:"ul"},"MM-22 Filter Products"),(0,a.kt)("li",{parentName:"ul"},"MM-54 View Product"),(0,a.kt)("li",{parentName:"ul"},"MM-56 Create brand logo"),(0,a.kt)("li",{parentName:"ul"},"MM-36 Announce a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-43 Change a Product Attributes"),(0,a.kt)("li",{parentName:"ul"},"MM-41 Delete Product")),(0,a.kt)("h3",{id:"completed-pbi"},"Completed PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MM-10 Create rough sketch of database"),(0,a.kt)("li",{parentName:"ul"},"MM-11 Create rough sketch of the architecture"),(0,a.kt)("li",{parentName:"ul"},"MM-19 Search a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-7 View Catalog"),(0,a.kt)("li",{parentName:"ul"},"MM-22 Filter Products"),(0,a.kt)("li",{parentName:"ul"},"MM-54 View Product"),(0,a.kt)("li",{parentName:"ul"},"MM-56 Create brand logo"),(0,a.kt)("li",{parentName:"ul"},"MM-36 Announce a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-43 Change a Product Attributes"),(0,a.kt)("li",{parentName:"ul"},"MM-41 Delete Product")),(0,a.kt)("h3",{id:"incomplete-pbi"},"Incomplete PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")),(0,a.kt)("h2",{id:"demonstrations"},"Demonstrations"),(0,a.kt)("p",null,"Our Sprint Progress was made almost linearly, with the remaining work decreasing linearly."),(0,a.kt)("p",null,"All tasks are also confirmed to be totally made."),(0,a.kt)("p",null,"Following, the images made by Jira Software after the conclusion of a sprint."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sprint Progress",src:n(3600).Z,width:"885",height:"131"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sprint Burndown",src:n(9179).Z,width:"879",height:"429"})),(0,a.kt)("h2",{id:"sprint-review"},"Sprint Review"),(0,a.kt)("p",null,"We successfully managed to create the database schema, as well as introducing mock data to populate it and observe changes."),(0,a.kt)("p",null,"We also created different endpoints for product and category management, to comply with defined user stories."),(0,a.kt)("p",null,"Our frontend also encompasses different pages which display in a user friendly way methods to change and operate through products and categories alike."),(0,a.kt)("p",null,"In our next sprint, we should infer how we will implement authentication forms and how the chat should be implemented."),(0,a.kt)("h2",{id:"next-sprint-planning"},"Next Sprint Planning"),(0,a.kt)("p",null,"Since we faced issues in implementing authentication using the AWS Cognito, we cannot, as of now, infer about the next sprint, since it would highly revolve around user authentication and role management."))}d.isMDXComponent=!0},9179:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint1_burndown-67a9afd338cedf210b288da1d06eed07.png"},3600:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint1_prog-f1ec1b0b34a03e3128f891d547510ac0.png"}}]);
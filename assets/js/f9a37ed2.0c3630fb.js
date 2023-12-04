"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Sprint 1",l={unversionedId:"sprints/sprint-1",id:"sprints/sprint-1",title:"Sprint 1",description:"Duration",source:"@site/docs/sprints/sprint-1.md",sourceDirName:"sprints",slug:"/sprints/sprint-1",permalink:"/documentation/docs/sprints/sprint-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sprints/sprint-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sprint 0",permalink:"/documentation/docs/sprints/sprint-0"},next:{title:"Sprint 2",permalink:"/documentation/docs/sprints/sprint-2"}},s={},u=[{value:"Duration",id:"duration",level:2},{value:"Attendees",id:"attendees",level:2},{value:"Sprint Goal",id:"sprint-goal",level:2},{value:"Product Backlog Items (PBI)",id:"product-backlog-items-pbi",level:2},{value:"Planned PBI",id:"planned-pbi",level:3},{value:"Completed PBI",id:"completed-pbi",level:3},{value:"Incomplete PBI",id:"incomplete-pbi",level:3},{value:"Demonstrations",id:"demonstrations",level:2},{value:"Next Sprint",id:"next-sprint",level:2},{value:"Conclusions",id:"conclusions",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sprint-1"},"Sprint 1"),(0,a.kt)("h2",{id:"duration"},"Duration"),(0,a.kt)("p",null,"9 October 2023 to 22 October 2023"),(0,a.kt)("h2",{id:"attendees"},"Attendees"),(0,a.kt)("p",null,"Team Members"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bruna Sim\xf5es"),(0,a.kt)("li",{parentName:"ul"},"Filipe Silveira"),(0,a.kt)("li",{parentName:"ul"},"Mariana Andrade",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Scrum Master"))),(0,a.kt)("li",{parentName:"ul"},"Mateus Almeida"),(0,a.kt)("li",{parentName:"ul"},"Vicente Barros",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Product Owner")))),(0,a.kt)("h2",{id:"sprint-goal"},"Sprint Goal"),(0,a.kt)("p",null,"For our first sprint, we started the development of the project by creating a rough sketch of the database and the architecture, as well as starting the development of the frontend and backend of the project, by completing our epic ",(0,a.kt)("a",{parentName:"p",href:"https://es-proj.atlassian.net/browse/MM-58?atlOrigin=eyJpIjoiMjliMDhjOTBlNzEyNDg0Zjg5Nzk0M2Q1ZTdlY2Q3YzAiLCJwIjoiaiJ9"},'"MM-58: Product Management"'),"."),(0,a.kt)("p",null,"On the side, we also created the brand logo for our project and started exploring the AWS services that we will use/need for our project."),(0,a.kt)("h2",{id:"product-backlog-items-pbi"},"Product Backlog Items (PBI)"),(0,a.kt)("h3",{id:"planned-pbi"},"Planned PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MM-10 Create rough sketch of database"),(0,a.kt)("li",{parentName:"ul"},"MM-11 Create rough sketch of the architecture"),(0,a.kt)("li",{parentName:"ul"},"MM-19 Search a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-7 View Catalog"),(0,a.kt)("li",{parentName:"ul"},"MM-22 Filter Products"),(0,a.kt)("li",{parentName:"ul"},"MM-54 View Product"),(0,a.kt)("li",{parentName:"ul"},"MM-56 Create brand logo"),(0,a.kt)("li",{parentName:"ul"},"MM-36 Announce a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-43 Change a Product Attributes"),(0,a.kt)("li",{parentName:"ul"},"MM-41 Delete Product")),(0,a.kt)("h3",{id:"completed-pbi"},"Completed PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MM-10 Create rough sketch of database"),(0,a.kt)("li",{parentName:"ul"},"MM-11 Create rough sketch of the architecture"),(0,a.kt)("li",{parentName:"ul"},"MM-19 Search a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-7 View Catalog"),(0,a.kt)("li",{parentName:"ul"},"MM-22 Filter Products"),(0,a.kt)("li",{parentName:"ul"},"MM-54 View Product"),(0,a.kt)("li",{parentName:"ul"},"MM-56 Create brand logo"),(0,a.kt)("li",{parentName:"ul"},"MM-36 Announce a Product"),(0,a.kt)("li",{parentName:"ul"},"MM-43 Change a Product Attributes"),(0,a.kt)("li",{parentName:"ul"},"MM-41 Delete Product")),(0,a.kt)("h3",{id:"incomplete-pbi"},"Incomplete PBI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")),(0,a.kt)("h2",{id:"demonstrations"},"Demonstrations"),(0,a.kt)("p",null,"Our Sprint Progress was made almost linearly, with the remaining work decreasing linearly."),(0,a.kt)("p",null,"All tasks are also confirmed to be totally made."),(0,a.kt)("p",null,"Following, the images made by Jira Software after the conclusion of a sprint."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sprint Progress",src:n(1864).Z,width:"885",height:"131"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sprint Burndown",src:n(7808).Z,width:"879",height:"429"})),(0,a.kt)("h2",{id:"next-sprint"},"Next Sprint"),(0,a.kt)("p",null,"Since we faced issues in implementing authentication using the AWS Cognito, we cannot, as of now, infer about the next sprint, since it would highly revolve around user authentication and role management."),(0,a.kt)("h2",{id:"conclusions"},"Conclusions"),(0,a.kt)("p",null,"We successfully managed to create the database schema, as well as introducing mock data to populate it and observe changes."),(0,a.kt)("p",null,"We also created different endpoints for product and category management, to comply with defined user stories."),(0,a.kt)("p",null,"Our frontend also encompasses different pages which display in a user friendly way methods to change and operate through products and categories alike."),(0,a.kt)("p",null,"In our next sprint, we should infer how we will implement authentication forms and how the chat should be implemented."))}d.isMDXComponent=!0},7808:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint1_burndown-67a9afd338cedf210b288da1d06eed07.png"},1864:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sprint1_prog-f1ec1b0b34a03e3128f891d547510ac0.png"}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o="Architecture - V2",c={unversionedId:"arch_tech/architecture_v2",id:"arch_tech/architecture_v2",title:"Architecture - V2",description:"Description",source:"@site/docs/arch_tech/architecture_v2.md",sourceDirName:"arch_tech",slug:"/arch_tech/architecture_v2",permalink:"/documentation/arch_tech/architecture_v2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture - V1",permalink:"/documentation/arch_tech/architecture_v1"},next:{title:"Database",permalink:"/documentation/category/database"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Diagram",id:"diagram",level:2},{value:"CloudWatch Dashboard",id:"cloudwatch-dashboard",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture---v2"},"Architecture - V2"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is the second version of the architecture. It is a more complete and complex version. In this version, we have added the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"VPC"),": The VPC is used to isolate the application from the rest of the internet. It is also used to create a private subnet for the database.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Cognito"),": Cognito is used to manage the users of the application, by providing authentication and authorization. With cognito we also added third party authentication providers such as Google.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Domain Name"),": The domain name, created with ",(0,n.kt)("a",{parentName:"p",href:"https://www.dominios.pt/"},"Dominios PT"),", is used to provide a friendly URL for our application.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Certificate Manager"),": The certificate manager was used to generate a SSL certificate for our domain ",(0,n.kt)("a",{parentName:"p",href:"https://makers-market.pt"},"Makers Market"),". This certificate is used by the Application Load Balancer to secure the application."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CloudWatch"),": CloudWatch is used to monitor the health of the ECS Tasks by providing logs for our frontend and backend. We also added a CloudWatch dashboard to monitor the overall health of the application and the infrastructure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Lambda"),": Lambda is used to simulate our delivery service. It is responsible for sending timed requests to the backend to update the status of the orders.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Third Party Services"),": We have added two third party services to our application. The first one is ",(0,n.kt)("a",{parentName:"p",href:"https://stripe.com/"},"Stripe"),", which is used to handle the payments. The second one is ",(0,n.kt)("a",{parentName:"p",href:"https://resend.com/"},"Resend"),", which is used to send emails to the users regarding the status of their orders.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ECR"),": ECR is used to store the Docker images of our frontend and backend on private repositories.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ECS"),": ECS is used to run our frontend and backend as Docker containers. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Application Load Balancer"),": The application load balancer is used to distribute the incoming traffic to the ECS Services that are hosting the frontend and the backend.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Terraform"),": Terraform is used to automate the creation of the infrastructure and the deployment of the application."))),(0,n.kt)("p",null,"For the arquitecture of the application we made the error of having the ECS Services and ECR in the public subnet. This is a security risk and we should have placed them in the private subnet. To correct this we had to correct our Terraform script to place the ECS Services and ECR in the private subnet."),(0,n.kt)("h2",{id:"diagram"},"Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture Diagram",src:r(6130).Z,width:"7383",height:"4767"})),(0,n.kt)("h2",{id:"cloudwatch-dashboard"},"CloudWatch Dashboard"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"CloudWatch Dashboard",src:r(877).Z,width:"1817",height:"788"})))}u.isMDXComponent=!0},6130:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Architecture_V3-a04525d2080bd6ad2305d0006d58bbfd.png"},877:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/MakersWatch-631259975af48cc63a9bb8d7dfef8315.png"}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6684],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},i="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),i=u(r),s=a,m=i["".concat(p,".").concat(s)]||i[s]||k[s]||l;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[i]="string"==typeof t?t:a,o[1]=d;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},293:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,d={unversionedId:"frontend/api/fetchProducts",id:"frontend/api/fetchProducts",title:"fetchProducts",description:"Constants",source:"@site/docs/frontend/api/fetchProducts.md",sourceDirName:"frontend/api",slug:"/frontend/api/fetchProducts",permalink:"/documentation/frontend/api/fetchProducts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fetchOrder",permalink:"/documentation/frontend/api/fetchOrder"},next:{title:"fetchRatings",permalink:"/documentation/frontend/api/fetchRatings"}},p={},u=[{value:"Constants",id:"constants",level:2},{value:"fetchProductById \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchproductbyid--promiseobject",level:2},{value:"fetchTopProducts \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchtopproducts--promiseobject",level:2},{value:"fetchProductsByCategory \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchproductsbycategory--promiseobject",level:2},{value:"searchProducts \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"searchproducts--promiseobject",level:2},{value:"addProduct \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"addproduct--promiseobject",level:2},{value:"deleteProduct \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"deleteproduct--promiseobject",level:2},{value:"editProduct \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"editproduct--promiseobject",level:2},{value:"editProductAvailability \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"editproductavailability--promiseobject",level:2},{value:"fetchUserProducts \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchuserproducts--promiseobject",level:2},{value:"fetchProductsReviewRatings \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"fetchproductsreviewratings--promiseobject",level:2}],c={toc:u},i="wrapper";function k(t){let{components:e,...r}=t;return(0,a.kt)(i,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"constants"},"Constants"),(0,a.kt)("dl",null,(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchProductById"},"fetchProductById")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch a product by id.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchTopProducts"},"fetchTopProducts")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch top products.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchProductsByCategory"},"fetchProductsByCategory")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch products by category.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#searchProducts"},"searchProducts")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Search products.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#addProduct"},"addProduct")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Add a product.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#deleteProduct"},"deleteProduct")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Delete a product by id.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#editProduct"},"editProduct")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Edit a product.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#editProductAvailability"},"editProductAvailability")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Edit product availability.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchUserProducts"},"fetchUserProducts")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch user's products.")),(0,a.kt)("dt",null,(0,a.kt)("a",{href:"#fetchProductsReviewRatings"},"fetchProductsReviewRatings")," \u21d2 ",(0,a.kt)("code",null,"Promise.<Object>")),(0,a.kt)("dd",null,(0,a.kt)("p",null,"Fetch products review ratings."))),(0,a.kt)("a",{name:"fetchProductById"}),(0,a.kt)("h2",{id:"fetchproductbyid--promiseobject"},"fetchProductById \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch a product by id."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the product.")))),(0,a.kt)("a",{name:"fetchTopProducts"}),(0,a.kt)("h2",{id:"fetchtopproducts--promiseobject"},"fetchTopProducts \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch top products."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},"The number of top products to fetch.")))),(0,a.kt)("a",{name:"fetchProductsByCategory"}),(0,a.kt)("h2",{id:"fetchproductsbycategory--promiseobject"},"fetchProductsByCategory \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch products by category."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"category"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The category of the products.")))),(0,a.kt)("a",{name:"searchProducts"}),(0,a.kt)("h2",{id:"searchproducts--promiseobject"},"searchProducts \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Search products."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The search query.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"categoryId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the category.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The sort order.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discount"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to include discounted products.")))),(0,a.kt)("a",{name:"addProduct"}),(0,a.kt)("h2",{id:"addproduct--promiseobject"},"addProduct \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Add a product."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 201.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"product"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"The product data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"photo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"File")),(0,a.kt)("td",{parentName:"tr",align:null},"The product photo.")))),(0,a.kt)("a",{name:"deleteProduct"}),(0,a.kt)("h2",{id:"deleteproduct--promiseobject"},"deleteProduct \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Delete a product by id."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the product.")))),(0,a.kt)("a",{name:"editProduct"}),(0,a.kt)("h2",{id:"editproduct--promiseobject"},"editProduct \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Edit a product."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the product.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"product"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"The new product data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"photo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"File")),(0,a.kt)("td",{parentName:"tr",align:null},"The new product photo.")))),(0,a.kt)("a",{name:"editProductAvailability"}),(0,a.kt)("h2",{id:"editproductavailability--promiseobject"},"editProductAvailability \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Edit product availability."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the product.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"availability"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"The new availability status.")))),(0,a.kt)("a",{name:"fetchUserProducts"}),(0,a.kt)("h2",{id:"fetchuserproducts--promiseobject"},"fetchUserProducts \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch user's products."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")))),(0,a.kt)("a",{name:"fetchProductsReviewRatings"}),(0,a.kt)("h2",{id:"fetchproductsreviewratings--promiseobject"},"fetchProductsReviewRatings \u21d2 ",(0,a.kt)("code",null,"Promise.","<","Object",">")),(0,a.kt)("p",null,"Fetch products review ratings."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global constant",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Promise.","<","Object",">")," - The response data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Throws"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("code",null,"Error")," If the response status is not 200.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"The authorization token.")))))}k.isMDXComponent=!0}}]);
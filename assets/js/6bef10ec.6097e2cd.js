"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=d(a),u=n,h=l["".concat(p,".").concat(u)]||l[u]||c[u]||s;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:3},o="Database model - V2",i={unversionedId:"arch_tech/database_v2",id:"arch_tech/database_v2",title:"Database model - V2",description:"Description",source:"@site/docs/arch_tech/database_v2.md",sourceDirName:"arch_tech",slug:"/arch_tech/database_v2",permalink:"/documentation/docs/arch_tech/database_v2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/arch_tech/database_v2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Database model - V1",permalink:"/documentation/docs/arch_tech/database_v1"},next:{title:"Definitions",permalink:"/documentation/docs/category/definitions"}},p={},d=[{value:"Description",id:"description",level:2},{value:"User",id:"user",level:3},{value:"Product",id:"product",level:3},{value:"Category",id:"category",level:3},{value:"Followers",id:"followers",level:3},{value:"Wishlist",id:"wishlist",level:3},{value:"Review",id:"review",level:3},{value:"Rating Product",id:"rating-product",level:3},{value:"Rating User",id:"rating-user",level:3},{value:"Order",id:"order",level:3},{value:"Order Item",id:"order-item",level:3},{value:"Diagram",id:"diagram",level:2}],m={toc:d},l="wrapper";function c(e){let{components:t,...s}=e;return(0,n.kt)(l,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"database-model---v2"},"Database model - V2"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"To attend to all users\u2019 stories, our database schema was refactored to attend to these needs, adding some parameters and refactoring others.\nBelow, a further description of these entities is performed."),(0,n.kt)("h3",{id:"user"},"User"),(0,n.kt)("p",null,'Our platform is expected to receive many users, which are divided mainly in "sellers" and "consumers" (',(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"role")),"). Additionally, our platform has an admin which can perform higher operations to the database and other system's aspects.\nParameters such as ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"name")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"email")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"username")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"city")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"region"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"photo"))," are essential to register a user in the platform, as well as provide a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"password"))," (which will be posteriorly hashed) to secure their data."),(0,n.kt)("p",null,"A user can simultaneously be a seller and a buyer. The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"role"))," parameter, which can accept only values \u201cclient\u201d and \u201cpremium\u201d, denominates if a user is, respectively, a regular user, or a premium user, with enhanced privileges. Regular users cannot add more than five products, while premium users can add an unlimited number of products to sell. "),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"avg_rating"))," is specific to each user and is a calculated average of the ratings made by other users."),(0,n.kt)("p",null,"Additionally, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"wishlist_id"))," stores the id of the Wishlist specific to user, which stores products the user is interested in, but has no intention of buying them yet."),(0,n.kt)("p",null,"According to GDPR a user's data shall not be completely deleted from the system, and if for any reason there surges the need, may have their account disabled and unable to register again (unless there is administrator intervention). Therefore, the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"is_active"))," variable stores information (true or false) whether a user can register in the platform or is forbidden to do so."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a user is created and updated, respectively."),(0,n.kt)("h3",{id:"product"},"Product"),(0,n.kt)("p",null,"A product is an item sold by a person to another. It consists of the value being transmitted from the consumer to the seller."),(0,n.kt)("p",null,"A product has parameters, such as a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"name"))," (as in, a title), a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"description"))," of the product and a certain base ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"price")),".\nDepending on its characteristics, a product has the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"stockable"))," tag as true or false depending on if it has available stock (for example, a premade amount of the same product) or not (the product is made upon a user request it be made)."),(0,n.kt)("p",null,"In case the product has the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"stockable"))," tag as true, the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"stock"))," variable stores the amount of available stock in each moment. Else, it is defaulted to 0."),(0,n.kt)("p",null,"The product also has a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"discount"))," parameter which is by default 0. The final price of the product is dependent on the discount. "),(0,n.kt)("p",null,"For example, if a product has a base price of 20$, and a discount of 25, the final displayed price would be 20",(0,n.kt)("em",{parentName:"p"},"(100-25)"),"0.01, which is equal, in this case, to 15$."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"available"))," tag denotes whether a product is available to be sold or not. Case is true, the product is available to be sold and displayed to users. Only the corresponding user can change this attribute."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"avg_rating"))," is the average rating given to a product and is based on other user\u2019s rating on the specified product."),(0,n.kt)("p",null,"Each time a product is visited, its number of views (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"number_views")),") increase by one. At the insertion moment of the insertion of the product in the database, the number of views is 0, and each time a user visits a product, its number of views is increased. This is particularly useful to sort product by relevance since the products with more views are more relevant to other users."),(0,n.kt)("p",null,"A product may also have an associated photo or image(",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"image")),") to visually appeal to users and let them know of the product's expected appearance."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a product is created and updated by the consumer, respectively."),(0,n.kt)("p",null,"Each product is also associated with the user that sells it, using a user's ID number, ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user_id")),". "),(0,n.kt)("h3",{id:"category"},"Category"),(0,n.kt)("p",null,"A category is an entity that encapsules different products based on their common properties. It should be modified/created only by the administrator."),(0,n.kt)("p",null,"The common property between products is stored as the category's ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"name")),", which could be, for example, Home Decoration. All products related to Home Decoration are stored in this category."),(0,n.kt)("p",null,"Additionally, a ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"slug"))," is also stored, that is,\nan identifier for our API to better search the different categories. --TBD CHECK THIS"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"icon"))," is associated with each created category to help users search visually the different categories without having to read the whole text name."),(0,n.kt)("p",null,"Each time a category is visited, the number of views (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"number_views")),") is updated by one. Upon creation, this value is 0. Its main purpose is to help users better navigate the platform and present them with the most popular categories."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a category is created and updated by the administrator, respectively. "),(0,n.kt)("h3",{id:"followers"},"Followers"),(0,n.kt)("p",null,"To create greater confidence and recognition from consumers to sellers, we implemented a follower feature, in which consumers can follow a certain seller and immediately know their new available products and other news.\nTherefore, the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"follower_id"))," should always belong to a consumer and the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"followed_id"))," should always belong to a seller."),(0,n.kt)("h3",{id:"wishlist"},"Wishlist"),(0,n.kt)("p",null,"Consumers can add certain products to a wish list, to order them later.  "),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a Wishlist is created and updated by the consumer, respectively."),(0,n.kt)("h3",{id:"review"},"Review"),(0,n.kt)("p",null,"To let other users know about their satisfaction with a certain product, users can place a review in a product they've ordered before."),(0,n.kt)("p",null,"The review consists of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"text"))," describing, by the consumer (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user_id")),"), their experience with the product they ordered (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"product_id")),")."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a review is created and updated by the consumer, respectively."),(0,n.kt)("h3",{id:"rating-product"},"Rating Product"),(0,n.kt)("p",null,"Additionally, besides a review, a user (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user_id")),") can rate a product (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"product_id")),"), in a scale from 1 (if it's not a good product) to 5 (very satisfied with a product), stored by the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"rating"))," column. "),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a rating is created and updated by the consumer, respectively."),(0,n.kt)("h3",{id:"rating-user"},"Rating User"),(0,n.kt)("p",null,"The user (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user_id")),") can also rate another user (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"rated_user_id")),"), in a scale from 1 (seller did not provide a good service) to 5 (seller was always helpful), stored by the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"rating"))," column. "),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a rating is created and updated by the user, respectively."),(0,n.kt)("h3",{id:"order"},"Order"),(0,n.kt)("p",null,"The user (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user_id")),"), can place an order. This order, when placed, is defaulted with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"status"))," \u201caccepted\u201d, and changes to \u201cin_expedition\u201d and \u201cdelivered\u201d as the order progresses.\nThe ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"total_quantity"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"total_price"))," denote, respectively, the total number of products in the order and total order price.\nThe ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"created_at"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"updated_at"))," variables store the timestamp at which a rating is created and updated by the user, respectively."),(0,n.kt)("h3",{id:"order-item"},"Order Item"),(0,n.kt)("p",null,"The order item is an instance of the order, mapped by ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"order_id")),". It represents one distinct product (",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"product_id")),") in the order and stores the amount of product to be bough in the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"quantity"))," column."),(0,n.kt)("h2",{id:"diagram"},"Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Database Diagram",src:a(9414).Z,width:"2946",height:"2382"})))}c.isMDXComponent=!0},9414:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/makers_db_v2-66582b47134dc0251588bf5867999d31.png"}}]);
(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{17:function(e,t,r){"use strict";var a=r(2);t.a=function(e){let{title:t}=e;return Object(a.jsx)("button",{children:t})}},21:function(e,t,r){"use strict";var a=r(0);t.a=()=>{const[e,t]=Object(a.useState)(localStorage.theme),r="dark"===e?"light":"dark";return Object(a.useEffect)((()=>{const t=window.document.documentElement;t.classList.remove(r),t.classList.add(e),localStorage.setItem("theme",e)}),[e,r]),[r,t]}},24:function(e,t,r){},27:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);r(24);var a=r(38),s=r(0),l=r(13),c=r(4);var d=()=>{const{pathname:e}=Object(c.l)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},i=r(7),n=r(2);var o=function(){return Object(n.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(n.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9",Object(n.jsx)("a",{href:"https://Haris.me",target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Haris"})]})})};const m=[{id:2,icon:Object(n.jsx)(i.e,{}),url:"https://github.com/MHarisAshfaq"},{id:3,icon:Object(n.jsx)(i.p,{}),url:"https://twitter.com/MHarisAshfaq"},{id:4,icon:Object(n.jsx)(i.g,{}),url:"https://www.linkedin.com/in/muhammad-haris-ashfaq"}];var x=()=>Object(n.jsx)("div",{className:"container mx-auto",children:Object(n.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(n.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(n.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(n.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((e=>Object(n.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(n.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)))})]}),Object(n.jsx)(o,{})]})}),b=r(21),j=r(37),h=r(17);const g=["Web Application","Mobile Application","UI/UX Design","Branding"];var p=e=>{let{onClose:t,onRequest:r}=e;return Object(n.jsxs)(j.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(n.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(n.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(n.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(n.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(n.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(n.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"What project are you looking for?"}),Object(n.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(n.jsx)(i.q,{className:"text-3xl"})})]}),Object(n.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(n.jsxs)("form",{onSubmit:e=>{e.preventDefault()},className:"max-w-xl m-4 text-left",children:[Object(n.jsx)("div",{className:"",children:Object(n.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})}),Object(n.jsx)("div",{className:"mt-6",children:Object(n.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})}),Object(n.jsx)("div",{className:"mt-6",children:Object(n.jsx)("select",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category",children:g.map((e=>Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))})}),Object(n.jsx)("div",{className:"mt-6",children:Object(n.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})}),Object(n.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(n.jsx)("span",{onClick:t,type:"submit",className:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(n.jsx)(h.a,{title:"Send Request"})})})]})}),Object(n.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(n.jsx)("span",{onClick:t,type:"button",className:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(n.jsx)(h.a,{title:"Close"})})})]})})})]})},u=r.p+"static/media/logo-light.5eb230d4.png",y=r.p+"static/media/logo-dark.55b17626.png";var k=()=>{const[e,t]=Object(s.useState)(!1),[r,a]=Object(s.useState)(!1),[c,d]=Object(b.a)();function o(){r?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),a(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),a(!0))}return Object(n.jsxs)(j.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(n.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(n.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{to:"/",children:"dark"===c?Object(n.jsx)("img",{src:y,className:"w-36",alt:"Dark Logo"}):Object(n.jsx)("img",{src:u,className:"w-36",alt:"Dark Logo"})})}),Object(n.jsx)("div",{onClick:()=>d(c),"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===c?Object(n.jsx)(i.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(n.jsx)(i.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(n.jsx)("div",{className:"sm:hidden",children:Object(n.jsx)("button",{onClick:function(){t(!e)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:e?Object(n.jsx)(i.q,{className:"text-3xl"}):Object(n.jsx)(i.j,{className:"text-3xl"})})})})]}),Object(n.jsxs)("div",{className:e?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(n.jsx)(l.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(n.jsx)(l.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(n.jsx)(l.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"}),Object(n.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(n.jsx)("span",{onClick:o,className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(n.jsx)(h.a,{title:"Hire Me"})})})]}),Object(n.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(n.jsx)(l.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(n.jsx)(l.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"})]}),Object(n.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(n.jsx)("div",{className:"hidden md:flex",children:Object(n.jsx)("span",{onClick:o,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(n.jsx)(h.a,{title:"Hire Me"})})}),Object(n.jsx)("div",{onClick:()=>d(c),"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===c?Object(n.jsx)(i.k,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(n.jsx)(i.n,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(n.jsxs)("div",{children:[r?Object(n.jsx)(p,{onClose:o,onRequest:o}):null,r?o:null]})]})};r(27);var O=()=>{const[e,t]=Object(s.useState)(!1);Object(s.useEffect)((()=>(window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)})));const r=()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)};return window.addEventListener("scroll",r),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(i.b,{className:"scrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:e?"flex":"none",padding:5}})})};const f=Object(s.lazy)((()=>r.e(6).then(r.bind(null,51)))),v=Object(s.lazy)((()=>r.e(7).then(r.bind(null,53)))),w=Object(s.lazy)((()=>r.e(3).then(r.bind(null,54)))),N=Object(s.lazy)((()=>r.e(4).then(r.bind(null,49)))),C=Object(s.lazy)((()=>r.e(5).then(r.bind(null,52))));var M=function(){return Object(n.jsx)(a.a,{children:Object(n.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d,{}),Object(n.jsx)(k,{}),Object(n.jsx)(s.Suspense,{fallback:"",children:Object(n.jsxs)(c.c,{children:[Object(n.jsx)(c.a,{path:"/",element:Object(n.jsx)(w,{})}),Object(n.jsx)(c.a,{path:"projects",element:Object(n.jsx)(N,{})}),Object(n.jsx)(c.a,{path:"projects/single-project",element:Object(n.jsx)(C,{})}),Object(n.jsx)(c.a,{path:"about",element:Object(n.jsx)(f,{})}),Object(n.jsx)(c.a,{path:"contact",element:Object(n.jsx)(v,{})})]})}),Object(n.jsx)(x,{})]}),Object(n.jsx)(O,{})]})})};var S=e=>{e&&e instanceof Function&&r.e(8).then(r.bind(null,50)).then((t=>{let{getCLS:r,getFID:a,getFCP:s,getLCP:l,getTTFB:c}=t;r(e),a(e),s(e),l(e),c(e)}))},q=r(23);const E=document.getElementById("root");Object(q.createRoot)(E).render(Object(n.jsx)(M,{})),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.396f2edf.chunk.js.map
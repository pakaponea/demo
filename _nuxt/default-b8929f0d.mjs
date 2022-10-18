import{_ as k,i as M,r as $,e as o,o as _,c as w,g as n,a as t,w as a,F as C,k as D,f as y,b as x,t as S,m as j,u as P,n as A,l as T,j as V,d as B}from"./entry-64384bfb.mjs";var F=[{title:"Dashboard",icon:"mdi-view-dashboard-outline",to:"/"},{title:"Alerts",icon:"mdi-alert-circle-outline",to:"/alerts"},{title:"Buttons",icon:"mdi-radiobox-blank",to:"/buttons"},{title:"Cards",icon:"mdi-card-outline",to:"/cards"},{title:"Carousel",icon:"mdi-form-dropdown",to:"/carousel"},{title:"Tables",icon:"mdi-table",to:"/tables"}];const N=M({__name:"Sidebar",setup(c,{expose:s}){s();const e={sidebarMenu:$(F)};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),J={class:"scrollnavbar"},H={class:"profile"},L={class:"profile-pic"},O=n("img",{src:"/images/users/user2.jpg",width:"50",alt:"Julia"},null,-1),U=n("div",{class:"profile-name"},[n("h5",null,"Jonathan Deo")],-1),z={class:"pa-4 ma-4 bg-light-primary rounded-lg text-center"},E=n("img",{src:"/images/sidebar-buynow-bg.svg"},null,-1),I=n("h4",{class:"font-weight-regular mb-3"},"Get Template for Free",-1),W=x("Download Free"),G=x("Check Pro");function q(c,s,l,e,b,g){const i=o("v-avatar"),d=o("v-icon"),u=o("v-list-item-avatar"),m=o("v-list-item-title"),v=o("v-list-item"),r=o("v-list"),p=o("v-btn");return _(),w("div",null,[n("div",J,[n("div",H,[n("div",L,[t(i,{size:"45"},{default:a(()=>[O]),_:1})]),U]),t(r,{class:"pa-4"},{default:a(()=>[(_(!0),w(C,null,D(e.sidebarMenu,(f,h)=>(_(),y(v,{key:h,to:f.to,rounded:"lg",class:"mb-1"},{default:a(()=>[t(u,{start:"",class:"v-list-item-avatar--start"},{default:a(()=>[t(d,null,{default:a(()=>[x(S(f.icon),1)]),_:2},1024)]),_:2},1024),t(m,{textContent:S(f.title)},null,8,["textContent"])]),_:2},1032,["to"]))),128))]),_:1}),n("div",z,[E,I,t(p,{class:"mb-2",href:"https://www.wrappixel.com/templates/materialpro-free-nuxtjs-admin-template/",block:""},{default:a(()=>[W]),_:1}),t(p,{color:"primary",href:"https://www.wrappixel.com/templates/materialpro-nuxtjs/",block:""},{default:a(()=>[G]),_:1})])])])}var K=k(N,[["render",q]]);const Q={__name:"Header",setup(c,{expose:s}){s();const e={userprofile:$([{title:"My Profile",desc:"Account Settings"},{title:"My Inbox",desc:"Messages & Emails"},{title:"My Tasks",desc:"To-do and Daily Tasks"}])};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},R=n("img",{src:"/images/users/user2.jpg",width:"35",alt:"Julia"},null,-1),X=x("Logout");function Y(c,s,l,e,b,g){const i=o("v-avatar"),d=o("v-btn"),u=o("v-list-item"),m=o("v-list"),v=o("v-menu");return _(),y(v,{anchor:"bottom end",origin:"auto","min-width":"300"},{activator:a(({props:r})=>[t(d,j(r,{class:"pa-0 px-1",elevation:"0",color:"transparent",plain:"",ripple:!1}),{default:a(()=>[t(i,{size:"35"},{default:a(()=>[R]),_:1})]),_:2},1040)]),default:a(()=>[t(m,{class:"pa-6",elevation:"10",rounded:"lg"},{default:a(()=>[(_(!0),w(C,null,D(e.userprofile,(r,p)=>(_(),y(u,{class:"pa-3 mb-2",key:p,value:r,title:r.title,subtitle:r.desc,rounded:"lg"},null,8,["value","title","subtitle"]))),128)),t(d,{block:"",color:"secondary",variant:"tonal",class:"mt-4 py-4"},{default:a(()=>[X]),_:1})]),_:1})]),_:1})}var Z=k(Q,[["render",Y]]);const ee=M({__name:"default",setup(c,{expose:s}){s(),P({title:"MaterialPro Free NuxtJs 3  Dashboard"});const l=$(!0),e=window.innerWidth,{mdAndUp:b,mdAndDown:g}=A();T(()=>{e<950&&(l.value=!l.value)});const i={drawer:l,innerW:e,mdAndUp:b,mdAndDown:g,Sidebar:K,Header:Z};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),te={class:"pe-5"},oe=n("img",{src:"/images/logos/white-logo-icon.svg"},null,-1),ae=n("img",{src:"/images/logos/white-logo-text.svg",class:"pl-3"},null,-1);function ne(c,s,l,e,b,g){const i=B,d=o("v-app-bar-nav-icon"),u=o("v-spacer"),m=o("v-app-bar"),v=o("v-navigation-drawer"),r=o("v-container"),p=o("v-main"),f=o("v-app");return _(),w("div",null,[t(f,null,{default:a(()=>[t(m,{elevation:"0",color:"primary"},{default:a(()=>[n("div",te,[t(i,{to:"/",class:"d-flex"},{default:a(()=>[oe,ae]),_:1})]),t(d,{class:"",onClick:s[0]||(s[0]=h=>e.drawer=!e.drawer)}),t(u),t(e.Header)]),_:1}),t(p,null,{default:a(()=>[t(v,{left:"",permanent:e.mdAndUp,elevation:"10",app:"",temporary:e.mdAndDown,modelValue:e.drawer,"onUpdate:modelValue":s[1]||(s[1]=h=>e.drawer=h),"expand-on-hover":""},{default:a(()=>[t(e.Sidebar)]),_:1},8,["permanent","temporary","modelValue"]),t(r,{fluid:"",class:"page-wrapper"},{default:a(()=>[V(c.$slots,"default")]),_:3})]),_:3})]),_:3})])}var re=k(ee,[["render",ne]]);export{re as default};

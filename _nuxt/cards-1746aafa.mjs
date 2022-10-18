import{B as H}from"./BaseCard-8ed7a36e.mjs";import{_ as g,e as o,o as l,f as p,w as e,b as c,i as j,r as w,c as B,a as t,F as D,k as P,g as i,t as W,h as O}from"./entry-64384bfb.mjs";const Y={};function A(d,_){const a=o("v-card");return l(),p(a,{title:"This is a title",subtitle:"This is a subtitle",text:"This is content"})}var I=g(Y,[["render",A]]);const U={},L=c(" This is a title "),R=c(" This is a subtitle "),J=c(" This is content ");function q(d,_){const a=o("v-card");return l(),p(a,null,{title:e(()=>[L]),subtitle:e(()=>[R]),text:e(()=>[J]),_:1})}var G=g(U,[["render",q]]);const K=j({__name:"CardsContentWrap",setup(d,{expose:_}){_();const n={messages:w([{from:"You",message:"Sure, I'll see you later.",time:"10:42am",color:"deep-purple lighten-1"},{from:"John Doe",message:"Yeah, sure. Does 1:00pm work?",time:"10:37am",color:"green"},{from:"You",message:"Did you still want to grab lunch today?",time:"9:47am",color:"deep-purple lighten-1"}])};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Q={class:"pa-3"},X=c(" Messages "),Z=i("div",{class:"font-weight-bold ml-1 mb-2"},"Today",-1),tt={class:"mb-4"},et={class:"font-weight-normal"};function ot(d,_,a,n,m,u){const s=o("v-app-bar-nav-icon"),r=o("v-toolbar-title"),v=o("v-icon"),y=o("v-app-bar"),b=o("v-layout"),x=o("v-img"),k=o("v-timeline-item"),S=o("v-timeline"),T=o("v-card-text"),$=o("v-card"),C=o("v-row");return l(),B("div",Q,[t(C,{justify:"space-around"},{default:e(()=>[t($,null,{default:e(()=>[t(x,{height:"200",src:"https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",cover:"",class:"text-white"},{default:e(()=>[t(b,{"full-height":""},{default:e(()=>[t(y,{density:"comfortable",color:"rgba(0, 0, 0, 0)",flat:"",theme:"dark"},{prepend:e(()=>[t(s)]),append:e(()=>[t(v,{icon:"mdi-dots-vertical"})]),default:e(()=>[t(r,{class:"text-h6"},{default:e(()=>[X]),_:1})]),_:1})]),_:1})]),_:1}),t(T,null,{default:e(()=>[Z,t(S,{density:"compact"},{default:e(()=>[(l(!0),B(D,null,P(n.messages,h=>(l(),p(k,{key:h.time,"dot-color":h.color,size:"x-small"},{default:e(()=>[i("div",tt,[i("div",et,[i("strong",null,W(h.from),1),c(" @"+W(h.time),1)]),i("div",null,W(h.message),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}var nt=g(K,[["render",ot]]);const at={},st=c("Top 10 Australian beaches"),ct=c(" Number 10 "),_t=i("div",null,"Whitehaven Beach",-1),rt=i("div",null,"Whitsunday Island, Whitsunday Islands",-1),lt=c(" Share "),it=c(" Explore ");function dt(d,_){const a=o("v-card-title"),n=o("v-img"),m=o("v-card-subtitle"),u=o("v-card-text"),s=o("v-btn"),r=o("v-card-actions"),v=o("v-card");return l(),p(v,null,{default:e(()=>[t(n,{class:"align-end text-white",height:"200",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",cover:""},{default:e(()=>[t(a,null,{default:e(()=>[st]),_:1})]),_:1}),t(m,{class:"pt-4"},{default:e(()=>[ct]),_:1}),t(u,null,{default:e(()=>[_t,rt]),_:1}),t(r,null,{default:e(()=>[t(s,{color:"orange"},{default:e(()=>[lt]),_:1}),t(s,{color:"orange"},{default:e(()=>[it]),_:1})]),_:1})]),_:1})}var mt=g(at,[["render",dt]]);const ut=j({__name:"CardsWeather",setup(d,{expose:_}){_();const a=w({0:"SU",1:"MO",2:"TU",3:"WED",4:"TH",5:"FR",6:"SA"}),n=w(!1),m=w(0),u=w([{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24\xB0/12\xB0"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22\xB0/14\xB0"},{day:"Thursday",icon:"mdi-cloud",temp:"25\xB0/15\xB0"}]),s={labels:a,expand:n,time:m,forecast:u};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),pt=c("Florida"),vt=c(" Extreme Weather Alert "),ht=c(" 64\xB0F "),ft=c("123 km/h"),gt=c("48%"),xt={key:0},yt=c(" Full Report ");function bt(d,_,a,n,m,u){const s=o("v-card-title"),r=o("v-icon"),v=o("v-card-subtitle"),y=o("v-card-header-text"),b=o("v-card-header"),x=o("v-col"),k=o("v-row"),S=o("v-card-text"),T=o("v-list-item-avatar"),$=o("v-list-item-subtitle"),C=o("v-list-item"),h=o("v-slider"),V=o("v-list"),F=o("v-expand-transition"),N=o("v-divider"),z=o("v-btn"),E=o("v-card-actions"),M=o("v-card");return l(),p(M,{class:"mx-auto","max-width":"368"},{default:e(()=>[t(b,null,{default:e(()=>[t(y,null,{default:e(()=>[t(s,{class:"text-h5"},{default:e(()=>[pt]),_:1}),t(v,null,{default:e(()=>[t(r,{icon:"mdi-alert",size:"18",color:"error",class:"mr-1 pb-1"}),vt]),_:1})]),_:1})]),_:1}),t(S,{class:"py-0"},{default:e(()=>[t(k,{align:"center","hide-gutters":"","no-gutters":""},{default:e(()=>[t(x,{class:"text-h2",cols:"6"},{default:e(()=>[ht]),_:1}),t(x,{cols:"6",class:"text-right"},{default:e(()=>[t(r,{size:"88",color:"error",icon:"mdi-weather-hurricane"})]),_:1})]),_:1})]),_:1}),t(C,{density:"compact"},{default:e(()=>[t(T,{left:""},{default:e(()=>[t(r,{icon:"mdi-weather-windy"})]),_:1}),t($,null,{default:e(()=>[ft]),_:1})]),_:1}),t(C,{density:"compact"},{default:e(()=>[t(T,{left:""},{default:e(()=>[t(r,{icon:"mdi-weather-pouring"})]),_:1}),t($,null,{default:e(()=>[gt]),_:1})]),_:1}),t(F,null,{default:e(()=>[n.expand?(l(),B("div",xt,[t(h,{modelValue:n.time,"onUpdate:modelValue":_[0]||(_[0]=f=>n.time=f),max:6,step:1,ticks:n.labels,class:"mx-4",color:"primary",density:"compact","hide-details":"","show-ticks":"always","thumb-size":"10"},null,8,["modelValue","ticks"]),t(V,{class:"transparent"},{default:e(()=>[(l(!0),B(D,null,P(n.forecast,f=>(l(),p(C,{key:f.day,title:f.day,"append-icon":f.icon,subtitle:f.temp},null,8,["title","append-icon","subtitle"]))),128))]),_:1})])):O("",!0)]),_:1}),t(N),t(E,null,{default:e(()=>[t(z,{onClick:_[1]||(_[1]=f=>n.expand=!n.expand)},{default:e(()=>[yt]),_:1})]),_:1})]),_:1})}var Ct=g(ut,[["render",bt]]);const wt={},Tt=i("span",{class:"text-h6 font-weight-light"},"Twitter",-1),$t=c(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." '),Bt=c("Evan You"),kt={class:"d-flex justify-end"},St=i("span",{class:"subheading mr-2"},"256",-1),Wt=i("span",{class:"mr-1"},"\xB7",-1),jt=i("span",{class:"subheading"},"45",-1);function Dt(d,_){const a=o("v-icon"),n=o("v-card-title"),m=o("v-card-text"),u=o("v-avatar"),s=o("v-list-item-avatar"),r=o("v-list-item-title"),v=o("v-list-item-header"),y=o("v-list-item"),b=o("v-card-actions"),x=o("v-card");return l(),p(x,{color:"#26c6da",theme:"dark"},{default:e(()=>[t(n,null,{default:e(()=>[t(a,{size:"large",left:"",icon:"mdi-twitter"}),Tt]),_:1}),t(m,{class:"text-subtitle-1"},{default:e(()=>[$t]),_:1}),t(b,null,{default:e(()=>[t(y,{class:"w-100"},{default:e(()=>[t(s,{left:""},{default:e(()=>[t(u,{color:"grey-darken-3",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"})]),_:1}),t(v,null,{default:e(()=>[t(r,null,{default:e(()=>[Bt]),_:1})]),_:1}),i("div",kt,[t(a,{class:"mr-1",icon:"mdi-heart"}),St,Wt,t(a,{class:"mr-1",icon:"mdi-share-variant"}),jt])]),_:1})]),_:1})]),_:1})}var Pt=g(wt,[["render",Dt]]);const Vt=j({__name:"cards",setup(d,{expose:_}){_();const a={BaseCard:H,CardsProps:I,CardsSlots:G,CardsContentWrap:nt,CardsMedia:mt,CardsWeather:Ct,CardsTwitter:Pt};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function Ft(d,_,a,n,m,u){const s=o("v-col"),r=o("v-row");return l(),p(r,null,{default:e(()=>[t(s,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(n.BaseCard,{heading:"With Props"},{default:e(()=>[t(n.CardsProps)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(n.BaseCard,{heading:"With Slots"},{default:e(()=>[t(n.CardsSlots)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(n.BaseCard,{heading:"Content Wrap"},{default:e(()=>[t(n.CardsContentWrap)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(n.BaseCard,{heading:"Card Media"},{default:e(()=>[t(n.CardsMedia)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(n.BaseCard,{heading:"Weather Card"},{default:e(()=>[t(n.CardsWeather)]),_:1})]),_:1}),t(s,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(n.BaseCard,{heading:"Twitter Card"},{default:e(()=>[t(n.CardsTwitter)]),_:1})]),_:1})]),_:1})}var Et=g(Vt,[["render",Ft]]);export{Et as default};

import{_,o as c,c as l,d as i,n as k,t as D,R as g,O as v,P as R,Q as C,S,T as P,U as V,u as n,r as o,k as u,b as t,w as e}from"./index.bf3459fe.js";import{B as j}from"./ButtonPrimary.a8312c76.js";const B={components:{},props:{text:{type:String,default:"",required:!0}}},z={class:"flex flex-col items-center justify-center m-4 text-zinc-400 fill-zinc-400 hover:text-white hover:fill-white transition-colors"},L=["title"],N={class:"font-bold text-base lg:text-xl"};function U(r,f,d,h,m,p){return c(),l("li",z,[i("div",{class:"icon w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center",title:d.text},[k(r.$slots,"default")],8,L),i("span",N,D(d.text),1)])}var q=_(B,[["render",U]]);const E={components:{RouterLink:g,ButtonPrimary:j,DashboardItem:q,IconDashboard:v,IconCar:R,IconPerson:C,IconSave:S,IconCarRental:P,RouterView:V},data(){return{store:n}},watch:{"store.user"(){if(!n.user)return this.$router.push("/login")}},created(){if(!n.user||n.user&&n.user.role!=="admin")return this.$router.push("/login")}},M={class:"col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center justify-center overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"},O={key:0,class:"text-2xl font-bold text-center"},Q={key:1,class:"flex flex-wrap items-center justify-center"};function T(r,f,d,h,m,p){const x=o("IconDashboard"),a=o("DashboardItem"),s=o("RouterLink"),b=o("IconCar"),I=o("IconCarRental"),w=o("IconPerson"),$=o("IconSave"),y=o("RouterView");return c(),l("main",M,[r.$route.fullPath==="/dashboard"?(c(),l("h2",O," Dashboard ")):u("",!0),r.$route.fullPath==="/dashboard"?(c(),l("ul",Q,[t(s,{to:"/dashboard"},{default:e(()=>[t(a,{text:"Dashboard"},{default:e(()=>[t(x)]),_:1})]),_:1}),t(s,{to:"/dashboard/cars"},{default:e(()=>[t(a,{text:"Samochody"},{default:e(()=>[t(b)]),_:1})]),_:1}),t(s,{to:"/dashboard/rents"},{default:e(()=>[t(a,{text:"Wynajmy"},{default:e(()=>[t(I)]),_:1})]),_:1}),t(s,{to:"/dashboard/users"},{default:e(()=>[t(a,{text:"U\u017Cytkownicy"},{default:e(()=>[t(w)]),_:1})]),_:1}),t(s,{to:"/dashboard/mock"},{default:e(()=>[t(a,{text:"Mock Data"},{default:e(()=>[t($)]),_:1})]),_:1})])):u("",!0),t(y)])}var F=_(E,[["render",T]]);export{F as default};

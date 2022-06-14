var v=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var _=(e,o,s)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,h=(e,o)=>{for(var s in o||(o={}))k.call(o,s)&&_(e,s,o[s]);if(u)for(var s of u(o))z.call(o,s)&&_(e,s,o[s]);return e};import{_ as m,o as c,c as l,d as t,R as b,u as i,f as S,M as C,N as M,y as j,g as D,r as g,b as w,t as r,F as L,j as I,k as p,l as $,x as A,z as N,w as V,e as B,p as R}from"./index.08c14be1.js";const T={},U={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24"},K=t("g",null,[t("rect",{fill:"none",height:"24",width:"24"})],-1),O=t("g",null,[t("g",null,[t("path",{d:"M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M7.35,18.5C8.66,17.56,10.26,17,12,17 s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20S8.66,19.44,7.35,18.5z M18.14,17.12L18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12l0,0C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z"}),t("path",{d:"M12,6c-1.93,0-3.5,1.57-3.5,3.5S10.07,13,12,13s3.5-1.57,3.5-3.5S13.93,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 S11.17,8,12,8s1.5,0.67,1.5,1.5S12.83,11,12,11z"})])],-1),P=[K,O];function q(e,o){return c(),l("svg",U,P)}var E=m(T,[["render",q]]);const F={components:{IconUserAvatar:E,RouterLink:b},data(){return{rents:[],isLoading:!0,rent_start:this.getCurrentDate(),rent_end:this.getTomorrowDate(),store:i}},watch:{"store.user"(){if(!i.user)return this.$router.push("/login")}},created(){if(!i.user)return this.$router.push("/login");this.getUserRents()},methods:{async getUserRents(){const e=S(j($,"rents"),M("id_user","==",i.user.uid),C("created_at","desc"));(await D(e)).forEach(s=>{let d=s.id;this.rents.push(h({id:d},s.data()))}),this.isLoading=!1},getCurrentDate(){let e=new Date;return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.toISOString().slice(0,16)},getTomorrowDate(){let e=new Date;return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.setDate(e.getDate()+1),e.toISOString().slice(0,16)}}},x=e=>(A("data-v-52a90c34"),e=e(),N(),e),G={key:0,class:"col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center justify-center overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"},H={class:"text-base sm:text-2xl font-bold text-center"},Z={class:"mt-4 text-xl sm:text-3xl font-bold text-center"},J={class:"w-full"},Q={key:0,class:"overflow-x-auto"},W={class:"table-layout mx-auto my-2 text-sm xl:text-base w-full text-center"},X=x(()=>t("thead",{class:"border-b border-b-red-500"},[t("tr",null,[t("th",null,"Pojazd"),t("th",null,"Pocz\u0105tek wynajmu"),t("th",null,"Koniec wynajmu"),t("th",null,"Status"),t("th",null,"Przejechany dystans"),t("th",null,"Kaucja"),t("th",null,"Koszt"),t("th",null,"P\u0142atno\u015B\u0107")])],-1)),Y={class:"leading-none"},tt={key:1,class:"col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center p-8 bg-zinc-700"},et=x(()=>t("svg",{class:"animate-spin h-24 w-24 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),st=[et],ot={key:2,class:"my-4 text-xl text-center"};function nt(e,o,s,d,a,rt){const y=g("IconUserAvatar"),f=g("RouterLink");return a.store.user?(c(),l("main",G,[w(y,{class:"w-32 h-32 fill-white"}),t("h2",H,r(a.store.user.email),1),t("h2",Z," Moje wynajmy - "+r(a.rents.length),1),t("div",J,[a.rents.length>0?(c(),l("div",Q,[t("table",W,[X,t("tbody",Y,[(c(!0),l(L,null,I(a.rents,n=>(c(),l("tr",{key:n.id},[t("td",null,[w(f,{to:`/cars/${n.id_car}`,class:"hover:text-red-500 transition-colors"},{default:V(()=>[B(r(n.id_car),1)]),_:2},1032,["to"])]),t("td",null,r(new Date(n.rent_start.seconds*1e3).toLocaleString()),1),t("td",null,r(new Date(n.rent_end.seconds*1e3).toLocaleString()),1),t("td",{class:R({"bg-green-600/10 text-green-300":n.status==="active","bg-red-600/10 text-red-300":n.status==="completed"})},r(n.status==="active"?"Aktywny":"Zako\u0144czony"),3),t("td",null,r(`${n.distance} km`),1),t("td",null,r(n.deposit?"Tak":"Nie"),1),t("td",null,r(`${n.total_price}\xA0z\u0142`),1),t("td",null,r(n.payment_type==="card"?"Karta":"Got\xF3wka"),1)]))),128))])])])):a.isLoading?(c(),l("div",tt,st)):a.rents.length===0?(c(),l("div",ot," Brak wypo\u017Cyczonych pojazd\xF3w ")):p("",!0)])])):p("",!0)}var lt=m(F,[["render",nt],["__scopeId","data-v-52a90c34"]]);export{lt as default};

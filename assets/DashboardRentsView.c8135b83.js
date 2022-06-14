var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var h=(e,a,o)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,_=(e,a)=>{for(var o in a||(a={}))x.call(a,o)&&h(e,o,a[o]);if(u)for(var o of u(a))f.call(a,o)&&h(e,o,a[o]);return e};import{_ as v,u as d,f as k,M as b,y as S,g as z,V as C,q as D,l as p,r as L,o as r,c as i,d as t,t as n,F as R,j,k as I,x as V,z as B,b as N,w as q,e as K,p as M}from"./index.08c14be1.js";const Z={components:{},data(){return{rents:[],isLoading:!0}},created(){if(!d.user||d.user&&d.user.role!=="admin")return this.$router.push("/login");this.searchRents()},methods:{async getRents(){this.rents=[],this.isLoading=!0;let e=[],a=k(S(p,"rents"),b("created_at"));return(await z(a)).forEach(c=>{let l=c.id;e.push(_({id:l},c.data()))}),this.isLoading=!1,e},async searchRents(){this.getRents().then(e=>{this.rents=e})},async toggleStatus(e,a){let o=this.rents.find(l=>l.id===e),c=a==="active"?"completed":"active";o.status=c,await C(D(p,"rents",e.toString()),{status:c}).catch(()=>{o.status=a})}}},m=e=>(V("data-v-636671b4"),e=e(),B(),e),$={class:"flex flex-col items-center w-full h-full"},A={class:"text-2xl font-bold text-center"},E={class:"w-full h-full"},F={key:0,class:"overflow-x-auto"},T={class:"table-layout mx-auto my-2 text-sm xl:text-base w-full text-center"},W=m(()=>t("thead",{class:"border-b border-b-red-500"},[t("tr",null,[t("th",null,"ID Wynajmu"),t("th",null,"ID Samochodu"),t("th",null,"ID U\u017Cytkownika"),t("th",null,"Pocz\u0105tek wynajmu"),t("th",null,"Koniec wynajmu"),t("th",null,"Status"),t("th",null,"Dystans"),t("th",null,"Kaucja"),t("th",null,"Kwota"),t("th",null,"Rodzaj p\u0142atno\u015Bci"),t("th",null,"Czas utworzenia"),t("th",null,"Zmie\u0144 status")])],-1)),G={class:"leading-none"},H=["onClick"],P={key:1,class:"col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center p-8 bg-zinc-700"},U=m(()=>t("svg",{class:"animate-spin h-24 w-24 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),J=[U],O={key:2,class:"my-4 text-xl text-center"};function Q(e,a,o,c,l,y){const w=L("RouterLink");return r(),i("div",$,[t("h2",A," Dashboard - Wynajmy - "+n(l.rents.length),1),t("div",E,[l.rents.length>0?(r(),i("div",F,[t("table",T,[W,t("tbody",G,[(r(!0),i(R,null,j(l.rents,s=>(r(),i("tr",{key:s.id},[t("td",null,n(s.id),1),t("td",null,[N(w,{to:`/cars/${s.id_car}`,class:"hover:text-red-500 transition-colors"},{default:q(()=>[K(n(s.id_car),1)]),_:2},1032,["to"])]),t("td",null,n(s.id_user),1),t("td",null,n(new Date(s.rent_start.seconds*1e3).toLocaleString()),1),t("td",null,n(new Date(s.rent_end.seconds*1e3).toLocaleString()),1),t("td",{class:M({"bg-green-600/10 text-green-300":s.status==="active","bg-red-600/10 text-red-300":s.status==="completed"})},n(s.status==="active"?"Aktywny":"Zako\u0144czony"),3),t("td",null,n(`${s.distance} km`),1),t("td",null,n(s.deposit?"Tak":"Nie"),1),t("td",null,n(`${s.total_price}\xA0z\u0142`),1),t("td",null,n(s.payment_type==="card"?"Karta":"Got\xF3wka"),1),t("td",null,n(new Date(s.created_at.seconds*1e3).toLocaleString()),1),t("td",null,[t("button",{class:"hover:text-red-500 transition-colors",onClick:X=>y.toggleStatus(s.id,s.status)}," Zmie\u0144 ",8,H)])]))),128))])])])):l.isLoading?(r(),i("div",P,J)):l.rents.length===0?(r(),i("div",O," Brak wynajm\xF3w ")):I("",!0)])])}var et=v(Z,[["render",Q],["__scopeId","data-v-636671b4"]]);export{et as default};

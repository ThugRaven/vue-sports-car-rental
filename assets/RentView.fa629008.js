import{_ as D,o as y,c as g,d as t,t as p,C as z,R as j,q as R,l as w,s as T,u as v,A as B,B as P,y as I,r as u,b as r,i as d,v as b,D as m,w as h,x as M,z as V,e as S}from"./index.08c14be1.js";import{B as U}from"./ButtonPrimary.3ccc6452.js";import{B as O}from"./ButtonSecondary.32d94e1e.js";const A={components:{},props:{text:{type:String,default:"",required:!0},value:{type:String,default:"",required:!0}}},L={class:"flex flex-col items-center justify-center text-white w-full"},Y={class:"font-semibold text-md xl:text-lg text-left w-full"},E={class:"text-md xl:text-lg text-center"};function K(e,o,f,i,s,c){return y(),g("li",L,[t("span",Y,p(f.text),1),t("span",E,p(f.value),1)])}var N=D(A,[["render",K]]);const Z={components:{ButtonPrimary:U,ButtonSecondary:O,CarImage:z,RentSummaryItem:N,RouterLink:j},data(){return{car:null,rent_start:this.getCurrentDate(),rent_end:this.getTomorrowDate(),rent_diff:0,deposit:!0,payment_type:"card",total_price:0}},computed:{getRentTime(){let e=this.getDateDiff(this.rent_start,this.rent_end);switch(e){case 0:return"0 dni";case 1:return"1 dzie\u0144";default:return`${e} dni`}}},watch:{rent_start(e){e>this.rent_end&&(this.rent_end=e),this.calcTotalPrice()},rent_end(e,o){e<this.rent_start&&(this.rent_end=o),this.calcTotalPrice()},deposit(){this.calcTotalPrice()}},created(){this.getCar().then(()=>{this.calcTotalPrice()})},methods:{async getCar(){const e=R(w,"cars",this.$route.params.id),o=await T(e);o.exists()?this.car=o.data():this.$router.push("/cars")},getCurrentDate(){let e=new Date;return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.toISOString().slice(0,16)},getTomorrowDate(){let e=new Date;return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.setDate(e.getDate()+1),e.toISOString().slice(0,16)},getDateDiff(e,o){let i=new Date(e),s=new Date(o);const c=Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours()),x=Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours());let a=x-c,_=Math.floor(a/864e5);return c+_*864e5<x&&_++,_},calcTotalPrice(){let e=this.getDateDiff(this.rent_start,this.rent_end);this.rent_diff=e,this.total_price=this.deposit?this.car.price_deposit*e:this.car.price_no_deposit*e},async rentCar(){if(!v.user)return this.$router.push("/login");if(!this.car.rentable)return this.$router.push("/cars");await B(I(w,"rents"),{id_car:this.car.id_car,id_user:v.user.uid,rent_start:new Date(this.rent_start),rent_end:new Date(this.rent_end),status:"active",distance:0,deposit:this.deposit,total_price:this.total_price,payment_type:this.payment_type,created_at:P()}).then(()=>{this.$router.push("/account")})}}},n=e=>(M("data-v-f017236c"),e=e(),V(),e),q={key:0,class:"col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"},H={class:"flex flex-col items-center justify-center p-12 gap-6 relative z-0 text-center"},F={class:"text-6xl sm:text-9xl lg:text-[10.5rem] font-bold"},G={class:"text-6xl sm:text-9xl lg:text-[10.5rem] font-display stroked"},W={class:"flex flex-col items-center justify-center"},J={class:"flex flex-col py-4 border-b border-b-zinc-400"},Q=n(()=>t("h2",{class:"text-2xl font-bold text-center py-4"},"Okres wynajmu",-1)),X={class:"flex flex-col gap-2 w-max mx-auto items-center justify-center"},$={class:"flex flex-col sm:flex-row gap-2 justify-between items-center w-full"},tt=n(()=>t("label",{for:"rent_start",class:"text-xl"},"Odbi\xF3r",-1)),et={class:"flex flex-col sm:flex-row gap-2 justify-between items-center w-full"},st=n(()=>t("label",{for:"rent_end",class:"text-xl"},"Zwrot",-1)),ot=n(()=>t("h2",{class:"text-2xl font-bold text-center my-4"},"Kaucja",-1)),nt={class:"accent-red-500"},lt={class:"flex flex-row items-center gap-2"},rt=n(()=>t("label",{for:"deposit",class:"text-lg"},"Z kaucj\u0105",-1)),at={class:"flex flex-row items-center gap-2"},it=n(()=>t("label",{for:"no_deposit",class:"text-lg"},"Bez kaucji",-1)),ct=n(()=>t("h2",{class:"text-2xl font-bold text-center my-4"},"P\u0142atno\u015B\u0107",-1)),dt={class:"accent-red-500"},_t={class:"flex flex-row items-center gap-2"},ut=n(()=>t("label",{for:"payment_card",class:"text-lg"},"Karta",-1)),pt={class:"flex flex-row items-center gap-2"},ft=n(()=>t("label",{for:"payment_money",class:"text-lg"},"Got\xF3wka",-1)),xt={class:"flex flex-col items-center justify-center"},mt=n(()=>t("h2",{class:"text-2xl font-bold text-center my-4"},"Podsumowanie",-1)),ht={class:"flex flex-col items-center justify-center gap-2"},yt={class:"flex flex-col"},gt=n(()=>t("span",{class:"font-semibold text-md xl:text-lg text-left w-full"},"\u0141\u0105czny koszt wynajmu",-1)),wt={class:"py-1 text-4xl font-bold text-center border-b-4 border-b-red-500"},vt={class:"flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-screen-sm"},bt=S("Wr\xF3\u0107"),Dt=S("Zarezerwuj"),St={key:1,class:"col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center bg-zinc-700"},Ct=n(()=>t("svg",{class:"animate-spin h-24 w-24 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),kt=[Ct];function zt(e,o,f,i,s,c){const x=u("CarImage"),a=u("RentSummaryItem"),_=u("ButtonSecondary"),C=u("RouterLink"),k=u("ButtonPrimary");return s.car?(y(),g("main",q,[t("div",H,[t("span",F,p(s.car.brand),1),t("span",G,p(s.car.model),1),r(x,{car:s.car,class:"absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-[1.25px] grayscale-[60%] -z-[1] pointer-events-none"},null,8,["car"])]),t("div",W,[t("div",J,[Q,t("div",X,[t("div",$,[tt,d(t("input",{id:"rent_start","onUpdate:modelValue":o[0]||(o[0]=l=>s.rent_start=l),type:"datetime-local",name:"rent_start",class:"bg-zinc-800 px-4 py-2 rounded-md"},null,512),[[b,s.rent_start]])]),t("div",et,[st,d(t("input",{id:"rent_end","onUpdate:modelValue":o[1]||(o[1]=l=>s.rent_end=l),type:"datetime-local",name:"rent_end",class:"bg-zinc-800 px-4 py-2 rounded-md"},null,512),[[b,s.rent_end]])])]),ot,t("div",nt,[t("div",lt,[d(t("input",{id:"deposit","onUpdate:modelValue":o[2]||(o[2]=l=>s.deposit=l),type:"radio",value:!0},null,512),[[m,s.deposit]]),rt]),t("div",at,[d(t("input",{id:"no_deposit","onUpdate:modelValue":o[3]||(o[3]=l=>s.deposit=l),type:"radio",value:!1},null,512),[[m,s.deposit]]),it])]),ct,t("div",dt,[t("div",_t,[d(t("input",{id:"payment_card","onUpdate:modelValue":o[4]||(o[4]=l=>s.payment_type=l),type:"radio",value:"card"},null,512),[[m,s.payment_type]]),ut]),t("div",pt,[d(t("input",{id:"payment_money","onUpdate:modelValue":o[5]||(o[5]=l=>s.payment_type=l),type:"radio",value:"money"},null,512),[[m,s.payment_type]]),ft])])]),t("div",xt,[mt,t("ul",ht,[r(a,{text:"Odbi\xF3r",value:new Date(s.rent_start).toLocaleString()},null,8,["value"]),r(a,{text:"Zwrot",value:new Date(s.rent_end).toLocaleString()},null,8,["value"]),r(a,{text:"Czas trwania",value:c.getRentTime},null,8,["value"]),r(a,{text:"P\u0142atno\u015B\u0107",value:s.payment_type==="card"?"Karta":"Got\xF3wka"},null,8,["value"]),r(a,{text:"Kaucja",value:`${s.deposit?`Tak - ${s.car.deposit}`:"Nie"}`},null,8,["value"]),t("li",yt,[gt,t("span",wt,p(s.total_price)+" z\u0142",1)])])]),t("div",vt,[r(C,{to:`/cars/${s.car.id_car}`,class:"w-full"},{default:h(()=>[r(_,{width:"full"},{default:h(()=>[bt]),_:1})]),_:1},8,["to"]),r(k,{width:"full",onClick:c.rentCar},{default:h(()=>[Dt]),_:1},8,["onClick"])])])])):(y(),g("div",St,kt))}var Bt=D(Z,[["render",zt],["__scopeId","data-v-f017236c"]]);export{Bt as default};

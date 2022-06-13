var Ey=Object.defineProperty,Iy=Object.defineProperties;var by=Object.getOwnPropertyDescriptors;var Pu=Object.getOwnPropertySymbols;var Ty=Object.prototype.hasOwnProperty,Cy=Object.prototype.propertyIsEnumerable;var Ou=(t,e,n)=>e in t?Ey(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Aa=(t,e)=>{for(var n in e||(e={}))Ty.call(e,n)&&Ou(t,n,e[n]);if(Pu)for(var n of Pu(e))Cy.call(e,n)&&Ou(t,n,e[n]);return t},Mu=(t,e)=>Iy(t,by(e));const Sy=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Sy();function Yc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ky=Yc(Ay);function Xf(t){return!!t||t===""}function Xc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?Ny(s):Xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ue(t))return t;if(Re(t))return t}}const Ry=/;(?![^(]*\))/g,xy=/:(.+)/;function Ny(t){const e={};return t.split(Ry).forEach(n=>{if(n){const s=n.split(xy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Gn(t){let e="";if(Ue(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Gn(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Dy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ns(t[s],e[s]);return n}function Ns(t,e){if(t===e)return!0;let n=Lu(t),s=Lu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?Dy(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ns(t[o],e[o]))return!1}}return String(t)===String(e)}function Py(t,e){return t.findIndex(n=>Ns(n,e))}const jn=t=>Ue(t)?t:t==null?"":W(t)||Re(t)&&(t.toString===Zf||!Z(t.toString))?JSON.stringify(t,Qf,2):String(t),Qf=(t,e)=>e&&e.__v_isRef?Qf(t,e.value):Ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Mo(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!W(e)&&!ed(e)?String(e):e,_e={},bs=[],Rt=()=>{},Oy=()=>!1,My=/^on[^a-z]/,Oo=t=>My.test(t),Qc=t=>t.startsWith("onUpdate:"),ut=Object.assign,Jc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ly=Object.prototype.hasOwnProperty,re=(t,e)=>Ly.call(t,e),W=Array.isArray,Ts=t=>si(t)==="[object Map]",Mo=t=>si(t)==="[object Set]",Lu=t=>si(t)==="[object Date]",Z=t=>typeof t=="function",Ue=t=>typeof t=="string",Dr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Jf=t=>Re(t)&&Z(t.then)&&Z(t.catch),Zf=Object.prototype.toString,si=t=>Zf.call(t),Uy=t=>si(t).slice(8,-1),ed=t=>si(t)==="[object Object]",Zc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hi=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$y=/-(\w)/g,jt=Lo(t=>t.replace($y,(e,n)=>n?n.toUpperCase():"")),Fy=/\B([A-Z])/g,Ws=Lo(t=>t.replace(Fy,"-$1").toLowerCase()),Uo=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ka=Lo(t=>t?`on${Uo(t)}`:""),Pr=(t,e)=>!Object.is(t,e),qi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},so=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ro=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uu;const Vy=()=>Uu||(Uu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Mt;class By{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Mt&&(this.parent=Mt,this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function jy(t,e=Mt){e&&e.active&&e.effects.push(t)}const el=t=>{const e=new Set(t);return e.w=0,e.n=0,e},td=t=>(t.w&En)>0,nd=t=>(t.n&En)>0,Hy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},qy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];td(r)&&!nd(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},ec=new WeakMap;let pr=0,En=1;const tc=30;let At;const Hn=Symbol(""),nc=Symbol("");class tl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jy(this,s)}run(){if(!this.active)return this.fn();let e=At,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,gn=!0,En=1<<++pr,pr<=tc?Hy(this):$u(this),this.fn()}finally{pr<=tc&&qy(this),En=1<<--pr,At=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&($u(this),this.onStop&&this.onStop(),this.active=!1)}}function $u(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gn=!0;const sd=[];function Gs(){sd.push(gn),gn=!1}function Ys(){const t=sd.pop();gn=t===void 0?!0:t}function Et(t,e,n){if(gn&&At){let s=ec.get(t);s||ec.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=el()),rd(r)}}function rd(t,e){let n=!1;pr<=tc?nd(t)||(t.n|=En,n=!td(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function Qt(t,e,n,s,r,i){const o=ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Zc(n)&&a.push(o.get("length")):(a.push(o.get(Hn)),Ts(t)&&a.push(o.get(nc)));break;case"delete":W(t)||(a.push(o.get(Hn)),Ts(t)&&a.push(o.get(nc)));break;case"set":Ts(t)&&a.push(o.get(Hn));break}if(a.length===1)a[0]&&sc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sc(el(c))}}function sc(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&Fu(s);for(const s of n)s.computed||Fu(s)}function Fu(t,e){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zy=Yc("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),Ky=nl(),Wy=nl(!1,!0),Gy=nl(!0),Vu=Yy();function Yy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let i=0,o=this.length;i<o;i++)Et(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gs();const s=fe(this)[e].apply(this,n);return Ys(),s}}),t}function nl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?h1:ud:e?ld:cd).get(s))return s;const o=W(s);if(!t&&o&&re(Vu,r))return Reflect.get(Vu,r,i);const a=Reflect.get(s,r,i);return(Dr(r)?id.has(r):zy(r))||(t||Et(s,"get",r),e)?a:Ke(a)?o&&Zc(r)?a:a.value:Re(a)?t?hd(a):Xs(a):a}}const Xy=od(),Qy=od(!0);function od(t=!1){return function(n,s,r,i){let o=n[s];if(Or(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&!Or(r)&&(rc(r)||(r=fe(r),o=fe(o)),!W(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=W(n)&&Zc(s)?Number(s)<n.length:re(n,s),c=Reflect.set(n,s,r,i);return n===fe(i)&&(a?Pr(r,o)&&Qt(n,"set",s,r):Qt(n,"add",s,r)),c}}function Jy(t,e){const n=re(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0),s}function Zy(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!id.has(e))&&Et(t,"has",e),n}function e1(t){return Et(t,"iterate",W(t)?"length":Hn),Reflect.ownKeys(t)}const ad={get:Ky,set:Xy,deleteProperty:Jy,has:Zy,ownKeys:e1},t1={get:Gy,set(t,e){return!0},deleteProperty(t,e){return!0}},n1=ut({},ad,{get:Wy,set:Qy}),sl=t=>t,$o=t=>Reflect.getPrototypeOf(t);function ki(t,e,n=!1,s=!1){t=t.__v_raw;const r=fe(t),i=fe(e);n||(e!==i&&Et(r,"get",e),Et(r,"get",i));const{has:o}=$o(r),a=s?sl:n?ol:Mr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ri(t,e=!1){const n=this.__v_raw,s=fe(n),r=fe(t);return e||(t!==r&&Et(s,"has",t),Et(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function xi(t,e=!1){return t=t.__v_raw,!e&&Et(fe(t),"iterate",Hn),Reflect.get(t,"size",t)}function Bu(t){t=fe(t);const e=fe(this);return $o(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function ju(t,e){e=fe(e);const n=fe(this),{has:s,get:r}=$o(n);let i=s.call(n,t);i||(t=fe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Pr(e,o)&&Qt(n,"set",t,e):Qt(n,"add",t,e),this}function Hu(t){const e=fe(this),{has:n,get:s}=$o(e);let r=n.call(e,t);r||(t=fe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Qt(e,"delete",t,void 0),i}function qu(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Qt(t,"clear",void 0,void 0),n}function Ni(t,e){return function(s,r){const i=this,o=i.__v_raw,a=fe(o),c=e?sl:t?ol:Mr;return!t&&Et(a,"iterate",Hn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Di(t,e,n){return function(...s){const r=this.__v_raw,i=fe(r),o=Ts(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?sl:e?ol:Mr;return!e&&Et(i,"iterate",c?nc:Hn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function s1(){const t={get(i){return ki(this,i)},get size(){return xi(this)},has:Ri,add:Bu,set:ju,delete:Hu,clear:qu,forEach:Ni(!1,!1)},e={get(i){return ki(this,i,!1,!0)},get size(){return xi(this)},has:Ri,add:Bu,set:ju,delete:Hu,clear:qu,forEach:Ni(!1,!0)},n={get(i){return ki(this,i,!0)},get size(){return xi(this,!0)},has(i){return Ri.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ni(!0,!1)},s={get(i){return ki(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Ri.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Di(i,!1,!1),n[i]=Di(i,!0,!1),e[i]=Di(i,!1,!0),s[i]=Di(i,!0,!0)}),[t,n,e,s]}const[r1,i1,o1,a1]=s1();function rl(t,e){const n=e?t?a1:o1:t?i1:r1;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const c1={get:rl(!1,!1)},l1={get:rl(!1,!0)},u1={get:rl(!0,!1)},cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,h1=new WeakMap;function f1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d1(t){return t.__v_skip||!Object.isExtensible(t)?0:f1(Uy(t))}function Xs(t){return Or(t)?t:il(t,!1,ad,c1,cd)}function p1(t){return il(t,!1,n1,l1,ld)}function hd(t){return il(t,!0,t1,u1,ud)}function il(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=d1(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Cs(t){return Or(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Or(t){return!!(t&&t.__v_isReadonly)}function rc(t){return!!(t&&t.__v_isShallow)}function fd(t){return Cs(t)||Or(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function dd(t){return so(t,"__v_skip",!0),t}const Mr=t=>Re(t)?Xs(t):t,ol=t=>Re(t)?hd(t):t;function pd(t){gn&&At&&(t=fe(t),rd(t.dep||(t.dep=el())))}function gd(t,e){t=fe(t),t.dep&&sc(t.dep)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function g1(t){return md(t,!1)}function m1(t){return md(t,!0)}function md(t,e){return Ke(t)?t:new y1(t,e)}class y1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Mr(e)}get value(){return pd(this),this._value}set value(e){e=this.__v_isShallow?e:fe(e),Pr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Mr(e),gd(this))}}function wr(t){return Ke(t)?t.value:t}const _1={get:(t,e,n)=>wr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function yd(t){return Cs(t)?t:new Proxy(t,_1)}class v1{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new tl(e,()=>{this._dirty||(this._dirty=!0,gd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=fe(this);return pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function w1(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Rt):(s=t.get,r=t.set),new v1(s,r,i||!r,n)}function mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Fo(i,e,n)}return r}function xt(t,e,n,s){if(Z(t)){const i=mn(t,e,n,s);return i&&Jf(i)&&i.catch(o=>{Fo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(xt(t[i],e,n,s));return r}function Fo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){mn(c,null,10,[t,o,a]);return}}E1(t,n,r,s)}function E1(t,e,n,s=!0){console.error(t)}let io=!1,ic=!1;const _t=[];let zt=0;const Er=[];let gr=null,ys=0;const Ir=[];let an=null,_s=0;const _d=Promise.resolve();let al=null,oc=null;function vd(t){const e=al||_d;return t?e.then(this?t.bind(this):t):e}function I1(t){let e=zt+1,n=_t.length;for(;e<n;){const s=e+n>>>1;Lr(_t[s])<t?e=s+1:n=s}return e}function wd(t){(!_t.length||!_t.includes(t,io&&t.allowRecurse?zt+1:zt))&&t!==oc&&(t.id==null?_t.push(t):_t.splice(I1(t.id),0,t),Ed())}function Ed(){!io&&!ic&&(ic=!0,al=_d.then(Td))}function b1(t){const e=_t.indexOf(t);e>zt&&_t.splice(e,1)}function Id(t,e,n,s){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Ed()}function T1(t){Id(t,gr,Er,ys)}function C1(t){Id(t,an,Ir,_s)}function Vo(t,e=null){if(Er.length){for(oc=e,gr=[...new Set(Er)],Er.length=0,ys=0;ys<gr.length;ys++)gr[ys]();gr=null,ys=0,oc=null,Vo(t,e)}}function bd(t){if(Vo(),Ir.length){const e=[...new Set(Ir)];if(Ir.length=0,an){an.push(...e);return}for(an=e,an.sort((n,s)=>Lr(n)-Lr(s)),_s=0;_s<an.length;_s++)an[_s]();an=null,_s=0}}const Lr=t=>t.id==null?1/0:t.id;function Td(t){ic=!1,io=!0,Vo(t),_t.sort((n,s)=>Lr(n)-Lr(s));const e=Rt;try{for(zt=0;zt<_t.length;zt++){const n=_t[zt];n&&n.active!==!1&&mn(n,null,14)}}finally{zt=0,_t.length=0,bd(),io=!1,al=null,(_t.length||Er.length||Ir.length)&&Td(t)}}function S1(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||_e;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(ro))}let a,c=s[a=ka(e)]||s[a=ka(jt(e))];!c&&i&&(c=s[a=ka(Ws(e))]),c&&xt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,r)}}function Cd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Cd(l,e,!0);u&&(a=!0,ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):ut(o,i),s.set(t,o),o)}function Bo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Ws(e))||re(t,e))}let ot=null,jo=null;function oo(t){const e=ot;return ot=t,jo=t&&t.type.__scopeId||null,e}function Sd(t){jo=t}function Ad(){jo=null}function ke(t,e=ot,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&th(-1);const i=oo(e),o=t(...r);return oo(i),s._d&&th(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ra(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:T}=t;let w,C;const L=oo(t);try{if(n.shapeFlag&4){const H=r||s;w=Lt(u.call(H,H,h,i,g,f,m)),C=c}else{const H=e;w=Lt(H.length>1?H(i,{attrs:c,slots:a,emit:l}):H(i,null)),C=e.props?c:A1(c)}}catch(H){Cr.length=0,Fo(H,t,1),w=z(In)}let K=w;if(C&&T!==!1){const H=Object.keys(C),{shapeFlag:ce}=K;H.length&&ce&7&&(o&&H.some(Qc)&&(C=k1(C,o)),K=Ds(K,C))}return n.dirs&&(K=Ds(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),w=K,oo(L),w}const A1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},k1=(t,e)=>{const n={};for(const s in t)(!Qc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function R1(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?zu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Bo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?zu(s,o,l):!0:!!o;return!1}function zu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bo(n,i))return!0}return!1}function x1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const N1=t=>t.__isSuspense;function D1(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):C1(t)}function zi(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function yn(t,e,n=!1){const s=ze||ot;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const Ku={};function Ki(t,e,n){return kd(t,e,n)}function kd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){const a=ze;let c,l=!1,u=!1;if(Ke(t)?(c=()=>t.value,l=rc(t)):Cs(t)?(c=()=>t,s=!0):W(t)?(u=!0,l=t.some(C=>Cs(C)||rc(C)),c=()=>t.map(C=>{if(Ke(C))return C.value;if(Cs(C))return Fn(C);if(Z(C))return mn(C,a,2)})):Z(t)?e?c=()=>mn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xt(t,a,3,[f])}:c=Rt,e&&s){const C=c;c=()=>Fn(C())}let h,f=C=>{h=w.onStop=()=>{mn(C,a,4)}};if($r)return f=Rt,e?n&&xt(e,a,3,[c(),u?[]:void 0,f]):c(),Rt;let g=u?[]:Ku;const m=()=>{if(!!w.active)if(e){const C=w.run();(s||l||(u?C.some((L,K)=>Pr(L,g[K])):Pr(C,g)))&&(h&&h(),xt(e,a,3,[C,g===Ku?void 0:g,f]),g=C)}else w.run()};m.allowRecurse=!!e;let T;r==="sync"?T=m:r==="post"?T=()=>dt(m,a&&a.suspense):T=()=>T1(m);const w=new tl(c,T);return e?n?m():g=w.run():r==="post"?dt(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&Jc(a.scope.effects,w)}}function P1(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?Rd(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=ze;Ps(this);const a=kd(r,i.bind(s),n);return o?Ps(o):qn(),a}function Rd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Fn(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))Fn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Fn(t[n],e);else if(Mo(t)||Ts(t))t.forEach(n=>{Fn(n,e)});else if(ed(t))for(const n in t)Fn(t[n],e);return t}function xd(t){return Z(t)?{setup:t,name:t.name}:t}const br=t=>!!t.type.__asyncLoader,Nd=t=>t.type.__isKeepAlive;function O1(t,e){Dd(t,"a",e)}function M1(t,e){Dd(t,"da",e)}function Dd(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ho(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Nd(r.parent.vnode)&&L1(s,e,n,r),r=r.parent}}function L1(t,e,n,s){const r=Ho(e,t,s,!0);Pd(()=>{Jc(s[e],r)},n)}function Ho(t,e,n=ze,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gs(),Ps(n);const a=xt(e,n,t,o);return qn(),Ys(),a});return s?r.unshift(i):r.push(i),i}}const tn=t=>(e,n=ze)=>(!$r||t==="sp")&&Ho(t,e,n),U1=tn("bm"),$1=tn("m"),F1=tn("bu"),V1=tn("u"),B1=tn("bum"),Pd=tn("um"),j1=tn("sp"),H1=tn("rtg"),q1=tn("rtc");function z1(t,e=ze){Ho("ec",t,e)}function sR(t,e){const n=ot;if(n===null)return t;const s=zo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Fn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Pn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Gs(),xt(c,n,8,[t.el,a,t,e]),Ys())}}const Od="components";function he(t,e){return W1(Od,t,!0,e)||t}const K1=Symbol();function W1(t,e,n=!0,s=!1){const r=ot||ze;if(r){const i=r.type;if(t===Od){const a=S0(i);if(a&&(a===e||a===jt(e)||a===Uo(jt(e))))return i}const o=Wu(r[t]||i[t],e)||Wu(r.appContext[t],e);return!o&&s?i:o}}function Wu(t,e){return t&&(t[e]||t[jt(e)]||t[Uo(jt(e))])}function Md(t,e,n,s){let r;const i=n&&n[s];if(W(t)||Ue(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function ao(t,e,n={},s,r){if(ot.isCE||ot.parent&&br(ot.parent)&&ot.parent.isCE)return z("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),q();const o=i&&Ld(i(n)),a=He(st,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ld(t){return t.some(e=>uo(e)?!(e.type===In||e.type===st&&!Ld(e.children)):!0)?t:null}const ac=t=>t?Wd(t)?zo(t)||t.proxy:ac(t.parent):null,co=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ac(t.parent),$root:t=>ac(t.root),$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>wd(t.update)),$nextTick:t=>t.n||(t.n=vd.bind(t.proxy)),$watch:t=>P1.bind(t)}),G1={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==_e&&re(s,e))return o[e]=1,s[e];if(r!==_e&&re(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=3,i[e];if(n!==_e&&re(n,e))return o[e]=4,n[e];cc&&(o[e]=0)}}const u=co[e];let h,f;if(u)return e==="$attrs"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&re(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==_e&&re(r,e)?(r[e]=n,!0):s!==_e&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&re(t,o)||e!==_e&&re(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(co,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let cc=!0;function Y1(t){const e=$d(t),n=t.proxy,s=t.ctx;cc=!1,e.beforeCreate&&Gu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:T,deactivated:w,beforeDestroy:C,beforeUnmount:L,destroyed:K,unmounted:H,render:ce,renderTracked:le,renderTriggered:ve,errorCaptured:xe,serverPrefetch:Ne,expose:ht,inheritAttrs:ft,components:Tt,directives:us,filters:hs}=e;if(l&&X1(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const de=o[we];Z(de)&&(s[we]=de.bind(n))}if(r){const we=r.call(n,n);Re(we)&&(t.data=Xs(we))}if(cc=!0,i)for(const we in i){const de=i[we],mt=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):Rt,ds=!Z(de)&&Z(de.set)?de.set.bind(n):Rt,qt=$t({get:mt,set:ds});Object.defineProperty(s,we,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Dt=>qt.value=Dt})}if(a)for(const we in a)Ud(a[we],s,n,we);if(c){const we=Z(c)?c.call(n):c;Reflect.ownKeys(we).forEach(de=>{zi(de,we[de])})}u&&Gu(u,t,"c");function Le(we,de){W(de)?de.forEach(mt=>we(mt.bind(n))):de&&we(de.bind(n))}if(Le(U1,h),Le($1,f),Le(F1,g),Le(V1,m),Le(O1,T),Le(M1,w),Le(z1,xe),Le(q1,le),Le(H1,ve),Le(B1,L),Le(Pd,H),Le(j1,Ne),W(ht))if(ht.length){const we=t.exposed||(t.exposed={});ht.forEach(de=>{Object.defineProperty(we,de,{get:()=>n[de],set:mt=>n[de]=mt})})}else t.exposed||(t.exposed={});ce&&t.render===Rt&&(t.render=ce),ft!=null&&(t.inheritAttrs=ft),Tt&&(t.components=Tt),us&&(t.directives=us)}function X1(t,e,n=Rt,s=!1){W(t)&&(t=lc(t));for(const r in t){const i=t[r];let o;Re(i)?"default"in i?o=yn(i.from||r,i.default,!0):o=yn(i.from||r):o=yn(i),Ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Gu(t,e,n){xt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ud(t,e,n,s){const r=s.includes(".")?Rd(n,s):()=>n[s];if(Ue(t)){const i=e[t];Z(i)&&Ki(r,i)}else if(Z(t))Ki(r,t.bind(n));else if(Re(t))if(W(t))t.forEach(i=>Ud(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Ki(r,i,t)}}function $d(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>lo(c,l,o,!0)),lo(c,e,o)),i.set(e,c),c}function lo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&lo(t,i,n,!0),r&&r.forEach(o=>lo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Q1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Q1={data:Yu,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Mn,directives:Mn,watch:Z1,provide:Yu,inject:J1};function Yu(t,e){return e?t?function(){return ut(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function J1(t,e){return Mn(lc(t),lc(e))}function lc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?ut(ut(Object.create(null),t),e):e}function Z1(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function e0(t,e,n,s=!1){const r={},i={};so(i,qo,1),t.propsDefaults=Object.create(null),Fd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:p1(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function t0(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=fe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Bo(t.emitsOptions,f))continue;const g=e[f];if(c)if(re(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=jt(f);r[m]=uc(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Fd(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=Ws(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=uc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!re(e,h)&&!0)&&(delete i[h],l=!0)}l&&Qt(t,"set","$attrs")}function Fd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Hi(c))continue;const l=e[c];let u;r&&re(r,u=jt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Bo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=fe(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=uc(r,c,h,l[h],t,!re(l,h))}}return o}function uc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ps(r),s=l[n]=c.call(null,e),qn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ws(n))&&(s=!0))}return s}function Vd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,g]=Vd(h,e,!0);ut(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,bs),bs;if(W(i))for(let u=0;u<i.length;u++){const h=jt(i[u]);Xu(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=jt(u);if(Xu(h)){const f=i[u],g=o[h]=W(f)||Z(f)?{type:f}:f;if(g){const m=Zu(Boolean,g.type),T=Zu(String,g.type);g[0]=m>-1,g[1]=T<0||m<T,(m>-1||re(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Xu(t){return t[0]!=="$"}function Qu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ju(t,e){return Qu(t)===Qu(e)}function Zu(t,e){return W(e)?e.findIndex(n=>Ju(n,t)):Z(e)&&Ju(e,t)?0:-1}const Bd=t=>t[0]==="_"||t==="$stable",cl=t=>W(t)?t.map(Lt):[Lt(t)],n0=(t,e,n)=>{if(e._n)return e;const s=ke((...r)=>cl(e(...r)),n);return s._c=!1,s},jd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Bd(r))continue;const i=t[r];if(Z(i))e[r]=n0(r,i,s);else if(i!=null){const o=cl(i);e[r]=()=>o}}},Hd=(t,e)=>{const n=cl(e);t.slots.default=()=>n},s0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),so(e,"_",n)):jd(e,t.slots={})}else t.slots={},e&&Hd(t,e);so(t.slots,qo,1)},r0=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ut(r,e),!n&&a===1&&delete r._):(i=!e.$stable,jd(e,r)),o=e}else e&&(Hd(t,e),o={default:1});if(i)for(const a in r)!Bd(a)&&!(a in o)&&delete r[a]};function qd(){return{app:null,config:{isNativeTag:Oy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function o0(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!Re(r)&&(r=null);const i=qd(),o=new Set;let a=!1;const c=i.app={_uid:i0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:k0,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=z(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,zo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function hc(t,e,n,s,r=!1){if(W(t)){t.forEach((f,g)=>hc(f,e&&(W(e)?e[g]:e),n,s,r));return}if(br(s)&&!r)return;const i=s.shapeFlag&4?zo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,re(h,l)&&(h[l]=null)):Ke(l)&&(l.value=null)),Z(c))mn(c,a,12,[o,u]);else{const f=Ue(c),g=Ke(c);if(f||g){const m=()=>{if(t.f){const T=f?u[c]:c.value;r?W(T)&&Jc(T,i):W(T)?T.includes(i)||T.push(i):f?(u[c]=[i],re(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,re(h,c)&&(h[c]=o)):Ke(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,dt(m,n)):m()}}}const dt=D1;function a0(t){return c0(t)}function c0(t,e){const n=Vy();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Rt,cloneNode:m,insertStaticContent:T}=t,w=(d,p,y,I=null,E=null,k=null,P=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!ur(d,p)&&(I=V(d),bt(d,E,k,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:b,ref:B,shapeFlag:M}=p;switch(b){case ul:C(d,p,y,I);break;case In:L(d,p,y,I);break;case Wi:d==null&&K(p,y,I,P);break;case st:us(d,p,y,I,E,k,P,S,R);break;default:M&1?le(d,p,y,I,E,k,P,S,R):M&6?hs(d,p,y,I,E,k,P,S,R):(M&64||M&128)&&b.process(d,p,y,I,E,k,P,S,R,Ee)}B!=null&&E&&hc(B,d&&d.ref,k,p||d,!p)},C=(d,p,y,I)=>{if(d==null)s(p.el=a(p.children),y,I);else{const E=p.el=d.el;p.children!==d.children&&l(E,p.children)}},L=(d,p,y,I)=>{d==null?s(p.el=c(p.children||""),y,I):p.el=d.el},K=(d,p,y,I)=>{[d.el,d.anchor]=T(d.children,p,y,I,d.el,d.anchor)},H=({el:d,anchor:p},y,I)=>{let E;for(;d&&d!==p;)E=f(d),s(d,y,I),d=E;s(p,y,I)},ce=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},le=(d,p,y,I,E,k,P,S,R)=>{P=P||p.type==="svg",d==null?ve(p,y,I,E,k,P,S,R):ht(d,p,E,k,P,S,R)},ve=(d,p,y,I,E,k,P,S)=>{let R,b;const{type:B,props:M,shapeFlag:j,transition:X,patchFlag:ie,dirs:ge}=d;if(d.el&&m!==void 0&&ie===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,k,M&&M.is,M),j&8?u(R,d.children):j&16&&Ne(d.children,R,null,I,E,k&&B!=="foreignObject",P,S),ge&&Pn(d,null,I,"created"),M){for(const Te in M)Te!=="value"&&!Hi(Te)&&i(R,Te,null,M[Te],k,d.children,I,E,x);"value"in M&&i(R,"value",null,M.value),(b=M.onVnodeBeforeMount)&&Ot(b,I,d)}xe(R,d,d.scopeId,P,I)}ge&&Pn(d,null,I,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&X&&!X.persisted;me&&X.beforeEnter(R),s(R,p,y),((b=M&&M.onVnodeMounted)||me||ge)&&dt(()=>{b&&Ot(b,I,d),me&&X.enter(R),ge&&Pn(d,null,I,"mounted")},E)},xe=(d,p,y,I,E)=>{if(y&&g(d,y),I)for(let k=0;k<I.length;k++)g(d,I[k]);if(E){let k=E.subTree;if(p===k){const P=E.vnode;xe(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},Ne=(d,p,y,I,E,k,P,S,R=0)=>{for(let b=R;b<d.length;b++){const B=d[b]=S?cn(d[b]):Lt(d[b]);w(null,B,p,y,I,E,k,P,S)}},ht=(d,p,y,I,E,k,P)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:b,dirs:B}=p;R|=d.patchFlag&16;const M=d.props||_e,j=p.props||_e;let X;y&&On(y,!1),(X=j.onVnodeBeforeUpdate)&&Ot(X,y,p,d),B&&Pn(p,d,y,"beforeUpdate"),y&&On(y,!0);const ie=E&&p.type!=="foreignObject";if(b?ft(d.dynamicChildren,b,S,y,I,ie,k):P||mt(d,p,S,null,y,I,ie,k,!1),R>0){if(R&16)Tt(S,p,M,j,y,I,E);else if(R&2&&M.class!==j.class&&i(S,"class",null,j.class,E),R&4&&i(S,"style",M.style,j.style,E),R&8){const ge=p.dynamicProps;for(let me=0;me<ge.length;me++){const Te=ge[me],Ct=M[Te],ps=j[Te];(ps!==Ct||Te==="value")&&i(S,Te,Ct,ps,E,d.children,y,I,x)}}R&1&&d.children!==p.children&&u(S,p.children)}else!P&&b==null&&Tt(S,p,M,j,y,I,E);((X=j.onVnodeUpdated)||B)&&dt(()=>{X&&Ot(X,y,p,d),B&&Pn(p,d,y,"updated")},I)},ft=(d,p,y,I,E,k,P)=>{for(let S=0;S<p.length;S++){const R=d[S],b=p[S],B=R.el&&(R.type===st||!ur(R,b)||R.shapeFlag&70)?h(R.el):y;w(R,b,B,null,I,E,k,P,!0)}},Tt=(d,p,y,I,E,k,P)=>{if(y!==I){for(const S in I){if(Hi(S))continue;const R=I[S],b=y[S];R!==b&&S!=="value"&&i(d,S,b,R,P,p.children,E,k,x)}if(y!==_e)for(const S in y)!Hi(S)&&!(S in I)&&i(d,S,y[S],null,P,p.children,E,k,x);"value"in I&&i(d,"value",y.value,I.value)}},us=(d,p,y,I,E,k,P,S,R)=>{const b=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:X}=p;X&&(S=S?S.concat(X):X),d==null?(s(b,y,I),s(B,y,I),Ne(p.children,y,B,E,k,P,S,R)):M>0&&M&64&&j&&d.dynamicChildren?(ft(d.dynamicChildren,j,y,E,k,P,S),(p.key!=null||E&&p===E.subTree)&&ll(d,p,!0)):mt(d,p,y,B,E,k,P,S,R)},hs=(d,p,y,I,E,k,P,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?E.ctx.activate(p,y,I,P,R):fs(p,y,I,E,k,P,R):Le(d,p,R)},fs=(d,p,y,I,E,k,P)=>{const S=d.component=E0(d,I,E);if(Nd(d)&&(S.ctx.renderer=Ee),I0(S),S.asyncDep){if(E&&E.registerDep(S,we),!d.el){const R=S.subTree=z(In);L(null,R,p,y)}return}we(S,d,p,y,E,k,P)},Le=(d,p,y)=>{const I=p.component=d.component;if(R1(d,p,y))if(I.asyncDep&&!I.asyncResolved){de(I,p,y);return}else I.next=p,b1(I.update),I.update();else p.el=d.el,I.vnode=p},we=(d,p,y,I,E,k,P)=>{const S=()=>{if(d.isMounted){let{next:B,bu:M,u:j,parent:X,vnode:ie}=d,ge=B,me;On(d,!1),B?(B.el=ie.el,de(d,B,P)):B=ie,M&&qi(M),(me=B.props&&B.props.onVnodeBeforeUpdate)&&Ot(me,X,B,ie),On(d,!0);const Te=Ra(d),Ct=d.subTree;d.subTree=Te,w(Ct,Te,h(Ct.el),V(Ct),d,E,k),B.el=Te.el,ge===null&&x1(d,Te.el),j&&dt(j,E),(me=B.props&&B.props.onVnodeUpdated)&&dt(()=>Ot(me,X,B,ie),E)}else{let B;const{el:M,props:j}=p,{bm:X,m:ie,parent:ge}=d,me=br(p);if(On(d,!1),X&&qi(X),!me&&(B=j&&j.onVnodeBeforeMount)&&Ot(B,ge,p),On(d,!0),M&&ee){const Te=()=>{d.subTree=Ra(d),ee(M,d.subTree,d,E,null)};me?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Te()):Te()}else{const Te=d.subTree=Ra(d);w(null,Te,y,I,d,E,k),p.el=Te.el}if(ie&&dt(ie,E),!me&&(B=j&&j.onVnodeMounted)){const Te=p;dt(()=>Ot(B,ge,Te),E)}(p.shapeFlag&256||ge&&br(ge.vnode)&&ge.vnode.shapeFlag&256)&&d.a&&dt(d.a,E),d.isMounted=!0,p=y=I=null}},R=d.effect=new tl(S,()=>wd(b),d.scope),b=d.update=()=>R.run();b.id=d.uid,On(d,!0),b()},de=(d,p,y)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,t0(d,p.props,I,y),r0(d,p.children,y),Gs(),Vo(void 0,d.update),Ys()},mt=(d,p,y,I,E,k,P,S,R=!1)=>{const b=d&&d.children,B=d?d.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:X}=p;if(j>0){if(j&128){qt(b,M,y,I,E,k,P,S,R);return}else if(j&256){ds(b,M,y,I,E,k,P,S,R);return}}X&8?(B&16&&x(b,E,k),M!==b&&u(y,M)):B&16?X&16?qt(b,M,y,I,E,k,P,S,R):x(b,E,k,!0):(B&8&&u(y,""),X&16&&Ne(M,y,I,E,k,P,S,R))},ds=(d,p,y,I,E,k,P,S,R)=>{d=d||bs,p=p||bs;const b=d.length,B=p.length,M=Math.min(b,B);let j;for(j=0;j<M;j++){const X=p[j]=R?cn(p[j]):Lt(p[j]);w(d[j],X,y,null,E,k,P,S,R)}b>B?x(d,E,k,!0,!1,M):Ne(p,y,I,E,k,P,S,R,M)},qt=(d,p,y,I,E,k,P,S,R)=>{let b=0;const B=p.length;let M=d.length-1,j=B-1;for(;b<=M&&b<=j;){const X=d[b],ie=p[b]=R?cn(p[b]):Lt(p[b]);if(ur(X,ie))w(X,ie,y,null,E,k,P,S,R);else break;b++}for(;b<=M&&b<=j;){const X=d[M],ie=p[j]=R?cn(p[j]):Lt(p[j]);if(ur(X,ie))w(X,ie,y,null,E,k,P,S,R);else break;M--,j--}if(b>M){if(b<=j){const X=j+1,ie=X<B?p[X].el:I;for(;b<=j;)w(null,p[b]=R?cn(p[b]):Lt(p[b]),y,ie,E,k,P,S,R),b++}}else if(b>j)for(;b<=M;)bt(d[b],E,k,!0),b++;else{const X=b,ie=b,ge=new Map;for(b=ie;b<=j;b++){const yt=p[b]=R?cn(p[b]):Lt(p[b]);yt.key!=null&&ge.set(yt.key,b)}let me,Te=0;const Ct=j-ie+1;let ps=!1,xu=0;const lr=new Array(Ct);for(b=0;b<Ct;b++)lr[b]=0;for(b=X;b<=M;b++){const yt=d[b];if(Te>=Ct){bt(yt,E,k,!0);continue}let Pt;if(yt.key!=null)Pt=ge.get(yt.key);else for(me=ie;me<=j;me++)if(lr[me-ie]===0&&ur(yt,p[me])){Pt=me;break}Pt===void 0?bt(yt,E,k,!0):(lr[Pt-ie]=b+1,Pt>=xu?xu=Pt:ps=!0,w(yt,p[Pt],y,null,E,k,P,S,R),Te++)}const Nu=ps?l0(lr):bs;for(me=Nu.length-1,b=Ct-1;b>=0;b--){const yt=ie+b,Pt=p[yt],Du=yt+1<B?p[yt+1].el:I;lr[b]===0?w(null,Pt,y,Du,E,k,P,S,R):ps&&(me<0||b!==Nu[me]?Dt(Pt,y,Du,2):me--)}}},Dt=(d,p,y,I,E=null)=>{const{el:k,type:P,transition:S,children:R,shapeFlag:b}=d;if(b&6){Dt(d.component.subTree,p,y,I);return}if(b&128){d.suspense.move(p,y,I);return}if(b&64){P.move(d,p,y,Ee);return}if(P===st){s(k,p,y);for(let M=0;M<R.length;M++)Dt(R[M],p,y,I);s(d.anchor,p,y);return}if(P===Wi){H(d,p,y);return}if(I!==2&&b&1&&S)if(I===0)S.beforeEnter(k),s(k,p,y),dt(()=>S.enter(k),E);else{const{leave:M,delayLeave:j,afterLeave:X}=S,ie=()=>s(k,p,y),ge=()=>{M(k,()=>{ie(),X&&X()})};j?j(k,ie,ge):ge()}else s(k,p,y)},bt=(d,p,y,I=!1,E=!1)=>{const{type:k,props:P,ref:S,children:R,dynamicChildren:b,shapeFlag:B,patchFlag:M,dirs:j}=d;if(S!=null&&hc(S,null,y,d,!0),B&256){p.ctx.deactivate(d);return}const X=B&1&&j,ie=!br(d);let ge;if(ie&&(ge=P&&P.onVnodeBeforeUnmount)&&Ot(ge,p,d),B&6)U(d.component,y,I);else{if(B&128){d.suspense.unmount(y,I);return}X&&Pn(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,y,E,Ee,I):b&&(k!==st||M>0&&M&64)?x(b,p,y,!1,!0):(k===st&&M&384||!E&&B&16)&&x(R,p,y),I&&Sa(d)}(ie&&(ge=P&&P.onVnodeUnmounted)||X)&&dt(()=>{ge&&Ot(ge,p,d),X&&Pn(d,null,p,"unmounted")},y)},Sa=d=>{const{type:p,el:y,anchor:I,transition:E}=d;if(p===st){v(y,I);return}if(p===Wi){ce(d);return}const k=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:S}=E,R=()=>P(y,k);S?S(d.el,k,R):R()}else k()},v=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},U=(d,p,y)=>{const{bum:I,scope:E,update:k,subTree:P,um:S}=d;I&&qi(I),E.stop(),k&&(k.active=!1,bt(P,d,p,y)),S&&dt(S,p),dt(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,y,I=!1,E=!1,k=0)=>{for(let P=k;P<d.length;P++)bt(d[P],p,y,I,E)},V=d=>d.shapeFlag&6?V(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),pe=(d,p,y)=>{d==null?p._vnode&&bt(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,y),bd(),p._vnode=d},Ee={p:w,um:bt,m:Dt,r:Sa,mt:fs,mc:Ne,pc:mt,pbc:ft,n:V,o:t};let ne,ee;return e&&([ne,ee]=e(Ee)),{render:pe,hydrate:ne,createApp:o0(pe,ne)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ll(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=cn(r[i]),a.el=o.el),n||ll(o,a))}}function l0(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const u0=t=>t.__isTeleport,Tr=t=>t&&(t.disabled||t.disabled===""),eh=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,fc=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},h0={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:g,querySelector:m,createText:T,createComment:w}}=l,C=Tr(e.props);let{shapeFlag:L,children:K,dynamicChildren:H}=e;if(t==null){const ce=e.el=T(""),le=e.anchor=T("");g(ce,n,s),g(le,n,s);const ve=e.target=fc(e.props,m),xe=e.targetAnchor=T("");ve&&(g(xe,ve),o=o||eh(ve));const Ne=(ht,ft)=>{L&16&&u(K,ht,ft,r,i,o,a,c)};C?Ne(n,le):ve&&Ne(ve,xe)}else{e.el=t.el;const ce=e.anchor=t.anchor,le=e.target=t.target,ve=e.targetAnchor=t.targetAnchor,xe=Tr(t.props),Ne=xe?n:le,ht=xe?ce:ve;if(o=o||eh(le),H?(f(t.dynamicChildren,H,Ne,r,i,o,a),ll(t,e,!0)):c||h(t,e,Ne,ht,r,i,o,a,!1),C)xe||Pi(e,n,ce,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ft=e.target=fc(e.props,m);ft&&Pi(e,ft,null,l,0)}else xe&&Pi(e,le,ve,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!Tr(f))&&(i(l),a&16))for(let g=0;g<c.length;g++){const m=c[g];r(m,e,n,!0,!!m.dynamicChildren)}},move:Pi,hydrate:f0};function Pi(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||Tr(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function f0(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=fc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Tr(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}}return e.anchor&&o(e.anchor)}const d0=h0,st=Symbol(void 0),ul=Symbol(void 0),In=Symbol(void 0),Wi=Symbol(void 0),Cr=[];let kt=null;function q(t=!1){Cr.push(kt=t?null:[])}function p0(){Cr.pop(),kt=Cr[Cr.length-1]||null}let Ur=1;function th(t){Ur+=t}function zd(t){return t.dynamicChildren=Ur>0?kt||bs:null,p0(),Ur>0&&kt&&kt.push(t),t}function oe(t,e,n,s,r,i){return zd(N(t,e,n,s,r,i,!0))}function He(t,e,n,s,r){return zd(z(t,e,n,s,r,!0))}function uo(t){return t?t.__v_isVNode===!0:!1}function ur(t,e){return t.type===e.type&&t.key===e.key}const qo="__vInternal",Kd=({key:t})=>t!=null?t:null,Gi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||Ke(t)||Z(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function N(t,e=null,n=null,s=0,r=null,i=t===st?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kd(e),ref:e&&Gi(e),scopeId:jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(hl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Ur>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const z=g0;function g0(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===K1)&&(t=In),uo(t)){const a=Ds(t,e,!0);return n&&hl(a,n),Ur>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(A0(t)&&(t=t.__vccOpts),e){e=m0(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=Gn(a)),Re(c)&&(fd(c)&&!W(c)&&(c=ut({},c)),e.style=Xc(c))}const o=Ue(t)?1:N1(t)?128:u0(t)?64:Re(t)?4:Z(t)?2:0;return N(t,e,n,s,r,o,i,!0)}function m0(t){return t?fd(t)||qo in t?ut({},t):t:null}function Ds(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?_0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kd(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Gi(e)):[r,Gi(e)]:Gi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),el:t.el,anchor:t.anchor}}function An(t=" ",e=0){return z(ul,null,t,e)}function y0(t,e){const n=z(Wi,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(q(),He(In,null,t)):z(In,null,t)}function Lt(t){return t==null||typeof t=="boolean"?z(In):W(t)?z(st,null,t.slice()):typeof t=="object"?cn(t):z(ul,null,String(t))}function cn(t){return t.el===null||t.memo?t:Ds(t)}function hl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(qo in e)?e._ctx=ot:r===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[An(e)]):n=8);t.children=e,t.shapeFlag|=n}function _0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Gn([e.class,s.class]));else if(r==="style")e.style=Xc([e.style,s.style]);else if(Oo(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ot(t,e,n,s=null){xt(t,e,7,[n,s])}const v0=qd();let w0=0;function E0(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||v0,i={uid:w0++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new By(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vd(s,r),emitsOptions:Cd(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=S1.bind(null,i),t.ce&&t.ce(i),i}let ze=null;const Ps=t=>{ze=t,t.scope.on()},qn=()=>{ze&&ze.scope.off(),ze=null};function Wd(t){return t.vnode.shapeFlag&4}let $r=!1;function I0(t,e=!1){$r=e;const{props:n,children:s}=t.vnode,r=Wd(t);e0(t,n,r,e),s0(t,s);const i=r?b0(t,e):void 0;return $r=!1,i}function b0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dd(new Proxy(t.ctx,G1));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?C0(t):null;Ps(t),Gs();const i=mn(s,t,0,[t.props,r]);if(Ys(),qn(),Jf(i)){if(i.then(qn,qn),e)return i.then(o=>{nh(t,o,e)}).catch(o=>{Fo(o,t,0)});t.asyncDep=i}else nh(t,i,e)}else Gd(t,e)}function nh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=yd(e)),Gd(t,n)}let sh;function Gd(t,e,n){const s=t.type;if(!t.render){if(!e&&sh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ut(ut({isCustomElement:i,delimiters:a},o),c);s.render=sh(r,l)}}t.render=s.render||Rt}Ps(t),Gs(),Y1(t),Ys(),qn()}function T0(t){return new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}})}function C0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=T0(t))},slots:t.slots,emit:t.emit,expose:e}}function zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yd(dd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in co)return co[n](t)}}))}function S0(t){return Z(t)&&t.displayName||t.name}function A0(t){return Z(t)&&"__vccOpts"in t}const $t=(t,e)=>w1(t,e,$r);function Yd(t,e,n){const s=arguments.length;return s===2?Re(e)&&!W(e)?uo(e)?z(t,null,[e]):z(t,e):z(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&uo(n)&&(n=[n]),z(t,e,n))}const k0="3.2.36",R0="http://www.w3.org/2000/svg",Un=typeof document!="undefined"?document:null,rh=Un&&Un.createElement("template"),x0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Un.createElementNS(R0,t):Un.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{rh.innerHTML=s?`<svg>${t}</svg>`:t;const a=rh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function N0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function D0(t,e,n){const s=t.style,r=Ue(n);if(n&&!r){for(const i in n)dc(s,i,n[i]);if(e&&!Ue(e))for(const i in e)n[i]==null&&dc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ih=/\s*!important$/;function dc(t,e,n){if(W(n))n.forEach(s=>dc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=P0(t,e);ih.test(n)?t.setProperty(Ws(s),n.replace(ih,""),"important"):t[s]=n}}const oh=["Webkit","Moz","ms"],xa={};function P0(t,e){const n=xa[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return xa[e]=s;s=Uo(s);for(let r=0;r<oh.length;r++){const i=oh[r]+s;if(i in t)return xa[e]=i}return e}const ah="http://www.w3.org/1999/xlink";function O0(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ah,e.slice(6,e.length)):t.setAttributeNS(ah,e,n);else{const i=ky(e);n==null||i&&!Xf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function M0(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Xd,L0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let pc=0;const U0=Promise.resolve(),$0=()=>{pc=0},F0=()=>pc||(U0.then($0),pc=Xd());function un(t,e,n,s){t.addEventListener(e,n,s)}function V0(t,e,n,s){t.removeEventListener(e,n,s)}function B0(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=j0(e);if(s){const l=i[e]=H0(s,r);un(t,a,l,c)}else o&&(V0(t,a,o,c),i[e]=void 0)}}const ch=/(?:Once|Passive|Capture)$/;function j0(t){let e;if(ch.test(t)){e={};let n;for(;n=t.match(ch);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ws(t.slice(2)),e]}function H0(t,e){const n=s=>{const r=s.timeStamp||Xd();(L0||r>=n.attached-1)&&xt(q0(s,n.value),e,5,[s])};return n.value=t,n.attached=F0(),n}function q0(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const lh=/^on[a-z]/,z0=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?N0(t,s,r):e==="style"?D0(t,n,s):Oo(e)?Qc(e)||B0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K0(t,e,s,r))?M0(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),O0(t,e,s,r))};function K0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&lh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lh.test(e)&&Ue(n)?!1:e in t}const Os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>qi(e,n):e};function W0(t){t.target.composing=!0}function uh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rR={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Os(r);const i=s||r.props&&r.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ro(a)),t._assign(a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",W0),un(t,"compositionend",uh),un(t,"change",uh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Os(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ro(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},iR={created(t,{value:e},n){t.checked=Ns(e,n.props.value),t._assign=Os(n),un(t,"change",()=>{t._assign(Fr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Os(s),e!==n&&(t.checked=Ns(e,s.props.value))}},oR={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Mo(e);un(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ro(Fr(o)):Fr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Os(s)},mounted(t,{value:e}){hh(t,e)},beforeUpdate(t,e,n){t._assign=Os(n)},updated(t,{value:e}){hh(t,e)}};function hh(t,e){const n=t.multiple;if(!(n&&!W(e)&&!Mo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Fr(i);if(n)W(e)?i.selected=Py(e,o)>-1:i.selected=e.has(o);else if(Ns(Fr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Fr(t){return"_value"in t?t._value:t.value}const G0=["ctrl","shift","alt","meta"],Y0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>G0.some(n=>t[`${n}Key`]&&!e.includes(n))},aR=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Y0[e[r]];if(i&&i(n,e))return}return t(n,...s)},X0=ut({patchProp:z0},x0);let fh;function Q0(){return fh||(fh=a0(X0))}const J0=(...t)=>{const e=Q0().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Z0(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Z0(t){return Ue(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},e_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},t_=function(t){const e=Qd(t);return Jd.encodeByteArray(e,!0)},Zd=function(t){return t_(t).replace(/\./g,"")},n_=function(t){try{return Jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ep(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r_(){return Fe().indexOf("Electron/")>=0}function sp(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i_(){return Fe().indexOf("MSAppHost/")>=0}function o_(){return typeof indexedDB=="object"}function a_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="FirebaseError";class kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=c_,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?l_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new kn(r,a,s)}}function l_(t,e){return t.replace(u_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const u_=/\{\$([^}]+)}/g;function h_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(dh(i)&&dh(o)){if(!ho(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function f_(t,e){const n=new d_(t,e);return n.subscribe.bind(n)}class d_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");p_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Na),r.error===void 0&&(r.error=Na),r.complete===void 0&&(r.complete=Na);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function p_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Na(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new s_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(y_(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:m_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function m_(t){return t===Ln?void 0:t}function y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const v_={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},w_=ae.INFO,E_={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},I_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=E_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fl{constructor(e){this.name=e,this._logLevel=w_,this._logHandler=I_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const b_=(t,e)=>e.some(n=>t instanceof n);let ph,gh;function T_(){return ph||(ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C_(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rp=new WeakMap,gc=new WeakMap,ip=new WeakMap,Da=new WeakMap,dl=new WeakMap;function S_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_n(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rp.set(n,t)}).catch(()=>{}),dl.set(e,t),e}function A_(t){if(gc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gc.set(t,e)}let mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ip.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function k_(t){mc=t(mc)}function R_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Pa(this),e,...n);return ip.set(s,e.sort?e.sort():[e]),_n(s)}:C_().includes(t)?function(...e){return t.apply(Pa(this),e),_n(rp.get(this))}:function(...e){return _n(t.apply(Pa(this),e))}}function x_(t){return typeof t=="function"?R_(t):(t instanceof IDBTransaction&&A_(t),b_(t,T_())?new Proxy(t,mc):t)}function _n(t){if(t instanceof IDBRequest)return S_(t);if(Da.has(t))return Da.get(t);const e=x_(t);return e!==t&&(Da.set(t,e),dl.set(e,t)),e}const Pa=t=>dl.get(t);function N_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const D_=["get","getKey","getAll","getAllKeys","count"],P_=["put","add","delete","clear"],Oa=new Map;function mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=P_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||D_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Oa.set(e,i),i}k_(t=>Mu(Aa({},t),{get:(e,n,s)=>mh(e,n)||t.get(e,n,s),has:(e,n)=>!!mh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function M_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",yh="0.7.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new fl("@firebase/app"),L_="@firebase/app-compat",U_="@firebase/analytics-compat",$_="@firebase/analytics",F_="@firebase/app-check-compat",V_="@firebase/app-check",B_="@firebase/auth",j_="@firebase/auth-compat",H_="@firebase/database",q_="@firebase/database-compat",z_="@firebase/functions",K_="@firebase/functions-compat",W_="@firebase/installations",G_="@firebase/installations-compat",Y_="@firebase/messaging",X_="@firebase/messaging-compat",Q_="@firebase/performance",J_="@firebase/performance-compat",Z_="@firebase/remote-config",ev="@firebase/remote-config-compat",tv="@firebase/storage",nv="@firebase/storage-compat",sv="@firebase/firestore",rv="@firebase/firestore-compat",iv="firebase",ov="9.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="[DEFAULT]",av={[yc]:"fire-core",[L_]:"fire-core-compat",[$_]:"fire-analytics",[U_]:"fire-analytics-compat",[V_]:"fire-app-check",[F_]:"fire-app-check-compat",[B_]:"fire-auth",[j_]:"fire-auth-compat",[H_]:"fire-rtdb",[q_]:"fire-rtdb-compat",[z_]:"fire-fn",[K_]:"fire-fn-compat",[W_]:"fire-iid",[G_]:"fire-iid-compat",[Y_]:"fire-fcm",[X_]:"fire-fcm-compat",[Q_]:"fire-perf",[J_]:"fire-perf-compat",[Z_]:"fire-rc",[ev]:"fire-rc-compat",[tv]:"fire-gcs",[nv]:"fire-gcs-compat",[sv]:"fire-fst",[rv]:"fire-fst-compat","fire-js":"fire-js",[iv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map,_c=new Map;function cv(t,e){try{t.container.addComponent(e)}catch(n){pl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yn(t){const e=t.name;if(_c.has(e))return pl.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,t);for(const n of fo.values())cv(n,t);return!0}function Ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Xn=new ri("app","Firebase",lv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=ov;function hv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:op,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});const r=fo.get(s);if(r){if(ho(t,r.options)&&ho(n,r.config))return r;throw Xn.create("duplicate-app",{appName:s})}const i=new __(s);for(const a of _c.values())i.addComponent(a);const o=new uv(t,n,i);return fo.set(s,o),o}function gl(t=op){const e=fo.get(t);if(!e)throw Xn.create("no-app",{appName:t});return e}function Ft(t,e,n){var s;let r=(s=av[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pl.warn(a.join(" "));return}Yn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="firebase-heartbeat-database",dv=1,Vr="firebase-heartbeat-store";let Ma=null;function ap(){return Ma||(Ma=N_(fv,dv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vr)}}}).catch(t=>{throw Xn.create("storage-open",{originalErrorMessage:t.message})})),Ma}async function pv(t){try{return(await ap()).transaction(Vr).objectStore(Vr).get(cp(t))}catch(e){throw Xn.create("storage-get",{originalErrorMessage:e.message})}}async function _h(t,e){try{const s=(await ap()).transaction(Vr,"readwrite");return await s.objectStore(Vr).put(e,cp(t)),s.done}catch(n){throw Xn.create("storage-set",{originalErrorMessage:n.message})}}function cp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=1024,mv=30*24*60*60*1e3;class yv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=mv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vh(),{heartbeatsToSend:n,unsentEntries:s}=_v(this._heartbeatsCache.heartbeats),r=Zd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vh(){return new Date().toISOString().substring(0,10)}function _v(t,e=gv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o_()?a_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wh(t){return Zd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){Yn(new bn("platform-logger",e=>new O_(e),"PRIVATE")),Yn(new bn("heartbeat",e=>new yv(e),"PRIVATE")),Ft(yc,yh,t),Ft(yc,yh,"esm2017"),Ft("fire-js","")}wv("");function ml(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function lp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ev=lp,up=new ri("auth","Firebase",lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new fl("@firebase/auth");function Yi(t,...e){Eh.logLevel<=ae.ERROR&&Eh.error(`Auth (${Qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw yl(t,...e)}function Vt(t,...e){return yl(t,...e)}function Iv(t,e,n){const s=Object.assign(Object.assign({},Ev()),{[e]:n});return new ri("auth","Firebase",s).create(e,{appName:t.name})}function yl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return up.create(t,...e)}function G(t,e,...n){if(!t)throw yl(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function Jt(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map;function Wt(t){Jt(t instanceof Function,"Expected a class definition");let e=Ih.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ih.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e){const n=Ko(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ho(i,e!=null?e:{}))return r;Nt(r,"already-initialized")}return n.initialize({options:e})}function Tv(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Cv(){return bh()==="http:"||bh()==="https:"}function bh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cv()||tp()||"connection"in navigator)?navigator.onLine:!0}function Av(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=ep()||np()}get(){return Sv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new oi(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ci(t,e,n,s,r={}){return fp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),hp.fetch()(dp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function fp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},kv),e);try{const r=new xv(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Iv(t,u,l);Nt(t,u)}}catch(r){if(r instanceof kn)throw r;Nt(t,"network-request-failed")}}async function li(t,e,n,s,r={}){const i=await ci(t,e,n,s,r);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?_l(t.config,r):`${t.config.apiScheme}://${r}`}class xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),Rv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function Dv(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pv(t,e=!1){const n=Oe(t),s=await n.getIdToken(e),r=vl(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(La(r.auth_time)),issuedAtTime:Sr(La(r.iat)),expirationTime:Sr(La(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function vl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const r=n_(n);return r?JSON.parse(r):(Yi("Failed to decode base64 JWT payload"),null)}catch(r){return Yi("Caught error parsing JWT payload as JSON",r),null}}function Ov(t){const e=vl(t);return G(e,"internal-error"),G(typeof e.exp!="undefined","internal-error"),G(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kn&&Mv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Mv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Br(t,Dv(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fv(i.providerUserInfo):[],a=$v(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Uv(t){const e=Oe(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $v(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Fv(t){return t.map(e=>{var{providerId:n}=e,s=ml(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(t,e){const n=await fp(t,{},async()=>{const s=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=dp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken!="undefined","internal-error"),G(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Vv(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new jr;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){G(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pv(this,e)}reload(){return Uv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,Nv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:H,isAnonymous:ce,providerData:le,stsTokenManager:ve}=n;G(K&&ve,e,"internal-error");const xe=jr.fromJSON(this.name,ve);G(typeof K=="string",e,"internal-error"),sn(h,e.name),sn(f,e.name),G(typeof H=="boolean",e,"internal-error"),G(typeof ce=="boolean",e,"internal-error"),sn(g,e.name),sn(m,e.name),sn(T,e.name),sn(w,e.name),sn(C,e.name),sn(L,e.name);const Ne=new zn({uid:K,auth:e,email:f,emailVerified:H,displayName:h,isAnonymous:ce,photoURL:m,phoneNumber:g,tenantId:T,stsTokenManager:xe,createdAt:C,lastLoginAt:L});return le&&Array.isArray(le)&&(Ne.providerData=le.map(ht=>Object.assign({},ht))),w&&(Ne._redirectEventId=w),Ne}static async _fromIdTokenResponse(e,n,s=!1){const r=new jr;r.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await po(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gp.type="NONE";const Th=gp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Xi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ss(Wt(Th),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Wt(Th);const o=Xi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ss(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wp(e))return"Blackberry";if(Ep(e))return"Webos";if(wl(e))return"Safari";if((e.includes("chrome/")||yp(e))&&!e.includes("edge/"))return"Chrome";if(vp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mp(t=Fe()){return/firefox\//i.test(t)}function wl(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yp(t=Fe()){return/crios\//i.test(t)}function _p(t=Fe()){return/iemobile/i.test(t)}function vp(t=Fe()){return/android/i.test(t)}function wp(t=Fe()){return/blackberry/i.test(t)}function Ep(t=Fe()){return/webos/i.test(t)}function Wo(t=Fe()){return/iphone|ipad|ipod/i.test(t)}function Bv(t=Fe()){var e;return Wo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jv(){return sp()&&document.documentMode===10}function Ip(t=Fe()){return Wo(t)||vp(t)||Ep(t)||wp(t)||/windows phone/i.test(t)||_p(t)}function Hv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=Ch(Fe());break;case"Worker":n=`${Ch(Fe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sh(this),this.idTokenSubscription=new Sh(this),this.beforeStateQueue=new qv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Av()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Go(t){return Oe(t)}class Sh{constructor(e){this.auth=e,this.observer=null,this.addObserver=f_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function Kv(t,e){return ci(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(t,e){return li(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function Yv(t,e){return li(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends El{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Hr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Hr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Wv(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gv(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yv(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return li(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="http://localhost";class Qn extends El{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ml(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:Xv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jv(t){const e=mr(yr(t)).link,n=e?mr(yr(e)).deep_link_id:null,s=mr(yr(t)).deep_link_id;return(s?mr(yr(s)).link:null)||s||n||e||t}class Il{constructor(e){var n,s,r,i,o,a;const c=mr(yr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Qv((r=c.mode)!==null&&r!==void 0?r:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Jv(e);try{return new Il(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return Hr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Il.parseLink(n);return G(s,"argument-error"),Hr._fromEmailAndCode(e,s.code,s.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ui{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ui{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ui{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(t,e){return li(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),o=Ah(s);return new Jn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ah(s);return new Jn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ah(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends kn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new go(e,n,s,r)}}function Cp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,s):i})}async function ew(t,e,n=!1){const s=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Br(t,Cp(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=vl(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Jn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e,n=!1){const s="signIn",r=await Cp(t,s,e),i=await Jn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function nw(t,e){return Sp(Go(t),e)}async function cR(t,e,n){const s=Go(t),r=await Zv(s,{returnSecureToken:!0,email:e,password:n}),i=await Jn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function lR(t,e,n){return nw(Oe(t),Js.credential(e,n))}function sw(t,e,n,s){return Oe(t).onAuthStateChanged(e,n,s)}function rw(t){return Oe(t).signOut()}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){const t=Fe();return wl(t)||Wo(t)}const ow=1e3,aw=10;class kp extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iw()&&Hv(),this.fallbackToPolling=Ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);jv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,aw):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kp.type="LOCAL";const cw=kp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rp.type="SESSION";const xp=Rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await lw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=bl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function hw(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){return typeof Bt().WorkerGlobalScope!="undefined"&&typeof Bt().importScripts=="function"}async function fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pw(){return Np()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="firebaseLocalStorageDb",gw=1,yo="firebaseLocalStorage",Pp="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function mw(){const t=indexedDB.deleteDatabase(Dp);return new hi(t).toPromise()}function wc(){const t=indexedDB.open(Dp,gw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yo,{keyPath:Pp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yo)?e(s):(s.close(),await mw(),e(await wc()))})})}async function kh(t,e,n){const s=Xo(t,!0).put({[Pp]:e,value:n});return new hi(s).toPromise()}async function yw(t,e){const n=Xo(t,!1).get(e),s=await new hi(n).toPromise();return s===void 0?null:s.value}function Rh(t,e){const n=Xo(t,!0).delete(e);return new hi(n).toPromise()}const _w=800,vw=3;class Op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Np()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(pw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fw(),!this.activeServiceWorker)return;this.sender=new uw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wc();return await kh(e,mo,"1"),await Rh(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>kh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xo(r,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Op.type="LOCAL";const ww=Op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Iw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Ew().appendChild(s)})}function bw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){return e?Wt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends El{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Cw(t){return Sp(t.auth,new Tl(t),t.bypassAuthState)}function Sw(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),tw(n,new Tl(t),t.bypassAuthState)}async function Aw(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),ew(n,new Tl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cw;case"linkViaPopup":case"linkViaRedirect":return Aw;case"reauthViaPopup":case"reauthViaRedirect":return Sw;default:Nt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new oi(2e3,1e4);class ws extends Mp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kw.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="pendingRedirect",Qi=new Map;class xw extends Mp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const s=await Nw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nw(t,e){const n=Ow(e),s=Pw(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Dw(t,e){Qi.set(t._key(),e)}function Pw(t){return Wt(t._redirectPersistence)}function Ow(t){return Xi(Rw,t.config.apiKey,t.name)}async function Mw(t,e,n=!1){const s=Go(t),r=Tw(s,e),o=await new xw(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=10*60*1e3;class Uw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$w(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(xh(e))}saveEventToCache(e){this.cachedEventUids.add(xh(e)),this.lastProcessedEventTime=Date.now()}}function xh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $w(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bw=/^https?/;async function jw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fw(t);for(const n of e)try{if(Hw(n))return}catch{}Nt(t,"unauthorized-domain")}function Hw(t){const e=vc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Bw.test(n))return!1;if(Vw.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new oi(3e4,6e4);function Nh(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zw(t){return new Promise((e,n)=>{var s,r,i;function o(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),n(Vt(t,"network-request-failed"))},timeout:qw.get()})}if(!((r=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)o();else{const a=bw("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},Iw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ji=null,e})}let Ji=null;function Kw(t){return Ji=Ji||zw(t),Ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new oi(5e3,15e3),Gw="__/auth/iframe",Yw="emulator/auth/iframe",Xw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_l(e,Yw):`https://${t.config.authDomain}/${Gw}`,s={apiKey:e.apiKey,appName:t.name,v:Qs},r=Qw.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ii(s).slice(1)}`}async function Zw(t){const e=await Kw(t),n=Bt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Jw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xw,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Bt().setTimeout(()=>{i(o)},Ww.get());function c(){Bt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tE=500,nE=600,sE="_blank",rE="http://localhost";class Dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iE(t,e,n,s=tE,r=nE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},eE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Fe().toLowerCase();n&&(a=yp(l)?sE:n),mp(l)&&(e=e||rE,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(Bv(l)&&a!=="_self")return oE(e||"",a),new Dh(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Dh(h)}function oE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="__/auth/handler",cE="emulator/auth/handler";function Ph(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qs,eventId:r};if(e instanceof Tp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",h_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ui){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lE(t)}?${ii(a).slice(1)}`}function lE({config:t}){return t.emulator?_l(t,cE):`https://${t.authDomain}/${aE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class uE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xp,this._completeRedirectFn=Mw,this._overrideRedirectResult=Dw}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ph(e,n,s,vc(),r);return iE(e,o,bl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),hw(Ph(e,n,s,vc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Zw(e),s=new Uw(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ua];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ip()||wl()||Wo()}}const hE=uE;var Oh="@firebase/auth",Mh="0.20.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pE(t){Yn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},u=new zv(a,c,l);return Tv(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Yn(new bn("auth-internal",e=>{const n=Go(e.getProvider("auth").getImmediate());return(s=>new fE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Oh,Mh,dE(t)),Ft(Oh,Mh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t=gl()){const e=Ko(t,"auth");return e.isInitialized()?e.getImmediate():bv(t,{popupRedirectResolver:hE,persistence:[ww,cw,xp]})}pE("Browser");var mE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O,Cl=Cl||{},Y=mE||self;function _o(){}function Ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yE(t){return Object.prototype.hasOwnProperty.call(t,$a)&&t[$a]||(t[$a]=++_E)}var $a="closure_uid_"+(1e9*Math.random()>>>0),_E=0;function vE(t,e,n){return t.call.apply(t.bind,arguments)}function wE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=vE:We=wE,We.apply(null,arguments)}function Mi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Rn(){this.s=this.s,this.o=this.o}var EE=0;Rn.prototype.s=!1;Rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),EE!=0)&&yE(this)};Rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Up=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},$p=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function IE(t){e:{var e=dI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Lh(t){return Array.prototype.concat.apply([],arguments)}function Sl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vo(t){return/^[\s\xa0]*$/.test(t)}var Uh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rt(t,e){return t.indexOf(e)!=-1}function Fa(t,e){return t<e?-1:t>e?1:0}var it;e:{var $h=Y.navigator;if($h){var Fh=$h.userAgent;if(Fh){it=Fh;break e}}it=""}function Al(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Fp(t){const e={};for(const n in t)e[n]=t[n];return e}var Vh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Vh.length;i++)n=Vh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function kl(t){return kl[" "](t),t}kl[" "]=_o;function bE(t){var e=SE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TE=rt(it,"Opera"),Ms=rt(it,"Trident")||rt(it,"MSIE"),Bp=rt(it,"Edge"),Ic=Bp||Ms,jp=rt(it,"Gecko")&&!(rt(it.toLowerCase(),"webkit")&&!rt(it,"Edge"))&&!(rt(it,"Trident")||rt(it,"MSIE"))&&!rt(it,"Edge"),CE=rt(it.toLowerCase(),"webkit")&&!rt(it,"Edge");function Hp(){var t=Y.document;return t?t.documentMode:void 0}var wo;e:{var Va="",Ba=function(){var t=it;if(jp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Bp)return/Edge\/([\d\.]+)/.exec(t);if(Ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CE)return/WebKit\/(\S+)/.exec(t);if(TE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ba&&(Va=Ba?Ba[1]:""),Ms){var ja=Hp();if(ja!=null&&ja>parseFloat(Va)){wo=String(ja);break e}}wo=Va}var SE={};function AE(){return bE(function(){let t=0;const e=Uh(String(wo)).split("."),n=Uh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Fa(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Fa(r[2].length==0,i[2].length==0)||Fa(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var bc;if(Y.document&&Ms){var Bh=Hp();bc=Bh||parseInt(wo,10)||void 0}else bc=void 0;var kE=bc,RE=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",_o,e),Y.removeEventListener("test",_o,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function qr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jp){e:{try{kl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qr.Z.h.call(this)}}Qe(qr,Ze);var xE={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var di="closure_listenable_"+(1e6*Math.random()|0),NE=0;function DE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++NE,this.ca=this.fa=!1}function Qo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Jo(t){this.src=t,this.g={},this.h=0}Jo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new DE(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Tc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Up(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Qo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Rl="closure_lm_"+(1e6*Math.random()|0),Ha={};function qp(t,e,n,s,r){if(s&&s.once)return Kp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)qp(t,e[i],n,s,r);return null}return n=Dl(n),t&&t[di]?t.N(e,n,fi(s)?!!s.capture:!!s,r):zp(t,e,n,!1,s,r)}function zp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=fi(r)?!!r.capture:!!r,a=Nl(t);if(a||(t[Rl]=a=new Jo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=PE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)RE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Gp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PE(){function t(n){return e.call(t.src,t.listener,n)}var e=OE;return t}function Kp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kp(t,e[i],n,s,r);return null}return n=Dl(n),t&&t[di]?t.O(e,n,fi(s)?!!s.capture:!!s,r):zp(t,e,n,!0,s,r)}function Wp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wp(t,e[i],n,s,r);else s=fi(s)?!!s.capture:!!s,n=Dl(n),t&&t[di]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cc(i,n,s,r),-1<n&&(Qo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cc(e,n,s,r)),(n=-1<t?e[t]:null)&&xl(n))}function xl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[di])Tc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Nl(e))?(Tc(n,t),n.h==0&&(n.src=null,e[Rl]=null)):Qo(t)}}}function Gp(t){return t in Ha?Ha[t]:Ha[t]="on"+t}function OE(t,e){if(t.ca)t=!0;else{e=new qr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&xl(t),t=n.call(s,e)}return t}function Nl(t){return t=t[Rl],t instanceof Jo?t:null}var qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(t){return typeof t=="function"?t:(t[qa]||(t[qa]=function(e){return t.handleEvent(e)}),t[qa])}function Ve(){Rn.call(this),this.i=new Jo(this),this.P=this,this.I=null}Qe(Ve,Rn);Ve.prototype[di]=!0;Ve.prototype.removeEventListener=function(t,e,n,s){Wp(this,t,e,n,s)};function Ge(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),Vp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Li(o,s,!0,e)&&r}if(o=e.g=t,r=Li(o,s,!0,e)&&r,r=Li(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Li(o,s,!1,e)&&r}Ve.prototype.M=function(){if(Ve.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Qo(n[s]);delete t.g[e],t.h--}}this.I=null};Ve.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Li(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Tc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Pl=Y.JSON.stringify;function ME(){var t=Xp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LE{constructor(){this.h=this.g=null}add(e,n){const s=Yp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UE,t=>t.reset());class UE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $E(t){Y.setTimeout(()=>{throw t},0)}function Ol(t,e){Sc||FE(),Ac||(Sc(),Ac=!0),Xp.add(t,e)}var Sc;function FE(){var t=Y.Promise.resolve(void 0);Sc=function(){t.then(VE)}}var Ac=!1,Xp=new LE;function VE(){for(var t;t=ME();){try{t.h.call(t.g)}catch(n){$E(n)}var e=Yp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ac=!1}function Zo(t,e){Ve.call(this),this.h=t||1,this.g=e||Y,this.j=We(this.kb,this),this.l=Date.now()}Qe(Zo,Ve);O=Zo.prototype;O.da=!1;O.S=null;O.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(Ml(this),this.start()))}};O.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ml(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}O.M=function(){Zo.Z.M.call(this),Ml(this),delete this.g};function Ll(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Qp(t){t.g=Ll(()=>{t.g=null,t.i&&(t.i=!1,Qp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BE extends Rn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qp(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(t){Rn.call(this),this.h=t,this.g={}}Qe(zr,Rn);var jh=[];function Jp(t,e,n,s){Array.isArray(n)||(n&&(jh[0]=n.toString()),n=jh);for(var r=0;r<n.length;r++){var i=qp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zp(t){Al(t.g,function(e,n){this.g.hasOwnProperty(n)&&xl(e)},t),t.g={}}zr.prototype.M=function(){zr.Z.M.call(this),Zp(this)};zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ea(){this.g=!0}ea.prototype.Aa=function(){this.g=!1};function jE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function HE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Es(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zE(t,n)+(s?" "+s:"")})}function qE(t,e){t.info(function(){return"TIMEOUT: "+e})}ea.prototype.info=function(){};function zE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Pl(n)}catch{return e}}var as={},Hh=null;function ta(){return Hh=Hh||new Ve}as.Ma="serverreachability";function eg(t){Ze.call(this,as.Ma,t)}Qe(eg,Ze);function Kr(t){const e=ta();Ge(e,new eg(e))}as.STAT_EVENT="statevent";function tg(t,e){Ze.call(this,as.STAT_EVENT,t),this.stat=e}Qe(tg,Ze);function at(t){const e=ta();Ge(e,new tg(e,t))}as.Na="timingevent";function ng(t,e){Ze.call(this,as.Na,t),this.size=e}Qe(ng,Ze);function pi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var na={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},sg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ul(){}Ul.prototype.h=null;function qh(t){return t.h||(t.h=t.i())}function rg(){}var gi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function $l(){Ze.call(this,"d")}Qe($l,Ze);function Fl(){Ze.call(this,"c")}Qe(Fl,Ze);var kc;function sa(){}Qe(sa,Ul);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};kc=new sa;function mi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new zr(this),this.P=KE,t=Ic?125:void 0,this.W=new Zo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ig}function ig(){this.i=null,this.g="",this.h=!1}var KE=45e3,Rc={},Eo={};O=mi.prototype;O.setTimeout=function(t){this.P=t};function xc(t,e,n){t.K=1,t.v=ia(Zt(e)),t.s=n,t.U=!0,og(t,null)}function og(t,e){t.F=Date.now(),yi(t),t.A=Zt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),dg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new ig,t.g=Pg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new BE(We(t.Ia,t,t.g),t.O)),Jp(t.V,t.g,"readystatechange",t.gb),e=t.H?Fp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Kr(),jE(t.j,t.u,t.A,t.m,t.X,t.s)}O.gb=function(t){t=t.target;const e=this.L;e&&Gt(t)==3?e.l():this.Ia(t)};O.Ia=function(t){try{if(t==this.g)e:{const u=Gt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ic||this.g&&(this.h.h||this.g.ga()||Gh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Kr(3):Kr(2)),ra(this);var n=this.g.ba();this.N=n;t:if(ag(this)){var s=Gh(this.g);t="";var r=s.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Vn(this),Ar(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,HE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vo(a)){var l=a;break t}}l=null}if(n=l)Es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Nc(this,n);else{this.i=!1,this.o=3,at(12),Vn(this),Ar(this);break e}}this.U?(cg(this,u,o),Ic&&this.i&&u==3&&(Jp(this.V,this.W,"tick",this.fb),this.W.start())):(Es(this.j,this.m,o,null),Nc(this,o)),u==4&&Vn(this),this.i&&!this.I&&(u==4?Rg(this.l,this):(this.i=!1,yi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Vn(this),Ar(this)}}}catch{}finally{}};function ag(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function cg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=WE(t,n),r==Eo){e==4&&(t.o=4,at(14),s=!1),Es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Rc){t.o=4,at(15),Es(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Es(t.j,t.m,r,null),Nc(t,r);ag(t)&&r!=Eo&&r!=Rc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gl(e),e.L=!0,at(11))):(Es(t.j,t.m,n,"[Invalid Chunked Response]"),Vn(t),Ar(t))}O.fb=function(){if(this.g){var t=Gt(this.g),e=this.g.ga();this.C<e.length&&(ra(this),cg(this,t,e),this.i&&t!=4&&yi(this))}};function WE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Eo:(n=Number(e.substring(n,s)),isNaN(n)?Rc:(s+=1,s+n>e.length?Eo:(e=e.substr(s,n),t.C=s+n,e)))}O.cancel=function(){this.I=!0,Vn(this)};function yi(t){t.Y=Date.now()+t.P,lg(t,t.P)}function lg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pi(We(t.eb,t),e)}function ra(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}O.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qE(this.j,this.A),this.K!=2&&(Kr(),at(17)),Vn(this),this.o=2,Ar(this)):lg(this,this.Y-t)};function Ar(t){t.l.G==0||t.I||Rg(t.l,t)}function Vn(t){ra(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ml(t.W),Zp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Nc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Dc(n.i,t))){if(n.I=t.N,!t.J&&Dc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Co(n),ca(n);else break e;Wl(n),at(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=pi(We(n.ab,n),6e3));if(1>=mg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Bn(n,11)}else if((t.J||n.g==t)&&Co(n),!vo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(rt(m,"spdy")||rt(m,"quic")||rt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(jl(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,Ae(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Dg(s,s.H?s.la:null,s.W),o.J){yg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ra(a),yi(a)),s.g=o}else Ag(s);0<n.l.length&&la(n)}else l[0]!="stop"&&l[0]!="close"||Bn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Bn(n,7):Kl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Kr(4)}catch{}}function GE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ec(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Vl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ec(t)||typeof t=="string")$p(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ec(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=GE(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Zs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Zs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}O=Zs.prototype;O.R=function(){Bl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};O.T=function(){return Bl(this),this.g.concat()};function Bl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Zn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Zn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}O.get=function(t,e){return Zn(this.h,t)?this.h[t]:e};O.set=function(t,e){Zn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};O.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ug=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function YE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function es(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof es){this.g=e!==void 0?e:t.g,Io(this,t.j),this.s=t.s,bo(this,t.i),To(this,t.m),this.l=t.l,e=t.h;var n=new Wr;n.i=e.i,e.g&&(n.g=new Zs(e.g),n.h=e.h),zh(this,n),this.o=t.o}else t&&(n=String(t).match(ug))?(this.g=!!e,Io(this,n[1]||"",!0),this.s=kr(n[2]||""),bo(this,n[3]||"",!0),To(this,n[4]),this.l=kr(n[5]||"",!0),zh(this,n[6]||"",!0),this.o=kr(n[7]||"")):(this.g=!!e,this.h=new Wr(null,this.g))}es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_r(e,Kh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_r(e,Kh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(_r(n,n.charAt(0)=="/"?eI:ZE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_r(n,nI)),t.join("")};function Zt(t){return new es(t)}function Io(t,e,n){t.j=n?kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bo(t,e,n){t.i=n?kr(e,!0):e}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zh(t,e,n){e instanceof Wr?(t.h=e,sI(t.h,t.g)):(n||(e=_r(e,tI)),t.h=new Wr(e,t.g))}function Ae(t,e,n){t.h.set(e,n)}function ia(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function XE(t){return t instanceof es?Zt(t):new es(t,void 0)}function QE(t,e,n,s){var r=new es(null,void 0);return t&&Io(r,t),e&&bo(r,e),n&&To(r,n),s&&(r.l=s),r}function kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _r(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kh=/[#\/\?@]/g,ZE=/[#\?:]/g,eI=/[#\?]/g,tI=/[#\?@]/g,nI=/#/g;function Wr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Zs,t.h=0,t.i&&YE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Wr.prototype;O.add=function(t,e){xn(this),this.i=null,t=er(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function hg(t,e){xn(t),e=er(t,e),Zn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Zn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Bl(t)))}function fg(t,e){return xn(t),e=er(t,e),Zn(t.g.h,e)}O.forEach=function(t,e){xn(this),this.g.forEach(function(n,s){$p(n,function(r){t.call(e,r,s,this)},this)},this)};O.T=function(){xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};O.R=function(t){xn(this);var e=[];if(typeof t=="string")fg(this,t)&&(e=Lh(e,this.g.get(er(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Lh(e,t[n])}return e};O.set=function(t,e){return xn(this),this.i=null,t=er(this,t),fg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function dg(t,e,n){hg(t,e),0<n.length&&(t.i=null,t.g.set(er(t,e),Sl(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function er(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sI(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(hg(this,s),dg(this,r,n))},t)),t.j=e}var rI=class{constructor(t,e){this.h=t,this.g=e}};function pg(t){this.l=t||iI,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ea&&Y.g.Ea()&&Y.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iI=10;function gg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mg(t){return t.h?1:t.g?t.g.size:0}function Dc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jl(t,e){t.g?t.g.add(e):t.h=e}function yg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}pg.prototype.cancel=function(){if(this.i=_g(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _g(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sl(t.i)}function Hl(){}Hl.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Hl.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function oI(){this.g=new Hl}function aI(t,e,n){const s=n||"";try{Vl(t,function(r,i){let o=r;fi(r)&&(o=Pl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function cI(t,e){const n=new ea;if(Y.Image){const s=new Image;s.onload=Mi(Ui,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Mi(Ui,n,s,"TestLoadImage: error",!1,e),s.onabort=Mi(Ui,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Mi(Ui,n,s,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ui(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function _i(t){this.l=t.$b||null,this.j=t.ib||!1}Qe(_i,Ul);_i.prototype.g=function(){return new oa(this.l,this.j)};_i.prototype.i=function(t){return function(){return t}}({});function oa(t,e){Ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ql,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(oa,Ve);var ql=0;O=oa.prototype;O.open=function(t,e){if(this.readyState!=ql)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gr(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=ql};O.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gr(this)),this.g&&(this.readyState=3,Gr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Y.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function vg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}O.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vi(this):Gr(this),this.readyState==3&&vg(this)}};O.Ua=function(t){this.g&&(this.response=this.responseText=t,vi(this))};O.Ta=function(t){this.g&&(this.response=t,vi(this))};O.ha=function(){this.g&&vi(this)};function vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gr(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lI=Y.JSON.parse;function Me(t){Ve.call(this),this.headers=new Zs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wg,this.K=this.L=!1}Qe(Me,Ve);var wg="",uI=/^https?$/i,hI=["POST","PUT"];O=Me.prototype;O.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kc.g(),this.C=this.u?qh(this.u):qh(kc),this.g.onreadystatechange=We(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Wh(this,i);return}t=n||"";const r=new Zs(this.headers);s&&Vl(s,function(i,o){r.set(o,i)}),s=IE(r.T()),n=Y.FormData&&t instanceof Y.FormData,!(0<=Up(hI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bg(this),0<this.B&&((this.K=fI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.pa,this)):this.A=Ll(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wh(this,i)}};function fI(t){return Ms&&AE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function dI(t){return t.toLowerCase()=="content-type"}O.pa=function(){typeof Cl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Wh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Eg(t),aa(t)}function Eg(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),aa(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),Me.Z.M.call(this)};O.Fa=function(){this.s||(this.F||this.v||this.l?Ig(this):this.cb())};O.cb=function(){Ig(this)};function Ig(t){if(t.h&&typeof Cl!="undefined"&&(!t.C[1]||Gt(t)!=4||t.ba()!=2)){if(t.v&&Gt(t)==4)Ll(t.Fa,0,t);else if(Ge(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(ug)[1]||null;if(!r&&Y.self&&Y.self.location){var i=Y.self.location.protocol;r=i.substr(0,i.length-1)}s=!uI.test(r?r.toLowerCase():"")}n=s}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<Gt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Eg(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){bg(t);const n=t.g,s=t.C[0]?_o:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=s}catch{}}}function bg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function Gt(t){return t.g?t.g.readyState:0}O.ba=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};O.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lI(e)}};function Gh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Da=function(){return this.m};O.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pI(t){let e="";return Al(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=pI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function hr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tg(t){this.za=0,this.l=[],this.h=new ea,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=hr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=hr("baseRetryDelayMs",5e3,t),this.$a=hr("retryDelaySeedMs",1e4,t),this.Ya=hr("forwardChannelMaxRetries",2,t),this.ra=hr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new pg(t&&t.concurrentRequestLimit),this.Ca=new oI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}O=Tg.prototype;O.ma=8;O.G=1;function Kl(t){if(Cg(t),t.G==3){var e=t.V++,n=Zt(t.F);Ae(n,"SID",t.J),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),wi(t,n),e=new mi(t,t.h,e,void 0),e.K=2,e.v=ia(Zt(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Pg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),yi(e)}Ng(t)}O.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ca(t){t.g&&(Gl(t),t.g.cancel(),t.g=null)}function Cg(t){ca(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Co(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function za(t,e){t.l.push(new rI(t.Za++,e)),t.G==3&&la(t)}function la(t){gg(t.i)||t.m||(t.m=!0,Ol(t.Ha,t),t.C=0)}function gI(t,e){return mg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=pi(We(t.Ha,t,e),xg(t,t.C)),t.C++,!0)}O.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new mi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Fp(i),Vp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sg(this,r,e),n=Zt(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),wi(this,n),this.o&&i&&zl(n,this.o,i),jl(this.i,r),this.Ra&&Ae(n,"TYPE","init"),this.ja?(Ae(n,"$req",e),Ae(n,"SID","null"),r.$=!0,xc(r,n,null)):xc(r,n,e),this.G=2}}else this.G==3&&(t?Yh(this,t):this.l.length==0||gg(this.i)||Yh(this))};function Yh(t,e){var n;e?n=e.m:n=t.V++;const s=Zt(t.F);Ae(s,"SID",t.J),Ae(s,"RID",n),Ae(s,"AID",t.U),wi(t,s),t.o&&t.s&&zl(s,t.o,t.s),n=new mi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Sg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jl(t.i,n),xc(n,s,e)}function wi(t,e){t.j&&Vl({},function(n,s){Ae(e,s,n)})}function Sg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?We(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{aI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Ag(t){t.g||t.u||(t.Y=1,Ol(t.Ga,t),t.A=0)}function Wl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=pi(We(t.Ga,t),xg(t,t.A)),t.A++,!0)}O.Ga=function(){if(this.u=null,kg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pi(We(this.bb,this),t)}};O.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,at(10),ca(this),kg(this))};function Gl(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function kg(t){t.g=new mi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zt(t.oa);Ae(e,"RID","rpc"),Ae(e,"SID",t.J),Ae(e,"CI",t.N?"0":"1"),Ae(e,"AID",t.U),wi(t,e),Ae(e,"TYPE","xmlhttp"),t.o&&t.s&&zl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ia(Zt(e)),n.s=null,n.U=!0,og(n,t)}O.ab=function(){this.v!=null&&(this.v=null,ca(this),Wl(this),at(19))};function Co(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Rg(t,e){var n=null;if(t.g==e){Co(t),Gl(t),t.g=null;var s=2}else if(Dc(t.i,e))n=e.D,yg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ta(),Ge(s,new ng(s,n)),la(t)}else Ag(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&gI(t,e)||s==2&&Wl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}}function xg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Bn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=We(t.jb,t);n||(n=new es("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Io(n,"https"),ia(n)),cI(n.toString(),s)}else at(2);t.G=0,t.j&&t.j.va(e),Ng(t),Cg(t)}O.jb=function(t){t?(this.h.info("Successfully pinged google.com"),at(2)):(this.h.info("Failed to ping google.com"),at(1))};function Ng(t){t.G=0,t.I=-1,t.j&&((_g(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Sl(t.l),t.l.length=0),t.j.ua())}function Dg(t,e,n){let s=XE(n);if(s.i!="")e&&bo(s,e+"."+s.i),To(s,s.m);else{const r=Y.location;s=QE(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Al(t.aa,function(r,i){Ae(s,i,r)}),e=t.D,n=t.sa,e&&n&&Ae(s,e,n),Ae(s,"VER",t.ma),wi(t,s),s}function Pg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Me(new _i({ib:!0})):new Me(t.qa),e.L=t.H,e}function Og(){}O=Og.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Oa=function(){};function So(){if(Ms&&!(10<=Number(kE)))throw Error("Environmental error: no available transport.")}So.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Ve.call(this),this.g=new Tg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new tr(this)}Qe(It,Ve);It.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ol(We(t.hb,t,e))),at(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Dg(t,null,t.W),la(t)};It.prototype.close=function(){Kl(this.g)};It.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,za(this.g,e)}else this.v?(e={},e.__data__=Pl(t),za(this.g,e)):za(this.g,t)};It.prototype.M=function(){this.g.j=null,delete this.j,Kl(this.g),delete this.g,It.Z.M.call(this)};function Mg(t){$l.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(Mg,$l);function Lg(){Fl.call(this),this.status=1}Qe(Lg,Fl);function tr(t){this.g=t}Qe(tr,Og);tr.prototype.xa=function(){Ge(this.g,"a")};tr.prototype.wa=function(t){Ge(this.g,new Mg(t))};tr.prototype.va=function(t){Ge(this.g,new Lg)};tr.prototype.ua=function(){Ge(this.g,"b")};So.prototype.createWebChannel=So.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;na.NO_ERROR=0;na.TIMEOUT=8;na.HTTP_ERROR=6;sg.COMPLETE="complete";rg.EventType=gi;gi.OPEN="a";gi.CLOSE="b";gi.ERROR="c";gi.MESSAGE="d";Ve.prototype.listen=Ve.prototype.N;Me.prototype.listenOnce=Me.prototype.O;Me.prototype.getLastError=Me.prototype.La;Me.prototype.getLastErrorCode=Me.prototype.Da;Me.prototype.getStatus=Me.prototype.ba;Me.prototype.getResponseJson=Me.prototype.Qa;Me.prototype.getResponseText=Me.prototype.ga;Me.prototype.send=Me.prototype.ea;var mI=function(){return new So},yI=function(){return ta()},Ka=na,_I=sg,vI=as,Xh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wI=_i,$i=rg,EI=Me;const Qh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr="9.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new fl("@firebase/firestore");function Jh(){return ts.logLevel}function $(t,...e){if(ts.logLevel<=ae.DEBUG){const n=e.map(Yl);ts.debug(`Firestore (${nr}): ${t}`,...n)}}function Tn(t,...e){if(ts.logLevel<=ae.ERROR){const n=e.map(Yl);ts.error(`Firestore (${nr}): ${t}`,...n)}}function Zh(t,...e){if(ts.logLevel<=ae.WARN){const n=e.map(Yl);ts.warn(`Firestore (${nr}): ${t}`,...n)}}function Yl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function be(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class TI{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new II(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new pt(e)}}class CI{constructor(e,n,s){this.type="FirstParty",this.user=pt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class SI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new CI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.p=n.token,new AI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xl.A=-1;class Ug{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=RI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new et(0,0))}static max(){return new te(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Yr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const xI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Yr{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return xI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.fields=e,e.sort(gt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const NI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(t){if(be(!!t),typeof t=="string"){let e=0;const n=NI.exec(t);if(be(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Us(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fg(t){const e=t.mapValue.fields.__previous_value__;return Ql(e)?Fg(e):e}function Qr(t){const e=Cn(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class $s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){return t==null}function Ao(t){return t===0&&1/t==-1/0}function PI(t){return typeof t=="number"&&Number.isInteger(t)&&!Ao(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(Ie.fromString(e))}static fromName(e){return new F(Ie.fromString(e).popFirst(5))}static empty(){return new F(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ql(t)?4:OI(t)?9007199254740991:10:Q()}function Ht(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qr(t).isEqual(Qr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Cn(s.timestampValue),o=Cn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Us(s.bytesValue).isEqual(Us(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Pe(s.geoPointValue.latitude)===Pe(r.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Pe(s.integerValue)===Pe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Pe(s.doubleValue),o=Pe(r.doubleValue);return i===o?Ao(i)===Ao(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ef(i)!==ef(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Jr(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function Fs(t,e){if(t===e)return 0;const n=ns(t),s=ns(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Pe(r.integerValue||r.doubleValue),a=Pe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tf(t.timestampValue,e.timestampValue);case 4:return tf(Qr(t),Qr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Us(r),a=Us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Pe(r.latitude),Pe(i.latitude));return o!==0?o:ue(Pe(r.longitude),Pe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Fs(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Fi.mapValue&&i===Fi.mapValue)return 0;if(r===Fi.mapValue)return 1;if(i===Fi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const f=Fs(o[a[u]],c[l[u]]);if(f!==0)return f}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function tf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Cn(t),s=Cn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function ks(t){return Pc(t)}function Pc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Cn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Pc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Pc(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function ko(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oc(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function Rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Rr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(n)}setAll(e){let n=gt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Rr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){cs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new vt(Rr(this.value))}}function Vg(t){const e=[];return cs(t.fields,(n,s)=>{const r=new gt([n]);if(Zi(s)){const i=Vg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Je(e,0,te.min(),te.min(),vt.empty(),0)}static newFoundDocument(e,n,s){return new Je(e,1,n,te.min(),s,0)}static newNoDocument(e,n){return new Je(e,2,n,te.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,te.min(),vt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function MI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new et(n+1,0):new et(n,s));return new ss(r,F.empty(),e)}function LI(t){return new ss(t.readTime,t.key,-1)}class ss{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ss(te.min(),F.empty(),-1)}static max(){return new ss(te.max(),F.empty(),-1)}}function UI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:qe.RED,this.left=r!=null?r:qe.EMPTY,this.right=i!=null?i:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rf(this.data.getIterator())}getIteratorFrom(e){return new rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function of(t,e=null,n=[],s=[],r=null,i=null,o=null){return new $I(t,e,n,s,r,i,o)}function Zl(t){const e=J(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ks(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ks(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ks(s)).join(",")),e.P=n}return e.P}function FI(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ks(s.value)}`;var s}).join(", ")}]`),ua(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ks(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ks(n)).join(",")),`Target(${e})`}function eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!WI(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cf(t.startAt,e.startAt)&&cf(t.endAt,e.endAt)}function Mc(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new VI(e,n,s):n==="array-contains"?new HI(e,s):n==="in"?new qI(e,s):n==="not-in"?new zI(e,s):n==="array-contains-any"?new KI(e,s):new ct(e,n,s)}static V(e,n,s){return n==="in"?new BI(e,s):new jI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Fs(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.v(Fs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class VI extends ct{constructor(e,n,s){super(e,n,s),this.key=F.fromName(s.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.v(n)}}class BI extends ct{constructor(e,n){super(e,"in",n),this.keys=Bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jI extends ct{constructor(e,n){super(e,"not-in",n),this.keys=Bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>F.fromName(s.referenceValue))}class HI extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&Jr(n.arrayValue,this.value)}}class qI extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jr(this.value.arrayValue,n)}}class zI extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jr(this.value.arrayValue,n)}}class KI extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Jr(this.value.arrayValue,s))}}class Vs{constructor(e,n){this.position=e,this.inclusive=n}}class Rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function WI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function af(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=F.comparator(F.fromName(o.referenceValue),n.key):s=Fs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function GI(t,e,n,s,r,i,o,a){return new Nn(t,e,n,s,r,i,o,a)}function tu(t){return new Nn(t)}function YI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function su(t){for(const e of t.filters)if(e.S())return e.field;return null}function ru(t){return t.collectionGroup!==null}function Bs(t){const e=J(t);if(e.D===null){e.D=[];const n=su(e),s=nu(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Rs(n)),e.D.push(new Rs(gt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Rs(gt.keyField(),i))}}}return e.D}function rs(t){const e=J(t);if(!e.C)if(e.limitType==="F")e.C=of(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rs(i.field,o))}const s=e.endAt?new Vs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Vs(e.startAt.position,e.startAt.inclusive):null;e.C=of(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function XI(t,e,n){return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return eu(rs(t),rs(e))&&t.limitType===e.limitType}function jg(t){return`${Zl(rs(t))}|lt:${t.limitType}`}function Lc(t){return`Query(target=${FI(rs(t))}; limitType=${t.limitType})`}function iu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):F.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=af(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Bs(n),s)||n.endAt&&!function(r,i,o){const a=af(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Bs(n),s))}(t,e)}function QI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hg(t){return(e,n)=>{let s=!1;for(const r of Bs(t)){const i=JI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function JI(t,e,n){const s=t.field.isKeyField()?F.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Fs(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ao(e)?"-0":e}}function zg(t){return{integerValue:""+t}}function ZI(t,e){return PI(e)?zg(e):qg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this._=void 0}}function eb(t,e,n){return t instanceof Zr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ei?Wg(t,e):t instanceof ti?Gg(t,e):function(s,r){const i=Kg(s,r),o=lf(i)+lf(s.k);return Oc(i)&&Oc(s.k)?zg(o):qg(s.M,o)}(t,e)}function tb(t,e,n){return t instanceof ei?Wg(t,e):t instanceof ti?Gg(t,e):n}function Kg(t,e){return t instanceof Ro?Oc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Zr extends fa{}class ei extends fa{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=Yg(e);for(const s of t.elements)n.some(r=>Ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class ti extends fa{constructor(e){super(),this.elements=e}}function Gg(t,e){let n=Yg(e);for(const s of t.elements)n=n.filter(r=>!Ht(r,s));return{arrayValue:{values:n}}}class Ro extends fa{constructor(e,n){super(),this.M=e,this.k=n}}function lf(t){return Pe(t.integerValue||t.doubleValue)}function Yg(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n){this.field=e,this.transform=n}}function sb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ei&&s instanceof ei||n instanceof ti&&s instanceof ti?Ls(n.elements,s.elements,Ht):n instanceof Ro&&s instanceof Ro?Ht(n.k,s.k):n instanceof Zr&&s instanceof Zr}(t.transform,e.transform)}class rb{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class da{}function ib(t,e,n){t instanceof pa?function(s,r,i){const o=s.value.clone(),a=ff(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(s,r,i){if(!eo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ff(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Uc(t,e,n){t instanceof pa?function(s,r,i){if(!eo(s.precondition,r))return;const o=s.value.clone(),a=df(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(hf(r),o).setHasLocalMutations()}(t,e,n):t instanceof sr?function(s,r,i){if(!eo(s.precondition,r))return;const o=df(s.fieldTransforms,i,r),a=r.data;a.setAll(Xg(s)),a.setAll(o),r.convertToFoundDocument(hf(r),a).setHasLocalMutations()}(t,e,n):function(s,r){eo(s.precondition,r)&&r.convertToNoDocument(te.min())}(t,e)}function ob(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Kg(s.transform,r||null);i!=null&&(n==null&&(n=vt.empty()),n.set(s.field,i))}return n||null}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ls(n,s,(r,i)=>sb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function hf(t){return t.isFoundDocument()?t.version:te.min()}class pa extends da{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class sr extends da{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Xg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ff(t,e,n){const s=new Map;be(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,tb(o,a,n[r]))}return s}function df(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,eb(i,o,e))}return s}class ab extends da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class cb extends da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function ub(t){switch(t){default:return Q();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Qg(t){if(t===void 0)return Tn("GRPC error has no .code"),_.UNKNOWN;switch(t){case De.OK:return _.OK;case De.CANCELLED:return _.CANCELLED;case De.UNKNOWN:return _.UNKNOWN;case De.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case De.INTERNAL:return _.INTERNAL;case De.UNAVAILABLE:return _.UNAVAILABLE;case De.UNAUTHENTICATED:return _.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case De.NOT_FOUND:return _.NOT_FOUND;case De.ALREADY_EXISTS:return _.ALREADY_EXISTS;case De.PERMISSION_DENIED:return _.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case De.ABORTED:return _.ABORTED;case De.OUT_OF_RANGE:return _.OUT_OF_RANGE;case De.UNIMPLEMENTED:return _.UNIMPLEMENTED;case De.DATA_LOSS:return _.DATA_LOSS;default:return Q()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new Be(F.comparator);function is(){return hb}const fb=new Be(F.comparator);function $c(...t){let e=fb;for(const n of t)e=e.insert(n.key,n);return e}function Wa(){return new rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const db=new Be(F.comparator),pb=new Ye(F.comparator);function Ce(...t){let e=pb;for(const n of t)e=e.add(n);return e}const gb=new Ye(ue);function Jg(){return gb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,n)),new ga(te.min(),s,Jg(),is(),Ce())}}class Ei{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ei(Xe.EMPTY_BYTE_STRING,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Zg{constructor(e,n){this.targetId=e,this.$=n}}class em{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class pf{constructor(){this.B=0,this.L=mf(),this.U=Xe.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Ce(),n=Ce(),s=Ce();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new Ei(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=mf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class mb{constructor(e){this.nt=e,this.st=new Map,this.it=is(),this.rt=gf(),this.ot=new Ye(ue)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Mc(i))if(s===0){const o=new F(i.path);this.ct(n,o,Je.newNoDocument(o,te.min()))}else be(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Mc(a.target)){const c=new F(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Je.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=Ce();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new ga(e,n,this.ot,this.it,s);return this.it=is(),this.rt=gf(),this.ot=new Ye(ue),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new pf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ye(ue),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new pf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function gf(){return new Be(F.comparator)}function mf(){return new Be(F.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_b=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vb{constructor(e,n){this.databaseId=e,this.N=n}}function xo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(t,e){return t.N?e.toBase64():e.toUint8Array()}function wb(t,e){return xo(t,e.toTimestamp())}function Xt(t){return be(!!t),te.fromTimestamp(function(e){const n=Cn(e);return new et(n.seconds,n.nanos)}(t))}function ou(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nm(t){const e=Ie.fromString(t);return be(im(e)),e}function Fc(t,e){return ou(t.databaseId,e.path)}function Ga(t,e){const n=nm(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(sm(n))}function Vc(t,e){return ou(t.databaseId,e)}function Eb(t){const e=nm(t);return e.length===4?Ie.emptyPath():sm(e)}function Bc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function Ib(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(be(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(be(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:Qg(c.code);return new D(l,c.message||"")}(o);n=new em(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ga(t,s.document.name),i=Xt(s.document.updateTime),o=new vt({mapValue:{fields:s.document.fields}}),a=Je.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new to(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ga(t,s.document),i=s.readTime?Xt(s.readTime):te.min(),o=Je.newNoDocument(r,i),a=s.removedTargetIds||[];n=new to([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ga(t,s.document),i=s.removedTargetIds||[];n=new to([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new lb(r),o=s.targetId;n=new Zg(o,i)}}return n}function bb(t,e){let n;if(e instanceof pa)n={update:yf(t,e.key,e.value)};else if(e instanceof ab)n={delete:Fc(t,e.key)};else if(e instanceof sr)n={update:yf(t,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof cb))return Q();n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Zr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:i.field.canonicalString(),increment:o.k};throw Q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:wb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Q()}(t,e.precondition)),n}function Tb(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Xt(s.updateTime):Xt(r);return i.isEqual(te.min())&&(i=Xt(r)),new rb(i,s.transformResults||[])}(n,e))):[]}function Cb(t,e){return{documents:[Vc(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Vc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(sf(h.value))return{unaryFilter:{field:gs(h.field),op:"IS_NAN"}};if(nf(h.value))return{unaryFilter:{field:gs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(sf(h.value))return{unaryFilter:{field:gs(h.field),op:"IS_NOT_NAN"}};if(nf(h.value))return{unaryFilter:{field:gs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(h.field),op:xb(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gs(u.field),direction:Rb(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||ua(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Ab(t){let e=Eb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=rm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Rs(Is(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ua(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Vs(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Vs(f,h)}(n.endAt)),GI(e,r,o,i,a,"F",c,l)}function kb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function rm(t){return t?t.unaryFilter!==void 0?[Db(t)]:t.fieldFilter!==void 0?[Nb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>rm(e)).reduce((e,n)=>e.concat(n)):Q():[]}function Rb(t){return yb[t]}function xb(t){return _b[t]}function gs(t){return{fieldPath:t.canonicalString()}}function Is(t){return gt.fromServerFormat(t.fieldPath)}function Nb(t){return ct.create(Is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function Db(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Is(t.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Is(t.unaryFilter.field);return ct.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function Pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ib(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Uc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Uc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(te.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,s)=>uf(n,s))&&Ls(this.baseMutations,e.baseMutations,(n,s)=>uf(n,s))}}class au{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length);let r=db;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new au(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s,r,i=te.min(),o=te.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.Jt=e}}function Fb(t){const e=Ab({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?XI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.qe=new Bb}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(ss.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Bb{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ye(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ye(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new js(0)}static yn(){return new js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Ob)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.changes=new rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):ru(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new F(n)).next(s=>{let r=$c();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=$c();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Nn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=Je.newInvalidDocument(c),r=r.insert(c,l)),Uc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{iu(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=Ce(),r=Ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return A.resolve(null)}ei(e,n,s,r){return YI(n)||r.isEqual(te.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(Jh()<=ae.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Lc(n)),this.ri(e,o,n,MI(r,-1)))})}si(e,n){let s=new Ye(Hg(e));return n.forEach((r,i)=>{iu(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return Jh()<=ae.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Lc(n)),this.Zs.Qs(e,n,ss.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new Be(ue),this.ai=new rr(i=>Zl(i),eu),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Hb(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function Kb(t,e,n,s){return new zb(t,e,n,s)}async function om(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function Wb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const T=c.docVersions.get(g);be(T!==null),m.version.compareTo(T)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function am(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function Gb(t,e){const n=J(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(Xe.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,m,T){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=is();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Yb(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(te.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function Yb(t,e,n){let s=Ce();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=is();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(te.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):$("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Xb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function Qb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new Kn(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function jc(t,e,n){const s=J(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ii(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function _f(t,e,n){const s=J(t);let r=te.min(),i=Ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.ai.get(l);return h!==void 0?A.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,rs(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:te.min(),n?i:Ce())).next(a=>(Jb(s,QI(e),a),{documents:a,_i:i})))}function Jb(t,e,n){let s=te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return A.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:Xt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:Fb(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.overlays=new Be(F.comparator),this.Ii=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Wa(),i=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Wa(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Wa(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ub(n,s));let i=this.Ii.get(n);i===void 0&&(i=Ce(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Ti=new Ye($e.Ei),this.Ai=new Ye($e.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new $e(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new $e(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new F(new Ie([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new F(new Ie([])),s=new $e(n,e),r=new $e(n,e+1);let i=Ce();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return F.comparator(e.key,n.key)||ue(e.Ci,n.Ci)}static Ri(e,n){return ue(e.Ci,n.Ci)||F.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Ye($e.Ei)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Lb(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return A.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ye(ue);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),A.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;F.isDocumentKey(i)||(i=i.child(""));const o=new $e(new F(i),0);let a=new Ye(ue);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),A.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){be(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return A.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new $e(n,0),r=this.Ni.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.$i=e,this.docs=new Be(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let s=is();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Je.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=is();const i=new F(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||UI(LI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Q()}Bi(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sT(this)}getSize(e){return A.resolve(this.size)}}class sT extends jb{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.persistence=e,this.Li=new rr(n=>Zl(n),eu),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ui=0,this.qi=new lu,this.targetCount=0,this.Ki=js.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),A.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new js(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.qi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.Gi={},this.overlays={},this.es=new Xl(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new rT(this),this.indexManager=new Vb,this.ds=function(s){return new nT(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new $b(n),this._s=new Zb(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new tT(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new oT(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return A.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class oT extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Hi=new lu,this.Ji=null}static Yi(e){return new uu(e)}get Xi(){if(this.Ji)return this.Ji;throw Q()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xi,s=>{const r=F.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return A.or([()=>A.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class vf{constructor(){this.activeTargetIds=Jg()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aT{constructor(){this.Ur=new vf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new vf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{Kr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);$("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw Zh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=lT[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new EI;a.listenOnce(_I.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ka.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ka.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case Ka.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new D(f,h.message))}else o(new D(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(_.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=mI(),o=yI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wI({})),this.lo(a.initMessageHeaders,n,s),ep()||np()||r_()||sp()||i_()||tp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new uT({Jr:m=>{h?$("Connection","Not sending because WebChannel is closed:",m):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",m),l.send(m))},Yr:()=>l.close()}),g=(m,T,w)=>{m.listen(T,C=>{try{w(C)}catch(L){setTimeout(()=>{throw L},0)}})};return g(l,$i.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),g(l,$i.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),f.ro())}),g(l,$i.EventType.ERROR,m=>{h||(h=!0,Zh("Connection","WebChannel transport errored:",m),f.ro(new D(_.UNAVAILABLE,"The operation could not be completed")))}),g(l,$i.EventType.MESSAGE,m=>{var T;if(!h){const w=m.data[0];be(!!w);const C=w,L=C.error||((T=C[0])===null||T===void 0?void 0:T.error);if(L){$("Connection","WebChannel received error:",L);const K=L.status;let H=function(le){const ve=De[le];if(ve!==void 0)return Qg(ve)}(K),ce=L.message;H===void 0&&(H=_.INTERNAL,ce="Unknown error status: "+K+" with message "+L.message),h=!0,f.ro(new D(H,ce)),l.close()}else $("Connection","WebChannel received:",w),f.oo(w)}}),g(o,vI.STAT_EVENT,m=>{m.stat===Xh.PROXY?$("Connection","Detected buffering proxy"):m.stat===Xh.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function Ya(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){return new vb(t,!0)}class cm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new cm(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new D(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fT extends lm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Ib(this.M,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?Xt(i.readTime):te.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Bc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Mc(a)?{documents:Cb(r,a)}:{query:Sb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=tm(r,i.resumeToken):i.snapshotVersion.compareTo(te.min())>0&&(o.readTime=xo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=kb(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Bc(this.M),n.removeTarget=e,this.Lo(n)}}class dT extends lm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Tb(e.writeResults,e.commitTime),s=Xt(e.commitTime);return this.listener.tu(s,n)}return be(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Bc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>bb(this.M,s))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(_.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(_.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class gT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Tn(n),this.uu=!1):$("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{ls(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.wu.add(4),await Ti(c),c.yu.set("Unknown"),c.wu.delete(4),await ya(c)}(this))})}),this.yu=new gT(s,r)}}async function ya(t){if(ls(t))for(const e of t.mu)await e(!0)}async function Ti(t){for(const e of t.mu)await e(!1)}function um(t,e){const n=J(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),du(n)?fu(n):ir(n).Mo()&&hu(n,e))}function hm(t,e){const n=J(t),s=ir(n);n._u.delete(e),s.Mo()&&fm(n,e),n._u.size===0&&(s.Mo()?s.$o():ls(n)&&n.yu.set("Unknown"))}function hu(t,e){t.pu.Z(e.targetId),ir(t).Ho(e)}function fm(t,e){t.pu.Z(e),ir(t).Jo(e)}function fu(t){t.pu=new mb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),ir(t).start(),t.yu.au()}function du(t){return ls(t)&&!ir(t).ko()&&t._u.size>0}function ls(t){return J(t).wu.size===0}function dm(t){t.pu=void 0}async function yT(t){t._u.forEach((e,n)=>{hu(t,e)})}async function _T(t,e){dm(t),du(t)?(t.yu.lu(e),fu(t)):t.yu.set("Unknown")}async function vT(t,e,n){if(t.yu.set("Online"),e instanceof em&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await No(t,s)}else if(e instanceof to?t.pu.ut(e):e instanceof Zg?t.pu._t(e):t.pu.ht(e),!n.isEqual(te.min()))try{const s=await am(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),fm(r,a);const l=new Kn(c.target,a,1,c.sequenceNumber);hu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await No(t,s)}}async function No(t,e,n){if(!Ii(e))throw e;t.wu.add(1),await Ti(t),t.yu.set("Offline"),n||(n=()=>am(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ya(t)})}function pm(t,e){return e().catch(n=>No(t,n,e))}async function _a(t){const e=J(t),n=Sn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;wT(e);)try{const r=await Xb(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,ET(e,r)}catch(r){await No(e,r)}gm(e)&&mm(e)}function wT(t){return ls(t)&&t.du.length<10}function ET(t,e){t.du.push(e);const n=Sn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function gm(t){return ls(t)&&!Sn(t).ko()&&t.du.length>0}function mm(t){Sn(t).start()}async function IT(t){Sn(t).nu()}async function bT(t){const e=Sn(t);for(const n of t.du)e.Zo(n.mutations)}async function TT(t,e,n){const s=t.du.shift(),r=au.from(s,e,n);await pm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _a(t)}async function CT(t,e){e&&Sn(t).Xo&&await async function(n,s){if(r=s.code,ub(r)&&r!==_.ABORTED){const i=n.du.shift();Sn(n).Fo(),await pm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _a(n)}var r}(t,e),gm(t)&&mm(t)}async function Ef(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ls(n);n.wu.add(3),await Ti(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ya(n)}async function ST(t,e){const n=J(t);e?(n.wu.delete(2),await ya(n)):e||(n.wu.add(2),await Ti(n),n.yu.set("Unknown"))}function ir(t){return t.Iu||(t.Iu=function(e,n,s){const r=J(e);return r.iu(),new fT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:yT.bind(null,t),eo:_T.bind(null,t),zo:vT.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),du(t)?fu(t):t.yu.set("Unknown")):(await t.Iu.stop(),dm(t))})),t.Iu}function Sn(t){return t.Tu||(t.Tu=function(e,n,s){const r=J(e);return r.iu(),new dT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:IT.bind(null,t),eo:CT.bind(null,t),eu:bT.bind(null,t),tu:TT.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await _a(t)):(await t.Tu.stop(),t.du.length>0&&($("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new pu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Ii(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||F.comparator(n.key,s.key):(n,s)=>F.comparator(n.key,s.key),this.keyedMap=$c(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.Eu=new Be(F.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Q():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hs{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Hs(e,n,xs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.Ru=void 0,this.listeners=[]}}class kT{constructor(){this.queries=new rr(e=>jg(e),ha),this.onlineState="Unknown",this.bu=new Set}}async function ym(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new AT),r)try{i.Ru=await n.onListen(s)}catch(o){const a=gu(o,`Initialization of query '${Lc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&mu(n)}async function _m(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function RT(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&mu(n)}function xT(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function mu(t){t.bu.forEach(e=>{e.next()})}class vm{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Hs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class NT{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=Ce(),this.mutatedKeys=Ce(),this.Gu=Hg(e),this.Qu=new xs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new If,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=iu(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;f&&g?f.data.isEqual(g.data)?m!==T&&(s.track({type:3,doc:g}),w=!0):this.Hu(f,g)||(s.track({type:2,doc:g}),w=!0,(c&&this.Gu(g,c)>0||l&&this.Gu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),w=!0):f&&!g&&(s.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(h)-g(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Hs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new If,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ce(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Em(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new wm(s))}),n}ta(e){this.Uu=e._i,this.Ku=Ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class DT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class PT{constructor(e){this.key=e,this.na=!1}}class OT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new rr(a=>jg(a),ha),this.ra=new Map,this.oa=new Set,this.ua=new Be(F.comparator),this.aa=new Map,this.ca=new lu,this.ha={},this.la=new Map,this.fa=js.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function MT(t,e){const n=zT(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await Qb(n.localStore,rs(e));n.isPrimaryClient&&um(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await LT(n,e,s,a==="current")}return r}async function LT(t,e,n,s){t._a=(u,h,f)=>async function(g,m,T,w){let C=m.view.Wu(T);C.ii&&(C=await _f(g.localStore,m.query,!1).then(({documents:H})=>m.view.Wu(H,C)));const L=w&&w.targetChanges.get(m.targetId),K=m.view.applyChanges(C,g.isPrimaryClient,L);return Tf(g,m.targetId,K.Xu),K.snapshot}(t,u,h,f);const r=await _f(t.localStore,e,!0),i=new NT(e,r._i),o=i.Wu(r.documents),a=Ei.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Tf(t,n,c.Xu);const l=new DT(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function UT(t,e){const n=J(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!ha(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await jc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),hm(n.remoteStore,s.targetId),Hc(n,s.targetId)}).catch(bi)):(Hc(n,s.targetId),await jc(n.localStore,s.targetId,!0))}async function $T(t,e,n){const s=KT(t);try{const r=await function(i,o){const a=J(i),c=et.now(),l=o.reduce((h,f)=>h.add(f.key),Ce());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(f=>{u=f;const g=[];for(const m of o){const T=ob(m,u.get(m.key));T!=null&&g.push(new sr(m.key,T,Vg(T.value.mapValue),vn.exists(!0)))}return a.Bs.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new Be(ue)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ci(s,r.changes),await _a(s.remoteStore)}catch(r){const i=gu(r,"Failed to persist write");n.reject(i)}}async function Im(t,e){const n=J(t);try{const s=await Gb(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?be(o.na):r.removedDocuments.size>0&&(be(o.na),o.na=!1))}),await Ci(n,s,e)}catch(s){await bi(s)}}function bf(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&mu(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FT(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new Be(F.comparator);o=o.insert(i,Je.newNoDocument(i,te.min()));const a=Ce().add(i),c=new ga(te.min(),new Map,new Ye(ue),o,a);await Im(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),yu(s)}else await jc(s.localStore,e,!1).then(()=>Hc(s,e,n)).catch(bi)}async function VT(t,e){const n=J(t),s=e.batch.batchId;try{const r=await Wb(n.localStore,e);Tm(n,s,null),bm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ci(n,r)}catch(r){await bi(r)}}async function BT(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(be(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);Tm(s,e,n),bm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ci(s,r)}catch(r){await bi(r)}}function bm(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Tm(t,e,n){const s=J(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||Cm(t,s)})}function Cm(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(hm(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),yu(t))}function Tf(t,e,n){for(const s of n)s instanceof wm?(t.ca.addReference(s.key,e),jT(t,s)):s instanceof Em?($("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||Cm(t,s.key)):Q()}function jT(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||($("SyncEngine","New document in limbo: "+n),t.oa.add(s),yu(t))}function yu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new F(Ie.fromString(e)),s=t.fa.next();t.aa.set(s,new PT(n)),t.ua=t.ua.insert(n,s),um(t.remoteStore,new Kn(rs(tu(n.path)),s,2,Xl.A))}}async function Ci(t,e,n){const s=J(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=cu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ii(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ui.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.ui=l.ui.insert(h,m)}}}(s.localStore,i))}async function HT(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await om(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ci(n,s.di)}}function qT(t,e){const n=J(t),s=n.aa.get(e);if(s&&s.na)return Ce().add(s.key);{let r=Ce();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function zT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Im.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FT.bind(null,e),e.sa.zo=RT.bind(null,e.eventManager),e.sa.wa=xT.bind(null,e.eventManager),e}function KT(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BT.bind(null,e),e}class WT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=ma(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Kb(this.persistence,new qb,e.initialUser,this.M)}ya(e){return new iT(uu.Yi,this.M)}ga(e){return new aT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GT{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HT.bind(null,this.syncEngine),await ST(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kT}createDatastore(e){const n=ma(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new hT(r));var r;return function(i,o,a,c){return new pT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>bf(this.syncEngine,a,0),o=wf.vt()?new wf:new cT,new mT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new OT(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);$("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ti(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=Ug.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=gu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function XT(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await om(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function QT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JT(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ef(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ef(e.remoteStore,i)),t.onlineComponents=e}async function JT(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await XT(t,new WT)),t.offlineComponents}async function Am(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await QT(t,new GT)),t.onlineComponents}function ZT(t){return Am(t).then(e=>e.syncEngine)}async function km(t){const e=await Am(t),n=e.eventManager;return n.onListen=MT.bind(null,e.syncEngine),n.onUnlisten=UT.bind(null,e.syncEngine),n}function eC(t,e,n={}){const s=new Yt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Sm({next:h=>{i.enqueueAndForget(()=>_m(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vm(tu(o.path),l,{includeMetadataChanges:!0,ku:!0});return ym(r,u)}(await km(t),t.asyncQueue,e,n,s)),s.promise}function tC(t,e,n={}){const s=new Yt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Sm({next:h=>{i.enqueueAndForget(()=>_m(r,u)),h.fromCache&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vm(o,l,{includeMetadataChanges:!0,ku:!0});return ym(r,u)}(await km(t),t.asyncQueue,e,n,s)),s.promise}const Cf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nC(t,e,n,s){if(e===!0&&s===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sf(t){if(!F.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Af(t){if(F.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=va(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kf({}),this._settingsFrozen=!1,e instanceof $s?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(r.options.projectId)}(e))}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bI;switch(n.type){case"gapi":const s=n.client;return be(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new SI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cf.get(e);n&&($("ComponentProvider","Removing Datastore"),Cf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Dn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dn(this.firestore,e,this._query)}}class wn extends Dn{constructor(e,n,s){super(e,n,tu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new F(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function sC(t,e,...n){if(t=Oe(t),Rm("collection","path",e),t instanceof _u){const s=Ie.fromString(e,...n);return Af(s),new wn(t,null,s)}{if(!(t instanceof lt||t instanceof wn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Af(s),new wn(t.firestore,null,s)}}function xm(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=Ug.R()),Rm("doc","path",e),t instanceof _u){const s=Ie.fromString(e,...n);return Sf(s),new lt(t,null,new F(s))}{if(!(t instanceof lt||t instanceof wn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Sf(s),new lt(t.firestore,t instanceof wn?t.converter:null,new F(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new cm(this,"async_queue_retry"),this.Qa=()=>{const n=Ya();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Ya();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=Ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Yt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!Ii(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Tn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=pu.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&Q()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class or extends _u{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new rC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Nm(this),this._firestoreClient.terminate()}}function iC(t=gl()){return Ko(t,"firestore").getImmediate()}function vu(t){return t._firestoreClient||Nm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Nm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new DI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new YT(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qs(Xe.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=/^__.*__$/;class aC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class Dm{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Pm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Eu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Eu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Do(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(Pm(this.ec)&&oC.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class cC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||ma(e)}lc(e,n,s,r=!1){return new Eu({ec:e,methodName:n,hc:s,path:gt.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Si(t){const e=t._freezeSettings(),n=ma(t._databaseId);return new cC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Om(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);bu("Data must be an object, but it was:",o,s);const a=Lm(s,o);let c,l;if(i.merge)c=new Xr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=qc(e,h,n);if(!o.contains(f))throw new D(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$m(u,f)||u.push(f)}c=new Xr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new aC(new vt(a),c,l)}class Ia extends Ea{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ia}}class Iu extends Ea{_toFieldTransform(e){return new nb(e.path,new Zr)}isEqual(e){return e instanceof Iu}}function lC(t,e,n,s){const r=t.lc(1,e,n);bu("Data must be an object, but it was:",r,s);const i=[],o=vt.empty();cs(s,(c,l)=>{const u=Tu(e,c,n);l=Oe(l);const h=r.oc(u);if(l instanceof Ia)i.push(u);else{const f=Ai(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Xr(i);return new Dm(o,a,r.fieldTransforms)}function uC(t,e,n,s,r,i){const o=t.lc(1,e,n),a=[qc(e,s,n)],c=[r];if(i.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(qc(e,i[f])),c.push(i[f+1]);const l=[],u=vt.empty();for(let f=a.length-1;f>=0;--f)if(!$m(l,a[f])){const g=a[f];let m=c[f];m=Oe(m);const T=o.oc(g);if(m instanceof Ia)l.push(g);else{const w=Ai(m,T);w!=null&&(l.push(g),u.set(g,w))}}const h=new Xr(l);return new Dm(u,h,o.fieldTransforms)}function Mm(t,e,n,s=!1){return Ai(n,t.lc(s?4:3,e))}function Ai(t,e){if(Um(t=Oe(t)))return bu("Unsupported field value:",e,t),Lm(t,e);if(t instanceof Ea)return function(n,s){if(!Pm(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ai(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ZI(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=et.fromDate(n);return{timestampValue:xo(s.M,r)}}if(n instanceof et){const r=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xo(s.M,r)}}if(n instanceof wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qs)return{bytesValue:tm(s.M,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ou(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${va(n)}`)}(t,e)}function Lm(t,e){const n={};return $g(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(s,r)=>{const i=Ai(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof wu||t instanceof qs||t instanceof lt||t instanceof Ea)}function bu(t,e,n){if(!Um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=va(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function qc(t,e,n){if((e=Oe(e))instanceof wa)return e._internalPath;if(typeof e=="string")return Tu(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const hC=new RegExp("[~\\*/\\[\\]]");function Tu(t,e,n){if(e.search(hC)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wa(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(_.INVALID_ARGUMENT,a+t+c)}function $m(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ba("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fC extends Cu{data(){return super.data()}}function ba(t,e){return typeof e=="string"?Tu(t,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fm extends Cu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ba("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class no extends Fm{data(e={}){return super.data(e)}}class dC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new vr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new no(this._firestore,this._userDataWriter,s.key,s,new vr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new no(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:pC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ta{}function mC(t,...e){for(const n of e)t=n._apply(t);return t}class yC extends Ta{constructor(e,n,s){super(),this._c=e,this.wc=n,this.mc=s,this.type="where"}_apply(e){const n=Si(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xf(u,l);const g=[];for(const m of u)g.push(Rf(a,r,m));h={arrayValue:{values:g}}}else h=Rf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xf(u,l),h=Mm(o,i,u,l==="in"||l==="not-in");const f=ct.create(c,l,h);return function(g,m){if(m.S()){const w=su(g);if(w!==null&&!w.isEqual(m.field))throw new D(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${m.field.toString()}'`);const C=nu(g);C!==null&&Bm(g,m.field,C)}const T=function(w,C){for(const L of w.filters)if(C.indexOf(L.op)>=0)return L.op;return null}(g,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(T!==null)throw T===m.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${T.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new Dn(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Nn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function _C(t,e,n){const s=e,r=ba("where",t);return new yC(r,s,n)}class vC extends Ta{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Rs(r,i);return function(a,c){if(nu(a)===null){const l=su(a);l!==null&&Bm(a,l,c.field)}}(s,o),o}(e._query,this._c,this.gc);return new Dn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Nn(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wC(t,e="asc"){const n=e,s=ba("orderBy",t);return new vC(s,n)}class EC extends Ta{constructor(e,n,s){super(),this.type=e,this.Tc=n,this.Ec=s}_apply(e){const n=Vm(e,this.type,this.Tc,this.Ec);return new Dn(e.firestore,e.converter,function(s,r){return new Nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function uR(...t){return new EC("startAt",t,!0)}class IC extends Ta{constructor(e,n,s){super(),this.type=e,this.Tc=n,this.Ec=s}_apply(e){const n=Vm(e,this.type,this.Tc,this.Ec);return new Dn(e.firestore,e.converter,function(s,r){return new Nn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function hR(...t){return new IC("endAt",t,!0)}function Vm(t,e,n,s){if(n[0]=Oe(n[0]),n[0]instanceof Cu)return function(r,i,o,a,c){if(!a)throw new D(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Bs(r))if(u.field.isKeyField())l.push(ko(i,a.key));else{const h=a.data.field(u.field);if(Ql(h))throw new D(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new D(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Vs(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Si(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new D(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let g=0;g<l.length;g++){const m=l[g];if(h[g].field.isKeyField()){if(typeof m!="string")throw new D(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!ru(i)&&m.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const T=i.path.child(Ie.fromString(m));if(!F.isDocumentKey(T))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const w=new F(T);f.push(ko(o,w))}else{const T=Mm(a,c,m);f.push(T)}}return new Vs(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Rf(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ru(e)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!F.isDocumentKey(s))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ko(t,new F(s))}if(n instanceof lt)return ko(t,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${va(n)}.`)}function xf(t,e){if(!Array.isArray(t)||t.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Bm(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const s={};return cs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new wu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Fg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Qr(e));default:return null}}convertTimestamp(e){const n=Cn(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);be(im(s));const r=new $s(s.get(1),s.get(3)),i=new F(s.popFirst(5));return r.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t){t=en(t,lt);const e=en(t.firestore,or);return eC(vu(e),t._key).then(n=>SC(e,t,n))}class Hm extends bC{constructor(e){super(),this.firestore=e}convertBytes(e){return new qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function CC(t){t=en(t,Dn);const e=en(t.firestore,or),n=vu(e),s=new Hm(e);return gC(t._query),tC(n,t._query).then(r=>new dC(e,s,t,r))}function fR(t,e,n){t=en(t,lt);const s=en(t.firestore,or),r=jm(t.converter,e,n);return Su(s,[Om(Si(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,vn.none())])}function dR(t,e,n,...s){t=en(t,lt);const r=en(t.firestore,or),i=Si(r);let o;return o=typeof(e=Oe(e))=="string"||e instanceof wa?uC(i,"updateDoc",t._key,e,n,s):lC(i,"updateDoc",t._key,e),Su(r,[o.toMutation(t._key,vn.exists(!0))])}function pR(t,e){const n=en(t.firestore,or),s=xm(t),r=jm(t.converter,e);return Su(n,[Om(Si(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,vn.exists(!1))]).then(()=>s)}function Su(t,e){return function(n,s){const r=new Yt;return n.asyncQueue.enqueueAndForget(async()=>$T(await ZT(n),s,r)),r.promise}(vu(t),e)}function SC(t,e,n){const s=n.docs.get(e._key),r=new Hm(t);return new Fm(t,r,e._key,s,new vr(n.hasPendingWrites,n.fromCache),e.converter)}function gR(){return new Iu("serverTimestamp")}(function(t,e=!0){(function(n){nr=n})(Qs),Yn(new bn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new or(r,new TI(n.getProvider("auth-internal")),new kI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ft(Qh,"3.4.9",t),Ft(Qh,"3.4.9","esm2017")})();/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qm=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ar=t=>qm?Symbol(t):"_vr_"+t,AC=ar("rvlm"),Nf=ar("rvd"),Au=ar("r"),zm=ar("rl"),zc=ar("rvl"),vs=typeof window!="undefined";function kC(t){return t.__esModule||qm&&t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Xa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const xr=()=>{},RC=/\/$/,xC=t=>t.replace(RC,"");function Qa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=OC(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function NC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function DC(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zs(e.matched[s],n.matched[r])&&Km(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Km(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PC(t[n],e[n]))return!1;return!0}function PC(t,e){return Array.isArray(t)?Pf(t,e):Array.isArray(e)?Pf(e,t):t===e}function Pf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function OC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var Nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nr||(Nr={}));function MC(t){if(!t)if(vs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xC(t)}const LC=/^[^#]+#/;function UC(t,e){return t.replace(LC,"#")+e}function $C(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function FC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$C(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const Kc=new Map;function VC(t,e){Kc.set(t,e)}function BC(t){const e=Kc.get(t);return Kc.delete(t),e}let jC=()=>location.protocol+"//"+location.host;function Wm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Df(c,"")}return Df(n,t)+s+r}function HC(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Wm(t,location),m=n.value,T=e.value;let w=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}w=T?f.position-T.position:0}else s(g);r.forEach(C=>{C(n.value,m,{delta:w,type:ni.pop,direction:w?w>0?Nr.forward:Nr.back:Nr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(ye({},f.state,{scroll:Ca()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Mf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ca():null}}function qC(t){const{history:e,location:n}=window,s={value:Wm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:jC()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,Mf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:Ca()});i(u.current,u,!0);const h=ye({},Mf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function zC(t){t=MC(t);const e=qC(t),n=HC(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:UC.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KC(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ym=ar("nf");var Lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lf||(Lf={}));function Ks(t,e){return ye(new Error,{type:t,[Ym]:!0},e)}function on(t,e){return t instanceof Error&&Ym in t&&(e==null||!!(t.type&e))}const Uf="[^/]+?",WC={sensitive:!1,strict:!1,start:!0,end:!0},GC=/[.+*?^${}()[\]/\\]/g;function YC(t,e){const n=ye({},WC,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(GC,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:T,optional:w,regexp:C}=f;i.push({name:m,repeatable:T,optional:w});const L=C||Uf;if(L!==Uf){g+=10;try{new RegExp(`(${L})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+H.message)}}let K=T?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(K=w&&l.length<2?`(?:/${K})`:"/"+K),w&&(K+="?"),r+=K,g+=20,w&&(g+=-8),T&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:T,optional:w}=g,C=m in l?l[m]:"";if(Array.isArray(C)&&!T)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(C)?C.join("/"):C;if(!L)if(w)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function XC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function QC(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=XC(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const JC={type:0,value:""},ZC=/[a-zA-Z0-9_]/;function e2(t){if(!t)return[[]];if(t==="/")return[[JC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:ZC.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function t2(t,e,n){const s=YC(e2(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function n2(t,e){const n=[],s=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,m=r2(u);m.aliasOf=f&&f.record;const T=Ff(e,u),w=[m];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of K)w.push(ye({},m,{components:f?f.record.components:m.components,path:H,aliasOf:f?f.record:m}))}let C,L;for(const K of w){const{path:H}=K;if(h&&H[0]!=="/"){const ce=h.record.path,le=ce[ce.length-1]==="/"?"":"/";K.path=h.record.path+(H&&le+H)}if(C=t2(K,h,T),f?f.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),g&&u.name&&!$f(C)&&o(u.name)),"children"in m){const ce=m.children;for(let le=0;le<ce.length;le++)i(ce[le],C,f&&f.children[le])}f=f||C,c(C)}return L?()=>{o(L)}:xr}function o(u){if(Gm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&QC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Xm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!$f(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},m,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ks(1,{location:u});T=f.record.name,g=ye(s2(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(L=>L.re.test(m)),f&&(g=f.parse(m),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw Ks(1,{location:u,currentLocation:h});T=f.record.name,g=ye({},h.params,u.params),m=f.stringify(g)}const w=[];let C=f;for(;C;)w.unshift(C.record),C=C.parent;return{name:T,path:m,params:g,matched:w,meta:o2(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function s2(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function r2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:i2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function i2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function o2(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Ff(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xm(t,e){return e.children.some(n=>n===t||Xm(t,n))}const Qm=/#/g,a2=/&/g,c2=/\//g,l2=/=/g,u2=/\?/g,Jm=/\+/g,h2=/%5B/g,f2=/%5D/g,Zm=/%5E/g,d2=/%60/g,ey=/%7B/g,p2=/%7C/g,ty=/%7D/g,g2=/%20/g;function ku(t){return encodeURI(""+t).replace(p2,"|").replace(h2,"[").replace(f2,"]")}function m2(t){return ku(t).replace(ey,"{").replace(ty,"}").replace(Zm,"^")}function Wc(t){return ku(t).replace(Jm,"%2B").replace(g2,"+").replace(Qm,"%23").replace(a2,"%26").replace(d2,"`").replace(ey,"{").replace(ty,"}").replace(Zm,"^")}function y2(t){return Wc(t).replace(l2,"%3D")}function _2(t){return ku(t).replace(Qm,"%23").replace(u2,"%3F")}function v2(t){return t==null?"":_2(t).replace(c2,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function w2(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Jm," "),o=i.indexOf("="),a=Po(o<0?i:i.slice(0,o)),c=o<0?null:Po(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vf(t){let e="";for(let n in t){const s=t[n];if(n=y2(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Wc(i)):[s&&Wc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function E2(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function fr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ln(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ks(4,{from:n,to:e})):h instanceof Error?a(h):KC(h)?a(Ks(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ja(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(I2(a)){const l=(a.__vccOpts||a)[e];l&&r.push(ln(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=kC(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&ln(f,n,s,i,o)()}))}}return r}function I2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bf(t){const e=yn(Au),n=yn(zm),s=$t(()=>e.resolve(wr(t.to))),r=$t(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(zs.bind(null,u));if(f>-1)return f;const g=jf(c[l-2]);return l>1&&jf(u)===g&&h[h.length-1].path!==g?h.findIndex(zs.bind(null,c[l-2])):f}),i=$t(()=>r.value>-1&&C2(n.params,s.value.params)),o=$t(()=>r.value>-1&&r.value===n.matched.length-1&&Km(n.params,s.value.params));function a(c={}){return T2(c)?e[wr(t.replace)?"replace":"push"](wr(t.to)).catch(xr):Promise.resolve()}return{route:s,href:$t(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const b2=xd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bf,setup(t,{slots:e}){const n=Xs(Bf(t)),{options:s}=yn(Au),r=$t(()=>({[Hf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Yd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),cr=b2;function T2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function C2(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t!=null?t:e!=null?e:n,S2=xd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yn(zc),r=$t(()=>t.route||s.value),i=yn(Nf,0),o=$t(()=>r.value.matched[i]);zi(Nf,i+1),zi(AC,o),zi(zc,r);const a=g1();return Ki(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!zs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return qf(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,T=Yd(u,ye({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return qf(n.default,{Component:T,route:c})||T}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ny=S2;function A2(t){const e=n2(t.routes,t),n=t.parseQuery||w2,s=t.stringifyQuery||Vf,r=t.history,i=fr(),o=fr(),a=fr(),c=m1(rn);let l=rn;vs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xa.bind(null,v=>""+v),h=Xa.bind(null,v2),f=Xa.bind(null,Po);function g(v,U){let x,V;return Gm(v)?(x=e.getRecordMatcher(v),V=U):V=v,e.addRoute(V,x)}function m(v){const U=e.getRecordMatcher(v);U&&e.removeRoute(U)}function T(){return e.getRoutes().map(v=>v.record)}function w(v){return!!e.getRecordMatcher(v)}function C(v,U){if(U=ye({},U||c.value),typeof v=="string"){const ee=Qa(n,v,U.path),d=e.resolve({path:ee.path},U),p=r.createHref(ee.fullPath);return ye(ee,d,{params:f(d.params),hash:Po(ee.hash),redirectedFrom:void 0,href:p})}let x;if("path"in v)x=ye({},v,{path:Qa(n,v.path,U.path).path});else{const ee=ye({},v.params);for(const d in ee)ee[d]==null&&delete ee[d];x=ye({},v,{params:h(v.params)}),U.params=h(U.params)}const V=e.resolve(x,U),pe=v.hash||"";V.params=u(f(V.params));const Ee=NC(s,ye({},v,{hash:m2(pe),path:V.path})),ne=r.createHref(Ee);return ye({fullPath:Ee,hash:pe,query:s===Vf?E2(v.query):v.query||{}},V,{redirectedFrom:void 0,href:ne})}function L(v){return typeof v=="string"?Qa(n,v,c.value.path):ye({},v)}function K(v,U){if(l!==v)return Ks(8,{from:U,to:v})}function H(v){return ve(v)}function ce(v){return H(ye(L(v),{replace:!0}))}function le(v){const U=v.matched[v.matched.length-1];if(U&&U.redirect){const{redirect:x}=U;let V=typeof x=="function"?x(v):x;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=L(V):{path:V},V.params={}),ye({query:v.query,hash:v.hash,params:v.params},V)}}function ve(v,U){const x=l=C(v),V=c.value,pe=v.state,Ee=v.force,ne=v.replace===!0,ee=le(x);if(ee)return ve(ye(L(ee),{state:pe,force:Ee,replace:ne}),U||x);const d=x;d.redirectedFrom=U;let p;return!Ee&&DC(s,V,x)&&(p=Ks(16,{to:d,from:V}),ds(V,V,!0,!1)),(p?Promise.resolve(p):Ne(d,V)).catch(y=>on(y)?on(y,2)?y:mt(y):we(y,d,V)).then(y=>{if(y){if(on(y,2))return ve(ye(L(y.to),{state:pe,force:Ee,replace:ne}),U||d)}else y=ft(d,V,!0,ne,pe);return ht(d,V,y),y})}function xe(v,U){const x=K(v,U);return x?Promise.reject(x):Promise.resolve()}function Ne(v,U){let x;const[V,pe,Ee]=k2(v,U);x=Ja(V.reverse(),"beforeRouteLeave",v,U);for(const ee of V)ee.leaveGuards.forEach(d=>{x.push(ln(d,v,U))});const ne=xe.bind(null,v,U);return x.push(ne),ms(x).then(()=>{x=[];for(const ee of i.list())x.push(ln(ee,v,U));return x.push(ne),ms(x)}).then(()=>{x=Ja(pe,"beforeRouteUpdate",v,U);for(const ee of pe)ee.updateGuards.forEach(d=>{x.push(ln(d,v,U))});return x.push(ne),ms(x)}).then(()=>{x=[];for(const ee of v.matched)if(ee.beforeEnter&&!U.matched.includes(ee))if(Array.isArray(ee.beforeEnter))for(const d of ee.beforeEnter)x.push(ln(d,v,U));else x.push(ln(ee.beforeEnter,v,U));return x.push(ne),ms(x)}).then(()=>(v.matched.forEach(ee=>ee.enterCallbacks={}),x=Ja(Ee,"beforeRouteEnter",v,U),x.push(ne),ms(x))).then(()=>{x=[];for(const ee of o.list())x.push(ln(ee,v,U));return x.push(ne),ms(x)}).catch(ee=>on(ee,8)?ee:Promise.reject(ee))}function ht(v,U,x){for(const V of a.list())V(v,U,x)}function ft(v,U,x,V,pe){const Ee=K(v,U);if(Ee)return Ee;const ne=U===rn,ee=vs?history.state:{};x&&(V||ne?r.replace(v.fullPath,ye({scroll:ne&&ee&&ee.scroll},pe)):r.push(v.fullPath,pe)),c.value=v,ds(v,U,x,ne),mt()}let Tt;function us(){Tt||(Tt=r.listen((v,U,x)=>{const V=C(v),pe=le(V);if(pe){ve(ye(pe,{replace:!0}),V).catch(xr);return}l=V;const Ee=c.value;vs&&VC(Of(Ee.fullPath,x.delta),Ca()),Ne(V,Ee).catch(ne=>on(ne,12)?ne:on(ne,2)?(ve(ne.to,V).then(ee=>{on(ee,20)&&!x.delta&&x.type===ni.pop&&r.go(-1,!1)}).catch(xr),Promise.reject()):(x.delta&&r.go(-x.delta,!1),we(ne,V,Ee))).then(ne=>{ne=ne||ft(V,Ee,!1),ne&&(x.delta?r.go(-x.delta,!1):x.type===ni.pop&&on(ne,20)&&r.go(-1,!1)),ht(V,Ee,ne)}).catch(xr)}))}let hs=fr(),fs=fr(),Le;function we(v,U,x){mt(v);const V=fs.list();return V.length?V.forEach(pe=>pe(v,U,x)):console.error(v),Promise.reject(v)}function de(){return Le&&c.value!==rn?Promise.resolve():new Promise((v,U)=>{hs.add([v,U])})}function mt(v){return Le||(Le=!v,us(),hs.list().forEach(([U,x])=>v?x(v):U()),hs.reset()),v}function ds(v,U,x,V){const{scrollBehavior:pe}=t;if(!vs||!pe)return Promise.resolve();const Ee=!x&&BC(Of(v.fullPath,0))||(V||!x)&&history.state&&history.state.scroll||null;return vd().then(()=>pe(v,U,Ee)).then(ne=>ne&&FC(ne)).catch(ne=>we(ne,v,U))}const qt=v=>r.go(v);let Dt;const bt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:w,getRoutes:T,resolve:C,options:t,push:H,replace:ce,go:qt,back:()=>qt(-1),forward:()=>qt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fs.add,isReady:de,install(v){const U=this;v.component("RouterLink",cr),v.component("RouterView",ny),v.config.globalProperties.$router=U,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>wr(c)}),vs&&!Dt&&c.value===rn&&(Dt=!0,H(r.location).catch(pe=>{}));const x={};for(const pe in rn)x[pe]=$t(()=>c.value[pe]);v.provide(Au,U),v.provide(zm,Xs(x)),v.provide(zc,c);const V=v.unmount;bt.add(v),v.unmount=function(){bt.delete(v),bt.size<1&&(l=rn,Tt&&Tt(),Tt=null,c.value=rn,Dt=!1,Le=!1),V()}}}}function ms(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function k2(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>zs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>zs(l,c))||r.push(c))}return[n,s,r]}const $n=Xs({user:null});var Se=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const R2={},x2={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},N2=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),D2=N("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},null,-1),P2=[N2,D2];function O2(t,e){return q(),oe("svg",x2,P2)}var M2=Se(R2,[["render",O2]]);const L2={},U2={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},$2=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),F2=N("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"},null,-1),V2=[$2,F2];function B2(t,e){return q(),oe("svg",U2,V2)}var j2=Se(L2,[["render",B2]]);const H2={},q2={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},z2=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),K2=N("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"},null,-1),W2=[z2,K2];function G2(t,e){return q(),oe("svg",q2,W2)}var Y2=Se(H2,[["render",G2]]);const X2={components:{RouterLink:cr},props:{to:{type:String,default:"/",required:!0}}},Q2={class:"first:-ml-8 group"};function J2(t,e,n,s,r,i){const o=he("RouterLink");return q(),oe("li",Q2,[z(o,{to:n.to,class:"p-8"},{default:ke(({isActive:a})=>[N("span",{class:Gn(["text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",{"after:scale-x-100":a}])},[ao(t.$slots,"default")],2)]),_:3},8,["to"])])}var Z2=Se(X2,[["render",J2]]);const eS={components:{NavItem:Z2,IconEMail:M2,IconPhone:Y2,IconMenu:j2,RouterLink:cr},data(){return{store:$n}}},sy=t=>(Sd("data-v-3c1e99c9"),t=t(),Ad(),t),tS={class:"col-start-3 col-end-13 row-span-1 flex items-center justify-end md:justify-between ml-0"},nS={class:"hidden md:block"},sS={class:"flex flex-row"},rS=An("Strona g\u0142\xF3wna"),iS=An("Samochody"),oS=An("Dashboard"),aS={class:"flex items-center gap-2"},cS=An("car@rent.pl"),lS=sy(()=>N("span",{class:"h-10 w-px bg-zinc-400 mx-1"},null,-1)),uS={class:"flex items-center gap-2 mr-8"},hS=An("123 456 789"),fS=sy(()=>N("button",{class:"btn hidden xl:block mr-8 py-4 px-10 bg-red-500 hover:bg-red-600 shadow-red-500 rounded-full text-white font-semibold tracking-wide transition hover:scale-105"}," Wynajmij teraz ",-1));function dS(t,e,n,s,r,i){const o=he("NavItem"),a=he("IconEMail"),c=he("IconPhone"),l=he("RouterLink"),u=he("IconMenu");return q(),oe("header",tS,[N("nav",nS,[N("ul",sS,[z(o,{to:"/"},{default:ke(()=>[rS]),_:1}),z(o,{to:"/cars"},{default:ke(()=>[iS]),_:1}),r.store.user&&r.store.user.role==="admin"?(q(),He(o,{key:0,to:"/dashboard"},{default:ke(()=>[oS]),_:1})):Ut("",!0)])]),N("div",{class:Gn(["hidden lg:flex flex-row items-center gap-2 xl:gap-4 fill-white text-zinc-400 font-semibold",{"lg:hidden":t.$route.fullPath!=="/"}])},[N("span",aS,[z(a,{class:"w-6 h-6"}),cS]),lS,N("span",uS,[z(c,{class:"w-6 h-6"}),hS]),z(l,{to:"/cars"},{default:ke(()=>[fS]),_:1})],2),z(u,{class:"block md:hidden shrink-0 w-12 h-12 mx-8 fill-white"})])}var pS=Se(eS,[["render",dS],["__scopeId","data-v-3c1e99c9"]]);const gS={components:{RouterLink:cr},props:{to:{type:String,default:null,required:!1},tooltip:{type:String,default:"",required:!1}}},mS={key:0,class:"group-hover:opacity-100 group-hover:visible z-10 w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"},yS={key:1,class:"flex items-center justify-center relative py-4 hover:bg-zinc-700 cursor-pointer group"},_S={class:"icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center"},vS={key:0,class:"group-hover:opacity-100 group-hover:visible w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"};function wS(t,e,n,s,r,i){const o=he("RouterLink");return n.to?(q(),He(o,{key:0,to:n.to},{default:ke(({isActive:a})=>[N("li",{class:Gn(["flex items-center justify-center relative py-4 hover:bg-zinc-700/50 group",{"bg-zinc-700/50":a}])},[N("div",{class:Gn(["icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center",{"after:absolute after:top-0 after:left-0 after:w-1.5 after:h-full after:bg-white opacity-100":a}])},[ao(t.$slots,"default")],2),n.tooltip?(q(),oe("span",mS,jn(n.tooltip),1)):Ut("",!0)],2)]),_:3},8,["to"])):(q(),oe("li",yS,[N("div",_S,[ao(t.$slots,"default")]),n.tooltip?(q(),oe("span",vS,jn(n.tooltip),1)):Ut("",!0)]))}var ES=Se(gS,[["render",wS]]);const IS={components:{RouterLink:cr},props:{href:{type:String,default:"/",required:!0}}},bS=N("li",{class:"flex items-center justify-center relative group"},[N("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"w-full h-full m-6 fill-white group-hover:fill-red-500 transition-colors duration-200"},[N("path",{d:"M8 1.9928C8.13261 1.9928 8.25979 2.04548 8.35355 2.13924C8.44732 2.23301 8.5 2.36019 8.5 2.4928V3.9928C8.5 4.12541 8.44732 4.25258 8.35355 4.34635C8.25979 4.44012 8.13261 4.4928 8 4.4928C7.86739 4.4928 7.74021 4.44012 7.64645 4.34635C7.55268 4.25258 7.5 4.12541 7.5 3.9928V2.4928C7.5 2.36019 7.55268 2.23301 7.64645 2.13924C7.74021 2.04548 7.86739 1.9928 8 1.9928V1.9928ZM3.732 3.7248C3.82576 3.63106 3.95292 3.5784 4.0855 3.5784C4.21808 3.5784 4.34524 3.63106 4.439 3.7248L5.354 4.6388C5.40049 4.68529 5.43736 4.74047 5.46252 4.80121C5.48768 4.86195 5.50063 4.92705 5.50063 4.9928C5.50063 5.05854 5.48768 5.12364 5.46252 5.18438C5.43736 5.24512 5.40049 5.30031 5.354 5.3468C5.30751 5.39329 5.25232 5.43016 5.19158 5.45532C5.13084 5.48048 5.06574 5.49343 5 5.49343C4.93426 5.49343 4.86916 5.48048 4.80842 5.45532C4.74768 5.43016 4.69249 5.39329 4.646 5.3468L3.732 4.4318C3.63826 4.33803 3.58561 4.21088 3.58561 4.0783C3.58561 3.94572 3.63826 3.81856 3.732 3.7248V3.7248ZM2 7.9928C2 7.86019 2.05268 7.73301 2.14645 7.63924C2.24021 7.54548 2.36739 7.4928 2.5 7.4928H4.086C4.21861 7.4928 4.34579 7.54548 4.43955 7.63924C4.53332 7.73301 4.586 7.86019 4.586 7.9928C4.586 8.12541 4.53332 8.25258 4.43955 8.34635C4.34579 8.44012 4.21861 8.4928 4.086 8.4928H2.5C2.36739 8.4928 2.24021 8.44012 2.14645 8.34635C2.05268 8.25258 2 8.12541 2 7.9928ZM11.5 7.9928C11.5 7.86019 11.5527 7.73301 11.6464 7.63924C11.7402 7.54548 11.8674 7.4928 12 7.4928H13.5C13.6326 7.4928 13.7598 7.54548 13.8536 7.63924C13.9473 7.73301 14 7.86019 14 7.9928C14 8.12541 13.9473 8.25258 13.8536 8.34635C13.7598 8.44012 13.6326 8.4928 13.5 8.4928H12C11.8674 8.4928 11.7402 8.44012 11.6464 8.34635C11.5527 8.25258 11.5 8.12541 11.5 7.9928ZM12.254 3.7468C12.1847 3.67788 12.0921 3.63756 11.9944 3.63386C11.8968 3.63015 11.8013 3.66333 11.727 3.7268L7.547 7.3028C7.44961 7.38485 7.37053 7.48644 7.31487 7.60098C7.2592 7.71553 7.2282 7.84048 7.22387 7.96775C7.21954 8.09503 7.24197 8.2218 7.28971 8.33986C7.33745 8.45793 7.40945 8.56465 7.50103 8.65314C7.59262 8.74163 7.70175 8.80992 7.82139 8.85357C7.94102 8.89723 8.06849 8.91529 8.19554 8.90659C8.32259 8.89788 8.44641 8.86261 8.55897 8.80304C8.67153 8.74348 8.77034 8.66095 8.849 8.5608L12.283 4.2638C12.3427 4.18901 12.3728 4.09483 12.3675 3.99926C12.3621 3.90369 12.3217 3.81345 12.254 3.7458V3.7468Z"}),N("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.30783e-06 7.99282C0.00105068 6.82862 0.256178 5.67867 0.747577 4.62327C1.23898 3.56786 1.9548 2.63242 2.84509 1.88225C3.73538 1.13208 4.77866 0.585262 5.90212 0.279968C7.02558 -0.0253257 8.20213 -0.0817387 9.34964 0.114668C10.4972 0.311074 11.588 0.755567 12.5459 1.41712C13.5039 2.07866 14.306 2.94133 14.8961 3.94488C15.4862 4.94843 15.8502 6.06869 15.9626 7.22745C16.075 8.38621 15.9332 9.55554 15.547 10.6538C15.105 11.9068 13.702 12.2558 12.615 11.9038C11.309 11.4808 9.47501 10.9928 8.00001 10.9928C6.52601 10.9928 4.69001 11.4808 3.38501 11.9038C2.29801 12.2558 0.895005 11.9068 0.453005 10.6538C0.152147 9.79894 -0.00103942 8.89909 5.30783e-06 7.99282V7.99282ZM8.00001 0.992817C6.88038 0.992528 5.77701 1.26081 4.78252 1.77515C3.78802 2.28949 2.93141 3.03487 2.28457 3.94875C1.63774 4.86263 1.21955 5.91833 1.06511 7.02726C0.910674 8.13618 1.02449 9.26598 1.39701 10.3218C1.60001 10.8968 2.32001 11.1978 3.07701 10.9518C4.39701 10.5258 6.35801 9.99282 8.00001 9.99282C9.64201 9.99282 11.604 10.5248 12.923 10.9528C13.68 11.1978 14.4 10.8968 14.603 10.3218C14.9755 9.26598 15.0893 8.13618 14.9349 7.02726C14.7805 5.91833 14.3623 4.86263 13.7154 3.94875C13.0686 3.03487 12.212 2.28949 11.2175 1.77515C10.223 1.26081 9.11963 0.992528 8.00001 0.992817V0.992817Z"})])],-1);function TS(t,e,n,s,r,i){const o=he("RouterLink");return q(),He(o,{to:n.href},{default:ke(()=>[bS]),_:1},8,["to"])}var CS=Se(IS,[["render",TS]]);const SS={},AS={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},kS=N("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),RS=N("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"},null,-1),xS=[kS,RS];function NS(t,e){return q(),oe("svg",AS,xS)}var DS=Se(SS,[["render",NS]]);const PS={},OS={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},MS=N("g",null,[N("rect",{fill:"none",height:"24",width:"24"})],-1),LS=N("g",null,[N("path",{d:"M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"})],-1),US=[MS,LS];function $S(t,e){return q(),oe("svg",OS,US)}var FS=Se(PS,[["render",$S]]),VS="firebase",BS="9.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(VS,BS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firebasestorage.googleapis.com",iy="storageBucket",jS=2*60*1e3,HS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends kn{constructor(e,n){super(Za(e),`Firebase Storage: ${n} (${Za(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}_codeEquals(e){return Za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Za(t){return"storage/"+t}function oy(){const t="An unknown error occurred, please check the error payload for server response.";return new je("unknown",t)}function qS(t){return new je("object-not-found","Object '"+t+"' does not exist.")}function zS(t){return new je("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je("unauthenticated",t)}function WS(){return new je("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function GS(t){return new je("unauthorized","User does not have permission to access '"+t+"'.")}function YS(){return new je("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function XS(){return new je("canceled","User canceled the upload/download.")}function QS(t){return new je("invalid-url","Invalid URL '"+t+"'.")}function JS(t){return new je("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ZS(){return new je("no-default-bucket","No default bucket found. Did you set the '"+iy+"' property when initializing the app?")}function eA(){return new je("no-download-url","The given file does not have any download URLs.")}function Gc(t){return new je("invalid-argument",t)}function ay(){return new je("app-deleted","The Firebase app was deleted.")}function tA(t){return new je("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dr(t){throw new je("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(s.path==="")return s;throw JS(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(H){H.path_=decodeURIComponent(H.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},T=n===ry?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",C=new RegExp(`^https?://${T}/${r}/${w}`,"i"),K=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let H=0;H<K.length;H++){const ce=K[H],le=ce.regex.exec(e);if(le){const ve=le[ce.indices.bucket];let xe=le[ce.indices.path];xe||(xe=""),s=new wt(ve,xe),ce.postModify(s);break}}if(s==null)throw QS(e);return s}}class nA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){r=setTimeout(()=>{r=null,t(g,c())},w)}function f(){i&&clearTimeout(i)}function g(w,...C){if(l){f();return}if(w){f(),u.call(null,w,...C);return}if(c()||o){f(),u.call(null,w,...C);return}s<64&&(s*=2);let K;a===1?(a=2,K=0):K=(s+Math.random())*1e3,h(K)}let m=!1;function T(w){m||(m=!0,f(),!l&&(r!==null?(w||(a=2),clearTimeout(r),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function rA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){return t!==void 0}function oA(t){return typeof t=="object"&&!Array.isArray(t)}function cy(t){return typeof t=="string"||t instanceof String}function zf(t,e,n,s){if(s<e)throw Gc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Gc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function uy(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Bi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Wn.ABORT;s(!1,new Bi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Bi(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());iA(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=oy();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ay():XS();o(c)}else{const c=YS();o(c)}};this.canceled_?n(!1,new Bi(!1,null,!0)):this.backoffId_=sA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Bi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function cA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function uA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function fA(t,e,n,s,r,i){const o=uy(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return uA(c,e),cA(c,n),lA(c,i),hA(c,s),new aA(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){let e;try{e=JSON.parse(t)}catch{return null}return oA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pA(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function fy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e){return e}class tt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||gA}}let ji=null;function mA(t){return!cy(t)||t.length<2?t:fy(t)}function yA(){if(ji)return ji;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(i,o){return mA(o)}const n=new tt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new tt("size");return r.xform=s,t.push(r),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),ji=t,ji}function _A(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new wt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vA(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return _A(s,t),s}function wA(t,e,n){const s=hy(e);return s===null?null:vA(t,s,n)}function EA(t,e,n,s){const r=hy(e);if(r===null||!cy(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),g=ly(f,n,s),m=uy({alt:"media",token:l});return g+m})[0]}class IA{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){if(!t)throw oy()}function TA(t,e){function n(s,r){const i=wA(t,r,e);return bA(i!==null),EA(i,r,t.host,t._protocol)}return n}function CA(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=WS():r=KS():n.getStatus()===402?r=zS(t.bucket):n.getStatus()===403?r=GS(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function SA(t){const e=CA(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=qS(t.path)),i.serverResponse=r.serverResponse,i}return n}function AA(t,e,n){const s=e.fullServerUrl(),r=ly(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new IA(r,i,TA(t,n),o);return a.errorHandler=SA(e),a}class kA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw dr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RA extends kA{initXhr(){this.xhr_.responseType="text"}}function xA(){return new RA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fy(this._location.path)}get storage(){return this._service}get parent(){const e=dA(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tA(e)}}function NA(t){t._throwIfRoot("getDownloadURL");const e=AA(t.storage,t._location,yA());return t.storage.makeRequestWithTokens(e,xA).then(n=>{if(n===null)throw eA();return n})}function DA(t,e){const n=pA(t._location.path,e),s=new wt(t._location.bucket,n);return new os(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){return/^[A-Za-z]+:\/\//.test(t)}function OA(t,e){return new os(t,e)}function dy(t,e){if(t instanceof Ru){const n=t;if(n._bucket==null)throw ZS();const s=new os(n,n._bucket);return e!=null?dy(s,e):s}else return e!==void 0?DA(t,e):t}function MA(t,e){if(e&&PA(e)){if(t instanceof Ru)return OA(t,e);throw Gc("To use ref(service, url), the first argument must be a Storage instance.")}else return dy(t,e)}function Kf(t,e){const n=e==null?void 0:e[iy];return n==null?null:wt.makeFromBucketSpec(n,t)}class Ru{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ry,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jS,this._maxUploadRetryTime=HS,this._requests=new Set,r!=null?this._bucket=wt.makeFromBucketSpec(r,this._host):this._bucket=Kf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=Kf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new nA(ay());{const i=fA(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Wf="@firebase/storage",Gf="0.9.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="storage";function LA(t){return t=Oe(t),NA(t)}function UA(t,e){return t=Oe(t),MA(t,e)}function $A(t=gl(),e){return t=Oe(t),Ko(t,py).getImmediate({identifier:e})}function FA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ru(n,s,r,e,Qs)}function VA(){Yn(new bn(py,FA,"PUBLIC").setMultipleInstances(!0)),Ft(Wf,Gf,""),Ft(Wf,Gf,"esm2017")}VA();const BA={apiKey:"AIzaSyCcXEaHHLQsZnk8Zm1xFKxQ75XxKSVD4Jw",authDomain:"vue-sports-car-rental.firebaseapp.com",projectId:"vue-sports-car-rental",storageBucket:"vue-sports-car-rental.appspot.com",messagingSenderId:"233423236620",appId:"1:233423236620:web:a1d8dd700b40ddca2f4829"},gy=hv(BA),my=iC(gy),yy=gE(gy),jA=$A(),HA={},qA={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},zA=N("g",null,[N("path",{d:"M0,0h24v24H0V0z",fill:"none"})],-1),KA=N("g",null,[N("path",{d:"M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"})],-1),WA=[zA,KA];function GA(t,e){return q(),oe("svg",qA,WA)}var YA=Se(HA,[["render",GA]]);const XA={},QA={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},JA=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ZA=N("path",{d:"M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"},null,-1),e4=[JA,ZA];function t4(t,e){return q(),oe("svg",QA,e4)}var n4=Se(XA,[["render",t4]]);const s4={},r4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i4=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),o4=N("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"},null,-1),a4=N("circle",{cx:"7.5",cy:"14.5",r:"1.5"},null,-1),c4=N("circle",{cx:"16.5",cy:"14.5",r:"1.5"},null,-1),l4=[i4,o4,a4,c4];function u4(t,e){return q(),oe("svg",r4,l4)}var h4=Se(s4,[["render",u4]]);const f4={},d4={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24"},p4=y0('<g><rect fill="none" height="24" width="24" y="0"></rect></g><g><g><g><circle cx="9" cy="16.5" r="1"></circle><circle cx="15" cy="16.5" r="1"></circle><path d="M17.25,9.6c-0.02-0.02-0.03-0.04-0.05-0.07C16.82,9.01,16.28,9,16.28,9H7.72c0,0-0.54,0.01-0.92,0.54 C6.78,9.56,6.77,9.58,6.75,9.6C6.68,9.71,6.61,9.84,6.56,10C6.34,10.66,5.82,12.22,5,14.69v6.5C5,21.64,5.35,22,5.78,22h0.44 C6.65,22,7,21.64,7,21.19V20h10v1.19c0,0.45,0.34,0.81,0.78,0.81h0.44c0.43,0,0.78-0.36,0.78-0.81v-6.5 c-0.82-2.46-1.34-4.03-1.56-4.69C17.39,9.84,17.32,9.71,17.25,9.6z M8.33,11h7.34l0.23,0.69L16.33,13H7.67L8.33,11z M17,18H7 v-2.99V15h10v0.01V18z"></path><path d="M10.83,3C10.41,1.83,9.3,1,8,1C6.34,1,5,2.34,5,4c0,1.65,1.34,3,3,3c1.3,0,2.41-0.84,2.83-2H16v2h2V5h1V3H10.83z M8,5 C7.45,5,7,4.55,7,4s0.45-1,1-1s1,0.45,1,1S8.55,5,8,5z"></path></g></g></g>',2),g4=[p4];function m4(t,e){return q(),oe("svg",d4,g4)}var y4=Se(f4,[["render",m4]]);const _4={},v4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w4=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),E4=N("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"},null,-1),I4=[w4,E4];function b4(t,e){return q(),oe("svg",v4,I4)}var T4=Se(_4,[["render",b4]]);const C4={components:{SideBarItem:ES,SideBarLogo:CS,IconPerson:DS,IconLogin:FS,IconLogout:YA,IconDashboard:n4,IconCar:h4,IconCarRental:y4,IconSave:T4},data(){return{store:$n}},methods:{signOutUser(){rw(yy).then(()=>{}).catch(()=>{})}}},S4={class:"col-span-1 row-span-full bg-zinc-800"},A4={class:"flex flex-col h-full"},k4={class:"mb-auto"},R4={class:"mt-auto"};function x4(t,e,n,s,r,i){const o=he("SideBarLogo"),a=he("IconDashboard"),c=he("SideBarItem"),l=he("IconCar"),u=he("IconCarRental"),h=he("IconPerson"),f=he("IconSave"),g=he("IconLogin"),m=he("IconLogout");return q(),oe("aside",S4,[N("ul",A4,[z(o,{href:"/",class:"py-3"}),N("div",k4,[r.store.user&&r.store.user.role==="admin"?(q(),He(c,{key:0,to:"/dashboard",tooltip:"Dashboard"},{default:ke(()=>[z(a)]),_:1})):Ut("",!0),r.store.user&&r.store.user.role==="admin"?(q(),He(c,{key:1,to:"/dashboard/cars",tooltip:"Samochody"},{default:ke(()=>[z(l)]),_:1})):Ut("",!0),r.store.user&&r.store.user.role==="admin"?(q(),He(c,{key:2,to:"/dashboard/rents",tooltip:"Wynajmy"},{default:ke(()=>[z(u)]),_:1})):Ut("",!0),r.store.user&&r.store.user.role==="admin"?(q(),He(c,{key:3,to:"/dashboard/users",tooltip:"U\u017Cytkownicy"},{default:ke(()=>[z(h)]),_:1})):Ut("",!0),r.store.user&&r.store.user.role==="admin"?(q(),He(c,{key:4,to:"/dashboard/mock",tooltip:"Mock Data"},{default:ke(()=>[z(f)]),_:1})):Ut("",!0)]),N("div",R4,[r.store.user?(q(),He(c,{key:1,to:"/account",tooltip:"Moje konto"},{default:ke(()=>[z(h)]),_:1})):(q(),He(c,{key:0,to:"/register",tooltip:"Zarejestruj si\u0119"},{default:ke(()=>[z(h)]),_:1})),r.store.user?(q(),He(c,{key:3,tooltip:"Wyloguj si\u0119",onClick:i.signOutUser},{default:ke(()=>[z(m)]),_:1},8,["onClick"])):(q(),He(c,{key:2,to:"/login",tooltip:"Zaloguj si\u0119"},{default:ke(()=>[z(g)]),_:1}))])])])}var N4=Se(C4,[["render",x4]]);const D4={components:{RouterView:ny,SideBar:N4,NavBar:pS},beforeMount(){sw(yy,t=>{t?($n.user=t,this.getRole(t)):$n.user=null})},methods:{async getRole(t){if(!t)return;const e=xm(my,"users",t.uid),n=await TC(e);n.exists()?$n.user=Object.assign($n.user,n.data()):$n.user.role=null}}};function P4(t,e,n,s,r,i){const o=he("NavBar"),a=he("SideBar"),c=he("RouterView");return q(),oe(st,null,[z(o),z(a),z(c)],64)}var O4=Se(D4,[["render",P4]]);const M4="modulepreload",Yf={},L4="/vue-sports-car-rental/",St=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${L4}${s}`,s in Yf)return;Yf[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":M4,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},U4={components:{},props:{car:{type:Object,default:()=>{},required:!0},res:{type:String,default:"thumb",required:!1}},data(){return{url:null}},created(){this.getCarImageUrl(this.car.model)},methods:{async getCarImageUrl(t){t=t.replace(/\s+/g,"-").toLowerCase();let e=`${t}_${this.res}.jpg`;const n=UA(jA,`images/${e}`);LA(n).then(s=>{this.url=s}).catch(()=>{this.url=null})}}},$4={key:0,class:"bg-zinc-600 animate-pulse"},F4=["src","alt"];function V4(t,e,n,s,r,i){return r.url?(q(),oe("img",{key:1,src:r.url,alt:`${n.car.brand} ${n.car.model}`},null,8,F4)):(q(),oe("div",$4))}var _y=Se(U4,[["render",V4]]);const B4={components:{},props:{parameter:{type:String,default:"",required:!0},title:{type:String,default:"",required:!1},value:{type:String,default:"",required:!0}}},j4={class:"flex flex-col items-center sm:items-start"},H4=["title"],q4={class:"text-zinc-400 font-medium text-sm sm:text-lg"},z4={class:"text-white font-bold text-3xl sm:text-5xl"};function K4(t,e,n,s,r,i){return q(),oe("li",j4,[N("div",{class:"icon fill-zinc-400 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-2",title:n.title?n.title:n.parameter},[ao(t.$slots,"default",{},void 0,!0)],8,H4),N("span",q4,jn(n.parameter),1),N("span",z4,jn(n.value),1)])}var W4=Se(B4,[["render",K4],["__scopeId","data-v-42d69c2c"]]);const G4={},Y4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},X4=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Q4=N("path",{d:"M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"},null,-1),J4=[X4,Q4];function Z4(t,e){return q(),oe("svg",Y4,J4)}var ek=Se(G4,[["render",Z4]]);const tk={},nk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},sk=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),rk=N("path",{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"},null,-1),ik=[sk,rk];function ok(t,e){return q(),oe("svg",nk,ik)}var ak=Se(tk,[["render",ok]]);const ck={components:{IconArrowRight:ak,IconArrowLeft:ek,CarImage:_y},props:{type:{type:String,default:"pc",required:!0},cars:{type:Object,default:()=>{},required:!1}},emits:["previous","next"]},lk={key:0,class:"hidden xl:flex flex-col w-full h-full col-start-7 col-end-11 row-start-3 row-end-[12]"},uk={class:"swiper__shadow w-full h-full"},hk={class:"relative w-full h-full clip -z-10"},fk={class:"fixed inset-0 overflow-hidden"},dk={class:"w-full h-full flex flex-row swiper transition-transform duration-[400ms]"},pk={class:"flex justify-between mt-4"},gk={key:1,class:"flex xl:hidden my-4 justify-between"};function mk(t,e,n,s,r,i){const o=he("CarImage"),a=he("IconArrowLeft"),c=he("IconArrowRight");return n.type==="pc"?(q(),oe("div",lk,[N("div",uk,[N("div",hk,[N("div",fk,[N("ul",dk,[(q(!0),oe(st,null,Md(n.cars,l=>(q(),oe("li",{key:l.id_car,class:"relative w-screen h-full flex-shrink-0"},[z(o,{car:l,res:"highres",class:"absolute inset-0 w-full h-full object-cover object-center"},null,8,["car"])]))),128))])])])]),N("div",pk,[N("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[0]||(e[0]=l=>t.$emit("previous"))},[z(a,{class:"w-12 h-12 m-2"})]),N("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[1]||(e[1]=l=>t.$emit("next"))},[z(c,{class:"w-12 h-12 m-2"})])])])):n.type==="mobile"?(q(),oe("div",gk,[N("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[2]||(e[2]=l=>t.$emit("previous"))},[z(a,{class:"w-12 h-12 m-2"})]),N("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[3]||(e[3]=l=>t.$emit("next"))},[z(c,{class:"w-12 h-12 m-2"})])])):Ut("",!0)}var yk=Se(ck,[["render",mk],["__scopeId","data-v-6b8fc82e"]]);const _k={},vk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wk=N("path",{d:"M8 10H16V18H11L9 16H7V11L8 10ZM7 4V6H10V8H7L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z"},null,-1),Ek=[wk];function Ik(t,e){return q(),oe("svg",vk,Ek)}var bk=Se(_k,[["render",Ik]]);const Tk={},Ck={xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},Sk=N("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Ak=N("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},null,-1),kk=[Sk,Ak];function Rk(t,e){return q(),oe("svg",Ck,kk)}var xk=Se(Tk,[["render",Rk]]);const Nk={},Dk={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"23",viewBox:"0 0 24 23"},Pk=N("path",{d:"M12 0.09375C10.375 0.09375 8.82422 0.410156 7.34766 1.04297C5.87109 1.67578 4.59766 2.52734 3.52734 3.59766C2.45703 4.66797 1.60547 5.94531 0.972656 7.42969C0.339844 8.91406 0.0234375 10.4687 0.0234375 12.0938C0.0234375 14.1562 0.519531 16.0859 1.51172 17.8828C2.50391 19.6797 3.88281 21.1328 5.64844 22.2422C5.82031 22.3516 6.00781 22.3828 6.21094 22.3359C6.41406 22.2891 6.57031 22.1797 6.67969 22.0078C6.78906 21.8359 6.82031 21.6484 6.77344 21.4453C6.72656 21.2422 6.61719 21.0859 6.44531 20.9766C5.17969 20.1797 4.13281 19.1719 3.30469 17.9531L4.10156 17.4844C4.27344 17.3906 4.38672 17.2422 4.44141 17.0391C4.49609 16.8359 4.47266 16.6445 4.37109 16.4648C4.26953 16.2852 4.11719 16.168 3.91406 16.1133C3.71094 16.0586 3.52344 16.0859 3.35156 16.1953L2.55469 16.6406C2.27344 16.0469 2.04688 15.4297 1.875 14.7891C1.70312 14.1484 1.59375 13.4922 1.54688 12.8203H2.36719C2.58594 12.8203 2.76562 12.7461 2.90625 12.5977C3.04688 12.4492 3.11719 12.2734 3.11719 12.0703C3.11719 11.8672 3.04688 11.6914 2.90625 11.543C2.76562 11.3945 2.58594 11.3203 2.36719 11.3203H1.54688C1.64062 9.96094 1.99219 8.67188 2.60156 7.45312L3.35156 7.89844C3.46094 7.96094 3.58594 7.99219 3.72656 7.99219C4.00781 7.99219 4.21875 7.86719 4.35938 7.61719C4.46875 7.44531 4.49609 7.25781 4.44141 7.05469C4.38672 6.85156 4.27344 6.70312 4.10156 6.60938L3.35156 6.16406C4.11719 5.05469 5.05469 4.125 6.16406 3.375L6.58594 4.10156C6.72656 4.35156 6.94531 4.47656 7.24219 4.47656C7.36719 4.47656 7.49219 4.44531 7.61719 4.38281C7.69531 4.33594 7.76562 4.26953 7.82812 4.18359C7.89063 4.09766 7.93359 4.01172 7.95703 3.92578C7.98047 3.83984 7.98828 3.74609 7.98047 3.64453C7.97266 3.54297 7.9375 3.44531 7.875 3.35156L7.45312 2.625C8.04688 2.34375 8.66016 2.12109 9.29297 1.95703C9.92578 1.79297 10.5703 1.67969 11.2266 1.61719V2.55469C11.2266 2.77344 11.3008 2.95312 11.4492 3.09375C11.5977 3.23438 11.7773 3.30469 11.9883 3.30469C12.1992 3.30469 12.375 3.23438 12.5156 3.09375C12.6562 2.95312 12.7266 2.77344 12.7266 2.55469V1.61719C14.0859 1.71094 15.375 2.05469 16.5938 2.64844L16.1719 3.35156C16.1562 3.39844 16.1406 3.44141 16.125 3.48047C16.1094 3.51953 16.0977 3.5625 16.0898 3.60938C16.082 3.65625 16.0781 3.69922 16.0781 3.73828C16.0781 3.77734 16.082 3.82031 16.0898 3.86719C16.0977 3.91406 16.1094 3.95703 16.125 3.99609C16.1406 4.03516 16.1602 4.07422 16.1836 4.11328C16.207 4.15234 16.2305 4.1875 16.2539 4.21875C16.2773 4.25 16.3047 4.28125 16.3359 4.3125C16.3672 4.34375 16.4062 4.36719 16.4531 4.38281L16.5469 4.42969L16.6406 4.46484L16.7344 4.47656H16.8281C16.8906 4.47656 16.9531 4.46875 17.0156 4.45312C17.0781 4.4375 17.1367 4.41406 17.1914 4.38281C17.2461 4.35156 17.3008 4.3125 17.3555 4.26562C17.4102 4.21875 17.4531 4.16406 17.4844 4.10156L17.8828 3.39844C18.9922 4.16406 19.9219 5.09375 20.6719 6.1875L19.9688 6.60938C19.875 6.65625 19.8008 6.71875 19.7461 6.79688C19.6914 6.875 19.6484 6.96094 19.6172 7.05469C19.5859 7.14844 19.5781 7.24609 19.5938 7.34766C19.6094 7.44922 19.6406 7.53906 19.6875 7.61719C19.7656 7.74219 19.8633 7.83594 19.9805 7.89844C20.0977 7.96094 20.2187 7.99219 20.3438 7.99219C20.4063 7.99219 20.4687 7.98438 20.5312 7.96875C20.5938 7.95312 20.6562 7.92969 20.7188 7.89844L21.4219 7.5C22.0156 8.70312 22.3594 9.98438 22.4531 11.3438H21.6328C21.4297 11.3438 21.2539 11.418 21.1055 11.5664C20.957 11.7148 20.8828 11.8906 20.8828 12.0938C20.8828 12.2969 20.957 12.4727 21.1055 12.6211C21.2539 12.7695 21.4297 12.8438 21.6328 12.8438H22.4531C22.3594 14.1719 22.0312 15.4297 21.4688 16.6172L20.7188 16.1953C20.5312 16.0859 20.3398 16.0586 20.1445 16.1133C19.9492 16.168 19.7969 16.2891 19.6875 16.4766C19.6406 16.5547 19.6094 16.6445 19.5938 16.7461C19.5781 16.8477 19.5859 16.9453 19.6172 17.0391C19.6484 17.1328 19.6914 17.2188 19.7461 17.2969C19.8008 17.375 19.875 17.4375 19.9688 17.4844L20.7188 17.9297C19.875 19.1797 18.7969 20.2109 17.4844 21.0234C17.3125 21.1328 17.2031 21.2852 17.1562 21.4805C17.1094 21.6758 17.1406 21.8672 17.25 22.0547C17.2969 22.1172 17.3555 22.1758 17.4258 22.2305C17.4961 22.2852 17.5703 22.3281 17.6484 22.3594C17.7266 22.3906 17.8047 22.4062 17.8828 22.4062C18.0234 22.4062 18.1562 22.3672 18.2812 22.2891C20.0625 21.1953 21.457 19.7461 22.4648 17.9414C23.4727 16.1367 23.9766 14.1797 23.9766 12.0703C23.9766 10.4609 23.6602 8.91406 23.0273 7.42969C22.3945 5.94531 21.543 4.66797 20.4727 3.59766C19.4023 2.52734 18.1289 1.67578 16.6523 1.04297C15.1758 0.410156 13.625 0.09375 12 0.09375ZM17.5312 9.75C17.6563 9.67188 17.75 9.57422 17.8125 9.45703C17.875 9.33984 17.9062 9.21875 17.9062 9.09375C17.9062 8.96875 17.875 8.84375 17.8125 8.71875C17.7031 8.54687 17.5508 8.43359 17.3555 8.37891C17.1602 8.32422 16.9688 8.34375 16.7812 8.4375L12.7031 10.8047C12.4688 10.6641 12.2266 10.5938 11.9766 10.5938C11.5703 10.5938 11.2188 10.7422 10.9219 11.0391C10.625 11.3359 10.4766 11.6875 10.4766 12.0938C10.4766 12.3594 10.543 12.6094 10.6758 12.8438C10.8086 13.0781 10.9922 13.2617 11.2266 13.3945C11.4609 13.5273 11.7109 13.5938 11.9766 13.5938C12.3828 13.5938 12.7344 13.4453 13.0312 13.1484C13.3281 12.8516 13.4766 12.5 13.4766 12.0938L17.5312 9.75Z"},null,-1),Ok=[Pk];function Mk(t,e){return q(),oe("svg",Dk,Ok)}var Lk=Se(Nk,[["render",Mk]]);const Uk={components:{CarMainStatsItem:W4,IconEngine:bk,IconHP:xk,IconSpeed:Lk,CarSwiper:yk,RouterLink:cr,CarImage:_y},data(){return{index:0,cars:[],isLoading:!0}},computed:{getCar(){return this.cars[this.index]}},created(){this.searchCars()},methods:{async getCars(){this.cars=[],this.isLoading=!0;let t=[],e=mC(sC(my,"cars"),_C("gallery",">",0),wC("gallery"));return(await CC(e)).forEach(s=>{let r=s.id;t.push(Aa({id:r},s.data()))}),this.isLoading=!1,t},async searchCars(){this.getCars().then(t=>{this.cars=t})},previousCar(){this.index-1<0?this.index=this.cars.length-1:this.index--,this.setIndex()},nextCar(){this.index+1>this.cars.length-1?this.index=0:this.index++,this.setIndex()},setIndex(){document.querySelectorAll(".swiper").forEach(e=>{e.style.setProperty("--index",this.index)})}}},vy=t=>(Sd("data-v-64138d2a"),t=t(),Ad(),t),$k={key:0,class:"col-start-2 lg:col-start-3 col-end-13 xl:col-end-9 row-start-3 lg:row-start-3 row-end-[12] flex flex-col justify-center items-center sm:items-start lg:pl-0 p-8 lg:p-4 text-white"},Fk={class:"absolute inset-0 bg-black -z-20 car__bg xl:after:hidden overflow-hidden"},Vk={class:"w-full h-full flex flex-row swiper transition-transform duration-[400ms]"},Bk={class:"flex flex-col items-center sm:items-start"},jk=vy(()=>N("span",{class:"text-3xl lg:text-5xl ml-4 lg:leading-tight text-center"},"Wynajmij emocje",-1)),Hk={class:"flex flex-wrap gap-4 justify-center sm:justify-start z-[1]"},qk={class:"text-7xl sm:text-9xl lg:text-[10.5rem] lg:leading-none font-bold"},zk={class:"text-7xl sm:text-9xl lg:text-[10.5rem] lg:leading-none text-center sm:text-left font-display stroked"},Kk={class:"flex flex-wrap items-center justify-center gap-16"},Wk={class:"text-zinc-400 font-medium my-6"},Gk=An("ju\u017C od "),Yk={class:"text-red-500 font-bold"},Xk=An(" za dob\u0119!"),Qk={class:"flex flex-col"},Jk=vy(()=>N("button",{class:"bg-zinc-800/75 hover:bg-zinc-700/75 py-4 px-12 rounded-full font-semibold tracking-wide transition-colors"}," Zarezerwuj ",-1));function Zk(t,e,n,s,r,i){const o=he("CarImage"),a=he("IconEngine"),c=he("CarMainStatsItem"),l=he("IconHP"),u=he("IconSpeed"),h=he("RouterLink"),f=he("CarSwiper");return q(),oe(st,null,[r.cars.length>0?(q(),oe("main",$k,[(q(),He(d0,{to:"body"},[N("div",Fk,[N("ul",Vk,[(q(!0),oe(st,null,Md(r.cars,g=>(q(),oe("li",{key:g.id_car,class:"relative w-screen h-full flex-shrink-0"},[z(o,{car:g,res:"highres",class:"absolute inset-0 w-full h-full object-cover object-center xl:opacity-40 xl:blur-[1.25px] xl:grayscale-[60%] pointer-events-none"},null,8,["car"])]))),128))])])])),N("div",Bk,[jk,N("div",Hk,[N("span",qk,jn(i.getCar.brand),1),N("span",zk,jn(i.getCar.model),1)])]),N("ul",Kk,[i.getCar.eng_info&&i.getCar.eng_info.length<5?(q(),He(c,{key:0,parameter:"Silnik",value:i.getCar.eng_info},{default:ke(()=>[z(a)]),_:1},8,["value"])):(q(),He(c,{key:1,parameter:"Nm",value:i.getCar.eng_torque.toString()},{default:ke(()=>[z(a)]),_:1},8,["value"])),z(c,{parameter:"KM",title:"Konie mechaniczne",value:i.getCar.eng_power.toString()},{default:ke(()=>[z(l)]),_:1},8,["value"]),z(c,{parameter:"Pr\u0119dko\u015B\u0107",value:i.getCar.top_speed.toString()},{default:ke(()=>[z(u)]),_:1},8,["value"])]),N("span",Wk,[Gk,N("span",Yk,jn(i.getCar.price_deposit)+" z\u0142",1),Xk]),N("div",Qk,[z(h,{to:`/cars/${i.getCar.id_car}`},{default:ke(()=>[Jk]),_:1},8,["to"]),z(f,{type:"mobile",onPrevious:i.previousCar,onNext:i.nextCar},null,8,["onPrevious","onNext"])])])):Ut("",!0),z(f,{type:"pc",cars:r.cars,onPrevious:i.previousCar,onNext:i.nextCar},null,8,["cars","onPrevious","onNext"])],64)}var eR=Se(Uk,[["render",Zk],["__scopeId","data-v-64138d2a"]]);const tR=A2({history:zC("/vue-sports-car-rental/"),routes:[{path:"/",name:"home",component:eR},{path:"/cars",name:"cars",component:()=>St(()=>import("./CarsView.910d49ce.js"),["assets/CarsView.910d49ce.js","assets/CarsView.0d91e6e5.css","assets/ButtonSecondary.99a73a6e.js","assets/IconTransmission.b4d4d057.js","assets/IconTransmission.58f58627.css","assets/ButtonPrimary.63c60212.js"])},{path:"/cars/:id",name:"car",component:()=>St(()=>import("./CarView.19d330b3.js"),["assets/CarView.19d330b3.js","assets/CarView.ab3c5b07.css","assets/ButtonPrimary.63c60212.js","assets/ButtonSecondary.99a73a6e.js","assets/IconTransmission.b4d4d057.js","assets/IconTransmission.58f58627.css"])},{path:"/rent/:id",name:"rent",component:()=>St(()=>import("./RentView.bb6e34cb.js"),["assets/RentView.bb6e34cb.js","assets/RentView.793662ab.css","assets/ButtonPrimary.63c60212.js","assets/ButtonSecondary.99a73a6e.js"])},{path:"/login",name:"login",component:()=>St(()=>import("./LoginView.c147f692.js"),["assets/LoginView.c147f692.js","assets/ButtonPrimary.63c60212.js"])},{path:"/register",name:"register",component:()=>St(()=>import("./RegisterView.99068edb.js"),["assets/RegisterView.99068edb.js","assets/ButtonPrimary.63c60212.js"])},{path:"/account",name:"account",component:()=>St(()=>import("./AccountView.9a351b0a.js"),["assets/AccountView.9a351b0a.js","assets/AccountView.c075baca.css"])},{path:"/dashboard",name:"dashboard",component:()=>St(()=>import("./DashboardView.9341695b.js"),["assets/DashboardView.9341695b.js","assets/ButtonPrimary.63c60212.js"]),children:[{path:"cars",name:"dashboard cars",component:()=>St(()=>import("./DashboardCarsView.5410bd31.js"),["assets/DashboardCarsView.5410bd31.js","assets/DashboardCarsView.05cc318c.css"])},{path:"rents",name:"dashboard rents",component:()=>St(()=>import("./DashboardRentsView.2c67a59a.js"),["assets/DashboardRentsView.2c67a59a.js","assets/DashboardRentsView.a902aebc.css"])},{path:"users",name:"dashboard users",component:()=>St(()=>import("./DashboardUsersView.df0b242a.js"),["assets/DashboardUsersView.df0b242a.js","assets/DashboardUsersView.4d39e1bd.css"])},{path:"mock",name:"dashboard mock",component:()=>St(()=>import("./DashboardMockView.add6a6c1.js"),["assets/DashboardMockView.add6a6c1.js","assets/ButtonPrimary.63c60212.js"])}]}]});const wy=J0(O4);wy.use(tR);wy.mount("#app");export{pR as A,gR as B,_y as C,iR as D,lR as E,st as F,hR as G,yy as H,bk as I,cR as J,fR as K,uR as L,wC as M,_C as N,n4 as O,h4 as P,DS as Q,cr as R,T4 as S,y4 as T,ny as U,dR as V,oR as W,Se as _,Lk as a,z as b,oe as c,N as d,An as e,mC as f,CC as g,aR as h,sR as i,Md as j,Ut as k,my as l,He as m,ao as n,q as o,Gn as p,xm as q,he as r,TC as s,jn as t,$n as u,rR as v,ke as w,Sd as x,sC as y,Ad as z};

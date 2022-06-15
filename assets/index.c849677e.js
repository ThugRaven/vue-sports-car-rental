var Ky=Object.defineProperty,Wy=Object.defineProperties;var Gy=Object.getOwnPropertyDescriptors;var Wu=Object.getOwnPropertySymbols;var Yy=Object.prototype.hasOwnProperty,Xy=Object.prototype.propertyIsEnumerable;var Gu=(t,e,n)=>e in t?Ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ma=(t,e)=>{for(var n in e||(e={}))Yy.call(e,n)&&Gu(t,n,e[n]);if(Wu)for(var n of Wu(e))Xy.call(e,n)&&Gu(t,n,e[n]);return t},Yu=(t,e)=>Wy(t,Gy(e));const Qy=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Qy();function al(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Jy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zy=al(Jy);function md(t){return!!t||t===""}function cl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?n0(s):cl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(je(t))return t;if(Ue(t))return t}}const e0=/;(?![^(]*\))/g,t0=/:(.+)/;function n0(t){const e={};return t.split(e0).forEach(n=>{if(n){const s=n.split(t0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rs(t){let e="";if(je(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=rs(t[n]);s&&(e+=s+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function s0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$s(t[s],e[s]);return n}function $s(t,e){if(t===e)return!0;let n=Xu(t),s=Xu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$r(t),s=$r(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?s0(t,e):!1;if(n=Ue(t),s=Ue(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!$s(t[o],e[o]))return!1}}return String(t)===String(e)}function r0(t,e){return t.findIndex(n=>$s(n,e))}const Jn=t=>je(t)?t:t==null?"":Y(t)||Ue(t)&&(t.toString===vd||!te(t.toString))?JSON.stringify(t,yd,2):String(t),yd=(t,e)=>e&&e.__v_isRef?yd(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:jo(e)?{[`Set(${e.size})`]:[...e.values()]}:Ue(e)&&!Y(e)&&!wd(e)?String(e):e,Te={},xs=[],Lt=()=>{},i0=()=>!1,o0=/^on[^a-z]/,Bo=t=>o0.test(t),ll=t=>t.startsWith("onUpdate:"),et=Object.assign,ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},a0=Object.prototype.hasOwnProperty,ue=(t,e)=>a0.call(t,e),Y=Array.isArray,Ns=t=>hi(t)==="[object Map]",jo=t=>hi(t)==="[object Set]",Xu=t=>hi(t)==="[object Date]",te=t=>typeof t=="function",je=t=>typeof t=="string",$r=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",_d=t=>Ue(t)&&te(t.then)&&te(t.catch),vd=Object.prototype.toString,hi=t=>vd.call(t),c0=t=>hi(t).slice(8,-1),wd=t=>hi(t)==="[object Object]",hl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qi=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},l0=/-(\w)/g,Wt=Ho(t=>t.replace(l0,(e,n)=>n?n.toUpperCase():"")),u0=/\B([A-Z])/g,Zs=Ho(t=>t.replace(u0,"-$1").toLowerCase()),qo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=Ho(t=>t?`on${qo(t)}`:""),Fr=(t,e)=>!Object.is(t,e),Ji=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qu;const h0=()=>Qu||(Qu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Bt;class f0{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Bt&&(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function d0(t,e=Bt){e&&e.active&&e.effects.push(t)}const fl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ed=t=>(t.w&Rn)>0,Id=t=>(t.n&Rn)>0,p0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rn},g0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ed(r)&&!Id(r)?r.delete(t):e[n++]=r,r.w&=~Rn,r.n&=~Rn}e.length=n}},uc=new WeakMap;let wr=0,Rn=1;const hc=30;let Pt;const Zn=Symbol(""),fc=Symbol("");class dl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,d0(this,s)}run(){if(!this.active)return this.fn();let e=Pt,n=bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,bn=!0,Rn=1<<++wr,wr<=hc?p0(this):Ju(this),this.fn()}finally{wr<=hc&&g0(this),Rn=1<<--wr,Pt=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bn=!0;const bd=[];function er(){bd.push(bn),bn=!1}function tr(){const t=bd.pop();bn=t===void 0?!0:t}function St(t,e,n){if(bn&&Pt){let s=uc.get(t);s||uc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=fl()),Td(r)}}function Td(t,e){let n=!1;wr<=hc?Id(t)||(t.n|=Rn,n=!Ed(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function sn(t,e,n,s,r,i){const o=uc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?hl(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Ns(t)&&a.push(o.get(fc)));break;case"delete":Y(t)||(a.push(o.get(Zn)),Ns(t)&&a.push(o.get(fc)));break;case"set":Ns(t)&&a.push(o.get(Zn));break}if(a.length===1)a[0]&&dc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);dc(fl(c))}}function dc(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&Zu(s);for(const s of n)s.computed||Zu(s)}function Zu(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const m0=al("__proto__,__v_isRef,__isVue"),Cd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($r)),y0=pl(),_0=pl(!1,!0),v0=pl(!0),eh=w0();function w0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=me(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(me)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er();const s=me(this)[e].apply(this,n);return tr(),s}}),t}function pl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?L0:xd:e?Rd:kd).get(s))return s;const o=Y(s);if(!t&&o&&ue(eh,r))return Reflect.get(eh,r,i);const a=Reflect.get(s,r,i);return($r(r)?Cd.has(r):m0(r))||(t||St(s,"get",r),e)?a:Xe(a)?o&&hl(r)?a:a.value:Ue(a)?t?Nd(a):nr(a):a}}const E0=Sd(),I0=Sd(!0);function Sd(t=!1){return function(n,s,r,i){let o=n[s];if(Br(o)&&Xe(o)&&!Xe(r))return!1;if(!t&&!Br(r)&&(pc(r)||(r=me(r),o=me(o)),!Y(n)&&Xe(o)&&!Xe(r)))return o.value=r,!0;const a=Y(n)&&hl(s)?Number(s)<n.length:ue(n,s),c=Reflect.set(n,s,r,i);return n===me(i)&&(a?Fr(r,o)&&sn(n,"set",s,r):sn(n,"add",s,r)),c}}function b0(t,e){const n=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&sn(t,"delete",e,void 0),s}function T0(t,e){const n=Reflect.has(t,e);return(!$r(e)||!Cd.has(e))&&St(t,"has",e),n}function C0(t){return St(t,"iterate",Y(t)?"length":Zn),Reflect.ownKeys(t)}const Ad={get:y0,set:E0,deleteProperty:b0,has:T0,ownKeys:C0},S0={get:v0,set(t,e){return!0},deleteProperty(t,e){return!0}},A0=et({},Ad,{get:_0,set:I0}),gl=t=>t,zo=t=>Reflect.getPrototypeOf(t);function Li(t,e,n=!1,s=!1){t=t.__v_raw;const r=me(t),i=me(e);n||(e!==i&&St(r,"get",e),St(r,"get",i));const{has:o}=zo(r),a=s?gl:n?_l:jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Ui(t,e=!1){const n=this.__v_raw,s=me(n),r=me(t);return e||(t!==r&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function $i(t,e=!1){return t=t.__v_raw,!e&&St(me(t),"iterate",Zn),Reflect.get(t,"size",t)}function th(t){t=me(t);const e=me(this);return zo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function nh(t,e){e=me(e);const n=me(this),{has:s,get:r}=zo(n);let i=s.call(n,t);i||(t=me(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Fr(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function sh(t){const e=me(this),{has:n,get:s}=zo(e);let r=n.call(e,t);r||(t=me(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&sn(e,"delete",t,void 0),i}function rh(){const t=me(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function Fi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=me(o),c=e?gl:t?_l:jr;return!t&&St(a,"iterate",Zn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Vi(t,e,n){return function(...s){const r=this.__v_raw,i=me(r),o=Ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?gl:e?_l:jr;return!e&&St(i,"iterate",c?fc:Zn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function k0(){const t={get(i){return Li(this,i)},get size(){return $i(this)},has:Ui,add:th,set:nh,delete:sh,clear:rh,forEach:Fi(!1,!1)},e={get(i){return Li(this,i,!1,!0)},get size(){return $i(this)},has:Ui,add:th,set:nh,delete:sh,clear:rh,forEach:Fi(!1,!0)},n={get(i){return Li(this,i,!0)},get size(){return $i(this,!0)},has(i){return Ui.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Fi(!0,!1)},s={get(i){return Li(this,i,!0,!0)},get size(){return $i(this,!0)},has(i){return Ui.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vi(i,!1,!1),n[i]=Vi(i,!0,!1),e[i]=Vi(i,!1,!0),s[i]=Vi(i,!0,!0)}),[t,n,e,s]}const[R0,x0,N0,D0]=k0();function ml(t,e){const n=e?t?D0:N0:t?x0:R0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ue(n,r)&&r in s?n:s,r,i)}const O0={get:ml(!1,!1)},P0={get:ml(!1,!0)},M0={get:ml(!0,!1)},kd=new WeakMap,Rd=new WeakMap,xd=new WeakMap,L0=new WeakMap;function U0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $0(t){return t.__v_skip||!Object.isExtensible(t)?0:U0(c0(t))}function nr(t){return Br(t)?t:yl(t,!1,Ad,O0,kd)}function F0(t){return yl(t,!1,A0,P0,Rd)}function Nd(t){return yl(t,!0,S0,M0,xd)}function yl(t,e,n,s,r){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=$0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ds(t){return Br(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function pc(t){return!!(t&&t.__v_isShallow)}function Dd(t){return Ds(t)||Br(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Od(t){return ho(t,"__v_skip",!0),t}const jr=t=>Ue(t)?nr(t):t,_l=t=>Ue(t)?Nd(t):t;function Pd(t){bn&&Pt&&(t=me(t),Td(t.dep||(t.dep=fl())))}function Md(t,e){t=me(t),t.dep&&dc(t.dep)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function V0(t){return Ld(t,!1)}function B0(t){return Ld(t,!0)}function Ld(t,e){return Xe(t)?t:new j0(t,e)}class j0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:jr(e)}get value(){return Pd(this),this._value}set value(e){e=this.__v_isShallow?e:me(e),Fr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:jr(e),Md(this))}}function Sr(t){return Xe(t)?t.value:t}const H0={get:(t,e,n)=>Sr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ud(t){return Ds(t)?t:new Proxy(t,H0)}class q0{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new dl(e,()=>{this._dirty||(this._dirty=!0,Md(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=me(this);return Pd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function z0(t,e,n=!1){let s,r;const i=te(t);return i?(s=t,r=Lt):(s=t.get,r=t.set),new q0(s,r,i||!r,n)}function Tn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ko(i,e,n)}return r}function xt(t,e,n,s){if(te(t)){const i=Tn(t,e,n,s);return i&&_d(i)&&i.catch(o=>{Ko(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(xt(t[i],e,n,s));return r}function Ko(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tn(c,null,10,[t,o,a]);return}}K0(t,n,r,s)}function K0(t,e,n,s=!0){console.error(t)}let fo=!1,gc=!1;const It=[];let Qt=0;const Ar=[];let Er=null,Ts=0;const kr=[];let gn=null,Cs=0;const $d=Promise.resolve();let vl=null,mc=null;function Fd(t){const e=vl||$d;return t?e.then(this?t.bind(this):t):e}function W0(t){let e=Qt+1,n=It.length;for(;e<n;){const s=e+n>>>1;Hr(It[s])<t?e=s+1:n=s}return e}function Vd(t){(!It.length||!It.includes(t,fo&&t.allowRecurse?Qt+1:Qt))&&t!==mc&&(t.id==null?It.push(t):It.splice(W0(t.id),0,t),Bd())}function Bd(){!fo&&!gc&&(gc=!0,vl=$d.then(qd))}function G0(t){const e=It.indexOf(t);e>Qt&&It.splice(e,1)}function jd(t,e,n,s){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Bd()}function Y0(t){jd(t,Er,Ar,Ts)}function X0(t){jd(t,gn,kr,Cs)}function Wo(t,e=null){if(Ar.length){for(mc=e,Er=[...new Set(Ar)],Ar.length=0,Ts=0;Ts<Er.length;Ts++)Er[Ts]();Er=null,Ts=0,mc=null,Wo(t,e)}}function Hd(t){if(Wo(),kr.length){const e=[...new Set(kr)];if(kr.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,s)=>Hr(n)-Hr(s)),Cs=0;Cs<gn.length;Cs++)gn[Cs]();gn=null,Cs=0}}const Hr=t=>t.id==null?1/0:t.id;function qd(t){gc=!1,fo=!0,Wo(t),It.sort((n,s)=>Hr(n)-Hr(s));const e=Lt;try{for(Qt=0;Qt<It.length;Qt++){const n=It[Qt];n&&n.active!==!1&&Tn(n,null,14)}}finally{Qt=0,It.length=0,Hd(),fo=!1,vl=null,(It.length||Ar.length||kr.length)&&qd(t)}}function Q0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Te;f&&(r=n.map(p=>p.trim())),h&&(r=n.map(Vr))}let a,c=s[a=La(e)]||s[a=La(Wt(e))];!c&&i&&(c=s[a=La(Zs(e))]),c&&xt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,r)}}function zd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!te(t)){const c=l=>{const u=zd(l,e,!0);u&&(a=!0,et(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):et(o,i),s.set(t,o),o)}function Go(t,e){return!t||!Bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,Zs(e))||ue(t,e))}let ot=null,Yo=null;function po(t){const e=ot;return ot=t,Yo=t&&t.type.__scopeId||null,e}function Kd(t){Yo=t}function Wd(){Yo=null}function pe(t,e=ot,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&mh(-1);const i=po(e),o=t(...r);return po(i),s._d&&mh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ua(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:w}=t;let v,C;const P=po(t);try{if(n.shapeFlag&4){const F=r||s;v=jt(u.call(F,F,h,i,p,f,m)),C=c}else{const F=e;v=jt(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),C=e.props?c:J0(c)}}catch(F){Nr.length=0,Ko(F,t,1),v=z(Nt)}let B=v;if(C&&w!==!1){const F=Object.keys(C),{shapeFlag:ne}=B;F.length&&ne&7&&(o&&F.some(ll)&&(C=Z0(C,o)),B=xn(B,C))}return n.dirs&&(B=xn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),v=B,po(P),v}const J0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bo(n))&&((e||(e={}))[n]=t[n]);return e},Z0=(t,e)=>{const n={};for(const s in t)(!ll(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function e1(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ih(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Go(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,l):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Go(n,i))return!0}return!1}function t1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const n1=t=>t.__isSuspense;function s1(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):X0(t)}function Zi(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function Cn(t,e,n=!1){const s=qe||ot;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}const oh={};function eo(t,e,n){return Gd(t,e,n)}function Gd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Te){const a=qe;let c,l=!1,u=!1;if(Xe(t)?(c=()=>t.value,l=pc(t)):Ds(t)?(c=()=>t,s=!0):Y(t)?(u=!0,l=t.some(C=>Ds(C)||pc(C)),c=()=>t.map(C=>{if(Xe(C))return C.value;if(Ds(C))return Yn(C);if(te(C))return Tn(C,a,2)})):te(t)?e?c=()=>Tn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),xt(t,a,3,[f])}:c=Lt,e&&s){const C=c;c=()=>Yn(C())}let h,f=C=>{h=v.onStop=()=>{Tn(C,a,4)}};if(Kr)return f=Lt,e?n&&xt(e,a,3,[c(),u?[]:void 0,f]):c(),Lt;let p=u?[]:oh;const m=()=>{if(!!v.active)if(e){const C=v.run();(s||l||(u?C.some((P,B)=>Fr(P,p[B])):Fr(C,p)))&&(h&&h(),xt(e,a,3,[C,p===oh?void 0:p,f]),p=C)}else v.run()};m.allowRecurse=!!e;let w;r==="sync"?w=m:r==="post"?w=()=>yt(m,a&&a.suspense):w=()=>Y0(m);const v=new dl(c,w);return e?n?m():p=v.run():r==="post"?yt(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&ul(a.scope.effects,v)}}function r1(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?Yd(s,t):()=>s[t]:t.bind(s,s);let i;te(e)?i=e:(i=e.handler,n=e);const o=qe;Fs(this);const a=Gd(r,i.bind(s),n);return o?Fs(o):es(),a}function Yd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Yn(t,e){if(!Ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))Yn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Yn(t[n],e);else if(jo(t)||Ns(t))t.forEach(n=>{Yn(n,e)});else if(wd(t))for(const n in t)Yn(t[n],e);return t}function i1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tp(()=>{t.isMounted=!0}),np(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],o1={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(t,{slots:e}){const n=K1(),s=i1();let r;return()=>{const i=e.default&&Jd(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Nt){o=w;break}}const a=me(t),{mode:c}=a;if(s.isLeaving)return $a(o);const l=ah(o);if(!l)return $a(o);const u=yc(l,a,s,n);_c(l,u);const h=n.subTree,f=h&&ah(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const w=m();r===void 0?r=w:w!==r&&(r=w,p=!0)}if(f&&f.type!==Nt&&(!Kn(l,f)||p)){const w=yc(f,a,s,n);if(_c(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update()},$a(o);c==="in-out"&&l.type!==Nt&&(w.delayLeave=(v,C,P)=>{const B=Qd(s,f);B[String(f.key)]=f,v._leaveCb=()=>{C(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},Xd=o1;function Qd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:w,onAppear:v,onAfterAppear:C,onAppearCancelled:P}=e,B=String(t.key),F=Qd(n,t),ne=(G,re)=>{G&&xt(G,s,9,re)},ce=(G,re)=>{const de=re[1];ne(G,re),Y(G)?G.every(Re=>Re.length<=1)&&de():G.length<=1&&de()},fe={mode:i,persisted:o,beforeEnter(G){let re=a;if(!n.isMounted)if(r)re=w||a;else return;G._leaveCb&&G._leaveCb(!0);const de=F[B];de&&Kn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),ne(re,[G])},enter(G){let re=c,de=l,Re=u;if(!n.isMounted)if(r)re=v||c,de=C||l,Re=P||u;else return;let L=!1;const xe=G._enterCb=st=>{L||(L=!0,st?ne(Re,[G]):ne(de,[G]),fe.delayedLeave&&fe.delayedLeave(),G._enterCb=void 0)};re?ce(re,[G,xe]):xe()},leave(G,re){const de=String(t.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return re();ne(h,[G]);let Re=!1;const L=G._leaveCb=xe=>{Re||(Re=!0,re(),xe?ne(m,[G]):ne(p,[G]),G._leaveCb=void 0,F[de]===t&&delete F[de])};F[de]=t,f?ce(f,[G,L]):L()},clone(G){return yc(G,e,n,s)}};return fe}function $a(t){if(Xo(t))return t=xn(t),t.children=null,t}function ah(t){return Xo(t)?t.children?t.children[0]:void 0:t}function _c(t,e){t.shapeFlag&6&&t.component?_c(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jd(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===rt?(o.patchFlag&128&&r++,s=s.concat(Jd(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?xn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Zd(t){return te(t)?{setup:t,name:t.name}:t}const Rr=t=>!!t.type.__asyncLoader,Xo=t=>t.type.__isKeepAlive;function a1(t,e){ep(t,"a",e)}function c1(t,e){ep(t,"da",e)}function ep(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Qo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Xo(r.parent.vnode)&&l1(s,e,n,r),r=r.parent}}function l1(t,e,n,s){const r=Qo(e,t,s,!0);sp(()=>{ul(s[e],r)},n)}function Qo(t,e,n=qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;er(),Fs(n);const a=xt(e,n,t,o);return es(),tr(),a});return s?r.unshift(i):r.push(i),i}}const cn=t=>(e,n=qe)=>(!Kr||t==="sp")&&Qo(t,e,n),u1=cn("bm"),tp=cn("m"),h1=cn("bu"),f1=cn("u"),np=cn("bum"),sp=cn("um"),d1=cn("sp"),p1=cn("rtg"),g1=cn("rtc");function m1(t,e=qe){Qo("ec",t,e)}function qR(t,e){const n=ot;if(n===null)return t;const s=Zo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];te(o)&&(o={mounted:o,updated:o}),o.deep&&Yn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Vn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(er(),xt(c,n,8,[t.el,a,t,e]),tr())}}const rp="components";function _e(t,e){return _1(rp,t,!0,e)||t}const y1=Symbol();function _1(t,e,n=!0,s=!1){const r=ot||qe;if(r){const i=r.type;if(t===rp){const a=Q1(i);if(a&&(a===e||a===Wt(e)||a===qo(Wt(e))))return i}const o=ch(r[t]||i[t],e)||ch(r.appContext[t],e);return!o&&s?i:o}}function ch(t,e){return t&&(t[e]||t[Wt(e)]||t[qo(Wt(e))])}function ip(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ue(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function qr(t,e,n={},s,r){if(ot.isCE||ot.parent&&Rr(ot.parent)&&ot.parent.isCE)return z("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),$();const o=i&&op(i(n)),a=Pe(rt,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function op(t){return t.some(e=>yo(e)?!(e.type===Nt||e.type===rt&&!op(e.children)):!0)?t:null}const vc=t=>t?_p(t)?Zo(t)||t.proxy:vc(t.parent):null,go=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>cp(t),$forceUpdate:t=>t.f||(t.f=()=>Vd(t.update)),$nextTick:t=>t.n||(t.n=Fd.bind(t.proxy)),$watch:t=>r1.bind(t)}),v1={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==Te&&ue(s,e))return o[e]=1,s[e];if(r!==Te&&ue(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Te&&ue(n,e))return o[e]=4,n[e];wc&&(o[e]=0)}}const u=go[e];let h,f;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==Te&&ue(r,e)?(r[e]=n,!0):s!==Te&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ue(t,o)||e!==Te&&ue(e,o)||(a=i[0])&&ue(a,o)||ue(s,o)||ue(go,o)||ue(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let wc=!0;function w1(t){const e=cp(t),n=t.proxy,s=t.ctx;wc=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:w,deactivated:v,beforeDestroy:C,beforeUnmount:P,destroyed:B,unmounted:F,render:ne,renderTracked:ce,renderTriggered:fe,errorCaptured:G,serverPrefetch:re,expose:de,inheritAttrs:Re,components:L,directives:xe,filters:st}=e;if(l&&E1(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ce in o){const ve=o[Ce];te(ve)&&(s[Ce]=ve.bind(n))}if(r){const Ce=r.call(n,n);Ue(Ce)&&(t.data=nr(Ce))}if(wc=!0,i)for(const Ce in i){const ve=i[Ce],wt=te(ve)?ve.bind(n,n):te(ve.get)?ve.get.bind(n,n):Lt,ws=!te(ve)&&te(ve.set)?ve.set.bind(n):Lt,Xt=Ht({get:wt,set:ws});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:$t=>Xt.value=$t})}if(a)for(const Ce in a)ap(a[Ce],s,n,Ce);if(c){const Ce=te(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(ve=>{Zi(ve,Ce[ve])})}u&&lh(u,t,"c");function Le(Ce,ve){Y(ve)?ve.forEach(wt=>Ce(wt.bind(n))):ve&&Ce(ve.bind(n))}if(Le(u1,h),Le(tp,f),Le(h1,p),Le(f1,m),Le(a1,w),Le(c1,v),Le(m1,G),Le(g1,ce),Le(p1,fe),Le(np,P),Le(sp,F),Le(d1,re),Y(de))if(de.length){const Ce=t.exposed||(t.exposed={});de.forEach(ve=>{Object.defineProperty(Ce,ve,{get:()=>n[ve],set:wt=>n[ve]=wt})})}else t.exposed||(t.exposed={});ne&&t.render===Lt&&(t.render=ne),Re!=null&&(t.inheritAttrs=Re),L&&(t.components=L),xe&&(t.directives=xe)}function E1(t,e,n=Lt,s=!1){Y(t)&&(t=Ec(t));for(const r in t){const i=t[r];let o;Ue(i)?"default"in i?o=Cn(i.from||r,i.default,!0):o=Cn(i.from||r):o=Cn(i),Xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function lh(t,e,n){xt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,s){const r=s.includes(".")?Yd(n,s):()=>n[s];if(je(t)){const i=e[t];te(i)&&eo(r,i)}else if(te(t))eo(r,t.bind(n));else if(Ue(t))if(Y(t))t.forEach(i=>ap(i,e,n,s));else{const i=te(t.handler)?t.handler.bind(n):e[t.handler];te(i)&&eo(r,i,t)}}function cp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>mo(c,l,o,!0)),mo(c,e,o)),i.set(e,c),c}function mo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&mo(t,i,n,!0),r&&r.forEach(o=>mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=I1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const I1={data:uh,props:qn,emits:qn,methods:qn,computed:qn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:qn,directives:qn,watch:T1,provide:uh,inject:b1};function uh(t,e){return e?t?function(){return et(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function b1(t,e){return qn(Ec(t),Ec(e))}function Ec(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function qn(t,e){return t?et(et(Object.create(null),t),e):e}function T1(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function C1(t,e,n,s=!1){const r={},i={};ho(i,Jo,1),t.propsDefaults=Object.create(null),lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:F0(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function S1(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=me(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Go(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const m=Wt(f);r[m]=Ic(c,a,m,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{lp(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=Zs(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ic(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&sn(t,"set","$attrs")}function lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qi(c))continue;const l=e[c];let u;r&&ue(r,u=Wt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Go(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=me(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ic(r,c,h,l[h],t,!ue(l,h))}}return o}function Ic(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&te(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Fs(r),s=l[n]=c.call(null,e),es())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Zs(n))&&(s=!0))}return s}function up(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!te(t)){const u=h=>{c=!0;const[f,p]=up(h,e,!0);et(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,xs),xs;if(Y(i))for(let u=0;u<i.length;u++){const h=Wt(i[u]);hh(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=Wt(u);if(hh(h)){const f=i[u],p=o[h]=Y(f)||te(f)?{type:f}:f;if(p){const m=ph(Boolean,p.type),w=ph(String,p.type);p[0]=m>-1,p[1]=w<0||m<w,(m>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function hh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function dh(t,e){return fh(t)===fh(e)}function ph(t,e){return Y(e)?e.findIndex(n=>dh(n,t)):te(e)&&dh(e,t)?0:-1}const hp=t=>t[0]==="_"||t==="$stable",wl=t=>Y(t)?t.map(jt):[jt(t)],A1=(t,e,n)=>{if(e._n)return e;const s=pe((...r)=>wl(e(...r)),n);return s._c=!1,s},fp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hp(r))continue;const i=t[r];if(te(i))e[r]=A1(r,i,s);else if(i!=null){const o=wl(i);e[r]=()=>o}}},dp=(t,e)=>{const n=wl(e);t.slots.default=()=>n},k1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),ho(e,"_",n)):fp(e,t.slots={})}else t.slots={},e&&dp(t,e);ho(t.slots,Jo,1)},R1=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Te;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(r,e),!n&&a===1&&delete r._):(i=!e.$stable,fp(e,r)),o=e}else e&&(dp(t,e),o={default:1});if(i)for(const a in r)!hp(a)&&!(a in o)&&delete r[a]};function pp(){return{app:null,config:{isNativeTag:i0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x1=0;function N1(t,e){return function(s,r=null){te(s)||(s=Object.assign({},s)),r!=null&&!Ue(r)&&(r=null);const i=pp(),o=new Set;let a=!1;const c=i.app={_uid:x1++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Z1,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&te(l.install)?(o.add(l),l.install(c,...u)):te(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=z(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Zo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function bc(t,e,n,s,r=!1){if(Y(t)){t.forEach((f,p)=>bc(f,e&&(Y(e)?e[p]:e),n,s,r));return}if(Rr(s)&&!r)return;const i=s.shapeFlag&4?Zo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),te(c))Tn(c,a,12,[o,u]);else{const f=je(c),p=Xe(c);if(f||p){const m=()=>{if(t.f){const w=f?u[c]:c.value;r?Y(w)&&ul(w,i):Y(w)?w.includes(i)||w.push(i):f?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):Xe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,yt(m,n)):m()}}}const yt=s1;function D1(t){return O1(t)}function O1(t,e){const n=h0();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Lt,cloneNode:m,insertStaticContent:w}=t,v=(d,g,y,b=null,I=null,k=null,O=!1,S=null,x=!!g.dynamicChildren)=>{if(d===g)return;d&&!Kn(d,g)&&(b=q(d),kt(d,I,k,!0),d=null),g.patchFlag===-2&&(x=!1,g.dynamicChildren=null);const{type:T,ref:K,shapeFlag:U}=g;switch(T){case Il:C(d,g,y,b);break;case Nt:P(d,g,y,b);break;case to:d==null&&B(g,y,b,O);break;case rt:xe(d,g,y,b,I,k,O,S,x);break;default:U&1?ce(d,g,y,b,I,k,O,S,x):U&6?st(d,g,y,b,I,k,O,S,x):(U&64||U&128)&&T.process(d,g,y,b,I,k,O,S,x,Se)}K!=null&&I&&bc(K,d&&d.ref,k,g||d,!g)},C=(d,g,y,b)=>{if(d==null)s(g.el=a(g.children),y,b);else{const I=g.el=d.el;g.children!==d.children&&l(I,g.children)}},P=(d,g,y,b)=>{d==null?s(g.el=c(g.children||""),y,b):g.el=d.el},B=(d,g,y,b)=>{[d.el,d.anchor]=w(d.children,g,y,b,d.el,d.anchor)},F=({el:d,anchor:g},y,b)=>{let I;for(;d&&d!==g;)I=f(d),s(d,y,b),d=I;s(g,y,b)},ne=({el:d,anchor:g})=>{let y;for(;d&&d!==g;)y=f(d),r(d),d=y;r(g)},ce=(d,g,y,b,I,k,O,S,x)=>{O=O||g.type==="svg",d==null?fe(g,y,b,I,k,O,S,x):de(d,g,I,k,O,S,x)},fe=(d,g,y,b,I,k,O,S)=>{let x,T;const{type:K,props:U,shapeFlag:W,transition:J,patchFlag:he,dirs:Ee}=d;if(d.el&&m!==void 0&&he===-1)x=d.el=m(d.el);else{if(x=d.el=o(d.type,k,U&&U.is,U),W&8?u(x,d.children):W&16&&re(d.children,x,null,b,I,k&&K!=="foreignObject",O,S),Ee&&Vn(d,null,b,"created"),U){for(const Ne in U)Ne!=="value"&&!Qi(Ne)&&i(x,Ne,null,U[Ne],k,d.children,b,I,N);"value"in U&&i(x,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Vt(T,b,d)}G(x,d,d.scopeId,O,b)}Ee&&Vn(d,null,b,"beforeMount");const Ie=(!I||I&&!I.pendingBranch)&&J&&!J.persisted;Ie&&J.beforeEnter(x),s(x,g,y),((T=U&&U.onVnodeMounted)||Ie||Ee)&&yt(()=>{T&&Vt(T,b,d),Ie&&J.enter(x),Ee&&Vn(d,null,b,"mounted")},I)},G=(d,g,y,b,I)=>{if(y&&p(d,y),b)for(let k=0;k<b.length;k++)p(d,b[k]);if(I){let k=I.subTree;if(g===k){const O=I.vnode;G(d,O,O.scopeId,O.slotScopeIds,I.parent)}}},re=(d,g,y,b,I,k,O,S,x=0)=>{for(let T=x;T<d.length;T++){const K=d[T]=S?mn(d[T]):jt(d[T]);v(null,K,g,y,b,I,k,O,S)}},de=(d,g,y,b,I,k,O)=>{const S=g.el=d.el;let{patchFlag:x,dynamicChildren:T,dirs:K}=g;x|=d.patchFlag&16;const U=d.props||Te,W=g.props||Te;let J;y&&Bn(y,!1),(J=W.onVnodeBeforeUpdate)&&Vt(J,y,g,d),K&&Vn(g,d,y,"beforeUpdate"),y&&Bn(y,!0);const he=I&&g.type!=="foreignObject";if(T?Re(d.dynamicChildren,T,S,y,b,he,k):O||wt(d,g,S,null,y,b,he,k,!1),x>0){if(x&16)L(S,g,U,W,y,b,I);else if(x&2&&U.class!==W.class&&i(S,"class",null,W.class,I),x&4&&i(S,"style",U.style,W.style,I),x&8){const Ee=g.dynamicProps;for(let Ie=0;Ie<Ee.length;Ie++){const Ne=Ee[Ie],Dt=U[Ne],Es=W[Ne];(Es!==Dt||Ne==="value")&&i(S,Ne,Dt,Es,I,d.children,y,b,N)}}x&1&&d.children!==g.children&&u(S,g.children)}else!O&&T==null&&L(S,g,U,W,y,b,I);((J=W.onVnodeUpdated)||K)&&yt(()=>{J&&Vt(J,y,g,d),K&&Vn(g,d,y,"updated")},b)},Re=(d,g,y,b,I,k,O)=>{for(let S=0;S<g.length;S++){const x=d[S],T=g[S],K=x.el&&(x.type===rt||!Kn(x,T)||x.shapeFlag&70)?h(x.el):y;v(x,T,K,null,b,I,k,O,!0)}},L=(d,g,y,b,I,k,O)=>{if(y!==b){for(const S in b){if(Qi(S))continue;const x=b[S],T=y[S];x!==T&&S!=="value"&&i(d,S,T,x,O,g.children,I,k,N)}if(y!==Te)for(const S in y)!Qi(S)&&!(S in b)&&i(d,S,y[S],null,O,g.children,I,k,N);"value"in b&&i(d,"value",y.value,b.value)}},xe=(d,g,y,b,I,k,O,S,x)=>{const T=g.el=d?d.el:a(""),K=g.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:J}=g;J&&(S=S?S.concat(J):J),d==null?(s(T,y,b),s(K,y,b),re(g.children,y,K,I,k,O,S,x)):U>0&&U&64&&W&&d.dynamicChildren?(Re(d.dynamicChildren,W,y,I,k,O,S),(g.key!=null||I&&g===I.subTree)&&El(d,g,!0)):wt(d,g,y,K,I,k,O,S,x)},st=(d,g,y,b,I,k,O,S,x)=>{g.slotScopeIds=S,d==null?g.shapeFlag&512?I.ctx.activate(g,y,b,O,x):Yt(g,y,b,I,k,O,x):Le(d,g,x)},Yt=(d,g,y,b,I,k,O)=>{const S=d.component=z1(d,b,I);if(Xo(d)&&(S.ctx.renderer=Se),W1(S),S.asyncDep){if(I&&I.registerDep(S,Ce),!d.el){const x=S.subTree=z(Nt);P(null,x,g,y)}return}Ce(S,d,g,y,I,k,O)},Le=(d,g,y)=>{const b=g.component=d.component;if(e1(d,g,y))if(b.asyncDep&&!b.asyncResolved){ve(b,g,y);return}else b.next=g,G0(b.update),b.update();else g.el=d.el,b.vnode=g},Ce=(d,g,y,b,I,k,O)=>{const S=()=>{if(d.isMounted){let{next:K,bu:U,u:W,parent:J,vnode:he}=d,Ee=K,Ie;Bn(d,!1),K?(K.el=he.el,ve(d,K,O)):K=he,U&&Ji(U),(Ie=K.props&&K.props.onVnodeBeforeUpdate)&&Vt(Ie,J,K,he),Bn(d,!0);const Ne=Ua(d),Dt=d.subTree;d.subTree=Ne,v(Dt,Ne,h(Dt.el),q(Dt),d,I,k),K.el=Ne.el,Ee===null&&t1(d,Ne.el),W&&yt(W,I),(Ie=K.props&&K.props.onVnodeUpdated)&&yt(()=>Vt(Ie,J,K,he),I)}else{let K;const{el:U,props:W}=g,{bm:J,m:he,parent:Ee}=d,Ie=Rr(g);if(Bn(d,!1),J&&Ji(J),!Ie&&(K=W&&W.onVnodeBeforeMount)&&Vt(K,Ee,g),Bn(d,!0),U&&se){const Ne=()=>{d.subTree=Ua(d),se(U,d.subTree,d,I,null)};Ie?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ne()):Ne()}else{const Ne=d.subTree=Ua(d);v(null,Ne,y,b,d,I,k),g.el=Ne.el}if(he&&yt(he,I),!Ie&&(K=W&&W.onVnodeMounted)){const Ne=g;yt(()=>Vt(K,Ee,Ne),I)}(g.shapeFlag&256||Ee&&Rr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&yt(d.a,I),d.isMounted=!0,g=y=b=null}},x=d.effect=new dl(S,()=>Vd(T),d.scope),T=d.update=()=>x.run();T.id=d.uid,Bn(d,!0),T()},ve=(d,g,y)=>{g.component=d;const b=d.vnode.props;d.vnode=g,d.next=null,S1(d,g.props,b,y),R1(d,g.children,y),er(),Wo(void 0,d.update),tr()},wt=(d,g,y,b,I,k,O,S,x=!1)=>{const T=d&&d.children,K=d?d.shapeFlag:0,U=g.children,{patchFlag:W,shapeFlag:J}=g;if(W>0){if(W&128){Xt(T,U,y,b,I,k,O,S,x);return}else if(W&256){ws(T,U,y,b,I,k,O,S,x);return}}J&8?(K&16&&N(T,I,k),U!==T&&u(y,U)):K&16?J&16?Xt(T,U,y,b,I,k,O,S,x):N(T,I,k,!0):(K&8&&u(y,""),J&16&&re(U,y,b,I,k,O,S,x))},ws=(d,g,y,b,I,k,O,S,x)=>{d=d||xs,g=g||xs;const T=d.length,K=g.length,U=Math.min(T,K);let W;for(W=0;W<U;W++){const J=g[W]=x?mn(g[W]):jt(g[W]);v(d[W],J,y,null,I,k,O,S,x)}T>K?N(d,I,k,!0,!1,U):re(g,y,b,I,k,O,S,x,U)},Xt=(d,g,y,b,I,k,O,S,x)=>{let T=0;const K=g.length;let U=d.length-1,W=K-1;for(;T<=U&&T<=W;){const J=d[T],he=g[T]=x?mn(g[T]):jt(g[T]);if(Kn(J,he))v(J,he,y,null,I,k,O,S,x);else break;T++}for(;T<=U&&T<=W;){const J=d[U],he=g[W]=x?mn(g[W]):jt(g[W]);if(Kn(J,he))v(J,he,y,null,I,k,O,S,x);else break;U--,W--}if(T>U){if(T<=W){const J=W+1,he=J<K?g[J].el:b;for(;T<=W;)v(null,g[T]=x?mn(g[T]):jt(g[T]),y,he,I,k,O,S,x),T++}}else if(T>W)for(;T<=U;)kt(d[T],I,k,!0),T++;else{const J=T,he=T,Ee=new Map;for(T=he;T<=W;T++){const Et=g[T]=x?mn(g[T]):jt(g[T]);Et.key!=null&&Ee.set(Et.key,T)}let Ie,Ne=0;const Dt=W-he+1;let Es=!1,qu=0;const gr=new Array(Dt);for(T=0;T<Dt;T++)gr[T]=0;for(T=J;T<=U;T++){const Et=d[T];if(Ne>=Dt){kt(Et,I,k,!0);continue}let Ft;if(Et.key!=null)Ft=Ee.get(Et.key);else for(Ie=he;Ie<=W;Ie++)if(gr[Ie-he]===0&&Kn(Et,g[Ie])){Ft=Ie;break}Ft===void 0?kt(Et,I,k,!0):(gr[Ft-he]=T+1,Ft>=qu?qu=Ft:Es=!0,v(Et,g[Ft],y,null,I,k,O,S,x),Ne++)}const zu=Es?P1(gr):xs;for(Ie=zu.length-1,T=Dt-1;T>=0;T--){const Et=he+T,Ft=g[Et],Ku=Et+1<K?g[Et+1].el:b;gr[T]===0?v(null,Ft,y,Ku,I,k,O,S,x):Es&&(Ie<0||T!==zu[Ie]?$t(Ft,y,Ku,2):Ie--)}}},$t=(d,g,y,b,I=null)=>{const{el:k,type:O,transition:S,children:x,shapeFlag:T}=d;if(T&6){$t(d.component.subTree,g,y,b);return}if(T&128){d.suspense.move(g,y,b);return}if(T&64){O.move(d,g,y,Se);return}if(O===rt){s(k,g,y);for(let U=0;U<x.length;U++)$t(x[U],g,y,b);s(d.anchor,g,y);return}if(O===to){F(d,g,y);return}if(b!==2&&T&1&&S)if(b===0)S.beforeEnter(k),s(k,g,y),yt(()=>S.enter(k),I);else{const{leave:U,delayLeave:W,afterLeave:J}=S,he=()=>s(k,g,y),Ee=()=>{U(k,()=>{he(),J&&J()})};W?W(k,he,Ee):Ee()}else s(k,g,y)},kt=(d,g,y,b=!1,I=!1)=>{const{type:k,props:O,ref:S,children:x,dynamicChildren:T,shapeFlag:K,patchFlag:U,dirs:W}=d;if(S!=null&&bc(S,null,y,d,!0),K&256){g.ctx.deactivate(d);return}const J=K&1&&W,he=!Rr(d);let Ee;if(he&&(Ee=O&&O.onVnodeBeforeUnmount)&&Vt(Ee,g,d),K&6)V(d.component,y,b);else{if(K&128){d.suspense.unmount(y,b);return}J&&Vn(d,null,g,"beforeUnmount"),K&64?d.type.remove(d,g,y,I,Se,b):T&&(k!==rt||U>0&&U&64)?N(T,g,y,!1,!0):(k===rt&&U&384||!I&&K&16)&&N(x,g,y),b&&Pa(d)}(he&&(Ee=O&&O.onVnodeUnmounted)||J)&&yt(()=>{Ee&&Vt(Ee,g,d),J&&Vn(d,null,g,"unmounted")},y)},Pa=d=>{const{type:g,el:y,anchor:b,transition:I}=d;if(g===rt){E(y,b);return}if(g===to){ne(d);return}const k=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:S}=I,x=()=>O(y,k);S?S(d.el,k,x):x()}else k()},E=(d,g)=>{let y;for(;d!==g;)y=f(d),r(d),d=y;r(g)},V=(d,g,y)=>{const{bum:b,scope:I,update:k,subTree:O,um:S}=d;b&&Ji(b),I.stop(),k&&(k.active=!1,kt(O,d,g,y)),S&&yt(S,g),yt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(d,g,y,b=!1,I=!1,k=0)=>{for(let O=k;O<d.length;O++)kt(d[O],g,y,b,I)},q=d=>d.shapeFlag&6?q(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),we=(d,g,y)=>{d==null?g._vnode&&kt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,y),Hd(),g._vnode=d},Se={p:v,um:kt,m:$t,r:Pa,mt:Yt,mc:re,pc:wt,pbc:Re,n:q,o:t};let oe,se;return e&&([oe,se]=e(Se)),{render:we,hydrate:oe,createApp:N1(we,oe)}}function Bn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function El(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=mn(r[i]),a.el=o.el),n||El(o,a))}}function P1(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const M1=t=>t.__isTeleport,xr=t=>t&&(t.disabled||t.disabled===""),gh=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Tc=(t,e)=>{const n=t&&t.to;return je(n)?e?e(n):null:n},L1={__isTeleport:!0,process(t,e,n,s,r,i,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:p,querySelector:m,createText:w,createComment:v}}=l,C=xr(e.props);let{shapeFlag:P,children:B,dynamicChildren:F}=e;if(t==null){const ne=e.el=w(""),ce=e.anchor=w("");p(ne,n,s),p(ce,n,s);const fe=e.target=Tc(e.props,m),G=e.targetAnchor=w("");fe&&(p(G,fe),o=o||gh(fe));const re=(de,Re)=>{P&16&&u(B,de,Re,r,i,o,a,c)};C?re(n,ce):fe&&re(fe,G)}else{e.el=t.el;const ne=e.anchor=t.anchor,ce=e.target=t.target,fe=e.targetAnchor=t.targetAnchor,G=xr(t.props),re=G?n:ce,de=G?ne:fe;if(o=o||gh(ce),F?(f(t.dynamicChildren,F,re,r,i,o,a),El(t,e,!0)):c||h(t,e,re,de,r,i,o,a,!1),C)G||Bi(e,n,ne,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Re=e.target=Tc(e.props,m);Re&&Bi(e,Re,null,l,0)}else G&&Bi(e,ce,fe,l,1)}},remove(t,e,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&i(u),(o||!xr(f))&&(i(l),a&16))for(let p=0;p<c.length;p++){const m=c[p];r(m,e,n,!0,!!m.dynamicChildren)}},move:Bi,hydrate:U1};function Bi(t,e,n,{o:{insert:s},m:r},i=2){i===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=i===2;if(h&&s(o,e,n),(!h||xr(u))&&c&16)for(let f=0;f<l.length;f++)r(l[f],e,n,2);h&&s(a,e,n)}function U1(t,e,n,s,r,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Tc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(xr(e.props))e.anchor=l(o(t),e,a(t),n,s,r,i),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,r,i)}}return e.anchor&&o(e.anchor)}const gp=L1,rt=Symbol(void 0),Il=Symbol(void 0),Nt=Symbol(void 0),to=Symbol(void 0),Nr=[];let Mt=null;function $(t=!1){Nr.push(Mt=t?null:[])}function $1(){Nr.pop(),Mt=Nr[Nr.length-1]||null}let zr=1;function mh(t){zr+=t}function mp(t){return t.dynamicChildren=zr>0?Mt||xs:null,$1(),zr>0&&Mt&&Mt.push(t),t}function ae(t,e,n,s,r,i){return mp(R(t,e,n,s,r,i,!0))}function Pe(t,e,n,s,r){return mp(z(t,e,n,s,r,!0))}function yo(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const Jo="__vInternal",yp=({key:t})=>t!=null?t:null,no=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Xe(t)||te(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function R(t,e=null,n=null,s=0,r=null,i=t===rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yp(e),ref:e&&no(e),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(bl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),zr>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const z=F1;function F1(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===y1)&&(t=Nt),yo(t)){const a=xn(t,e,!0);return n&&bl(a,n),zr>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(J1(t)&&(t=t.__vccOpts),e){e=V1(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=rs(a)),Ue(c)&&(Dd(c)&&!Y(c)&&(c=et({},c)),e.style=cl(c))}const o=je(t)?1:n1(t)?128:M1(t)?64:Ue(t)?4:te(t)?2:0;return R(t,e,n,s,r,o,i,!0)}function V1(t){return t?Dd(t)||Jo in t?et({},t):t:null}function xn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?j1(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yp(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor}}function lt(t=" ",e=0){return z(Il,null,t,e)}function B1(t,e){const n=z(to,null,t);return n.staticCount=e,n}function bt(t="",e=!1){return e?($(),Pe(Nt,null,t)):z(Nt,null,t)}function jt(t){return t==null||typeof t=="boolean"?z(Nt):Y(t)?z(rt,null,t.slice()):typeof t=="object"?mn(t):z(Il,null,String(t))}function mn(t){return t.el===null||t.memo?t:xn(t)}function bl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Jo in e)?e._ctx=ot:r===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function j1(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=rs([e.class,s.class]));else if(r==="style")e.style=cl([e.style,s.style]);else if(Bo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Vt(t,e,n,s=null){xt(t,e,7,[n,s])}const H1=pp();let q1=0;function z1(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||H1,i={uid:q1++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new f0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(s,r),emitsOptions:zd(s,r),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Q0.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const K1=()=>qe||ot,Fs=t=>{qe=t,t.scope.on()},es=()=>{qe&&qe.scope.off(),qe=null};function _p(t){return t.vnode.shapeFlag&4}let Kr=!1;function W1(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,r=_p(t);C1(t,n,r,e),k1(t,s);const i=r?G1(t,e):void 0;return Kr=!1,i}function G1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Od(new Proxy(t.ctx,v1));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?X1(t):null;Fs(t),er();const i=Tn(s,t,0,[t.props,r]);if(tr(),es(),_d(i)){if(i.then(es,es),e)return i.then(o=>{yh(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=i}else yh(t,i,e)}else vp(t,e)}function yh(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Ud(e)),vp(t,n)}let _h;function vp(t,e,n){const s=t.type;if(!t.render){if(!e&&_h&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=et(et({isCustomElement:i,delimiters:a},o),c);s.render=_h(r,l)}}t.render=s.render||Lt}Fs(t),er(),w1(t),tr(),es()}function Y1(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function X1(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Y1(t))},slots:t.slots,emit:t.emit,expose:e}}function Zo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ud(Od(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in go)return go[n](t)}}))}function Q1(t){return te(t)&&t.displayName||t.name}function J1(t){return te(t)&&"__vccOpts"in t}const Ht=(t,e)=>z0(t,e,Kr);function Tl(t,e,n){const s=arguments.length;return s===2?Ue(e)&&!Y(e)?yo(e)?z(t,null,[e]):z(t,e):z(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&yo(n)&&(n=[n]),z(t,e,n))}const Z1="3.2.36",e_="http://www.w3.org/2000/svg",Wn=typeof document!="undefined"?document:null,vh=Wn&&Wn.createElement("template"),t_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wn.createElementNS(e_,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{vh.innerHTML=s?`<svg>${t}</svg>`:t;const a=vh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function n_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function s_(t,e,n){const s=t.style,r=je(n);if(n&&!r){for(const i in n)Cc(s,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&Cc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const wh=/\s*!important$/;function Cc(t,e,n){if(Y(n))n.forEach(s=>Cc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=r_(t,e);wh.test(n)?t.setProperty(Zs(s),n.replace(wh,""),"important"):t[s]=n}}const Eh=["Webkit","Moz","ms"],Fa={};function r_(t,e){const n=Fa[e];if(n)return n;let s=Wt(e);if(s!=="filter"&&s in t)return Fa[e]=s;s=qo(s);for(let r=0;r<Eh.length;r++){const i=Eh[r]+s;if(i in t)return Fa[e]=i}return e}const Ih="http://www.w3.org/1999/xlink";function i_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ih,e.slice(6,e.length)):t.setAttributeNS(Ih,e,n);else{const i=Zy(e);n==null||i&&!md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function o_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=md(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[wp,a_]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Sc=0;const c_=Promise.resolve(),l_=()=>{Sc=0},u_=()=>Sc||(c_.then(l_),Sc=wp());function _n(t,e,n,s){t.addEventListener(e,n,s)}function h_(t,e,n,s){t.removeEventListener(e,n,s)}function f_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=d_(e);if(s){const l=i[e]=p_(s,r);_n(t,a,l,c)}else o&&(h_(t,a,o,c),i[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function d_(t){let e;if(bh.test(t)){e={};let n;for(;n=t.match(bh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Zs(t.slice(2)),e]}function p_(t,e){const n=s=>{const r=s.timeStamp||wp();(a_||r>=n.attached-1)&&xt(g_(s,n.value),e,5,[s])};return n.value=t,n.attached=u_(),n}function g_(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Th=/^on[a-z]/,m_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?n_(t,s,r):e==="style"?s_(t,n,s):Bo(e)?ll(e)||f_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y_(t,e,s,r))?o_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),i_(t,e,s,r))};function y_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Th.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Th.test(e)&&je(n)?!1:e in t}const un="transition",mr="animation",_o=(t,{slots:e})=>Tl(Xd,__(t),e);_o.displayName="Transition";const Ep={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_o.props=et({},Xd.props,Ep);const jn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ch=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function __(t){const e={};for(const L in t)L in Ep||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=v_(r),w=m&&m[0],v=m&&m[1],{onBeforeEnter:C,onEnter:P,onEnterCancelled:B,onLeave:F,onLeaveCancelled:ne,onBeforeAppear:ce=C,onAppear:fe=P,onAppearCancelled:G=B}=e,re=(L,xe,st)=>{Hn(L,xe?u:a),Hn(L,xe?l:o),st&&st()},de=(L,xe)=>{L._isLeaving=!1,Hn(L,h),Hn(L,p),Hn(L,f),xe&&xe()},Re=L=>(xe,st)=>{const Yt=L?fe:P,Le=()=>re(xe,L,st);jn(Yt,[xe,Le]),Sh(()=>{Hn(xe,L?c:i),hn(xe,L?u:a),Ch(Yt)||Ah(xe,s,w,Le)})};return et(e,{onBeforeEnter(L){jn(C,[L]),hn(L,i),hn(L,o)},onBeforeAppear(L){jn(ce,[L]),hn(L,c),hn(L,l)},onEnter:Re(!1),onAppear:Re(!0),onLeave(L,xe){L._isLeaving=!0;const st=()=>de(L,xe);hn(L,h),I_(),hn(L,f),Sh(()=>{!L._isLeaving||(Hn(L,h),hn(L,p),Ch(F)||Ah(L,s,v,st))}),jn(F,[L,st])},onEnterCancelled(L){re(L,!1),jn(B,[L])},onAppearCancelled(L){re(L,!0),jn(G,[L])},onLeaveCancelled(L){de(L),jn(ne,[L])}})}function v_(t){if(t==null)return null;if(Ue(t))return[Va(t.enter),Va(t.leave)];{const e=Va(t);return[e,e]}}function Va(t){return Vr(t)}function hn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Sh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let w_=0;function Ah(t,e,n,s){const r=t._endId=++w_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=E_(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function E_(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(un+"Delay"),i=s(un+"Duration"),o=kh(r,i),a=s(mr+"Delay"),c=s(mr+"Duration"),l=kh(a,c);let u=null,h=0,f=0;e===un?o>0&&(u=un,h=o,f=i.length):e===mr?l>0&&(u=mr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?un:mr:null,f=u?u===un?i.length:c.length:0);const p=u===un&&/\b(transform|all)(,|$)/.test(n[un+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:p}}function kh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Rh(n)+Rh(t[s])))}function Rh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function I_(){return document.body.offsetHeight}const Vs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Ji(e,n):e};function b_(t){t.target.composing=!0}function xh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zR={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Vs(r);const i=s||r.props&&r.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Vr(a)),t._assign(a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",b_),_n(t,"compositionend",xh),_n(t,"change",xh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Vs(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Vr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},KR={created(t,{value:e},n){t.checked=$s(e,n.props.value),t._assign=Vs(n),_n(t,"change",()=>{t._assign(Wr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Vs(s),e!==n&&(t.checked=$s(e,s.props.value))}},WR={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=jo(e);_n(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Vr(Wr(o)):Wr(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Vs(s)},mounted(t,{value:e}){Nh(t,e)},beforeUpdate(t,e,n){t._assign=Vs(n)},updated(t,{value:e}){Nh(t,e)}};function Nh(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!jo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Wr(i);if(n)Y(e)?i.selected=r0(e,o)>-1:i.selected=e.has(o);else if($s(Wr(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wr(t){return"_value"in t?t._value:t.value}const T_=["ctrl","shift","alt","meta"],C_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>T_.some(n=>t[`${n}Key`]&&!e.includes(n))},GR=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=C_[e[r]];if(i&&i(n,e))return}return t(n,...s)},S_=et({patchProp:m_},t_);let Dh;function A_(){return Dh||(Dh=D1(S_))}const k_=(...t)=>{const e=A_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=R_(s);if(!r)return;const i=e._component;!te(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function R_(t){return je(t)?document.querySelector(t):t}/**
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
 */const Ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},x_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):x_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},N_=function(t){const e=Ip(t);return bp.encodeByteArray(e,!0)},Tp=function(t){return N_(t).replace(/\./g,"")},D_=function(t){try{return bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class O_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ze(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Sp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P_(){return ze().indexOf("Electron/")>=0}function kp(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M_(){return ze().indexOf("MSAppHost/")>=0}function L_(){return typeof indexedDB=="object"}function U_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $_="FirebaseError";class Mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$_,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?F_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mn(r,a,s)}}function F_(t,e){return t.replace(V_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const V_=/\{\$([^}]+)}/g;function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Oh(i)&&Oh(o)){if(!vo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Oh(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ir(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function br(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function j_(t,e){const n=new H_(t,e);return n.subscribe.bind(n)}class H_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ba),r.error===void 0&&(r.error=Ba),r.complete===void 0&&(r.complete=Ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class z_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new O_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W_(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:K_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K_(t){return t===zn?void 0:t}function W_(t){return t.instantiationMode==="EAGER"}/**
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
 */class G_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new z_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Y_={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},X_=ge.INFO,Q_={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},J_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Q_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=X_,this._logHandler=J_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Z_=(t,e)=>e.some(n=>t instanceof n);let Ph,Mh;function ev(){return Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tv(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rp=new WeakMap,Ac=new WeakMap,xp=new WeakMap,ja=new WeakMap,Sl=new WeakMap;function nv(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rp.set(n,t)}).catch(()=>{}),Sl.set(e,t),e}function sv(t){if(Ac.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ac.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rv(t){kc=t(kc)}function iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ha(this),e,...n);return xp.set(s,e.sort?e.sort():[e]),Sn(s)}:tv().includes(t)?function(...e){return t.apply(Ha(this),e),Sn(Rp.get(this))}:function(...e){return Sn(t.apply(Ha(this),e))}}function ov(t){return typeof t=="function"?iv(t):(t instanceof IDBTransaction&&sv(t),Z_(t,ev())?new Proxy(t,kc):t)}function Sn(t){if(t instanceof IDBRequest)return nv(t);if(ja.has(t))return ja.get(t);const e=ov(t);return e!==t&&(ja.set(t,e),Sl.set(e,t)),e}const Ha=t=>Sl.get(t);function av(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const cv=["get","getKey","getAll","getAllKeys","count"],lv=["put","add","delete","clear"],qa=new Map;function Lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=lv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qa.set(e,i),i}rv(t=>Yu(Ma({},t),{get:(e,n,s)=>Lh(e,n)||t.get(e,n,s),has:(e,n)=>!!Lh(e,n)||t.has(e,n)}));/**
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
 */class uv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rc="@firebase/app",Uh="0.7.25";/**
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
 */const Al=new Cl("@firebase/app"),fv="@firebase/app-compat",dv="@firebase/analytics-compat",pv="@firebase/analytics",gv="@firebase/app-check-compat",mv="@firebase/app-check",yv="@firebase/auth",_v="@firebase/auth-compat",vv="@firebase/database",wv="@firebase/database-compat",Ev="@firebase/functions",Iv="@firebase/functions-compat",bv="@firebase/installations",Tv="@firebase/installations-compat",Cv="@firebase/messaging",Sv="@firebase/messaging-compat",Av="@firebase/performance",kv="@firebase/performance-compat",Rv="@firebase/remote-config",xv="@firebase/remote-config-compat",Nv="@firebase/storage",Dv="@firebase/storage-compat",Ov="@firebase/firestore",Pv="@firebase/firestore-compat",Mv="firebase",Lv="9.8.2";/**
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
 */const Np="[DEFAULT]",Uv={[Rc]:"fire-core",[fv]:"fire-core-compat",[pv]:"fire-analytics",[dv]:"fire-analytics-compat",[mv]:"fire-app-check",[gv]:"fire-app-check-compat",[yv]:"fire-auth",[_v]:"fire-auth-compat",[vv]:"fire-rtdb",[wv]:"fire-rtdb-compat",[Ev]:"fire-fn",[Iv]:"fire-fn-compat",[bv]:"fire-iid",[Tv]:"fire-iid-compat",[Cv]:"fire-fcm",[Sv]:"fire-fcm-compat",[Av]:"fire-perf",[kv]:"fire-perf-compat",[Rv]:"fire-rc",[xv]:"fire-rc-compat",[Nv]:"fire-gcs",[Dv]:"fire-gcs-compat",[Ov]:"fire-fst",[Pv]:"fire-fst-compat","fire-js":"fire-js",[Mv]:"fire-js-all"};/**
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
 */const wo=new Map,xc=new Map;function $v(t,e){try{t.container.addComponent(e)}catch(n){Al.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(xc.has(e))return Al.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of wo.values())$v(n,t);return!0}function ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Fv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},os=new fi("app","Firebase",Fv);/**
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
 */class Vv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=Lv;function Bv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Np,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw os.create("bad-app-name",{appName:String(s)});const r=wo.get(s);if(r){if(vo(t,r.options)&&vo(n,r.config))return r;throw os.create("duplicate-app",{appName:s})}const i=new G_(s);for(const a of xc.values())i.addComponent(a);const o=new Vv(t,n,i);return wo.set(s,o),o}function kl(t=Np){const e=wo.get(t);if(!e)throw os.create("no-app",{appName:t});return e}function qt(t,e,n){var s;let r=(s=Uv[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Al.warn(a.join(" "));return}is(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jv="firebase-heartbeat-database",Hv=1,Gr="firebase-heartbeat-store";let za=null;function Dp(){return za||(za=av(jv,Hv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}}).catch(t=>{throw os.create("storage-open",{originalErrorMessage:t.message})})),za}async function qv(t){try{return(await Dp()).transaction(Gr).objectStore(Gr).get(Op(t))}catch(e){throw os.create("storage-get",{originalErrorMessage:e.message})}}async function $h(t,e){try{const s=(await Dp()).transaction(Gr,"readwrite");return await s.objectStore(Gr).put(e,Op(t)),s.done}catch(n){throw os.create("storage-set",{originalErrorMessage:n.message})}}function Op(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zv=1024,Kv=30*24*60*60*1e3;class Wv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Kv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fh(),{heartbeatsToSend:n,unsentEntries:s}=Gv(this._heartbeatsCache.heartbeats),r=Tp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Fh(){return new Date().toISOString().substring(0,10)}function Gv(t,e=zv){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Vh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Vh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Yv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return L_()?U_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return $h(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vh(t){return Tp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Xv(t){is(new Nn("platform-logger",e=>new uv(e),"PRIVATE")),is(new Nn("heartbeat",e=>new Wv(e),"PRIVATE")),qt(Rc,Uh,t),qt(Rc,Uh,"esm2017"),qt("fire-js","")}Xv("");function Rl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qv=Pp,Mp=new fi("auth","Firebase",Pp());/**
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
 */const Bh=new Cl("@firebase/auth");function so(t,...e){Bh.logLevel<=ge.ERROR&&Bh.error(`Auth (${sr}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw xl(t,...e)}function zt(t,...e){return xl(t,...e)}function Jv(t,e,n){const s=Object.assign(Object.assign({},Qv()),{[e]:n});return new fi("auth","Firebase",s).create(e,{appName:t.name})}function xl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mp.create(t,...e)}function X(t,e,...n){if(!t)throw xl(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function rn(t,e){t||Jt(e)}/**
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
 */const jh=new Map;function Zt(t){rn(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
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
 */function Zv(t,e){const n=ea(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(vo(i,e!=null?e:{}))return r;Ut(r,"already-initialized")}return n.initialize({options:e})}function ew(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Nc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tw(){return Hh()==="http:"||Hh()==="https:"}function Hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tw()||Sp()||"connection"in navigator)?navigator.onLine:!0}function sw(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cp()||Ap()}get(){return nw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nl(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const iw=new pi(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mi(t,e,n,s,r={}){return Up(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lp.fetch()($p(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Up(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},rw),e);try{const r=new ow(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ji(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ji(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ji(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ji(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Jv(t,u,l);Ut(t,u)}}catch(r){if(r instanceof Mn)throw r;Ut(t,"network-request-failed")}}async function yi(t,e,n,s,r={}){const i=await mi(t,e,n,s,r);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $p(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Nl(t.config,r):`${t.config.apiScheme}://${r}`}class ow{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zt(this.auth,"network-request-failed")),iw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ji(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=zt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function aw(t,e){return mi(t,"POST","/v1/accounts:delete",e)}async function cw(t,e){return mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lw(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=Dl(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Dr(Ka(r.auth_time)),issuedAtTime:Dr(Ka(r.iat)),expirationTime:Dr(Ka(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function Dl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const r=D_(n);return r?JSON.parse(r):(so("Failed to decode base64 JWT payload"),null)}catch(r){return so("Caught error parsing JWT payload as JSON",r),null}}function uw(t){const e=Dl(t);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mn&&hw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dr(this.lastLoginAt),this.creationTime=Dr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Yr(t,cw(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gw(i.providerUserInfo):[],a=pw(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Fp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dw(t){const e=Ve(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pw(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function gw(t){return t.map(e=>{var{providerId:n}=e,s=Rl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function mw(t,e){const n=await Up(t,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=$p(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):uw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await mw(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Xr;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function fn(t,e){X(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ts{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lw(this,e)}reload(){return dw(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yr(this,aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:B,emailVerified:F,isAnonymous:ne,providerData:ce,stsTokenManager:fe}=n;X(B&&fe,e,"internal-error");const G=Xr.fromJSON(this.name,fe);X(typeof B=="string",e,"internal-error"),fn(h,e.name),fn(f,e.name),X(typeof F=="boolean",e,"internal-error"),X(typeof ne=="boolean",e,"internal-error"),fn(p,e.name),fn(m,e.name),fn(w,e.name),fn(v,e.name),fn(C,e.name),fn(P,e.name);const re=new ts({uid:B,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:ne,photoURL:m,phoneNumber:p,tenantId:w,stsTokenManager:G,createdAt:C,lastLoginAt:P});return ce&&Array.isArray(ce)&&(re.providerData=ce.map(de=>Object.assign({},de))),v&&(re._redirectEventId=v),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new Xr;r.updateFromServerResponse(n);const i=new ts({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}}/**
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
 */class Vp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vp.type="NONE";const qh=Vp;/**
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
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ro(this.userKey,r.apiKey,i),this.fullPersistenceKey=ro("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Os(Zt(qh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Zt(qh);const o=ro(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ts._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Os(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Os(i,e,s))}}/**
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
 */function zh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zp(e))return"Blackberry";if(Kp(e))return"Webos";if(Ol(e))return"Safari";if((e.includes("chrome/")||jp(e))&&!e.includes("edge/"))return"Chrome";if(qp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Bp(t=ze()){return/firefox\//i.test(t)}function Ol(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jp(t=ze()){return/crios\//i.test(t)}function Hp(t=ze()){return/iemobile/i.test(t)}function qp(t=ze()){return/android/i.test(t)}function zp(t=ze()){return/blackberry/i.test(t)}function Kp(t=ze()){return/webos/i.test(t)}function ta(t=ze()){return/iphone|ipad|ipod/i.test(t)}function yw(t=ze()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _w(){return kp()&&document.documentMode===10}function Wp(t=ze()){return ta(t)||qp(t)||Kp(t)||zp(t)||/windows phone/i.test(t)||Hp(t)}function vw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=zh(ze());break;case"Worker":n=`${zh(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${s}`}/**
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
 */class ww{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s.message})}}}/**
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
 */class Ew{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new ww(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function na(t){return Ve(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=j_(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Pl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function Iw(t,e){return mi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bw(t,e){return yi(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
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
 */async function Tw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function Cw(t,e){return yi(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
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
 */class Qr extends Pl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bw(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tw(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Iw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cw(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return yi(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
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
 */const Sw="http://localhost";class as extends Pl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Rl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new as(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */function Aw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kw(t){const e=Ir(br(t)).link,n=e?Ir(br(e)).deep_link_id:null,s=Ir(br(t)).deep_link_id;return(s?Ir(br(s)).link:null)||s||n||e||t}class Ml{constructor(e){var n,s,r,i,o,a;const c=Ir(br(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Aw((r=c.mode)!==null&&r!==void 0?r:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kw(e);try{return new Ml(n)}catch{return null}}}/**
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
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(e,n){return Qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ml.parseLink(n);return X(s,"argument-error"),Qr._fromEmailAndCode(e,s.code,s.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _i extends Yp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends _i{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class En extends _i{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class In extends _i{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return In.credential(n,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function Rw(t,e){return yi(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ts._fromIdTokenResponse(e,s,r),o=Wh(s);return new cs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Wh(s);return new cs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Wh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Io extends Mn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Io(e,n,s,r)}}function Xp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,s):i})}async function xw(t,e,n=!1){const s=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",s)}/**
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
 */async function Nw(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Yr(t,Xp(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=Dl(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),cs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(s,"user-mismatch"),i}}/**
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
 */async function Qp(t,e,n=!1){const s="signIn",r=await Xp(t,s,e),i=await cs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Dw(t,e){return Qp(na(t),e)}async function YR(t,e,n){const s=na(t),r=await Rw(s,{returnSecureToken:!0,email:e,password:n}),i=await cs._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function XR(t,e,n){return Dw(Ve(t),rr.credential(e,n))}function Ow(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function Jp(t){return Ve(t).signOut()}const bo="__sak";/**
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
 */class Zp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pw(){const t=ze();return Ol(t)||ta(t)}const Mw=1e3,Lw=10;class eg extends Zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pw()&&vw(),this.fallbackToPolling=Wp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_w()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lw):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eg.type="LOCAL";const Uw=eg;/**
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
 */class tg extends Zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tg.type="SESSION";const ng=tg;/**
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
 */function $w(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new sa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await $w(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
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
 */function Ll(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ll("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Kt(){return window}function Vw(t){Kt().location.href=t}/**
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
 */function sg(){return typeof Kt().WorkerGlobalScope!="undefined"&&typeof Kt().importScripts=="function"}async function Bw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hw(){return sg()?self:null}/**
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
 */const rg="firebaseLocalStorageDb",qw=1,To="firebaseLocalStorage",ig="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([To],e?"readwrite":"readonly").objectStore(To)}function zw(){const t=indexedDB.deleteDatabase(rg);return new vi(t).toPromise()}function Dc(){const t=indexedDB.open(rg,qw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(To,{keyPath:ig})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(To)?e(s):(s.close(),await zw(),e(await Dc()))})})}async function Gh(t,e,n){const s=ra(t,!0).put({[ig]:e,value:n});return new vi(s).toPromise()}async function Kw(t,e){const n=ra(t,!1).get(e),s=await new vi(n).toPromise();return s===void 0?null:s.value}function Yh(t,e){const n=ra(t,!0).delete(e);return new vi(n).toPromise()}const Ww=800,Gw=3;class og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Gw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(Hw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bw(),!this.activeServiceWorker)return;this.sender=new Fw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Gh(e,bo,"1"),await Yh(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Kw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ra(r,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}og.type="LOCAL";const Yw=og;/**
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
 */function Xw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=zt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Xw().appendChild(s)})}function Jw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pi(3e4,6e4);/**
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
 */function Zw(t,e){return e?Zt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ul extends Pl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eE(t){return Qp(t.auth,new Ul(t),t.bypassAuthState)}function tE(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Nw(n,new Ul(t),t.bypassAuthState)}async function nE(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),xw(n,new Ul(t),t.bypassAuthState)}/**
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
 */class ag{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eE;case"linkViaPopup":case"linkViaRedirect":return nE;case"reauthViaPopup":case"reauthViaRedirect":return tE;default:Ut(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sE=new pi(2e3,1e4);class As extends ag{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sE.get())};e()}}As.currentPopupAction=null;/**
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
 */const rE="pendingRedirect",io=new Map;class iE extends ag{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const s=await oE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oE(t,e){const n=lE(e),s=cE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function aE(t,e){io.set(t._key(),e)}function cE(t){return Zt(t._redirectPersistence)}function lE(t){return ro(rE,t.config.apiKey,t.name)}async function uE(t,e,n=!1){const s=na(t),r=Zw(s,e),o=await new iE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const hE=10*60*1e3;class fE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!cg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}}function Xh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cg(t);default:return!1}}/**
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
 */async function pE(t,e={}){return mi(t,"GET","/v1/projects",e)}/**
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
 */const gE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mE=/^https?/;async function yE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pE(t);for(const n of e)try{if(_E(n))return}catch{}Ut(t,"unauthorized-domain")}function _E(t){const e=Nc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!mE.test(n))return!1;if(gE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const vE=new pi(3e4,6e4);function Qh(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wE(t){return new Promise((e,n)=>{var s,r,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(zt(t,"network-request-failed"))},timeout:vE.get()})}if(!((r=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)o();else{const a=Jw("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},Qw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function EE(t){return oo=oo||wE(t),oo}/**
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
 */const IE=new pi(5e3,15e3),bE="__/auth/iframe",TE="emulator/auth/iframe",CE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AE(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nl(e,TE):`https://${t.config.authDomain}/${bE}`,s={apiKey:e.apiKey,appName:t.name,v:sr},r=SE.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${di(s).slice(1)}`}async function kE(t){const e=await EE(t),n=Kt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:AE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},IE.get());function c(){Kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const RE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xE=500,NE=600,DE="_blank",OE="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PE(t,e,n,s=xE,r=NE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},RE),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ze().toLowerCase();n&&(a=jp(l)?DE:n),Bp(l)&&(e=e||OE,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(yw(l)&&a!=="_self")return ME(e||"",a),new Jh(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Jh(h)}function ME(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const LE="__/auth/handler",UE="emulator/auth/handler";function Zh(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:sr,eventId:r};if(e instanceof Yp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",B_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof _i){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$E(t)}?${di(a).slice(1)}`}function $E({config:t}){return t.emulator?Nl(t,UE):`https://${t.authDomain}/${LE}`}/**
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
 */const Wa="webStorageSupport";class FE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ng,this._completeRedirectFn=uE,this._overrideRedirectResult=aE}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zh(e,n,s,Nc(),r);return PE(e,o,Ll())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Vw(Zh(e,n,s,Nc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kE(e),s=new fE(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wa,{type:Wa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Wa];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wp()||Ol()||ta()}}const VE=FE;var ef="@firebase/auth",tf="0.20.2";/**
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
 */class BE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HE(t){is(new Nn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{X(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},u=new Ew(a,c,l);return ew(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),is(new Nn("auth-internal",e=>{const n=na(e.getProvider("auth").getImmediate());return(s=>new BE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(ef,tf,jE(t)),qt(ef,tf,"esm2017")}/**
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
 */function qE(t=kl()){const e=ea(t,"auth");return e.isInitialized()?e.getImmediate():Zv(t,{popupRedirectResolver:VE,persistence:[Yw,Uw,ng]})}HE("Browser");var zE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},M,$l=$l||{},Q=zE||self;function Co(){}function Oc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KE(t){return Object.prototype.hasOwnProperty.call(t,Ga)&&t[Ga]||(t[Ga]=++WE)}var Ga="closure_uid_"+(1e9*Math.random()>>>0),WE=0;function GE(t,e,n){return t.call.apply(t.bind,arguments)}function YE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=GE:Qe=YE,Qe.apply(null,arguments)}function Hi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ln(){this.s=this.s,this.o=this.o}var XE=0;Ln.prototype.s=!1;Ln.prototype.na=function(){!this.s&&(this.s=!0,this.M(),XE!=0)&&KE(this)};Ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ug=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function QE(t){e:{var e=jI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function nf(t){return Array.prototype.concat.apply([],arguments)}function Fl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function So(t){return/^[\s\xa0]*$/.test(t)}var sf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ft(t,e){return t.indexOf(e)!=-1}function Ya(t,e){return t<e?-1:t>e?1:0}var dt;e:{var rf=Q.navigator;if(rf){var of=rf.userAgent;if(of){dt=of;break e}}dt=""}function Vl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function hg(t){const e={};for(const n in t)e[n]=t[n];return e}var af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<af.length;i++)n=af[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Bl(t){return Bl[" "](t),t}Bl[" "]=Co;function JE(t){var e=tI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZE=ft(dt,"Opera"),Bs=ft(dt,"Trident")||ft(dt,"MSIE"),dg=ft(dt,"Edge"),Pc=dg||Bs,pg=ft(dt,"Gecko")&&!(ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge"))&&!(ft(dt,"Trident")||ft(dt,"MSIE"))&&!ft(dt,"Edge"),eI=ft(dt.toLowerCase(),"webkit")&&!ft(dt,"Edge");function gg(){var t=Q.document;return t?t.documentMode:void 0}var Ao;e:{var Xa="",Qa=function(){var t=dt;if(pg)return/rv:([^\);]+)(\)|;)/.exec(t);if(dg)return/Edge\/([\d\.]+)/.exec(t);if(Bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eI)return/WebKit\/(\S+)/.exec(t);if(ZE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Xa=Qa?Qa[1]:""),Bs){var Ja=gg();if(Ja!=null&&Ja>parseFloat(Xa)){Ao=String(Ja);break e}}Ao=Xa}var tI={};function nI(){return JE(function(){let t=0;const e=sf(String(Ao)).split("."),n=sf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ya(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ya(r[2].length==0,i[2].length==0)||Ya(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Mc;if(Q.document&&Bs){var cf=gg();Mc=cf||parseInt(Ao,10)||void 0}else Mc=void 0;var sI=Mc,rI=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Co,e),Q.removeEventListener("test",Co,e)}catch{}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};function Jr(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pg){e:{try{Bl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.Z.h.call(this)}}nt(Jr,at);var iI={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ei="closure_listenable_"+(1e6*Math.random()|0),oI=0;function aI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++oI,this.ca=this.fa=!1}function ia(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function oa(t){this.src=t,this.g={},this.h=0}oa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Uc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new aI(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=lg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ia(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Uc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var jl="closure_lm_"+(1e6*Math.random()|0),Za={};function mg(t,e,n,s,r){if(s&&s.once)return _g(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mg(t,e[i],n,s,r);return null}return n=zl(n),t&&t[Ei]?t.N(e,n,wi(s)?!!s.capture:!!s,r):yg(t,e,n,!1,s,r)}function yg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=wi(r)?!!r.capture:!!r,a=ql(t);if(a||(t[jl]=a=new oa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=cI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cI(){function t(n){return e.call(t.src,t.listener,n)}var e=lI;return t}function _g(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_g(t,e[i],n,s,r);return null}return n=zl(n),t&&t[Ei]?t.O(e,n,wi(s)?!!s.capture:!!s,r):yg(t,e,n,!0,s,r)}function vg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)vg(t,e[i],n,s,r);else s=wi(s)?!!s.capture:!!s,n=zl(n),t&&t[Ei]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Uc(i,n,s,r),-1<n&&(ia(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ql(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Uc(e,n,s,r)),(n=-1<t?e[t]:null)&&Hl(n))}function Hl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ei])Lc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ql(e))?(Lc(n,t),n.h==0&&(n.src=null,e[jl]=null)):ia(t)}}}function wg(t){return t in Za?Za[t]:Za[t]="on"+t}function lI(t,e){if(t.ca)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Hl(t),t=n.call(s,e)}return t}function ql(t){return t=t[jl],t instanceof oa?t:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function zl(t){return typeof t=="function"?t:(t[ec]||(t[ec]=function(e){return t.handleEvent(e)}),t[ec])}function Ke(){Ln.call(this),this.i=new oa(this),this.P=this,this.I=null}nt(Ke,Ln);Ke.prototype[Ei]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){vg(this,t,e,n,s)};function Je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(s,t),fg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=qi(o,s,!0,e)&&r}if(o=e.g=t,r=qi(o,s,!0,e)&&r,r=qi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=qi(o,s,!1,e)&&r}Ke.prototype.M=function(){if(Ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ia(n[s]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Lc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Kl=Q.JSON.stringify;function uI(){var t=Ig;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hI{constructor(){this.h=this.g=null}add(e,n){const s=Eg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Eg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fI,t=>t.reset());class fI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dI(t){Q.setTimeout(()=>{throw t},0)}function Wl(t,e){$c||pI(),Fc||($c(),Fc=!0),Ig.add(t,e)}var $c;function pI(){var t=Q.Promise.resolve(void 0);$c=function(){t.then(gI)}}var Fc=!1,Ig=new hI;function gI(){for(var t;t=uI();){try{t.h.call(t.g)}catch(n){dI(n)}var e=Eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fc=!1}function aa(t,e){Ke.call(this),this.h=t||1,this.g=e||Q,this.j=Qe(this.kb,this),this.l=Date.now()}nt(aa,Ke);M=aa.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Je(this,"tick"),this.da&&(Gl(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){aa.Z.M.call(this),Gl(this),delete this.g};function Yl(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function bg(t){t.g=Yl(()=>{t.g=null,t.i&&(t.i=!1,bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mI extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bg(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){Ln.call(this),this.h=t,this.g={}}nt(Zr,Ln);var lf=[];function Tg(t,e,n,s){Array.isArray(n)||(n&&(lf[0]=n.toString()),n=lf);for(var r=0;r<n.length;r++){var i=mg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Cg(t){Vl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hl(e)},t),t.g={}}Zr.prototype.M=function(){Zr.Z.M.call(this),Cg(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ca(){this.g=!0}ca.prototype.Aa=function(){this.g=!1};function yI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function _I(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ks(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wI(t,n)+(s?" "+s:"")})}function vI(t,e){t.info(function(){return"TIMEOUT: "+e})}ca.prototype.info=function(){};function wI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Kl(n)}catch{return e}}var ys={},uf=null;function la(){return uf=uf||new Ke}ys.Ma="serverreachability";function Sg(t){at.call(this,ys.Ma,t)}nt(Sg,at);function ei(t){const e=la();Je(e,new Sg(e))}ys.STAT_EVENT="statevent";function Ag(t,e){at.call(this,ys.STAT_EVENT,t),this.stat=e}nt(Ag,at);function pt(t){const e=la();Je(e,new Ag(e,t))}ys.Na="timingevent";function kg(t,e){at.call(this,ys.Na,t),this.size=e}nt(kg,at);function Ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var ua={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Rg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xl(){}Xl.prototype.h=null;function hf(t){return t.h||(t.h=t.i())}function xg(){}var bi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ql(){at.call(this,"d")}nt(Ql,at);function Jl(){at.call(this,"c")}nt(Jl,at);var Vc;function ha(){}nt(ha,Xl);ha.prototype.g=function(){return new XMLHttpRequest};ha.prototype.i=function(){return{}};Vc=new ha;function Ti(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Zr(this),this.P=EI,t=Pc?125:void 0,this.W=new aa(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var EI=45e3,Bc={},ko={};M=Ti.prototype;M.setTimeout=function(t){this.P=t};function jc(t,e,n){t.K=1,t.v=da(on(e)),t.s=n,t.U=!0,Dg(t,null)}function Dg(t,e){t.F=Date.now(),Ci(t),t.A=on(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Fg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ng,t.g=im(t.l,n?e:null,!t.s),0<t.O&&(t.L=new mI(Qe(t.Ia,t,t.g),t.O)),Tg(t.V,t.g,"readystatechange",t.gb),e=t.H?hg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ei(),yI(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&en(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=en(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Pc||this.g&&(this.h.h||this.g.ga()||gf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ei(3):ei(2)),fa(this);var n=this.g.ba();this.N=n;t:if(Og(this)){var s=gf(this.g);t="";var r=s.length,i=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Xn(this),Or(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,_I(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!So(a)){var l=a;break t}}l=null}if(n=l)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Hc(this,n);else{this.i=!1,this.o=3,pt(12),Xn(this),Or(this);break e}}this.U?(Pg(this,u,o),Pc&&this.i&&u==3&&(Tg(this.V,this.W,"tick",this.fb),this.W.start())):(ks(this.j,this.m,o,null),Hc(this,o)),u==4&&Xn(this),this.i&&!this.I&&(u==4?tm(this.l,this):(this.i=!1,Ci(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Xn(this),Or(this)}}}catch{}finally{}};function Og(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Pg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=II(t,n),r==ko){e==4&&(t.o=4,pt(14),s=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Bc){t.o=4,pt(15),ks(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ks(t.j,t.m,r,null),Hc(t,r);Og(t)&&r!=ko&&r!=Bc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),au(e),e.L=!0,pt(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),Xn(t),Or(t))}M.fb=function(){if(this.g){var t=en(this.g),e=this.g.ga();this.C<e.length&&(fa(this),Pg(this,t,e),this.i&&t!=4&&Ci(this))}};function II(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ko:(n=Number(e.substring(n,s)),isNaN(n)?Bc:(s+=1,s+n>e.length?ko:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Xn(this)};function Ci(t){t.Y=Date.now()+t.P,Mg(t,t.P)}function Mg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ii(Qe(t.eb,t),e)}function fa(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vI(this.j,this.A),this.K!=2&&(ei(),pt(17)),Xn(this),this.o=2,Or(this)):Mg(this,this.Y-t)};function Or(t){t.l.G==0||t.I||tm(t.l,t)}function Xn(t){fa(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Gl(t.W),Cg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qc(n.i,t))){if(n.I=t.N,!t.J&&qc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Do(n),ma(n);else break e;ou(n),pt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ii(Qe(n.ab,n),6e3));if(1>=jg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Qn(n,11)}else if((t.J||n.g==t)&&Do(n),!So(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(ft(m,"spdy")||ft(m,"quic")||ft(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(tu(i,i.h),i.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.sa=w,Me(s.F,s.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=rm(s,s.H?s.la:null,s.W),o.J){Hg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(fa(a),Ci(a)),s.g=o}else Zg(s);0<n.l.length&&ya(n)}else l[0]!="stop"&&l[0]!="close"||Qn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qn(n,7):iu(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ei(4)}catch{}}function bI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Oc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Zl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oc(t)||typeof t=="string")ug(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Oc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=bI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function ir(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ir)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}M=ir.prototype;M.R=function(){eu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return eu(this),this.g.concat()};function eu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ls(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ls(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}M.get=function(t,e){return ls(this.h,t)?this.h[t]:e};M.set=function(t,e){ls(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ls(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Lg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function TI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function us(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof us){this.g=e!==void 0?e:t.g,Ro(this,t.j),this.s=t.s,xo(this,t.i),No(this,t.m),this.l=t.l,e=t.h;var n=new ti;n.i=e.i,e.g&&(n.g=new ir(e.g),n.h=e.h),ff(this,n),this.o=t.o}else t&&(n=String(t).match(Lg))?(this.g=!!e,Ro(this,n[1]||"",!0),this.s=Pr(n[2]||""),xo(this,n[3]||"",!0),No(this,n[4]),this.l=Pr(n[5]||"",!0),ff(this,n[6]||"",!0),this.o=Pr(n[7]||"")):(this.g=!!e,this.h=new ti(null,this.g))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tr(e,df,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tr(e,df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Tr(n,n.charAt(0)=="/"?RI:kI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tr(n,NI)),t.join("")};function on(t){return new us(t)}function Ro(t,e,n){t.j=n?Pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xo(t,e,n){t.i=n?Pr(e,!0):e}function No(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ff(t,e,n){e instanceof ti?(t.h=e,DI(t.h,t.g)):(n||(e=Tr(e,xI)),t.h=new ti(e,t.g))}function Me(t,e,n){t.h.set(e,n)}function da(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function CI(t){return t instanceof us?on(t):new us(t,void 0)}function SI(t,e,n,s){var r=new us(null,void 0);return t&&Ro(r,t),e&&xo(r,e),n&&No(r,n),s&&(r.l=s),r}function Pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,AI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function AI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var df=/[#\/\?@]/g,kI=/[#\?:]/g,RI=/[#\?]/g,xI=/[#\?@]/g,NI=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new ir,t.h=0,t.i&&TI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=ti.prototype;M.add=function(t,e){Un(this),this.i=null,t=or(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ug(t,e){Un(t),e=or(t,e),ls(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ls(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&eu(t)))}function $g(t,e){return Un(t),e=or(t,e),ls(t.g.h,e)}M.forEach=function(t,e){Un(this),this.g.forEach(function(n,s){ug(n,function(r){t.call(e,r,s,this)},this)},this)};M.T=function(){Un(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};M.R=function(t){Un(this);var e=[];if(typeof t=="string")$g(this,t)&&(e=nf(e,this.g.get(or(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=nf(e,t[n])}return e};M.set=function(t,e){return Un(this),this.i=null,t=or(this,t),$g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Fg(t,e,n){Ug(t,e),0<n.length&&(t.i=null,t.g.set(or(t,e),Fl(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function or(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DI(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ug(this,s),Fg(this,r,n))},t)),t.j=e}var OI=class{constructor(t,e){this.h=t,this.g=e}};function Vg(t){this.l=t||PI,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ea&&Q.g.Ea()&&Q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PI=10;function Bg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jg(t){return t.h?1:t.g?t.g.size:0}function qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tu(t,e){t.g?t.g.add(e):t.h=e}function Hg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vg.prototype.cancel=function(){if(this.i=qg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fl(t.i)}function nu(){}nu.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};nu.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function MI(){this.g=new nu}function LI(t,e,n){const s=n||"";try{Zl(t,function(r,i){let o=r;wi(r)&&(o=Kl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function UI(t,e){const n=new ca;if(Q.Image){const s=new Image;s.onload=Hi(zi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Hi(zi,n,s,"TestLoadImage: error",!1,e),s.onabort=Hi(zi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Hi(zi,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function zi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Si(t){this.l=t.$b||null,this.j=t.ib||!1}nt(Si,Xl);Si.prototype.g=function(){return new pa(this.l,this.j)};Si.prototype.i=function(t){return function(){return t}}({});function pa(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(pa,Ke);var su=0;M=pa.prototype;M.open=function(t,e){if(this.readyState!=su)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=su};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ai(this):ni(this),this.readyState==3&&zg(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Ai(this))};M.Ta=function(t){this.g&&(this.response=t,Ai(this))};M.ha=function(){this.g&&Ai(this)};function Ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $I=Q.JSON.parse;function Be(t){Ke.call(this),this.headers=new ir,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kg,this.K=this.L=!1}nt(Be,Ke);var Kg="",FI=/^https?$/i,VI=["POST","PUT"];M=Be.prototype;M.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vc.g(),this.C=this.u?hf(this.u):hf(Vc),this.g.onreadystatechange=Qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){pf(this,i);return}t=n||"";const r=new ir(this.headers);s&&Zl(s,function(i,o){r.set(o,i)}),s=QE(r.T()),n=Q.FormData&&t instanceof Q.FormData,!(0<=lg(VI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yg(this),0<this.B&&((this.K=BI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.pa,this)):this.A=Yl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){pf(this,i)}};function BI(t){return Bs&&nI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function jI(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof $l!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wg(t),ga(t)}function Wg(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),ga(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ga(this,!0)),Be.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?Gg(this):this.cb())};M.cb=function(){Gg(this)};function Gg(t){if(t.h&&typeof $l!="undefined"&&(!t.C[1]||en(t)!=4||t.ba()!=2)){if(t.v&&en(t)==4)Yl(t.Fa,0,t);else if(Je(t,"readystatechange"),en(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Lg)[1]||null;if(!r&&Q.self&&Q.self.location){var i=Q.self.location.protocol;r=i.substr(0,i.length-1)}s=!FI.test(r?r.toLowerCase():"")}n=s}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<en(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Wg(t)}}finally{ga(t)}}}}function ga(t,e){if(t.g){Yg(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Yg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function en(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$I(e)}};function gf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function HI(t){let e="";return Vl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ru(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=HI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function yr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xg(t){this.za=0,this.l=[],this.h=new ca,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=yr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=yr("baseRetryDelayMs",5e3,t),this.$a=yr("retryDelaySeedMs",1e4,t),this.Ya=yr("forwardChannelMaxRetries",2,t),this.ra=yr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Vg(t&&t.concurrentRequestLimit),this.Ca=new MI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=Xg.prototype;M.ma=8;M.G=1;function iu(t){if(Qg(t),t.G==3){var e=t.V++,n=on(t.F);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),ki(t,n),e=new Ti(t,t.h,e,void 0),e.K=2,e.v=da(on(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=im(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ci(e)}sm(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ma(t){t.g&&(au(t),t.g.cancel(),t.g=null)}function Qg(t){ma(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Do(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function tc(t,e){t.l.push(new OI(t.Za++,e)),t.G==3&&ya(t)}function ya(t){Bg(t.i)||t.m||(t.m=!0,Wl(t.Ha,t),t.C=0)}function qI(t,e){return jg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ii(Qe(t.Ha,t,e),nm(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ti(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=hg(i),fg(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jg(this,r,e),n=on(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),ki(this,n),this.o&&i&&ru(n,this.o,i),tu(this.i,r),this.Ra&&Me(n,"TYPE","init"),this.ja?(Me(n,"$req",e),Me(n,"SID","null"),r.$=!0,jc(r,n,null)):jc(r,n,e),this.G=2}}else this.G==3&&(t?mf(this,t):this.l.length==0||Bg(this.i)||mf(this))};function mf(t,e){var n;e?n=e.m:n=t.V++;const s=on(t.F);Me(s,"SID",t.J),Me(s,"RID",n),Me(s,"AID",t.U),ki(t,s),t.o&&t.s&&ru(s,t.o,t.s),n=new Ti(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Jg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),tu(t.i,n),jc(n,s,e)}function ki(t,e){t.j&&Zl({},function(n,s){Me(e,s,n)})}function Jg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Qe(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{LI(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Zg(t){t.g||t.u||(t.Y=1,Wl(t.Ga,t),t.A=0)}function ou(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ii(Qe(t.Ga,t),nm(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,em(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ii(Qe(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pt(10),ma(this),em(this))};function au(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function em(t){t.g=new Ti(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=on(t.oa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.N?"0":"1"),Me(e,"AID",t.U),ki(t,e),Me(e,"TYPE","xmlhttp"),t.o&&t.s&&ru(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=da(on(e)),n.s=null,n.U=!0,Dg(n,t)}M.ab=function(){this.v!=null&&(this.v=null,ma(this),ou(this),pt(19))};function Do(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function tm(t,e){var n=null;if(t.g==e){Do(t),au(t),t.g=null;var s=2}else if(qc(t.i,e))n=e.D,Hg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=la(),Je(s,new kg(s,n)),ya(t)}else Zg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&qI(t,e)||s==2&&ou(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function nm(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Qn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Qe(t.jb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Ro(n,"https"),da(n)),UI(n.toString(),s)}else pt(2);t.G=0,t.j&&t.j.va(e),sm(t),Qg(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pt(2)):(this.h.info("Failed to ping google.com"),pt(1))};function sm(t){t.G=0,t.I=-1,t.j&&((qg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Fl(t.l),t.l.length=0),t.j.ua())}function rm(t,e,n){let s=CI(n);if(s.i!="")e&&xo(s,e+"."+s.i),No(s,s.m);else{const r=Q.location;s=SI(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Vl(t.aa,function(r,i){Me(s,i,r)}),e=t.D,n=t.sa,e&&n&&Me(s,e,n),Me(s,"VER",t.ma),ki(t,s),s}function im(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Be(new Si({ib:!0})):new Be(t.qa),e.L=t.H,e}function om(){}M=om.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function Oo(){if(Bs&&!(10<=Number(sI)))throw Error("Environmental error: no available transport.")}Oo.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Ke.call(this),this.g=new Xg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!So(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!So(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ar(this)}nt(At,Ke);At.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Wl(Qe(t.hb,t,e))),pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=rm(t,null,t.W),ya(t)};At.prototype.close=function(){iu(this.g)};At.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,tc(this.g,e)}else this.v?(e={},e.__data__=Kl(t),tc(this.g,e)):tc(this.g,t)};At.prototype.M=function(){this.g.j=null,delete this.j,iu(this.g),delete this.g,At.Z.M.call(this)};function am(t){Ql.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(am,Ql);function cm(){Jl.call(this),this.status=1}nt(cm,Jl);function ar(t){this.g=t}nt(ar,om);ar.prototype.xa=function(){Je(this.g,"a")};ar.prototype.wa=function(t){Je(this.g,new am(t))};ar.prototype.va=function(t){Je(this.g,new cm)};ar.prototype.ua=function(){Je(this.g,"b")};Oo.prototype.createWebChannel=Oo.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;ua.NO_ERROR=0;ua.TIMEOUT=8;ua.HTTP_ERROR=6;Rg.COMPLETE="complete";xg.EventType=bi;bi.OPEN="a";bi.CLOSE="b";bi.ERROR="c";bi.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Be.prototype.listenOnce=Be.prototype.O;Be.prototype.getLastError=Be.prototype.La;Be.prototype.getLastErrorCode=Be.prototype.Da;Be.prototype.getStatus=Be.prototype.ba;Be.prototype.getResponseJson=Be.prototype.Qa;Be.prototype.getResponseText=Be.prototype.ga;Be.prototype.send=Be.prototype.ea;var zI=function(){return new Oo},KI=function(){return la()},nc=ua,WI=Rg,GI=ys,yf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},YI=Si,Ki=xg,XI=Be;const _f="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let cr="9.8.0";/**
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
 */const hs=new Cl("@firebase/firestore");function vf(){return hs.logLevel}function j(t,...e){if(hs.logLevel<=ge.DEBUG){const n=e.map(cu);hs.debug(`Firestore (${cr}): ${t}`,...n)}}function Dn(t,...e){if(hs.logLevel<=ge.ERROR){const n=e.map(cu);hs.error(`Firestore (${cr}): ${t}`,...n)}}function wf(t,...e){if(hs.logLevel<=ge.WARN){const n=e.map(cu);hs.warn(`Firestore (${cr}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function ke(t,e){t||Z()}function ee(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class ZI{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new QI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new _t(e)}}class eb{constructor(e,n,s){this.type="FirstParty",this.user=_t.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class tb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new eb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sb{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.p=n.token,new nb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function rb(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */lu.A=-1;class lm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=rb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function js(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ct(0,0))}static max(){return new ie(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ef(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class si{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends si{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends si{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class ri{constructor(e){this.fields=e,e.sort(vt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return js(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(ke(!!t),typeof t=="string"){let e=0;const n=ob.exec(t);if(ke(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hs(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hm(t){const e=t.mapValue.fields.__previous_value__;return uu(e)?hm(e):e}function ii(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class ab{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function _a(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ae.fromString(e))}static fromName(e){return new H(Ae.fromString(e).popFirst(5))}static empty(){return new H(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ae(e.slice()))}}/**
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
 */const Wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uu(t)?4:lb(t)?9007199254740991:10:Z()}function Gt(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ii(t).isEqual(ii(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=On(s.timestampValue),o=On(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Hs(s.bytesValue).isEqual(Hs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Fe(s.geoPointValue.latitude)===Fe(r.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Fe(s.integerValue)===Fe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Fe(s.doubleValue),o=Fe(r.doubleValue);return i===o?Po(i)===Po(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return js(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ef(i)!==Ef(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Gt(i[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function oi(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=fs(t),s=fs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Fe(r.integerValue||r.doubleValue),a=Fe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return If(t.timestampValue,e.timestampValue);case 4:return If(ii(t),ii(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Hs(r),a=Hs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ye(o[c],a[c]);if(l!==0)return l}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ye(Fe(r.latitude),Fe(i.latitude));return o!==0?o:ye(Fe(r.longitude),Fe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=zs(o[c],a[c]);if(l)return l}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Wi.mapValue&&i===Wi.mapValue)return 0;if(r===Wi.mapValue)return 1;if(i===Wi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ye(a[u],l[u]);if(h!==0)return h;const f=zs(o[a[u]],c[l[u]]);if(f!==0)return f}return ye(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Z()}}function If(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=On(t),s=On(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Ms(t){return zc(t)}function zc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=On(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=zc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${zc(s.fields[a])}`;return i+"}"}(t.mapValue):Z();var e,n}function Mo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function bf(t){return!!t&&"nullValue"in t}function Tf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function Mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Mr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mr(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Mr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ao(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){_s(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tt(Mr(this.value))}}function fm(t){const e=[];return _s(t.fields,(n,s)=>{const r=new vt([n]);if(ao(s)){const i=fm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ri(e)}/**
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
 */class it{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new it(e,0,ie.min(),ie.min(),Tt.empty(),0)}static newFoundDocument(e,n,s){return new it(e,1,n,ie.min(),s,0)}static newNoDocument(e,n){return new it(e,2,n,ie.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,ie.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function ub(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new ds(r,H.empty(),e)}function hb(t){return new ds(t.readTime,t.key,-1)}class ds{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ds(ie.min(),H.empty(),-1)}static max(){return new ds(ie.max(),H.empty(),-1)}}function fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Ye.RED,this.left=r!=null?r:Ye.EMPTY,this.right=i!=null?i:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ye(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(e){return new Cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class db{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Sf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new db(t,e,n,s,r,i,o)}function fu(t){const e=ee(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ms(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),e.P=n}return e.P}function pb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ms(s.value)}`;var s}).join(", ")}]`),_a(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ms(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ms(n)).join(",")),`Target(${e})`}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ib(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Gt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kf(t.startAt,e.startAt)&&kf(t.endAt,e.endAt)}function Wc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class gt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new gb(e,n,s):n==="array-contains"?new _b(e,s):n==="in"?new vb(e,s):n==="not-in"?new wb(e,s):n==="array-contains-any"?new Eb(e,s):new gt(e,n,s)}static V(e,n,s){return n==="in"?new mb(e,s):new yb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(zs(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.v(zs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class gb extends gt{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.v(n)}}class mb extends gt{constructor(e,n){super(e,"in",n),this.keys=dm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yb extends gt{constructor(e,n){super(e,"not-in",n),this.keys=dm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class _b extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&oi(n.arrayValue,this.value)}}class vb extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class wb extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class Eb extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>oi(this.value.arrayValue,s))}}class Ks{constructor(e,n){this.position=e,this.inclusive=n}}class Ls{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Af(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=zs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class $n{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function bb(t,e,n,s,r,i,o,a){return new $n(t,e,n,s,r,i,o,a)}function pu(t){return new $n(t)}function Tb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mu(t){for(const e of t.filters)if(e.S())return e.field;return null}function yu(t){return t.collectionGroup!==null}function Ws(t){const e=ee(t);if(e.D===null){e.D=[];const n=mu(e),s=gu(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Ls(n)),e.D.push(new Ls(vt.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ls(vt.keyField(),i))}}}return e.D}function ps(t){const e=ee(t);if(!e.C)if(e.limitType==="F")e.C=Sf(e.path,e.collectionGroup,Ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ws(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ls(i.field,o))}const s=e.endAt?new Ks(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ks(e.startAt.position,e.startAt.inclusive):null;e.C=Sf(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function Cb(t,e,n){return new $n(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return du(ps(t),ps(e))&&t.limitType===e.limitType}function pm(t){return`${fu(ps(t))}|lt:${t.limitType}`}function Gc(t){return`Query(target=${pb(ps(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Af(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ws(n),s)||n.endAt&&!function(r,i,o){const a=Af(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ws(n),s))}(t,e)}function Sb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gm(t){return(e,n)=>{let s=!1;for(const r of Ws(t)){const i=Ab(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ab(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?zs(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */function mm(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function ym(t){return{integerValue:""+t}}function kb(t,e){return cb(e)?ym(e):mm(t,e)}/**
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
 */class wa{constructor(){this._=void 0}}function Rb(t,e,n){return t instanceof ai?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ci?vm(t,e):t instanceof li?wm(t,e):function(s,r){const i=_m(s,r),o=Rf(i)+Rf(s.k);return Kc(i)&&Kc(s.k)?ym(o):mm(s.M,o)}(t,e)}function xb(t,e,n){return t instanceof ci?vm(t,e):t instanceof li?wm(t,e):n}function _m(t,e){return t instanceof Lo?Kc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ai extends wa{}class ci extends wa{constructor(e){super(),this.elements=e}}function vm(t,e){const n=Em(e);for(const s of t.elements)n.some(r=>Gt(r,s))||n.push(s);return{arrayValue:{values:n}}}class li extends wa{constructor(e){super(),this.elements=e}}function wm(t,e){let n=Em(e);for(const s of t.elements)n=n.filter(r=>!Gt(r,s));return{arrayValue:{values:n}}}class Lo extends wa{constructor(e,n){super(),this.M=e,this.k=n}}function Rf(t){return Fe(t.integerValue||t.doubleValue)}function Em(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nb{constructor(e,n){this.field=e,this.transform=n}}function Db(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ci&&s instanceof ci||n instanceof li&&s instanceof li?js(n.elements,s.elements,Gt):n instanceof Lo&&s instanceof Lo?Gt(n.k,s.k):n instanceof ai&&s instanceof ai}(t.transform,e.transform)}class Ob{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ea{}function Pb(t,e,n){t instanceof Ia?function(s,r,i){const o=s.value.clone(),a=Df(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(s,r,i){if(!co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Df(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Im(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Yc(t,e,n){t instanceof Ia?function(s,r,i){if(!co(s.precondition,r))return;const o=s.value.clone(),a=Of(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Nf(r),o).setHasLocalMutations()}(t,e,n):t instanceof lr?function(s,r,i){if(!co(s.precondition,r))return;const o=Of(s.fieldTransforms,i,r),a=r.data;a.setAll(Im(s)),a.setAll(o),r.convertToFoundDocument(Nf(r),a).setHasLocalMutations()}(t,e,n):function(s,r){co(s.precondition,r)&&r.convertToNoDocument(ie.min())}(t,e)}function Mb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=_m(s.transform,r||null);i!=null&&(n==null&&(n=Tt.empty()),n.set(s.field,i))}return n||null}function xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&js(n,s,(r,i)=>Db(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Nf(t){return t.isFoundDocument()?t.version:ie.min()}class Ia extends Ea{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class lr extends Ea{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Im(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Df(t,e,n){const s=new Map;ke(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,xb(o,a,n[r]))}return s}function Of(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Rb(i,o,e))}return s}class Lb extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ub extends Ea{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class $b{constructor(e){this.count=e}}/**
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
 */var $e,le;function Fb(t){switch(t){default:return Z();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function bm(t){if(t===void 0)return Dn("GRPC error has no .code"),_.UNKNOWN;switch(t){case $e.OK:return _.OK;case $e.CANCELLED:return _.CANCELLED;case $e.UNKNOWN:return _.UNKNOWN;case $e.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case $e.INTERNAL:return _.INTERNAL;case $e.UNAVAILABLE:return _.UNAVAILABLE;case $e.UNAUTHENTICATED:return _.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case $e.NOT_FOUND:return _.NOT_FOUND;case $e.ALREADY_EXISTS:return _.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return _.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case $e.ABORTED:return _.ABORTED;case $e.OUT_OF_RANGE:return _.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return _.UNIMPLEMENTED;case $e.DATA_LOSS:return _.DATA_LOSS;default:return Z()}}(le=$e||($e={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
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
 */const Vb=new We(H.comparator);function gs(){return Vb}const Bb=new We(H.comparator);function Xc(...t){let e=Bb;for(const n of t)e=e.insert(n.key,n);return e}function sc(){return new ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const jb=new We(H.comparator),Hb=new Ze(H.comparator);function De(...t){let e=Hb;for(const n of t)e=e.add(n);return e}const qb=new Ze(ye);function Tm(){return qb}/**
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
 */class ba{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n)),new ba(ie.min(),s,Tm(),gs(),De())}}class Ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ri(tt.EMPTY_BYTE_STRING,n,De(),De(),De())}}/**
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
 */class lo{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Cm{constructor(e,n){this.targetId=e,this.$=n}}class Sm{constructor(e,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Pf{constructor(){this.B=0,this.L=Lf(),this.U=tt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=De(),n=De(),s=De();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new Ri(this.U,this.q,e,n,s)}J(){this.K=!1,this.L=Lf()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class zb{constructor(e){this.nt=e,this.st=new Map,this.it=gs(),this.rt=Mf(),this.ot=new Ze(ye)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Wc(i))if(s===0){const o=new H(i.path);this.ct(n,o,it.newNoDocument(o,ie.min()))}else ke(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Wc(a.target)){const c=new H(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,it.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=De();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new ba(e,n,this.ot,this.it,s);return this.it=gs(),this.rt=Mf(),this.ot=new Ze(ye),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Pf,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ze(ye),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Pf),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Mf(){return new We(H.comparator)}function Lf(){return new We(H.comparator)}/**
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
 */const Kb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Wb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Gb{constructor(e,n){this.databaseId=e,this.N=n}}function Uo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(t,e){return t.N?e.toBase64():e.toUint8Array()}function Yb(t,e){return Uo(t,e.toTimestamp())}function nn(t){return ke(!!t),ie.fromTimestamp(function(e){const n=On(e);return new ct(n.seconds,n.nanos)}(t))}function vu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function km(t){const e=Ae.fromString(t);return ke(Nm(e)),e}function Qc(t,e){return vu(t.databaseId,e.path)}function rc(t,e){const n=km(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Rm(n))}function Jc(t,e){return vu(t.databaseId,e)}function Xb(t){const e=km(t);return e.length===4?Ae.emptyPath():Rm(e)}function Zc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rm(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:Qc(t,e),fields:n.value.mapValue.fields}}function Qb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(ke(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(ke(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:bm(c.code);return new D(l,c.message||"")}(o);n=new Sm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=rc(t,s.document.name),i=nn(s.document.updateTime),o=new Tt({mapValue:{fields:s.document.fields}}),a=it.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new lo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=rc(t,s.document),i=s.readTime?nn(s.readTime):ie.min(),o=it.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=rc(t,s.document),i=s.removedTargetIds||[];n=new lo([],i,r,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new $b(r),o=s.targetId;n=new Cm(o,i)}}return n}function Jb(t,e){let n;if(e instanceof Ia)n={update:Uf(t,e.key,e.value)};else if(e instanceof Lb)n={delete:Qc(t,e.key)};else if(e instanceof lr)n={update:Uf(t,e.key,e.data),updateMask:cT(e.fieldMask)};else{if(!(e instanceof Ub))return Z();n={verify:Qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ai)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof li)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lo)return{fieldPath:i.field.canonicalString(),increment:o.k};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Yb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(t,e.precondition)),n}function Zb(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?nn(s.updateTime):nn(r);return i.isEqual(ie.min())&&(i=nn(r)),new Ob(i,s.transformResults||[])}(n,e))):[]}function eT(t,e){return{documents:[Jc(t,e.path)]}}function tT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Jc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Tf(h.value))return{unaryFilter:{field:Is(h.field),op:"IS_NAN"}};if(bf(h.value))return{unaryFilter:{field:Is(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Tf(h.value))return{unaryFilter:{field:Is(h.field),op:"IS_NOT_NAN"}};if(bf(h.value))return{unaryFilter:{field:Is(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(h.field),op:iT(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Is(u.field),direction:rT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||_a(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function nT(t){let e=Xb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ke(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=xm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ls(Rs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,_a(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ks(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ks(f,h)}(n.endAt)),bb(e,r,o,i,a,"F",c,l)}function sT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xm(t){return t?t.unaryFilter!==void 0?[aT(t)]:t.fieldFilter!==void 0?[oT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>xm(e)).reduce((e,n)=>e.concat(n)):Z():[]}function rT(t){return Kb[t]}function iT(t){return Wb[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Rs(t){return vt.fromServerFormat(t.fieldPath)}function oT(t){return gt.create(Rs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}function aT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rs(t.unaryFilter.field);return gt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rs(t.unaryFilter.field);return gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rs(t.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rs(t.unaryFilter.field);return gt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}function cT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Pb(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Yc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Yc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&js(this.mutations,e.mutations,(n,s)=>xf(n,s))&&js(this.baseMutations,e.baseMutations,(n,s)=>xf(n,s))}}class wu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ke(e.mutations.length===s.length);let r=jb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new wu(e,n,s,r)}}/**
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
 */class fT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ns{constructor(e,n,s,r,i=ie.min(),o=ie.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class dT{constructor(e){this.Jt=e}}function pT(t){const e=nT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cb(e,e.limit,"L"):e}/**
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
 */class gT{constructor(){this.qe=new mT}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(ds.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class mT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ze(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ze(Ae.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Gs(0)}static yn(){return new Gs(-1)}}/**
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
 */async function Ni(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==lT)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class yT{constructor(){this.changes=new ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _T{constructor(e,n,s){this.ds=e,this.Bs=n,this.indexManager=s}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Us(e,n,s))}Us(e,n,s){return this.ds.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}qs(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Ks(e,n){return this.ds.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.qs(n,s))}Qs(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.js(e,n.path):yu(n)?this.Ws(e,n,s):this.zs(e,n,s)}js(e,n){return this.Ls(e,new H(n)).next(s=>{let r=Xc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ws(e,n,s){const r=n.collectionGroup;let i=Xc();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new $n(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.zs(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}zs(e,n,s){let r;return this.ds.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=it.newInvalidDocument(c),r=r.insert(c,l)),Yc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{_u(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class Eu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hs=s,this.Js=r}static Ys(e,n){let s=De(),r=De();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Eu(e,n.fromCache,s,r)}}/**
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
 */class vT{constructor(){this.Xs=!1}initialize(e,n){this.Zs=e,this.indexManager=n,this.Xs=!0}Qs(e,n,s,r){return this.ti(e,n).next(i=>i||this.ei(e,n,r,s)).next(i=>i||this.ni(e,n))}ti(e,n){return A.resolve(null)}ei(e,n,s,r){return Tb(n)||r.isEqual(ie.min())?this.ni(e,n):this.Zs.Ks(e,s).next(i=>{const o=this.si(n,i);return this.ii(n,o,s,r)?this.ni(e,n):(vf()<=ge.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gc(n)),this.ri(e,o,n,ub(r,-1)))})}si(e,n){let s=new Ze(gm(e));return n.forEach((r,i)=>{_u(e,i)&&(s=s.add(i))}),s}ii(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,n){return vf()<=ge.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Gc(n)),this.Zs.Qs(e,n,ds.min())}ri(e,n,s,r){return this.Zs.Qs(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class wT{constructor(e,n,s,r){this.persistence=e,this.oi=n,this.M=r,this.ui=new We(ye),this.ai=new ur(i=>fu(i),du),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(s)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new _T(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ui))}}function ET(t,e,n,s){return new wT(t,e,n,s)}async function Dm(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.Bs.getAllMutationBatches(s).next(i=>(r=i,n.li(e),n.Bs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=De();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.fi.Ks(s,c).next(l=>({di:l,removedBatchIds:o,addedBatchIds:a}))})})}function IT(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(m=>{const w=c.docVersions.get(p);ke(w!==null),m.version.compareTo(w)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.Bs.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,r))})}function Om(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function bT(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});r=n.ui;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.fs.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.fs.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(p,m,w){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,f,l)&&a.push(n.fs.updateTargetData(i,f))});let c=gs();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(TT(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(ie.min())){const l=n.fs.getLastRemoteSnapshotVersion(i).next(u=>n.fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.fi.Gs(i,c)).next(()=>c)}).then(i=>(n.ui=r,i))}function TT(t,e,n){let s=De();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=gs();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(ie.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):j("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function CT(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(s,e)))}function ST(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.fs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.fs.allocateTargetId(s).next(o=>(r=new ns(e,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(e,s.targetId)),s})}async function el(t,e,n){const s=ee(t),r=s.ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!xi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ui=s.ui.remove(e),s.ai.delete(r.target)}function $f(t,e,n){const s=ee(t);let r=ie.min(),i=De();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.ai.get(l);return h!==void 0?A.resolve(u.ui.get(h)):u.fs.getTargetData(c,l)}(s,o,ps(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.oi.Qs(o,e,n?r:ie.min(),n?i:De())).next(a=>(AT(s,Sb(e),a),{documents:a,_i:i})))}function AT(t,e,n){let s=ie.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ci.set(e,s)}/**
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
 */class kT{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,n){return A.resolve(this.yi.get(n))}saveBundleMetadata(e,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:nn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.pi.get(n))}saveNamedQuery(e,n){return this.pi.set(n.name,function(s){return{name:s.name,query:pT(s.bundledQuery),readTime:nn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class RT{constructor(){this.overlays=new We(H.comparator),this.Ii=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ii.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ii.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=sc(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new We((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=sc(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=sc(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.Ii.get(r.largestBatchId).delete(s.key);this.Ii.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new fT(n,s));let i=this.Ii.get(n);i===void 0&&(i=De(),this.Ii.set(n,i)),this.Ii.set(n,i.add(s.key))}}/**
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
 */class Iu{constructor(){this.Ti=new Ze(He.Ei),this.Ai=new Ze(He.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,n){const s=new He(e,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Pi(new He(e,n))}Vi(e,n){e.forEach(s=>this.removeReference(s,n))}vi(e){const n=new H(new Ae([])),s=new He(n,e),r=new He(n,e+1),i=[];return this.Ai.forEachInRange([s,r],o=>{this.Pi(o),i.push(o.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const n=new H(new Ae([])),s=new He(n,e),r=new He(n,e+1);let i=De();return this.Ai.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class He{constructor(e,n){this.key=e,this.Ci=n}static Ei(e,n){return H.comparator(e.key,n.key)||ye(e.Ci,n.Ci)}static Ri(e,n){return ye(e.Ci,n.Ci)||H.comparator(e.key,n.key)}}/**
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
 */class xT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new Ze(He.Ei)}checkEmpty(e){return A.resolve(this.Bs.length===0)}addMutationBatch(e,n,s,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new hT(i,n,s,r);this.Bs.push(o);for(const a of r)this.Ni=this.Ni.add(new He(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Mi(s),i=r<0?0:r;return A.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(e){return A.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new He(n,0),r=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([s,r],o=>{const a=this.ki(o.Ci);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ze(ye);return n.forEach(r=>{const i=new He(r,0),o=new He(r,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([i,o],a=>{s=s.add(a.Ci)})}),A.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new He(new H(i),0);let a=new Ze(ye);return this.Ni.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Ci)),!0)},o),A.resolve(this.Oi(a))}Oi(e){const n=[];return e.forEach(s=>{const r=this.ki(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ke(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return A.forEach(n.mutations,r=>{const i=new He(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=s})}_n(e){}containsKey(e,n){const s=new He(n,0),r=this.Ni.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,A.resolve()}Fi(e,n){return this.Mi(e)}Mi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}ki(e){const n=this.Mi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class NT{constructor(e){this.$i=e,this.docs=new We(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let s=gs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():it.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=gs();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||fb(hb(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){Z()}Bi(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new DT(this)}getSize(e){return A.resolve(this.size)}}class DT extends yT{constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
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
 */class OT{constructor(e){this.persistence=e,this.Li=new ur(n=>fu(n),du),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Iu,this.targetCount=0,this.Ki=Gs.gn()}forEachTarget(e,n){return this.Li.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),A.resolve()}Tn(e){this.Li.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ki=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Tn(n),A.resolve()}removeTargetData(e,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Li.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.qi.bi(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.qi.Vi(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qi.vi(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qi.Di(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.qi.containsKey(n))}}/**
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
 */class PT{constructor(e,n){this.Gi={},this.overlays={},this.es=new lu(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new OT(this),this.indexManager=new gT,this.ds=function(s){return new NT(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new dT(n),this._s=new kT(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Gi[e.toKey()];return s||(s=new xT(n,this.referenceDelegate),this.Gi[e.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new MT(this.es.next());return this.referenceDelegate.ji(),s(r).next(i=>this.referenceDelegate.Wi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}zi(e,n){return A.or(Object.values(this.Gi).map(s=>()=>s.containsKey(e,n)))}}class MT extends uT{constructor(e){super(),this.currentSequenceNumber=e}}class bu{constructor(e){this.persistence=e,this.Hi=new Iu,this.Ji=null}static Yi(e){return new bu(e)}get Xi(){if(this.Ji)return this.Ji;throw Z()}addReference(e,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Xi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Hi.vi(n.targetId).forEach(r=>this.Xi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ji(){this.Ji=new Set}Wi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xi,s=>{const r=H.fromPath(s);return this.Zi(e,r).next(i=>{i||n.removeEntry(r,ie.min())})}).next(()=>(this.Ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zi(e,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(e){return 0}Zi(e,n){return A.or([()=>A.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zi(e,n)])}}class Ff{constructor(){this.activeTargetIds=Tm()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LT{constructor(){this.Ur=new Ff,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ff,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UT{Kr(e){}shutdown(){}}/**
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
 */class Vf{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const $T={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class FT{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}/**
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
 */class VT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.uo=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,r,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw wf("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i){return this.co(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=$T[e];return`${this.uo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new XI;a.listenOnce(WI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case nc.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case nc.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new D(f,h.message))}else o(new D(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(_.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zI(),o=KI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new YI({})),this.lo(a.initMessageHeaders,n,s),Cp()||Ap()||P_()||kp()||M_()||Sp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new FT({Jr:m=>{h?j("Connection","Not sending because WebChannel is closed:",m):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",m),l.send(m))},Yr:()=>l.close()}),p=(m,w,v)=>{m.listen(w,C=>{try{v(C)}catch(P){setTimeout(()=>{throw P},0)}})};return p(l,Ki.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),p(l,Ki.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),f.ro())}),p(l,Ki.EventType.ERROR,m=>{h||(h=!0,wf("Connection","WebChannel transport errored:",m),f.ro(new D(_.UNAVAILABLE,"The operation could not be completed")))}),p(l,Ki.EventType.MESSAGE,m=>{var w;if(!h){const v=m.data[0];ke(!!v);const C=v,P=C.error||((w=C[0])===null||w===void 0?void 0:w.error);if(P){j("Connection","WebChannel received error:",P);const B=P.status;let F=function(ce){const fe=$e[ce];if(fe!==void 0)return bm(fe)}(B),ne=P.message;F===void 0&&(F=_.INTERNAL,ne="Unknown error status: "+B+" with message "+P.message),h=!0,f.ro(new D(F,ne)),l.close()}else j("Connection","WebChannel received:",v),f.oo(v)}}),p(o,GI.STAT_EVENT,m=>{m.stat===yf.PROXY?j("Connection","Detected buffering proxy"):m.stat===yf.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}function ic(){return typeof document!="undefined"?document:null}/**
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
 */function Ta(t){return new Gb(t,!0)}class Pm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Mm{constructor(e,n,s,r,i,o,a,c){this.Yn=e,this.Vo=s,this.vo=r,this.So=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Pm(e,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Do===n&&this.Qo(s,r)},s=>{e(()=>{const r=new D(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(r)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(r=>{s(()=>this.jo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Yn.enqueueAndForget(()=>this.Do===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BT extends Mm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Qb(this.M,e),s=function(r){if(!("targetChange"in r))return ie.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ie.min():i.readTime?nn(i.readTime):ie.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=Zc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Wc(a)?{documents:eT(r,a)}:{query:tT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Am(r,i.resumeToken):i.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=Uo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=sT(this.M,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=Zc(this.M),n.removeTarget=e,this.Lo(n)}}class jT extends Mm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Zb(e.writeResults,e.commitTime),s=nn(e.commitTime);return this.listener.tu(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Zc(this.M),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Jb(this.M,s))};this.Lo(n)}}/**
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
 */class HT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.M=r,this.su=!1}iu(){if(this.su)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(_.UNKNOWN,r.toString())})}_o(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new D(_.UNKNOWN,r.toString())})}terminate(){this.su=!0}}class qT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Dn(n),this.uu=!1):j("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class zT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{vs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.wu.add(4),await Di(c),c.yu.set("Unknown"),c.wu.delete(4),await Ca(c)}(this))})}),this.yu=new qT(s,r)}}async function Ca(t){if(vs(t))for(const e of t.mu)await e(!0)}async function Di(t){for(const e of t.mu)await e(!1)}function Lm(t,e){const n=ee(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Su(n)?Cu(n):hr(n).Mo()&&Tu(n,e))}function Um(t,e){const n=ee(t),s=hr(n);n._u.delete(e),s.Mo()&&$m(n,e),n._u.size===0&&(s.Mo()?s.$o():vs(n)&&n.yu.set("Unknown"))}function Tu(t,e){t.pu.Z(e.targetId),hr(t).Ho(e)}function $m(t,e){t.pu.Z(e),hr(t).Jo(e)}function Cu(t){t.pu=new zb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),hr(t).start(),t.yu.au()}function Su(t){return vs(t)&&!hr(t).ko()&&t._u.size>0}function vs(t){return ee(t).wu.size===0}function Fm(t){t.pu=void 0}async function KT(t){t._u.forEach((e,n)=>{Tu(t,e)})}async function WT(t,e){Fm(t),Su(t)?(t.yu.lu(e),Cu(t)):t.yu.set("Unknown")}async function GT(t,e,n){if(t.yu.set("Online"),e instanceof Sm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s._u.delete(o),s.pu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $o(t,s)}else if(e instanceof lo?t.pu.ut(e):e instanceof Cm?t.pu._t(e):t.pu.ht(e),!n.isEqual(ie.min()))try{const s=await Om(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.pu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r._u.get(c);l&&r._u.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r._u.get(a);if(!c)return;r._u.set(a,c.withResumeToken(tt.EMPTY_BYTE_STRING,c.snapshotVersion)),$m(r,a);const l=new ns(c.target,a,1,c.sequenceNumber);Tu(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await $o(t,s)}}async function $o(t,e,n){if(!xi(e))throw e;t.wu.add(1),await Di(t),t.yu.set("Offline"),n||(n=()=>Om(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Ca(t)})}function Vm(t,e){return e().catch(n=>$o(t,n,e))}async function Sa(t){const e=ee(t),n=Pn(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;YT(e);)try{const r=await CT(e.localStore,s);if(r===null){e.du.length===0&&n.$o();break}s=r.batchId,XT(e,r)}catch(r){await $o(e,r)}Bm(e)&&jm(e)}function YT(t){return vs(t)&&t.du.length<10}function XT(t,e){t.du.push(e);const n=Pn(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function Bm(t){return vs(t)&&!Pn(t).ko()&&t.du.length>0}function jm(t){Pn(t).start()}async function QT(t){Pn(t).nu()}async function JT(t){const e=Pn(t);for(const n of t.du)e.Zo(n.mutations)}async function ZT(t,e,n){const s=t.du.shift(),r=wu.from(s,e,n);await Vm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Sa(t)}async function eC(t,e){e&&Pn(t).Xo&&await async function(n,s){if(r=s.code,Fb(r)&&r!==_.ABORTED){const i=n.du.shift();Pn(n).Fo(),await Vm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Sa(n)}var r}(t,e),Bm(t)&&jm(t)}async function Bf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=vs(n);n.wu.add(3),await Di(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Ca(n)}async function tC(t,e){const n=ee(t);e?(n.wu.delete(2),await Ca(n)):e||(n.wu.add(2),await Di(n),n.yu.set("Unknown"))}function hr(t){return t.Iu||(t.Iu=function(e,n,s){const r=ee(e);return r.iu(),new BT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:KT.bind(null,t),eo:WT.bind(null,t),zo:GT.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Su(t)?Cu(t):t.yu.set("Unknown")):(await t.Iu.stop(),Fm(t))})),t.Iu}function Pn(t){return t.Tu||(t.Tu=function(e,n,s){const r=ee(e);return r.iu(),new jT(n,r.So,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{Xr:QT.bind(null,t),eo:eC.bind(null,t),eu:JT.bind(null,t),tu:ZT.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Sa(t)):(await t.Tu.stop(),t.du.length>0&&(j("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Au{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Au(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),xi(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Us{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Xc(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Us;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class jf{constructor(){this.Eu=new We(H.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Z():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ys{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ys(e,n,Us.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class nC{constructor(){this.Ru=void 0,this.listeners=[]}}class sC{constructor(){this.queries=new ur(e=>pm(e),va),this.onlineState="Unknown",this.bu=new Set}}async function Hm(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nC),r)try{i.Ru=await n.onListen(s)}catch(o){const a=ku(o,`Initialization of query '${Gc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.Ru&&e.Vu(i.Ru)&&Ru(n)}async function qm(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function rC(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.Ru=r}}s&&Ru(n)}function iC(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Ru(t){t.bu.forEach(e=>{e.next()})}class zm{constructor(e,n,s){this.query=e,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ys(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}/**
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
 */class Km{constructor(e){this.key=e}}class Wm{constructor(e){this.key=e}}class oC{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.current=!1,this.Ku=De(),this.mutatedKeys=De(),this.Gu=gm(e),this.Qu=new Us(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new jf,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=_u(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?m!==w&&(s.track({type:3,doc:p}),v=!0):this.Hu(f,p)||(s.track({type:2,doc:p}),v=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),v=!0):f&&!p&&(s.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(p?(o=o.add(p),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,ii:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((l,u)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return p(h)-p(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ys(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new jf,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=De(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Wm(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Km(s))}),n}ta(e){this.Uu=e._i,this.Ku=De();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ea(){return Ys.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class aC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class cC{constructor(e){this.key=e,this.na=!1}}class lC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new ur(a=>pm(a),va),this.ra=new Map,this.oa=new Set,this.ua=new We(H.comparator),this.aa=new Map,this.ca=new Iu,this.ha={},this.la=new Map,this.fa=Gs.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function uC(t,e){const n=wC(t);let s,r;const i=n.ia.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ea();else{const o=await ST(n.localStore,ps(e));n.isPrimaryClient&&Lm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await hC(n,e,s,a==="current")}return r}async function hC(t,e,n,s){t._a=(u,h,f)=>async function(p,m,w,v){let C=m.view.Wu(w);C.ii&&(C=await $f(p.localStore,m.query,!1).then(({documents:F})=>m.view.Wu(F,C)));const P=v&&v.targetChanges.get(m.targetId),B=m.view.applyChanges(C,p.isPrimaryClient,P);return qf(p,m.targetId,B.Xu),B.snapshot}(t,u,h,f);const r=await $f(t.localStore,e,!0),i=new oC(e,r._i),o=i.Wu(r.documents),a=Ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);qf(t,n,c.Xu);const l=new aC(e,n,i);return t.ia.set(e,l),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),c.snapshot}async function fC(t,e){const n=ee(t),s=n.ia.get(e),r=n.ra.get(s.targetId);if(r.length>1)return n.ra.set(s.targetId,r.filter(i=>!va(i,e))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await el(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Um(n.remoteStore,s.targetId),tl(n,s.targetId)}).catch(Ni)):(tl(n,s.targetId),await el(n.localStore,s.targetId,!0))}async function dC(t,e,n){const s=EC(t);try{const r=await function(i,o){const a=ee(i),c=ct.now(),l=o.reduce((h,f)=>h.add(f.key),De());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.fi.Ks(h,l).next(f=>{u=f;const p=[];for(const m of o){const w=Mb(m,u.get(m.key));w!=null&&p.push(new lr(m.key,w,fm(w.value.mapValue),An.exists(!0)))}return a.Bs.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ha[i.currentUser.toKey()];c||(c=new We(ye)),c=c.insert(o,a),i.ha[i.currentUser.toKey()]=c}(s,r.batchId,n),await Oi(s,r.changes),await Sa(s.remoteStore)}catch(r){const i=ku(r,"Failed to persist write");n.reject(i)}}async function Gm(t,e){const n=ee(t);try{const s=await bT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.aa.get(i);o&&(ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.na=!0:r.modifiedDocuments.size>0?ke(o.na):r.removedDocuments.size>0&&(ke(o.na),o.na=!1))}),await Oi(n,s,e)}catch(s){await Ni(s)}}function Hf(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ia.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Ru(a)}(s.eventManager,e),r.length&&s.sa.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pC(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.aa.get(e),i=r&&r.key;if(i){let o=new We(H.comparator);o=o.insert(i,it.newNoDocument(i,ie.min()));const a=De().add(i),c=new ba(ie.min(),new Map,new Ze(ye),o,a);await Gm(s,c),s.ua=s.ua.remove(i),s.aa.delete(e),xu(s)}else await el(s.localStore,e,!1).then(()=>tl(s,e,n)).catch(Ni)}async function gC(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await IT(n.localStore,e);Xm(n,s,null),Ym(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Oi(n,r)}catch(r){await Ni(r)}}async function mC(t,e,n){const s=ee(t);try{const r=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.Bs.lookupMutationBatch(c,o).next(u=>(ke(u!==null),l=u.keys(),a.Bs.removeMutationBatch(c,u))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,l))})}(s.localStore,e);Xm(s,e,n),Ym(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Oi(s,r)}catch(r){await Ni(r)}}function Ym(t,e){(t.la.get(e)||[]).forEach(n=>{n.resolve()}),t.la.delete(e)}function Xm(t,e,n){const s=ee(t);let r=s.ha[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.ha[s.currentUser.toKey()]=r}}function tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach(s=>{t.ca.containsKey(s)||Qm(t,s)})}function Qm(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);n!==null&&(Um(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),xu(t))}function qf(t,e,n){for(const s of n)s instanceof Km?(t.ca.addReference(s.key,e),yC(t,s)):s instanceof Wm?(j("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||Qm(t,s.key)):Z()}function yC(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(j("SyncEngine","New document in limbo: "+n),t.oa.add(s),xu(t))}function xu(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new H(Ae.fromString(e)),s=t.fa.next();t.aa.set(s,new cC(n)),t.ua=t.ua.insert(n,s),Lm(t.remoteStore,new ns(ps(pu(n.path)),s,2,lu.A))}}async function Oi(t,e,n){const s=ee(t),r=[],i=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Eu.Ys(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sa.zo(r),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Hs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Js,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!xi(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.ui.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);l.ui=l.ui.insert(h,m)}}}(s.localStore,i))}async function _C(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Dm(n.localStore,e);n.currentUser=e,function(r,i){r.la.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,i))})}),r.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Oi(n,s.di)}}function vC(t,e){const n=ee(t),s=n.aa.get(e);if(s&&s.na)return De().add(s.key);{let r=De();const i=n.ra.get(e);if(!i)return r;for(const o of i){const a=n.ia.get(o);r=r.unionWith(a.view.ju)}return r}}function wC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pC.bind(null,e),e.sa.zo=rC.bind(null,e.eventManager),e.sa.wa=iC.bind(null,e.eventManager),e}function EC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mC.bind(null,e),e}class IC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return ET(this.persistence,new vT,e.initialUser,this.M)}ya(e){return new PT(bu.Yi,this.M)}ga(e){return new LT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_C.bind(null,this.syncEngine),await tC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sC}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new VT(r));var r;return function(i,o,a,c){return new HT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Hf(this.syncEngine,a,0),o=Vf.vt()?new Vf:new UT,new zT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new lC(s,r,i,o,a,c);return l&&(u.da=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);j("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Di(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class TC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=_t.UNAUTHENTICATED,this.clientId=lm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ku(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function CC(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function SC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AC(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Bf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Bf(e.remoteStore,i)),t.onlineComponents=e}async function AC(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await CC(t,new IC)),t.offlineComponents}async function Zm(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await SC(t,new bC)),t.onlineComponents}function kC(t){return Zm(t).then(e=>e.syncEngine)}async function ey(t){const e=await Zm(t),n=e.eventManager;return n.onListen=uC.bind(null,e.syncEngine),n.onUnlisten=fC.bind(null,e.syncEngine),n}function RC(t,e,n={}){const s=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Jm({next:h=>{i.enqueueAndForget(()=>qm(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zm(pu(o.path),l,{includeMetadataChanges:!0,ku:!0});return Hm(r,u)}(await ey(t),t.asyncQueue,e,n,s)),s.promise}function xC(t,e,n={}){const s=new tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Jm({next:h=>{i.enqueueAndForget(()=>qm(r,u)),h.fromCache&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new zm(o,l,{includeMetadataChanges:!0,ku:!0});return Hm(r,u)}(await ey(t),t.asyncQueue,e,n,s)),s.promise}const zf=new Map;/**
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
 */function ty(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NC(t,e,n,s){if(e===!0&&s===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!H.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(H.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Aa(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Gf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Nu{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1,e instanceof qs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(r.options.projectId)}(e))}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new JI;switch(n.type){case"gapi":const s=n.client;return ke(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new tb(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zf.get(e);n&&(j("ComponentProvider","Removing Datastore"),zf.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class Fn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class kn extends Fn{constructor(e,n,s){super(e,n,pu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new H(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function DC(t,e,...n){if(t=Ve(t),ty("collection","path",e),t instanceof Nu){const s=Ae.fromString(e,...n);return Wf(s),new kn(t,null,s)}{if(!(t instanceof mt||t instanceof kn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Wf(s),new kn(t.firestore,null,s)}}function ny(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=lm.R()),ty("doc","path",e),t instanceof Nu){const s=Ae.fromString(e,...n);return Kf(s),new mt(t,null,new H(s))}{if(!(t instanceof mt||t instanceof kn))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return Kf(s),new mt(t.firestore,t instanceof kn?t.converter:null,new H(s))}}/**
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
 */class OC{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Pm(this,"async_queue_retry"),this.Qa=()=>{const n=ic();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new tn;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!xi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const n=this.Fa.then(()=>(this.qa=!0,e().catch(s=>{this.Ua=s,this.qa=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Dn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(e,n,s){this.ja(),this.Ga.indexOf(e)>-1&&(n=0);const r=Au.createAndSchedule(this,e,n,s,i=>this.Ha(i));return this.La.push(r),r}ja(){this.Ua&&Z()}verifyOperationInProgress(){}async Ja(){let e;do e=this.Fa,await e;while(e!==this.Fa)}Ya(e){for(const n of this.La)if(n.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const n=this.La.indexOf(e);this.La.splice(n,1)}}class fr extends Nu{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new OC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sy(this),this._firestoreClient.terminate()}}function PC(t=kl()){return ea(t,"firestore").getImmediate()}function Du(t){return t._firestoreClient||sy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new ab(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new TC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class ka{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(tt.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ra{constructor(e){this._methodName=e}}/**
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
 */class Ou{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const MC=/^__.*__$/;class LC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}class ry{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Pu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Pu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.rc(e),r}oc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.nc({path:s,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return Fo(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(e.length===0)throw this.ac("Document fields must not be empty");if(iy(this.ec)&&MC.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class UC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Ta(e)}lc(e,n,s,r=!1){return new Pu({ec:e,methodName:n,hc:s,path:vt.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Pi(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new UC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oy(t,e,n,s,r,i={}){const o=t.lc(i.merge||i.mergeFields?2:0,e,n,r);Lu("Data must be an object, but it was:",o,s);const a=cy(s,o);let c,l;if(i.merge)c=new ri(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=nl(e,h,n);if(!o.contains(f))throw new D(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uy(u,f)||u.push(f)}c=new ri(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new LC(new Tt(a),c,l)}class xa extends Ra{_toFieldTransform(e){if(e.ec!==2)throw e.ec===1?e.ac(`${this._methodName}() can only appear at the top level of your update data`):e.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xa}}class Mu extends Ra{_toFieldTransform(e){return new Nb(e.path,new ai)}isEqual(e){return e instanceof Mu}}function $C(t,e,n,s){const r=t.lc(1,e,n);Lu("Data must be an object, but it was:",r,s);const i=[],o=Tt.empty();_s(s,(c,l)=>{const u=Uu(e,c,n);l=Ve(l);const h=r.oc(u);if(l instanceof xa)i.push(u);else{const f=Mi(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new ri(i);return new ry(o,a,r.fieldTransforms)}function FC(t,e,n,s,r,i){const o=t.lc(1,e,n),a=[nl(e,s,n)],c=[r];if(i.length%2!=0)throw new D(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(nl(e,i[f])),c.push(i[f+1]);const l=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!uy(l,a[f])){const p=a[f];let m=c[f];m=Ve(m);const w=o.oc(p);if(m instanceof xa)l.push(p);else{const v=Mi(m,w);v!=null&&(l.push(p),u.set(p,v))}}const h=new ri(l);return new ry(u,h,o.fieldTransforms)}function ay(t,e,n,s=!1){return Mi(n,t.lc(s?4:3,e))}function Mi(t,e){if(ly(t=Ve(t)))return Lu("Unsupported field value:",e,t),cy(t,e);if(t instanceof Ra)return function(n,s){if(!iy(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&e.ec!==4)throw e.ac("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Mi(o,s.uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kb(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ct.fromDate(n);return{timestampValue:Uo(s.M,r)}}if(n instanceof ct){const r=new ct(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Uo(s.M,r)}}if(n instanceof Ou)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xs)return{bytesValue:Am(s.M,n._byteString)};if(n instanceof mt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ac(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${Aa(n)}`)}(t,e)}function cy(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(s,r)=>{const i=Mi(r,e.sc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ly(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Ou||t instanceof Xs||t instanceof mt||t instanceof Ra)}function Lu(t,e,n){if(!ly(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Aa(n);throw s==="an object"?e.ac(t+" a custom object"):e.ac(t+" "+s)}}function nl(t,e,n){if((e=Ve(e))instanceof ka)return e._internalPath;if(typeof e=="string")return Uu(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const VC=new RegExp("[~\\*/\\[\\]]");function Uu(t,e,n){if(e.search(VC)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ka(...e.split("."))._internalPath}catch{throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new D(_.INVALID_ARGUMENT,a+t+c)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $u{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Na("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BC extends $u{data(){return super.data()}}function Na(t,e){return typeof e=="string"?Uu(t,e):e instanceof ka?e._internalPath:e._delegate._internalPath}/**
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
 */class Cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hy extends $u{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Na("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends hy{data(e={}){return super.data(e)}}class jC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Cr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new Cr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Cr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:HC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function qC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}function zC(t,...e){for(const n of e)t=n._apply(t);return t}class KC extends Da{constructor(e,n,s){super(),this._c=e,this.wc=n,this.mc=s,this.type="where"}_apply(e){const n=Pi(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new D(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Xf(u,l);const p=[];for(const m of u)p.push(Yf(a,r,m));h={arrayValue:{values:p}}}else h=Yf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Xf(u,l),h=ay(o,i,u,l==="in"||l==="not-in");const f=gt.create(c,l,h);return function(p,m){if(m.S()){const v=mu(p);if(v!==null&&!v.isEqual(m.field))throw new D(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${m.field.toString()}'`);const C=gu(p);C!==null&&dy(p,m.field,C)}const w=function(v,C){for(const P of v.filters)if(C.indexOf(P.op)>=0)return P.op;return null}(p,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(w!==null)throw w===m.op?new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new D(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${w.toString()}' filters.`)}(r,f),f}(e._query,"where",n,e.firestore._databaseId,this._c,this.wc,this.mc);return new Fn(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new $n(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function WC(t,e,n){const s=e,r=Na("where",t);return new KC(r,s,n)}class GC extends Da{constructor(e,n){super(),this._c=e,this.gc=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ls(r,i);return function(a,c){if(gu(a)===null){const l=mu(a);l!==null&&dy(a,l,c.field)}}(s,o),o}(e._query,this._c,this.gc);return new Fn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new $n(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function YC(t,e="asc"){const n=e,s=Na("orderBy",t);return new GC(s,n)}class XC extends Da{constructor(e,n,s){super(),this.type=e,this.Tc=n,this.Ec=s}_apply(e){const n=fy(e,this.type,this.Tc,this.Ec);return new Fn(e.firestore,e.converter,function(s,r){return new $n(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,n))}}function QR(...t){return new XC("startAt",t,!0)}class QC extends Da{constructor(e,n,s){super(),this.type=e,this.Tc=n,this.Ec=s}_apply(e){const n=fy(e,this.type,this.Tc,this.Ec);return new Fn(e.firestore,e.converter,function(s,r){return new $n(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,n))}}function JR(...t){return new QC("endAt",t,!0)}function fy(t,e,n,s){if(n[0]=Ve(n[0]),n[0]instanceof $u)return function(r,i,o,a,c){if(!a)throw new D(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Ws(r))if(u.field.isKeyField())l.push(Mo(i,a.key));else{const h=a.data.field(u.field);if(uu(h))throw new D(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new D(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ks(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,s);{const r=Pi(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new D(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<l.length;p++){const m=l[p];if(h[p].field.isKeyField()){if(typeof m!="string")throw new D(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!yu(i)&&m.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const w=i.path.child(Ae.fromString(m));if(!H.isDocumentKey(w))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const v=new H(w);f.push(Mo(o,v))}else{const w=ay(a,c,m);f.push(w)}}return new Ks(f,u)}(t._query,t.firestore._databaseId,r,e,n,s)}}function Yf(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new D(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yu(e)&&n.indexOf("/")!==-1)throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ae.fromString(n));if(!H.isDocumentKey(s))throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Mo(t,new H(s))}if(n instanceof mt)return Mo(t,n._key);throw new D(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Aa(n)}.`)}function Xf(t,e){if(!Array.isArray(t)||t.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new D(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function dy(t,e,n){if(!n.isEqual(e))throw new D(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class JC{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const s={};return _s(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Ou(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=hm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const n=On(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);ke(Nm(s));const r=new qs(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function py(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */function ZC(t){t=an(t,mt);const e=an(t.firestore,fr);return RC(Du(e),t._key).then(n=>t2(e,t,n))}class gy extends JC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function e2(t){t=an(t,Fn);const e=an(t.firestore,fr),n=Du(e),s=new gy(e);return qC(t._query),xC(n,t._query).then(r=>new jC(e,s,t,r))}function ZR(t,e,n){t=an(t,mt);const s=an(t.firestore,fr),r=py(t.converter,e,n);return Fu(s,[oy(Pi(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,An.none())])}function ex(t,e,n,...s){t=an(t,mt);const r=an(t.firestore,fr),i=Pi(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof ka?FC(i,"updateDoc",t._key,e,n,s):$C(i,"updateDoc",t._key,e),Fu(r,[o.toMutation(t._key,An.exists(!0))])}function tx(t,e){const n=an(t.firestore,fr),s=ny(t),r=py(t.converter,e);return Fu(n,[oy(Pi(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,An.exists(!1))]).then(()=>s)}function Fu(t,e){return function(n,s){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>dC(await kC(n),s,r)),r.promise}(Du(t),e)}function t2(t,e,n){const s=n.docs.get(e._key),r=new gy(t);return new hy(t,r,e._key,s,new Cr(n.hasPendingWrites,n.fromCache),e.converter)}function nx(){return new Mu("serverTimestamp")}(function(t,e=!0){(function(n){cr=n})(sr),is(new Nn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new fr(r,new ZI(n.getProvider("auth-internal")),new sb(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),qt(_f,"3.4.9",t),qt(_f,"3.4.9","esm2017")})();/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const my=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",dr=t=>my?Symbol(t):"_vr_"+t,n2=dr("rvlm"),Qf=dr("rvd"),Vu=dr("r"),yy=dr("rl"),sl=dr("rvl"),Ss=typeof window!="undefined";function s2(t){return t.__esModule||my&&t[Symbol.toStringTag]==="Module"}const be=Object.assign;function oc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const Lr=()=>{},r2=/\/$/,i2=t=>t.replace(r2,"");function ac(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=l2(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function o2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a2(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Qs(e.matched[s],n.matched[r])&&_y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!c2(t[n],e[n]))return!1;return!0}function c2(t,e){return Array.isArray(t)?Zf(t,e):Array.isArray(e)?Zf(e,t):t===e}function Zf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function l2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function u2(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),i2(t)}const h2=/^[^#]+#/;function f2(t,e){return t.replace(h2,"#")+e}function d2(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function p2(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=d2(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const rl=new Map;function g2(t,e){rl.set(t,e)}function m2(t){const e=rl.get(t);return rl.delete(t),e}let y2=()=>location.protocol+"//"+location.host;function vy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Jf(c,"")}return Jf(n,t)+s+r}function _2(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=vy(t,location),m=n.value,w=e.value;let v=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}v=w?f.position-w.position:0}else s(p);r.forEach(C=>{C(n.value,m,{delta:v,type:ui.pop,direction:v?v>0?Ur.forward:Ur.back:Ur.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(be({},f.state,{scroll:Oa()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function td(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Oa():null}}function v2(t){const{history:e,location:n}=window,s={value:vy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:y2()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=be({},e.state,td(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=be({},r.value,e.state,{forward:c,scroll:Oa()});i(u.current,u,!0);const h=be({},td(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function w2(t){t=u2(t);const e=v2(t),n=_2(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=be({location:"",base:t,go:s,createHref:f2.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function E2(t){return typeof t=="string"||t&&typeof t=="object"}function wy(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ey=dr("nf");var nd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nd||(nd={}));function Js(t,e){return be(new Error,{type:t,[Ey]:!0},e)}function pn(t,e){return t instanceof Error&&Ey in t&&(e==null||!!(t.type&e))}const sd="[^/]+?",I2={sensitive:!1,strict:!1,start:!0,end:!0},b2=/[.+*?^${}()[\]/\\]/g;function T2(t,e){const n=be({},I2,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(b2,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:w,optional:v,regexp:C}=f;i.push({name:m,repeatable:w,optional:v});const P=C||sd;if(P!==sd){p+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+F.message)}}let B=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(B=v&&l.length<2?`(?:/${B})`:"/"+B),v&&(B+="?"),r+=B,p+=20,v&&(p+=-8),w&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=i[f-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:w,optional:v}=p,C=m in l?l[m]:"";if(Array.isArray(C)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(C)?C.join("/"):C;if(!P)if(v)f.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function C2(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function S2(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=C2(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const A2={type:0,value:""},k2=/[a-zA-Z0-9_]/;function R2(t){if(!t)return[[]];if(t==="/")return[[A2]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:k2.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function x2(t,e,n){const s=T2(R2(t.path),n),r=be(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function N2(t,e){const n=[],s=new Map;e=id({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,m=O2(u);m.aliasOf=f&&f.record;const w=id(e,u),v=[m];if("alias"in u){const B=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of B)v.push(be({},m,{components:f?f.record.components:m.components,path:F,aliasOf:f?f.record:m}))}let C,P;for(const B of v){const{path:F}=B;if(h&&F[0]!=="/"){const ne=h.record.path,ce=ne[ne.length-1]==="/"?"":"/";B.path=h.record.path+(F&&ce+F)}if(C=x2(B,h,w),f?f.alias.push(C):(P=P||C,P!==C&&P.alias.push(C),p&&u.name&&!rd(C)&&o(u.name)),"children"in m){const ne=m.children;for(let ce=0;ce<ne.length;ce++)i(ne[ce],C,f&&f.children[ce])}f=f||C,c(C)}return P?()=>{o(P)}:Lr}function o(u){if(wy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&S2(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Iy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rd(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Js(1,{location:u});w=f.record.name,p=be(D2(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(P=>P.re.test(m)),f&&(p=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Js(1,{location:u,currentLocation:h});w=f.record.name,p=be({},h.params,u.params),m=f.stringify(p)}const v=[];let C=f;for(;C;)v.unshift(C.record),C=C.parent;return{name:w,path:m,params:p,matched:v,meta:M2(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function D2(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function O2(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:P2(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function P2(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M2(t){return t.reduce((e,n)=>be(e,n.meta),{})}function id(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Iy(t,e){return e.children.some(n=>n===t||Iy(t,n))}const by=/#/g,L2=/&/g,U2=/\//g,$2=/=/g,F2=/\?/g,Ty=/\+/g,V2=/%5B/g,B2=/%5D/g,Cy=/%5E/g,j2=/%60/g,Sy=/%7B/g,H2=/%7C/g,Ay=/%7D/g,q2=/%20/g;function Bu(t){return encodeURI(""+t).replace(H2,"|").replace(V2,"[").replace(B2,"]")}function z2(t){return Bu(t).replace(Sy,"{").replace(Ay,"}").replace(Cy,"^")}function il(t){return Bu(t).replace(Ty,"%2B").replace(q2,"+").replace(by,"%23").replace(L2,"%26").replace(j2,"`").replace(Sy,"{").replace(Ay,"}").replace(Cy,"^")}function K2(t){return il(t).replace($2,"%3D")}function W2(t){return Bu(t).replace(by,"%23").replace(F2,"%3F")}function G2(t){return t==null?"":W2(t).replace(U2,"%2F")}function Vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Y2(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ty," "),o=i.indexOf("="),a=Vo(o<0?i:i.slice(0,o)),c=o<0?null:Vo(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function od(t){let e="";for(let n in t){const s=t[n];if(n=K2(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&il(i)):[s&&il(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function X2(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function _r(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Js(4,{from:n,to:e})):h instanceof Error?a(h):E2(h)?a(Js(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function cc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Q2(a)){const l=(a.__vccOpts||a)[e];l&&r.push(yn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=s2(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yn(f,n,s,i,o)()}))}}return r}function Q2(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ad(t){const e=Cn(Vu),n=Cn(yy),s=Ht(()=>e.resolve(Sr(t.to))),r=Ht(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Qs.bind(null,u));if(f>-1)return f;const p=cd(c[l-2]);return l>1&&cd(u)===p&&h[h.length-1].path!==p?h.findIndex(Qs.bind(null,c[l-2])):f}),i=Ht(()=>r.value>-1&&eS(n.params,s.value.params)),o=Ht(()=>r.value>-1&&r.value===n.matched.length-1&&_y(n.params,s.value.params));function a(c={}){return Z2(c)?e[Sr(t.replace)?"replace":"push"](Sr(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:Ht(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const J2=Zd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ad,setup(t,{slots:e}){const n=nr(ad(t)),{options:s}=Cn(Vu),r=Ht(()=>({[ld(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ld(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),pr=J2;function Z2(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ld=(t,e,n)=>t!=null?t:e!=null?e:n,tS=Zd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Cn(sl),r=Ht(()=>t.route||s.value),i=Cn(Qf,0),o=Ht(()=>r.value.matched[i]);Zi(Qf,i+1),Zi(n2,o),Zi(sl,r);const a=V0();return eo(()=>[a.value,o.value,t.name],([c,l,u],[h,f,p])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Qs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return ud(n.default,{Component:u,route:c});const f=l.props[t.name],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,w=Tl(u,be({},p,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return ud(n.default,{Component:w,route:c})||w}}});function ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ky=tS;function nS(t){const e=N2(t.routes,t),n=t.parseQuery||Y2,s=t.stringifyQuery||od,r=t.history,i=_r(),o=_r(),a=_r(),c=B0(dn);let l=dn;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,E=>""+E),h=oc.bind(null,G2),f=oc.bind(null,Vo);function p(E,V){let N,q;return wy(E)?(N=e.getRecordMatcher(E),q=V):q=E,e.addRoute(q,N)}function m(E){const V=e.getRecordMatcher(E);V&&e.removeRoute(V)}function w(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function C(E,V){if(V=be({},V||c.value),typeof E=="string"){const se=ac(n,E,V.path),d=e.resolve({path:se.path},V),g=r.createHref(se.fullPath);return be(se,d,{params:f(d.params),hash:Vo(se.hash),redirectedFrom:void 0,href:g})}let N;if("path"in E)N=be({},E,{path:ac(n,E.path,V.path).path});else{const se=be({},E.params);for(const d in se)se[d]==null&&delete se[d];N=be({},E,{params:h(E.params)}),V.params=h(V.params)}const q=e.resolve(N,V),we=E.hash||"";q.params=u(f(q.params));const Se=o2(s,be({},E,{hash:z2(we),path:q.path})),oe=r.createHref(Se);return be({fullPath:Se,hash:we,query:s===od?X2(E.query):E.query||{}},q,{redirectedFrom:void 0,href:oe})}function P(E){return typeof E=="string"?ac(n,E,c.value.path):be({},E)}function B(E,V){if(l!==E)return Js(8,{from:V,to:E})}function F(E){return fe(E)}function ne(E){return F(be(P(E),{replace:!0}))}function ce(E){const V=E.matched[E.matched.length-1];if(V&&V.redirect){const{redirect:N}=V;let q=typeof N=="function"?N(E):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=P(q):{path:q},q.params={}),be({query:E.query,hash:E.hash,params:E.params},q)}}function fe(E,V){const N=l=C(E),q=c.value,we=E.state,Se=E.force,oe=E.replace===!0,se=ce(N);if(se)return fe(be(P(se),{state:we,force:Se,replace:oe}),V||N);const d=N;d.redirectedFrom=V;let g;return!Se&&a2(s,q,N)&&(g=Js(16,{to:d,from:q}),ws(q,q,!0,!1)),(g?Promise.resolve(g):re(d,q)).catch(y=>pn(y)?pn(y,2)?y:wt(y):Ce(y,d,q)).then(y=>{if(y){if(pn(y,2))return fe(be(P(y.to),{state:we,force:Se,replace:oe}),V||d)}else y=Re(d,q,!0,oe,we);return de(d,q,y),y})}function G(E,V){const N=B(E,V);return N?Promise.reject(N):Promise.resolve()}function re(E,V){let N;const[q,we,Se]=sS(E,V);N=cc(q.reverse(),"beforeRouteLeave",E,V);for(const se of q)se.leaveGuards.forEach(d=>{N.push(yn(d,E,V))});const oe=G.bind(null,E,V);return N.push(oe),bs(N).then(()=>{N=[];for(const se of i.list())N.push(yn(se,E,V));return N.push(oe),bs(N)}).then(()=>{N=cc(we,"beforeRouteUpdate",E,V);for(const se of we)se.updateGuards.forEach(d=>{N.push(yn(d,E,V))});return N.push(oe),bs(N)}).then(()=>{N=[];for(const se of E.matched)if(se.beforeEnter&&!V.matched.includes(se))if(Array.isArray(se.beforeEnter))for(const d of se.beforeEnter)N.push(yn(d,E,V));else N.push(yn(se.beforeEnter,E,V));return N.push(oe),bs(N)}).then(()=>(E.matched.forEach(se=>se.enterCallbacks={}),N=cc(Se,"beforeRouteEnter",E,V),N.push(oe),bs(N))).then(()=>{N=[];for(const se of o.list())N.push(yn(se,E,V));return N.push(oe),bs(N)}).catch(se=>pn(se,8)?se:Promise.reject(se))}function de(E,V,N){for(const q of a.list())q(E,V,N)}function Re(E,V,N,q,we){const Se=B(E,V);if(Se)return Se;const oe=V===dn,se=Ss?history.state:{};N&&(q||oe?r.replace(E.fullPath,be({scroll:oe&&se&&se.scroll},we)):r.push(E.fullPath,we)),c.value=E,ws(E,V,N,oe),wt()}let L;function xe(){L||(L=r.listen((E,V,N)=>{const q=C(E),we=ce(q);if(we){fe(be(we,{replace:!0}),q).catch(Lr);return}l=q;const Se=c.value;Ss&&g2(ed(Se.fullPath,N.delta),Oa()),re(q,Se).catch(oe=>pn(oe,12)?oe:pn(oe,2)?(fe(oe.to,q).then(se=>{pn(se,20)&&!N.delta&&N.type===ui.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),Ce(oe,q,Se))).then(oe=>{oe=oe||Re(q,Se,!1),oe&&(N.delta?r.go(-N.delta,!1):N.type===ui.pop&&pn(oe,20)&&r.go(-1,!1)),de(q,Se,oe)}).catch(Lr)}))}let st=_r(),Yt=_r(),Le;function Ce(E,V,N){wt(E);const q=Yt.list();return q.length?q.forEach(we=>we(E,V,N)):console.error(E),Promise.reject(E)}function ve(){return Le&&c.value!==dn?Promise.resolve():new Promise((E,V)=>{st.add([E,V])})}function wt(E){return Le||(Le=!E,xe(),st.list().forEach(([V,N])=>E?N(E):V()),st.reset()),E}function ws(E,V,N,q){const{scrollBehavior:we}=t;if(!Ss||!we)return Promise.resolve();const Se=!N&&m2(ed(E.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return Fd().then(()=>we(E,V,Se)).then(oe=>oe&&p2(oe)).catch(oe=>Ce(oe,E,V))}const Xt=E=>r.go(E);let $t;const kt=new Set;return{currentRoute:c,addRoute:p,removeRoute:m,hasRoute:v,getRoutes:w,resolve:C,options:t,push:F,replace:ne,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Yt.add,isReady:ve,install(E){const V=this;E.component("RouterLink",pr),E.component("RouterView",ky),E.config.globalProperties.$router=V,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Sr(c)}),Ss&&!$t&&c.value===dn&&($t=!0,F(r.location).catch(we=>{}));const N={};for(const we in dn)N[we]=Ht(()=>c.value[we]);E.provide(Vu,V),E.provide(yy,nr(N)),E.provide(sl,c);const q=E.unmount;kt.add(E),E.unmount=function(){kt.delete(E),kt.size<1&&(l=dn,L&&L(),L=null,c.value=dn,$t=!1,Le=!1),q()}}}}function bs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function sS(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Qs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Qs(l,c))||r.push(c))}return[n,s,r]}const Gn=nr({user:null});var Oe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const rS={},iS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},oS=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),aS=R("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},null,-1),cS=[oS,aS];function lS(t,e){return $(),ae("svg",iS,cS)}var uS=Oe(rS,[["render",lS]]);const hS={},fS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},dS=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),pS=R("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"},null,-1),gS=[dS,pS];function mS(t,e){return $(),ae("svg",fS,gS)}var yS=Oe(hS,[["render",mS]]);const _S={},vS={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},wS=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ES=R("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"},null,-1),IS=[wS,ES];function bS(t,e){return $(),ae("svg",vS,IS)}var TS=Oe(_S,[["render",bS]]);const CS={components:{RouterLink:pr},props:{to:{type:String,default:null,required:!1}}},SS={class:"group"},AS={key:1,class:"text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"};function kS(t,e,n,s,r,i){const o=_e("RouterLink");return $(),ae("li",SS,[n.to?($(),Pe(o,{key:0,to:n.to},{default:pe(({isActive:a})=>[R("span",{class:rs(["text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",{"after:scale-x-100":a}])},[qr(t.$slots,"default")],2)]),_:3},8,["to"])):($(),ae("span",AS,[qr(t.$slots,"default")]))])}var RS=Oe(CS,[["render",kS]]),xS="firebase",NS="9.8.2";/**
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
 */qt(xS,NS,"app");/**
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
 */const Ry="firebasestorage.googleapis.com",xy="storageBucket",DS=2*60*1e3,OS=10*60*1e3;/**
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
 */class Ge extends Mn{constructor(e,n){super(lc(e),`Firebase Storage: ${n} (${lc(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}_codeEquals(e){return lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function lc(t){return"storage/"+t}function Ny(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge("unknown",t)}function PS(t){return new Ge("object-not-found","Object '"+t+"' does not exist.")}function MS(t){return new Ge("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge("unauthenticated",t)}function US(){return new Ge("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function $S(t){return new Ge("unauthorized","User does not have permission to access '"+t+"'.")}function FS(){return new Ge("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function VS(){return new Ge("canceled","User canceled the upload/download.")}function BS(t){return new Ge("invalid-url","Invalid URL '"+t+"'.")}function jS(t){return new Ge("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function HS(){return new Ge("no-default-bucket","No default bucket found. Did you set the '"+xy+"' property when initializing the app?")}function qS(){return new Ge("no-download-url","The given file does not have any download URLs.")}function ol(t){return new Ge("invalid-argument",t)}function Dy(){return new Ge("app-deleted","The Firebase app was deleted.")}function zS(t){return new Ge("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vr(t){throw new Ge("internal-error","Internal error: "+t)}/**
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
 */class Ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ct.makeFromUrl(e,n)}catch{return new Ct(e,"")}if(s.path==="")return s;throw jS(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},w=n===Ry?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",C=new RegExp(`^https?://${w}/${r}/${v}`,"i"),B=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let F=0;F<B.length;F++){const ne=B[F],ce=ne.regex.exec(e);if(ce){const fe=ce[ne.indices.bucket];let G=ce[ne.indices.path];G||(G=""),s=new Ct(fe,G),ne.postModify(s);break}}if(s==null)throw BS(e);return s}}class KS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WS(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(p,c())},v)}function f(){i&&clearTimeout(i)}function p(v,...C){if(l){f();return}if(v){f(),u.call(null,v,...C);return}if(c()||o){f(),u.call(null,v,...C);return}s<64&&(s*=2);let B;a===1?(a=2,B=0):B=(s+Math.random())*1e3,h(B)}let m=!1;function w(v){m||(m=!0,f(),!l&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function GS(t){t(!1)}/**
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
 */function YS(t){return t!==void 0}function XS(t){return typeof t=="object"&&!Array.isArray(t)}function Oy(t){return typeof t=="string"||t instanceof String}function hd(t,e,n,s){if(s<e)throw ol(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ol(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Py(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function My(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ss||(ss={}));/**
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
 */class QS{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Yi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ss.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===ss.ABORT;s(!1,new Yi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Yi(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());YS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ny();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Dy():VS();o(c)}else{const c=FS();o(c)}};this.canceled_?n(!1,new Yi(!1,null,!0)):this.backoffId_=WS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Yi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function JS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function eA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nA(t,e,n,s,r,i){const o=My(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return eA(c,e),JS(c,n),ZS(c,i),tA(c,s),new QS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function Ly(t){let e;try{e=JSON.parse(t)}catch{return null}return XS(e)?e:null}/**
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
 */function sA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rA(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Uy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function iA(t,e){return e}class ut{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||iA}}let Xi=null;function oA(t){return!Oy(t)||t.length<2?t:Uy(t)}function aA(){if(Xi)return Xi;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return oA(o)}const n=new ut("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ut("size");return r.xform=s,t.push(r),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),Xi=t,Xi}function cA(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ct(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function lA(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return cA(s,t),s}function uA(t,e,n){const s=Ly(e);return s===null?null:lA(t,s,n)}function hA(t,e,n,s){const r=Ly(e);if(r===null||!Oy(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Py(f,n,s),m=My({alt:"media",token:l});return p+m})[0]}class fA{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dA(t){if(!t)throw Ny()}function pA(t,e){function n(s,r){const i=uA(t,r,e);return dA(i!==null),hA(i,r,t.host,t._protocol)}return n}function gA(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=US():r=LS():n.getStatus()===402?r=MS(t.bucket):n.getStatus()===403?r=$S(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function mA(t){const e=gA(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=PS(t.path)),i.serverResponse=r.serverResponse,i}return n}function yA(t,e,n){const s=e.fullServerUrl(),r=Py(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new fA(r,i,pA(t,n),o);return a.errorHandler=mA(e),a}class _A{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw vr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vA extends _A{initXhr(){this.xhr_.responseType="text"}}function wA(){return new vA}/**
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
 */class ms{constructor(e,n){this._service=e,n instanceof Ct?this._location=n:this._location=Ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ms(e,n)}get root(){const e=new Ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uy(this._location.path)}get storage(){return this._service}get parent(){const e=sA(this._location.path);if(e===null)return null;const n=new Ct(this._location.bucket,e);return new ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zS(e)}}function EA(t){t._throwIfRoot("getDownloadURL");const e=yA(t.storage,t._location,aA());return t.storage.makeRequestWithTokens(e,wA).then(n=>{if(n===null)throw qS();return n})}function IA(t,e){const n=rA(t._location.path,e),s=new Ct(t._location.bucket,n);return new ms(t.storage,s)}/**
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
 */function bA(t){return/^[A-Za-z]+:\/\//.test(t)}function TA(t,e){return new ms(t,e)}function $y(t,e){if(t instanceof ju){const n=t;if(n._bucket==null)throw HS();const s=new ms(n,n._bucket);return e!=null?$y(s,e):s}else return e!==void 0?IA(t,e):t}function CA(t,e){if(e&&bA(e)){if(t instanceof ju)return TA(t,e);throw ol("To use ref(service, url), the first argument must be a Storage instance.")}else return $y(t,e)}function fd(t,e){const n=e==null?void 0:e[xy];return n==null?null:Ct.makeFromBucketSpec(n,t)}class ju{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ry,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DS,this._maxUploadRetryTime=OS,this._requests=new Set,r!=null?this._bucket=Ct.makeFromBucketSpec(r,this._host):this._bucket=fd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,e):this._bucket=fd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ms(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new KS(Dy());{const i=nA(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const dd="@firebase/storage",pd="0.9.6";/**
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
 */const Fy="storage";function SA(t){return t=Ve(t),EA(t)}function AA(t,e){return t=Ve(t),CA(t,e)}function kA(t=kl(),e){return t=Ve(t),ea(t,Fy).getImmediate({identifier:e})}function RA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ju(n,s,r,e,sr)}function xA(){is(new Nn(Fy,RA,"PUBLIC").setMultipleInstances(!0)),qt(dd,pd,""),qt(dd,pd,"esm2017")}xA();const NA={apiKey:"AIzaSyCcXEaHHLQsZnk8Zm1xFKxQ75XxKSVD4Jw",authDomain:"vue-sports-car-rental.firebaseapp.com",projectId:"vue-sports-car-rental",storageBucket:"vue-sports-car-rental.appspot.com",messagingSenderId:"233423236620",appId:"1:233423236620:web:a1d8dd700b40ddca2f4829"},Vy=Bv(NA),By=PC(Vy),Hu=qE(Vy),DA=kA();const OA={components:{NavItem:RS,IconEMail:uS,IconPhone:TS,IconMenu:yS,RouterLink:pr},data(){return{store:Gn,isNavDrawerVisible:!1}},methods:{signOutUser(){Jp(Hu).then(()=>{}).catch(()=>{})}}},jy=t=>(Kd("data-v-53321928"),t=t(),Wd(),t),PA={class:"col-start-1 sm:col-start-3 col-end-13 row-span-1 flex items-center justify-end md:justify-between ml-0"},MA={class:"hidden md:block"},LA={class:"flex flex-row first:-ml-8"},UA=lt("Strona g\u0142\xF3wna"),$A=lt("Samochody"),FA=lt("Dashboard"),VA={class:"flex items-center gap-2"},BA=lt("car@rent.pl"),jA=jy(()=>R("span",{class:"h-10 w-px bg-zinc-400 mx-1"},null,-1)),HA={class:"flex items-center gap-2 mr-8"},qA=lt("123 456 789"),zA=jy(()=>R("button",{class:"btn hidden xl:block mr-8 py-4 px-10 bg-red-500 hover:bg-red-600 shadow-red-500 rounded-full text-white font-semibold tracking-wide transition hover:scale-105"}," Wynajmij teraz ",-1)),KA={key:0,class:"fixed top-0 right-0 h-full bg-zinc-800 z-20 flex flex-col"},WA=lt(" CAR RENT "),GA={class:"flex flex-col items-center justify-center gap-2 mt-4"},YA=lt("Strona g\u0142\xF3wna"),XA=lt("Samochody"),QA=lt("Dashboard"),JA={class:"flex flex-col items-center justify-center gap-2 mb-4 mt-auto"},ZA=lt("Zarejestruj si\u0119"),ek=lt("Moje konto"),tk=lt("Zaloguj sie"),nk=lt("Wyloguj si\u0119");function sk(t,e,n,s,r,i){const o=_e("NavItem"),a=_e("IconEMail"),c=_e("IconPhone"),l=_e("RouterLink"),u=_e("IconMenu");return $(),ae("header",PA,[R("nav",MA,[R("ul",LA,[z(o,{to:"/",class:"p-8"},{default:pe(()=>[UA]),_:1}),z(o,{to:"/cars",class:"p-8"},{default:pe(()=>[$A]),_:1}),r.store.user&&r.store.user.role==="admin"?($(),Pe(o,{key:0,to:"/dashboard",class:"p-8"},{default:pe(()=>[FA]),_:1})):bt("",!0)])]),R("div",{class:rs(["hidden lg:flex flex-row items-center gap-2 xl:gap-4 fill-white text-zinc-400 font-semibold",{"lg:hidden":t.$route.fullPath!=="/"}])},[R("span",VA,[z(a,{class:"w-6 h-6"}),BA]),jA,R("span",HA,[z(c,{class:"w-6 h-6"}),qA]),z(l,{to:"/cars"},{default:pe(()=>[zA]),_:1})],2),R("button",{class:"block md:hidden mx-4 p-4 shrink-0",onClick:e[0]||(e[0]=h=>r.isNavDrawerVisible=!0)},[z(u,{class:"w-8 h-8 sm:w-12 sm:h-12 fill-white"})]),($(),Pe(gp,{to:"body"},[z(_o,{name:"fade"},{default:pe(()=>[r.isNavDrawerVisible?($(),ae("div",{key:0,class:"fixed inset-0 bg-black/50 z-10",onClick:e[1]||(e[1]=h=>r.isNavDrawerVisible=!r.isNavDrawerVisible)})):bt("",!0)]),_:1}),z(_o,{name:"slide-fade"},{default:pe(()=>[r.isNavDrawerVisible?($(),ae("div",KA,[z(l,{to:"/",class:"mx-4 sm:mx-6 my-2 sm:my-4 text-2xl sm:text-3xl font-semibold tracking-[0.5ch] text-white logo__text"},{default:pe(()=>[WA]),_:1}),R("ul",GA,[z(o,{to:"/",class:"p-4"},{default:pe(()=>[YA]),_:1}),z(o,{to:"/cars",class:"p-4"},{default:pe(()=>[XA]),_:1}),r.store.user&&r.store.user.role==="admin"?($(),Pe(o,{key:0,to:"/dashboard",class:"p-4"},{default:pe(()=>[QA]),_:1})):bt("",!0)]),R("ul",JA,[r.store.user?($(),Pe(o,{key:1,to:"/account",class:"p-4"},{default:pe(()=>[ek]),_:1})):($(),Pe(o,{key:0,to:"/register",class:"p-4"},{default:pe(()=>[ZA]),_:1})),r.store.user?($(),Pe(o,{key:3,class:"p-4",onClick:i.signOutUser},{default:pe(()=>[nk]),_:1},8,["onClick"])):($(),Pe(o,{key:2,to:"/login",class:"p-4"},{default:pe(()=>[tk]),_:1}))])])):bt("",!0)]),_:1})]))])}var rk=Oe(OA,[["render",sk],["__scopeId","data-v-53321928"]]);const ik={components:{RouterLink:pr},props:{to:{type:String,default:null,required:!1},tooltip:{type:String,default:"",required:!1}}},ok={key:0,class:"group-hover:opacity-100 group-hover:visible z-10 w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"},ak={key:1,class:"flex items-center justify-center relative py-4 hover:bg-zinc-700 cursor-pointer group"},ck={class:"icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center"},lk={key:0,class:"group-hover:opacity-100 group-hover:visible w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"};function uk(t,e,n,s,r,i){const o=_e("RouterLink");return n.to?($(),Pe(o,{key:0,to:n.to},{default:pe(({isActive:a})=>[R("li",{class:rs(["flex items-center justify-center relative py-4 hover:bg-zinc-700/50 group",{"bg-zinc-700/50":a}])},[R("div",{class:rs(["icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center",{"after:absolute after:top-0 after:left-0 after:w-1.5 after:h-full after:bg-white opacity-100":a}])},[qr(t.$slots,"default")],2),n.tooltip?($(),ae("span",ok,Jn(n.tooltip),1)):bt("",!0)],2)]),_:3},8,["to"])):($(),ae("li",ak,[R("div",ck,[qr(t.$slots,"default")]),n.tooltip?($(),ae("span",lk,Jn(n.tooltip),1)):bt("",!0)]))}var hk=Oe(ik,[["render",uk]]);const fk={components:{RouterLink:pr},props:{href:{type:String,default:"/",required:!0}}},dk=R("li",{class:"flex items-center justify-center relative group"},[R("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:"w-full h-full m-6 fill-white group-hover:fill-red-500 transition-colors duration-200"},[R("path",{d:"M8 1.9928C8.13261 1.9928 8.25979 2.04548 8.35355 2.13924C8.44732 2.23301 8.5 2.36019 8.5 2.4928V3.9928C8.5 4.12541 8.44732 4.25258 8.35355 4.34635C8.25979 4.44012 8.13261 4.4928 8 4.4928C7.86739 4.4928 7.74021 4.44012 7.64645 4.34635C7.55268 4.25258 7.5 4.12541 7.5 3.9928V2.4928C7.5 2.36019 7.55268 2.23301 7.64645 2.13924C7.74021 2.04548 7.86739 1.9928 8 1.9928V1.9928ZM3.732 3.7248C3.82576 3.63106 3.95292 3.5784 4.0855 3.5784C4.21808 3.5784 4.34524 3.63106 4.439 3.7248L5.354 4.6388C5.40049 4.68529 5.43736 4.74047 5.46252 4.80121C5.48768 4.86195 5.50063 4.92705 5.50063 4.9928C5.50063 5.05854 5.48768 5.12364 5.46252 5.18438C5.43736 5.24512 5.40049 5.30031 5.354 5.3468C5.30751 5.39329 5.25232 5.43016 5.19158 5.45532C5.13084 5.48048 5.06574 5.49343 5 5.49343C4.93426 5.49343 4.86916 5.48048 4.80842 5.45532C4.74768 5.43016 4.69249 5.39329 4.646 5.3468L3.732 4.4318C3.63826 4.33803 3.58561 4.21088 3.58561 4.0783C3.58561 3.94572 3.63826 3.81856 3.732 3.7248V3.7248ZM2 7.9928C2 7.86019 2.05268 7.73301 2.14645 7.63924C2.24021 7.54548 2.36739 7.4928 2.5 7.4928H4.086C4.21861 7.4928 4.34579 7.54548 4.43955 7.63924C4.53332 7.73301 4.586 7.86019 4.586 7.9928C4.586 8.12541 4.53332 8.25258 4.43955 8.34635C4.34579 8.44012 4.21861 8.4928 4.086 8.4928H2.5C2.36739 8.4928 2.24021 8.44012 2.14645 8.34635C2.05268 8.25258 2 8.12541 2 7.9928ZM11.5 7.9928C11.5 7.86019 11.5527 7.73301 11.6464 7.63924C11.7402 7.54548 11.8674 7.4928 12 7.4928H13.5C13.6326 7.4928 13.7598 7.54548 13.8536 7.63924C13.9473 7.73301 14 7.86019 14 7.9928C14 8.12541 13.9473 8.25258 13.8536 8.34635C13.7598 8.44012 13.6326 8.4928 13.5 8.4928H12C11.8674 8.4928 11.7402 8.44012 11.6464 8.34635C11.5527 8.25258 11.5 8.12541 11.5 7.9928ZM12.254 3.7468C12.1847 3.67788 12.0921 3.63756 11.9944 3.63386C11.8968 3.63015 11.8013 3.66333 11.727 3.7268L7.547 7.3028C7.44961 7.38485 7.37053 7.48644 7.31487 7.60098C7.2592 7.71553 7.2282 7.84048 7.22387 7.96775C7.21954 8.09503 7.24197 8.2218 7.28971 8.33986C7.33745 8.45793 7.40945 8.56465 7.50103 8.65314C7.59262 8.74163 7.70175 8.80992 7.82139 8.85357C7.94102 8.89723 8.06849 8.91529 8.19554 8.90659C8.32259 8.89788 8.44641 8.86261 8.55897 8.80304C8.67153 8.74348 8.77034 8.66095 8.849 8.5608L12.283 4.2638C12.3427 4.18901 12.3728 4.09483 12.3675 3.99926C12.3621 3.90369 12.3217 3.81345 12.254 3.7458V3.7468Z"}),R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.30783e-06 7.99282C0.00105068 6.82862 0.256178 5.67867 0.747577 4.62327C1.23898 3.56786 1.9548 2.63242 2.84509 1.88225C3.73538 1.13208 4.77866 0.585262 5.90212 0.279968C7.02558 -0.0253257 8.20213 -0.0817387 9.34964 0.114668C10.4972 0.311074 11.588 0.755567 12.5459 1.41712C13.5039 2.07866 14.306 2.94133 14.8961 3.94488C15.4862 4.94843 15.8502 6.06869 15.9626 7.22745C16.075 8.38621 15.9332 9.55554 15.547 10.6538C15.105 11.9068 13.702 12.2558 12.615 11.9038C11.309 11.4808 9.47501 10.9928 8.00001 10.9928C6.52601 10.9928 4.69001 11.4808 3.38501 11.9038C2.29801 12.2558 0.895005 11.9068 0.453005 10.6538C0.152147 9.79894 -0.00103942 8.89909 5.30783e-06 7.99282V7.99282ZM8.00001 0.992817C6.88038 0.992528 5.77701 1.26081 4.78252 1.77515C3.78802 2.28949 2.93141 3.03487 2.28457 3.94875C1.63774 4.86263 1.21955 5.91833 1.06511 7.02726C0.910674 8.13618 1.02449 9.26598 1.39701 10.3218C1.60001 10.8968 2.32001 11.1978 3.07701 10.9518C4.39701 10.5258 6.35801 9.99282 8.00001 9.99282C9.64201 9.99282 11.604 10.5248 12.923 10.9528C13.68 11.1978 14.4 10.8968 14.603 10.3218C14.9755 9.26598 15.0893 8.13618 14.9349 7.02726C14.7805 5.91833 14.3623 4.86263 13.7154 3.94875C13.0686 3.03487 12.212 2.28949 11.2175 1.77515C10.223 1.26081 9.11963 0.992528 8.00001 0.992817V0.992817Z"})])],-1);function pk(t,e,n,s,r,i){const o=_e("RouterLink");return $(),Pe(o,{to:n.href},{default:pe(()=>[dk]),_:1},8,["to"])}var gk=Oe(fk,[["render",pk]]);const mk={},yk={xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},_k=R("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),vk=R("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"},null,-1),wk=[_k,vk];function Ek(t,e){return $(),ae("svg",yk,wk)}var Ik=Oe(mk,[["render",Ek]]);const bk={},Tk={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},Ck=R("g",null,[R("rect",{fill:"none",height:"24",width:"24"})],-1),Sk=R("g",null,[R("path",{d:"M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"})],-1),Ak=[Ck,Sk];function kk(t,e){return $(),ae("svg",Tk,Ak)}var Rk=Oe(bk,[["render",kk]]);const xk={},Nk={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px"},Dk=R("g",null,[R("path",{d:"M0,0h24v24H0V0z",fill:"none"})],-1),Ok=R("g",null,[R("path",{d:"M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"})],-1),Pk=[Dk,Ok];function Mk(t,e){return $(),ae("svg",Nk,Pk)}var Lk=Oe(xk,[["render",Mk]]);const Uk={},$k={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Fk=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Vk=R("path",{d:"M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"},null,-1),Bk=[Fk,Vk];function jk(t,e){return $(),ae("svg",$k,Bk)}var Hk=Oe(Uk,[["render",jk]]);const qk={},zk={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Kk=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Wk=R("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"},null,-1),Gk=R("circle",{cx:"7.5",cy:"14.5",r:"1.5"},null,-1),Yk=R("circle",{cx:"16.5",cy:"14.5",r:"1.5"},null,-1),Xk=[Kk,Wk,Gk,Yk];function Qk(t,e){return $(),ae("svg",zk,Xk)}var Jk=Oe(qk,[["render",Qk]]);const Zk={},e4={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24"},t4=B1('<g><rect fill="none" height="24" width="24" y="0"></rect></g><g><g><g><circle cx="9" cy="16.5" r="1"></circle><circle cx="15" cy="16.5" r="1"></circle><path d="M17.25,9.6c-0.02-0.02-0.03-0.04-0.05-0.07C16.82,9.01,16.28,9,16.28,9H7.72c0,0-0.54,0.01-0.92,0.54 C6.78,9.56,6.77,9.58,6.75,9.6C6.68,9.71,6.61,9.84,6.56,10C6.34,10.66,5.82,12.22,5,14.69v6.5C5,21.64,5.35,22,5.78,22h0.44 C6.65,22,7,21.64,7,21.19V20h10v1.19c0,0.45,0.34,0.81,0.78,0.81h0.44c0.43,0,0.78-0.36,0.78-0.81v-6.5 c-0.82-2.46-1.34-4.03-1.56-4.69C17.39,9.84,17.32,9.71,17.25,9.6z M8.33,11h7.34l0.23,0.69L16.33,13H7.67L8.33,11z M17,18H7 v-2.99V15h10v0.01V18z"></path><path d="M10.83,3C10.41,1.83,9.3,1,8,1C6.34,1,5,2.34,5,4c0,1.65,1.34,3,3,3c1.3,0,2.41-0.84,2.83-2H16v2h2V5h1V3H10.83z M8,5 C7.45,5,7,4.55,7,4s0.45-1,1-1s1,0.45,1,1S8.55,5,8,5z"></path></g></g></g>',2),n4=[t4];function s4(t,e){return $(),ae("svg",e4,n4)}var r4=Oe(Zk,[["render",s4]]);const i4={},o4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a4=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),c4=R("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"},null,-1),l4=[a4,c4];function u4(t,e){return $(),ae("svg",o4,l4)}var h4=Oe(i4,[["render",u4]]);const f4={components:{SideBarItem:hk,SideBarLogo:gk,IconPerson:Ik,IconLogin:Rk,IconLogout:Lk,IconDashboard:Hk,IconCar:Jk,IconCarRental:r4,IconSave:h4},data(){return{store:Gn}},methods:{signOutUser(){Jp(Hu).then(()=>{}).catch(()=>{})}}},d4={class:"col-span-1 row-span-full bg-zinc-800 hidden sm:block"},p4={class:"flex flex-col h-full"},g4={class:"mb-auto"},m4={class:"mt-auto"};function y4(t,e,n,s,r,i){const o=_e("SideBarLogo"),a=_e("IconDashboard"),c=_e("SideBarItem"),l=_e("IconCar"),u=_e("IconCarRental"),h=_e("IconPerson"),f=_e("IconSave"),p=_e("IconLogin"),m=_e("IconLogout");return $(),ae("aside",d4,[R("ul",p4,[z(o,{href:"/",class:"py-3"}),R("div",g4,[r.store.user&&r.store.user.role==="admin"?($(),Pe(c,{key:0,to:"/dashboard",tooltip:"Dashboard"},{default:pe(()=>[z(a)]),_:1})):bt("",!0),r.store.user&&r.store.user.role==="admin"?($(),Pe(c,{key:1,to:"/dashboard/cars",tooltip:"Samochody"},{default:pe(()=>[z(l)]),_:1})):bt("",!0),r.store.user&&r.store.user.role==="admin"?($(),Pe(c,{key:2,to:"/dashboard/rents",tooltip:"Wynajmy"},{default:pe(()=>[z(u)]),_:1})):bt("",!0),r.store.user&&r.store.user.role==="admin"?($(),Pe(c,{key:3,to:"/dashboard/users",tooltip:"U\u017Cytkownicy"},{default:pe(()=>[z(h)]),_:1})):bt("",!0),r.store.user&&r.store.user.role==="admin"?($(),Pe(c,{key:4,to:"/dashboard/mock",tooltip:"Mock Data"},{default:pe(()=>[z(f)]),_:1})):bt("",!0)]),R("div",m4,[r.store.user?($(),Pe(c,{key:1,to:"/account",tooltip:"Moje konto"},{default:pe(()=>[z(h)]),_:1})):($(),Pe(c,{key:0,to:"/register",tooltip:"Zarejestruj si\u0119"},{default:pe(()=>[z(h)]),_:1})),r.store.user?($(),Pe(c,{key:3,tooltip:"Wyloguj si\u0119",onClick:i.signOutUser},{default:pe(()=>[z(m)]),_:1},8,["onClick"])):($(),Pe(c,{key:2,to:"/login",tooltip:"Zaloguj si\u0119"},{default:pe(()=>[z(p)]),_:1}))])])])}var _4=Oe(f4,[["render",y4]]);const v4={components:{RouterView:ky,SideBar:_4,NavBar:rk},beforeMount(){Ow(Hu,t=>{t?(Gn.user=t,this.getRole(t)):Gn.user=null})},methods:{async getRole(t){if(!t)return;const e=ny(By,"users",t.uid),n=await ZC(e);n.exists()?Gn.user=Object.assign(Gn.user,n.data()):Gn.user.role=null}}};function w4(t,e,n,s,r,i){const o=_e("NavBar"),a=_e("SideBar"),c=_e("RouterView");return $(),ae(rt,null,[z(o),z(a),z(c)],64)}var E4=Oe(v4,[["render",w4]]);const I4="modulepreload",gd={},b4="/vue-sports-car-rental/",Ot=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${b4}${s}`,s in gd)return;gd[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":I4,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},T4={components:{},props:{car:{type:Object,default:()=>{},required:!0},res:{type:String,default:"thumb",required:!1}},data(){return{url:null}},created(){this.getCarImageUrl(this.car.model)},methods:{async getCarImageUrl(t){t=t.replace(/\s+/g,"-").toLowerCase();let e=`${t}_${this.res}.jpg`;const n=AA(DA,`images/${e}`);SA(n).then(s=>{this.url=s}).catch(()=>{this.url=null})}}},C4={key:0,class:"bg-zinc-600 animate-pulse"},S4=["src","alt"];function A4(t,e,n,s,r,i){return r.url?($(),ae("img",{key:1,src:r.url,alt:`${n.car.brand} ${n.car.model}`},null,8,S4)):($(),ae("div",C4))}var Hy=Oe(T4,[["render",A4]]);const k4={components:{},props:{parameter:{type:String,default:"",required:!0},title:{type:String,default:"",required:!1},value:{type:String,default:"",required:!0}}},R4={class:"flex flex-col items-center sm:items-start"},x4=["title"],N4={class:"text-zinc-400 font-medium text-sm sm:text-lg"},D4={class:"text-white font-bold text-2xl sm:text-5xl"};function O4(t,e,n,s,r,i){return $(),ae("li",R4,[R("div",{class:"icon fill-zinc-400 w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center mb-2",title:n.title?n.title:n.parameter},[qr(t.$slots,"default",{},void 0,!0)],8,x4),R("span",N4,Jn(n.parameter),1),R("span",D4,Jn(n.value),1)])}var P4=Oe(k4,[["render",O4],["__scopeId","data-v-34d35aed"]]);const M4={},L4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},U4=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),$4=R("path",{d:"M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"},null,-1),F4=[U4,$4];function V4(t,e){return $(),ae("svg",L4,F4)}var B4=Oe(M4,[["render",V4]]);const j4={},H4={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},q4=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),z4=R("path",{d:"M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"},null,-1),K4=[q4,z4];function W4(t,e){return $(),ae("svg",H4,K4)}var G4=Oe(j4,[["render",W4]]);const Y4={components:{IconArrowRight:G4,IconArrowLeft:B4,CarImage:Hy},props:{type:{type:String,default:"pc",required:!0},cars:{type:Object,default:()=>{},required:!1}},emits:["previous","next"]},X4={key:0,class:"hidden xl:flex flex-col w-full h-full col-start-7 col-end-11 row-start-3 row-end-[12]"},Q4={class:"swiper__shadow swiper__progress relative w-full h-full after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-1 after:bg-red-500 after:scale-0 after:origin-left after:transition-transform after:duration-[400ms]"},J4={class:"relative w-full h-full clip -z-10"},Z4={class:"fixed inset-0 overflow-hidden"},eR={class:"w-full h-full flex flex-row swiper transition-transform duration-[400ms]"},tR={class:"flex justify-between mt-4"},nR={key:1,class:"flex xl:hidden my-4 justify-between"};function sR(t,e,n,s,r,i){const o=_e("CarImage"),a=_e("IconArrowLeft"),c=_e("IconArrowRight");return n.type==="pc"?($(),ae("div",X4,[R("div",Q4,[R("div",J4,[R("div",Z4,[R("ul",eR,[($(!0),ae(rt,null,ip(n.cars,l=>($(),ae("li",{key:l.id_car,class:"relative w-screen h-full flex-shrink-0"},[z(o,{car:l,res:"highres",class:"absolute inset-0 w-full h-full object-cover object-center"},null,8,["car"])]))),128))])])])]),R("div",tR,[R("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[0]||(e[0]=l=>t.$emit("previous"))},[z(a,{class:"w-8 h-8 sm:w-12 sm:h-12 m-2"})]),R("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[1]||(e[1]=l=>t.$emit("next"))},[z(c,{class:"w-8 h-8 sm:w-12 sm:h-12 m-2"})])])])):n.type==="mobile"?($(),ae("div",nR,[R("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[2]||(e[2]=l=>t.$emit("previous"))},[z(a,{class:"w-8 h-8 sm:w-12 sm:h-12 m-2"})]),R("button",{class:"bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors",onClick:e[3]||(e[3]=l=>t.$emit("next"))},[z(c,{class:"w-8 h-8 sm:w-12 sm:h-12 m-2"})])])):bt("",!0)}var rR=Oe(Y4,[["render",sR],["__scopeId","data-v-6f3f4eaa"]]);const iR={},oR={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},aR=R("path",{d:"M8 10H16V18H11L9 16H7V11L8 10ZM7 4V6H10V8H7L5 10V13H3V10H1V18H3V15H5V18H8L10 20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z"},null,-1),cR=[aR];function lR(t,e){return $(),ae("svg",oR,cR)}var uR=Oe(iR,[["render",lR]]);const hR={},fR={xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},dR=R("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),pR=R("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},null,-1),gR=[dR,pR];function mR(t,e){return $(),ae("svg",fR,gR)}var yR=Oe(hR,[["render",mR]]);const _R={},vR={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"23",viewBox:"0 0 24 23"},wR=R("path",{d:"M12 0.09375C10.375 0.09375 8.82422 0.410156 7.34766 1.04297C5.87109 1.67578 4.59766 2.52734 3.52734 3.59766C2.45703 4.66797 1.60547 5.94531 0.972656 7.42969C0.339844 8.91406 0.0234375 10.4687 0.0234375 12.0938C0.0234375 14.1562 0.519531 16.0859 1.51172 17.8828C2.50391 19.6797 3.88281 21.1328 5.64844 22.2422C5.82031 22.3516 6.00781 22.3828 6.21094 22.3359C6.41406 22.2891 6.57031 22.1797 6.67969 22.0078C6.78906 21.8359 6.82031 21.6484 6.77344 21.4453C6.72656 21.2422 6.61719 21.0859 6.44531 20.9766C5.17969 20.1797 4.13281 19.1719 3.30469 17.9531L4.10156 17.4844C4.27344 17.3906 4.38672 17.2422 4.44141 17.0391C4.49609 16.8359 4.47266 16.6445 4.37109 16.4648C4.26953 16.2852 4.11719 16.168 3.91406 16.1133C3.71094 16.0586 3.52344 16.0859 3.35156 16.1953L2.55469 16.6406C2.27344 16.0469 2.04688 15.4297 1.875 14.7891C1.70312 14.1484 1.59375 13.4922 1.54688 12.8203H2.36719C2.58594 12.8203 2.76562 12.7461 2.90625 12.5977C3.04688 12.4492 3.11719 12.2734 3.11719 12.0703C3.11719 11.8672 3.04688 11.6914 2.90625 11.543C2.76562 11.3945 2.58594 11.3203 2.36719 11.3203H1.54688C1.64062 9.96094 1.99219 8.67188 2.60156 7.45312L3.35156 7.89844C3.46094 7.96094 3.58594 7.99219 3.72656 7.99219C4.00781 7.99219 4.21875 7.86719 4.35938 7.61719C4.46875 7.44531 4.49609 7.25781 4.44141 7.05469C4.38672 6.85156 4.27344 6.70312 4.10156 6.60938L3.35156 6.16406C4.11719 5.05469 5.05469 4.125 6.16406 3.375L6.58594 4.10156C6.72656 4.35156 6.94531 4.47656 7.24219 4.47656C7.36719 4.47656 7.49219 4.44531 7.61719 4.38281C7.69531 4.33594 7.76562 4.26953 7.82812 4.18359C7.89063 4.09766 7.93359 4.01172 7.95703 3.92578C7.98047 3.83984 7.98828 3.74609 7.98047 3.64453C7.97266 3.54297 7.9375 3.44531 7.875 3.35156L7.45312 2.625C8.04688 2.34375 8.66016 2.12109 9.29297 1.95703C9.92578 1.79297 10.5703 1.67969 11.2266 1.61719V2.55469C11.2266 2.77344 11.3008 2.95312 11.4492 3.09375C11.5977 3.23438 11.7773 3.30469 11.9883 3.30469C12.1992 3.30469 12.375 3.23438 12.5156 3.09375C12.6562 2.95312 12.7266 2.77344 12.7266 2.55469V1.61719C14.0859 1.71094 15.375 2.05469 16.5938 2.64844L16.1719 3.35156C16.1562 3.39844 16.1406 3.44141 16.125 3.48047C16.1094 3.51953 16.0977 3.5625 16.0898 3.60938C16.082 3.65625 16.0781 3.69922 16.0781 3.73828C16.0781 3.77734 16.082 3.82031 16.0898 3.86719C16.0977 3.91406 16.1094 3.95703 16.125 3.99609C16.1406 4.03516 16.1602 4.07422 16.1836 4.11328C16.207 4.15234 16.2305 4.1875 16.2539 4.21875C16.2773 4.25 16.3047 4.28125 16.3359 4.3125C16.3672 4.34375 16.4062 4.36719 16.4531 4.38281L16.5469 4.42969L16.6406 4.46484L16.7344 4.47656H16.8281C16.8906 4.47656 16.9531 4.46875 17.0156 4.45312C17.0781 4.4375 17.1367 4.41406 17.1914 4.38281C17.2461 4.35156 17.3008 4.3125 17.3555 4.26562C17.4102 4.21875 17.4531 4.16406 17.4844 4.10156L17.8828 3.39844C18.9922 4.16406 19.9219 5.09375 20.6719 6.1875L19.9688 6.60938C19.875 6.65625 19.8008 6.71875 19.7461 6.79688C19.6914 6.875 19.6484 6.96094 19.6172 7.05469C19.5859 7.14844 19.5781 7.24609 19.5938 7.34766C19.6094 7.44922 19.6406 7.53906 19.6875 7.61719C19.7656 7.74219 19.8633 7.83594 19.9805 7.89844C20.0977 7.96094 20.2187 7.99219 20.3438 7.99219C20.4063 7.99219 20.4687 7.98438 20.5312 7.96875C20.5938 7.95312 20.6562 7.92969 20.7188 7.89844L21.4219 7.5C22.0156 8.70312 22.3594 9.98438 22.4531 11.3438H21.6328C21.4297 11.3438 21.2539 11.418 21.1055 11.5664C20.957 11.7148 20.8828 11.8906 20.8828 12.0938C20.8828 12.2969 20.957 12.4727 21.1055 12.6211C21.2539 12.7695 21.4297 12.8438 21.6328 12.8438H22.4531C22.3594 14.1719 22.0312 15.4297 21.4688 16.6172L20.7188 16.1953C20.5312 16.0859 20.3398 16.0586 20.1445 16.1133C19.9492 16.168 19.7969 16.2891 19.6875 16.4766C19.6406 16.5547 19.6094 16.6445 19.5938 16.7461C19.5781 16.8477 19.5859 16.9453 19.6172 17.0391C19.6484 17.1328 19.6914 17.2188 19.7461 17.2969C19.8008 17.375 19.875 17.4375 19.9688 17.4844L20.7188 17.9297C19.875 19.1797 18.7969 20.2109 17.4844 21.0234C17.3125 21.1328 17.2031 21.2852 17.1562 21.4805C17.1094 21.6758 17.1406 21.8672 17.25 22.0547C17.2969 22.1172 17.3555 22.1758 17.4258 22.2305C17.4961 22.2852 17.5703 22.3281 17.6484 22.3594C17.7266 22.3906 17.8047 22.4062 17.8828 22.4062C18.0234 22.4062 18.1562 22.3672 18.2812 22.2891C20.0625 21.1953 21.457 19.7461 22.4648 17.9414C23.4727 16.1367 23.9766 14.1797 23.9766 12.0703C23.9766 10.4609 23.6602 8.91406 23.0273 7.42969C22.3945 5.94531 21.543 4.66797 20.4727 3.59766C19.4023 2.52734 18.1289 1.67578 16.6523 1.04297C15.1758 0.410156 13.625 0.09375 12 0.09375ZM17.5312 9.75C17.6563 9.67188 17.75 9.57422 17.8125 9.45703C17.875 9.33984 17.9062 9.21875 17.9062 9.09375C17.9062 8.96875 17.875 8.84375 17.8125 8.71875C17.7031 8.54687 17.5508 8.43359 17.3555 8.37891C17.1602 8.32422 16.9688 8.34375 16.7812 8.4375L12.7031 10.8047C12.4688 10.6641 12.2266 10.5938 11.9766 10.5938C11.5703 10.5938 11.2188 10.7422 10.9219 11.0391C10.625 11.3359 10.4766 11.6875 10.4766 12.0938C10.4766 12.3594 10.543 12.6094 10.6758 12.8438C10.8086 13.0781 10.9922 13.2617 11.2266 13.3945C11.4609 13.5273 11.7109 13.5938 11.9766 13.5938C12.3828 13.5938 12.7344 13.4453 13.0312 13.1484C13.3281 12.8516 13.4766 12.5 13.4766 12.0938L17.5312 9.75Z"},null,-1),ER=[wR];function IR(t,e){return $(),ae("svg",vR,ER)}var bR=Oe(_R,[["render",IR]]);const TR={components:{CarMainStatsItem:P4,IconEngine:uR,IconHP:yR,IconSpeed:bR,CarSwiper:rR,RouterLink:pr,CarImage:Hy},data(){return{index:0,cars:[],isLoading:!0}},computed:{getCar(){return this.cars[this.index]}},created(){this.searchCars()},methods:{async getCars(){this.cars=[],this.isLoading=!0;let t=[],e=zC(DC(By,"cars"),WC("gallery",">",0),YC("gallery"));return(await e2(e)).forEach(s=>{let r=s.id;t.push(Ma({id:r},s.data()))}),this.isLoading=!1,t},async searchCars(){this.getCars().then(t=>{this.cars=t})},previousCar(){this.index-1<0?this.index=this.cars.length-1:this.index--,this.setIndex()},nextCar(){this.index+1>this.cars.length-1?this.index=0:this.index++,this.setIndex()},setIndex(){let t=document.querySelectorAll(".swiper"),e=document.querySelector(".swiper__progress");t.forEach(n=>{n.style.setProperty("--index",this.index)}),e.style.setProperty("--index",this.index),e.style.setProperty("--length",this.cars.length-1)}}},qy=t=>(Kd("data-v-315e5df3"),t=t(),Wd(),t),CR={key:0,class:"col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 xl:col-end-9 row-start-3 lg:row-start-3 row-end-[12] flex flex-col justify-center items-center sm:items-start lg:pl-0 p-8 lg:p-4 text-white"},SR={class:"fixed inset-0 bg-black -z-20 car__bg xl:after:hidden overflow-hidden"},AR={class:"w-full h-full flex flex-row swiper transition-transform duration-[400ms] xl:opacity-40 xl:blur-[1.25px] xl:grayscale-[60%] pointer-events-none"},kR={class:"flex flex-col items-center sm:items-start"},RR=qy(()=>R("span",{class:"text-2xl lg:text-5xl ml-0 sm:ml-4 lg:leading-tight text-center"},"Wynajmij emocje",-1)),xR={class:"flex flex-wrap gap-x-4 justify-center sm:justify-start z-[1]"},NR={class:"text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] lg:leading-none font-bold"},DR={class:"text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] lg:leading-none text-center sm:text-left font-display stroked"},OR={class:"flex flex-wrap items-center justify-center my-2 sm:my-4 gap-8 sm:gap-16"},PR={class:"text-zinc-400 font-medium text-xs sm:text-base text-center my-2 sm:my-6"},MR=lt("ju\u017C od "),LR={class:"text-red-500 font-bold"},UR=lt(" za dob\u0119!"),$R={class:"flex flex-col"},FR=qy(()=>R("button",{class:"bg-zinc-800/75 hover:bg-zinc-700/75 py-3 sm:py-4 px-8 sm:px-12 text-xs sm:text-base rounded-full font-semibold tracking-wide transition-colors"}," Zarezerwuj ",-1));function VR(t,e,n,s,r,i){const o=_e("CarImage"),a=_e("IconEngine"),c=_e("CarMainStatsItem"),l=_e("IconHP"),u=_e("IconSpeed"),h=_e("RouterLink"),f=_e("CarSwiper");return $(),ae(rt,null,[r.cars.length>0?($(),ae("main",CR,[($(),Pe(gp,{to:"body"},[R("div",SR,[R("ul",AR,[($(!0),ae(rt,null,ip(r.cars,p=>($(),ae("li",{key:p.id_car,class:"relative w-screen h-full flex-shrink-0"},[z(o,{car:p,res:"highres",class:"absolute inset-0 w-full h-full object-cover object-center"},null,8,["car"])]))),128))])])])),R("div",kR,[RR,R("div",xR,[R("span",NR,Jn(i.getCar.brand),1),R("span",DR,Jn(i.getCar.model),1)])]),R("ul",OR,[i.getCar.eng_info&&i.getCar.eng_info.length<5?($(),Pe(c,{key:0,parameter:"Silnik",value:i.getCar.eng_info},{default:pe(()=>[z(a)]),_:1},8,["value"])):($(),Pe(c,{key:1,parameter:"Nm",value:i.getCar.eng_torque.toString()},{default:pe(()=>[z(a)]),_:1},8,["value"])),z(c,{parameter:"KM",title:"Konie mechaniczne",value:i.getCar.eng_power.toString()},{default:pe(()=>[z(l)]),_:1},8,["value"]),z(c,{parameter:"Pr\u0119dko\u015B\u0107",value:i.getCar.top_speed.toString()},{default:pe(()=>[z(u)]),_:1},8,["value"])]),R("span",PR,[MR,R("span",LR,Jn(i.getCar.price_deposit)+" z\u0142",1),UR]),R("div",$R,[z(h,{to:`/cars/${i.getCar.id_car}`},{default:pe(()=>[FR]),_:1},8,["to"]),z(f,{type:"mobile",onPrevious:i.previousCar,onNext:i.nextCar},null,8,["onPrevious","onNext"])])])):bt("",!0),z(f,{type:"pc",cars:r.cars,onPrevious:i.previousCar,onNext:i.nextCar},null,8,["cars","onPrevious","onNext"])],64)}var BR=Oe(TR,[["render",VR],["__scopeId","data-v-315e5df3"]]);const jR=nS({history:w2("/vue-sports-car-rental/"),routes:[{path:"/",name:"home",component:BR},{path:"/cars",name:"cars",component:()=>Ot(()=>import("./CarsView.69ba531d.js"),["assets/CarsView.69ba531d.js","assets/CarsView.5e488da5.css","assets/ButtonSecondary.98472cf6.js","assets/IconTransmission.a559b174.js","assets/IconTransmission.58f58627.css","assets/ButtonPrimary.b85ed73e.js"])},{path:"/cars/:id",name:"car",component:()=>Ot(()=>import("./CarView.54ed63c8.js"),["assets/CarView.54ed63c8.js","assets/CarView.dec5408b.css","assets/ButtonPrimary.b85ed73e.js","assets/ButtonSecondary.98472cf6.js","assets/IconTransmission.a559b174.js","assets/IconTransmission.58f58627.css"])},{path:"/rent/:id",name:"rent",component:()=>Ot(()=>import("./RentView.ddc7f0b2.js"),["assets/RentView.ddc7f0b2.js","assets/RentView.5b1318dd.css","assets/ButtonPrimary.b85ed73e.js","assets/ButtonSecondary.98472cf6.js"])},{path:"/login",name:"login",component:()=>Ot(()=>import("./LoginView.3a99f014.js"),["assets/LoginView.3a99f014.js","assets/ButtonPrimary.b85ed73e.js"])},{path:"/register",name:"register",component:()=>Ot(()=>import("./RegisterView.3c18393e.js"),["assets/RegisterView.3c18393e.js","assets/ButtonPrimary.b85ed73e.js"])},{path:"/account",name:"account",component:()=>Ot(()=>import("./AccountView.826e8c8a.js"),["assets/AccountView.826e8c8a.js","assets/AccountView.ac28a068.css"])},{path:"/dashboard",name:"dashboard",component:()=>Ot(()=>import("./DashboardView.7c439b43.js"),["assets/DashboardView.7c439b43.js","assets/ButtonPrimary.b85ed73e.js"]),children:[{path:"cars",name:"dashboard cars",component:()=>Ot(()=>import("./DashboardCarsView.5308de0b.js"),["assets/DashboardCarsView.5308de0b.js","assets/DashboardCarsView.8e409752.css"])},{path:"rents",name:"dashboard rents",component:()=>Ot(()=>import("./DashboardRentsView.2c486084.js"),["assets/DashboardRentsView.2c486084.js","assets/DashboardRentsView.02ab5ce1.css"])},{path:"users",name:"dashboard users",component:()=>Ot(()=>import("./DashboardUsersView.8619d40a.js"),["assets/DashboardUsersView.8619d40a.js","assets/DashboardUsersView.0f222476.css"])},{path:"mock",name:"dashboard mock",component:()=>Ot(()=>import("./DashboardMockView.74abdc70.js"),["assets/DashboardMockView.74abdc70.js","assets/ButtonPrimary.b85ed73e.js"])}]}]});const zy=k_(E4);zy.use(jR);zy.mount("#app");export{tx as A,nx as B,Hy as C,KR as D,XR as E,rt as F,JR as G,Hu as H,uR as I,YR as J,ZR as K,QR as L,YC as M,WC as N,Hk as O,Jk as P,Ik as Q,pr as R,h4 as S,r4 as T,ky as U,ex as V,WR as W,Oe as _,bR as a,z as b,ae as c,R as d,lt as e,zC as f,e2 as g,GR as h,qR as i,ip as j,bt as k,By as l,Pe as m,qr as n,$ as o,rs as p,ny as q,_e as r,ZC as s,Jn as t,Gn as u,zR as v,pe as w,Kd as x,DC as y,Wd as z};

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U0={exports:{}},ac={},F0={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),$v=Symbol.for("react.portal"),qv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Jv=Symbol.for("react.profiler"),Zv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),e_=Symbol.for("react.forward_ref"),t_=Symbol.for("react.suspense"),n_=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),op=Symbol.iterator;function r_(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,z0={};function Js(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||O0}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=Js.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||O0}var Df=If.prototype=new B0;Df.constructor=If;k0(Df,Js.prototype);Df.isPureReactComponent=!0;var ap=Array.isArray,H0=Object.prototype.hasOwnProperty,Uf={current:null},V0={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,i)&&!V0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ua,type:t,key:s,ref:o,props:r,_owner:Uf.current}}function s_(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case $v:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nc(o,0):i,ap(r)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),ul(r,e,n,"",function(d){return d})):r!=null&&(Ff(r)&&(r=s_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nc(s,a);o+=ul(s,e,n,l,r)}else if(l=r_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function a_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},dl={transition:null},l_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Uf};function j0(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=Js;it.Fragment=qv;it.Profiler=Jv;it.PureComponent=If;it.StrictMode=Kv;it.Suspense=t_;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l_;it.act=j0;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=k0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!V0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];i.children=a}return{$$typeof:ua,type:t.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(t){return t={$$typeof:Qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zv,_context:t},t.Consumer=t};it.createElement=G0;it.createFactory=function(t){var e=G0.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:e_,render:t}};it.isValidElement=Ff;it.lazy=function(t){return{$$typeof:i_,_payload:{_status:-1,_result:t},_init:a_}};it.memo=function(t,e){return{$$typeof:n_,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};it.unstable_act=j0;it.useCallback=function(t,e){return sn.current.useCallback(t,e)};it.useContext=function(t){return sn.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};it.useEffect=function(t,e){return sn.current.useEffect(t,e)};it.useId=function(){return sn.current.useId()};it.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return sn.current.useMemo(t,e)};it.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};it.useRef=function(t){return sn.current.useRef(t)};it.useState=function(t){return sn.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return sn.current.useTransition()};it.version="18.3.1";F0.exports=it;var se=F0.exports;const c_=Yv(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=se,d_=Symbol.for("react.element"),f_=Symbol.for("react.fragment"),h_=Object.prototype.hasOwnProperty,p_=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m_={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h_.call(e,i)&&!m_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d_,type:t,key:s,ref:o,props:r,_owner:p_.current}}ac.Fragment=f_;ac.jsx=W0;ac.jsxs=W0;U0.exports=ac;var u=U0.exports,$u={},X0={exports:{}},An={},Y0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,V){var I=U.length;U.push(V);e:for(;0<I;){var Q=I-1>>>1,ie=U[Q];if(0<r(ie,V))U[Q]=V,U[I]=ie,I=Q;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],I=U.pop();if(I!==V){U[0]=I;e:for(var Q=0,ie=U.length,Ie=ie>>>1;Q<Ie;){var Ge=2*(Q+1)-1,De=U[Ge],K=Ge+1,ce=U[K];if(0>r(De,I))K<ie&&0>r(ce,De)?(U[Q]=ce,U[K]=I,Q=K):(U[Q]=De,U[Ge]=I,Q=Ge);else if(K<ie&&0>r(ce,I))U[Q]=ce,U[K]=I,Q=K;else break e}}return V}function r(U,V){var I=U.sortIndex-V.sortIndex;return I!==0?I:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],d=[],h=1,m=null,c=3,p=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var V=n(d);V!==null;){if(V.callback===null)i(d);else if(V.startTime<=U)i(d),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(d)}}function y(U){if(E=!1,S(U),!v)if(n(l)!==null)v=!0,W(A);else{var V=n(d);V!==null&&z(y,V.startTime-U)}}function A(U,V){v=!1,E&&(E=!1,f(_),_=-1),p=!0;var I=c;try{for(S(V),m=n(l);m!==null&&(!(m.expirationTime>V)||U&&!R());){var Q=m.callback;if(typeof Q=="function"){m.callback=null,c=m.priorityLevel;var ie=Q(m.expirationTime<=V);V=t.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(l)&&i(l),S(V)}else i(l);m=n(l)}if(m!==null)var Ie=!0;else{var Ge=n(d);Ge!==null&&z(y,Ge.startTime-V),Ie=!1}return Ie}finally{m=null,c=I,p=!1}}var b=!1,w=null,_=-1,T=5,N=-1;function R(){return!(t.unstable_now()-N<T)}function L(){if(w!==null){var U=t.unstable_now();N=U;var V=!0;try{V=w(!0,U)}finally{V?G():(b=!1,w=null)}}else b=!1}var G;if(typeof x=="function")G=function(){x(L)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,D=q.port2;q.port1.onmessage=L,G=function(){D.postMessage(null)}}else G=function(){g(L,0)};function W(U){w=U,b||(b=!0,G())}function z(U,V){_=g(function(){U(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,W(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(c){case 1:case 2:case 3:var V=3;break;default:V=c}var I=c;c=V;try{return U()}finally{c=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=c;c=U;try{return V()}finally{c=I}},t.unstable_scheduleCallback=function(U,V,I){var Q=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,U={id:h++,callback:V,priorityLevel:U,startTime:I,expirationTime:ie,sortIndex:-1},I>Q?(U.sortIndex=I,e(d,U),n(l)===null&&U===n(d)&&(E?(f(_),_=-1):E=!0,z(y,I-Q))):(U.sortIndex=ie,e(l,U),v||p||(v=!0,W(A))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var V=c;return function(){var I=c;c=V;try{return U.apply(this,arguments)}finally{c=I}}}})($0);Y0.exports=$0;var g_=Y0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_=se,wn=g_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,jo={};function Gr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(jo[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,v_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cp={},up={};function __(t){return qu.call(up,t)?!0:qu.call(cp,t)?!1:v_.test(t)?up[t]=!0:(cp[t]=!0,!1)}function y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S_(t,e,n,i){if(e===null||typeof e>"u"||y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function kf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Of,kf);Xt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Of,kf);Xt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Of,kf);Xt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S_(e,n,r,i)&&(n=null),i||r===null?__(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=x_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),dp=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Pc;function wo(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Lc=!1;function Ic(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function E_(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Ku:return"Profiler";case Bf:return"StrictMode";case Ju:return"Suspense";case Zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case Hf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:Qu(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Qu(t(e))}catch{}}return null}function M_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b_(t){var e=Q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=b_(t))}function eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Q0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tg(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function td(t,e){tg(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||Nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ao=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ao(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function ng(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,rg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T_=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){T_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function og(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=sg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,Ns=null,Ps=null;function gp(t){if(t=ha(t)){if(typeof ld!="function")throw Error(de(280));var e=t.stateNode;e&&(e=fc(e),ld(t.stateNode,t.type,e))}}function ag(t){Ns?Ps?Ps.push(t):Ps=[t]:Ns=t}function lg(){if(Ns){var t=Ns,e=Ps;if(Ps=Ns=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function cg(t,e){return t(e)}function ug(){}var Dc=!1;function dg(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return cg(t,e,n)}finally{Dc=!1,(Ns!==null||Ps!==null)&&(ug(),lg())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var cd=!1;if(Li)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){cd=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{cd=!1}function A_(t,e,n,i,r,s,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Io=!1,Pl=null,Ll=!1,ud=null,C_={onError:function(t){Io=!0,Pl=t}};function R_(t,e,n,i,r,s,o,a,l){Io=!1,Pl=null,A_.apply(C_,arguments)}function N_(t,e,n,i,r,s,o,a,l){if(R_.apply(this,arguments),Io){if(Io){var d=Pl;Io=!1,Pl=null}else throw Error(de(198));Ll||(Ll=!0,ud=d)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xp(t){if(jr(t)!==t)throw Error(de(188))}function P_(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xp(r),t;if(s===i)return xp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function hg(t){return t=P_(t),t!==null?pg(t):null}function pg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pg(t);if(e!==null)return e;t=t.sibling}return null}var mg=wn.unstable_scheduleCallback,vp=wn.unstable_cancelCallback,L_=wn.unstable_shouldYield,I_=wn.unstable_requestPaint,Pt=wn.unstable_now,D_=wn.unstable_getCurrentPriorityLevel,jf=wn.unstable_ImmediatePriority,gg=wn.unstable_UserBlockingPriority,Il=wn.unstable_NormalPriority,U_=wn.unstable_LowPriority,xg=wn.unstable_IdlePriority,lc=null,di=null;function F_(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:z_,O_=Math.log,k_=Math.LN2;function z_(t){return t>>>=0,t===0?32:31-(O_(t)/k_|0)|0}var ba=64,Ta=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function B_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=B_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function V_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yg,Xf,Sg,Eg,Mg,fd=!1,wa=[],sr=null,or=null,ar=null,Yo=new Map,$o=new Map,Qi=[],G_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j_(t,e,n,i,r){switch(e){case"focusin":return sr=lo(sr,t,e,n,i,r),!0;case"dragenter":return or=lo(or,t,e,n,i,r),!0;case"mouseover":return ar=lo(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Yo.set(s,lo(Yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,lo($o.get(s)||null,t,e,n,i,r)),!0}return!1}function bg(t){var e=Rr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=fg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){Sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ad=i,n.target.dispatchEvent(i),ad=null}else return e=ha(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){fl(t)&&n.delete(e)}function W_(){fd=!1,sr!==null&&fl(sr)&&(sr=null),or!==null&&fl(or)&&(or=null),ar!==null&&fl(ar)&&(ar=null),Yo.forEach(yp),$o.forEach(yp)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,fd||(fd=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,W_)))}function qo(t){function e(r){return co(r,t)}if(0<wa.length){co(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&co(sr,t),or!==null&&co(or,t),ar!==null&&co(ar,t),Yo.forEach(e),$o.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&Qi.shift()}var Ls=ki.ReactCurrentBatchConfig,Ul=!0;function X_(t,e,n,i){var r=ft,s=Ls.transition;Ls.transition=null;try{ft=1,Yf(t,e,n,i)}finally{ft=r,Ls.transition=s}}function Y_(t,e,n,i){var r=ft,s=Ls.transition;Ls.transition=null;try{ft=4,Yf(t,e,n,i)}finally{ft=r,Ls.transition=s}}function Yf(t,e,n,i){if(Ul){var r=hd(t,e,n,i);if(r===null)Wc(t,e,i,Fl,n),_p(t,i);else if(j_(r,t,e,n,i))i.stopPropagation();else if(_p(t,i),e&4&&-1<G_.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&yg(s),s=hd(t,e,n,i),s===null&&Wc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wc(t,e,i,null,n)}}var Fl=null;function hd(t,e,n,i){if(Fl=null,t=Gf(i),t=Rr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D_()){case jf:return 1;case gg:return 4;case Il:case U_:return 16;case xg:return 536870912;default:return 16}default:return 16}}var nr=null,$f=null,hl=null;function wg(){if(hl)return hl;var t,e=$f,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return hl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function Sp(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:Sp,this.isPropagationStopped=Sp,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=Cn(Zs),fa=bt({},Zs,{view:0,detail:0}),$_=Cn(fa),Fc,Oc,uo,cc=bt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Fc=t.screenX-uo.screenX,Oc=t.screenY-uo.screenY):Oc=Fc=0,uo=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Ep=Cn(cc),q_=bt({},cc,{dataTransfer:0}),K_=Cn(q_),J_=bt({},fa,{relatedTarget:0}),kc=Cn(J_),Z_=bt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Q_=Cn(Z_),ey=bt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=Cn(ey),ny=bt({},Zs,{data:0}),Mp=Cn(ny),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function Kf(){return oy}var ay=bt({},fa,{key:function(t){if(t.key){var e=iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=Cn(ay),cy=bt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Cn(cy),uy=bt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),dy=Cn(uy),fy=bt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Cn(fy),py=bt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=Cn(py),gy=[9,13,27,32],Jf=Li&&"CompositionEvent"in window,Do=null;Li&&"documentMode"in document&&(Do=document.documentMode);var xy=Li&&"TextEvent"in window&&!Do,Ag=Li&&(!Jf||Do&&8<Do&&11>=Do),Tp=" ",wp=!1;function Cg(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function vy(t,e){switch(t){case"compositionend":return Rg(e);case"keypress":return e.which!==32?null:(wp=!0,Tp);case"textInput":return t=e.data,t===Tp&&wp?null:t;default:return null}}function _y(t,e){if(xs)return t==="compositionend"||!Jf&&Cg(t,e)?(t=wg(),hl=$f=nr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ag&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function Ng(t,e,n,i){ag(i),e=Ol(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Uo=null,Ko=null;function Sy(t){Hg(t,0)}function uc(t){var e=ys(t);if(eg(e))return t}function Ey(t,e){if(t==="change")return e}var Pg=!1;if(Li){var zc;if(Li){var Bc="oninput"in document;if(!Bc){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Bc=typeof Cp.oninput=="function"}zc=Bc}else zc=!1;Pg=zc&&(!document.documentMode||9<document.documentMode)}function Rp(){Uo&&(Uo.detachEvent("onpropertychange",Lg),Ko=Uo=null)}function Lg(t){if(t.propertyName==="value"&&uc(Ko)){var e=[];Ng(e,Ko,t,Gf(t)),dg(Sy,e)}}function My(t,e,n){t==="focusin"?(Rp(),Uo=e,Ko=n,Uo.attachEvent("onpropertychange",Lg)):t==="focusout"&&Rp()}function by(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Ko)}function Ty(t,e){if(t==="click")return uc(e)}function wy(t,e){if(t==="input"||t==="change")return uc(e)}function Ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Ay;function Jo(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=Np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function Ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dg(){for(var t=window,e=Nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nl(t.document)}return e}function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cy(t){var e=Dg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(i!==null&&Zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Pp(n,s);var o=Pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ry=Li&&"documentMode"in document&&11>=document.documentMode,vs=null,pd=null,Fo=null,md=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||vs==null||vs!==Nl(i)||(i=vs,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&Jo(Fo,i)||(Fo=i,i=Ol(pd,"onSelect"),0<i.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Hc={},Ug={};Li&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function dc(t){if(Hc[t])return Hc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ug)return Hc[t]=e[n];return t}var Fg=dc("animationend"),Og=dc("animationiteration"),kg=dc("animationstart"),zg=dc("transitionend"),Bg=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){Bg.set(t,e),Gr(e,[t])}for(var Vc=0;Vc<Ip.length;Vc++){var Gc=Ip[Vc],Ny=Gc.toLowerCase(),Py=Gc[0].toUpperCase()+Gc.slice(1);gr(Ny,"on"+Py)}gr(Fg,"onAnimationEnd");gr(Og,"onAnimationIteration");gr(kg,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(zg,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function Dp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function Hg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,d),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dp(r,a,d),s=l}}}if(Ll)throw t=ud,Ll=!1,ud=null,t}function vt(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var i=t+"__bubble";n.has(i)||(Vg(e,t,2,!1),n.add(i))}function jc(t,e,n){var i=0;e&&(i|=4),Vg(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[Ra]){t[Ra]=!0,q0.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,jc("selectionchange",!1,e))}}function Vg(t,e,n,i){switch(Tg(e)){case 1:var r=X_;break;case 4:r=Y_;break;default:r=Yf}n=r.bind(null,e,n,t),r=void 0,!cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dg(function(){var d=s,h=Gf(n),m=[];e:{var c=Bg.get(t);if(c!==void 0){var p=qf,v=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":p=ly;break;case"focusin":v="focus",p=kc;break;case"focusout":v="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dy;break;case Fg:case Og:case kg:p=Q_;break;case zg:p=hy;break;case"scroll":p=$_;break;case"wheel":p=my;break;case"copy":case"cut":case"paste":p=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?c!==null?c+"Capture":null:c;E=[];for(var x=d,S;x!==null;){S=x;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,f!==null&&(y=Xo(x,f),y!=null&&E.push(Qo(x,y,S)))),g)break;x=x.return}0<E.length&&(c=new p(c,v,null,n,h),m.push({event:c,listeners:E}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==ad&&(v=n.relatedTarget||n.fromElement)&&(Rr(v)||v[Ii]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=d,v=v?Rr(v):null,v!==null&&(g=jr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=d),p!==v)){if(E=Ep,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=bp,y="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?c:ys(p),S=v==null?c:ys(v),c=new E(y,x+"leave",p,n,h),c.target=g,c.relatedTarget=S,y=null,Rr(h)===d&&(E=new E(f,x+"enter",v,n,h),E.target=S,E.relatedTarget=g,y=E),g=y,p&&v)t:{for(E=p,f=v,x=0,S=E;S;S=Jr(S))x++;for(S=0,y=f;y;y=Jr(y))S++;for(;0<x-S;)E=Jr(E),x--;for(;0<S-x;)f=Jr(f),S--;for(;x--;){if(E===f||f!==null&&E===f.alternate)break t;E=Jr(E),f=Jr(f)}E=null}else E=null;p!==null&&Up(m,c,p,E,!1),v!==null&&g!==null&&Up(m,g,v,E,!0)}}e:{if(c=d?ys(d):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var A=Ey;else if(Ap(c))if(Pg)A=wy;else{A=by;var b=My}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(A=Ty);if(A&&(A=A(t,d))){Ng(m,A,n,h);break e}b&&b(t,c,d),t==="focusout"&&(b=c._wrapperState)&&b.controlled&&c.type==="number"&&nd(c,"number",c.value)}switch(b=d?ys(d):window,t){case"focusin":(Ap(b)||b.contentEditable==="true")&&(vs=b,pd=d,Fo=null);break;case"focusout":Fo=pd=vs=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Lp(m,n,h);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Lp(m,n,h)}var w;if(Jf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else xs?Cg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ag&&n.locale!=="ko"&&(xs||_!=="onCompositionStart"?_==="onCompositionEnd"&&xs&&(w=wg()):(nr=h,$f="value"in nr?nr.value:nr.textContent,xs=!0)),b=Ol(d,_),0<b.length&&(_=new Mp(_,t,null,n,h),m.push({event:_,listeners:b}),w?_.data=w:(w=Rg(n),w!==null&&(_.data=w)))),(w=xy?vy(t,n):_y(t,n))&&(d=Ol(d,"onBeforeInput"),0<d.length&&(h=new Mp("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=w))}Hg(m,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&d!==null&&(a=d,r?(l=Xo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Iy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Fp(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Dy,"")}function Na(t,e,n){if(e=Fp(e),Fp(t)!==e&&n)throw Error(de(425))}function kl(){}var gd=null,xd=null;function vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(Oy)}:_d;function Oy(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qo(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),li="__reactFiber$"+Qs,ea="__reactProps$"+Qs,Ii="__reactContainer$"+Qs,yd="__reactEvents$"+Qs,ky="__reactListeners$"+Qs,zy="__reactHandles$"+Qs;function Rr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[li])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[li]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function fc(t){return t[ea]||null}var Sd=[],Ss=-1;function xr(t){return{current:t}}function _t(t){0>Ss||(t.current=Sd[Ss],Sd[Ss]=null,Ss--)}function xt(t,e){Ss++,Sd[Ss]=t.current,t.current=e}var pr={},en=xr(pr),un=xr(!1),Fr=pr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function zl(){_t(un),_t(en)}function zp(t,e,n){if(en.current!==pr)throw Error(de(168));xt(en,e),xt(un,n)}function Gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,M_(t)||"Unknown",r));return bt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Fr=en.current,xt(en,t),xt(un,un.current),!0}function Bp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Gg(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,_t(un),_t(en),xt(en,t)):_t(un),xt(un,n)}var Ti=null,hc=!1,Yc=!1;function jg(t){Ti===null?Ti=[t]:Ti.push(t)}function By(t){hc=!0,jg(t)}function vr(){if(!Yc&&Ti!==null){Yc=!0;var t=0,e=ft;try{var n=Ti;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,hc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),mg(jf,vr),r}finally{ft=e,Yc=!1}}return null}var Es=[],Ms=0,Hl=null,Vl=0,Ln=[],In=0,Or=null,wi=1,Ai="";function br(t,e){Es[Ms++]=Vl,Es[Ms++]=Hl,Hl=t,Vl=e}function Wg(t,e,n){Ln[In++]=wi,Ln[In++]=Ai,Ln[In++]=Or,Or=t;var i=wi;t=Ai;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Zn(e)+r|n<<r|i,Ai=s+t}else wi=1<<s|n<<r|i,Ai=t}function Qf(t){t.return!==null&&(br(t,1),Wg(t,1,0))}function eh(t){for(;t===Hl;)Hl=Es[--Ms],Es[Ms]=null,Vl=Es[--Ms],Es[Ms]=null;for(;t===Or;)Or=Ln[--In],Ln[In]=null,Ai=Ln[--In],Ln[In]=null,wi=Ln[--In],Ln[In]=null}var Tn=null,bn=null,yt=!1,Yn=null;function Xg(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,bn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,bn=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Md(t){if(yt){var e=bn;if(e){var n=e;if(!Hp(t,e)){if(Ed(t))throw Error(de(418));e=lr(n.nextSibling);var i=Tn;e&&Hp(t,e)?Xg(i,n):(t.flags=t.flags&-4097|2,yt=!1,Tn=t)}}else{if(Ed(t))throw Error(de(418));t.flags=t.flags&-4097|2,yt=!1,Tn=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Pa(t){if(t!==Tn)return!1;if(!yt)return Vp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vd(t.type,t.memoizedProps)),e&&(e=bn)){if(Ed(t))throw Yg(),Error(de(418));for(;e;)Xg(t,e),e=lr(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Tn?lr(t.stateNode.nextSibling):null;return!0}function Yg(){for(var t=bn;t;)t=lr(t.nextSibling)}function Hs(){bn=Tn=null,yt=!1}function th(t){Yn===null?Yn=[t]:Yn.push(t)}var Hy=ki.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function $g(t){function e(f,x){if(t){var S=f.deletions;S===null?(f.deletions=[x],f.flags|=16):S.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=fr(f,x),f.index=0,f.sibling=null,f}function s(f,x,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<x?(f.flags|=2,x):S):(f.flags|=2,x)):(f.flags|=1048576,x)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,S,y){return x===null||x.tag!==6?(x=eu(S,f.mode,y),x.return=f,x):(x=r(x,S),x.return=f,x)}function l(f,x,S,y){var A=S.type;return A===gs?h(f,x,S.props.children,y,S.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&Gp(A)===x.type)?(y=r(x,S.props),y.ref=fo(f,x,S),y.return=f,y):(y=Sl(S.type,S.key,S.props,null,f.mode,y),y.ref=fo(f,x,S),y.return=f,y)}function d(f,x,S,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=tu(S,f.mode,y),x.return=f,x):(x=r(x,S.children||[]),x.return=f,x)}function h(f,x,S,y,A){return x===null||x.tag!==7?(x=Ur(S,f.mode,y,A),x.return=f,x):(x=r(x,S),x.return=f,x)}function m(f,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=eu(""+x,f.mode,S),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sa:return S=Sl(x.type,x.key,x.props,null,f.mode,S),S.ref=fo(f,null,x),S.return=f,S;case ms:return x=tu(x,f.mode,S),x.return=f,x;case Ji:var y=x._init;return m(f,y(x._payload),S)}if(Ao(x)||oo(x))return x=Ur(x,f.mode,S,null),x.return=f,x;La(f,x)}return null}function c(f,x,S,y){var A=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return A!==null?null:a(f,x,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:return S.key===A?l(f,x,S,y):null;case ms:return S.key===A?d(f,x,S,y):null;case Ji:return A=S._init,c(f,x,A(S._payload),y)}if(Ao(S)||oo(S))return A!==null?null:h(f,x,S,y,null);La(f,S)}return null}function p(f,x,S,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(S)||null,a(x,f,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sa:return f=f.get(y.key===null?S:y.key)||null,l(x,f,y,A);case ms:return f=f.get(y.key===null?S:y.key)||null,d(x,f,y,A);case Ji:var b=y._init;return p(f,x,S,b(y._payload),A)}if(Ao(y)||oo(y))return f=f.get(S)||null,h(x,f,y,A,null);La(x,y)}return null}function v(f,x,S,y){for(var A=null,b=null,w=x,_=x=0,T=null;w!==null&&_<S.length;_++){w.index>_?(T=w,w=null):T=w.sibling;var N=c(f,w,S[_],y);if(N===null){w===null&&(w=T);break}t&&w&&N.alternate===null&&e(f,w),x=s(N,x,_),b===null?A=N:b.sibling=N,b=N,w=T}if(_===S.length)return n(f,w),yt&&br(f,_),A;if(w===null){for(;_<S.length;_++)w=m(f,S[_],y),w!==null&&(x=s(w,x,_),b===null?A=w:b.sibling=w,b=w);return yt&&br(f,_),A}for(w=i(f,w);_<S.length;_++)T=p(w,f,_,S[_],y),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?_:T.key),x=s(T,x,_),b===null?A=T:b.sibling=T,b=T);return t&&w.forEach(function(R){return e(f,R)}),yt&&br(f,_),A}function E(f,x,S,y){var A=oo(S);if(typeof A!="function")throw Error(de(150));if(S=A.call(S),S==null)throw Error(de(151));for(var b=A=null,w=x,_=x=0,T=null,N=S.next();w!==null&&!N.done;_++,N=S.next()){w.index>_?(T=w,w=null):T=w.sibling;var R=c(f,w,N.value,y);if(R===null){w===null&&(w=T);break}t&&w&&R.alternate===null&&e(f,w),x=s(R,x,_),b===null?A=R:b.sibling=R,b=R,w=T}if(N.done)return n(f,w),yt&&br(f,_),A;if(w===null){for(;!N.done;_++,N=S.next())N=m(f,N.value,y),N!==null&&(x=s(N,x,_),b===null?A=N:b.sibling=N,b=N);return yt&&br(f,_),A}for(w=i(f,w);!N.done;_++,N=S.next())N=p(w,f,_,N.value,y),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?_:N.key),x=s(N,x,_),b===null?A=N:b.sibling=N,b=N);return t&&w.forEach(function(L){return e(f,L)}),yt&&br(f,_),A}function g(f,x,S,y){if(typeof S=="object"&&S!==null&&S.type===gs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Sa:e:{for(var A=S.key,b=x;b!==null;){if(b.key===A){if(A=S.type,A===gs){if(b.tag===7){n(f,b.sibling),x=r(b,S.props.children),x.return=f,f=x;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&Gp(A)===b.type){n(f,b.sibling),x=r(b,S.props),x.ref=fo(f,b,S),x.return=f,f=x;break e}n(f,b);break}else e(f,b);b=b.sibling}S.type===gs?(x=Ur(S.props.children,f.mode,y,S.key),x.return=f,f=x):(y=Sl(S.type,S.key,S.props,null,f.mode,y),y.ref=fo(f,x,S),y.return=f,f=y)}return o(f);case ms:e:{for(b=S.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(f,x.sibling),x=r(x,S.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=tu(S,f.mode,y),x.return=f,f=x}return o(f);case Ji:return b=S._init,g(f,x,b(S._payload),y)}if(Ao(S))return v(f,x,S,y);if(oo(S))return E(f,x,S,y);La(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,S),x.return=f,f=x):(n(f,x),x=eu(S,f.mode,y),x.return=f,f=x),o(f)):n(f,x)}return g}var Vs=$g(!0),qg=$g(!1),Gl=xr(null),jl=null,bs=null,nh=null;function ih(){nh=bs=jl=null}function rh(t){var e=Gl.current;_t(Gl),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){jl=t,nh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(nh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(jl===null)throw Error(de(308));bs=t,jl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Nr=null;function sh(t){Nr===null?Nr=[t]:Nr.push(t)}function Kg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}function jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?s=d:o.next=d,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;o=0,h=d=l=null,a=s;do{var c=a.lane,p=a.eventTime;if((i&c)===c){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,E=a;switch(c=e,p=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){m=v.call(p,m,c);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,c=typeof v=="function"?v.call(p,m,c):v,c==null)break e;m=bt({},m,c);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=r.effects,c===null?r.effects=[a]:c.push(a))}else p={eventTime:p,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=p,l=m):h=h.next=p,o|=c;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;c=a,a=c.next,c.next=null,r.lastBaseUpdate=c,r.shared.pending=null}}while(!0);if(h===null&&(l=m),r.baseState=l,r.firstBaseUpdate=d,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=m}}function Wp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var pa={},fi=xr(pa),ta=xr(pa),na=xr(pa);function Pr(t){if(t===pa)throw Error(de(174));return t}function ah(t,e){switch(xt(na,e),xt(ta,t),xt(fi,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rd(e,t)}_t(fi),xt(fi,e)}function Gs(){_t(fi),_t(ta),_t(na)}function Zg(t){Pr(na.current);var e=Pr(fi.current),n=rd(e,t.type);e!==n&&(xt(ta,t),xt(fi,n))}function lh(t){ta.current===t&&(_t(fi),_t(ta))}var Et=xr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function ch(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var gl=ki.ReactCurrentDispatcher,qc=ki.ReactCurrentBatchConfig,kr=0,Mt=null,Dt=null,zt=null,Yl=!1,Oo=!1,ia=0,Vy=0;function $t(){throw Error(de(321))}function uh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function dh(t,e,n,i,r,s){if(kr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?Xy:Yy,t=n(i,r),Oo){s=0;do{if(Oo=!1,ia=0,25<=s)throw Error(de(301));s+=1,zt=Dt=null,e.updateQueue=null,gl.current=$y,t=n(i,r)}while(Oo)}if(gl.current=$l,e=Dt!==null&&Dt.next!==null,kr=0,zt=Dt=Mt=null,Yl=!1,e)throw Error(de(300));return t}function fh(){var t=ia!==0;return ia=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function zn(){if(Dt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,Dt=t;else{if(t===null)throw Error(de(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function ra(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,d=s;do{var h=d.lane;if((kr&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,o=i):l=l.next=m,Mt.lanes|=h,zr|=h}d=d.next}while(d!==null&&d!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Qg(){}function ex(t,e){var n=Mt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,hh(ix.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,sa(9,nx.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(de(349));kr&30||tx(n,e,r)}return r}function tx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nx(t,e,n,i){e.value=n,e.getSnapshot=i,rx(e)&&sx(t)}function ix(t,e,n){return n(function(){rx(e)&&sx(t)})}function rx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function sx(t){var e=Di(t,1);e!==null&&Qn(e,t,1,-1)}function Xp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,Mt,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ox(){return zn().memoizedState}function xl(t,e,n,i){var r=oi();Mt.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&uh(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function Yp(t,e){return xl(8390656,8,t,e)}function hh(t,e){return pc(2048,8,t,e)}function ax(t,e){return pc(4,2,t,e)}function lx(t,e){return pc(4,4,t,e)}function cx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ux(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,cx.bind(null,e,t),n)}function ph(){}function dx(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function fx(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&uh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hx(t,e,n){return kr&21?(ei(n,e)||(n=vg(),Mt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Gy(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{ft=n,qc.transition=i}}function px(){return zn().memoizedState}function jy(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},mx(t))gx(e,n);else if(n=Kg(t,e,n,i),n!==null){var r=rn();Qn(n,t,i,r),xx(n,e,i)}}function Wy(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(mx(t))gx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Kg(t,e,r,i),n!==null&&(r=rn(),Qn(n,t,i,r),xx(n,e,i))}}function mx(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function gx(t,e){Oo=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}var $l={readContext:kn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Xy={readContext:kn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,cx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:ph,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=Gy.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=oi();if(yt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Bt===null)throw Error(de(349));kr&30||tx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yp(ix.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,nx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Bt.identifierPrefix;if(yt){var n=Ai,i=wi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yy={readContext:kn,useCallback:dx,useContext:kn,useEffect:hh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:Kc,useRef:ox,useState:function(){return Kc(ra)},useDebugValue:ph,useDeferredValue:function(t){var e=zn();return hx(e,Dt.memoizedState,t)},useTransition:function(){var t=Kc(ra)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1},$y={readContext:kn,useCallback:dx,useContext:kn,useEffect:hh,useImperativeHandle:ux,useInsertionEffect:ax,useLayoutEffect:lx,useMemo:fx,useReducer:Jc,useRef:ox,useState:function(){return Jc(ra)},useDebugValue:ph,useDeferredValue:function(t){var e=zn();return Dt===null?e.memoizedState=t:hx(e,Dt.memoizedState,t)},useTransition:function(){var t=Jc(ra)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:ex,useId:px,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(Qn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=dr(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(Qn(e,t,i,n),ml(e,t,i))}};function $p(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,i)||!Jo(r,s):!0}function vx(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=dn(e)?Fr:en.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},oh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=dn(e)?Fr:en.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qy=typeof WeakMap=="function"?WeakMap:Map;function _x(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Od=i),Ad(t,e)},n}function yx(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ad(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cS.bind(null,t,e,n),e.then(t,t))}function Jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Ky=ki.ReactCurrentOwner,cn=!1;function nn(t,e,n,i){e.child=t===null?qg(e,null,n,i):Vs(e,t.child,n,i)}function Qp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=dh(t,e,n,i,s,r),n=fh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(yt&&n&&Qf(e),e.flags|=1,nn(t,e,i,r),e.child)}function em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Sx(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Sx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Jo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Cd(t,e,n,i,r)}function Ex(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(ws,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(ws,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(ws,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(ws,Sn),Sn|=i;return nn(t,e,r,n),e.child}function Mx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,i,r){var s=dn(n)?Fr:en.current;return s=Bs(e,s),Is(e,r),n=dh(t,e,n,i,s,r),i=fh(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(yt&&i&&Qf(e),e.flags|=1,nn(t,e,n,r),e.child)}function tm(t,e,n,i,r){if(dn(n)){var s=!0;Bl(e)}else s=!1;if(Is(e,r),e.stateNode===null)vl(t,e),vx(e,n,i),wd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=kn(d):(d=dn(n)?Fr:en.current,d=Bs(e,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==d)&&qp(e,o,i,d),Zi=!1;var c=e.memoizedState;o.state=c,Wl(e,i,o,r),l=e.memoizedState,a!==i||c!==l||un.current||Zi?(typeof h=="function"&&(Td(e,n,h,i),l=e.memoizedState),(a=Zi||$p(e,n,a,i,c,l,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=d,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jg(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Wn(e.type,a),o.props=d,m=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=dn(n)?Fr:en.current,l=Bs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||c!==l)&&qp(e,o,i,l),Zi=!1,c=e.memoizedState,o.state=c,Wl(e,i,o,r);var v=e.memoizedState;a!==m||c!==v||un.current||Zi?(typeof p=="function"&&(Td(e,n,p,i),v=e.memoizedState),(d=Zi||$p(e,n,d,i,c,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),i=!1)}return Rd(t,e,n,i,s,r)}function Rd(t,e,n,i,r,s){Mx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bp(e,n,!1),Ui(t,e,s);i=e.stateNode,Ky.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Bp(e,n,!0),e.child}function bx(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),ah(t,e.containerInfo)}function nm(t,e,n,i,r){return Hs(),th(r),e.flags|=256,nn(t,e,n,i),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tx(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Et,r&1),t===null)return Md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vc(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pd(n),e.memoizedState=Nd,t):mh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Jy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mh(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&th(i),Vs(e,t.child,null,n),t=mh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zc(Error(de(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=Nd,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=Zc(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Qn(i,t,r,-1))}return Sh(),i=Zc(Error(de(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=lr(r.nextSibling),Tn=e,yt=!0,Yn=null,t!==null&&(Ln[In++]=wi,Ln[In++]=Ai,Ln[In++]=Or,wi=t.id,Ai=t.overflow,Or=e),e=mh(e,i.children),e.flags|=4096,e)}function im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bd(t.return,e,n)}function Qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function wx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&im(t,n,e);else if(t.tag===19)im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zy(t,e,n){switch(e.tag){case 3:bx(e),Hs();break;case 5:Zg(e);break;case 1:dn(e.type)&&Bl(e);break;case 4:ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Tx(t,e,n):(xt(Et,Et.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);xt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return wx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Ex(t,e,n)}return Ui(t,e,n)}var Ax,Ld,Cx,Rx;Ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ld=function(){};Cx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(fi.current);var s=null;switch(n){case"input":r=ed(t,r),i=ed(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=id(t,r),i=id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}sd(n,i);var o;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var a=r[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jo.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var l=i[d];if(a=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jo.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(d,l))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Rx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ho(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Qy(t,e,n){var i=e.pendingProps;switch(eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return dn(e.type)&&zl(),qt(e),null;case 3:return i=e.stateNode,Gs(),_t(un),_t(en),ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Bd(Yn),Yn=null))),Ld(t,e),qt(e),null;case 5:lh(e);var r=Pr(na.current);if(n=e.type,t!==null&&e.stateNode!=null)Cx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return qt(e),null}if(t=Pr(fi.current),Pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)vt(Ro[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":fp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":pp(i,s),vt("invalid",i)}sd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Ea(i),hp(i,s,!0);break;case"textarea":Ea(i),mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[ea]=i,Ax(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)vt(Ro[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":fp(t,i),r=ed(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":pp(t,i),r=id(t,i),vt("invalid",t);break;default:r=i}sd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?og(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&zf(t,s,l,o))}switch(n){case"input":Ea(t),hp(t,i,!1);break;case"textarea":Ea(t),mp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Rx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Pr(na.current),Pr(fi.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(_t(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&bn!==null&&e.mode&1&&!(e.flags&128))Yg(),Hs(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[li]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Yn!==null&&(Bd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ut===0&&(Ut=3):Sh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Gs(),Ld(t,e),t===null&&Zo(e.stateNode.containerInfo),qt(e),null;case 10:return rh(e.type._context),qt(e),null;case 17:return dn(e.type)&&zl(),qt(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ho(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Ws&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return qt(e),null}else 2*Pt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=Et.current,xt(Et,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return yh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function eS(t,e){switch(eh(e),e.tag){case 1:return dn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),_t(un),_t(en),ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lh(e),null;case 13:if(_t(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Et),null;case 4:return Gs(),null;case 10:return rh(e.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var Da=!1,Zt=!1,tS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Id(t,e,n){try{n()}catch(i){wt(t,e,i)}}var rm=!1;function nS(t,e){if(gd=Ul,t=Dg(),Zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,h=0,m=t,c=null;t:for(;;){for(var p;m!==n||r!==0&&m.nodeType!==3||(a=o+r),m!==s||i!==0&&m.nodeType!==3||(l=o+i),m.nodeType===3&&(o+=m.nodeValue.length),(p=m.firstChild)!==null;)c=m,m=p;for(;;){if(m===t)break t;if(c===n&&++d===r&&(a=o),c===s&&++h===i&&(l=o),(p=m.nextSibling)!==null)break;m=c,c=m.parentNode}m=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xd={focusedElem:t,selectionRange:n},Ul=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:Wn(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(y){wt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=rm,rm=!1,v}function ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Id(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nx(t){var e=t.alternate;e!==null&&(t.alternate=null,Nx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[ea],delete e[yd],delete e[ky],delete e[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Px(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Px(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function Fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Vt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Lx(t,e,n),n=n.sibling}function Lx(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Zt||Ts(n,e);case 6:var i=Vt,r=Xn;Vt=null,Gi(t,e,n),Vt=i,Xn=r,Vt!==null&&(Xn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Xn?(t=Vt,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),qo(t)):Xc(Vt,n.stateNode));break;case 4:i=Vt,r=Xn,Vt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),Vt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Zt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Gi(t,e,n),Zt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tS),e.forEach(function(i){var r=dS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Xn=!1;break e;case 3:Vt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Vt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Vt===null)throw Error(de(160));Lx(s,o,r),Vt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(d){wt(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ix(e,t),e=e.sibling}function Ix(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ni(t),i&4){try{ko(3,t,t.return),gc(3,t)}catch(E){wt(t,t.return,E)}try{ko(5,t,t.return)}catch(E){wt(t,t.return,E)}}break;case 1:Hn(e,t),ni(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Hn(e,t),ni(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(E){wt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tg(r,s),od(a,o);var d=od(a,s);for(o=0;o<l.length;o+=2){var h=l[o],m=l[o+1];h==="style"?og(r,m):h==="dangerouslySetInnerHTML"?rg(r,m):h==="children"?Wo(r,m):zf(r,h,m,d)}switch(a){case"input":td(r,s);break;case"textarea":ng(r,s);break;case"select":var c=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):c!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(E){wt(t,t.return,E)}}break;case 6:if(Hn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){wt(t,t.return,E)}}break;case 3:if(Hn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(E){wt(t,t.return,E)}break;case 4:Hn(e,t),ni(t);break;case 13:Hn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vh=Pt())),i&4&&om(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(d=Zt)||h,Hn(e,t),Zt=d):Hn(e,t),ni(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(we=t,h=t.child;h!==null;){for(m=we=h;we!==null;){switch(c=we,p=c.child,c.tag){case 0:case 11:case 14:case 15:ko(4,c,c.return);break;case 1:Ts(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){i=c,n=c.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){wt(i,n,E)}}break;case 5:Ts(c,c.return);break;case 22:if(c.memoizedState!==null){lm(m);continue}}p!==null?(p.return=c,we=p):lm(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sg("display",o))}catch(E){wt(t,t.return,E)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){wt(t,t.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Hn(e,t),ni(t),i&4&&om(t);break;case 21:break;default:Hn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Px(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=sm(t);Fd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sm(t);Ud(t,a,o);break;default:throw Error(de(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){we=t,Dx(t)}function Dx(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Da;var d=Zt;if(Da=o,(Zt=l)&&!d)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?cm(r):l!==null?(l.return=o,we=l):cm(r);for(;s!==null;)we=s,Dx(s),s=s.sibling;we=r,Da=a,Zt=d}am(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):am(t)}}function am(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Zt||e.flags&512&&Dd(e)}catch(c){wt(e,e.return,c)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function lm(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function cm(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Dd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Dd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var rS=Math.ceil,ql=ki.ReactCurrentDispatcher,gh=ki.ReactCurrentOwner,Fn=ki.ReactCurrentBatchConfig,ut=0,Bt=null,It=null,Wt=0,Sn=0,ws=xr(0),Ut=0,oa=null,zr=0,xc=0,xh=0,zo=null,ln=null,vh=0,Ws=1/0,bi=null,Kl=!1,Od=null,ur=null,Ua=!1,ir=null,Jl=0,Bo=0,kd=null,_l=-1,yl=0;function rn(){return ut&6?Pt():_l!==-1?_l:_l=Pt()}function dr(t){return t.mode&1?ut&2&&Wt!==0?Wt&-Wt:Hy.transition!==null?(yl===0&&(yl=vg()),yl):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Tg(t.type)),t):1}function Qn(t,e,n,i){if(50<Bo)throw Bo=0,kd=null,Error(de(185));da(t,n,i),(!(ut&2)||t!==Bt)&&(t===Bt&&(!(ut&2)&&(xc|=n),Ut===4&&er(t,Wt)),fn(t,i),n===1&&ut===0&&!(e.mode&1)&&(Ws=Pt()+500,hc&&vr()))}function fn(t,e){var n=t.callbackNode;H_(t,e);var i=Dl(t,t===Bt?Wt:0);if(i===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?By(um.bind(null,t)):jg(um.bind(null,t)),Fy(function(){!(ut&6)&&vr()}),n=null;else{switch(_g(i)){case 1:n=jf;break;case 4:n=gg;break;case 16:n=Il;break;case 536870912:n=xg;break;default:n=Il}n=Vx(n,Ux.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ux(t,e){if(_l=-1,yl=0,ut&6)throw Error(de(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Dl(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=ut;ut|=2;var s=Ox();(Bt!==t||Wt!==e)&&(bi=null,Ws=Pt()+500,Dr(t,e));do try{aS();break}catch(a){Fx(t,a)}while(!0);ih(),ql.current=s,ut=r,It!==null?e=0:(Bt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=dd(t),r!==0&&(i=r,e=zd(t,r))),e===1)throw n=oa,Dr(t,0),er(t,i),fn(t,Pt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!sS(r)&&(e=Zl(t,i),e===2&&(s=dd(t),s!==0&&(i=s,e=zd(t,s))),e===1))throw n=oa,Dr(t,0),er(t,i),fn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Tr(t,ln,bi);break;case 3:if(er(t,i),(i&130023424)===i&&(e=vh+500-Pt(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_d(Tr.bind(null,t,ln,bi),e);break}Tr(t,ln,bi);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rS(i/1960))-i,10<i){t.timeoutHandle=_d(Tr.bind(null,t,ln,bi),i);break}Tr(t,ln,bi);break;case 5:Tr(t,ln,bi);break;default:throw Error(de(329))}}}return fn(t,Pt()),t.callbackNode===n?Ux.bind(null,t):null}function zd(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=ln,ln=n,e!==null&&Bd(e)),t}function Bd(t){ln===null?ln=t:ln.push.apply(ln,t)}function sS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~xh,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function um(t){if(ut&6)throw Error(de(327));Ds();var e=Dl(t,0);if(!(e&1))return fn(t,Pt()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=dd(t);i!==0&&(e=i,n=zd(t,i))}if(n===1)throw n=oa,Dr(t,0),er(t,e),fn(t,Pt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,ln,bi),fn(t,Pt()),null}function _h(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&(Ws=Pt()+500,hc&&vr())}}function Br(t){ir!==null&&ir.tag===0&&!(ut&6)&&Ds();var e=ut;ut|=1;var n=Fn.transition,i=ft;try{if(Fn.transition=null,ft=1,t)return t()}finally{ft=i,Fn.transition=n,ut=e,!(ut&6)&&vr()}}function yh(){Sn=ws.current,_t(ws)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uy(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Gs(),_t(un),_t(en),ch();break;case 5:lh(i);break;case 4:Gs();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:rh(i.type._context);break;case 22:case 23:yh()}n=n.return}if(Bt=t,It=t=fr(t.current,null),Wt=Sn=e,Ut=0,oa=null,xh=xc=zr=0,ln=zo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function Fx(t,e){do{var n=It;try{if(ih(),gl.current=$l,Yl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yl=!1}if(kr=0,zt=Dt=Mt=null,Oo=!1,ia=0,gh.current=null,n===null||n.return===null){Ut=1,oa=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Jp(o);if(p!==null){p.flags&=-257,Zp(p,o,a,s,e),p.mode&1&&Kp(s,d,e),e=p,l=d;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Kp(s,d,e),Sh();break e}l=Error(de(426))}}else if(yt&&a.mode&1){var g=Jp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Zp(g,o,a,s,e),th(js(l,a));break e}}s=l=js(l,a),Ut!==4&&(Ut=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=_x(s,l,e);jp(s,f);break e;case 1:a=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ur===null||!ur.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yx(s,a,e);jp(s,y);break e}}s=s.return}while(s!==null)}zx(n)}catch(A){e=A,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Ox(){var t=ql.current;return ql.current=$l,t===null?$l:t}function Sh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(zr&268435455)&&!(xc&268435455)||er(Bt,Wt)}function Zl(t,e){var n=ut;ut|=2;var i=Ox();(Bt!==t||Wt!==e)&&(bi=null,Dr(t,e));do try{oS();break}catch(r){Fx(t,r)}while(!0);if(ih(),ut=n,ql.current=i,It!==null)throw Error(de(261));return Bt=null,Wt=0,Ut}function oS(){for(;It!==null;)kx(It)}function aS(){for(;It!==null&&!L_();)kx(It)}function kx(t){var e=Hx(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?zx(t):It=e,gh.current=null}function zx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eS(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,It=null;return}}else if(n=Qy(n,e,Sn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ut===0&&(Ut=5)}function Tr(t,e,n){var i=ft,r=Fn.transition;try{Fn.transition=null,ft=1,lS(t,e,n,i)}finally{Fn.transition=r,ft=i}return null}function lS(t,e,n,i){do Ds();while(ir!==null);if(ut&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V_(t,s),t===Bt&&(It=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,Vx(Il,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=ft;ft=1;var a=ut;ut|=4,gh.current=null,nS(t,n),Ix(n,t),Cy(xd),Ul=!!gd,xd=gd=null,t.current=n,iS(n),I_(),ut=a,ft=o,Fn.transition=s}else t.current=n;if(Ua&&(Ua=!1,ir=t,Jl=r),s=t.pendingLanes,s===0&&(ur=null),F_(n.stateNode),fn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Od,Od=null,t;return Jl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===kd?Bo++:(Bo=0,kd=t):Bo=0,vr(),null}function Ds(){if(ir!==null){var t=_g(Jl),e=Fn.transition,n=ft;try{if(Fn.transition=null,ft=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Jl=0,ut&6)throw Error(de(331));var r=ut;for(ut|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(we=d;we!==null;){var h=we;switch(h.tag){case 0:case 11:case 15:ko(8,h,s)}var m=h.child;if(m!==null)m.return=h,we=m;else for(;we!==null;){h=we;var c=h.sibling,p=h.return;if(Nx(h),h===d){we=null;break}if(c!==null){c.return=p,we=c;break}we=p}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var x=t.current;for(we=x;we!==null;){o=we;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,we=S;else e:for(o=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(A){wt(a,a.return,A)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(ut=r,vr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{ft=n,Fn.transition=e}}return!1}function dm(t,e,n){e=js(n,e),e=_x(t,e,1),t=cr(t,e,1),e=rn(),t!==null&&(da(t,1,e),fn(t,e))}function wt(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=js(n,t),t=yx(e,t,1),e=cr(e,t,1),t=rn(),e!==null&&(da(e,1,t),fn(e,t));break}}e=e.return}}function cS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Pt()-vh?Dr(t,0):xh|=n),fn(t,e)}function Bx(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=rn();t=Di(t,e),t!==null&&(da(t,e,n),fn(t,n))}function uS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bx(t,n)}function dS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Bx(t,n)}var Hx;Hx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Zy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,yt&&e.flags&1048576&&Wg(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Bs(e,en.current);Is(e,n),r=dh(null,e,i,t,r,n);var s=fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,oh(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,wd(e,i,t,n),e=Rd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Qf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hS(i),t=Wn(i,t),r){case 0:e=Cd(null,e,i,t,n);break e;case 1:e=tm(null,e,i,t,n);break e;case 11:e=Qp(null,e,i,t,n);break e;case 14:e=em(null,e,i,Wn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),tm(t,e,i,r,n);case 3:e:{if(bx(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jg(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(de(423)),e),e=nm(t,e,i,n,r);break e}else if(i!==r){r=js(Error(de(424)),e),e=nm(t,e,i,n,r);break e}else for(bn=lr(e.stateNode.containerInfo.firstChild),Tn=e,yt=!0,Yn=null,n=qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=Ui(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return Zg(e),t===null&&Md(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vd(i,r)?o=null:s!==null&&vd(i,s)&&(e.flags|=32),Mx(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&Md(e),null;case 13:return Tx(t,e,n);case 4:return ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Qp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(Gl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!un.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=kn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),em(t,e,i,r,n);case 15:return Sx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vl(t,e),e.tag=1,dn(i)?(t=!0,Bl(e)):t=!1,Is(e,n),vx(e,i,r),wd(e,i,r,n),Rd(null,e,i,!0,t,n);case 19:return wx(t,e,n);case 22:return Ex(t,e,n)}throw Error(de(156,e.tag))};function Vx(t,e){return mg(t,e)}function fS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new fS(t,e,n,i)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hS(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hf)return 11;if(t===Vf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Ur(n.children,r,s,e);case Bf:o=8,r|=8;break;case Ku:return t=Un(12,n,e,r|2),t.elementType=Ku,t.lanes=s,t;case Ju:return t=Un(13,n,e,r),t.elementType=Ju,t.lanes=s,t;case Zu:return t=Un(19,n,e,r),t.elementType=Zu,t.lanes=s,t;case Z0:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case J0:o=9;break e;case Hf:o=11;break e;case Vf:o=14;break e;case Ji:o=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Z0,t.lanes=n,t.stateNode={isHidden:!1},t}function eu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function tu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,i,r,s,o,a,l){return t=new pS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(s),t}function mS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Gx(t){if(!t)return pr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(dn(n))return Gg(t,n,e)}return e}function jx(t,e,n,i,r,s,o,a,l){return t=Mh(n,i,!0,t,r,s,o,a,l),t.context=Gx(null),n=t.current,i=rn(),r=dr(n),s=Ri(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,da(t,r,i),fn(t,i),t}function _c(t,e,n,i){var r=e.current,s=rn(),o=dr(r);return n=Gx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(Qn(t,r,o,s),ml(t,r,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bh(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function gS(){return null}var Wx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Th(t){this._internalRoot=t}yc.prototype.render=Th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));_c(t,e,null,null)};yc.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){_c(null,t,null,null)}),e[Ii]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&bg(t)}};function wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hm(){}function xS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=Ql(o);s.call(d)}}var o=jx(e,i,t,0,null,!1,!1,"",hm);return t._reactRootContainer=o,t[Ii]=o.current,Zo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var d=Ql(l);a.call(d)}}var l=Mh(t,0,!1,null,null,!1,!1,"",hm);return t._reactRootContainer=l,t[Ii]=l.current,Zo(t.nodeType===8?t.parentNode:t),Br(function(){_c(e,l,n,i)}),l}function Ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}_c(e,o,t,r)}else o=xS(n,e,t,r,i);return Ql(o)}yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Wf(e,n|1),fn(e,Pt()),!(ut&6)&&(Ws=Pt()+500,vr()))}break;case 13:Br(function(){var i=Di(t,1);if(i!==null){var r=rn();Qn(i,t,1,r)}}),bh(t,1)}};Xf=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=rn();Qn(e,t,134217728,n)}bh(t,134217728)}};Sg=function(t){if(t.tag===13){var e=dr(t),n=Di(t,e);if(n!==null){var i=rn();Qn(n,t,e,i)}bh(t,e)}};Eg=function(){return ft};Mg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(de(90));eg(i),td(i,r)}}}break;case"textarea":ng(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};cg=_h;ug=Br;var vS={usingClientEntryPoint:!1,Events:[ha,ys,fc,ag,lg,_h]},po={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hg(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{lc=Fa.inject(_S),di=Fa}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(e))throw Error(de(200));return mS(t,e,null,n)};An.createRoot=function(t,e){if(!wh(t))throw Error(de(299));var n=!1,i="",r=Wx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Th(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=hg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Br(t)};An.hydrate=function(t,e,n){if(!Sc(e))throw Error(de(200));return Ec(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!wh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Wx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jx(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};An.render=function(t,e,n){if(!Sc(e))throw Error(de(200));return Ec(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(de(40));return t._reactRootContainer?(Br(function(){Ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};An.unstable_batchedUpdates=_h;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Ec(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Xx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx)}catch(t){console.error(t)}}Xx(),X0.exports=An;var yS=X0.exports,pm=yS;$u.createRoot=pm.createRoot,$u.hydrateRoot=pm.hydrateRoot;const nu=[{id:"frontend",title:"FRONTEND /// WEB & UI",icon:"Cpu",accent:"border-sky-500 text-sky-400",badge:"ACTIVE",skills:[{name:"HTML5 / CSS3 / Flexbox & Grid",level:0},{name:"JavaScript (DOM, ES6+, Async)",level:0},{name:"Tailwind CSS",level:0},{name:"Git / GitHub Workflow",level:0}]},{id:"backend",title:"BACKEND /// PYTHON & APIS",icon:"Terminal",accent:"border-blue-500 text-blue-400",badge:"LEARNING",skills:[{name:"Python 3 (Core Logic & Scripting)",level:0},{name:"FastAPI / Flask (REST APIs)",level:0},{name:"fetch() / Async API Integration",level:0},{name:"JSON & CORS Configuration",level:0}]},{id:"ml",title:"ML & AI /// PIPELINES",icon:"Zap",accent:"border-red-500 text-red-400",badge:"PRIORITY",skills:[{name:"scikit-learn (Classification / Regression)",level:0},{name:"Hugging Face Transformers",level:0},{name:"Python ML APIs (Text / NLP)",level:0},{name:"MLOps & Model Deployment",level:0}]},{id:"devops",title:"DEVOPS /// CI/CD & CLOUD",icon:"Cloud",accent:"border-emerald-500 text-emerald-400",badge:"PRIORITY",skills:[{name:"Docker & Containerization",level:0},{name:"GitHub Actions (CI/CD Pipelines)",level:0},{name:"Linux / Terminal & Bash",level:0},{name:"Cloud VPS (DigitalOcean / AWS EC2)",level:0}]}],iu=[{id:"m1",value:"4+ TRACKS",label:"LEARNING TRACKS ACTIVE",detail:"Full-Stack (TOP), Python ML APIs, DevOps & Docker, CI/CD Automation — running in parallel.",accent:"text-sky-500"},{id:"m2",value:"TOP DONE",label:"ODIN PROJECT FOUNDATION",detail:"HTML, CSS, JavaScript, DOM manipulation, Flexbox/Grid, Git & GitHub — foundation fully completed.",accent:"text-blue-500"},{id:"m3",value:"3 PHASES",label:"ROADMAP IN EXECUTION",detail:"Phase 1: FastAPI backends · Phase 2: Docker isolation · Phase 3: GitHub Actions CI/CD pipeline.",accent:"text-red-500"},{id:"m4",value:"₹50K+",label:"TARGET TICKET SIZE",detail:"Building toward high-ticket DevOps + MLOps gigs: containerized pipelines, LLM deployments, automation.",accent:"text-emerald-500"}],ru=[{id:"ex1",year:"2025 - PRESENT",role:"FULL-STACK LEARNER — THE ODIN PROJECT",org:"SELF-DIRECTED / THE ODIN PROJECT",location:"INDIA",type:"ACTIVE",accentColor:"text-sky-400",markerColor:"border-sky-400",highlights:["Completed The Odin Project Foundation — HTML5, CSS3, Flexbox, Grid, responsive design, and clean semantic markup.","Mastered vanilla JavaScript fundamentals: DOM manipulation, events, async/await, fetch API, and ES6+ syntax.","Established solid Git & GitHub workflow: branching, committing, pull requests, and repo management.","Currently progressing through the JavaScript full-stack track toward Node.js and backend integration."]},{id:"ex2",year:"2025 - PRESENT",role:"PYTHON ML & DEVOPS ENGINEER (IN TRAINING)",org:"SELF-DIRECTED — ML + DEVOPS PRIORITY TRACK",location:"INDIA",type:"PRIORITY",accentColor:"text-red-400",markerColor:"border-red-500",highlights:["Building Python backends using FastAPI — RESTful routes, JSON handling, CORS middleware, async endpoints.","Learning Docker and containerization: writing Dockerfiles, docker-compose configs, and isolated environments.","Studying GitHub Actions for CI/CD pipelines — automating build, test, and deploy workflows on code push.","Exploring scikit-learn, Hugging Face Transformers, and open-source LLM deployment for high-ticket MLOps gigs."]},{id:"ex3",year:"2025",role:"HACKATHON TEAM LEADER — FULL-STACK & BACKEND",org:"COLLEGE HACKATHON",location:"INDIA",type:"PROJECT",accentColor:"text-emerald-400",markerColor:"border-emerald-500",highlights:["Led team as technical architect, decoupling frontend (HTML/CSS/JS) from Python FastAPI backend via REST APIs.","Implemented CORS middleware integration so the JavaScript fetch() layer could consume Python endpoints cleanly.","Defined data contracts between frontend and backend teams on Day 1, enabling parallel development with mock JSON.","Managed the team Git repository, preventing merge conflicts and ensuring clean collaborative code flow."]}],su=[{id:"a1",title:"WHY I'M LEARNING ML & DEVOPS BEFORE I FINISH FULL-STACK",category:"STRATEGY",readTime:"LEARNING JOURNAL",date:"2026.08",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",excerpt:"Most students follow the linear path — finish full-stack, then maybe add ML. Here's why I'm running ML and DevOps in parallel from Day 1, and how it's shaping my high-ticket freelance goal."},{id:"a2",title:"THE FASTAPI + DOCKER STACK: MY FIRST PRODUCTION-READY ML PIPELINE",category:"ML + DEVOPS",readTime:"BUILD LOG",date:"2026.08",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",excerpt:"Breaking down my 3-phase roadmap: building a Python classification API with FastAPI, containerizing it with Docker, and automating deployment via GitHub Actions — all while still in college."},{id:"a3",title:"LEADING A HACKATHON TEAM WITH JUST TOP FOUNDATIONS",category:"HACKATHON",readTime:"EXPERIENCE LOG",date:"2026.07",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",excerpt:"I walked into a hackathon having only completed The Odin Project Foundation. Here's how I led the team, decoupled the frontend from the Python backend, and delivered a working product."}],ou=[{id:"portfolio-ai-self",name:"RIDHAM INTELLIGENCE PORTFOLIO",category:"WEB APPS",tag:"LIVE PROJECT",badgeColor:"border-sky-500 text-sky-400",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",excerpt:"This very portfolio — precision-engineered with React, Vite, and a sleek dark engineering design language. Features WebGL distortion, 3D canvas effects, and OriginKit animations.",specs:{stack:"React / Vite / Tailwind CSS / Three.js",powerIndex:"LIVE DEPLOY",latency:"Vite HMR",architecture:"Component Architecture"},description:"A full-spectrum personal developer portfolio built with a sleek dark engineering aesthetic. Built with React + Vite, featuring interactive canvas animations, WebGL liquid distortion, Hover Mesh Text, Smokey Text, Gallery Tunnel, and Line Ripple Background — all self-integrated from OriginKit.",github:"https://github.com/ridham005/portfolio-ai-self",demo:"#"},{id:"hackathon-fastapi",name:"HACKATHON FULLSTACK MVP",category:"FULL-STACK",tag:"HACKATHON",badgeColor:"border-red-500 text-red-400",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",excerpt:"Decoupled fullstack web app built under hackathon time pressure — vanilla JS frontend consuming a Python FastAPI backend, with CORS, JSON contracts, and Git team management.",specs:{stack:"HTML/CSS/JS / Python / FastAPI",powerIndex:"TEAM LEAD",latency:"REST + fetch()",architecture:"Decoupled API"},description:"Led a team at a college hackathon building a decoupled frontend/backend application. Used HTML, CSS, and vanilla JavaScript fetch() calls on the frontend to consume Python 3 FastAPI REST endpoints. Defined JSON data contracts on Day 1, handled CORS middleware, and managed team Git repository.",github:"#",demo:"#"},{id:"top-foundation-projects",name:"THE ODIN PROJECT BUILDS",category:"WEB APPS",tag:"FOUNDATION",badgeColor:"border-blue-500 text-blue-400",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",excerpt:"A collection of projects built while completing The Odin Project Foundation — landing pages, DOM projects, and interactive JavaScript applications.",specs:{stack:"HTML5 / CSS3 / JavaScript",powerIndex:"FOUNDATION",latency:"DOM Manipulation",architecture:"Vanilla JS"},description:"Projects built during The Odin Project Foundation track: responsive landing pages with Flexbox/Grid layouts, DOM manipulation projects (to-do lists, calculators, etch-a-sketch), and clean Git-managed repositories with proper commit history.",github:"https://github.com/ridham005",demo:"#"},{id:"docker-ml-pipeline",name:"DOCKER ML PIPELINE (WIP)",category:"AI / ML",tag:"IN PROGRESS",badgeColor:"border-emerald-500 text-emerald-400",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",excerpt:"Work-in-progress: A containerized Python ML API that classifies text using scikit-learn, served via FastAPI, and auto-deployed with GitHub Actions CI/CD.",specs:{stack:"Python / FastAPI / Docker / GitHub Actions",powerIndex:"PHASE 2 BUILD",latency:"Containerized",architecture:"MLOps Pipeline"},description:"Following the 3-phase roadmap: Phase 1 (FastAPI sentiment/classification API) → Phase 2 (Dockerized with docker-compose) → Phase 3 (GitHub Actions CI/CD auto-deploy to DigitalOcean VPS). Goal: build a high-ticket portfolio piece demonstrating MLOps capabilities.",github:"#",demo:"#"}],au={platforms:[{id:"web",name:"WEB APP",desc:"Interactive SaaS dashboard, portfolio or e-commerce platform",pts:150},{id:"ai",name:"AI / ML PROJECT",desc:"API-driven ML service, RAG pipeline or NLP classification app",pts:220},{id:"fullstack",name:"FULL-STACK SYSTEM",desc:"Decoupled frontend + backend, auth, database and CI/CD",pts:280}],engines:[{id:"react",name:"REACT / VITE",pts:160},{id:"next",name:"NEXT.JS APP ROUTER",pts:190},{id:"python",name:"PYTHON / FASTAPI",pts:210},{id:"node",name:"NODE.JS / EXPRESS",pts:180}],packages:[{id:"cdn",name:"CDN & EDGE CACHING",pts:50,desc:"Fast global delivery via edge network"},{id:"ai",name:"AI ASSISTANT INTEGRATION",pts:75,desc:"Embedded LLM assistant or tool execution"},{id:"ws",name:"REAL-TIME WEBSOCKETS",pts:45,desc:"Live event streaming and data feeds"},{id:"auth",name:"AUTH & SECURITY",pts:40,desc:"OAuth2, JWT and role-based access control"}]},Zr={skills:"ridham_skills_v1",milestones:"ridham_milestones_v1",experience:"ridham_experience_v1",articles:"ridham_articles_v1",projects:"ridham_projects_v1",configurator:"ridham_configurator_v1"};function SS(t,e){try{const n=localStorage.getItem(t);if(n)return JSON.parse(n)}catch{}return e}function Qr(t,e){const[n,i]=se.useState(()=>SS(t,e));return se.useEffect(()=>{localStorage.setItem(t,JSON.stringify(n))},[n,t]),[n,i]}const Yx=se.createContext(null);function ES({children:t}){const[e,n]=Qr(Zr.skills,nu),[i,r]=Qr(Zr.milestones,iu),[s,o]=Qr(Zr.experience,ru),[a,l]=Qr(Zr.articles,su),[d,h]=Qr(Zr.projects,ou),[m,c]=Qr(Zr.configurator,au),p=()=>{n(nu),r(iu),o(ru),l(su),h(ou),c(au)};return u.jsx(Yx.Provider,{value:{categories:e,setCategories:n,resetSkills:()=>n(nu),milestones:i,setMilestones:r,resetMilestones:()=>r(iu),experience:s,setExperience:o,resetExperience:()=>o(ru),articles:a,setArticles:l,resetArticles:()=>l(su),projects:d,setProjects:h,resetProjects:()=>h(ou),configurator:m,setConfigurator:c,resetConfigurator:()=>c(au),resetAll:p},children:t})}function eo(){const t=se.useContext(Yx);if(!t)throw new Error("usePortfolio must be used inside <PortfolioProvider>");return t}const Ah=eo,MS=ES,$x=se.createContext(null),mo="ridham_admin_hash",Oa="ridham_admin_session";async function ka(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function bS({children:t}){const[e,n]=se.useState(()=>sessionStorage.getItem(Oa)==="true"),[i,r]=se.useState(()=>!!localStorage.getItem(mo)),[s,o]=se.useState(!1),[a,l]=se.useState("");se.useEffect(()=>{const p=v=>{v.ctrlKey&&v.shiftKey&&v.key==="E"&&(v.preventDefault(),o(!0),l(""))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]);const d=se.useCallback(async p=>{const v=localStorage.getItem(mo);return await ka(p)===v?(sessionStorage.setItem(Oa,"true"),n(!0),o(!1),l(""),!0):(l("Incorrect password. Try again."),!1)},[]),h=se.useCallback(async p=>{if(p.length<6)return l("Password must be at least 6 characters."),!1;const v=await ka(p);return localStorage.setItem(mo,v),sessionStorage.setItem(Oa,"true"),r(!0),n(!0),o(!1),l(""),!0},[]),m=se.useCallback(async(p,v)=>{const E=localStorage.getItem(mo);if(await ka(p)!==E)return l("Current password is incorrect."),!1;if(v.length<6)return l("New password must be at least 6 characters."),!1;const f=await ka(v);return localStorage.setItem(mo,f),l(""),!0},[]),c=se.useCallback(()=>{sessionStorage.removeItem(Oa),n(!1)},[]);return u.jsx($x.Provider,{value:{isAdmin:e,isPasswordSet:i,modalOpen:s,setModalOpen:o,error:a,setError:l,login:d,setupPassword:h,changePassword:m,logout:c},children:t})}function Wr(){const t=se.useContext($x);if(!t)throw new Error("useAdmin must be used inside <AdminProvider>");return t}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ye=(t,e)=>{const n=se.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...d},h)=>se.createElement("svg",{ref:h,...TS,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${wS(t)}`,a].join(" "),...d},[...e.map(([m,c])=>se.createElement(m,c)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Ye("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Ye("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=Ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=Ye("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=Ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=Ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=Ye("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=Ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=Ye("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=Ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=Ye("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=Ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=Ye("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=Ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=Ye("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=Ye("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Ye("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=Ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Ye("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=Ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=Ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=Ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Ye("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=Ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=Ye("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=Ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=Ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=Ye("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=Ye("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=Ye("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Ye("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function JS(){const{isAdmin:t,isPasswordSet:e,modalOpen:n,setModalOpen:i,error:r,setError:s,login:o,setupPassword:a,changePassword:l,logout:d}=Wr(),[h,m]=se.useState("login"),[c,p]=se.useState(!1),[v,E]=se.useState(""),[g,f]=se.useState(""),[x,S]=se.useState(""),[y,A]=se.useState("");if(se.useEffect(()=>{n&&(A(""),s(""),E(""),f(""),S(""),p(!1),m(t?"panel":e?"login":"setup"))},[n]),!n)return null;const b=()=>{i(!1),E(""),f(""),S(""),s(""),A("")},w=async R=>{R.preventDefault();const L=await o(v);E(""),L&&m("panel")},_=async R=>{if(R.preventDefault(),v!==g){s("Passwords don't match.");return}await a(v)&&(E(""),f(""),m("panel"))},T=async R=>{if(R.preventDefault(),g!==x){s("New passwords don't match.");return}await l(v,g)&&(E(""),f(""),S(""),A("Password changed successfully!"))},N=()=>{d(),b()};return u.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4",style:{backgroundColor:"rgba(0,0,0,0.85)",backdropFilter:"blur(4px)"},onClick:R=>{R.target===R.currentTarget&&b()},children:u.jsxs("div",{className:"relative w-full max-w-sm shadow-2xl",style:{backgroundColor:"#09090b",border:"1px solid #3f3f46"},onClick:R=>R.stopPropagation(),children:[u.jsxs("div",{style:{borderBottom:"1px solid #27272a",padding:"16px 24px"},className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-1 h-5 bg-gradient-to-b from-sky-500 to-red-600"}),u.jsxs("div",{className:"flex items-center gap-2",children:[t?u.jsx(El,{size:18,style:{color:"#34d399"}}):u.jsx(YS,{size:18,style:{color:"#38bdf8"}}),u.jsx("span",{style:{color:"#fff",fontSize:"12px",fontFamily:"monospace",fontWeight:700,letterSpacing:"0.12em"},children:h==="setup"?"SETUP ADMIN ACCESS":h==="change"?"CHANGE PASSWORD":t?"ADMIN PANEL":"ADMIN LOGIN"})]})]}),u.jsx("button",{onClick:b,style:{color:"#71717a",padding:"4px"},className:"hover:text-white transition-colors",children:u.jsx(no,{size:18})})]}),u.jsxs("div",{style:{padding:"24px"},children:[h==="panel"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-start gap-3 p-4",style:{background:"rgba(6,78,59,0.2)",border:"1px solid rgba(52,211,153,0.3)"},children:[u.jsx(El,{size:20,style:{color:"#34d399",flexShrink:0}}),u.jsxs("div",{children:[u.jsx("div",{style:{color:"#fff",fontSize:"13px",fontWeight:700,fontFamily:"monospace"},children:"ADMIN ACCESS ACTIVE"}),u.jsx("div",{style:{color:"#a1a1aa",fontSize:"11px",marginTop:"4px",lineHeight:1.5},children:"All EDIT buttons are now visible. Session clears automatically when you close the tab."})]})]}),u.jsxs("div",{style:{border:"1px solid #27272a",padding:"12px",fontSize:"11px",fontFamily:"monospace",color:"#71717a",lineHeight:1.7},children:[u.jsx("strong",{style:{color:"#d4d4d8"},children:"SHORTCUT:"})," ","Press ",u.jsx("kbd",{style:{background:"#27272a",color:"#fff",padding:"1px 6px",borderRadius:"3px"},children:"Ctrl"})," ","+"," ",u.jsx("kbd",{style:{background:"#27272a",color:"#fff",padding:"1px 6px",borderRadius:"3px"},children:"Shift"})," ","+"," ",u.jsx("kbd",{style:{background:"#27272a",color:"#fff",padding:"1px 6px",borderRadius:"3px"},children:"E"})," ","anytime to open this panel."]}),u.jsxs("button",{onClick:()=>{m("change"),s(""),A("")},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"12px",border:"1px solid #3f3f46",color:"#d4d4d8",fontSize:"12px",fontFamily:"monospace",fontWeight:700,background:"transparent",cursor:"pointer",transition:"border-color 0.2s, color 0.2s"},onMouseEnter:R=>{R.currentTarget.style.borderColor="#fff",R.currentTarget.style.color="#fff"},onMouseLeave:R=>{R.currentTarget.style.borderColor="#3f3f46",R.currentTarget.style.color="#d4d4d8"},children:[u.jsx(zS,{size:14})," CHANGE PASSWORD"]}),u.jsxs("button",{onClick:N,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"12px",border:"1px solid #450a0a",color:"#f87171",fontSize:"12px",fontFamily:"monospace",fontWeight:700,background:"transparent",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:R=>R.currentTarget.style.background="rgba(127,29,29,0.3)",onMouseLeave:R=>R.currentTarget.style.background="transparent",children:[u.jsx(Xr,{size:14})," LOCK & LOG OUT"]})]}),h==="setup"&&u.jsxs("form",{onSubmit:_,className:"space-y-4",children:[u.jsx("div",{style:{border:"1px solid #27272a",padding:"12px",fontSize:"11px",fontFamily:"monospace",color:"#a1a1aa",lineHeight:1.6},children:"No admin password set. Create one now. Only you will know it."}),u.jsxs("div",{children:[u.jsxs("label",{style:{display:"block",fontSize:"10px",fontFamily:"monospace",color:"#71717a",marginBottom:"6px",textTransform:"uppercase"},children:["New Password ",u.jsx("span",{style:{color:"#52525b"},children:"(min 6 chars)"})]}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{autoFocus:!0,type:c?"text":"password",value:v,onChange:R=>{E(R.target.value),s("")},required:!0,minLength:6,placeholder:"Enter password",style:{width:"100%",background:"#000",border:"1px solid #3f3f46",color:"#fff",fontSize:"14px",fontFamily:"monospace",padding:"10px 40px 10px 12px",outline:"none",boxSizing:"border-box"},onFocus:R=>R.target.style.borderColor="#38bdf8",onBlur:R=>R.target.style.borderColor="#3f3f46"}),u.jsx("button",{type:"button",onClick:()=>p(R=>!R),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",color:"#71717a",background:"none",border:"none",cursor:"pointer",padding:"4px"},children:c?u.jsx(mm,{size:14}):u.jsx(gm,{size:14})})]})]}),u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:"10px",fontFamily:"monospace",color:"#71717a",marginBottom:"6px",textTransform:"uppercase"},children:"Confirm Password"}),u.jsx("input",{type:c?"text":"password",value:g,onChange:R=>f(R.target.value),required:!0,placeholder:"Repeat password",style:{width:"100%",background:"#000",border:"1px solid #3f3f46",color:"#fff",fontSize:"14px",fontFamily:"monospace",padding:"10px 12px",outline:"none",boxSizing:"border-box"},onFocus:R=>R.target.style.borderColor="#38bdf8",onBlur:R=>R.target.style.borderColor="#3f3f46"})]}),r&&u.jsx("p",{style:{color:"#f87171",fontSize:"12px",fontFamily:"monospace",margin:0},children:r}),u.jsxs("button",{type:"submit",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"12px",background:"#fff",color:"#000",fontSize:"12px",fontFamily:"monospace",fontWeight:700,border:"none",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:R=>R.currentTarget.style.background="#e4e4e7",onMouseLeave:R=>R.currentTarget.style.background="#fff",children:[u.jsx(El,{size:16})," SET ADMIN PASSWORD"]})]}),h==="login"&&u.jsxs("form",{onSubmit:w,className:"space-y-4",children:[u.jsx("p",{style:{color:"#71717a",fontSize:"12px",fontFamily:"monospace",margin:0},children:"Enter your admin password to unlock edit mode across all sections."}),u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:"10px",fontFamily:"monospace",color:"#71717a",marginBottom:"6px",textTransform:"uppercase"},children:"Password"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{autoFocus:!0,type:c?"text":"password",value:v,onChange:R=>{E(R.target.value),s("")},required:!0,placeholder:"••••••••",style:{width:"100%",background:"#000",border:"1px solid #3f3f46",color:"#fff",fontSize:"14px",fontFamily:"monospace",padding:"10px 40px 10px 12px",outline:"none",boxSizing:"border-box"},onFocus:R=>R.target.style.borderColor="#38bdf8",onBlur:R=>R.target.style.borderColor="#3f3f46"}),u.jsx("button",{type:"button",onClick:()=>p(R=>!R),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",color:"#71717a",background:"none",border:"none",cursor:"pointer",padding:"4px"},children:c?u.jsx(mm,{size:14}):u.jsx(gm,{size:14})})]})]}),r&&u.jsx("p",{style:{color:"#f87171",fontSize:"12px",fontFamily:"monospace",margin:0},children:r}),u.jsxs("button",{type:"submit",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"12px",background:"#fff",color:"#000",fontSize:"12px",fontFamily:"monospace",fontWeight:700,border:"none",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:R=>R.currentTarget.style.background="#e4e4e7",onMouseLeave:R=>R.currentTarget.style.background="#fff",children:[u.jsx(Yr,{size:16})," UNLOCK EDIT MODE"]})]}),h==="change"&&u.jsxs("form",{onSubmit:T,className:"space-y-4",children:[["Current Password","New Password (min 6 chars)","Confirm New Password"].map((R,L)=>{const G=[v,g,x],q=[D=>{E(D),s("")},D=>f(D),D=>S(D)];return u.jsxs("div",{children:[u.jsx("label",{style:{display:"block",fontSize:"10px",fontFamily:"monospace",color:"#71717a",marginBottom:"6px",textTransform:"uppercase"},children:R}),u.jsx("input",{type:c?"text":"password",value:G[L],onChange:D=>q[L](D.target.value),required:!0,placeholder:"••••••••",style:{width:"100%",background:"#000",border:"1px solid #3f3f46",color:"#fff",fontSize:"14px",fontFamily:"monospace",padding:"10px 12px",outline:"none",boxSizing:"border-box"},onFocus:D=>D.target.style.borderColor="#38bdf8",onBlur:D=>D.target.style.borderColor="#3f3f46"})]},R)}),u.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[u.jsx("input",{type:"checkbox",checked:c,onChange:R=>p(R.target.checked),style:{accentColor:"#38bdf8"}}),u.jsx("span",{style:{fontSize:"12px",fontFamily:"monospace",color:"#71717a"},children:"Show passwords"})]}),r&&u.jsx("p",{style:{color:"#f87171",fontSize:"12px",fontFamily:"monospace",margin:0},children:r}),y&&u.jsx("p",{style:{color:"#34d399",fontSize:"12px",fontFamily:"monospace",margin:0},children:y}),u.jsxs("div",{style:{display:"flex",gap:"8px"},children:[u.jsx("button",{type:"button",onClick:()=>{m("panel"),s(""),A("")},style:{flex:1,padding:"10px",border:"1px solid #3f3f46",color:"#a1a1aa",fontSize:"12px",fontFamily:"monospace",fontWeight:700,background:"transparent",cursor:"pointer"},children:"BACK"}),u.jsxs("button",{type:"submit",style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"10px",background:"#fff",color:"#000",fontSize:"12px",fontFamily:"monospace",fontWeight:700,border:"none",cursor:"pointer"},children:[u.jsx(XS,{size:13})," UPDATE"]})]})]})]}),!t&&u.jsx("div",{style:{padding:"8px 24px 16px",textAlign:"center",fontSize:"10px",fontFamily:"monospace",color:"#3f3f46"},children:"VISITORS CANNOT ACCESS THIS PANEL · SHA-256 PROTECTED"})]})})}function ZS({onOpenCopilot:t,onOpenContact:e,soundActive:n,onToggleSound:i,activeSection:r,setActiveSection:s}){const[o,a]=se.useState(!1),l=[{id:"overview",label:"OVERVIEW"},{id:"projects",label:"PROJECTS"},{id:"configurator",label:"CONFIGURATOR"},{id:"powertrain",label:"SKILLS"},{id:"chronicles",label:"CHRONICLES"},{id:"magazine",label:"BLOG"}],d=h=>{s(h),a(!1);const m=document.getElementById(h);m&&m.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:"top-nav",children:[u.jsxs("div",{className:"flex items-center gap-4 cursor-pointer",onClick:()=>d("overview"),children:[u.jsx("div",{className:"stripe-vertical h-7 rounded-none",style:{background:"linear-gradient(180deg, #0066b1 0%, #1c69d4 50%, #e22718 100%)",width:"3px"}}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsxs("span",{className:"font-bold text-white text-xl tracking-tighter italic font-sans",children:["RIDHAM ",u.jsx("span",{className:"text-sm not-italic ml-1 text-white tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800",children:"///"})]})})]}),u.jsx("div",{className:"hidden xl:flex items-center gap-2",children:l.map(h=>u.jsx("button",{onClick:()=>d(h.id),className:`text-xs font-bold tracking-widest px-4 py-2 transition-all border rounded-none ${r===h.id?"text-white border-white bg-zinc-900":"text-zinc-400 border-transparent hover:border-zinc-800 hover:text-white hover:bg-zinc-950"}`,children:h.label},h.id))}),u.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[u.jsx("button",{onClick:i,title:n?"Sound ACTIVE":"Enable Sound",className:"flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-300 hover:text-white px-3 py-1.5 border border-zinc-800 hover:border-zinc-500 bg-zinc-950 transition-all shrink-0",children:n?u.jsxs(u.Fragment,{children:[u.jsx(xm,{size:15,className:"text-red-500 animate-pulse"}),u.jsx("span",{className:"text-[11px] text-red-500",children:"SOUND ON"})]}):u.jsxs(u.Fragment,{children:[u.jsx(vm,{size:15,className:"text-zinc-500"}),u.jsx("span",{className:"text-[11px] text-zinc-500",children:"SOUND OFF"})]})}),u.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-xs font-bold tracking-widest text-white px-3 py-1.5 border border-zinc-700 bg-zinc-900 hover:border-white transition-all shrink-0",children:[u.jsx(ec,{size:15,className:"text-sky-400"}),u.jsx("span",{children:"AI COPILOT"})]}),u.jsx("button",{onClick:e,className:"button-primary h-9 px-4 text-xs tracking-widest shrink-0",children:"CONTACT ///"})]}),u.jsxs("div",{className:"flex xl:hidden items-center gap-3",children:[u.jsx("button",{onClick:t,className:"p-2 border border-zinc-800 text-white",children:u.jsx(ec,{size:18,className:"text-sky-400"})}),u.jsx("button",{onClick:()=>a(!o),className:"p-2 border border-zinc-800 text-white",children:o?u.jsx(no,{size:20}):u.jsx(jS,{size:20})})]})]}),o&&u.jsxs("div",{className:"fixed inset-0 top-16 bg-black z-50 flex flex-col justify-between p-8 border-t border-zinc-800",children:[u.jsx("div",{className:"m-stripe-divider mb-8"}),u.jsx("div",{className:"flex flex-col gap-6",children:l.map(h=>u.jsx("button",{onClick:()=>d(h.id),className:"text-left text-2xl font-bold text-white tracking-widest hover:text-sky-400",children:h.label},h.id))}),u.jsxs("div",{className:"flex flex-col gap-4 mt-8 pt-8 border-t border-zinc-800",children:[u.jsxs("button",{onClick:()=>{i(),a(!1)},className:"flex items-center justify-center gap-2 p-3 border border-zinc-700 text-white text-xs font-bold tracking-widest",children:[n?u.jsx(xm,{size:18,className:"text-red-500"}):u.jsx(vm,{size:18}),u.jsx("span",{children:"TOGGLE SOUND"})]}),u.jsx("button",{onClick:()=>{e(),a(!1)},className:"button-primary w-full justify-center",children:"CONTACT RIDHAM ///"})]})]})]})}const QS="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop";function e1({imageSrc:t=QS,resolution:e=10,cursorSize:n=65,intensity:i=50,className:r="",style:s={}}){const o=se.useRef(null),a=se.useRef(null),l=se.useRef(null);return se.useEffect(()=>{const d=o.current,h=a.current;if(!d||!h)return;const m=d.getContext("webgl",{alpha:!0});if(!m)return;const c=m;c.getExtension("OES_texture_float"),c.getExtension("OES_texture_float_linear"),c.clearColor(0,0,0,0);const p=i/100,v={cursorRadiusPx:n,cursorPower:5+(p-.1)*45/(1-.1),distortionPower:i/100},E=1.2,g=5/6,f={x:.5*h.clientWidth,y:.5*h.clientHeight,dx:0,dy:0,moved:!1},x={w:0,h:0};let S,y,A,b,w=null,_=1,T=!1;const N=`
precision highp float;
varying vec2 vUv;
attribute vec2 a_position;
varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
uniform vec2 u_texel;
void main () {
  vUv = .5 * (a_position + 1.);
  vL = vUv - vec2(u_texel.x, 0.);
  vR = vUv + vec2(u_texel.x, 0.);
  vT = vUv + vec2(0., u_texel.y);
  vB = vUv - vec2(0., u_texel.y);
  gl_Position = vec4(a_position, 0., 1.);
}
`,R=`
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D u_velocity_texture;
uniform sampler2D u_input_texture;
uniform vec2 u_texel;
uniform vec2 u_output_textel;
uniform float u_dt;
uniform float u_dissipation;

vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
  vec2 st = uv / tsize - 0.5;
  vec2 iuv = floor(st);
  vec2 fuv = fract(st);
  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main () {
  vec2 coord = vUv - u_dt * bilerp(u_velocity_texture, vUv, u_texel).xy * u_texel;
  vec4 velocity = bilerp(u_input_texture, coord, u_output_textel);
  gl_FragColor = u_dissipation * velocity;
}
`,L=`
precision highp float;
precision highp sampler2D;
varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
uniform sampler2D u_velocity_texture;

void main () {
  float L = texture2D(u_velocity_texture, vL).x;
  float R = texture2D(u_velocity_texture, vR).x;
  float T = texture2D(u_velocity_texture, vT).y;
  float B = texture2D(u_velocity_texture, vB).y;
  float div = .25 * (R - L + T - B);
  gl_FragColor = vec4(div, 0., 0., 1.);
}
`,G=`
precision highp float;
precision highp sampler2D;
varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
uniform sampler2D u_pressure_texture;
uniform sampler2D u_divergence_texture;

void main () {
  float L = texture2D(u_pressure_texture, vL).x;
  float R = texture2D(u_pressure_texture, vR).x;
  float T = texture2D(u_pressure_texture, vT).x;
  float B = texture2D(u_pressure_texture, vB).x;
  float divergence = texture2D(u_divergence_texture, vUv).x;
  float pressure = (L + R + B + T - divergence) * .25;
  gl_FragColor = vec4(pressure, 0., 0., 1.);
}
`,q=`
precision highp float;
precision highp sampler2D;
varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
uniform sampler2D u_pressure_texture;
uniform sampler2D u_velocity_texture;

void main () {
  float L = texture2D(u_pressure_texture, vL).x;
  float R = texture2D(u_pressure_texture, vR).x;
  float T = texture2D(u_pressure_texture, vT).x;
  float B = texture2D(u_pressure_texture, vB).x;
  vec2 velocity = texture2D(u_velocity_texture, vUv).xy;
  velocity.xy -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0., 1.);
}
`,D=`
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D u_input_texture;
uniform float u_ratio;
uniform vec3 u_point_value;
uniform vec2 u_point;
uniform float u_point_size;

void main () {
  vec2 p = vUv - u_point.xy;
  p.x *= u_ratio;
  vec3 splat = .6 * pow(2., -dot(p, p) / u_point_size) * u_point_value;
  vec3 base = texture2D(u_input_texture, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.);
}
`,W=`
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform float u_ratio;
uniform float u_img_ratio;
uniform float u_disturb_power;
uniform sampler2D u_output_texture;
uniform sampler2D u_velocity_texture;
uniform sampler2D u_text_texture;
uniform float u_canvas_scale;
uniform float u_inner_scale;

vec2 get_img_uv() {
  vec2 uv = vUv - 0.5;
  uv *= u_canvas_scale;
  uv /= u_inner_scale;
  float containerAspect = u_ratio;
  float imageAspect = u_img_ratio;
  vec2 scale = vec2(1.0);
  if (containerAspect > imageAspect) {
    scale.y = imageAspect / containerAspect;
  } else {
    scale.x = containerAspect / imageAspect;
  }
  uv *= scale;
  return uv + 0.5;
}

vec2 get_frame_uv() {
  vec2 uv = vUv - 0.5;
  uv *= u_canvas_scale;
  uv /= u_inner_scale;
  return uv + 0.5;
}

float get_img_frame_alpha(vec2 uv, float img_frame_width) {
  float img_frame_alpha = smoothstep(0., img_frame_width, uv.x) * smoothstep(1., 1. - img_frame_width, uv.x);
  img_frame_alpha *= smoothstep(0., img_frame_width, uv.y) * smoothstep(1., 1. - img_frame_width, uv.y);
  return img_frame_alpha;
}

vec3 sample_image_smooth(vec2 uv) {
  vec2 uvc = clamp(uv, 0.0, 1.0);
  vec3 base = texture2D(u_text_texture, vec2(uvc.x, 1.0 - uvc.y)).rgb;
  return base;
}

void main () {
  float offset = texture2D(u_output_texture, vUv).r;
  vec2 velocity = texture2D(u_velocity_texture, vUv).xy;
  velocity += .001;

  vec2 img_uv = get_img_uv();
  img_uv -= u_disturb_power * normalize(velocity) * offset;

  vec2 frame_uv = get_frame_uv();
  frame_uv -= u_disturb_power * normalize(velocity) * offset;

  vec3 img = sample_image_smooth(img_uv);
  float opacity = get_img_frame_alpha(frame_uv, .002);
  gl_FragColor = vec4(img * opacity, opacity);
}
`;function z(fe,me){const ye=c.createShader(me);if(c.shaderSource(ye,fe),c.compileShader(ye),!c.getShaderParameter(ye,c.COMPILE_STATUS)){const Ce=c.getShaderInfoLog(ye)||"Shader error";throw c.deleteShader(ye),new Error(Ce)}return ye}function U(fe,me){const ye=c.createProgram(),Ce=z(fe,c.VERTEX_SHADER),Je=z(me,c.FRAGMENT_SHADER);c.attachShader(ye,Ce),c.attachShader(ye,Je),c.bindAttribLocation(ye,0,"a_position"),c.linkProgram(ye);const qe={},ot=c.getProgramParameter(ye,c.ACTIVE_UNIFORMS);for(let O=0;O<ot;O++){const St=c.getActiveUniform(ye,O);St&&(qe[St.name]=c.getUniformLocation(ye,St.name))}return{program:ye,uniforms:qe}}function V(fe=null){const me=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,me),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);const ye=c.createBuffer();c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,ye),c.bufferData(c.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),c.STATIC_DRAW),c.vertexAttribPointer(0,2,c.FLOAT,!1,0,0),c.enableVertexAttribArray(0),fe==null?(c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight),c.bindFramebuffer(c.FRAMEBUFFER,null)):(c.viewport(0,0,fe.width,fe.height),c.bindFramebuffer(c.FRAMEBUFFER,fe.fbo)),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}function I(fe,me){c.activeTexture(c.TEXTURE0);const ye=c.createTexture();c.bindTexture(c.TEXTURE_2D,ye),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texImage2D(c.TEXTURE_2D,0,c.RGB,fe,me,0,c.RGB,c.FLOAT,null);const Ce=c.createFramebuffer();return c.bindFramebuffer(c.FRAMEBUFFER,Ce),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,ye,0),c.viewport(0,0,fe,me),c.clear(c.COLOR_BUFFER_BIT),{fbo:Ce,width:fe,height:me,attach(Je){return c.activeTexture(c.TEXTURE0+Je),c.bindTexture(c.TEXTURE_2D,ye),Je}}}function Q(fe,me){let ye=I(fe,me),Ce=I(fe,me);return{width:fe,height:me,texelSizeX:1/fe,texelSizeY:1/me,read:()=>ye,write:()=>Ce,swap(){const Je=ye;ye=Ce,Ce=Je}}}const ie=U(N,D),Ie=U(N,L),Ge=U(N,G),De=U(N,q),K=U(N,R),ce=U(N,W);$e(),he();const oe=Le();Ne(),Ve(t);function he(){S=Q(x.w,x.h),y=Q(x.w,x.h),A=I(x.w,x.h),b=Q(x.w,x.h)}function Be(fe,me){f.moved=!0,f.dx=6*(fe-f.x),f.dy=6*(me-f.y),f.x=fe,f.y=me}function Le(){const fe=()=>{T=!0},me=()=>{T=!1,f.moved=!1},ye=Je=>{if(!T)return;const qe=h.getBoundingClientRect();Be(Je.clientX-qe.left,Je.clientY-qe.top)},Ce=()=>{$e(),he(),w&&c.bindTexture(c.TEXTURE_2D,w)};return d.addEventListener("mouseenter",fe),d.addEventListener("mouseleave",me),d.addEventListener("mousemove",ye),window.addEventListener("resize",Ce),()=>{d.removeEventListener("mouseenter",fe),d.removeEventListener("mouseleave",me),d.removeEventListener("mousemove",ye),window.removeEventListener("resize",Ce)}}function $e(){const fe=h.clientWidth,me=h.clientHeight,ye=Math.min(window.devicePixelRatio||1,2);d.width=Math.max(2,Math.round(fe*E*ye)),d.height=Math.max(2,Math.round(me*E*ye));const Ce=fe*E,Je=me*E;d.style.width=`${Ce}px`,d.style.height=`${Je}px`;const qe=Ce/Je,ot=128+(e-1)*384/9;x.w=Math.round(ot*qe),x.h=Math.round(ot)}function Oe(){const fe=h.clientWidth*E,me=h.clientHeight*E,ye=.5*(fe-h.clientWidth),Ce=.5*(me-h.clientHeight),Je=(f.x+ye)/fe,qe=1-(f.y+Ce)/me;return{u:Je,v:qe}}function Ve(fe){const me=new Image;me.crossOrigin="anonymous",me.src=fe,me.onload=()=>{_=me.naturalWidth/Math.max(1,me.naturalHeight),w=c.createTexture(),c.bindTexture(c.TEXTURE_2D,w),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,w),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,me)}}function Ne(fe){const me=.016666666666666666;if(f.moved){f.moved=!1,c.useProgram(ie.program),c.uniform1i(ie.uniforms.u_input_texture,y.read().attach(1)),c.uniform1f(ie.uniforms.u_ratio,h.clientWidth/Math.max(1,h.clientHeight));const Ce=Oe();c.uniform2f(ie.uniforms.u_point,Ce.u,Ce.v),c.uniform3f(ie.uniforms.u_point_value,f.dx,-f.dy,0);const Je=Math.max(1,h.clientHeight),qe=v.cursorRadiusPx/Je;c.uniform1f(ie.uniforms.u_point_size,qe*qe),V(y.write()),y.swap(),c.uniform1i(ie.uniforms.u_input_texture,S.read().attach(1)),c.uniform3f(ie.uniforms.u_point_value,v.cursorPower*.001,0,0),V(S.write()),S.swap()}c.useProgram(Ie.program),c.uniform2f(Ie.uniforms.u_texel,y.texelSizeX,y.texelSizeY),c.uniform1i(Ie.uniforms.u_velocity_texture,y.read().attach(1)),V(A),c.useProgram(Ge.program),c.uniform2f(Ge.uniforms.u_texel,y.texelSizeX,y.texelSizeY),c.uniform1i(Ge.uniforms.u_divergence_texture,A.attach(1));for(let Ce=0;Ce<16;Ce++)c.uniform1i(Ge.uniforms.u_pressure_texture,b.read().attach(2)),V(b.write()),b.swap();c.useProgram(De.program),c.uniform2f(De.uniforms.u_texel,y.texelSizeX,y.texelSizeY),c.uniform1i(De.uniforms.u_pressure_texture,b.read().attach(1)),c.uniform1i(De.uniforms.u_velocity_texture,y.read().attach(2)),V(y.write()),y.swap(),c.useProgram(K.program),c.uniform2f(K.uniforms.u_texel,y.texelSizeX,y.texelSizeY),c.uniform2f(K.uniforms.u_output_textel,y.texelSizeX,y.texelSizeY),c.uniform1i(K.uniforms.u_velocity_texture,y.read().attach(1)),c.uniform1i(K.uniforms.u_input_texture,y.read().attach(1)),c.uniform1f(K.uniforms.u_dt,me),c.uniform1f(K.uniforms.u_dissipation,.97),V(y.write()),y.swap(),c.useProgram(K.program),c.uniform2f(K.uniforms.u_output_textel,S.texelSizeX,S.texelSizeY),c.uniform1i(K.uniforms.u_input_texture,S.read().attach(2)),c.uniform1f(K.uniforms.u_dt,8*me),c.uniform1f(K.uniforms.u_dissipation,.98),V(S.write()),S.swap(),c.useProgram(ce.program);const ye=Oe();c.uniform2f(ce.uniforms.u_point,ye.u,ye.v),c.uniform1i(ce.uniforms.u_velocity_texture,y.read().attach(2)),c.uniform1f(ce.uniforms.u_ratio,h.clientWidth/Math.max(1,h.clientHeight)),c.uniform1f(ce.uniforms.u_img_ratio,_),c.uniform1f(ce.uniforms.u_disturb_power,v.distortionPower),c.uniform1i(ce.uniforms.u_output_texture,S.read().attach(1)),c.uniform1f(ce.uniforms.u_canvas_scale,1),c.uniform1f(ce.uniforms.u_inner_scale,g),w&&(c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,w),c.uniform1i(ce.uniforms.u_text_texture,0)),V(),c.viewport(0,0,c.drawingBufferWidth,c.drawingBufferHeight),c.bindFramebuffer(c.FRAMEBUFFER,null),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0),l.current=requestAnimationFrame(Ne)}return()=>{l.current&&cancelAnimationFrame(l.current),typeof oe=="function"&&oe()}},[t,e,n,i]),u.jsx("div",{ref:a,className:`relative w-full h-full overflow-hidden ${r}`,style:{...s},children:u.jsx("canvas",{ref:o,className:"absolute -top-[10%] -left-[10%] w-[120%] h-[120%] block overflow-hidden cursor-crosshair"})})}function t1(t){const e=t.split(`
`),n=[];let i=0,r=0;return e.forEach((s,o)=>{let a=0;(s.match(/\S+|\s+/g)??[]).forEach(l=>{n.push({type:/^\s/.test(l)?"space":"word",chars:l.split("").map(d=>({char:d,globalIdx:i++,posInLine:a++,lineIdx:o})),lineIdx:o,gi:r++})}),o<e.length-1&&n.push({type:"newline",chars:[],lineIdx:o,gi:r++})}),{groups:n,totalVisible:i}}function _m(t,e,n,i,r){return i==="inPlace"?0:i==="multiLine"&&r?(r.charVLPos.get(t.globalIdx)??0)*.06:t.globalIdx*.06}function n1(t,e,n){return e<=0?{delay:0,charDur:n}:{charDur:n*.5,delay:t*(n*.5)/e}}function i1(t,e,n,i){const r=t.globalIdx%2===0;return i==="inPlace"?r?"smt-ap-c-a":"smt-ap-c-b":n==="topLeft"?r?"smt-ap-tl-a":"smt-ap-tl-b":r?"smt-ap-bl-a":"smt-ap-bl-b"}function r1(t,e){return{duration:e.duration,delay:e.delay,timing:"cubic-bezier(0,0,0.58,1)"}}function s1(t,e){const n=(Math.max(1,Math.min(20,e))-1)/19,i=p=>+p.toFixed(2),r=Math.round(6+n*180),s=Math.round(2+n*60),o=1+Math.round(n*3),a=p=>Array.from({length:o},(v,E)=>`0 0 ${Math.round(p*(E+1)/o)}px ${t}`).join(","),l=a(r),d=a(s),h=.7+n*.8,m=i(1.3+n*.5),c=i(1.15+n*.35);return`
@keyframes smt-ap-c-a{from{opacity:0;text-shadow:${d};transform:scale(${m})}40%{text-shadow:${l}}to{opacity:1;text-shadow:0 0 0 ${t};transform:none}}
@keyframes smt-ap-c-b{from{opacity:0;text-shadow:${d};transform:scale(${c})}40%{text-shadow:${l}}to{opacity:1;text-shadow:0 0 0 ${t};transform:none}}
@keyframes smt-ap-bl-a{from{opacity:0;text-shadow:${d};transform:translate3d(${i(-15*h)}rem,${i(8*h)}rem,0) rotate(30deg) skewX(-40deg) scale(0.7)}40%{text-shadow:${l}}to{opacity:1;text-shadow:0 0 0 ${t};transform:none}}
@keyframes smt-ap-bl-b{from{opacity:0;text-shadow:${d};transform:translate3d(${i(-18*h)}rem,${i(8*h)}rem,0) rotate(30deg) skewX(40deg) scale(0.5)}40%{text-shadow:${l}}to{opacity:1;text-shadow:0 0 0 ${t};transform:none}}
`}function o1({text:t=`ENGINEERING
HIGH-PERFORMANCE
DIGITAL SYSTEMS.`,color:e="#ffffff",appearTrigger:n="default",intensity:i=12,position:r="bottomLeft",animationMode:s="singleLine",className:o="",style:a={}}){const l=se.useRef(null);se.useEffect(()=>(l.current=document.createElement("style"),document.head.appendChild(l.current),()=>{var _;(_=l.current)==null||_.remove(),l.current=null}),[]),se.useEffect(()=>{l.current&&(l.current.textContent=s1(e,i))},[e,i]);const{groups:d,totalVisible:h}=se.useMemo(()=>t1(t),[t]),m=se.useMemo(()=>r1(null,{duration:1.8,delay:0}),[]),c=se.useRef(null),p=se.useRef(new Map),[v,E]=se.useState(null),g=se.useCallback(()=>{if(s!=="multiLine"){E(null);return}const _=[];d.forEach(D=>{if(D.type==="newline"||!D.chars.length)return;const W=p.current.get(D.gi);W&&_.push({top:W.offsetTop,gi:D.gi,chars:D.chars})}),_.sort((D,W)=>D.gi-W.gi);const T=[...new Set(_.map(D=>D.top))].sort((D,W)=>D-W),N=new Map(T.map((D,W)=>[D,W])),R=new Map,L=new Map,G=new Map,q=new Map;_.forEach(({top:D,chars:W})=>{const z=N.get(D)??0;W.forEach(U=>{const V=q.get(z)??0;R.set(U.globalIdx,z),L.set(U.globalIdx,V),q.set(z,V+1),G.set(z,V+1)})}),E({charVL:R,charVLPos:L,vlLen:G})},[d,s]);se.useEffect(()=>{if(g(),!c.current)return;const _=new ResizeObserver(g);return _.observe(c.current),()=>_.disconnect()},[g]);const f=se.useMemo(()=>{let _=0;return d.forEach(T=>T.chars.forEach(N=>{const R=_m(N,h,r,s,v);R>_&&(_=R)})),_},[d,h,r,s,v]),[x,S]=se.useState("hidden"),y=se.useRef([]),A=()=>{y.current.forEach(clearTimeout),y.current=[]},b=(_,T)=>y.current.push(setTimeout(_,T)),w=se.useCallback(()=>{A(),S("hidden"),b(()=>{S("appearing"),b(()=>S("visible"),m.duration*1e3+200)},100)},[m.duration]);return se.useEffect(()=>(A(),w(),A),[t,e,i,r,s,w]),u.jsx("div",{ref:c,className:`inline-block ${o}`,style:{style:a},children:u.jsx("div",{style:{color:"transparent",backfaceVisibility:"hidden",userSelect:"none",wordBreak:"keep-all"},children:d.map(_=>_.type==="newline"?u.jsx("br",{},_.gi):_.type==="space"?u.jsx("span",{ref:T=>{T&&p.current.set(_.gi,T)},style:{display:"inline",whiteSpace:"pre"},children:" "},_.gi):u.jsx("span",{ref:T=>{T&&p.current.set(_.gi,T)},style:{display:"inline-block",whiteSpace:"nowrap"},children:_.chars.map(T=>{const N={display:"inline-block",textShadow:`0 0 0 ${e}`};if(x==="hidden")return u.jsx("span",{style:{...N,opacity:0},children:T.char},T.globalIdx);if(x==="visible")return u.jsx("span",{style:{...N,opacity:1},children:T.char},T.globalIdx);if(x==="appearing"){const R=_m(T,h,r,s,v),{delay:L,charDur:G}=n1(R,f,m.duration),q=i1(T,h,r,s);return u.jsx("span",{style:{...N,animation:`${q} ${G}s ${L}s ${m.timing} both`},children:T.char},T.globalIdx)}return null})},_.gi))})})}const ji=96,go=40,ym=1.8,Sm=.08,Em=.9,Mm=.1,a1=`#version 300 es
in vec2 aPos;
in vec2 aUv;
in vec2 aDisp;
out vec2 vUv;
out float vMag;
void main() {
    gl_Position = vec4(aPos + aDisp, 0.0, 1.0);
    vUv = aUv;
    vMag = length(aDisp);
}`,l1=`#version 300 es
precision highp float;
in vec2 vUv;
in float vMag;
out vec4 outColor;
uniform sampler2D uTex;
uniform float uChroma;
uniform vec3 uColorA;
uniform vec3 uColorB;
void main() {
    vec4 base = texture(uTex, vUv);
    if (uChroma > 0.0) {
        float o = uChroma * 0.00500 * clamp(vMag * 8.0, 0.0, 1.0);
        float aOff = texture(uTex, vUv + vec2(o, 0.0)).a;
        float bOff = texture(uTex, vUv - vec2(o, 0.0)).a;
        vec3 col = base.rgb * base.a;
        col += uColorA * max(0.0, aOff - base.a);
        col += uColorB * max(0.0, bOff - base.a);
        float aMax = max(base.a, max(aOff, bOff));
        outColor = vec4(col, aMax);
    } else {
        outColor = base;
    }
}`;function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error("Shader error:",t.getShaderInfoLog(i)),t.deleteShader(i),null)}function c1(t,e,n){const i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,n),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(console.error("Link error:",t.getProgramInfoLog(i)),t.deleteProgram(i),null)}function u1(t){if(typeof t!="string")return[1,1,1];const e=t.trim();if(e.startsWith("#")){let n=e.slice(1);if(n.length===3&&(n=n.split("").map(i=>i+i).join("")),n.length>=6){const i=parseInt(n.slice(0,2),16)/255,r=parseInt(n.slice(2,4),16)/255,s=parseInt(n.slice(4,6),16)/255;if(isFinite(i)&&isFinite(r)&&isFinite(s))return[i,r,s]}}return[1,1,1]}function d1(t,e,n,i,r,s,o,a){const l=document.createElement("canvas");l.width=o,l.height=a;const d=l.getContext("2d");d.clearRect(0,0,o,a),d.fillStyle=e,d.textAlign="center",d.textBaseline="middle",d.font=`${r} ${i} ${s}px ${n}, sans-serif`;const h=t.split(`
`),m=s*1.05,c=a/2-(h.length-1)*m/2;return h.forEach((p,v)=>{d.fillText(p,o/2,c+v*m)}),l}function f1({text:t=`ENGINEERING
HIGH-PERFORMANCE
DIGITAL SYSTEMS.`,color:e="#ffffff",fontFamily:n="Inter",fontWeight:i=700,fontSize:r=68,colorSplit:s=!0,customColors:o=["#0066b1","#e22718"],force:a=22,className:l="",style:d={}}){const h=se.useRef(null),m=se.useRef(null),c=se.useRef(!!s);c.current=!!s;const p=se.useRef([]);p.current=Array.isArray(o)?o.map(u1):[[0,.4,.7],[.89,.15,.09]];const v=se.useRef(typeof a=="number"?a/10:ym);return v.current=typeof a=="number"?a/10:ym,se.useEffect(()=>{const E=h.current,g=m.current;if(!E||!g)return;const f=E.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!f)return;const x=(ji+1)*(go+1),S=new Float32Array(x*2),y=new Float32Array(x*2);for(let Ve=0;Ve<=go;Ve++)for(let Ne=0;Ne<=ji;Ne++){const fe=Ve*(ji+1)+Ne,me=Ne/ji,ye=Ve/go;S[fe*2]=me*2-1,S[fe*2+1]=1-ye*2,y[fe*2]=me,y[fe*2+1]=ye}const A=ji*go*6,b=new Uint32Array(A);let w=0;for(let Ve=0;Ve<go;Ve++)for(let Ne=0;Ne<ji;Ne++){const fe=Ve*(ji+1)+Ne,me=fe+1,ye=fe+(ji+1),Ce=ye+1;b[w++]=fe,b[w++]=ye,b[w++]=me,b[w++]=me,b[w++]=ye,b[w++]=Ce}const _=new Float32Array(x*2),T=new Float32Array(x*2),N=bm(f,f.VERTEX_SHADER,a1),R=bm(f,f.FRAGMENT_SHADER,l1);if(!N||!R)return;const L=c1(f,N,R);if(!L)return;const G=f.getAttribLocation(L,"aPos"),q=f.getAttribLocation(L,"aUv"),D=f.getAttribLocation(L,"aDisp"),W=f.getUniformLocation(L,"uTex"),z=f.getUniformLocation(L,"uChroma"),U=f.getUniformLocation(L,"uColorA"),V=f.getUniformLocation(L,"uColorB"),I=f.createVertexArray();f.bindVertexArray(I);const Q=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,Q),f.bufferData(f.ARRAY_BUFFER,S,f.STATIC_DRAW),f.enableVertexAttribArray(G),f.vertexAttribPointer(G,2,f.FLOAT,!1,0,0);const ie=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,ie),f.bufferData(f.ARRAY_BUFFER,y,f.STATIC_DRAW),f.enableVertexAttribArray(q),f.vertexAttribPointer(q,2,f.FLOAT,!1,0,0);const Ie=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,Ie),f.bufferData(f.ARRAY_BUFFER,_,f.DYNAMIC_DRAW),f.enableVertexAttribArray(D),f.vertexAttribPointer(D,2,f.FLOAT,!1,0,0);const Ge=f.createBuffer();f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,Ge),f.bufferData(f.ELEMENT_ARRAY_BUFFER,b,f.STATIC_DRAW);const De=f.createTexture();f.bindTexture(f.TEXTURE_2D,De),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR);const K=()=>{const Ve=Math.max(2,E.width),Ne=Math.max(2,E.height),fe=window.devicePixelRatio||1,me=r*fe,ye=d1(t,e,n,i,"normal",me,Ve,Ne);f.bindTexture(f.TEXTURE_2D,De),f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,ye)},ce=()=>{const Ve=window.devicePixelRatio||1,Ne=g.getBoundingClientRect(),fe=Math.max(2,Math.round(Ne.width*Ve)),me=Math.max(2,Math.round(Ne.height*Ve));(E.width!==fe||E.height!==me)&&(E.width=fe,E.height=me,f.viewport(0,0,fe,me),K())},oe=new ResizeObserver(ce);oe.observe(g),ce(),K();const he={x:99,y:99,px:99,py:99,vx:0,vy:0,inside:!1},Be=Ve=>{const Ne=E.getBoundingClientRect(),fe=(Ve.clientX-Ne.left)/Ne.width,me=(Ve.clientY-Ne.top)/Ne.height,ye=fe*2-1,Ce=1-me*2;he.inside||(he.px=ye,he.py=Ce,he.inside=!0),he.x=ye,he.y=Ce},Le=()=>{he.inside=!1,he.x=99,he.y=99,he.vx=0,he.vy=0};g.addEventListener("pointermove",Be),g.addEventListener("pointerleave",Le);let $e=0;const Oe=()=>{he.vx=he.x-he.px,he.vy=he.y-he.py,Math.hypot(he.vx,he.vy)>.3&&(he.vx=0,he.vy=0),he.px=he.x,he.py=he.y;for(let ye=0;ye<x;ye++){const Ce=ye*2,Je=S[Ce],qe=S[Ce+1],ot=_[Ce],O=_[Ce+1],St=he.x-(Je+ot),st=he.y-(qe+O),P=Math.hypot(St,st),M=Math.max(0,1/(1+P/.05)-.1);let H=T[Ce],X=T[Ce+1];const ee=v.current;H+=he.vx*ee*M,X+=he.vy*ee*M,H-=ot*Sm,X-=O*Sm,H*=Em,X*=Em,T[Ce]=H,T[Ce+1]=X;let ue=ot+H*Mm,pe=O+X*Mm;ue>1?ue=1:ue<-1&&(ue=-1),pe>1?pe=1:pe<-1&&(pe=-1),_[Ce]=ue,_[Ce+1]=pe}f.bindBuffer(f.ARRAY_BUFFER,Ie),f.bufferSubData(f.ARRAY_BUFFER,0,_),f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT),f.useProgram(L),f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,De),f.uniform1i(W,0),f.uniform1f(z,c.current?1:0);const Ne=p.current;let fe=Ne[0]||[0,.4,.7],me=Ne[1]||[.89,.15,.09];f.uniform3f(U,fe[0],fe[1],fe[2]),f.uniform3f(V,me[0],me[1],me[2]),f.enable(f.BLEND),f.blendFunc(f.ONE,f.ONE_MINUS_SRC_ALPHA),f.bindVertexArray(I),f.drawElements(f.TRIANGLES,A,f.UNSIGNED_INT,0),$e=requestAnimationFrame(Oe)};return $e=requestAnimationFrame(Oe),()=>{cancelAnimationFrame($e),oe.disconnect(),g.removeEventListener("pointermove",Be),g.removeEventListener("pointerleave",Le),f.deleteBuffer(Q),f.deleteBuffer(ie),f.deleteBuffer(Ie),f.deleteBuffer(Ge),f.deleteTexture(De),f.deleteVertexArray(I),f.deleteProgram(L),f.deleteShader(N),f.deleteShader(R)}},[t,e,n,i,r]),u.jsx("div",{ref:m,className:`relative w-full h-[260px] md:h-[320px] overflow-hidden select-none cursor-crosshair ${l}`,style:{...d},children:u.jsx("canvas",{ref:h,className:"block w-full h-full"})})}function h1({onExploreProjects:t,onOpenConfigurator:e}){const[n,i]=se.useState("mesh");return u.jsxs("section",{id:"overview",className:"relative min-h-screen pt-24 pb-16 flex flex-col justify-between bg-black border-b border-zinc-900 overflow-hidden z-10",children:[u.jsx("div",{className:"absolute inset-0 opacity-25 pointer-events-auto",children:u.jsx(e1,{imageSrc:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",intensity:65,cursorSize:80})}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"}),u.jsxs("div",{className:"container-custom relative z-10 pt-4 flex flex-wrap items-center justify-between gap-4",children:[u.jsxs("div",{className:"inline-flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 px-4 py-2 text-xs font-mono backdrop-blur-md",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-red-600 animate-ping"}),u.jsx("span",{className:"text-sky-400 font-bold",children:"STATUS:"}),u.jsx("span",{className:"text-zinc-300",children:"FULL-STACK ENGINE READY"}),u.jsx("div",{className:"m-stripe-vertical h-3"}),u.jsx("span",{className:"text-zinc-500 hidden sm:inline",children:"ORIGINKIT TEXT EFFECTS ACTIVE ///"})]}),u.jsxs("div",{className:"inline-flex items-center border border-zinc-800 bg-zinc-950 p-1",children:[u.jsx("button",{onClick:()=>i("mesh"),className:`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${n==="mesh"?"bg-sky-950 text-sky-400 border border-sky-600":"text-zinc-500 hover:text-white"}`,children:"HOVER MESH TEXT"}),u.jsx("button",{onClick:()=>i("smoky"),className:`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${n==="smoky"?"bg-red-950 text-red-400 border border-red-600":"text-zinc-500 hover:text-white"}`,children:"SMOKY TEXT"})]})]}),u.jsx("div",{className:"container-custom relative z-10 my-auto py-8",children:u.jsxs("div",{className:"max-w-5xl",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"m-stripe-divider w-16"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs tracking-widest font-mono",children:"RIDHAM /// SOFTWARE ENGINEERING"})]}),u.jsx("div",{className:"mb-6",children:n==="mesh"?u.jsx(f1,{text:`ENGINEERING
HIGH-PERFORMANCE
DIGITAL SYSTEMS.`,color:"#ffffff",fontSize:64,colorSplit:!0,customColors:["#0066b1","#e22718"],force:25}):u.jsx("div",{className:"display-xl py-4",children:u.jsx(o1,{text:`ENGINEERING
HIGH-PERFORMANCE
DIGITAL SYSTEMS.`,color:"#ffffff",intensity:14,position:"bottomLeft",animationMode:"singleLine"})})}),u.jsxs("div",{className:"flex flex-wrap gap-4 items-center pt-4",children:[u.jsxs("button",{onClick:t,className:"button-primary px-8 h-14 text-sm flex items-center gap-3 group",children:[u.jsx("span",{children:"EXPLORE PROJECTS ///"}),u.jsx(RS,{size:18,className:"transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]}),u.jsxs("button",{onClick:e,className:"button-outline px-8 h-14 text-sm flex items-center gap-3",children:[u.jsx(Mc,{size:18,className:"text-sky-400"}),u.jsx("span",{children:"STACK CONFIGURATOR"})]})]})]})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="185",p1=0,Tm=1,m1=2,Ml=1,g1=2,No=3,mr=0,hn=1,$n=2,Ni=0,Us=1,wm=2,Am=3,Cm=4,x1=5,Ar=100,v1=101,_1=102,y1=103,S1=104,E1=200,M1=201,b1=202,T1=203,Hd=204,Vd=205,w1=206,A1=207,C1=208,R1=209,N1=210,P1=211,L1=212,I1=213,D1=214,Gd=0,jd=1,Wd=2,Xs=3,Xd=4,Yd=5,$d=6,qd=7,Zx=0,U1=1,F1=2,mi=0,Qx=1,ev=2,tv=3,nv=4,iv=5,rv=6,sv=7,ov=300,Hr=301,Ys=302,lu=303,cu=304,bc=306,Kd=1e3,Ci=1001,Jd=1002,Gt=1003,O1=1004,za=1005,jt=1006,uu=1007,Lr=1008,Dn=1009,av=1010,lv=1011,aa=1012,Ph=1013,xi=1014,ci=1015,Fi=1016,Lh=1017,Ih=1018,la=1020,cv=35902,uv=35899,dv=1021,fv=1022,Kn=1023,Oi=1026,Ir=1027,hv=1028,Dh=1029,Vr=1030,Uh=1031,Fh=1033,bl=33776,Tl=33777,wl=33778,Al=33779,Zd=35840,Qd=35841,ef=35842,tf=35843,nf=36196,rf=37492,sf=37496,of=37488,af=37489,tc=37490,lf=37491,cf=37808,uf=37809,df=37810,ff=37811,hf=37812,pf=37813,mf=37814,gf=37815,xf=37816,vf=37817,_f=37818,yf=37819,Sf=37820,Ef=37821,Mf=36492,bf=36494,Tf=36495,wf=36283,Af=36284,nc=36285,Cf=36286,k1=3200,Rm=0,z1=1,tr="",En="srgb",ic="srgb-linear",rc="linear",dt="srgb",es=7680,Nm=519,B1=512,H1=513,V1=514,Oh=515,G1=516,j1=517,kh=518,W1=519,Pm=35044,Lm="300 es",ui=2e3,sc=2001;function X1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y1(){const t=ca("canvas");return t.style.display="block",t}const Im={};function Dm(...t){const e="THREE."+t.shift();console.log(e,...t)}function pv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=pv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ct(...t){t=pv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fs(...t){const e=t.join(" ");e in Im||(Im[e]=!0,je(...t))}function $1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const q1={[Gd]:jd,[Wd]:$d,[Xd]:qd,[Xs]:Yd,[jd]:Gd,[$d]:Wd,[qd]:Xd,[Yd]:Xs};class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=Math.PI/180,Rf=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function K1(t,e){return(t%e+e)%e}function fu(t,e,n){return(1-n)*t+n*e}function xo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xh=class Xh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;let He=Xh;class io{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],d=i[r+1],h=i[r+2],m=i[r+3],c=s[o+0],p=s[o+1],v=s[o+2],E=s[o+3];if(m!==E||l!==c||d!==p||h!==v){let g=l*c+d*p+h*v+m*E;g<0&&(c=-c,p=-p,v=-v,E=-E,g=-g);let f=1-a;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);f=Math.sin(f*x)/S,a=Math.sin(a*x)/S,l=l*f+c*a,d=d*f+p*a,h=h*f+v*a,m=m*f+E*a}else{l=l*f+c*a,d=d*f+p*a,h=h*f+v*a,m=m*f+E*a;const x=1/Math.sqrt(l*l+d*d+h*h+m*m);l*=x,d*=x,h*=x,m*=x}}e[n]=l,e[n+1]=d,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],d=i[r+2],h=i[r+3],m=s[o],c=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*m+l*p-d*c,e[n+1]=l*v+h*c+d*m-a*p,e[n+2]=d*v+h*p+a*c-l*m,e[n+3]=h*v-a*m-l*c-d*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,d=a(i/2),h=a(r/2),m=a(s/2),c=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=c*h*m+d*p*v,this._y=d*p*m-c*h*v,this._z=d*h*v+c*p*m,this._w=d*h*m-c*p*v;break;case"YXZ":this._x=c*h*m+d*p*v,this._y=d*p*m-c*h*v,this._z=d*h*v-c*p*m,this._w=d*h*m+c*p*v;break;case"ZXY":this._x=c*h*m-d*p*v,this._y=d*p*m+c*h*v,this._z=d*h*v+c*p*m,this._w=d*h*m-c*p*v;break;case"ZYX":this._x=c*h*m-d*p*v,this._y=d*p*m+c*h*v,this._z=d*h*v-c*p*m,this._w=d*h*m+c*p*v;break;case"YZX":this._x=c*h*m+d*p*v,this._y=d*p*m+c*h*v,this._z=d*h*v-c*p*m,this._w=d*h*m-c*p*v;break;case"XZY":this._x=c*h*m-d*p*v,this._y=d*p*m-c*h*v,this._z=d*h*v+c*p*m,this._w=d*h*m+c*p*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],d=n[2],h=n[6],m=n[10],c=i+a+m;if(c>0){const p=.5/Math.sqrt(c+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-d)*p,this._z=(o-r)*p}else if(i>a&&i>m){const p=2*Math.sqrt(1+i-a-m);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+d)/p}else if(a>m){const p=2*Math.sqrt(1+a-i-m);this._w=(s-d)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+m-i-a);this._w=(o-r)/p,this._x=(s+d)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,d=n._z,h=n._w;return this._x=i*h+o*a+r*d-s*l,this._y=r*h+o*l+s*a-i*d,this._z=s*h+o*d+i*l-r*a,this._w=o*h-i*a-r*l-s*d,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const d=Math.acos(a),h=Math.sin(d);l=Math.sin(l*d)/h,n=Math.sin(n*d)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yh=class Yh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,d=2*(o*r-a*i),h=2*(a*n-s*r),m=2*(s*i-o*n);return this.x=n+l*d+o*m-a*h,this.y=i+l*h+a*d-s*m,this.z=r+l*m+s*h-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;let F=Yh;const hu=new F,Um=new io,$h=class $h{constructor(e,n,i,r,s,o,a,l,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,d)}set(e,n,i,r,s,o,a,l,d){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],d=i[1],h=i[4],m=i[7],c=i[2],p=i[5],v=i[8],E=r[0],g=r[3],f=r[6],x=r[1],S=r[4],y=r[7],A=r[2],b=r[5],w=r[8];return s[0]=o*E+a*x+l*A,s[3]=o*g+a*S+l*b,s[6]=o*f+a*y+l*w,s[1]=d*E+h*x+m*A,s[4]=d*g+h*S+m*b,s[7]=d*f+h*y+m*w,s[2]=c*E+p*x+v*A,s[5]=c*g+p*S+v*b,s[8]=c*f+p*y+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],h=e[8];return n*o*h-n*a*d-i*s*h+i*a*l+r*s*d-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],h=e[8],m=h*o-a*d,c=a*l-h*s,p=d*s-o*l,v=n*m+i*c+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=m*E,e[1]=(r*d-h*i)*E,e[2]=(a*i-r*o)*E,e[3]=c*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-a*n)*E,e[6]=p*E,e[7]=(i*l-d*n)*E,e[8]=(o*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*o+d*a)+o+e,-r*d,r*l,-r*(-d*o+l*a)+a+n,0,0,1),this}scale(e,n){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pu.makeScale(e,n)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pu.makeRotation(-e)),this}translate(e,n){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let Xe=$h;const pu=new Xe,Fm=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J1(){const t={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?rc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ic]:{primaries:e,whitePoint:i,transfer:rc,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const rt=J1();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class Z1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=ca("canvas")),ts.width=e.width,ts.height=e.height;const r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q1=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let eE=0;const gu=new F;class Qt extends $r{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Ci,r=Ci,s=jt,o=Lr,a=Kn,l=Dn,d=Qt.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=ma(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ov;Qt.DEFAULT_ANISOTROPY=1;const qh=class qh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,d=l[0],h=l[4],m=l[8],c=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-c)<.01&&Math.abs(m-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+c)<.1&&Math.abs(m+E)<.1&&Math.abs(v+g)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,y=(p+1)/2,A=(f+1)/2,b=(h+c)/4,w=(m+E)/4,_=(v+g)/4;return S>y&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=b/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=_/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=_/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(m-E)*(m-E)+(c-h)*(c-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(m-E)/x,this.z=(c-h)/x,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;let At=qh;class tE extends $r{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Qt(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new zh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends tE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=class oc{constructor(e,n,i,r,s,o,a,l,d,h,m,c,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,d,h,m,c,p,v,E,g)}set(e,n,i,r,s,o,a,l,d,h,m,c,p,v,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=d,f[6]=h,f[10]=m,f[14]=c,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),d=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const c=o*h,p=o*m,v=a*h,E=a*m;n[0]=l*h,n[4]=-l*m,n[8]=d,n[1]=p+v*d,n[5]=c-E*d,n[9]=-a*l,n[2]=E-c*d,n[6]=v+p*d,n[10]=o*l}else if(e.order==="YXZ"){const c=l*h,p=l*m,v=d*h,E=d*m;n[0]=c+E*a,n[4]=v*a-p,n[8]=o*d,n[1]=o*m,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=E+c*a,n[10]=o*l}else if(e.order==="ZXY"){const c=l*h,p=l*m,v=d*h,E=d*m;n[0]=c-E*a,n[4]=-o*m,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=E-c*a,n[2]=-o*d,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const c=o*h,p=o*m,v=a*h,E=a*m;n[0]=l*h,n[4]=v*d-p,n[8]=c*d+E,n[1]=l*m,n[5]=E*d+c,n[9]=p*d-v,n[2]=-d,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const c=o*l,p=o*d,v=a*l,E=a*d;n[0]=l*h,n[4]=E-c*m,n[8]=v*m+p,n[1]=m,n[5]=o*h,n[9]=-a*h,n[2]=-d*h,n[6]=p*m+v,n[10]=c-E*m}else if(e.order==="XZY"){const c=o*l,p=o*d,v=a*l,E=a*d;n[0]=l*h,n[4]=-m,n[8]=d*h,n[1]=c*m+E,n[5]=o*h,n[9]=p*m-v,n[2]=v*m-p,n[6]=a*h,n[10]=E*m+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iE,e,rE)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Wi.crossVectors(i,vn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Wi.crossVectors(i,vn)),Wi.normalize(),Ba.crossVectors(vn,Wi),r[0]=Wi.x,r[4]=Ba.x,r[8]=vn.x,r[1]=Wi.y,r[5]=Ba.y,r[9]=vn.y,r[2]=Wi.z,r[6]=Ba.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],d=i[12],h=i[1],m=i[5],c=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],x=i[3],S=i[7],y=i[11],A=i[15],b=r[0],w=r[4],_=r[8],T=r[12],N=r[1],R=r[5],L=r[9],G=r[13],q=r[2],D=r[6],W=r[10],z=r[14],U=r[3],V=r[7],I=r[11],Q=r[15];return s[0]=o*b+a*N+l*q+d*U,s[4]=o*w+a*R+l*D+d*V,s[8]=o*_+a*L+l*W+d*I,s[12]=o*T+a*G+l*z+d*Q,s[1]=h*b+m*N+c*q+p*U,s[5]=h*w+m*R+c*D+p*V,s[9]=h*_+m*L+c*W+p*I,s[13]=h*T+m*G+c*z+p*Q,s[2]=v*b+E*N+g*q+f*U,s[6]=v*w+E*R+g*D+f*V,s[10]=v*_+E*L+g*W+f*I,s[14]=v*T+E*G+g*z+f*Q,s[3]=x*b+S*N+y*q+A*U,s[7]=x*w+S*R+y*D+A*V,s[11]=x*_+S*L+y*W+A*I,s[15]=x*T+S*G+y*z+A*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],d=e[13],h=e[2],m=e[6],c=e[10],p=e[14],v=e[3],E=e[7],g=e[11],f=e[15],x=l*p-d*c,S=a*p-d*m,y=a*c-l*m,A=o*p-d*h,b=o*c-l*h,w=o*m-a*h;return n*(E*x-g*S+f*y)-i*(v*x-g*A+f*b)+r*(v*S-E*A+f*w)-s*(v*y-E*b+g*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],d=e[6],h=e[10];return n*(o*h-a*d)-i*(s*h-a*l)+r*(s*d-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],h=e[8],m=e[9],c=e[10],p=e[11],v=e[12],E=e[13],g=e[14],f=e[15],x=n*a-i*o,S=n*l-r*o,y=n*d-s*o,A=i*l-r*a,b=i*d-s*a,w=r*d-s*l,_=h*E-m*v,T=h*g-c*v,N=h*f-p*v,R=m*g-c*E,L=m*f-p*E,G=c*f-p*g,q=x*G-S*L+y*R+A*N-b*T+w*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/q;return e[0]=(a*G-l*L+d*R)*D,e[1]=(r*L-i*G-s*R)*D,e[2]=(E*w-g*b+f*A)*D,e[3]=(c*b-m*w-p*A)*D,e[4]=(l*N-o*G-d*T)*D,e[5]=(n*G-r*N+s*T)*D,e[6]=(g*y-v*w-f*S)*D,e[7]=(h*w-c*y+p*S)*D,e[8]=(o*L-a*N+d*_)*D,e[9]=(i*N-n*L-s*_)*D,e[10]=(v*b-E*y+f*x)*D,e[11]=(m*y-h*b-p*x)*D,e[12]=(a*T-o*R-l*_)*D,e[13]=(n*R-i*T+r*_)*D,e[14]=(E*S-v*A-g*x)*D,e[15]=(h*A-m*S+c*x)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,d=s*o,h=s*a;return this.set(d*o+i,d*a-r*l,d*l+r*a,0,d*a+r*l,h*a+i,h*l-r*o,0,d*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,d=s+s,h=o+o,m=a+a,c=s*d,p=s*h,v=s*m,E=o*h,g=o*m,f=a*m,x=l*d,S=l*h,y=l*m,A=i.x,b=i.y,w=i.z;return r[0]=(1-(E+f))*A,r[1]=(p+y)*A,r[2]=(v-S)*A,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(c+f))*b,r[6]=(g+x)*b,r[7]=0,r[8]=(v+S)*w,r[9]=(g-x)*w,r[10]=(1-(c+E))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ns.set(r[0],r[1],r[2]).length();const a=ns.set(r[4],r[5],r[6]).length(),l=ns.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Vn.copy(this);const d=1/o,h=1/a,m=1/l;return Vn.elements[0]*=d,Vn.elements[1]*=d,Vn.elements[2]*=d,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=m,Vn.elements[9]*=m,Vn.elements[10]*=m,n.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=ui,l=!1){const d=this.elements,h=2*s/(n-e),m=2*s/(i-r),c=(n+e)/(n-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(o-s),E=o*s/(o-s);else if(a===ui)v=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===sc)v=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return d[0]=h,d[4]=0,d[8]=c,d[12]=0,d[1]=0,d[5]=m,d[9]=p,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ui,l=!1){const d=this.elements,h=2/(n-e),m=2/(i-r),c=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(o-s),E=o/(o-s);else if(a===ui)v=-2/(o-s),E=-(o+s)/(o-s);else if(a===sc)v=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return d[0]=h,d[4]=0,d[8]=0,d[12]=c,d[1]=0,d[5]=m,d[9]=0,d[13]=p,d[2]=0,d[6]=0,d[10]=v,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};oc.prototype.isMatrix4=!0;let Ct=oc;const ns=new F,Vn=new Ct,iE=new F(0,0,0),rE=new F(1,1,1),Wi=new F,Ba=new F,vn=new F,km=new Ct,zm=new io;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],d=r[5],h=r[9],m=r[2],c=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,d),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sE=0;const Bm=new F,is=new io,_i=new Ct,Ha=new F,vo=new F,oE=new F,aE=new io,Hm=new F(1,0,0),Vm=new F(0,1,0),Gm=new F(0,0,1),jm={type:"added"},lE={type:"removed"},rs={type:"childadded",child:null},xu={type:"childremoved",child:null};class pn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new F,n=new Jn,i=new io,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Xe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Hm,e)}rotateY(e){return this.rotateOnAxis(Vm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,n){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hm,e)}translateY(e){return this.translateOnAxis(Vm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(vo,Ha,this.up):_i.lookAt(Ha,vo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),is.setFromRotationMatrix(_i),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),rs.child=e,this.dispatchEvent(rs),rs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lE),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,oE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,aE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let d=0,h=l.length;d<h;d++){const m=l[d];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,d=this.material.length;l<d;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),d=o(e.textures),h=o(e.images),m=o(e.shapes),c=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),c.length>0&&(i.skeletons=c),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const d in a){const h=a[d];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cs extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cE={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(d,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],c=h.position.distanceTo(m.position),p=.02,v=.005;d.inputState.pinching&&c>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&c<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Cs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function _u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=K1(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=_u(o,s,e+1/3),this.g=_u(o,s,e),this.b=_u(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=xv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return rt.workingToColorSpace(Jt.copy(this),e),Math.round(nt(Jt.r*255,0,255))*65536+Math.round(nt(Jt.g*255,0,255))*256+Math.round(nt(Jt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,d;const h=(a+o)/2;if(a===o)l=0,d=0;else{const m=o-a;switch(d=h<=.5?m/(o+a):m/(2-o-a),o){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=d,e.l=h,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=En){rt.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Va);const i=fu(Xi.h,Va.h,n),r=fu(Xi.s,Va.s,n),s=fu(Xi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=xv;class Bh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=n,this.far=i}clone(){return new Bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vv extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new F,yi=new F,yu=new F,Si=new F,ss=new F,os=new F,Wm=new F,Su=new F,Eu=new F,Mu=new F,bu=new At,Tu=new At,wu=new At;class qn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),yi.subVectors(i,n),yu.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(yi),l=Gn.dot(yu),d=yi.dot(yi),h=yi.dot(yu),m=o*d-a*a;if(m===0)return s.set(0,0,0),null;const c=1/m,p=(d*l-a*h)*c,v=(o*h-a*l)*c;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bu.setScalar(0),Tu.setScalar(0),wu.setScalar(0),bu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,i),wu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bu,s.x),o.addScaledVector(Tu,s.y),o.addScaledVector(wu,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),yi.subVectors(e,n),Gn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),Su.subVectors(e,i);const l=ss.dot(Su),d=os.dot(Su);if(l<=0&&d<=0)return n.copy(i);Eu.subVectors(e,r);const h=ss.dot(Eu),m=os.dot(Eu);if(h>=0&&m<=h)return n.copy(r);const c=l*m-h*d;if(c<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ss,o);Mu.subVectors(e,s);const p=ss.dot(Mu),v=os.dot(Mu);if(v>=0&&p<=v)return n.copy(s);const E=p*d-l*v;if(E<=0&&d>=0&&v<=0)return a=d/(d-v),n.copy(i).addScaledVector(os,a);const g=h*v-p*m;if(g<=0&&m-h>=0&&p-v>=0)return Wm.subVectors(s,r),a=(m-h)/(m-h+(p-v)),n.copy(r).addScaledVector(Wm,a);const f=1/(g+E+c);return o=E*f,a=c*f,n.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),ja.subVectors(this.max,_o),as.subVectors(e.a,_o),ls.subVectors(e.b,_o),cs.subVectors(e.c,_o),Yi.subVectors(ls,as),$i.subVectors(cs,ls),yr.subVectors(as,cs);let n=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-yr.z,yr.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,yr.z,0,-yr.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-yr.y,yr.x,0];return!Au(n,as,ls,cs,ja)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,as,ls,cs,ja))?!1:(Wa.crossVectors(Yi,$i),n=[Wa.x,Wa.y,Wa.z],Au(n,as,ls,cs,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,Ga=new ga,as=new F,ls=new F,cs=new F,Yi=new F,$i=new F,yr=new F,_o=new F,ja=new F,Wa=new F,Sr=new F;function Au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),d=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(l,d,h),Math.min(l,d,h))>a)return!1}return!0}const Lt=new F,Xa=new He;let uE=0;class On extends $r{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pm,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xo(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xo(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xo(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _v extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yv extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ht extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}const dE=new ga,yo=new F,Cu=new F;class Tc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Cu)),this.expandByPoint(yo.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fE=0;const Pn=new Ct,Ru=new pn,us=new F,_n=new ga,So=new ga,kt=new F;class mn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X1(e)?yv:_v)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(_n.min,So.min),_n.expandByPoint(kt),kt.addVectors(_n.max,So.max),_n.expandByPoint(kt)):(_n.expandByPoint(So.min),_n.expandByPoint(So.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let d=0,h=a.count;d<h;d++)kt.fromBufferAttribute(a,d),l&&(us.fromBufferAttribute(e,d),kt.add(us)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new On(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new F,l[_]=new F;const d=new F,h=new F,m=new F,c=new He,p=new He,v=new He,E=new F,g=new F;function f(_,T,N){d.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),m.fromBufferAttribute(i,N),c.fromBufferAttribute(s,_),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,N),h.sub(d),m.sub(d),p.sub(c),v.sub(c);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(m,-p.y).multiplyScalar(R),g.copy(m).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(R),a[_].add(E),a[T].add(E),a[N].add(E),l[_].add(g),l[T].add(g),l[N].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,T=x.length;_<T;++_){const N=x[_],R=N.start,L=N.count;for(let G=R,q=R+L;G<q;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new F,y=new F,A=new F,b=new F;function w(_){A.fromBufferAttribute(r,_),b.copy(A);const T=a[_];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(b,T);const R=y.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,T=x.length;_<T;++_){const N=x[_],R=N.start,L=N.count;for(let G=R,q=R+L;G<q;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let c=0,p=i.count;c<p;c++)i.setXYZ(c,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,d=new F,h=new F,m=new F;if(e)for(let c=0,p=e.count;c<p;c+=3){const v=e.getX(c+0),E=e.getX(c+1),g=e.getX(c+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),o.fromBufferAttribute(n,g),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),d.fromBufferAttribute(i,g),a.add(h),l.add(h),d.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let c=0,p=n.count;c<p;c+=3)r.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),o.fromBufferAttribute(n,c+2),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),i.setXYZ(c+0,h.x,h.y,h.z),i.setXYZ(c+1,h.x,h.y,h.z),i.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const d=a.array,h=a.itemSize,m=a.normalized,c=new d.constructor(l.length*h);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)c[v++]=d[p++]}return new On(c,h,m)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],d=e(l,i);n.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const l=[],d=s[a];for(let h=0,m=d.length;h<m;h++){const c=d[h],p=e(c,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const d=o[a];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],h=[];for(let m=0,c=d.length;m<c;m++){const p=d[m];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const h=r[d];this.setAttribute(d,h.clone(n))}const s=e.morphAttributes;for(const d in s){const h=[],m=s[d];for(let c=0,p=m.length;c<p;c++)h.push(m[c].clone(n));this.morphAttributes[d]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,h=o.length;d<h;d++){const m=o[d];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hE=0;class xa extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=Us,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new F,Nu=new F,Ya=new F,qi=new F,Pu=new F,$a=new F,Lu=new F;class Sv{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),a=qi.dot(this.direction),l=-qi.dot(Ya),d=qi.lengthSq(),h=Math.abs(1-o*o);let m,c,p,v;if(h>0)if(m=o*l-a,c=o*a-l,v=s*h,m>=0)if(c>=-v)if(c<=v){const E=1/h;m*=E,c*=E,p=m*(m+o*c+2*a)+c*(o*m+c+2*l)+d}else c=s,m=Math.max(0,-(o*c+a)),p=-m*m+c*(c+2*l)+d;else c=-s,m=Math.max(0,-(o*c+a)),p=-m*m+c*(c+2*l)+d;else c<=-v?(m=Math.max(0,-(-o*s+a)),c=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+c*(c+2*l)+d):c<=v?(m=0,c=Math.min(Math.max(-s,-l),s),p=c*(c+2*l)+d):(m=Math.max(0,-(o*s+a)),c=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+c*(c+2*l)+d);else c=o>0?-s:s,m=Math.max(0,-(o*c+a)),p=-m*m+c*(c+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Nu).addScaledVector(Ya,c),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const d=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,c=this.origin;return d>=0?(i=(e.min.x-c.x)*d,r=(e.max.x-c.x)*d):(i=(e.max.x-c.x)*d,r=(e.min.x-c.x)*d),h>=0?(s=(e.min.y-c.y)*h,o=(e.max.y-c.y)*h):(s=(e.max.y-c.y)*h,o=(e.min.y-c.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(e.min.z-c.z)*m,l=(e.max.z-c.z)*m):(a=(e.max.z-c.z)*m,l=(e.min.z-c.z)*m),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){Pu.subVectors(n,e),$a.subVectors(i,e),Lu.crossVectors(Pu,$a);let o=this.direction.dot(Lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(qi,$a));if(l<0)return null;const d=a*this.direction.dot(Pu.cross(qi));if(d<0||l+d>o)return null;const h=-a*qi.dot(Lu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ks extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xm=new Ct,Er=new Sv,qa=new Tc,Ym=new F,Ka=new F,Ja=new F,Za=new F,Iu=new F,Qa=new F,$m=new F,el=new F;class Bn extends pn{constructor(e=new mn,n=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const h=a[l],m=s[l];h!==0&&(Iu.fromBufferAttribute(m,e),o?Qa.addScaledVector(Iu,h):Qa.addScaledVector(Iu.sub(n),h))}n.add(Qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(qa.containsPoint(Er.origin)===!1&&(Er.intersectSphere(qa,Ym)===null||Er.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(Xm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Xm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,d=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,c=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,E=c.length;v<E;v++){const g=c[v],f=o[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,A=S;y<A;y+=3){const b=a.getX(y),w=a.getX(y+1),_=a.getX(y+2);r=tl(this,f,e,i,d,h,m,b,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const x=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);r=tl(this,o,e,i,d,h,m,x,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,E=c.length;v<E;v++){const g=c[v],f=o[g.materialIndex],x=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,A=S;y<A;y+=3){const b=y,w=y+1,_=y+2;r=tl(this,f,e,i,d,h,m,b,w,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const x=g,S=g+1,y=g+2;r=tl(this,o,e,i,d,h,m,x,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function pE(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;el.copy(a),el.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(el);return d<n.near||d>n.far?null:{distance:d,point:el.clone(),object:t}}function tl(t,e,n,i,r,s,o,a,l,d){t.getVertexPosition(a,Ka),t.getVertexPosition(l,Ja),t.getVertexPosition(d,Za);const h=pE(t,e,n,i,Ka,Ja,Za,$m);if(h){const m=new F;qn.getBarycoord($m,Ka,Ja,Za,m),r&&(h.uv=qn.getInterpolatedAttribute(r,a,l,d,m,new He)),s&&(h.uv1=qn.getInterpolatedAttribute(s,a,l,d,m,new He)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,d,m,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const c={a,b:l,c:d,normal:new F,materialIndex:0};qn.getNormal(Ka,Ja,Za,c.normal),h.face=c,h.barycoord=m}return h}class mE extends Qt{constructor(e=null,n=1,i=1,r,s,o,a,l,d=Gt,h=Gt,m,c){super(null,o,a,l,d,h,r,s,m,c),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Du=new F,gE=new F,xE=new Xe;class wr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(gE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Du),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xE.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Tc,vE=new He(.5,.5),nl=new F;class Ev{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],d=s[3],h=s[4],m=s[5],c=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],x=s[12],S=s[13],y=s[14],A=s[15];if(r[0].setComponents(d-o,p-h,f-v,A-x).normalize(),r[1].setComponents(d+o,p+h,f+v,A+x).normalize(),r[2].setComponents(d+a,p+m,f+E,A+S).normalize(),r[3].setComponents(d-a,p-m,f-E,A-S).normalize(),i)r[4].setComponents(l,c,g,y).normalize(),r[5].setComponents(d-l,p-c,f-g,A-y).normalize();else if(r[4].setComponents(d-l,p-c,f-g,A-y).normalize(),n===ui)r[5].setComponents(d+l,p+c,f+g,A+y).normalize();else if(n===sc)r[5].setComponents(l,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const n=vE.distanceTo(e.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mv extends xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new Ct,Nf=new Sv,il=new Tc,rl=new F;class _E extends pn{constructor(e=new mn,n=new Mv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;qm.copy(r).invert(),Nf.copy(e.ray).applyMatrix4(qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,d=i.index,m=i.attributes.position;if(d!==null){const c=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=c,E=p;v<E;v++){const g=d.getX(v);rl.fromBufferAttribute(m,g),Km(rl,g,l,r,e,n,this)}}else{const c=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let v=c,E=p;v<E;v++)rl.fromBufferAttribute(m,v),Km(rl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Km(t,e,n,i,r,s,o){const a=Nf.distanceSqToPoint(t);if(a<n){const l=new F;Nf.closestPointToPoint(t,l),l.applyMatrix4(i);const d=r.ray.origin.distanceTo(l);if(d<r.near||d>r.far)return;s.push({distance:d,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bv extends Qt{constructor(e=[],n=Hr,i,r,s,o,a,l,d,h){super(e,n,i,r,s,o,a,l,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends Qt{constructor(e,n,i=xi,r,s,o,a=Gt,l=Gt,d,h=Oi,m=1){if(h!==Oi&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:n,depth:m};super(c,r,s,o,a,l,h,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yE extends $s{constructor(e,n=xi,i=Hr,r,s,o=Gt,a=Gt,l,d=Oi){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,d),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tv extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ro extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],d=[],h=[],m=[];let c=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(m,2));function v(E,g,f,x,S,y,A,b,w,_,T){const N=y/w,R=A/_,L=y/2,G=A/2,q=b/2,D=w+1,W=_+1;let z=0,U=0;const V=new F;for(let I=0;I<W;I++){const Q=I*R-G;for(let ie=0;ie<D;ie++){const Ie=ie*N-L;V[E]=Ie*x,V[g]=Q*S,V[f]=q,d.push(V.x,V.y,V.z),V[E]=0,V[g]=0,V[f]=b>0?1:-1,h.push(V.x,V.y,V.z),m.push(ie/w),m.push(1-I/_),z+=1}}for(let I=0;I<_;I++)for(let Q=0;Q<w;Q++){const ie=c+Q+D*I,Ie=c+Q+D*(I+1),Ge=c+(Q+1)+D*(I+1),De=c+(Q+1)+D*I;l.push(ie,Ie,De),l.push(Ie,Ge,De),U+=6}a.addGroup(p,U,T),p+=U,c+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hh extends mn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),d(i),h(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const S=new F,y=new F,A=new F;for(let b=0;b<n.length;b+=3)p(n[b+0],S),p(n[b+1],y),p(n[b+2],A),l(S,y,A,x)}function l(x,S,y,A){const b=A+1,w=[];for(let _=0;_<=b;_++){w[_]=[];const T=x.clone().lerp(y,_/b),N=S.clone().lerp(y,_/b),R=b-_;for(let L=0;L<=R;L++)L===0&&_===b?w[_][L]=T:w[_][L]=T.clone().lerp(N,L/R)}for(let _=0;_<b;_++)for(let T=0;T<2*(b-_)-1;T++){const N=Math.floor(T/2);T%2===0?(c(w[_][N+1]),c(w[_+1][N]),c(w[_][N])):(c(w[_][N+1]),c(w[_+1][N+1]),c(w[_+1][N]))}}function d(x){const S=new F;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(x),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function h(){const x=new F;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const y=g(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;o.push(y,1-A)}v(),m()}function m(){for(let x=0;x<o.length;x+=6){const S=o[x+0],y=o[x+2],A=o[x+4],b=Math.max(S,y,A),w=Math.min(S,y,A);b>.9&&w<.1&&(S<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function c(x){s.push(x.x,x.y,x.z)}function p(x,S){const y=x*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function v(){const x=new F,S=new F,y=new F,A=new F,b=new He,w=new He,_=new He;for(let T=0,N=0;T<s.length;T+=9,N+=6){x.set(s[T+0],s[T+1],s[T+2]),S.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),b.set(o[N+0],o[N+1]),w.set(o[N+2],o[N+3]),_.set(o[N+4],o[N+5]),A.copy(x).add(S).add(y).divideScalar(3);const R=g(A);E(b,N+0,x,R),E(w,N+2,S,R),E(_,N+4,y,R)}}function E(x,S,y,A){A<0&&x.x===1&&(o[S]=x.x-1),y.x===0&&y.z===0&&(o[S]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.vertices,e.indices,e.radius,e.detail)}}class zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,d;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),d=i[r]-o,d<0)a=r+1;else if(d>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],c=i[r+1]-h,p=(o-h)/c;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new He:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new Ct;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new F)}s[0]=new F,o[0]=new F;let d=Number.MAX_VALUE;const h=Math.abs(r[0].x),m=Math.abs(r[0].y),c=Math.abs(r[0].z);h<=d&&(d=h,i.set(1,0,0)),m<=d&&(d=m,i.set(0,1,0)),c<=d&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(nt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(nt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wv extends zi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new He){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),d=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),c=l-this.aX,p=d-this.aY;l=c*h-p*m+this.aX,d=c*m+p*h+this.aY}return i.set(l,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class SE extends wv{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,d){r(o,a,d*(a-s),d*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,d,h,m){let c=(o-s)/d-(a-s)/(d+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+m)+(l-a)/m;c*=h,p*=h,r(o,a,c,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Jm=new F,Zm=new F,Uu=new Vh,Fu=new Vh,Ou=new Vh;class EE extends zi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let d,h;this.closed||a>0?d=r[(a-1)%s]:(Zm.subVectors(r[0],r[1]).add(r[0]),d=Zm);const m=r[a%s],c=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Jm.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Jm),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(d.distanceToSquared(m),p),E=Math.pow(m.distanceToSquared(c),p),g=Math.pow(c.distanceToSquared(h),p);E<1e-4&&(E=1),v<1e-4&&(v=E),g<1e-4&&(g=E),Uu.initNonuniformCatmullRom(d.x,m.x,c.x,h.x,v,E,g),Fu.initNonuniformCatmullRom(d.y,m.y,c.y,h.y,v,E,g),Ou.initNonuniformCatmullRom(d.z,m.z,c.z,h.z,v,E,g)}else this.curveType==="catmullrom"&&(Uu.initCatmullRom(d.x,m.x,c.x,h.x,this.tension),Fu.initCatmullRom(d.y,m.y,c.y,h.y,this.tension),Ou.initCatmullRom(d.z,m.z,c.z,h.z,this.tension));return i.set(Uu.calc(l),Fu.calc(l),Ou.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function ME(t,e){const n=1-t;return n*n*e}function bE(t,e){return 2*(1-t)*t*e}function TE(t,e){return t*t*e}function Ho(t,e,n,i){return ME(t,e)+bE(t,n)+TE(t,i)}function wE(t,e){const n=1-t;return n*n*n*e}function AE(t,e){const n=1-t;return 3*n*n*t*e}function CE(t,e){return 3*(1-t)*t*t*e}function RE(t,e){return t*t*t*e}function Vo(t,e,n,i,r){return wE(t,e)+AE(t,n)+CE(t,i)+RE(t,r)}class NE extends zi{constructor(e=new He,n=new He,i=new He,r=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new He){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class PE extends zi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y),Vo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LE extends zi{constructor(e=new He,n=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new He){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new He){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cl extends zi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IE extends zi{constructor(e=new He,n=new He,i=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new He){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Av extends zi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y),Ho(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DE extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new He){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],d=r[o],h=r[o>r.length-2?r.length-1:o+1],m=r[o>r.length-3?r.length-1:o+2];return i.set(Qm(a,l.x,d.x,h.x,m.x),Qm(a,l.y,d.y,h.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new He().fromArray(r))}return this}}var UE=Object.freeze({__proto__:null,ArcCurve:SE,CatmullRomCurve3:EE,CubicBezierCurve:NE,CubicBezierCurve3:PE,EllipseCurve:wv,LineCurve:LE,LineCurve3:Cl,QuadraticBezierCurve:IE,QuadraticBezierCurve3:Av,SplineCurve:DE});class Gh extends Hh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Gh(e.radius,e.detail)}}class qs extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),d=a+1,h=l+1,m=e/a,c=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<h;f++){const x=f*c-o;for(let S=0;S<d;S++){const y=S*m-s;v.push(y,-x,0),E.push(0,0,1),g.push(S/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const S=x+d*f,y=x+d*(f+1),A=x+1+d*(f+1),b=x+1+d*f;p.push(S,y,b),p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(E,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class jh extends mn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],d=[],h=[],m=[],c=new F,p=new F,v=new F;for(let E=0;E<=i;E++){const g=o+E/i*a;for(let f=0;f<=r;f++){const x=f/r*s;p.x=(e+n*Math.cos(g))*Math.cos(x),p.y=(e+n*Math.cos(g))*Math.sin(x),p.z=n*Math.sin(g),d.push(p.x,p.y,p.z),c.x=e*Math.cos(x),c.y=e*Math.sin(x),v.subVectors(p,c).normalize(),h.push(v.x,v.y,v.z),m.push(f/r),m.push(E/i)}}for(let E=1;E<=i;E++)for(let g=1;g<=r;g++){const f=(r+1)*E+g-1,x=(r+1)*(E-1)+g-1,S=(r+1)*(E-1)+g,y=(r+1)*E+g;l.push(f,x,y),l.push(x,S,y)}this.setIndex(l),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Go extends mn{constructor(e=new Av(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new F,l=new F,d=new He;let h=new F;const m=[],c=[],p=[],v=[];E(),this.setIndex(v),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(p,2));function E(){for(let S=0;S<n;S++)g(S);g(s===!1?n:0),x(),f()}function g(S){h=e.getPointAt(S/n,h);const y=o.normals[S],A=o.binormals[S];for(let b=0;b<=r;b++){const w=b/r*Math.PI*2,_=Math.sin(w),T=-Math.cos(w);l.x=T*y.x+_*A.x,l.y=T*y.y+_*A.y,l.z=T*y.z+_*A.z,l.normalize(),c.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,m.push(a.x,a.y,a.z)}}function f(){for(let S=1;S<=n;S++)for(let y=1;y<=r;y++){const A=(r+1)*(S-1)+(y-1),b=(r+1)*S+(y-1),w=(r+1)*S+y,_=(r+1)*(S-1)+y;v.push(A,b,_),v.push(b,w,_)}}function x(){for(let S=0;S<=n;S++)for(let y=0;y<=r;y++)d.x=S/n,d.y=y/r,p.push(d.x,d.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Go(new UE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(e0(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(e0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function e0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function FE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const OE={clone:Ks,merge:tn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=FE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new He().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class BE extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HE extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VE extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ku={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(t0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!t0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function t0(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class GE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return d.push(h,m),this},this.removeHandler=function(h){const m=d.indexOf(h);return m!==-1&&d.splice(m,2),this},this.getHandler=function(h){for(let m=0,c=d.length;m<c;m+=2){const p=d[m],v=d[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jE=new GE;class Wh{constructor(e){this.manager=e!==void 0?e:jE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ds=new WeakMap;class WE extends Wh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ku.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let m=ds.get(o);m===void 0&&(m=[],ds.set(o,m)),m.push({onLoad:n,onError:r})}return o}const a=ca("img");function l(){h(),n&&n(this);const m=ds.get(this)||[];for(let c=0;c<m.length;c++){const p=m[c];p.onLoad&&p.onLoad(this)}ds.delete(this),s.manager.itemEnd(e)}function d(m){h(),r&&r(m),ku.remove(`image:${e}`);const c=ds.get(this)||[];for(let p=0;p<c.length;p++){const v=c[p];v.onError&&v.onError(m)}ds.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",d,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ku.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class XE extends Wh{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new WE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}const sl=new F,ol=new io,ii=new F;class Rv extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,ol,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(sl,ol,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,n0=new He,i0=new He;class Mn extends Rv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,n0,i0),n.subVectors(i0,n0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(du*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/d,r*=o.width/l,i*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Nv extends Rv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=-90,hs=1;class YE extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(fs,hs,e,n);r.layers=this.layers,this.add(r);const s=new Mn(fs,hs,e,n);s.layers=this.layers,this.add(s);const o=new Mn(fs,hs,e,n);o.layers=this.layers,this.add(o);const a=new Mn(fs,hs,e,n);a.layers=this.layers,this.add(a);const l=new Mn(fs,hs,e,n);l.layers=this.layers,this.add(l);const d=new Mn(fs,hs,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const d of n)this.remove(d);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,d,h]=this.children,m=e.getRenderTarget(),c=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,c,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $E extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kh=class Kh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Kh.prototype.isMatrix2=!0;let r0=Kh;function s0(t,e,n,i){const r=qE(i);switch(n){case dv:return t*e;case hv:return t*e/r.components*r.byteLength;case Dh:return t*e/r.components*r.byteLength;case Vr:return t*e*2/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case fv:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case Fh:return t*e*4/r.components*r.byteLength;case bl:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qd:case tf:return Math.max(t,16)*Math.max(e,8)/4;case Zd:case ef:return Math.max(t,8)*Math.max(e,8)/2;case nf:case rf:case of:case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sf:case tc:case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mf:case bf:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wf:case Af:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nc:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qE(t){switch(t){case Dn:case av:return{byteLength:1,components:1};case aa:case lv:case Fi:return{byteLength:2,components:1};case Lh:case Ih:return{byteLength:2,components:4};case xi:case Ph:case ci:return{byteLength:4,components:1};case cv:case uv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KE(t){const e=new WeakMap;function n(a,l){const d=a.array,h=a.usage,m=d.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,d,h),a.onUploadCallback();let p;if(d instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)p=t.HALF_FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=t.SHORT;else if(d instanceof Uint32Array)p=t.UNSIGNED_INT;else if(d instanceof Int32Array)p=t.INT;else if(d instanceof Int8Array)p=t.BYTE;else if(d instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:c,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:m}}function i(a,l,d){const h=l.array,m=l.updateRanges;if(t.bindBuffer(d,a),m.length===0)t.bufferSubData(d,0,h);else{m.sort((p,v)=>p.start-v.start);let c=0;for(let p=1;p<m.length;p++){const v=m[c],E=m[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++c,m[c]=E)}m.length=c+1;for(let p=0,v=m.length;p<v;p++){const E=m[p];t.bufferSubData(d,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,n(a,l));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,a,l),d.version=a.version}}return{get:r,remove:s,update:o}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ab=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ET=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:JE,alphahash_pars_fragment:ZE,alphamap_fragment:QE,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:oM,begin_vertex:aM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:dM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:xM,color_pars_vertex:vM,color_vertex:_M,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:EM,displacementmap_pars_vertex:MM,displacementmap_vertex:bM,emissivemap_fragment:TM,emissivemap_pars_fragment:wM,colorspace_fragment:AM,colorspace_pars_fragment:CM,envmap_fragment:RM,envmap_common_pars_fragment:NM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:GM,envmap_vertex:IM,fog_vertex:DM,fog_pars_vertex:UM,fog_fragment:FM,fog_pars_fragment:OM,gradientmap_pars_fragment:kM,lightmap_pars_fragment:zM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:HM,lights_pars_begin:VM,lights_toon_fragment:jM,lights_toon_pars_fragment:WM,lights_phong_fragment:XM,lights_phong_pars_fragment:YM,lights_physical_fragment:$M,lights_physical_pars_fragment:qM,lights_fragment_begin:KM,lights_fragment_maps:JM,lights_fragment_end:ZM,lightprobes_pars_fragment:QM,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:rb,map_pars_fragment:sb,map_particle_fragment:ob,map_particle_pars_fragment:ab,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:db,morphnormal_vertex:fb,morphtarget_pars_vertex:hb,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:xb,normal_pars_vertex:vb,normal_vertex:_b,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:bb,opaque_fragment:Tb,packing:wb,premultiplied_alpha_fragment:Ab,project_vertex:Cb,dithering_fragment:Rb,dithering_pars_fragment:Nb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Db,shadowmap_vertex:Ub,shadowmask_pars_fragment:Fb,skinbase_vertex:Ob,skinning_pars_vertex:kb,skinning_vertex:zb,skinnormal_vertex:Bb,specularmap_fragment:Hb,specularmap_pars_fragment:Vb,tonemapping_fragment:Gb,tonemapping_pars_fragment:jb,transmission_fragment:Wb,transmission_pars_fragment:Xb,uv_pars_fragment:Yb,uv_pars_vertex:$b,uv_vertex:qb,worldpos_vertex:Kb,background_vert:Jb,background_frag:Zb,backgroundCube_vert:Qb,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:rT,distance_vert:sT,distance_frag:oT,equirect_vert:aT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:dT,meshbasic_frag:fT,meshlambert_vert:hT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:xT,meshnormal_frag:vT,meshphong_vert:_T,meshphong_frag:yT,meshphysical_vert:ST,meshphysical_frag:ET,meshtoon_vert:MT,meshtoon_frag:bT,points_vert:TT,points_frag:wT,shadow_vert:AT,shadow_frag:CT,sprite_vert:RT,sprite_frag:NT},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:tn([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:tn([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:tn([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:tn([Se.common,Se.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:tn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ai.physical={uniforms:tn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const al={r:0,b:0,g:0},PT=new Ct,Lv=new Xe;Lv.set(-1,0,0,0,1,0,0,0,1);function LT(t,e,n,i,r,s){const o=new et(0);let a=r===!0?0:1,l,d,h=null,m=0,c=null;function p(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const y=x.backgroundBlurriness>0;S=e.get(S,y)}return S}function v(x){let S=!1;const y=p(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===bc)?(d===void 0&&(d=new Bn(new ro(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ks(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Lv),d.material.toneMapped=rt.getTransfer(y.colorSpace)!==dt,(h!==y||m!==y.version||c!==t.toneMapping)&&(d.material.needsUpdate=!0,h=y,m=y.version,c=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Bn(new qs(2,2),new vi({name:"BackgroundMaterial",uniforms:Ks(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=rt.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||m!==y.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,h=y,m=y.version,c=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(al,Cv(t)),n.buffers.color.setClear(al.r,al.g,al.b,S,s)}function f(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:v,addToRenderList:E,dispose:f}}function IT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null);let s=r,o=!1;function a(R,L,G,q,D){let W=!1;const z=m(R,q,G,L);s!==z&&(s=z,d(s.object)),W=p(R,q,G,D),W&&v(R,q,G,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(R,L,G,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function d(R){return t.bindVertexArray(R)}function h(R){return t.deleteVertexArray(R)}function m(R,L,G,q){const D=q.wireframe===!0;let W=i[L.id];W===void 0&&(W={},i[L.id]=W);const z=R.isInstancedMesh===!0?R.id:0;let U=W[z];U===void 0&&(U={},W[z]=U);let V=U[G.id];V===void 0&&(V={},U[G.id]=V);let I=V[D];return I===void 0&&(I=c(l()),V[D]=I),I}function c(R){const L=[],G=[],q=[];for(let D=0;D<n;D++)L[D]=0,G[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:q,object:R,attributes:{},index:null}}function p(R,L,G,q){const D=s.attributes,W=L.attributes;let z=0;const U=G.getAttributes();for(const V in U)if(U[V].location>=0){const Q=D[V];let ie=W[V];if(ie===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==q}function v(R,L,G,q){const D={},W=L.attributes;let z=0;const U=G.getAttributes();for(const V in U)if(U[V].location>=0){let Q=W[V];Q===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),D[V]=ie,z++}s.attributes=D,s.attributesNum=z,s.index=q}function E(){const R=s.newAttributes;for(let L=0,G=R.length;L<G;L++)R[L]=0}function g(R){f(R,0)}function f(R,L){const G=s.newAttributes,q=s.enabledAttributes,D=s.attributeDivisors;G[R]=1,q[R]===0&&(t.enableVertexAttribArray(R),q[R]=1),D[R]!==L&&(t.vertexAttribDivisor(R,L),D[R]=L)}function x(){const R=s.newAttributes,L=s.enabledAttributes;for(let G=0,q=L.length;G<q;G++)L[G]!==R[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function S(R,L,G,q,D,W,z){z===!0?t.vertexAttribIPointer(R,L,G,D,W):t.vertexAttribPointer(R,L,G,q,D,W)}function y(R,L,G,q){E();const D=q.attributes,W=G.getAttributes(),z=L.defaultAttributeValues;for(const U in W){const V=W[U];if(V.location>=0){let I=D[U];if(I===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),I!==void 0){const Q=I.normalized,ie=I.itemSize,Ie=e.get(I);if(Ie===void 0)continue;const Ge=Ie.buffer,De=Ie.type,K=Ie.bytesPerElement,ce=De===t.INT||De===t.UNSIGNED_INT||I.gpuType===Ph;if(I.isInterleavedBufferAttribute){const oe=I.data,he=oe.stride,Be=I.offset;if(oe.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)f(V.location+Le,oe.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<V.locationSize;Le++)g(V.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Le=0;Le<V.locationSize;Le++)S(V.location+Le,ie/V.locationSize,De,Q,he*K,(Be+ie/V.locationSize*Le)*K,ce)}else{if(I.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)f(V.location+oe,I.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,ie/V.locationSize,De,Q,ie*K,ie/V.locationSize*oe*K,ce)}}else if(z!==void 0){const Q=z[U];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(V.location,Q);break;case 3:t.vertexAttrib3fv(V.location,Q);break;case 4:t.vertexAttrib4fv(V.location,Q);break;default:t.vertexAttrib1fv(V.location,Q)}}}}x()}function A(){T();for(const R in i){const L=i[R];for(const G in L){const q=L[G];for(const D in q){const W=q[D];for(const z in W)h(W[z].object),delete W[z];delete q[D]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;const L=i[R.id];for(const G in L){const q=L[G];for(const D in q){const W=q[D];for(const z in W)h(W[z].object),delete W[z];delete q[D]}}delete i[R.id]}function w(R){for(const L in i){const G=i[L];for(const q in G){const D=G[q];if(D[R.id]===void 0)continue;const W=D[R.id];for(const z in W)h(W[z].object),delete W[z];delete D[R.id]}}}function _(R){for(const L in i){const G=i[L],q=R.isInstancedMesh===!0?R.id:0,D=G[q];if(D!==void 0){for(const W in D){const z=D[W];for(const U in z)h(z[U].object),delete z[U];delete D[W]}delete G[q],Object.keys(G).length===0&&delete i[L]}}}function T(){N(),o=!0,s!==r&&(s=r,d(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function DT(t,e,n){let i;function r(l){i=l}function s(l,d){t.drawArrays(i,l,d),n.update(d,i,1)}function o(l,d,h){h!==0&&(t.drawArraysInstanced(i,l,d,h),n.update(d,i,h))}function a(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,h);let c=0;for(let p=0;p<h;p++)c+=d[p];n.update(c,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function UT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Kn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const _=w===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ci&&!_)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const h=l(d);h!==d&&(je("WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&c===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:b}}function FT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,c){const p=m.length!==0||c||i!==0||r;return r=c,i=m.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,c){n=h(m,c,0)},this.setState=function(m,c,p){const v=m.clippingPlanes,E=m.clipIntersection,g=m.clipShadows,f=t.get(m);if(!r||v===null||v.length===0||s&&!g)s?h(null):d();else{const x=s?0:i,S=x*4;let y=f.clippingState||null;l.value=y,y=h(v,c,S,p);for(let A=0;A!==S;++A)y[A]=n[A];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function d(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,c,p,v){const E=m!==null?m.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,x=c.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let S=0,y=p;S!==E;++S,y+=4)o.copy(m[S]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const rr=4,o0=[.125,.215,.35,.446,.526,.582],Cr=20,OT=256,Eo=new Nv,a0=new et;let zu=null,Bu=0,Hu=0,Vu=!1;const kT=new F;class l0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kT}=s;zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Bu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Fi,format:Kn,colorSpace:ic,depthBuffer:!1},r=c0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(s)),this._blurMaterial=HT(s,e,n),this._ggxMaterial=BT(s,e,n)}return r}_compileMaterial(e){const n=new Bn(new mn,e);this._renderer.compile(n,Eo)}_sceneToCubeUV(e,n,i,r,s){const l=new Mn(90,1,n,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,c=m.autoClear,p=m.toneMapping;m.getClearColor(a0),m.toneMapping=mi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new ro,new ks({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,f=!0):(g.color.copy(a0),f=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,d[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,d[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,d[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const A=this._cubeSize;ps(r,y*A,S>2?A:0,A,A),m.setRenderTarget(r),f&&m.render(E,l),m.render(e,l)}m.toneMapping=p,m.autoClear=c,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=d0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ps(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Eo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,d=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),m=Math.sqrt(d*d-h*h),c=0+d*1.25,p=m*c,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-rr?i-v+rr:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,ps(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(a,Eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ps(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(a,Eo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const h=3,m=this._lodMeshes[r];m.material=d;const c=d.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):Cr;g>Cr&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cr}`);const f=[];let x=0;for(let w=0;w<Cr;++w){const _=w/E,T=Math.exp(-_*_/2);f.push(T),w===0?x+=T:w<g&&(x+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/x;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=f,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:S}=this;c.dTheta.value=v,c.mipInt.value=S-i;const y=this._sizeLods[r],A=3*y*(r>S-rr?r-S+rr:0),b=4*(this._cubeSize-y);ps(n,A,b,3*y,2*y),l.setRenderTarget(n),l.render(m,Eo)}}function zT(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+o0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-rr?l=o0[o-t+rr-1]:o===0&&(l=0),n.push(l);const d=1/(a-2),h=-d,m=1+d,c=[h,h,m,h,m,m,h,h,m,m,h,m],p=6,v=6,E=3,g=2,f=1,x=new Float32Array(E*v*p),S=new Float32Array(g*v*p),y=new Float32Array(f*v*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,_=b>2?0:-1,T=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];x.set(T,E*v*b),S.set(c,g*v*b);const N=[b,b,b,b,b,b];y.set(N,f*v*b)}const A=new mn;A.setAttribute("position",new On(x,E)),A.setAttribute("uv",new On(S,g)),A.setAttribute("faceIndex",new On(y,f)),i.push(new Bn(A,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function c0(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function HT(t,e,n){const i=new Float32Array(Cr),r=new F(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function u0(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function d0(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Iv extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ni});s.uniforms.tEquirect.value=n;const o=new Bn(r,s),a=n.minFilter;return n.minFilter===Lr&&(n.minFilter=jt),new YE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function VT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(c,p=!1){return c==null?null:p?o(c):s(c)}function s(c){if(c&&c.isTexture){const p=c.mapping;if(p===lu||p===cu)if(e.has(c)){const v=e.get(c).texture;return a(v,c.mapping)}else{const v=c.image;if(v&&v.height>0){const E=new Iv(v.height);return E.fromEquirectangularTexture(t,c),e.set(c,E),c.addEventListener("dispose",d),a(E.texture,c.mapping)}else return null}}return c}function o(c){if(c&&c.isTexture){const p=c.mapping,v=p===lu||p===cu,E=p===Hr||p===Ys;if(v||E){let g=n.get(c);const f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return i===null&&(i=new l0(t)),g=v?i.fromEquirectangular(c,g):i.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return v&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new l0(t)),g=v?i.fromEquirectangular(c):i.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),c.addEventListener("dispose",h),g.texture):null}}}return c}function a(c,p){return p===lu?c.mapping=Hr:p===cu&&(c.mapping=Ys),c}function l(c){let p=0;const v=6;for(let E=0;E<v;E++)c[E]!==void 0&&p++;return p===v}function d(c){const p=c.target;p.removeEventListener("dispose",d);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(c){const p=c.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function GT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fs("WebGLRenderer: "+i+" extension not supported."),r}}}function jT(t,e,n,i){const r={},s=new WeakMap;function o(m){const c=m.target;c.index!==null&&e.remove(c.index);for(const v in c.attributes)e.remove(c.attributes[v]);c.removeEventListener("dispose",o),delete r[c.id];const p=s.get(c);p&&(e.remove(p),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function a(m,c){return r[c.id]===!0||(c.addEventListener("dispose",o),r[c.id]=!0,n.memory.geometries++),c}function l(m){const c=m.attributes;for(const p in c)e.update(c[p],t.ARRAY_BUFFER)}function d(m){const c=[],p=m.index,v=m.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const x=p.array;E=p.version;for(let S=0,y=x.length;S<y;S+=3){const A=x[S+0],b=x[S+1],w=x[S+2];c.push(A,b,b,w,w,A)}}else{const x=v.array;E=v.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const A=S+0,b=S+1,w=S+2;c.push(A,b,b,w,w,A)}}const g=new(v.count>=65535?yv:_v)(c,1);g.version=E;const f=s.get(m);f&&e.remove(f),s.set(m,g)}function h(m){const c=s.get(m);if(c){const p=m.index;p!==null&&c.version<p.version&&d(m)}else d(m);return s.get(m)}return{get:a,update:l,getWireframeAttribute:h}}function WT(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,c){t.drawElements(i,c,s,m*o),n.update(c,i,1)}function d(m,c,p){p!==0&&(t.drawElementsInstanced(i,c,s,m*o,p),n.update(c,i,p))}function h(m,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,m,0,p);let E=0;for(let g=0;g<p;g++)E+=c[g];n.update(E,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=d,this.renderMultiDraw=h}function XT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YT(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const d=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0;let c=i.get(a);if(c===void 0||c.count!==m){let N=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",N)};var p=N;c!==void 0&&c.texture.dispose();const v=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),E===!0&&(y=2),g===!0&&(y=3);let A=a.attributes.position.count*y,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*b*4*m),_=new mv(w,A,b,m);_.type=ci,_.needsUpdate=!0;const T=y*4;for(let R=0;R<m;R++){const L=f[R],G=x[R],q=S[R],D=A*b*4*R;for(let W=0;W<L.count;W++){const z=W*T;v===!0&&(r.fromBufferAttribute(L,W),w[D+z+0]=r.x,w[D+z+1]=r.y,w[D+z+2]=r.z,w[D+z+3]=0),E===!0&&(r.fromBufferAttribute(G,W),w[D+z+4]=r.x,w[D+z+5]=r.y,w[D+z+6]=r.z,w[D+z+7]=0),g===!0&&(r.fromBufferAttribute(q,W),w[D+z+8]=r.x,w[D+z+9]=r.y,w[D+z+10]=r.z,w[D+z+11]=q.itemSize===4?r.w:1)}}c={count:m,texture:_,size:new He(A,b)},i.set(a,c),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<d.length;g++)v+=d[g];const E=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",d)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function $T(t,e,n,i,r){let s=new WeakMap;function o(d){const h=r.render.frame,m=d.geometry,c=e.get(d,m);if(s.get(c)!==h&&(e.update(c),s.set(c,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),s.get(d)!==h&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const p=d.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return c}function a(){s=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const qT={[Qx]:"LINEAR_TONE_MAPPING",[ev]:"REINHARD_TONE_MAPPING",[tv]:"CINEON_TONE_MAPPING",[nv]:"ACES_FILMIC_TONE_MAPPING",[rv]:"AGX_TONE_MAPPING",[sv]:"NEUTRAL_TONE_MAPPING",[iv]:"CUSTOM_TONE_MAPPING"};function KT(t,e,n,i,r,s){const o=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new $s(e,n):void 0}),a=new gi(e,n,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new mn;l.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const d=new BE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Bn(l,d),m=new Nv(-1,1,1,-1,0,1);let c=null,p=null,v=!1,E,g=null,f=[],x=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let A=0;A<f.length;A++){const b=f[A];b.setSize&&b.setSize(S,y)}},this.setEffects=function(S){f=S,x=f.length>0&&f[0].isRenderPass===!0;const y=o.width,A=o.height;for(let b=0;b<f.length;b++){const w=f[b];w.setSize&&w.setSize(y,A)}},this.begin=function(S,y){if(v||S.toneMapping===mi&&f.length===0)return!1;if(g=y,y!==null){const A=y.width,b=y.height;(o.width!==A||o.height!==b)&&this.setSize(A,b)}return x===!1&&S.setRenderTarget(o),E=S.toneMapping,S.toneMapping=mi,!0},this.hasRenderPass=function(){return x},this.end=function(S,y){S.toneMapping=E,v=!0;let A=o,b=a;for(let w=0;w<f.length;w++){const _=f[w];if(_.enabled!==!1&&(_.render(S,b,A,y),_.needsSwap!==!1)){const T=A;A=b,b=T}}if(c!==S.outputColorSpace||p!==S.toneMapping){c=S.outputColorSpace,p=S.toneMapping,d.defines={},rt.getTransfer(c)===dt&&(d.defines.SRGB_TRANSFER="");const w=qT[p];w&&(d.defines[w]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(g),S.render(h,m),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),d.dispose()}}const Dv=new Qt,Pf=new $s(1,1),Uv=new mv,Fv=new nE,Ov=new bv,f0=[],h0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=f0[r];if(s===void 0&&(s=new Float32Array(r),f0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=h0[e];n===void 0&&(n=new Int32Array(e),h0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;g0.set(i),t.uniformMatrix2fv(this.addr,!1,g0),Ot(n,i)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;m0.set(i),t.uniformMatrix3fv(this.addr,!1,m0),Ot(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;p0.set(i),t.uniformMatrix4fv(this.addr,!1,p0),Ot(n,i)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Pf.compareFunction=n.isReversedDepthBuffer()?kh:Oh,s=Pf):s=Dv,n.setTexture2D(e||s,r)}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Fv,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ov,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uv,r)}function gw(t){switch(t){case 5126:return JT;case 35664:return ZT;case 35665:return QT;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function xw(t,e){t.uniform1fv(this.addr,e)}function vw(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function _w(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function yw(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function Sw(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ew(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Mw(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bw(t,e){t.uniform1iv(this.addr,e)}function Tw(t,e){t.uniform2iv(this.addr,e)}function ww(t,e){t.uniform3iv(this.addr,e)}function Aw(t,e){t.uniform4iv(this.addr,e)}function Cw(t,e){t.uniform1uiv(this.addr,e)}function Rw(t,e){t.uniform2uiv(this.addr,e)}function Nw(t,e){t.uniform3uiv(this.addr,e)}function Pw(t,e){t.uniform4uiv(this.addr,e)}function Lw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Pf:o=Dv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Iw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Fv,s[o])}function Dw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ov,s[o])}function Uw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Uv,s[o])}function Fw(t){switch(t){case 5126:return xw;case 35664:return vw;case 35665:return _w;case 35666:return yw;case 35674:return Sw;case 35675:return Ew;case 35676:return Mw;case 5124:case 35670:return bw;case 35667:case 35671:return Tw;case 35668:case 35672:return ww;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Nw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gw(n.type)}}class kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fw(n.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function x0(t,e){t.seq.push(e),t.map[e.id]=e}function Bw(t,e,n){const i=t.name,r=i.length;for(Gu.lastIndex=0;;){const s=Gu.exec(i),o=Gu.lastIndex;let a=s[1];const l=s[2]==="]",d=s[3];if(l&&(a=a|0),d===void 0||d==="["&&o+2===r){x0(n,d===void 0?new Ow(a,t,e):new kw(a,t,e));break}else{let m=n.map[a];m===void 0&&(m=new zw(a),x0(n,m)),n=m}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Bw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function v0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Hw=37297;let Vw=0;function Gw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const _0=new Xe;function jw(t){rt._getMatrix(_0,rt.workingColorSpace,t);const e=`mat3( ${_0.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case rc:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function y0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Gw(t.getShaderSource(e),a)}else return s}function Ww(t,e){const n=jw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Xw={[Qx]:"Linear",[ev]:"Reinhard",[tv]:"Cineon",[nv]:"ACESFilmic",[rv]:"AgX",[sv]:"Neutral",[iv]:"Custom"};function Yw(t,e){const n=Xw[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new F;function $w(){rt.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Po(t){return t!==""}function S0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(t){return t.replace(Zw,eA)}const Qw=new Map;function eA(t,e){let n=Ze[e];if(n===void 0){const i=Qw.get(e);if(i!==void 0)n=Ze[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lf(n)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(t){return t.replace(tA,nA)}function nA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function b0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iA={[Ml]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function rA(t){return iA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sA={[Hr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[bc]:"ENVMAP_TYPE_CUBE_UV"};function oA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":sA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const aA={[Ys]:"ENVMAP_MODE_REFRACTION"};function lA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":aA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cA={[Zx]:"ENVMAP_BLENDING_MULTIPLY",[U1]:"ENVMAP_BLENDING_MIX",[F1]:"ENVMAP_BLENDING_ADD"};function uA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":cA[t.combine]||"ENVMAP_BLENDING_NONE"}function dA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rA(n),d=oA(n),h=lA(n),m=uA(n),c=dA(n),p=qw(n),v=Kw(s),E=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[b0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[b0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==mi?Yw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ww("linearToOutputTexel",n.outputColorSpace),$w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),o=Lf(o),o=S0(o,n),o=E0(o,n),a=Lf(a),a=S0(a,n),a=E0(a,n),o=M0(o),a=M0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+g+o,y=x+f+a,A=v0(r,r.VERTEX_SHADER,S),b=v0(r,r.FRAGMENT_SHADER,y);r.attachShader(E,A),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function w(R){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(E)||"",G=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(b)||"",D=L.trim(),W=G.trim(),z=q.trim();let U=!0,V=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,A,b);else{const I=y0(r,A,"vertex"),Q=y0(r,b,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+I+`
`+Q)}else D!==""?je("WebGLProgram: Program Info Log:",D):(W===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:U,programLog:D,vertexShader:{log:W,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(A),r.deleteShader(b),_=new Rl(r,E),T=Jw(r,E)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,Hw)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=b,this}let hA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mA(e),n.set(e,i)),i}}class mA{constructor(e){this.id=hA++,this.code=e,this.usedTimes=0}}function gA(t){return t===Vr||t===tc||t===nc}function xA(t,e,n,i,r,s){const o=new gv,a=new pA,l=new Set,d=[],h=new Map,m=i.logarithmicDepthBuffer;let c=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,T,N,R,L,G){const q=R.fog,D=L.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||W,z),V=U&&U.mapping===bc?U.image.height:null,I=p[_.type];_.precision!==null&&(c=i.getMaxPrecision(_.precision),c!==_.precision&&je("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=Q!==void 0?Q.length:0;let Ie=0;D.morphAttributes.position!==void 0&&(Ie=1),D.morphAttributes.normal!==void 0&&(Ie=2),D.morphAttributes.color!==void 0&&(Ie=3);let Ge,De,K,ce;if(I){const _e=ai[I];Ge=_e.vertexShader,De=_e.fragmentShader}else{Ge=_.vertexShader,De=_.fragmentShader;const _e=a.getVertexShaderStage(_),tt=a.getFragmentShaderStage(_);a.update(_,_e,tt),K=_e.id,ce=tt.id}const oe=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,$e=!!_.map,Oe=!!_.matcap,Ve=!!U,Ne=!!_.aoMap,fe=!!_.lightMap,me=!!_.bumpMap&&_.wireframe===!1,ye=!!_.normalMap,Ce=!!_.displacementMap,Je=!!_.emissiveMap,qe=!!_.metalnessMap,ot=!!_.roughnessMap,O=_.anisotropy>0,St=_.clearcoat>0,st=_.dispersion>0,P=_.iridescence>0,M=_.sheen>0,H=_.transmission>0,X=O&&!!_.anisotropyMap,ee=St&&!!_.clearcoatMap,ue=St&&!!_.clearcoatNormalMap,pe=St&&!!_.clearcoatRoughnessMap,te=P&&!!_.iridescenceMap,re=P&&!!_.iridescenceThicknessMap,ge=M&&!!_.sheenColorMap,Re=M&&!!_.sheenRoughnessMap,ve=!!_.specularMap,xe=!!_.specularColorMap,Ue=!!_.specularIntensityMap,ze=H&&!!_.transmissionMap,We=H&&!!_.thicknessMap,k=!!_.gradientMap,Z=!!_.alphaMap,j=_.alphaTest>0,le=!!_.alphaHash,ae=!!_.extensions;let ne=mi;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ae={shaderID:I,shaderType:_.type,shaderName:_.name,vertexShader:Ge,fragmentShader:De,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:Oe,envMap:Ve,envMapMode:Ve&&U.mapping,envMapCubeUVHeight:V,aoMap:Ne,lightMap:fe,bumpMap:me,normalMap:ye,displacementMap:Ce,emissiveMap:Je,normalMapObjectSpace:ye&&_.normalMapType===z1,normalMapTangentSpace:ye&&_.normalMapType===Rm,packedNormalMap:ye&&_.normalMapType===Rm&&gA(_.normalMap.format),metalnessMap:qe,roughnessMap:ot,anisotropy:O,anisotropyMap:X,clearcoat:St,clearcoatMap:ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:pe,dispersion:st,iridescence:P,iridescenceMap:te,iridescenceThicknessMap:re,sheen:M,sheenColorMap:ge,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:xe,specularIntensityMap:Ue,transmission:H,transmissionMap:ze,thicknessMap:We,gradientMap:k,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:j,alphaHash:le,combine:_.combine,mapUv:$e&&v(_.map.channel),aoMapUv:Ne&&v(_.aoMap.channel),lightMapUv:fe&&v(_.lightMap.channel),bumpMapUv:me&&v(_.bumpMap.channel),normalMapUv:ye&&v(_.normalMap.channel),displacementMapUv:Ce&&v(_.displacementMap.channel),emissiveMapUv:Je&&v(_.emissiveMap.channel),metalnessMapUv:qe&&v(_.metalnessMap.channel),roughnessMapUv:ot&&v(_.roughnessMap.channel),anisotropyMapUv:X&&v(_.anisotropyMap.channel),clearcoatMapUv:ee&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(_.sheenRoughnessMap.channel),specularMapUv:ve&&v(_.specularMap.channel),specularColorMapUv:xe&&v(_.specularColorMap.channel),specularIntensityMapUv:Ue&&v(_.specularIntensityMap.channel),transmissionMapUv:ze&&v(_.transmissionMap.channel),thicknessMapUv:We&&v(_.thicknessMap.channel),alphaMapUv:Z&&v(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ye||O),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&($e||Z),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$n,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)T.push(N),T.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(T,_),x(T,_),T.push(t.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const T=p[_.type];let N;if(T){const R=ai[T];N=OE.clone(R.uniforms)}else N=_.uniforms;return N}function y(_,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new fA(t,T,_,r),d.push(N),h.set(T,N)),N}function A(_){if(--_.usedTimes===0){const T=d.indexOf(_);d[T]=d[d.length-1],d.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function w(){a.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:w}}function vA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function _A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function T0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function w0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function a(c,p,v,E,g,f){let x=t[e];return x===void 0?(x={id:c.id,object:c,geometry:p,material:v,materialVariant:o(c),groupOrder:E,renderOrder:c.renderOrder,z:g,group:f},t[e]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=v,x.materialVariant=o(c),x.groupOrder=E,x.renderOrder=c.renderOrder,x.z=g,x.group=f),e++,x}function l(c,p,v,E,g,f){const x=a(c,p,v,E,g,f);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function d(c,p,v,E,g,f){const x=a(c,p,v,E,g,f);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(c,p,v){n.length>1&&n.sort(c||_A),i.length>1&&i.sort(p||T0),r.length>1&&r.sort(p||T0),v&&(n.reverse(),i.reverse(),r.reverse())}function m(){for(let c=e,p=t.length;c<p;c++){const v=t[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:d,finish:m,sort:h}}function yA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new w0,t.set(i,[o])):r>=s.length?(o=new w0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new et};break;case"SpotLight":n={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MA=0;function bA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TA(t){const e=new SA,n=EA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new F);const r=new F,s=new Ct,o=new Ct;function a(d){let h=0,m=0,c=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,x=0,S=0,y=0,A=0,b=0,w=0;d.sort(bA);for(let T=0,N=d.length;T<N;T++){const R=d[T],L=R.color,G=R.intensity,q=R.distance;let D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Vr?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*G,m+=L.g*G,c+=L.b*G;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],G);w++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,U=n.get(R);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=R.shadow.matrix,x++}i.directional[p]=W,p++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[E]=W;const z=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,z.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[E]=z.matrix,R.castShadow){const U=n.get(R);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[E]=U,i.spotShadowMap[E]=D,y++}E++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(L).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=W,g++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const z=R.shadow,U=n.get(R);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=D,i.pointShadowMatrix[v]=R.shadow.matrix,S++}i.point[v]=W,v++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(G),W.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[f]=W,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=c;const _=i.hash;(_.directionalLength!==p||_.pointLength!==v||_.spotLength!==E||_.rectAreaLength!==g||_.hemiLength!==f||_.numDirectionalShadows!==x||_.numPointShadows!==S||_.numSpotShadows!==y||_.numSpotMaps!==A||_.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,_.directionalLength=p,_.pointLength=v,_.spotLength=E,_.rectAreaLength=g,_.hemiLength=f,_.numDirectionalShadows=x,_.numPointShadows=S,_.numSpotShadows=y,_.numSpotMaps=A,_.numLightProbes=w,i.version=MA++)}function l(d,h){let m=0,c=0,p=0,v=0,E=0;const g=h.matrixWorldInverse;for(let f=0,x=d.length;f<x;f++){const S=d[f];if(S.isDirectionalLight){const y=i.directional[m];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const y=i.point[c];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),c++}else if(S.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:a,setupView:l,state:i}}function A0(t){const e=new TA(t),n=[],i=[],r=[];function s(c){m.camera=c,n.length=0,i.length=0,r.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function l(c){r.push(c)}function d(){e.setup(n)}function h(c){e.setupView(n,c)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:d,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function wA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new A0(t),e.set(r,[a])):s>=o.length?(a=new A0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const AA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RA=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],NA=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],C0=new Ct,Mo=new F,ju=new F;function PA(t,e,n){let i=new Ev;const r=new He,s=new He,o=new At,a=new HE,l=new VE,d={},h=n.maxTextureSize,m={[mr]:hn,[hn]:mr,[$n]:$n},c=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:AA,fragmentShader:CA}),p=c.clone();p.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Bn(v,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let f=this.type;this.render=function(b,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===g1&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ml);const T=t.getRenderTarget(),N=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Ni),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=f!==this.type;G&&w.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(D=>D.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,D=b.length;q<D;q++){const W=b[q],z=W.shadow;if(z===void 0){je("WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const U=z.getFrameExtents();r.multiply(U),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,z.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===No){if(W.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new gi(r.x,r.y,{format:Vr,type:Fi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=W.name+".shadowMap",z.map.depthTexture=new $s(r.x,r.y,ci),z.map.depthTexture.name=W.name+".shadowMapDepth",z.map.depthTexture.format=Oi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt}else W.isPointLight?(z.map=new Iv(r.x),z.map.depthTexture=new yE(r.x,xi)):(z.map=new gi(r.x,r.y),z.map.depthTexture=new $s(r.x,r.y,xi)),z.map.depthTexture.name=W.name+".shadowMap",z.map.depthTexture.format=Oi,this.type===Ml?(z.map.depthTexture.compareFunction=V?kh:Oh,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Gt,z.map.depthTexture.magFilter=Gt);z.camera.updateProjectionMatrix()}const I=z.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<I;Q++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,Q),t.clear();else{Q===0&&(t.setRenderTarget(z.map),t.clear());const ie=z.getViewport(Q);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),L.viewport(o)}if(W.isPointLight){const ie=z.camera,Ie=z.matrix,Ge=W.distance||ie.far;Ge!==ie.far&&(ie.far=Ge,ie.updateProjectionMatrix()),Mo.setFromMatrixPosition(W.matrixWorld),ie.position.copy(Mo),ju.copy(ie.position),ju.add(RA[Q]),ie.up.copy(NA[Q]),ie.lookAt(ju),ie.updateMatrixWorld(),Ie.makeTranslation(-Mo.x,-Mo.y,-Mo.z),C0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),z._frustum.setFromProjectionMatrix(C0,ie.coordinateSystem,ie.reversedDepth)}else z.updateMatrices(W);i=z.getFrustum(),y(w,_,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===No&&x(z,_),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(T,N,R)};function x(b,w){const _=e.update(E);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(r.x,r.y,{format:Vr,type:Fi})),c.uniforms.shadow_pass.value=b.map.depthTexture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,_,c,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,_,p,E,null)}function S(b,w,_,T){let N=null;const R=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)N=R;else if(N=_.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=N.uuid,G=w.uuid;let q=d[L];q===void 0&&(q={},d[L]=q);let D=q[G];D===void 0&&(D=N.clone(),q[G]=D,w.addEventListener("dispose",A)),N=D}if(N.visible=w.visible,N.wireframe=w.wireframe,T===No?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:m[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,N.map=w.map,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const L=t.properties.get(N);L.light=_}return N}function y(b,w,_,T,N){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===No)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const G=e.update(b),q=b.material;if(Array.isArray(q)){const D=G.groups;for(let W=0,z=D.length;W<z;W++){const U=D[W],V=q[U.materialIndex];if(V&&V.visible){const I=S(b,V,T,N);b.onBeforeShadow(t,b,w,_,G,I,U),t.renderBufferDirect(_,null,G,I,b,U),b.onAfterShadow(t,b,w,_,G,I,U)}}}else if(q.visible){const D=S(b,q,T,N);b.onBeforeShadow(t,b,w,_,G,D,null),t.renderBufferDirect(_,null,G,D,b,null),b.onAfterShadow(t,b,w,_,G,D,null)}}const L=b.children;for(let G=0,q=L.length;G<q;G++)y(L[G],w,_,T,N)}function A(b){b.target.removeEventListener("dispose",A);for(const _ in d){const T=d[_],N=b.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function LA(t,e){function n(){let k=!1;const Z=new At;let j=null;const le=new At(0,0,0,0);return{setMask:function(ae){j!==ae&&!k&&(t.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){k=ae},setClear:function(ae,ne,Ae,_e,tt){tt===!0&&(ae*=_e,ne*=_e,Ae*=_e),Z.set(ae,ne,Ae,_e),le.equals(Z)===!1&&(t.clearColor(ae,ne,Ae,_e),le.copy(Z))},reset:function(){k=!1,j=null,le.set(-1,0,0,0)}}}function i(){let k=!1,Z=!1,j=null,le=null,ae=null;return{setReversed:function(ne){if(Z!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Z=ne;const _e=ae;ae=null,this.setClear(_e)}},getReversed:function(){return Z},setTest:function(ne){ne?oe(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ne){j!==ne&&!k&&(t.depthMask(ne),j=ne)},setFunc:function(ne){if(Z&&(ne=q1[ne]),le!==ne){switch(ne){case Gd:t.depthFunc(t.NEVER);break;case jd:t.depthFunc(t.ALWAYS);break;case Wd:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Xd:t.depthFunc(t.EQUAL);break;case Yd:t.depthFunc(t.GEQUAL);break;case $d:t.depthFunc(t.GREATER);break;case qd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=ne}},setLocked:function(ne){k=ne},setClear:function(ne){ae!==ne&&(ae=ne,Z&&(ne=1-ne),t.clearDepth(ne))},reset:function(){k=!1,j=null,le=null,ae=null,Z=!1}}}function r(){let k=!1,Z=null,j=null,le=null,ae=null,ne=null,Ae=null,_e=null,tt=null;return{setTest:function(at){k||(at?oe(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(at){Z!==at&&!k&&(t.stencilMask(at),Z=at)},setFunc:function(at,gn,Rn){(j!==at||le!==gn||ae!==Rn)&&(t.stencilFunc(at,gn,Rn),j=at,le=gn,ae=Rn)},setOp:function(at,gn,Rn){(ne!==at||Ae!==gn||_e!==Rn)&&(t.stencilOp(at,gn,Rn),ne=at,Ae=gn,_e=Rn)},setLocked:function(at){k=at},setClear:function(at){tt!==at&&(t.clearStencil(at),tt=at)},reset:function(){k=!1,Z=null,j=null,le=null,ae=null,ne=null,Ae=null,_e=null,tt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,d=new WeakMap;let h={},m={},c={},p=new WeakMap,v=[],E=null,g=!1,f=null,x=null,S=null,y=null,A=null,b=null,w=null,_=new et(0,0,0),T=0,N=!1,R=null,L=null,G=null,q=null,D=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,U=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=U>=2);let I=null,Q={};const ie=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Ge=new At().fromArray(ie),De=new At().fromArray(Ie);function K(k,Z,j,le){const ae=new Uint8Array(4),ne=t.createTexture();t.bindTexture(k,ne),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<j;Ae++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Z,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(Z+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return ne}const ce={};ce[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Xs),me(!1),ye(Tm),oe(t.CULL_FACE),Ne(Ni);function oe(k){h[k]!==!0&&(t.enable(k),h[k]=!0)}function he(k){h[k]!==!1&&(t.disable(k),h[k]=!1)}function Be(k,Z){return c[k]!==Z?(t.bindFramebuffer(k,Z),c[k]=Z,k===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Z),k===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Z),!0):!1}function Le(k,Z){let j=v,le=!1;if(k){j=p.get(Z),j===void 0&&(j=[],p.set(Z,j));const ae=k.textures;if(j.length!==ae.length||j[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ae=ae.length;ne<Ae;ne++)j[ne]=t.COLOR_ATTACHMENT0+ne;j.length=ae.length,le=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,le=!0);le&&t.drawBuffers(j)}function $e(k){return E!==k?(t.useProgram(k),E=k,!0):!1}const Oe={[Ar]:t.FUNC_ADD,[v1]:t.FUNC_SUBTRACT,[_1]:t.FUNC_REVERSE_SUBTRACT};Oe[y1]=t.MIN,Oe[S1]=t.MAX;const Ve={[E1]:t.ZERO,[M1]:t.ONE,[b1]:t.SRC_COLOR,[Hd]:t.SRC_ALPHA,[N1]:t.SRC_ALPHA_SATURATE,[C1]:t.DST_COLOR,[w1]:t.DST_ALPHA,[T1]:t.ONE_MINUS_SRC_COLOR,[Vd]:t.ONE_MINUS_SRC_ALPHA,[R1]:t.ONE_MINUS_DST_COLOR,[A1]:t.ONE_MINUS_DST_ALPHA,[P1]:t.CONSTANT_COLOR,[L1]:t.ONE_MINUS_CONSTANT_COLOR,[I1]:t.CONSTANT_ALPHA,[D1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(k,Z,j,le,ae,ne,Ae,_e,tt,at){if(k===Ni){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(oe(t.BLEND),g=!0),k!==x1){if(k!==f||at!==N){if((x!==Ar||A!==Ar)&&(t.blendEquation(t.FUNC_ADD),x=Ar,A=Ar),at)switch(k){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wm:t.blendFunc(t.ONE,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ct("WebGLState: Invalid blending: ",k);break}else switch(k){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Am:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",k);break}S=null,y=null,b=null,w=null,_.set(0,0,0),T=0,f=k,N=at}return}ae=ae||Z,ne=ne||j,Ae=Ae||le,(Z!==x||ae!==A)&&(t.blendEquationSeparate(Oe[Z],Oe[ae]),x=Z,A=ae),(j!==S||le!==y||ne!==b||Ae!==w)&&(t.blendFuncSeparate(Ve[j],Ve[le],Ve[ne],Ve[Ae]),S=j,y=le,b=ne,w=Ae),(_e.equals(_)===!1||tt!==T)&&(t.blendColor(_e.r,_e.g,_e.b,tt),_.copy(_e),T=tt),f=k,N=!1}function fe(k,Z){k.side===$n?he(t.CULL_FACE):oe(t.CULL_FACE);let j=k.side===hn;Z&&(j=!j),me(j),k.blending===Us&&k.transparent===!1?Ne(Ni):Ne(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const le=k.stencilWrite;a.setTest(le),le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Je(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){R!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),R=k)}function ye(k){k!==p1?(oe(t.CULL_FACE),k!==L&&(k===Tm?t.cullFace(t.BACK):k===m1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),L=k}function Ce(k){k!==G&&(z&&t.lineWidth(k),G=k)}function Je(k,Z,j){k?(oe(t.POLYGON_OFFSET_FILL),(q!==Z||D!==j)&&(q=Z,D=j,o.getReversed()&&(Z=-Z),t.polygonOffset(Z,j))):he(t.POLYGON_OFFSET_FILL)}function qe(k){k?oe(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function ot(k){k===void 0&&(k=t.TEXTURE0+W-1),I!==k&&(t.activeTexture(k),I=k)}function O(k,Z,j){j===void 0&&(I===null?j=t.TEXTURE0+W-1:j=I);let le=Q[j];le===void 0&&(le={type:void 0,texture:void 0},Q[j]=le),(le.type!==k||le.texture!==Z)&&(I!==j&&(t.activeTexture(j),I=j),t.bindTexture(k,Z||ce[k]),le.type=k,le.texture=Z)}function St(){const k=Q[I];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{t.compressedTexImage2D(...arguments)}catch(k){ct("WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){ct("WebGLState:",k)}}function M(){try{t.texSubImage2D(...arguments)}catch(k){ct("WebGLState:",k)}}function H(){try{t.texSubImage3D(...arguments)}catch(k){ct("WebGLState:",k)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(k){ct("WebGLState:",k)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(k){ct("WebGLState:",k)}}function ue(){try{t.texStorage2D(...arguments)}catch(k){ct("WebGLState:",k)}}function pe(){try{t.texStorage3D(...arguments)}catch(k){ct("WebGLState:",k)}}function te(){try{t.texImage2D(...arguments)}catch(k){ct("WebGLState:",k)}}function re(){try{t.texImage3D(...arguments)}catch(k){ct("WebGLState:",k)}}function ge(k){return m[k]!==void 0?m[k]:t.getParameter(k)}function Re(k,Z){m[k]!==Z&&(t.pixelStorei(k,Z),m[k]=Z)}function ve(k){Ge.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Ge.copy(k))}function xe(k){De.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Ue(k,Z){let j=d.get(Z);j===void 0&&(j=new WeakMap,d.set(Z,j));let le=j.get(k);le===void 0&&(le=t.getUniformBlockIndex(Z,k.name),j.set(k,le))}function ze(k,Z){const le=d.get(Z).get(k);l.get(Z)!==le&&(t.uniformBlockBinding(Z,le,k.__bindingPointIndex),l.set(Z,le))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},I=null,Q={},c={},p=new WeakMap,v=[],E=null,g=!1,f=null,x=null,S=null,y=null,A=null,b=null,w=null,_=new et(0,0,0),T=0,N=!1,R=null,L=null,G=null,q=null,D=null,Ge.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:he,bindFramebuffer:Be,drawBuffers:Le,useProgram:$e,setBlending:Ne,setMaterial:fe,setFlipSided:me,setCullFace:ye,setLineWidth:Ce,setPolygonOffset:Je,setScissorTest:qe,activeTexture:ot,bindTexture:O,unbindTexture:St,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:te,texImage3D:re,pixelStorei:Re,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:pe,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:ve,viewport:xe,reset:We}}function IA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new He,h=new WeakMap,m=new Set;let c;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,M){return v?new OffscreenCanvas(P,M):ca("canvas")}function g(P,M,H){let X=1;const ee=st(P);if((ee.width>H||ee.height>H)&&(X=H/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(X*ee.width),pe=Math.floor(X*ee.height);c===void 0&&(c=E(ue,pe));const te=M?E(ue,pe):c;return te.width=ue,te.height=pe,te.getContext("2d").drawImage(P,0,0,ue,pe),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+pe+")."),te}else return"data"in P&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function f(P){return P.generateMipmaps}function x(P){t.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,M,H,X,ee,ue=!1){if(P!==null){if(t[P]!==void 0)return t[P];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;X&&(pe=e.get("EXT_texture_norm16"),pe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=M;if(M===t.RED&&(H===t.FLOAT&&(te=t.R32F),H===t.HALF_FLOAT&&(te=t.R16F),H===t.UNSIGNED_BYTE&&(te=t.R8),H===t.UNSIGNED_SHORT&&pe&&(te=pe.R16_EXT),H===t.SHORT&&pe&&(te=pe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.R8UI),H===t.UNSIGNED_SHORT&&(te=t.R16UI),H===t.UNSIGNED_INT&&(te=t.R32UI),H===t.BYTE&&(te=t.R8I),H===t.SHORT&&(te=t.R16I),H===t.INT&&(te=t.R32I)),M===t.RG&&(H===t.FLOAT&&(te=t.RG32F),H===t.HALF_FLOAT&&(te=t.RG16F),H===t.UNSIGNED_BYTE&&(te=t.RG8),H===t.UNSIGNED_SHORT&&pe&&(te=pe.RG16_EXT),H===t.SHORT&&pe&&(te=pe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RG8UI),H===t.UNSIGNED_SHORT&&(te=t.RG16UI),H===t.UNSIGNED_INT&&(te=t.RG32UI),H===t.BYTE&&(te=t.RG8I),H===t.SHORT&&(te=t.RG16I),H===t.INT&&(te=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGB8UI),H===t.UNSIGNED_SHORT&&(te=t.RGB16UI),H===t.UNSIGNED_INT&&(te=t.RGB32UI),H===t.BYTE&&(te=t.RGB8I),H===t.SHORT&&(te=t.RGB16I),H===t.INT&&(te=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),H===t.UNSIGNED_INT&&(te=t.RGBA32UI),H===t.BYTE&&(te=t.RGBA8I),H===t.SHORT&&(te=t.RGBA16I),H===t.INT&&(te=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&pe&&(te=pe.RGB16_EXT),H===t.SHORT&&pe&&(te=pe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),M===t.RGBA){const re=ue?rc:rt.getTransfer(ee);H===t.FLOAT&&(te=t.RGBA32F),H===t.HALF_FLOAT&&(te=t.RGBA16F),H===t.UNSIGNED_BYTE&&(te=re===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&pe&&(te=pe.RGBA16_EXT),H===t.SHORT&&pe&&(te=pe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(P,M){let H;return P?M===null||M===xi||M===la?H=t.DEPTH24_STENCIL8:M===ci?H=t.DEPTH32F_STENCIL8:M===aa&&(H=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xi||M===la?H=t.DEPTH_COMPONENT24:M===ci?H=t.DEPTH_COMPONENT32F:M===aa&&(H=t.DEPTH_COMPONENT16),H}function b(P,M){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Gt&&P.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){const M=P.target;M.removeEventListener("dispose",w),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&m.delete(M)}function _(P){const M=P.target;M.removeEventListener("dispose",_),R(M)}function T(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,X=p.get(H);if(X){const ee=X[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(P),Object.keys(X).length===0&&p.delete(H)}i.remove(P)}function N(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,X=p.get(H);delete X[M.__cacheKey],o.memory.textures--}function R(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let ee=0;ee<M.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)t.deleteFramebuffer(M.__webglFramebuffer[X]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let X=0,ee=H.length;X<ee;X++){const ue=i.get(H[X]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(H[X])}i.remove(P)}let L=0;function G(){L=0}function q(){return L}function D(P){L=P}function W(){const P=L;return P>=r.maxTextures&&je("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function z(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function U(P,M){const H=i.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const X=P.image;if(X===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{he(H,P,M);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function V(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,M);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function I(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){he(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function Q(P,M){const H=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Be(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const ie={[Kd]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Jd]:t.MIRRORED_REPEAT},Ie={[Gt]:t.NEAREST,[O1]:t.NEAREST_MIPMAP_NEAREST,[za]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[uu]:t.LINEAR_MIPMAP_NEAREST,[Lr]:t.LINEAR_MIPMAP_LINEAR},Ge={[B1]:t.NEVER,[W1]:t.ALWAYS,[H1]:t.LESS,[Oh]:t.LEQUAL,[V1]:t.EQUAL,[kh]:t.GEQUAL,[G1]:t.GREATER,[j1]:t.NOTEQUAL};function De(P,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===uu||M.magFilter===za||M.magFilter===Lr||M.minFilter===jt||M.minFilter===uu||M.minFilter===za||M.minFilter===Lr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,ie[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ie[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ie[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Ie[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==za&&M.minFilter!==Lr||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));const X=M.source;let ee=p.get(X);ee===void 0&&(ee={},p.set(X,ee));const ue=z(M);if(ue!==P.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[ue].usedTimes++;const pe=ee[P.__cacheKey];pe!==void 0&&(ee[P.__cacheKey].usedTimes--,pe.usedTimes===0&&N(M)),P.__cacheKey=ue,P.__webglTexture=ee[ue].texture}return H}function ce(P,M,H){return Math.floor(Math.floor(P/H)/M)}function oe(P,M,H,X){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,X,M.data);else{ue.sort((Re,ve)=>Re.start-ve.start);let pe=0;for(let Re=1;Re<ue.length;Re++){const ve=ue[pe],xe=ue[Re],Ue=ve.start+ve.count,ze=ce(xe.start,M.width,4),We=ce(ve.start,M.width,4);xe.start<=Ue+1&&ze===We&&ce(xe.start+xe.count-1,M.width,4)===ze?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++pe,ue[pe]=xe)}ue.length=pe+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Re=0,ve=ue.length;Re<ve;Re++){const xe=ue[Re],Ue=Math.floor(xe.start/4),ze=Math.ceil(xe.count/4),We=Ue%M.width,k=Math.floor(Ue/M.width),Z=ze,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,We,k,Z,j,H,X,M.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function he(P,M,H){let X=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=t.TEXTURE_3D);const ee=K(P,M),ue=M.source;n.bindTexture(X,P.__webglTexture,t.TEXTURE0+H);const pe=i.get(ue);if(ue.version!==pe.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const j=rt.getPrimaries(rt.workingColorSpace),le=M.colorSpace===tr?null:rt.getPrimaries(M.colorSpace),ae=M.colorSpace===tr||j===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let re=g(M.image,!1,r.maxTextureSize);re=St(M,re);const ge=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let ve=y(M.internalFormat,ge,Re,M.normalized,M.colorSpace,M.isVideoTexture);De(X,M);let xe;const Ue=M.mipmaps,ze=M.isVideoTexture!==!0,We=pe.__version===void 0||ee===!0,k=ue.dataReady,Z=b(M,re);if(M.isDepthTexture)ve=A(M.format===Ir,M.type),We&&(ze?n.texStorage2D(t.TEXTURE_2D,1,ve,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ve,re.width,re.height,0,ge,Re,null));else if(M.isDataTexture)if(Ue.length>0){ze&&We&&n.texStorage2D(t.TEXTURE_2D,Z,ve,Ue[0].width,Ue[0].height);for(let j=0,le=Ue.length;j<le;j++)xe=Ue[j],ze?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,j,ve,xe.width,xe.height,0,ge,Re,xe.data);M.generateMipmaps=!1}else ze?(We&&n.texStorage2D(t.TEXTURE_2D,Z,ve,re.width,re.height),k&&oe(M,re,ge,Re)):n.texImage2D(t.TEXTURE_2D,0,ve,re.width,re.height,0,ge,Re,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Z,ve,Ue[0].width,Ue[0].height,re.depth);for(let j=0,le=Ue.length;j<le;j++)if(xe=Ue[j],M.format!==Kn)if(ge!==null)if(ze){if(k)if(M.layerUpdates.size>0){const ae=s0(xe.width,xe.height,M.format,M.type);for(const ne of M.layerUpdates){const Ae=xe.data.subarray(ne*ae/xe.data.BYTES_PER_ELEMENT,(ne+1)*ae/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,ne,xe.width,xe.height,1,ge,Ae)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,re.depth,ge,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,ve,xe.width,xe.height,re.depth,0,xe.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,re.depth,ge,Re,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,ve,xe.width,xe.height,re.depth,0,ge,Re,xe.data)}else{ze&&We&&n.texStorage2D(t.TEXTURE_2D,Z,ve,Ue[0].width,Ue[0].height);for(let j=0,le=Ue.length;j<le;j++)xe=Ue[j],M.format!==Kn?ge!==null?ze?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,ve,xe.width,xe.height,0,xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe.width,xe.height,ge,Re,xe.data):n.texImage2D(t.TEXTURE_2D,j,ve,xe.width,xe.height,0,ge,Re,xe.data)}else if(M.isDataArrayTexture)if(ze){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Z,ve,re.width,re.height,re.depth),k)if(M.layerUpdates.size>0){const j=s0(re.width,re.height,M.format,M.type);for(const le of M.layerUpdates){const ae=re.data.subarray(le*j/re.data.BYTES_PER_ELEMENT,(le+1)*j/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,re.width,re.height,1,ge,Re,ae)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Re,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,ge,Re,re.data);else if(M.isData3DTexture)ze?(We&&n.texStorage3D(t.TEXTURE_3D,Z,ve,re.width,re.height,re.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Re,re.data)):n.texImage3D(t.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,ge,Re,re.data);else if(M.isFramebufferTexture){if(We)if(ze)n.texStorage2D(t.TEXTURE_2D,Z,ve,re.width,re.height);else{let j=re.width,le=re.height;for(let ae=0;ae<Z;ae++)n.texImage2D(t.TEXTURE_2D,ae,ve,j,le,0,ge,Re,null),j>>=1,le>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),re.parentNode!==j){j.appendChild(re),m.add(M),j.onpaint=le=>{const ae=le.changedElements;for(const ne of m)ae.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const ae=t.RGBA,ne=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ae,ne,Ae,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ze&&We){const j=st(Ue[0]);n.texStorage2D(t.TEXTURE_2D,Z,ve,j.width,j.height)}for(let j=0,le=Ue.length;j<le;j++)xe=Ue[j],ze?k&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge,Re,xe):n.texImage2D(t.TEXTURE_2D,j,ve,ge,Re,xe);M.generateMipmaps=!1}else if(ze){if(We){const j=st(re);n.texStorage2D(t.TEXTURE_2D,Z,ve,j.width,j.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Re,re)}else n.texImage2D(t.TEXTURE_2D,0,ve,ge,Re,re);f(M)&&x(X),pe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Be(P,M,H){if(M.image.length!==6)return;const X=K(P,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const ue=i.get(ee);if(ee.version!==ue.__version||X===!0){n.activeTexture(t.TEXTURE0+H);const pe=rt.getPrimaries(rt.workingColorSpace),te=M.colorSpace===tr?null:rt.getPrimaries(M.colorSpace),re=M.colorSpace===tr||pe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!ge&&!Re?ve[ne]=g(M.image[ne],!0,r.maxCubemapSize):ve[ne]=Re?M.image[ne].image:M.image[ne],ve[ne]=St(M,ve[ne]);const xe=ve[0],Ue=s.convert(M.format,M.colorSpace),ze=s.convert(M.type),We=y(M.internalFormat,Ue,ze,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Z=ue.__version===void 0||X===!0,j=ee.dataReady;let le=b(M,xe);De(t.TEXTURE_CUBE_MAP,M);let ae;if(ge){k&&Z&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,We,xe.width,xe.height);for(let ne=0;ne<6;ne++){ae=ve[ne].mipmaps;for(let Ae=0;Ae<ae.length;Ae++){const _e=ae[Ae];M.format!==Kn?Ue!==null?k?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,_e.width,_e.height,Ue,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,We,_e.width,_e.height,0,_e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,_e.width,_e.height,Ue,ze,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,We,_e.width,_e.height,0,Ue,ze,_e.data)}}}else{if(ae=M.mipmaps,k&&Z){ae.length>0&&le++;const ne=st(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,We,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ue,ze,ve[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,ve[ne].width,ve[ne].height,0,Ue,ze,ve[ne].data);for(let Ae=0;Ae<ae.length;Ae++){const tt=ae[Ae].image[ne].image;k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,tt.width,tt.height,Ue,ze,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,We,tt.width,tt.height,0,Ue,ze,tt.data)}}else{k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,ze,ve[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,Ue,ze,ve[ne]);for(let Ae=0;Ae<ae.length;Ae++){const _e=ae[Ae];k?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ue,ze,_e.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,We,Ue,ze,_e.image[ne])}}}f(M)&&x(t.TEXTURE_CUBE_MAP),ue.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Le(P,M,H,X,ee,ue){const pe=s.convert(H.format,H.colorSpace),te=s.convert(H.type),re=y(H.internalFormat,pe,te,H.normalized,H.colorSpace),ge=i.get(M),Re=i.get(H);if(Re.__renderTarget=M,!ge.__hasExternalTextures){const ve=Math.max(1,M.width>>ue),xe=Math.max(1,M.height>>ue);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ue,re,ve,xe,M.depth,0,pe,te,null):n.texImage2D(ee,ue,re,ve,xe,0,pe,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ot(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,Re.__webglTexture,0,qe(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,Re.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const X=M.depthTexture,ee=X&&X.isDepthTexture?X.type:null,ue=A(M.stencilBuffer,ee),pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ot(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(M),ue,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(M),ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,P)}else{const X=M.textures;for(let ee=0;ee<X.length;ee++){const ue=X[ee],pe=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),re=y(ue.internalFormat,pe,te,ue.normalized,ue.colorSpace);ot(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(M),re,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(P,M,H){const X=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),De(t.TEXTURE_CUBE_MAP,M.depthTexture);const ge=s.convert(M.depthTexture.format),Re=s.convert(M.depthTexture.type);let ve;M.depthTexture.format===Oi?ve=t.DEPTH_COMPONENT24:M.depthTexture.format===Ir&&(ve=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ve,M.width,M.height,0,ge,Re,null)}}else U(M.depthTexture,0);const ue=ee.__webglTexture,pe=qe(M),te=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,re=M.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Oi)ot(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,re,te,ue,0);else if(M.depthTexture.format===Ir)ot(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,re,te,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=X}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Oe(M.__webglFramebuffer[X],P,X);else{const X=P.texture.mipmaps;X&&X.length>0?Oe(M.__webglFramebuffer[0],P,0):Oe(M.__webglFramebuffer,P,0)}else if(H){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=t.createRenderbuffer(),$e(M.__webglDepthbuffer[X],P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),$e(M.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,M,H){const X=i.get(P);M!==void 0&&Le(X.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ve(P)}function fe(P){const M=P.texture,H=i.get(P),X=i.get(M);P.addEventListener("dispose",_);const ee=P.textures,ue=P.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=M.version,o.memory.textures++),ue){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let re=0;re<M.mipmaps.length;re++)H.__webglFramebuffer[te][re]=t.createFramebuffer()}else H.__webglFramebuffer[te]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)H.__webglFramebuffer[te]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(pe)for(let te=0,re=ee.length;te<re;te++){const ge=i.get(ee[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&ot(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const re=ee[te];H.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[te]);const ge=s.convert(re.format,re.colorSpace),Re=s.convert(re.type),ve=y(re.internalFormat,ge,Re,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),xe=qe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,H.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),De(t.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Le(H.__webglFramebuffer[te][re],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else Le(H.__webglFramebuffer[te],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(M)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let te=0,re=ee.length;te<re;te++){const ge=ee[te],Re=i.get(ge);let ve=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Re.__webglTexture),De(ve,ge),Le(H.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+te,ve,0),f(ge)&&x(ve)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,X.__webglTexture),De(te,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Le(H.__webglFramebuffer[re],P,M,t.COLOR_ATTACHMENT0,te,re);else Le(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,te,0);f(M)&&x(te),n.unbindTexture()}P.depthBuffer&&Ve(P)}function me(P){const M=P.textures;for(let H=0,X=M.length;H<X;H++){const ee=M[H];if(f(ee)){const ue=S(P),pe=i.get(ee).__webglTexture;n.bindTexture(ue,pe),x(ue),n.unbindTexture()}}}const ye=[],Ce=[];function Je(P){if(P.samples>0){if(ot(P)===!1){const M=P.textures,H=P.width,X=P.height;let ee=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(P),te=M.length>1;if(te)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Re=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,H,X,0,0,H,X,ee,t.NEAREST),l===!0&&(ye.length=0,Ce.length=0,ye.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ye.push(ue),Ce.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ce)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Re=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(P){return Math.min(r.maxSamples,P.samples)}function ot(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=o.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function St(P,M){const H=P.colorSpace,X=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ic&&H!==tr&&(rt.getTransfer(H)===dt?(X!==Kn||ee!==Dn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",H)),M}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=q,this.setTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=I,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function DA(t,e){function n(i,r=tr){let s;const o=rt.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===Lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===av)return t.BYTE;if(i===lv)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===Ph)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Fi)return t.HALF_FLOAT;if(i===dv)return t.ALPHA;if(i===fv)return t.RGB;if(i===Kn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===hv)return t.RED;if(i===Dh)return t.RED_INTEGER;if(i===Vr)return t.RG;if(i===Uh)return t.RG_INTEGER;if(i===Fh)return t.RGBA_INTEGER;if(i===bl||i===Tl||i===wl||i===Al)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===Qd||i===ef||i===tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nf||i===rf||i===sf||i===of||i===af||i===tc||i===lf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nf||i===rf)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===of)return s.COMPRESSED_R11_EAC;if(i===af)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tc)return s.COMPRESSED_RG11_EAC;if(i===lf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===xf||i===vf||i===_f||i===yf||i===Sf||i===Ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===df)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ff)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sf)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mf||i===bf||i===Tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mf)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wf||i===Af||i===nc||i===Cf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===la?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:UA,fragmentShader:FA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends $r{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,d=null,h=null,m=null,c=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new OA,f={},x=n.getContextAttributes();let S=null,y=null;const A=[],b=[],w=new He;let _=null;const T=new Mn;T.viewport=new At;const N=new Mn;N.viewport=new At;const R=[T,N],L=new $E;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=A[K];return ce===void 0&&(ce=new vu,A[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=A[K];return ce===void 0&&(ce=new vu,A[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=A[K];return ce===void 0&&(ce=new vu,A[K]=ce),ce.getHandSpace()};function D(K){const ce=b.indexOf(K.inputSource);if(ce===-1)return;const oe=A[ce];oe!==void 0&&(oe.update(K.inputSource,K.frame,d||o),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",z);for(let K=0;K<A.length;K++){const ce=b[K];ce!==null&&(b[K]=null,A[K].disconnect(ce))}G=null,q=null,g.reset();for(const K in f)delete f[K];e.setRenderTarget(S),p=null,c=null,m=null,r=null,y=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return c!==null?c:p},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",W),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,he=null,Be=null;x.depth&&(Be=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=x.stencil?Ir:Oi,he=x.stencil?la:xi);const Le={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};m=this.getBinding(),c=m.createProjectionLayer(Le),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new gi(c.textureWidth,c.textureHeight,{format:Kn,type:Dn,depthTexture:new $s(c.textureWidth,c.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const oe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),d=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(K){for(let ce=0;ce<K.removed.length;ce++){const oe=K.removed[ce],he=b.indexOf(oe);he>=0&&(b[he]=null,A[he].disconnect(oe))}for(let ce=0;ce<K.added.length;ce++){const oe=K.added[ce];let he=b.indexOf(oe);if(he===-1){for(let Le=0;Le<A.length;Le++)if(Le>=b.length){b.push(oe),he=Le;break}else if(b[Le]===null){b[Le]=oe,he=Le;break}if(he===-1)break}const Be=A[he];Be&&Be.connect(oe)}}const U=new F,V=new F;function I(K,ce,oe){U.setFromMatrixPosition(ce.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const he=U.distanceTo(V),Be=ce.projectionMatrix.elements,Le=oe.projectionMatrix.elements,$e=Be[14]/(Be[10]-1),Oe=Be[14]/(Be[10]+1),Ve=(Be[9]+1)/Be[5],Ne=(Be[9]-1)/Be[5],fe=(Be[8]-1)/Be[0],me=(Le[8]+1)/Le[0],ye=$e*fe,Ce=$e*me,Je=he/(-fe+me),qe=Je*-fe;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Be[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ot=$e+Je,O=Oe+Je,St=ye-qe,st=Ce+(he-qe),P=Ve*Oe/O*ot,M=Ne*Oe/O*ot;K.projectionMatrix.makePerspective(St,st,P,M,ot,O),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Q(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ce=K.near,oe=K.far;g.texture!==null&&(g.depthNear>0&&(ce=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),L.near=N.near=T.near=ce,L.far=N.far=T.far=oe,(G!==L.near||q!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,q=L.far),L.layers.mask=K.layers.mask|6,T.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const he=K.parent,Be=L.cameras;Q(L,he);for(let Le=0;Le<Be.length;Le++)Q(Be[Le],he);Be.length===2?I(L,T,N):L.projectionMatrix.copy(T.projectionMatrix),ie(K,L,he)};function ie(K,ce,oe){oe===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(c===null&&p===null))return l},this.setFoveation=function(K){l=K,c!==null&&(c.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return f[K]};let Ie=null;function Ge(K,ce){if(h=ce.getViewerPose(d||o),v=ce,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let he=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,he=!0);for(let Oe=0;Oe<oe.length;Oe++){const Ve=oe[Oe];let Ne=null;if(p!==null)Ne=p.getViewport(Ve);else{const me=m.getViewSubImage(c,Ve);Ne=me.viewport,Oe===0&&(e.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(y))}let fe=R[Oe];fe===void 0&&(fe=new Mn,fe.layers.enable(Oe),fe.viewport=new At,R[Oe]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Oe===0&&(L.matrix.copy(fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),he===!0&&L.cameras.push(fe)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=i.getBinding();const Oe=m.getDepthInformation(oe[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,r.renderState)}if(Be&&Be.includes("camera-access")&&E){e.state.unbindTexture(),m=i.getBinding();for(let Oe=0;Oe<oe.length;Oe++){const Ve=oe[Oe].camera;if(Ve){let Ne=f[Ve];Ne||(Ne=new Tv,f[Ve]=Ne);const fe=m.getCameraImage(Ve);Ne.sourceTexture=fe}}}}for(let oe=0;oe<A.length;oe++){const he=b[oe],Be=A[oe];he!==null&&Be!==void 0&&Be.update(he,ce,d||o)}Ie&&Ie(K,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const De=new Pv;De.setAnimationLoop(Ge),this.setAnimationLoop=function(K){Ie=K},this.dispose=function(){}}}const zA=new Ct,kv=new Xe;kv.set(-1,0,0,0,1,0,0,0,1);function BA(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Cv(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,S,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),m(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),c(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,S):f.isSpriteMaterial?d(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===hn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===hn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,y=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kv),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,S){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=S*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function m(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const b=A.program;i.uniformBlockBinding(y,b)}function d(y,A){let b=r[y.id];b===void 0&&(g(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",x));const w=A.program;i.updateUBOMapping(y,w);const _=e.render.frame;s[y.id]!==_&&(c(y),s[y.id]=_)}function h(y){const A=m();y.__bindingPointIndex=A;const b=t.createBuffer(),w=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,b),b}function m(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const A=r[y.id],b=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let _=0,T=b.length;_<T;_++){const N=b[_];if(Array.isArray(N))for(let R=0,L=N.length;R<L;R++)p(N[R],_,R,w);else p(N,_,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,A,b,w){if(E(y,A,b,w)===!0){const _=y.__offset,T=y.value;if(Array.isArray(T)){let N=0;for(let R=0;R<T.length;R++){const L=T[R],G=f(L);v(L,y.__data,N),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function v(y,A,b){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,b)}function E(y,A,b,w){const _=y.value,T=A+"_"+b;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:ArrayBuffer.isView(_)?w[T]=_.slice():w[T]=_.clone(),!0;{const N=w[T];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return w[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function g(y){const A=y.uniforms;let b=0;const w=16;for(let T=0,N=A.length;T<N;T++){const R=Array.isArray(A[T])?A[T]:[A[T]];for(let L=0,G=R.length;L<G;L++){const q=R[L],D=Array.isArray(q.value)?q.value:[q.value];for(let W=0,z=D.length;W<z;W++){const U=D[W],V=f(U),I=b%w,Q=I%V.boundary,ie=I+Q;b+=Q,ie!==0&&w-ie<V.storage&&(b+=w-ie),q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=V.storage}}}const _=b%w;return _>0&&(b+=w-_),y.__size=b,y.__cache={},this}function f(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),A}function x(y){const A=y.target;A.removeEventListener("dispose",x);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:d,dispose:S}}const VA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function GA(){return ri===null&&(ri=new mE(VA,16,16,Vr,Fi),ri.name="DFG_LUT",ri.minFilter=jt,ri.magFilter=jt,ri.wrapS=Ci,ri.wrapT=Ci,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class zv{constructor(e={}){const{canvas:n=Y1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:c=!1,outputBufferType:p=Dn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const E=p,g=new Set([Fh,Uh,Dh]),f=new Set([Dn,xi,aa,la,Lh,Ih]),x=new Uint32Array(4),S=new Int32Array(4),y=new F;let A=null,b=null;const w=[],_=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let R=!1,L=null,G=null,q=null,D=null;this._outputColorSpace=En;let W=0,z=0,U=null,V=-1,I=null;const Q=new At,ie=new At;let Ie=null;const Ge=new et(0);let De=0,K=n.width,ce=n.height,oe=1,he=null,Be=null;const Le=new At(0,0,K,ce),$e=new At(0,0,K,ce);let Oe=!1;const Ve=new Ev;let Ne=!1,fe=!1;const me=new Ct,ye=new F,Ce=new At,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ot(){return U===null?oe:1}let O=i;function St(C,B){return n.getContext(C,B)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nh}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",gn,!1),O===null){const B="webgl2";if(O=St(B,C),O===null)throw St(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw ct("WebGLRenderer: "+C.message),C}let st,P,M,H,X,ee,ue,pe,te,re,ge,Re,ve,xe,Ue,ze,We,k,Z,j,le,ae,ne;function Ae(){st=new GT(O),st.init(),le=new DA(O,st),P=new UT(O,st,e,le),M=new LA(O,st),P.reversedDepthBuffer&&c&&M.buffers.depth.setReversed(!0),G=O.createFramebuffer(),q=O.createFramebuffer(),D=O.createFramebuffer(),H=new XT(O),X=new vA,ee=new IA(O,st,M,X,P,le,H),ue=new VT(N),pe=new KE(O),ae=new IT(O,pe),te=new jT(O,pe,H,ae),re=new $T(O,te,pe,ae,H),k=new YT(O,P,ee),Ue=new FT(X),ge=new xA(N,ue,st,P,ae,Ue),Re=new BA(N,X),ve=new yA,xe=new wA(st),We=new LT(N,ue,M,re,v,l),ze=new PA(N,re,P),ne=new HA(O,H,P,M),Z=new DT(O,st,H),j=new WT(O,st,H),H.programs=ge.programs,N.capabilities=P,N.extensions=st,N.properties=X,N.renderLists=ve,N.shadowMap=ze,N.state=M,N.info=H}Ae(),E!==Dn&&(T=new KT(E,n.width,n.height,a,r,s));const _e=new kA(N,O);this.xr=_e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(K,ce,!1))},this.getSize=function(C){return C.set(K,ce)},this.setSize=function(C,B,J=!0){if(_e.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,ce=B,n.width=Math.floor(C*oe),n.height=Math.floor(B*oe),J===!0&&(n.style.width=C+"px",n.style.height=B+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(K*oe,ce*oe).floor()},this.setDrawingBufferSize=function(C,B,J){K=C,ce=B,oe=J,n.width=Math.floor(C*J),n.height=Math.floor(B*J),this.setViewport(0,0,C,B)},this.setEffects=function(C){if(E===Dn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let B=0;B<C.length;B++)if(C[B].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Q)},this.getViewport=function(C){return C.copy(Le)},this.setViewport=function(C,B,J,Y){C.isVector4?Le.set(C.x,C.y,C.z,C.w):Le.set(C,B,J,Y),M.viewport(Q.copy(Le).multiplyScalar(oe).round())},this.getScissor=function(C){return C.copy($e)},this.setScissor=function(C,B,J,Y){C.isVector4?$e.set(C.x,C.y,C.z,C.w):$e.set(C,B,J,Y),M.scissor(ie.copy($e).multiplyScalar(oe).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){M.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){he=C},this.setTransparentSort=function(C){Be=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(C=!0,B=!0,J=!0){let Y=0;if(C){let $=!1;if(U!==null){const Me=U.texture.format;$=g.has(Me)}if($){const Me=U.texture.type,Te=f.has(Me),Ee=We.getClearColor(),Pe=We.getClearAlpha(),Fe=Ee.r,Ke=Ee.g,Qe=Ee.b;Te?(x[0]=Fe,x[1]=Ke,x[2]=Qe,x[3]=Pe,O.clearBufferuiv(O.COLOR,0,x)):(S[0]=Fe,S[1]=Ke,S[2]=Qe,S[3]=Pe,O.clearBufferiv(O.COLOR,0,S))}else Y|=O.COLOR_BUFFER_BIT}B&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",gn,!1),We.dispose(),ve.dispose(),xe.dispose(),X.dispose(),ue.dispose(),re.dispose(),ae.dispose(),ne.dispose(),ge.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Zh),_e.removeEventListener("sessionend",Qh),_r.stop()};function tt(C){C.preventDefault(),Dm("WebGLRenderer: Context Lost."),R=!0}function at(){Dm("WebGLRenderer: Context Restored."),R=!1;const C=H.autoReset,B=ze.enabled,J=ze.autoUpdate,Y=ze.needsUpdate,$=ze.type;Ae(),H.autoReset=C,ze.enabled=B,ze.autoUpdate=J,ze.needsUpdate=Y,ze.type=$}function gn(C){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Rn(C){const B=C.target;B.removeEventListener("dispose",Rn),Bv(B)}function Bv(C){Hv(C),X.remove(C)}function Hv(C){const B=X.get(C).programs;B!==void 0&&(B.forEach(function(J){ge.releaseProgram(J)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,J,Y,$,Me){B===null&&(B=Je);const Te=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ee=jv(C,B,J,Y,$);M.setMaterial(Y,Te);let Pe=J.index,Fe=1;if(Y.wireframe===!0){if(Pe=te.getWireframeAttribute(J),Pe===void 0)return;Fe=2}const Ke=J.drawRange,Qe=J.attributes.position;let ke=Ke.start*Fe,ht=(Ke.start+Ke.count)*Fe;Me!==null&&(ke=Math.max(ke,Me.start*Fe),ht=Math.min(ht,(Me.start+Me.count)*Fe)),Pe!==null?(ke=Math.max(ke,0),ht=Math.min(ht,Pe.count)):Qe!=null&&(ke=Math.max(ke,0),ht=Math.min(ht,Qe.count));const Rt=ht-ke;if(Rt<0||Rt===1/0)return;ae.setup($,Y,Ee,J,Pe);let Tt,pt=Z;if(Pe!==null&&(Tt=pe.get(Pe),pt=j,pt.setIndex(Tt)),$.isMesh)Y.wireframe===!0?(M.setLineWidth(Y.wireframeLinewidth*ot()),pt.setMode(O.LINES)):pt.setMode(O.TRIANGLES);else if($.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),M.setLineWidth(Yt*ot()),$.isLineSegments?pt.setMode(O.LINES):$.isLineLoop?pt.setMode(O.LINE_LOOP):pt.setMode(O.LINE_STRIP)}else $.isPoints?pt.setMode(O.POINTS):$.isSprite&&pt.setMode(O.TRIANGLES);if($.isBatchedMesh)if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Yt=$._multiDrawStarts,be=$._multiDrawCounts,xn=$._multiDrawCount,lt=Pe?pe.get(Pe).bytesPerElement:1,Nn=X.get(Y).currentProgram.getUniforms();for(let ti=0;ti<xn;ti++)Nn.setValue(O,"_gl_DrawID",ti),pt.render(Yt[ti]/lt,be[ti])}else if($.isInstancedMesh)pt.renderInstances(ke,Rt,$.count);else if(J.isInstancedBufferGeometry){const Yt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,Yt);pt.renderInstances(ke,Rt,be)}else pt.render(ke,Rt)};function Jh(C,B,J){C.transparent===!0&&C.side===$n&&C.forceSinglePass===!1?(C.side=hn,C.needsUpdate=!0,_a(C,B,J),C.side=mr,C.needsUpdate=!0,_a(C,B,J),C.side=$n):_a(C,B,J)}this.compile=function(C,B,J=null){J===null&&(J=C),b=xe.get(J),b.init(B),_.push(b),J.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),C!==J&&C.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights();const Y=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Me=$.material;if(Me)if(Array.isArray(Me))for(let Te=0;Te<Me.length;Te++){const Ee=Me[Te];Jh(Ee,J,$),Y.add(Ee)}else Jh(Me,J,$),Y.add(Me)}),b=_.pop(),Y},this.compileAsync=function(C,B,J=null){const Y=this.compile(C,B,J);return new Promise($=>{function Me(){if(Y.forEach(function(Te){X.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){$(C);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Cc=null;function Vv(C){Cc&&Cc(C)}function Zh(){_r.stop()}function Qh(){_r.start()}const _r=new Pv;_r.setAnimationLoop(Vv),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(C){Cc=C,_e.setAnimationLoop(C),C===null?_r.stop():_r.start()},_e.addEventListener("sessionstart",Zh),_e.addEventListener("sessionend",Qh),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(C,B);const J=_e.enabled===!0&&_e.isPresenting===!0,Y=T!==null&&(U===null||J)&&T.begin(N,U);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(B),B=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,B,U),b=xe.get(C,_.length),b.init(B),b.state.textureUnits=ee.getTextureUnits(),_.push(b),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ve.setFromProjectionMatrix(me,ui,B.reversedDepth),fe=this.localClippingEnabled,Ne=Ue.init(this.clippingPlanes,fe),A=ve.get(C,w.length),A.init(),w.push(A),_e.enabled===!0&&_e.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Rc(Te,B,-1/0,N.sortObjects)}Rc(C,B,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(he,Be,B.reversedDepth),qe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,qe&&We.addToRenderList(A,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ne===!0&&Ue.beginShadows();const $=b.state.shadowsArray;if(ze.render($,C,B),Ne===!0&&Ue.endShadows(),(Y&&T.hasRenderPass())===!1){const Te=A.opaque,Ee=A.transmissive;if(b.setupLights(),B.isArrayCamera){const Pe=B.cameras;if(Ee.length>0)for(let Fe=0,Ke=Pe.length;Fe<Ke;Fe++){const Qe=Pe[Fe];tp(Te,Ee,C,Qe)}qe&&We.render(C);for(let Fe=0,Ke=Pe.length;Fe<Ke;Fe++){const Qe=Pe[Fe];ep(A,C,Qe,Qe.viewport)}}else Ee.length>0&&tp(Te,Ee,C,B),qe&&We.render(C),ep(A,C,B)}U!==null&&z===0&&(ee.updateMultisampleRenderTarget(U),ee.updateRenderTargetMipmap(U)),Y&&T.end(N),C.isScene===!0&&C.onAfterRender(N,C,B),ae.resetDefaultState(),V=-1,I=null,_.pop(),_.length>0?(b=_[_.length-1],ee.setTextureUnits(b.state.textureUnits),Ne===!0&&Ue.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,L!==null&&L.renderEnd()};function Rc(C,B,J,Y){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ve.intersectsSprite(C)){Y&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Te=re.update(C),Ee=C.material;Ee.visible&&A.push(C,Te,Ee,J,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ve.intersectsObject(C))){const Te=re.update(C),Ee=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ce.copy(Te.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){const Pe=Te.groups;for(let Fe=0,Ke=Pe.length;Fe<Ke;Fe++){const Qe=Pe[Fe],ke=Ee[Qe.materialIndex];ke&&ke.visible&&A.push(C,Te,ke,J,Ce.z,Qe)}}else Ee.visible&&A.push(C,Te,Ee,J,Ce.z,null)}}const Me=C.children;for(let Te=0,Ee=Me.length;Te<Ee;Te++)Rc(Me[Te],B,J,Y)}function ep(C,B,J,Y){const{opaque:$,transmissive:Me,transparent:Te}=C;b.setupLightsView(J),Ne===!0&&Ue.setGlobalState(N.clippingPlanes,J),Y&&M.viewport(Q.copy(Y)),$.length>0&&va($,B,J),Me.length>0&&va(Me,B,J),Te.length>0&&va(Te,B,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function tp(C,B,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const ke=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new gi(1,1,{generateMipmaps:!0,type:ke?Fi:Dn,minFilter:Lr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Me=b.state.transmissionRenderTarget[Y.id],Te=Y.viewport||Q;Me.setSize(Te.z*N.transmissionResolutionScale,Te.w*N.transmissionResolutionScale);const Ee=N.getRenderTarget(),Pe=N.getActiveCubeFace(),Fe=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(Ge),De=N.getClearAlpha(),De<1&&N.setClearColor(16777215,.5),N.clear(),qe&&We.render(J);const Ke=N.toneMapping;N.toneMapping=mi;const Qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Ne===!0&&Ue.setGlobalState(N.clippingPlanes,Y),va(C,J,Y),ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ht=0,Rt=B.length;ht<Rt;ht++){const Tt=B[ht],{object:pt,geometry:Yt,material:be,group:xn}=Tt;if(be.side===$n&&pt.layers.test(Y.layers)){const lt=be.side;be.side=hn,be.needsUpdate=!0,np(pt,J,Y,Yt,be,xn),be.side=lt,be.needsUpdate=!0,ke=!0}}ke===!0&&(ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me))}N.setRenderTarget(Ee,Pe,Fe),N.setClearColor(Ge,De),Qe!==void 0&&(Y.viewport=Qe),N.toneMapping=Ke}function va(C,B,J){const Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Me=C.length;$<Me;$++){const Te=C[$],{object:Ee,geometry:Pe,group:Fe}=Te;let Ke=Te.material;Ke.allowOverride===!0&&Y!==null&&(Ke=Y),Ee.layers.test(J.layers)&&np(Ee,B,J,Pe,Ke,Fe)}}function np(C,B,J,Y,$,Me){C.onBeforeRender(N,B,J,Y,$,Me),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(N,B,J,Y,C,Me),$.transparent===!0&&$.side===$n&&$.forceSinglePass===!1?($.side=hn,$.needsUpdate=!0,N.renderBufferDirect(J,B,Y,$,C,Me),$.side=mr,$.needsUpdate=!0,N.renderBufferDirect(J,B,Y,$,C,Me),$.side=$n):N.renderBufferDirect(J,B,Y,$,C,Me),C.onAfterRender(N,B,J,Y,$,Me)}function _a(C,B,J){B.isScene!==!0&&(B=Je);const Y=X.get(C),$=b.state.lights,Me=b.state.shadowsArray,Te=$.state.version,Ee=ge.getParameters(C,$.state,Me,B,J,b.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(Ee);let Fe=Y.programs;Y.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;const Ke=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Y.envMap=ue.get(C.envMap||Y.environment,Ke),Y.envMapRotation=Y.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",Rn),Fe=new Map,Y.programs=Fe);let Qe=Fe.get(Pe);if(Qe!==void 0){if(Y.currentProgram===Qe&&Y.lightsStateVersion===Te)return rp(C,Ee),Qe}else Ee.uniforms=ge.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,J,Ee),C.onBeforeCompile(Ee,N),Qe=ge.acquireProgram(Ee,Pe),Fe.set(Pe,Qe),Y.uniforms=Ee.uniforms;const ke=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=Ue.uniform),rp(C,Ee),Y.needsLights=Xv(C),Y.lightsStateVersion=Te,Y.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=Qe,Y.uniformsList=null,Qe}function ip(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Rl.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function rp(C,B){const J=X.get(C);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Gv(C,B){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let J=0,Y=C.length;J<Y;J++){const $=C[J];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function jv(C,B,J,Y,$){B.isScene!==!0&&(B=Je),ee.resetTextureUnits();const Me=B.fog,Te=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Ee=U===null?N.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rt.workingColorSpace,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Fe=ue.get(Y.envMap||Te,Pe),Ke=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Rt=!!J.morphAttributes.color;let Tt=mi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Tt=N.toneMapping);const pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Yt=pt!==void 0?pt.length:0,be=X.get(Y),xn=b.state.lights;if(Ne===!0&&(fe===!0||C!==I)){const gt=C===I&&Y.id===V;Ue.setState(Y,C,gt)}let lt=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==xn.state.version||be.outputColorSpace!==Ee||$.isBatchedMesh&&be.batching===!1||!$.isBatchedMesh&&be.batching===!0||$.isBatchedMesh&&be.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&be.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&be.instancing===!1||!$.isInstancedMesh&&be.instancing===!0||$.isSkinnedMesh&&be.skinning===!1||!$.isSkinnedMesh&&be.skinning===!0||$.isInstancedMesh&&be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&be.instancingMorph===!1&&$.morphTexture!==null||be.envMap!==Fe||Y.fog===!0&&be.fog!==Me||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ue.numPlanes||be.numIntersection!==Ue.numIntersection)||be.vertexAlphas!==Ke||be.vertexTangents!==Qe||be.morphTargets!==ke||be.morphNormals!==ht||be.morphColors!==Rt||be.toneMapping!==Tt||be.morphTargetsCount!==Yt||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,be.__version=Y.version);let Nn=be.currentProgram;lt===!0&&(Nn=_a(Y,B,$),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Nn,be));let ti=!1,Bi=!1,qr=!1;const mt=Nn.getUniforms(),Nt=be.uniforms;if(M.useProgram(Nn.program)&&(ti=!0,Bi=!0,qr=!0),Y.id!==V&&(V=Y.id,Bi=!0),be.needsLights){const gt=Gv(b.state.lightProbeGridArray,$);be.lightProbeGrid!==gt&&(be.lightProbeGrid=gt,Bi=!0)}if(ti||I!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),mt.setValue(O,"projectionMatrix",C.projectionMatrix),mt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Vi=mt.map.cameraPosition;Vi!==void 0&&Vi.setValue(O,ye.setFromMatrixPosition(C.matrixWorld)),P.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),I!==C&&(I=C,Bi=!0,qr=!0)}if(be.needsLights&&(xn.state.directionalShadowMap.length>0&&mt.setValue(O,"directionalShadowMap",xn.state.directionalShadowMap,ee),xn.state.spotShadowMap.length>0&&mt.setValue(O,"spotShadowMap",xn.state.spotShadowMap,ee),xn.state.pointShadowMap.length>0&&mt.setValue(O,"pointShadowMap",xn.state.pointShadowMap,ee)),$.isSkinnedMesh){mt.setOptional(O,$,"bindMatrix"),mt.setOptional(O,$,"bindMatrixInverse");const gt=$.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),mt.setValue(O,"boneTexture",gt.boneTexture,ee))}$.isBatchedMesh&&(mt.setOptional(O,$,"batchingTexture"),mt.setValue(O,"batchingTexture",$._matricesTexture,ee),mt.setOptional(O,$,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",$._indirectTexture,ee),mt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",$._colorsTexture,ee));const Hi=J.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&k.update($,J,Nn),(Bi||be.receiveShadow!==$.receiveShadow)&&(be.receiveShadow=$.receiveShadow,mt.setValue(O,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Nt.envMapIntensity.value=B.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=GA()),Bi){if(mt.setValue(O,"toneMappingExposure",N.toneMappingExposure),be.needsLights&&Wv(Nt,qr),Me&&Y.fog===!0&&Re.refreshFogUniforms(Nt,Me),Re.refreshMaterialUniforms(Nt,Y,oe,ce,b.state.transmissionRenderTarget[C.id]),be.needsLights&&be.lightProbeGrid){const gt=be.lightProbeGrid;Nt.probesSH.value=gt.texture,Nt.probesMin.value.copy(gt.boundingBox.min),Nt.probesMax.value.copy(gt.boundingBox.max),Nt.probesResolution.value.copy(gt.resolution)}Rl.upload(O,ip(be),Nt,ee)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rl.upload(O,ip(be),Nt,ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(O,"center",$.center),mt.setValue(O,"modelViewMatrix",$.modelViewMatrix),mt.setValue(O,"normalMatrix",$.normalMatrix),mt.setValue(O,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const gt=Y.uniformsGroups;for(let Vi=0,Kr=gt.length;Vi<Kr;Vi++){const sp=gt[Vi];ne.update(sp,Nn),ne.bind(sp,Nn)}}return Nn}function Wv(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Xv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,B,J){const Y=X.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(C.texture).__webglTexture=B,X.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,B){const J=X.get(C);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,J=0){U=C,W=B,z=J;let Y=null,$=!1,Me=!1;if(C){const Ee=X.get(C);if(Ee.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,Ee.__webglFramebuffer),Q.copy(C.viewport),ie.copy(C.scissor),Ie=C.scissorTest,M.viewport(Q),M.scissor(ie),M.setScissorTest(Ie),V=-1;return}else if(Ee.__webglFramebuffer===void 0)ee.setupRenderTarget(C);else if(Ee.__hasExternalTextures)ee.rebindTextures(C,X.get(C.texture).__webglTexture,X.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ke=C.depthTexture;if(Ee.__boundDepthTexture!==Ke){if(Ke!==null&&X.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(C)}}const Pe=C.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);const Fe=X.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?Y=Fe[B][J]:Y=Fe[B],$=!0):C.samples>0&&ee.useMultisampledRTT(C)===!1?Y=X.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[J]:Y=Fe,Q.copy(C.viewport),ie.copy(C.scissor),Ie=C.scissorTest}else Q.copy(Le).multiplyScalar(oe).floor(),ie.copy($e).multiplyScalar(oe).floor(),Ie=Oe;if(J!==0&&(Y=G),M.bindFramebuffer(O.FRAMEBUFFER,Y)&&M.drawBuffers(C,Y),M.viewport(Q),M.scissor(ie),M.setScissorTest(Ie),$){const Ee=X.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,J)}else if(Me){const Ee=B;for(let Pe=0;Pe<C.textures.length;Pe++){const Fe=X.get(C.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,Fe.__webglTexture,J,Ee)}}else if(C!==null&&J!==0){const Ee=X.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ee.__webglTexture,J)}V=-1},this.readRenderTargetPixels=function(C,B,J,Y,$,Me,Te,Ee=0){if(!(C&&C.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){M.bindFramebuffer(O.FRAMEBUFFER,Pe);try{const Fe=C.textures[Ee],Ke=Fe.format,Qe=Fe.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee),!P.textureFormatReadable(Ke)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Qe)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Y&&J>=0&&J<=C.height-$&&O.readPixels(B,J,Y,$,le.convert(Ke),le.convert(Qe),Me)}finally{const Fe=U!==null?X.get(U).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,B,J,Y,$,Me,Te,Ee=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=X.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(B>=0&&B<=C.width-Y&&J>=0&&J<=C.height-$){M.bindFramebuffer(O.FRAMEBUFFER,Pe);const Fe=C.textures[Ee],Ke=Fe.format,Qe=Fe.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ee),!P.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(B,J,Y,$,le.convert(Ke),le.convert(Qe),0);const ht=U!==null?X.get(U).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,ht);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await $1(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ke),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.deleteBuffer(ke),O.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,B=null,J=0){const Y=Math.pow(2,-J),$=Math.floor(C.image.width*Y),Me=Math.floor(C.image.height*Y),Te=B!==null?B.x:0,Ee=B!==null?B.y:0;ee.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Te,Ee,$,Me),M.unbindTexture()},this.copyTextureToTexture=function(C,B,J=null,Y=null,$=0,Me=0){let Te,Ee,Pe,Fe,Ke,Qe,ke,ht,Rt;const Tt=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(J!==null)Te=J.max.x-J.min.x,Ee=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,Ke=J.min.y,Qe=J.isBox3?J.min.z:0;else{const Nt=Math.pow(2,-$);Te=Math.floor(Tt.width*Nt),Ee=Math.floor(Tt.height*Nt),C.isDataArrayTexture?Pe=Tt.depth:C.isData3DTexture?Pe=Math.floor(Tt.depth*Nt):Pe=1,Fe=0,Ke=0,Qe=0}Y!==null?(ke=Y.x,ht=Y.y,Rt=Y.z):(ke=0,ht=0,Rt=0);const pt=le.convert(B.format),Yt=le.convert(B.type);let be;B.isData3DTexture?(ee.setTexture3D(B,0),be=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ee.setTexture2DArray(B,0),be=O.TEXTURE_2D_ARRAY):(ee.setTexture2D(B,0),be=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const xn=M.getParameter(O.UNPACK_ROW_LENGTH),lt=M.getParameter(O.UNPACK_IMAGE_HEIGHT),Nn=M.getParameter(O.UNPACK_SKIP_PIXELS),ti=M.getParameter(O.UNPACK_SKIP_ROWS),Bi=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,Tt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);const qr=C.isDataArrayTexture||C.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(C.isDepthTexture){const Nt=X.get(C),Hi=X.get(B),gt=X.get(Nt.__renderTarget),Vi=X.get(Hi.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,gt.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Kr=0;Kr<Pe;Kr++)qr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(C).__webglTexture,$,Qe+Kr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(B).__webglTexture,Me,Rt+Kr)),O.blitFramebuffer(Fe,Ke,Te,Ee,ke,ht,Te,Ee,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||X.has(C)){const Nt=X.get(C),Hi=X.get(B);M.bindFramebuffer(O.READ_FRAMEBUFFER,q),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let gt=0;gt<Pe;gt++)qr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,$,Qe+gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,$),mt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Hi.__webglTexture,Me,Rt+gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Hi.__webglTexture,Me),$!==0?O.blitFramebuffer(Fe,Ke,Te,Ee,ke,ht,Te,Ee,O.COLOR_BUFFER_BIT,O.NEAREST):mt?O.copyTexSubImage3D(be,Me,ke,ht,Rt+gt,Fe,Ke,Te,Ee):O.copyTexSubImage2D(be,Me,ke,ht,Fe,Ke,Te,Ee);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(be,Me,ke,ht,Rt,Te,Ee,Pe,pt,Yt,Tt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(be,Me,ke,ht,Rt,Te,Ee,Pe,pt,Tt.data):O.texSubImage3D(be,Me,ke,ht,Rt,Te,Ee,Pe,pt,Yt,Tt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,ke,ht,Te,Ee,pt,Yt,Tt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,ke,ht,Tt.width,Tt.height,pt,Tt.data):O.texSubImage2D(O.TEXTURE_2D,Me,ke,ht,Te,Ee,pt,Yt,Tt);M.pixelStorei(O.UNPACK_ROW_LENGTH,xn),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Nn),M.pixelStorei(O.UNPACK_SKIP_ROWS,ti),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Bi),Me===0&&B.generateMipmaps&&O.generateMipmap(be),M.unbindTexture()},this.initRenderTarget=function(C){X.get(C).__webglFramebuffer===void 0&&ee.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){W=0,z=0,U=null,M.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}function jA(){const t=se.useRef(null),[e,n]=se.useState("sphere");return se.useEffect(()=>{const i=t.current;if(!i)return;const r=i.clientWidth||400,s=i.clientHeight||300,o=new vv,a=new Mn(45,r/s,.1,1e3);a.position.z=5;const l=new zv({alpha:!0,antialias:!0});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(l.domElement);let d;e==="sphere"?d=new Gh(1.6,2):e==="cube"?d=new ro(2,2,2,4,4,4):d=new jh(1.4,.4,16,50);const h=new ks({color:26289,wireframe:!0,transparent:!0,opacity:.7}),m=new Bn(d,h);o.add(m);const c=new mn,p=300,v=new Float32Array(p*3),E=new Float32Array(p*3),g=[new et(26289),new et(1862100),new et(14821144)];for(let T=0;T<p;T++){const N=Math.random(),R=Math.random(),L=N*2*Math.PI,G=Math.acos(2*R-1),q=1.4+Math.random()*.4;v[T*3]=q*Math.sin(G)*Math.cos(L),v[T*3+1]=q*Math.sin(G)*Math.sin(L),v[T*3+2]=q*Math.cos(G);const D=g[Math.floor(Math.random()*3)];E[T*3]=D.r,E[T*3+1]=D.g,E[T*3+2]=D.b}c.setAttribute("position",new On(v,3)),c.setAttribute("color",new On(E,3));const f=new Mv({size:.04,vertexColors:!0,transparent:!0,opacity:.8}),x=new _E(c,f);o.add(x);let S=0,y=0;const A=T=>{const N=i.getBoundingClientRect();S=((T.clientX-N.left)/r-.5)*2,y=-((T.clientY-N.top)/s-.5)*2};i.addEventListener("mousemove",A);let b;const w=()=>{m.rotation.x+=.005,m.rotation.y+=.008,x.rotation.x-=.003,x.rotation.y-=.005,m.rotation.y+=(S*.5-m.rotation.y)*.05,m.rotation.x+=(-y*.5-m.rotation.x)*.05,l.render(o,a),b=requestAnimationFrame(w)};w();const _=()=>{if(!i)return;const T=i.clientWidth,N=i.clientHeight;a.aspect=T/N,a.updateProjectionMatrix(),l.setSize(T,N)};return window.addEventListener("resize",_),()=>{i.removeEventListener("mousemove",A),window.removeEventListener("resize",_),cancelAnimationFrame(b),i.contains(l.domElement)&&i.removeChild(l.domElement),d.dispose(),h.dispose(),c.dispose(),f.dispose()}},[e]),u.jsxs("div",{className:"relative bg-zinc-950 border border-zinc-800 p-6 flex flex-col items-center justify-between",children:[u.jsxs("div",{className:"w-full flex items-center justify-between pb-4 border-b border-zinc-900",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Mc,{size:16,className:"text-sky-400"}),u.jsx("span",{className:"text-xs font-mono font-bold text-white uppercase",children:"3D TELEMETRY MATRIX /// ORIGIN 3D"})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:()=>n("sphere"),className:`px-2 py-1 text-[10px] font-mono border rounded-none ${e==="sphere"?"border-sky-400 bg-sky-950 text-sky-400":"border-zinc-800 text-zinc-500"}`,children:"SPHERE 3D"}),u.jsx("button",{onClick:()=>n("cube"),className:`px-2 py-1 text-[10px] font-mono border rounded-none ${e==="cube"?"border-red-400 bg-red-950 text-red-400":"border-zinc-800 text-zinc-500"}`,children:"CUBE 3D"}),u.jsx("button",{onClick:()=>n("torus"),className:`px-2 py-1 text-[10px] font-mono border rounded-none ${e==="torus"?"border-blue-400 bg-blue-950 text-blue-400":"border-zinc-800 text-zinc-500"}`,children:"TORUS 3D"})]})]}),u.jsx("div",{ref:t,className:"w-full h-64 my-2 cursor-grab active:cursor-grabbing"}),u.jsxs("div",{className:"w-full pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] font-mono text-zinc-500",children:[u.jsx("span",{children:"INTERACTIVE 3D M-GEOMETRY"}),u.jsx("span",{className:"text-sky-400 font-bold",children:"MOVE CURSOR TO ROTATE"})]})]})}const WA={Activity:AS,ShieldCheck:El,Flame:kS,Layers:BS},R0=["Activity","ShieldCheck","Flame","Layers"],XA=["text-sky-500","text-blue-500","text-red-500","text-emerald-500","text-amber-500","text-purple-500"];function Wu({value:t,onChange:e,multiline:n,className:i=""}){return n?u.jsx("textarea",{value:t,onChange:r=>e(r.target.value),rows:3,className:`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 resize-none ${i}`}):u.jsx("input",{value:t,onChange:r=>e(r.target.value),className:`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 ${i}`})}function YA(){const{milestones:t,setMilestones:e,resetMilestones:n}=eo(),{isAdmin:i}=Wr(),[r,s]=se.useState(!1),[o,a]=se.useState(!1),l=(c,p,v)=>e(E=>E.map(g=>g.id===c?{...g,[p]:v}:g)),d=()=>e(c=>[...c,{id:`m${Date.now()}`,value:"NEW STAT",label:"LABEL HERE",detail:"Describe what this milestone means.",accent:"text-sky-500"}]),h=c=>e(p=>p.filter(v=>v.id!==c)),m=()=>{n(),a(!1),s(!1)};return u.jsx("section",{id:"telemetry",className:"section-padding bg-black border-b border-zinc-900 relative z-10",children:u.jsxs("div",{className:"container-custom",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs",children:"STATS & MILESTONES"})]}),u.jsx("h2",{className:"display-lg text-white",children:"MILESTONES & SPECS."})]}),u.jsx("div",{className:"flex flex-col items-start md:items-end gap-3",children:i&&u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:13})," ADD STAT"]}),o?u.jsxs("span",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-red-400",children:"Reset?"}),u.jsx("button",{onClick:m,className:"px-2 py-1 bg-red-900/50 border border-red-700 text-red-300",children:"YES"}),u.jsx("button",{onClick:()=>a(!1),className:"px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>a(!0),className:"text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13,className:"inline mr-1"}),"RESET"]})]}),u.jsx("button",{onClick:()=>{s(c=>!c),a(!1)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${r?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:r?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT"]})})]})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[u.jsx("div",{className:"lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map((c,p)=>{const v=WA[R0[p%R0.length]];return u.jsxs("div",{className:`spec-cell group relative ${r?"border-zinc-600 ring-1 ring-zinc-700/50":""}`,children:[r&&u.jsx("button",{onClick:()=>h(c.id),className:"absolute top-2 right-2 text-zinc-600 hover:text-red-400 transition-colors z-10",children:u.jsx(pi,{size:14})}),u.jsxs("div",{className:"flex justify-between items-start mb-4",children:[u.jsxs("span",{className:"font-mono text-xs text-zinc-600 font-bold",children:["/// ",String(p+1).padStart(2,"0")]}),r?u.jsx("select",{value:c.accent,onChange:E=>l(c.id,"accent",E.target.value),className:"text-[10px] bg-zinc-900 border border-zinc-700 text-zinc-300 px-1 py-0.5 outline-none",children:XA.map(E=>u.jsx("option",{value:E,children:E.replace("text-","")},E))}):u.jsx(v,{className:`${c.accent} transition-transform group-hover:scale-110`,size:24})]}),u.jsxs("div",{className:"mb-4",children:[r?u.jsx(Wu,{value:c.value,onChange:E=>l(c.id,"value",E),className:"text-xl font-bold mb-1"}):u.jsx("div",{className:"display-sm text-white font-mono group-hover:text-sky-400 transition-colors",children:c.value}),r?u.jsx(Wu,{value:c.label,onChange:E=>l(c.id,"label",E),className:"mt-1 uppercase tracking-widest"}):u.jsx("div",{className:"label-uppercase text-zinc-300 mt-1 text-xs tracking-widest",children:c.label})]}),u.jsx("div",{className:"border-t border-zinc-900 pt-4 mt-2",children:r?u.jsx(Wu,{value:c.detail,onChange:E=>l(c.id,"detail",E),multiline:!0}):u.jsx("p",{className:"body-sm text-zinc-500 text-xs",children:c.detail})})]},c.id)})}),u.jsx("div",{className:"lg:col-span-4",children:u.jsx(jA,{})})]})]})})}const $A=["WEB APPS","FULL-STACK","AI / ML","DEVOPS","OPEN SOURCE","MOBILE","API"],qA=["LIVE PROJECT","HACKATHON","FOUNDATION","IN PROGRESS","ARCHIVED","CONCEPT"],N0={"LIVE PROJECT":"border-sky-500 text-sky-400",HACKATHON:"border-red-500 text-red-400",FOUNDATION:"border-blue-500 text-blue-400","IN PROGRESS":"border-emerald-500 text-emerald-400",ARCHIVED:"border-zinc-500 text-zinc-400",CONCEPT:"border-amber-500 text-amber-400"};function si({value:t,onChange:e,placeholder:n="",multiline:i=!1,className:r=""}){return i?u.jsx("textarea",{value:t,onChange:s=>e(s.target.value),placeholder:n,rows:3,className:`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1.5 outline-none focus:border-sky-500 resize-none ${r}`}):u.jsx("input",{value:t,onChange:s=>e(s.target.value),placeholder:n,className:`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${r}`})}function KA({onSelectProject:t}){const{projects:e,setProjects:n,resetProjects:i}=eo(),{isAdmin:r}=Wr(),[s,o]=se.useState(!1),[a,l]=se.useState(null),[d,h]=se.useState(!1),m=(g,f,x)=>n(S=>S.map(y=>y.id===g?{...y,[f]:x}:y)),c=(g,f,x)=>n(S=>S.map(y=>y.id===g?{...y,specs:{...y.specs,[f]:x}}:y)),p=()=>{const g=`proj_${Date.now()}`;n(f=>[...f,{id:g,name:"NEW PROJECT",category:"WEB APPS",tag:"IN PROGRESS",badgeColor:"border-emerald-500 text-emerald-400",image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",excerpt:"Short project summary visible on the card.",specs:{stack:"Stack here",powerIndex:"STATUS",latency:"Notes",architecture:"Architecture"},description:"Full project description for the modal.",github:"#",demo:"#"}]),l(g)},v=g=>{n(f=>f.filter(x=>x.id!==g)),a===g&&l(null)},E=()=>{i(),h(!1),o(!1),l(null)};return u.jsx("section",{id:"projects",className:"section-padding bg-zinc-950 border-b border-zinc-900",children:u.jsxs("div",{className:"container-custom",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs",children:"PROJECT RANGE /// FEATURED"})]}),u.jsx("h2",{className:"display-lg text-white",children:"FEATURED PROJECTS."})]}),u.jsx("div",{className:"flex flex-col items-start md:items-end gap-3",children:r&&u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[s&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:p,className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:13})," ADD PROJECT"]}),d?u.jsxs("span",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-red-400",children:"Reset?"}),u.jsx("button",{onClick:E,className:"px-2 py-1 bg-red-900/50 border border-red-700 text-red-300",children:"YES"}),u.jsx("button",{onClick:()=>h(!1),className:"px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>h(!0),className:"text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13,className:"inline mr-1"}),"RESET"]})]}),u.jsx("button",{onClick:()=>{o(g=>!g),h(!1),l(null)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${s?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:s?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT"]})})]})})]}),s?u.jsx("div",{className:"space-y-4",children:e.map(g=>{const f=a===g.id;return u.jsxs("div",{className:"border border-zinc-600 bg-black",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 cursor-pointer gap-4",onClick:()=>l(f?null:g.id),children:[u.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[u.jsx("span",{className:`text-[10px] font-mono font-bold px-2 py-0.5 border ${N0[g.tag]||"border-zinc-600 text-zinc-400"}`,children:g.tag}),u.jsx("span",{className:"text-sm font-bold text-white font-mono truncate",children:g.name}),u.jsx("span",{className:"text-[10px] text-zinc-500 font-mono hidden sm:block",children:g.category})]}),u.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[u.jsx("button",{onClick:x=>{x.stopPropagation(),v(g.id)},className:"text-zinc-600 hover:text-red-400 transition-colors p-1",children:u.jsx(pi,{size:14})}),f?u.jsx(IS,{size:16,className:"text-zinc-400"}):u.jsx(PS,{size:16,className:"text-zinc-400"})]})]}),f&&u.jsxs("div",{className:"border-t border-zinc-800 p-5 space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"PROJECT NAME"}),u.jsx(si,{value:g.name,onChange:x=>m(g.id,"name",x),placeholder:"PROJECT NAME"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"CATEGORY"}),u.jsx("select",{value:g.category,onChange:x=>m(g.id,"category",x.target.value),className:"w-full text-xs font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1.5 outline-none",children:$A.map(x=>u.jsx("option",{value:x,children:x},x))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"STATUS TAG"}),u.jsx("select",{value:g.tag,onChange:x=>{m(g.id,"tag",x.target.value),m(g.id,"badgeColor",N0[x.target.value]||"border-zinc-500 text-zinc-400")},className:"w-full text-xs font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1.5 outline-none",children:qA.map(x=>u.jsx("option",{value:x,children:x},x))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"IMAGE URL"}),u.jsx(si,{value:g.image,onChange:x=>m(g.id,"image",x),placeholder:"https://..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"GITHUB URL"}),u.jsx(si,{value:g.github,onChange:x=>m(g.id,"github",x),placeholder:"https://github.com/..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"DEMO URL"}),u.jsx(si,{value:g.demo,onChange:x=>m(g.id,"demo",x),placeholder:"https://..."})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"CARD EXCERPT"}),u.jsx(si,{value:g.excerpt,onChange:x=>m(g.id,"excerpt",x),multiline:!0,placeholder:"Short summary shown on card..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"FULL DESCRIPTION (shown in modal)"}),u.jsx(si,{value:g.description,onChange:x=>m(g.id,"description",x),multiline:!0,placeholder:"Full project description..."})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-2 border-t border-zinc-800",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"STACK"}),u.jsx(si,{value:g.specs.stack,onChange:x=>c(g.id,"stack",x),placeholder:"React / Vite / ..."})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"STATUS"}),u.jsx(si,{value:g.specs.powerIndex,onChange:x=>c(g.id,"powerIndex",x),placeholder:"LIVE DEPLOY"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"NOTES"}),u.jsx(si,{value:g.specs.latency,onChange:x=>c(g.id,"latency",x),placeholder:"Vite HMR"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 block mb-1",children:"ARCHITECTURE"}),u.jsx(si,{value:g.specs.architecture,onChange:x=>c(g.id,"architecture",x),placeholder:"Component Architecture"})]})]})]})]},g.id)})}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:e.map(g=>u.jsxs("div",{className:"model-card group flex flex-col justify-between cursor-pointer",onClick:()=>t(g),children:[u.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-zinc-900",children:[u.jsx("img",{src:g.image,alt:g.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75 contrast-110"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"}),u.jsx("div",{className:`absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 border bg-black/80 ${g.badgeColor}`,children:g.category}),u.jsx("div",{className:"absolute bottom-4 right-4 text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-1 border border-zinc-800",children:g.tag})]}),u.jsxs("div",{className:"p-6 flex-1 flex flex-col gap-4 bg-black border-x border-b border-zinc-800",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"title-lg font-bold uppercase text-white mb-2 group-hover:text-sky-400 transition-colors tracking-tight",children:g.name}),u.jsx("p",{className:"body-sm text-zinc-400 font-light line-clamp-2",children:g.excerpt})]}),u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono border-t border-zinc-900 pt-4 mt-auto",children:[u.jsxs("div",{className:"flex gap-3",children:[g.github!=="#"&&u.jsxs("a",{href:g.github,target:"_blank",rel:"noopener noreferrer",onClick:f=>f.stopPropagation(),className:"flex items-center gap-1 text-zinc-400 hover:text-white transition-colors",children:[u.jsx(Ch,{size:14})," CODE"]}),g.demo!=="#"&&u.jsxs("a",{href:g.demo,target:"_blank",rel:"noopener noreferrer",onClick:f=>f.stopPropagation(),className:"flex items-center gap-1 text-zinc-400 hover:text-white transition-colors",children:[u.jsx(Kx,{size:14})," DEMO"]})]}),u.jsx("span",{className:"text-zinc-600",children:"VIEW DETAILS →"})]})]})]},g.id))})]})})}function JA({project:t,onClose:e}){return t?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto",children:u.jsxs("div",{className:"relative w-full max-w-4xl bg-zinc-950 border border-zinc-700 text-white rounded-none p-6 md:p-8 my-8 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"m-stripe-vertical h-6"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-sky-400",children:"PROJECT DETAILS"}),u.jsx("h2",{className:"display-sm text-white tracking-tight",children:t.name})]})]}),u.jsx("button",{onClick:e,className:"button-icon shrink-0 hover:bg-zinc-800",children:u.jsx(no,{size:20})})]}),u.jsxs("div",{className:"relative aspect-[21/9] overflow-hidden mb-8 border border-zinc-800",children:[u.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover filter brightness-90 contrast-110"}),u.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/90 border border-zinc-800 px-4 py-1.5 text-xs font-mono font-bold text-white",children:["TAG /// ",t.tag]})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[u.jsxs("div",{className:"spec-cell p-4",children:[u.jsx("div",{className:"text-[10px] font-mono text-zinc-500 font-bold uppercase",children:"STACK"}),u.jsx("div",{className:"text-sm font-bold text-white mt-1 truncate",children:t.specs.stack})]}),u.jsxs("div",{className:"spec-cell p-4",children:[u.jsx("div",{className:"text-[10px] font-mono text-zinc-500 font-bold uppercase",children:"STATUS"}),u.jsx("div",{className:"text-sm font-bold text-red-400 mt-1 truncate",children:t.specs.powerIndex})]}),u.jsxs("div",{className:"spec-cell p-4",children:[u.jsx("div",{className:"text-[10px] font-mono text-zinc-500 font-bold uppercase",children:"NOTES"}),u.jsx("div",{className:"text-sm font-bold text-sky-400 mt-1 truncate",children:t.specs.latency})]}),u.jsxs("div",{className:"spec-cell p-4",children:[u.jsx("div",{className:"text-[10px] font-mono text-zinc-500 font-bold uppercase",children:"ARCHITECTURE"}),u.jsx("div",{className:"text-sm font-bold text-emerald-400 mt-1 truncate",children:t.specs.architecture})]})]}),u.jsxs("div",{className:"mb-8 border-t border-zinc-900 pt-6",children:[u.jsx("h3",{className:"title-md uppercase font-bold mb-3 text-white",children:"TECHNICAL OVERVIEW"}),u.jsx("p",{className:"body-md text-zinc-300 font-light leading-relaxed mb-6",children:t.description}),u.jsx("h4",{className:"label-uppercase text-xs text-zinc-400 mb-3",children:"KEY HIGHLIGHTS"}),u.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300",children:[u.jsxs("li",{className:"flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800",children:[u.jsx(As,{size:16,className:"text-sky-400 shrink-0"}),u.jsx("span",{children:"Zero-latency state mutations and instant render updates."})]}),u.jsxs("li",{className:"flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800",children:[u.jsx(As,{size:16,className:"text-sky-400 shrink-0"}),u.jsx("span",{children:"Tested unit coverage with automated regression verification."})]}),u.jsxs("li",{className:"flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800",children:[u.jsx(As,{size:16,className:"text-sky-400 shrink-0"}),u.jsx("span",{children:"Responsive breakpoint layout adapted for mobile, tablet & desktop."})]}),u.jsxs("li",{className:"flex items-center gap-2 bg-zinc-900/60 p-3 border border-zinc-800",children:[u.jsx(As,{size:16,className:"text-sky-400 shrink-0"}),u.jsx("span",{children:"Production-ready deployment pipeline with CI/CD triggers."})]})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6",children:[u.jsxs("div",{className:"flex gap-4",children:[t.demo!=="#"&&u.jsxs("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"button-primary",children:[u.jsx("span",{children:"LAUNCH DEMO"}),u.jsx(Kx,{size:16})]}),t.github!=="#"&&u.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"button-primary-outline",children:[u.jsx("span",{children:"VIEW SOURCE CODE"}),u.jsx(Ch,{size:16})]})]}),u.jsx("button",{onClick:e,className:"text-xs font-bold tracking-widest text-zinc-400 hover:text-white uppercase",children:"[ CLOSE ]"})]})]})}):null}function bo({value:t,onChange:e,placeholder:n="",className:i=""}){return u.jsx("input",{value:t,onChange:r=>e(r.target.value),placeholder:n,className:`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${i}`})}function ZA({onOpenContact:t}){var U,V;const{configurator:e,setConfigurator:n,resetConfigurator:i}=eo(),{isAdmin:r}=Wr(),[s,o]=se.useState(((U=e.platforms[0])==null?void 0:U.id)||""),[a,l]=se.useState(((V=e.engines[0])==null?void 0:V.id)||""),[d,h]=se.useState(e.packages.slice(0,2).map(I=>I.id)),[m,c]=se.useState(!1),[p,v]=se.useState(!1),[E,g]=se.useState(!1),{platforms:f,engines:x,packages:S}=e,y=I=>h(Q=>Q.includes(I)?Q.filter(ie=>ie!==I):[...Q,I]),A=(I,Q,ie,Ie)=>n(Ge=>({...Ge,[I]:Ge[I].map(De=>De.id===Q?{...De,[ie]:ie==="pts"?Number(Ie):Ie}:De)})),b=(I,Q)=>n(ie=>({...ie,[I]:ie[I].filter(Ie=>Ie.id!==Q)})),w=()=>n(I=>({...I,platforms:[...I.platforms,{id:`plt_${Date.now()}`,name:"NEW PLATFORM",desc:"Description here",pts:150}]})),_=()=>n(I=>({...I,engines:[...I.engines,{id:`eng_${Date.now()}`,name:"NEW FRAMEWORK",pts:150}]})),T=()=>n(I=>({...I,packages:[...I.packages,{id:`pkg_${Date.now()}`,name:"NEW ADD-ON",pts:30,desc:"What this adds"}]})),N=()=>{i(),g(!1),v(!1)},R=f.find(I=>I.id===s)||f[0],L=x.find(I=>I.id===a)||x[0],G=d.reduce((I,Q)=>{const ie=S.find(Ie=>Ie.id===Q);return I+(ie?ie.pts:0)},0),q=((R==null?void 0:R.pts)||0)+((L==null?void 0:L.pts)||0)+G,D=(98.5+d.length*.3).toFixed(1),W=`RIDHAM /// STACK SPECIFICATION:
------------------------------------------
TARGET: ${R==null?void 0:R.name}
FRAMEWORK: ${L==null?void 0:L.name}
ADD-ONS: ${d.map(I=>{var Q;return(Q=S.find(ie=>ie.id===I))==null?void 0:Q.name}).filter(Boolean).join(", ")}
COMPLEXITY SCORE: ${q} pts
COMPATIBILITY: ${D}%
ESTIMATED BUILD: 2-3 WEEKS`,z=()=>{navigator.clipboard.writeText(W),c(!0),setTimeout(()=>c(!1),2e3)};return u.jsx("section",{id:"configurator",className:"section-padding bg-zinc-950 border-b border-zinc-900",children:u.jsxs("div",{className:"container-custom",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-sky-400 text-xs",children:"STACK BUILDER"})]}),u.jsx("h2",{className:"display-lg text-white",children:"STACK CONFIGURATOR."})]}),u.jsx("div",{className:"flex flex-col items-start md:items-end gap-3",children:r&&u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[p&&u.jsx(u.Fragment,{children:E?u.jsxs("span",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-red-400",children:"Reset?"}),u.jsx("button",{onClick:N,className:"px-2 py-1 bg-red-900/50 border border-red-700 text-red-300",children:"YES"}),u.jsx("button",{onClick:()=>g(!1),className:"px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>g(!0),className:"text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13,className:"inline mr-1"}),"RESET"]})}),u.jsx("button",{onClick:()=>{v(I=>!I),g(!1)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${p?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:p?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK OPTIONS"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT OPTIONS"]})})]})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[u.jsxs("div",{className:"lg:col-span-8 space-y-10",children:[u.jsxs("div",{className:"bg-black border border-zinc-800 p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-zinc-900",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-zinc-500 uppercase",children:"STEP 01 /// TARGET PLATFORM"}),u.jsxs("div",{className:"flex items-center gap-2",children:[p&&u.jsxs("button",{onClick:w,className:"flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40",children:[u.jsx(hi,{size:11}),"ADD"]}),u.jsx($S,{size:16,className:"text-sky-400"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:f.map(I=>p?u.jsxs("div",{className:"border border-zinc-700 p-3 space-y-2 relative",children:[u.jsx("button",{onClick:()=>b("platforms",I.id),className:"absolute top-2 right-2 text-zinc-600 hover:text-red-400",children:u.jsx(pi,{size:12})}),u.jsx(bo,{value:I.name,onChange:Q=>A("platforms",I.id,"name",Q),placeholder:"Platform name",className:"font-bold"}),u.jsx(bo,{value:I.desc,onChange:Q=>A("platforms",I.id,"desc",Q),placeholder:"Description"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-zinc-500",children:"PTS:"}),u.jsx("input",{type:"number",value:I.pts,onChange:Q=>A("platforms",I.id,"pts",Q.target.value),className:"w-16 bg-zinc-900 border border-zinc-700 text-sky-400 text-xs font-mono px-2 py-1 outline-none"})]})]},I.id):u.jsxs("button",{onClick:()=>o(I.id),className:`w-full p-5 text-left rounded-none transition-all flex flex-col justify-between border cursor-pointer ${s===I.id?"border-white bg-zinc-900 text-white shadow-lg":"border-zinc-800 bg-black text-zinc-400 hover:border-zinc-600"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"text-xs font-bold font-mono text-sky-400 mb-1",children:[I.pts," PTS"]}),u.jsx("div",{className:"text-sm font-bold text-white mb-2",children:I.name}),u.jsx("div",{className:"text-xs font-light text-zinc-400",children:I.desc})]}),s===I.id&&u.jsx("div",{className:"mt-4 pt-3 border-t border-zinc-800 text-[10px] font-bold tracking-widest text-sky-400",children:"SELECTED ///"})]},I.id))})]}),u.jsxs("div",{className:"bg-black border border-zinc-800 p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-zinc-900",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-zinc-500 uppercase",children:"STEP 02 /// CORE FRAMEWORK"}),u.jsxs("div",{className:"flex items-center gap-2",children:[p&&u.jsxs("button",{onClick:_,className:"flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40",children:[u.jsx(hi,{size:11}),"ADD"]}),u.jsx(Mc,{size:16,className:"text-blue-400"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:x.map(I=>p?u.jsxs("div",{className:"border border-zinc-700 p-3 space-y-2 relative",children:[u.jsx("button",{onClick:()=>b("engines",I.id),className:"absolute top-2 right-2 text-zinc-600 hover:text-red-400",children:u.jsx(pi,{size:12})}),u.jsx(bo,{value:I.name,onChange:Q=>A("engines",I.id,"name",Q),placeholder:"Framework name",className:"font-bold"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-zinc-500",children:"PTS:"}),u.jsx("input",{type:"number",value:I.pts,onChange:Q=>A("engines",I.id,"pts",Q.target.value),className:"w-16 bg-zinc-900 border border-zinc-700 text-red-400 text-xs font-mono px-2 py-1 outline-none"})]})]},I.id):u.jsxs("button",{onClick:()=>l(I.id),className:`p-4 text-left border rounded-none transition-all flex items-center justify-between ${a===I.id?"border-white bg-zinc-900 text-white":"border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"text-xs font-bold font-mono text-red-400",children:[I.pts," pts"]}),u.jsx("div",{className:"text-sm font-bold text-white mt-1",children:I.name})]}),a===I.id&&u.jsx("div",{className:"w-2 h-2 bg-red-500"})]},I.id))})]}),u.jsxs("div",{className:"bg-black border border-zinc-800 p-6",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6 pb-4 border-b border-zinc-900",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-zinc-500 uppercase",children:"STEP 03 /// ADD-ONS"}),u.jsxs("div",{className:"flex items-center gap-2",children:[p&&u.jsxs("button",{onClick:T,className:"flex items-center gap-1 text-xs font-mono text-emerald-400 border border-emerald-700 px-2 py-1 hover:bg-emerald-950/40",children:[u.jsx(hi,{size:11}),"ADD"]}),u.jsx(Rh,{size:16,className:"text-red-400"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:S.map(I=>{const Q=d.includes(I.id);return p?u.jsxs("div",{className:"border border-zinc-700 p-3 space-y-2 relative",children:[u.jsx("button",{onClick:()=>b("packages",I.id),className:"absolute top-2 right-2 text-zinc-600 hover:text-red-400",children:u.jsx(pi,{size:12})}),u.jsx(bo,{value:I.name,onChange:ie=>A("packages",I.id,"name",ie),placeholder:"Add-on name",className:"font-bold"}),u.jsx(bo,{value:I.desc,onChange:ie=>A("packages",I.id,"desc",ie),placeholder:"Description"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[10px] font-mono text-zinc-500",children:"PTS:"}),u.jsx("input",{type:"number",value:I.pts,onChange:ie=>A("packages",I.id,"pts",ie.target.value),className:"w-16 bg-zinc-900 border border-zinc-700 text-sky-400 text-xs font-mono px-2 py-1 outline-none"})]})]},I.id):u.jsxs("button",{onClick:()=>y(I.id),className:`p-4 text-left border rounded-none transition-all ${Q?"border-sky-500 bg-zinc-900 text-white":"border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("span",{className:"text-xs font-mono font-bold text-sky-400",children:["+",I.pts," pts"]}),u.jsx("span",{className:`text-xs font-bold border px-2 py-0.5 ${Q?"border-sky-500 text-sky-400 bg-sky-950/40":"border-zinc-800 text-zinc-600"}`,children:Q?"ACTIVE":"ADD"})]}),u.jsx("div",{className:"text-sm font-bold text-white mb-1",children:I.name}),u.jsx("div",{className:"text-xs text-zinc-500 font-light",children:I.desc})]},I.id)})})]})]}),u.jsx("div",{className:"lg:col-span-4",children:u.jsxs("div",{className:"bg-black border border-zinc-700 p-6 sticky top-24",children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-zinc-800 mb-6",children:[u.jsx("span",{className:"text-xs font-mono font-bold text-white",children:"LIVE STACK SUMMARY"}),u.jsxs("div",{className:"flex gap-1",children:[u.jsx("div",{className:"w-2 h-2 bg-sky-500"}),u.jsx("div",{className:"w-2 h-2 bg-blue-500"}),u.jsx("div",{className:"w-2 h-2 bg-red-500"})]})]}),u.jsxs("div",{className:"bg-zinc-950 border border-zinc-800 p-6 text-center mb-6",children:[u.jsx("div",{className:"text-xs font-mono font-bold text-zinc-500 mb-1",children:"COMPLEXITY SCORE"}),u.jsxs("div",{className:"display-xl font-mono text-white tracking-tighter",children:[q," ",u.jsx("span",{className:"text-lg text-red-500 font-bold",children:"pts"})]}),u.jsx("div",{className:"text-[11px] font-mono text-zinc-400 mt-2",children:"FULL-STACK SCOPE INDEX"})]}),u.jsxs("div",{className:"space-y-4 mb-8",children:[u.jsxs("div",{className:"flex justify-between p-3 bg-zinc-950 border border-zinc-900 text-xs",children:[u.jsx("span",{className:"text-zinc-400 font-mono",children:"STACK COMPATIBILITY"}),u.jsxs("span",{className:"font-bold text-emerald-400 font-mono",children:[D,"%"]})]}),u.jsxs("div",{className:"flex justify-between p-3 bg-zinc-950 border border-zinc-900 text-xs",children:[u.jsx("span",{className:"text-zinc-400 font-mono",children:"ESTIMATED BUILD TIME"}),u.jsx("span",{className:"font-bold text-sky-400 font-mono",children:"2-3 WEEKS"})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{onClick:t,className:"button-primary w-full justify-center",children:u.jsx("span",{children:"GET IN TOUCH ///"})}),u.jsx("button",{onClick:z,className:"button-primary-outline w-full justify-center text-xs",children:m?u.jsxs(u.Fragment,{children:[u.jsx(qx,{size:14,className:"text-emerald-400"}),u.jsx("span",{children:"COPIED!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(FS,{size:14}),u.jsx("span",{children:"COPY SPEC"})]})})]})]})})]})]})})}const QA={ACTIVE:"bg-sky-900/50 text-sky-400 border-sky-700",LEARNING:"bg-blue-900/50 text-blue-400 border-blue-700",PRIORITY:"bg-red-900/50 text-red-400 border-red-700"},eC=["ACTIVE","LEARNING","PRIORITY"];function tC(t){switch(t){case"Terminal":return qS;case"Zap":return Rh;case"Cloud":return US;case"Database":return OS;default:return Mc}}function nC(){const{categories:t,setCategories:e,resetSkills:n}=Ah(),{isAdmin:i}=Wr(),[r,s]=se.useState(!1),[o,a]=se.useState({}),[l,d]=se.useState({}),[h,m]=se.useState(!1),c=(y,A,b)=>{e(w=>w.map(_=>_.id!==y?_:{..._,skills:_.skills.map((T,N)=>N===A?{...T,level:Number(b)}:T)}))},p=(y,A)=>{e(b=>b.map(w=>w.id!==y?w:{...w,skills:w.skills.filter((_,T)=>T!==A)}))},v=y=>{const A=(o[y]||"").trim();A&&(e(b=>b.map(w=>w.id!==y?w:{...w,skills:[...w.skills,{name:A,level:0}]})),a(b=>({...b,[y]:""})))},E=(y,A)=>{e(b=>b.map(w=>w.id!==y?w:{...w,badge:A}))},g=y=>{const A=(l[y]||"").trim();A&&e(b=>b.map(w=>w.id!==y?w:{...w,title:A.toUpperCase()})),d(b=>{const w={...b};return delete w[y],w})},f=()=>{n(),m(!1),s(!1)},x=()=>{const y=`cat_${Date.now()}`;e(A=>[...A,{id:y,title:"NEW CATEGORY",icon:"Cpu",accent:"border-zinc-500 text-zinc-400",badge:"LEARNING",skills:[]}])},S=y=>{e(A=>A.filter(b=>b.id!==y))};return u.jsx("section",{id:"powertrain",className:"section-padding bg-black border-b border-zinc-900",children:u.jsxs("div",{className:"container-custom",children:[u.jsx("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs",children:"SKILLS MATRIX"})]}),u.jsx("h2",{className:"display-lg text-white",children:"TECH STACK & SKILLS."})]})}),i&&u.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-8 p-4 border border-zinc-800 bg-zinc-950",children:[u.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[u.jsx("div",{className:"w-2 h-2 rounded-full bg-sky-500 animate-pulse"}),u.jsx("span",{className:"text-xs font-mono text-zinc-400",children:r?"EDIT MODE — adjust sliders, add or remove skills.":"LOCKED — click Edit to customise your skills."})]}),u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:x,className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:13})," ADD CATEGORY"]}),h?u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs font-mono text-red-400",children:"Confirm reset?"}),u.jsx("button",{onClick:f,className:"text-xs font-mono px-2 py-1 bg-red-900/50 border border-red-700 text-red-300 hover:bg-red-900",children:"YES"}),u.jsx("button",{onClick:()=>m(!1),className:"text-xs font-mono px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13})," RESET ALL"]})]}),u.jsx("button",{onClick:()=>{s(y=>!y),m(!1)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${r?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:r?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK SKILLS"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT SKILLS"]})})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map(y=>{const A=tC(y.icon),b=l[y.id]!==void 0;return u.jsxs("div",{className:`bg-zinc-950 border p-6 md:p-8 rounded-none transition-all ${r?"border-zinc-600":"border-zinc-800"}`,children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-zinc-800 mb-6 gap-3 flex-wrap",children:[u.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[u.jsx(A,{size:20,className:y.accent.split(" ")[1]}),r&&b?u.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[u.jsx("input",{autoFocus:!0,value:l[y.id],onChange:w=>d(_=>({..._,[y.id]:w.target.value})),onKeyDown:w=>{w.key==="Enter"&&g(y.id),w.key==="Escape"&&d(_=>{const T={..._};return delete T[y.id],T})},className:"flex-1 bg-zinc-900 border border-zinc-600 text-white text-xs font-mono font-bold px-2 py-1 uppercase outline-none focus:border-sky-500",placeholder:"CATEGORY TITLE"}),u.jsx("button",{onClick:()=>g(y.id),className:"text-emerald-400 hover:text-emerald-300",children:u.jsx(qx,{size:14})}),u.jsx("button",{onClick:()=>d(w=>{const _={...w};return delete _[y.id],_}),className:"text-zinc-500 hover:text-zinc-300",children:u.jsx(no,{size:14})})]}):u.jsxs("h3",{className:`text-xs font-bold uppercase tracking-wider text-white truncate ${r?"cursor-pointer hover:text-sky-400 transition-colors":""}`,onClick:()=>r&&d(w=>({...w,[y.id]:y.title})),title:r?"Click to rename":void 0,children:[y.title,r&&u.jsx(WS,{size:11,className:"inline ml-1.5 text-zinc-500"})]})]}),u.jsx("div",{className:"flex items-center gap-2 shrink-0",children:r?u.jsxs(u.Fragment,{children:[u.jsx("select",{value:y.badge,onChange:w=>E(y.id,w.target.value),className:"text-[10px] font-mono font-bold bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none",children:eC.map(w=>u.jsx("option",{value:w,children:w},w))}),u.jsx("button",{onClick:()=>S(y.id),className:"text-zinc-600 hover:text-red-400 transition-colors p-1",title:"Delete category",children:u.jsx(pi,{size:14})})]}):u.jsx("span",{className:`text-[10px] font-mono font-bold px-2.5 py-1 border ${QA[y.badge]||"bg-zinc-900 text-zinc-400 border-zinc-800"}`,children:y.badge})})]}),u.jsxs("div",{className:"space-y-5",children:[y.skills.map((w,_)=>u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center text-xs font-mono mb-2 gap-2",children:[u.jsx("span",{className:"text-zinc-200 font-bold truncate",children:w.name}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[u.jsxs("span",{className:"text-zinc-400 w-8 text-right",children:[w.level,"%"]}),r&&u.jsx("button",{onClick:()=>p(y.id,_),className:"text-zinc-600 hover:text-red-400 transition-colors",children:u.jsx(pi,{size:12})})]})]}),u.jsxs("div",{className:"h-1.5 w-full bg-zinc-900 overflow-hidden relative mb-1",children:[u.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${w.level}%`,background:w.level===0?"transparent":"linear-gradient(90deg, #0066b1, #1c69d4, #e22718)"}}),w.level===0&&u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"text-[9px] font-mono text-zinc-600 pl-1",children:"NOT STARTED"})})]}),r&&u.jsx("input",{type:"range",min:0,max:100,step:1,value:w.level,onChange:T=>c(y.id,_,T.target.value),className:"w-full h-1 accent-sky-500 cursor-pointer mt-1"})]},_)),r&&u.jsxs("div",{className:"flex gap-2 pt-3 border-t border-zinc-800/60",children:[u.jsx("input",{type:"text",value:o[y.id]||"",onChange:w=>a(_=>({..._,[y.id]:w.target.value})),onKeyDown:w=>w.key==="Enter"&&v(y.id),placeholder:"Add a skill...",className:"flex-1 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-3 py-2 outline-none focus:border-sky-500 placeholder:text-zinc-600"}),u.jsxs("button",{onClick:()=>v(y.id),disabled:!(o[y.id]||"").trim(),className:"flex items-center gap-1 text-xs font-mono font-bold px-3 py-2 bg-sky-900/40 border border-sky-700 text-sky-400 hover:bg-sky-900/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:[u.jsx(hi,{size:13})," ADD"]})]})]})]},y.id)})}),!r&&u.jsxs("div",{className:"mt-8 pt-6 border-t border-zinc-900",children:[u.jsx("div",{className:"flex items-center gap-2 mb-4",children:u.jsx("span",{className:"text-xs font-mono text-zinc-500 tracking-widest uppercase",children:"Currently Studying"})}),u.jsx("div",{className:"flex flex-wrap gap-3",children:t.flatMap(y=>y.skills).map(y=>u.jsx("span",{className:"text-[11px] font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5",children:y.name},y.name))})]})]})})}const iC=["ACTIVE","PRIORITY","PROJECT","COMPLETED","INTERNSHIP"],P0=[{label:"Sky",accent:"text-sky-400",marker:"border-sky-400"},{label:"Red",accent:"text-red-400",marker:"border-red-500"},{label:"Emerald",accent:"text-emerald-400",marker:"border-emerald-500"},{label:"Blue",accent:"text-blue-400",marker:"border-blue-500"},{label:"Amber",accent:"text-amber-400",marker:"border-amber-500"},{label:"Purple",accent:"text-purple-400",marker:"border-purple-500"}];function cl({value:t,onChange:e,className:n="",placeholder:i=""}){return u.jsx("input",{value:t,onChange:r=>e(r.target.value),placeholder:i,className:`bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 w-full ${n}`})}function rC(){const{experience:t,setExperience:e,resetExperience:n}=eo(),{isAdmin:i}=Wr(),[r,s]=se.useState(!1),[o,a]=se.useState(!1),l=(E,g,f)=>e(x=>x.map(S=>S.id===E?{...S,[g]:f}:S)),d=(E,g,f)=>e(x=>x.map(S=>S.id===E?{...S,highlights:S.highlights.map((y,A)=>A===g?f:y)}:S)),h=E=>e(g=>g.map(f=>f.id===E?{...f,highlights:[...f.highlights,"New achievement — edit this."]}:f)),m=(E,g)=>e(f=>f.map(x=>x.id===E?{...x,highlights:x.highlights.filter((S,y)=>y!==g)}:x)),c=()=>e(E=>[...E,{id:`ex${Date.now()}`,year:"2025 - PRESENT",role:"NEW EXPERIENCE",org:"ORGANISATION NAME",location:"INDIA",type:"ACTIVE",accentColor:"text-sky-400",markerColor:"border-sky-400",highlights:["Add your first achievement here."]}]),p=E=>e(g=>g.filter(f=>f.id!==E)),v=()=>{n(),a(!1),s(!1)};return u.jsx("section",{id:"chronicles",className:"section-padding bg-zinc-950 border-b border-zinc-900",children:u.jsxs("div",{className:"container-custom",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs",children:"DEV CHRONICLES"})]}),u.jsx("h2",{className:"display-lg text-white",children:"LEARNING TRACK & EXP."})]}),u.jsx("div",{className:"flex flex-col items-start md:items-end gap-3",children:i&&u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:13})," ADD ENTRY"]}),o?u.jsxs("span",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-red-400",children:"Reset?"}),u.jsx("button",{onClick:v,className:"px-2 py-1 bg-red-900/50 border border-red-700 text-red-300",children:"YES"}),u.jsx("button",{onClick:()=>a(!1),className:"px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>a(!0),className:"text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13,className:"inline mr-1"}),"RESET"]})]}),u.jsx("button",{onClick:()=>{s(E=>!E),a(!1)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${r?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:r?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT"]})})]})})]}),u.jsx("div",{className:"relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12",children:t.map((E,g)=>u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:`absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 bg-black border-2 ${E.markerColor} flex items-center justify-center`,children:u.jsx("div",{className:`w-2 h-2 bg-current ${E.accentColor}`})}),u.jsxs("div",{className:`bg-black border p-6 md:p-8 transition-colors ${r?"border-zinc-600":"border-zinc-800 hover:border-zinc-700"}`,children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-900",children:[r?u.jsxs("div",{className:"flex flex-wrap gap-2 flex-1",children:[u.jsx(cl,{value:E.year,onChange:f=>l(E.id,"year",f),className:"w-36",placeholder:"2025 - PRESENT"}),u.jsx("select",{value:E.type,onChange:f=>l(E.id,"type",f.target.value),className:"text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none",children:iC.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("select",{value:E.accentColor,onChange:f=>{const x=P0.find(S=>S.accent===f.target.value);l(E.id,"accentColor",f.target.value),x&&l(E.id,"markerColor",x.marker)},className:"text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-zinc-300 px-2 py-1 outline-none",children:P0.map(f=>u.jsx("option",{value:f.accent,children:f.label},f.accent))})]}):u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:`text-xs font-mono font-bold bg-zinc-900 ${E.accentColor} px-3 py-1 border border-zinc-800`,children:E.year}),u.jsxs("span",{className:"text-xs font-mono font-bold text-zinc-500",children:["TYPE /// ",E.type]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[r?u.jsx(cl,{value:E.location,onChange:f=>l(E.id,"location",f),className:"w-28",placeholder:"INDIA"}):u.jsxs("div",{className:"flex items-center gap-2 text-xs text-zinc-500 font-mono",children:[u.jsx(GS,{size:14,className:"text-red-500"}),u.jsx("span",{children:E.location})]}),r&&u.jsx("button",{onClick:()=>p(E.id),className:"text-zinc-600 hover:text-red-400 transition-colors ml-2",children:u.jsx(pi,{size:15})})]})]}),r?u.jsxs("div",{className:"space-y-2 mb-4",children:[u.jsx(cl,{value:E.role,onChange:f=>l(E.id,"role",f),className:"font-bold uppercase text-sm",placeholder:"ROLE / TITLE"}),u.jsx(cl,{value:E.org,onChange:f=>l(E.id,"org",f),className:"text-zinc-400 uppercase",placeholder:"ORGANISATION"})]}):u.jsxs(u.Fragment,{children:[u.jsx("h3",{className:"title-lg font-bold uppercase text-white mb-1",children:E.role}),u.jsxs("div",{className:"text-xs font-mono text-zinc-400 mb-6 font-bold",children:["ORG /// ",E.org]})]}),u.jsx("ul",{className:"space-y-3",children:E.highlights.map((f,x)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx(As,{size:16,className:`${E.accentColor} shrink-0 mt-0.5`}),r?u.jsxs("div",{className:"flex gap-2 flex-1",children:[u.jsx("textarea",{value:f,onChange:S=>d(E.id,x,S.target.value),rows:2,className:"flex-1 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 resize-none"}),u.jsx("button",{onClick:()=>m(E.id,x),className:"text-zinc-600 hover:text-red-400 transition-colors shrink-0",children:u.jsx(pi,{size:12})})]}):u.jsx("span",{className:"body-sm text-zinc-300 font-light",children:f})]},x))}),r&&u.jsxs("button",{onClick:()=>h(E.id),className:"mt-4 flex items-center gap-1.5 text-xs font-mono text-emerald-400 border border-emerald-800 px-3 py-1.5 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:12})," ADD BULLET"]})]})]},E.id))})]})})}const sC=["STRATEGY","ML + DEVOPS","HACKATHON","BUILD LOG","TUTORIAL","OPINION","PROJECT"];function To({value:t,onChange:e,multiline:n,placeholder:i="",className:r=""}){return n?u.jsx("textarea",{value:t,onChange:s=>e(s.target.value),placeholder:i,rows:3,className:`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1.5 outline-none focus:border-sky-500 resize-none ${r}`}):u.jsx("input",{value:t,onChange:s=>e(s.target.value),placeholder:i,className:`w-full bg-zinc-900 border border-zinc-700 text-white text-xs font-mono px-2 py-1 outline-none focus:border-sky-500 ${r}`})}function oC(){const{articles:t,setArticles:e,resetArticles:n}=eo(),{isAdmin:i}=Wr(),[r,s]=se.useState(!1),[o,a]=se.useState(!1),l=(c,p,v)=>e(E=>E.map(g=>g.id===c?{...g,[p]:v}:g)),d=()=>e(c=>[...c,{id:`a${Date.now()}`,title:"NEW ARTICLE TITLE",category:"BUILD LOG",readTime:"JOURNAL",date:new Date().toLocaleDateString("en-GB",{year:"numeric",month:"2-digit"}).replace("/","."),image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",excerpt:"Write your article summary here..."}]),h=c=>e(p=>p.filter(v=>v.id!==c)),m=()=>{n(),a(!1),s(!1)};return u.jsx("section",{id:"magazine",className:"section-padding bg-black border-b border-zinc-900",children:u.jsxs("div",{className:"container-custom",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-zinc-400 text-xs",children:"EDITORIAL CONTENT"})]}),u.jsx("h2",{className:"display-lg text-white",children:"DEV MAGAZINE."})]}),u.jsx("div",{className:"flex flex-col items-start md:items-end gap-3",children:i&&u.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r&&u.jsxs(u.Fragment,{children:[u.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 border border-emerald-700 text-emerald-400 hover:bg-emerald-950/40 transition-colors",children:[u.jsx(hi,{size:13})," ADD ARTICLE"]}),o?u.jsxs("span",{className:"flex items-center gap-2 text-xs font-mono",children:[u.jsx("span",{className:"text-red-400",children:"Reset?"}),u.jsx("button",{onClick:m,className:"px-2 py-1 bg-red-900/50 border border-red-700 text-red-300",children:"YES"}),u.jsx("button",{onClick:()=>a(!1),className:"px-2 py-1 border border-zinc-700 text-zinc-400",children:"NO"})]}):u.jsxs("button",{onClick:()=>a(!0),className:"text-xs font-mono px-3 py-2 border border-zinc-700 text-zinc-400 hover:border-red-700 hover:text-red-400 transition-colors",children:[u.jsx(to,{size:13,className:"inline mr-1"}),"RESET"]})]}),u.jsx("button",{onClick:()=>{s(c=>!c),a(!1)},className:`flex items-center gap-1.5 text-xs font-mono font-bold px-4 py-2 border transition-colors ${r?"border-white bg-white text-black":"border-zinc-700 text-zinc-300 hover:border-white hover:text-white"}`,children:r?u.jsxs(u.Fragment,{children:[u.jsx(Xr,{size:13})," LOCK"]}):u.jsxs(u.Fragment,{children:[u.jsx(Yr,{size:13})," EDIT"]})})]})})]}),u.jsx("div",{className:`grid gap-8 ${r?"grid-cols-1 md:grid-cols-2":"grid-cols-1 md:grid-cols-3"}`,children:t.map(c=>u.jsxs("div",{className:`magazine-article-card group flex flex-col justify-between relative ${r?"border border-zinc-600":""}`,children:[r&&u.jsx("button",{onClick:()=>h(c.id),className:"absolute top-2 right-2 z-10 bg-black/80 text-zinc-500 hover:text-red-400 p-1.5 border border-zinc-700 transition-colors",children:u.jsx(pi,{size:14})}),r?u.jsxs("div",{className:"p-3 border-b border-zinc-800 bg-zinc-950",children:[u.jsx("label",{className:"text-[10px] font-mono text-zinc-500 mb-1 block",children:"IMAGE URL"}),u.jsx(To,{value:c.image,onChange:p=>l(c.id,"image",p),placeholder:"https://images.unsplash.com/..."}),c.image&&u.jsx("img",{src:c.image,alt:"",className:"mt-2 w-full h-24 object-cover filter brightness-75",onError:p=>p.target.style.display="none"})]}):u.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-zinc-950",children:[u.jsx("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"}),u.jsx("div",{className:"absolute top-4 left-4 bg-black/90 border border-zinc-800 px-3 py-1 text-[10px] font-mono font-bold text-sky-400",children:c.category})]}),u.jsxs("div",{className:"p-5 flex-1 flex flex-col gap-3",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-3",children:r?u.jsxs(u.Fragment,{children:[u.jsx("select",{value:c.category,onChange:p=>l(c.id,"category",p.target.value),className:"text-[10px] font-mono bg-zinc-900 border border-zinc-700 text-sky-400 px-2 py-1 outline-none",children:sC.map(p=>u.jsx("option",{value:p,children:p},p))}),u.jsx(To,{value:c.readTime,onChange:p=>l(c.id,"readTime",p),placeholder:"BUILD LOG",className:"w-28"}),u.jsx(To,{value:c.date,onChange:p=>l(c.id,"date",p),placeholder:"2026.08",className:"w-20"})]}):u.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-zinc-500",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx(DS,{size:12}),c.readTime]}),u.jsxs("span",{children:["/// ",c.date]})]})}),r?u.jsx(To,{value:c.title,onChange:p=>l(c.id,"title",p),placeholder:"ARTICLE TITLE",className:"font-bold uppercase"}):u.jsx("h3",{className:"title-lg font-bold uppercase tracking-tight text-white group-hover:text-sky-400 transition-colors line-clamp-2",children:c.title}),r?u.jsx(To,{value:c.excerpt,onChange:p=>l(c.id,"excerpt",p),placeholder:"Summary…",multiline:!0}):u.jsx("p",{className:"body-sm text-zinc-400 font-light line-clamp-3 flex-1",children:c.excerpt})]}),!r&&u.jsx("div",{className:"px-5 pb-5 pt-0 border-t border-zinc-900/50",children:u.jsxs("button",{className:"text-link text-xs group/btn text-white hover:text-sky-400 pt-4",children:[u.jsx("span",{children:"READ FULL ARTICLE"}),u.jsx(CS,{size:14,className:"group-hover/btn:translate-x-1 transition-transform"})]})})]},c.id))})]})})}function aC({isOpen:t,onClose:e,onOpenContact:n}){const{categories:i}=Ah(),[r,s]=se.useState([{sender:"copilot",text:"WELCOME TO AI COPILOT INTELLIGENCE ENGINE. I am Ridham's AI Portfolio Assistant. Ask me anything about his technical stack, project history, or engineering background."}]),[o,a]=se.useState("");if(!t)return null;const l=["What is Ridham’s core tech stack?","Tell me about his top projects","Is Ridham available for hire?","How do I contact him?"],d=h=>{const m=h||o;if(!m.trim())return;const c=[...r,{sender:"user",text:m}];s(c),a(""),setTimeout(()=>{let p="";const v=m.toLowerCase();v.includes("stack")||v.includes("skill")||v.includes("technology")||v.includes("learn")?p=`Ridham's current stack — ${i.map(g=>`${g.title.split(" /// ")[1]||g.title}: ${g.skills.map(f=>f.name.split("(")[0].trim()).join(", ")}`).join(" | ")}. He updates these live in the Skills section. Check it out!`:v.includes("project")||v.includes("work")||v.includes("built")?p="Ridham has built real projects including his portfolio (React + Vite + OriginKit), a Hackathon FastAPI decoupled app, The Odin Project builds, and a WIP Docker ML pipeline. Check the Projects section!":v.includes("contact")||v.includes("email")||v.includes("hire")||v.includes("reach")?p="Ridham is available for high-performance software engineering projects and full-stack contracts! Click the CONTACT /// button in the menu or contact modal to send a direct message.":p=`AI COPILOT DATA: "${m}" - Ridham is an engineering student building full-stack web apps, ML pipelines, and DevOps automation. Currently learning FastAPI, Docker, GitHub Actions, and scikit-learn.`,s(E=>[...E,{sender:"copilot",text:p}])},600)};return u.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm",children:u.jsxs("div",{className:"w-full max-w-md bg-black border-l border-zinc-800 flex flex-col h-full shadow-2xl",children:[u.jsxs("div",{className:"p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"m-stripe-vertical h-5"}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ec,{size:18,className:"text-sky-400"}),u.jsx("span",{className:"font-bold text-sm tracking-widest text-white uppercase",children:"AI COPILOT /// ASSISTANT"})]})]}),u.jsx("button",{onClick:e,className:"button-icon w-8 h-8 hover:bg-zinc-800",children:u.jsx(no,{size:16})})]}),u.jsx("div",{className:"flex-1 p-6 overflow-y-auto space-y-4 font-sans",children:r.map((h,m)=>u.jsxs("div",{className:`flex gap-3 ${h.sender==="user"?"justify-end":"justify-start"}`,children:[h.sender==="copilot"&&u.jsx("div",{className:"w-7 h-7 bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0",children:u.jsx(ec,{size:14,className:"text-sky-400"})}),u.jsx("div",{className:`p-4 rounded-none max-w-[80%] text-sm leading-relaxed ${h.sender==="user"?"bg-zinc-800 text-white border border-zinc-700":"bg-zinc-950 text-zinc-300 border border-zinc-900 font-light"}`,children:h.text}),h.sender==="user"&&u.jsx("div",{className:"w-7 h-7 bg-white text-black flex items-center justify-center font-bold text-xs shrink-0",children:"U"})]},m))}),u.jsxs("div",{className:"p-4 border-t border-zinc-900 bg-zinc-950/50 space-y-2",children:[u.jsx("div",{className:"text-[10px] font-mono text-zinc-500 font-bold uppercase mb-2",children:"QUICK QUERIES ///"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:l.map(h=>u.jsxs("button",{onClick:()=>d(h),className:"text-[11px] font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white px-2.5 py-1 border border-zinc-800 text-left flex items-center gap-1",children:[u.jsx("span",{children:h}),u.jsx(LS,{size:10,className:"text-sky-400"})]},h))})]}),u.jsxs("div",{className:"p-4 border-t border-zinc-800 bg-black flex gap-2",children:[u.jsx("input",{type:"text",value:o,onChange:h=>a(h.target.value),onKeyDown:h=>h.key==="Enter"&&d(),placeholder:"Ask AI Copilot about Ridham...",className:"text-input text-xs flex-1"}),u.jsx("button",{onClick:()=>d(),className:"button-primary px-4 h-12",children:u.jsx(Jx,{size:16})})]})]})})}function lC({isOpen:t,onClose:e}){const[n,i]=se.useState({name:"",email:"",subject:"",message:""}),[r,s]=se.useState(!1);if(!t)return null;const o=a=>{a.preventDefault(),s(!0),setTimeout(()=>{s(!1),e()},2500)};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto",children:u.jsxs("div",{className:"relative w-full max-w-2xl bg-zinc-950 border border-zinc-700 text-white rounded-none p-6 md:p-8 shadow-2xl",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 pb-6 mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"m-stripe-vertical h-6"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-mono font-bold text-sky-400",children:"INITIATE COMMUNICATION"}),u.jsx("h2",{className:"display-sm text-white tracking-tight",children:"CONTACT RIDHAM ///"})]})]}),u.jsx("button",{onClick:e,className:"button-icon hover:bg-zinc-800",children:u.jsx(no,{size:20})})]}),r?u.jsxs("div",{className:"py-12 text-center space-y-4",children:[u.jsx(As,{size:48,className:"text-emerald-500 mx-auto animate-bounce"}),u.jsx("h3",{className:"display-sm text-white",children:"TRANSMISSION RECEIVED ///"}),u.jsx("p",{className:"body-md text-zinc-400 max-w-md mx-auto",children:"Your message has been successfully logged. Ridham will review your inquiry and respond shortly."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"label-uppercase text-xs text-zinc-400 block mb-2",children:"FULL NAME *"}),u.jsx("input",{type:"text",required:!0,value:n.name,onChange:a=>i({...n,name:a.target.value}),placeholder:"Enter your name",className:"text-input"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"label-uppercase text-xs text-zinc-400 block mb-2",children:"EMAIL ADDRESS *"}),u.jsx("input",{type:"email",required:!0,value:n.email,onChange:a=>i({...n,email:a.target.value}),placeholder:"name@company.com",className:"text-input"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"label-uppercase text-xs text-zinc-400 block mb-2",children:"PROJECT SUBJECT / TITLE"}),u.jsx("input",{type:"text",value:n.subject,onChange:a=>i({...n,subject:a.target.value}),placeholder:"e.g. Next.js Web App / Engineering Consultation",className:"text-input"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"label-uppercase text-xs text-zinc-400 block mb-2",children:"SPECIFICATION / MESSAGE *"}),u.jsx("textarea",{required:!0,rows:4,value:n.message,onChange:a=>i({...n,message:a.target.value}),placeholder:"Detail your project requirements, timeline, or inquiries...",className:"text-input h-32 py-3"})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800",children:[u.jsx("div",{className:"text-xs text-zinc-500 font-mono",children:"DIRECT EMAIL /// ridham@portfolio-ai.com"}),u.jsxs("button",{type:"submit",className:"button-primary w-full sm:w-auto",children:[u.jsx("span",{children:"TRANSMIT MESSAGE ///"}),u.jsx(Jx,{size:16})]})]})]})]})})}function cC({onOpenContact:t}){const{categories:e}=Ah(),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs("footer",{className:"bg-black border-t border-zinc-900 text-zinc-400 font-sans",children:[u.jsx("div",{className:"m-stripe-divider"}),u.jsxs("div",{className:"container-custom py-16",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"m-stripe-vertical h-6"}),u.jsxs("span",{className:"font-bold text-white text-xl tracking-tighter italic",children:["RIDHAM ",u.jsx("span",{className:"text-sm not-italic ml-1 text-white tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800",children:"///"})]})]}),u.jsx("p",{className:"body-sm text-zinc-400 font-light leading-relaxed",children:"Engineering student building high-performance full-stack apps, ML pipelines, and DevOps automation. Precision-engineered. Built to scale."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"label-uppercase text-white text-xs mb-6",children:"SECTIONS"}),u.jsxs("ul",{className:"space-y-3 text-xs font-light",children:[u.jsx("li",{children:u.jsx("a",{href:"#overview",className:"hover:text-white transition-colors",children:"OVERVIEW"})}),u.jsx("li",{children:u.jsx("a",{href:"#projects",className:"hover:text-white transition-colors",children:"FEATURED PROJECTS"})}),u.jsx("li",{children:u.jsx("a",{href:"#configurator",className:"hover:text-white transition-colors",children:"STACK CONFIGURATOR"})}),u.jsx("li",{children:u.jsx("a",{href:"#powertrain",className:"hover:text-white transition-colors",children:"SKILLS MATRIX"})}),u.jsx("li",{children:u.jsx("a",{href:"#chronicles",className:"hover:text-white transition-colors",children:"CHRONICLES & EXP"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"label-uppercase text-white text-xs mb-6",children:"CURRENT STACK"}),u.jsx("ul",{className:"space-y-3 text-xs font-light",children:e.map(i=>u.jsxs("li",{children:[u.jsx("div",{className:"text-zinc-500 text-[10px] font-mono mb-1",children:i.title}),u.jsxs("div",{className:"flex flex-wrap gap-1",children:[i.skills.slice(0,2).map(r=>u.jsx("span",{className:"text-zinc-300 font-mono font-bold text-[10px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5",children:r.name.split("(")[0].trim()},r.name)),i.skills.length>2&&u.jsxs("span",{className:"text-zinc-600 font-mono text-[10px]",children:["+",i.skills.length-2," more"]})]})]},i.id))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"label-uppercase text-white text-xs mb-6",children:"CONNECT WITH RIDHAM"}),u.jsxs("div",{className:"flex gap-3 mb-6",children:[u.jsx("a",{href:"https://github.com/ridham005",target:"_blank",rel:"noopener noreferrer",className:"button-icon w-10 h-10 hover:border-sky-400",title:"GitHub",children:u.jsx(Ch,{size:18})}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"button-icon w-10 h-10 hover:border-blue-400",title:"LinkedIn",children:u.jsx(HS,{size:18})}),u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"button-icon w-10 h-10 hover:border-red-400",title:"Twitter / X",children:u.jsx(KS,{size:18})}),u.jsx("button",{onClick:t,className:"button-icon w-10 h-10 hover:border-emerald-400 text-white",title:"Email Contact",children:u.jsx(VS,{size:18})})]}),u.jsx("button",{onClick:t,className:"button-primary-outline text-xs px-4 h-10 w-full justify-center",children:"SEND MESSAGE"})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-900 text-xs",children:[u.jsxs("div",{className:"caption text-zinc-500",children:["© ",new Date().getFullYear()," RIDHAM SOFTWARE ENGINEERING. BUILT WITH REACT + VITE."]}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("span",{className:"font-mono text-zinc-600",children:"CANVAS /// PURE BLACK #000000"}),u.jsx("button",{onClick:n,className:"button-icon w-10 h-10 hover:bg-zinc-800",title:"Back to Top",children:u.jsx(NS,{size:18})})]})]})]})]})}function uC(){const[t,e]=se.useState({x:-100,y:-100}),[n,i]=se.useState({x:-100,y:-100}),[r,s]=se.useState(!1),[o,a]=se.useState(!1),[l,d]=se.useState("");return se.useEffect(()=>{const h=g=>{e({x:g.clientX,y:g.clientY})},m=()=>a(!0),c=()=>a(!1);window.addEventListener("mousemove",h),window.addEventListener("mousedown",m),window.addEventListener("mouseup",c);let p;const v=()=>{i(g=>({x:g.x+(t.x-g.x)*.25,y:g.y+(t.y-g.y)*.25})),p=requestAnimationFrame(v)};p=requestAnimationFrame(v);const E=g=>{const f=g.target.closest("button, a, .model-card, .spec-cell, input, textarea");if(f){s(!0);const x=f.getAttribute("title")||f.innerText||"EXPLORE";d(x.slice(0,14).toUpperCase())}else s(!1),d("")};return window.addEventListener("mouseover",E),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("mousedown",m),window.removeEventListener("mouseup",c),window.removeEventListener("mouseover",E),cancelAnimationFrame(p)}},[t.x,t.y]),u.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block",children:[u.jsx("div",{className:"fixed w-2 h-2 bg-white rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2",style:{left:`${t.x}px`,top:`${t.y}px`,transform:`translate(-50%, -50%) scale(${o?.5:1})`}}),u.jsxs("div",{className:`fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center border ${r?"w-16 h-16 border-sky-400 bg-sky-500/10 backdrop-blur-xs":"w-8 h-8 border-zinc-500/50"}`,style:{left:`${n.x}px`,top:`${n.y}px`,transform:`translate(-50%, -50%) scale(${o?.8:1})`,borderRadius:r?"0px":"50%"},children:[r&&u.jsx("div",{className:"absolute inset-0 border border-transparent p-[1px]",children:u.jsx("div",{className:"m-stripe-divider h-[2px]"})}),r&&l&&u.jsx("span",{className:"text-[8px] font-mono font-bold tracking-widest text-sky-400 text-center px-1 truncate max-w-[56px]",children:l})]})]})}function dC(){const t=se.useRef(null);return se.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const o=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight};window.addEventListener("resize",o);let a={x:r/2,y:s/2,radius:150};const l=p=>{a.x=p.clientX,a.y=p.clientY};window.addEventListener("mousemove",l);const d=40,h=[],m=35;for(let p=0;p<m;p++)h.push({x:Math.random()*r,y:Math.random()*s,speed:.5+Math.random()*1.5,size:1+Math.random()*2,color:["#0066b1","#1c69d4","#e22718"][Math.floor(Math.random()*3)],alpha:.2+Math.random()*.5});const c=()=>{n.clearRect(0,0,r,s),n.strokeStyle="rgba(40, 40, 40, 0.25)",n.lineWidth=1;for(let p=0;p<r;p+=d)for(let v=0;v<s;v+=d){const E=a.x-p,g=a.y-v,f=Math.sqrt(E*E+g*g);if(f<a.radius){const x=(1-f/a.radius)*.4;n.fillStyle=`rgba(0, 102, 177, ${x})`,n.fillRect(p-1,v-1,3,3)}}n.beginPath();for(let p=0;p<r;p+=d*2)n.moveTo(p,0),n.lineTo(p,s);for(let p=0;p<s;p+=d*2)n.moveTo(0,p),n.lineTo(r,p);n.strokeStyle="rgba(30, 30, 30, 0.15)",n.stroke(),h.forEach(p=>{p.y-=p.speed,p.y<0&&(p.y=s,p.x=Math.random()*r),n.fillStyle=p.color,n.globalAlpha=p.alpha,n.fillRect(p.x,p.y,p.size,p.size*3),n.globalAlpha=1}),i=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",o),window.removeEventListener("mousemove",l),cancelAnimationFrame(i)}},[]),u.jsx("canvas",{ref:t,className:"pointer-events-none fixed inset-0 z-0 opacity-60"})}function fC(t=.5){const e=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,i=(3-Math.sqrt(3))/3,r=new Uint8Array(256);for(let h=0;h<256;h++)r[h]=h;const s=h=>{const m=Math.sin(h*12.9898+t*78.233)*43758.5453;return m-Math.floor(m)};for(let h=255;h>0;h--){const m=Math.floor((h+1)*s(h)),c=r[h];r[h]=r[m],r[m]=c}const o=new Uint8Array(512),a=new Uint8Array(512);for(let h=0;h<512;h++)o[h]=r[h&255],a[h]=o[h]%12;const l=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),d=h=>Math.floor(h)|0;return function(m,c){const p=(m+c)*e,v=d(m+p),E=d(c+p),g=(v+E)*n,f=m-(v-g),x=c-(E-g);let S,y;f>x?(S=1,y=0):(S=0,y=1);const A=f-S+n,b=x-y+n,w=f-1+i,_=x-1+i,T=v&255,N=E&255,R=a[T+o[N]],L=a[T+S+o[N+y]],G=a[T+1+o[N+1]];let q=0,D=0,W=0,z=.5-f*f-x*x;z>=0&&(z*=z,q=z*z*(l[R*2]*f+l[R*2+1]*x));let U=.5-A*A-b*b;U>=0&&(U*=U,D=U*U*(l[L*2]*A+l[L*2+1]*b));let V=.5-w*w-_*_;return V>=0&&(V*=V,W=V*V*(l[G*2]*w+l[G*2+1]*_)),70*(q+D+W)}}const hC=0,pC=3,mC=.5;function gC({strokeColor:t="#3c3c3c",backgroundColor:e="transparent",count:n=50,movement:i=24,hover:r=!0,force:s=5,resolution:o=10}){const a=se.useRef(null),l=se.useRef(null),d=se.useRef({x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1}),h=se.useRef(null),m=se.useRef([]),c=se.useRef(null),p=se.useRef(null),v=se.useRef(null),E=se.useRef(0),g=se.useRef(null);se.useRef({width:0,height:0,zoom:1});const f=se.useRef(!0),x=se.useRef({strokeColor:t,count:n,movement:i,hover:r,force:s,resolution:o});x.current={strokeColor:t,count:n,movement:i,hover:r,force:s,resolution:o};const S=()=>{const _=a.current,T=l.current;if(!_||!T)return;const N=_.clientWidth||_.offsetWidth||1,R=_.clientHeight||_.offsetHeight||1;v.current={width:N,height:R},T.style.width=`${N}px`,T.style.height=`${R}px`},y=()=>{const _=l.current;if(!_||!v.current)return;const{width:T,height:N}=v.current,{strokeColor:R,count:L}=x.current,q=90-(Math.max(1,Math.min(100,L))-1)/99*82,D=Math.ceil((T+q)/q),W=Math.ceil((N+q)/q),z=(T-q*(D-1))/2,U=(N-q*(W-1))/2,V=[];for(let Q=0;Q<D;Q++)for(let ie=0;ie<W;ie++)V.push({x:z+q*Q,y:U+q*ie,angle:0,cursor:{x:0,y:0,vx:0,vy:0}});if(m.current=V,!h.current){const Q=document.createElementNS("http://www.w3.org/2000/svg","path");_.appendChild(Q),h.current=Q}const I=h.current;I.setAttribute("fill","none"),I.setAttribute("stroke",R),I.setAttribute("stroke-width","1.5"),I.setAttribute("stroke-linecap","round")},A=(_,T)=>{const N=a.current;if(!v.current||!N)return;const R=d.current,L=N.getBoundingClientRect();R.x=_-L.left,R.y=T-L.top,R.set||(R.sx=R.x,R.sy=R.y,R.lx=R.x,R.ly=R.y,R.set=!0)},b=_=>{E.current=_;const T=m.current,N=d.current,R=c.current;if(!R)return;const{movement:L,hover:G,force:q}=x.current,D=pC,W=hC,z=_*L*8e-6,U=Math.cos(W)*z,V=Math.sin(W)*z;T.forEach(I=>{const Q=R(I.x*.004-U,I.y*.004-V),ie=W+Q*Math.PI*D,Ie=I.x-N.sx,Ge=I.y-N.sy,De=Math.hypot(Ie,Ge),K=Math.max(175,N.vs);let ce=0;if(G&&De<K){const he=1-De/K,Be=q/10*.02;ce=(Math.atan2(Ge,Ie)+Math.PI/2-ie)*he*(.4+N.vs*Be);const $e=Math.cos(De*.001)*he,Oe=q/10*7e-4;I.cursor.vx+=Math.cos(Math.atan2(Ge,Ie))*$e*K*N.vs*Oe,I.cursor.vy+=Math.sin(Math.atan2(Ge,Ie))*$e*K*N.vs*Oe}let oe=ie+ce-I.angle;for(;oe>Math.PI;)oe-=2*Math.PI;for(;oe<-Math.PI;)oe+=2*Math.PI;I.angle+=oe*.12,I.cursor.vx+=(0-I.cursor.x)*.01,I.cursor.vy+=(0-I.cursor.y)*.01,I.cursor.vx*=.95,I.cursor.vy*=.95,I.cursor.x+=I.cursor.vx,I.cursor.y+=I.cursor.vy,I.cursor.x=Math.min(50,Math.max(-50,I.cursor.x)),I.cursor.y=Math.min(50,Math.max(-50,I.cursor.y))})},w=()=>{const _=m.current,T=h.current;if(!T)return;const{resolution:N}=x.current,R=(6+N/10*20)/2;T.setAttribute("fill","none"),T.setAttribute("stroke-width","1.5");let L="";for(const G of _){const q=G.x+G.cursor.x,D=G.y+G.cursor.y,W=Math.cos(G.angle)*R,z=Math.sin(G.angle)*R;L+=`M ${(q-W).toFixed(1)} ${(D-z).toFixed(1)} L ${(q+W).toFixed(1)} ${(D+z).toFixed(1)} `}T.setAttribute("d",L)};return se.useEffect(()=>{const _=a.current;if(!_||!l.current)return;c.current=fC(mC),S(),y();const T=()=>{S(),y()},N=L=>A(L.clientX,L.clientY);window.addEventListener("resize",T),window.addEventListener("mousemove",N);const R=new IntersectionObserver(L=>{L.forEach(G=>{f.current=G.isIntersecting})},{threshold:.1});return R.observe(_),()=>{window.removeEventListener("resize",T),window.removeEventListener("mousemove",N),R.disconnect()}},[]),se.useEffect(()=>{const _=T=>{if(!f.current){p.current=requestAnimationFrame(_);return}const N=d.current;N.sx+=(N.x-N.sx)*.1,N.sy+=(N.y-N.sy)*.1;const R=N.x-N.lx,L=N.y-N.ly,G=Math.hypot(R,L);N.v=G,N.vs+=(G-N.vs)*.1,N.vs=Math.min(100,N.vs),N.lx=N.x,N.ly=N.y,N.a=Math.atan2(L,R),b(T),w(),p.current=requestAnimationFrame(_)};return p.current=requestAnimationFrame(_),()=>{p.current&&(cancelAnimationFrame(p.current),p.current=null)}},[]),u.jsxs("div",{ref:a,className:"pointer-events-none fixed inset-0 z-0 opacity-40 overflow-hidden",style:{backgroundColor:e||"transparent"},children:[u.jsx("svg",{ref:l,className:"absolute inset-0 w-full h-full block",xmlns:"http://www.w3.org/2000/svg"}),u.jsx("div",{ref:g,className:"absolute w-5 h-5 opacity-0 pointer-events-none"})]})}const L0=["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"],yn={background:"#000000",lineColor:"#3c3c3c",lineOpacity:60,colors:["#0066b1","#1c69d4","#e22718","#0653b6","#2b2b2b","#ffffff"],grid:4,cellMode:"square",tunnelSize:2,speed:25,boost:75,fade:90,labelText:"HOLD TO ACCELERATE ///",labelFill:"#ffffff",labelColor:"#000000"},I0=2,D0=1.8,Xu=1,xC=16,Yu=.0035,vC=.1,_C=.8,yC=(t,e)=>t*e*.95,SC=t=>{const e=(t==null?void 0:t.image)??t,n=typeof e=="string"?e:(e==null?void 0:e.src)??"",i=typeof(t==null?void 0:t.y)=="number"?t.y:50;return{url:n,y:i}};function EC(t){const{images:e=L0,colors:n=yn.colors,background:i=yn.background,lineColor:r=yn.lineColor,lineOpacity:s=yn.lineOpacity,grid:o=yn.grid,cellMode:a=yn.cellMode,tunnelSize:l=yn.tunnelSize,speed:d=yn.speed,boost:h=yn.boost,fade:m=yn.fade,labelText:c=yn.labelText,labelFill:p=yn.labelFill,labelColor:v=yn.labelColor}=t,E=se.useRef(null),g=se.useRef(null),f=se.useRef(null),x=se.useMemo(()=>{const b=(e??[]).map(SC).filter(w=>w.url);return b.length?b:L0.map(w=>({url:w,y:50}))},[e]),S=x.map(b=>`${b.url}|${b.y}`).join(","),y=se.useMemo(()=>(n??[]).filter(Boolean),[n]),A=se.useRef(null);return A.current={speed:Math.max(0,d)/100,boost:Math.max(0,h)/10},se.useEffect(()=>{const b=E.current,w=g.current;if(!b||!w)return;let _=!1,T=!0;const R=1+(Math.max(1,Math.min(20,Math.round(l)))-1)*2/19,L=Math.max(1,Math.round(o));let G,q,D,W,z,U,V,I;if(a==="square"){const Z=D0*R/L;G=Math.max(1,Math.round(I0*R/Z)),z=Math.max(1,Math.round(Xu/Z)),W=Z,U=z*Z,I=Z*L,V=Z*G,q=Z,D=Z}else G=L,z=1,U=Xu,W=Xu,V=I0*R,I=D0*R,q=V/G,D=I/L;const Q=Math.max(6,Math.round(xC/U)),ie=2*G+2*L,Ie=Math.min(.5,2*L*W/ie),Ge=a==="square"?(Ie+.5)/2:.5,De=yC(Q,U),K=new vv;K.background=new et(i);const ce=Math.min(De*(1-Math.min(100,Math.max(0,m))/100),De-.01);K.fog=new Bh(new et(i),ce,De);const oe=new Mn(45,1,1,1e3);oe.position.set(0,0,0);const he=new zv({canvas:w,antialias:!0,alpha:!1,powerPreference:"high-performance"});he.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const Be=new XE;Be.setCrossOrigin("anonymous");const Le=new ks({color:new et(r),transparent:!0,opacity:Math.max(0,Math.min(100,s))/100}),$e=V/2,Oe=I/2,Ve=new qs(q,W),Ne=new qs(W,D),fe=Q*U+U,me=new Go(new Cl(new F(0,0,0),new F(0,0,-fe)),1,Yu,8),ye=new Go(new Cl(new F(0,0,0),new F(V,0,0)),1,Yu,8),Ce=new Go(new Cl(new F(0,0,0),new F(0,I,0)),1,Yu,8),Je=y.map(Z=>new ks({color:new et(Z),side:$n})),qe=[],ot=x.map(({url:Z,y:j})=>{const le=new ks({transparent:!0,opacity:0,side:$n});return Be.load(Z,ae=>{var tt,at;if(!T){ae.dispose();return}ae.minFilter=jt,ae.generateMipmaps=!1,ae.colorSpace=En;const ne=((tt=ae.image)==null?void 0:tt.width)??1,Ae=((at=ae.image)==null?void 0:at.height)??1,_e=ne/Ae;if(_e>1)ae.repeat.set(1/_e,1),ae.offset.set((1-1/_e)/2,0);else{const gn=_e,Rn=Math.max(0,Math.min(100,j))/100;ae.repeat.set(1,gn),ae.offset.set(0,(1-gn)*(1-Rn))}le.map=ae,le.needsUpdate=!0,qe.push(le)},void 0,()=>{}),le});let O=0,St=0,st=0;const P=(Z,j,le,ae=0)=>{const ne=new Bn(Z,Le);return ne.position.set(j,le,ae),ne},M=[];for(let Z=0;Z<z;Z++){const j=-(Z+.5)*W;for(let le=0;le<G;le++){const ae=-$e+le*q+q/2;M.push({geo:Ve,pos:new F(ae,-Oe,j),rot:new Jn(-Math.PI/2,0,0),d:Z}),M.push({geo:Ve,pos:new F(ae,Oe,j),rot:new Jn(Math.PI/2,0,0),d:Z})}for(let le=0;le<L;le++){const ae=-Oe+le*D+D/2;M.push({geo:Ne,pos:new F(-$e,ae,j),rot:new Jn(0,Math.PI/2,0),d:Z}),M.push({geo:Ne,pos:new F($e,ae,j),rot:new Jn(0,-Math.PI/2,0),d:Z})}}function H(Z){const j=O;O+=z;const le=Z.userData.slabs;for(let ae=0;ae<le.length;ae++){const ne=le[ae];if(!((j+M[ae].d)%2===0)||Math.random()>Ge){ne.visible=!1;continue}ne.visible=!0,Math.random()>.5?(ne.material=Je[5*St%Je.length],St++):(ne.material=ot[3*st%ot.length],st++)}}function X(Z){const j=new Cs;j.position.z=Z;for(let ae=0;ae<z;ae++){const ne=-ae*W;j.add(P(ye,-$e,-Oe,ne)),j.add(P(ye,-$e,Oe,ne)),j.add(P(Ce,-$e,-Oe,ne)),j.add(P(Ce,$e,-Oe,ne))}const le=M.map(ae=>{const ne=new Bn(ae.geo,Je[0]);return ne.position.copy(ae.pos),ne.rotation.copy(ae.rot),ne.visible=!1,j.add(ne),ne});return j.userData.slabs=le,H(j),j}const ee=new Cs;for(let Z=0;Z<=G;Z++){const j=-$e+Z*q;ee.add(P(me,j,-Oe)),ee.add(P(me,j,Oe))}for(let Z=1;Z<L;Z++){const j=-Oe+Z*D;ee.add(P(me,-$e,j)),ee.add(P(me,$e,j))}K.add(ee);const ue=[];for(let Z=0;Z<Q;Z++){const j=X(-Z*U);K.add(j),ue.push(j)}const pe=()=>{const Z=Math.max(1,b.clientWidth),j=Math.max(1,b.clientHeight);oe.aspect=Z/j,oe.updateProjectionMatrix(),he.setSize(Z,j,!1)},te=new ResizeObserver(pe);te.observe(b),pe();let re=0,ge=0,Re=0;const ve=Z=>{if(!T)return;ge=requestAnimationFrame(ve);const j=Re?Math.min((Z-Re)/1e3,1/30):1/60;Re=Z;const le=A.current;re+=_?le.boost:le.speed;const ae=-.05*re;oe.position.z+=vC*(ae-oe.position.z),ee.position.z=oe.position.z;const ne=Q*U,Ae=oe.position.z;for(const _e of ue)if(_e.position.z>Ae+U){let tt=0;for(const at of ue)tt=Math.min(tt,at.position.z);_e.position.z=tt-U,H(_e)}else if(_e.position.z<Ae-ne-U){let tt=-999999;for(const at of ue)tt=Math.max(tt,at.position.z);_e.position.z=tt+U,H(_e)}for(let _e=qe.length-1;_e>=0;_e--){const tt=qe[_e];tt.opacity=Math.min(1,tt.opacity+j/_C),tt.opacity>=1&&qe.splice(_e,1)}he.render(K,oe)};ge=requestAnimationFrame(ve);const xe=Z=>{const j=f.current;if(!j)return;const le=b.getBoundingClientRect(),ae=le.width>0?b.clientWidth/le.width:1,ne=le.height>0?b.clientHeight/le.height:1;j.style.left=`${(Z.clientX-le.left)*ae}px`,j.style.top=`${(Z.clientY-le.top)*ne}px`},Ue=()=>{const Z=f.current;Z&&(Z.style.opacity="1")},ze=()=>{_=!1;const Z=f.current;Z&&(Z.style.opacity="0",Z.style.transform="translate(0%, -100%) scale(1)")},We=()=>{_=!0;const Z=f.current;Z&&(Z.style.transform="translate(0%, -100%) scale(0.9)")},k=()=>{_=!1;const Z=f.current;Z&&(Z.style.transform="translate(0%, -100%) scale(1)")};return b.addEventListener("pointermove",xe),b.addEventListener("pointerenter",Ue),b.addEventListener("pointerleave",ze),b.addEventListener("pointerdown",We),window.addEventListener("pointerup",k),()=>{var Z;T=!1,cancelAnimationFrame(ge),te.disconnect(),b.removeEventListener("pointermove",xe),b.removeEventListener("pointerenter",Ue),b.removeEventListener("pointerleave",ze),b.removeEventListener("pointerdown",We),window.removeEventListener("pointerup",k),Ve.dispose(),Ne.dispose(),me.dispose(),ye.dispose(),Ce.dispose();for(const j of Je)j.dispose();for(const j of ot)(Z=j.map)==null||Z.dispose(),j.dispose();Le.dispose(),he.dispose()}},[S,y,i,r,s,o,a,l,m]),u.jsxs("section",{className:"relative w-full bg-black py-20 border-b border-zinc-900 overflow-hidden",children:[u.jsx("div",{className:"container-custom mb-8",children:u.jsx("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-red-500 text-xs font-mono",children:"3D GALLERY TUNNEL"})]}),u.jsx("h2",{className:"display-lg text-white",children:"VISUAL GALLERY."})]})})}),u.jsx("div",{className:"relative w-full h-[520px] border-y border-zinc-800 bg-black",children:u.jsxs("div",{ref:E,className:"relative w-full h-full overflow-hidden select-none cursor-none",children:[u.jsx("canvas",{ref:g,className:"block w-full h-full"}),u.jsxs("div",{ref:f,className:"absolute top-0 left-0 pointer-events-none opacity-0 bg-white text-black font-mono font-bold text-xs tracking-widest px-4 py-2 border border-zinc-300 shadow-2xl flex items-center gap-2 transition-transform duration-100 ease-out",style:{transform:"translate(0%, -100%) scale(1)",borderRadius:"0px"},children:[u.jsx(Rh,{size:14,className:"text-red-600 animate-pulse"}),u.jsx("span",{children:c})]}),u.jsxs("div",{className:"absolute top-6 left-6 pointer-events-none bg-black/80 backdrop-blur-md px-4 py-2 border border-zinc-800 text-xs font-mono text-white flex items-center gap-3",children:[u.jsx("div",{className:"w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"}),u.jsx("span",{children:"GALLERY TUNNEL /// ACTIVE"})]}),u.jsx("div",{className:"absolute bottom-6 right-6 pointer-events-none bg-black/80 backdrop-blur-md px-4 py-2 border border-zinc-800 text-xs font-mono text-zinc-400",children:"PRESS & HOLD /// ACCELERATE"})]})})]})}function MC(){const[t,e]=se.useState("overview"),[n,i]=se.useState(null),[r,s]=se.useState(!1),[o,a]=se.useState(!1),[l,d]=se.useState(!1),h=()=>{if(l)d(!1);else try{const p=new(window.AudioContext||window.webkitAudioContext),v=p.createOscillator(),E=p.createGain();v.type="sawtooth",v.frequency.setValueAtTime(80,p.currentTime),v.frequency.exponentialRampToValueAtTime(320,p.currentTime+1.2),v.frequency.exponentialRampToValueAtTime(140,p.currentTime+2.5),E.gain.setValueAtTime(.08,p.currentTime),E.gain.exponentialRampToValueAtTime(.01,p.currentTime+2.5),v.connect(E),E.connect(p.destination),v.start(),v.stop(p.currentTime+2.5),d(!0),setTimeout(()=>d(!1),2500)}catch(p){console.warn("Web Audio API not supported",p)}},m=()=>{const p=document.getElementById("projects");p&&p.scrollIntoView({behavior:"smooth"})},c=()=>{const p=document.getElementById("configurator");p&&p.scrollIntoView({behavior:"smooth"})};return u.jsx(bS,{children:u.jsx(MS,{children:u.jsxs("div",{className:"bg-black text-white min-h-screen relative selection:bg-red-600 selection:text-white",children:[u.jsx(uC,{}),u.jsx(dC,{}),u.jsx(gC,{strokeColor:"#2a2a2a",count:50,movement:20,force:4}),u.jsx(ZS,{onOpenCopilot:()=>s(!0),onOpenContact:()=>a(!0),soundActive:l,onToggleSound:h,activeSection:t,setActiveSection:e}),u.jsx(h1,{onExploreProjects:m,onOpenConfigurator:c}),u.jsx(YA,{}),u.jsx(KA,{onSelectProject:i}),u.jsx(EC,{}),u.jsx(ZA,{onOpenContact:()=>a(!0)}),u.jsx(nC,{}),u.jsx(rC,{}),u.jsx(oC,{}),u.jsxs("section",{className:"relative py-24 bg-black border-y border-zinc-800 overflow-hidden",children:[u.jsxs("div",{className:"absolute inset-0 opacity-30",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2000&auto=format&fit=crop",alt:"Engineering Track",className:"w-full h-full object-cover filter brightness-75 contrast-125"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"})]}),u.jsxs("div",{className:"container-custom relative z-10 text-center max-w-4xl mx-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 mb-4",children:[u.jsx("div",{className:"m-stripe-vertical h-4"}),u.jsx("span",{className:"label-uppercase text-sky-400 text-xs",children:"READY TO BUILD"})]}),u.jsx("h2",{className:"display-lg mb-8 text-white",children:"ENGINEER YOUR NEXT PROJECT."}),u.jsx("button",{onClick:()=>a(!0),className:"button-primary px-8 h-12 text-sm tracking-widest",children:"INITIATE CONTACT ///"})]})]}),u.jsx(cC,{onOpenContact:()=>a(!0)}),u.jsx(JA,{project:n,onClose:()=>i(null)}),u.jsx(aC,{isOpen:r,onClose:()=>s(!1),onOpenContact:()=>{s(!1),a(!0)}}),u.jsx(lC,{isOpen:o,onClose:()=>a(!1)}),u.jsx(JS,{})]})})})}$u.createRoot(document.getElementById("root")).render(u.jsx(c_.StrictMode,{children:u.jsx(MC,{})}));

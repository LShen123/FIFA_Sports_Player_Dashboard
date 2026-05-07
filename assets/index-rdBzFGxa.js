var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function te(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.5`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&rn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&rn(e,a,t[a])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_t]||null;if(!i)throw Error(s(90));Yt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,`passive`,{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Gt(Dt(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=yn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Kt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Ed(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};yn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)yi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=vi(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return Ci(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=vi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ee:return e=vi(13,n,t,i),e.elementType=ee,e.lanes=a,e;case T:return e=vi(19,n,t,i),e.elementType=T,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case te:o=14;break a;case ne:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=vi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function k(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-qe(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(s(519));function Ki(e){throw Qi(k(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){O($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,me($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ia(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ia(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Mr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(s(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?K.pooledCache:e}function Da(e,t){t===null?O(Ta,Ta.current):O(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ne&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case ne:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===C)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===C)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===C)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),j&&Li(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),j&&Li(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Ci(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=Si(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ei(a,e.mode,c),c.return=e,e=c}return o(e);case ne:return a=Fa(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===C)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=wi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function N(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ba;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ya&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=pe(null),ao=pe(0);function oo(e,t){e=Wl,O(ao,e),O(io,t),Wl=e|t.baseLanes}function so(){O(ao,Wl),O(io,io.current)}function co(){Wl=ao.current,me(io),me(ao)}var lo=pe(null),uo=null;function fo(e){var t=e.alternate;O(P,P.current&1),O(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){O(P,P.current),O(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(O(P,P.current),O(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){O(P,P.current),O(lo,lo.current)}function go(e){me(lo),uo===e&&(uo=null),me(P)}var P=pe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){E.H=Vs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(s(300));e===null||V||(e=e.dependencies,e!==null&&sa(e)&&(V=!0))}function ko(e,t,n,r){F=e;var i=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=i)throw Error(s(301));if(i+=1,L=I=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Ws,a=t(n,r)}while(bo);return a}function Ao(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(s(467)):Error(s(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Pa(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return la(e)}throw Error(s(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((vo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,F.lanes|=p,Gl|=p;f=u.action,xo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,F.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Mr(a,e.memoizedState)&&(V=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Mr(a,t.memoizedState)||(V=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Uo(e,t,n){var r=F,i=z(),a=j;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Mr((I||i).memoizedState,n);if(o&&(i.memoizedState=n,V=!0),i=i.queue,ps(Go.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,i,n,t),null),K===null)throw Error(s(349));a||vo&127||B(r,t,n)}return n}function B(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function qo(e){var t=pi(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Xo(e,t,n,r,i){if(Rs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Zo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(j){var n=K.formState;if(n!==null){a:{var r=F;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,F,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(z(),I,e)}function as(e,t,n){if(t=Vo(e,t,ns)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===ka?ja:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=z(),n=I;if(n!==null)return as(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return z().memoizedState}function us(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(F.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=z().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||vo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return Mr(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),Mr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,Ca(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Os(e).queue;Ts(e,i,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return la(Qf)}function js(){return z().memoizedState}function Ms(){return z().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=N(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=fi(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),K===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(s(479))}else t=fi(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===F||t!==null&&t===F}function zs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Vs={readContext:la,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Vs.useEffectEvent=R;var Hs={readContext:la,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Po(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=Po();if(j){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),K===null)throw Error(s(349));J&127||B(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,fs(Go.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),n},useId:function(){var e=Po(),t=K.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ns.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:la,use:Lo,useCallback:xs,useContext:la,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Bo,useRef:ls,useState:function(){return Bo(zo)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:la,use:Lo,useCallback:xs,useContext:la,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Ho,useRef:ls,useState:function(){return Ho(zo)},useDebugValue:bs,useDeferredValue:function(e,t){var n=z();return I===null?Cs(n,e,t):ws(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=N(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=N(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=N(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){oi(e)}function Zs(e){console.error(e)}function Qs(e){oi(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=N(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=N(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,i,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(j)return t=lo.current,t===null?(r!==Gi&&(t=Error(s(423),{cause:r}),Qi(k(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=k(r,n),i=tc(e.stateNode,r,i),Qa(e,i),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gi&&(e=Error(s(422),{cause:r}),Qi(k(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=k(a,n),Xl===null?Xl=[a]:Xl.push(a),X!==4&&(X=2),t===null)return!0;r=k(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=tc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=nc(i),rc(i,e,n,r),Qa(n,i),!1}n=n.return}while(n!==null);return!1}var ac=Error(s(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!V?(Mo(e,t,i),jc(e,t,i)):(j&&s&&zi(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),so(),ho(t)):(Da(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),so(),mo(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ga(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(po(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return pc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(po(t),i)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(V||oa(e,t,n,!1),i=(n&e.childLanes)!==0,V||i){if(r=K,r!==null&&(o=ut(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,pi(e,o),hu(r,e,o),ac;Du(),t=mc(e,t,n)}else e=a.treeContext,A=cf(o.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ca(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!V?(Mo(e,t,i),jc(e,t,i)):(j&&r&&zi(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!V?(Mo(e,t,a),jc(e,t,a)):(j&&r&&zi(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=qa||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=qa||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Xi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Oa()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(i?fo(t):ho(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(ho(t),i=t.mode,c=Ec({mode:`hidden`,children:c},i),r=Ci(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(null,r)):(fo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(fo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,i=t.mode,r=Ec({mode:`visible`,children:r.children},i),c=Ci(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,t=dc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Qi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||oa(e,t,n,!1),o=(n&e.childLanes)!==0,V||o){if(o=K,o!==null&&(r=ut(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),hu(o,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return i?(ho(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,i,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ga(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(P,o),oc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(P,P.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(i===te){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ys(r,t.pendingProps),yc(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),to(t,r,null,n);var o=t.memoizedState;if(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0),eo(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==i){i=k(Error(s(424)),t),Qi(i),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===i){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Hi=t,Wi=!0,i=A,Zd(t.type)?(lf=i,A=cf(r.firstChild)):A=i),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((i=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?i=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,i=!0)),i||Ki(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Ao,null,null,n),Qf._currentValue=i),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ca(t),i=la(i),r=r(i),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(i=Ea(),i===null&&(i=K,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),na(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),to(t,null,null,n),eo()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,na(t,M,r),r!==i.cache&&aa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,M,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),H(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Fc(t),a===null?(H(t),Ic(t,i,null,r,n)):(H(t),Lc(t,a))):a?a===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,a)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}e=he.current,Yi(t)?qi(t,e):(e=ff(i,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}if(a=he.current,Yi(t))qi(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[gt]=t,a[_t]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Hi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(s(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[gt]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),i=!1}else i=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ra(t.type),H(t),null;case 19:if(me(P),r=t.memoizedState,r===null)return H(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_o(e),a!==null){for(t.flags|=128,zc(r,!1),e=a.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return O(P,P.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304)}else{if(!i)if(e=_o(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!j)return H(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=P.current,O(P,i?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),H(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Vc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(P),null;case 4:return be(),null;case 10:return ra(t.type),null;case 22:case 23:return go(t),co(),e!==null&&me(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Hc(e,t){switch(Bi(t),t.tag){case 3:ra(M),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:me(P);break;case 10:ra(t.type);break;case 22:case 23:go(t),co(),e!==null&&me(Ta);break;case 24:ra(M)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ys(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(s(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(s(160));dl(a,o,i),W=null,ll=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[Ct]||a[gt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[gt]=e,kt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[gt]=e,kt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){i=e.stateNode;try{tn(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Xc(e,i,n===null?i:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=_l,_l=gf(t.containerInfo),gl(t,e),_l=i,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||i,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;el(e,Qc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(tn(a,``),n.flags&=-33),el(e,Qc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;$c(e,Qc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||j){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Fe(),10<i)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,ta=ea=null,No(e),za=null,Ba=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=bi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ui(),n}function Cu(e,t){F=null,E.H=Vs,t===ka||t===ja?(t=La(),Y=3):t===Aa?(t=La(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,k(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(J&4194048)===J?uo===null:(J&62914560)===J||J&536870912?e===uo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&lo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,ui()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),i=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var a=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},a.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Na(a)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var c=q;if(o?Wf(o):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,a,5);break;case 6:Y=0,Bl=null,Pu(e,t,a,6);break;case 8:xu(),X=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=i,G=n,q===null?(K=null,J=0,ui(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:No(t);default:Hc(n,t),t=q=xi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){ta=ea=null,No(t),za=null,Ba=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,k(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,k(n,e.current)),q=null;return}t.flags&32768?(j||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=li,st(e,n,a,o,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=G,G|=4;try{ol(e,t,n)}finally{G=o,D.p=i,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(s(331));var c=G;if(G|=4,Fl(a.current),Dl(a,a.current,o,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=k(n,t),t=tc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=k(n,e),n=nc(2),r=Xa(t,n,2),r!==null&&(rc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=pi(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ii.length;hd++){var gd=ii[hd];ai(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=Yn;break;case`focusin`:u=`focus`,c=Bn;break;case`focusout`:u=`blur`,c=Bn;break;case`beforeblur`:case`afterblur`:c=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Zn;break;case Xr:case Zr:case Qr:c=Vn;break;case ni:c=Qn;break;case`scroll`:case`scrollend`:c=Nn;break;case`wheel`:c=$n;break;case`copy`:case`cut`:case`paste`:c=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Xn;break;case`toggle`:case`beforetoggle`:c=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Tt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Dt(c),h=u==null?s:Dt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Dt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=br;else if(mr(s))if(xr)v=Ar;else{v=Or;var y=Dr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Zt(s,`number`,s.value)}switch(y=r?Dt(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(o,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(o,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[_t]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}en(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Ot(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,kt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),kt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,kt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),kt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=gi,e):gi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=N(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=pi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.5`)throw Error(s(527,Lp,`19.2.5`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Xs,a=Zs,o=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c();function d(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function f(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function p(e){let t,n,r;e.length===2?(t=e===d||e===f?e:m,n=e,r=e):(t=d,n=(t,n)=>d(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function m(){return 0}function h(e){return e===null?NaN:+e}function*g(e,t){if(t===void 0)for(let t of e)t!=null&&(t=+t)>=t&&(yield t);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}var _=p(d),v=_.right;_.left,p(h).center;function y(e,t){let n=0;if(t===void 0)for(let t of e)t!=null&&(t=+t)>=t&&++n;else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(i=+i)>=i&&++n}return n}function b(e,t){let n,r;if(t===void 0)for(let t of e)t!=null&&(n===void 0?t>=t&&(n=r=t):(n>t&&(n=t),r<t&&(r=t)));else{let i=-1;for(let a of e)(a=t(a,++i,e))!=null&&(n===void 0?a>=a&&(n=r=a):(n>a&&(n=a),r<a&&(r=a)))}return[n,r]}var x=class extends Map{constructor(e,t=ee){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(S(this,e))}has(e){return super.has(S(this,e))}set(e,t){return super.set(C(this,e),t)}delete(e){return super.delete(w(this,e))}};function S({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function C({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function w({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function ee(e){return typeof e==`object`&&e?e.valueOf():e}function T(e){return e}function te(e,...t){return re(e,T,T,t)}function ne(e,t,...n){return re(e,T,t,n)}function re(e,t,n,r){return(function e(i,a){if(a>=r.length)return n(i);let o=new x,s=r[a++],c=-1;for(let e of i){let t=s(e,++c,i),n=o.get(t);n?n.push(e):o.set(t,[e])}for(let[t,n]of o)o.set(t,e(n,a));return t(o)})(e,0)}function ie(e=d){if(e===d)return ae;if(typeof e!=`function`)throw TypeError(`compare is not a function`);return(t,n)=>{let r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function ae(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:+(e>t))}var oe=Array.prototype,se=oe.slice;oe.map;function ce(e){return()=>e}var le=Math.sqrt(50),E=Math.sqrt(10),D=Math.sqrt(2);function ue(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=le?10:a>=E?5:a>=D?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?ue(e,t,n*2):[s,c,l]}function de(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?ue(t,e,n):ue(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r)if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o;else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function fe(e,t,n){return t=+t,e=+e,n=+n,ue(e,t,n)[2]}function pe(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?fe(t,e,n):fe(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function me(e,t,n){let r;for(;;){let i=fe(e,t,n);if(i===r||i===0||!isFinite(i))return[e,t];i>0?(e=Math.floor(e/i)*i,t=Math.ceil(t/i)*i):i<0&&(e=Math.ceil(e*i)/i,t=Math.floor(t*i)/i),r=i}}function O(e){return Math.max(1,Math.ceil(Math.log(y(e))/Math.LN2)+1)}function he(){var e=T,t=b,n=O;function r(r){Array.isArray(r)||(r=Array.from(r));var i,a=r.length,o,s,c=Array(a);for(i=0;i<a;++i)c[i]=e(r[i],i,r);var l=t(c),u=l[0],d=l[1],f=n(c,u,d);if(!Array.isArray(f)){let e=d,n=+f;if(t===b&&([u,d]=me(u,d,n)),f=de(u,d,n),f[0]<=u&&(s=fe(u,d,n)),f[f.length-1]>=d)if(e>=d&&t===b){let e=fe(u,d,n);isFinite(e)&&(e>0?d=(Math.floor(d/e)+1)*e:e<0&&(d=(Math.ceil(d*-e)+1)/-e))}else f.pop()}for(var p=f.length,m=0,h=p;f[m]<=u;)++m;for(;f[h-1]>d;)--h;(m||h<p)&&(f=f.slice(m,h),p=h-m);var g=Array(p+1),_;for(i=0;i<=p;++i)_=g[i]=[],_.x0=i>0?f[i-1]:u,_.x1=i<p?f[i]:d;if(isFinite(s)){if(s>0)for(i=0;i<a;++i)(o=c[i])!=null&&u<=o&&o<=d&&g[Math.min(p,Math.floor((o-u)/s))].push(r[i]);else if(s<0){for(i=0;i<a;++i)if((o=c[i])!=null&&u<=o&&o<=d){let e=Math.floor((u-o)*s);g[Math.min(p,e+(f[e]<=o))].push(r[i])}}}else for(i=0;i<a;++i)(o=c[i])!=null&&u<=o&&o<=d&&g[v(f,o,0,p)].push(r[i]);return g}return r.value=function(t){return arguments.length?(e=typeof t==`function`?t:ce(t),r):e},r.domain=function(e){return arguments.length?(t=typeof e==`function`?e:ce([e[0],e[1]]),r):t},r.thresholds=function(e){return arguments.length?(n=typeof e==`function`?e:ce(Array.isArray(e)?se.call(e):e),r):n},r}function ge(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n<t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function _e(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n>t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function ve(e,t,n=0,r=1/0,i){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(i=i===void 0?ae:ie(i);r>n;){if(r-n>600){let a=r-n+1,o=t-n+1,s=Math.log(a),c=.5*Math.exp(2*s/3),l=.5*Math.sqrt(s*c*(a-c)/a)*(o-a/2<0?-1:1),u=Math.max(n,Math.floor(t-o*c/a+l)),d=Math.min(r,Math.floor(t+(a-o)*c/a+l));ve(e,t,u,d,i)}let a=e[t],o=n,s=r;for(ye(e,n,t),i(e[r],a)>0&&ye(e,n,r);o<s;){for(ye(e,o,s),++o,--s;i(e[o],a)<0;)++o;for(;i(e[s],a)>0;)--s}i(e[n],a)===0?ye(e,n,s):(++s,ye(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}return e}function ye(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function be(e,t,n){if(e=Float64Array.from(g(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return _e(e);if(t>=1)return ge(e);var r,i=(r-1)*t,a=Math.floor(i),o=ge(ve(e,a).subarray(0,a+1));return o+(_e(e.subarray(a+1))-o)*(i-a)}}function xe(e,t){let n=0,r=0;if(t===void 0)for(let t of e)t!=null&&(t=+t)>=t&&(++n,r+=t);else{let i=-1;for(let a of e)(a=t(a,++i,e))!=null&&(a=+a)>=a&&(++n,r+=a)}if(n)return r/n}function Se(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=Math.max(0,Math.ceil((t-e)/n))|0,a=Array(i);++r<i;)a[r]=e+r*n;return a}function Ce(e){return e}var we=1,Te=2,Ee=3,De=4,Oe=1e-6;function ke(e){return`translate(`+e+`,0)`}function Ae(e){return`translate(0,`+e+`)`}function je(e){return t=>+e(t)}function Me(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function Ne(){return!this.__axis}function Pe(e,t){var n=[],r=null,i=null,a=6,o=6,s=3,c=typeof window<`u`&&window.devicePixelRatio>1?0:.5,l=e===we||e===De?-1:1,u=e===De||e===Te?`x`:`y`,d=e===we||e===Ee?ke:Ae;function f(f){var p=r??(t.ticks?t.ticks.apply(t,n):t.domain()),m=i??(t.tickFormat?t.tickFormat.apply(t,n):Ce),h=Math.max(a,0)+s,g=t.range(),_=+g[0]+c,v=+g[g.length-1]+c,y=(t.bandwidth?Me:je)(t.copy(),c),b=f.selection?f.selection():f,x=b.selectAll(`.domain`).data([null]),S=b.selectAll(`.tick`).data(p,t).order(),C=S.exit(),w=S.enter().append(`g`).attr(`class`,`tick`),ee=S.select(`line`),T=S.select(`text`);x=x.merge(x.enter().insert(`path`,`.tick`).attr(`class`,`domain`).attr(`stroke`,`currentColor`)),S=S.merge(w),ee=ee.merge(w.append(`line`).attr(`stroke`,`currentColor`).attr(u+`2`,l*a)),T=T.merge(w.append(`text`).attr(`fill`,`currentColor`).attr(u,l*h).attr(`dy`,e===we?`0em`:e===Ee?`0.71em`:`0.32em`)),f!==b&&(x=x.transition(f),S=S.transition(f),ee=ee.transition(f),T=T.transition(f),C=C.transition(f).attr(`opacity`,Oe).attr(`transform`,function(e){return isFinite(e=y(e))?d(e+c):this.getAttribute(`transform`)}),w.attr(`opacity`,Oe).attr(`transform`,function(e){var t=this.parentNode.__axis;return d((t&&isFinite(t=t(e))?t:y(e))+c)})),C.remove(),x.attr(`d`,e===De||e===Te?o?`M`+l*o+`,`+_+`H`+c+`V`+v+`H`+l*o:`M`+c+`,`+_+`V`+v:o?`M`+_+`,`+l*o+`V`+c+`H`+v+`V`+l*o:`M`+_+`,`+c+`H`+v),S.attr(`opacity`,1).attr(`transform`,function(e){return d(y(e)+c)}),ee.attr(u+`2`,l*a),T.attr(u,l*h).text(m),b.filter(Ne).attr(`fill`,`none`).attr(`font-size`,10).attr(`font-family`,`sans-serif`).attr(`text-anchor`,e===Te?`start`:e===De?`end`:`middle`),b.each(function(){this.__axis=y})}return f.scale=function(e){return arguments.length?(t=e,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(e){return arguments.length?(n=e==null?[]:Array.from(e),f):n.slice()},f.tickValues=function(e){return arguments.length?(r=e==null?null:Array.from(e),f):r&&r.slice()},f.tickFormat=function(e){return arguments.length?(i=e,f):i},f.tickSize=function(e){return arguments.length?(a=o=+e,f):a},f.tickSizeInner=function(e){return arguments.length?(a=+e,f):a},f.tickSizeOuter=function(e){return arguments.length?(o=+e,f):o},f.tickPadding=function(e){return arguments.length?(s=+e,f):s},f.offset=function(e){return arguments.length?(c=+e,f):c},f}function Fe(e){return Pe(Ee,e)}function Ie(e){return Pe(De,e)}var Le={value:()=>{}};function Re(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new ze(n)}function ze(e){this._=e}function Be(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}ze.prototype=Re.prototype={constructor:ze,on:function(e,t){var n=this._,r=Be(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=Ve(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=He(n[i],e.name,t);else if(t==null)for(i in n)n[i]=He(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ze(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function Ve(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function He(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=Le,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ue={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function We(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),Ue.hasOwnProperty(t)?{space:Ue[t],local:e}:e}function Ge(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function Ke(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function qe(e){var t=We(e);return(t.local?Ke:Ge)(t)}function Je(){}function Ye(e){return e==null?Je:function(){return this.querySelector(e)}}function Xe(e){typeof e!=`function`&&(e=Ye(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new zn(r,this._parents)}function Ze(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Qe(){return[]}function $e(e){return e==null?Qe:function(){return this.querySelectorAll(e)}}function et(e){return function(){return Ze(e.apply(this,arguments))}}function tt(e){e=typeof e==`function`?et(e):$e(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new zn(r,i)}function nt(e){return function(){return this.matches(e)}}function rt(e){return function(t){return t.matches(e)}}var it=Array.prototype.find;function at(e){return function(){return it.call(this.children,e)}}function ot(){return this.firstElementChild}function st(e){return this.select(e==null?ot:at(typeof e==`function`?e:rt(e)))}var ct=Array.prototype.filter;function lt(){return Array.from(this.children)}function ut(e){return function(){return ct.call(this.children,e)}}function dt(e){return this.selectAll(e==null?lt:ut(typeof e==`function`?e:rt(e)))}function ft(e){typeof e!=`function`&&(e=nt(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new zn(r,this._parents)}function pt(e){return Array(e.length)}function mt(){return new zn(this._enter||this._groups.map(pt),this._parents)}function ht(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}ht.prototype={constructor:ht,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function gt(e){return function(){return e}}function _t(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new ht(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function vt(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new ht(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function yt(e){return e.__data__}function bt(e,t){if(!arguments.length)return Array.from(this,yt);var n=t?vt:_t,r=this._parents,i=this._groups;typeof e!=`function`&&(e=gt(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=xt(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new zn(o,r),o._enter=s,o._exit=c,o}function xt(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function St(){return new zn(this._exit||this._groups.map(pt),this._parents)}function Ct(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function wt(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new zn(s,this._parents)}function Tt(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Et(e){e||=Dt;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new zn(i,this._parents).order()}function Dt(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ot(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function kt(){return Array.from(this)}function At(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function jt(){let e=0;for(let t of this)++e;return e}function Mt(){return!this.node()}function Nt(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function Pt(e){return function(){this.removeAttribute(e)}}function Ft(e){return function(){this.removeAttributeNS(e.space,e.local)}}function It(e,t){return function(){this.setAttribute(e,t)}}function Lt(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Rt(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function zt(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function Bt(e,t){var n=We(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Ft:Pt:typeof t==`function`?n.local?zt:Rt:n.local?Lt:It)(n,t))}function Vt(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Ht(e){return function(){this.style.removeProperty(e)}}function Ut(e,t,n){return function(){this.style.setProperty(e,t,n)}}function Wt(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Gt(e,t,n){return arguments.length>1?this.each((t==null?Ht:typeof t==`function`?Wt:Ut)(e,t,n??``)):Kt(this.node(),e)}function Kt(e,t){return e.style.getPropertyValue(t)||Vt(e).getComputedStyle(e,null).getPropertyValue(t)}function qt(e){return function(){delete this[e]}}function Jt(e,t){return function(){this[e]=t}}function Yt(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Xt(e,t){return arguments.length>1?this.each((t==null?qt:typeof t==`function`?Yt:Jt)(e,t)):this.node()[e]}function Zt(e){return e.trim().split(/^|\s+/)}function Qt(e){return e.classList||new $t(e)}function $t(e){this._node=e,this._names=Zt(e.getAttribute(`class`)||``)}$t.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function en(e,t){for(var n=Qt(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function tn(e,t){for(var n=Qt(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function nn(e){return function(){en(this,e)}}function rn(e){return function(){tn(this,e)}}function an(e,t){return function(){(t.apply(this,arguments)?en:tn)(this,e)}}function on(e,t){var n=Zt(e+``);if(arguments.length<2){for(var r=Qt(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?an:t?nn:rn)(n,t))}function sn(){this.textContent=``}function cn(e){return function(){this.textContent=e}}function ln(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function un(e){return arguments.length?this.each(e==null?sn:(typeof e==`function`?ln:cn)(e)):this.node().textContent}function dn(){this.innerHTML=``}function fn(e){return function(){this.innerHTML=e}}function pn(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function mn(e){return arguments.length?this.each(e==null?dn:(typeof e==`function`?pn:fn)(e)):this.node().innerHTML}function hn(){this.nextSibling&&this.parentNode.appendChild(this)}function gn(){return this.each(hn)}function _n(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function vn(){return this.each(_n)}function yn(e){var t=typeof e==`function`?e:qe(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function bn(){return null}function xn(e,t){var n=typeof e==`function`?e:qe(e),r=t==null?bn:typeof t==`function`?t:Ye(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Sn(){var e=this.parentNode;e&&e.removeChild(this)}function Cn(){return this.each(Sn)}function wn(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Tn(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function En(e){return this.select(e?Tn:wn)}function Dn(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function On(e){return function(t){e.call(this,t,this.__data__)}}function kn(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function An(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function jn(e,t,n){return function(){var r=this.__on,i,a=On(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function Mn(e,t,n){var r=kn(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?jn:An,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function Nn(e,t,n){var r=Vt(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Pn(e,t){return function(){return Nn(this,e,t)}}function Fn(e,t){return function(){return Nn(this,e,t.apply(this,arguments))}}function In(e,t){return this.each((typeof t==`function`?Fn:Pn)(e,t))}function*Ln(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var Rn=[null];function zn(e,t){this._groups=e,this._parents=t}function Bn(){return new zn([[document.documentElement]],Rn)}function Vn(){return this}zn.prototype=Bn.prototype={constructor:zn,select:Xe,selectAll:tt,selectChild:st,selectChildren:dt,filter:ft,data:bt,enter:mt,exit:St,join:Ct,merge:wt,selection:Vn,order:Tt,sort:Et,call:Ot,nodes:kt,node:At,size:jt,empty:Mt,each:Nt,attr:Bt,style:Gt,property:Xt,classed:on,text:un,html:mn,raise:gn,lower:vn,append:yn,insert:xn,remove:Cn,clone:En,datum:Dn,on:Mn,dispatch:In,[Symbol.iterator]:Ln};function Hn(e){return typeof e==`string`?new zn([[document.querySelector(e)]],[document.documentElement]):new zn([[e]],Rn)}function Un(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Wn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Gn(){}var Kn=.7,qn=1/Kn,Jn=`\\s*([+-]?\\d+)\\s*`,Yn=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,Xn=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,Zn=/^#([0-9a-f]{3,8})$/,Qn=RegExp(`^rgb\\(${Jn},${Jn},${Jn}\\)$`),$n=RegExp(`^rgb\\(${Xn},${Xn},${Xn}\\)$`),er=RegExp(`^rgba\\(${Jn},${Jn},${Jn},${Yn}\\)$`),tr=RegExp(`^rgba\\(${Xn},${Xn},${Xn},${Yn}\\)$`),nr=RegExp(`^hsl\\(${Yn},${Xn},${Xn}\\)$`),rr=RegExp(`^hsla\\(${Yn},${Xn},${Xn},${Yn}\\)$`),ir={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Un(Gn,lr,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:ar,formatHex:ar,formatHex8:or,formatHsl:sr,formatRgb:cr,toString:cr});function ar(){return this.rgb().formatHex()}function or(){return this.rgb().formatHex8()}function sr(){return Sr(this).formatHsl()}function cr(){return this.rgb().formatRgb()}function lr(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=Zn.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ur(t):n===3?new mr(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?dr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?dr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Qn.exec(e))?new mr(t[1],t[2],t[3],1):(t=$n.exec(e))?new mr(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=er.exec(e))?dr(t[1],t[2],t[3],t[4]):(t=tr.exec(e))?dr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=nr.exec(e))?xr(t[1],t[2]/100,t[3]/100,1):(t=rr.exec(e))?xr(t[1],t[2]/100,t[3]/100,t[4]):ir.hasOwnProperty(e)?ur(ir[e]):e===`transparent`?new mr(NaN,NaN,NaN,0):null}function ur(e){return new mr(e>>16&255,e>>8&255,e&255,1)}function dr(e,t,n,r){return r<=0&&(e=t=n=NaN),new mr(e,t,n,r)}function fr(e){return e instanceof Gn||(e=lr(e)),e?(e=e.rgb(),new mr(e.r,e.g,e.b,e.opacity)):new mr}function pr(e,t,n,r){return arguments.length===1?fr(e):new mr(e,t,n,r??1)}function mr(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Un(mr,pr,Wn(Gn,{brighter(e){return e=e==null?qn:qn**+e,new mr(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Kn:Kn**+e,new mr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new mr(yr(this.r),yr(this.g),yr(this.b),vr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:hr,formatHex:hr,formatHex8:gr,formatRgb:_r,toString:_r}));function hr(){return`#${br(this.r)}${br(this.g)}${br(this.b)}`}function gr(){return`#${br(this.r)}${br(this.g)}${br(this.b)}${br((isNaN(this.opacity)?1:this.opacity)*255)}`}function _r(){let e=vr(this.opacity);return`${e===1?`rgb(`:`rgba(`}${yr(this.r)}, ${yr(this.g)}, ${yr(this.b)}${e===1?`)`:`, ${e})`}`}function vr(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function yr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function br(e){return e=yr(e),(e<16?`0`:``)+e.toString(16)}function xr(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new wr(e,t,n,r)}function Sr(e){if(e instanceof wr)return new wr(e.h,e.s,e.l,e.opacity);if(e instanceof Gn||(e=lr(e)),!e)return new wr;if(e instanceof wr)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new wr(o,s,c,e.opacity)}function Cr(e,t,n,r){return arguments.length===1?Sr(e):new wr(e,t,n,r??1)}function wr(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Un(wr,Cr,Wn(Gn,{brighter(e){return e=e==null?qn:qn**+e,new wr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Kn:Kn**+e,new wr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new mr(Dr(e>=240?e-240:e+120,i,r),Dr(e,i,r),Dr(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new wr(Tr(this.h),Er(this.s),Er(this.l),vr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=vr(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Tr(this.h)}, ${Er(this.s)*100}%, ${Er(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Tr(e){return e=(e||0)%360,e<0?e+360:e}function Er(e){return Math.max(0,Math.min(1,e||0))}function Dr(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Or=e=>()=>e;function kr(e,t){return function(n){return e+n*t}}function Ar(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function jr(e){return(e=+e)==1?Mr:function(t,n){return n-t?Ar(t,n,e):Or(isNaN(t)?n:t)}}function Mr(e,t){var n=t-e;return n?kr(e,n):Or(isNaN(e)?t:e)}var Nr=(function e(t){var n=jr(t);function r(e,t){var r=n((e=pr(e)).r,(t=pr(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=Mr(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function Pr(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function Fr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ir(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o;for(o=0;o<r;++o)i[o]=Gr(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function Lr(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Rr(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function zr(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=Gr(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var Br=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Vr=new RegExp(Br.source,`g`);function Hr(e){return function(){return e}}function Ur(e){return function(t){return e(t)+``}}function Wr(e,t){var n=Br.lastIndex=Vr.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Br.exec(e))&&(i=Vr.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Rr(r,i)})),n=Vr.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?Ur(c[0].x):Hr(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function Gr(e,t){var n=typeof t,r;return t==null||n===`boolean`?Or(t):(n===`number`?Rr:n===`string`?(r=lr(t))?(t=r,Nr):Wr:t instanceof lr?Nr:t instanceof Date?Lr:Fr(t)?Pr:Array.isArray(t)?Ir:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?zr:Rr)(e,t)}function Kr(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var qr=180/Math.PI,Jr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Yr(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*qr,skewX:Math.atan(c)*qr,scaleX:o,scaleY:s}}var Xr;function Zr(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?Jr:Yr(t.a,t.b,t.c,t.d,t.e,t.f)}function Qr(e){return e==null||(Xr||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),Xr.setAttribute(`transform`,e),!(e=Xr.transform.baseVal.consolidate()))?Jr:(e=e.matrix,Yr(e.a,e.b,e.c,e.d,e.e,e.f))}function $r(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:Rr(e,i)},{i:c-2,x:Rr(r,a)})}else (i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:Rr(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:Rr(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:Rr(e,n)},{i:s-2,x:Rr(t,r)})}else (n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var ei=$r(Zr,`px, `,`px)`,`deg)`),ti=$r(Qr,`, `,`)`,`)`),ni=0,ri=0,ii=0,ai=1e3,oi,si,ci=0,li=0,ui=0,di=typeof performance==`object`&&performance.now?performance:Date,fi=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function pi(){return li||=(fi(mi),di.now()+ui)}function mi(){li=0}function hi(){this._call=this._time=this._next=null}hi.prototype=gi.prototype={constructor:hi,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?pi():+n)+(t==null?0:+t),!this._next&&si!==this&&(si?si._next=this:oi=this,si=this),this._call=e,this._time=n,xi()},stop:function(){this._call&&(this._call=null,this._time=1/0,xi())}};function gi(e,t,n){var r=new hi;return r.restart(e,t,n),r}function _i(){pi(),++ni;for(var e=oi,t;e;)(t=li-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ni}function vi(){li=(ci=di.now())+ui,ni=ri=0;try{_i()}finally{ni=0,bi(),li=0}}function yi(){var e=di.now(),t=e-ci;t>ai&&(ui-=t,ci=e)}function bi(){for(var e,t=oi,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:oi=n);si=e,xi(r)}function xi(e){ni||(ri&&=clearTimeout(ri),e-li>24?(e<1/0&&(ri=setTimeout(vi,e-di.now()-ui)),ii&&=clearInterval(ii)):(ii||=(ci=di.now(),setInterval(yi,ai)),ni=1,fi(vi)))}function Si(e,t,n){var r=new hi;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var Ci=Re(`start`,`end`,`cancel`,`interrupt`),wi=[];function Ti(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;Oi(e,n,{name:t,index:r,group:i,on:Ci,tween:wi,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function Ei(e,t){var n=k(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Di(e,t){var n=k(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function k(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function Oi(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=gi(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Si(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Si(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function ki(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function Ai(e){return this.each(function(){ki(this,e)})}function ji(e,t){var n,r;return function(){var i=Di(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Mi(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Di(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Ni(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=k(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?ji:Mi)(n,e,t))}function Pi(e,t,n){var r=e._id;return e.each(function(){var e=Di(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return k(e,r).value[t]}}function Fi(e,t){var n;return(typeof t==`number`?Rr:t instanceof lr?Nr:(n=lr(t))?(t=n,Nr):Wr)(e,t)}function Ii(e){return function(){this.removeAttribute(e)}}function Li(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Ri(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function zi(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function Bi(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function Vi(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function Hi(e,t){var n=We(e),r=n===`transform`?ti:Fi;return this.attrTween(e,typeof t==`function`?(n.local?Vi:Bi)(n,r,Pi(this,`attr.`+e,t)):t==null?(n.local?Li:Ii)(n):(n.local?zi:Ri)(n,r,t))}function A(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function j(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Ui(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&j(e,i)),n}return i._value=t,i}function Wi(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&A(e,i)),n}return i._value=t,i}function Gi(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=We(e);return this.tween(n,(r.local?Ui:Wi)(r,t))}function Ki(e,t){return function(){Ei(this,e).delay=+t.apply(this,arguments)}}function qi(e,t){return t=+t,function(){Ei(this,e).delay=t}}function Ji(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Ki:qi)(t,e)):k(this.node(),t).delay}function Yi(e,t){return function(){Di(this,e).duration=+t.apply(this,arguments)}}function Xi(e,t){return t=+t,function(){Di(this,e).duration=t}}function Zi(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?Yi:Xi)(t,e)):k(this.node(),t).duration}function Qi(e,t){if(typeof t!=`function`)throw Error();return function(){Di(this,e).ease=t}}function $i(e){var t=this._id;return arguments.length?this.each(Qi(t,e)):k(this.node(),t).ease}function ea(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Di(this,e).ease=n}}function ta(e){if(typeof e!=`function`)throw Error();return this.each(ea(this._id,e))}function na(e){typeof e!=`function`&&(e=nt(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Aa(r,this._parents,this._name,this._id)}function ra(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Aa(o,this._parents,this._name,this._id)}function ia(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function aa(e,t,n){var r,i,a=ia(t)?Ei:Di;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function oa(e,t){var n=this._id;return arguments.length<2?k(this.node(),n).on.on(e):this.each(aa(n,e,t))}function sa(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ca(){return this.on(`end.remove`,sa(this._id))}function la(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Ye(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Ti(l[f],t,n,f,l,k(u,n)));return new Aa(a,this._parents,t,n)}function ua(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=$e(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=k(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Ti(p,t,n,h,f,m);a.push(f),o.push(u)}return new Aa(a,o,t,n)}var da=Bn.prototype.constructor;function fa(){return new da(this._groups,this._parents)}function pa(e,t){var n,r,i;return function(){var a=Kt(this,e),o=(this.style.removeProperty(e),Kt(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function ma(e){return function(){this.style.removeProperty(e)}}function M(e,t,n){var r,i=n+``,a;return function(){var o=Kt(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function ha(e,t,n){var r,i,a;return function(){var o=Kt(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),Kt(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function ga(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Di(this,e),l=c.on,u=c.value[a]==null?s||=ma(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function _a(e,t,n){var r=(e+=``)==`transform`?ei:Fi;return t==null?this.styleTween(e,pa(e,r)).on(`end.style.`+e,ma(e)):typeof t==`function`?this.styleTween(e,ha(e,r,Pi(this,`style.`+e,t))).each(ga(this._id,e)):this.styleTween(e,M(e,r,t),n).on(`end.style.`+e,null)}function va(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function ya(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&va(e,a,n)),r}return a._value=t,a}function ba(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,ya(e,t,n??``))}function xa(e){return function(){this.textContent=e}}function Sa(e){return function(){var t=e(this);this.textContent=t??``}}function Ca(e){return this.tween(`text`,typeof e==`function`?Sa(Pi(this,`text`,e)):xa(e==null?``:e+``))}function wa(e){return function(t){this.textContent=e.call(this,t)}}function Ta(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&wa(r)),t}return r._value=e,r}function Ea(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,Ta(e))}function Da(){for(var e=this._name,t=this._id,n=Ma(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=k(c,t);Ti(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Aa(r,this._parents,e,n)}function Oa(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Di(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var ka=0;function Aa(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function ja(e){return Bn().transition(e)}function Ma(){return++ka}var Na=Bn.prototype;Aa.prototype=ja.prototype={constructor:Aa,select:la,selectAll:ua,selectChild:Na.selectChild,selectChildren:Na.selectChildren,filter:na,merge:ra,selection:fa,transition:Da,call:Na.call,nodes:Na.nodes,node:Na.node,size:Na.size,empty:Na.empty,each:Na.each,on:oa,attr:Hi,attrTween:Gi,style:_a,styleTween:ba,text:Ca,textTween:Ea,remove:ca,tween:Ni,delay:Ji,duration:Zi,ease:$i,easeVarying:ta,end:Oa,[Symbol.iterator]:Na[Symbol.iterator]};function Pa(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Fa={time:null,delay:0,duration:250,ease:Pa};function Ia(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function La(e){var t,n;e instanceof Aa?(t=e._id,e=e._name):(t=Ma(),(n=Fa).time=pi(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Ti(c,e,t,l,o,n||Ia(c,t));return new Aa(r,this._parents,e,t)}Bn.prototype.interrupt=Ai,Bn.prototype.transition=La;var{abs:Ra,max:za,min:Ba}=Math;[`w`,`e`].map(Va),[`n`,`s`].map(Va),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(Va);function Va(e){return{type:e}}var Ha={},Ua={},Wa=34,Ga=10,Ka=13;function qa(e){return Function(`d`,`return {`+e.map(function(e,t){return JSON.stringify(e)+`: d[`+t+`] || ""`}).join(`,`)+`}`)}function Ja(e,t){var n=qa(e);return function(r,i){return t(n(r),i,e)}}function Ya(e){var t=Object.create(null),n=[];return e.forEach(function(e){for(var r in e)r in t||n.push(t[r]=r)}),n}function N(e,t){var n=e+``,r=n.length;return r<t?Array(t-r+1).join(0)+n:n}function Xa(e){return e<0?`-`+N(-e,6):e>9999?`+`+N(e,6):N(e,4)}function Za(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds();return isNaN(e)?`Invalid Date`:Xa(e.getUTCFullYear(),4)+`-`+N(e.getUTCMonth()+1,2)+`-`+N(e.getUTCDate(),2)+(i?`T`+N(t,2)+`:`+N(n,2)+`:`+N(r,2)+`.`+N(i,3)+`Z`:r?`T`+N(t,2)+`:`+N(n,2)+`:`+N(r,2)+`Z`:n||t?`T`+N(t,2)+`:`+N(n,2)+`Z`:``)}function Qa(e){var t=RegExp(`["`+e+`
\r]`),n=e.charCodeAt(0);function r(e,t){var n,r,a=i(e,function(e,i){if(n)return n(e,i-1);r=e,n=t?Ja(e,t):qa(e)});return a.columns=r||[],a}function i(e,t){var r=[],i=e.length,a=0,o=0,s,c=i<=0,l=!1;e.charCodeAt(i-1)===Ga&&--i,e.charCodeAt(i-1)===Ka&&--i;function u(){if(c)return Ua;if(l)return l=!1,Ha;var t,r=a,o;if(e.charCodeAt(r)===Wa){for(;a++<i&&e.charCodeAt(a)!==Wa||e.charCodeAt(++a)===Wa;);return(t=a)>=i?c=!0:(o=e.charCodeAt(a++))===Ga?l=!0:o===Ka&&(l=!0,e.charCodeAt(a)===Ga&&++a),e.slice(r+1,t-1).replace(/""/g,`"`)}for(;a<i;){if((o=e.charCodeAt(t=a++))===Ga)l=!0;else if(o===Ka)l=!0,e.charCodeAt(a)===Ga&&++a;else if(o!==n)continue;return e.slice(r,t)}return c=!0,e.slice(r,i)}for(;(s=u())!==Ua;){for(var d=[];s!==Ha&&s!==Ua;)d.push(s),s=u();t&&(d=t(d,o++))==null||r.push(d)}return r}function a(t,n){return t.map(function(t){return n.map(function(e){return u(t[e])}).join(e)})}function o(t,n){return n??=Ya(t),[n.map(u).join(e)].concat(a(t,n)).join(`
`)}function s(e,t){return t??=Ya(e),a(e,t).join(`
`)}function c(e){return e.map(l).join(`
`)}function l(t){return t.map(u).join(e)}function u(e){return e==null?``:e instanceof Date?Za(e):t.test(e+=``)?`"`+e.replace(/"/g,`""`)+`"`:e}return{parse:r,parseRows:i,format:o,formatBody:s,formatRows:c,formatRow:l,formatValue:u}}var $a=Qa(`,`),eo=$a.parse;$a.parseRows,$a.format,$a.formatBody,$a.formatRows,$a.formatRow,$a.formatValue;function to(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function no(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ro(e){return e=no(Math.abs(e)),e?e[1]:NaN}function io(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function ao(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var oo=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function so(e){if(!(t=oo.exec(e)))throw Error(`invalid format: `+e);var t;return new co({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}so.prototype=co.prototype;function co(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}co.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function lo(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(i+1):e}var uo;function fo(e,t){var n=no(e,t);if(!n)return uo=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(uo=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+no(e,Math.max(0,t+a-1))[0]}function po(e,t){var n=no(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var mo={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:to,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>po(e*100,t),r:po,s:fo,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ho(e){return e}var go=Array.prototype.map,P=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function _o(e){var t=e.grouping===void 0||e.thousands===void 0?ho:io(go.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?ho:ao(go.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=so(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):mo[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),S=mo[y],C=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function w(e){var n=b,r=x,o,l,p;if(y===`c`)r=S(e)+r,e=``;else{e=+e;var w=e<0||1/e<0;if(e=isNaN(e)?c:S(Math.abs(e),_),v&&(e=lo(e)),w&&+e==0&&f!==`+`&&(w=!1),n=(w?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&uo!==void 0?P[8+uo/3]:``)+r+(w&&f===`(`?`)`:``),C){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var ee=n.length+e.length+r.length,T=ee<h?Array(h-ee+1).join(u):``;switch(g&&m&&(e=t(T+e,T.length?h-r.length:1/0),T=``),d){case`<`:e=n+e+r+T;break;case`=`:e=n+T+e+r;break;case`^`:e=T.slice(0,ee=T.length>>1)+n+e+r+T.slice(ee);break;default:e=T+n+e+r;break}return a(e)}return w.toString=function(){return e+``},w}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(ro(t)/3)))*3,r=10**-n,i=l((e=so(e),e.type=`f`,e),{suffix:P[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var vo,F,I;L({thousands:`,`,grouping:[3],currency:[`$`,``]});function L(e){return vo=_o(e),F=vo.format,I=vo.formatPrefix,vo}function yo(e){return Math.max(0,-ro(Math.abs(e)))}function bo(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ro(t)/3)))*3-ro(Math.abs(e)))}function xo(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ro(t)-ro(e))+1}function So(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}var Co=Symbol(`implicit`);function wo(){var e=new x,t=[],n=[],r=Co;function i(i){let a=e.get(i);if(a===void 0){if(r!==Co)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new x;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return wo(t,n).unknown(r)},So.apply(i,arguments),i}function To(){var e=wo().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,o,s=!1,c=0,l=0,u=.5;delete e.unknown;function d(){var e=t().length,d=i<r,f=d?i:r,p=d?r:i;a=(p-f)/Math.max(1,e-c+l*2),s&&(a=Math.floor(a)),f+=(p-f-a*(e-c))*u,o=a*(1-c),s&&(f=Math.round(f),o=Math.round(o));var m=Se(e).map(function(e){return f+a*e});return n(d?m.reverse():m)}return e.domain=function(e){return arguments.length?(t(e),d()):t()},e.range=function(e){return arguments.length?([r,i]=e,r=+r,i=+i,d()):[r,i]},e.rangeRound=function(e){return[r,i]=e,r=+r,i=+i,s=!0,d()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(e){return arguments.length?(s=!!e,d()):s},e.padding=function(e){return arguments.length?(c=Math.min(1,l=+e),d()):c},e.paddingInner=function(e){return arguments.length?(c=Math.min(1,e),d()):c},e.paddingOuter=function(e){return arguments.length?(l=+e,d()):l},e.align=function(e){return arguments.length?(u=Math.max(0,Math.min(1,e)),d()):u},e.copy=function(){return To(t(),[r,i]).round(s).paddingInner(c).paddingOuter(l).align(u)},So.apply(d(),arguments)}function R(e){return function(){return e}}function Eo(e){return+e}var Do=[0,1];function Oo(e){return e}function ko(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:R(isNaN(t)?NaN:.5)}function Ao(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function jo(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=ko(i,r),a=n(o,a)):(r=ko(r,i),a=n(a,o)),function(e){return a(r(e))}}function Mo(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=ko(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=v(e,t,1,r)-1;return a[n](i[n](t))}}function No(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Po(){var e=Do,t=Do,n=Gr,r,i,a,o=Oo,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==Oo&&(o=Ao(e[0],e[n-1])),s=n>2?Mo:jo,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),Rr))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,Eo),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=Kr,u()},d.clamp=function(e){return arguments.length?(o=e?!0:Oo,u()):o!==Oo},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function z(){return Po()(Oo,Oo)}function Fo(e,t,n,r){var i=pe(e,t,n),a;switch(r=so(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=bo(i,o))&&(r.precision=a),I(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=xo(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=yo(i))&&(r.precision=a-(r.type===`%`)*2);break}return F(r)}function Io(e){var t=e.domain;return e.ticks=function(e){var n=t();return de(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return Fo(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-- >0;){if(l=fe(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function Lo(){var e=z();return e.copy=function(){return No(e,Lo())},So.apply(e,arguments),Io(e)}function Ro(e){for(var t=e.length/6|0,n=Array(t),r=0;r<t;)n[r]=`#`+e.slice(r*6,++r*6);return n}var zo=Ro(`1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf`);function Bo(e,t,n){this.k=e,this.x=t,this.y=n}Bo.prototype={constructor:Bo,scale:function(e){return e===1?this:new Bo(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Bo(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Vo=new Bo(1,0,0);Ho.prototype=Bo.prototype;function Ho(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Vo;return e.__zoom}var Uo=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),B=e(((e,t)=>{t.exports=Uo()}))();function Wo({data:e,selectedRange:t=[],onBinSelect:n}){let r=(0,l.useRef)();return(0,l.useEffect)(()=>{if(!e||e.length===0)return;let i={top:20,right:20,bottom:40,left:40},a=Hn(r.current);a.selectAll(`*`).remove();let o=e.map(e=>+e.age).filter(e=>!isNaN(e)&&e>0),s=Math.floor(_e(o)),c=Math.ceil(ge(o)),l=Lo().domain([s,c]).range([i.left,400-i.right]),u=he().domain([s,c]).thresholds(Se(s,c+1,1))(o),d=Lo().domain([0,ge(u,e=>e.length)]).nice().range([250-i.bottom,i.top]);a.append(`g`).attr(`transform`,`translate(0,${250-i.bottom})`).call(Fe(l).ticks(c-s).tickFormat(F(`d`))).append(`text`).attr(`x`,400/2).attr(`y`,35).attr(`fill`,`var(--text-h, #000)`).style(`text-anchor`,`middle`).text(`Age`),a.append(`g`).attr(`transform`,`translate(${i.left},0)`).call(Ie(d)).append(`text`).attr(`transform`,`rotate(-90)`).attr(`x`,-250/2).attr(`y`,-30).attr(`fill`,`var(--text-h, #000)`).style(`text-anchor`,`middle`).text(`Player Count`),a.append(`g`).selectAll(`rect`).data(u).join(`rect`).attr(`x`,e=>l(e.x0)+1).attr(`width`,e=>Math.max(0,l(e.x1)-l(e.x0)-1)).attr(`y`,e=>d(e.length)).attr(`height`,e=>250-i.bottom-d(e.length)).attr(`fill`,`var(--accent, #646cff)`).style(`opacity`,e=>!t||t.length===0||t.some(t=>t[0]===e.x0&&t[1]===e.x1)?1:.3).style(`cursor`,`pointer`).on(`click`,(e,t)=>{n([t.x0,t.x1])})},[e,t,n]),(0,B.jsx)(`svg`,{ref:r,width:400,height:250,style:{background:`transparent`}})}var Go=wo().domain([`CB`,`CDM`,`CM`,`GK`,`LB`,`LW`,`RB`,`RW`,`ST`]).range([`#1f77b4`,`#ff7f0e`,`#2ca02c`,`#d62728`,`#9467bd`,`#8c564b`,`#e377c2`,`#7f7f7f`,`#bcbd22`]);function Ko({data:e,fullData:t}){let n=(0,l.useRef)();return(0,l.useEffect)(()=>{if(!t||t.length===0){Hn(n.current).selectAll(`*`).remove();return}let r={top:20,right:20,bottom:60,left:40},i=Hn(n.current);i.selectAll(`*`).remove();let a=Array.from(new Set(t.map(e=>e.position))).sort(),o=ne(e||[],e=>e.length,e=>e.position),s=a.map(e=>({position:e,count:o.get(e)||0})),c=ge(s,e=>e.count)||10,l=To().domain(a).range([r.left,400-r.right]).padding(.1),u=Lo().domain([0,c]).nice().range([250-r.bottom,r.top]);i.append(`g`).attr(`transform`,`translate(0,${250-r.bottom})`).call(Fe(l)).selectAll(`text`).attr(`transform`,`translate(-10,0)rotate(-45)`).style(`text-anchor`,`end`).attr(`fill`,`var(--text-h, #000)`),i.append(`g`).attr(`transform`,`translate(${r.left},0)`).call(Ie(u)).append(`text`).attr(`transform`,`rotate(-90)`).attr(`x`,-250/2).attr(`y`,-30).attr(`fill`,`var(--text-h, #000)`).style(`text-anchor`,`middle`).text(`Player Count`),i.append(`g`).selectAll(`rect`).data(s).join(`rect`).attr(`x`,e=>l(e.position)).attr(`y`,e=>u(e.count)).attr(`width`,l.bandwidth()).attr(`height`,e=>250-r.bottom-u(e.count)).attr(`fill`,e=>Go(e.position)).transition().duration(300)},[e,t]),(0,B.jsx)(`svg`,{ref:n,width:400,height:250,style:{background:`transparent`}})}var qo={CB:`Center Back`,CDM:`Defensive Midfielder`,CM:`Central Midfielder`,GK:`Goalkeeper`,LB:`Left Back`,LW:`Left Winger`,RB:`Right Back`,RW:`Right Winger`,ST:`Striker`},Jo=Object.keys(qo),Yo=wo().domain(Jo).range([`#1f77b4`,`#ff7f0e`,`#2ca02c`,`#d62728`,`#9467bd`,`#8c564b`,`#e377c2`,`#7f7f7f`,`#bcbd22`]);function Xo(){return(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`,paddingLeft:`1rem`},children:[(0,B.jsx)(`h3`,{style:{margin:0,fontSize:`20px`,color:`#9ca3af`},children:`Position Legend`}),Jo.map(e=>(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,fontSize:`14px`,color:`#e5e7eb`,whiteSpace:`nowrap`},children:[(0,B.jsx)(`div`,{style:{width:`12px`,height:`12px`,backgroundColor:Yo(e),borderRadius:`2px`,flexShrink:0}}),(0,B.jsxs)(`span`,{children:[(0,B.jsx)(`strong`,{children:e}),` — `,qo[e]]})]},e))]})}function Zo({data:e,onSelect:t}){let n=(0,l.useRef)();return(0,l.useEffect)(()=>{let r=1100,i={top:45,right:150,bottom:75,left:90},a=Hn(n.current);if(a.selectAll(`*`).remove(),a.attr(`width`,r).attr(`height`,540).style(`display`,`block`).style(`margin`,`0 auto`),!e||e.length===0){a.append(`text`).attr(`x`,r/2).attr(`y`,540/2).attr(`text-anchor`,`middle`).attr(`fill`,`#9ca3af`).attr(`font-size`,`16px`).text(`Select a position and filters to display scouting targets.`),t([]);return}let o=e.map(e=>({player_id:e.player_id,player:e.player_name,age:+e.age,club:e.club,position:e.position,overall:+e.overall_rating,potential:+e.potential_rating,marketValue:+e.market_value_million_eur,contract:+e.contract_years_left,risk:e.transfer_risk_level,injury:e.injury_prone,score:+e.market_value_million_eur>0?(+e.overall_rating+ +e.potential_rating)/2/e.market_value_million_eur:0})).filter(e=>!isNaN(e.overall)&&!isNaN(e.marketValue));if(o.length===0){a.append(`text`).attr(`x`,r/2).attr(`y`,540/2).attr(`text-anchor`,`middle`).attr(`fill`,`#9ca3af`).attr(`font-size`,`16px`).text(`No valid players found for the selected filters.`),t([]);return}let s=new Set,c=Lo().domain(b(o,e=>e.overall)).nice().range([i.left,r-i.right]),l=Lo().domain([0,ge(o,e=>e.marketValue)]).nice().range([540-i.bottom,i.top]),u=wo().domain([`Low`,`Medium`,`High`]).range([`#2dd4bf`,`#a78bfa`,`#fb7185`]),f=o.map(e=>e.overall).sort(d),p=o.map(e=>e.marketValue).sort(d),m=be(f,.65),h=be(p,.35),g=ge(o,e=>e.overall);a.append(`rect`).attr(`x`,i.left).attr(`y`,i.top).attr(`width`,r-i.left-i.right).attr(`height`,540-i.top-i.bottom).attr(`fill`,`transparent`).on(`click`,()=>{s.clear(),_.attr(`opacity`,.75).attr(`stroke`,`#111827`).attr(`stroke-width`,.8).attr(`r`,6),t([])}),a.append(`rect`).attr(`x`,c(m)).attr(`y`,l(h)).attr(`width`,c(g)-c(m)).attr(`height`,l(0)-l(h)).attr(`fill`,`#2dd4bf`).attr(`opacity`,.08).attr(`pointer-events`,`none`),a.append(`text`).attr(`x`,c(m)+10).attr(`y`,l(h)+20).attr(`fill`,`#5eead4`).attr(`font-size`,`12px`).text(`Best value zone: high rating, lower value`),a.append(`g`).attr(`transform`,`translate(0, ${540-i.bottom})`).call(Fe(c)).selectAll(`text`).attr(`fill`,`#d1d5db`),a.append(`g`).attr(`transform`,`translate(${i.left}, 0)`).call(Ie(l)).selectAll(`text`).attr(`fill`,`#d1d5db`),a.selectAll(`.domain, .tick line`).attr(`stroke`,`#9ca3af`);let _=a.selectAll(`circle.player-dot`).data(o).enter().append(`circle`).attr(`class`,`player-dot`).attr(`cx`,e=>c(e.overall)).attr(`cy`,e=>l(e.marketValue)).attr(`r`,6).attr(`fill`,e=>u(e.risk)).attr(`opacity`,.75).attr(`stroke`,`#111827`).attr(`stroke-width`,.8).style(`cursor`,`pointer`).on(`click`,(e,n)=>{e.stopPropagation(),s.has(n.player_id)?s.delete(n.player_id):s.add(n.player_id);let r=o.filter(e=>s.has(e.player_id));_.attr(`opacity`,e=>s.size===0||s.has(e.player_id)?.9:.18).attr(`stroke`,e=>s.has(e.player_id)?`#ffffff`:`#111827`).attr(`stroke-width`,e=>s.has(e.player_id)?2.5:.8).attr(`r`,e=>s.has(e.player_id)?8:6),t(r)});_.append(`title`).text(e=>`${e.player}
Club: ${e.club}
Position: ${e.position}
Age: ${e.age}
Overall Rating: ${e.overall}
Potential Rating: ${e.potential}
Market Value: €${e.marketValue}M
Contract Years Left: ${e.contract}
Transfer Risk: ${e.risk}
Injury Prone: ${e.injury}
Value Score: ${e.score.toFixed(2)}`),a.append(`text`).attr(`x`,(r-i.right+i.left)/2).attr(`y`,515).attr(`text-anchor`,`middle`).attr(`fill`,`#d1d5db`).attr(`font-size`,`14px`).text(`Overall Rating`),a.append(`text`).attr(`transform`,`rotate(-90)`).attr(`x`,-540/2).attr(`y`,28).attr(`text-anchor`,`middle`).attr(`fill`,`#d1d5db`).attr(`font-size`,`14px`).text(`Market Value (Million €)`),a.append(`text`).attr(`x`,i.left).attr(`y`,24).attr(`fill`,`#9ca3af`).attr(`font-size`,`13px`).text(`Click players to compare them in the table. Click the empty chart area to clear selection.`);let v=[`Low`,`Medium`,`High`],y=a.append(`g`).attr(`transform`,`translate(${r-i.right+35}, ${i.top+20})`);y.append(`text`).attr(`x`,0).attr(`y`,-8).attr(`fill`,`#d1d5db`).attr(`font-size`,`13px`).attr(`font-weight`,`bold`).text(`Risk Level`),y.selectAll(`circle`).data(v).enter().append(`circle`).attr(`cx`,0).attr(`cy`,(e,t)=>t*28+14).attr(`r`,7).attr(`fill`,e=>u(e)),y.selectAll(`text.legend-label`).data(v).enter().append(`text`).attr(`class`,`legend-label`).attr(`x`,16).attr(`y`,(e,t)=>t*28+18).attr(`fill`,`#d1d5db`).attr(`font-size`,`12px`).text(e=>e)},[e,t]),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,width:`100%`},children:(0,B.jsx)(`svg`,{ref:n})})}function Qo({data:e}){let t=(0,l.useRef)(),[n,r]=(0,l.useState)(new Set),i=e=>{let t=new Set(n);t.has(e)?t.delete(e):t.add(e),r(t)},a=e=>{r(new Set(e))};(0,l.useEffect)(()=>{if(!e||e.length===0)return;let r=e.map(e=>({value:+e.market_value_million_eur,age:+e.age,position:e.position})).filter(e=>!isNaN(e.age)&&!isNaN(e.value)&&e.age>0&&e.value>0);if(r.length===0)return;let i=Array.from(new Set(r.map(e=>e.position))).sort(),a=te(r,e=>e.position,e=>e.age),o=[];a.forEach((e,t)=>{e.forEach((e,n)=>{let r=xe(e,e=>e.value),i=e.length;o.push({position:t,age:n,avgValue:r,count:i})})});let s=n.size===0?i:Array.from(n),c=o.filter(e=>s.includes(e.position));if(c.length===0)return;let l={top:20,right:150,bottom:50,left:60},u=Hn(t.current);u.selectAll(`*`).remove();let d=Hn(`body`).append(`div`).attr(`class`,`tooltip`).style(`position`,`absolute`).style(`background`,`black`).style(`color`,`white`).style(`padding`,`18px`).style(`border-radius`,`4px`).style(`font-size`,`12px`).style(`display`,`none`).style(`pointer-events`,`none`),f=Lo().domain([_e(c,e=>e.age)-1,ge(c,e=>e.age)+1]).range([l.left,800-l.right]),p=Lo().domain([0,ge(c,e=>e.avgValue)*1.1]).range([400-l.bottom,l.top]),m=wo().domain(i).range(zo);u.append(`g`).attr(`transform`,`translate(0,${400-l.bottom})`).call(Fe(f)).append(`text`).attr(`x`,800/2).attr(`y`,40).attr(`fill`,`var(--text-h, #000)`).style(`text-anchor`,`middle`).style(`font-size`,`14px`).text(`Age`),u.append(`g`).attr(`transform`,`translate(${l.left},0)`).call(Ie(p)).append(`text`).attr(`transform`,`rotate(-90)`).attr(`y`,0-l.left).attr(`x`,0-400/2).attr(`dy`,`1em`).attr(`fill`,`var(--text-h, #000)`).style(`text-anchor`,`middle`).style(`font-size`,`14px`).text(`Average Market Value (Million EUR)`),u.selectAll(`circle`).data(c).join(`circle`).attr(`cx`,e=>f(e.age)).attr(`cy`,e=>p(e.avgValue)).attr(`r`,6).attr(`fill`,e=>m(e.position)).attr(`opacity`,.7).style(`cursor`,`pointer`).on(`mouseover`,function(e,t){Hn(this).attr(`opacity`,1),d.style(`display`,`block`).html(`Average value of all ${t.position}s aged ${t.age}: €${Math.round(t.avgValue*100)/100} million`).style(`left`,`${e.pageX+10}px`).style(`top`,`${e.pageY-30}px`)}).on(`mouseout`,function(){Hn(this).attr(`opacity`,.7),d.style(`display`,`none`)});let h=u.append(`g`).attr(`transform`,`translate(${800-l.right+10}, ${l.top})`);s.forEach((e,t)=>{let n=h.append(`g`).attr(`transform`,`translate(0, ${t*20})`);n.append(`rect`).attr(`width`,12).attr(`height`,12).attr(`fill`,m(e)),n.append(`text`).attr(`x`,20).attr(`y`,10).attr(`fill`,`var(--text-h, #000)`).style(`font-size`,`12px`).text(e)})},[e,n]);let o=()=>!e||e.length===0?[]:Array.from(new Set(e.map(e=>e.position).filter(e=>e))).sort();return(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,B.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[(0,B.jsx)(`div`,{style:{marginBottom:`0.5rem`,display:`flex`,gap:`0.5rem`},children:(0,B.jsx)(`button`,{onClick:()=>a(o()),style:{padding:`6px 12px`,borderRadius:`4px`,border:`1px solid #374151`,backgroundColor:`#1f2937`,color:`#e5e7eb`,cursor:`pointer`,fontSize:`12px`},children:`All`})}),(0,B.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`0.5rem`},children:o().map(e=>(0,B.jsxs)(`label`,{style:{color:`#e5e7eb`,fontSize:`13px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`5px`,padding:`4px 8px`,border:n.size===0||n.has(e)?`1px solid #60a5fa`:`1px solid #374151`,borderRadius:`4px`,backgroundColor:n.size===0||n.has(e)?`#1e40af`:`transparent`},children:[(0,B.jsx)(`input`,{type:`checkbox`,checked:n.size===0||n.has(e),onChange:()=>i(e),style:{cursor:`pointer`}}),e]},e))})]}),(0,B.jsx)(`svg`,{ref:t,width:800,height:400,style:{background:`transparent`}})]})}function $o({data:e}){let t=(0,l.useRef)();return(0,l.useEffect)(()=>{let n=1100,r={top:50,right:170,bottom:80,left:90},i=Hn(t.current);i.selectAll(`*`).remove(),i.attr(`width`,n).attr(`height`,560).style(`display`,`block`).style(`margin`,`0 auto`);let a=new Set([`RW`,`LW`,`ST`]);if(!e||e.length===0){i.append(`text`).attr(`x`,n/2).attr(`y`,560/2).attr(`text-anchor`,`middle`).attr(`fill`,`#9ca3af`).attr(`font-size`,`16px`).text(`No player data available.`);return}let o=e.map(e=>({player_id:e.player_id,player:e.player_name,age:+e.age,club:e.club,position:e.position,goals:+e.goals,assists:+e.assists,marketValue:+e.market_value_million_eur,contribution:(+e.goals||0)+(+e.assists||0)})).filter(e=>a.has(e.position)&&!isNaN(e.contribution)&&!isNaN(e.marketValue)&&e.contribution>=0&&e.marketValue>0);if(o.length===0){i.append(`text`).attr(`x`,n/2).attr(`y`,560/2).attr(`text-anchor`,`middle`).attr(`fill`,`#9ca3af`).attr(`font-size`,`16px`).text(`No RW, LW, or ST players found with valid goals, assists, and market value.`);return}let s=ge(o,e=>e.contribution)??0,c=ge(o,e=>e.marketValue)??0,l=Lo().domain([0,s+1]).nice().range([r.left,n-r.right]),u=Lo().domain([0,c*1.1]).nice().range([560-r.bottom,r.top]),d=wo().domain([`RW`,`LW`,`ST`]).range([`#7f7f7f`,`#8c564b`,`#bcbd22`]),f=Hn(`body`).append(`div`).attr(`class`,`tooltip`).style(`position`,`absolute`).style(`background`,`rgba(17, 24, 39, 0.96)`).style(`color`,`#f9fafb`).style(`padding`,`12px 14px`).style(`border-radius`,`10px`).style(`font-size`,`12px`).style(`line-height`,`1.5`).style(`display`,`none`).style(`pointer-events`,`none`).style(`box-shadow`,`0 12px 30px rgba(0, 0, 0, 0.25)`);i.append(`rect`).attr(`x`,r.left).attr(`y`,r.top).attr(`width`,n-r.left-r.right).attr(`height`,560-r.top-r.bottom).attr(`fill`,`transparent`),i.append(`g`).attr(`transform`,`translate(0, ${560-r.bottom})`).call(Fe(l).ticks(8)).call(e=>e.selectAll(`text`).attr(`fill`,`#d1d5db`)).call(e=>e.selectAll(`path, line`).attr(`stroke`,`#4b5563`)),i.append(`g`).attr(`transform`,`translate(${r.left}, 0)`).call(Ie(u).ticks(8)).call(e=>e.selectAll(`text`).attr(`fill`,`#d1d5db`)).call(e=>e.selectAll(`path, line`).attr(`stroke`,`#4b5563`)),i.selectAll(`circle.player-point`).data(o).join(`circle`).attr(`class`,`player-point`).attr(`cx`,e=>l(e.contribution)).attr(`cy`,e=>u(e.marketValue)).attr(`r`,6).attr(`fill`,e=>d(e.position)).attr(`opacity`,.8).attr(`stroke`,`#111827`).attr(`stroke-width`,.9).style(`cursor`,`default`).on(`mouseover`,function(e,t){Hn(this).attr(`opacity`,1).attr(`r`,8),f.style(`display`,`block`).html(`<strong>${t.player}</strong><br/>${t.club} · ${t.position}<br/>Goals: ${t.goals}<br/>Assists: ${t.assists}<br/>Goal Contributions: ${t.contribution}<br/>Market Value: €${t.marketValue.toFixed(2)}M`).style(`left`,`${e.pageX+12}px`).style(`top`,`${e.pageY-28}px`)}).on(`mouseout`,function(){Hn(this).attr(`opacity`,.8).attr(`r`,6),f.style(`display`,`none`)}),i.append(`text`).attr(`x`,(n-r.right+r.left)/2).attr(`y`,535).attr(`text-anchor`,`middle`).attr(`fill`,`#d1d5db`).attr(`font-size`,`14px`).text(`Goals + Assists`),i.append(`text`).attr(`transform`,`rotate(-90)`).attr(`x`,-560/2).attr(`y`,28).attr(`text-anchor`,`middle`).attr(`fill`,`#d1d5db`).attr(`font-size`,`14px`).text(`Market Value (Million €)`),i.append(`text`).attr(`x`,r.left).attr(`y`,24).attr(`fill`,`#9ca3af`).attr(`font-size`,`13px`).text(`Attackers only: RW, LW, and ST.`);let p=i.append(`g`).attr(`transform`,`translate(${n-r.right+25}, ${r.top+10})`);return[`RW`,`LW`,`ST`].forEach((e,t)=>{let n=p.append(`g`).attr(`transform`,`translate(0, ${t*24})`);n.append(`rect`).attr(`width`,12).attr(`height`,12).attr(`rx`,3).attr(`fill`,d(e)),n.append(`text`).attr(`x`,18).attr(`y`,10).attr(`fill`,`#d1d5db`).attr(`font-size`,`12px`).text(e)}),()=>{f.remove()}},[e]),(0,B.jsx)(`svg`,{ref:t})}function es({data:e,selectedPlayers:t,selectedPosition:n}){let r=t.length>0?t.map(e=>({player:e.player,club:e.club,position:e.position,age:e.age,overall:e.overall,potential:e.potential,marketValue:e.marketValue,contract:e.contract,risk:e.risk,score:e.marketValue>0?(e.overall+e.potential)/2/e.marketValue:0})):e.map(e=>{let t=+e.overall_rating,n=+e.potential_rating,r=+e.market_value_million_eur;return{player:e.player_name,club:e.club,position:e.position,age:+e.age,overall:t,potential:n,marketValue:r,contract:+e.contract_years_left,risk:e.transfer_risk_level,score:r>0?(t+n)/2/r:0}}).sort((e,t)=>t.score-e.score).slice(0,10);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`p`,{style:{color:`#9ca3af`,fontSize:`14px`},children:t.length>0?`${t.length} selected player(s) from the scatterplot.`:n===`All`?`No players selected. Showing the top 10 best-value players across all positions.`:`No players selected. Showing the top 10 best-value players for position ${n}.`}),(0,B.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`13px`},children:[(0,B.jsx)(`thead`,{children:(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`th`,{style:ts,children:`Player`}),(0,B.jsx)(`th`,{style:ts,children:`Club`}),(0,B.jsx)(`th`,{style:ts,children:`Pos`}),(0,B.jsx)(`th`,{style:ts,children:`Age`}),(0,B.jsx)(`th`,{style:ts,children:`Rating`}),(0,B.jsx)(`th`,{style:ts,children:`Potential`}),(0,B.jsx)(`th`,{style:ts,children:`Value (€M)`}),(0,B.jsx)(`th`,{style:ts,children:`Contract`}),(0,B.jsx)(`th`,{style:ts,children:`Risk`}),(0,B.jsx)(`th`,{style:ts,children:`Score`})]})}),(0,B.jsx)(`tbody`,{children:r.map((e,t)=>(0,B.jsxs)(`tr`,{children:[(0,B.jsx)(`td`,{style:ns,children:e.player}),(0,B.jsx)(`td`,{style:ns,children:e.club}),(0,B.jsx)(`td`,{style:ns,children:e.position}),(0,B.jsx)(`td`,{style:ns,children:e.age}),(0,B.jsx)(`td`,{style:ns,children:e.overall}),(0,B.jsx)(`td`,{style:ns,children:e.potential}),(0,B.jsx)(`td`,{style:ns,children:e.marketValue.toFixed(1)}),(0,B.jsx)(`td`,{style:ns,children:e.contract}),(0,B.jsx)(`td`,{style:ns,children:e.risk}),(0,B.jsx)(`td`,{style:ns,children:e.score.toFixed(2)})]},t))})]})]})}var ts={borderBottom:`1px solid #374151`,padding:`8px`,color:`#d1d5db`,textAlign:`left`},ns={borderBottom:`1px solid #1f2937`,padding:`8px`,color:`#e5e7eb`},rs=`player_id,player_name,age,nationality,club,position,overall_rating,potential_rating,matches_played,goals,assists,minutes_played,market_value_million_eur,contract_years_left,injury_prone,transfer_risk_level
1,Player_1,23,Germany,Liverpool,ST,65,87,8,6,14,2976,122.51,3,No,Low
2,Player_2,36,England,FC Barcelona,ST,90,76,19,3,18,2609,88.47,5,No,High
3,Player_3,31,France,Juventus,RB,75,91,34,12,15,1158,20.24,3,No,Medium
4,Player_4,27,Portugal,Manchester City,LW,90,86,35,18,13,145,164.29,0,Yes,Medium
5,Player_5,24,Brazil,Liverpool,CDM,84,96,41,6,6,2226,121.34,4,No,Low
6,Player_6,37,Argentina,Manchester City,CM,92,91,35,9,7,263,98.51,5,Yes,Low
7,Player_7,23,Netherlands,Liverpool,RB,72,66,53,24,6,4299,67.69,1,No,Low
8,Player_8,35,Spain,Bayern Munich,LW,69,97,8,34,17,3101,24.71,0,No,Low
9,Player_9,39,Brazil,FC Barcelona,GK,83,90,21,24,23,2106,127.5,3,Yes,High
10,Player_10,27,England,Liverpool,LB,69,92,0,28,5,3080,146.55,1,No,High
11,Player_11,27,Spain,Bayern Munich,LB,90,83,4,11,18,987,23.08,0,No,High
12,Player_12,37,Argentina,PSG,ST,72,69,8,39,3,1347,89.27,2,No,Medium
13,Player_13,20,Argentina,Bayern Munich,LW,62,97,36,11,22,1360,87.53,5,No,Medium
14,Player_14,24,France,Real Madrid,CM,93,84,37,5,2,2838,63.31,5,No,High
15,Player_15,19,Spain,Liverpool,CM,87,94,18,9,16,1726,142.19,3,Yes,Medium
16,Player_16,38,France,Bayern Munich,RW,78,72,7,1,21,2289,18.37,0,Yes,Medium
17,Player_17,37,Brazil,Manchester City,LB,82,81,41,24,18,907,37.3,0,No,Medium
18,Player_18,18,Germany,PSG,RB,91,65,42,6,14,1183,0.79,3,Yes,Medium
19,Player_19,28,Germany,Juventus,LW,72,67,31,39,5,2824,67.45,2,Yes,Medium
20,Player_20,22,Germany,Liverpool,CM,92,90,12,22,11,1258,52.77,5,No,Medium
21,Player_21,18,Spain,Real Madrid,RW,93,95,19,10,18,198,156.13,4,Yes,Medium
22,Player_22,37,Germany,Juventus,LW,92,72,35,35,5,1056,134.37,2,Yes,High
23,Player_23,17,Brazil,Bayern Munich,CB,64,72,42,22,10,2455,15.66,3,No,Low
24,Player_24,28,France,Juventus,CM,62,92,43,6,19,3365,133.5,4,Yes,Medium
25,Player_25,38,Spain,Juventus,CB,66,68,36,26,19,1260,121.73,0,No,Low
26,Player_26,28,France,PSG,LW,83,80,29,12,9,3978,51.07,2,Yes,High
27,Player_27,33,Spain,Juventus,CM,81,77,9,16,15,2835,3.28,2,No,Low
28,Player_28,26,France,Juventus,CB,82,84,30,31,17,1313,21.17,5,No,Low
29,Player_29,32,Argentina,Liverpool,CDM,89,69,24,25,13,1902,45.36,5,No,High
30,Player_30,31,France,PSG,RW,77,84,28,21,3,3975,147.08,4,Yes,Medium
31,Player_31,31,Germany,Real Madrid,RB,91,88,23,12,11,577,84.02,0,No,Low
32,Player_32,35,Argentina,Bayern Munich,LB,66,98,38,11,19,4430,165.35,2,No,Low
33,Player_33,28,France,PSG,RW,92,98,20,6,22,1020,142.15,4,Yes,High
34,Player_34,39,Spain,PSG,CB,64,83,40,0,20,3653,52.04,2,Yes,Low
35,Player_35,36,Spain,FC Barcelona,CM,87,81,8,32,7,3844,152.24,5,No,Low
36,Player_36,19,Netherlands,PSG,CDM,67,69,41,13,6,3573,21.45,0,No,Medium
37,Player_37,21,Spain,FC Barcelona,CDM,74,89,41,16,8,2293,6.98,0,No,Medium
38,Player_38,35,England,Bayern Munich,LB,63,82,1,3,23,610,109.73,1,No,Medium
39,Player_39,23,Brazil,Juventus,CDM,93,72,3,38,24,328,61.84,4,Yes,Medium
40,Player_40,37,Spain,Liverpool,RW,64,91,7,0,16,546,59.63,5,No,High
41,Player_41,25,Argentina,Liverpool,CDM,92,79,31,23,9,338,123.85,5,No,High
42,Player_42,23,Netherlands,Bayern Munich,LB,64,77,13,33,2,3181,153.09,5,No,Medium
43,Player_43,34,Spain,Bayern Munich,CDM,93,80,48,33,20,3041,58.33,3,Yes,Low
44,Player_44,20,England,Manchester City,CDM,85,86,12,23,24,806,58.84,2,Yes,Medium
45,Player_45,30,Germany,Juventus,GK,60,84,20,14,7,1033,96.33,0,No,Medium
46,Player_46,34,Argentina,Bayern Munich,RW,63,77,23,16,13,3273,117.75,2,No,Medium
47,Player_47,25,England,PSG,CB,85,84,49,12,6,3987,36.92,2,No,Low
48,Player_48,37,Germany,Liverpool,ST,92,66,17,6,15,3333,164.33,3,No,Medium
49,Player_49,18,Portugal,Real Madrid,CDM,92,83,44,8,17,2740,117.97,0,No,High
50,Player_50,36,Portugal,Liverpool,RB,67,70,39,34,10,1696,112.72,1,No,Low
51,Player_51,31,Argentina,FC Barcelona,CDM,79,78,25,22,5,3650,162.8,5,No,Medium
52,Player_52,23,France,Liverpool,GK,75,68,31,38,19,2082,163.35,4,No,Medium
53,Player_53,28,Brazil,Manchester City,CB,80,86,43,22,20,1998,24.83,2,No,Low
54,Player_54,24,Netherlands,Juventus,RB,85,98,54,25,13,1685,26.54,3,Yes,Medium
55,Player_55,31,Brazil,Bayern Munich,RB,82,91,52,0,20,1603,137.27,3,Yes,Low
56,Player_56,19,England,Juventus,RW,77,71,32,13,12,4349,172.26,4,No,Medium
57,Player_57,30,Germany,Bayern Munich,LB,90,67,51,31,3,4112,120.14,4,No,Medium
58,Player_58,33,Brazil,Liverpool,LB,71,97,30,9,19,260,74.33,0,Yes,Medium
59,Player_59,20,Germany,Real Madrid,CB,60,66,17,0,19,3796,123.18,2,No,Low
60,Player_60,34,Germany,Real Madrid,LB,68,80,34,4,10,2775,41.57,2,No,Low
61,Player_61,24,England,Manchester City,LW,62,89,11,2,17,500,179.63,4,No,Medium
62,Player_62,20,England,FC Barcelona,GK,85,79,50,26,0,1015,77.88,5,No,Low
63,Player_63,18,England,Liverpool,ST,68,88,24,21,11,2333,167.74,1,Yes,Low
64,Player_64,22,Brazil,Bayern Munich,ST,75,79,44,17,17,2054,77.83,2,Yes,Low
65,Player_65,38,Portugal,Liverpool,RW,83,95,30,15,6,3963,167.1,3,No,Medium
66,Player_66,26,England,Manchester City,RW,73,78,9,1,11,3674,60.76,5,No,High
67,Player_67,20,Netherlands,PSG,ST,62,78,46,12,0,4055,137.02,4,No,High
68,Player_68,38,Brazil,PSG,LB,93,70,51,15,21,2706,171.2,2,Yes,Low
69,Player_69,34,England,Manchester City,CM,92,78,33,7,3,2099,116.45,0,No,Low
70,Player_70,28,Spain,Bayern Munich,LW,83,81,50,7,17,2565,122.12,4,No,Medium
71,Player_71,18,Germany,Juventus,CDM,68,82,2,9,14,3017,18.97,3,No,High
72,Player_72,26,Netherlands,Manchester City,CB,72,84,45,32,2,108,85.62,0,No,Low
73,Player_73,20,England,Bayern Munich,GK,61,81,38,30,6,3422,159.67,4,No,Low
74,Player_74,30,Argentina,Real Madrid,CM,66,80,7,11,5,65,43.74,4,No,Low
75,Player_75,32,Germany,Manchester City,LW,80,96,31,8,14,3081,142.01,2,No,Medium
76,Player_76,31,Germany,Bayern Munich,CDM,78,73,42,36,14,4297,121.79,0,No,Low
77,Player_77,24,England,Manchester City,RW,84,91,28,8,5,2948,40.53,4,No,High
78,Player_78,30,Portugal,Manchester City,LW,81,97,21,17,7,213,51.26,5,No,Medium
79,Player_79,39,France,Juventus,ST,70,74,19,29,7,4422,77.25,3,No,Low
80,Player_80,24,Portugal,Juventus,LW,92,81,5,31,21,1040,22.96,0,Yes,Low
81,Player_81,37,England,Bayern Munich,CB,91,81,42,39,0,987,164.45,5,No,Low
82,Player_82,32,Germany,Bayern Munich,RB,80,82,48,22,12,3195,133.21,2,No,Medium
83,Player_83,29,Netherlands,FC Barcelona,RW,79,87,28,10,22,503,66.01,1,No,Medium
84,Player_84,34,Argentina,Manchester City,GK,67,98,41,19,23,755,54.29,4,Yes,Low
85,Player_85,31,Netherlands,PSG,GK,68,72,16,18,20,1341,124.28,1,No,Medium
86,Player_86,37,Netherlands,Manchester City,LW,84,77,30,35,12,2588,76.65,4,No,Medium
87,Player_87,29,Germany,Manchester City,RB,84,87,52,25,10,1381,41.67,5,No,Low
88,Player_88,25,Portugal,Bayern Munich,CDM,92,84,33,9,3,2987,77.71,2,No,Low
89,Player_89,31,Argentina,Manchester City,CM,61,86,37,23,6,2844,156.9,2,No,Low
90,Player_90,29,Brazil,Liverpool,CDM,78,87,36,12,11,2519,12.81,2,No,Low
91,Player_91,17,Spain,Manchester City,CM,79,67,3,33,12,3726,66.62,2,No,Medium
92,Player_92,23,Germany,Liverpool,RB,88,98,1,28,21,1887,173.24,0,No,Low
93,Player_93,25,England,Juventus,CM,65,97,11,35,11,1323,3.16,0,No,Low
94,Player_94,17,Brazil,PSG,CB,76,81,34,6,15,3809,160.37,4,Yes,High
95,Player_95,28,Spain,Bayern Munich,LW,84,83,5,29,5,3747,67.78,0,No,Low
96,Player_96,24,England,Manchester City,CDM,63,94,45,16,13,2131,34.52,4,No,Low
97,Player_97,27,Netherlands,Liverpool,CB,89,87,7,12,18,2424,3.19,0,No,Medium
98,Player_98,35,France,Liverpool,CDM,79,79,20,23,15,3384,13.16,0,No,Low
99,Player_99,33,England,Juventus,LW,62,78,52,30,3,2251,31.35,0,No,Low
100,Player_100,24,Argentina,Liverpool,LB,82,66,45,26,4,1008,5.06,3,No,Medium
101,Player_101,19,Argentina,Real Madrid,CM,77,82,34,20,8,1317,60.79,2,No,High
102,Player_102,19,France,FC Barcelona,RB,85,70,47,0,23,3216,8.56,3,No,Low
103,Player_103,17,Brazil,PSG,LB,67,96,14,14,2,16,124.75,0,No,High
104,Player_104,21,Spain,Juventus,LB,76,85,6,2,21,1802,147.49,0,No,Medium
105,Player_105,26,England,Juventus,GK,90,92,14,5,9,2623,159.8,3,Yes,Medium
106,Player_106,23,Argentina,Manchester City,ST,92,91,44,13,16,129,99.07,5,Yes,Medium
107,Player_107,25,Brazil,Real Madrid,CB,86,66,5,37,18,1473,170.4,4,No,Low
108,Player_108,23,France,Manchester City,CB,63,97,46,32,9,949,1.51,2,No,Low
109,Player_109,25,Portugal,Manchester City,CB,81,80,16,37,11,3996,24.56,4,Yes,Low
110,Player_110,24,Germany,Bayern Munich,CB,85,86,3,7,22,1068,53.12,5,No,Low
111,Player_111,28,Portugal,Bayern Munich,LB,91,77,21,25,6,4311,142.13,2,No,High
112,Player_112,18,Portugal,Bayern Munich,CB,83,66,31,14,17,1623,159.43,1,No,Medium
113,Player_113,17,Argentina,Real Madrid,ST,94,78,21,13,18,2895,111.46,2,Yes,Medium
114,Player_114,32,Netherlands,Manchester City,RW,91,92,26,19,14,2736,69.29,4,No,Medium
115,Player_115,39,Netherlands,FC Barcelona,LW,66,71,45,18,6,2312,120.02,2,Yes,High
116,Player_116,39,France,PSG,CB,92,82,14,32,11,1946,32.97,1,Yes,High
117,Player_117,21,England,Bayern Munich,RB,90,68,43,35,21,616,82.69,1,Yes,Medium
118,Player_118,19,Netherlands,Bayern Munich,RW,71,94,50,23,6,1869,91.6,0,No,Low
119,Player_119,28,Portugal,Juventus,RB,70,88,21,9,9,300,19.32,1,Yes,Low
120,Player_120,24,Netherlands,Manchester City,RB,83,84,27,33,24,984,6.58,3,Yes,Low
121,Player_121,38,Portugal,Manchester City,CDM,67,95,41,35,23,3691,135.14,4,Yes,Low
122,Player_122,19,Spain,Real Madrid,RB,91,88,37,35,21,3426,96.48,3,No,Low
123,Player_123,17,Argentina,Real Madrid,CB,81,71,8,15,19,160,60.14,5,No,High
124,Player_124,19,Argentina,Bayern Munich,CDM,93,90,33,14,9,25,78.98,3,Yes,High
125,Player_125,21,England,Manchester City,GK,78,77,35,17,24,82,172.41,4,No,Medium
126,Player_126,31,Netherlands,FC Barcelona,LB,79,72,8,6,22,172,69.59,5,No,Medium
127,Player_127,30,Netherlands,PSG,RB,73,69,14,21,4,998,19.07,3,Yes,Medium
128,Player_128,19,Germany,Manchester City,ST,92,77,44,31,17,3141,83.72,3,Yes,Low
129,Player_129,17,Brazil,Juventus,LW,69,93,19,18,8,2882,116.82,5,Yes,High
130,Player_130,21,Spain,Manchester City,RB,75,84,7,39,15,4101,2.67,3,No,Low
131,Player_131,39,Argentina,Liverpool,GK,63,78,27,0,6,2843,60.16,1,No,Medium
132,Player_132,30,Spain,Real Madrid,CM,86,96,50,34,24,2110,71.14,4,Yes,Low
133,Player_133,23,Argentina,Juventus,GK,87,91,18,4,24,3084,83.74,4,Yes,High
134,Player_134,25,Spain,PSG,CM,75,89,15,11,9,2045,54.65,4,No,Medium
135,Player_135,31,France,Bayern Munich,GK,92,68,10,11,4,760,120.21,3,No,Medium
136,Player_136,31,Portugal,Juventus,LB,78,85,41,20,6,204,170.08,1,No,Low
137,Player_137,26,Argentina,Manchester City,LW,80,82,7,18,4,3102,164.56,4,No,Low
138,Player_138,29,Spain,Bayern Munich,GK,81,79,32,8,14,2035,119.76,2,No,Medium
139,Player_139,35,Netherlands,Manchester City,CM,68,88,9,35,18,1552,91.49,4,Yes,Low
140,Player_140,23,Brazil,Bayern Munich,RB,68,72,17,31,9,824,148.73,0,No,High
141,Player_141,33,France,PSG,LB,68,92,34,34,7,2956,150.55,2,Yes,High
142,Player_142,36,France,Real Madrid,LB,86,85,42,30,23,3748,149.41,4,Yes,Medium
143,Player_143,20,Brazil,PSG,RB,76,80,49,31,8,2445,28.83,3,No,Low
144,Player_144,21,Spain,Liverpool,ST,67,80,2,36,10,3896,5.07,4,No,High
145,Player_145,39,Netherlands,FC Barcelona,CDM,75,81,39,31,21,838,176.98,1,No,Low
146,Player_146,23,England,Real Madrid,LW,77,73,26,36,1,3683,172.76,1,Yes,Low
147,Player_147,29,Brazil,PSG,LW,92,93,27,38,2,1961,101.81,4,No,Low
148,Player_148,31,Spain,Liverpool,ST,60,82,45,37,12,937,178.75,3,No,Low
149,Player_149,27,Brazil,FC Barcelona,CDM,71,76,5,29,10,2931,138.81,3,No,Medium
150,Player_150,20,Brazil,Liverpool,LW,65,83,46,31,9,424,93.37,3,No,Low
151,Player_151,29,Argentina,Manchester City,CM,64,86,13,1,14,3310,70.38,4,Yes,Medium
152,Player_152,23,Spain,Manchester City,RW,75,79,6,10,5,3051,106.92,4,No,Medium
153,Player_153,35,England,Bayern Munich,RW,77,65,9,19,0,2905,93.09,0,No,Medium
154,Player_154,38,Portugal,Real Madrid,LW,77,66,14,36,13,2137,178.89,1,No,Low
155,Player_155,18,Argentina,Manchester City,CB,60,72,30,8,17,4046,88.54,2,No,High
156,Player_156,26,Brazil,Juventus,LW,78,86,28,37,23,3210,150.55,2,No,Medium
157,Player_157,29,Portugal,Liverpool,RB,67,89,41,18,10,2694,146.55,1,No,Low
158,Player_158,37,Germany,Real Madrid,RB,62,66,53,39,7,3595,13.32,5,No,Medium
159,Player_159,22,Portugal,Juventus,CDM,84,73,16,6,21,1267,16.12,0,No,Low
160,Player_160,28,Brazil,Manchester City,LB,64,73,50,4,2,3576,118.94,1,No,Low
161,Player_161,28,Brazil,Bayern Munich,CM,78,77,28,23,13,421,47.01,0,No,High
162,Player_162,36,Netherlands,PSG,ST,77,70,48,6,1,3266,118.53,5,No,Low
163,Player_163,27,Spain,Bayern Munich,LW,90,94,43,10,15,1657,26.46,0,No,Medium
164,Player_164,39,Spain,Juventus,CM,92,79,14,8,5,2100,71.77,3,Yes,Low
165,Player_165,23,Argentina,FC Barcelona,ST,77,79,25,29,0,3939,18.89,1,No,High
166,Player_166,17,England,Manchester City,RB,75,71,11,2,13,684,51.14,2,Yes,Low
167,Player_167,17,Argentina,Juventus,GK,75,75,24,21,9,2226,16.35,4,No,Low
168,Player_168,36,France,FC Barcelona,CM,66,66,40,39,5,4388,174.72,5,No,Medium
169,Player_169,29,Brazil,FC Barcelona,RW,73,74,4,19,8,2422,71.41,5,No,Medium
170,Player_170,25,Portugal,Liverpool,LW,84,81,3,31,6,1077,162.26,4,No,Medium
171,Player_171,19,Germany,Real Madrid,CDM,91,71,43,6,24,3985,174.83,1,No,Medium
172,Player_172,23,Brazil,Liverpool,RW,81,68,47,6,1,3840,163.77,4,No,Low
173,Player_173,22,Brazil,Manchester City,LB,75,95,40,19,10,3316,82.17,0,No,Low
174,Player_174,24,Argentina,FC Barcelona,CB,88,89,30,24,13,2843,140.31,4,No,Medium
175,Player_175,25,Germany,Juventus,ST,75,77,2,34,4,3439,28.09,0,Yes,Medium
176,Player_176,21,Germany,PSG,RB,71,82,52,23,8,4111,17.52,0,No,Low
177,Player_177,17,Germany,FC Barcelona,LW,76,85,2,39,6,4271,157.9,2,Yes,Medium
178,Player_178,35,Argentina,Juventus,CDM,86,65,25,12,24,1903,6.09,4,No,High
179,Player_179,26,Brazil,PSG,GK,84,72,49,38,13,4224,175.03,2,No,Medium
180,Player_180,28,Argentina,Liverpool,RB,72,85,16,3,15,3294,121.15,4,No,Low
181,Player_181,31,Spain,Liverpool,LW,67,85,9,11,21,425,75.82,0,No,Medium
182,Player_182,38,Spain,Real Madrid,GK,64,91,1,16,15,2401,25.88,4,No,Low
183,Player_183,25,Argentina,Juventus,CDM,71,83,23,0,6,749,130.32,5,No,Low
184,Player_184,36,Germany,FC Barcelona,CB,62,87,10,16,9,43,101.58,5,No,Medium
185,Player_185,33,Netherlands,Bayern Munich,RW,94,69,23,1,20,1559,128.15,2,No,Low
186,Player_186,33,Brazil,Liverpool,RW,92,72,34,5,5,4194,75.52,3,No,Low
187,Player_187,36,Argentina,Liverpool,RB,81,75,22,10,16,3468,12.39,5,No,Low
188,Player_188,28,Argentina,Real Madrid,LW,68,80,31,17,0,3951,57.04,2,No,Low
189,Player_189,23,Argentina,PSG,LW,77,88,22,39,1,4266,57.05,3,No,Low
190,Player_190,18,Netherlands,Real Madrid,CDM,88,85,33,24,13,147,2.06,1,No,Low
191,Player_191,19,Netherlands,FC Barcelona,CB,86,87,40,38,3,2170,2.22,2,No,Low
192,Player_192,33,France,Juventus,LW,76,72,18,27,8,111,59.87,5,No,Low
193,Player_193,21,Spain,Manchester City,CDM,93,71,1,15,22,4163,131.11,5,No,High
194,Player_194,33,Portugal,Manchester City,LB,62,66,50,11,5,827,112.52,4,Yes,Medium
195,Player_195,33,Germany,Juventus,RB,64,94,1,28,16,1752,43.4,3,No,Low
196,Player_196,33,England,PSG,LB,73,77,14,22,20,2939,108.7,5,Yes,High
197,Player_197,18,Netherlands,Liverpool,RB,62,87,20,20,10,3728,116.7,4,No,Low
198,Player_198,18,Portugal,PSG,GK,82,93,34,15,3,3616,94.3,3,No,Medium
199,Player_199,38,Netherlands,Liverpool,CDM,89,84,4,25,20,3723,94.08,2,No,Low
200,Player_200,39,Germany,Liverpool,CDM,82,97,42,36,8,2277,66.87,2,No,High
201,Player_201,21,England,Manchester City,CM,86,93,26,21,15,159,22.65,4,Yes,Low
202,Player_202,17,France,PSG,GK,69,79,23,9,2,3365,69.69,2,No,Low
203,Player_203,17,Argentina,Real Madrid,CDM,84,87,6,6,3,2233,62.49,4,No,Low
204,Player_204,35,France,Liverpool,LW,72,67,5,8,23,1013,106.76,0,Yes,High
205,Player_205,18,Netherlands,Bayern Munich,RB,75,93,45,24,2,551,154.2,3,Yes,Low
206,Player_206,37,France,Bayern Munich,LB,93,72,32,14,12,1175,67.88,4,Yes,Low
207,Player_207,28,Portugal,Real Madrid,RB,81,86,48,12,18,1163,127.9,3,No,Low
208,Player_208,22,Brazil,Bayern Munich,RW,76,93,16,25,24,1308,146.22,0,No,High
209,Player_209,39,Netherlands,FC Barcelona,CM,82,66,45,20,20,1492,38.51,3,No,Low
210,Player_210,20,Netherlands,Liverpool,CDM,68,65,41,22,0,1241,162.35,4,Yes,Medium
211,Player_211,39,Portugal,Real Madrid,CB,61,84,29,27,22,1777,13.14,2,Yes,Low
212,Player_212,27,Spain,PSG,ST,91,85,7,37,22,59,162.36,3,No,Medium
213,Player_213,33,England,Liverpool,CM,81,72,39,11,5,1633,29.87,3,No,Low
214,Player_214,22,Argentina,Real Madrid,CDM,72,91,45,23,21,2451,61.02,5,No,Low
215,Player_215,21,Portugal,Manchester City,LB,67,70,6,12,2,335,109.14,5,No,High
216,Player_216,36,England,PSG,CDM,60,83,5,39,2,830,163.07,0,No,Medium
217,Player_217,18,Germany,Manchester City,ST,76,82,3,1,15,1592,46.4,1,No,High
218,Player_218,22,England,Liverpool,LB,71,65,0,38,9,4380,137.56,2,No,Medium
219,Player_219,38,Germany,PSG,RB,63,89,14,11,24,959,128.02,4,No,Medium
220,Player_220,27,Portugal,Bayern Munich,LB,72,91,30,38,16,4166,29.17,0,Yes,Medium
221,Player_221,32,Netherlands,Real Madrid,CM,90,71,24,13,6,1121,86.56,4,No,Medium
222,Player_222,32,Netherlands,Liverpool,RB,66,93,46,29,12,2223,86.93,4,No,Low
223,Player_223,17,Spain,FC Barcelona,CDM,82,95,32,18,10,3816,55.18,3,No,Low
224,Player_224,25,Portugal,PSG,GK,83,83,51,30,9,1098,140.5,0,No,Low
225,Player_225,22,Germany,PSG,CDM,64,70,34,24,6,142,166.71,0,Yes,Low
226,Player_226,32,England,Juventus,ST,64,89,54,3,23,2978,129.12,5,Yes,Low
227,Player_227,19,England,Liverpool,GK,76,95,4,12,5,1046,175.15,2,No,High
228,Player_228,36,Germany,Liverpool,CDM,89,73,4,35,23,1068,9.56,1,Yes,High
229,Player_229,20,France,Manchester City,CB,68,84,35,36,0,4187,7.18,4,No,Medium
230,Player_230,35,Spain,Juventus,CM,65,74,16,2,16,3340,160.95,2,No,Low
231,Player_231,19,Brazil,Bayern Munich,CB,84,91,52,15,24,3435,161.66,5,No,Low
232,Player_232,35,Netherlands,Manchester City,RB,78,77,51,25,11,3779,19.73,2,No,Medium
233,Player_233,36,Argentina,Juventus,RW,75,66,13,39,3,4477,64.66,4,No,Medium
234,Player_234,23,England,Manchester City,CDM,80,85,28,38,2,965,150.45,3,No,Medium
235,Player_235,36,Argentina,Bayern Munich,LW,61,97,7,18,5,1179,23.57,3,Yes,High
236,Player_236,25,Brazil,Juventus,LW,69,88,33,14,15,2434,48.5,4,No,Low
237,Player_237,17,Portugal,Juventus,LB,75,98,39,31,12,500,122.74,5,No,Low
238,Player_238,24,Argentina,FC Barcelona,CB,74,73,0,20,8,49,176.75,5,No,Low
239,Player_239,23,Brazil,Manchester City,CM,72,66,28,0,10,969,143.59,0,No,Low
240,Player_240,34,Netherlands,Manchester City,CDM,72,94,35,5,19,987,140.03,1,No,Low
241,Player_241,24,Germany,PSG,ST,91,86,50,26,24,1115,62.01,3,No,High
242,Player_242,17,France,Bayern Munich,LB,67,75,36,22,20,3932,119.21,1,Yes,High
243,Player_243,27,Netherlands,Real Madrid,RB,77,81,28,30,12,1479,20.8,2,Yes,High
244,Player_244,34,England,FC Barcelona,GK,85,77,4,11,22,4434,178.61,2,Yes,High
245,Player_245,39,Brazil,Juventus,RB,69,71,52,20,18,3124,86.76,4,Yes,High
246,Player_246,26,Argentina,Juventus,CDM,90,80,31,1,2,3567,115.17,4,No,High
247,Player_247,19,England,Juventus,RW,92,97,51,4,11,1658,157.77,4,Yes,Medium
248,Player_248,23,France,FC Barcelona,GK,88,65,23,8,18,1876,0.67,5,Yes,Low
249,Player_249,32,Germany,Juventus,CB,64,75,18,19,7,2051,175.69,3,Yes,Low
250,Player_250,32,Portugal,Juventus,CDM,72,70,11,17,13,4376,64.97,1,No,Low
251,Player_251,36,England,Bayern Munich,RW,60,84,51,21,21,2815,61.46,2,No,Low
252,Player_252,33,Portugal,Liverpool,CB,82,90,0,7,8,970,26.54,1,No,High
253,Player_253,18,Brazil,Liverpool,RW,62,76,6,33,24,207,154.54,3,No,Medium
254,Player_254,17,France,PSG,CB,62,94,16,8,23,259,156.82,1,No,Low
255,Player_255,32,Argentina,PSG,CM,66,92,33,6,16,4358,4.09,1,No,Low
256,Player_256,28,France,Juventus,LW,94,91,42,29,5,782,10.5,5,No,Low
257,Player_257,21,France,Bayern Munich,RB,74,83,6,17,3,504,165.34,4,Yes,Low
258,Player_258,21,Spain,Juventus,CM,62,69,16,26,3,1573,22.55,5,No,Low
259,Player_259,39,France,PSG,GK,88,69,2,15,18,4298,111.96,5,No,Low
260,Player_260,25,France,FC Barcelona,LB,89,91,28,20,11,1759,111.73,1,No,Low
261,Player_261,25,Netherlands,FC Barcelona,LW,77,92,21,4,24,3794,156.62,1,No,Medium
262,Player_262,19,England,Real Madrid,CM,70,90,37,28,1,3590,103.29,5,Yes,Low
263,Player_263,35,Argentina,Liverpool,CDM,60,91,53,36,16,4140,78.41,1,No,Medium
264,Player_264,32,Netherlands,Bayern Munich,RW,88,85,42,21,14,1401,175.4,5,No,Low
265,Player_265,32,Netherlands,Manchester City,GK,69,65,28,13,9,788,41.57,0,Yes,Low
266,Player_266,19,England,Liverpool,CDM,87,92,49,18,2,3329,47.66,5,Yes,Medium
267,Player_267,36,England,Manchester City,LW,90,79,49,34,19,2844,15.72,2,No,Low
268,Player_268,38,Brazil,Real Madrid,RW,78,81,53,23,3,3985,175.57,2,Yes,Low
269,Player_269,17,England,Real Madrid,GK,62,90,41,5,21,4012,127.29,1,Yes,High
270,Player_270,36,Spain,Juventus,LB,74,84,4,2,0,2092,2.67,5,Yes,Medium
271,Player_271,27,Spain,PSG,LW,92,89,29,33,0,2967,126.92,5,Yes,Medium
272,Player_272,33,Netherlands,Real Madrid,GK,85,77,22,1,17,1069,73.04,4,Yes,High
273,Player_273,24,Portugal,Real Madrid,CM,75,97,54,14,3,1675,174.18,4,No,High
274,Player_274,20,Brazil,Manchester City,GK,92,89,20,36,22,2612,50.29,4,No,Low
275,Player_275,22,Portugal,PSG,LW,79,72,25,14,21,4396,128.0,5,No,High
276,Player_276,24,Portugal,Real Madrid,CM,72,69,53,31,14,287,113.12,5,Yes,High
277,Player_277,36,Netherlands,Liverpool,CDM,92,70,46,20,24,785,2.66,2,No,Low
278,Player_278,19,Germany,Real Madrid,LW,64,87,20,16,22,2316,159.4,3,No,Medium
279,Player_279,32,Netherlands,PSG,ST,73,94,19,33,20,2838,25.56,1,No,Low
280,Player_280,19,Argentina,Juventus,LB,86,78,22,31,21,3637,119.61,2,No,Medium
281,Player_281,34,Argentina,Bayern Munich,ST,82,87,3,22,9,2628,139.71,4,No,Medium
282,Player_282,30,England,PSG,RB,73,75,20,34,24,1265,113.75,2,No,Low
283,Player_283,34,England,Manchester City,RW,63,95,20,36,16,2983,17.93,2,No,High
284,Player_284,18,Germany,Bayern Munich,CB,78,70,0,36,24,3015,175.54,2,Yes,High
285,Player_285,38,England,Liverpool,LB,63,75,14,32,21,70,43.01,4,No,High
286,Player_286,19,Argentina,FC Barcelona,ST,89,77,16,24,11,2460,113.2,3,No,Low
287,Player_287,32,Portugal,PSG,CB,78,76,50,36,19,611,143.59,0,No,Low
288,Player_288,25,Netherlands,Juventus,LB,90,66,13,39,11,3523,169.09,1,No,High
289,Player_289,20,France,Manchester City,CB,90,81,18,20,15,3702,108.92,1,No,Low
290,Player_290,17,Spain,Liverpool,CM,68,92,49,37,4,2576,47.0,2,Yes,Medium
291,Player_291,20,France,Bayern Munich,ST,72,92,33,39,15,190,150.68,3,No,High
292,Player_292,17,France,Liverpool,GK,73,86,5,33,16,1747,29.8,4,No,Low
293,Player_293,30,Argentina,PSG,CM,69,71,44,18,22,2125,4.5,0,No,Low
294,Player_294,37,France,Real Madrid,LB,90,79,48,26,14,1628,163.51,0,No,Low
295,Player_295,32,Netherlands,Juventus,LB,82,96,5,8,12,3372,103.78,2,No,Low
296,Player_296,36,Germany,PSG,LW,86,75,52,4,7,2996,13.0,2,Yes,Medium
297,Player_297,24,Brazil,FC Barcelona,ST,65,88,53,4,20,16,104.56,4,No,Low
298,Player_298,23,England,PSG,RB,85,67,4,24,1,1597,26.53,4,No,Low
299,Player_299,19,Brazil,Bayern Munich,RB,61,94,6,25,7,1066,6.13,5,No,High
300,Player_300,33,Portugal,Bayern Munich,LB,72,70,32,18,9,3139,21.42,4,No,Low
301,Player_301,17,Netherlands,PSG,RB,78,66,12,29,6,3451,139.63,2,No,Medium
302,Player_302,32,Netherlands,Bayern Munich,RW,60,78,50,35,9,2259,136.14,3,No,Low
303,Player_303,28,Spain,Real Madrid,LW,91,82,53,15,24,2250,108.98,2,No,Medium
304,Player_304,35,Netherlands,Liverpool,LB,81,95,0,6,3,2773,38.07,2,No,High
305,Player_305,38,England,PSG,RB,88,77,12,17,10,4204,133.14,0,Yes,Medium
306,Player_306,39,Netherlands,Juventus,ST,61,90,42,20,8,283,73.74,4,No,Medium
307,Player_307,38,France,Real Madrid,GK,70,76,26,30,3,2988,92.18,1,No,Low
308,Player_308,30,Spain,Liverpool,CM,76,82,6,0,2,602,161.63,4,No,Low
309,Player_309,22,England,Juventus,CM,67,73,51,2,10,1363,82.69,5,Yes,High
310,Player_310,22,Germany,Juventus,RW,81,85,2,30,2,3352,112.93,3,No,High
311,Player_311,29,Germany,Juventus,CB,63,88,24,24,17,4075,173.13,3,No,Medium
312,Player_312,35,Germany,Liverpool,ST,70,98,32,7,18,800,81.52,4,No,High
313,Player_313,38,Germany,Real Madrid,CB,67,72,39,0,13,759,101.15,4,No,Low
314,Player_314,24,France,Juventus,LW,68,97,16,6,23,1493,105.4,2,No,Medium
315,Player_315,18,Netherlands,Juventus,GK,85,87,44,6,10,3934,43.71,1,No,Low
316,Player_316,37,Brazil,Manchester City,LW,61,77,13,7,23,814,132.78,2,No,Medium
317,Player_317,17,England,PSG,LB,75,78,36,18,1,372,130.93,0,No,Low
318,Player_318,31,France,Liverpool,ST,90,78,53,16,1,2998,38.83,0,Yes,High
319,Player_319,17,Germany,Liverpool,LB,65,80,22,10,1,2891,2.89,3,No,Medium
320,Player_320,21,Portugal,Bayern Munich,CDM,80,90,23,10,9,3791,179.81,3,No,Low
321,Player_321,32,Netherlands,Liverpool,RB,85,90,28,37,22,3319,104.89,1,No,Medium
322,Player_322,35,Brazil,Real Madrid,CM,78,65,37,1,14,2189,33.0,3,No,Medium
323,Player_323,20,Portugal,Liverpool,LB,87,96,53,3,21,2449,51.4,5,Yes,Low
324,Player_324,19,Spain,Manchester City,CB,67,79,26,27,11,3967,111.39,0,Yes,Low
325,Player_325,33,Portugal,PSG,CDM,73,85,37,32,10,822,25.2,1,No,Low
326,Player_326,33,Spain,PSG,CM,83,82,52,10,16,221,7.19,0,No,Low
327,Player_327,28,Spain,Liverpool,LB,85,94,39,2,17,3937,143.83,4,Yes,Medium
328,Player_328,30,Germany,Juventus,CDM,90,77,44,39,13,1387,128.99,4,No,Low
329,Player_329,37,Spain,FC Barcelona,CDM,91,88,49,4,16,3888,56.07,1,No,Medium
330,Player_330,22,Argentina,FC Barcelona,ST,61,94,22,20,14,2160,11.0,2,No,Medium
331,Player_331,19,England,Juventus,LW,84,66,30,21,11,3270,87.79,5,No,High
332,Player_332,25,England,Juventus,CDM,61,83,35,36,15,1925,50.08,5,No,Medium
333,Player_333,21,Germany,Juventus,RW,60,89,16,10,22,2951,71.9,3,Yes,Medium
334,Player_334,33,Argentina,Real Madrid,LW,71,78,36,21,5,3993,49.68,1,No,Low
335,Player_335,30,Portugal,FC Barcelona,CM,68,70,2,12,1,2598,31.96,5,No,Low
336,Player_336,37,France,Juventus,CM,87,76,35,2,1,1666,69.96,3,No,Low
337,Player_337,19,Portugal,Real Madrid,CM,92,84,54,12,15,3081,173.7,0,Yes,Medium
338,Player_338,17,Netherlands,Bayern Munich,CM,81,87,4,27,1,3885,48.29,2,No,Low
339,Player_339,36,France,Real Madrid,RW,84,94,45,10,7,2114,60.81,3,No,Low
340,Player_340,37,Spain,FC Barcelona,LB,77,94,14,10,6,2752,59.6,4,No,High
341,Player_341,39,Brazil,Liverpool,GK,65,94,51,20,0,3168,86.71,4,Yes,Medium
342,Player_342,17,France,Bayern Munich,CDM,77,94,48,20,3,1554,151.91,0,No,High
343,Player_343,19,Brazil,FC Barcelona,CM,75,98,5,6,10,1080,72.68,1,Yes,High
344,Player_344,34,England,Real Madrid,LW,74,80,9,16,19,3934,145.2,3,No,Low
345,Player_345,26,Brazil,Manchester City,LW,67,88,53,13,6,87,21.14,0,No,High
346,Player_346,38,England,PSG,CDM,72,78,31,32,17,2700,161.14,4,No,Low
347,Player_347,19,Argentina,FC Barcelona,LB,66,90,22,10,3,2703,33.76,4,No,High
348,Player_348,24,Argentina,Juventus,GK,76,72,47,12,16,2959,7.54,4,No,Medium
349,Player_349,30,Germany,Real Madrid,LB,91,78,16,0,10,2418,28.92,2,No,Medium
350,Player_350,34,Germany,Juventus,CDM,81,95,45,33,10,2422,34.74,2,Yes,Medium
351,Player_351,31,Spain,Juventus,CB,72,66,19,8,19,4147,91.78,4,Yes,Medium
352,Player_352,38,France,Juventus,RW,82,68,43,12,10,1747,81.26,5,No,Medium
353,Player_353,39,Spain,Juventus,CDM,88,65,40,36,14,40,129.0,1,No,High
354,Player_354,18,England,Juventus,RB,81,84,14,29,13,2138,9.65,2,Yes,High
355,Player_355,26,Spain,Bayern Munich,ST,60,78,43,36,16,38,89.84,3,No,Medium
356,Player_356,18,Brazil,FC Barcelona,ST,88,89,45,6,1,3084,60.18,2,No,Medium
357,Player_357,33,England,FC Barcelona,LB,64,89,21,13,17,3679,113.71,3,No,Low
358,Player_358,24,Germany,PSG,CDM,94,67,49,5,15,2151,8.34,2,Yes,High
359,Player_359,17,Argentina,Real Madrid,CDM,69,69,51,33,11,3937,6.77,4,No,Medium
360,Player_360,25,Germany,Manchester City,ST,78,90,5,15,9,2090,77.19,3,No,High
361,Player_361,27,France,Bayern Munich,GK,66,68,3,36,15,208,146.14,1,No,Medium
362,Player_362,38,England,Real Madrid,ST,94,71,22,35,2,599,120.96,2,No,Low
363,Player_363,32,England,Bayern Munich,CDM,72,94,43,5,7,604,3.5,2,No,Low
364,Player_364,23,Brazil,FC Barcelona,GK,69,94,44,7,21,2523,32.54,4,No,Low
365,Player_365,26,France,Juventus,CM,61,83,18,23,21,3709,41.2,3,No,Medium
366,Player_366,39,Argentina,PSG,RB,65,97,53,2,24,2156,76.44,5,No,Low
367,Player_367,19,Portugal,PSG,CB,67,97,44,3,23,213,105.82,4,No,Medium
368,Player_368,34,England,Liverpool,RW,84,78,30,31,1,1576,39.35,3,No,Low
369,Player_369,29,England,Manchester City,CM,66,74,43,0,21,2818,69.16,2,No,Low
370,Player_370,23,Brazil,PSG,LW,82,92,51,33,0,2124,105.32,2,Yes,Low
371,Player_371,20,Spain,Juventus,ST,78,78,2,8,13,268,69.33,2,No,Low
372,Player_372,29,Netherlands,FC Barcelona,RB,81,80,27,11,24,2408,26.2,2,Yes,Low
373,Player_373,36,Argentina,Manchester City,ST,72,85,2,9,3,2577,88.75,0,No,Medium
374,Player_374,17,Germany,Real Madrid,ST,80,92,13,9,3,4257,58.66,2,No,Low
375,Player_375,24,France,Juventus,CM,60,97,17,22,8,822,155.62,2,No,Low
376,Player_376,30,England,Juventus,CB,78,70,26,5,2,3635,139.72,5,Yes,High
377,Player_377,32,England,PSG,GK,92,79,50,23,4,2595,34.65,5,No,Low
378,Player_378,30,Germany,Manchester City,ST,63,67,9,23,0,3953,27.9,3,No,High
379,Player_379,28,Argentina,FC Barcelona,LB,62,78,48,20,21,3831,62.91,2,No,High
380,Player_380,35,Netherlands,Liverpool,CDM,86,66,14,30,18,2099,74.49,2,No,Medium
381,Player_381,39,Spain,Bayern Munich,RB,94,93,18,29,0,3602,167.8,3,No,Medium
382,Player_382,31,England,Bayern Munich,LB,87,68,8,33,9,3467,54.64,2,No,Low
383,Player_383,18,Netherlands,FC Barcelona,CM,65,90,3,17,21,650,156.23,2,Yes,Low
384,Player_384,18,Argentina,FC Barcelona,CM,65,76,14,11,11,1634,91.2,4,No,Medium
385,Player_385,39,Germany,Bayern Munich,CB,82,66,50,34,9,1167,159.47,0,No,Low
386,Player_386,38,Brazil,Liverpool,CB,92,81,47,6,1,4076,126.5,3,No,Low
387,Player_387,35,Spain,Manchester City,GK,75,74,7,39,15,198,127.66,4,No,High
388,Player_388,38,France,Bayern Munich,CDM,83,86,48,24,7,1355,93.62,5,No,Low
389,Player_389,38,England,FC Barcelona,RB,64,85,52,5,13,3505,151.33,1,No,Medium
390,Player_390,33,Argentina,PSG,CDM,72,79,0,0,14,802,46.17,1,No,Medium
391,Player_391,36,Brazil,Real Madrid,LW,71,85,6,15,15,700,163.37,5,No,Low
392,Player_392,26,France,Liverpool,CB,64,85,52,3,10,502,114.8,0,Yes,Low
393,Player_393,22,Portugal,Juventus,GK,90,85,30,28,11,2413,79.25,1,No,Low
394,Player_394,31,Argentina,Liverpool,RW,87,96,17,37,1,2967,176.8,0,No,Medium
395,Player_395,38,Argentina,PSG,ST,87,69,11,27,3,2870,155.23,1,Yes,Low
396,Player_396,27,France,PSG,ST,89,73,47,21,2,3467,139.08,1,Yes,Medium
397,Player_397,21,Brazil,Juventus,RW,77,82,29,7,8,1418,49.67,4,No,Medium
398,Player_398,17,Portugal,FC Barcelona,CDM,86,85,32,31,17,1098,175.29,1,Yes,High
399,Player_399,24,Netherlands,Bayern Munich,RW,94,72,46,32,18,3169,133.87,5,No,Low
400,Player_400,37,Netherlands,Manchester City,GK,85,98,6,12,6,382,109.14,0,No,Medium
401,Player_401,28,Germany,Liverpool,RB,77,74,27,26,3,3940,165.96,2,No,Low
402,Player_402,28,Brazil,Juventus,RW,92,88,48,17,5,1393,29.61,2,No,Low
403,Player_403,21,Spain,Liverpool,GK,84,88,2,17,18,3327,25.45,2,No,Low
404,Player_404,23,England,PSG,CB,90,96,42,12,0,1652,101.69,0,Yes,Medium
405,Player_405,20,France,Bayern Munich,LB,61,97,5,21,15,4271,10.68,0,No,High
406,Player_406,22,Germany,Liverpool,CM,92,98,30,13,10,4323,119.69,2,No,Low
407,Player_407,29,Portugal,Manchester City,CM,91,75,37,10,21,2394,43.71,5,No,Medium
408,Player_408,36,France,PSG,LW,77,95,14,38,3,2038,21.87,1,No,Low
409,Player_409,31,France,Manchester City,CDM,76,82,6,21,17,1985,74.0,2,Yes,Medium
410,Player_410,19,Brazil,Bayern Munich,RB,93,87,42,35,22,1262,84.14,3,No,Low
411,Player_411,39,England,Liverpool,LB,66,86,29,16,4,1711,31.1,0,No,Medium
412,Player_412,24,Spain,Real Madrid,LB,94,82,26,31,21,349,7.96,3,No,Medium
413,Player_413,36,Netherlands,Liverpool,CB,89,84,16,13,5,4026,74.82,3,No,Medium
414,Player_414,32,Argentina,Bayern Munich,RW,71,77,54,28,24,440,136.83,0,No,Low
415,Player_415,29,Argentina,Liverpool,CDM,94,65,17,5,1,2808,157.42,2,Yes,Medium
416,Player_416,34,France,Juventus,ST,70,68,21,3,11,2562,18.01,5,No,Low
417,Player_417,26,Netherlands,Liverpool,LB,63,88,52,10,21,3152,94.68,4,No,Low
418,Player_418,35,Netherlands,FC Barcelona,GK,84,66,25,39,8,1384,47.78,3,Yes,Low
419,Player_419,33,England,Liverpool,ST,91,92,50,9,19,287,67.75,2,No,High
420,Player_420,35,Portugal,Liverpool,LW,79,90,26,27,11,2055,168.05,4,No,High
421,Player_421,39,Portugal,Manchester City,RW,90,87,39,10,12,997,63.7,3,No,Low
422,Player_422,21,Germany,Real Madrid,RW,63,79,23,34,21,2333,66.08,2,No,Medium
423,Player_423,37,Brazil,Manchester City,RB,60,91,51,14,22,1422,38.09,3,No,Medium
424,Player_424,39,England,Manchester City,LB,62,70,7,7,16,73,172.82,2,No,High
425,Player_425,25,England,PSG,CB,81,74,20,19,4,1462,82.44,5,Yes,High
426,Player_426,28,Brazil,FC Barcelona,CM,76,94,28,20,19,3194,102.89,1,No,Medium
427,Player_427,37,Netherlands,Manchester City,GK,73,93,42,0,12,2205,81.84,1,No,Low
428,Player_428,17,Portugal,Juventus,ST,94,68,20,28,12,429,45.9,0,No,Medium
429,Player_429,17,Portugal,Bayern Munich,LW,72,69,2,23,9,1471,145.97,4,No,Medium
430,Player_430,31,Netherlands,Juventus,CM,94,68,30,29,14,3481,5.61,3,Yes,High
431,Player_431,18,Portugal,Bayern Munich,RW,61,80,54,39,14,3180,124.4,3,No,Low
432,Player_432,38,France,Liverpool,ST,72,89,26,34,17,1730,107.17,2,No,Medium
433,Player_433,32,England,PSG,CDM,75,78,45,32,17,35,26.4,4,No,Medium
434,Player_434,24,Argentina,FC Barcelona,LB,77,75,26,19,1,1020,30.28,3,No,Low
435,Player_435,29,Brazil,Juventus,LW,66,93,8,15,22,1997,118.83,4,No,Medium
436,Player_436,37,Portugal,FC Barcelona,CDM,89,98,32,8,10,2760,56.53,4,Yes,Low
437,Player_437,17,Germany,Juventus,CB,66,86,32,30,12,3117,48.2,1,Yes,Medium
438,Player_438,32,Portugal,Liverpool,LB,74,78,25,16,10,2535,11.12,3,No,Medium
439,Player_439,23,Portugal,Bayern Munich,ST,78,88,27,30,3,4265,138.08,3,No,High
440,Player_440,21,Spain,Real Madrid,LB,61,90,43,22,14,145,158.94,0,No,High
441,Player_441,38,France,PSG,CM,72,80,42,5,21,1026,147.66,4,Yes,Low
442,Player_442,39,Brazil,Juventus,RB,90,96,30,29,22,3665,84.15,2,No,Low
443,Player_443,19,Spain,Juventus,CM,75,70,52,6,24,1286,96.35,1,Yes,Medium
444,Player_444,28,Spain,Liverpool,CB,65,98,0,39,10,2846,43.99,0,No,Medium
445,Player_445,32,Germany,PSG,GK,87,72,19,10,17,320,31.53,1,No,High
446,Player_446,35,England,Bayern Munich,CDM,91,94,11,33,15,4095,148.23,2,Yes,Low
447,Player_447,21,Germany,Bayern Munich,CM,69,91,16,11,9,2293,143.8,0,No,High
448,Player_448,38,England,Juventus,RB,77,71,14,26,11,1612,140.04,1,No,Low
449,Player_449,30,England,Real Madrid,GK,63,91,33,11,12,476,83.67,2,No,Low
450,Player_450,21,Brazil,Real Madrid,CM,68,89,49,12,8,3164,155.68,5,Yes,Low
451,Player_451,31,Portugal,FC Barcelona,RW,66,79,15,7,20,1826,166.76,0,No,High
452,Player_452,33,Brazil,PSG,RB,67,89,3,15,12,782,59.44,2,No,Medium
453,Player_453,30,France,PSG,CDM,66,86,7,28,5,1947,40.83,0,Yes,High
454,Player_454,36,England,Bayern Munich,LW,62,82,33,34,5,3331,83.84,3,No,Medium
455,Player_455,21,Spain,FC Barcelona,GK,76,76,45,28,10,1593,32.69,3,No,Low
456,Player_456,28,Portugal,Liverpool,RW,61,87,24,30,18,1747,159.18,1,No,Medium
457,Player_457,32,Argentina,PSG,LW,74,89,14,12,10,2033,61.17,4,No,Low
458,Player_458,32,France,FC Barcelona,ST,88,74,27,11,9,256,103.92,5,No,Medium
459,Player_459,37,Brazil,FC Barcelona,RB,81,94,8,1,22,2991,107.25,4,No,Low
460,Player_460,23,Germany,Juventus,RW,63,74,1,32,14,1417,92.94,2,No,Medium
461,Player_461,20,France,Bayern Munich,LB,65,98,16,7,12,4114,28.6,0,No,Medium
462,Player_462,17,France,FC Barcelona,ST,85,77,9,39,22,109,178.38,3,No,Low
463,Player_463,21,Portugal,Real Madrid,ST,70,93,8,31,7,2552,31.48,4,No,Low
464,Player_464,39,France,Real Madrid,GK,85,73,30,37,4,1057,135.4,3,No,Low
465,Player_465,26,France,Manchester City,RB,76,77,1,27,1,4350,142.55,5,No,High
466,Player_466,38,Argentina,Bayern Munich,RW,83,78,23,14,15,2042,26.56,2,Yes,Low
467,Player_467,21,Netherlands,Juventus,CB,87,73,18,22,12,2181,168.0,5,No,Medium
468,Player_468,20,Germany,Liverpool,RW,94,72,16,23,18,4492,88.05,5,No,Low
469,Player_469,18,Germany,Manchester City,CM,90,67,42,12,8,3558,113.38,2,Yes,Low
470,Player_470,36,Germany,Real Madrid,ST,72,97,48,20,14,1621,115.77,0,No,Medium
471,Player_471,26,England,Juventus,CDM,94,96,9,11,5,3658,91.14,5,No,Medium
472,Player_472,35,Spain,Manchester City,ST,75,71,49,12,7,2694,25.99,4,No,Medium
473,Player_473,17,Netherlands,Bayern Munich,ST,74,83,54,38,23,3884,135.44,2,No,Medium
474,Player_474,21,Germany,Juventus,LB,77,98,27,22,13,3284,104.93,2,No,Medium
475,Player_475,29,France,Bayern Munich,CB,86,78,37,27,4,2166,21.8,3,No,Low
476,Player_476,20,France,FC Barcelona,LW,94,83,47,13,16,3886,126.21,1,No,Low
477,Player_477,32,Germany,PSG,LW,94,90,27,16,21,4397,126.65,5,No,Low
478,Player_478,32,Portugal,FC Barcelona,LB,87,81,49,23,6,4322,98.95,4,No,Low
479,Player_479,39,Germany,Bayern Munich,ST,68,92,51,33,8,4451,16.75,0,Yes,High
480,Player_480,18,France,Juventus,LW,71,83,49,21,15,3392,63.8,5,Yes,Medium
481,Player_481,33,England,Real Madrid,RB,74,91,0,9,17,2270,9.64,0,No,Low
482,Player_482,36,Brazil,Liverpool,CB,80,83,2,7,12,3711,86.23,3,Yes,High
483,Player_483,28,Brazil,Real Madrid,LW,94,97,14,20,17,1586,163.21,5,No,High
484,Player_484,34,Netherlands,Juventus,LB,92,71,51,36,9,1214,0.9,0,No,Low
485,Player_485,19,Netherlands,FC Barcelona,CM,78,93,9,6,0,1645,48.36,5,No,High
486,Player_486,17,Germany,Liverpool,LW,82,69,20,25,20,1350,144.07,2,No,Low
487,Player_487,17,Argentina,Juventus,CB,72,94,36,12,17,3198,2.27,5,No,High
488,Player_488,35,Germany,Bayern Munich,GK,60,72,14,15,18,364,2.33,4,Yes,Low
489,Player_489,27,Portugal,Real Madrid,GK,88,76,22,29,1,3939,110.14,5,No,Medium
490,Player_490,21,Germany,Bayern Munich,RB,83,77,13,30,3,3199,142.16,0,No,Low
491,Player_491,28,Netherlands,Liverpool,RW,75,90,14,4,10,1626,139.88,4,No,High
492,Player_492,19,Brazil,Liverpool,RW,84,82,9,31,2,3201,140.43,0,No,Low
493,Player_493,17,France,Real Madrid,LW,82,84,8,15,8,1645,65.3,1,No,Low
494,Player_494,17,Germany,Bayern Munich,CDM,87,80,43,8,9,981,158.95,1,Yes,Medium
495,Player_495,24,France,Manchester City,CM,75,67,38,21,1,2395,2.8,4,Yes,Medium
496,Player_496,26,France,Bayern Munich,LB,70,91,4,39,6,2036,56.54,1,No,Medium
497,Player_497,27,Argentina,Liverpool,CM,62,79,24,36,14,3552,61.03,1,Yes,Medium
498,Player_498,28,France,Bayern Munich,GK,74,98,41,13,18,921,30.22,2,No,Medium
499,Player_499,29,Brazil,Juventus,LW,60,86,25,15,9,3746,60.85,0,No,Low
500,Player_500,28,England,FC Barcelona,CB,66,87,7,19,23,3658,105.67,1,Yes,Low
501,Player_501,30,England,Manchester City,LB,60,68,21,14,19,3782,93.89,4,Yes,Low
502,Player_502,18,Spain,PSG,CM,91,87,51,25,13,3995,57.84,2,No,High
503,Player_503,35,Portugal,Juventus,CB,68,73,24,8,3,4456,135.0,1,Yes,Low
504,Player_504,34,Germany,FC Barcelona,LB,88,88,47,0,24,4277,128.8,5,No,Low
505,Player_505,19,Portugal,PSG,CM,85,85,11,34,10,1474,50.89,4,No,Medium
506,Player_506,39,Brazil,Real Madrid,RB,82,80,8,19,2,4409,58.52,0,No,Low
507,Player_507,33,France,PSG,GK,88,89,9,5,22,2068,52.11,5,No,Low
508,Player_508,24,England,Juventus,ST,92,90,47,9,16,3767,23.63,1,No,Medium
509,Player_509,26,Portugal,Bayern Munich,LB,66,73,9,32,6,2852,135.62,4,No,Low
510,Player_510,18,Brazil,Juventus,GK,71,79,8,15,10,402,8.81,5,No,Medium
511,Player_511,35,England,PSG,CDM,90,97,25,35,17,1147,27.53,4,No,Low
512,Player_512,25,France,Liverpool,LW,91,65,34,5,13,612,19.4,3,Yes,Low
513,Player_513,23,Portugal,FC Barcelona,CB,79,69,26,18,13,1876,148.65,5,Yes,High
514,Player_514,20,England,FC Barcelona,LB,76,73,30,30,5,1613,8.4,4,No,Low
515,Player_515,37,Germany,PSG,LW,62,70,18,1,8,3017,119.8,5,No,Low
516,Player_516,34,Netherlands,FC Barcelona,LW,60,92,42,17,21,1734,8.48,3,No,High
517,Player_517,29,Germany,Liverpool,ST,86,90,37,27,2,3548,141.67,0,No,Low
518,Player_518,27,Spain,Juventus,CM,92,92,5,3,16,2919,164.33,0,No,Low
519,Player_519,20,Spain,FC Barcelona,LB,79,79,14,0,11,2150,87.89,2,No,Low
520,Player_520,37,England,PSG,GK,73,70,28,15,3,2380,144.92,5,No,Medium
521,Player_521,20,Netherlands,Manchester City,RW,64,91,46,1,19,1810,127.3,3,No,Low
522,Player_522,26,Brazil,Manchester City,LB,82,68,44,35,15,3201,143.32,4,No,Medium
523,Player_523,21,Germany,Real Madrid,LB,74,75,53,0,23,752,138.14,2,Yes,Low
524,Player_524,25,Brazil,FC Barcelona,LB,65,85,4,38,9,2472,37.36,5,No,Low
525,Player_525,19,Netherlands,Juventus,LW,92,94,13,22,6,1341,90.17,2,No,Medium
526,Player_526,33,Brazil,PSG,CB,78,82,52,25,9,504,172.89,5,No,Low
527,Player_527,19,Netherlands,FC Barcelona,LW,72,67,1,10,6,3482,62.16,0,No,Low
528,Player_528,32,England,Bayern Munich,CB,88,76,22,0,22,1969,174.7,4,No,Medium
529,Player_529,20,Brazil,Liverpool,RW,65,91,43,10,17,4049,105.18,3,Yes,High
530,Player_530,34,Germany,FC Barcelona,LW,74,94,51,23,8,4147,83.36,0,Yes,Low
531,Player_531,33,France,FC Barcelona,CB,75,85,45,9,21,3637,118.57,2,No,Medium
532,Player_532,23,Spain,Manchester City,LW,83,85,18,13,17,2422,146.94,1,No,Low
533,Player_533,39,France,Liverpool,CDM,82,79,23,13,16,4484,71.26,2,Yes,High
534,Player_534,21,Brazil,PSG,LW,69,82,19,6,10,673,6.42,1,No,High
535,Player_535,28,France,FC Barcelona,RW,76,93,46,22,0,592,127.73,5,No,High
536,Player_536,33,Germany,Manchester City,RW,89,85,26,21,16,2779,172.13,0,Yes,Low
537,Player_537,39,Germany,Real Madrid,CB,69,81,51,35,3,3668,112.69,5,No,Low
538,Player_538,29,Brazil,Liverpool,CB,78,82,23,26,3,2552,34.32,3,No,Low
539,Player_539,39,England,Manchester City,RW,88,76,16,1,13,4178,45.06,4,No,Low
540,Player_540,19,France,Manchester City,RW,61,75,24,38,8,3138,163.8,1,No,Medium
541,Player_541,25,England,Juventus,ST,78,84,45,18,12,2500,2.93,4,No,Low
542,Player_542,33,England,Manchester City,LB,66,73,54,6,15,2793,99.0,5,No,Medium
543,Player_543,33,Netherlands,Juventus,RB,85,65,30,11,0,4293,28.98,0,No,High
544,Player_544,36,Argentina,FC Barcelona,LW,74,67,27,2,2,1712,51.26,0,No,Low
545,Player_545,32,Brazil,FC Barcelona,CM,62,85,49,4,18,2345,55.6,5,No,Medium
546,Player_546,38,Spain,Real Madrid,LB,75,87,27,7,7,299,39.86,5,No,Low
547,Player_547,29,Germany,Bayern Munich,RB,61,73,21,13,17,4224,142.73,0,Yes,Low
548,Player_548,35,Germany,Bayern Munich,ST,90,83,4,35,5,1906,60.13,3,No,Low
549,Player_549,33,Brazil,Bayern Munich,CM,87,83,53,6,19,2485,62.51,1,No,Low
550,Player_550,20,Netherlands,Juventus,CB,66,87,43,6,5,206,81.81,4,No,Low
551,Player_551,28,Portugal,Liverpool,RW,89,91,41,31,4,293,162.46,2,Yes,Medium
552,Player_552,25,Portugal,Liverpool,CDM,66,91,7,7,11,1873,124.03,5,Yes,Medium
553,Player_553,35,Portugal,Real Madrid,GK,88,76,37,11,8,3758,11.58,5,No,Low
554,Player_554,28,Netherlands,Liverpool,RW,83,91,27,9,8,2088,7.55,0,No,High
555,Player_555,25,Spain,Bayern Munich,CDM,63,98,46,13,16,1772,102.17,4,No,High
556,Player_556,23,Germany,Bayern Munich,RB,88,97,11,8,18,2863,159.73,4,No,Medium
557,Player_557,30,Brazil,Manchester City,CB,64,92,24,37,16,4373,58.52,3,No,Low
558,Player_558,36,Netherlands,Liverpool,CM,88,95,37,29,21,3426,44.98,1,No,Low
559,Player_559,35,Germany,FC Barcelona,RB,89,96,43,4,15,528,134.8,3,Yes,Medium
560,Player_560,31,England,FC Barcelona,RW,88,84,14,0,11,2133,108.58,3,No,High
561,Player_561,32,France,Manchester City,RW,85,95,43,0,2,1924,101.92,4,No,Low
562,Player_562,37,France,Manchester City,CM,78,95,40,19,13,1360,27.3,1,No,Medium
563,Player_563,21,Netherlands,Manchester City,GK,85,86,50,10,16,862,32.09,1,Yes,Low
564,Player_564,19,Germany,FC Barcelona,CDM,86,73,52,25,21,3216,51.08,1,Yes,Medium
565,Player_565,28,Argentina,Bayern Munich,RB,89,73,33,2,15,2362,37.63,0,No,Low
566,Player_566,36,Spain,Manchester City,CB,89,79,44,5,20,4320,174.87,1,No,Medium
567,Player_567,37,Portugal,Real Madrid,RW,62,77,12,10,11,3494,3.84,4,No,Medium
568,Player_568,20,Spain,Juventus,RB,66,86,7,7,23,1967,112.88,0,Yes,Low
569,Player_569,37,Spain,Manchester City,GK,68,80,12,28,1,67,93.41,2,No,Low
570,Player_570,39,Netherlands,Juventus,RB,72,96,35,9,7,1642,58.52,5,No,High
571,Player_571,32,England,PSG,CM,74,66,5,33,11,1020,159.82,3,No,Medium
572,Player_572,23,Spain,Manchester City,CB,64,90,37,23,20,3143,120.79,1,Yes,Medium
573,Player_573,29,France,FC Barcelona,ST,88,78,31,16,15,1470,179.7,2,No,Medium
574,Player_574,37,England,Liverpool,CM,94,98,20,31,7,1382,30.77,1,No,High
575,Player_575,26,Brazil,Manchester City,RB,86,72,43,10,15,2930,16.27,3,No,Low
576,Player_576,23,Spain,Liverpool,ST,86,85,43,33,9,1336,25.52,4,No,High
577,Player_577,30,Spain,PSG,RW,67,92,48,23,19,3166,48.84,4,No,Low
578,Player_578,21,Brazil,Real Madrid,ST,91,70,6,4,14,1242,75.31,3,No,Low
579,Player_579,19,Spain,Liverpool,GK,79,84,25,28,3,1705,155.34,2,No,Medium
580,Player_580,39,Brazil,Juventus,LW,69,95,14,33,14,3199,51.4,0,Yes,High
581,Player_581,27,England,Bayern Munich,GK,72,97,48,15,3,2594,164.79,5,Yes,Low
582,Player_582,27,France,Manchester City,CM,88,71,41,24,10,3937,83.59,5,Yes,Low
583,Player_583,34,Brazil,PSG,LW,94,72,22,36,5,1679,116.65,5,No,Medium
584,Player_584,31,Argentina,PSG,CM,67,73,51,7,3,1315,47.96,0,Yes,Low
585,Player_585,28,Netherlands,Liverpool,CB,88,66,37,28,8,567,28.5,1,No,High
586,Player_586,25,Netherlands,Real Madrid,LB,90,81,40,24,8,2704,156.57,3,No,Medium
587,Player_587,26,Brazil,FC Barcelona,RW,89,81,14,22,2,2451,20.16,3,Yes,High
588,Player_588,28,Netherlands,Manchester City,RW,81,94,47,33,22,1748,139.44,0,No,Low
589,Player_589,33,Spain,PSG,RB,80,70,52,2,4,647,104.79,2,Yes,Low
590,Player_590,22,Portugal,Real Madrid,CDM,71,68,39,29,14,2193,155.07,5,No,Medium
591,Player_591,23,Portugal,Bayern Munich,CM,70,73,15,33,8,2808,129.35,3,No,Low
592,Player_592,30,Netherlands,PSG,LB,61,70,31,31,1,124,51.06,4,No,Medium
593,Player_593,29,England,Real Madrid,LB,61,77,36,28,2,1537,103.61,4,No,Low
594,Player_594,24,Germany,FC Barcelona,GK,93,86,17,8,20,1970,2.85,3,No,Low
595,Player_595,26,England,FC Barcelona,GK,62,92,19,1,11,2762,85.8,5,No,High
596,Player_596,25,Germany,PSG,CDM,75,94,45,38,15,1817,15.94,5,No,Medium
597,Player_597,34,Portugal,Juventus,RB,63,66,1,6,4,814,77.5,5,No,Low
598,Player_598,18,Portugal,PSG,ST,82,72,54,4,9,3101,20.18,2,No,High
599,Player_599,21,Brazil,Liverpool,GK,79,73,22,7,14,4151,172.01,4,No,Medium
600,Player_600,21,France,Manchester City,RB,84,65,29,31,13,1654,94.39,2,No,Medium
601,Player_601,22,Argentina,Real Madrid,CB,89,77,2,17,13,131,164.42,0,Yes,Low
602,Player_602,35,England,PSG,RW,77,79,45,37,22,230,4.51,1,No,Low
603,Player_603,24,Spain,Manchester City,RW,70,96,38,17,12,394,114.96,5,No,High
604,Player_604,32,Germany,Liverpool,RB,88,98,46,15,15,3573,55.6,0,No,Low
605,Player_605,29,Netherlands,Manchester City,CDM,76,95,48,20,7,981,78.01,1,No,Low
606,Player_606,17,Spain,PSG,LB,85,78,0,9,7,932,157.22,4,Yes,Low
607,Player_607,38,France,FC Barcelona,CDM,82,78,40,3,16,1409,176.41,1,No,Low
608,Player_608,36,Germany,Real Madrid,RB,79,93,21,7,16,2955,44.75,1,No,Medium
609,Player_609,33,England,Real Madrid,CM,61,83,28,18,2,2741,170.71,3,Yes,Low
610,Player_610,23,Brazil,FC Barcelona,LW,83,91,13,39,0,2938,124.13,1,No,Low
611,Player_611,29,Spain,Juventus,RW,90,73,47,39,16,3420,171.28,3,No,High
612,Player_612,20,France,PSG,RB,86,92,27,8,23,2504,101.44,1,Yes,Medium
613,Player_613,20,England,Real Madrid,LB,61,88,20,29,15,3033,172.96,3,No,Low
614,Player_614,22,Portugal,PSG,LW,73,92,44,16,16,3979,160.7,4,No,Medium
615,Player_615,35,Portugal,Liverpool,CB,63,82,31,39,24,3823,23.58,4,No,Low
616,Player_616,28,England,PSG,GK,72,89,5,14,1,4480,56.29,1,No,Low
617,Player_617,38,England,Manchester City,CM,94,68,53,3,24,711,44.13,2,Yes,Medium
618,Player_618,23,England,FC Barcelona,GK,67,78,0,5,13,2976,103.19,4,No,Medium
619,Player_619,26,Germany,Juventus,LW,61,90,20,15,6,1471,144.6,0,No,High
620,Player_620,35,England,PSG,LW,65,72,3,25,24,3699,136.81,0,Yes,Medium
621,Player_621,23,Spain,Juventus,GK,90,88,2,36,18,3186,130.95,3,No,High
622,Player_622,19,France,Juventus,LB,69,80,48,22,0,1142,67.86,2,No,High
623,Player_623,29,Germany,Liverpool,LB,80,84,29,12,16,3981,25.56,5,No,Medium
624,Player_624,29,England,Bayern Munich,ST,69,79,30,16,9,2568,38.3,3,No,High
625,Player_625,34,Argentina,FC Barcelona,CB,82,71,33,26,5,1608,133.63,1,No,Medium
626,Player_626,36,Netherlands,Juventus,LB,62,81,18,21,6,3822,26.98,4,No,Low
627,Player_627,24,Argentina,Real Madrid,CB,91,86,19,36,24,1897,40.52,2,No,Low
628,Player_628,25,France,Manchester City,CB,79,86,22,18,5,2192,76.71,3,No,Low
629,Player_629,23,Portugal,Real Madrid,LW,69,76,53,38,4,4072,13.44,3,Yes,High
630,Player_630,17,Brazil,Liverpool,CB,88,82,39,34,1,1091,38.68,0,No,Medium
631,Player_631,19,Brazil,Liverpool,CM,93,79,24,12,17,699,27.38,1,No,Medium
632,Player_632,29,Netherlands,Real Madrid,GK,79,80,14,13,23,4092,171.26,3,No,Low
633,Player_633,33,Portugal,FC Barcelona,ST,67,69,37,30,16,1901,34.88,0,No,Medium
634,Player_634,17,Germany,Real Madrid,RB,66,66,22,1,23,2178,155.19,2,No,Low
635,Player_635,22,Germany,PSG,CDM,65,92,51,38,22,732,21.11,3,Yes,High
636,Player_636,37,Germany,Real Madrid,ST,70,91,1,36,6,512,156.61,5,No,High
637,Player_637,22,Brazil,Manchester City,CM,77,95,14,13,20,2687,108.1,5,No,Medium
638,Player_638,28,Argentina,Manchester City,ST,88,65,51,8,18,4096,153.02,0,Yes,Low
639,Player_639,29,Brazil,Bayern Munich,CB,84,93,43,9,6,3756,156.19,5,No,Low
640,Player_640,29,Spain,Manchester City,LW,80,65,34,6,22,431,107.55,1,No,Low
641,Player_641,31,England,Real Madrid,CDM,62,72,9,27,6,4494,165.23,4,No,Low
642,Player_642,37,Germany,Manchester City,LB,77,80,13,24,15,807,105.59,5,No,High
643,Player_643,32,Argentina,FC Barcelona,LW,83,92,26,27,11,1279,128.41,2,Yes,Low
644,Player_644,38,France,Juventus,CB,69,86,53,1,14,2221,75.19,3,Yes,Medium
645,Player_645,37,Netherlands,Manchester City,CB,86,82,13,16,14,854,164.58,0,No,Medium
646,Player_646,27,France,PSG,CDM,71,86,34,3,10,3212,148.44,3,No,Low
647,Player_647,21,England,FC Barcelona,CDM,66,76,32,12,1,2586,30.43,4,No,Low
648,Player_648,20,Argentina,Bayern Munich,RW,76,83,51,17,2,2768,103.96,3,No,High
649,Player_649,19,Brazil,PSG,LW,60,89,0,2,18,4338,161.48,3,No,Low
650,Player_650,35,Brazil,Real Madrid,LB,85,69,33,36,19,3340,142.86,0,No,Medium
651,Player_651,36,Spain,Juventus,ST,74,98,18,32,24,3228,173.28,4,Yes,Low
652,Player_652,34,Spain,Real Madrid,CB,92,74,23,23,14,1619,42.02,2,No,High
653,Player_653,31,Brazil,Juventus,CB,90,71,41,7,15,275,66.46,0,Yes,Low
654,Player_654,25,France,Juventus,RW,94,79,3,34,0,4103,91.54,4,No,Medium
655,Player_655,33,Netherlands,Real Madrid,LW,60,88,35,1,14,3863,42.26,4,Yes,Medium
656,Player_656,30,Germany,PSG,LW,67,90,12,32,11,714,71.23,3,Yes,Low
657,Player_657,31,France,PSG,GK,71,90,31,11,6,2080,96.99,1,No,Low
658,Player_658,17,Netherlands,Juventus,CDM,78,90,8,21,6,809,34.85,1,No,High
659,Player_659,37,Spain,PSG,LB,84,74,38,12,10,3726,46.58,2,Yes,Low
660,Player_660,38,England,Juventus,CDM,91,81,15,9,19,3978,22.91,3,No,Medium
661,Player_661,38,Netherlands,Juventus,LB,71,78,49,16,10,861,128.55,1,No,Medium
662,Player_662,19,Brazil,FC Barcelona,CM,72,66,2,4,16,36,65.4,0,No,Low
663,Player_663,32,Spain,Liverpool,RB,87,77,51,8,2,3811,40.04,2,No,Low
664,Player_664,39,Spain,FC Barcelona,LB,60,91,19,12,15,2081,91.56,3,No,Low
665,Player_665,27,Germany,Real Madrid,CDM,65,73,9,22,4,454,12.75,5,No,Medium
666,Player_666,28,Brazil,Liverpool,CB,67,71,21,29,1,3308,166.25,0,Yes,Medium
667,Player_667,26,Germany,Manchester City,CDM,63,74,47,3,22,4307,53.36,1,No,High
668,Player_668,32,Brazil,Real Madrid,LB,64,73,2,20,6,3211,159.62,1,Yes,Medium
669,Player_669,24,Germany,Bayern Munich,LW,84,86,10,8,9,2655,89.82,1,No,High
670,Player_670,22,Netherlands,FC Barcelona,CDM,81,87,24,6,4,981,153.1,1,No,Low
671,Player_671,28,France,PSG,RW,87,71,41,15,14,4391,44.85,4,No,Medium
672,Player_672,37,England,FC Barcelona,GK,82,73,47,22,11,151,31.96,5,Yes,Low
673,Player_673,24,England,PSG,CB,63,91,7,22,9,3294,152.97,2,No,Low
674,Player_674,20,Brazil,Liverpool,RW,63,88,8,30,21,599,38.72,2,No,Medium
675,Player_675,24,Argentina,Bayern Munich,LB,80,93,14,4,16,1322,134.44,1,No,Medium
676,Player_676,34,Portugal,Liverpool,CM,61,81,31,5,19,1511,62.35,2,No,Low
677,Player_677,21,Spain,Bayern Munich,RW,66,84,52,0,19,2258,134.8,5,No,Medium
678,Player_678,25,Spain,FC Barcelona,RB,75,71,2,27,10,231,163.42,0,No,Low
679,Player_679,20,Brazil,PSG,CM,76,71,3,17,7,2742,176.7,0,Yes,High
680,Player_680,38,Netherlands,Liverpool,ST,79,92,29,23,14,4462,65.09,2,No,Low
681,Player_681,33,Germany,Bayern Munich,CB,82,83,12,12,1,571,66.47,1,Yes,Low
682,Player_682,25,Argentina,Juventus,ST,93,84,43,32,16,1202,176.66,3,No,Medium
683,Player_683,17,France,Real Madrid,CDM,70,71,20,9,22,1507,155.14,5,Yes,Medium
684,Player_684,37,Germany,Real Madrid,LB,93,70,40,6,5,1612,8.59,1,No,Medium
685,Player_685,36,Germany,Liverpool,CB,92,89,45,36,20,3566,103.43,4,Yes,Medium
686,Player_686,29,Brazil,PSG,LW,85,77,18,31,12,4040,33.03,3,Yes,High
687,Player_687,32,Brazil,Juventus,CM,61,86,38,21,7,1570,178.93,5,No,Medium
688,Player_688,29,Netherlands,Liverpool,LW,82,81,47,15,10,1039,25.44,4,No,Medium
689,Player_689,30,Spain,FC Barcelona,ST,81,86,21,23,14,1425,100.9,2,No,Medium
690,Player_690,19,Brazil,Bayern Munich,RW,93,98,19,13,12,4081,119.9,4,Yes,High
691,Player_691,22,Brazil,FC Barcelona,RW,74,72,36,10,17,170,168.7,2,No,Low
692,Player_692,34,Brazil,Real Madrid,LB,69,82,30,18,17,188,152.58,4,No,Medium
693,Player_693,35,Netherlands,Bayern Munich,ST,74,88,9,22,24,599,44.61,3,No,Medium
694,Player_694,21,Spain,Liverpool,GK,88,66,17,33,16,4017,103.29,4,No,Low
695,Player_695,31,France,FC Barcelona,CB,82,66,42,39,21,3332,171.67,1,No,Medium
696,Player_696,18,France,Manchester City,CM,76,91,38,12,12,3576,132.56,2,No,Low
697,Player_697,26,Portugal,PSG,RW,68,78,45,38,2,2389,124.06,0,No,Low
698,Player_698,34,Portugal,Juventus,RW,68,76,19,27,20,953,136.0,4,No,High
699,Player_699,29,Brazil,Juventus,LW,75,96,17,39,23,1625,58.39,2,Yes,Low
700,Player_700,21,Portugal,PSG,LW,92,92,10,15,6,1870,131.4,0,No,Medium
701,Player_701,39,Spain,Manchester City,CDM,90,92,21,27,11,4261,42.3,2,No,Low
702,Player_702,17,Netherlands,Real Madrid,GK,65,89,43,3,3,2024,77.34,2,No,Medium
703,Player_703,38,France,Bayern Munich,LW,69,68,17,27,23,4329,160.24,0,No,Low
704,Player_704,17,Germany,PSG,LW,75,90,33,11,10,640,3.91,0,No,Low
705,Player_705,34,France,Manchester City,CB,63,67,22,15,13,1827,74.87,3,No,High
706,Player_706,31,France,Liverpool,LW,81,65,0,35,17,539,48.39,5,No,Low
707,Player_707,33,Spain,Juventus,CM,72,81,54,19,6,2365,36.15,4,No,Low
708,Player_708,27,Portugal,Manchester City,CB,75,71,9,25,4,4438,151.02,4,No,Low
709,Player_709,37,Germany,Real Madrid,CDM,88,69,52,25,15,3501,125.52,2,No,Low
710,Player_710,38,Spain,Real Madrid,ST,65,83,0,21,10,3947,20.72,1,No,Low
711,Player_711,33,Brazil,FC Barcelona,CB,85,98,37,8,21,3026,89.26,1,No,Low
712,Player_712,29,Netherlands,PSG,ST,70,80,38,4,2,3537,84.31,5,No,Medium
713,Player_713,17,England,FC Barcelona,RW,83,91,48,16,15,4174,26.08,2,No,High
714,Player_714,18,France,Juventus,CDM,88,89,8,33,10,2496,144.06,3,No,Medium
715,Player_715,25,England,Manchester City,CDM,62,90,30,1,9,4286,66.32,0,No,Medium
716,Player_716,19,Netherlands,Bayern Munich,CB,69,78,6,6,22,2089,137.27,2,Yes,Low
717,Player_717,17,Netherlands,Bayern Munich,RB,60,78,16,35,22,3321,34.98,4,No,High
718,Player_718,37,Spain,Real Madrid,CDM,85,78,34,12,1,3581,57.06,1,No,Low
719,Player_719,32,Spain,Bayern Munich,ST,71,89,47,19,15,2549,17.58,1,No,High
720,Player_720,39,Spain,Bayern Munich,CDM,73,68,36,29,16,1216,26.25,1,Yes,Low
721,Player_721,22,England,Juventus,RW,84,79,51,29,9,3978,159.03,3,No,High
722,Player_722,33,Spain,Bayern Munich,CM,67,96,17,10,17,741,20.09,4,No,Medium
723,Player_723,21,Netherlands,Manchester City,RB,63,82,32,30,11,4185,17.68,3,No,Low
724,Player_724,21,Brazil,Bayern Munich,LB,87,78,3,2,7,1714,169.3,0,No,High
725,Player_725,22,Spain,Liverpool,CDM,66,65,22,1,2,4044,116.44,2,Yes,Low
726,Player_726,19,Argentina,Bayern Munich,LW,69,84,10,2,19,647,18.61,2,No,Medium
727,Player_727,37,Portugal,Bayern Munich,CB,61,74,51,14,23,2797,174.92,1,No,High
728,Player_728,39,England,FC Barcelona,CB,85,74,8,16,2,818,26.9,1,Yes,Low
729,Player_729,21,Argentina,Manchester City,CB,73,88,29,6,5,242,138.06,0,Yes,Low
730,Player_730,37,Spain,Real Madrid,GK,75,98,7,4,1,4314,6.76,3,No,Medium
731,Player_731,21,Netherlands,FC Barcelona,RB,76,92,39,33,2,4104,112.61,5,No,Medium
732,Player_732,26,Brazil,PSG,RB,81,91,4,32,16,3877,98.63,5,No,High
733,Player_733,26,France,Manchester City,ST,63,65,11,15,8,12,37.84,5,No,Medium
734,Player_734,35,Germany,Liverpool,CDM,78,97,0,36,3,3017,115.94,4,No,Low
735,Player_735,33,Portugal,Manchester City,LB,61,68,14,2,21,689,111.26,0,Yes,High
736,Player_736,37,Germany,PSG,CB,68,71,24,20,22,3138,143.8,2,No,High
737,Player_737,30,Spain,PSG,CDM,78,73,17,7,1,3740,157.72,2,Yes,Low
738,Player_738,25,Portugal,PSG,RB,75,80,37,21,23,676,92.06,3,No,Low
739,Player_739,30,Portugal,Juventus,RW,84,69,41,4,8,3574,88.51,0,No,Low
740,Player_740,17,Brazil,Real Madrid,CB,77,98,45,16,13,4303,112.08,4,No,High
741,Player_741,35,Portugal,Bayern Munich,CDM,82,87,52,36,10,1323,131.39,0,No,Low
742,Player_742,29,England,Manchester City,RB,80,89,25,13,1,2865,64.43,0,Yes,High
743,Player_743,29,Argentina,Juventus,CM,70,77,39,38,20,1002,91.08,3,No,High
744,Player_744,20,Argentina,Bayern Munich,RB,63,88,2,27,1,2502,105.53,4,No,Low
745,Player_745,17,Argentina,Bayern Munich,LW,84,75,53,30,4,1765,177.91,5,No,Medium
746,Player_746,33,England,Liverpool,GK,91,81,21,16,6,1553,105.99,2,Yes,Low
747,Player_747,24,Germany,PSG,GK,89,77,25,34,21,2291,40.74,1,No,Low
748,Player_748,18,Brazil,Real Madrid,CB,85,91,18,39,3,1985,106.04,5,No,Medium
749,Player_749,24,Portugal,Liverpool,CM,93,84,43,21,13,237,147.6,4,No,Medium
750,Player_750,23,England,FC Barcelona,CM,68,97,43,28,1,3317,154.4,2,No,Medium
751,Player_751,18,Argentina,Juventus,CB,71,96,46,9,22,2392,144.14,5,No,High
752,Player_752,38,Spain,Juventus,CDM,61,72,38,17,11,3555,159.93,3,No,Low
753,Player_753,38,France,Real Madrid,CB,64,93,35,34,9,1584,60.59,4,Yes,Medium
754,Player_754,19,Portugal,Bayern Munich,LB,64,83,20,15,24,1307,91.61,4,No,High
755,Player_755,34,England,Juventus,LB,81,70,40,6,0,2085,140.44,2,No,Low
756,Player_756,28,Netherlands,Real Madrid,GK,64,85,53,29,18,1819,47.97,2,Yes,Medium
757,Player_757,17,England,Juventus,RB,63,86,47,18,22,31,67.2,0,No,Medium
758,Player_758,38,Brazil,Juventus,CB,68,74,25,22,15,291,149.69,0,No,High
759,Player_759,28,Brazil,PSG,CB,88,74,12,7,14,3686,138.73,4,Yes,Low
760,Player_760,21,England,FC Barcelona,CDM,81,93,35,16,13,4387,174.83,1,No,Medium
761,Player_761,33,Argentina,PSG,ST,86,80,23,20,8,1642,179.28,3,No,High
762,Player_762,32,France,FC Barcelona,GK,69,65,40,25,20,577,43.71,2,No,Low
763,Player_763,31,Portugal,Juventus,GK,75,81,25,27,22,3909,162.13,0,No,Low
764,Player_764,39,Brazil,Liverpool,GK,69,94,20,38,14,1223,17.47,3,Yes,Medium
765,Player_765,31,Portugal,Bayern Munich,RB,65,90,17,32,6,4076,127.91,5,No,Low
766,Player_766,21,Argentina,Juventus,RW,64,83,14,39,3,2652,40.01,5,No,Medium
767,Player_767,37,Portugal,FC Barcelona,ST,65,85,14,18,20,446,54.41,4,Yes,Low
768,Player_768,30,Spain,FC Barcelona,RB,84,81,5,28,17,3419,170.36,2,No,High
769,Player_769,18,Brazil,FC Barcelona,LB,63,85,42,19,7,4373,47.74,5,Yes,High
770,Player_770,27,Argentina,Juventus,CDM,91,83,30,19,11,3041,121.34,2,No,Low
771,Player_771,35,Argentina,Real Madrid,LB,94,71,27,9,14,2579,32.47,0,Yes,Low
772,Player_772,23,France,Liverpool,CM,69,81,7,11,14,1422,17.26,5,Yes,Medium
773,Player_773,22,France,Real Madrid,GK,93,65,28,32,16,2609,61.41,1,Yes,Low
774,Player_774,18,Spain,Bayern Munich,LW,65,70,20,24,1,3081,112.54,5,No,Medium
775,Player_775,22,Argentina,Juventus,GK,75,90,16,24,11,58,45.01,2,No,Low
776,Player_776,34,Germany,FC Barcelona,GK,78,66,48,3,2,3159,54.38,1,No,Low
777,Player_777,18,Argentina,Liverpool,CDM,93,96,23,3,6,458,127.72,3,No,Low
778,Player_778,34,France,Liverpool,ST,84,69,49,8,5,103,18.95,5,No,Low
779,Player_779,31,Germany,Manchester City,LB,90,95,35,14,13,788,80.72,2,No,Low
780,Player_780,35,Brazil,Bayern Munich,CM,76,76,30,25,22,741,169.54,5,No,Medium
781,Player_781,18,Brazil,Liverpool,GK,89,94,46,14,4,3406,71.76,5,No,Medium
782,Player_782,36,Portugal,Juventus,CB,90,70,33,25,3,1572,78.44,2,No,Medium
783,Player_783,22,England,FC Barcelona,RW,78,79,1,27,14,2701,133.01,1,No,Medium
784,Player_784,17,France,FC Barcelona,CB,94,79,41,6,6,3412,140.33,0,No,Low
785,Player_785,31,England,Liverpool,CB,88,80,2,31,2,2976,138.64,5,No,Low
786,Player_786,39,Germany,Real Madrid,CDM,60,84,29,11,12,2134,179.62,4,No,Low
787,Player_787,26,France,Bayern Munich,LW,63,77,7,34,9,427,13.33,3,No,Medium
788,Player_788,35,Spain,FC Barcelona,LW,87,95,51,31,22,1944,176.81,2,No,Medium
789,Player_789,33,Argentina,Liverpool,LB,77,98,6,8,1,1271,171.06,5,No,Medium
790,Player_790,21,Spain,FC Barcelona,LW,85,93,11,13,11,411,153.46,0,Yes,Medium
791,Player_791,20,Germany,Liverpool,CB,78,67,18,12,23,1931,82.02,2,No,Low
792,Player_792,26,France,Bayern Munich,CDM,65,73,25,32,21,2495,156.83,5,No,High
793,Player_793,33,Netherlands,Liverpool,CM,60,75,27,31,11,246,40.14,3,No,High
794,Player_794,26,Germany,Manchester City,LB,67,75,14,18,18,2817,142.6,4,No,Low
795,Player_795,33,Netherlands,Liverpool,RB,92,89,13,29,18,2171,33.75,2,Yes,Medium
796,Player_796,36,Argentina,Liverpool,CM,80,86,47,15,20,3331,146.86,5,No,Medium
797,Player_797,21,Brazil,Juventus,ST,83,73,13,11,2,2924,110.81,1,No,Medium
798,Player_798,18,Brazil,Bayern Munich,ST,84,84,2,9,5,2060,18.1,0,No,High
799,Player_799,22,Germany,Juventus,ST,78,85,49,1,1,3334,161.21,4,Yes,Medium
800,Player_800,37,England,Liverpool,ST,88,74,28,17,23,944,104.24,2,No,Medium
801,Player_801,18,France,Bayern Munich,CDM,69,86,53,12,12,2247,118.3,5,No,Medium
802,Player_802,29,France,Manchester City,CM,71,93,5,28,8,1262,51.39,4,No,Low
803,Player_803,27,Brazil,Bayern Munich,GK,92,73,48,23,12,175,156.96,1,No,Low
804,Player_804,27,Portugal,FC Barcelona,RW,66,69,22,37,22,1052,98.36,2,No,Low
805,Player_805,32,Spain,Juventus,LB,76,75,27,11,13,2724,76.09,4,Yes,Low
806,Player_806,27,Portugal,Bayern Munich,RB,69,65,13,28,18,2582,96.4,2,No,High
807,Player_807,35,Argentina,Manchester City,CB,90,65,13,21,10,1317,126.74,2,No,Low
808,Player_808,31,Spain,PSG,ST,65,69,19,35,13,3367,125.26,4,No,High
809,Player_809,39,Spain,Liverpool,RB,76,86,12,0,15,1674,64.69,2,No,High
810,Player_810,39,Germany,Bayern Munich,RW,77,90,26,39,9,333,69.65,1,Yes,High
811,Player_811,32,Brazil,Liverpool,RB,85,70,34,33,19,1264,101.42,4,Yes,Low
812,Player_812,27,Portugal,Real Madrid,CM,75,96,44,33,15,3177,166.43,5,Yes,Low
813,Player_813,38,Portugal,FC Barcelona,RB,67,75,1,32,1,2945,134.3,4,Yes,Low
814,Player_814,32,Brazil,Juventus,ST,83,74,40,3,24,4218,70.58,1,No,High
815,Player_815,24,Portugal,FC Barcelona,RW,72,98,44,37,15,2665,61.0,1,Yes,High
816,Player_816,20,Netherlands,Real Madrid,CB,88,95,39,29,13,415,94.49,1,No,Low
817,Player_817,24,Brazil,Real Madrid,GK,91,76,47,19,20,707,156.66,5,No,Low
818,Player_818,20,Germany,Juventus,LW,83,80,23,25,17,2684,2.06,5,No,Medium
819,Player_819,19,England,Bayern Munich,ST,75,67,28,14,5,3366,128.03,2,No,Low
820,Player_820,19,Spain,Real Madrid,RW,70,66,2,6,6,3503,53.36,2,No,High
821,Player_821,34,Germany,PSG,CM,91,69,44,6,12,4442,37.91,3,Yes,High
822,Player_822,35,France,Liverpool,CDM,65,75,3,28,1,2559,2.68,2,Yes,Medium
823,Player_823,35,Argentina,Liverpool,RW,94,89,49,22,14,3971,161.44,1,No,Medium
824,Player_824,37,England,Manchester City,LW,92,86,1,33,16,2957,164.25,3,No,Medium
825,Player_825,21,France,Real Madrid,LW,77,86,19,19,12,1729,11.52,1,No,Low
826,Player_826,34,Spain,Real Madrid,LB,72,75,53,14,6,1901,94.17,0,No,High
827,Player_827,26,Portugal,PSG,GK,69,96,52,32,0,1041,27.89,5,No,High
828,Player_828,38,Brazil,FC Barcelona,LW,85,95,14,16,2,26,136.68,4,No,Low
829,Player_829,37,Spain,FC Barcelona,LB,76,72,48,19,19,2583,119.94,0,No,Low
830,Player_830,22,Germany,Liverpool,LB,60,84,31,12,17,1052,53.83,5,Yes,Low
831,Player_831,17,Argentina,Liverpool,LB,84,98,41,23,6,1674,21.49,5,Yes,High
832,Player_832,21,Germany,Bayern Munich,RW,93,68,0,36,20,3055,149.7,1,No,Low
833,Player_833,25,England,Juventus,LB,69,82,37,6,16,1658,121.53,2,No,Medium
834,Player_834,28,England,PSG,ST,79,68,34,7,11,3951,1.72,4,No,Low
835,Player_835,30,Argentina,Juventus,ST,66,84,50,22,15,3188,113.2,2,No,High
836,Player_836,18,Netherlands,Juventus,CDM,75,73,6,13,23,1741,145.95,2,Yes,Medium
837,Player_837,33,France,Manchester City,LW,88,80,44,3,9,4087,106.54,4,No,Low
838,Player_838,30,France,Juventus,GK,71,90,12,20,22,4137,76.74,4,No,Low
839,Player_839,29,England,Manchester City,LB,76,89,48,9,15,3231,105.31,0,No,Low
840,Player_840,25,England,Juventus,CM,79,68,0,21,19,1714,111.74,1,No,Medium
841,Player_841,31,Portugal,PSG,CM,85,83,13,29,17,3196,115.39,2,No,Medium
842,Player_842,38,Brazil,Manchester City,LW,78,78,28,29,14,3331,174.08,1,No,Low
843,Player_843,31,Portugal,FC Barcelona,CDM,71,85,2,15,22,3347,32.57,1,No,Medium
844,Player_844,27,Portugal,Manchester City,CM,80,79,45,10,10,1986,112.35,3,No,Low
845,Player_845,32,Netherlands,Manchester City,ST,93,67,23,21,17,3544,34.24,0,No,High
846,Player_846,33,France,PSG,RB,66,80,0,28,5,701,38.19,2,No,Low
847,Player_847,20,Netherlands,PSG,RW,94,78,47,24,0,1454,120.63,5,Yes,High
848,Player_848,17,Netherlands,Manchester City,CB,74,73,9,13,22,3786,164.91,4,No,Medium
849,Player_849,24,Argentina,Real Madrid,CM,60,71,12,13,6,2471,29.05,4,No,Medium
850,Player_850,33,France,PSG,GK,85,78,35,1,11,4260,173.26,1,No,Low
851,Player_851,19,Brazil,Bayern Munich,LB,94,70,8,12,19,3044,57.83,0,No,Low
852,Player_852,36,Germany,Bayern Munich,GK,84,85,13,2,3,3883,70.74,0,No,Medium
853,Player_853,31,England,FC Barcelona,RW,74,79,35,29,9,2940,28.09,2,No,Medium
854,Player_854,31,England,Juventus,ST,81,72,9,17,20,1820,111.04,2,No,Low
855,Player_855,38,Brazil,Manchester City,CDM,65,98,39,35,1,2802,107.56,1,Yes,High
856,Player_856,30,Netherlands,Real Madrid,RW,74,65,22,20,8,3795,79.89,1,Yes,Low
857,Player_857,39,Portugal,FC Barcelona,CB,83,96,34,18,9,2463,85.96,1,Yes,Low
858,Player_858,30,Argentina,Manchester City,RB,80,69,54,15,19,3371,112.32,3,Yes,Medium
859,Player_859,18,Netherlands,PSG,CM,66,94,6,27,10,335,105.24,0,Yes,High
860,Player_860,29,England,Bayern Munich,CDM,88,86,41,3,24,1924,67.68,1,No,Low
861,Player_861,30,Spain,Liverpool,CDM,91,84,34,14,13,3860,159.2,0,No,Medium
862,Player_862,35,Portugal,Real Madrid,CM,91,80,1,0,2,2788,120.35,5,No,Medium
863,Player_863,23,England,Liverpool,CM,64,71,14,15,24,4125,37.37,4,No,High
864,Player_864,19,Spain,Bayern Munich,CM,63,71,8,19,0,3606,57.92,4,No,Low
865,Player_865,31,Netherlands,Juventus,CM,81,66,46,32,6,1540,141.92,0,No,High
866,Player_866,39,Brazil,Juventus,CM,77,78,16,16,3,574,19.26,5,Yes,Low
867,Player_867,30,Brazil,Liverpool,CDM,94,95,38,4,6,220,135.17,4,No,Low
868,Player_868,27,Portugal,PSG,LW,76,78,51,4,15,2013,64.91,4,No,Low
869,Player_869,31,England,Manchester City,LW,83,69,17,38,9,2641,99.53,4,No,Low
870,Player_870,29,France,PSG,GK,61,75,14,12,14,753,50.86,2,No,Medium
871,Player_871,34,Spain,Liverpool,LW,72,69,17,35,15,1020,177.57,5,No,Medium
872,Player_872,22,Argentina,PSG,CB,74,93,23,29,5,1488,163.1,2,No,Low
873,Player_873,19,England,Bayern Munich,LW,64,75,22,3,3,1961,167.16,0,No,Low
874,Player_874,35,Argentina,Real Madrid,CDM,62,69,11,22,3,3483,33.67,0,No,Low
875,Player_875,31,England,PSG,CM,62,96,22,20,23,437,151.58,3,Yes,Low
876,Player_876,39,France,Bayern Munich,LB,94,79,20,20,22,478,96.6,2,No,Low
877,Player_877,21,France,Real Madrid,LB,82,83,25,5,3,782,127.56,0,No,Low
878,Player_878,26,Portugal,Juventus,CB,87,86,7,23,21,4167,39.54,2,No,Low
879,Player_879,23,Portugal,Manchester City,CDM,89,98,29,30,21,219,128.3,3,No,Medium
880,Player_880,33,France,Liverpool,ST,77,81,33,18,16,1027,164.61,0,Yes,High
881,Player_881,23,Germany,Juventus,RW,92,76,1,37,12,289,48.51,0,No,Low
882,Player_882,38,France,Manchester City,GK,85,89,4,11,1,379,42.39,0,No,Low
883,Player_883,28,Brazil,Juventus,ST,76,81,30,13,19,3973,19.24,0,No,Medium
884,Player_884,33,Brazil,FC Barcelona,CDM,66,74,32,11,5,2851,48.39,1,No,Low
885,Player_885,29,Germany,Juventus,LW,67,92,53,14,21,1378,96.67,5,No,Medium
886,Player_886,36,Netherlands,Bayern Munich,CM,90,82,3,18,0,1958,149.97,5,No,High
887,Player_887,20,Spain,Real Madrid,ST,71,82,5,27,7,2127,50.54,2,No,Medium
888,Player_888,26,Netherlands,Juventus,RW,90,96,22,39,17,65,112.0,2,No,Medium
889,Player_889,19,Argentina,PSG,LB,78,78,44,4,20,2183,86.59,2,Yes,Low
890,Player_890,25,Netherlands,Manchester City,RW,69,80,18,4,3,4494,52.3,3,No,Low
891,Player_891,29,England,Juventus,CM,71,82,42,5,4,3774,92.11,1,Yes,Medium
892,Player_892,34,Netherlands,Real Madrid,LW,79,80,44,22,4,4442,30.65,2,No,High
893,Player_893,31,England,Bayern Munich,RW,66,81,7,2,14,3919,115.3,2,No,High
894,Player_894,20,Germany,FC Barcelona,GK,73,71,38,36,9,777,21.26,0,Yes,Low
895,Player_895,31,Brazil,Manchester City,RW,70,76,12,32,7,2566,131.71,0,No,Low
896,Player_896,38,Portugal,Liverpool,CDM,66,98,0,20,6,1903,32.4,0,Yes,Low
897,Player_897,18,England,Real Madrid,LW,88,74,5,19,11,2761,179.67,2,No,Low
898,Player_898,31,Brazil,Liverpool,CM,69,69,6,0,24,3851,148.35,0,No,High
899,Player_899,24,Spain,Real Madrid,LB,88,85,47,38,10,78,62.22,2,No,Low
900,Player_900,24,Argentina,Real Madrid,LB,68,67,26,16,12,1581,77.0,3,Yes,Low
901,Player_901,33,Spain,Bayern Munich,RW,69,83,14,28,14,2162,47.02,3,No,High
902,Player_902,28,Germany,Bayern Munich,CDM,78,70,51,7,16,985,138.2,4,No,Low
903,Player_903,35,Netherlands,Bayern Munich,ST,90,78,33,25,21,1485,68.84,1,Yes,Medium
904,Player_904,26,Netherlands,Juventus,ST,76,68,22,27,21,2620,136.06,0,No,Low
905,Player_905,25,France,PSG,CDM,68,82,47,33,17,964,3.8,5,Yes,Low
906,Player_906,21,France,Real Madrid,GK,92,93,48,25,7,2547,24.84,0,No,Low
907,Player_907,22,France,Manchester City,ST,93,80,23,12,5,828,66.01,1,No,Medium
908,Player_908,36,Spain,Liverpool,ST,83,84,14,36,10,3173,20.05,1,Yes,Medium
909,Player_909,18,England,Bayern Munich,CM,68,88,34,12,8,2673,108.4,4,Yes,Medium
910,Player_910,29,Argentina,Juventus,CM,66,83,3,37,4,1718,9.62,1,No,Medium
911,Player_911,22,France,Bayern Munich,LW,75,68,43,24,6,2432,154.83,2,Yes,High
912,Player_912,21,Germany,Liverpool,GK,78,97,36,22,21,1228,137.15,0,Yes,Low
913,Player_913,17,Germany,Liverpool,GK,65,66,16,21,14,2410,39.32,1,No,High
914,Player_914,37,France,Real Madrid,LW,70,77,30,20,20,3778,87.34,2,No,Low
915,Player_915,38,Netherlands,Bayern Munich,GK,71,94,37,29,21,1840,81.6,1,No,Low
916,Player_916,37,France,Liverpool,CB,72,98,9,10,3,497,130.61,5,No,Low
917,Player_917,22,Argentina,PSG,RB,71,94,53,3,18,536,72.57,2,No,Low
918,Player_918,22,France,PSG,CM,80,88,49,32,12,3305,6.41,3,No,High
919,Player_919,39,Argentina,Bayern Munich,LW,69,97,26,11,0,1164,49.64,2,No,Low
920,Player_920,32,Germany,Juventus,LW,79,74,41,8,0,1971,84.18,4,No,Low
921,Player_921,20,France,Liverpool,GK,87,82,5,31,21,3527,175.42,2,No,Medium
922,Player_922,27,Spain,Real Madrid,ST,83,83,5,10,13,299,158.67,1,No,Low
923,Player_923,39,Portugal,Real Madrid,LB,64,71,51,36,8,2386,33.06,3,Yes,High
924,Player_924,25,Spain,Juventus,RW,71,83,14,23,23,4398,130.33,3,Yes,High
925,Player_925,39,Germany,Real Madrid,RW,94,88,3,6,11,3963,168.66,2,Yes,Low
926,Player_926,19,Argentina,FC Barcelona,LW,61,79,47,7,17,4171,2.08,1,No,Low
927,Player_927,35,Spain,Bayern Munich,CB,68,87,53,32,8,3859,129.91,3,No,Low
928,Player_928,24,Argentina,Real Madrid,LW,81,68,39,24,7,913,82.95,5,Yes,Medium
929,Player_929,21,Spain,PSG,CM,64,68,6,0,13,3695,122.6,2,No,Low
930,Player_930,20,Spain,Liverpool,GK,71,69,50,2,8,920,109.2,2,No,Medium
931,Player_931,22,Argentina,Manchester City,GK,60,87,48,39,19,1523,177.25,2,No,Medium
932,Player_932,18,England,Juventus,CB,81,75,52,27,24,1749,52.34,3,No,Low
933,Player_933,36,Spain,Manchester City,CM,78,75,44,32,1,3617,141.61,0,No,Low
934,Player_934,27,France,Real Madrid,LB,75,77,46,0,0,2700,42.62,1,No,Low
935,Player_935,20,Portugal,Manchester City,ST,90,78,25,37,12,1005,78.69,4,No,Medium
936,Player_936,31,Germany,Manchester City,CM,62,72,30,26,24,1701,175.58,4,No,Low
937,Player_937,22,England,FC Barcelona,CDM,82,89,1,37,9,3302,138.02,1,No,Low
938,Player_938,38,Argentina,PSG,RB,77,82,27,34,7,803,57.19,0,No,Low
939,Player_939,33,England,Juventus,LW,85,82,41,9,6,3366,111.68,1,No,Medium
940,Player_940,22,Brazil,PSG,CDM,72,74,12,11,23,2892,9.42,2,Yes,Low
941,Player_941,35,Brazil,FC Barcelona,CB,77,71,17,9,11,3498,48.32,5,No,High
942,Player_942,18,Spain,FC Barcelona,CDM,62,78,29,33,16,3162,129.45,1,Yes,Medium
943,Player_943,31,Spain,Manchester City,GK,82,79,54,23,24,114,102.83,1,No,Medium
944,Player_944,27,France,Bayern Munich,ST,62,80,10,27,11,3329,84.81,5,Yes,High
945,Player_945,24,Portugal,Liverpool,RW,84,66,12,21,15,4468,124.51,3,No,Medium
946,Player_946,35,Germany,Liverpool,LW,86,94,50,15,9,2137,72.02,4,Yes,Medium
947,Player_947,29,England,Manchester City,RW,86,94,23,12,24,30,5.2,4,No,Low
948,Player_948,28,Brazil,Liverpool,GK,84,82,28,35,11,1805,79.66,2,No,Medium
949,Player_949,21,Spain,FC Barcelona,GK,83,95,53,35,10,3569,162.43,5,No,Low
950,Player_950,22,Netherlands,PSG,LW,67,77,4,22,24,1436,154.26,2,No,Low
951,Player_951,38,Netherlands,Liverpool,RW,68,84,34,13,13,3428,73.91,3,Yes,Low
952,Player_952,20,Germany,Juventus,CM,89,87,18,31,21,456,4.49,2,No,Medium
953,Player_953,35,England,Manchester City,GK,78,97,54,2,19,448,114.72,5,Yes,Medium
954,Player_954,36,Spain,Bayern Munich,RW,75,84,12,26,12,67,133.54,5,No,Medium
955,Player_955,17,Spain,Manchester City,LB,83,67,4,18,1,4089,53.32,0,Yes,Medium
956,Player_956,36,Brazil,Real Madrid,RW,80,72,43,21,19,1862,86.06,3,No,Low
957,Player_957,33,Brazil,Manchester City,LB,65,96,13,0,6,1802,178.54,5,Yes,Low
958,Player_958,28,Spain,FC Barcelona,LB,64,93,37,4,0,3431,103.95,5,No,Low
959,Player_959,31,Argentina,PSG,GK,73,71,21,32,24,127,63.52,3,Yes,Low
960,Player_960,17,Spain,PSG,LW,63,66,8,18,2,3825,113.13,1,No,Medium
961,Player_961,30,Germany,Juventus,CB,67,85,48,35,19,1267,32.81,1,No,Medium
962,Player_962,22,Spain,Liverpool,GK,83,70,39,5,11,4010,36.27,0,No,Low
963,Player_963,21,France,FC Barcelona,LW,70,92,25,14,4,1042,166.52,5,No,High
964,Player_964,27,Portugal,Real Madrid,LW,76,96,44,35,11,3738,43.44,3,No,High
965,Player_965,20,France,FC Barcelona,CDM,80,73,4,32,2,367,56.29,3,Yes,Low
966,Player_966,29,France,Manchester City,RB,85,75,28,23,19,2604,98.11,1,No,Medium
967,Player_967,27,Argentina,FC Barcelona,GK,86,87,53,26,4,2640,161.99,4,Yes,Low
968,Player_968,19,Argentina,FC Barcelona,LW,75,75,21,10,0,58,140.77,4,No,Medium
969,Player_969,17,Netherlands,Juventus,CDM,85,66,48,22,15,4256,8.36,5,Yes,Low
970,Player_970,22,Spain,Real Madrid,LB,92,67,2,32,8,102,124.9,1,No,Medium
971,Player_971,34,France,Manchester City,CB,90,75,27,28,9,785,90.98,5,No,Low
972,Player_972,26,Argentina,Bayern Munich,CB,65,79,37,30,9,4278,85.86,2,No,High
973,Player_973,21,Brazil,Juventus,LB,67,75,13,0,12,3945,124.63,3,No,Medium
974,Player_974,39,Spain,Bayern Munich,RW,66,95,46,33,15,2446,35.72,5,No,Low
975,Player_975,26,Germany,Juventus,RW,93,92,13,17,19,956,176.68,0,Yes,Medium
976,Player_976,28,Portugal,PSG,GK,73,92,42,17,24,2702,116.33,4,No,Medium
977,Player_977,18,England,Juventus,RB,75,96,10,5,3,436,66.14,5,No,Medium
978,Player_978,29,Spain,Liverpool,CDM,68,89,8,39,13,2365,108.24,2,No,High
979,Player_979,24,England,FC Barcelona,CB,69,84,37,0,16,496,39.36,3,No,High
980,Player_980,18,France,PSG,ST,76,92,46,29,4,1366,114.27,2,No,Medium
981,Player_981,36,Portugal,Real Madrid,ST,71,89,43,3,12,2865,5.56,5,Yes,Low
982,Player_982,17,England,Bayern Munich,CM,65,75,5,31,24,1851,61.74,3,No,Low
983,Player_983,21,France,Juventus,LW,78,83,0,9,2,1022,134.68,3,No,High
984,Player_984,25,Brazil,FC Barcelona,LB,88,92,24,4,4,3130,145.53,1,No,High
985,Player_985,33,England,Real Madrid,LW,65,65,15,8,15,2844,45.9,1,No,Low
986,Player_986,25,Portugal,Liverpool,LW,84,69,51,4,18,1489,97.32,0,Yes,Medium
987,Player_987,27,Netherlands,Real Madrid,CDM,83,74,14,10,18,2334,95.36,0,No,Medium
988,Player_988,31,Spain,FC Barcelona,CM,84,98,33,34,16,4432,76.15,2,No,Medium
989,Player_989,22,France,Liverpool,RB,75,66,16,26,17,3389,41.5,1,No,High
990,Player_990,39,Spain,Real Madrid,CM,75,82,2,3,17,202,126.73,3,No,Low
991,Player_991,19,Portugal,Liverpool,CB,65,77,2,9,24,230,45.8,1,No,High
992,Player_992,33,Argentina,Juventus,CDM,80,69,36,38,22,3634,164.03,3,No,Low
993,Player_993,21,France,Juventus,LW,63,84,16,32,7,3128,95.37,1,No,Medium
994,Player_994,28,England,FC Barcelona,RB,93,66,54,37,17,2691,156.75,3,No,Low
995,Player_995,34,France,FC Barcelona,LW,87,75,48,7,8,3491,52.69,2,Yes,Medium
996,Player_996,30,Spain,Liverpool,GK,87,94,51,23,18,2962,145.37,1,No,Medium
997,Player_997,37,Brazil,Manchester City,GK,76,96,37,38,9,2327,20.9,4,No,Medium
998,Player_998,27,France,PSG,RW,73,96,0,32,1,2784,138.15,4,No,Medium
999,Player_999,25,England,Real Madrid,CM,66,92,6,18,16,803,69.96,3,Yes,Medium
1000,Player_1000,18,Argentina,Real Madrid,RB,81,74,25,1,24,4361,84.86,2,No,Low
1001,Player_1001,28,Netherlands,Manchester City,GK,60,86,46,10,23,3723,30.44,3,Yes,High
1002,Player_1002,19,Germany,Manchester City,RW,88,81,38,34,12,2901,3.84,2,No,Low
1003,Player_1003,19,Brazil,Manchester City,CDM,90,86,18,16,10,175,120.08,0,Yes,Medium
1004,Player_1004,17,Netherlands,Bayern Munich,RB,89,83,51,2,15,1444,106.0,1,No,Low
1005,Player_1005,24,Argentina,Bayern Munich,RW,74,81,53,21,19,4003,112.23,2,No,Low
1006,Player_1006,38,France,Liverpool,LB,77,88,29,34,6,3532,46.27,3,No,Low
1007,Player_1007,24,Spain,Bayern Munich,RB,94,96,42,20,2,4349,43.45,0,Yes,High
1008,Player_1008,27,Portugal,Juventus,RW,89,92,54,24,15,1543,149.54,3,Yes,Low
1009,Player_1009,25,Spain,Juventus,LW,93,78,13,38,18,2154,137.14,4,Yes,Low
1010,Player_1010,21,Netherlands,FC Barcelona,LB,70,70,12,1,19,2105,60.95,4,No,Medium
1011,Player_1011,30,England,Liverpool,GK,86,73,19,0,15,3413,114.99,1,No,Low
1012,Player_1012,19,Spain,Real Madrid,ST,83,85,25,6,1,3361,149.15,5,No,High
1013,Player_1013,37,Brazil,PSG,RW,94,76,26,19,13,4179,160.04,1,No,High
1014,Player_1014,21,Spain,FC Barcelona,CDM,67,94,24,5,19,1140,1.54,0,No,Medium
1015,Player_1015,21,England,Real Madrid,RW,77,95,8,35,9,1761,146.52,4,No,Low
1016,Player_1016,35,Germany,Real Madrid,ST,72,68,40,20,18,1940,63.4,2,No,Low
1017,Player_1017,30,France,Liverpool,LB,83,95,47,34,23,1806,129.45,4,No,Low
1018,Player_1018,20,Portugal,Manchester City,LB,82,91,11,35,10,3173,67.17,5,Yes,Low
1019,Player_1019,29,Netherlands,Manchester City,RB,71,89,9,7,17,656,109.32,1,No,Low
1020,Player_1020,26,France,FC Barcelona,CDM,89,69,5,3,10,2503,116.6,3,No,High
1021,Player_1021,34,Spain,Manchester City,CDM,90,70,49,15,8,658,73.2,0,No,Medium
1022,Player_1022,24,Argentina,Real Madrid,CDM,87,69,33,2,18,2838,92.54,5,Yes,Low
1023,Player_1023,24,France,Manchester City,ST,81,91,51,6,19,4236,130.87,4,No,Low
1024,Player_1024,23,Germany,Bayern Munich,CDM,87,72,40,1,9,2453,86.0,2,No,Medium
1025,Player_1025,24,Spain,Manchester City,CB,72,73,18,0,2,1054,3.01,5,No,Low
1026,Player_1026,30,Portugal,Real Madrid,ST,84,79,5,0,2,3041,2.82,2,No,High
1027,Player_1027,35,England,Liverpool,LB,66,71,1,37,23,4003,119.21,2,No,Low
1028,Player_1028,22,Germany,FC Barcelona,ST,65,96,14,6,7,2338,152.58,0,No,High
1029,Player_1029,17,Spain,PSG,LW,83,72,16,23,5,110,141.46,2,No,Medium
1030,Player_1030,39,Germany,Manchester City,LW,78,79,15,4,19,1718,56.22,2,No,High
1031,Player_1031,31,France,Juventus,CDM,78,83,27,20,0,4291,85.07,4,No,Low
1032,Player_1032,17,Portugal,Juventus,LB,68,70,20,27,19,125,42.53,0,No,Low
1033,Player_1033,33,England,Real Madrid,ST,88,83,7,17,23,261,178.05,3,No,Medium
1034,Player_1034,17,Spain,PSG,ST,83,92,9,23,5,2934,47.26,3,No,High
1035,Player_1035,31,Brazil,PSG,ST,64,81,9,31,1,2202,75.22,2,No,Medium
1036,Player_1036,39,Netherlands,Bayern Munich,CB,85,83,49,32,18,1604,122.76,5,No,Medium
1037,Player_1037,18,England,PSG,LW,73,95,9,9,6,4203,157.75,1,No,Low
1038,Player_1038,30,Brazil,Juventus,ST,88,75,8,8,10,2082,9.74,0,Yes,Low
1039,Player_1039,37,Germany,Liverpool,CB,65,79,27,32,10,3942,54.53,1,Yes,Low
1040,Player_1040,24,Argentina,Real Madrid,LW,66,74,23,32,3,654,102.63,0,No,Medium
1041,Player_1041,24,England,Real Madrid,CB,77,87,18,6,19,2463,111.49,0,No,Low
1042,Player_1042,35,Germany,Manchester City,RB,82,67,32,3,15,284,13.07,4,No,Low
1043,Player_1043,23,Brazil,Manchester City,LW,60,67,3,27,4,2565,119.7,2,No,Medium
1044,Player_1044,35,France,Manchester City,GK,63,82,2,22,23,3801,95.29,4,Yes,High
1045,Player_1045,22,France,Juventus,RB,94,89,41,31,6,26,149.06,5,Yes,Medium
1046,Player_1046,22,Argentina,Juventus,ST,82,84,11,15,24,2274,40.38,1,No,Medium
1047,Player_1047,19,Netherlands,Juventus,LB,86,93,17,9,15,3867,35.51,1,No,High
1048,Player_1048,23,England,Juventus,CB,85,86,22,13,14,3972,142.9,3,No,Low
1049,Player_1049,35,England,Juventus,CB,67,79,19,38,4,1591,126.84,5,No,Low
1050,Player_1050,24,England,Juventus,CB,75,74,5,35,0,3381,142.61,5,No,Medium
1051,Player_1051,26,Netherlands,Liverpool,CB,62,85,52,33,19,1128,140.86,4,No,Low
1052,Player_1052,36,Germany,Juventus,LB,91,93,33,23,21,4113,19.17,4,Yes,Low
1053,Player_1053,31,Portugal,PSG,RW,64,96,41,17,21,2136,50.51,5,No,Low
1054,Player_1054,31,Portugal,PSG,CB,79,74,1,15,8,156,47.19,4,No,Medium
1055,Player_1055,17,Argentina,Bayern Munich,RW,73,77,29,36,20,1289,168.26,3,No,Low
1056,Player_1056,36,England,Liverpool,LB,91,87,8,24,4,2181,88.0,4,No,Low
1057,Player_1057,23,Germany,Manchester City,LB,85,87,26,7,21,2511,20.43,4,No,Low
1058,Player_1058,20,France,FC Barcelona,RB,65,95,41,23,5,1771,52.48,5,No,Low
1059,Player_1059,22,Brazil,Juventus,LW,64,68,33,19,2,1155,157.01,5,No,High
1060,Player_1060,17,Germany,Bayern Munich,GK,72,67,39,29,5,2788,152.55,4,No,High
1061,Player_1061,21,Netherlands,FC Barcelona,CDM,91,85,23,19,7,2976,162.11,4,No,High
1062,Player_1062,39,Portugal,PSG,GK,75,66,48,17,5,3499,70.24,5,No,High
1063,Player_1063,17,Portugal,Bayern Munich,CDM,60,68,16,3,15,2913,115.62,1,No,Low
1064,Player_1064,20,France,Bayern Munich,LB,72,65,28,35,15,203,50.43,2,No,High
1065,Player_1065,38,France,Real Madrid,GK,70,79,35,5,20,1822,32.96,1,No,Low
1066,Player_1066,18,Netherlands,PSG,CM,67,97,49,2,2,1359,4.43,4,Yes,Medium
1067,Player_1067,26,Brazil,PSG,LW,84,70,11,17,16,2544,40.61,0,No,Low
1068,Player_1068,21,France,Liverpool,GK,91,71,30,39,20,441,108.99,0,No,High
1069,Player_1069,26,Argentina,Bayern Munich,LW,83,83,48,17,5,1315,162.81,3,No,Low
1070,Player_1070,17,Brazil,Juventus,RW,87,65,8,22,5,4037,24.45,1,Yes,Low
1071,Player_1071,38,France,PSG,LW,73,83,18,34,21,1148,165.28,5,Yes,High
1072,Player_1072,22,Spain,Bayern Munich,RW,62,90,45,5,18,1198,62.5,3,No,Medium
1073,Player_1073,29,Germany,Liverpool,CB,86,76,45,25,19,2916,77.12,3,No,Medium
1074,Player_1074,31,France,Juventus,RW,79,86,16,20,14,3885,66.01,0,Yes,Medium
1075,Player_1075,20,Argentina,Liverpool,RB,74,77,1,23,18,4175,73.85,1,No,Low
1076,Player_1076,29,England,Real Madrid,CB,86,92,39,14,1,2859,47.03,2,No,Medium
1077,Player_1077,36,France,Juventus,LB,87,78,4,26,7,2962,125.9,5,No,Low
1078,Player_1078,31,Portugal,Bayern Munich,ST,84,86,38,31,6,1367,136.59,1,No,High
1079,Player_1079,24,Portugal,PSG,RW,92,94,53,11,7,2909,148.25,3,No,Medium
1080,Player_1080,21,Portugal,PSG,RW,73,84,47,4,12,2216,61.76,4,No,High
1081,Player_1081,31,England,Bayern Munich,LW,67,91,15,6,21,3405,137.75,3,No,Medium
1082,Player_1082,20,Portugal,Bayern Munich,LB,73,98,16,21,14,3059,114.96,1,No,Low
1083,Player_1083,28,Spain,Bayern Munich,GK,60,65,53,26,11,2283,172.45,0,No,Medium
1084,Player_1084,29,France,Manchester City,CM,75,79,26,14,14,4494,76.75,1,No,Low
1085,Player_1085,18,Netherlands,Juventus,CDM,77,96,6,38,13,820,178.62,2,No,Low
1086,Player_1086,35,Portugal,PSG,RW,66,72,51,34,6,3060,133.4,5,No,High
1087,Player_1087,35,Brazil,Juventus,GK,74,97,7,25,16,2524,139.84,5,No,Low
1088,Player_1088,20,Netherlands,Liverpool,CM,83,82,7,22,4,2632,5.11,4,No,Medium
1089,Player_1089,20,England,PSG,CDM,72,93,22,12,19,2662,89.78,4,No,Low
1090,Player_1090,27,Spain,Manchester City,ST,68,96,31,25,9,2825,95.34,3,No,Low
1091,Player_1091,21,Brazil,Bayern Munich,LW,74,97,42,2,18,4453,7.79,1,Yes,Medium
1092,Player_1092,36,Brazil,Real Madrid,GK,94,69,46,28,17,3129,56.53,5,Yes,High
1093,Player_1093,27,Brazil,Bayern Munich,LW,83,82,17,1,24,4014,172.04,0,No,Medium
1094,Player_1094,26,Brazil,Bayern Munich,CDM,92,74,37,27,23,4488,76.99,2,No,Low
1095,Player_1095,24,Netherlands,Manchester City,RB,75,97,53,22,9,1666,34.01,3,Yes,Low
1096,Player_1096,22,Netherlands,Juventus,RW,67,87,11,35,1,3400,92.64,1,No,High
1097,Player_1097,22,France,PSG,CB,88,69,14,5,5,3582,6.56,0,No,Medium
1098,Player_1098,24,Portugal,Bayern Munich,CM,82,98,27,10,2,2200,93.12,1,No,High
1099,Player_1099,39,Germany,PSG,LB,90,88,54,37,18,892,107.17,0,No,Low
1100,Player_1100,31,France,FC Barcelona,RW,73,81,37,33,4,3950,64.71,1,No,High
1101,Player_1101,30,France,Liverpool,CB,89,95,49,16,6,983,137.38,1,No,High
1102,Player_1102,27,Spain,Juventus,GK,86,71,30,2,6,582,24.86,5,No,High
1103,Player_1103,28,Spain,PSG,ST,75,81,51,33,9,4115,158.13,3,No,Low
1104,Player_1104,29,Portugal,Real Madrid,RW,65,92,8,21,0,2640,172.0,1,No,Medium
1105,Player_1105,24,Germany,Liverpool,LW,92,86,7,28,10,1973,0.72,1,No,Medium
1106,Player_1106,34,Spain,Real Madrid,RB,77,79,45,28,22,3417,151.77,3,No,Medium
1107,Player_1107,17,Portugal,Bayern Munich,LB,75,79,18,4,6,4114,91.35,3,No,Medium
1108,Player_1108,31,Portugal,Liverpool,LW,71,89,50,9,5,2415,83.32,4,No,Medium
1109,Player_1109,24,Netherlands,PSG,CB,79,85,7,9,5,888,43.34,4,No,High
1110,Player_1110,27,Argentina,Liverpool,RW,88,66,33,8,12,1883,80.79,5,No,Medium
1111,Player_1111,28,Netherlands,Bayern Munich,RB,89,91,3,20,15,3822,171.1,3,No,Medium
1112,Player_1112,28,Germany,Manchester City,RW,85,96,30,12,12,146,38.34,2,No,Medium
1113,Player_1113,20,Spain,Juventus,GK,81,85,37,9,1,1716,32.64,5,No,Medium
1114,Player_1114,32,Germany,Real Madrid,ST,92,68,2,37,18,2477,43.92,0,No,Low
1115,Player_1115,20,France,Bayern Munich,CDM,88,83,34,10,18,1463,99.55,3,No,Low
1116,Player_1116,21,France,Manchester City,RW,81,66,18,3,18,2245,167.49,4,No,Medium
1117,Player_1117,21,Germany,Liverpool,CB,72,90,42,30,17,1310,103.51,1,Yes,Low
1118,Player_1118,24,Argentina,Liverpool,LW,68,98,28,33,24,368,44.21,3,Yes,Medium
1119,Player_1119,26,Argentina,Bayern Munich,GK,83,78,9,34,5,1263,79.56,3,No,High
1120,Player_1120,33,Netherlands,PSG,CB,74,79,11,38,1,2849,70.58,4,Yes,Medium
1121,Player_1121,25,Germany,Liverpool,LB,72,84,45,38,18,2747,8.86,4,No,High
1122,Player_1122,38,Spain,PSG,CDM,86,98,29,32,5,2565,92.16,2,No,Medium
1123,Player_1123,35,Netherlands,PSG,GK,66,83,29,7,19,1818,23.12,5,No,Low
1124,Player_1124,30,England,Juventus,ST,67,73,17,31,22,1887,151.68,4,No,Low
1125,Player_1125,24,Argentina,PSG,CDM,73,71,23,32,21,3783,99.04,4,No,High
1126,Player_1126,25,Brazil,FC Barcelona,CB,71,94,31,7,14,59,152.11,4,No,High
1127,Player_1127,38,Netherlands,Juventus,LB,76,77,8,13,5,544,172.11,5,No,Low
1128,Player_1128,27,France,Manchester City,CM,88,91,46,33,2,3064,169.8,1,Yes,Low
1129,Player_1129,39,Netherlands,Manchester City,ST,86,77,23,7,10,1230,18.53,3,No,Low
1130,Player_1130,17,Germany,Liverpool,RB,60,79,25,6,7,558,170.09,3,Yes,Medium
1131,Player_1131,30,Brazil,Liverpool,CM,93,73,2,12,24,1512,143.34,4,Yes,Medium
1132,Player_1132,21,Germany,PSG,RW,63,87,22,20,21,669,140.09,5,Yes,Medium
1133,Player_1133,37,Portugal,Juventus,LB,83,67,10,31,17,257,16.68,2,No,High
1134,Player_1134,30,France,Juventus,LW,80,98,9,10,16,1070,32.72,4,No,Medium
1135,Player_1135,20,France,FC Barcelona,RB,92,83,49,13,18,1050,175.54,5,No,Low
1136,Player_1136,38,Argentina,PSG,CB,66,92,35,10,18,4038,38.8,5,No,Low
1137,Player_1137,39,Netherlands,FC Barcelona,LB,60,87,12,1,23,4022,30.85,2,No,High
1138,Player_1138,17,Argentina,PSG,CDM,62,71,28,33,20,144,65.54,5,Yes,Medium
1139,Player_1139,38,Brazil,Real Madrid,GK,74,76,37,16,16,2634,164.45,3,No,Low
1140,Player_1140,39,Netherlands,Real Madrid,CDM,90,78,52,13,3,2569,85.98,2,No,Low
1141,Player_1141,35,Portugal,Bayern Munich,CDM,75,79,12,24,6,800,165.74,2,No,Medium
1142,Player_1142,24,Germany,PSG,RW,69,67,25,26,4,1485,60.51,0,Yes,Low
1143,Player_1143,31,Portugal,Juventus,ST,88,79,19,7,15,3748,41.16,2,No,Medium
1144,Player_1144,37,France,Liverpool,LW,65,88,4,16,5,2429,89.39,2,No,Medium
1145,Player_1145,31,Brazil,Manchester City,RB,88,72,19,4,13,2823,110.98,1,No,Low
1146,Player_1146,25,England,Bayern Munich,ST,76,69,13,11,19,672,70.77,3,No,Medium
1147,Player_1147,37,Brazil,Liverpool,LB,81,68,44,37,1,3974,62.61,4,No,Low
1148,Player_1148,25,Spain,Real Madrid,CDM,83,78,13,17,24,3489,39.64,0,Yes,Low
1149,Player_1149,26,Brazil,PSG,RW,76,80,7,25,17,4422,49.86,2,Yes,Low
1150,Player_1150,36,Portugal,Bayern Munich,LB,80,84,47,30,17,1414,121.32,1,Yes,Medium
1151,Player_1151,37,Spain,PSG,GK,70,88,12,36,12,3368,66.89,1,Yes,Medium
1152,Player_1152,25,Spain,Real Madrid,LW,66,70,23,5,17,3894,14.82,5,Yes,Low
1153,Player_1153,19,Netherlands,Bayern Munich,RB,64,95,14,14,16,3846,25.3,4,No,High
1154,Player_1154,36,Netherlands,Real Madrid,GK,80,70,50,25,12,2028,67.34,4,No,Low
1155,Player_1155,27,Spain,FC Barcelona,RW,77,79,0,11,11,1194,166.45,3,Yes,Medium
1156,Player_1156,22,England,Real Madrid,LW,94,93,21,13,2,2024,68.54,5,No,Medium
1157,Player_1157,18,Netherlands,Juventus,LB,79,67,33,0,21,1357,11.39,2,No,Medium
1158,Player_1158,23,Brazil,Juventus,CDM,74,75,49,16,6,2810,75.53,1,No,Low
1159,Player_1159,34,Portugal,PSG,CDM,64,67,50,32,0,568,120.55,0,No,Low
1160,Player_1160,18,Brazil,Manchester City,CDM,72,92,39,28,4,1945,107.05,3,Yes,Medium
1161,Player_1161,33,England,Real Madrid,CM,71,74,2,30,20,346,50.55,2,No,Low
1162,Player_1162,27,France,Liverpool,CDM,80,97,54,7,0,407,124.01,5,No,High
1163,Player_1163,28,Argentina,Juventus,CM,65,80,25,29,3,4228,113.7,4,No,Low
1164,Player_1164,35,Portugal,Manchester City,CB,66,74,13,12,0,3753,31.41,5,No,Low
1165,Player_1165,38,Netherlands,FC Barcelona,CM,85,97,40,15,12,613,29.61,2,No,Low
1166,Player_1166,23,Portugal,Bayern Munich,LW,67,67,7,1,13,105,98.72,5,No,Medium
1167,Player_1167,36,Brazil,Bayern Munich,GK,68,69,48,17,14,2218,118.87,4,Yes,Medium
1168,Player_1168,22,Argentina,Juventus,LW,86,76,54,34,16,3799,173.16,2,No,Medium
1169,Player_1169,37,Germany,Manchester City,GK,63,77,54,18,11,4357,76.24,0,No,Low
1170,Player_1170,17,Germany,Juventus,CB,80,88,15,12,6,3913,137.81,3,No,Medium
1171,Player_1171,33,Netherlands,Bayern Munich,GK,90,96,41,3,22,493,21.42,5,Yes,Low
1172,Player_1172,27,England,Real Madrid,GK,80,80,20,18,18,3868,160.18,4,No,Medium
1173,Player_1173,38,Germany,Manchester City,RW,84,96,9,24,22,4385,114.14,0,Yes,High
1174,Player_1174,34,Portugal,PSG,ST,74,85,24,37,2,3334,113.41,1,No,Low
1175,Player_1175,37,Germany,Real Madrid,ST,94,76,37,30,17,3920,26.07,0,No,Low
1176,Player_1176,33,France,Real Madrid,RW,87,85,21,35,3,1868,7.61,0,No,Low
1177,Player_1177,23,France,Real Madrid,CDM,73,85,48,3,2,1438,126.41,0,No,High
1178,Player_1178,33,Netherlands,PSG,RW,63,70,47,38,11,1352,21.51,4,No,Medium
1179,Player_1179,36,France,FC Barcelona,GK,79,73,46,6,22,44,23.29,1,No,Low
1180,Player_1180,25,Germany,Liverpool,GK,93,65,53,15,11,2380,34.16,3,No,Low
1181,Player_1181,33,England,Juventus,RW,71,76,45,4,16,199,18.05,0,No,Medium
1182,Player_1182,36,Spain,Bayern Munich,RW,92,78,3,22,5,4424,112.76,4,No,Low
1183,Player_1183,38,Spain,Juventus,CDM,83,70,3,35,14,2287,76.25,4,No,Low
1184,Player_1184,38,Netherlands,Manchester City,LW,79,65,29,31,1,2630,48.26,3,No,Medium
1185,Player_1185,24,Argentina,FC Barcelona,CB,64,86,1,23,7,2768,79.61,2,No,Medium
1186,Player_1186,33,Spain,Manchester City,LB,89,98,28,24,13,2407,152.02,1,No,Low
1187,Player_1187,23,Spain,Juventus,GK,83,75,42,27,4,3791,166.91,1,Yes,Low
1188,Player_1188,17,France,Bayern Munich,CB,66,67,35,18,2,3293,88.0,5,Yes,High
1189,Player_1189,29,France,PSG,RW,75,70,20,6,9,2846,102.23,0,No,Low
1190,Player_1190,39,Germany,Juventus,CDM,74,70,20,16,6,3311,46.67,2,No,Medium
1191,Player_1191,35,Netherlands,Real Madrid,CM,82,84,47,1,10,2551,92.69,1,No,Medium
1192,Player_1192,35,Argentina,Juventus,CDM,71,85,20,15,14,1437,134.79,5,No,Low
1193,Player_1193,33,Netherlands,Real Madrid,RB,88,66,3,38,1,126,88.84,0,Yes,Medium
1194,Player_1194,29,Brazil,PSG,RB,74,90,0,17,4,1620,54.72,2,Yes,Medium
1195,Player_1195,32,Portugal,Juventus,CB,88,95,25,38,10,3319,104.98,4,Yes,Medium
1196,Player_1196,24,Argentina,FC Barcelona,ST,80,90,50,0,7,481,170.42,0,No,Medium
1197,Player_1197,35,Argentina,FC Barcelona,RB,74,96,1,2,12,4378,159.89,2,Yes,High
1198,Player_1198,34,England,Manchester City,RB,73,74,8,20,10,2121,138.58,3,No,Medium
1199,Player_1199,17,Netherlands,PSG,LW,75,87,54,29,16,3135,50.08,1,No,Low
1200,Player_1200,30,Germany,FC Barcelona,CM,74,70,44,10,14,2820,43.86,0,No,Low
1201,Player_1201,35,England,Juventus,LW,63,87,17,21,0,2371,151.02,5,Yes,Low
1202,Player_1202,31,Argentina,PSG,CM,86,92,47,24,18,238,33.05,4,No,High
1203,Player_1203,34,Argentina,Bayern Munich,LB,82,94,47,2,15,1420,109.21,5,No,High
1204,Player_1204,18,Argentina,Real Madrid,GK,88,78,41,29,18,340,79.29,0,No,Low
1205,Player_1205,38,Spain,Juventus,RB,68,96,40,23,12,3350,84.5,1,No,Medium
1206,Player_1206,33,Netherlands,Real Madrid,GK,66,98,10,35,22,2993,82.09,1,No,Low
1207,Player_1207,34,Portugal,Real Madrid,RB,63,86,24,22,21,1486,162.04,2,No,High
1208,Player_1208,22,Portugal,PSG,LW,64,95,25,7,22,4075,16.13,5,Yes,Low
1209,Player_1209,35,England,PSG,LB,64,71,35,3,3,732,141.03,5,No,Medium
1210,Player_1210,20,Argentina,Manchester City,LW,70,85,41,38,10,3478,150.38,4,No,Low
1211,Player_1211,17,Portugal,Real Madrid,LW,87,80,34,30,17,161,169.75,2,No,Low
1212,Player_1212,24,France,Manchester City,CM,75,84,37,28,17,2495,81.74,4,Yes,Low
1213,Player_1213,39,Netherlands,Real Madrid,ST,89,83,2,35,9,131,90.26,0,No,Medium
1214,Player_1214,23,Portugal,Manchester City,CDM,63,96,40,12,16,1857,173.05,0,Yes,Low
1215,Player_1215,19,Germany,Manchester City,CB,61,79,34,8,12,1242,82.79,5,No,Low
1216,Player_1216,26,Netherlands,Bayern Munich,GK,62,69,49,20,24,3488,90.89,2,Yes,Low
1217,Player_1217,26,Germany,Manchester City,RB,80,75,39,2,13,671,60.14,3,No,Medium
1218,Player_1218,35,Portugal,PSG,LW,65,79,21,24,6,504,6.18,1,No,High
1219,Player_1219,30,France,Manchester City,ST,77,93,7,24,9,2156,78.23,2,No,Medium
1220,Player_1220,18,Germany,Real Madrid,LW,64,68,14,11,2,1261,118.09,2,No,Medium
1221,Player_1221,17,Spain,Manchester City,LB,68,87,44,28,1,292,124.35,0,Yes,Low
1222,Player_1222,39,Portugal,FC Barcelona,CM,79,79,6,10,18,3650,1.67,1,Yes,Medium
1223,Player_1223,39,Spain,Liverpool,CDM,87,67,18,10,6,4282,144.29,2,No,Medium
1224,Player_1224,34,Portugal,Real Madrid,LB,85,96,39,25,4,1059,88.89,0,No,Low
1225,Player_1225,23,Brazil,FC Barcelona,RW,77,74,41,13,2,2303,93.97,0,No,Low
1226,Player_1226,24,Brazil,Real Madrid,LW,78,86,16,15,24,2795,173.13,5,No,Low
1227,Player_1227,17,Brazil,PSG,LB,62,78,0,9,1,1201,51.56,5,No,Low
1228,Player_1228,39,Germany,Liverpool,CDM,68,81,44,30,22,3313,137.22,2,No,Low
1229,Player_1229,19,Spain,Liverpool,ST,90,85,28,30,21,2088,103.67,2,No,Low
1230,Player_1230,39,Spain,PSG,ST,76,79,12,35,5,3428,126.29,0,No,Low
1231,Player_1231,24,Spain,Liverpool,GK,82,79,47,9,13,2160,75.5,5,No,Medium
1232,Player_1232,38,France,PSG,CDM,93,65,28,25,6,718,50.62,2,No,Medium
1233,Player_1233,31,Spain,FC Barcelona,ST,64,88,40,19,21,1846,98.53,1,No,High
1234,Player_1234,21,France,Bayern Munich,LB,74,76,41,8,1,877,67.8,0,No,Low
1235,Player_1235,19,Brazil,Real Madrid,GK,62,74,5,14,10,3267,40.51,0,No,Low
1236,Player_1236,35,Brazil,PSG,ST,78,95,4,8,20,4497,151.14,2,No,High
1237,Player_1237,17,Germany,Real Madrid,CM,87,75,33,6,2,63,85.91,2,No,Low
1238,Player_1238,31,Portugal,FC Barcelona,RW,62,80,10,25,8,2699,152.59,2,No,Medium
1239,Player_1239,24,Brazil,Bayern Munich,CDM,63,73,8,23,7,2933,85.59,1,Yes,Medium
1240,Player_1240,18,Portugal,FC Barcelona,LB,83,78,37,11,10,372,100.45,0,Yes,Medium
1241,Player_1241,19,Portugal,Liverpool,RB,90,83,39,19,17,4027,179.15,3,No,Low
1242,Player_1242,30,Netherlands,Real Madrid,LW,70,95,40,13,0,305,171.3,1,No,High
1243,Player_1243,30,Germany,Juventus,LB,60,73,8,21,14,2514,49.27,1,No,Low
1244,Player_1244,27,Argentina,Bayern Munich,ST,68,90,7,15,3,931,156.42,5,Yes,Low
1245,Player_1245,32,Argentina,Liverpool,LB,76,72,43,28,3,1990,70.58,0,No,Medium
1246,Player_1246,20,England,Bayern Munich,RB,60,88,39,31,9,3656,13.29,3,Yes,Medium
1247,Player_1247,36,Netherlands,Liverpool,LW,62,72,2,18,10,1415,103.85,0,No,High
1248,Player_1248,21,Germany,FC Barcelona,GK,85,83,12,34,17,361,175.88,1,No,Low
1249,Player_1249,38,England,PSG,ST,90,94,18,31,22,2768,175.39,2,No,Medium
1250,Player_1250,37,England,Real Madrid,CB,85,86,33,19,14,715,23.2,0,No,Medium
1251,Player_1251,30,Netherlands,Manchester City,ST,82,73,31,39,2,1645,138.94,0,Yes,Low
1252,Player_1252,39,Argentina,Manchester City,RW,89,68,48,19,6,542,144.61,2,No,Medium
1253,Player_1253,32,Germany,FC Barcelona,CB,69,72,15,7,6,1547,66.69,3,Yes,Low
1254,Player_1254,34,Argentina,Real Madrid,RW,67,65,35,34,16,2241,118.72,3,Yes,Medium
1255,Player_1255,23,England,Real Madrid,RB,84,92,17,12,21,651,88.12,0,Yes,High
1256,Player_1256,26,Germany,FC Barcelona,CDM,81,70,13,5,19,1050,41.41,2,No,Medium
1257,Player_1257,23,England,Real Madrid,LW,74,75,29,15,23,1852,137.15,5,No,High
1258,Player_1258,17,Spain,PSG,CM,69,69,1,4,15,3001,47.66,0,No,Medium
1259,Player_1259,39,Netherlands,FC Barcelona,GK,79,88,12,33,15,3084,61.61,2,Yes,Medium
1260,Player_1260,37,Portugal,PSG,CM,82,82,26,5,7,2096,34.61,1,No,High
1261,Player_1261,35,Germany,Real Madrid,RB,60,84,52,32,2,802,129.61,5,No,Low
1262,Player_1262,32,Germany,FC Barcelona,CDM,61,92,51,14,19,2654,82.84,2,Yes,High
1263,Player_1263,35,Portugal,Real Madrid,ST,78,77,16,14,14,1680,80.09,0,No,Low
1264,Player_1264,20,England,FC Barcelona,LB,73,69,30,13,0,1607,109.02,4,No,High
1265,Player_1265,34,Spain,Real Madrid,RW,67,94,14,38,9,3522,28.73,3,No,Medium
1266,Player_1266,18,France,PSG,RB,71,65,19,4,1,2057,161.72,0,No,High
1267,Player_1267,17,Portugal,Juventus,RW,85,86,4,25,6,2721,83.99,2,No,High
1268,Player_1268,31,Netherlands,PSG,ST,86,82,6,16,13,2563,66.29,5,No,Medium
1269,Player_1269,21,Argentina,Real Madrid,CDM,88,69,17,15,15,3612,23.24,5,No,Medium
1270,Player_1270,36,England,FC Barcelona,LW,74,95,10,34,14,202,30.65,2,Yes,Medium
1271,Player_1271,27,Portugal,Manchester City,CM,60,70,31,37,6,941,165.7,3,No,Low
1272,Player_1272,26,Portugal,PSG,ST,87,91,49,22,12,588,82.46,0,No,Low
1273,Player_1273,18,Germany,PSG,GK,62,89,26,12,24,570,130.13,5,No,Low
1274,Player_1274,19,Argentina,Liverpool,CB,77,93,25,32,9,3004,14.95,5,No,Medium
1275,Player_1275,39,Argentina,Manchester City,RB,93,92,36,28,8,195,116.0,4,No,Low
1276,Player_1276,39,Netherlands,Real Madrid,CM,91,80,44,33,8,1345,165.91,1,Yes,Low
1277,Player_1277,28,Argentina,Juventus,GK,88,76,27,33,5,417,54.34,4,No,Low
1278,Player_1278,36,Portugal,FC Barcelona,LW,84,84,49,26,23,1642,104.46,1,No,Low
1279,Player_1279,21,France,Liverpool,GK,85,82,1,14,24,1365,169.27,5,No,Low
1280,Player_1280,21,Brazil,Real Madrid,CDM,67,98,19,8,11,8,129.62,1,No,Low
1281,Player_1281,22,England,Bayern Munich,CB,78,87,3,25,22,531,11.69,0,Yes,Low
1282,Player_1282,25,Brazil,Juventus,RW,81,91,12,2,19,4244,68.48,5,No,Medium
1283,Player_1283,18,Portugal,PSG,CM,88,81,23,35,19,1552,15.9,5,No,Low
1284,Player_1284,37,Brazil,Bayern Munich,CB,92,85,47,4,21,1035,155.11,1,No,High
1285,Player_1285,28,Portugal,PSG,LB,94,95,37,19,13,1617,112.09,2,No,Medium
1286,Player_1286,19,Brazil,PSG,ST,62,67,39,19,19,3716,172.17,1,No,Low
1287,Player_1287,36,Argentina,Bayern Munich,LB,78,81,47,4,6,1076,4.05,1,Yes,Low
1288,Player_1288,38,Spain,Juventus,ST,69,90,44,9,7,4301,76.44,3,Yes,Medium
1289,Player_1289,28,Argentina,Bayern Munich,CDM,86,87,54,15,7,4015,19.23,3,No,Low
1290,Player_1290,33,Argentina,Real Madrid,CB,74,70,28,24,7,2962,63.41,0,No,High
1291,Player_1291,26,Netherlands,Liverpool,LW,70,92,35,24,1,912,29.56,0,No,Low
1292,Player_1292,30,Germany,Liverpool,GK,85,72,1,29,13,4149,59.52,2,No,Medium
1293,Player_1293,39,Germany,Bayern Munich,CB,83,72,40,13,9,4070,147.56,3,Yes,High
1294,Player_1294,33,Brazil,Real Madrid,LB,72,83,17,21,17,3561,29.35,4,No,Medium
1295,Player_1295,34,Portugal,Liverpool,RB,91,93,48,27,17,343,85.52,0,No,High
1296,Player_1296,35,Netherlands,Real Madrid,ST,63,87,7,29,17,1192,165.92,0,No,High
1297,Player_1297,33,Argentina,Real Madrid,RB,72,96,14,18,15,1932,179.78,3,Yes,High
1298,Player_1298,30,Netherlands,PSG,CM,68,74,40,37,19,702,45.49,3,No,High
1299,Player_1299,25,Brazil,Liverpool,RB,93,91,16,19,4,1898,168.43,2,Yes,Low
1300,Player_1300,24,Germany,Liverpool,CB,66,65,22,34,19,3593,47.42,3,No,Low
1301,Player_1301,18,Spain,PSG,GK,60,93,1,21,4,198,74.73,1,No,Low
1302,Player_1302,29,England,Bayern Munich,CM,71,67,5,14,19,3232,158.09,5,No,High
1303,Player_1303,23,Brazil,PSG,LW,80,95,28,10,22,2822,141.62,4,No,Low
1304,Player_1304,25,Netherlands,Liverpool,LW,70,75,26,33,9,4484,154.42,5,No,Low
1305,Player_1305,38,Spain,Liverpool,CDM,73,86,36,23,16,473,144.15,1,No,Medium
1306,Player_1306,38,England,Juventus,GK,93,82,48,5,12,1654,42.69,1,Yes,Low
1307,Player_1307,27,France,Bayern Munich,RW,93,70,33,16,16,591,100.8,5,No,Medium
1308,Player_1308,30,Brazil,PSG,RB,84,67,17,27,17,1848,69.65,1,Yes,High
1309,Player_1309,20,Brazil,FC Barcelona,CM,63,69,41,30,12,3041,83.02,0,No,Medium
1310,Player_1310,29,France,FC Barcelona,CB,85,73,9,35,16,167,28.14,5,No,Medium
1311,Player_1311,18,France,Bayern Munich,CB,75,92,37,8,14,4379,57.18,1,No,Medium
1312,Player_1312,39,Brazil,PSG,RW,69,83,43,9,11,3270,154.45,0,Yes,Medium
1313,Player_1313,21,France,PSG,CDM,61,92,16,20,9,4007,161.61,3,No,Low
1314,Player_1314,27,Argentina,Real Madrid,RW,94,91,12,33,12,4010,110.02,4,No,Medium
1315,Player_1315,22,England,Liverpool,ST,78,77,51,30,10,3848,89.94,4,No,Low
1316,Player_1316,34,England,Manchester City,LB,65,85,47,28,2,2181,128.45,1,No,Medium
1317,Player_1317,37,England,Juventus,CM,78,91,41,10,21,1654,109.79,4,No,Medium
1318,Player_1318,26,Argentina,Bayern Munich,LB,67,70,26,32,9,4217,177.07,0,Yes,Low
1319,Player_1319,20,Portugal,Manchester City,RW,73,75,52,0,10,832,34.62,3,No,Medium
1320,Player_1320,25,France,Manchester City,CDM,69,81,1,20,5,1021,81.1,1,No,Medium
1321,Player_1321,22,Spain,Bayern Munich,CDM,62,71,33,22,0,1993,165.32,2,No,Low
1322,Player_1322,18,France,PSG,LW,88,94,30,8,5,3492,164.7,5,No,Low
1323,Player_1323,33,Brazil,Bayern Munich,LW,74,85,22,0,4,894,89.41,4,No,Medium
1324,Player_1324,21,Germany,Manchester City,CM,82,65,6,20,6,1515,24.7,4,Yes,Medium
1325,Player_1325,22,Netherlands,Liverpool,CM,82,89,37,21,21,3670,146.78,1,No,Medium
1326,Player_1326,28,Netherlands,Juventus,CM,77,96,32,3,11,288,105.54,5,No,Medium
1327,Player_1327,39,England,Juventus,CB,78,72,11,0,11,1076,139.28,5,No,Medium
1328,Player_1328,37,France,Liverpool,LW,87,69,44,9,6,1371,83.52,4,No,High
1329,Player_1329,26,Spain,Liverpool,CB,85,94,11,14,1,1074,37.1,4,No,Low
1330,Player_1330,38,Brazil,PSG,LB,69,72,18,35,0,2959,4.81,2,No,High
1331,Player_1331,37,Argentina,FC Barcelona,RW,63,83,8,28,22,39,100.87,5,No,Medium
1332,Player_1332,22,Portugal,Bayern Munich,RB,61,94,9,4,24,4274,29.41,0,Yes,Medium
1333,Player_1333,24,Argentina,Juventus,LW,62,79,16,28,17,3622,34.09,1,No,Medium
1334,Player_1334,18,Spain,Liverpool,RB,66,91,49,26,11,182,78.82,1,No,Low
1335,Player_1335,28,Brazil,Bayern Munich,CDM,75,77,39,24,6,1759,79.85,2,No,Medium
1336,Player_1336,29,England,Juventus,LW,90,78,38,15,18,1769,49.75,2,No,Low
1337,Player_1337,37,France,Liverpool,LB,69,94,40,15,21,496,24.18,0,No,Low
1338,Player_1338,23,Brazil,Juventus,LW,78,77,9,35,2,596,170.12,3,Yes,Medium
1339,Player_1339,26,Netherlands,PSG,CB,87,80,11,24,9,2508,24.13,1,No,Low
1340,Player_1340,29,Portugal,FC Barcelona,RW,76,71,14,0,10,3826,63.46,5,No,Low
1341,Player_1341,33,Argentina,FC Barcelona,GK,87,91,30,4,4,684,55.22,4,Yes,High
1342,Player_1342,37,Portugal,Liverpool,RW,78,79,14,19,1,318,156.01,0,No,High
1343,Player_1343,30,Portugal,Juventus,RW,82,92,27,4,7,3626,74.11,1,No,Medium
1344,Player_1344,18,Spain,PSG,CDM,79,71,3,35,13,1435,22.77,5,Yes,High
1345,Player_1345,38,Spain,Real Madrid,LB,72,84,35,28,7,2403,2.34,0,Yes,High
1346,Player_1346,27,France,Bayern Munich,RB,72,96,54,33,22,2664,130.09,3,No,Medium
1347,Player_1347,17,Spain,Bayern Munich,LB,70,96,0,17,5,4324,128.75,5,No,High
1348,Player_1348,35,Spain,Manchester City,GK,74,90,43,1,0,728,75.49,1,Yes,Low
1349,Player_1349,37,Brazil,PSG,CDM,76,84,33,15,23,1287,23.17,4,No,Medium
1350,Player_1350,20,Netherlands,Juventus,RW,87,82,46,28,0,4001,67.21,5,No,Low
1351,Player_1351,35,England,Manchester City,CB,78,79,16,32,7,560,106.38,1,No,Medium
1352,Player_1352,37,France,Liverpool,CDM,63,86,38,15,10,1375,126.86,0,No,High
1353,Player_1353,27,Brazil,Juventus,CM,81,86,37,34,17,1465,14.54,3,No,Low
1354,Player_1354,24,England,Manchester City,LW,81,85,43,16,23,2506,100.36,5,No,Medium
1355,Player_1355,27,Portugal,FC Barcelona,LB,93,66,50,3,9,3886,50.06,0,No,High
1356,Player_1356,20,Brazil,Bayern Munich,CDM,92,82,32,3,11,24,111.3,0,No,High
1357,Player_1357,33,Germany,Juventus,CM,92,87,20,24,19,1154,116.84,2,No,Low
1358,Player_1358,23,Brazil,Manchester City,RB,71,77,25,32,22,4465,163.95,0,No,High
1359,Player_1359,24,Spain,FC Barcelona,GK,61,73,45,13,15,1459,74.16,5,No,Low
1360,Player_1360,19,England,PSG,GK,87,71,35,23,4,1220,97.0,3,Yes,Medium
1361,Player_1361,38,France,Manchester City,RW,69,65,4,10,15,2156,48.64,4,No,Low
1362,Player_1362,18,France,Liverpool,RW,81,66,32,24,23,3291,51.94,2,No,Low
1363,Player_1363,39,England,Liverpool,CDM,76,68,0,27,11,719,8.76,0,No,Low
1364,Player_1364,31,Spain,Liverpool,CDM,85,78,52,6,5,1105,51.85,5,No,Low
1365,Player_1365,38,Argentina,Juventus,LW,62,96,5,35,4,3769,11.96,1,No,Medium
1366,Player_1366,38,Brazil,Bayern Munich,ST,66,66,36,9,0,2479,173.52,2,No,Low
1367,Player_1367,21,Spain,Manchester City,RB,67,78,1,35,18,1920,112.56,3,Yes,High
1368,Player_1368,17,Germany,PSG,RW,79,84,52,30,9,3079,31.58,1,Yes,High
1369,Player_1369,20,Netherlands,Manchester City,ST,71,89,4,18,24,3169,21.46,3,Yes,Medium
1370,Player_1370,31,Portugal,Bayern Munich,ST,94,72,25,17,13,3172,66.94,1,Yes,Medium
1371,Player_1371,36,England,FC Barcelona,LW,76,92,40,5,24,3330,55.72,4,No,Medium
1372,Player_1372,35,Netherlands,Bayern Munich,CB,87,85,50,27,20,4451,50.63,3,No,Low
1373,Player_1373,19,Brazil,Liverpool,CB,69,87,52,6,2,2058,84.54,1,No,Low
1374,Player_1374,36,France,Juventus,RW,81,96,46,37,5,3321,164.36,3,No,High
1375,Player_1375,27,Portugal,FC Barcelona,CM,92,72,12,11,4,1870,102.47,2,No,Low
1376,Player_1376,33,Netherlands,Juventus,LW,81,95,11,33,16,3621,94.06,3,No,High
1377,Player_1377,29,Argentina,Liverpool,LW,72,80,4,24,17,1145,145.28,5,No,Low
1378,Player_1378,27,Netherlands,Real Madrid,LB,86,91,1,16,11,3991,1.22,3,No,Low
1379,Player_1379,18,Germany,Bayern Munich,ST,74,82,3,32,4,3373,35.93,1,Yes,Low
1380,Player_1380,25,France,Bayern Munich,LB,81,79,26,22,8,124,89.57,3,No,Medium
1381,Player_1381,18,England,PSG,ST,89,91,49,8,11,311,127.1,4,No,Medium
1382,Player_1382,37,Brazil,Manchester City,CB,93,81,52,5,19,774,87.56,0,No,Low
1383,Player_1383,25,England,FC Barcelona,RW,93,66,9,1,8,2920,29.89,2,No,Medium
1384,Player_1384,25,Portugal,Juventus,RB,94,95,12,37,2,1831,167.43,5,No,High
1385,Player_1385,24,Brazil,FC Barcelona,CB,78,98,43,8,0,693,59.5,1,Yes,Medium
1386,Player_1386,33,Spain,PSG,LW,67,98,1,2,21,1376,141.98,3,No,Low
1387,Player_1387,17,Argentina,PSG,RB,92,67,25,15,14,989,160.51,3,Yes,Low
1388,Player_1388,27,Spain,Juventus,CDM,87,81,14,24,9,2846,62.69,3,No,Medium
1389,Player_1389,24,Spain,Manchester City,RB,84,78,45,23,13,1752,152.23,2,No,Medium
1390,Player_1390,26,England,Juventus,RB,76,78,9,28,6,2959,128.08,5,Yes,High
1391,Player_1391,23,Portugal,Juventus,CB,83,65,21,39,3,2453,162.82,0,No,Medium
1392,Player_1392,19,Argentina,Liverpool,LW,80,93,39,25,4,3043,45.61,4,No,Low
1393,Player_1393,19,Netherlands,Manchester City,RB,61,68,24,37,19,1716,167.66,5,No,Low
1394,Player_1394,34,Brazil,Bayern Munich,CB,90,97,14,34,15,1626,12.22,4,Yes,Medium
1395,Player_1395,21,Brazil,Liverpool,CB,92,81,12,22,2,3088,142.96,5,No,Low
1396,Player_1396,28,Germany,Real Madrid,RB,89,92,7,3,16,3331,78.7,1,Yes,High
1397,Player_1397,28,France,Manchester City,ST,71,90,20,13,12,4028,32.43,0,No,Low
1398,Player_1398,35,Germany,PSG,LW,71,72,20,38,5,889,14.75,0,No,Medium
1399,Player_1399,22,Netherlands,Liverpool,GK,83,98,21,6,4,1378,70.42,2,Yes,Low
1400,Player_1400,18,Germany,Manchester City,RB,83,82,45,7,15,4275,70.38,5,No,Low
1401,Player_1401,28,Brazil,FC Barcelona,LB,70,95,32,18,10,1707,41.78,3,Yes,Medium
1402,Player_1402,35,England,Juventus,LB,72,91,44,1,16,2364,39.19,0,No,Medium
1403,Player_1403,21,Spain,Real Madrid,CDM,86,80,26,0,4,231,72.21,5,Yes,Low
1404,Player_1404,28,Portugal,Bayern Munich,LW,67,74,39,37,5,1812,74.12,3,No,Low
1405,Player_1405,33,Spain,Juventus,CB,69,76,49,12,9,1612,79.9,2,Yes,Medium
1406,Player_1406,33,Spain,FC Barcelona,RW,67,86,21,23,20,4426,156.44,5,No,High
1407,Player_1407,26,Argentina,FC Barcelona,CM,79,80,29,31,0,2996,110.22,5,No,Low
1408,Player_1408,39,Brazil,Real Madrid,LW,67,76,8,29,20,247,4.17,1,No,Medium
1409,Player_1409,33,Netherlands,Bayern Munich,LW,68,75,44,5,9,4378,93.68,5,No,Low
1410,Player_1410,31,Netherlands,PSG,RB,66,84,34,37,16,2079,137.36,1,No,Medium
1411,Player_1411,28,Portugal,Liverpool,RB,73,65,17,32,2,3741,10.63,3,No,Medium
1412,Player_1412,32,England,Bayern Munich,CB,87,91,41,22,1,4476,76.36,3,No,Low
1413,Player_1413,35,Argentina,Manchester City,CDM,61,67,4,9,16,62,81.49,0,No,Medium
1414,Player_1414,24,France,FC Barcelona,RB,67,76,26,14,3,4223,171.75,2,No,Low
1415,Player_1415,37,England,Manchester City,CM,72,94,5,22,1,1551,85.89,1,No,Low
1416,Player_1416,33,Germany,PSG,CM,80,73,31,35,4,3005,135.11,0,No,Medium
1417,Player_1417,39,England,Manchester City,CDM,87,65,7,0,9,3322,54.87,4,No,Medium
1418,Player_1418,21,England,Bayern Munich,ST,94,68,38,7,0,294,140.39,0,Yes,Medium
1419,Player_1419,38,Spain,Manchester City,ST,82,79,20,2,0,4274,58.42,3,No,Low
1420,Player_1420,32,England,PSG,LW,74,91,17,13,3,4324,77.69,4,No,Medium
1421,Player_1421,22,Netherlands,PSG,RB,61,72,13,16,6,882,86.57,0,No,Low
1422,Player_1422,24,Germany,PSG,LB,71,87,14,33,13,393,166.78,5,No,Low
1423,Player_1423,34,Germany,Bayern Munich,GK,62,79,41,5,13,2739,10.09,2,No,Medium
1424,Player_1424,28,Brazil,PSG,CDM,64,91,25,4,17,3467,35.84,1,Yes,Medium
1425,Player_1425,31,England,FC Barcelona,LW,62,95,52,39,1,4167,127.18,5,No,High
1426,Player_1426,25,Spain,Juventus,LB,78,72,43,28,0,4413,104.18,4,No,Medium
1427,Player_1427,29,England,PSG,RB,61,94,31,34,20,3970,45.65,2,No,Low
1428,Player_1428,31,France,Manchester City,LB,76,82,38,17,21,4474,52.41,0,No,High
1429,Player_1429,26,France,Liverpool,LB,73,68,27,39,15,4231,66.43,5,Yes,Low
1430,Player_1430,32,Spain,Manchester City,CDM,87,86,38,29,21,2777,81.34,3,Yes,Low
1431,Player_1431,23,Brazil,Liverpool,LW,86,67,42,14,17,3692,147.34,3,No,Medium
1432,Player_1432,33,Brazil,Manchester City,CB,69,79,31,14,15,1401,2.98,2,No,High
1433,Player_1433,39,Germany,Bayern Munich,CM,62,97,12,15,22,905,161.69,3,No,Medium
1434,Player_1434,37,Germany,Manchester City,LW,84,78,14,32,21,529,74.64,1,No,Medium
1435,Player_1435,38,Argentina,Bayern Munich,GK,81,65,17,9,23,3721,41.87,2,No,Medium
1436,Player_1436,23,Spain,Bayern Munich,LB,89,90,38,18,5,386,91.76,2,No,Medium
1437,Player_1437,30,England,PSG,CB,80,72,5,36,24,2621,118.91,3,No,Medium
1438,Player_1438,31,Portugal,FC Barcelona,CDM,89,80,54,2,9,572,8.53,2,No,Low
1439,Player_1439,37,Spain,Liverpool,RW,87,74,10,35,1,643,128.98,0,No,Low
1440,Player_1440,23,Argentina,PSG,CM,90,90,31,3,6,4071,137.06,4,No,Low
1441,Player_1441,25,Germany,PSG,RW,85,92,39,10,20,1292,30.33,5,Yes,High
1442,Player_1442,35,Spain,Juventus,RB,81,76,19,32,16,3595,30.63,4,No,Medium
1443,Player_1443,32,Spain,Bayern Munich,RW,80,84,32,27,2,2485,37.08,5,No,Medium
1444,Player_1444,24,Germany,Bayern Munich,LB,60,78,39,31,19,554,143.49,3,No,Low
1445,Player_1445,34,Netherlands,Liverpool,LB,72,93,7,15,11,2158,49.32,1,Yes,Low
1446,Player_1446,39,Argentina,Manchester City,LB,80,76,50,8,1,3393,143.37,1,Yes,High
1447,Player_1447,34,Germany,Manchester City,LB,68,82,34,10,6,2574,97.52,3,No,Low
1448,Player_1448,36,Brazil,PSG,LW,76,66,4,5,16,2224,138.21,3,No,Medium
1449,Player_1449,23,England,Real Madrid,RW,80,66,34,26,18,3609,99.88,2,No,Low
1450,Player_1450,19,Germany,Real Madrid,GK,90,81,46,11,11,1988,60.77,1,No,Medium
1451,Player_1451,34,Argentina,Manchester City,RW,81,74,13,21,8,943,163.97,4,No,Medium
1452,Player_1452,26,France,Real Madrid,LW,71,82,20,39,13,993,128.9,3,No,Medium
1453,Player_1453,23,Brazil,Juventus,GK,65,86,46,36,1,3459,87.39,4,No,Low
1454,Player_1454,33,France,Manchester City,GK,75,83,23,20,20,1121,114.92,5,No,Medium
1455,Player_1455,30,Portugal,Bayern Munich,CM,85,65,16,32,3,3446,111.04,4,No,Medium
1456,Player_1456,19,Germany,PSG,GK,64,88,17,16,18,4265,64.78,1,Yes,High
1457,Player_1457,28,Brazil,FC Barcelona,RW,68,89,33,28,20,55,76.57,5,No,Medium
1458,Player_1458,29,England,PSG,LB,73,95,11,39,15,1756,57.63,4,No,Low
1459,Player_1459,18,Germany,Manchester City,LB,89,95,15,9,21,657,179.91,2,Yes,Medium
1460,Player_1460,19,England,Juventus,RB,85,66,3,17,16,259,104.62,2,No,Medium
1461,Player_1461,21,Netherlands,Manchester City,CM,88,83,24,12,1,2609,17.02,1,No,High
1462,Player_1462,27,Spain,PSG,RW,78,76,33,26,16,3909,93.68,2,No,Low
1463,Player_1463,24,France,Juventus,RW,67,74,27,9,18,403,9.47,3,No,Low
1464,Player_1464,39,Brazil,Juventus,CDM,82,95,45,31,7,794,52.31,5,Yes,High
1465,Player_1465,39,England,Juventus,ST,94,86,10,2,23,1561,80.55,1,No,High
1466,Player_1466,28,Argentina,Liverpool,RW,90,87,12,21,19,1183,96.4,5,No,Low
1467,Player_1467,23,England,Manchester City,CB,94,87,30,26,5,2641,175.72,4,No,Low
1468,Player_1468,31,Argentina,Real Madrid,RW,91,79,24,2,11,2664,176.81,3,No,Low
1469,Player_1469,33,Germany,Real Madrid,CDM,64,90,38,32,24,3607,18.1,1,Yes,Low
1470,Player_1470,20,Brazil,Manchester City,GK,75,67,9,1,22,1957,97.09,4,No,Low
1471,Player_1471,38,England,Manchester City,LW,76,87,23,10,17,2093,147.17,4,No,Low
1472,Player_1472,29,Portugal,Liverpool,LW,91,84,0,9,1,1752,43.17,4,No,High
1473,Player_1473,34,England,Real Madrid,CB,91,72,52,38,18,3562,135.23,4,No,Low
1474,Player_1474,17,Netherlands,Manchester City,CB,79,82,24,32,23,1694,158.21,4,No,Medium
1475,Player_1475,32,Portugal,Manchester City,RB,61,70,27,6,9,855,119.42,1,No,Medium
1476,Player_1476,29,Brazil,Liverpool,LW,79,91,35,14,24,1295,59.32,2,No,Medium
1477,Player_1477,26,Netherlands,Liverpool,GK,77,79,17,25,2,3621,166.2,4,No,Medium
1478,Player_1478,28,England,PSG,LW,60,69,5,10,24,4206,159.09,3,Yes,Medium
1479,Player_1479,18,Argentina,Liverpool,ST,88,73,1,37,11,1038,128.99,1,Yes,High
1480,Player_1480,39,England,FC Barcelona,LW,88,71,2,26,15,4370,65.78,0,No,Medium
1481,Player_1481,19,France,Real Madrid,LB,78,84,45,38,11,3447,142.65,2,Yes,Low
1482,Player_1482,26,Germany,PSG,RB,65,74,7,6,7,3432,57.24,3,No,Low
1483,Player_1483,18,Spain,FC Barcelona,CDM,67,90,30,0,4,3748,45.91,4,No,High
1484,Player_1484,39,Argentina,Manchester City,CB,83,68,47,9,10,2241,92.94,1,No,Medium
1485,Player_1485,29,France,Manchester City,ST,79,88,18,20,9,3530,179.49,1,Yes,High
1486,Player_1486,29,Portugal,PSG,CB,73,78,49,14,2,1963,144.88,4,No,Low
1487,Player_1487,34,Germany,Liverpool,RB,64,65,5,29,22,3015,131.5,3,No,Low
1488,Player_1488,19,Brazil,Juventus,RW,93,81,13,29,8,3567,81.64,1,No,Medium
1489,Player_1489,23,Argentina,Juventus,ST,75,88,2,7,11,3870,56.5,5,No,Low
1490,Player_1490,30,Spain,Manchester City,CM,66,91,47,23,5,1484,154.13,2,No,Medium
1491,Player_1491,36,Germany,Juventus,ST,75,71,0,18,18,4234,102.41,3,No,High
1492,Player_1492,33,Portugal,Bayern Munich,RB,66,73,43,2,15,2339,146.48,4,Yes,Medium
1493,Player_1493,37,Netherlands,PSG,CDM,86,76,29,14,20,334,88.05,3,No,Low
1494,Player_1494,28,Netherlands,FC Barcelona,ST,73,85,45,35,22,1858,135.84,5,No,Medium
1495,Player_1495,32,Spain,PSG,RB,73,67,18,5,23,1207,156.26,3,No,Medium
1496,Player_1496,28,Brazil,Real Madrid,GK,92,79,53,17,13,924,70.75,0,No,Medium
1497,Player_1497,31,Brazil,Liverpool,LW,92,85,18,37,3,2945,2.94,4,Yes,Medium
1498,Player_1498,26,Portugal,Liverpool,GK,79,74,8,18,17,4439,46.26,2,No,Medium
1499,Player_1499,23,Argentina,PSG,RB,66,97,6,29,9,3585,164.73,4,No,Medium
1500,Player_1500,36,Portugal,Manchester City,LB,91,70,45,12,17,4356,123.91,0,No,Medium
1501,Player_1501,21,England,Manchester City,RW,62,66,36,38,11,4027,132.83,4,No,Medium
1502,Player_1502,17,Brazil,Bayern Munich,LW,88,93,49,11,18,4264,58.89,4,No,Low
1503,Player_1503,33,Germany,Bayern Munich,LB,83,97,40,33,7,4295,126.38,2,No,Medium
1504,Player_1504,19,England,Liverpool,CDM,81,68,52,11,0,3842,116.51,0,No,Medium
1505,Player_1505,29,Netherlands,Bayern Munich,CB,65,68,6,23,13,2398,32.52,4,No,Low
1506,Player_1506,30,Netherlands,FC Barcelona,CM,83,93,8,3,22,27,174.38,5,No,High
1507,Player_1507,34,France,Bayern Munich,LW,82,84,3,35,5,3950,64.05,4,No,Low
1508,Player_1508,20,Spain,FC Barcelona,GK,69,87,24,13,13,1898,59.61,1,No,Low
1509,Player_1509,34,England,Bayern Munich,RW,75,82,48,16,1,2427,66.76,4,Yes,Medium
1510,Player_1510,21,Spain,Liverpool,LB,70,89,11,2,8,1625,16.96,2,Yes,Low
1511,Player_1511,32,Portugal,Liverpool,RB,91,65,5,37,11,2575,112.68,1,No,Medium
1512,Player_1512,17,England,FC Barcelona,LW,65,79,17,22,4,2036,43.33,5,No,Medium
1513,Player_1513,37,Portugal,PSG,CB,83,98,39,12,1,1310,144.69,5,No,Low
1514,Player_1514,30,France,Liverpool,RB,92,84,20,8,18,3355,71.25,5,Yes,High
1515,Player_1515,31,Brazil,PSG,LB,71,91,14,20,6,3720,82.81,0,No,Low
1516,Player_1516,25,Netherlands,Manchester City,RW,86,86,2,7,6,2274,116.53,5,No,Medium
1517,Player_1517,31,France,FC Barcelona,ST,77,69,1,16,9,2074,137.26,3,No,High
1518,Player_1518,33,Netherlands,Juventus,CB,72,98,54,15,16,88,41.99,2,No,Medium
1519,Player_1519,20,Brazil,Liverpool,RB,89,67,40,15,13,3804,173.95,0,No,High
1520,Player_1520,28,Portugal,Real Madrid,CB,72,81,39,27,10,121,112.21,1,No,High
1521,Player_1521,21,Brazil,Manchester City,CDM,93,88,3,15,19,32,1.51,3,No,High
1522,Player_1522,21,Netherlands,PSG,RB,89,88,31,13,5,695,75.1,0,No,Low
1523,Player_1523,27,Netherlands,Liverpool,LW,84,67,1,37,7,3841,78.91,2,No,Medium
1524,Player_1524,22,Spain,FC Barcelona,ST,61,71,45,19,18,524,145.75,1,No,High
1525,Player_1525,23,Germany,Juventus,ST,77,89,28,33,18,246,55.27,2,No,High
1526,Player_1526,30,France,Bayern Munich,CM,64,67,1,28,23,3926,59.96,2,No,High
1527,Player_1527,27,England,Juventus,CB,78,79,33,2,23,3101,13.15,1,Yes,High
1528,Player_1528,29,Netherlands,Real Madrid,GK,77,93,26,9,23,2096,51.4,5,No,Medium
1529,Player_1529,18,France,PSG,ST,91,93,53,19,16,1962,129.19,4,Yes,Low
1530,Player_1530,23,Spain,Manchester City,ST,80,74,38,1,23,2959,114.44,2,No,Low
1531,Player_1531,36,Brazil,Juventus,CDM,69,96,43,26,23,2227,15.11,5,Yes,Low
1532,Player_1532,20,Spain,FC Barcelona,CDM,81,87,37,31,17,1393,21.09,1,No,Low
1533,Player_1533,24,Argentina,Real Madrid,CDM,72,73,17,9,11,1907,68.16,2,No,Low
1534,Player_1534,36,Argentina,FC Barcelona,CB,76,78,35,39,8,2023,134.0,4,No,Low
1535,Player_1535,38,England,Liverpool,RB,68,68,18,16,22,2478,150.01,1,No,Low
1536,Player_1536,37,Spain,Bayern Munich,RW,83,84,26,32,23,4459,3.13,0,No,High
1537,Player_1537,35,Portugal,Manchester City,GK,73,92,44,5,15,981,59.56,0,No,Low
1538,Player_1538,29,England,FC Barcelona,ST,67,78,19,38,17,3223,76.66,5,No,Low
1539,Player_1539,30,Portugal,PSG,CM,78,98,20,17,15,226,164.05,0,No,Medium
1540,Player_1540,26,England,Liverpool,GK,87,77,22,8,15,1266,90.5,3,No,High
1541,Player_1541,27,Argentina,Liverpool,RB,89,95,29,7,3,2057,48.91,2,No,Low
1542,Player_1542,18,England,Manchester City,GK,66,97,24,24,22,2251,70.51,2,No,Low
1543,Player_1543,25,Argentina,Liverpool,ST,85,92,30,30,21,2941,78.84,1,No,Low
1544,Player_1544,33,Netherlands,PSG,GK,70,89,26,3,6,156,120.76,3,No,Low
1545,Player_1545,19,Brazil,FC Barcelona,RW,73,96,33,19,0,2073,7.88,2,No,Low
1546,Player_1546,22,Portugal,Manchester City,GK,80,73,7,27,23,4063,70.41,1,No,Medium
1547,Player_1547,21,Spain,Liverpool,ST,67,92,18,39,22,760,116.56,4,No,High
1548,Player_1548,21,Netherlands,Liverpool,ST,62,95,40,0,19,773,51.36,2,No,Medium
1549,Player_1549,38,Netherlands,PSG,GK,87,81,25,39,0,1552,106.72,5,No,Low
1550,Player_1550,31,England,Bayern Munich,CB,88,87,27,22,7,957,64.63,2,No,Low
1551,Player_1551,39,Argentina,Bayern Munich,CM,82,77,3,12,22,253,136.69,4,Yes,Low
1552,Player_1552,33,France,Juventus,LB,77,74,30,15,7,1569,11.38,4,Yes,Low
1553,Player_1553,25,Portugal,Liverpool,CDM,94,80,15,25,9,3218,165.27,2,No,Medium
1554,Player_1554,19,Netherlands,FC Barcelona,LB,72,70,50,30,0,4213,31.3,4,Yes,High
1555,Player_1555,36,England,Manchester City,RB,71,75,9,0,20,3236,28.96,1,No,Low
1556,Player_1556,33,Germany,Liverpool,RB,64,67,37,16,24,807,151.4,2,Yes,High
1557,Player_1557,26,Brazil,Real Madrid,ST,70,92,47,15,20,1781,156.54,2,No,High
1558,Player_1558,19,Brazil,Manchester City,RB,70,79,9,36,13,1221,17.19,0,Yes,Low
1559,Player_1559,34,France,Juventus,CB,90,77,44,9,13,3663,163.62,5,Yes,Low
1560,Player_1560,34,Argentina,Bayern Munich,CM,90,81,8,37,9,3200,49.56,2,Yes,Low
1561,Player_1561,33,England,Liverpool,RB,72,71,38,30,18,879,111.54,0,No,Medium
1562,Player_1562,19,Portugal,PSG,RW,73,92,35,9,24,0,12.81,4,No,Low
1563,Player_1563,19,Argentina,Real Madrid,CM,84,77,50,33,15,166,68.83,5,No,Low
1564,Player_1564,22,Brazil,Liverpool,CB,92,81,35,5,8,2063,81.41,5,No,High
1565,Player_1565,29,Argentina,Juventus,LB,92,79,18,27,19,2704,108.17,4,No,Low
1566,Player_1566,31,Brazil,FC Barcelona,CM,74,92,18,27,15,111,94.79,1,No,Low
1567,Player_1567,25,Argentina,Real Madrid,CM,75,79,11,12,19,3439,83.34,0,No,Medium
1568,Player_1568,20,France,Juventus,LB,65,75,12,11,7,1125,172.76,2,No,High
1569,Player_1569,30,Spain,Liverpool,CB,84,95,24,39,6,2641,33.71,0,Yes,Low
1570,Player_1570,21,France,FC Barcelona,RB,74,68,35,1,10,1429,28.86,4,No,Low
1571,Player_1571,18,France,Real Madrid,ST,63,98,24,7,20,2043,128.56,4,No,Medium
1572,Player_1572,27,Spain,FC Barcelona,LB,63,91,27,8,5,1634,13.88,1,Yes,Medium
1573,Player_1573,25,Spain,FC Barcelona,LB,89,74,41,7,14,670,87.18,5,No,High
1574,Player_1574,19,Netherlands,Real Madrid,LB,93,94,52,2,18,3111,87.39,5,No,Low
1575,Player_1575,25,Netherlands,Real Madrid,LB,86,84,38,8,13,1690,56.15,4,No,Medium
1576,Player_1576,19,England,FC Barcelona,RB,90,93,29,12,14,3957,167.51,0,No,Low
1577,Player_1577,18,Portugal,Juventus,GK,91,93,4,8,5,964,51.22,5,No,High
1578,Player_1578,28,Portugal,Bayern Munich,GK,68,87,16,30,23,280,52.28,2,No,Low
1579,Player_1579,26,England,Real Madrid,LW,67,85,17,24,9,4446,42.56,2,No,Low
1580,Player_1580,25,France,Liverpool,LB,73,74,42,7,13,1966,26.67,0,No,Low
1581,Player_1581,31,France,Manchester City,LB,92,76,46,30,15,2808,65.84,1,Yes,Low
1582,Player_1582,24,Brazil,PSG,CM,82,94,20,30,12,1964,122.72,2,No,Low
1583,Player_1583,21,Brazil,FC Barcelona,GK,80,97,21,16,10,3390,133.72,0,No,Low
1584,Player_1584,27,Portugal,FC Barcelona,RB,71,82,38,18,24,822,146.51,0,Yes,Low
1585,Player_1585,18,England,PSG,ST,61,78,49,2,2,1437,35.96,4,No,Low
1586,Player_1586,31,Germany,Bayern Munich,LW,72,86,5,29,7,2061,6.9,5,No,High
1587,Player_1587,22,Netherlands,PSG,LW,63,85,49,9,2,3865,175.46,4,No,Low
1588,Player_1588,24,Germany,Real Madrid,RB,79,65,15,28,1,4294,3.07,5,No,Medium
1589,Player_1589,21,England,PSG,ST,73,79,1,39,20,4036,172.94,1,No,Medium
1590,Player_1590,32,Brazil,FC Barcelona,CM,89,86,50,17,13,1464,149.27,1,No,Low
1591,Player_1591,34,Portugal,PSG,CDM,88,96,0,11,19,77,164.22,1,Yes,Low
1592,Player_1592,22,Portugal,Manchester City,GK,67,97,29,22,20,2159,70.0,0,No,High
1593,Player_1593,21,Brazil,Liverpool,LB,71,87,42,10,21,3187,35.9,0,No,Low
1594,Player_1594,32,Germany,Real Madrid,RB,85,66,51,8,14,1165,109.36,4,No,Low
1595,Player_1595,29,Argentina,PSG,GK,61,66,36,23,2,789,133.55,2,No,Low
1596,Player_1596,21,Argentina,FC Barcelona,LB,73,93,47,24,0,1563,23.99,5,No,Low
1597,Player_1597,29,Brazil,Juventus,CDM,65,67,22,24,14,1322,143.67,5,Yes,Low
1598,Player_1598,33,Argentina,Liverpool,CDM,90,71,0,8,19,1502,37.94,1,No,High
1599,Player_1599,34,Spain,Real Madrid,CB,76,93,18,11,21,1491,88.76,5,Yes,High
1600,Player_1600,24,England,FC Barcelona,CDM,84,87,45,10,1,1659,154.24,3,No,High
1601,Player_1601,29,England,Bayern Munich,GK,91,80,2,37,17,1315,35.22,1,Yes,Low
1602,Player_1602,35,Brazil,Manchester City,RW,71,95,1,27,0,3062,43.92,5,No,High
1603,Player_1603,19,France,Bayern Munich,RW,72,98,36,7,8,124,11.77,4,Yes,Medium
1604,Player_1604,24,Netherlands,Manchester City,LB,78,65,16,9,2,3062,26.82,5,No,High
1605,Player_1605,18,Germany,PSG,LB,84,82,27,24,1,518,26.8,0,No,Medium
1606,Player_1606,24,Brazil,Real Madrid,CB,90,79,17,35,3,2070,37.02,4,No,Low
1607,Player_1607,29,Argentina,PSG,RW,84,81,32,8,15,4257,51.87,4,Yes,High
1608,Player_1608,29,Germany,Manchester City,LB,75,74,14,7,21,2676,146.79,4,No,Medium
1609,Player_1609,17,France,Manchester City,CDM,82,84,21,2,0,2553,164.88,3,No,High
1610,Player_1610,22,Argentina,Manchester City,LB,73,70,40,17,8,3935,73.43,3,No,Low
1611,Player_1611,35,Portugal,Liverpool,LW,65,72,26,34,24,1044,23.51,5,No,High
1612,Player_1612,32,Netherlands,FC Barcelona,CB,84,98,54,16,7,1787,40.67,1,No,Low
1613,Player_1613,24,Spain,Real Madrid,RB,82,96,36,35,5,3535,132.65,5,Yes,Low
1614,Player_1614,17,Argentina,PSG,ST,71,68,31,27,19,1966,122.1,5,Yes,Medium
1615,Player_1615,32,Spain,PSG,CM,72,84,44,14,17,2356,174.11,5,No,Medium
1616,Player_1616,25,Germany,Bayern Munich,ST,93,88,18,18,15,2250,3.1,0,No,Medium
1617,Player_1617,29,Spain,Manchester City,ST,65,88,27,21,7,3487,135.26,4,No,Medium
1618,Player_1618,27,Germany,Juventus,RB,67,90,27,5,22,141,91.29,2,No,Low
1619,Player_1619,29,Germany,Manchester City,LB,67,89,9,6,3,1003,162.53,1,No,Medium
1620,Player_1620,37,Germany,Manchester City,ST,92,71,19,8,2,2154,103.92,1,Yes,Low
1621,Player_1621,26,Germany,Juventus,LW,93,74,24,19,14,2014,80.68,4,Yes,Medium
1622,Player_1622,20,Germany,PSG,CM,74,76,20,36,5,3608,120.02,1,No,Low
1623,Player_1623,22,Argentina,Bayern Munich,ST,94,65,13,10,0,968,150.12,4,No,Low
1624,Player_1624,23,Germany,FC Barcelona,RW,81,89,21,1,17,3925,51.21,1,No,High
1625,Player_1625,21,Argentina,Juventus,RB,82,80,52,21,22,3958,19.8,5,No,Low
1626,Player_1626,27,Germany,Liverpool,RB,81,69,25,35,10,2735,78.23,0,Yes,Medium
1627,Player_1627,29,Spain,Real Madrid,RB,64,83,43,4,2,804,39.01,1,Yes,Low
1628,Player_1628,35,Portugal,Juventus,CB,90,68,10,6,12,1334,77.6,1,No,Low
1629,Player_1629,39,Germany,FC Barcelona,CB,72,70,54,5,16,3984,178.39,2,No,Medium
1630,Player_1630,26,France,PSG,CDM,87,90,6,21,17,667,103.55,0,No,Low
1631,Player_1631,26,Germany,Liverpool,GK,79,73,16,9,13,384,125.0,5,No,Medium
1632,Player_1632,27,Germany,Liverpool,CM,92,78,17,39,24,3124,122.19,0,Yes,High
1633,Player_1633,37,Spain,Liverpool,LB,75,73,6,19,6,1608,147.82,0,No,High
1634,Player_1634,23,Netherlands,Manchester City,ST,88,79,19,27,6,3254,169.97,1,No,High
1635,Player_1635,34,England,Real Madrid,GK,82,84,37,22,13,3440,118.76,3,Yes,Medium
1636,Player_1636,20,Spain,PSG,LB,83,72,10,34,23,2748,85.96,1,No,Medium
1637,Player_1637,18,France,PSG,GK,93,96,43,0,14,12,57.55,4,No,Medium
1638,Player_1638,30,England,Liverpool,LB,66,85,15,28,11,3007,65.17,2,No,Medium
1639,Player_1639,29,Brazil,PSG,LW,63,83,50,8,11,2207,60.54,0,No,Medium
1640,Player_1640,28,Brazil,Real Madrid,CB,93,93,54,8,7,4167,58.74,4,No,Low
1641,Player_1641,23,Netherlands,Real Madrid,CM,81,95,26,21,15,2145,125.19,5,No,Low
1642,Player_1642,18,France,Bayern Munich,RW,64,70,50,1,8,1865,105.99,4,Yes,Low
1643,Player_1643,29,Spain,Juventus,LW,82,68,10,15,1,100,36.76,3,No,Low
1644,Player_1644,30,Argentina,Juventus,CB,74,93,15,39,13,4079,174.55,0,No,Low
1645,Player_1645,33,France,Bayern Munich,RB,90,67,22,5,23,4376,77.28,1,Yes,Medium
1646,Player_1646,25,Portugal,FC Barcelona,CB,68,65,11,12,23,1312,102.11,0,No,Low
1647,Player_1647,33,England,Juventus,GK,84,79,39,32,15,2796,126.62,2,No,Medium
1648,Player_1648,24,England,Real Madrid,CDM,84,85,2,18,4,449,110.66,0,No,Medium
1649,Player_1649,18,Germany,Real Madrid,LW,80,95,1,14,4,3439,56.33,4,Yes,Low
1650,Player_1650,29,Brazil,Juventus,RB,68,71,37,32,19,3501,143.69,4,No,Low
1651,Player_1651,19,Netherlands,Real Madrid,GK,81,81,47,9,20,3167,20.27,1,No,Low
1652,Player_1652,32,England,Bayern Munich,CM,82,83,51,0,17,120,102.63,1,No,Medium
1653,Player_1653,22,France,Liverpool,CB,63,67,23,11,17,3437,49.56,1,No,Medium
1654,Player_1654,35,England,Liverpool,RB,88,94,28,28,4,3856,111.03,5,Yes,Medium
1655,Player_1655,23,Netherlands,PSG,GK,74,93,46,16,10,1075,39.63,2,Yes,Low
1656,Player_1656,26,Netherlands,Liverpool,CDM,60,78,45,3,12,4413,139.11,5,No,Medium
1657,Player_1657,25,Netherlands,Manchester City,CB,89,92,33,28,2,2722,41.34,5,No,Medium
1658,Player_1658,18,France,Bayern Munich,CM,88,94,19,6,16,701,160.33,5,Yes,Low
1659,Player_1659,31,Argentina,Real Madrid,CDM,79,90,17,12,24,3348,155.15,0,Yes,Medium
1660,Player_1660,21,Germany,Juventus,LB,92,71,13,4,17,3668,65.55,3,No,Medium
1661,Player_1661,38,Brazil,Liverpool,GK,81,95,17,5,13,3265,69.75,0,No,Low
1662,Player_1662,20,England,Bayern Munich,CB,72,69,1,33,11,20,126.42,1,No,Medium
1663,Player_1663,36,France,Liverpool,CB,66,78,0,6,13,2446,16.72,2,No,Low
1664,Player_1664,20,Spain,FC Barcelona,RB,67,91,19,27,17,2249,15.03,5,No,Low
1665,Player_1665,34,Brazil,Real Madrid,CM,87,88,33,9,19,2513,24.97,0,No,Low
1666,Player_1666,20,Argentina,FC Barcelona,RW,68,93,40,3,1,3222,101.46,4,Yes,Low
1667,Player_1667,33,France,Real Madrid,LB,84,86,40,2,6,1182,27.25,5,Yes,Low
1668,Player_1668,28,Portugal,Bayern Munich,CDM,75,72,47,24,14,2357,50.33,0,No,Medium
1669,Player_1669,38,Portugal,PSG,LW,69,79,10,22,9,2551,116.62,4,Yes,High
1670,Player_1670,33,Germany,Liverpool,LW,70,69,26,26,14,2073,3.3,0,No,Medium
1671,Player_1671,26,Germany,Liverpool,CB,90,68,22,13,16,65,32.85,0,Yes,Low
1672,Player_1672,38,Argentina,Manchester City,RB,71,75,37,37,10,4358,167.42,5,Yes,High
1673,Player_1673,17,Argentina,Juventus,ST,90,82,43,31,1,471,119.61,0,Yes,Low
1674,Player_1674,38,Germany,FC Barcelona,CB,73,94,2,22,20,2214,55.35,1,No,Low
1675,Player_1675,34,England,Liverpool,LW,91,79,11,39,17,3225,8.63,4,No,Medium
1676,Player_1676,34,England,Bayern Munich,LW,76,70,29,36,24,342,105.7,2,Yes,Medium
1677,Player_1677,30,France,PSG,LB,94,80,30,2,3,717,40.5,3,No,Low
1678,Player_1678,31,Spain,Juventus,ST,60,73,22,34,8,2460,172.85,5,No,Medium
1679,Player_1679,28,France,Bayern Munich,CB,88,98,0,12,16,3736,123.81,4,No,Low
1680,Player_1680,20,Spain,FC Barcelona,LB,63,91,40,33,16,3255,175.36,1,Yes,Medium
1681,Player_1681,19,Argentina,Manchester City,RB,82,77,19,23,16,3265,152.88,4,No,Medium
1682,Player_1682,36,Brazil,Liverpool,LB,87,91,53,0,15,4089,87.2,2,No,High
1683,Player_1683,28,France,Bayern Munich,CB,75,73,5,11,19,2530,120.69,5,No,High
1684,Player_1684,23,France,Juventus,GK,71,69,10,7,24,3632,146.27,4,No,Medium
1685,Player_1685,27,Spain,Real Madrid,RW,80,86,34,18,7,1055,104.28,1,No,Low
1686,Player_1686,17,Netherlands,PSG,CB,76,95,3,8,22,14,11.54,5,No,Medium
1687,Player_1687,22,Argentina,Juventus,CM,72,67,28,27,14,3389,84.95,1,Yes,Low
1688,Player_1688,31,Argentina,Bayern Munich,LW,91,94,9,13,0,3314,23.94,5,No,High
1689,Player_1689,31,Portugal,PSG,ST,74,85,50,26,18,16,128.81,3,Yes,High
1690,Player_1690,35,Netherlands,Liverpool,ST,71,70,28,17,24,2581,122.67,2,No,Low
1691,Player_1691,27,Spain,Real Madrid,RW,74,92,37,5,14,1779,178.73,3,No,Medium
1692,Player_1692,39,Argentina,Manchester City,CM,93,96,0,32,8,1949,113.37,0,No,Low
1693,Player_1693,18,Netherlands,Juventus,LW,65,89,39,36,4,80,144.12,1,Yes,Low
1694,Player_1694,30,Germany,Manchester City,ST,76,96,7,24,15,3079,48.66,3,Yes,Medium
1695,Player_1695,18,Netherlands,Real Madrid,CM,79,86,37,12,12,1018,61.53,1,No,Low
1696,Player_1696,20,England,PSG,LB,68,88,16,22,15,779,165.11,5,No,High
1697,Player_1697,33,Portugal,Liverpool,CB,64,94,18,35,21,1824,136.06,1,No,Low
1698,Player_1698,19,Germany,Bayern Munich,CB,82,96,32,32,10,3864,118.12,0,Yes,High
1699,Player_1699,29,Brazil,Real Madrid,GK,92,95,14,20,12,2469,46.1,1,No,Medium
1700,Player_1700,25,France,FC Barcelona,LW,73,87,44,33,5,2513,125.89,5,Yes,High
1701,Player_1701,23,Portugal,PSG,CM,76,97,30,35,19,2130,159.67,5,No,Low
1702,Player_1702,31,Brazil,Manchester City,CDM,78,89,20,16,16,324,41.93,3,No,Medium
1703,Player_1703,39,France,Juventus,ST,92,88,2,9,4,3490,127.25,2,No,High
1704,Player_1704,27,England,Real Madrid,RB,60,95,1,22,16,676,71.17,4,Yes,Medium
1705,Player_1705,36,Netherlands,Manchester City,RB,72,77,34,1,0,2011,21.82,3,No,Low
1706,Player_1706,18,Argentina,PSG,CB,86,74,40,34,4,3616,137.54,0,No,Medium
1707,Player_1707,31,Germany,Manchester City,CDM,65,87,15,13,4,3133,30.5,4,Yes,High
1708,Player_1708,30,Spain,Real Madrid,RB,65,82,44,1,6,2704,45.89,1,No,Medium
1709,Player_1709,36,Germany,PSG,RW,92,96,50,18,15,1194,141.04,3,Yes,Medium
1710,Player_1710,38,England,FC Barcelona,RW,89,97,49,15,17,3075,133.71,4,No,High
1711,Player_1711,27,Brazil,Real Madrid,LW,94,92,20,24,5,904,46.13,3,No,Low
1712,Player_1712,19,Spain,Bayern Munich,CDM,82,80,11,0,1,2904,169.4,1,No,High
1713,Player_1713,33,Argentina,Liverpool,RW,69,80,27,1,12,3300,39.14,5,No,Medium
1714,Player_1714,28,England,Real Madrid,RW,78,82,11,26,9,1123,178.86,3,Yes,Low
1715,Player_1715,37,Spain,PSG,CB,87,72,32,1,20,4316,132.95,0,Yes,Low
1716,Player_1716,31,England,Juventus,RB,82,80,19,29,19,3057,70.96,4,No,Low
1717,Player_1717,32,Netherlands,Liverpool,LW,63,75,39,9,10,2270,23.9,4,No,Medium
1718,Player_1718,21,England,Real Madrid,CM,79,70,48,18,20,2724,58.03,4,Yes,Medium
1719,Player_1719,36,Argentina,FC Barcelona,LB,78,65,20,15,1,2258,35.28,3,No,High
1720,Player_1720,22,Portugal,Juventus,ST,86,76,51,12,7,3862,112.12,1,Yes,High
1721,Player_1721,35,France,FC Barcelona,ST,93,92,53,7,23,930,64.56,3,No,Low
1722,Player_1722,21,Spain,Bayern Munich,LB,63,81,38,30,21,3646,53.45,3,Yes,Medium
1723,Player_1723,19,Netherlands,Juventus,LB,66,65,40,24,18,4357,136.41,5,No,Medium
1724,Player_1724,17,Argentina,Manchester City,ST,66,96,48,38,19,1271,41.89,4,No,Low
1725,Player_1725,22,England,Juventus,ST,85,72,41,20,16,3812,105.85,1,Yes,Medium
1726,Player_1726,31,Netherlands,Liverpool,CM,85,88,35,37,15,797,35.43,2,No,Low
1727,Player_1727,18,Argentina,Juventus,CDM,78,74,21,28,24,3134,128.81,1,No,Low
1728,Player_1728,19,Portugal,PSG,CDM,68,74,25,5,9,3463,112.71,3,No,Low
1729,Player_1729,33,Netherlands,PSG,CM,79,89,6,17,4,2587,143.77,0,Yes,Medium
1730,Player_1730,28,Netherlands,Manchester City,RB,75,74,6,34,13,416,12.8,1,No,Medium
1731,Player_1731,34,France,Juventus,LB,76,83,7,26,23,4133,38.21,4,Yes,Medium
1732,Player_1732,31,Germany,FC Barcelona,GK,81,79,25,4,18,2355,28.23,0,No,Medium
1733,Player_1733,28,Spain,FC Barcelona,LB,72,80,23,6,3,897,34.71,2,No,Low
1734,Player_1734,32,France,Real Madrid,ST,71,66,23,9,19,52,18.99,2,No,Low
1735,Player_1735,24,Brazil,Bayern Munich,LB,69,93,39,9,15,605,101.39,0,Yes,Low
1736,Player_1736,30,Spain,Liverpool,ST,60,68,47,27,23,3677,107.02,2,No,Low
1737,Player_1737,33,France,Bayern Munich,LB,91,93,11,35,14,460,151.91,0,No,High
1738,Player_1738,37,England,Juventus,RB,89,95,46,9,8,774,75.48,3,No,Medium
1739,Player_1739,24,Spain,Bayern Munich,GK,67,81,7,34,2,4030,96.06,0,No,Low
1740,Player_1740,31,Spain,Real Madrid,RW,80,74,53,34,22,3327,178.44,3,No,Low
1741,Player_1741,30,Argentina,Bayern Munich,CM,81,91,8,36,8,3322,95.97,4,No,Medium
1742,Player_1742,34,England,Manchester City,CM,77,79,2,19,17,2694,103.46,4,Yes,Medium
1743,Player_1743,36,Brazil,Real Madrid,GK,61,95,53,12,3,3518,179.27,2,No,Medium
1744,Player_1744,23,Germany,Manchester City,LB,68,85,20,10,18,484,178.95,5,No,Low
1745,Player_1745,19,Netherlands,Juventus,RW,62,90,30,18,23,4187,76.61,5,No,Medium
1746,Player_1746,28,Portugal,Real Madrid,CDM,85,81,47,27,3,1187,114.47,0,No,Low
1747,Player_1747,37,France,Juventus,LB,80,67,46,37,8,3727,86.8,3,No,High
1748,Player_1748,19,Argentina,Juventus,RB,89,78,23,3,0,3996,129.87,4,No,Low
1749,Player_1749,36,France,Bayern Munich,ST,87,77,3,36,0,2992,168.94,4,No,Low
1750,Player_1750,30,Brazil,Manchester City,LW,85,91,19,18,19,1709,56.08,4,Yes,Medium
1751,Player_1751,31,Netherlands,Juventus,LB,93,65,15,36,18,1989,147.49,2,No,Low
1752,Player_1752,30,Brazil,Manchester City,LW,67,81,9,13,2,4273,118.05,4,No,Medium
1753,Player_1753,23,Spain,Manchester City,LB,69,98,42,30,9,4345,50.79,5,Yes,Low
1754,Player_1754,33,Portugal,Real Madrid,GK,73,78,25,27,11,3638,143.62,1,No,Low
1755,Player_1755,28,Brazil,PSG,LW,74,81,28,35,17,2714,77.17,2,No,High
1756,Player_1756,36,France,Bayern Munich,LB,76,67,4,37,13,4186,22.11,0,No,Low
1757,Player_1757,20,England,Juventus,CM,77,98,10,18,9,338,178.82,1,No,Low
1758,Player_1758,25,England,Manchester City,LW,91,89,28,0,9,1661,76.9,2,Yes,Low
1759,Player_1759,22,Spain,Liverpool,LB,82,66,44,22,17,4264,97.71,2,No,High
1760,Player_1760,32,Germany,PSG,CDM,82,98,14,27,23,3694,145.53,3,No,Medium
1761,Player_1761,38,France,Juventus,ST,94,90,5,3,0,169,172.98,1,No,High
1762,Player_1762,38,France,Liverpool,CDM,74,95,47,17,14,4233,157.18,1,No,High
1763,Player_1763,37,Brazil,Bayern Munich,RW,83,73,14,38,7,3099,94.75,5,Yes,Medium
1764,Player_1764,37,Portugal,Bayern Munich,LB,87,94,42,24,2,3012,98.45,1,No,Medium
1765,Player_1765,18,France,Manchester City,CB,75,84,19,17,17,2610,50.92,4,No,High
1766,Player_1766,24,Argentina,Manchester City,RB,75,85,33,5,8,2473,83.57,5,No,Low
1767,Player_1767,27,Germany,Juventus,CDM,65,93,1,18,15,3761,170.46,4,No,High
1768,Player_1768,29,Brazil,Real Madrid,LW,61,89,43,11,20,2688,130.99,5,No,Medium
1769,Player_1769,33,Argentina,PSG,GK,72,89,15,24,14,1290,2.63,0,No,Medium
1770,Player_1770,24,Spain,Juventus,RB,68,73,18,34,4,2035,21.41,5,No,Low
1771,Player_1771,37,England,PSG,CB,93,90,33,0,12,106,166.32,0,No,Medium
1772,Player_1772,34,Spain,Manchester City,LB,76,80,48,4,21,2607,152.85,5,No,Medium
1773,Player_1773,34,England,Bayern Munich,GK,86,76,13,0,19,2185,87.77,0,No,Medium
1774,Player_1774,30,Spain,Manchester City,LB,88,88,23,7,6,1688,111.25,4,Yes,High
1775,Player_1775,31,France,Bayern Munich,RW,81,90,27,38,15,5,52.49,5,No,Medium
1776,Player_1776,22,Argentina,Juventus,CB,83,84,47,17,6,522,142.81,3,No,Low
1777,Player_1777,27,England,Bayern Munich,LB,66,73,31,8,24,3343,108.8,5,No,Medium
1778,Player_1778,29,Brazil,Manchester City,LW,93,87,36,4,21,3895,125.22,0,No,Medium
1779,Player_1779,17,Argentina,FC Barcelona,RW,71,93,9,3,15,65,67.8,2,No,High
1780,Player_1780,22,Brazil,PSG,CM,82,95,48,28,12,3410,77.76,4,No,Medium
1781,Player_1781,25,Argentina,Liverpool,CB,74,83,44,0,16,2981,37.78,3,Yes,Low
1782,Player_1782,24,Argentina,Bayern Munich,ST,92,84,47,29,8,2815,170.68,2,Yes,Low
1783,Player_1783,27,Spain,Bayern Munich,GK,72,87,8,0,11,2017,170.41,2,No,Low
1784,Player_1784,38,England,FC Barcelona,CDM,82,91,23,2,12,1742,147.29,4,Yes,Low
1785,Player_1785,35,England,Juventus,LB,91,94,35,21,8,3509,168.43,5,Yes,Medium
1786,Player_1786,25,Portugal,Juventus,GK,94,85,28,7,4,4081,119.93,1,Yes,Low
1787,Player_1787,33,Argentina,Juventus,GK,60,71,28,17,6,3534,42.62,3,Yes,Low
1788,Player_1788,28,France,Liverpool,ST,64,86,47,24,0,2782,136.96,5,No,Medium
1789,Player_1789,30,France,Real Madrid,ST,72,74,22,19,3,362,58.89,4,No,Low
1790,Player_1790,31,Brazil,FC Barcelona,RW,64,87,26,30,3,3281,79.57,1,No,Low
1791,Player_1791,32,Brazil,Liverpool,CB,91,79,30,29,15,1634,49.75,4,No,Medium
1792,Player_1792,38,Spain,FC Barcelona,LW,80,94,42,15,4,524,76.54,4,No,Low
1793,Player_1793,38,Argentina,Bayern Munich,ST,83,98,6,1,21,1722,122.44,2,No,Medium
1794,Player_1794,36,Brazil,PSG,ST,77,77,48,16,3,419,20.35,5,No,Medium
1795,Player_1795,17,Brazil,FC Barcelona,CDM,80,68,53,9,5,4228,19.38,4,No,High
1796,Player_1796,26,Germany,Real Madrid,CM,69,82,44,6,22,3864,123.24,5,No,Low
1797,Player_1797,24,Argentina,Manchester City,ST,83,87,3,8,2,1067,140.43,1,No,Low
1798,Player_1798,34,Netherlands,Liverpool,CM,80,97,13,16,24,1400,99.49,2,No,Medium
1799,Player_1799,17,Spain,FC Barcelona,RW,84,98,41,8,7,1419,33.1,1,No,Low
1800,Player_1800,18,Brazil,FC Barcelona,LW,82,98,41,8,16,3133,77.82,1,No,Medium
1801,Player_1801,17,Spain,Real Madrid,GK,81,81,9,36,17,3636,136.59,2,No,Low
1802,Player_1802,17,England,PSG,ST,63,92,43,23,17,4002,123.59,5,No,Medium
1803,Player_1803,25,Spain,FC Barcelona,LB,93,78,33,38,24,629,20.22,1,No,High
1804,Player_1804,29,Netherlands,FC Barcelona,CM,65,98,25,10,11,4416,174.46,0,No,High
1805,Player_1805,17,France,PSG,CDM,87,75,22,7,24,1834,40.59,5,Yes,High
1806,Player_1806,29,Netherlands,Real Madrid,CDM,90,77,8,24,24,4131,40.06,4,Yes,Low
1807,Player_1807,36,France,Liverpool,ST,94,97,36,1,0,2353,83.04,2,Yes,Medium
1808,Player_1808,38,Spain,Liverpool,CB,82,66,7,9,22,3055,59.24,2,No,Medium
1809,Player_1809,23,France,FC Barcelona,GK,65,98,52,23,11,2940,177.13,5,Yes,High
1810,Player_1810,18,England,PSG,LW,75,93,13,15,10,11,14.23,0,Yes,High
1811,Player_1811,22,Argentina,FC Barcelona,LB,61,68,6,18,12,2130,55.51,0,Yes,High
1812,Player_1812,23,France,Juventus,CB,83,76,6,30,2,3103,69.2,0,No,High
1813,Player_1813,30,France,Manchester City,CDM,76,90,8,10,24,1431,89.08,0,No,Medium
1814,Player_1814,34,Spain,Liverpool,CM,60,92,2,5,7,3157,3.44,3,Yes,Medium
1815,Player_1815,31,England,Juventus,CM,65,67,13,5,2,1434,15.28,2,No,High
1816,Player_1816,18,Portugal,Bayern Munich,CB,64,84,16,31,16,956,46.78,1,Yes,Medium
1817,Player_1817,26,Portugal,Manchester City,CM,88,74,49,38,24,3858,99.94,2,No,High
1818,Player_1818,39,Portugal,FC Barcelona,CDM,71,82,43,12,12,3634,138.31,2,No,High
1819,Player_1819,28,Portugal,Real Madrid,CB,62,91,21,2,9,3903,123.73,2,No,Medium
1820,Player_1820,33,Argentina,Liverpool,CDM,60,95,45,34,16,240,102.28,0,No,Low
1821,Player_1821,24,Netherlands,Bayern Munich,LB,86,91,25,37,2,1955,71.8,0,No,Low
1822,Player_1822,27,Spain,Manchester City,GK,83,65,27,16,12,2012,156.79,3,No,Low
1823,Player_1823,19,Spain,Liverpool,LB,78,70,44,2,21,4065,83.03,5,No,Medium
1824,Player_1824,22,Germany,PSG,LB,67,75,13,33,5,2803,54.22,2,No,Medium
1825,Player_1825,25,England,Real Madrid,CM,61,98,8,11,13,3903,113.47,4,No,Medium
1826,Player_1826,22,Portugal,Manchester City,ST,89,84,50,23,9,1024,124.73,5,Yes,Medium
1827,Player_1827,25,Argentina,PSG,RB,89,85,25,5,19,600,72.03,3,No,High
1828,Player_1828,23,England,Juventus,CM,91,85,1,10,15,2329,5.55,0,No,Low
1829,Player_1829,25,Portugal,FC Barcelona,ST,60,82,10,26,17,2698,17.4,2,No,High
1830,Player_1830,34,Argentina,PSG,CDM,72,85,16,23,12,3026,152.29,0,No,Low
1831,Player_1831,28,England,Manchester City,RB,70,83,33,17,9,1142,10.65,5,No,Medium
1832,Player_1832,24,Spain,Manchester City,CM,69,68,18,26,5,1011,106.77,1,No,Medium
1833,Player_1833,24,Spain,Juventus,RB,85,77,38,20,9,1103,33.48,0,No,Medium
1834,Player_1834,34,Netherlands,FC Barcelona,RB,79,82,17,33,4,1646,41.59,0,No,Medium
1835,Player_1835,36,Brazil,PSG,RW,76,93,12,32,5,1700,49.56,3,No,Low
1836,Player_1836,31,Netherlands,PSG,GK,76,89,4,17,6,218,7.37,1,Yes,Low
1837,Player_1837,23,France,FC Barcelona,RW,63,77,49,2,10,3588,32.31,5,No,Low
1838,Player_1838,27,Netherlands,PSG,ST,64,91,22,23,15,726,117.26,4,Yes,Low
1839,Player_1839,36,Portugal,Liverpool,LW,82,83,23,0,24,811,90.02,4,No,Medium
1840,Player_1840,32,Germany,FC Barcelona,CB,69,65,28,5,11,1583,143.62,4,No,Medium
1841,Player_1841,20,England,Real Madrid,LW,87,83,47,18,11,4037,11.49,2,No,High
1842,Player_1842,22,Germany,Manchester City,CB,92,65,46,21,22,882,160.06,4,No,High
1843,Player_1843,38,Brazil,Real Madrid,ST,85,81,7,7,19,431,179.35,2,No,Medium
1844,Player_1844,19,France,Liverpool,ST,88,85,25,4,4,4034,3.33,5,No,Low
1845,Player_1845,25,England,Juventus,CDM,86,86,14,8,15,947,174.19,5,Yes,Medium
1846,Player_1846,26,Argentina,Liverpool,GK,77,79,0,20,5,3907,42.84,0,No,Medium
1847,Player_1847,30,Portugal,Bayern Munich,RB,69,96,27,27,8,1667,124.81,4,Yes,Medium
1848,Player_1848,27,France,Bayern Munich,RW,64,68,48,3,4,2982,53.0,3,No,Medium
1849,Player_1849,34,Spain,Bayern Munich,RW,69,96,46,23,20,2539,94.17,5,Yes,Medium
1850,Player_1850,38,Brazil,FC Barcelona,ST,80,68,45,7,22,2113,92.12,1,No,High
1851,Player_1851,28,France,PSG,RW,83,65,13,16,15,390,65.32,1,No,High
1852,Player_1852,39,Portugal,Liverpool,ST,62,97,41,33,17,82,129.3,5,No,High
1853,Player_1853,28,Netherlands,Real Madrid,RB,90,71,33,19,18,1002,108.13,0,No,High
1854,Player_1854,29,France,Juventus,ST,61,73,30,15,11,480,91.74,1,No,High
1855,Player_1855,29,Netherlands,Real Madrid,CDM,61,65,5,9,1,776,176.92,1,No,Low
1856,Player_1856,35,Portugal,Real Madrid,GK,93,80,48,33,9,4089,169.23,0,Yes,High
1857,Player_1857,35,Spain,Real Madrid,LB,79,82,4,9,11,1754,172.0,0,No,Low
1858,Player_1858,39,England,Juventus,CM,92,70,30,29,13,1248,158.7,0,No,Medium
1859,Player_1859,30,Argentina,Bayern Munich,GK,63,66,36,29,17,1136,46.3,3,No,Low
1860,Player_1860,20,Spain,Real Madrid,GK,70,73,14,24,18,2699,63.32,0,Yes,Low
1861,Player_1861,29,Netherlands,Juventus,LW,64,68,14,6,5,3256,41.97,0,Yes,Low
1862,Player_1862,24,Netherlands,Juventus,CB,84,87,51,19,4,1535,177.52,0,No,Low
1863,Player_1863,39,Argentina,PSG,CM,93,72,42,16,15,3244,27.9,5,No,Low
1864,Player_1864,37,England,Juventus,RB,68,89,4,2,13,522,66.29,4,No,Low
1865,Player_1865,39,France,Bayern Munich,LB,65,80,27,39,12,1694,36.23,5,No,High
1866,Player_1866,35,Argentina,Real Madrid,LB,77,81,32,35,20,2252,40.61,4,No,High
1867,Player_1867,28,Brazil,Juventus,GK,73,82,10,25,1,3609,44.85,3,No,Medium
1868,Player_1868,34,Brazil,FC Barcelona,CDM,78,91,42,9,1,277,115.32,3,Yes,High
1869,Player_1869,22,Portugal,Juventus,CB,73,79,5,33,11,147,14.15,1,No,Medium
1870,Player_1870,34,Spain,Manchester City,ST,76,81,22,13,0,2585,103.27,5,No,High
1871,Player_1871,35,Netherlands,Manchester City,CB,94,69,39,7,18,3654,147.56,4,No,Medium
1872,Player_1872,38,England,Manchester City,LW,88,80,1,26,15,3620,138.09,3,No,Medium
1873,Player_1873,21,Portugal,Juventus,CB,76,79,14,9,6,2439,27.64,3,No,High
1874,Player_1874,25,Spain,Bayern Munich,GK,67,98,22,14,20,939,164.69,5,No,Low
1875,Player_1875,19,Spain,Real Madrid,RB,60,83,21,36,6,3709,138.73,1,No,Low
1876,Player_1876,26,Portugal,Liverpool,GK,66,72,8,21,15,4337,1.45,0,No,Medium
1877,Player_1877,35,Germany,Liverpool,RB,64,74,46,30,24,1223,132.86,2,No,Low
1878,Player_1878,19,Spain,Liverpool,RW,83,69,39,1,5,3363,132.87,1,No,Medium
1879,Player_1879,38,Germany,Bayern Munich,RB,87,90,29,30,17,3023,89.68,2,No,Low
1880,Player_1880,31,Brazil,PSG,CB,76,86,15,13,0,1817,8.75,1,No,High
1881,Player_1881,17,Brazil,FC Barcelona,CB,79,87,45,9,0,3372,104.59,1,No,High
1882,Player_1882,23,Spain,FC Barcelona,CB,62,77,46,29,24,683,137.95,0,No,Low
1883,Player_1883,28,Brazil,Manchester City,RW,85,73,51,35,13,1232,49.12,3,No,Low
1884,Player_1884,33,England,Manchester City,ST,74,84,29,39,5,3385,120.24,4,Yes,Low
1885,Player_1885,37,Germany,Juventus,CM,67,92,44,14,5,616,64.03,1,No,Medium
1886,Player_1886,36,Germany,Liverpool,CB,72,88,8,13,3,2073,103.51,0,No,Low
1887,Player_1887,21,Spain,Juventus,LW,62,97,0,30,11,2910,69.53,2,No,Medium
1888,Player_1888,20,Brazil,Liverpool,LB,60,84,37,28,17,2017,55.03,5,No,Low
1889,Player_1889,28,Argentina,Manchester City,LB,68,94,7,26,9,4223,154.14,5,No,Low
1890,Player_1890,36,Netherlands,Real Madrid,CM,90,73,51,20,2,2184,135.81,3,No,Low
1891,Player_1891,34,Portugal,PSG,CM,85,81,17,8,2,1357,62.51,5,No,Medium
1892,Player_1892,33,Portugal,Juventus,ST,76,78,26,19,7,3063,78.52,1,No,Low
1893,Player_1893,35,Germany,PSG,LW,93,83,17,34,21,2468,124.66,2,No,Medium
1894,Player_1894,25,Spain,PSG,GK,68,71,31,14,22,3920,146.09,1,No,Low
1895,Player_1895,20,Spain,PSG,RB,72,67,48,23,24,4236,123.34,5,No,Low
1896,Player_1896,37,England,Manchester City,RB,64,97,31,15,0,1939,97.6,4,No,Low
1897,Player_1897,18,France,FC Barcelona,GK,72,96,52,35,17,3856,171.81,5,No,Medium
1898,Player_1898,20,Netherlands,Manchester City,LB,60,75,47,10,14,50,139.46,4,Yes,Medium
1899,Player_1899,18,France,PSG,GK,84,66,44,7,24,2976,21.25,5,No,High
1900,Player_1900,31,Germany,Manchester City,LW,63,90,53,2,20,1360,100.69,3,Yes,Low
1901,Player_1901,18,Portugal,PSG,CB,69,68,35,18,19,3736,74.02,2,Yes,Low
1902,Player_1902,20,England,Bayern Munich,RW,87,81,35,2,16,3802,143.19,4,No,Low
1903,Player_1903,22,England,Liverpool,CB,65,81,20,35,24,3802,8.52,0,No,Low
1904,Player_1904,23,England,FC Barcelona,RW,86,92,45,24,10,365,74.22,3,No,Low
1905,Player_1905,26,Germany,Bayern Munich,RB,71,94,31,35,12,2955,57.63,1,No,Low
1906,Player_1906,35,France,Real Madrid,CM,62,87,30,10,24,3045,25.84,5,No,Low
1907,Player_1907,35,Portugal,Manchester City,CB,92,88,36,15,19,2003,68.5,2,Yes,Medium
1908,Player_1908,38,England,Real Madrid,GK,69,93,15,16,24,2901,121.27,2,No,Medium
1909,Player_1909,28,Portugal,Juventus,LW,90,68,45,23,9,257,65.42,5,Yes,Low
1910,Player_1910,19,Brazil,Manchester City,LW,74,93,45,16,12,3459,104.61,0,No,Medium
1911,Player_1911,29,Spain,Liverpool,LB,66,83,13,19,16,44,106.91,4,Yes,Medium
1912,Player_1912,34,Spain,Bayern Munich,LW,73,91,23,21,20,268,105.89,5,No,Low
1913,Player_1913,24,Portugal,Liverpool,LW,73,93,24,5,0,1334,95.55,2,Yes,Medium
1914,Player_1914,37,Argentina,Juventus,CM,62,70,45,6,19,671,21.5,0,No,High
1915,Player_1915,31,Argentina,PSG,GK,62,87,50,13,15,3638,39.71,0,No,High
1916,Player_1916,17,Germany,Liverpool,RB,81,72,34,10,15,234,144.11,1,No,Medium
1917,Player_1917,19,Germany,Liverpool,LW,78,66,16,11,20,3207,90.67,0,No,Medium
1918,Player_1918,24,Spain,PSG,RB,94,77,45,4,2,2400,127.24,3,No,Medium
1919,Player_1919,20,Brazil,Manchester City,CM,71,85,41,4,1,1417,102.8,2,No,Low
1920,Player_1920,32,Netherlands,PSG,LW,64,95,44,19,5,4370,7.44,3,No,Medium
1921,Player_1921,39,France,Bayern Munich,LB,69,91,53,14,10,3254,143.42,0,No,Low
1922,Player_1922,26,France,Liverpool,CB,92,87,3,25,2,439,12.05,0,No,High
1923,Player_1923,28,Germany,PSG,CDM,72,85,10,32,0,650,169.8,3,No,Low
1924,Player_1924,30,Brazil,Juventus,ST,94,77,46,29,10,33,39.16,1,Yes,Low
1925,Player_1925,30,Germany,Juventus,LW,91,90,14,23,12,2752,92.48,0,Yes,Medium
1926,Player_1926,18,Netherlands,Liverpool,RB,70,71,29,22,4,3032,11.91,3,Yes,Medium
1927,Player_1927,39,France,Bayern Munich,ST,83,86,23,8,17,1110,161.14,3,No,Low
1928,Player_1928,21,Portugal,Real Madrid,RW,94,87,1,2,14,3281,176.4,2,No,Medium
1929,Player_1929,21,Germany,Bayern Munich,LW,78,94,42,35,17,461,26.76,1,No,Low
1930,Player_1930,22,England,FC Barcelona,CDM,65,82,33,6,14,321,53.59,4,No,Medium
1931,Player_1931,29,Portugal,FC Barcelona,CM,94,82,22,21,19,1874,3.35,3,No,Low
1932,Player_1932,25,Netherlands,FC Barcelona,LB,63,74,30,13,19,3039,141.76,2,No,Low
1933,Player_1933,38,Netherlands,Liverpool,CDM,92,94,36,28,19,2237,56.41,4,No,Low
1934,Player_1934,31,Germany,Juventus,RB,72,90,12,15,6,4021,106.2,2,No,Low
1935,Player_1935,30,Spain,Manchester City,CM,78,71,32,33,16,1256,7.54,2,No,Medium
1936,Player_1936,23,Germany,Juventus,CB,71,71,6,9,7,2439,128.93,5,No,Low
1937,Player_1937,36,Spain,Manchester City,CM,70,69,31,6,12,4009,95.53,1,No,High
1938,Player_1938,18,Netherlands,Manchester City,LW,65,65,6,24,15,3240,130.63,0,No,Low
1939,Player_1939,23,Brazil,Juventus,ST,71,82,41,26,24,4263,142.23,1,Yes,Low
1940,Player_1940,22,Netherlands,Liverpool,ST,86,77,37,14,9,3302,16.52,4,No,Medium
1941,Player_1941,33,France,Bayern Munich,RB,84,89,51,31,13,2711,104.27,5,No,Low
1942,Player_1942,18,Portugal,Manchester City,CM,62,72,43,27,5,1409,117.16,1,No,Low
1943,Player_1943,19,Portugal,Real Madrid,CDM,62,74,12,8,19,2428,93.25,0,Yes,Low
1944,Player_1944,21,Argentina,Juventus,RB,79,96,23,6,21,1832,33.24,1,No,Low
1945,Player_1945,21,Argentina,Juventus,LB,87,81,27,15,6,2024,143.31,1,No,Medium
1946,Player_1946,17,Netherlands,FC Barcelona,RB,82,79,31,25,5,3346,179.54,1,No,Medium
1947,Player_1947,24,France,Bayern Munich,RB,62,79,42,34,16,3931,174.48,3,No,Low
1948,Player_1948,28,Argentina,FC Barcelona,CB,83,84,17,16,20,2911,140.07,3,No,Medium
1949,Player_1949,20,Portugal,Juventus,LW,65,79,33,22,23,4245,75.55,1,No,High
1950,Player_1950,29,Germany,Juventus,CB,79,70,47,7,7,3213,61.05,0,Yes,High
1951,Player_1951,39,Brazil,Manchester City,ST,70,94,33,1,11,2163,12.8,0,No,Low
1952,Player_1952,31,Brazil,Bayern Munich,ST,91,72,50,30,24,1452,75.22,0,No,Low
1953,Player_1953,27,France,PSG,RW,86,95,37,31,3,2753,28.51,0,No,Medium
1954,Player_1954,26,Netherlands,Real Madrid,RW,80,96,0,28,9,2901,46.15,5,No,Low
1955,Player_1955,19,Argentina,Manchester City,CDM,72,79,42,2,5,3071,160.59,5,Yes,Low
1956,Player_1956,38,Germany,Juventus,ST,81,82,49,7,6,4046,174.35,2,Yes,Low
1957,Player_1957,30,Brazil,Manchester City,CB,94,77,41,1,20,305,170.77,1,Yes,Low
1958,Player_1958,32,Brazil,Real Madrid,LB,81,88,30,30,7,1384,35.21,1,No,Medium
1959,Player_1959,26,England,Juventus,RW,87,78,49,36,2,3367,162.21,2,No,Medium
1960,Player_1960,26,Netherlands,Real Madrid,CM,80,92,0,19,7,1574,25.9,0,No,Low
1961,Player_1961,28,England,PSG,RW,77,75,50,28,14,872,91.63,4,No,Medium
1962,Player_1962,25,Portugal,Manchester City,ST,90,70,15,16,20,168,116.04,4,No,Medium
1963,Player_1963,17,Brazil,Liverpool,RB,80,89,38,9,0,1603,83.51,2,No,Medium
1964,Player_1964,21,France,Manchester City,LW,73,65,14,21,12,1030,171.35,4,No,High
1965,Player_1965,36,Spain,FC Barcelona,ST,84,89,32,5,21,1734,60.31,3,Yes,High
1966,Player_1966,24,Spain,Bayern Munich,RB,86,66,22,33,17,4442,95.16,1,No,Medium
1967,Player_1967,27,Germany,Bayern Munich,LB,82,96,52,30,14,3667,14.04,4,No,High
1968,Player_1968,28,Brazil,FC Barcelona,LB,90,77,40,11,6,1276,153.47,5,No,Low
1969,Player_1969,17,Brazil,Juventus,CM,88,97,33,11,14,542,74.7,5,No,Medium
1970,Player_1970,38,Portugal,Bayern Munich,GK,89,96,16,15,24,354,126.25,3,No,Medium
1971,Player_1971,36,Brazil,Real Madrid,CB,85,88,24,24,2,4036,122.96,1,No,Medium
1972,Player_1972,27,France,Bayern Munich,LW,79,91,41,21,13,3439,121.89,3,No,Low
1973,Player_1973,21,England,Bayern Munich,ST,78,68,5,26,19,583,91.5,1,No,Low
1974,Player_1974,31,Brazil,FC Barcelona,ST,86,88,30,23,3,510,50.31,1,Yes,Low
1975,Player_1975,21,Brazil,Juventus,GK,84,87,4,11,3,946,112.7,4,No,Medium
1976,Player_1976,28,Portugal,PSG,CM,82,93,39,17,2,3473,173.14,5,Yes,High
1977,Player_1977,21,Netherlands,Bayern Munich,CDM,88,98,39,15,4,1198,150.19,2,No,Low
1978,Player_1978,33,Argentina,Liverpool,RW,74,85,29,3,24,2871,20.02,4,No,High
1979,Player_1979,33,Netherlands,Bayern Munich,CM,62,94,4,11,10,3995,4.66,0,Yes,Low
1980,Player_1980,28,Portugal,PSG,RB,69,90,11,32,7,3921,90.07,3,Yes,High
1981,Player_1981,31,Netherlands,FC Barcelona,CM,74,84,6,21,1,4173,139.76,0,No,High
1982,Player_1982,31,Portugal,PSG,GK,75,80,44,17,15,3303,56.85,1,No,Low
1983,Player_1983,22,France,FC Barcelona,GK,76,67,12,32,24,2447,126.37,4,No,Low
1984,Player_1984,28,Germany,Real Madrid,CB,78,89,48,26,9,3284,167.78,0,No,Low
1985,Player_1985,36,Brazil,FC Barcelona,LW,70,87,3,18,17,1216,82.89,0,No,High
1986,Player_1986,34,Portugal,Real Madrid,LB,64,65,49,13,6,1290,44.33,5,Yes,Low
1987,Player_1987,30,Portugal,Real Madrid,GK,64,97,41,24,4,4221,165.24,0,No,Medium
1988,Player_1988,18,Argentina,FC Barcelona,CB,73,79,2,33,6,501,85.27,5,No,Low
1989,Player_1989,25,Portugal,Liverpool,RW,85,81,11,23,20,2871,73.71,5,Yes,High
1990,Player_1990,21,Spain,Manchester City,LB,67,98,0,37,5,386,63.93,1,No,Low
1991,Player_1991,36,Germany,FC Barcelona,CDM,64,81,26,22,23,411,76.43,5,No,Low
1992,Player_1992,17,Brazil,Bayern Munich,ST,66,68,42,4,0,2006,121.42,1,No,Low
1993,Player_1993,39,Brazil,Liverpool,RW,75,77,49,35,10,2147,78.35,5,No,Medium
1994,Player_1994,19,Argentina,Liverpool,CDM,73,68,12,23,12,3868,58.7,5,No,Low
1995,Player_1995,22,France,Bayern Munich,LB,63,71,16,35,11,1338,133.98,1,Yes,Medium
1996,Player_1996,21,Brazil,Manchester City,RW,76,73,7,4,0,352,36.93,0,No,Low
1997,Player_1997,37,Spain,Liverpool,CB,65,87,31,38,20,3188,36.75,3,Yes,Medium
1998,Player_1998,21,Brazil,Real Madrid,CDM,75,97,19,5,14,1302,125.51,4,No,Medium
1999,Player_1999,17,Spain,Manchester City,ST,88,97,50,35,0,846,156.07,4,No,Low
2000,Player_2000,33,Germany,Juventus,CB,69,84,16,3,2,525,43.8,1,No,Low
2001,Player_2001,35,Germany,Bayern Munich,RB,88,68,33,9,14,2524,34.81,0,Yes,Medium
2002,Player_2002,30,England,Manchester City,ST,73,65,34,0,8,1878,120.82,3,Yes,Low
2003,Player_2003,28,England,FC Barcelona,LW,63,98,34,20,13,4105,111.93,2,No,Low
2004,Player_2004,26,Spain,Manchester City,CM,72,91,37,39,22,3630,80.78,1,Yes,Medium
2005,Player_2005,36,France,Real Madrid,LW,77,85,41,38,21,3809,17.71,2,No,Low
2006,Player_2006,37,Brazil,FC Barcelona,GK,92,88,23,36,23,2819,16.98,4,No,Medium
2007,Player_2007,34,Portugal,PSG,RB,80,79,53,2,7,2907,140.03,4,No,Low
2008,Player_2008,27,Brazil,Bayern Munich,RB,75,89,17,30,21,3077,81.59,3,Yes,Low
2009,Player_2009,18,England,Bayern Munich,CM,74,73,49,26,3,3830,154.51,3,Yes,Medium
2010,Player_2010,34,Netherlands,Manchester City,CDM,64,81,45,16,19,1058,103.66,2,Yes,Low
2011,Player_2011,23,Portugal,Liverpool,CM,65,85,47,22,19,2489,111.56,4,No,Low
2012,Player_2012,31,Spain,FC Barcelona,GK,62,77,38,12,5,3648,168.19,3,No,Medium
2013,Player_2013,27,Portugal,PSG,LW,71,67,32,26,0,3264,30.05,3,No,Low
2014,Player_2014,34,Netherlands,FC Barcelona,RB,92,68,48,19,17,3601,97.97,4,Yes,Medium
2015,Player_2015,39,Brazil,Bayern Munich,LW,92,68,22,12,5,2293,10.94,4,No,High
2016,Player_2016,28,Brazil,FC Barcelona,ST,90,92,24,23,13,674,64.93,0,No,Medium
2017,Player_2017,22,France,PSG,RW,80,71,36,2,10,1878,27.08,5,No,Low
2018,Player_2018,36,Argentina,Liverpool,GK,86,90,26,9,16,1011,34.22,3,No,Medium
2019,Player_2019,39,Portugal,Manchester City,RW,86,75,0,0,8,793,168.3,2,Yes,Low
2020,Player_2020,29,England,Real Madrid,GK,67,88,20,12,21,232,110.12,1,Yes,Low
2021,Player_2021,36,Netherlands,FC Barcelona,LB,91,74,48,13,6,3027,160.64,1,No,High
2022,Player_2022,32,Netherlands,Real Madrid,ST,85,77,9,32,13,3609,80.11,4,Yes,Low
2023,Player_2023,34,Netherlands,Bayern Munich,CDM,61,83,30,1,16,2173,107.78,5,No,Low
2024,Player_2024,26,England,Manchester City,GK,71,83,43,1,7,3384,6.26,2,No,Low
2025,Player_2025,39,Argentina,Juventus,RW,81,76,24,38,15,2328,84.78,0,No,High
2026,Player_2026,24,Brazil,Manchester City,GK,76,86,19,30,11,797,101.75,3,No,Low
2027,Player_2027,34,France,FC Barcelona,CDM,66,94,1,3,11,3684,3.51,0,No,Low
2028,Player_2028,37,France,Liverpool,GK,63,76,54,33,4,4487,142.21,2,No,Medium
2029,Player_2029,17,England,Manchester City,CB,91,93,47,18,4,4477,53.53,0,Yes,Medium
2030,Player_2030,39,France,FC Barcelona,GK,70,85,14,36,13,2589,81.72,4,No,Low
2031,Player_2031,24,Netherlands,FC Barcelona,LB,60,75,27,8,5,4211,96.65,1,No,High
2032,Player_2032,22,Germany,Real Madrid,LB,84,82,12,23,6,508,178.6,4,No,Low
2033,Player_2033,21,Argentina,Manchester City,RB,83,91,49,12,22,1463,18.3,3,No,Low
2034,Player_2034,31,Brazil,FC Barcelona,LB,76,76,51,29,20,3362,100.17,4,No,Low
2035,Player_2035,38,Germany,Real Madrid,GK,67,87,53,18,16,3110,95.74,2,Yes,Medium
2036,Player_2036,31,Argentina,PSG,GK,86,98,13,9,8,1047,12.87,2,No,Low
2037,Player_2037,18,Spain,Juventus,CB,77,87,49,13,21,4435,114.29,3,No,High
2038,Player_2038,17,Portugal,Real Madrid,LB,86,89,1,39,12,168,51.99,3,Yes,High
2039,Player_2039,39,England,Real Madrid,LW,81,68,33,19,8,1561,19.13,1,No,Low
2040,Player_2040,39,Netherlands,FC Barcelona,GK,75,94,34,3,15,3172,32.57,0,No,High
2041,Player_2041,27,France,Bayern Munich,ST,61,94,36,37,3,574,148.34,1,No,Low
2042,Player_2042,26,Spain,Bayern Munich,ST,64,77,24,38,1,1742,19.19,4,No,Low
2043,Player_2043,34,France,Liverpool,RW,77,78,47,4,12,4016,84.31,0,No,Medium
2044,Player_2044,34,Germany,Bayern Munich,CB,62,72,53,31,12,2358,35.55,3,No,Medium
2045,Player_2045,33,Brazil,Real Madrid,CDM,86,88,14,5,18,4024,29.64,2,No,Medium
2046,Player_2046,24,Brazil,Liverpool,LW,76,82,11,13,11,530,37.43,4,No,Medium
2047,Player_2047,31,Brazil,FC Barcelona,GK,75,89,8,5,3,990,88.95,1,No,High
2048,Player_2048,24,Netherlands,Manchester City,CM,65,81,30,13,9,2120,43.18,5,No,Medium
2049,Player_2049,33,France,Juventus,CM,66,96,13,11,15,2441,17.86,5,No,Low
2050,Player_2050,28,Spain,Juventus,CDM,73,88,28,26,23,2528,144.35,3,Yes,High
2051,Player_2051,24,Brazil,Real Madrid,RB,74,71,52,25,18,2520,97.4,0,Yes,High
2052,Player_2052,30,Spain,Real Madrid,CM,92,77,47,11,7,4408,28.66,5,Yes,Low
2053,Player_2053,20,France,Liverpool,CDM,86,91,42,7,5,1461,85.12,0,No,Medium
2054,Player_2054,17,Netherlands,FC Barcelona,CM,88,69,37,9,3,951,12.77,2,No,High
2055,Player_2055,17,Germany,PSG,CB,64,90,41,15,6,964,104.69,3,Yes,High
2056,Player_2056,35,Netherlands,Real Madrid,RW,88,95,7,25,13,2134,61.58,3,No,Low
2057,Player_2057,32,Spain,PSG,RB,91,74,47,7,12,4454,19.08,4,No,Medium
2058,Player_2058,30,Netherlands,PSG,CB,65,90,2,28,20,694,33.46,4,No,High
2059,Player_2059,37,Netherlands,Bayern Munich,CDM,61,86,1,19,4,2244,62.55,0,No,Low
2060,Player_2060,32,Germany,FC Barcelona,LW,65,76,15,16,8,2803,145.25,5,Yes,Medium
2061,Player_2061,21,France,Juventus,LB,63,96,18,18,2,3911,31.69,5,Yes,Medium
2062,Player_2062,25,France,Juventus,LW,88,91,29,16,9,3024,20.18,1,No,Low
2063,Player_2063,18,England,PSG,ST,84,97,40,38,14,1408,93.11,0,Yes,Low
2064,Player_2064,34,Netherlands,Juventus,LB,68,84,15,0,19,2978,100.79,5,No,Medium
2065,Player_2065,22,France,FC Barcelona,CDM,62,77,30,28,20,461,16.7,4,No,Low
2066,Player_2066,25,France,Bayern Munich,ST,85,78,53,13,16,1617,51.56,4,No,Low
2067,Player_2067,17,Argentina,FC Barcelona,CM,86,86,27,16,22,416,47.67,4,No,Medium
2068,Player_2068,25,Brazil,Real Madrid,CM,91,82,3,12,23,1388,33.93,0,No,Medium
2069,Player_2069,32,England,PSG,LB,60,93,9,28,5,4367,57.16,3,No,Low
2070,Player_2070,29,Portugal,FC Barcelona,GK,75,80,50,33,24,4487,7.16,1,No,Medium
2071,Player_2071,25,England,Juventus,LW,70,98,44,26,2,2594,117.45,1,No,Medium
2072,Player_2072,37,England,Manchester City,ST,85,67,17,32,17,1746,177.93,4,Yes,Low
2073,Player_2073,29,Portugal,FC Barcelona,LW,60,68,46,28,4,3501,114.31,2,No,Medium
2074,Player_2074,25,Argentina,PSG,LB,85,69,31,36,12,2859,65.31,0,No,Medium
2075,Player_2075,27,Netherlands,Bayern Munich,CB,87,74,29,38,24,3978,120.39,5,Yes,Low
2076,Player_2076,20,Germany,Juventus,CM,68,93,35,18,0,4490,103.09,5,No,High
2077,Player_2077,18,France,Bayern Munich,ST,81,96,8,23,16,852,152.49,3,No,Medium
2078,Player_2078,22,Brazil,PSG,ST,67,95,35,13,2,3290,112.13,4,No,Low
2079,Player_2079,30,Spain,Juventus,CDM,86,66,28,36,18,1711,114.32,2,No,Low
2080,Player_2080,20,Netherlands,Real Madrid,ST,78,76,15,4,20,2525,40.29,4,No,Medium
2081,Player_2081,22,Portugal,Juventus,LB,84,91,27,23,19,3646,75.11,2,No,Low
2082,Player_2082,35,Germany,Real Madrid,ST,80,69,20,33,21,2030,62.32,1,No,Low
2083,Player_2083,22,Netherlands,Bayern Munich,ST,83,91,46,30,11,236,2.55,2,No,Low
2084,Player_2084,18,Portugal,Bayern Munich,LW,83,87,1,29,7,1056,56.73,1,Yes,Medium
2085,Player_2085,34,France,PSG,RW,78,97,45,8,7,2260,87.75,1,Yes,Low
2086,Player_2086,29,Argentina,Real Madrid,ST,61,68,34,26,14,2426,108.17,0,No,High
2087,Player_2087,25,Netherlands,Bayern Munich,GK,73,85,53,27,10,1025,168.26,2,No,Medium
2088,Player_2088,39,Portugal,Real Madrid,RB,91,88,27,25,19,908,43.42,3,No,Medium
2089,Player_2089,35,France,Bayern Munich,CDM,91,95,54,17,0,449,27.86,3,No,Medium
2090,Player_2090,29,France,Juventus,LW,87,88,35,35,15,568,156.57,2,No,Medium
2091,Player_2091,27,Argentina,FC Barcelona,CDM,72,74,30,7,13,3498,169.56,0,No,Medium
2092,Player_2092,17,England,Manchester City,CB,71,66,32,17,6,2860,88.09,3,No,Medium
2093,Player_2093,38,Netherlands,Juventus,ST,67,95,22,19,5,2326,21.18,4,Yes,Low
2094,Player_2094,23,Netherlands,Liverpool,CM,74,89,40,31,20,4309,87.63,3,No,Low
2095,Player_2095,37,England,FC Barcelona,GK,85,68,16,28,3,1308,20.15,0,No,High
2096,Player_2096,31,Brazil,Liverpool,LW,71,75,45,17,21,717,159.03,1,No,Medium
2097,Player_2097,17,Brazil,Bayern Munich,CDM,86,81,48,6,7,969,127.61,1,No,Low
2098,Player_2098,28,England,Manchester City,ST,77,66,0,0,21,3345,43.78,1,No,Low
2099,Player_2099,23,Germany,Manchester City,CM,86,70,41,27,18,2485,159.66,0,No,Medium
2100,Player_2100,31,Spain,Bayern Munich,CM,68,73,22,32,24,3655,115.0,1,Yes,Low
2101,Player_2101,37,France,Bayern Munich,CB,60,69,47,3,2,2718,171.61,1,Yes,High
2102,Player_2102,35,Spain,Real Madrid,GK,66,84,26,19,3,903,176.5,0,No,Medium
2103,Player_2103,17,France,Bayern Munich,RW,85,93,24,35,12,1450,1.09,4,No,Low
2104,Player_2104,33,England,PSG,GK,66,85,31,30,20,1455,22.08,3,No,Low
2105,Player_2105,33,Brazil,Bayern Munich,CB,66,73,18,37,1,4230,98.67,0,No,Low
2106,Player_2106,19,Germany,PSG,LB,67,92,23,27,10,531,172.08,0,No,Low
2107,Player_2107,28,Brazil,Bayern Munich,LW,75,72,2,2,15,2267,178.96,2,No,High
2108,Player_2108,22,Spain,Real Madrid,CB,62,95,11,5,9,332,102.35,1,No,High
2109,Player_2109,27,Brazil,PSG,CB,69,84,34,22,14,1321,31.7,5,No,High
2110,Player_2110,19,England,FC Barcelona,LW,66,91,14,6,9,4052,29.77,4,No,Medium
2111,Player_2111,24,Germany,PSG,LW,80,72,16,35,1,1708,137.61,5,No,Medium
2112,Player_2112,30,Spain,Juventus,LW,90,85,49,0,5,3526,106.75,2,No,High
2113,Player_2113,30,Germany,Real Madrid,ST,82,92,31,5,13,400,99.0,4,No,High
2114,Player_2114,26,Netherlands,Liverpool,CDM,86,87,6,23,1,3630,84.1,1,No,High
2115,Player_2115,18,France,PSG,RB,81,70,18,36,9,3037,130.66,5,No,High
2116,Player_2116,30,Brazil,Juventus,LW,86,67,6,35,16,3991,154.52,1,No,Medium
2117,Player_2117,25,Germany,Juventus,CDM,63,69,4,23,7,1478,54.88,1,Yes,Low
2118,Player_2118,19,Argentina,Juventus,RB,83,73,39,37,15,1914,40.15,3,Yes,Low
2119,Player_2119,37,Netherlands,Bayern Munich,CDM,82,71,20,28,13,1057,120.8,4,No,Medium
2120,Player_2120,24,Brazil,Juventus,LW,78,68,47,36,9,2993,164.69,4,No,Medium
2121,Player_2121,32,France,Bayern Munich,RW,62,69,47,31,12,41,62.99,2,No,High
2122,Player_2122,18,Germany,Liverpool,CB,86,75,50,24,0,2170,49.4,0,No,High
2123,Player_2123,22,Spain,Real Madrid,CDM,62,79,46,9,9,26,41.09,1,No,Medium
2124,Player_2124,37,France,Manchester City,CM,87,98,6,34,21,3533,46.18,1,No,Low
2125,Player_2125,28,Argentina,Bayern Munich,CM,76,77,36,24,11,2618,24.72,5,No,Low
2126,Player_2126,21,Germany,Juventus,CDM,90,71,22,26,16,1170,107.62,2,No,Low
2127,Player_2127,18,Portugal,Juventus,LW,69,70,10,31,23,3698,50.91,4,Yes,Low
2128,Player_2128,32,Portugal,FC Barcelona,GK,81,94,9,11,13,710,110.88,3,No,Medium
2129,Player_2129,21,England,Juventus,LW,89,86,20,3,4,3199,15.4,4,No,Low
2130,Player_2130,31,Brazil,Real Madrid,LW,80,89,54,25,18,2423,21.22,3,No,Low
2131,Player_2131,28,Spain,PSG,GK,82,92,40,2,4,2018,96.74,3,No,Low
2132,Player_2132,20,England,PSG,RW,71,84,32,16,14,2898,92.32,4,No,Medium
2133,Player_2133,31,Germany,Juventus,LB,84,67,19,8,12,2047,49.24,5,No,Low
2134,Player_2134,27,Portugal,FC Barcelona,CM,79,69,32,28,16,1558,148.97,1,No,High
2135,Player_2135,32,Portugal,Bayern Munich,CB,66,65,39,0,0,3594,34.07,3,No,Low
2136,Player_2136,39,Portugal,Real Madrid,CM,88,79,34,17,13,1722,65.24,5,No,Low
2137,Player_2137,22,Germany,FC Barcelona,LB,88,90,33,19,3,4052,100.21,2,No,Medium
2138,Player_2138,30,Portugal,Bayern Munich,ST,72,67,35,33,24,1651,156.16,2,No,High
2139,Player_2139,34,France,Real Madrid,RW,62,98,26,27,8,1778,75.63,3,No,Medium
2140,Player_2140,28,Netherlands,Juventus,RW,61,69,18,34,16,683,72.05,1,No,Medium
2141,Player_2141,27,Germany,PSG,ST,75,95,42,15,2,1279,104.53,3,No,High
2142,Player_2142,29,Spain,Real Madrid,CB,89,77,4,20,12,2294,57.35,2,No,Medium
2143,Player_2143,37,Netherlands,Juventus,GK,65,65,28,12,11,2010,127.8,2,No,Low
2144,Player_2144,39,England,Liverpool,RB,66,86,9,34,15,1215,45.14,4,Yes,Medium
2145,Player_2145,27,Spain,Manchester City,LB,64,79,54,31,3,2582,148.26,1,No,High
2146,Player_2146,39,Netherlands,Real Madrid,RB,66,90,39,37,17,1893,49.39,4,Yes,Medium
2147,Player_2147,32,Argentina,Manchester City,CB,93,82,12,5,22,313,178.69,5,No,High
2148,Player_2148,31,Portugal,Real Madrid,GK,91,73,28,37,2,3994,57.31,5,No,Medium
2149,Player_2149,37,Argentina,Manchester City,RW,72,65,4,37,16,443,158.25,5,No,Low
2150,Player_2150,31,Brazil,Liverpool,GK,89,73,11,12,0,1671,71.83,0,No,Medium
2151,Player_2151,20,Brazil,PSG,CM,84,87,12,38,18,2916,44.67,5,Yes,Medium
2152,Player_2152,27,Netherlands,Bayern Munich,LB,80,66,21,12,21,3266,41.1,3,No,High
2153,Player_2153,35,Argentina,Manchester City,GK,80,78,39,11,3,3095,153.11,4,No,High
2154,Player_2154,31,Germany,Liverpool,LW,87,82,14,32,16,1864,55.92,5,Yes,High
2155,Player_2155,20,Spain,Manchester City,LW,79,80,12,27,6,715,61.27,1,No,High
2156,Player_2156,37,Argentina,PSG,GK,93,93,0,2,1,891,35.86,5,No,Low
2157,Player_2157,29,Brazil,Manchester City,RW,64,75,53,17,11,3807,173.06,3,No,High
2158,Player_2158,38,Argentina,Liverpool,GK,77,70,37,25,4,500,44.43,3,No,Low
2159,Player_2159,35,Germany,Juventus,CDM,70,67,42,39,15,2782,44.92,3,No,Low
2160,Player_2160,18,Argentina,Liverpool,CB,76,78,44,1,7,2640,169.93,3,No,Medium
2161,Player_2161,30,Spain,FC Barcelona,LW,81,66,52,3,22,1353,162.21,3,Yes,Medium
2162,Player_2162,20,England,PSG,RB,79,96,51,27,7,702,45.18,1,Yes,High
2163,Player_2163,32,Germany,Juventus,GK,65,95,0,27,12,2333,155.72,0,Yes,Medium
2164,Player_2164,37,Brazil,FC Barcelona,LW,93,75,10,24,13,2194,45.34,2,No,High
2165,Player_2165,36,Spain,PSG,CB,73,86,42,25,10,2009,15.66,0,No,Low
2166,Player_2166,30,Argentina,Juventus,CB,82,67,39,1,5,383,147.75,2,Yes,High
2167,Player_2167,31,Argentina,Manchester City,RB,79,95,21,33,15,2058,138.99,4,No,Medium
2168,Player_2168,19,England,Juventus,CDM,72,97,34,29,22,2323,53.39,3,No,Medium
2169,Player_2169,24,Brazil,Liverpool,GK,91,88,50,20,24,885,16.68,4,Yes,Low
2170,Player_2170,32,Brazil,FC Barcelona,ST,85,65,43,36,21,1591,37.56,4,Yes,Medium
2171,Player_2171,26,France,Manchester City,GK,73,79,5,22,24,4398,138.9,2,Yes,Medium
2172,Player_2172,20,Brazil,Liverpool,LB,67,91,27,32,14,2251,173.67,1,No,Medium
2173,Player_2173,34,England,PSG,CM,81,91,30,1,15,4440,46.99,3,No,Medium
2174,Player_2174,18,Portugal,Juventus,RW,81,76,54,26,12,1783,147.38,5,No,Low
2175,Player_2175,33,France,Liverpool,CB,75,67,7,21,11,4117,41.41,4,No,Low
2176,Player_2176,29,France,Manchester City,ST,86,94,4,33,17,2583,122.49,0,No,Low
2177,Player_2177,20,Argentina,FC Barcelona,RW,69,96,41,15,17,1729,15.51,3,No,High
2178,Player_2178,27,Argentina,FC Barcelona,LW,84,87,53,19,13,262,105.56,1,No,Medium
2179,Player_2179,23,Brazil,Juventus,GK,90,66,47,25,1,2631,48.82,3,No,High
2180,Player_2180,28,France,Liverpool,RW,80,71,43,15,21,3826,166.69,5,No,Medium
2181,Player_2181,26,Netherlands,Manchester City,LW,86,98,16,5,1,2430,52.51,5,No,High
2182,Player_2182,23,Argentina,Real Madrid,CM,76,96,37,22,2,391,72.02,4,No,Low
2183,Player_2183,29,England,PSG,LW,92,96,8,36,23,2936,151.4,0,No,Low
2184,Player_2184,23,Netherlands,PSG,ST,90,78,9,7,7,3672,79.17,4,No,Medium
2185,Player_2185,33,Argentina,Manchester City,CB,85,67,19,5,10,539,43.29,1,No,Medium
2186,Player_2186,26,Germany,Real Madrid,RB,80,96,13,36,11,1115,98.78,2,Yes,Medium
2187,Player_2187,26,Germany,FC Barcelona,LW,60,81,13,21,3,883,151.28,5,Yes,Low
2188,Player_2188,20,Argentina,Juventus,GK,63,67,25,5,8,4323,78.26,0,No,Low
2189,Player_2189,36,France,Bayern Munich,RW,63,74,28,31,23,2419,24.35,5,Yes,Medium
2190,Player_2190,20,Portugal,Bayern Munich,RB,85,82,48,16,16,1399,69.26,1,No,Medium
2191,Player_2191,38,Portugal,Juventus,RB,63,67,26,37,23,1576,171.83,1,No,Medium
2192,Player_2192,23,France,Manchester City,RW,68,74,24,16,15,2084,13.43,5,No,Low
2193,Player_2193,38,Spain,Real Madrid,RW,89,73,15,36,16,1535,73.82,4,No,Medium
2194,Player_2194,17,Portugal,Real Madrid,CB,63,75,35,22,14,89,116.82,5,No,Low
2195,Player_2195,28,Germany,PSG,ST,64,97,33,12,19,4190,14.59,4,No,Medium
2196,Player_2196,29,England,FC Barcelona,CM,82,90,15,31,21,1654,62.42,5,No,Medium
2197,Player_2197,26,France,Liverpool,ST,75,91,32,21,6,1901,169.33,4,No,Low
2198,Player_2198,31,Brazil,Real Madrid,RW,81,86,2,6,9,2679,6.0,2,No,Low
2199,Player_2199,29,Germany,Juventus,GK,67,90,22,21,3,2170,135.44,3,No,Low
2200,Player_2200,39,England,Liverpool,CDM,92,86,10,20,23,365,151.53,3,No,High
2201,Player_2201,38,England,Bayern Munich,CDM,75,69,47,5,23,3960,50.23,4,No,Medium
2202,Player_2202,38,France,Liverpool,CM,64,66,17,13,13,2372,39.04,4,No,Medium
2203,Player_2203,37,England,FC Barcelona,RW,75,73,46,15,13,518,164.71,2,No,Medium
2204,Player_2204,38,France,Juventus,CDM,66,82,40,2,13,3710,137.64,3,Yes,High
2205,Player_2205,25,Portugal,FC Barcelona,CM,60,76,43,8,24,829,20.85,2,No,Medium
2206,Player_2206,25,Argentina,Liverpool,RB,68,67,28,20,13,2633,38.59,1,No,Low
2207,Player_2207,31,Germany,Manchester City,CM,77,82,49,29,21,270,112.03,5,No,Low
2208,Player_2208,26,Spain,Real Madrid,RB,62,71,4,29,19,2986,75.79,3,Yes,Medium
2209,Player_2209,26,Argentina,Juventus,CB,83,97,23,31,17,3538,91.0,4,Yes,Low
2210,Player_2210,24,Germany,Manchester City,CDM,87,70,28,22,14,1007,171.3,0,Yes,Low
2211,Player_2211,32,France,Liverpool,CM,69,82,28,2,22,2317,75.93,1,Yes,High
2212,Player_2212,33,Germany,Real Madrid,CM,68,86,25,0,18,604,158.76,5,No,High
2213,Player_2213,21,Portugal,PSG,CM,72,73,39,2,12,4473,119.1,0,No,High
2214,Player_2214,20,France,Manchester City,GK,94,87,2,36,11,176,22.33,2,No,Low
2215,Player_2215,34,Argentina,Manchester City,CM,82,76,1,6,18,2321,134.14,5,Yes,Low
2216,Player_2216,35,Brazil,Liverpool,GK,76,88,24,2,18,1714,93.88,2,No,Low
2217,Player_2217,20,Brazil,Bayern Munich,CB,66,73,18,35,19,636,40.9,2,Yes,High
2218,Player_2218,23,Netherlands,Liverpool,LB,75,77,39,2,1,2623,52.47,4,No,Medium
2219,Player_2219,26,Netherlands,Manchester City,RW,79,81,1,3,20,4155,100.54,2,Yes,High
2220,Player_2220,34,Germany,Real Madrid,RB,83,71,18,30,2,2778,108.51,0,No,High
2221,Player_2221,35,Brazil,Bayern Munich,RW,64,81,0,1,9,3752,174.29,1,No,Medium
2222,Player_2222,20,France,Liverpool,ST,65,88,26,13,4,660,153.92,4,Yes,Low
2223,Player_2223,26,England,Juventus,CDM,87,66,53,36,11,4365,37.45,1,No,Low
2224,Player_2224,17,France,Liverpool,LW,64,92,44,30,6,3187,139.43,2,No,Low
2225,Player_2225,39,England,Manchester City,CB,61,83,54,1,8,4340,1.99,3,No,Low
2226,Player_2226,34,Argentina,Manchester City,GK,80,97,51,30,1,84,23.8,5,No,Low
2227,Player_2227,21,Spain,PSG,ST,77,85,48,21,24,3670,36.35,4,No,Medium
2228,Player_2228,31,England,Liverpool,CM,71,74,34,9,9,906,107.7,2,No,Low
2229,Player_2229,33,Brazil,Manchester City,ST,76,73,40,29,5,3521,35.45,4,Yes,Medium
2230,Player_2230,19,France,Juventus,ST,74,70,4,32,11,1875,66.07,3,No,High
2231,Player_2231,28,Argentina,FC Barcelona,RB,66,82,37,18,5,3958,44.08,0,No,Low
2232,Player_2232,18,Brazil,Bayern Munich,LW,73,83,3,24,2,2136,61.07,0,No,Low
2233,Player_2233,17,Argentina,FC Barcelona,ST,60,69,16,0,9,2596,169.67,5,No,Low
2234,Player_2234,39,Spain,Bayern Munich,RB,62,89,52,31,8,853,179.53,0,No,Low
2235,Player_2235,37,Portugal,Juventus,CM,90,75,20,24,19,506,123.59,3,No,Medium
2236,Player_2236,33,France,Liverpool,RW,72,74,52,16,4,407,103.23,1,No,Medium
2237,Player_2237,38,Germany,PSG,CM,77,81,47,13,2,523,127.67,3,No,Medium
2238,Player_2238,32,France,Manchester City,CDM,76,90,30,12,4,3050,139.01,3,No,Low
2239,Player_2239,21,Netherlands,Manchester City,ST,76,95,47,37,7,2397,133.15,2,Yes,Medium
2240,Player_2240,31,Spain,Manchester City,ST,70,96,21,38,7,2899,15.2,0,No,Medium
2241,Player_2241,19,France,Liverpool,RW,79,85,10,1,13,327,56.2,4,No,Low
2242,Player_2242,23,Netherlands,Bayern Munich,CB,69,82,33,31,23,1835,62.15,5,No,Low
2243,Player_2243,27,Germany,Juventus,ST,88,82,48,31,21,1309,66.78,1,No,High
2244,Player_2244,26,England,Manchester City,LW,93,65,14,39,16,2535,62.3,4,No,Low
2245,Player_2245,25,Argentina,FC Barcelona,LB,76,78,49,5,10,2041,141.78,2,No,High
2246,Player_2246,30,Germany,Manchester City,ST,72,72,9,24,15,2534,134.7,2,No,Low
2247,Player_2247,29,Brazil,Liverpool,LB,86,66,37,2,5,2192,1.33,1,No,Low
2248,Player_2248,18,Spain,Juventus,CM,85,79,31,17,10,755,53.7,4,Yes,Medium
2249,Player_2249,19,England,PSG,CB,87,98,52,37,9,145,112.45,1,No,High
2250,Player_2250,23,Brazil,Juventus,RB,72,65,47,2,22,3822,22.09,1,No,High
2251,Player_2251,37,Brazil,FC Barcelona,GK,71,85,30,4,8,3574,13.28,0,No,Low
2252,Player_2252,34,Spain,Manchester City,CB,87,65,36,23,23,1627,149.2,4,No,High
2253,Player_2253,19,England,Manchester City,GK,61,96,43,33,23,1858,81.76,0,No,Medium
2254,Player_2254,26,Portugal,Real Madrid,CM,93,84,27,38,14,3598,154.1,0,Yes,Low
2255,Player_2255,38,Brazil,Bayern Munich,CB,82,94,30,23,6,629,148.33,5,No,Low
2256,Player_2256,23,Brazil,FC Barcelona,RB,88,71,5,35,17,3166,160.86,0,No,Medium
2257,Player_2257,25,England,Real Madrid,GK,94,86,13,27,0,3518,9.17,3,No,Medium
2258,Player_2258,33,France,Juventus,RW,70,74,22,33,14,4352,33.91,2,Yes,Low
2259,Player_2259,27,Brazil,PSG,LW,92,72,15,15,1,3914,53.66,2,No,High
2260,Player_2260,23,Argentina,Bayern Munich,CB,70,91,24,35,21,904,24.95,3,No,Medium
2261,Player_2261,30,England,FC Barcelona,CM,68,74,38,6,1,2617,87.64,1,No,High
2262,Player_2262,35,Brazil,Manchester City,ST,73,78,1,17,9,2789,143.92,4,No,Medium
2263,Player_2263,20,Spain,Juventus,RB,68,75,37,5,19,107,171.24,4,Yes,Medium
2264,Player_2264,22,Germany,FC Barcelona,GK,62,70,40,27,14,1042,160.18,4,No,Low
2265,Player_2265,26,Argentina,Manchester City,GK,88,85,38,38,9,1388,82.59,0,No,Medium
2266,Player_2266,23,Netherlands,Bayern Munich,LW,78,97,33,33,18,1676,114.75,4,No,High
2267,Player_2267,29,Netherlands,Manchester City,GK,91,83,50,28,21,4255,41.91,4,No,Medium
2268,Player_2268,30,Germany,PSG,LB,66,88,39,3,12,4195,72.84,4,No,Low
2269,Player_2269,20,Netherlands,Juventus,CDM,87,82,42,13,23,264,156.88,2,No,Low
2270,Player_2270,24,Germany,Liverpool,LB,77,83,24,4,10,3821,5.74,3,No,High
2271,Player_2271,21,Brazil,Manchester City,GK,64,88,35,24,21,2797,96.13,5,Yes,Low
2272,Player_2272,17,Argentina,PSG,RB,82,98,15,38,1,3120,157.17,1,No,High
2273,Player_2273,20,Argentina,Liverpool,CB,81,86,17,7,20,676,22.4,3,Yes,Medium
2274,Player_2274,19,France,Juventus,CM,85,68,12,14,12,3486,176.87,4,Yes,Low
2275,Player_2275,25,Germany,Bayern Munich,ST,71,74,36,18,21,2706,2.72,1,Yes,Medium
2276,Player_2276,24,Argentina,Bayern Munich,CB,78,66,26,10,24,3969,159.56,1,Yes,Low
2277,Player_2277,17,France,Juventus,RW,60,72,33,19,21,607,63.98,3,Yes,Medium
2278,Player_2278,22,England,Juventus,CB,62,97,10,35,20,3425,24.32,3,No,Low
2279,Player_2279,25,France,FC Barcelona,CB,86,92,0,17,0,2394,28.75,3,Yes,Medium
2280,Player_2280,23,Spain,PSG,CM,77,74,12,13,4,2859,126.36,5,No,Low
2281,Player_2281,20,Portugal,PSG,LW,89,65,29,37,20,1160,156.79,3,No,Low
2282,Player_2282,29,Brazil,Juventus,GK,61,98,4,24,21,1847,115.57,5,Yes,High
2283,Player_2283,33,England,Real Madrid,LW,64,67,17,15,6,4057,167.21,0,No,Low
2284,Player_2284,18,Portugal,Real Madrid,RW,88,73,13,17,12,1491,151.72,2,No,Low
2285,Player_2285,21,Portugal,Liverpool,ST,92,69,12,0,12,2021,2.12,5,No,Medium
2286,Player_2286,28,England,Liverpool,LB,79,74,31,39,19,3015,120.66,2,No,Medium
2287,Player_2287,37,Spain,Real Madrid,ST,89,76,6,0,22,2737,55.18,4,No,Low
2288,Player_2288,24,France,Juventus,GK,64,82,7,0,20,2048,82.08,0,No,High
2289,Player_2289,22,Brazil,Juventus,ST,80,85,49,20,5,4205,17.38,1,No,Medium
2290,Player_2290,24,France,Liverpool,CDM,74,85,6,24,19,3954,51.14,3,No,Low
2291,Player_2291,34,Argentina,Manchester City,LB,79,65,51,26,11,893,114.07,4,No,Medium
2292,Player_2292,19,France,Juventus,RW,67,67,48,9,7,1087,39.7,1,No,Low
2293,Player_2293,38,Netherlands,Real Madrid,GK,90,69,15,11,8,4148,116.73,2,Yes,Low
2294,Player_2294,28,England,PSG,RB,71,89,42,27,17,2309,166.18,1,No,High
2295,Player_2295,19,Brazil,Juventus,RW,80,72,30,31,10,3600,1.39,3,Yes,Medium
2296,Player_2296,38,France,Juventus,CDM,89,81,50,32,19,2933,141.55,3,No,High
2297,Player_2297,22,Brazil,Manchester City,LB,86,73,26,7,10,2281,115.62,5,No,Low
2298,Player_2298,18,Brazil,Liverpool,CM,85,96,32,25,23,72,8.87,5,No,Low
2299,Player_2299,39,Argentina,Juventus,CDM,92,70,52,1,23,1380,142.34,2,No,Low
2300,Player_2300,28,Argentina,Bayern Munich,RW,85,85,28,34,14,483,40.8,3,No,Low
2301,Player_2301,18,England,FC Barcelona,GK,85,71,7,33,8,1029,48.21,0,No,Medium
2302,Player_2302,22,Spain,Real Madrid,GK,60,71,32,5,2,3781,17.29,4,No,Medium
2303,Player_2303,33,Netherlands,Bayern Munich,LB,74,91,40,30,16,3779,96.42,2,No,Medium
2304,Player_2304,19,Portugal,Liverpool,LW,60,72,18,22,24,1831,89.93,2,No,Medium
2305,Player_2305,18,Brazil,PSG,LB,70,73,20,11,16,2020,62.82,1,Yes,Medium
2306,Player_2306,39,Spain,FC Barcelona,LB,61,92,40,27,2,778,30.79,2,No,High
2307,Player_2307,36,Portugal,Bayern Munich,CDM,60,79,20,14,18,3475,150.91,4,No,Low
2308,Player_2308,24,Portugal,FC Barcelona,GK,90,66,24,18,8,3277,157.81,0,No,High
2309,Player_2309,38,Netherlands,Real Madrid,RW,75,71,41,11,16,409,97.53,1,No,Medium
2310,Player_2310,28,England,Liverpool,CM,81,82,22,1,22,1059,44.34,4,Yes,Medium
2311,Player_2311,20,Portugal,Juventus,ST,77,86,10,10,17,2309,17.75,5,No,High
2312,Player_2312,21,Netherlands,PSG,CB,76,74,32,36,22,1600,156.4,2,Yes,Low
2313,Player_2313,29,Portugal,Liverpool,CM,89,97,19,37,14,2233,17.74,3,No,Medium
2314,Player_2314,31,Brazil,FC Barcelona,ST,69,71,24,24,0,1652,2.87,5,Yes,High
2315,Player_2315,39,Brazil,Bayern Munich,LW,94,67,25,20,9,1297,84.76,3,No,Medium
2316,Player_2316,32,Germany,Real Madrid,RW,80,78,39,35,7,351,131.76,4,No,High
2317,Player_2317,26,Spain,Real Madrid,GK,75,77,51,8,9,3222,82.63,0,No,Low
2318,Player_2318,39,France,Liverpool,RB,65,80,11,11,1,2431,9.73,3,No,Medium
2319,Player_2319,32,Netherlands,Juventus,LB,62,80,31,9,18,464,124.36,4,No,High
2320,Player_2320,28,Argentina,Bayern Munich,CM,80,69,32,4,13,2513,115.8,1,No,Low
2321,Player_2321,33,Netherlands,Juventus,ST,72,89,9,32,7,3166,122.83,2,Yes,Medium
2322,Player_2322,32,France,Juventus,RB,77,90,3,4,18,2209,38.41,0,No,Low
2323,Player_2323,28,Spain,Bayern Munich,CM,83,77,14,15,0,555,143.33,0,Yes,Low
2324,Player_2324,24,Argentina,FC Barcelona,RW,86,90,50,36,15,299,86.51,1,No,Medium
2325,Player_2325,36,France,Liverpool,GK,63,65,5,36,24,3866,96.78,0,No,High
2326,Player_2326,19,Germany,Liverpool,CM,81,72,26,28,23,355,98.48,4,No,High
2327,Player_2327,32,Argentina,Manchester City,CM,83,68,4,17,14,563,51.98,0,No,Medium
2328,Player_2328,29,Brazil,Liverpool,GK,69,85,4,28,19,4009,45.4,0,No,High
2329,Player_2329,39,France,Real Madrid,LW,61,86,17,5,23,1022,1.36,0,No,Medium
2330,Player_2330,35,Netherlands,FC Barcelona,CDM,65,67,27,17,4,1190,71.69,4,Yes,Medium
2331,Player_2331,24,Argentina,Bayern Munich,CM,77,83,34,31,2,3210,87.58,5,No,Medium
2332,Player_2332,38,Germany,Liverpool,GK,76,65,21,30,16,1904,133.83,2,Yes,Medium
2333,Player_2333,21,Netherlands,FC Barcelona,CDM,82,93,33,10,9,2036,12.46,3,No,Medium
2334,Player_2334,36,Portugal,Liverpool,GK,89,87,3,25,4,1026,166.36,5,Yes,Low
2335,Player_2335,24,Argentina,Bayern Munich,GK,80,97,17,27,10,255,47.88,0,No,High
2336,Player_2336,28,Argentina,PSG,LW,69,87,40,26,5,2418,66.33,1,No,Low
2337,Player_2337,17,Germany,Bayern Munich,GK,72,69,50,18,3,2563,9.18,1,No,Low
2338,Player_2338,37,Portugal,Bayern Munich,RW,71,71,25,26,6,2951,117.74,4,No,Medium
2339,Player_2339,36,France,Bayern Munich,CM,68,70,41,19,18,269,127.75,2,No,High
2340,Player_2340,22,England,Liverpool,ST,63,86,21,2,6,927,167.22,0,Yes,Medium
2341,Player_2341,38,France,Manchester City,ST,83,77,46,15,13,63,60.96,4,Yes,Low
2342,Player_2342,34,Portugal,Bayern Munich,ST,93,76,32,38,16,1042,46.7,3,No,Medium
2343,Player_2343,24,Spain,Real Madrid,GK,64,68,42,28,22,4188,130.83,2,No,High
2344,Player_2344,23,Netherlands,Real Madrid,RB,74,72,13,14,16,809,127.37,2,No,Medium
2345,Player_2345,17,Germany,FC Barcelona,CDM,63,95,30,29,12,2041,168.71,4,Yes,Medium
2346,Player_2346,37,France,Manchester City,CDM,67,90,9,39,0,3088,37.35,5,No,Medium
2347,Player_2347,32,Argentina,FC Barcelona,GK,83,72,50,0,1,1646,127.1,1,No,Low
2348,Player_2348,28,Germany,Real Madrid,RW,87,97,23,28,17,487,12.5,5,No,High
2349,Player_2349,22,Brazil,Juventus,RW,86,93,20,29,3,3081,86.73,2,No,Medium
2350,Player_2350,36,Portugal,Real Madrid,LB,60,69,47,39,12,1747,21.93,1,No,Medium
2351,Player_2351,18,Netherlands,PSG,GK,93,92,7,31,0,748,117.74,2,No,Medium
2352,Player_2352,30,France,Bayern Munich,CB,76,81,31,9,3,3837,108.46,2,No,High
2353,Player_2353,20,Germany,Juventus,LW,85,87,30,26,1,527,9.27,2,No,Low
2354,Player_2354,17,Netherlands,Real Madrid,ST,83,73,33,7,3,1167,57.87,3,Yes,Low
2355,Player_2355,39,France,Liverpool,LW,80,66,22,35,15,3541,71.41,1,Yes,Low
2356,Player_2356,34,Germany,Liverpool,ST,89,96,24,34,3,4472,45.03,3,No,Medium
2357,Player_2357,29,Argentina,FC Barcelona,GK,72,95,6,35,24,3739,7.44,1,Yes,Medium
2358,Player_2358,18,Brazil,Juventus,RB,62,71,18,35,8,483,57.73,3,No,Medium
2359,Player_2359,25,Brazil,FC Barcelona,LB,91,94,6,24,16,451,142.78,3,No,Medium
2360,Player_2360,37,Spain,Bayern Munich,RW,94,67,46,19,20,4069,65.14,3,No,Low
2361,Player_2361,18,Germany,Bayern Munich,RB,78,73,7,16,22,4397,58.54,4,Yes,Low
2362,Player_2362,25,France,PSG,LW,73,74,13,22,19,3133,169.54,3,No,Low
2363,Player_2363,17,Brazil,Manchester City,LW,81,90,0,24,20,1773,7.97,5,No,Medium
2364,Player_2364,27,Portugal,FC Barcelona,RW,76,65,12,30,1,998,138.23,5,Yes,High
2365,Player_2365,19,Brazil,Bayern Munich,LB,63,94,2,5,2,2065,87.22,2,No,Medium
2366,Player_2366,36,England,FC Barcelona,ST,78,79,52,34,22,397,170.03,0,No,Low
2367,Player_2367,39,England,Bayern Munich,RB,61,89,27,3,14,1803,71.13,3,No,Low
2368,Player_2368,20,Brazil,Real Madrid,LB,74,70,37,39,6,2151,127.59,0,Yes,High
2369,Player_2369,34,Germany,FC Barcelona,CM,61,82,50,19,3,1946,13.05,0,No,Low
2370,Player_2370,39,Spain,Real Madrid,CDM,70,65,14,0,11,3717,167.21,2,No,Low
2371,Player_2371,22,Brazil,FC Barcelona,ST,82,67,35,25,0,3415,62.35,0,No,Low
2372,Player_2372,19,Argentina,Manchester City,CM,69,81,52,33,16,1394,94.56,0,No,Medium
2373,Player_2373,38,Netherlands,PSG,ST,62,72,2,9,3,4128,25.36,5,No,Low
2374,Player_2374,27,France,Liverpool,ST,64,81,3,22,3,2421,170.23,0,Yes,Low
2375,Player_2375,31,Spain,Liverpool,ST,62,89,4,23,21,3919,121.3,1,No,Medium
2376,Player_2376,38,Argentina,Liverpool,LB,72,76,49,12,22,3083,10.18,3,No,Low
2377,Player_2377,21,Spain,Real Madrid,LB,78,93,25,28,24,2788,28.36,3,No,Low
2378,Player_2378,36,Argentina,Juventus,CM,94,89,24,26,8,1844,72.27,0,No,Medium
2379,Player_2379,26,France,Bayern Munich,LW,83,89,9,30,20,1804,39.41,2,No,High
2380,Player_2380,28,France,Liverpool,RW,83,93,7,9,9,889,55.18,1,Yes,Low
2381,Player_2381,31,England,Manchester City,RB,76,75,11,30,18,2503,179.55,2,Yes,Low
2382,Player_2382,33,Germany,Liverpool,RB,69,68,53,38,18,1893,118.73,2,No,Low
2383,Player_2383,26,Argentina,FC Barcelona,CB,61,78,2,9,14,1666,166.04,0,No,Medium
2384,Player_2384,22,Netherlands,Real Madrid,GK,82,81,26,23,21,4344,78.73,4,No,High
2385,Player_2385,34,England,Juventus,GK,65,66,49,32,16,3065,128.0,0,No,Low
2386,Player_2386,29,Argentina,FC Barcelona,CM,61,72,22,13,6,3641,83.01,5,Yes,Medium
2387,Player_2387,19,England,Juventus,ST,80,74,39,34,2,3075,59.42,4,No,Low
2388,Player_2388,26,France,FC Barcelona,ST,94,71,32,33,4,1259,93.69,1,Yes,Low
2389,Player_2389,30,Spain,FC Barcelona,CDM,88,80,13,16,15,2220,77.2,4,Yes,Low
2390,Player_2390,22,Portugal,PSG,LW,66,78,53,20,22,2418,176.51,0,Yes,High
2391,Player_2391,19,England,PSG,CB,88,80,22,31,6,2838,89.56,0,No,Medium
2392,Player_2392,32,Argentina,Bayern Munich,LB,82,89,30,2,15,2796,146.09,2,Yes,Low
2393,Player_2393,23,Argentina,Real Madrid,ST,92,68,12,14,8,786,120.19,0,No,High
2394,Player_2394,36,Portugal,Manchester City,CB,67,93,11,7,0,3367,86.59,5,Yes,Low
2395,Player_2395,30,Germany,Manchester City,RB,71,70,34,31,2,2447,85.61,0,Yes,Low
2396,Player_2396,25,Netherlands,Manchester City,CDM,69,65,17,37,24,3129,61.87,3,No,High
2397,Player_2397,31,France,FC Barcelona,LB,74,65,20,25,7,1898,19.7,3,No,Low
2398,Player_2398,37,Argentina,PSG,CB,83,67,44,29,17,3584,137.18,2,No,High
2399,Player_2399,19,Brazil,Real Madrid,CM,85,65,46,8,23,4159,165.3,4,No,Medium
2400,Player_2400,18,Spain,FC Barcelona,LB,62,65,41,31,23,3949,39.62,4,Yes,High
2401,Player_2401,18,England,Juventus,GK,61,85,0,10,17,2467,166.66,3,No,Medium
2402,Player_2402,19,Germany,PSG,LB,65,94,37,21,23,2193,42.2,5,No,Low
2403,Player_2403,34,Netherlands,PSG,CDM,80,96,40,33,18,16,95.65,1,No,High
2404,Player_2404,30,Portugal,Liverpool,LB,68,97,41,17,6,3022,62.18,5,No,Low
2405,Player_2405,36,Spain,Liverpool,RW,69,86,46,18,24,1266,21.05,3,No,Medium
2406,Player_2406,34,France,Real Madrid,LW,62,94,8,17,19,478,9.98,5,Yes,Medium
2407,Player_2407,26,Germany,Juventus,CDM,83,68,22,36,5,4296,66.08,1,Yes,Medium
2408,Player_2408,18,Netherlands,Real Madrid,CM,81,87,13,17,24,3977,9.0,4,No,Medium
2409,Player_2409,38,England,Real Madrid,CDM,73,89,10,11,10,3544,19.21,3,Yes,High
2410,Player_2410,17,England,FC Barcelona,RB,86,76,6,3,4,4274,26.04,0,No,High
2411,Player_2411,20,Portugal,Bayern Munich,CM,92,81,30,26,11,485,0.84,1,No,High
2412,Player_2412,30,Brazil,Real Madrid,GK,81,79,23,4,0,4088,28.01,1,No,Low
2413,Player_2413,17,Portugal,Liverpool,LB,88,74,25,5,18,337,104.12,1,No,High
2414,Player_2414,30,France,Bayern Munich,LB,78,93,29,12,10,860,147.6,4,No,Medium
2415,Player_2415,32,Germany,FC Barcelona,RB,78,76,33,22,14,2003,35.22,5,No,High
2416,Player_2416,38,Germany,Bayern Munich,CB,65,65,45,24,24,1471,15.02,2,No,High
2417,Player_2417,30,Argentina,Manchester City,RB,78,65,37,3,15,2042,131.45,0,No,Low
2418,Player_2418,36,Brazil,Juventus,RW,72,74,4,31,2,3428,1.97,3,No,Low
2419,Player_2419,19,Brazil,Bayern Munich,ST,85,82,4,14,10,3120,132.28,5,No,High
2420,Player_2420,19,Germany,Real Madrid,CB,81,66,18,25,10,1519,24.04,1,No,Low
2421,Player_2421,25,Germany,FC Barcelona,ST,80,72,50,10,9,701,41.48,4,No,Medium
2422,Player_2422,22,Spain,Juventus,GK,61,86,37,8,1,4388,22.05,1,Yes,High
2423,Player_2423,29,Netherlands,Real Madrid,LW,89,86,27,10,19,4035,44.9,5,No,Low
2424,Player_2424,37,Spain,Juventus,LW,86,90,25,1,4,3744,143.77,3,No,High
2425,Player_2425,18,Spain,Liverpool,LB,66,90,41,26,22,1173,24.29,0,Yes,High
2426,Player_2426,24,Brazil,Manchester City,LW,79,73,22,25,22,1605,178.95,1,Yes,Low
2427,Player_2427,37,Argentina,Liverpool,RB,90,85,45,7,24,1879,59.21,4,No,Medium
2428,Player_2428,18,England,Real Madrid,CB,82,95,48,20,7,3393,165.99,4,Yes,Low
2429,Player_2429,20,Spain,Real Madrid,LB,72,70,29,20,12,2124,34.61,2,Yes,Medium
2430,Player_2430,31,Argentina,Real Madrid,LB,76,78,2,7,14,1446,34.23,4,No,Medium
2431,Player_2431,20,Portugal,PSG,CB,63,97,27,0,1,3306,101.98,2,Yes,High
2432,Player_2432,29,France,Manchester City,GK,73,71,32,37,11,3401,9.58,0,Yes,Low
2433,Player_2433,28,Spain,Juventus,GK,79,88,41,12,23,3783,144.28,3,No,Medium
2434,Player_2434,29,Portugal,Real Madrid,LB,72,73,2,8,7,2372,79.41,2,No,Medium
2435,Player_2435,30,England,Real Madrid,GK,62,75,4,27,20,150,126.01,1,No,Low
2436,Player_2436,36,France,Juventus,RW,85,87,18,5,18,1659,31.85,5,No,High
2437,Player_2437,34,France,Liverpool,RW,85,66,41,22,24,878,115.8,1,No,High
2438,Player_2438,22,England,Liverpool,ST,77,79,47,35,22,2319,107.14,3,No,Medium
2439,Player_2439,27,Spain,Real Madrid,CDM,91,92,0,16,0,2883,136.14,4,Yes,Medium
2440,Player_2440,18,Brazil,FC Barcelona,CM,73,68,37,8,7,3995,53.88,5,Yes,Medium
2441,Player_2441,39,England,PSG,LW,62,74,8,11,9,2415,168.0,1,No,Medium
2442,Player_2442,35,England,Liverpool,GK,60,70,4,21,12,1515,173.05,5,No,Low
2443,Player_2443,35,England,FC Barcelona,RW,85,94,45,11,4,3387,156.33,2,No,Medium
2444,Player_2444,21,France,PSG,RB,83,74,41,5,21,589,103.18,3,No,Medium
2445,Player_2445,35,Netherlands,Real Madrid,CB,94,96,33,8,8,587,75.94,1,No,Medium
2446,Player_2446,18,Argentina,Manchester City,CDM,73,67,36,36,9,2619,10.91,4,Yes,Low
2447,Player_2447,26,Portugal,Bayern Munich,ST,62,90,32,2,13,1195,170.53,5,No,Low
2448,Player_2448,18,Brazil,Bayern Munich,CM,72,79,24,33,23,4353,171.34,4,No,Medium
2449,Player_2449,27,Spain,Real Madrid,RW,73,81,41,7,10,2326,3.85,5,No,Low
2450,Player_2450,34,Spain,Liverpool,ST,80,91,28,9,13,2605,64.56,1,Yes,Low
2451,Player_2451,31,Portugal,FC Barcelona,CDM,85,82,24,8,2,2538,158.47,3,No,Low
2452,Player_2452,25,Argentina,Manchester City,CB,62,83,53,13,20,565,15.01,0,No,Medium
2453,Player_2453,39,England,Juventus,LW,63,76,8,36,15,1756,35.78,1,Yes,High
2454,Player_2454,35,Netherlands,PSG,RW,60,88,2,26,19,4075,176.17,4,No,High
2455,Player_2455,25,Brazil,Real Madrid,CB,92,69,14,31,16,1360,152.59,0,No,Low
2456,Player_2456,19,Spain,Manchester City,CM,66,88,3,3,4,2568,164.22,3,No,Low
2457,Player_2457,37,Portugal,Manchester City,GK,70,91,44,1,6,2373,26.02,4,Yes,High
2458,Player_2458,25,Germany,Liverpool,CDM,86,94,37,32,16,1195,38.43,3,Yes,High
2459,Player_2459,30,Netherlands,PSG,CM,73,79,19,20,19,2131,109.17,5,No,Low
2460,Player_2460,35,Portugal,Manchester City,LW,81,98,48,0,21,2888,90.56,1,No,High
2461,Player_2461,23,Netherlands,Liverpool,CB,75,91,22,10,10,1567,54.08,3,No,Low
2462,Player_2462,32,Spain,FC Barcelona,LW,71,84,36,0,11,3410,159.15,4,No,Medium
2463,Player_2463,32,England,Liverpool,LB,69,96,46,10,24,2367,162.3,1,Yes,Low
2464,Player_2464,17,Germany,FC Barcelona,RW,83,68,7,6,23,3343,52.86,4,No,High
2465,Player_2465,20,Argentina,FC Barcelona,GK,77,69,36,1,1,3097,28.46,4,No,Medium
2466,Player_2466,20,Brazil,Juventus,CDM,81,72,44,14,18,1260,27.26,0,No,Low
2467,Player_2467,23,Argentina,Juventus,RB,68,86,32,7,4,1333,87.45,2,No,Medium
2468,Player_2468,24,Argentina,Manchester City,CB,76,71,32,25,10,4328,24.36,3,No,Low
2469,Player_2469,33,Portugal,Liverpool,RB,72,86,6,39,22,3336,85.46,3,No,Low
2470,Player_2470,21,Netherlands,Juventus,RW,65,94,21,34,18,3084,83.42,0,Yes,Low
2471,Player_2471,23,Brazil,FC Barcelona,RW,80,80,4,20,6,3387,159.2,5,Yes,Medium
2472,Player_2472,36,Brazil,Juventus,CDM,66,79,45,37,20,2431,53.67,3,Yes,Low
2473,Player_2473,36,Spain,PSG,RW,84,69,14,7,21,1016,101.14,0,No,Medium
2474,Player_2474,20,Spain,Manchester City,RB,70,67,20,31,5,641,133.96,3,No,Medium
2475,Player_2475,22,Brazil,Liverpool,RB,73,87,24,7,10,4062,107.47,3,No,Medium
2476,Player_2476,23,Germany,Liverpool,LW,88,74,16,9,13,315,171.76,4,No,Low
2477,Player_2477,34,France,Bayern Munich,CM,69,69,49,22,3,2303,108.61,0,No,Low
2478,Player_2478,21,Spain,Liverpool,ST,64,87,6,3,7,440,162.38,5,Yes,Low
2479,Player_2479,36,France,Manchester City,CM,67,79,53,37,8,1138,44.49,3,No,Low
2480,Player_2480,19,Portugal,PSG,CM,64,82,49,29,1,914,101.16,5,No,Medium
2481,Player_2481,23,Germany,Liverpool,GK,83,89,18,22,24,2303,98.02,2,No,High
2482,Player_2482,38,Brazil,Bayern Munich,RW,85,72,51,4,10,4142,178.11,0,No,Low
2483,Player_2483,30,Germany,Manchester City,LW,65,95,6,20,19,3421,37.21,0,No,Medium
2484,Player_2484,23,Spain,FC Barcelona,GK,75,85,39,5,21,2078,25.81,0,No,Low
2485,Player_2485,21,Argentina,Real Madrid,GK,71,66,44,16,6,4150,110.3,4,No,Low
2486,Player_2486,38,Portugal,Real Madrid,ST,70,86,49,24,3,2200,40.65,0,No,Medium
2487,Player_2487,21,Brazil,FC Barcelona,CB,62,72,23,23,23,35,115.23,4,No,Medium
2488,Player_2488,39,England,Juventus,RB,65,87,10,21,13,817,175.06,2,No,High
2489,Player_2489,18,Portugal,Liverpool,RW,78,96,40,12,23,1946,170.4,1,No,Medium
2490,Player_2490,37,Netherlands,Real Madrid,GK,77,72,54,16,0,3956,41.98,4,No,Low
2491,Player_2491,38,France,Juventus,LW,75,68,0,13,23,4351,31.18,3,No,Medium
2492,Player_2492,22,Germany,Real Madrid,CB,82,94,53,33,11,2225,101.15,0,Yes,High
2493,Player_2493,31,Brazil,FC Barcelona,ST,68,83,31,25,18,3325,105.83,1,No,Medium
2494,Player_2494,37,Portugal,Liverpool,LB,62,87,39,18,4,507,119.37,4,No,High
2495,Player_2495,26,Germany,Liverpool,RW,67,82,52,25,7,3745,133.6,5,No,Low
2496,Player_2496,39,Brazil,Juventus,LB,63,93,43,2,10,4116,108.37,5,No,High
2497,Player_2497,23,Spain,FC Barcelona,CM,71,87,1,1,21,3877,20.56,3,No,Low
2498,Player_2498,21,Portugal,Juventus,GK,90,97,14,27,3,459,142.33,1,No,Medium
2499,Player_2499,17,Spain,Liverpool,CDM,84,82,20,1,14,1405,14.77,2,No,Medium
2500,Player_2500,29,Portugal,Liverpool,RW,75,97,23,21,19,4095,4.09,4,No,Low
2501,Player_2501,37,Spain,Manchester City,RB,73,71,49,6,11,2036,138.65,5,No,High
2502,Player_2502,34,Netherlands,Juventus,CB,72,92,16,3,19,2677,98.93,5,No,Low
2503,Player_2503,29,Germany,Manchester City,LW,66,65,46,37,21,1744,125.9,4,No,Low
2504,Player_2504,37,England,FC Barcelona,RW,71,98,51,38,22,2983,69.2,5,No,High
2505,Player_2505,37,Portugal,PSG,RB,63,83,51,19,20,2358,2.49,2,No,Low
2506,Player_2506,34,Netherlands,Real Madrid,LB,61,95,8,5,9,1231,59.92,5,No,Low
2507,Player_2507,21,Portugal,Manchester City,CB,94,77,34,8,23,1177,109.66,4,Yes,Medium
2508,Player_2508,29,Spain,Real Madrid,ST,62,88,19,30,15,761,41.01,0,No,Medium
2509,Player_2509,20,Brazil,Bayern Munich,GK,63,69,18,25,22,2354,123.96,5,Yes,High
2510,Player_2510,33,Portugal,FC Barcelona,RW,71,87,17,35,7,3726,143.09,4,No,Medium
2511,Player_2511,19,Netherlands,PSG,CDM,78,83,19,25,19,1543,82.04,0,No,High
2512,Player_2512,33,Spain,Bayern Munich,LB,69,65,29,27,7,3677,157.69,5,No,High
2513,Player_2513,27,Argentina,Bayern Munich,LB,60,97,39,4,5,1933,153.94,5,No,Medium
2514,Player_2514,37,Spain,Liverpool,RW,76,97,0,9,2,3168,158.11,4,No,Low
2515,Player_2515,36,Germany,Bayern Munich,CM,75,96,23,17,7,3561,119.16,3,No,Medium
2516,Player_2516,39,England,FC Barcelona,LB,68,92,23,14,22,4102,55.21,3,No,Low
2517,Player_2517,37,Argentina,Manchester City,RB,68,76,46,32,9,3857,86.88,1,No,Low
2518,Player_2518,20,Germany,FC Barcelona,LW,68,73,18,4,4,4017,128.04,3,Yes,Medium
2519,Player_2519,18,Germany,Manchester City,GK,71,75,29,36,10,4444,38.3,2,No,High
2520,Player_2520,36,Germany,Bayern Munich,LB,74,97,25,39,3,2964,133.12,1,Yes,Low
2521,Player_2521,32,Brazil,Bayern Munich,RB,61,83,41,21,16,1030,98.88,3,No,Low
2522,Player_2522,34,Germany,PSG,CB,70,98,43,21,2,2547,17.74,0,No,Medium
2523,Player_2523,24,Brazil,Manchester City,CB,70,71,37,21,17,2522,100.53,4,Yes,Low
2524,Player_2524,19,Germany,Bayern Munich,GK,67,95,28,14,7,1875,12.49,3,Yes,Low
2525,Player_2525,25,France,Liverpool,CM,91,66,12,16,23,589,3.07,0,Yes,Medium
2526,Player_2526,36,Netherlands,Real Madrid,CDM,65,83,3,27,11,2280,160.19,1,No,Low
2527,Player_2527,22,Argentina,PSG,GK,79,96,44,21,20,3101,88.44,4,No,Low
2528,Player_2528,26,France,FC Barcelona,ST,94,74,16,20,15,2414,98.02,3,No,High
2529,Player_2529,37,Germany,PSG,CM,67,72,32,16,13,3897,50.75,1,No,Medium
2530,Player_2530,26,Argentina,Real Madrid,LB,93,90,4,4,20,3678,97.92,3,Yes,Low
2531,Player_2531,29,Argentina,Manchester City,GK,78,94,27,17,15,1843,30.81,1,No,Medium
2532,Player_2532,33,Portugal,FC Barcelona,CB,66,75,23,16,3,4151,134.34,3,Yes,Low
2533,Player_2533,25,England,FC Barcelona,RB,90,84,16,3,0,1938,148.29,0,No,High
2534,Player_2534,33,France,Manchester City,GK,77,84,49,6,0,2194,154.13,2,No,Low
2535,Player_2535,25,England,Juventus,CM,73,73,38,24,21,4459,19.64,0,No,High
2536,Player_2536,25,Argentina,Juventus,ST,76,72,47,36,14,252,100.62,4,Yes,High
2537,Player_2537,17,Brazil,PSG,RB,68,79,39,39,19,1466,145.67,3,Yes,Medium
2538,Player_2538,18,Argentina,Bayern Munich,LW,79,98,43,39,19,735,23.51,2,No,Low
2539,Player_2539,32,England,Juventus,ST,87,88,45,8,2,339,18.36,2,No,High
2540,Player_2540,17,France,PSG,LB,79,97,50,18,13,3587,147.14,4,No,Low
2541,Player_2541,26,Germany,Juventus,GK,86,91,10,8,8,1376,143.51,4,No,Low
2542,Player_2542,34,Portugal,Real Madrid,GK,67,85,11,22,18,704,81.04,2,No,Low
2543,Player_2543,24,Portugal,Liverpool,RW,91,69,12,30,7,3724,20.19,4,No,Medium
2544,Player_2544,37,Portugal,Bayern Munich,CB,60,85,7,31,1,4418,93.14,4,No,Low
2545,Player_2545,27,Germany,PSG,LB,76,68,0,30,3,2908,71.37,3,No,High
2546,Player_2546,39,Portugal,Liverpool,GK,68,80,8,16,0,1974,93.58,0,Yes,Low
2547,Player_2547,18,France,Liverpool,LW,79,95,27,38,10,1468,79.46,5,No,High
2548,Player_2548,24,Germany,Juventus,RB,91,90,1,21,4,2142,102.55,1,No,Low
2549,Player_2549,38,Portugal,Manchester City,LB,61,70,13,34,1,552,131.02,2,No,Low
2550,Player_2550,24,Germany,Real Madrid,CM,91,97,12,29,12,3491,139.59,1,Yes,Low
2551,Player_2551,33,England,Real Madrid,LW,68,85,47,39,16,789,116.99,2,No,High
2552,Player_2552,31,Netherlands,Real Madrid,RB,89,80,1,36,16,1173,36.21,2,No,Low
2553,Player_2553,33,Netherlands,Bayern Munich,CDM,79,98,3,25,17,552,71.78,0,No,Medium
2554,Player_2554,39,France,FC Barcelona,CB,60,79,11,5,20,3422,13.28,2,No,Low
2555,Player_2555,29,Spain,Bayern Munich,LB,64,70,47,33,8,4211,81.58,2,No,High
2556,Player_2556,35,Brazil,PSG,ST,94,66,9,31,5,631,174.68,0,No,Low
2557,Player_2557,21,Portugal,Liverpool,RB,60,88,2,24,19,269,115.69,4,No,Low
2558,Player_2558,28,Brazil,Liverpool,CM,73,92,3,12,2,860,28.25,5,No,Medium
2559,Player_2559,17,Germany,FC Barcelona,GK,68,65,5,37,7,290,48.71,1,Yes,Low
2560,Player_2560,39,Brazil,PSG,ST,89,65,22,37,2,1457,12.09,2,No,Medium
2561,Player_2561,21,France,FC Barcelona,LW,83,92,4,1,0,629,33.24,0,No,Low
2562,Player_2562,24,France,Liverpool,CB,63,84,49,4,19,474,88.07,2,Yes,Medium
2563,Player_2563,29,Argentina,Juventus,ST,73,72,2,10,12,4080,62.4,0,No,Low
2564,Player_2564,24,Netherlands,Bayern Munich,CM,84,65,9,10,20,1760,37.11,1,No,Low
2565,Player_2565,39,Portugal,Real Madrid,RB,63,90,42,23,4,3082,26.81,3,No,Medium
2566,Player_2566,27,Argentina,Liverpool,CDM,84,89,18,13,15,3974,118.26,4,No,Low
2567,Player_2567,17,Brazil,Manchester City,GK,69,74,13,29,20,3398,100.68,3,No,Medium
2568,Player_2568,29,Spain,Real Madrid,CB,94,76,20,39,23,2323,151.75,0,No,Medium
2569,Player_2569,35,Argentina,Liverpool,ST,66,71,42,34,15,3561,33.39,2,No,High
2570,Player_2570,19,Argentina,Bayern Munich,CB,72,76,27,20,23,2392,152.71,4,No,Low
2571,Player_2571,33,France,FC Barcelona,CB,63,81,20,4,11,3844,104.24,1,No,Medium
2572,Player_2572,21,Spain,Juventus,CB,73,69,35,37,12,2415,48.29,5,Yes,Low
2573,Player_2573,36,Germany,Juventus,RB,77,78,23,1,3,3804,49.6,4,No,Low
2574,Player_2574,37,Brazil,Real Madrid,CB,67,98,53,39,8,1624,70.57,2,No,Medium
2575,Player_2575,24,Argentina,Bayern Munich,CDM,91,81,37,36,15,1508,83.09,3,Yes,Low
2576,Player_2576,30,Spain,Juventus,LW,86,65,16,33,0,4110,15.31,0,Yes,Medium
2577,Player_2577,20,Netherlands,Juventus,CM,82,79,21,10,4,3,151.64,3,Yes,Medium
2578,Player_2578,27,Portugal,PSG,CDM,66,83,18,35,20,3447,22.32,4,No,Medium
2579,Player_2579,36,Spain,Manchester City,CM,71,69,44,10,4,2580,87.28,5,No,Low
2580,Player_2580,31,Netherlands,Real Madrid,LW,84,83,53,8,23,3791,69.24,2,Yes,Low
2581,Player_2581,35,Brazil,FC Barcelona,LB,62,69,9,5,24,1160,92.46,0,No,Low
2582,Player_2582,23,Spain,Juventus,LW,85,76,10,33,18,833,159.8,2,No,Low
2583,Player_2583,35,Netherlands,PSG,ST,63,83,37,36,8,1998,178.04,2,Yes,Low
2584,Player_2584,35,Spain,Bayern Munich,CDM,74,76,1,31,7,1202,4.14,5,No,Low
2585,Player_2585,27,Spain,Juventus,ST,91,76,32,11,18,2175,71.09,4,No,Medium
2586,Player_2586,21,Portugal,Manchester City,ST,88,82,42,31,17,1381,147.26,3,No,Low
2587,Player_2587,21,Netherlands,FC Barcelona,ST,69,98,30,16,14,4173,59.13,2,No,Medium
2588,Player_2588,38,Netherlands,Bayern Munich,CB,80,97,47,3,3,2788,117.0,2,No,High
2589,Player_2589,24,Argentina,Bayern Munich,GK,75,82,34,32,14,2821,178.61,2,Yes,Low
2590,Player_2590,26,Brazil,Real Madrid,ST,78,93,36,8,12,4177,116.6,0,No,Low
2591,Player_2591,22,Portugal,Juventus,CDM,88,69,46,33,17,341,20.46,2,No,Medium
2592,Player_2592,31,Spain,Real Madrid,GK,77,89,46,38,19,1361,151.81,2,No,Low
2593,Player_2593,32,Spain,FC Barcelona,GK,75,88,35,29,4,4191,174.02,4,No,Medium
2594,Player_2594,33,Argentina,Juventus,ST,60,93,22,19,17,995,128.4,2,No,Low
2595,Player_2595,24,Brazil,Liverpool,RB,61,97,35,38,7,356,75.72,5,No,Low
2596,Player_2596,24,France,Juventus,ST,74,74,39,22,0,185,170.74,5,No,Low
2597,Player_2597,25,Portugal,Liverpool,RB,87,97,38,34,18,1693,174.36,2,No,Low
2598,Player_2598,18,Argentina,Bayern Munich,ST,60,87,25,22,22,2590,168.35,5,No,Low
2599,Player_2599,31,Brazil,Real Madrid,CDM,64,75,24,38,16,1342,74.42,4,No,Low
2600,Player_2600,34,Portugal,Manchester City,RB,81,88,16,22,1,1691,142.25,0,No,Low
2601,Player_2601,19,Spain,Juventus,CB,72,88,14,36,18,1082,117.93,5,No,Medium
2602,Player_2602,33,Brazil,Manchester City,GK,60,71,36,22,15,2057,32.76,5,No,Low
2603,Player_2603,20,Brazil,Juventus,ST,75,85,44,38,17,2904,96.62,3,No,High
2604,Player_2604,20,Germany,Bayern Munich,GK,81,84,3,27,1,3195,134.71,4,No,Low
2605,Player_2605,30,Brazil,Real Madrid,ST,91,74,21,18,5,4451,161.32,5,No,Low
2606,Player_2606,25,France,FC Barcelona,RW,75,89,16,29,6,3417,155.34,0,Yes,Low
2607,Player_2607,25,Brazil,FC Barcelona,ST,74,79,21,20,5,2380,28.26,3,No,Medium
2608,Player_2608,39,France,FC Barcelona,RW,71,70,16,23,5,16,88.1,2,No,Medium
2609,Player_2609,34,Spain,Juventus,LW,60,66,13,20,8,323,86.35,4,Yes,Low
2610,Player_2610,26,France,Juventus,LW,76,76,13,25,7,2070,161.82,5,No,Low
2611,Player_2611,37,Portugal,Manchester City,GK,87,68,16,35,23,930,0.85,2,Yes,High
2612,Player_2612,20,Spain,Real Madrid,RB,66,87,7,25,21,1444,133.1,4,Yes,High
2613,Player_2613,28,Spain,Juventus,ST,68,77,33,32,20,4036,111.55,3,No,Low
2614,Player_2614,24,France,Real Madrid,CM,81,81,25,35,8,402,165.92,5,No,Medium
2615,Player_2615,18,Netherlands,Manchester City,ST,85,95,44,3,11,3402,82.52,0,No,Low
2616,Player_2616,38,Argentina,Juventus,ST,71,80,29,8,17,1506,118.55,4,Yes,Low
2617,Player_2617,29,England,FC Barcelona,CM,66,90,21,7,22,1521,175.11,0,Yes,Medium
2618,Player_2618,37,Netherlands,FC Barcelona,LW,74,92,15,1,5,3098,134.03,2,No,Medium
2619,Player_2619,32,Brazil,Bayern Munich,RW,80,65,29,28,22,2444,12.6,2,No,Low
2620,Player_2620,18,Germany,Liverpool,GK,73,76,15,22,3,2187,30.57,3,Yes,High
2621,Player_2621,27,England,PSG,LW,61,84,37,5,24,2568,147.95,3,No,Medium
2622,Player_2622,26,Brazil,Liverpool,CM,67,66,53,35,6,2793,60.6,1,No,Low
2623,Player_2623,31,Netherlands,Juventus,ST,65,79,23,20,17,91,127.21,1,No,Low
2624,Player_2624,33,Netherlands,Real Madrid,LW,92,86,35,21,19,1753,126.12,3,No,Medium
2625,Player_2625,24,Brazil,Juventus,CDM,65,96,34,8,4,87,178.87,5,Yes,Low
2626,Player_2626,34,Spain,Real Madrid,ST,85,84,5,33,17,1641,84.84,2,No,Medium
2627,Player_2627,39,Brazil,Real Madrid,LB,73,97,3,25,9,2962,132.94,0,No,Low
2628,Player_2628,25,Germany,Liverpool,CM,67,79,17,0,7,2142,9.25,3,No,Low
2629,Player_2629,24,Netherlands,PSG,CB,72,67,5,35,0,550,83.54,5,No,High
2630,Player_2630,30,Brazil,Bayern Munich,RB,72,93,25,4,14,2446,34.01,0,No,High
2631,Player_2631,34,France,Liverpool,CB,87,91,36,21,2,1951,151.38,1,No,Medium
2632,Player_2632,38,England,PSG,LW,77,69,26,3,14,2290,151.26,0,Yes,Medium
2633,Player_2633,36,France,FC Barcelona,ST,78,95,40,1,13,3837,42.93,3,No,Medium
2634,Player_2634,36,Germany,FC Barcelona,RB,91,86,10,15,0,623,57.63,2,No,Medium
2635,Player_2635,37,Brazil,Real Madrid,RB,81,71,37,15,20,3757,126.59,3,Yes,Low
2636,Player_2636,28,Portugal,Manchester City,GK,61,70,15,21,7,3292,133.02,4,No,Low
2637,Player_2637,35,Germany,Juventus,CB,72,90,18,0,6,3832,118.54,5,No,Medium
2638,Player_2638,30,Spain,Juventus,ST,82,65,42,14,8,2611,179.41,5,No,Low
2639,Player_2639,33,France,Real Madrid,GK,84,83,52,23,17,161,156.43,5,No,Low
2640,Player_2640,37,France,Manchester City,RW,87,71,14,3,11,1992,75.36,4,Yes,Medium
2641,Player_2641,19,Argentina,PSG,CB,70,76,25,17,7,2082,59.19,4,Yes,Low
2642,Player_2642,39,Brazil,FC Barcelona,GK,92,84,40,16,7,3013,107.63,2,No,Low
2643,Player_2643,23,Spain,Juventus,RW,83,87,30,6,5,36,147.27,5,No,Low
2644,Player_2644,33,Portugal,Liverpool,CDM,61,89,18,9,2,845,85.82,3,No,Low
2645,Player_2645,28,France,Manchester City,CDM,89,94,50,0,1,2876,132.92,4,No,High
2646,Player_2646,25,France,PSG,LB,76,93,23,1,13,3346,3.94,3,Yes,Medium
2647,Player_2647,31,Spain,FC Barcelona,CM,93,95,8,21,7,4054,166.69,1,No,High
2648,Player_2648,34,Germany,Liverpool,CM,81,82,22,31,5,4200,139.4,5,Yes,Medium
2649,Player_2649,37,Germany,Manchester City,LB,64,83,3,28,3,335,71.26,4,No,Medium
2650,Player_2650,29,Brazil,Real Madrid,GK,75,68,9,34,4,3097,69.43,4,Yes,Medium
2651,Player_2651,37,Netherlands,Real Madrid,CM,72,65,8,16,20,2343,18.97,2,No,Low
2652,Player_2652,24,Argentina,Real Madrid,CM,85,79,18,11,12,1560,147.0,3,No,Medium
2653,Player_2653,30,France,Juventus,CB,90,72,14,23,8,4164,138.47,2,Yes,Medium
2654,Player_2654,24,Netherlands,PSG,CB,82,79,50,29,12,4246,113.63,2,No,High
2655,Player_2655,30,Netherlands,Real Madrid,LB,71,79,33,29,8,661,18.71,3,No,High
2656,Player_2656,23,Argentina,Juventus,ST,73,86,41,19,23,3739,47.59,1,No,Low
2657,Player_2657,39,Netherlands,Bayern Munich,RW,77,82,18,6,23,3183,82.88,3,No,Low
2658,Player_2658,28,Netherlands,Juventus,GK,86,80,48,37,15,1485,48.24,1,No,Medium
2659,Player_2659,27,Germany,FC Barcelona,CB,87,66,51,6,11,2409,78.4,2,No,Low
2660,Player_2660,38,Germany,Juventus,CB,77,84,20,29,1,4298,41.06,1,No,Low
2661,Player_2661,38,England,PSG,CDM,75,80,33,11,18,2534,63.25,5,No,Low
2662,Player_2662,27,Portugal,Liverpool,RW,75,67,50,30,15,3,117.59,1,No,Low
2663,Player_2663,38,Brazil,Juventus,CDM,72,94,16,17,23,3097,160.68,1,No,Low
2664,Player_2664,29,Netherlands,Real Madrid,ST,88,66,17,1,12,2848,69.61,4,Yes,Medium
2665,Player_2665,34,England,FC Barcelona,RW,68,90,16,32,4,26,124.7,4,Yes,High
2666,Player_2666,18,Portugal,Manchester City,CM,85,69,1,10,22,964,24.7,2,No,Low
2667,Player_2667,37,England,Real Madrid,CDM,87,66,50,33,23,3096,97.58,3,No,Low
2668,Player_2668,31,England,FC Barcelona,GK,72,84,0,15,5,71,165.95,1,No,Medium
2669,Player_2669,36,Brazil,Bayern Munich,CM,68,98,42,34,20,2947,5.51,5,No,Low
2670,Player_2670,34,Brazil,Manchester City,RW,73,98,9,32,23,2315,48.53,4,No,High
2671,Player_2671,31,Spain,Bayern Munich,ST,71,84,36,20,16,3897,24.28,3,Yes,Low
2672,Player_2672,35,Argentina,Liverpool,CB,91,89,47,19,16,4490,96.2,5,No,High
2673,Player_2673,39,Argentina,FC Barcelona,LB,62,84,4,7,16,2411,122.5,1,Yes,Low
2674,Player_2674,28,Spain,Bayern Munich,RB,75,89,54,25,2,116,10.87,3,No,High
2675,Player_2675,29,Spain,Liverpool,ST,79,78,11,32,12,2211,13.12,5,No,Medium
2676,Player_2676,38,Germany,FC Barcelona,CM,91,76,35,25,11,2924,156.6,0,No,High
2677,Player_2677,27,Portugal,FC Barcelona,CDM,82,69,30,36,5,2837,82.39,5,No,Medium
2678,Player_2678,21,England,Bayern Munich,LW,76,66,54,29,21,576,83.6,5,No,Medium
2679,Player_2679,17,Netherlands,FC Barcelona,ST,75,80,37,30,20,771,170.05,1,No,Medium
2680,Player_2680,19,Spain,Real Madrid,RB,67,94,50,32,12,199,57.98,3,No,Medium
2681,Player_2681,38,France,FC Barcelona,CB,78,88,8,10,13,1755,161.52,1,No,High
2682,Player_2682,35,Argentina,PSG,CDM,89,94,43,4,6,179,175.38,1,Yes,Low
2683,Player_2683,39,Spain,Liverpool,GK,93,75,25,1,4,2405,43.88,0,No,Low
2684,Player_2684,23,France,FC Barcelona,LW,73,78,14,12,13,3323,92.77,5,No,Low
2685,Player_2685,28,France,PSG,RB,81,87,15,17,17,2301,96.42,3,Yes,Low
2686,Player_2686,31,France,FC Barcelona,GK,76,80,12,25,3,2988,155.98,2,Yes,High
2687,Player_2687,21,Germany,FC Barcelona,ST,74,85,24,24,0,1602,55.05,4,Yes,Low
2688,Player_2688,31,Germany,Bayern Munich,LB,91,68,29,13,6,1119,143.75,1,No,Medium
2689,Player_2689,24,Netherlands,Real Madrid,RB,72,97,52,4,19,2214,174.8,1,No,Medium
2690,Player_2690,26,Netherlands,Liverpool,RW,80,78,6,1,12,1911,151.34,1,Yes,High
2691,Player_2691,32,France,Real Madrid,CM,92,83,54,3,3,2901,163.69,1,Yes,Medium
2692,Player_2692,24,Portugal,Manchester City,RW,86,69,51,11,12,1085,127.65,4,No,Low
2693,Player_2693,17,Germany,Bayern Munich,LB,94,95,3,10,3,173,162.76,2,No,High
2694,Player_2694,28,England,Bayern Munich,GK,75,82,42,3,2,3532,30.09,0,No,Low
2695,Player_2695,21,France,Real Madrid,RW,87,95,39,8,7,1238,128.37,2,No,Medium
2696,Player_2696,19,England,Juventus,CB,93,94,37,9,19,3310,131.87,4,Yes,Low
2697,Player_2697,17,England,Bayern Munich,RB,60,85,29,26,7,3813,79.33,3,No,Low
2698,Player_2698,20,France,Real Madrid,CB,90,94,9,5,24,3816,14.81,0,No,High
2699,Player_2699,24,Argentina,Bayern Munich,LW,92,68,29,14,16,1973,112.23,0,No,Medium
2700,Player_2700,19,Portugal,FC Barcelona,LB,92,69,38,30,14,3782,9.81,3,Yes,Low
2701,Player_2701,26,France,Real Madrid,LW,77,74,6,21,3,2244,69.14,5,No,Medium
2702,Player_2702,18,Netherlands,Real Madrid,LW,82,91,35,5,5,1657,71.16,1,No,Medium
2703,Player_2703,27,France,PSG,LW,82,80,34,32,23,412,179.81,4,No,Low
2704,Player_2704,26,Germany,Bayern Munich,ST,74,94,23,28,21,3410,54.31,3,No,Medium
2705,Player_2705,37,France,Bayern Munich,ST,85,77,38,20,5,4092,147.77,2,No,Medium
2706,Player_2706,30,Argentina,Real Madrid,LB,89,85,35,29,9,1382,10.04,2,No,High
2707,Player_2707,23,Germany,FC Barcelona,CDM,84,79,44,20,3,1123,95.59,5,No,Medium
2708,Player_2708,18,Netherlands,FC Barcelona,RW,75,84,19,35,8,4329,96.84,3,No,Medium
2709,Player_2709,25,Brazil,Liverpool,ST,73,84,48,21,15,4012,113.36,4,Yes,Low
2710,Player_2710,32,Brazil,FC Barcelona,CB,76,69,31,19,6,2243,145.9,5,No,Low
2711,Player_2711,29,England,Bayern Munich,ST,71,96,38,21,13,2589,137.27,5,No,Low
2712,Player_2712,25,Portugal,Juventus,GK,88,70,48,39,5,1778,137.1,5,No,High
2713,Player_2713,36,England,PSG,LW,91,94,25,10,0,1129,78.1,0,No,Low
2714,Player_2714,20,Argentina,Real Madrid,ST,83,90,25,30,17,644,131.08,0,No,Low
2715,Player_2715,38,Spain,Manchester City,LB,72,77,35,39,11,3522,88.69,1,No,Medium
2716,Player_2716,26,Netherlands,PSG,CB,79,93,42,12,21,1557,12.52,4,Yes,Low
2717,Player_2717,38,Portugal,Juventus,CB,74,69,34,17,14,2773,160.29,2,Yes,High
2718,Player_2718,28,Netherlands,Manchester City,CDM,63,89,42,21,0,2785,160.28,2,No,Low
2719,Player_2719,33,Brazil,PSG,CM,93,77,34,16,14,1706,58.46,1,No,Medium
2720,Player_2720,30,England,FC Barcelona,CM,87,88,11,37,14,2601,164.55,2,No,Low
2721,Player_2721,30,Netherlands,Bayern Munich,RW,61,95,32,24,15,3643,136.56,5,No,Low
2722,Player_2722,18,Brazil,Juventus,RB,89,84,35,31,20,374,72.44,1,No,High
2723,Player_2723,37,Argentina,Manchester City,LB,85,72,13,14,0,1612,60.01,1,No,Medium
2724,Player_2724,36,Argentina,Juventus,GK,85,73,32,12,2,454,175.54,3,No,Low
2725,Player_2725,27,Spain,PSG,ST,79,85,45,25,11,4297,128.42,0,No,Low
2726,Player_2726,32,Netherlands,Bayern Munich,LB,87,84,44,10,6,1475,68.5,4,Yes,Low
2727,Player_2727,35,Spain,Juventus,CM,79,79,44,12,4,853,115.74,4,No,Low
2728,Player_2728,39,Germany,Manchester City,LB,70,90,23,32,0,723,103.09,0,No,Medium
2729,Player_2729,22,Portugal,Real Madrid,ST,69,75,14,36,0,1391,94.65,5,No,Medium
2730,Player_2730,35,Netherlands,PSG,CDM,82,75,30,37,14,2387,116.22,4,No,Low
2731,Player_2731,21,Argentina,Real Madrid,RW,78,91,16,0,7,261,97.0,2,No,Low
2732,Player_2732,20,England,FC Barcelona,CDM,77,94,11,38,10,542,118.03,2,No,Medium
2733,Player_2733,31,Brazil,Real Madrid,CM,86,83,21,26,13,550,163.41,4,No,Low
2734,Player_2734,20,France,Real Madrid,LW,65,98,22,35,24,3797,178.79,3,No,Medium
2735,Player_2735,36,Spain,Liverpool,CM,69,87,25,31,22,637,127.82,4,No,Medium
2736,Player_2736,26,France,PSG,RW,61,65,13,14,12,164,167.04,1,Yes,Low
2737,Player_2737,38,Netherlands,FC Barcelona,ST,83,67,11,30,18,2805,154.58,5,Yes,Low
2738,Player_2738,19,England,Real Madrid,RB,87,67,49,5,11,620,53.46,1,No,Low
2739,Player_2739,21,Spain,Bayern Munich,CDM,87,92,3,24,21,1223,167.96,0,No,Medium
2740,Player_2740,22,France,Manchester City,CM,61,78,45,17,18,3342,13.21,5,No,Medium
2741,Player_2741,37,Portugal,Real Madrid,CDM,64,94,50,21,3,50,59.72,5,No,Medium
2742,Player_2742,38,England,FC Barcelona,CM,70,69,12,30,3,488,115.37,2,No,High
2743,Player_2743,24,Brazil,Real Madrid,RW,69,79,54,35,2,664,95.08,5,No,Medium
2744,Player_2744,23,Portugal,Manchester City,CDM,61,78,17,8,5,1246,97.86,3,No,Medium
2745,Player_2745,37,England,FC Barcelona,CM,74,78,42,2,4,2710,143.18,4,No,Low
2746,Player_2746,26,Germany,PSG,ST,66,72,27,32,10,4361,35.45,1,Yes,Low
2747,Player_2747,22,Spain,FC Barcelona,RW,79,72,37,26,24,4168,176.78,2,Yes,Low
2748,Player_2748,30,Argentina,PSG,RB,93,83,40,0,8,3952,79.02,2,Yes,Medium
2749,Player_2749,20,Brazil,FC Barcelona,LB,94,96,43,8,2,2591,171.0,3,Yes,Low
2750,Player_2750,29,Netherlands,Juventus,LW,93,95,18,4,8,880,69.27,3,No,Medium
2751,Player_2751,36,Portugal,Manchester City,ST,81,93,45,14,11,434,108.52,3,Yes,Medium
2752,Player_2752,33,Portugal,Manchester City,RW,90,75,46,8,2,1984,81.33,3,No,Low
2753,Player_2753,39,France,FC Barcelona,CDM,82,77,42,27,19,4452,121.83,1,No,Medium
2754,Player_2754,23,Spain,Juventus,ST,78,91,37,12,16,4113,33.46,3,Yes,Low
2755,Player_2755,20,Netherlands,Real Madrid,RW,63,83,45,23,20,3870,72.41,2,No,Medium
2756,Player_2756,30,Argentina,Manchester City,RW,83,90,2,9,11,2622,12.77,2,No,Medium
2757,Player_2757,19,England,PSG,CDM,79,73,18,21,24,1792,107.86,5,No,Medium
2758,Player_2758,21,Argentina,PSG,RW,87,92,19,38,17,2798,173.3,4,No,Low
2759,Player_2759,32,Spain,Bayern Munich,GK,76,96,24,21,3,3512,8.74,2,Yes,Low
2760,Player_2760,39,Spain,Liverpool,ST,78,67,10,36,9,1493,118.9,2,No,Low
2761,Player_2761,36,Germany,Juventus,CM,94,96,16,38,17,2679,139.63,1,No,Low
2762,Player_2762,20,Germany,Liverpool,CM,91,69,48,19,7,1625,38.75,5,Yes,High
2763,Player_2763,18,Argentina,Liverpool,ST,94,72,54,9,8,2419,49.52,2,No,Low
2764,Player_2764,34,England,PSG,LW,89,78,34,9,18,3017,36.68,0,No,High
2765,Player_2765,35,Argentina,Bayern Munich,ST,76,67,13,25,12,1847,53.89,2,Yes,High
2766,Player_2766,35,Spain,Liverpool,CB,88,88,38,24,24,3246,20.26,4,No,Low
2767,Player_2767,33,Spain,Liverpool,RW,65,77,18,27,5,1538,66.98,4,Yes,Low
2768,Player_2768,30,France,FC Barcelona,LB,76,93,2,12,21,1316,66.72,5,No,Medium
2769,Player_2769,35,Germany,FC Barcelona,CDM,76,72,33,14,6,1719,145.4,5,No,Low
2770,Player_2770,38,Netherlands,FC Barcelona,GK,73,95,48,5,20,1950,144.27,3,No,Medium
2771,Player_2771,29,Netherlands,Real Madrid,LB,83,90,40,11,5,223,143.51,1,No,Low
2772,Player_2772,28,Netherlands,Liverpool,CM,91,82,21,18,10,2026,102.28,4,No,Low
2773,Player_2773,22,France,Real Madrid,CDM,73,82,37,31,16,1547,59.0,0,Yes,Low
2774,Player_2774,37,Brazil,Bayern Munich,CDM,86,71,26,10,18,3778,74.27,0,No,Low
2775,Player_2775,20,Netherlands,Juventus,CDM,78,80,20,37,24,3723,57.53,3,No,Medium
2776,Player_2776,35,Spain,PSG,GK,90,97,40,32,11,1523,104.96,1,No,High
2777,Player_2777,32,France,Liverpool,RW,68,67,30,1,20,2703,168.87,1,No,Low
2778,Player_2778,29,Argentina,PSG,CB,76,68,26,14,20,1972,51.57,5,No,Medium
2779,Player_2779,20,Germany,Juventus,RB,78,68,36,35,23,616,82.86,2,Yes,Low
2780,Player_2780,39,Germany,FC Barcelona,GK,63,73,1,4,12,4169,118.09,0,No,Low
2781,Player_2781,33,England,Liverpool,LB,70,81,53,14,17,2621,152.12,0,No,Medium
2782,Player_2782,39,Argentina,Manchester City,RW,81,81,46,9,6,4241,45.97,0,No,Medium
2783,Player_2783,17,England,Real Madrid,ST,63,97,8,16,24,2093,50.81,0,No,Low
2784,Player_2784,34,France,Real Madrid,CM,76,84,18,33,22,1764,159.39,4,No,Medium
2785,Player_2785,36,Portugal,Liverpool,CB,67,78,41,23,4,3176,14.91,1,No,Medium
2786,Player_2786,33,Netherlands,Juventus,RW,93,86,35,9,15,1132,109.18,2,No,Low
2787,Player_2787,31,Brazil,FC Barcelona,ST,70,91,9,29,21,4216,154.95,4,No,Medium
2788,Player_2788,27,Argentina,Real Madrid,CB,90,67,39,2,3,3570,165.95,1,No,Low
2789,Player_2789,38,Argentina,FC Barcelona,ST,70,88,53,36,22,1066,2.78,3,Yes,Medium
2790,Player_2790,29,Argentina,Bayern Munich,GK,80,94,44,2,0,2146,66.86,0,No,Medium
2791,Player_2791,17,England,PSG,ST,89,72,38,39,3,705,46.68,2,No,Low
2792,Player_2792,33,France,Juventus,CB,69,86,6,4,2,2358,102.46,1,No,Medium
2793,Player_2793,22,Argentina,Manchester City,ST,85,89,3,27,3,3534,114.1,3,Yes,Medium
2794,Player_2794,20,Portugal,PSG,LB,86,74,14,13,0,3812,179.96,0,No,Medium
2795,Player_2795,36,Argentina,PSG,RW,67,93,11,38,11,2470,92.54,3,No,Low
2796,Player_2796,32,Germany,Bayern Munich,CB,67,65,47,10,12,4067,99.49,3,No,Medium
2797,Player_2797,31,Netherlands,Real Madrid,LB,67,85,5,7,1,3460,74.87,4,No,Low
2798,Player_2798,31,Brazil,Manchester City,ST,93,88,8,36,8,3768,27.01,3,No,Medium
2799,Player_2799,22,Netherlands,Real Madrid,ST,75,73,34,7,6,1934,54.95,4,No,Medium
2800,Player_2800,31,Germany,Liverpool,CDM,72,90,7,11,12,2319,44.83,5,Yes,Low
`;function is(){let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(``),[o,s]=(0,l.useState)(180),[c,u]=(0,l.useState)(`All`),[d,f]=(0,l.useState)(!1),[p,m]=(0,l.useState)([]);(0,l.useEffect)(()=>{t(eo(rs))},[]);let h=(0,l.useMemo)(()=>e.length===0?180:Math.ceil(ge(e,e=>+e.market_value_million_eur)),[e]);(0,l.useEffect)(()=>{e.length>0&&s(h)},[e,h]);let g=(0,l.useMemo)(()=>n.length===0?e:e.filter(e=>{let t=+e.age;return n.some(e=>t>=e[0]&&t<e[1])}),[e,n]),_=(0,l.useMemo)(()=>[`All`,...Array.from(new Set(e.map(e=>e.position))).sort()],[e]),v=(0,l.useMemo)(()=>i?e.filter(e=>{let t=+e.market_value_million_eur,n=i===`All`||e.position===i,r=t<=o,a=c===`All`||e.transfer_risk_level===c,s=!d||e.injury_prone===`No`;return n&&r&&a&&s}):[],[e,i,o,c,d]),y=e=>{if(!e){r([]);return}r(t=>t.some(t=>t[0]===e[0]&&t[1]===e[1])?t.filter(t=>!(t[0]===e[0]&&t[1]===e[1])):[...t,e])},b=e=>{a(e),m([])},x=e=>{s(+e.target.value),m([])},S=e=>{u(e),m([])};return(0,B.jsxs)(`div`,{style:{padding:`2rem`,fontFamily:`sans-serif`},children:[(0,B.jsx)(`h1`,{children:`FIFA Performance Dashboard`}),(0,B.jsxs)(`p`,{style:{color:`#9ca3af`,marginBottom:`2rem`,marginTop:`-0.5rem`},children:[`This dashboard contains an analysis of the following dataset: `,` `,(0,B.jsx)(`a`,{href:`https://www.kaggle.com/datasets/itszubi/fifa-player-performance-and-market-value`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`#60a5fa`,textDecoration:`underline`},children:`FIFA Soccer Player Dataset`})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(400px, 1fr))`,gap:`2rem`},children:[(0,B.jsxs)(`div`,{className:`card`,children:[(0,B.jsx)(`h3`,{children:`Player Age Distribution`}),e.length>0?(0,B.jsx)(Wo,{data:e,selectedRange:n,onBinSelect:y}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]}),(0,B.jsxs)(`div`,{className:`card`,children:[(0,B.jsx)(`h3`,{children:`Position Distribution`}),e.length>0?(0,B.jsx)(Ko,{data:g,fullData:e}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]}),(0,B.jsx)(Xo,{})]}),(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr`,gap:`2rem`,marginTop:`2rem`},children:[(0,B.jsxs)(`div`,{className:`card`,children:[(0,B.jsx)(`h3`,{children:`Market Value vs. Age by Position`}),e.length>0?(0,B.jsx)(Qo,{data:e}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]}),(0,B.jsxs)(`div`,{className:`card`,children:[(0,B.jsx)(`h3`,{children:`Attackers: Goals + Assists vs. Market Value`}),(0,B.jsx)(`p`,{style:{color:`#9ca3af`,fontSize:`14px`,marginTop:`-0.3rem`},children:`Compares RW, LW, and ST players by total goal contributions and market value.`}),e.length>0?(0,B.jsx)($o,{data:e}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]})]}),(0,B.jsxs)(`div`,{className:`card`,style:{marginTop:`2rem`},children:[(0,B.jsx)(`h3`,{children:`Scouting Filters`}),(0,B.jsx)(`p`,{style:{color:`#9ca3af`,marginBottom:`0.5rem`},children:`Select a position, or choose All to compare the full market:`}),(0,B.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`12px`,marginBottom:`1.2rem`},children:_.map(e=>(0,B.jsxs)(`label`,{style:{color:`#e5e7eb`,fontSize:`14px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`5px`},children:[(0,B.jsx)(`input`,{type:`radio`,name:`position`,value:e,checked:i===e,onChange:()=>b(e)}),e]},e))}),i&&(0,B.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:`1rem`,marginBottom:`1rem`},children:[(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`label`,{style:{color:`#e5e7eb`,fontSize:`14px`},children:[`Max Budget: €`,o,`M`]}),(0,B.jsx)(`input`,{type:`range`,min:`1`,max:h,value:o,onChange:x,style:{width:`100%`}})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`p`,{style:{color:`#e5e7eb`,fontSize:`14px`,margin:`0 0 0.4rem 0`},children:`Transfer Risk:`}),[`All`,`Low`,`Medium`,`High`].map(e=>(0,B.jsxs)(`label`,{style:{color:`#e5e7eb`,fontSize:`14px`,marginRight:`12px`,cursor:`pointer`},children:[(0,B.jsx)(`input`,{type:`radio`,name:`risk`,value:e,checked:c===e,onChange:()=>S(e)}),` `,e]},e))]}),(0,B.jsx)(`div`,{children:(0,B.jsxs)(`label`,{style:{color:`#e5e7eb`,fontSize:`14px`,cursor:`pointer`},children:[(0,B.jsx)(`input`,{type:`checkbox`,checked:d,onChange:e=>{f(e.target.checked),m([])}}),` `,`Exclude injury-prone players`]})})]}),i&&(0,B.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`1rem`},children:[(0,B.jsx)(`p`,{style:{color:`#9ca3af`,margin:0},children:i?i===`All`?`Showing ${v.length} player(s) across all positions`:`Showing ${v.length} player(s) for position ${i}`:`Select a position or All to display players.`}),(0,B.jsx)(`button`,{onClick:()=>{a(``),s(h),u(`All`),f(!1),m([])},style:{padding:`6px 10px`,borderRadius:`6px`,border:`1px solid #374151`,backgroundColor:`#1f2937`,color:`#e5e7eb`,cursor:`pointer`},children:`Reset Filters`})]}),(0,B.jsx)(`h3`,{children:`Scouting Map: Overall Rating vs. Market Value`}),(0,B.jsx)(`p`,{style:{color:`#9ca3af`,fontSize:`14px`,marginTop:`-0.3rem`},children:`The best value zone highlights players with stronger ratings and lower market values within the current filters.`}),e.length>0?(0,B.jsx)(Zo,{data:v,onSelect:m}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]}),(0,B.jsxs)(`div`,{className:`card`,style:{marginTop:`2rem`},children:[(0,B.jsx)(`h3`,{children:`Selected Players / Best Value Targets`}),e.length>0?(0,B.jsx)(es,{data:v,selectedPlayers:p,selectedPosition:i}):(0,B.jsx)(`p`,{children:`Loading dataset...`})]})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,B.jsx)(l.StrictMode,{children:(0,B.jsx)(is,{})}));
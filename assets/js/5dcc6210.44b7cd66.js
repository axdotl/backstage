/*! For license information please see 5dcc6210.44b7cd66.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[795338],{547562:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"plugin-search-backend-node.indexbuilder.getsearchengine",title:"IndexBuilder.getSearchEngine()",description:"API reference for IndexBuilder.getSearchEngine()"},u=void 0,i={id:"reference/plugin-search-backend-node.indexbuilder.getsearchengine",title:"IndexBuilder.getSearchEngine()",description:"API reference for IndexBuilder.getSearchEngine()",source:"@site/../docs/reference/plugin-search-backend-node.indexbuilder.getsearchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.indexbuilder.getsearchengine",permalink:"/docs/reference/plugin-search-backend-node.indexbuilder.getsearchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.indexbuilder.getsearchengine.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.indexbuilder.getsearchengine",title:"IndexBuilder.getSearchEngine()",description:"API reference for IndexBuilder.getSearchEngine()"}},a={},s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder",children:(0,t.jsx)(r.code,{children:"IndexBuilder"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.indexbuilder.getsearchengine",children:(0,t.jsx)(r.code,{children:"getSearchEngine"})})]}),"\n",(0,t.jsx)(r.p,{children:"Responsible for returning the registered search engine."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"getSearchEngine(): SearchEngine;\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchengine",children:"SearchEngine"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,t)&&!a.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:i.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function b(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}function m(){}function _(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var v=_.prototype=new m;v.constructor=_,y(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var o,c={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!E.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:n,type:e,key:u,ref:i,props:c,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,c,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case t:a=!0}}if(a)return u=u(a=e),e=""===c?"."+C(a,0):c,x(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(u,r,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),r.push(u)),1;if(a=0,c=""===c?".":c+":",x(e))for(var s=0;s<e.length;s++){var l=c+C(i=e[s],s);a+=$(i,r,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)a+=$(i=i.value,r,o,l=c+C(i,s++),u);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function I(e,r,n){if(null==e)return e;var t=[],o=0;return $(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null},A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};r.Children={map:I,forEach:function(e,r,n){I(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return I(e,(function(){r++})),r},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=u,r.PureComponent=_,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in r)S.call(r,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==a?a[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:n,type:e.type,key:c,ref:u,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,n){return P.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,n){return P.current.useReducer(e,r,n)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return P.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return P.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>u});var t=n(667294);const o={},c=t.createContext(o);function u(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
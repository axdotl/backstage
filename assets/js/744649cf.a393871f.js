/*! For license information please see 744649cf.a393871f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[833575],{518607:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=n(824246),o=n(511151);const s={id:"errors.responseerror",title:"ResponseError",description:"API reference for ResponseError"},c=void 0,i={id:"reference/errors.responseerror",title:"ResponseError",description:"API reference for ResponseError",source:"@site/../docs/reference/errors.responseerror.md",sourceDirName:"reference",slug:"/reference/errors.responseerror",permalink:"/docs/reference/errors.responseerror",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/errors.responseerror.md",tags:[],version:"current",frontMatter:{id:"errors.responseerror",title:"ResponseError",description:"API reference for ResponseError"}},u={},a=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/errors",children:(0,t.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror",children:(0,t.jsx)(r.code,{children:"ResponseError"})})]}),"\n",(0,t.jsx)(r.p,{children:"An error thrown as the result of a failed server request."}),"\n",(0,t.jsx)(r.p,{children:"The server is expected to respond on the ErrorResponseBody format."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class ResponseError extends Error \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," Error"]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.body",children:"body"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.errorresponsebody",children:"ErrorResponseBody"})}),(0,t.jsx)(r.td,{children:"The parsed JSON error body, as sent by the server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.cause",children:"cause"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"Error"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"The Error cause, as seen by the remote server. This is parsed out of the JSON error body."}),(0,t.jsx)(r.p,{children:"This error always has the plain Error constructor, however all serializable enumerable fields on the remote error including its name are preserved. Therefore, if you want to check the error type, use its name property rather than checking typeof or its constructor or prototype."})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.response",children:"response"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.consumedresponse",children:"ConsumedResponse"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"The actual response, as seen by the client."}),(0,t.jsxs)(r.p,{children:["Note that the body of this response is always consumed. Its parsed form is in the ",(0,t.jsx)(r.code,{children:"body"})," field."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.statuscode",children:"statusCode"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"number"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.statustext",children:"statusText"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"readonly"})}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/errors.responseerror.fromresponse",children:"fromResponse(response)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"Constructs a ResponseError based on a failed response."}),(0,t.jsx)(r.p,{children:"Assumes that the response has already been checked to be not ok. This function consumes the body of the response, and assumes that it hasn't been consumed before."})]})]})})]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!u.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function j(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||h}function m(){}function b(e,r,n){this.props=e,this.context=r,this.refs=x,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=j.prototype;var _=b.prototype=new m;_.constructor=b,y(_,j.prototype),_.isPureReactComponent=!0;var v=Array.isArray,E=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var o,s={},c=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)E.call(r,o)&&!R.hasOwnProperty(o)&&(s[o]=r[o]);var u=arguments.length-2;if(1===u)s.children=t;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];s.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:n,type:e,key:c,ref:i,props:s,_owner:S.current}}function g(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case t:u=!0}}if(u)return c=c(u=e),e=""===s?"."+C(u,0):s,v(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(c,r,o,"",(function(e){return e}))):null!=c&&(g(c)&&(c=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(u=0,s=""===s?".":s+":",v(e))for(var a=0;a<e.length;a++){var l=s+C(i=e[a],a);u+=$(i,r,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(i=e.next()).done;)u+=$(i=i.value,r,o,l=s+C(i,a++),c);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function P(e,r,n){if(null==e)return e;var t=[],o=0;return $(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};r.Children={map:P,forEach:function(e,r,n){P(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=j,r.Fragment=o,r.Profiler=c,r.PureComponent=b,r.StrictMode=s,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=S.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in r)E.call(r,a)&&!R.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==u?u[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=g,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,n){return T.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,n){return T.current.useReducer(e,r,n)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return T.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return T.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(667294);const o={},s=t.createContext(o);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
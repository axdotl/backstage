/*! For license information please see bac5b3d3.1698ef9a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[432285],{459348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var i=a(785893),s=a(511151);const o={title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},r=void 0,n={permalink:"/blog/2020/04/06/lighthouse-plugin",source:"@site/blog/2020-04-06-lighthouse-plugin.mdx",title:"Introducing Lighthouse for Backstage",description:"image illustrating the Lighthouse plugin for Backstage",date:"2020-04-06T00:00:00.000Z",formattedDate:"April 6, 2020",tags:[],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"Paul Marbach, Spotify",url:"http://twitter.com/fastfrwrd",imageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"}],frontMatter:{title:"Introducing Lighthouse for Backstage",author:"Paul Marbach, Spotify",authorURL:"http://twitter.com/fastfrwrd",authorImageURL:"https://pbs.twimg.com/profile_images/1224058798958088192/JPxS8uzR_400x400.jpg"},unlisted:!1,prevItem:{title:"How to quickly set up Backstage",permalink:"/blog/2020/04/30/how-to-quickly-set-up-backstage"},nextItem:{title:"What the heck is Backstage anyway?",permalink:"/blog/2020/03/18/what-is-backstage"}},h={authorsImageUrls:[void 0]},c=[{value:"What is Lighthouse?",id:"what-is-lighthouse",level:2},{value:"Lighthouse, tracked over time",id:"lighthouse-tracked-over-time",level:2},{value:"Using Lighthouse in Backstage",id:"using-lighthouse-in-backstage",level:2},{value:"A personal note",id:"a-personal-note",level:2}];function l(e){const t={a:"a",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image illustrating the Lighthouse plugin for Backstage",src:a(62878).Z+"",width:"2249",height:"1308"})}),"\n",(0,i.jsxs)(t.p,{children:["We\u2019re proud to announce that our first internal plugin at Spotify has been open-sourced as part of Backstage. This plugin works with the newly open-sourced ",(0,i.jsx)(t.a,{href:"https://github.com/spotify/lighthouse-audit-service",children:"lighthouse-audit-service"})," to run and track Lighthouse audits for your websites."]}),"\n",(0,i.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,i.jsx)(t.h2,{id:"what-is-lighthouse",children:"What is Lighthouse?"}),"\n",(0,i.jsxs)(t.p,{children:["Google's ",(0,i.jsx)(t.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," auditing tool for websites is a great open-source resource for benchmarking and improving the accessibility, performance, SEO, and best practices of your site."]}),"\n",(0,i.jsxs)(t.p,{children:["At Spotify, we keep track of Lighthouse audit scores over time to look at trends and areas for investment. We particularly look to Lighthouse to give us ",(0,i.jsx)(t.a,{href:"https://developers.google.com/web/tools/lighthouse/v3/scoring#a11y",children:"accessibility recommendations"}),"; in the next few months, we plan to roll out Lighthouse accessibility category scores as a benchmark metric for all websites at Spotify."]}),"\n",(0,i.jsx)(t.h2,{id:"lighthouse-tracked-over-time",children:"Lighthouse, tracked over time"}),"\n",(0,i.jsx)(t.p,{children:"What makes the plugin unique is that we can track a website's audit performance over time using the main metrics that Lighthouse outputs, rather than simply running reports. The sparklines show, at a glance, how all of your websites are holding up over recent builds."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of the audit list in the Lighthouse plugin",src:a(872025).Z+"",width:"3584",height:"1930"})}),"\n",(0,i.jsx)(t.p,{children:"Lighthouse reports can be viewed directly in Backstage, with the ability to travel back and forth through your audit history, so you can quickly diagnose which release caused a performance or SEO regression."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of the audit view in the Lighthouse plugin",src:a(423805).Z+"",width:"3584",height:"1938"})}),"\n",(0,i.jsx)(t.p,{children:"Trigger an audit directly from Backstage, or trigger audits programmatically with your new lighthouse-audit-service instance. Schedule them after builds as a sort of smoke test, or trigger them on a schedule (as we do at Spotify) to get a daily snapshot of your website."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image of the create audit form in the Lighthouse plugin",src:a(862535).Z+"",width:"2930",height:"1544"})}),"\n",(0,i.jsx)(t.h2,{id:"using-lighthouse-in-backstage",children:"Using Lighthouse in Backstage"}),"\n",(0,i.jsxs)(t.p,{children:["To learn how you can enable Lighthouse auditing within Backstage, head over to the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse",children:"README"})," for the plugin to get started."]}),"\n",(0,i.jsx)(t.h2,{id:"a-personal-note",children:"A personal note"}),"\n",(0,i.jsx)(t.p,{children:"I want to thank the folks on the Backstage team for approaching me to open-source this plugin. I have found working on Backstage to be a really rewarding and fun time, and I'm so glad that the core team members have put in the effort to make Backstage something that anyone in the industry can use. I can't wait to play with all the plugins the community is going to create. I am hopeful that this plugin can help illustrate just a sliver of what we use Backstage for at Spotify."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,t,a)=>{var i=a(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var i,o={},c=null,l=null;for(i in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!h.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:n.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},785893:(e,t,a)=>{e.exports=a(675251)},872025:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/audit-list-f77e3ad5f5c9c8812d941db16cf3619d.png"},423805:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/audit-view-9e371d17035eb90390ed3550b42e4ba3.png"},862535:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-audit-11bdc17d5d7b7275c5f15a0a8d22c048.png"},62878:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lead-7129a22cda9f200e8c8ba655ad086573.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>r});var i=a(667294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
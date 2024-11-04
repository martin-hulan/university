"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4738],{7294:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>o});var t=s(4848),i=s(8453),r=s(7293);const o=[];function c(e){const n={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(r.A,{type:"info",icon:"\ud83d\udd12",title:"Paid feature",children:(0,t.jsxs)(n.p,{children:["This is a paid feature and requires involvement of Rossum Sales and/or Rossum Professional Services. Consider contacting the respective teams using the following form: ",(0,t.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"https://rossum.ai/form/contact/"})]})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2737:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"learn/sso/index","title":"Single Sign-On (SSO)","description":"Creating users with SSO","source":"@site/docs/learn/sso/index.md","sourceDirName":"learn/sso","slug":"/learn/sso/","permalink":"/docs/learn/sso/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/sso/index.md","tags":[],"version":"current","frontMatter":{"title":"Single Sign-On (SSO)"},"sidebar":"learnSidebar","previous":{"title":"Configuration examples","permalink":"/docs/learn/sftp-s3-import-export/configuration-examples"},"next":{"title":"Structured formats import","permalink":"/docs/learn/structured-formats-import/"}}');var i=s(4848),r=s(8453),o=s(7294);const c={title:"Single Sign-On (SSO)"},l=void 0,a={},d=[...o.RM,{value:"Creating users with SSO",id:"creating-users-with-sso",level:2},{value:"Changing existing users to SSO",id:"changing-existing-users-to-sso",level:2},{value:"Changing existing users back to password",id:"changing-existing-users-back-to-password",level:2}];function h(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"creating-users-with-sso",children:"Creating users with SSO"}),"\n",(0,i.jsx)(n.p,{children:"When the SSO is configured, all newly created users are created with SSO enabled by default. Follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the user's profile and click on ",(0,i.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add user"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fill in all the required users and click ",(0,i.jsx)(n.strong,{children:"Add user"})," button"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It might be necessary is to update the ",(0,i.jsx)(n.strong,{children:"External user ID"})," so that it matches the 3rd party system. However, by default, we use the same email address and the user might be able to log in without any changes needed."]}),"\n",(0,i.jsx)(n.h2,{id:"changing-existing-users-to-sso",children:"Changing existing users to SSO"}),"\n",(0,i.jsx)(n.p,{children:"When SSO is enabled on the organization, older users that were still using password-based login are not switched automatically. To change an existing user to SSO, you need to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Contact Rossum.ai support to enable SSO for your account."}),"\n",(0,i.jsxs)(n.li,{children:["Go to the user's profile and click on ",(0,i.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Find the relevant user and click on it."}),"\n",(0,i.jsxs)(n.li,{children:["In the user's profile, click on ",(0,i.jsx)(n.strong,{children:"Personal info"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Authentication"})," section, select ",(0,i.jsx)(n.strong,{children:"Log in with SSO"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that if you do not see this section, it means that SSO is not enabled for your account."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SSO settings",src:s(6409).A+"",width:"1518",height:"482"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"External user ID"})," can be used to connect the user to your system (Azure, Google). It is a unique identifier that is used to match the user in your system with the user in Rossum.ai. In most cases, this ID is the same as user email."]}),"\n",(0,i.jsxs)(n.p,{children:["For more technical information about SSO please visit our API reference: ",(0,i.jsx)(n.a,{href:"https://elis.rossum.ai/api/docs/#single-sign-on-sso",children:"https://elis.rossum.ai/api/docs/#single-sign-on-sso"})]}),"\n",(0,i.jsx)(n.h2,{id:"changing-existing-users-back-to-password",children:"Changing existing users back to password"}),"\n",(0,i.jsx)(n.p,{children:"Users with enabled SSO can be switched back to password based login following these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the user's profile and click on ",(0,i.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Find the relevant user and click on it."}),"\n",(0,i.jsxs)(n.li,{children:["In the user's profile, click on ",(0,i.jsx)(n.strong,{children:"Personal info"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Authentication"})," section, select ",(0,i.jsx)(n.strong,{children:"Log in with Password"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["After saving the changes it is necessary to click on ",(0,i.jsx)(n.strong,{children:"Reset password"})," which will send an email with password reset link. This is necessary even when the user previously had a password but was switched to SSO! It is because when switching to SSO, we purge the passwords for security reasons."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7293:(e,n,s)=>{s.d(n,{A:()=>I});var t=s(6540),i=s(4848);function r(e){const{mdxAdmonitionTitle:n,rest:s}=function(e){const n=t.Children.toArray(e),s=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==s)),o=s?.props.children;return{mdxAdmonitionTitle:o,rest:r.length>0?(0,i.jsx)(i.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:s}}var o=s(4164),c=s(1312),l=s(7559);const a="admonition_xJq3",d="admonitionHeading_Gvgb",h="admonitionIcon_Rf37",u="admonitionContent_BuS1";function m(e){let{type:n,className:s,children:t}=e;return(0,i.jsx)("div",{className:(0,o.A)(l.G.common.admonition,l.G.common.admonitionType(n),a,s),children:t})}function x(e){let{icon:n,title:s}=e;return(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("span",{className:h,children:n}),s]})}function g(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:u,children:n}):null}function p(e){const{type:n,icon:s,title:t,children:r,className:o}=e;return(0,i.jsxs)(m,{type:n,className:o,children:[t||s?(0,i.jsx)(x,{title:t,icon:s}):null,(0,i.jsx)(g,{children:r})]})}function f(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const j={icon:(0,i.jsx)(f,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,i.jsx)(p,{...j,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function w(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const S={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,i.jsx)(p,{...S,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,i.jsx)(p,{...A,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function k(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function O(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const R={icon:(0,i.jsx)(O,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const z={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:v,tip:y,info:C,warning:function(e){return(0,i.jsx)(p,{...N,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...R,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(v,{title:"secondary",...e}),important:e=>(0,i.jsx)(C,{title:"important",...e}),success:e=>(0,i.jsx)(y,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...z,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function I(e){const n=r(e),s=(t=n.type,T[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),T.info));var t;return(0,i.jsx)(s,{...n})}},6409:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sso-settings-dded0020447d2d7e4c741707e4e8cbca.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
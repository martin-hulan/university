"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[7192],{4289:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=i(5893),s=i(1151);const a={sidebar_position:1,sidebar_label:"Automating emails",title:"Emails & Email Ingestion: automating emails"},o="Automating emails",r={id:"learn/emails/auto-rejections",title:"Emails & Email Ingestion: automating emails",description:"Automatic rejection based on condition",source:"@site/docs/learn/emails/auto-rejections.md",sourceDirName:"learn/emails",slug:"/learn/emails/auto-rejections",permalink:"/docs/learn/emails/auto-rejections",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/emails/auto-rejections.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Automating emails",title:"Emails & Email Ingestion: automating emails"},sidebar:"learnSidebar",previous:{title:"Emails & Email Ingestion",permalink:"/docs/learn/emails/"},next:{title:"Find & Replace Values",permalink:"/docs/learn/find-replace-values/"}},c={},l=[{value:"Automatic rejection based on condition",id:"automatic-rejection-based-on-condition",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"automating-emails",children:"Automating emails"})}),"\n",(0,n.jsx)(t.h2,{id:"automatic-rejection-based-on-condition",children:"Automatic rejection based on condition"}),"\n",(0,n.jsxs)(t.p,{children:["Rossum allows you to define a condition (",(0,n.jsx)(t.em,{children:"trigger"}),") and an ",(0,n.jsx)(t.em,{children:"email template"}),' to be sent when the condition is true. In case the template is of type "rejection", this also sets the annotation\'s status to be ',(0,n.jsx)(t.code,{children:"rejected"}),". This can be used to inform your vendors (or anyone else you specify in the email template) about a problematic document:"]}),"\n",(0,n.jsx)(t.p,{children:'First, go to queue settings where you want to set up automatic rejections, specifically into the "Emails" section:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(2648).Z+"",width:"828",height:"174"})}),"\n",(0,n.jsx)(t.p,{children:'Scroll down to "Document rejection":'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(3165).Z+"",width:"984",height:"498"})}),"\n",(0,n.jsxs)(t.p,{children:["Create a new rejection template. If you would like to send automated emails to your vendors, you can use the variable ",(0,n.jsx)(t.code,{children:"{{sender_email}}"})," (assuming the vendor sent the email into Rossum)."]}),"\n",(0,n.jsx)(t.p,{children:"Toggle the automatic sending based on a trigger:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(2828).Z+"",width:"501",height:"91"})}),"\n",(0,n.jsx)(t.p,{children:"And finally, select the condition you want from the list (for details):"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(4771).Z+"",width:"784",height:"248"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:'For rejecting documents with missing fields, both the "required field missing" and "selected fields missing" triggers require a very high AI engine confidence (0.95) that the field is not on the document. However, you can also the following trigger that is checking for an empty value (by using a regex):'}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alt text",src:i(2378).Z+"",width:"780",height:"229"})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3165:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-1-c6b86c630264028b13122ac12c268c81.png"},2828:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-2-ec7d40395bd03354c6fbb9f695db5c2a.png"},4771:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-3-ac5f613d89cdcd9dc4f8113bc66298c8.png"},2378:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-4-885eeffecd977d115367bf6a0b3b126e.png"},2648:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/image-12b4c6ae9d864339bee966af58d0210e.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
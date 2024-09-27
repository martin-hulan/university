"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[989],{3261:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var s=n(4848),i=n(8453);const o=[];function r(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},101:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>o});var s=n(4848),i=n(8453);const o=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},3353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(4848),i=n(8453),o=n(3261);n(101);const r={title:"Export pipelines: Custom format templating purge",sidebar_label:"1. Custom format templating purge",sidebar_position:1},l="Custom format templating purge",a={id:"learn/export-pipeline/custom-format-templating-purge",title:"Export pipelines: Custom format templating purge",description:"Custom format templating is creating new documents and saving their links into the annotation metadata. However, when re-exporting, we need to clean up the old documents not to mix them up with the new documents. This purge extension allows us to do that (and effectively start with a clean slate).",source:"@site/docs/learn/export-pipeline/custom-format-templating-purge.md",sourceDirName:"learn/export-pipeline",slug:"/learn/export-pipeline/custom-format-templating-purge",permalink:"/docs/learn/export-pipeline/custom-format-templating-purge",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/export-pipeline/custom-format-templating-purge.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Export pipelines: Custom format templating purge",sidebar_label:"1. Custom format templating purge",sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Export pipelines",permalink:"/docs/learn/export-pipeline/"},next:{title:"2. Custom format templating",permalink:"/docs/learn/export-pipeline/custom-format-templating"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Webhook URL endpoints",id:"webhook-url-endpoints",level:3},...o.RM,{value:"Basic usage",id:"basic-usage",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-format-templating-purge",children:"Custom format templating purge"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/learn/export-pipeline/custom-format-templating",children:"Custom format templating"})," is creating new documents and saving their links into the annotation metadata. However, when re-exporting, we need to clean up the old documents not to mix them up with the new documents. This purge extension allows us to do that (and effectively start with a clean slate)."]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, this extension takes care of a cleanup when purging the original documents from Rossum (by default, all generated artifacts would stay in the system orphaned). Deleting such orphaned artifacts might be very important for ",(0,s.jsx)(t.strong,{children:"compliance reasons"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:'"Custom format templating purge" extension is provided and maintained by Rossum.ai in the form of webhook. To start using it, follow these steps:'}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"Custom format templating purge"})]}),"\n",(0,s.jsxs)(t.li,{children:["Trigger events: ",(0,s.jsx)(t.code,{children:"Export"})," and document status ",(0,s.jsx)(t.code,{children:"Changed"})," (!)"]}),"\n",(0,s.jsxs)(t.li,{children:["Extension type: ",(0,s.jsx)(t.code,{children:"Webhook"})]}),"\n",(0,s.jsx)(t.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['In "Advanced settings" select ',(0,s.jsx)(t.strong,{children:"Token owner"})," (should have Admin access)"]}),"\n",(0,s.jsxs)(t.li,{children:['In the "Additional notification metadata" enable ',(0,s.jsx)(t.code,{children:"Schemas"})]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Create the webhook"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"webhook-url-endpoints",children:"Webhook URL endpoints"}),"\n",(0,s.jsx)(o.Ay,{eu1:"https://elis.custom-format-templating-purge.rossum-ext.app/",eu2:"https://shared-eu2.custom-format-templating-purge.rossum-ext.app/",us:"https://us.custom-format-templating-purge.rossum-ext.app/",jp:"https://shared-jp.custom-format-templating-purge.rossum-ext.app/"}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(t.p,{children:"No additional configuration is required. This extension should be run first in the extension chain."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
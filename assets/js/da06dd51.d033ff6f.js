"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9026],{3261:(e,t,n)=>{n.d(t,{Ay:()=>r,RM:()=>o});var i=n(4848),s=n(8453);const o=[];function l(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,i.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,i.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,i.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,i.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function r(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(4848),s=n(8453),o=n(3261);const l={title:"Email body converter"},r=void 0,a={id:"learn/email-body-converter/index",title:"Email body converter",description:"A simple extension that can convert the email HTML body into a PDF and upload it to a queue as a new document.",source:"@site/docs/learn/email-body-converter/index.md",sourceDirName:"learn/email-body-converter",slug:"/learn/email-body-converter/",permalink:"/docs/learn/email-body-converter/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/email-body-converter/index.md",tags:[],version:"current",frontMatter:{title:"Email body converter"},sidebar:"learnSidebar",previous:{title:"OAuth 2.0 scopes",permalink:"/docs/learn/coupa/oauth-scopes"},next:{title:"Emails & Email Ingestion",permalink:"/docs/learn/emails/"}},c={},d=[{value:"Installation",id:"installation",level:2},...o.RM,{value:"Available configuration options",id:"available-configuration-options",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"A simple extension that can convert the email HTML body into a PDF and upload it to a queue as a new document."}),"\n",(0,i.jsx)(t.p,{children:"An additional feature is that it can also convert HTML attachments into PDFs."}),"\n",(0,i.jsxs)(t.p,{children:["The original API endpoint documentation can be found ",(0,i.jsx)(t.a,{href:"https://elis.rossum.ai/svc/email-converter/api/redoc",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"Email body converter is a webhook maintained by Rossum. To use it, follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Log in to your Rossum account."}),"\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.strong,{children:"Create extension"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Fill in the following fields:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Name: ",(0,i.jsx)(t.code,{children:"Email body converter"})]}),"\n",(0,i.jsxs)(t.li,{children:["Trigger events: ",(0,i.jsx)(t.code,{children:"email.received"})]}),"\n",(0,i.jsxs)(t.li,{children:["Extension type: ",(0,i.jsx)(t.code,{children:"Webhook"})]}),"\n",(0,i.jsx)(t.li,{children:"URL (see below)"}),"\n",(0,i.jsx)(t.li,{children:"Access to Rossum\u2019s API from extension (select your account)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Create the webhook"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Fill in the ",(0,i.jsx)(t.code,{children:"Configuration"})," field. See ",(0,i.jsx)(t.a,{href:"#available-configuration-options",children:"Available configuration options"})," below."]}),"\n"]}),"\n",(0,i.jsx)(o.Ay,{eu1:"https://elis.rossum.ai/svc/email-converter/api/v1/convert",us:"https://us.app.rossum.ai/svc/email-converter/api/v1/convert"}),"\n",(0,i.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  // Each object in the `configurations` list represents a specific configuration (distinguished by\n  // the queue IDs).\n  "configurations": [\n    {\n      // Optional. List of queue IDs this configuration applies to. A single configuration can be\n      // used for multiple queues, specified in this list.\n      "queue_ids": [172636],\n\n      // Minimum number of characters in the email body to convert it to PDF. Default is 0.\n      "minimal_email_character_count": 5,\n\n      // Skip conversion if supported files are present (`true` to skip, `false` to convert the\n      // email body to PDF). Supported files include email attachments supported by Rossum and any\n      // additional files converted to PDF as part of the webhook call (e.g., HTML attachments\n      // converted to PDF). Default is `false`.\n      "skip_if_supported_files_present": false,\n\n      // Optional. List of attachment types to convert to PDF. Supported values: "html", "txt"\n      "convert_attachments": ["html", "txt"],\n\n      // Optional. Specifies the style for TXT files, which are first converted to HTML and then\n      // to PDF. This configuration is added as an HTML style tag to affect the appearance of\n      // the TXT in the converted PDF.\n      "txt_style": "@page { size: letter landscape; margin: 2cm; } pre { white-space: pre-wrap; }"\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
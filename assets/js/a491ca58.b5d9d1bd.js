"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[8157],{5799:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>i});var t=s(4848),o=s(8453);const i=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Deprecated",type:"danger",children:(0,t.jsxs)(n.p,{children:["This feature is deprecated. It won't receive any further updates and is likely to be completely removed in the future. Please consider using other available alternatives or contacting ",(0,t.jsx)(n.a,{href:"mailto:support@rossum.ai",children:"support@rossum.ai"})," for further assistance."]})})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8448:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>i});var t=s(4848),o=s(8453);const i=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(n.admonition,{title:"Work in progress",type:"warning",children:[(0,t.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,t.jsxs)(n.p,{children:["Tracking issue: ",(0,t.jsx)(n.a,{href:e.issue,children:e.issue})]}):""]})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1474:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"learn/deprecated/copy-paste-values/index","title":"Copy & Paste Values","description":"Formerly known as Value Operations","source":"@site/docs/learn/deprecated/copy-paste-values/index.md","sourceDirName":"learn/deprecated/copy-paste-values","slug":"/learn/copy-paste-values","permalink":"/docs/learn/copy-paste-values","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/deprecated/copy-paste-values/index.md","tags":[],"version":"current","frontMatter":{"title":"Copy & Paste Values","slug":"/learn/copy-paste-values"},"sidebar":"learnSidebar","previous":{"title":"Configuration examples","permalink":"/docs/learn/find-replace-values/configuration-examples"},"next":{"title":"Configuration examples","permalink":"/docs/learn/copy-paste-values/configuration-examples"}}');var o=s(4848),i=s(8453),a=s(5799),r=s(8448);const l={title:"Copy & Paste Values",slug:"/learn/copy-paste-values"},c="Copy & Paste Values",u={},d=[...a.RM,{value:"Installation",id:"installation",level:2},{value:"Basic usage",id:"basic-usage",level:2},...r.RM,{value:"Available configuration options",id:"available-configuration-options",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"copy--paste-values",children:"Copy & Paste Values"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Formerly known as Value Operations"})}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Copy & Paste Values extension is available in the Rossum store. To install the extension, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to ",(0,o.jsx)(n.strong,{children:"Extensions \u2192 Rossum Store"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Search for ",(0,o.jsx)(n.strong,{children:"Copy & Paste Values"}),' extension and "Add" it.']}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:['A default "Rossum Store extension settings" page will open where you can configure the extension to your liking (visit ',(0,o.jsx)(n.a,{href:"/docs/learn/copy-paste-values/configuration-examples",children:"configuration examples"})," for inspiration)."]}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "operations": [\n    {\n      // Under what condition should the source field be copied?\n      "condition": "len({line_items}) > 0 and {item_po} == \'\'",\n\n      // Source field from where the source value should be copied.\n      "source_field": "order_id",\n\n      // Target field to where the source value should be copied.\n      "target_field": "item_po_copy"\n    }\n\n    // \u2026 more operations\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
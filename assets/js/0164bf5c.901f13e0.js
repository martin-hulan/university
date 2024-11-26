"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4588],{101:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>o});var i=t(4848),s=t(8453);const o=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(n.admonition,{title:"Work in progress",type:"warning",children:[(0,i.jsxs)(n.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,i.jsxs)(n.p,{children:["Tracking issue: ",(0,i.jsx)(n.a,{href:e.issue,children:e.issue})]}):""]})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"learn/duplicates-detection/index","title":"Duplicates detection","description":"Installation","source":"@site/docs/learn/duplicates-detection/index.md","sourceDirName":"learn/duplicates-detection","slug":"/learn/duplicates-detection/","permalink":"/docs/learn/duplicates-detection/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/duplicates-detection/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Duplicates detection","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"OAuth 2.0 scopes","permalink":"/docs/learn/coupa/oauth-scopes"},"next":{"title":"Configuration examples","permalink":"/docs/learn/duplicates-detection/configuration-examples"}}');var s=t(4848),o=t(8453),a=t(101);const r={title:"Duplicates detection",sidebar_position:1},l=void 0,c={},u=[{value:"Installation",id:"installation",level:2},...a.RM,{value:"Basic usage",id:"basic-usage",level:2},...a.RM,{value:"Available configuration options",id:"available-configuration-options",level:2},...a.RM];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(a.Ay,{issue:"https://github.com/rossumai/university/issues/404"}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(a.Ay,{issue:"https://github.com/rossumai/university/issues/404"}),"\n",(0,s.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(a.Ay,{issue:"https://github.com/rossumai/university/issues/404"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "logic": [\n        {\n          "rules": [\n            {\n              "id": 1,\n\n              // One of: "field", "filename", "relation"\n              "attribute": "field",\n\n              // Datapoint schema ID\n              "field_schema_id": "document_id"\n            }\n            // \u2026\n          ],\n          "scope": {\n            // One of: "queue", "workspace", "organization"\n            "object": "queue",\n            "statuses": [\n              "failed_import",\n              "split",\n              "to_review",\n              "reviewing",\n              "in_workflow",\n              "confirmed",\n              "rejected",\n              "exporting",\n              "exported",\n              "failed_export",\n              "postponed",\n              "deleted"\n            ]\n          },\n          "actions": [\n            {\n              "type": "fill_field",\n              "field_to_fill": "is_rossum_duplicate",\n              "value_to_fill": "true"\n            }\n          ],\n\n          // Defines how to combine rules. You can specify a list of rule IDs or use logical "and"\n          // operations between rule IDs. Each list element acts as a logical "or" operation.\n          "matching_flow": ["1and2", "3"]\n        }\n      ],\n      "trigger_events": ["annotation_content"],\n      "trigger_actions": ["initialize", "started", "user_update", "updated"]\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
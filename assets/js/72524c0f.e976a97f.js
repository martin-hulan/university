"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5608],{7132:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>a});var r=n(4848),s=n(8453);const a=[];function i(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,r.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,r.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,r.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,r.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8448:(e,t,n)=>{n.d(t,{Ay:()=>l,RM:()=>a});var r=n(4848),s=n(8453);const a=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.admonition,{title:"Work in progress",type:"warning",children:[(0,r.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,r.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,r.jsxs)(t.p,{children:["Tracking issue: ",(0,r.jsx)(t.a,{href:e.issue,children:e.issue})]}):""]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},5857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"learn/export-pipeline/data-value-extractor","title":"Export pipelines: Data value extractor","description":"Installation","source":"@site/docs/learn/export-pipeline/data-value-extractor.md","sourceDirName":"learn/export-pipeline","slug":"/learn/export-pipeline/data-value-extractor","permalink":"/docs/learn/export-pipeline/data-value-extractor","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/export-pipeline/data-value-extractor.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Export pipelines: Data value extractor","sidebar_label":"4. Data value extractor","sidebar_position":4},"sidebar":"learnSidebar","previous":{"title":"3. REST API export","permalink":"/docs/learn/export-pipeline/rest-api-export"},"next":{"title":"5. Export evaluator","permalink":"/docs/learn/export-pipeline/export-evaluator"}}');var s=n(4848),a=n(8453),i=n(7132),l=n(8448);const o={title:"Export pipelines: Data value extractor",sidebar_label:"4. Data value extractor",sidebar_position:4},c="Data value extractor",d={},h=[{value:"Installation",id:"installation",level:2},...l.RM,...i.RM,{value:"Basic usage",id:"basic-usage",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"data-value-extractor",children:"Data value extractor"})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Login to your Rossum account."}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to ",(0,s.jsx)(t.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Create extension"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Fill the following fields:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"Data value extractor"})]}),"\n",(0,s.jsxs)(t.li,{children:["Trigger events: ",(0,s.jsx)(t.code,{children:"Export"})]}),"\n",(0,s.jsxs)(t.li,{children:["Extension type: ",(0,s.jsx)(t.code,{children:"Webhook"})]}),"\n",(0,s.jsx)(t.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['In "Advanced settings" select ',(0,s.jsx)(t.strong,{children:"Token owner"})," (should have Admin access)"]}),"\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Create the webhook"}),"."]}),"\n"]}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(i.Ay,{eu1:"https://elis.data-value-extractor.rossum-ext.app/",eu2:"https://shared-eu2.data-value-extractor.rossum-ext.app/",us:"https://us.data-value-extractor.rossum-ext.app/",jp:"https://shared-jp.data-value-extractor.rossum-ext.app/"}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(t.p,{children:"The Data Value Extractor serves to extract data from a document that is linked in annotation's metadata. The main use case is to process data from (reference rest-api-export) as a part of (reference export-pipeline)."}),"\n",(0,s.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "extract": [\n    {\n      "format": "json",\n      "extract_rules": [\n        {\n          "value_path": "status_code",\n          "target_schema_id": "api1_status_code"\n        }\n      ],\n      "source_reference_key": "export_reply_headers"\n    },\n    {\n      "format": "json",\n      "extract_rules": [\n        {\n          "value_path": "id",\n          "target_schema_id": "coupa_invoice_id"\n        }\n      ],\n      "source_reference_key": "export_reply_payload"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Currently only ",(0,s.jsx)(t.code,{children:"json"})," format is supported."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value_path"})," is the jmespath to the desired place of the response (be it headers or body). Headers are stored in ",(0,s.jsx)(t.code,{children:"json"})," format."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"target_schema_id"})," is the schema_id of the annotation you are exporting, where the data will be stored and thus available for further extensions in the export pipeline (reference)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"source_reference_key"})," is the reference key for the stored data in annotation's metadata"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
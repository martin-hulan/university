"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2189],{8021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/netsuite/considerations","title":"NetSuite: Considerations & Limitations","description":"In general","source":"@site/docs/learn/netsuite/considerations.md","sourceDirName":"learn/netsuite","slug":"/learn/netsuite/considerations","permalink":"/docs/learn/netsuite/considerations","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/considerations.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"NetSuite: Considerations & Limitations","sidebar_position":4,"sidebar_label":"Considerations & Limitations"},"sidebar":"learnSidebar","previous":{"title":"Export configuration","permalink":"/docs/learn/netsuite/export-configuration"},"next":{"title":"Postman collection","permalink":"/docs/learn/netsuite/postman"}}');var s=n(4848),o=n(8453);const r={title:"NetSuite: Considerations & Limitations",sidebar_position:4,sidebar_label:"Considerations & Limitations"},a="Considerations & Limitations",l={},d=[{value:"In general",id:"in-general",level:2},{value:"Default webhook timeout is 30 seconds",id:"default-webhook-timeout-is-30-seconds",level:2},{value:"Webhook retries 5\xd7 on failed requests",id:"webhook-retries-5-on-failed-requests",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"considerations--limitations",children:"Considerations & Limitations"})}),"\n",(0,s.jsx)(t.h2,{id:"in-general",children:"In general"}),"\n",(0,s.jsx)(t.p,{children:"Building NetSuite integration is much more than just reading the values from documents and forwarding them to the NetSuite API. The following considerations should be taken into account when designing a new NetSuite implementation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["What document types are going to be processed? ",(0,s.jsx)(t.code,{children:"VendorBill"}),", ",(0,s.jsx)(t.code,{children:"VendorCredit"}),", or some other documents? Should they be in one queue or each document type or vendor in its own queue? What are the document regions? All of these questions affect the final queue structure, schemas as well as NetSuite export configuration."]}),"\n",(0,s.jsx)(t.li,{children:"What data needs to be data matched? PO-backed workflows might require just POs whereas non-PO-backed workflows might require many other NetSuite records to match (required by the NetSuite export). This greatly affects what data needs to be synchronized from NetSuite. Also consider how large are the collections and how many records should be synchronized during the initial import."}),"\n",(0,s.jsxs)(t.li,{children:["What system fields will be necessary? For example, ",(0,s.jsx)(t.code,{children:"VendorCredits"})," must have all amounts and quantities positive. Therefore, several hidden ",(0,s.jsx)(t.a,{href:"../rossum-formulas/formula-fields",children:"Formula Fields"})," performing this conversion might be necessary for the export."]}),"\n",(0,s.jsxs)(t.li,{children:["Consider preparing ",(0,s.jsx)(t.a,{href:"../line-items-grouping",children:"Line items grouping"})," extension. Apart from potential business requirements, NetSuite doesn't allow line items with repeating items."]}),"\n",(0,s.jsx)(t.li,{children:"Consider what all business rules and validations must be implemented."}),"\n",(0,s.jsxs)(t.li,{children:["Consider whether duplicate detection should be implemented or not. Customers often find it unexpected when we allow exporting the same document multiple times (even though NetSuite allows it by default). Note that this is an additional mechanism how to detect duplicates. In general, duplicates in Rossum can be detected by:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Comparing files on a binary level (looking for identical files)"}),"\n",(0,s.jsx)(t.li,{children:"Comparing extracted fields (looking for exactly matching extracted content)"}),"\n",(0,s.jsx)(t.li,{children:"Searching whether such invoices already exist in NetSuite or not (complements the previous point but takes historic documents into account as well)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"default-webhook-timeout-is-30-seconds",children:"Default webhook timeout is 30 seconds"}),"\n",(0,s.jsx)(t.p,{children:"By default, all webhooks in Rossum timeout after 30 seconds. Usually, this time is enough for most webhooks. However, some more complex documents (longer ones with more line items) can take longer than that to export."}),"\n",(0,s.jsx)(t.p,{children:"To fix this issue, it is possible to set custom timeout by calling the following API endpoint:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Request payload example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "timeout_s": 60\n    // highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Example ",(0,s.jsx)(t.a,{href:"https://github.com/curl/curl",children:(0,s.jsx)(t.code,{children:"curl"})})," request:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl --location --request PATCH 'https://[EXAMPLE].rossum.app/api/v1/hooks/[HOOK_ID]' \\\n--header 'Authorization: Bearer [API_TOKEN]' \\\n--header 'Content-Type: application/json' \\\n--data '{\"timeout_s\": 60}'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["See API reference for more details: ",(0,s.jsx)(t.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["The maximum allowed timeout is 60 seconds. Consider contacting ",(0,s.jsx)(t.a,{href:"https://rossum.ai/form/contact/",children:"Rossum Sales"})," or Rossum Support team if you need help finding alternative solutions."]})}),"\n",(0,s.jsx)(t.h2,{id:"webhook-retries-5-on-failed-requests",children:"Webhook retries 5\xd7 on failed requests"}),"\n",(0,s.jsx)(t.p,{children:"By default, webhooks are retried 5\xd7 on failed requests. This behavior can be inconvenient if it's not possible to guarantee idempotency of the requests (for example, NetSuite exports). This can be changed or completely disabled using the following API endpoint:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"PATCH /v1/hooks/{id}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Request payload example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "config": {\n    // highlight-start\n    "retry_count": 0\n    // highlight-end\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Use number ",(0,s.jsx)(t.code,{children:"0"})," to disable retries or any other number to change the default number of retries."]}),"\n",(0,s.jsxs)(t.p,{children:["See API reference for more details: ",(0,s.jsx)(t.a,{href:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook",children:"https://elis.rossum.ai/api/docs/#update-part-of-a-hook"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
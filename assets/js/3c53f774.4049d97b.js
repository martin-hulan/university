"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[8145],{7132:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var s=t(4848),i=t(8453);const r=[];function o(e){const n={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(n.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(n.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"US east coast"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(n.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(n.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"learn/netsuite/index","title":"NetSuite","description":"\ud83d\udc49 https://elis.rossum.ai/svc/netsuite-v3/api/redoc","source":"@site/docs/learn/netsuite/index.md","sourceDirName":"learn/netsuite","slug":"/learn/netsuite/","permalink":"/docs/learn/netsuite/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/netsuite/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NetSuite","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"Using API","permalink":"/docs/learn/master-data-hub/using-api"},"next":{"title":"Integration configuration","permalink":"/docs/learn/netsuite/integration-configuration"}}');var i=t(4848),r=t(8453),o=t(7132);const l={title:"NetSuite",sidebar_position:1},a=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Import endpoints",id:"import-endpoints",level:3},...o.RM,{value:"Export endpoints",id:"export-endpoints",level:3},...o.RM,{value:"Setting hook <code>secrets_schema</code> value",id:"setting-hook-secrets_schema-value",level:3},{value:"System context diagram",id:"system-context-diagram",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"API documentation",type:"info",children:(0,i.jsxs)(n.p,{children:["\ud83d\udc49 ",(0,i.jsx)(n.a,{href:"https://elis.rossum.ai/svc/netsuite-v3/api/redoc",children:"https://elis.rossum.ai/svc/netsuite-v3/api/redoc"})]})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"NetSuite service (integration) is provided by Rossum.ai in the form of webhook. To start using NetSuite (either imports or exports), follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Extensions \u2192 My extensions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Create extension"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill the following fields:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Name: ",(0,i.jsx)(n.code,{children:"SB1 NetSuite: Import/Export"})]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger events: ",(0,i.jsx)(n.code,{children:"Manual"})," (later also ",(0,i.jsx)(n.code,{children:"Scheduled"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Extension type: ",(0,i.jsx)(n.code,{children:"Webhook"})]}),"\n",(0,i.jsx)(n.li,{children:"URL (see below)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create the webhook"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill ",(0,i.jsx)(n.code,{children:"Configuration"})," and ",(0,i.jsx)(n.code,{children:"Secrets"})," fields (see ",(0,i.jsx)(n.a,{href:"/docs/learn/netsuite/integration-configuration",children:"Integration Configuration"})," and ",(0,i.jsx)(n.a,{href:"/docs/learn/netsuite/import-configuration",children:"Import configuration"})," or ",(0,i.jsx)(n.a,{href:"/docs/learn/netsuite/export-configuration",children:"Export configuration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) Disable retries for export webhooks (see: ",(0,i.jsx)(n.a,{href:"/docs/learn/netsuite/considerations#webhook-retries-5-on-failed-requests",children:"Considerations & Limitations"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["(Optional) Set hook ",(0,i.jsx)(n.code,{children:"secrets_schema"})," value (see ",(0,i.jsx)(n.a,{href:"#setting-hook-secrets_schema-value",children:"below"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"import-endpoints",children:"Import endpoints"}),"\n",(0,i.jsx)(o.Ay,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/import",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import"}),"\n",(0,i.jsx)(n.h3,{id:"export-endpoints",children:"Export endpoints"}),"\n",(0,i.jsx)(o.Ay,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/export",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/export",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/export"}),"\n",(0,i.jsxs)(n.h3,{id:"setting-hook-secrets_schema-value",children:["Setting hook ",(0,i.jsx)(n.code,{children:"secrets_schema"})," value"]}),"\n",(0,i.jsx)(n.p,{children:"By default, all hooks have the following JSON schema of their secrets:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "object",\n  "additionalProperties": { "type": "string" }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Consider changing it to the following value to clearly outline what values are supported:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "object",\n  "properties": {\n    "consumer_key": { "type": "string", "minLength": 1 },\n    "consumer_secret": { "type": "string", "minLength": 1 },\n    "token_key": { "type": "string", "minLength": 1 },\n    "token_secret": { "type": "string", "minLength": 1 },\n    "rossum_username": { "type": "string", "minLength": 1 },\n    "rossum_password": { "type": "string", "minLength": 1 }\n  },\n  "additionalProperties": false\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Probably the easiest way to achieve this is updating the hook configuration using ",(0,i.jsxs)(n.a,{href:"/docs/learn/sandboxes/",children:[(0,i.jsx)(n.code,{children:"prd"})," tool"]})]}),"\n",(0,i.jsx)(n.h2,{id:"system-context-diagram",children:"System context diagram"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"NetSuite system context diagram",src:t(170).A+"",width:"4264",height:"1764"})}),"\n",(0,i.jsx)(n.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,i.jsx)(n.p,{children:"NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accounts: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/account/accounts.nl",children:(0,i.jsx)(n.code,{children:"/app/accounting/account/accounts.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Currencies: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/common/multicurrency/currencylist.nl",children:(0,i.jsx)(n.code,{children:"/app/common/multicurrency/currencylist.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["File Cabinet ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/common/media/mediaitemfolders.nl",children:(0,i.jsx)(n.code,{children:"/app/common/media/mediaitemfolders.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Items: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/common/item/itemlist.nl",children:(0,i.jsx)(n.code,{children:"/app/common/item/itemlist.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Purchase Orders: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd",children:(0,i.jsx)(n.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=PurchOrd"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Roles: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/setup/rolelist.nl",children:(0,i.jsx)(n.code,{children:"/app/setup/rolelist.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Subsidiaries: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/common/otherlists/subsidiarylist.nl",children:(0,i.jsx)(n.code,{children:"/app/common/otherlists/subsidiarylist.nl"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Vendor Bills: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill",children:(0,i.jsx)(n.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Vendor Credits: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred",children:(0,i.jsx)(n.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Vendors: ",(0,i.jsx)(n.a,{href:"https://system.netsuite.com/app/common/entity/vendorlist.nl",children:(0,i.jsx)(n.code,{children:"/app/common/entity/vendorlist.nl"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsx)(n.p,{children:"The following configuration options are available:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // Determines whether or not NetSuite should run the configuration asynchronously. Typically,\n  // imports are asynchronous (since they can take hours) and exports are synchronous (they should\n  // take minutes).\n  "run_async": true,\n\n  "netsuite_settings": {\n    // Case sensitive NetSuite account:\n    "account": "XXX_SB1",\n\n    // How many concurrent operations through API can run at the same time:\n    "concurrency_limit": 4,\n\n    "wsdl_url": "https://XXX-sb1.suitetalk.api.netsuite.com/wsdl/v2024_1_0/netsuite.wsdl",\n    "service_url": "https://XXX-sb1.suitetalk.api.netsuite.com/services/NetSuitePort_2024_1",\n    "service_binding_name": "{urn:platform_2024_1.webservices.netsuite.com}NetSuiteBinding"\n  },\n\n  // Configures imports (cannot be used together with `export_configs`):\n  "import_configs": [\n    {\n      // Name of the dataset in Master Data Hub:\n      "master_data_name": "NS_SB1_Currency_v1",\n\n      // Optional configurations of the asynchronous behavior (makes sense only when\n      // `run_async` is true):\n      "async_settings": {\n        "retries": 5,\n        "max_run_time_s": 36000\n      },\n\n      // The actual payload of NetSuite request (closely follows NetSuite API docs):\n      "payload": {\n        "method_name": "getAll",\n        "method_args": [\n          {\n            "_ns_type": "GetAllRecord",\n            "recordType": "currency"\n          }\n        ],\n\n        // Optional headers for NetSuite API request:\n        "method_headers": {\n          // NetSuite request-level search preferences (https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4170181850.html):\n          "searchPreferences": {\n            "pageSize": 100,\n            "bodyFieldsOnly": false,\n            "returnSearchColumns": false\n          },\n\n          // Other NetSuite request-level preferences (https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4170181850.html):\n          "preferences": {\n            "runServerSuiteScriptAndTriggerWorkflows": false\n            // \u2026\n          }\n        }\n      }\n    }\n    // \u2026\n  ],\n\n  // Configures exports (cannot be used together with `import_configs`):\n  "export_configs": [\n    // Same with `import_configs`\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},170:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/rossum-netsuite-system-context-diagram-f4b8c75eb17ac944a71986791353f670.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
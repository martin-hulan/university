"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[307],{3261:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>o});var i=n(4848),r=n(8453);const o=[];function a(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,i.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,i.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"US east coast"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,i.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,i.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(4848),r=n(8453),o=n(3261);const a={title:"Coupa: Export configuration",sidebar_position:3,sidebar_label:"Export configuration"},s="Export configuration",l={id:"learn/coupa/export-configuration",title:"Coupa: Export configuration",description:"Setup",source:"@site/docs/learn/coupa/export-configuration.md",sourceDirName:"learn/coupa",slug:"/learn/coupa/export-configuration",permalink:"/docs/learn/coupa/export-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/coupa/export-configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Coupa: Export configuration",sidebar_position:3,sidebar_label:"Export configuration"},sidebar:"learnSidebar",previous:{title:"Import configuration",permalink:"/docs/learn/coupa/import-configuration"},next:{title:"Workflow example",permalink:"/docs/learn/coupa/workflow-example"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Export endpoints",id:"export-endpoints",level:3},...o.RM,...o.RM,{value:"Configuration examples",id:"configuration-examples",level:2},{value:"Invoice &amp; Credit Note",id:"invoice--credit-note",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"export-configuration",children:"Export configuration"})}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Create webhook as described in ",(0,i.jsx)(t.a,{href:"/docs/learn/coupa/integration-setup#configuring-rossum",children:"Integration Setup"})," and use the right link from the table below (according the Rossum environment of configured account)"]}),"\n",(0,i.jsx)(t.h3,{id:"export-endpoints",children:"Export endpoints"}),"\n",(0,i.jsxs)(t.p,{children:["Coupa exports use ",(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/custom-format-templating",children:"Custom format templating"})," from ",(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/",children:"Export pipelines"})," and therefore doesn't have any Coupa-specific URL. Instead, use the ",(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/custom-format-templating",children:"Custom format templating"})," URLs from the table below:"]}),"\n",(0,i.jsx)(o.Ay,{eu1:"https://elis.custom-format-templating.rossum-ext.app/",eu2:"https://shared-eu2.custom-format-templating.rossum-ext.app/",us:"https://us.custom-format-templating.rossum-ext.app/",jp:"https://shared-jp.custom-format-templating.rossum-ext.app/"}),"\n",(0,i.jsxs)(t.p,{children:["This template then must be sent to the Coupa REST API which can be achieved using the ",(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/rest-api-export",children:"REST API export"}),' extension (also part of the generic "Export pipelines" mechanism):']}),"\n",(0,i.jsx)(o.Ay,{eu1:"https://elis.rest-api-export.rossum-ext.app/",eu2:"https://shared-eu2.rest-api-export.rossum-ext.app/",us:"https://us.rest-api-export.rossum-ext.app/",jp:"https://shared-jp.rest-api-export.rossum-ext.app/"}),"\n",(0,i.jsx)(t.h2,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,i.jsx)(t.h3,{id:"invoice--credit-note",children:"Invoice & Credit Note"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "export_configs": [\n    {\n      "content_encoding": "utf-8",\n      "export_reference_key": "coupa_invoice_draft",\n      "file_content_template_multiline": [\n        "{",\n        "  \\"currency\\": {",\n        "   \\"code\\":\\"{{ field.currency }}\\"",\n        "  },",\n        "  \\"supplier\\": {",\n        "   \\"number\\":\\"{{ field.sender_match }}\\"",\n        "  },",\n        "  {% if field.document_type == \\"credit_note\\" %}",\n        "  \\"document-type\\": \\"Credit Note\\",",\n        "  {% else %}",\n        "  \\"document-type\\": \\"Invoice\\",",\n        "  {% endif %}",\n        "  \\"taggings\\": [",\n        "   {",\n        "     \\"tag\\": {",\n        "       \\"name\\":\\"{{ field.rossum_tag }}\\"",\n        "     }",\n        "   }",\n        "  ],",\n        "  \\"gross-total\\": \\"{{ field.amount_total | default(0,true) }}\\",",\n        "  \\"account-type\\": {",\n        "   \\"id\\":\\"{{ field.recipient_export }}\\"",\n        "  },",\n        "  \\"invoice-date\\": \\"{{ field.date_issue }}\\",",\n        "  \\"invoice-number\\": \\"{{ field.document_id_manual }}\\",",\n        "  {% if field.payment_terms_match != \\"\\" %}",\n        "     \\"payment-term\\": {",\n        "       \\"id\\":\\"{{ field.payment_terms_match }}\\"",\n        "     },",\n        "  {% endif %}",\n        "  \\"total-with-taxes\\": \\"{{ field.amount_total | default(0,true) }}\\",",\n        "  \\"line-level-taxation\\": true,",\n        "  \\"original-invoice-date\\": \\"{{ field.original_date_issue }}\\",",\n        "  \\"original-invoice-number\\": \\"{{ field.original_document_id }}\\",",\n        "  {% if field.document_type == \\"credit_note\\" %}",\n        "   \\"is-credit-note\\": \\"true\\",",\n        "  {% else %}",\n        "   \\"is-credit-note\\": \\"false\\",",\n        "  {% endif %}",\n        "  \\"invoice-lines\\": [",\n        "  {% for item in field.line_items %}{",\n        "   \\"uom\\": {",\n        "     \\"code\\":\\"{{ item.item_uom_export }}\\"",\n        "   },",\n        "   \\"price\\": {{ item.item_price_export | default(0,true) }},",\n        "   \\"currency\\": {",\n        "     \\"code\\":\\"{{ field.currency }}\\"",\n        "   },",\n        "   \\"type\\": \\"InvoiceQuantityLine\\",",\n        "   \\"quantity\\": \\"{{ item.item_quantity_export }}\\",",\n        "   \\"po-number\\": \\"{{ item.item_order_id_calculated }}\\",",\n        "   \\"description\\": \\"{{ item.item_description|e | replace(\'\\n\',\' \') }}\\",",\n        "   \\"order-line-num\\": \\"{{ item.item_po_line_number_match }}\\",",\n        "   \\"order-header-num\\": \\"{{ item.item_order_id_calculated }}\\",",\n        "   \\"tax-lines\\": {",\n        "     \\"tax-line\\": {",\n        "       \\"type\\":\\"TaxLine\\",",\n        "       {% if item.item_tax_code_match != \\"\\" %}",\n        "         \\"tax-code\\": {",\n        "           \\"id\\":\\"{{ item.item_tax_code_match }}\\"",\n        "         },",\n        "       {% endif %}",\n        "       \\"amount\\":\\"{{ item.item_tax_calculated }}\\",",\n        "       \\"rate\\":\\"{{ item.item_rate_calculated }}\\"",\n        "     }",\n        "   }",\n        "  }{% if not loop.last %},{% endif %}",\n        "  {% else %}",\n        "  {",\n        "   \\"uom\\": {",\n        "     \\"code\\":\\"{{ field.uom_export }}\\"",\n        "   },",\n        "   \\"price\\": {{ field.price_export | default(0,true) }},",\n        "   \\"currency\\": {",\n        "     \\"code\\":\\"{{ field.currency }}\\"",\n        "   },",\n        "   \\"type\\": \\"InvoiceQuantityLine\\",",\n        "   \\"quantity\\": \\"{{ field.quantity_export }}\\",",\n        "   \\"po-number\\": \\"{{ field.order_id_calculated }}\\",",\n        "   \\"description\\": \\"{{ field.description_export|e | replace(\'\\n\',\' \') }}\\",",\n        "   \\"order-line-num\\": \\"{{ field.po_line_number_match }}\\",",\n        "   \\"order-header-num\\": \\"{{ field.order_id_calculated }}\\",",\n        "   \\"tax-lines\\": {",\n        "     \\"tax-line\\": {",\n        "       \\"type\\":\\"TaxLine\\",",\n        "       {% if field.tax_code_match != \\"\\" %}",\n        "         \\"tax-code\\": {",\n        "           \\"id\\":\\"{{ field.item_tax_code_match }}\\"",\n        "         },",\n        "       {% endif %}",\n        "       \\"amount\\":\\"{{ field.amount_total_tax_calculated }}\\",",\n        "       \\"rate\\":\\"{{ field.tax_rate_calculated }}\\"",\n        "     }",\n        "   }",\n        "   }",\n        "  {% endfor %}]",\n        "}"\n      ]\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(6540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
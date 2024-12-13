"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[58],{3261:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var i=t(4848),a=t(8453);const r=[];function s(e){const n={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Environment"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"EU1 Ireland"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.eu1?(0,i.jsx)(n.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"EU2 Frankfurt"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.eu2?(0,i.jsx)(n.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"US east coast"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.us?(0,i.jsx)(n.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Japan Tokyo"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:e.jp?(0,i.jsx)(n.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"learn/coupa/import-configuration","title":"Coupa: Import configuration","description":"Setup","source":"@site/docs/learn/coupa/import-configuration.md","sourceDirName":"learn/coupa","slug":"/learn/coupa/import-configuration","permalink":"/docs/learn/coupa/import-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/coupa/import-configuration.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Coupa: Import configuration","sidebar_position":2,"sidebar_label":"Import configuration"},"sidebar":"learnSidebar","previous":{"title":"Integration setup","permalink":"/docs/learn/coupa/integration-setup"},"next":{"title":"Export configuration","permalink":"/docs/learn/coupa/export-configuration"}}');var a=t(4848),r=t(8453),s=t(3261);const o={title:"Coupa: Import configuration",sidebar_position:2,sidebar_label:"Import configuration"},d="Import configuration",c={},l=[{value:"Setup",id:"setup",level:2},{value:"Import endpoints",id:"import-endpoints",level:3},...s.RM,{value:"Configuration examples",id:"configuration-examples",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Account types",id:"account-types",level:3},{value:"Currencies",id:"currencies",level:3},{value:"Invoices",id:"invoices",level:3},{value:"Legal entities",id:"legal-entities",level:3},{value:"Lookup values",id:"lookup-values",level:3},{value:"Payment Terms",id:"payment-terms",level:3},{value:"Purchase orders",id:"purchase-orders",level:3},{value:"Purchase order - Line items",id:"purchase-order---line-items",level:3},{value:"Suppliers",id:"suppliers",level:3},{value:"Supplier remit-to addresses",id:"supplier-remit-to-addresses",level:3},{value:"Supplier information",id:"supplier-information",level:3},{value:"Tax Codes",id:"tax-codes",level:3},{value:"Tax Registrations",id:"tax-registrations",level:3},{value:"Units of measurement",id:"units-of-measurement",level:3}];function _(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"import-configuration",children:"Import configuration"})}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsxs)(n.p,{children:["Create webhook as described in ",(0,a.jsx)(n.a,{href:"/docs/learn/coupa/integration-setup#configuring-rossum",children:"Integration Setup"})," and use the right link from the table below (according the Rossum environment of configured account)"]}),"\n",(0,a.jsx)(n.h3,{id:"import-endpoints",children:"Import endpoints"}),"\n",(0,a.jsx)(s.Ay,{eu1:"https://elis.rossum.ai/svc/scheduled-imports/api/coupa/v1/import",eu2:"https://shared-eu2.rossum.app/svc/scheduled-imports/api/coupa/v1/import",us:"https://us.app.rossum.ai/svc/scheduled-imports/api/coupa/v1/import"}),"\n",(0,a.jsx)(n.h2,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,a.jsx)(n.h3,{id:"accounts",children:"Accounts"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/accounts-api-(accounts)",children:"Accounts API (/accounts)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read"\n  },\n  "import_config": {\n    "query": {\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/accounts",\n    "dataset_name": "COUPA_DEV_accounts_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"account-types",children:"Account types"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/_dita_/en-us/documentation/plat/integ/coupa_core_api/topics/account_types_api_account_types.dita",children:"Account Types API (/account_types)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "name",\n        "active",\n        "legal_entity_name",\n        "dynamic_flag",\n        {\n          "currency": ["id", "code", "decimals"]\n        },\n        {\n          "primary_contact": [\n            "id",\n            "created_at",\n            "updated_at",\n            "email",\n            "name_prefix",\n            "name_suffix",\n            "name_additional",\n            "name_given",\n            "name_family",\n            "name_fullname",\n            "notes",\n            "active",\n            "purposes"\n          ]\n        },\n        {\n          "primary_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            },\n            {\n              "vat_country": ["id", "code", "name"]\n            }\n          ]\n        }\n      ],\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/account_types",\n    "dataset_name": "COUPA_DEV_account_types_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"currencies",children:"Currencies"}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/currencies-api-(currencies)",children:"Currencies API (/currencies)"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": ["id", "code", "decimals"]\n    },\n    "method": "replace",\n    "endpoint": "api/currencies",\n    "dataset_name": "COUPA_DEV_currencies_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"invoices",children:"Invoices"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/transactional-resources/invoices-api-(invoices)",children:"Invoices API (/invoices)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026.coupacloud.com/",\n    "client_scope": "core.invoice.read"\n  },\n  "import_config": {\n    "query": {\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/invoices",\n    "dataset_name": "COUPA_DEV_invoices_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"legal-entities",children:"Legal entities"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/transactional-resources/expenses-api-(expense_reports)/legal-entity-api",children:"Legal Entity API"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.legal_entity.read"\n  },\n  "import_config": {\n    "query": {\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/legal_entities",\n    "dataset_name": "COUPA_DEV_legal_entities_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"lookup-values",children:"Lookup values"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/lookup-values-api-(lookup_values)",children:"Lookup Values API (/lookup_values)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.p,{children:"For invoices that are not tied to a purchase order (non-PO-backed), Coupa requires default lookup values to ensure the correct categorization and processing of the invoice. These values help populate essential fields that would otherwise be filled by the purchase order, ensuring the invoice is successfully imported and can proceed through the approval and payment workflows without issues."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026.coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "external-ref-num",\n        "external-ref-code",\n        "active",\n        {\n          "parent": [\n            "id",\n            "name",\n            "active",\n            {\n              "custom_fields": {}\n            },\n            {\n              "parent": [\n                "id",\n                "name",\n                "active",\n                {\n                  "custom_fields": {}\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "lookup": ["id", "name", "active"]\n        },\n        {\n          "custom_fields": {}\n        }\n      ],\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/lookup_values",\n    "dataset_name": "COUPA_DEV_lookup_values_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"payment-terms",children:"Payment Terms"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/payment-terms-api-(payment_terms)",children:"Payment Terms API (/payment_terms)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/payment_terms",\n    "dataset_name": "COUPA_DEV_payment_terms_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"purchase-orders",children:"Purchase orders"}),"\n",(0,a.jsx)(n.p,{children:"With this import configuration, you will receive a final collection that includes all Purchase Orders (POs), along with an array of their corresponding PO line items nested within each order. This structure allows for easy access to both the POs and their specific line item details."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.purchase_order.read"\n  },\n  "import_config": {\n    "query": {\n      "dir": "desc",\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "po_number",\n        "status",\n        "version",\n        "payment_method",\n        "ship_to_attention",\n        {\n          "ship_to_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        },\n        {\n          "supplier": ["id", "name", "display_name", "number"]\n        },\n        {\n          "order_lines": [\n            "id",\n            "created_at",\n            "updated_at",\n            "accounting_total",\n            {\n              "accounting_total_currency": ["id", "code", "decimals"]\n            },\n            {\n              "custom_fields": ["start_date", "end_date", "payment_method"]\n            },\n            "description",\n            "line_num",\n            "order_header_id",\n            "order_header_number",\n            "price",\n            "quantity",\n            "source_part_num",\n            "status",\n            "sub_line_num",\n            "total",\n            "type",\n            "version",\n            "supplier_order_number",\n            {\n              "account": [\n                "id",\n                "created_at",\n                "updated_at",\n                "name",\n                "code",\n                "active",\n                "account_type_id",\n                "segment_1",\n                "segment_2",\n                "segment_3",\n                "segment_4",\n                "segment_5",\n                "segment_6",\n                "segment_7",\n                "segment_8",\n                "segment_9",\n                "segment_10",\n                "segment_11",\n                "segment_12",\n                "segment_13",\n                "segment_14",\n                "segment_15",\n                "segment_16",\n                "segment_17",\n                "segment_18",\n                "segment_19",\n                "segment_20"\n              ]\n            },\n            {\n              "currency": ["id", "code", "decimals"]\n            },\n            {\n              "supplier": ["id", "name", "display_name", "number"]\n            },\n            {\n              "uom": [\n                "id",\n                "created_at",\n                "updated_at",\n                "code",\n                "name",\n                "allowable_precision",\n                "active"\n              ]\n            }\n          ]\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/purchase_orders",\n    "dataset_name": "COUPA_DEV_purchase_orders_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"purchase-order---line-items",children:"Purchase order - Line items"}),"\n",(0,a.jsx)(n.p,{children:"With this import configuration, you will receive a final collection that includes all PO line items, along with basic information about the associated Purchase Order for each line item."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.purchase_order.read"\n  },\n  "import_config": {\n    "query": {\n      "dir": "desc",\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "accounting_total",\n        {\n          "accounting_total_currency": ["id", "code", "decimals"]\n        },\n        {\n          "custom_fields": ["start_date", "end_date", "payment_method"]\n        },\n        "description",\n        "line_num",\n        "order_header_id",\n        "order_header_number",\n        "price",\n        "quantity",\n        "source_part_num",\n        "status",\n        "sub_line_num",\n        "total",\n        "type",\n        "version",\n        "supplier_order_number",\n        {\n          "account": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "code",\n            "active",\n            "account_type_id",\n            "segment_1",\n            "segment_2",\n            "segment_3",\n            "segment_4",\n            "segment_5",\n            "segment_6",\n            "segment_7",\n            "segment_8",\n            "segment_9",\n            "segment_10",\n            "segment_11",\n            "segment_12",\n            "segment_13",\n            "segment_14",\n            "segment_15",\n            "segment_16",\n            "segment_17",\n            "segment_18",\n            "segment_19",\n            "segment_20"\n          ]\n        },\n        {\n          "currency": ["id", "code", "decimals"]\n        },\n        {\n          "supplier": ["id", "name", "display_name", "number"]\n        },\n        {\n          "uom": ["id", "created_at", "updated_at", "code", "name", "allowable_precision", "active"]\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/purchase_order_lines",\n    "dataset_name": "COUPA_DEV_purchase_order_lines_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"suppliers",children:"Suppliers"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/suppliers-api-(suppliers)",children:"Suppliers API (/suppliers)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["Do not fetch ",(0,a.jsx)(n.code,{children:"remit_to_addresses"})," directly on the supplier object. Update to the remit-to addresses in Coupa would not re-trigger the differential import and your supplier data would be inconsistent. Instead, use ",(0,a.jsx)(n.a,{href:"#supplier-remit-to-addresses",children:"Supplier remit-to addresses"}),"."]})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "name",\n        "display_name",\n        "number",\n        "status",\n        "po_email",\n        "account_number",\n        "tax_id",\n        {\n          "primary_contact": [\n            "id",\n            "created_at",\n            "updated_at",\n            "email",\n            "name_prefix",\n            "name_suffix",\n            "name_additional",\n            "name_given",\n            "name_family",\n            "name_fullname",\n            "notes",\n            "active",\n            "purposes"\n          ]\n        },\n        {\n          "primary_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            },\n            {\n              "vat_country": ["id", "code", "name"]\n            }\n          ]\n        },\n        {\n          "remit_to_addresses": [\n            "id",\n            "created_at",\n            "updated_at",\n            "remit_to_code",\n            "name",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "active",\n            "vat_number",\n            "local_tax_number",\n            "external_src_ref",\n            "external_src_name",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        }\n      ],\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/suppliers",\n    "dataset_name": "COUPA_DEV_suppliers_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"supplier-remit-to-addresses",children:"Supplier remit-to addresses"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/suppliers-api-(suppliers)",children:"Suppliers API (/suppliers)"})]}),"\n",(0,a.jsxs)(n.p,{children:["Use this configuration to import all supplier remit-to addresses. Note that Coupa (currently) doesn't have any API endpoint to fetch all the remit-to addresses directly. Therefore, we fetch all suppliers and get the remit to addresses from there. It is important to do it in a separate import job (not together with the supplier data) to make sure that ",(0,a.jsx)(n.code,{children:"last_modified_date"})," works correctly."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "name",\n        "display_name",\n        {\n          "remit_to_addresses": [\n            "id",\n            "created_at",\n            "updated_at",\n            "remit_to_code",\n            "name",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "active",\n            "vat_number",\n            "local_tax_number",\n            "external_src_ref",\n            "external_src_name",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        }\n      ],\n      // highlight-start\n      "order_by": "created_at",\n      "remit-to-addresses[updated-at][gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/suppliers",\n    "dataset_name": "COUPA_TEST_suppliers_remit_to_addresses_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"supplier-information",children:"Supplier information"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "supplier_id",\n        "name",\n        "display_name",\n        "supplier_number",\n        "status",\n        "industry",\n        "inco_terms",\n        "minority_indicator",\n        "minority_type_id",\n        "tax_region",\n        "tax_classification",\n        "federal_tax_num",\n        "social_security_number",\n        "duns_number",\n        "tax_exempt_other_explanation",\n        "income_type",\n        "fed_reportable",\n        "intl_tax_num",\n        "intl_tax_classification",\n        "intl_other_explanation",\n        "backend_system_invoicing",\n        "backend_system_catalog",\n        "supplier_region",\n        "payment_terms_id",\n        "payment_term_id",\n        "govt_agency_interaction_indicator",\n        "govt_agency_interaction",\n        "organization_type",\n        "policy_for_bribery_corruption_indicator",\n        "policy_for_bribery_corruption",\n        "govt_allegation_fraud_bribery_indicator",\n        "govt_allegation_fraud_bribery",\n        "third_party_interaction_indicator",\n        "third_party_interaction",\n        "goods_services_provided",\n        "pay_group",\n        "invoice_amount_limit",\n        "hold_payment_indicator",\n        "hold_payment",\n        "separate_remit_to",\n        "comment_source",\n        "comment",\n        "last_exported_at",\n        "logo_file_name",\n        "logo_content_type",\n        "logo_file_size",\n        "logo_updated_at",\n        "website",\n        "allow_cxml_invoicing",\n        "hold_invoices_for_ap_review",\n        "send_invoices_to_approvals",\n        "allow_inv_no_backing_doc_from_connect",\n        "allow_inv_unbacked_lines_from_connect",\n        "commodity_id",\n        "invoice_matching_level",\n        "shipping_term_id",\n        "tax_code_id",\n        "savings_pct",\n        "allow_inv_from_connect",\n        "allow_inv_choose_billing_account",\n        "invoice_inbound_emails",\n        "default_invoice_email",\n        "inbound_invoice_domain",\n        "duplicate_exists",\n        "estimated_spend_amount",\n        "currency_id",\n        "user_id",\n        "one_time_supplier",\n        "scope_three_emissions",\n        "po_email",\n        "po_method",\n        "po_change_method",\n        "buyer_hold",\n        "cxml_url",\n        "cxml_domain",\n        "cxml_identity",\n        "cxml_supplier_domain",\n        "cxml_supplier_identity",\n        "cxml_secret",\n        "cxml_protocol",\n        "cxml_ssl_version",\n        "disable_cert_verify",\n        {\n          "custom_fields": [\n            "primary_subsidiary",\n            "subs_secondary",\n            "vendor_region",\n            "payment_file_format",\n            "company_registration_number",\n            "eligibility_1099",\n            "critical_vs_not_critical_vendor",\n            "permanent_account_number_pan",\n            "msmeudyam_registration_number",\n            "credit_card_vendor",\n            "credit_card",\n            "vendor_require_risk_questionnaire",\n            "risk_review",\n            "expedited_vendor",\n            "msme_registration_certificate",\n            "additional_currency",\n            "payment_remittance_email",\n            "wil_be_sued_for_po__backed_purchases"\n          ]\n        },\n        {\n          "supplier_information_addresses": [\n            "intermediary_bank_name",\n            "bank_address",\n            "bank_city",\n            "bank_state_region",\n            "bank_postal_code",\n            "name_on_bank_account",\n            "bank_name",\n            "bank_account_number",\n            "bank_routing_number",\n            "wire_routing_number",\n            "international_bank_account_number",\n            "iban_number",\n            "sort_code",\n            "swift_code",\n            "bsb_number",\n            "bic",\n            "bank_code",\n            "ifsc",\n            "transit_number_and_institution_number",\n            "bic_routing_code",\n            "payment_method_item",\n            "active",\n            "csp_rta_id",\n            "email",\n            "virtual_card_email"\n          ]\n        }\n      ],\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/supplier_information",\n    "dataset_name": "COUPA_DEV_supplier_information_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"tax-codes",children:"Tax Codes"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/tax-registrations-api-(tax_registrations)/tax-code-api",children:"Tax Code API"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      // highlight-start\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/tax_codes",\n    "dataset_name": "tax_codes",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"tax-registrations",children:"Tax Registrations"}),"\n",(0,a.jsxs)(n.p,{children:["See: ",(0,a.jsx)(n.a,{href:"https://compass.coupa.com/en-us/products/product-documentation/integration-technical-documentation/the-coupa-core-api/resources/reference-data-resources/tax-registrations-api-(tax_registrations)",children:"Tax Registrations API (/tax_registrations)"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Query attributes necessary for differential update are highlighted."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.invoice.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "number",\n        "owner-id",\n        "owner-type",\n        "active",\n        "local",\n        {\n          "country": ["id", "code", "name"]\n        }\n      ],\n      // highlight-start\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n      // highlight-end\n    },\n    // highlight-start\n    "method": "update",\n    "id_keys": ["id"],\n    // highlight-end\n    "endpoint": "api/tax_registrations",\n    "dataset_name": "COUPA_DEV_tax_registrations_v1",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"units-of-measurement",children:"Units of measurement"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026.coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "code",\n        "allowable-precession",\n        "active",\n        "updated-at",\n        "created-at"\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/uoms",\n    "dataset_name": "COUPA_DEV_uoms_v1",\n    "records_per_request": 50\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
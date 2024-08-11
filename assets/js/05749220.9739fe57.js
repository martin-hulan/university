"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[365],{695:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>_,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=t(5893),o=t(1151);const a={title:"Workday: Export configuration",sidebar_label:"Export configuration",sidebar_position:2},_="Export configuration",r={id:"learn/workday/export-configuration",title:"Workday: Export configuration",description:"PO-backed invoice",source:"@site/docs/learn/workday/export-configuration.md",sourceDirName:"learn/workday",slug:"/learn/workday/export-configuration",permalink:"/docs/learn/workday/export-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/workday/export-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Workday: Export configuration",sidebar_label:"Export configuration",sidebar_position:2},sidebar:"learnSidebar",previous:{title:"Import configuration",permalink:"/docs/learn/workday/import-configuration"}},c={},p=[{value:"PO-backed invoice",id:"po-backed-invoice",level:2},{value:"Non-PO-backed invoices",id:"non-po-backed-invoices",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"export-configuration",children:"Export configuration"})}),"\n",(0,i.jsx)(e.h2,{id:"po-backed-invoice",children:"PO-backed invoice"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "wsdl": {\n        "domain": "wd3-impl-services1.workday.com",\n        "tenant": "\u2026",\n        "api_version": "v39.1"\n      },\n      "request": {\n        "mapping": {\n          "Add_Only": true,\n          "Supplier_Invoice_Data": {\n            "Memo": "@{memo}",\n            "Submit": true,\n            "Invoice_Date": "@{date_issue}",\n            "Company_Reference": {\n              "ID": [\n                {\n                  "type": "Organization_Reference_ID",\n                  "_value_1": "@{entity_wd}"\n                }\n              ]\n            },\n            "Currency_Reference": {\n              "ID": [\n                {\n                  "type": "Currency_ID",\n                  "_value_1": "@{currency}"\n                }\n              ]\n            },\n            "External_PO_Number": "@{order_id}",\n            "Supplier_Reference": {\n              "ID": [\n                {\n                  "type": "Supplier_ID",\n                  "_value_1": "@{supplier_wd}"\n                }\n              ]\n            },\n            "Control_Amount_Total": "@{amount_total}",\n            "Suppliers_Invoice_Number": "@{document_id}",\n            "Invoice_Line_Replacement_Data": {\n              "$FOR_EACH_SCHEMA_ID$": {\n                "mapping": {\n                  "Quantity": "@{item_quantity}",\n                  "Unit_Cost": "@{item_amount_base}",\n                  "Line_Order": "10000001",\n                  "Extended_Amount": "@{item_total_base}",\n                  "Item_Description": "@{item_description}",\n                  "Purchase_Order_Line_Reference": {\n                    "ID": [\n                      {\n                        "type": "Line_Number",\n                        "_value_1": "@{item_order_line_nr_wd}",\n                        "parent_id": "@{item_document_number_po_wd}",\n                        "parent_type": "Document_Number"\n                      }\n                    ]\n                  }\n                },\n                "schema_id": "line_item"\n              }\n            },\n            "Supplier_Connection_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Supplier_Connection_ID",\n                      "_value_1": "@{account_num}"\n                    }\n                  ]\n                },\n                "schema_id": "account_num",\n                "fallback_mapping": {}\n              }\n            },\n            "Statutory_Invoice_Type_Reference": {\n              "ID": [\n                {\n                  "type": "Invoice_Type_ID",\n                  "_value_1": "@{invoice_type_wd}"\n                }\n              ]\n            }\n          }\n        },\n        "service": "Resource_Management",\n        "operation": "Submit_Supplier_Invoice"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"non-po-backed-invoices",children:"Non-PO-backed invoices"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "debug": true,\n  "configurations": [\n    {\n      "wsdl": {\n        "domain": "wd3-impl-services1.workday.com",\n        "tenant": "\u2026",\n        "api_version": "v39.1"\n      },\n      "request": {\n        "mapping": {\n          "Add_Only": true,\n          "Supplier_Invoice_Data": {\n            "Memo": "@{memo}",\n            "Submit": true,\n            "Tax_Amount": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": "@{amount_total_tax}",\n                "schema_id": "amount_total_tax"\n              }\n            },\n            "Invoice_Date": "@{date_issue}",\n            "Company_Reference": {\n              "ID": [\n                {\n                  "type": "Organization_Reference_ID",\n                  "_value_1": "@{entity_wd}"\n                }\n              ]\n            },\n            "Currency_Reference": {\n              "ID": [\n                {\n                  "type": "Currency_ID",\n                  "_value_1": "@{currency}"\n                }\n              ]\n            },\n            "Supplier_Reference": {\n              "ID": [\n                {\n                  "type": "Supplier_ID",\n                  "_value_1": "@{supplier_wd}"\n                }\n              ]\n            },\n            "Control_Amount_Total": "@{amount_total}",\n            "Suppliers_Invoice_Number": "@{document_id}",\n            "Default_Tax_Option_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Tax_Option_ID",\n                      "_value_1": "@{tax_option_id}"\n                    }\n                  ]\n                },\n                "schema_id": "tax_option_id",\n                "fallback_mapping": {}\n              }\n            },\n            "Invoice_Line_Replacement_Data": {\n              "$FOR_EACH_SCHEMA_ID$": {\n                "mapping": {\n                  "Line_Order": "10000001",\n                  "Extended_Amount": "@{item_total_base}",\n                  "Item_Description": "@{item_description}",\n                  "Worktags_Reference": [\n                    {\n                      "ID": [\n                        {\n                          "type": "Cost_Center_Reference_ID",\n                          "_value_1": "@{item_cost_center_wd}"\n                        }\n                      ]\n                    },\n                    {\n                      "$IF_SCHEMA_ID$": {\n                        "mapping": {\n                          "ID": [\n                            {\n                              "type": "Project_ID",\n                              "_value_1": "@{item_project_wd}"\n                            }\n                          ]\n                        },\n                        "schema_id": "item_project_wd",\n                        "fallback_mapping": {}\n                      }\n                    }\n                  ],\n                  "Purchase_Item_Reference": {\n                    "ID": [\n                      {\n                        "type": "Purchase_Item_ID",\n                        "_value_1": "@{item_purchase_item_wd}"\n                      }\n                    ]\n                  },\n                  "Tax_Applicability_Reference": {\n                    "$IF_SCHEMA_ID$": {\n                      "mapping": {\n                        "ID": [\n                          {\n                            "type": "Tax_Applicability_ID",\n                            "_value_1": "@{item_tax_applicability_id}"\n                          }\n                        ]\n                      },\n                      "schema_id": "item_tax_applicability_id",\n                      "fallback_mapping": {}\n                    }\n                  }\n                },\n                "schema_id": "line_item"\n              }\n            },\n            "Supplier_Connection_Reference": {\n              "$IF_SCHEMA_ID$": {\n                "mapping": {\n                  "ID": [\n                    {\n                      "type": "Supplier_Connection_ID",\n                      "_value_1": "@{account_num}"\n                    }\n                  ]\n                },\n                "schema_id": "account_num",\n                "fallback_mapping": {}\n              }\n            },\n            "Statutory_Invoice_Type_Reference": {\n              "ID": [\n                {\n                  "type": "Invoice_Type_ID",\n                  "_value_1": "@{invoice_type_wd}"\n                }\n              ]\n            }\n          }\n        },\n        "service": "Resource_Management",\n        "operation": "Submit_Supplier_Invoice"\n      }\n    }\n  ]\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>_});var i=t(7294);const o={},a=i.createContext(o);function _(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:_(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);
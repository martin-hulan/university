"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[1779],{4904:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(5893),t=n(1151);const i={title:"Coupa: Export configurations",sidebar_position:2,sidebar_label:"Export configurations"},a="Export configurations (API)",c={id:"extensions/coupa/export-configuration",title:"Coupa: Export configurations",description:"Invoice",source:"@site/docs/extensions/coupa/export-configuration.md",sourceDirName:"extensions/coupa",slug:"/extensions/coupa/export-configuration",permalink:"/docs/extensions/coupa/export-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/coupa/export-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Coupa: Export configurations",sidebar_position:2,sidebar_label:"Export configurations"},sidebar:"extensionsSidebar",previous:{title:"Import configurations",permalink:"/docs/extensions/coupa/import-configuration"},next:{title:"Custom format templating",permalink:"/docs/extensions/custom-format-templating/"}},s={},p=[{value:"Invoice",id:"invoice",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"export-configurations-api",children:"Export configurations (API)"}),"\n",(0,o.jsx)(r.h2,{id:"invoice",children:"Invoice"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'{\n  "connection_info": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read, core.accounting.write, core.approval.configuration.read, core.approval.configuration.write, core.approval.read, core.approval.write, core.budget.read, core.budget.write, core.business_entity.read, core.business_entity.write, core.catalog.read, core.catalog.write, core.comment.read, core.comment.write, core.common.read, core.common.write, core.contract.read, core.contract.write, core.contracts_template.read, core.contracts_template.write, core.easy_form_response.approval.write, core.easy_form_response.read, core.easy_form_response.write, core.easy_form.read, core.easy_form.write, core.expense.read, core.expense.secure.read, core.expense.secure.write, core.expense.write, core.financial_counterparty.read, core.financial_counterparty.write, core.global_navigation.read, core.integration.read, core.integration.write, core.inventory.adjustment.read, core.inventory.adjustment.write, core.inventory.asn.read, core.inventory.asn.write, core.inventory.balance.read, core.inventory.common.read, core.inventory.common.write, core.inventory.consumption.read, core.inventory.consumption.write, core.inventory.cycle_counts.read, core.inventory.cycle_counts.write, core.inventory.pick_list.read, core.inventory.pick_list.write, core.inventory.receiving.read, core.inventory.receiving.write, core.inventory.return_to_supplier.read, core.inventory.return_to_supplier.write, core.inventory.transaction.read, core.inventory.transfer.read, core.inventory.transfer.write, core.invoice.approval.bypass, core.invoice.approval.write, core.invoice.assignment.read, core.invoice.assignment.write, core.invoice.create, core.invoice.delete, core.invoice.read, core.invoice.write, core.item.read, core.item.write, core.legal_entity.read, core.legal_entity.write, core.notifications_summary.read, core.notifications_summary.write, core.object_translations.read, core.object_translations.write, core.order_header_confirmations.read, core.order_header_confirmations.write, core.order_pad.read, core.order_pad.write, core.pay.charges.read, core.pay.charges.write, core.pay.payment_accounts.read, core.pay.payments.read, core.pay.payments.write, core.pay.statements.read, core.pay.statements.write, core.pay.virtual_cards.read, core.pay.virtual_cards.write, core.payables.allocations.read, core.payables.allocations.write, core.payables.expense.read, core.payables.expense.write, core.payables.external.read, core.payables.external.write, core.payables.invoice.read, core.payables.invoice.write, core.payables.order.read, core.payables.order.write, core.project.read, core.project.write, core.punchout_site.read, core.punchout_site.write, core.purchase_order_change.read, core.purchase_order_change.write, core.purchase_order.read, core.purchase_order.write, core.requisition.assignment.read, core.requisition.assignment.write, core.requisition.read, core.requisition.write, core.sourcing.pending_supplier.read, core.sourcing.pending_supplier.write, core.sourcing.read, core.sourcing.response.award.write, core.sourcing.response.read, core.sourcing.response.write, core.sourcing.write, core.supplier_information_sites.read, core.supplier_information_sites.write, core.supplier_information_tax_registrations.delete, core.supplier_information_tax_registrations.read, core.supplier_information_tax_registrations.write, core.supplier_sharing_settings.read, core.supplier_sharing_settings.write, core.supplier_sites.read, core.supplier_sites.write, core.supplier.read, core.supplier.risk_aware.read, core.supplier.risk_aware.write, core.supplier.write, core.translation.read, core.translation.write, core.uom.read, core.uom.write, core.user_group.read, core.user_group.write, core.user_recent_activity.read, core.user.read, core.user.write, email, login, offline_access, openid, profile"\n  },\n  "payload_template": {\n    "status": "draft",\n    "currency": {\n      "code": "@{currency}"\n    },\n    "supplier": {\n      "number": "@{supplier_number_master}"\n    },\n    "tax-lines": {\n      "$IF_SCHEMA_ID$": {\n        "mapping": {\n          "tax-line": [\n            {\n              "type": "TaxLine",\n              "amount": "@{amount_total_tax}"\n            }\n          ]\n        },\n        "schema_id": "amount_total_tax"\n      }\n    },\n    "gross-total": "@{amount_total_calc}",\n    "invoice-date": "@{date_issue}",\n    "requested-by": {\n      "login": "testuser"\n    },\n    "invoice-lines": {\n      "$FOR_EACH_SCHEMA_ID$": {\n        "mapping": {\n          "uom": {\n            "code": "@{item_uom}"\n          },\n          "type": "InvoiceQuantityLine",\n          "price": {\n            "$DATAPOINT_VALUE$": {\n              "schema_id": "item_amount"\n            }\n          },\n          "total": {\n            "$DATAPOINT_VALUE$": {\n              "schema_id": "item_amount_total_calc"\n            }\n          },\n          "currency": {\n            "code": "@{currency}"\n          },\n          "line-num": 1,\n          "quantity": {\n            "$DATAPOINT_VALUE$": {\n              "schema_id": "item_quantity_calc"\n            }\n          },\n          "po-number": "",\n          "tax-lines": {\n            "$IF_SCHEMA_ID$": {\n              "mapping": {\n                "tax-line": [\n                  {\n                    "type": "TaxLine",\n                    "amount": "@{item_tax}"\n                  }\n                ]\n              },\n              "schema_id": "item_rate"\n            }\n          },\n          "description": {\n            "$DATAPOINT_VALUE$": {\n              "schema_id": "item_description"\n            }\n          },\n          "order-line-num": "",\n          "accounting-total": 1,\n          "order-header-num": ""\n        },\n        "schema_id": "line_item",\n        "fallback_mapping": [\n          {\n            "uom": {\n              "code": "EA"\n            },\n            "type": "InvoiceQuantityLine",\n            "price": 1,\n            "total": 1,\n            "account": {\n              "code": "SF-Marketing-Indirect"\n            },\n            "currency": {\n              "code": "@{currency}"\n            },\n            "line-num": 1,\n            "quantity": "1",\n            "po-number": "1234",\n            "description": "PO fallback line item",\n            "order-line-num": "",\n            "accounting-total": 4,\n            "order-header-num": ""\n          }\n        ]\n      }\n    },\n    "invoice-number": "@{document_id}",\n    "requester-email": "testing@email.com",\n    "ship-to-address": {\n      "location-code": "CODETEST1"\n    },\n    "total-with-taxes": "@{amount_total_calc}",\n    "line-level-taxation": "false"\n  },\n  "return_debug_json": true\n}\n'})})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var o=n(7294);const t={},i=o.createContext(t);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);
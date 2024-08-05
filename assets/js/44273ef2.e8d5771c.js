"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[3478],{9368:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(5893),t=r(1151);const i={title:"Coupa: Import configuration examples",sidebar_position:3,sidebar_label:"Import configuration examples"},o=void 0,s={id:"learn/coupa/coupa-import-configuration-examples",title:"Coupa: Import configuration examples",description:"Currencies",source:"@site/docs/learn/coupa/coupa-import-configuration-examples.md",sourceDirName:"learn/coupa",slug:"/learn/coupa/coupa-import-configuration-examples",permalink:"/docs/learn/coupa/coupa-import-configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/coupa/coupa-import-configuration-examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Coupa: Import configuration examples",sidebar_position:3,sidebar_label:"Import configuration examples"},sidebar:"learnSidebar",previous:{title:"Import setup",permalink:"/docs/learn/coupa/coupa-import-setup"},next:{title:"Export setup",permalink:"/docs/learn/coupa/coupa-export-setup"}},_={},c=[{value:"Currencies",id:"currencies",level:2},{value:"Lookup values",id:"lookup-values",level:2},{value:"Purchase orders",id:"purchase-orders",level:2},{value:"Purchase order - Line items",id:"purchase-order---line-items",level:2},{value:"Suppliers",id:"suppliers",level:2},{value:"Supplier information",id:"supplier-information",level:2},{value:"Tax Codes",id:"tax-codes",level:2},{value:"Units of measurement",id:"units-of-measurement",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"currencies",children:"Currencies"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read, core.business_entity.read, core.catalog.read, core.comment.read, core.common.read, core.expense.read, core.expense.secure.read, core.integration.read, core.inventory.adjustment.read, core.inventory.asn.read, core.inventory.balance.read, core.inventory.common.read, core.inventory.consumption.read, core.inventory.cycle_counts.read, core.inventory.pick_list.read, core.inventory.receiving.read, core.inventory.return_to_supplier.read, core.inventory.transaction.read, core.inventory.transfer.read, core.invoice.approval.bypass, core.invoice.assignment.read, core.invoice.create, core.invoice.delete, core.invoice.read, core.item.read, core.legal_entity.read, core.notifications_summary.read, core.object_translations.read, core.order_header_confirmations.read, core.order_pad.read, core.pay.charges.read, core.pay.payment_accounts.read, core.pay.payments.read, core.pay.statements.read, core.pay.virtual_cards.read, core.payables.allocations.read, core.payables.expense.read, core.payables.external.read, core.payables.invoice.read, core.payables.order.read, core.project.read, core.punchout_site.read, core.purchase_order_change.read, core.purchase_order.read, core.requisition.assignment.read, core.requisition.read, core.sourcing.pending_supplier.read, core.sourcing.read, core.sourcing.response.read, core.supplier_information_sites.read, core.supplier_information_tax_registrations.delete, core.supplier_information_tax_registrations.read, core.supplier_sharing_settings.read, core.supplier_sites.read, core.supplier.read, core.supplier.risk_aware.read, core.translation.read, core.uom.read, core.user_group.read, core.user.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": ["id", "code", "decimals"]\n    },\n    "method": "replace",\n    "endpoint": "api/currencies",\n    "dataset_name": "dataset_currencies",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"lookup-values",children:"Lookup values"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026.coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "external-ref-num",\n        "external-ref-code",\n        "active",\n        {\n          "parent": [\n            "id",\n            "name",\n            "active",\n            {\n              "custom_fields": {}\n            },\n            {\n              "parent": [\n                "id",\n                "name",\n                "active",\n                {\n                  "custom_fields": {}\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "lookup": ["id", "name", "active"]\n        },\n        {\n          "custom_fields": {}\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/lookup_values",\n    "dataset_name": "lookup_values",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"purchase-orders",children:"Purchase orders"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.purchase_order.read"\n  },\n  "import_config": {\n    "query": {\n      "dir": "desc",\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "po_number",\n        "status",\n        "version",\n        "payment_method",\n        "ship_to_attention",\n        {\n          "ship_to_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        },\n        {\n          "supplier": ["id", "name", "display_name", "number"]\n        },\n        {\n          "order_lines": [\n            "id",\n            "created_at",\n            "updated_at",\n            "accounting_total",\n            {\n              "accounting_total_currency": ["id", "code", "decimals"]\n            },\n            {\n              "custom_fields": ["start_date", "end_date", "payment_method"]\n            },\n            "description",\n            "line_num",\n            "order_header_id",\n            "order_header_number",\n            "price",\n            "quantity",\n            "source_part_num",\n            "status",\n            "sub_line_num",\n            "total",\n            "type",\n            "version",\n            "supplier_order_number",\n            {\n              "account": [\n                "id",\n                "created_at",\n                "updated_at",\n                "name",\n                "code",\n                "active",\n                "account_type_id",\n                "segment_1",\n                "segment_2",\n                "segment_3",\n                "segment_4",\n                "segment_5",\n                "segment_6",\n                "segment_7",\n                "segment_8",\n                "segment_9",\n                "segment_10",\n                "segment_11",\n                "segment_12",\n                "segment_13",\n                "segment_14",\n                "segment_15",\n                "segment_16",\n                "segment_17",\n                "segment_18",\n                "segment_19",\n                "segment_20"\n              ]\n            },\n            {\n              "currency": ["id", "code", "decimals"]\n            },\n            {\n              "supplier": ["id", "name", "display_name", "number"]\n            },\n            {\n              "uom": [\n                "id",\n                "created_at",\n                "updated_at",\n                "code",\n                "name",\n                "allowable_precision",\n                "active"\n              ]\n            }\n          ]\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/purchase_orders",\n    "dataset_name": "purchase_orders",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"purchase-order---line-items",children:"Purchase order - Line items"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.purchase_order.read"\n  },\n  "import_config": {\n    "query": {\n      "dir": "desc",\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "accounting_total",\n        {\n          "accounting_total_currency": ["id", "code", "decimals"]\n        },\n        {\n          "custom_fields": ["start_date", "end_date", "payment_method"]\n        },\n        "description",\n        "line_num",\n        "order_header_id",\n        "order_header_number",\n        "price",\n        "quantity",\n        "source_part_num",\n        "status",\n        "sub_line_num",\n        "total",\n        "type",\n        "version",\n        "supplier_order_number",\n        {\n          "account": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "code",\n            "active",\n            "account_type_id",\n            "segment_1",\n            "segment_2",\n            "segment_3",\n            "segment_4",\n            "segment_5",\n            "segment_6",\n            "segment_7",\n            "segment_8",\n            "segment_9",\n            "segment_10",\n            "segment_11",\n            "segment_12",\n            "segment_13",\n            "segment_14",\n            "segment_15",\n            "segment_16",\n            "segment_17",\n            "segment_18",\n            "segment_19",\n            "segment_20"\n          ]\n        },\n        {\n          "currency": ["id", "code", "decimals"]\n        },\n        {\n          "supplier": ["id", "name", "display_name", "number"]\n        },\n        {\n          "uom": ["id", "created_at", "updated_at", "code", "name", "allowable_precision", "active"]\n        }\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/purchase_order_lines",\n    "dataset_name": "purchase_order_lines",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"suppliers",children:"Suppliers"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.accounting.read, core.common.read, core.invoice.create, core.invoice.read, core.invoice.write, core.purchase_order.read, core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "name",\n        "display_name",\n        "number",\n        "status",\n        "po_email",\n        "account_number",\n        "tax_id",\n        {\n          "primary_contact": [\n            "id",\n            "created_at",\n            "updated_at",\n            "email",\n            "name_prefix",\n            "name_suffix",\n            "name_additional",\n            "name_given",\n            "name_family",\n            "name_fullname",\n            "notes",\n            "active",\n            "purposes"\n          ]\n        },\n        {\n          "primary_address": [\n            "id",\n            "created_at",\n            "updated_at",\n            "name",\n            "location_code",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "attention",\n            "active",\n            "business_group_name",\n            "vat_number",\n            "local_tax_number",\n            "type",\n            {\n              "country": ["id", "code", "name"]\n            },\n            {\n              "vat_country": ["id", "code", "name"]\n            }\n          ]\n        },\n        {\n          "remit_to_addresses": [\n            "id",\n            "created_at",\n            "updated_at",\n            "remit_to_code",\n            "name",\n            "street1",\n            "street2",\n            "street3",\n            "street4",\n            "city",\n            "state",\n            "postal_code",\n            "active",\n            "vat_number",\n            "local_tax_number",\n            "external_src_ref",\n            "external_src_name",\n            {\n              "country": ["id", "code", "name"]\n            }\n          ]\n        }\n      ]\n    },\n    "method": "replace",\n    "endpoint": "api/suppliers",\n    "dataset_name": "dataset_suppliers",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"supplier-information",children:"Supplier information"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.supplier.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "created_at",\n        "updated_at",\n        "supplier_id",\n        "name",\n        "display_name",\n        "supplier_number",\n        "status",\n        "industry",\n        "inco_terms",\n        "minority_indicator",\n        "minority_type_id",\n        "tax_region",\n        "tax_classification",\n        "federal_tax_num",\n        "social_security_number",\n        "duns_number",\n        "tax_exempt_other_explanation",\n        "income_type",\n        "fed_reportable",\n        "intl_tax_num",\n        "intl_tax_classification",\n        "intl_other_explanation",\n        "backend_system_invoicing",\n        "backend_system_catalog",\n        "supplier_region",\n        "payment_terms_id",\n        "payment_term_id",\n        "govt_agency_interaction_indicator",\n        "govt_agency_interaction",\n        "organization_type",\n        "policy_for_bribery_corruption_indicator",\n        "policy_for_bribery_corruption",\n        "govt_allegation_fraud_bribery_indicator",\n        "govt_allegation_fraud_bribery",\n        "third_party_interaction_indicator",\n        "third_party_interaction",\n        "goods_services_provided",\n        "pay_group",\n        "invoice_amount_limit",\n        "hold_payment_indicator",\n        "hold_payment",\n        "separate_remit_to",\n        "comment_source",\n        "comment",\n        "last_exported_at",\n        "logo_file_name",\n        "logo_content_type",\n        "logo_file_size",\n        "logo_updated_at",\n        "website",\n        "allow_cxml_invoicing",\n        "hold_invoices_for_ap_review",\n        "send_invoices_to_approvals",\n        "allow_inv_no_backing_doc_from_connect",\n        "allow_inv_unbacked_lines_from_connect",\n        "commodity_id",\n        "invoice_matching_level",\n        "shipping_term_id",\n        "tax_code_id",\n        "savings_pct",\n        "allow_inv_from_connect",\n        "allow_inv_choose_billing_account",\n        "invoice_inbound_emails",\n        "default_invoice_email",\n        "inbound_invoice_domain",\n        "duplicate_exists",\n        "estimated_spend_amount",\n        "currency_id",\n        "user_id",\n        "one_time_supplier",\n        "scope_three_emissions",\n        "po_email",\n        "po_method",\n        "po_change_method",\n        "buyer_hold",\n        "cxml_url",\n        "cxml_domain",\n        "cxml_identity",\n        "cxml_supplier_domain",\n        "cxml_supplier_identity",\n        "cxml_secret",\n        "cxml_protocol",\n        "cxml_ssl_version",\n        "disable_cert_verify",\n        {\n          "custom_fields": [\n            "primary_subsidiary",\n            "subs_secondary",\n            "vendor_region",\n            "payment_file_format",\n            "company_registration_number",\n            "eligibility_1099",\n            "critical_vs_not_critical_vendor",\n            "permanent_account_number_pan",\n            "msmeudyam_registration_number",\n            "credit_card_vendor",\n            "credit_card",\n            "vendor_require_risk_questionnaire",\n            "risk_review",\n            "expedited_vendor",\n            "msme_registration_certificate",\n            "additional_currency",\n            "payment_remittance_email",\n            "wil_be_sued_for_po__backed_purchases"\n          ]\n        },\n        {\n          "supplier_information_addresses": [\n            "intermediary_bank_name",\n            "bank_address",\n            "bank_city",\n            "bank_state_region",\n            "bank_postal_code",\n            "name_on_bank_account",\n            "bank_name",\n            "bank_account_number",\n            "bank_routing_number",\n            "wire_routing_number",\n            "international_bank_account_number",\n            "iban_number",\n            "sort_code",\n            "swift_code",\n            "bsb_number",\n            "bic",\n            "bank_code",\n            "ifsc",\n            "transit_number_and_institution_number",\n            "bic_routing_code",\n            "payment_method_item",\n            "active",\n            "csp_rta_id",\n            "email",\n            "virtual_card_email"\n          ]\n        }\n      ],\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/supplier_information",\n    "dataset_name": "supplier_information",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"tax-codes",children:"Tax Codes"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/tax_codes",\n    "dataset_name": "tax_codes",\n    "records_per_request": 50\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"units-of-measurement",children:"Units of measurement"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "credentials": {\n    "client_id": "\u2026",\n    "base_api_url": "\u2026.coupacloud.com/",\n    "client_scope": "core.common.read"\n  },\n  "import_config": {\n    "query": {\n      "fields": [\n        "id",\n        "name",\n        "code",\n        "allowable-precession",\n        "active",\n        "updated-at",\n        "created-at"\n      ],\n      "order_by": "created_at",\n      "updated-at[gt_or_eq]": "${last_modified_date}"\n    },\n    "method": "update",\n    "id_keys": ["id"],\n    "endpoint": "api/uoms",\n    "dataset_name": "uoms",\n    "records_per_request": 50\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var a=r(7294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4220],{9680:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(4848),o=i(8453);const s={sidebar_position:1,sidebar_label:"Configuration examples",title:"Line items grouping: Configuration examples"},r="Configuration examples",a={id:"learn/line-items-grouping/configuration-examples",title:"Line items grouping: Configuration examples",description:"Datapoint lineitemgrouped must exist in the schema otherwise the extension will keep adding new line items and not removing the old ones! This datapoint name is currently hardcoded and cannot be changed.",source:"@site/docs/learn/line-items-grouping/configuration-examples.md",sourceDirName:"learn/line-items-grouping",slug:"/learn/line-items-grouping/configuration-examples",permalink:"/docs/learn/line-items-grouping/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/line-items-grouping/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Configuration examples",title:"Line items grouping: Configuration examples"},sidebar:"learnSidebar",previous:{title:"Line items grouping",permalink:"/docs/learn/line-items-grouping/"},next:{title:"Alternative Python solution",permalink:"/docs/learn/line-items-grouping/alternative-python-solution"}},l={},d=[{value:"Group line items by item code",id:"group-line-items-by-item-code",level:2},{value:"Group line items conditionally",id:"group-line-items-conditionally",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuration-examples",children:"Configuration examples"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Here be dragons",type:"danger",children:[(0,t.jsxs)(n.p,{children:["Datapoint ",(0,t.jsx)(n.code,{children:"line_item_grouped"})," ",(0,t.jsx)(n.strong,{children:"must exist"})," in the schema otherwise the extension will keep adding new line items and not removing the old ones! This datapoint name is currently hardcoded and cannot be changed."]}),(0,t.jsx)(n.p,{children:"The recommended schema datapoint:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "category": "multivalue",\n  "id": "line_items_grouped",\n  "label": "Line Items (grouped)",\n  "children": {\n    "category": "tuple",\n    // highlight-start\n    "id": "line_item_grouped",\n    // highlight-end\n    "label": "line_item_grouped",\n    "children": [\n      {\n        "rir_field_names": [],\n        "constraints": { "required": false },\n        "default_value": null,\n        "category": "datapoint",\n        "id": "item_code_grouped",\n        "label": "Code",\n        "type": "string"\n      },\n      {\n        "rir_field_names": [],\n        "constraints": { "required": false },\n        "default_value": null,\n        "category": "datapoint",\n        "id": "item_description_grouped",\n        "label": "Description",\n        "type": "string"\n      }\n      // Add more datapoints here as needed\u2026\n    ],\n    "rir_field_names": []\n  },\n  "min_occurrences": null,\n  "max_occurrences": null,\n  "default_value": null,\n  "rir_field_names": []\n}\n'})}),(0,t.jsxs)(n.p,{children:["Additionally, the ",(0,t.jsx)(n.code,{children:"line_items"})," table must exist in the schema as well. This is, however, the typical default."]})]}),"\n",(0,t.jsx)(n.h2,{id:"group-line-items-by-item-code",children:"Group line items by item code"}),"\n",(0,t.jsxs)(n.p,{children:["The following SQL groups the line items by the value in ",(0,t.jsx)(n.code,{children:"item_code"})," datapoint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    MAX(item_code) as item_code_grouped,\n    MAX(item_description) as item_description_grouped\n    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped\nFROM\n    inmemory_line_items\nGROUP BY\n    item_code\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["When using ",(0,t.jsx)(n.code,{children:"SUM"})," function, it is important to call it like this:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped\n"})}),(0,t.jsxs)(n.p,{children:["Using simple ",(0,t.jsx)(n.code,{children:"SUM(item_quantity)"})," would incorrectly turn empty datapoints into ",(0,t.jsx)(n.code,{children:"0"})," which might not be desirable (imagine turning missing total amount ",(0,t.jsx)(n.code,{children:'""'})," into ",(0,t.jsx)(n.code,{children:"0"}),", for example)."]})]}),"\n",(0,t.jsx)(n.p,{children:"Full configuration would look like this (the SQL can be copy-pasted but must be inline):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "transformations": [\n    {\n      "data_sources": [\n        {\n          "schema_id": "line_items",\n          "table_name": "inmemory_line_items"\n        }\n      ],\n      "sql_statement": "SELECT\\n    MAX(item_code) as item_code_grouped,\\n    MAX(item_description) as item_description_grouped\\n    COALESCE(SUM(NULLIF(item_quantity, \'\')), \'\') AS item_quantity_grouped\\nFROM\\n    inmemory_line_items\\nGROUP BY\\n    item_code",\n      "output_schema_id": "line_items_grouped",\n      "allow_target_update": true\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"group-line-items-conditionally",children:"Group line items conditionally"}),"\n",(0,t.jsxs)(n.p,{children:['In some cases (for example, when integrating with NetSuite), it is necessary to group only so called "inventory items" and keep "expenses" intact. This can be achieved using a bit more verbose ',(0,t.jsx)(n.code,{children:"GROUP BY"})," clause:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n    MAX(item_type) as item_type_grouped,\n    COALESCE(SUM(NULLIF(item_quantity, '')), '') AS item_quantity_grouped,\n    MAX(item_description) as item_description_grouped,\n    MAX(item_ns_item_match) as item_ns_item_match_grouped\nFROM\n    inmemory_line_items\nGROUP BY\n-- highlight-start\n    CASE\n        WHEN item_type = 'inventory_item' THEN item_ns_item_match\n        ELSE item_index -- a unique identifier for each row to prevent grouping for 'expense' type rows\n    END;\n-- highlight-end\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"item_index"})," from the SQL above is a ",(0,t.jsx)(n.a,{href:"/docs/learn/rossum-formulas/formula-fields",children:"formula field"})," with the following definition (to give each row a unique number):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"field._index\n"})}),"\n",(0,t.jsx)(n.p,{children:"The SQL, of course, needs to be copied to the actual configuration which could look like this, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "transformations": [\n    {\n      "data_sources": [\n        {\n          "schema_id": "line_items",\n          "table_name": "inmemory_line_items"\n        }\n      ],\n      "sql_statement": "SELECT\\n    MAX(item_type) as item_type_grouped,\\n    COALESCE(SUM(NULLIF(item_quantity, \'\')), \'\') AS item_quantity_grouped,\\n    MAX(item_description) as item_description_grouped,\\n    MAX(item_ns_item_match) as item_ns_item_match_grouped\\nFROM\\n    inmemory_line_items\\nGROUP BY\\n    CASE\\n        WHEN item_type = \'inventory_item\' THEN item_ns_item_match\\n        ELSE item_index -- a unique identifier for each row to prevent grouping for \'expense\' type rows\\n    END;",\n      "output_schema_id": "line_items_grouped",\n      "allow_target_update": false\n    }\n  ]\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
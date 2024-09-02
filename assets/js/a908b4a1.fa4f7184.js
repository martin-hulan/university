"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4683],{983:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(5893),s=t(1151);const i={title:"Master data hub: Configuration examples",sidebar_label:"Configuration examples",sidebar_position:4},r="Configuration examples",o={id:"learn/master-data-hub/configuration-examples",title:"Master data hub: Configuration examples",description:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:",source:"@site/docs/learn/master-data-hub/configuration-examples.md",sourceDirName:"learn/master-data-hub",slug:"/learn/master-data-hub/configuration-examples",permalink:"/docs/learn/master-data-hub/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/master-data-hub/configuration-examples.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Master data hub: Configuration examples",sidebar_label:"Configuration examples",sidebar_position:4},sidebar:"learnSidebar",previous:{title:"Dataset matching configuration",permalink:"/docs/learn/master-data-hub/dataset-matching-configuration"},next:{title:"Full dataset replace",permalink:"/docs/learn/master-data-hub/full-dataset-replace"}},c={},l=[{value:"Best match with default fallback initial match returns no records",id:"best-match-with-default-fallback-initial-match-returns-no-records",level:2},{value:"Count all records in the collection",id:"count-all-records-in-the-collection",level:2},{value:"Compound queries",id:"compound-queries",level:2},{value:"Dummy object",id:"dummy-object",level:2},{value:"Exact match",id:"exact-match",level:2},{value:"Exact match (case-insensitive)",id:"exact-match-case-insensitive",level:2},{value:"Exact submatch",id:"exact-submatch",level:2},{value:"Fuzzy match",id:"fuzzy-match",level:2},{value:"Fuzzy match score normalization",id:"fuzzy-match-score-normalization",level:2},{value:"Fuzzy match score normalization - non-compound query",id:"fuzzy-match-score-normalization---non-compound-query",level:2},{value:"HTTP requests",id:"http-requests",level:2},{value:"JavaScript in-line functions",id:"javascript-in-line-functions",level:2},{value:"Remove duplicates (<code>$group</code>)",id:"remove-duplicates-group",level:2},{value:"Return all collection records (sorted)",id:"return-all-collection-records-sorted",level:2},{value:"Match on normalized values",id:"match-on-normalized-values",level:2},{value:"Match only if there is exactly one match",id:"match-only-if-there-is-exactly-one-match",level:2},{value:"Match score steps",id:"match-score-steps",level:2},{value:"VAT ID checker against <strong>external</strong> API (VIES)",id:"vat-id-checker-against-external-api-vies",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"configuration-examples",children:"Configuration examples"})}),"\n",(0,a.jsx)(e.p,{children:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "name": "\u2026",\n      "source": {\n        "dataset": "PurchaseOrder_v1",\n        // highlight-start\n        "queries": [\n          // COPY-PASTE THE EXAMPLES HERE\n        ],\n        // highlight-end\n      },\n      "default": { \u2026 },\n      "mapping": { \u2026 },\n      "result_actions": { \u2026 }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["In most of the cases, the ",(0,a.jsx)(e.code,{children:"dataset"})," key will be static. It can however be dynamic as well:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "name": "\u2026",\n      "source": {\n        "dataset": "PurchaseOrder_{queue_country}_v1"\n        // \u2026\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"best-match-with-default-fallback-initial-match-returns-no-records",children:"Best match with default fallback initial match returns no records"}),"\n",(0,a.jsxs)(e.p,{children:["The following example selects a first record (the best match) if the first ",(0,a.jsx)(e.code,{children:"$match"})," query returns any results and keeps empty (",(0,a.jsx)(e.code,{children:'""'}),") record on second position in the dropdown list. If the first ",(0,a.jsx)(e.code,{children:"$match"})," query returns no results, it selects the empty (",(0,a.jsx)(e.code,{children:'""'}),") default record and appends all records returned by the last ",(0,a.jsx)(e.code,{children:"$unionWith"})," query."]}),"\n",(0,a.jsxs)(e.p,{children:["It essentially allows using ",(0,a.jsx)(e.code,{children:"best_match"})," strategy in all circumstances\u2014i.e., confident and non-confident matching in a single query."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "Workday_Project_ID": "{item_project}"\n      }\n    },\n    {\n      "$setWindowFields": {\n        "output": {\n          "mainMatch": {\n            "$count": {}\n          }\n        }\n      }\n    },\n    {\n      "$unionWith": {\n        "coll": "nonexistentcollection",\n        "pipeline": [\n          {\n            "$documents": [\n              {\n                "Name": "Please select",\n                "mainMatch": 0,\n                "Workday_Project_ID": ""\n              }\n            ]\n          }\n        ]\n      }\n    },\n    {\n      "$setWindowFields": {\n        "output": {\n          "mainMatchWithDefault": {\n            "$count": {}\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "$expr": {\n          "$cond": {\n            "if": {\n              "$and": [\n                {\n                  "$gt": ["$mainMatchWithDefault", "$mainMatch"]\n                },\n                {\n                  "$gt": ["$mainMatchWithDefault", 1]\n                }\n              ]\n            },\n            "else": {\n              "$eq": [1, 1]\n            },\n            "then": {\n              "$ne": ["$mainMatch", 0]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$unionWith": {\n        "coll": "workday_project",\n        "pipeline": [\n          {\n            "$match": {\n              "Workday_Project_ID": {\n                "$ne": "{item_project}"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"count-all-records-in-the-collection",children:"Count all records in the collection"}),"\n",(0,a.jsxs)(e.p,{children:["You can quickly get a total number of records in the whole collection by calling ",(0,a.jsx)(e.code,{children:"$count"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$count": "total"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"compound-queries",children:"Compound queries"}),"\n",(0,a.jsxs)(e.p,{children:["Compound queries are very useful when we need to match against multiple attributes and give to each match a different importance. In the following example we use Fibonacci Sequence boosts to ",(0,a.jsx)(e.a,{href:"#fuzzy-match",children:"fuzzy match"})," against XXX, YYY and ZZZ:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$search": {\n        "index": "default",\n        "compound": {\n          "must": [\n            {\n              "text": {\n                "path": "XXX",\n                "query": "{product_code} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 8\n                  }\n                }\n              }\n            },\n            {\n              "text": {\n                "path": "YYY",\n                "query": "{product_name} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 5\n                  }\n                }\n              }\n            }\n          ],\n          "should": [\n            {\n              "text": {\n                "path": "ZZZ",\n                "query": "{product_label} ", // notice the extra space at the end!\n                "score": {\n                  "boost": {\n                    "value": 3\n                  }\n                }\n              }\n            }\n          ]\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$match": {\n        "__score": {\n          "$gt": 30 // Check the resulting `__score` to set some appropriate value\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"dummy-object",children:"Dummy object"}),"\n",(0,a.jsx)(e.p,{children:"Creating dummy objects can be handy when we need to create some dummy (empty) record on the fly:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$unionWith": {\n        "coll": "__non_existent_collection__",\n        "pipeline": [\n          {\n            "$documents": [\n              {\n                "__score": -1,\n                "zip": "",\n                "companyName": "Company Unknown",\n                "contactName": ""\n              }\n            ]\n          }\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"exact-match",children:"Exact match"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "find": {\n    "Vendor name": "{sender_name}"\n  }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:['The query checks the "Vendor name" in the dataset and compares it to the value of the "Vendor name" field extracted from the document. To refer to the "Vendor name" field, we used its schema ID - ',(0,a.jsx)(e.code,{children:"sender_name"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Even though exact match can be achieved using ",(0,a.jsx)(e.code,{children:"find"})," method instead of ",(0,a.jsx)(e.code,{children:"aggregate"})," (see ",(0,a.jsx)(e.a,{href:"#exact-match-case-insensitive",children:"below"}),"), it is still recommended to use ",(0,a.jsx)(e.code,{children:"aggregate"})," because it's often necessary to specify ",(0,a.jsx)(e.code,{children:"$project"})," stage:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "Vendor name": "{sender_name}"\n      }\n    },\n    {\n      "$project": {\n        "Supplier Name": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"exact-match-case-insensitive",children:"Exact match (case-insensitive)"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "find": {\n    "role_code": {\n      "$regex": "^{item_role | re}$",\n      "$options": "i"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"\u2026 | re"})," filter escapes all regex-special characters with a backslash (",(0,a.jsx)(e.code,{children:"\\"}),"). It is highly recommended to use the filter when using the MongoDB's ",(0,a.jsx)(e.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/query/regex/",children:(0,a.jsx)(e.code,{children:"$regex"})}),". Filters ",(0,a.jsx)(e.code,{children:"re"})," and ",(0,a.jsx)(e.code,{children:"regex"})," are equivalent."]}),"\n",(0,a.jsx)(e.h2,{id:"exact-submatch",children:"Exact submatch"}),"\n",(0,a.jsxs)(e.p,{children:["Sometimes it is necessary to match an exact substring. This can easily be achieved by using ",(0,a.jsx)(e.code,{children:"$regex"})," like so:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "find": {\n    "role_code": {\n      "$regex": "^.*{item_role | regex}.*$"\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"\u2026 | regex"})," filter escapes all regex-special characters with a backslash (",(0,a.jsx)(e.code,{children:"\\"}),"). It is highly recommended to use the filter when using the MongoDB's ",(0,a.jsx)(e.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/query/regex/",children:(0,a.jsx)(e.code,{children:"$regex"})}),". Filters ",(0,a.jsx)(e.code,{children:"re"})," and ",(0,a.jsx)(e.code,{children:"regex"})," are equivalent."]}),"\n",(0,a.jsx)(e.h2,{id:"fuzzy-match",children:"Fuzzy match"}),"\n",(0,a.jsxs)(e.p,{children:["It is necessary to restrict the fuzzy search results by using ",(0,a.jsx)(e.code,{children:"$match"})," on the results score (otherwise many irrelevant false positives would be returned)."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$search": {\n        "index": "default",\n        "text": {\n          "query": "{item_description} ", // notice the extra space at the end!\n          "path": "description"\n        }\n      }\n    },\n    {\n      "$limit": 10 // optional\n    },\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$match": {\n        "__score": {\n          "$gt": 0.1 // configure as needed based on the results\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"fuzzy-match-score-normalization",children:"Fuzzy match score normalization"}),"\n",(0,a.jsxs)(e.p,{children:["By default, ",(0,a.jsx)(e.a,{href:"#fuzzy-match",children:"fuzzy match"})," returns a score which can range from 0 to any number (defined by MongoDB). This makes it challenging to filter only relevant results. It is therefore a good idea to normalize the score. The following snippet normalizes the score to a value between 0 and 1:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026 (fuzzy search)\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "new_score": {\n          "$divide": [\n            "$__score",\n            {\n              "$add": [\n                1,\n                {\n                  "$abs": {\n                    "$subtract": [\n                      1,\n                      {\n                        "$divide": [\n                          {\n                            "$strLenCP": "$Name"\n                          },\n                          {\n                            "$strLenCP": "{sender_name}"\n                          }\n                        ]\n                      }\n                    ]\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__normalized_score": {\n          "$divide": [\n            "$new_score",\n            {\n              "$add": [1, "$new_score"]\n            }\n          ]\n        }\n      }\n    },\n    {\n      "$sort": {\n        "__normalized_score": -1\n      }\n    },\n    {\n      "$match": {\n        "__normalized_score": {\n          "$gt": 0.7\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"Naiver (and less recommended) solution would be the following:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026 (fuzzy search)\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$setWindowFields": {\n        "output": {\n          "__max_score": {\n            "$max": "$__score"\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__normalized_score": {\n          "$divide": ["$__score", "$__max_score"]\n        }\n      }\n    }\n    // \u2026\n  ]\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Note that one disadvantage of this second normalization approach is that ",(0,a.jsx)(e.code,{children:"__normalized_score"}),' can be exactly "1" even when ',(0,a.jsx)(e.code,{children:"__score"})," has low value. It might be a good idea to combine both scores to filter out results that would normally be considered not-a-match."]}),"\n",(0,a.jsx)(e.h2,{id:"fuzzy-match-score-normalization---non-compound-query",children:"Fuzzy match score normalization - non-compound query"}),"\n",(0,a.jsxs)(e.p,{children:['Score returned normalized to interval between 0-1. This works only when a "compound" query is ',(0,a.jsx)(e.strong,{children:"not"})," used."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        },\n        "__scoreDetails": {\n          "$meta": "searchScoreDetails"\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__normalizedScore": {\n          "$last": {\n            "$last": {\n              "$first": "$__scoreDetails.details.details.details.value"\n            }\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__normalizedScore": {\n          "$gt": 0.5\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"http-requests",children:"HTTP requests"}),"\n",(0,a.jsx)(e.p,{children:"Master Data Hub can work not only with existing collections, but it can also send HTTP requests. The whole configuration for HTTP requests is slightly different:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "name": "\u2026",\n      "source": {\n        // highlight-start\n        "auth": {\n          "url": "https://elis.rossum.ai/api/v1/auth/login",\n          "body": {\n            "password": "{secrets.elis_password}",\n            "username": "{secrets.elis_username}"\n          },\n          "method": "POST",\n          "headers": {\n            "Content-Type": "application/json"\n          }\n        },\n        "queries": [\n          {\n            "url": "https://elis.rossum.ai/api/v1/annotations/{annotation_id}/content",\n            "method": "GET",\n            "headers": {\n              "Content-Type": "application/json",\n              "Authorization": "Bearer {auth.body.key}"\n            },\n            "result_path": "content[?contains(schema_id, \'line_items_section\')].children[].children[].children[?contains(schema_id, \'item_po_number\')].content[]"\n          }\n        ]\n        // highlight-end\n      },\n      "default": { \u2026 },\n      "mapping": { \u2026 },\n      "result_actions": { \u2026 }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"javascript-in-line-functions",children:"JavaScript in-line functions"}),"\n",(0,a.jsx)(e.admonition,{type:"warning",children:(0,a.jsx)(e.p,{children:"Even though using JavaScript can be easier in some scenarios, it is typically less performant than using native MongoDB queries. Use this carefully!"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$addFields": {\n        "__order_number_sanitized": {\n          "$function": {\n            "body": "function(x) { return x.replace(/[^0-9a-z]/ig, \'\').toLowerCase(); }",\n            "args": ["$Order Number"],\n            "lang": "js"\n          }\n        }\n      }\n    }\n    // \u2026\n  ]\n}\n'})}),"\n",(0,a.jsxs)(e.h2,{id:"remove-duplicates-group",children:["Remove duplicates (",(0,a.jsx)(e.code,{children:"$group"}),")"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$group": {\n        "_id": "$vendorRegNo",\n        "__tmpRoot": {\n          "$first": "$$ROOT"\n        }\n      }\n    },\n    {\n      "$replaceRoot": {\n        "newRoot": "$__tmpRoot"\n      }\n    },\n    // \u2026\n    {\n      "$sort": {\n        "__score": -1 // it is important to sort the results correctly after using $group\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"return-all-collection-records-sorted",children:"Return all collection records (sorted)"}),"\n",(0,a.jsx)(e.p,{children:"Sometimes it might be useful to always return all records and perhaps sort them by matching score. That is, always return everything but on put the best results on top."}),"\n",(0,a.jsxs)(e.p,{children:["This can be achieved by first searching and returning records with their respective ",(0,a.jsx)(e.code,{children:"__score"})," (see ",(0,a.jsx)(e.a,{href:"#fuzzy-match",children:"fuzzy match"}),", for example) and later appending all records with zero ",(0,a.jsx)(e.code,{children:"__score"})," using ",(0,a.jsx)(e.code,{children:"$unionWith"}),". Finally, all the results are grouped to remove duplicates and sorted by the score:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026 (fuzzy search first)\n    {\n      // highlight-start\n      "$unionWith": {\n        "coll": "legal_entities_v1",\n        "pipeline": [\n          {\n            "$addFields": {\n              "__score": 0\n            }\n          }\n        ]\n      }\n      // highlight-end\n    },\n    {\n      "$group": {\n        "_id": "$legal_entity",\n        "__tmpRoot": {\n          "$first": "$$ROOT"\n        }\n      }\n    },\n    {\n      "$replaceRoot": {\n        "newRoot": "$__tmpRoot"\n      }\n    },\n    {\n      "$sort": {\n        "__score": -1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-on-normalized-values",children:"Match on normalized values"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$addFields": {\n        "__tax_id_stringified": {\n          "$toString": "$Tax ID"\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$map": {\n            "input": {\n              "$range": [\n                0,\n                {\n                  "$strLenCP": "$__tax_id_stringified"\n                }\n              ]\n            },\n            "in": {\n              "$substrCP": ["$__tax_id_stringified", "$$this", 1]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$filter": {\n            "input": "$__tax_id_normalized",\n            "cond": {\n              "$regexMatch": {\n                "input": "$$this",\n                "regex": "[0-9a-zA-Z]"\n              }\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$reduce": {\n            "input": "$__tax_id_normalized",\n            "initialValue": "",\n            "in": {\n              "$concat": ["$$value", "$$this"]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__tax_id_normalized": "{sender_vat_id_normalized}"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-only-if-there-is-exactly-one-match",children:"Match only if there is exactly one match"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$setWindowFields": {\n        "output": {\n          "__totalCount": {\n            "$count": {}\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__totalCount": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-score-steps",children:"Match score steps"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // \u2026\n    {\n      "$setWindowFields": {\n        "output": {\n          "__score_normalized_max": {\n            "$max": "$__score_normalized"\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "$expr": {\n          "$cond": {\n            "if": {\n              "$or": [\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.9] },\n                    { "$lte": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.9] },\n                    { "$lte": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.85] },\n                    { "$lte": ["$__score_normalized_max", 0.9] },\n                    { "$gt": ["$__score_normalized", 0.85] },\n                    { "$lte": ["$__score_normalized", 0.9] }\n                  ]\n                }\n              ]\n            },\n            "then": true,\n            "else": false\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(e.h2,{id:"vat-id-checker-against-external-api-vies",children:["VAT ID checker against ",(0,a.jsx)(e.strong,{children:"external"})," API (VIES)"]}),"\n",(0,a.jsx)(e.p,{children:"It is possible to query not only internal datasets, but also external (RESTful) API."}),"\n",(0,a.jsx)(e.p,{children:"For example, you could query the VIES API for the VAT ID validation."}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["More info about VIES here: ",(0,a.jsx)(e.a,{href:"https://ec.europa.eu/taxation_customs/vies/#/vat-validation",children:"https://ec.europa.eu/taxation_customs/vies/#/vat-validation"})]})}),"\n",(0,a.jsxs)(e.admonition,{type:"tip",children:[(0,a.jsxs)(e.p,{children:["The following configuration requires the existence of two ",(0,a.jsx)(e.a,{href:"/docs/learn/rossum-formulas/formula-fields",children:"Formula Fields"})," with this regex:"]}),(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"sender_vat_id_country_code_calculated"})," contains (only this one line) ",(0,a.jsx)(e.code,{children:"re.sub(r'\\s', '', field.sender_vat_id)[:2]"})]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"sender_vat_id_vat_number_calculated"})," contains ",(0,a.jsx)(e.code,{children:"re.sub(r'\\s', '', field.sender_vat_id)[2:]"})]}),"\n"]}),(0,a.jsxs)(e.p,{children:["and also some additional custom field in the annotation schema to present the result in the UI (for example ",(0,a.jsx)(e.code,{children:"vies_is_valid"}),")"]})]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"VIES check result example",src:t(2454).Z+"",width:"696",height:"195"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:' "configurations": [\n      {\n        "name": "VIES",\n        "source": {\n          "queries": [\n            {\n                      // highlight-start\n              "url": "https://ec.europa.eu/taxation_customs/vies/rest-api/check-vat-number",\n              "body": {\n                "vatNumber": "{sender_vat_id_vat_number_calculated}",\n                "countryCode": "{sender_vat_id_country_code_calculated}"\n              },\n                      // highlight-end\n              "method": "POST",\n              "headers": {\n                "Accept": "application/json",\n                "Content-Type": "application/json"\n              },\n              "result_path": ""\n            }\n          ]\n        },\n        "default": {\n          "label": "Not checked",\n          "value": "not-checked"\n        },\n        "mapping": {\n          "dataset_key": "valid",\n          "label_template": "{valid}",\n          "target_schema_id": "vies_is_valid"\n        },\n        "result_actions": {\n          "no_match_found": {\n            "message": {\n              "type": "error",\n              "content": "No match found"\n            }\n          },\n          "one_match_found": {\n            "select": "best_match"\n          },\n          "multiple_matches_found": {\n            "select": "default",\n            "message": {\n              "type": "warning",\n              "content": "Multiple matches found"\n            }\n          }\n        }\n      }\n    ]\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},2454:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/mdh-vies-example-8824481a831b429a0928311d0c361b24.png"},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>r});var a=t(7294);const s={},i=a.createContext(s);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);
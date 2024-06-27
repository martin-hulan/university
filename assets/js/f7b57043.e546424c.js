"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[3166],{2388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),a=t(1151);const o={title:"Find & Replace Values"},s=void 0,r={id:"learn/find-replace-values/index",title:"Find & Replace Values",description:"Formerly known as Value Transformations",source:"@site/docs/learn/find-replace-values/index.md",sourceDirName:"learn/find-replace-values",slug:"/learn/find-replace-values/",permalink:"/docs/learn/find-replace-values/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/find-replace-values/index.md",tags:[],version:"current",frontMatter:{title:"Find & Replace Values"},sidebar:"learnSidebar",previous:{title:"Configuration examples",permalink:"/docs/learn/custom-format-templating/configuration-examples"},next:{title:"Configuration examples",permalink:"/docs/learn/find-replace-values/configuration-examples"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"What can it do?",id:"what-can-it-do",level:2},{value:"What can&#39;t it do?",id:"what-cant-it-do",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Formerly known as Value Transformations"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Find & Replace Values extension is available in the Rossum store. To install the extension, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to your Rossum account."}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Extensions \u2192 Rossum Store"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Search for ",(0,i.jsx)(n.strong,{children:"Find & Replace Values"}),' extension and "Add" it.']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['A default "Rossum Store extension settings" page will open where you can configure the extension to your liking (visit ',(0,i.jsx)(n.a,{href:"/docs/learn/find-replace-values/configuration-examples",children:"configuration examples"})," for inspiration)."]}),"\n",(0,i.jsx)(n.h2,{id:"what-can-it-do",children:"What can it do?"}),"\n",(0,i.jsx)(n.p,{children:"As the extension name suggests, its main purpose is to find and replace values of extracted datapoints. The most typical use case is normalizing extracted values (as in replacing unwanted characters and unifying the output). These are the tasks where this extension excels:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cleaning the existing value of the field and putting it into another (or the same) field based on a specific pattern."}),"\n",(0,i.jsx)(n.li,{children:"Finding a specific pattern inside a value and putting only it into another (or the same) field."}),"\n",(0,i.jsx)(n.li,{children:"Running Python conditions to determine if specified actions can be performed."}),"\n",(0,i.jsx)(n.li,{children:"Running regular expressions matches to determine if a transformation should be applied."}),"\n",(0,i.jsx)(n.li,{children:"Defining self-execution on a queue level."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following configuration removes non-alphanumeric characters from IBAN field:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "actions": [\n    {\n      "transformations": [\n        {\n          "pattern_to_replace": "[^a-zA-Z\\\\d]",\n          "value_to_replace_with": ""\n        }\n      ],\n      "source_target_mappings": [\n        {\n          "source": "iban",\n          "target": "iban_normalized"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"what-cant-it-do",children:"What can't it do?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'React to "No match" scenarios: if no match is found, the value from the source field is copied "as-is" to the target field (you need to set up action condition to avoid this behavior).'}),"\n",(0,i.jsxs)(n.li,{children:["Provide conditional mapping of values: for this, you need to use another extension called ",(0,i.jsx)(n.a,{href:"/docs/learn/copy-paste-values/",children:"Copy & Paste Values"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.p,{children:["The main mechanism is Python ",(0,i.jsx)(n.code,{children:"re"})," library, which handles regular expressions (regex)."]}),"\n",(0,i.jsxs)(n.p,{children:["All you need to know is that we do not use the whole spectrum of methods, but only the ",(0,i.jsx)(n.code,{children:"substitute"})," function which has the following signature:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"re.sub(pattern, repl, string, count=0, flags=0)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pattern"})," is the regex pattern"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repl"})," is the replacement string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string"})," is the input string (in our case, the value from a field)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the configuration, you do not need to worry about the ",(0,i.jsx)(n.code,{children:"string"})," parameter as it is taken from ",(0,i.jsx)(n.code,{children:"source"})," fields configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "source_target_mappings": [\n    {\n      "source": "item_description",\n      "target": "item_description_normalized"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["However, you need to take care of ",(0,i.jsx)(n.code,{children:"pattern"})," and ",(0,i.jsx)(n.code,{children:"repl"}),". In our configuration, they are presented as ",(0,i.jsx)(n.code,{children:"pattern_to_replace"})," and ",(0,i.jsx)(n.code,{children:"value_to_replace_with"})," respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["See section ",(0,i.jsx)(n.a,{href:"#available-configuration-options",children:"Available configuration options"})," below for more parameters to customize the behavior."]}),"\n",(0,i.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // Required: List of actions to be performed.\n  "actions": [\n    {\n      // Required: List of transformations to perform on the value of the source field.\n      "transformations": [\n        {\n          // Required: The Python regular expression defines a pattern in the value to be found\n          // and replaced.\n          "pattern_to_replace": "[^a-zA-Z\\\\d]",\n\n          // Required: This value will replace all pattern occurrences matching the regular\n          // expression defined in the pattern_to_replace parameter.\n          "value_to_replace_with": "",\n\n          // Optional: Regular expression defines the condition for a transformation to be applied.\n          // Extension will apply the transformation if the value matches the expression.\n          "replace_if_this_pattern_matches": ""\n        }\n      ],\n      // Required: List of source and target field schema IDs.\n      "source_target_mappings": [\n        {\n          // Required: Source schema_id of the initial value to be transformed.\n          "source": "iban",\n          // Required: Target field\'s schema_id where the extension will store the transformed value.\n          "target": "iban_normalized"\n        }\n      ],\n      // Optional: Queue IDs where the extension should perform the particular action.\n      // You can assign the extension to multiple queues and specify numerous actions for different\n      // queues in one instance. If not present, the extension will act on all the queues to which\n      // it is assigned unless excluded_queue_ids is set.\n      "queue_ids": [],\n\n      // Optional: Queue IDs where the function won\'t perform the action. This parameter cannot be\n      // set along with queue_ids.\n      "excluded_queue_ids": [],\n\n      // Optional: Condition\'s definition for a particular action. Condition needs to evaluate to\n      // bool (True or False). When defined, the action will be evaluated. If True, the extension\n      // will apply the action\'s transformation; otherwise, it won\u2019t. It\'s a Python condition where\n      // schema fields are referenced by their schema_id enclosed in {}.\n      //\n      // Example: `{item_code} != \'\' and {document_type} == \'invoice\'`\n      //\n      // See Python expressions documentation for more details: https://docs.python.org/3.8/reference/expressions.html\n      "action_condition": "True",\n\n      // Optional: Additional list of schema_ids that will trigger the action if a user modified\n      // a field with such name.\n      "additional_user_update_trigger": [],\n\n      // Optional: If set to true, it prevents the action from overwriting the target value when\n      // the user updates it manually.\n      "allow_target_update": false\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"replace_if_this_pattern_matches"})," to apply a transformation. This means if the expression in this parameter is not fulfilled, the source value will be copied as-is to the target value."]})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
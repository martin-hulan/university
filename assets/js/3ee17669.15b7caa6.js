"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9833],{4381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/ai-learning/index","title":"AI training best practices","description":"Rossum\'s AI-powered document processing doesn\'t need complex templates to be built for each vendor layout to be able to predict where the values should be.","source":"@site/docs/learn/ai-learning/index.md","sourceDirName":"learn/ai-learning","slug":"/learn/ai-learning/","permalink":"/docs/learn/ai-learning/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/ai-learning/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"AI training best practices","sidebar_position":1},"sidebar":"learnSidebar","next":{"title":"Rossum Aurora","permalink":"/docs/learn/ai-learning/rossum-aurora"}}');var s=n(4848),r=n(8453);const o={title:"AI training best practices",sidebar_position:1},a=void 0,d={},c=[{value:"\ud83d\ude80 Three key concepts to maintain good AI performance",id:"three-key-concepts-to-maintain-good-ai-performance",level:2},{value:"Precision",id:"precision",level:3},{value:"Accuracy",id:"accuracy",level:3},{value:"Consistency",id:"consistency",level:3},{value:"\ud83d\udedf Common issues",id:"common-issues",level:2},{value:"\ud83e\udd14 Considerations",id:"considerations",level:2},{value:"\ud83c\udfc6 Priority of rules",id:"priority-of-rules",level:2},{value:"\ud83d\ude4b Q&amp;A",id:"qa",level:2},{value:"When should I use multiple queues for my documents?",id:"when-should-i-use-multiple-queues-for-my-documents",level:3},{value:"How can I correct inaccurate annotations to improve AI predictions?",id:"how-can-i-correct-inaccurate-annotations-to-improve-ai-predictions",level:3},{value:"Using Export for documents",id:"using-export-for-documents",level:4},{value:"Using Confirmed status",id:"using-confirmed-status",level:4},{value:"The field does not learn from annotations",id:"the-field-does-not-learn-from-annotations",level:3},{value:"The field does not capture more than one line of data",id:"the-field-does-not-capture-more-than-one-line-of-data",level:3},{value:"Magic Grid disappeared for some annotations",id:"magic-grid-disappeared-for-some-annotations",level:3},{value:"Some pre-trained fields strip characters during data extraction",id:"some-pre-trained-fields-strip-characters-during-data-extraction",level:3},{value:"Dates are mixing formats",id:"dates-are-mixing-formats",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rossum's AI-powered document processing doesn't need complex templates to be built for each vendor layout to be able to predict where the values should be."}),"\n",(0,s.jsx)(t.p,{children:"What the AI needs is precise and consistent data which we can get from User feedback - annotations."}),"\n",(0,s.jsx)(t.p,{children:"Annotations refer to all the captured data from a document. You can recognize them by the blue bounding boxes (b-boxes) that appear on the document after it is processed in Rossum."}),"\n",(0,s.jsx)(t.p,{children:"Please review these resources before starting:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/",children:"Annotations Guide"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/",children:"Interactive Bounding Boxes"})}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["When you first start using our product, it may not be clear what triggers AI learning. You upload your documents and apply corrections, but when will you start seeing improvements? It's simple. Every document must be ",(0,s.jsx)(t.code,{children:"confirmed"})," or ",(0,s.jsx)(t.code,{children:"exported"}),", depending on your settings. The entity confirming the document must be a real person, not an automated process or external script. Depending on your AI engine, you will be able to see changes in newly uploaded documents either immediately or after an agreed-upon time."]})}),"\n",(0,s.jsx)(t.h2,{id:"three-key-concepts-to-maintain-good-ai-performance",children:"\ud83d\ude80 Three key concepts to maintain good AI performance"}),"\n",(0,s.jsx)(t.h3,{id:"precision",children:"Precision"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Check that ",(0,s.jsx)(t.a,{href:"https://rossum.ai/help/article/interactive-bounding-boxes-in-rossum/",children:"bounding boxes"})," are correctly applied to the value.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"No overlapping with another bounding box."}),"\n",(0,s.jsx)(t.li,{children:"The value is captured fully."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"accuracy",children:"Accuracy"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"If value is placed in the wrong field, correct it."}),"\n",(0,s.jsx)(t.li,{children:"If there are typos or other issues, try adjusting the bounding box to get the correct reading."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"consistency",children:"Consistency"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If you have multiple values in a document, it is recommended to always select them from the same position. This is especially important when working with similar or identical layouts. Sometimes, it may be difficult to remember how you annotated a similar document. In such cases, you may want to consult previously confirmed documents or use the following rules to help maintain consistency."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Prefer values that appear earlier in the document."}),"\n",(0,s.jsx)(t.li,{children:"If multiple values can fit, choose the one that is closer to the header part of the document."}),"\n",(0,s.jsx)(t.li,{children:"If multiple values fit but are scattered across multiple pages, choose the one that is closest to the first page (or on the first page if possible)."}),"\n",(0,s.jsx)(t.li,{children:"If the value usually accompanies other fields' values, choose the location that is close to these other fields' values.\nIn case multiple values are on the same level (on the right and left of the bottom of the document) just decide to go always closer to the right side of the document."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Capture all and only the values in the documents."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If there is data in the document that has a corresponding field in the schema for extraction, capture it in each document where it is present, even if you may not need it to be extracted for a particular vendor or in a particular case."}),"\n",(0,s.jsx)(t.li,{children:'Amounts should also always be captured, even if the value on the document is "0".'}),"\n",(0,s.jsx)(t.li,{children:"Conversely, if a value is not present on the invoice, please do not enter it manually."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For in detail explanation please reach out to ",(0,s.jsx)(t.a,{href:"https://rossum.ai/help/article/annotations-guide-and-rules-to-follow/",children:"Annotations Guide"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"common-issues",children:"\ud83d\udedf Common issues"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The AI has predicted the correct value, but the reading of the text is incorrect"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Re-adjust the Bounding Box so that the OCR is applied again"}),"\n",(0,s.jsx)(t.li,{children:"If, after a couple of attempts the value is not corrected, change the value manually"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The AI has predicted the correct value, but only partially or included extra text"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Correct the position of the Bounding Box so that it goes around the correct data"}),"\n",(0,s.jsx)(t.li,{children:"The learning is then stored & will be applied to later annotations"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The date format is read incorrectly"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The date format is pre-defined by the schema"}),"\n",(0,s.jsx)(t.li,{children:"The interpretation of ambiguous dates relies the document region that is set for the queue"}),"\n",(0,s.jsx)(t.li,{children:"Re-adjust the bounding box or ask your Admin to adjust the field to the correct date format, if the formatting is consistently not correct"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"considerations",children:"\ud83e\udd14 Considerations"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Always try to annotate text for names. Avoid logos or visual representations of data."}),"\n",(0,s.jsx)(t.li,{children:"Handwritten data is not currently supported, even though it may be partially recognized."}),"\n",(0,s.jsx)(t.li,{children:"Watermark recognition is not currently supported. If your use case requires this functionality, please contact a Rossum representative for further assistance."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"priority-of-rules",children:"\ud83c\udfc6 Priority of rules"}),"\n",(0,s.jsx)(t.p,{children:"It may happen that some of the recommendations contradict each other in particular cases."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The principles of Precision and Accuracy should take priority."}),"\n",(0,s.jsx)(t.li,{children:"When applying the Consistency principle, be reasonable. For example, if there is a logo at the top of the first page and a written sender name in the footer of the document, choose the footer, even if the recommendation is to prefer the header."}),"\n",(0,s.jsx)(t.li,{children:"Another example is when two values always appear together in the footer, but one of them is also present in the header section (e.g., Sender Name and Sender Address). In this case, you can choose to annotate both together in the footer, but be consistent and do not occasionally switch to another location. In the end, consistency itself is more important"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"qa",children:"\ud83d\ude4b Q&A"}),"\n",(0,s.jsx)(t.h3,{id:"when-should-i-use-multiple-queues-for-my-documents",children:"When should I use multiple queues for my documents?"}),"\n",(0,s.jsx)(t.p,{children:"Different queues should be used if there is a different set of fields to capture from the documents (e.g., if in one case you are capturing tables, and in another, you are not, the documents should be separated into different queues)."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["\u2705 One queue - no need to separate: You have ",(0,s.jsx)(t.code,{children:"Document X"})," with line items and ",(0,s.jsx)(t.code,{children:"Document Y"})," without line items. You capture line items in ",(0,s.jsx)(t.code,{children:"Document X"})," and skip them in ",(0,s.jsx)(t.code,{children:"Document Y"}),". You can have one queue because you train the AI to capture line items where they are present and do not attempt to capture them where they do not exist. This way, you differentiate various layouts and achieve better training."]}),(0,s.jsxs)(t.p,{children:["\u26d4 Two queues are required: You have ",(0,s.jsx)(t.code,{children:"Document Z"})," and ",(0,s.jsx)(t.code,{children:"Document W"}),". Both have line items. You capture line items in ",(0,s.jsx)(t.code,{children:"Document Z"}),", and for some reason, you do not want to spend time correcting/extracting line items from ",(0,s.jsx)(t.code,{children:"Document W"}),". Then, you can't have one unified queue for data capture. Load these documents in two different queues to maximize extraction performance."]}),(0,s.jsx)(t.p,{children:"\u26d4 Multiple queues are required when you have small overlaps in the extracted fields across different document types."})]}),"\n",(0,s.jsx)(t.p,{children:"Documents in unique scripts should be in separate queues (e.g., documents in Latin script should be in one queue, and documents in Cyrillic script in another)."}),"\n",(0,s.jsx)(t.p,{children:"Documents from different regions should also be sent to separate queues to ensure correct date and number parsing."}),"\n",(0,s.jsx)(t.h3,{id:"how-can-i-correct-inaccurate-annotations-to-improve-ai-predictions",children:"How can I correct inaccurate annotations to improve AI predictions?"}),"\n",(0,s.jsx)(t.p,{children:"If you have manually processed a document and later discovered mistakes in the annotations, you can correct them to prevent the AI from repeating these errors."}),"\n",(0,s.jsx)(t.h4,{id:"using-export-for-documents",children:"Using Export for documents"}),"\n",(0,s.jsx)(t.p,{children:'If the document has already been exported, you will need to return it to the "Review" status. To change the document\'s status to "Review", simply select the document and move it to the same queue without re-extracting the data, this action will keep the document in the same queue and change the status. Then, correct the data points and export it again.'}),"\n",(0,s.jsx)(t.h4,{id:"using-confirmed-status",children:"Using Confirmed status"}),"\n",(0,s.jsx)(t.p,{children:'If you are using the "Confirmed" status without exporting, you can open the document in this status and make the necessary edits. Once the changes are made, confirm it again.'}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Depending on your version of the AI engine, changes may affect predictions either immediately or after an agreed-upon period. For more information, please contact Rossum."})}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.p,{children:"Always make sure you fully understand the consequences of re-confirming or re-exporting a document."}),(0,s.jsx)(t.p,{children:"Ensure that exporting again or making changes to a confirmed document does not cause complications with integrations or existing business logic.\nFor example, if you have an integration with a downstream system triggered every time you export data, re-exporting may cause duplicates or errors in that system."})]}),"\n",(0,s.jsx)(t.h3,{id:"the-field-does-not-learn-from-annotations",children:"The field does not learn from annotations"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Check your version of the AI engine. While one version learns almost instantly, another requires some agreed-upon time to pick up confirmed or exported documents. If you are unsure which AI engine you are using, you can review that on the page ",(0,s.jsx)(t.code,{children:"Automation > Automation settings"})," and in the grid is a column with used technology. In case you are very unsure contact a Rossum representative."]}),"\n",(0,s.jsxs)(t.li,{children:["Ensure that you are teaching the AI to extract data into a field that is supposed to capture data directly from the document, never use one that is calculated or matched from another data source.",(0,s.jsx)("br",{}),"\nA common example is fields used for matching data from a document with another data source. These fields use programmatic logic, not AI. If you want to modify the logic of this matching, contact your development team or consult a Rossum representative."]}),"\n",(0,s.jsxs)(t.li,{children:['Ensure that the field has the correct "Value Source." For AI-driven extraction, the "Value Source" must be set to "Captured." You can find this setting in the "Queue Settings -> Fields" section.\n',(0,s.jsx)(t.img,{alt:"value-source",src:n(3408).A+"",width:"1942",height:"554"}),'\nAny other type of "Value Source" will prevent AI learning.']}),"\n",(0,s.jsx)(t.li,{children:'For "Captured" fields, ensure that a representative set of annotated documents has been confirmed or exported.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If none of the above steps help, contact a Rossum representative."}),"\n",(0,s.jsx)(t.h3,{id:"the-field-does-not-capture-more-than-one-line-of-data",children:"The field does not capture more than one line of data"}),"\n",(0,s.jsx)(t.p,{children:"If you are using a custom field to capture multiple lines of data, please consult a Rossum representative. By default, the AI learns from a single line, except for out-of-the-box address fields."}),"\n",(0,s.jsx)(t.h3,{id:"magic-grid-disappeared-for-some-annotations",children:"Magic Grid disappeared for some annotations"}),"\n",(0,s.jsxs)(t.p,{children:["Please check if the new option for annotating tables, ",(0,s.jsx)(t.a,{href:"https://rossum.ai/help/article/aurora-for-complex-tables/",children:"Aurora for Complex Tables"}),", is available. If not, contact your Rossum representative for further assistance."]}),"\n",(0,s.jsx)(t.p,{children:"The reason the Grid may not be fully or partially displayed is due to a shift in technology towards more advanced AI recognition that no longer requires the grid. For example, if some data points in your table are nested under others, the system may be unable to create a reliable grid, as multiple fields may appear in a single column. In such cases, the grid will not be shown."}),"\n",(0,s.jsx)(t.p,{children:"Aurora for Complex Tables avoids these issues since it does not use a grid. However, the annotation process is different, so be sure to familiarize yourself with the best practices."}),"\n",(0,s.jsx)(t.h3,{id:"some-pre-trained-fields-strip-characters-during-data-extraction",children:"Some pre-trained fields strip characters during data extraction"}),"\n",(0,s.jsxs)(t.p,{children:["Certain pre-trained fields are modified when extracted. You can learn more about pre-trained fields in our ",(0,s.jsx)(t.a,{href:"https://elis.rossum.ai/api/docs/#identifiers",children:"documentation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Below is a list of fields that undergo modification (please refer to the documentation for the most up-to-date information):"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attr. rir_field_names"}),(0,s.jsx)(t.th,{children:"Field label"}),(0,s.jsx)(t.th,{children:"Modification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"account_num"})}),(0,s.jsx)(t.td,{children:"Bank Account"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"var_sym"})}),(0,s.jsx)(t.td,{children:"Variable symbol"}),(0,s.jsx)(t.td,{children:"Possible non-numeric characters are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customer_id"})}),(0,s.jsx)(t.td,{children:"Customer Number"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"document_id"})}),(0,s.jsx)(t.td,{children:"Document Identifier"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"order_id"})}),(0,s.jsx)(t.td,{children:"Order Number"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"recipient_dic"})}),(0,s.jsx)(t.td,{children:"Recipient Tax Number"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"recipient_ic"})}),(0,s.jsx)(t.td,{children:"Recipient Company ID"}),(0,s.jsx)(t.td,{children:"Possible non-numeric characters are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sender_dic"})}),(0,s.jsx)(t.td,{children:"Supplier Tax Number"}),(0,s.jsx)(t.td,{children:"Whitespaces are stripped"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sender_ic"})}),(0,s.jsx)(t.td,{children:"Supplier Company ID"}),(0,s.jsx)(t.td,{children:"Possible non-numeric characters are stripped"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"If you need to prevent these modifications, please contact a Rossum representative."}),"\n",(0,s.jsx)(t.h3,{id:"dates-are-mixing-formats",children:"Dates are mixing formats"}),"\n",(0,s.jsx)(t.p,{children:"In some cases, despite the date format you have chosen in the schema for your date field, you may notice extraction errors. Specifically, days, months, and years may be confused.\nThis occurs because the formatting you define per field in the schema represents the desired output format, not how the system actually interprets dates."}),"\n",(0,s.jsxs)(t.p,{children:["In cases where the date is not ",(0,s.jsx)(t.strong,{children:"ambiguous"}),", the system does attempt to follow the format you specified. However, for more complex dates, it uses a different approach.\nWhat are ",(0,s.jsx)(t.strong,{children:"ambiguous"})," dates?"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Dates with incomplete years (e.g., "24" could represent either a day or a year).'}),"\n",(0,s.jsxs)(t.li,{children:["Dates where both the day and month are 12 or less, such as ",(0,s.jsx)(t.code,{children:"12/11/2024"}),'. In this case, the system cannot determine whether "12" represents the day or the month.']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We understand that your documents may not consistently follow one format. For example, one document might use the European format ",(0,s.jsx)(t.code,{children:"DD/MM/YYYY"}),", while another uses the American format ",(0,s.jsx)(t.code,{children:"MM/DD/YYYY"}),". For this reason, the system cannot rely solely on the specified format.\n",(0,s.jsx)(t.strong,{children:"To determine the correct date, the system evaluates all variations and chooses the date closest to the document\u2019s arrival time."})," This approach works reliably for recent documents, but it may produce errors for older documents or those containing older dates."]}),"\n",(0,s.jsx)(t.p,{children:"Let's check the example:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Today is December 23rd, 2024"}),"\n",(0,s.jsxs)(t.li,{children:["Document has date ",(0,s.jsx)(t.em,{children:"9/11/24"})]}),"\n",(0,s.jsxs)(t.li,{children:["Your schema assumes American format ",(0,s.jsx)(t.code,{children:"MM/DD/YYYY"}),". Then it gives us the following variations: ",(0,s.jsx)(t.em,{children:"9/11/2024"}),", ",(0,s.jsx)(t.em,{children:"11/09/2024"}),", ",(0,s.jsx)(t.em,{children:"9/24/2011"}),", ",(0,s.jsx)(t.em,{children:"11/24/2009"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The closest date to December 23rd, 2024 is ",(0,s.jsx)(t.em,{children:"11/09/2024"}),". This date will be selected."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3408:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/value-source-a22098ae8f03b60e1d99d97c6f5fdd70.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
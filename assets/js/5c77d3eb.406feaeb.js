"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[5243],{9255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=n(5893),a=n(1151);const o={title:"Master data hub"},i=void 0,r={id:"extensions/master-data-hub/index",title:"Master data hub",description:"What is the Master Data Hub extension",source:"@site/docs/extensions/master-data-hub/index.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/",permalink:"/cookbook/docs/extensions/master-data-hub/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/index.md",tags:[],version:"current",frontMatter:{title:"Master data hub"},sidebar:"extensionsSidebar",previous:{title:"Configuration examples",permalink:"/cookbook/docs/extensions/line-item-grouping/configuration-examples"},next:{title:"Dataset management",permalink:"/cookbook/docs/extensions/master-data-hub/dataset-management"}},h={},d=[{value:"What is the Master Data Hub extension",id:"what-is-the-master-data-hub-extension",level:2},{value:"How to enable the Master Data Hub extension",id:"how-to-enable-the-master-data-hub-extension",level:2},{value:"Step 1: Prepare your queues and schemas",id:"step-1-prepare-your-queues-and-schemas",level:3},{value:"Step 2: Activate the Master Data Hub extension in the Rossum Store",id:"step-2-activate-the-master-data-hub-extension-in-the-rossum-store",level:3},{value:"Step 3: Specify the queues to which you want to add the extension",id:"step-3-specify-the-queues-to-which-you-want-to-add-the-extension",level:3},{value:"Step 4: Assign the token owner",id:"step-4-assign-the-token-owner",level:3},{value:"Step 5: Save the configuration",id:"step-5-save-the-configuration",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"what-is-the-master-data-hub-extension",children:"What is the Master Data Hub extension"}),"\n",(0,s.jsx)(t.p,{children:"Master Data Hub is like having a helpful assistant that can match important information from your documents, such as vendor names, customer names, addresses, and payment details, with the data you already have in your system or database."}),"\n",(0,s.jsx)(t.p,{children:"Let's say you receive invoices from different vendors. With Master Data Hub, you can make sure that you only process invoices from vendors that are already in your database (ERP system). It can also help you find the right purchase order connected to an invoice and matches individual items listed on the invoice."}),"\n",(0,s.jsxs)(t.p,{children:["You can easily upload your own data in different formats - supported are ",(0,s.jsx)(t.code,{children:".json"}),", ",(0,s.jsx)(t.code,{children:".xml"}),", ",(0,s.jsx)(t.code,{children:".csv"}),", or ",(0,s.jsx)(t.code,{children:".xlsx"})," and use advanced searching to match the information extracted from your documents with the uploaded data. It opens up a whole new world of possibilities for accurate data matching!"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-enable-the-master-data-hub-extension",children:"How to enable the Master Data Hub extension"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-prepare-your-queues-and-schemas",children:"Step 1: Prepare your queues and schemas"}),"\n",(0,s.jsx)(t.p,{children:"To get started, you can begin by identifying the queues that contain the documents requiring this extension. Once identified, the next step is to set up a matching field. This field is a part of your schema and can be found on the validation screen. It displays the identified match or a message if no match is found."}),"\n",(0,s.jsx)(t.p,{children:'Setting up a matching field is a one-time process per queue. You simply need to add the field in the "Fields to capture" section of the relevant queue settings. You have the flexibility to define the "Label" and unique "ID" for the field according to your preferences. The field must be an enum, as shown in the example below:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "rir_field_names": [],\n  "constraints": {\n    "required": false\n  },\n  "default_value": null,\n  "category": "datapoint",\n  "id": "vendor_match",\n  "label": "Vendor ID",\n  "type": "enum",\n  "options": []\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: matching enum",src:n(4562).Z+"",width:"1024",height:"498"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Pro Tip"}),": If you want to use the result of one data matching configuration, in a query of a different matching configuration, and the data type of the subsequent query attribute is a number, you can specify ",(0,s.jsx)(t.code,{children:'"enum_value_type" : "number"'})," attribute in the queue schema."]}),"\n",(0,s.jsxs)(t.p,{children:["Real-life example: In the first query, you find a vendor using their VAT ID and get back vendor ID, which is a number. In the following query, you want to find all purchase orders linked to that vendor using the vendor ID. Now, since Rossum keeps all information as strings, you can guide the data matching process to treat the vendor ID as a number by using ",(0,s.jsx)(t.code,{children:'"enum_value_type": "number"'}),". This ensures that the vendor ID from the annotation data is converted to a number before using it in the query to gather the purchase orders."]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-activate-the-master-data-hub-extension-in-the-rossum-store",children:"Step 2: Activate the Master Data Hub extension in the Rossum Store"}),"\n",(0,s.jsx)(t.p,{children:"To activate the extension, follow these steps in the Rossum application:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Click on the "Add-ons" tab at the top of the app'}),"\n",(0,s.jsx)(t.li,{children:'Choose the "Rossum store" option to access all available extensions'}),"\n",(0,s.jsx)(t.li,{children:'Select the "Data matching v2" extension'}),"\n",(0,s.jsx)(t.li,{children:'Click on "Try extension"'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: try extension",src:n(7223).Z+"",width:"1024",height:"500"})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-specify-the-queues-to-which-you-want-to-add-the-extension",children:"Step 3: Specify the queues to which you want to add the extension"}),"\n",(0,s.jsx)(t.p,{children:'To configure the extension, navigate to the "Rossum Store Extension Settings" and scroll down until you find the "Queues" section. In this section, you can select the specific queues where you want to use the extension.'}),"\n",(0,s.jsx)(t.p,{children:"Once the extension is activated for a queue, it will be automatically triggered whenever a new document is added to the queue or if a user makes changes to a value specified in any of the matching rules."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: select queue",src:n(4842).Z+"",width:"1024",height:"500"})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-assign-the-token-owner",children:"Step 4: Assign the token owner"}),"\n",(0,s.jsx)(t.p,{children:'Token owner must have an "Admin" role assigned in Rossum. User queries the database and adds the results to annotation data.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Master Data Hub: token owner",src:n(9881).Z+"",width:"1024",height:"498"})}),"\n",(0,s.jsx)(t.h3,{id:"step-5-save-the-configuration",children:"Step 5: Save the configuration"}),"\n",(0,s.jsx)(t.p,{children:"Once you have made your selections, don't forget to save your changes to ensure they take effect properly."})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4562:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mdh-matching-enum-8258e998d13be1e0dc4d3737148ff7e8.png"},4842:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mdh-select-queue-36f41c85528d7835c2e0b2f4067fe63d.png"},9881:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mdh-token-owner-31aaa569e6a532215f405443a979c47b.png"},7223:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/mdh-try-extension-594032cc91a692f4cac849c9c10d48cc.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[2167],{3643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(5893),i=n(1151);const o={title:"NetSuite"},r=void 0,c={id:"extensions/netsuite/index",title:"NetSuite",description:"Webhook configuration",source:"@site/docs/extensions/netsuite/index.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/",permalink:"/cookbook/docs/extensions/netsuite/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/netsuite/index.md",tags:[],version:"current",frontMatter:{title:"NetSuite"},sidebar:"extensionsSidebar",previous:{title:"Using API",permalink:"/cookbook/docs/extensions/master-data-hub/using-api"},next:{title:"Configuration",permalink:"/cookbook/docs/extensions/netsuite/configuration"}},l={},a=[{value:"Webhook configuration",id:"webhook-configuration",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"System context diagram",id:"system-context-diagram",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"webhook-configuration",children:"Webhook configuration"}),"\n",(0,s.jsx)(t.admonition,{title:"TODO",type:"warning",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Describe how to create and configure the extension."})})}),"\n",(0,s.jsx)(t.p,{children:"Import endpoints:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/import",children:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/import"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import",children:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"US2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import",children:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsx)(t.p,{children:"NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Accounts: ",(0,s.jsx)(t.code,{children:"/app/accounting/account/accounts.nl"})]}),"\n",(0,s.jsxs)(t.li,{children:["Currencies: ",(0,s.jsx)(t.code,{children:"/app/common/multicurrency/currencylist.nl"})]}),"\n",(0,s.jsxs)(t.li,{children:["Items: ",(0,s.jsx)(t.code,{children:"/app/common/item/itemlist.nl"})]}),"\n",(0,s.jsxs)(t.li,{children:["Purchase Orders: ",(0,s.jsx)(t.code,{children:"/app/accounting/transactions/purchordermanager.nl?type=proc"})]}),"\n",(0,s.jsxs)(t.li,{children:["Subsidiaries: ",(0,s.jsx)(t.code,{children:"/app/common/otherlists/subsidiarylist.nl"})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendor Bills: ",(0,s.jsx)(t.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill"})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendor Credits: ",(0,s.jsx)(t.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred"})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendors: ",(0,s.jsx)(t.code,{children:"/app/common/entity/vendorlist.nl"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"system-context-diagram",children:"System context diagram"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"NetSuite system context diagram",src:n(3768).Z+"",width:"4264",height:"1764"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3768:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rossum-netsuite-system-context-diagram-f4b8c75eb17ac944a71986791353f670.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
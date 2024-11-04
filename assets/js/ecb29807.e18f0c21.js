"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2343],{101:(e,t,n)=>{n.d(t,{Ay:()=>p,RM:()=>o});var r=n(4848),i=n(8453);const o=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,r.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,r.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,r.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]})})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},2018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"learn/export-pipeline/index","title":"Export pipelines","description":"After documents are processed in Rossum, the extracted data typically need to be exported to the downstream systems. The Rossum team has prepared an \\"Export pipeline\\" for this very purpose.","source":"@site/docs/learn/export-pipeline/index.md","sourceDirName":"learn/export-pipeline","slug":"/learn/export-pipeline/","permalink":"/docs/learn/export-pipeline/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/export-pipeline/index.md","tags":[],"version":"current","frontMatter":{"title":"Export pipelines"},"sidebar":"learnSidebar","previous":{"title":"Email body converter","permalink":"/docs/learn/emails/email-body-converter"},"next":{"title":"1. Custom format templating purge","permalink":"/docs/learn/export-pipeline/custom-format-templating-purge"}}');var i=n(4848),o=n(8453),s=n(101);function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{title:"Additional info for Rossum employees",type:"info",children:(0,i.jsxs)(t.p,{children:["Please visit the following restricted link to learn more: ",(0,i.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.url})]})})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}const a={title:"Export pipelines"},d=void 0,c={},x=[{value:"Components of Export pipelines",id:"components-of-export-pipelines",level:2},{value:"How to use Export pipelines",id:"how-to-use-export-pipelines",level:2},{value:"Simple SFTP export pipeline",id:"simple-sftp-export-pipeline",level:3},{value:"Simple API export pipeline",id:"simple-api-export-pipeline",level:3},{value:"Complex API export pipeline",id:"complex-api-export-pipeline",level:3},...s.RM];function h(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'After documents are processed in Rossum, the extracted data typically need to be exported to the downstream systems. The Rossum team has prepared an "Export pipeline" for this very purpose.'}),"\n",(0,i.jsx)(l,{url:"https://rossumai.atlassian.net/l/cp/t2we9106"}),"\n",(0,i.jsx)(t.h2,{id:"components-of-export-pipelines",children:"Components of Export pipelines"}),"\n",(0,i.jsx)(t.p,{children:"The export pipeline consists of the following components chained together:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/custom-format-templating-purge",children:"Custom format templating purge"}),", a cleaning mechanism that prepares the pipeline for export."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/custom-format-templating",children:"Custom format templating"}),", prepares the desired format for an export."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/rest-api-export",children:"REST API export"}),", exports the prepared data to REST API and stores the reply."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/data-value-extractor",children:"Data value extractor"})," extracts important data from the API reply and stores them in the annotation object, e.g. downstream document ID, HTTP status codes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/learn/export-pipeline/export-evaluator",children:"Export evaluator"})," that decides whether the export is successful or it has failed."]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, ",(0,i.jsx)(t.a,{href:"/docs/learn/sftp-s3-import-export/",children:"SFTP Export"}),", upload the prepared data to SFTP or S3 file storage."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-export-pipelines",children:"How to use Export pipelines"}),"\n",(0,i.jsx)(t.p,{children:'All the components of Export pipelines are typically connected by the standard extension chaining mechanism "run-after". Here are several extension chains demonstrated:'}),"\n",(0,i.jsx)(t.h3,{id:"simple-sftp-export-pipeline",children:"Simple SFTP export pipeline"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Custom format templating prepares extracted data in desired format."}),"\n",(0,i.jsx)(t.li,{children:"SFTP export stores data in on an SFTP (or S3)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"simple-api-export-pipeline",children:"Simple API export pipeline"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"(Optional) Pipeline cleaning cleans previous export data (relevant for debugging)."}),"\n",(0,i.jsx)(t.li,{children:"Custom format templating prepares extracted data in desired format."}),"\n",(0,i.jsx)(t.li,{children:"REST API calls an external API service and sends the prepared data. The extension also stores returned values including status code."}),"\n",(0,i.jsx)(t.li,{children:"Extract data to store needed information in the document (e.g. status code)"}),"\n",(0,i.jsx)(t.li,{children:"Export evaluator that based on condition decides whether the export is succesfful (e.g. status code = 200, 201)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"complex-api-export-pipeline",children:"Complex API export pipeline"}),"\n",(0,i.jsx)(s.Ay,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>p});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4710],{8448:(e,s,t)=>{t.d(s,{Ay:()=>a,RM:()=>o});var i=t(4848),n=t(8453);const o=[];function r(e){const s={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(s.admonition,{title:"Work in progress",type:"warning",children:[(0,i.jsxs)(s.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,i.jsx)(s.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,i.jsx)(s.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,i.jsxs)(s.p,{children:["Tracking issue: ",(0,i.jsx)(s.a,{href:e.issue,children:e.issue})]}):""]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},594:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/sftp-s3-import-export/index","title":"SFTP and S3 imports/exports","description":"Installation","source":"@site/docs/learn/sftp-s3-import-export/index.md","sourceDirName":"learn/sftp-s3-import-export","slug":"/learn/sftp-s3-import-export/","permalink":"/docs/learn/sftp-s3-import-export/","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/sftp-s3-import-export/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"SFTP and S3 imports/exports","sidebar_position":1},"sidebar":"learnSidebar","previous":{"title":"Deployment patterns","permalink":"/docs/learn/sandboxes/deployment-patterns"},"next":{"title":"Configuration examples","permalink":"/docs/learn/sftp-s3-import-export/configuration-examples"}}');var n=t(4848),o=t(8453),r=t(8448);const a={title:"SFTP and S3 imports/exports",sidebar_position:1},l=void 0,d={},c=[{value:"Installation",id:"installation",level:2},...r.RM,{value:"Basic usage",id:"basic-usage",level:2},...r.RM,{value:"Available configuration options",id:"available-configuration-options",level:2},{value:"Logging and observability",id:"logging-and-observability",level:2},{value:"Extensions Logs",id:"extensions-logs",level:3},{value:"Master Data Hub",id:"master-data-hub",level:3}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(s.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(s.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,n.jsxs)(s.p,{children:["Available configuration options are described in the API documentation of the ",(0,n.jsx)(s.a,{href:"https://elis.rossum.ai/svc/scheduled-imports/api/docs#tag/File-Storage/operation/import_dataset_from_file_storage_api_file_storage_v1_dataset_import_post",children:"Scheduled Imports - File storage"})]}),"\n",(0,n.jsx)(s.h2,{id:"logging-and-observability",children:"Logging and observability"}),"\n",(0,n.jsx)(s.h3,{id:"extensions-logs",children:"Extensions Logs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["URL ",(0,n.jsx)(s.code,{children:"https://[org].rossum.app/settings/extensions/logs"})]}),"\n",(0,n.jsxs)(s.li,{children:["The import job is not triggered directly, but using scheduler. Thus successfull record (type ",(0,n.jsx)(s.code,{children:"INFO"}),") in the Extensions Logs does not necessary means the downstream import job was sucessfull, but it is a good start for observation"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"master-data-hub",children:"Master Data Hub"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["URL: ",(0,n.jsx)(s.code,{children:"https://[org].rossum.app/svc/master-data-hub/web/management"})]}),"\n",(0,n.jsx)(s.li,{children:'Directly in the MDH, there is a status screen "Upload Status", regardless of the origin of "upload".'}),"\n",(0,n.jsx)(s.li,{children:"There is also note with the more detailed info in case of some error."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Upload Status",src:t(8923).A+"",width:"2848",height:"1802"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8923:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/upload-status-134e5170dee6e466552d0351932b44e0.png"},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var i=t(6540);const n={},o=i.createContext(n);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);
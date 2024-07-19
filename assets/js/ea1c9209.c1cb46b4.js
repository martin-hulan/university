"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2691],{7526:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(5893),o=t(1151),s=t(9047);const a=[];function r(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(s.Z,{type:"info",icon:"\ud83d\udd12",title:"Paid feature",children:(0,i.jsxs)(n.p,{children:["This is a paid feature and requires involvement of Rossum Sales and/or Rossum Professional Services. Consider contacting the respective teams using the following form: ",(0,i.jsx)(n.a,{href:"https://rossum.ai/form/contact/",children:"https://rossum.ai/form/contact/"})]})})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},5552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(5893),o=t(1151),s=t(7526);const a={title:"Sandboxes"},r=void 0,l={id:"learn/sandboxes/index",title:"Sandboxes",description:"Rossum Sandboxes allow for isolated development of the solution and easy deployments of the tested solution to production.",source:"@site/docs/learn/sandboxes/index.md",sourceDirName:"learn/sandboxes",slug:"/learn/sandboxes/",permalink:"/docs/learn/sandboxes/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/learn/sandboxes/index.md",tags:[],version:"current",frontMatter:{title:"Sandboxes"},sidebar:"learnSidebar",previous:{title:"Serverless functions",permalink:"/docs/learn/rossum-formulas/serverless-functions"},next:{title:"Deployment patterns",permalink:"/docs/learn/sandboxes/deployment-patterns"}},c={},d=[...s.d$,{value:"Installation",id:"installation",level:2},{value:"Available CLI commands",id:"available-cli-commands",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2},{value:"Configuring <code>mapping.yaml</code> file",id:"configuring-mappingyaml-file",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.p,{children:"Rossum Sandboxes allow for isolated development of the solution and easy deployments of the tested solution to production."}),"\n",(0,i.jsxs)(n.p,{children:["Using Sandboxes currently requires installation of an external tooling available at: ",(0,i.jsx)(n.a,{href:"https://github.com/rossumai/prd",children:"https://github.com/rossumai/prd"})]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["First, download the Sandboxing tool ",(0,i.jsx)(n.code,{children:"prd"})," locally:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:rossumai/prd.git\ncd prd\n"})}),"\n",(0,i.jsx)(n.p,{children:"And install it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"brew install pipx\npipx ensurepath\npipx install .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will install the Sandboxing tool in the ",(0,i.jsx)(n.code,{children:"~/.local/bin"})," folder making it available globally under command ",(0,i.jsx)(n.code,{children:"prd"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To upgrade to the latest version, run (from the same Git directory):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git pull\npipx install . --force\n"})}),"\n",(0,i.jsx)(n.h2,{id:"available-cli-commands",children:"Available CLI commands"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"prd"})," is a CLI tool and offers the following main commands:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd init"}),": Initialize a new project (creates a ",(0,i.jsx)(n.code,{children:"credentials.json"})," file). When called with a project name, it also initialized an empty Git repository."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd pull"}),": Pulls all objects from both ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"target"})," organizations (as per ",(0,i.jsx)(n.code,{children:"credentials.json"})," configuration). It is possible to explicitly specify ",(0,i.jsx)(n.code,{children:"source"}),"/",(0,i.jsx)(n.code,{children:"target"})," to pull only that one environment, for example: ",(0,i.jsx)(n.code,{children:"prd pull source"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd push"}),": Pushes the latest changes to the ",(0,i.jsx)(n.code,{children:"source"})," organization. This is effectively a counterpart of the ",(0,i.jsx)(n.code,{children:"pull"})," command."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd release"}),": Pushes the latest changes to the ",(0,i.jsx)(n.code,{children:"target"})," organization. Visit ",(0,i.jsx)(n.a,{href:"/docs/learn/sandboxes/deployment-patterns#two-environments-for-sandbox-and-production",children:"Deployment patterns"})," to learn more about this use-case."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd purge"}),": Removes all objects in the target organization."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prd purge unused_schemas"}),": Removes old unused schemas."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Complete list of commands and their parameters can be found when running ",(0,i.jsx)(n.code,{children:"prd --help"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,i.jsxs)(n.p,{children:["The only necessary configuration is in the ",(0,i.jsx)(n.code,{children:"credentials.json"})," file right after running ",(0,i.jsx)(n.code,{children:"prd init"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Default configuration using username and password:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // Source organization (typically the only one needed).\n  "source": {\n    // API base URL. Consult with your support team (SA) in case you are not sure what\n    // the value should be.\n    "api_base": "https://api.elis.rossum.ai/v1",\n\n    // Username under which `prd` will be calling the API.\n    "username": "...",\n\n    // Password for the user under which `prd` will be calling the API.\n    "password": "..."\n  },\n\n  // Configures whether source organization should be used as a target organization or not.\n  "use_same_org_as_target": true,\n\n  // Target organization in case it is necessary to release into a different organization\n  // from source. The configuration is identical with `source` parameter.\n  "target": {\n    "api_base": "...",\n    "username": "...",\n    "password": "..."\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Alternatively, you can use API token instead of username and password if you have it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "source": {\n    "api_base": "https://api.elis.rossum.ai/v1",\n    // highlight-start\n    "token": "..." // use API token instead of username/password\n    // highlight-end\n  },\n  "use_same_org_as_target": true,\n  "target": {\n    "api_base": "...",\n    "token": "..."\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"configuring-mappingyaml-file",children:["Configuring ",(0,i.jsx)(n.code,{children:"mapping.yaml"})," file"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that this file is automatically generated by the ",(0,i.jsx)(n.code,{children:"prd pull"})," command. It is typically not necessary to configure it manually unless some more advanced use-case is needed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# The main key describing `source` organization details:\nORGANIZATION:\n  # ID of the `source` organization:\n  id: 123456\n  # Name of the `source` organization:\n  name: MyOrganization (Sandbox)\n  targets:\n    # ID of the `target` organization (if any):\n    - target_id: 654321\n  WORKSPACES:\n    # IDs of the `source` workspaces:\n    - id: 123456\n      # Name of the `source` workspace:\n      name: 'My Test Workspace'\n      targets:\n        # ID(s) of the `target` workspace(s) (there can be none or more than one):\n        - target_id: null\n      QUEUES:\n        # IDs of the `source` queues belonging to the `source` workspace above:\n        - id: 123456\n          # Name of the `source` queue:\n          name: Invoices\n          targets:\n            # ID(s) of the `target` queue(s) (there can be none or more than one):\n            - target_id: null\n          INBOX:\n            # IDs of the `source` inbox belonging to the `source` queue above:\n            id: 123456\n            # Name of the `source` inbox:\n            name: Invoices\n            targets:\n              # ID(s) of the `target` inbox(s) (there can be none or more than one):\n              - target_id: null\n  HOOKS:\n    # IDs of the `source` hooks:\n    - id: 123456\n      # Name of the `source` hook:\n      name: Supplier Data Matching\n      targets:\n        # ID(s) of the `target` hook(s) (there can be none or more than one):\n        - target_id: null\n  SCHEMAS:\n    # IDs of the `source` schemas:\n    - id: 123456\n      # Name of the `source` schema:\n      name: Tax invoices (US) schema\n      targets:\n        # ID(s) of the `target` schema(s) (there can be none or more than one):\n        - target_id: null\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9047:(e,n,t)=>{t.d(n,{Z:()=>T});var i=t(7294),o=t(5893);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:s.length>0?(0,o.jsx)(o.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var a=t(512),r=t(5999),l=t(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,o.jsx)("div",{className:(0,a.Z)(l.k.common.admonition,l.k.common.admonitionType(n),c.admonition,t),children:i})}function h(e){let{icon:n,title:t}=e;return(0,o.jsxs)("div",{className:c.admonitionHeading,children:[(0,o.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:c.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:s,className:a}=e;return(0,o.jsxs)(d,{type:n,className:a,children:[i||t?(0,o.jsx)(h,{title:i,icon:t}):null,(0,o.jsx)(u,{children:s})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,o.jsx)(m,{...x,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,o.jsx)(m,{...j,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function b(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,o.jsx)(b,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,o.jsx)(m,{...y,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function N(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const I={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function z(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,o.jsx)(z,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,o.jsx)(N,{}),title:(0,o.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const S={...{note:f,tip:v,info:w,warning:function(e){return(0,o.jsx)(m,{...I,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(m,{...C,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(f,{title:"secondary",...e}),important:e=>(0,o.jsx)(w,{title:"important",...e}),success:e=>(0,o.jsx)(v,{title:"success",...e}),caution:function(e){return(0,o.jsx)(m,{...k,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=s(e),t=(i=n.type,S[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),S.info));var i;return(0,o.jsx)(t,{...n})}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
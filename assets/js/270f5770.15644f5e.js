"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[9201],{7658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"learn/line-items-grouping/alternative-python-solution","title":"Line items grouping: Alternative Python solution","description":"Consider using the following simple Python code (as a serverless function) that replaces the whole functionality of this extension (no need for any webhook):","source":"@site/docs/learn/line-items-grouping/alternative-python-solution.md","sourceDirName":"learn/line-items-grouping","slug":"/learn/line-items-grouping/alternative-python-solution","permalink":"/docs/learn/line-items-grouping/alternative-python-solution","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/line-items-grouping/alternative-python-solution.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Alternative Python solution","title":"Line items grouping: Alternative Python solution"},"sidebar":"learnSidebar","previous":{"title":"Configuration examples","permalink":"/docs/learn/line-items-grouping/configuration-examples"},"next":{"title":"Master data hub","permalink":"/docs/learn/master-data-hub/"}}');var i=n(4848),r=n(8453);const s={sidebar_position:2,sidebar_label:"Alternative Python solution",title:"Line items grouping: Alternative Python solution"},a="Alternative Python solution",l={},u=[];function d(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"alternative-python-solution",children:"Alternative Python solution"})}),"\n",(0,i.jsxs)(t.p,{children:["Consider using the following simple Python code (as a ",(0,i.jsx)(t.a,{href:"/docs/learn/rossum-formulas/serverless-functions",children:"serverless function"}),") that replaces the whole functionality of this extension (no need for any webhook):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'import pandas as pd\nfrom rossum_python import RossumPython, is_empty, default_to, is_set\n\n\ndef sum_values(values):\n    """Sums values if there are any, otherwise returns an empty string (not zero)."""\n    return sum(v for v in values if is_set(v)) if any(is_set(v) for v in values) else \'\'\n\n\ndef rossum_hook_request_handler(payload):\n    x = RossumPython.from_payload(payload)\n\n    # Reset the target table:\n    x.field.line_items_grouped = []\n\n    # Collect all relevant data:\n    data = []\n    for row in x.field.line_items:\n        data.append({\n            "item_rate_grouped": row.item_rate.attr.value,  # Must use attr.value because of the `groupby` call!\n            "item_description_grouped": row.item_description,\n            "item_total_base_grouped": row.item_total_base,\n            "item_tax_grouped": row.item_tax,\n            "item_amount_total_grouped": row.item_amount_total,\n        })\n\n    # Group the data if any:\n    if len(data) > 0:\n        # https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html\n        x.field.line_items_grouped = (\n            pd.DataFrame(data)\n            .groupby(\'item_rate_grouped\')\n            .agg({\n                "item_description_grouped": "first",\n                "item_total_base_grouped": sum_values,\n                "item_tax_grouped": sum_values,\n                "item_amount_total_grouped": sum_values\n            })\n            .reset_index().to_dict("records")\n        )\n\n    return x.hook_response()\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
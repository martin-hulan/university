"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[4759],{101:(e,t,n)=>{n.d(t,{Ay:()=>r,RM:()=>i});var a=n(4848),o=n(8453);const i=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(t.admonition,{title:"Work in progress",type:"warning",children:[(0,a.jsxs)(t.p,{children:["We're still working on this part and would love to hear your thoughts! Feel free to ",(0,a.jsx)(t.a,{href:"https://github.com/rossumai/university/discussions",children:"share your feedback"})," or ",(0,a.jsx)(t.a,{href:"https://github.com/rossumai/university/pulls",children:"submit a pull request"}),". Thank you! \ud83d\ude4f"]}),e.issue?(0,a.jsxs)(t.p,{children:["Tracking issue: ",(0,a.jsx)(t.a,{href:e.issue,children:e.issue})]}):""]})}function r(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},4423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>_});const a=JSON.parse('{"id":"learn/rossum-formulas/serverless-functions","title":"Rossum Formulas: Serverless functions","description":"Examples of common or interesting serverless functions (using TxScript flavor).","source":"@site/docs/learn/rossum-formulas/serverless-functions.md","sourceDirName":"learn/rossum-formulas","slug":"/learn/rossum-formulas/serverless-functions","permalink":"/docs/learn/rossum-formulas/serverless-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/rossumai/university/tree/master/docs/learn/rossum-formulas/serverless-functions.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Serverless functions","title":"Rossum Formulas: Serverless functions"},"sidebar":"learnSidebar","previous":{"title":"Formula fields","permalink":"/docs/learn/rossum-formulas/formula-fields"},"next":{"title":"Sandboxes","permalink":"/docs/learn/sandboxes/"}}');var o=n(4848),i=n(8453),s=n(101);const r={sidebar_position:2,sidebar_label:"Serverless functions",title:"Rossum Formulas: Serverless functions"},l="Serverless functions",d={},_=[{value:"Automatic adjustments to the issue date format",id:"automatic-adjustments-to-the-issue-date-format",level:2},{value:"Copy fields conditionally",id:"copy-fields-conditionally",level:2},{value:"Get annotation information",id:"get-annotation-information",level:2},{value:"Get document information",id:"get-document-information",level:2},{value:"Get queue name",id:"get-queue-name",level:2},{value:"Validate header fields",id:"validate-header-fields",level:2},{value:"Validate line items",id:"validate-line-items",level:2},{value:"Accounts Payable Checks",id:"accounts-payable-checks",level:2},...s.RM,{value:"Fetch OCR Text (page_data)",id:"fetch-ocr-text-page_data",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"serverless-functions",children:"Serverless functions"})}),"\n",(0,o.jsxs)(t.p,{children:["Examples of common or interesting serverless functions (using ",(0,o.jsx)(t.code,{children:"TxScript"})," flavor)."]}),"\n",(0,o.jsx)(t.h2,{id:"automatic-adjustments-to-the-issue-date-format",children:"Automatic adjustments to the issue date format"}),"\n",(0,o.jsxs)(t.p,{children:["It can sometimes happen that invoices have dates in format ",(0,o.jsx)(t.code,{children:"M/D/YYYY"}),' format. But because the queue is in the UK region (for example), Rossum sometimes understands the dates incorrectly (5/1/2024 on the invoice is incorrectly read as "Jan 5th" instead of the correct "May 1st"). There is simply no way for Rossum AI to know what the correct date should be (especially when the queue region suggests something else).']}),"\n",(0,o.jsx)(t.p,{children:"This can be additionally corrected using the following simple code (if we know for what specific vendor this should be done):"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"from datetime import datetime\nfrom txscript import TxScript, is_empty\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    relevant_entities = [\n        \"123456\"  # Vendor ABC\n    ]\n\n    t.field.date_issue_normalized = flip_day_month(t.field.date_issue) if t.field.ns_entity_match in relevant_entities else t.field.date_issue\n\n    return t.hook_response()\n\n\ndef flip_day_month(date_value):\n    if is_empty(date_value):\n        return date_value\n\n    day, month = date_value.day, date_value.month\n    raw_text = date_value.ocr_raw_text or date_value.rir_raw_text\n\n    try:\n        raw_month, raw_day, raw_year = map(int, raw_text.split('/'))\n    except ValueError:\n        # Handle case where raw text isn't in the expected format\n        return date_value\n\n    # Check if the date might be misinterpreted (e.g., 5/1/2024 as January 5th instead of May 1st)\n    if day == raw_day and month == raw_month:\n        # No flip needed if day/month match the expected positions\n        return date_value\n\n    # Check if flipping makes logical sense (both day and month must be 12 or below)\n    if day <= 12 and month <= 12:\n        return datetime(date_value.year, day=month, month=day)\n    else:\n        return date_value\n"})}),"\n",(0,o.jsx)(t.h2,{id:"copy-fields-conditionally",children:"Copy fields conditionally"}),"\n",(0,o.jsxs)(t.p,{children:["Copies either ",(0,o.jsx)(t.code,{children:"order_id_manual"})," or ",(0,o.jsx)(t.code,{children:"order_id"})," into ",(0,o.jsx)(t.code,{children:"order_id_normalized"})," depending on whether the manual field is filled or not:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"from txscript import TxScript, is_set\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    if is_set(t.field.order_id_manual):\n        t.field.order_id_normalized = t.field.order_id_manual\n    else:\n        t.field.order_id_normalized = t.field.order_id\n\n    return t.hook_response()\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that this is just for illustrative purposes. For this particular use-case, always prefer making ",(0,o.jsx)(t.code,{children:"order_id_normalized"})," a ",(0,o.jsx)(t.a,{href:"/docs/learn/rossum-formulas/formula-fields",children:"formula field"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"get-annotation-information",children:"Get annotation information"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'from txscript import TxScript\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    # Annotation ID:\n    t.field.annotation_id = payload.get("annotation").get("id")\n\n    # Document page count:\n    t.field.page_count = len(payload.get("annotation").get("pages"))\n\n    return t.hook_response()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"get-document-information",children:"Get document information"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'from txscript import TxScript\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    # Arrival date:\n    t.field.document_arrived_at = payload.get("document").get("arrived_at")\n\n    # Original file name:\n    t.field.document_original_file_name = payload.get("document").get("original_file_name")\n\n    return t.hook_response()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"get-queue-name",children:"Get queue name"}),"\n",(0,o.jsxs)(t.p,{children:["To store the queue name in a schema data point ",(0,o.jsx)(t.code,{children:"queue_name"})," please use the following code. Note that it is necessary to sideload both ",(0,o.jsx)(t.strong,{children:"Schema"})," and ",(0,o.jsx)(t.strong,{children:"Queue"})," in the extension setup."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'from txscript import TxScript\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    t.field.queue_name = payload.get("queues")[0].get("name")\n\n    return t.hook_response()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"validate-header-fields",children:"Validate header fields"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'from txscript import TxScript, is_empty\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    # Header total = subtotal + taxes:\n    if is_set(t.field.amount_due) and is_set(t.field.amount_total_base) and is_set(t.field.amount_total_tax):\n        amount_total_base = default_to(t.field.amount_total_base, 0)\n        amount_total_tax = default_to(t.field.amount_total_tax, 0)\n        amount_due = default_to(t.field.amount_due, 0)\n        if amount_due != (amount_total_base + amount_total_tax):\n            message = "Total invoice amount is not equal to the sum of amount base and the tax."\n            t.show_error(message, t.field.amount_due)\n\n    return t.hook_response()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"validate-line-items",children:"Validate line items"}),"\n",(0,o.jsx)(t.p,{children:"In serverless functions, it is necessary to iterate the individual line items and perform the validations on row level:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'from txscript import TxScript, is_empty\n\ndef rossum_hook_request_handler(payload):\n    t = TxScript.from_payload(payload)\n\n    for row in t.field.line_items:\n        if is_empty(row.item_code):\n            t.show_error("Item code is required on line items.", row.item_code)\n\n    return t.hook_response()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"accounts-payable-checks",children:"Accounts Payable Checks"}),"\n",(0,o.jsx)(t.p,{children:'Historically, there was an "Accounts Payable Checks" extension in the Rossum store which was used to validate basic calculations on invoices, for example. Nowadays, it is not necessary since the same can be easily achieved using custom serverless function. The following is a (loosely) migrated example of the extension configuration:'}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'import math\nfrom rossum_python import RossumPython, is_set, is_empty, default_to\nfrom datetime import datetime\n\ndef rossum_hook_request_handler(payload):\n    x = RossumPython.from_payload(payload)\n    rounding = 2\n\n    ###################\n    ## HEADER FIELDS ##\n    ###################\n\n    # 1: "Total Amount" (amount_total) == "Total Without Tax" (amount_total_base) + "Tax Amount" (amount_total_tax)\n    if is_set(x.field.amount_total) and is_set(x.field.amount_total_base) and is_set(x.field.amount_total_tax):\n        amount_total_ocr = round(x.field.amount_total, rounding)\n        amount_total_calculated = round(x.field.amount_total_base + x.field.amount_total_tax, rounding)\n        if not math.isclose(amount_total_ocr, amount_total_calculated):\n            message = f"Total Amount is not calculated correctly (expected: ~{amount_total_calculated})."\n            x.show_warning(message, x.field.amount_total)\n            x.automation_blocker(message, x.field.amount_total)\n\n    # 2: Check if "Due Date" (date_due) is within 0 to 120 days after "Invoice Date" (date_issue)\n    if is_set(x.field.date_issue) and is_set(x.field.date_due):\n        days_difference = (x.field.date_due - x.field.date_issue).days\n        if not (0 <= days_difference <= 120):\n            message = f"Due Date ({x.field.date_due}) is not within 120 days after Invoice Date ({x.field.date_issue})."\n            x.show_warning(message, x.field.date_due)\n            x.automation_blocker(message, x.field.date_due)\n\n    #######################\n    ## TAX DETAILS table ##\n    #######################\n\n    for row in x.field.tax_details:\n        # 3: "VAT Amount" (tax_detail_tax) == "VAT Base" (tax_detail_base) * "VAT Rate" (tax_detail_rate)\n        if is_set(row.tax_detail_tax) and is_set(row.tax_detail_base) and is_set(row.tax_detail_rate):\n            tax_detail_tax_ocr = round(row.tax_detail_tax, rounding)\n            tax_detail_tax_calculated = round(row.tax_detail_base * (row.tax_detail_rate / 100), rounding)\n            if not math.isclose(tax_detail_tax_ocr, tax_detail_tax_calculated):\n                message = f"VAT amount is not calculated correctly (expected: ~{tax_detail_tax_calculated})."\n                x.show_warning(message, row.tax_detail_tax)\n                x.automation_blocker(message, row.tax_detail_tax)\n'})}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:'Original default configuration of the "Accounts Payable Checks" extension (for reference).'}),(0,o.jsx)(t.p,{children:"The config examples are numbered for easier orientation:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "checks": [\n    {\n      // 1\n      "left": ["amount_total"],\n      "right": ["amount_total_base", "amount_total_tax"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_sum",\n      "message_type": "warning",\n      "message_content": "{amount_total} is not equal to {amount_total_base} + {amount_total_tax}."\n    },\n    {\n      // 2\n      "left": "date_issue",\n      "right": "date_due",\n      "data_type": "date",\n      "operation": "check_right_minus_left_within_range",\n      "lower_bound": 0,\n      "upper_bound": 120,\n      "message_type": "warning",\n      "message_content": "{date_due} is not within 120 days after {date_issue}."\n    },\n    {\n      // 3\n      "left": ["tax_detail_tax"],\n      "right": ["tax_detail_base", "tax_detail_rate"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_multiplication",\n      "message_type": "warning",\n      "message_content": "{tax_detail_tax} is not equal to {tax_detail_base} x {tax_detail_rate}."\n    },\n    {\n      // 4\n      "left": ["tax_detail_total"],\n      "right": ["tax_detail_base", "tax_detail_tax"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_sum",\n      "message_type": "warning",\n      "message_content": "{tax_detail_total} is not equal to {tax_detail_base} + {tax_detail_tax}."\n    },\n    {\n      // 5\n      "left": ["item_amount_total"],\n      "right": ["item_total_base", "item_tax"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_sum",\n      "message_type": "warning",\n      "message_content": "{item_amount_total} is not equal to {item_total_base} + {item_tax}."\n    },\n    {\n      // 6\n      "left": ["item_total_base"],\n      "right": ["item_amount_base", "item_quantity"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_multiplication",\n      "message_type": "warning",\n      "message_content": "{item_total_base} is not equal to {item_amount_base} x {item_quantity}."\n    },\n    {\n      // 7\n      "left": ["item_amount_total"],\n      "right": ["item_amount", "item_quantity"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_multiplication",\n      "message_type": "warning",\n      "message_content": "{item_amount_total} is not equal to {item_amount} x {item_quantity}."\n    },\n    {\n      // 8\n      "left": ["item_tax"],\n      "right": ["item_total_base", "item_rate"],\n      "epsilon": 0.5,\n      "operation": "check_left_sum_equals_right_multiplication",\n      "message_type": "warning",\n      "message_content": "{item_tax} is not equal to {item_total_base} x {item_rate}."\n    },\n    {\n      // 9\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "tax_detail_total",\n      "header_field": "amount_total",\n      "message_type": "warning",\n      "message_content": "{amount_total} is not equal to the {tax_detail_total} in the Tax table."\n    },\n    {\n      // 10\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "tax_detail_base",\n      "header_field": "amount_total_base",\n      "message_type": "warning",\n      "message_content": "{amount_total_base} is not equal to the {tax_detail_base} in the Tax table."\n    },\n    {\n      // 11\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "tax_detail_tax",\n      "header_field": "amount_total_tax",\n      "message_type": "warning",\n      "message_content": "{amount_total_tax} is not equal to {tax_detail_tax} in the Tax table."\n    },\n    {\n      // 12\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "item_amount_total",\n      "header_field": "amount_total",\n      "message_type": "warning",\n      "message_content": "{amount_total} is not equal to the sum of the line items\u2019 total amounts."\n    },\n    {\n      // 13\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "item_total_base",\n      "header_field": "amount_total_base",\n      "message_type": "warning",\n      "message_content": "{amount_total_base} is not equal to the sum of the line items\u2019 total bases."\n    },\n    {\n      // 14\n      "epsilon": 0.5,\n      "operation": "check_header_field_equals_table_field_sum",\n      "table_field": "item_tax",\n      "header_field": "amount_total_tax",\n      "message_type": "warning",\n      "message_content": "{amount_total_tax} is not equal to the sum of the line items\u2019 taxes."\n    }\n  ]\n}\n'})})]}),"\n",(0,o.jsx)(t.h2,{id:"fetch-ocr-text-page_data",children:"Fetch OCR Text (page_data)"}),"\n",(0,o.jsx)(t.p,{children:"This function retrieves textual data from Rossum's page_data API for an annotation and processes it to:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Fetch OCR document content Data: Make an HTTP GET request to the page_data endpoint of a specific annotation using the provided rossum_authorization_token."}),"\n",(0,o.jsx)(t.li,{children:"Retry Mechanism: Handle transient network or server issues by retrying up to 3 times in case of a non-200 HTTP response or exceptions."}),"\n",(0,o.jsx)(t.li,{children:"Process Text Content: Iterate through the fetched text content for custom manipulations or pattern analysis."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:'import requests\n\n\ndef get_ocr_document_content(payload):\n    """\n    Fetch page_data from annotation.\n    :param payload: Dictionary containing the payload with annotation information.\n    """\n    token = payload.get("rossum_authorization_token")\n    annotation_url = payload.get("annotation", {}).get("url")\n\n    retries = 3\n    for attempt in range(retries):\n        try:\n            # Request to fetch text content from annotation\n            page_req = requests.get(\n                url=f"{annotation_url}/page_data?granularity=texts",\n                headers={"Authorization": f"Bearer {token}"}\n            )\n\n            if page_req.status_code == 200:\n                results = page_req.json().get("results", [])\n                # This part is optional iteration through all the text nodes\n                for page in results:\n                    for item in page.get("items", []):\n                        ocr_text = item.get("text", "")\n                        if ocr_text:\n                            # Here will be any kind of manipulation with the text you need to do.\n                            print(ocr_text)\n\n                break  # Exit retry loop if request is successful\n            else:\n                print(f"Attempt {attempt + 1} failed with status code {page_req.status_code}. Retrying...")\n\n        except requests.RequestException as e:\n            print(f"Attempt {attempt + 1} encountered an exception: {e}. Retrying...")\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
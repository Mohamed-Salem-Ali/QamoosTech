---
id: taint-analysis
category: security
subcategory: application-security
level: intermediate
related: [input-validation, sql-injection, xss]
aliases: ["static analysis", "sast", "source and sink", "tainted data"]
term: "Taint Analysis"
pronunciation: "TAYNT uh-NAL-ih-sis"
keywords: ["track untrusted data", "from source to sink", "find injection bugs automatically", "static analysis security testing", "user input reaches database", "sanitizer in the path", "تتبع البيانات غير الموثوقة", "من المصدر إلى المصب", "اكتشاف الحقن تلقائياً", "اختبار الأمان بالتحليل الساكن", "مدخلات المستخدم تصل إلى قاعدة البيانات", "منقّي في المسار"]
---

## Definition

Taint analysis follows untrusted data (the source, such as a form field) through the code to dangerous places (the sink, such as a SQL query), and flags paths where it arrives without being cleaned.

## Where you hear it

In static analysis security tools (CodeQL, Semgrep, Bandit), secure coding courses and injection bug reviews.

## Examples

- The scanner shows a taint path from `request.GET` to `cursor.execute`.
- Add a sanitizer so the data is no longer tainted.
- The tool traced the user input from the form to the SQL query and flagged it.

## Common mistake

Trusting a scan with no findings. Tools miss dynamic paths; treat it as one layer next to review and tests.

## Don't confuse with

Linting, which checks style and general mistakes. Taint analysis focuses on how untrusted data flows.

## Say it at work

- Does CodeQL flag any tainted flows?
- Mark the function as a sanitizer.

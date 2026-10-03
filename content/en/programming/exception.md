---
id: exception
category: programming
level: beginner
related: [debugging]
term: "Exception"
pronunciation: "ik-SEP-shun"
keywords: ["runtime error handling","code crash prevention","try catch block","how to handle errors","unexpected program stop","program execution interruption","debugging runtime issues","catching code errors","error throwing mechanism","fix application crashes","معالجة أخطاء وقت التشغيل","إيقاف انهيار البرنامج","التقاط الأخطاء البرمجية","كيفية التعامل مع الاستثناءات","رسائل الخطأ أثناء التشغيل","تجنب توقف البرنامج المفاجئ","تغليف الكود بـ try catch","مصطلح إكسيبشن في البرمجة","أخطاء التنفيذ البرمجية","التعامل مع تعطل الكود"]
---
## Definition

An error that happens while the program runs. It stops normal flow unless your code catches and handles it.

## Where you hear it

Stack traces, logs, `try/catch`, and bug reports.

## Examples

- The service throws an exception when the file is missing.
- Catch the exception and show a friendly message.

## Common mistake

Catching every exception and ignoring it. The error disappears from sight but not from reality.

## Don't confuse with

An exception represents a runtime error that your code can handle, whereas a syntax error prevents the code from compiling or running at all.

## Say it at work

- Make sure to add a specific try-catch block here so we don't let this exception crash the background worker.
- Please wrap the database call in a try-catch block and log the exception details for further investigation.

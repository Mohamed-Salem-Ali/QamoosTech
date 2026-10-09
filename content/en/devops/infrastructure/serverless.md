---
id: serverless
category: devops
subcategory: infrastructure
level: intermediate
related: [deployment, scalability, managed-service]
term: "Serverless"
pronunciation: "SER-ver-less"
keywords: ["run code without managing servers","cloud functions pay per use","event driven compute architecture","deploy code without server config","auto scaling backend functions","serverless computing platform","running tasks without provisioning","lambda style code execution","cloud provider managed backend","pay only for execution time","server less architecture","managed function as a service","تشغيل الكود بدون إدارة خوادم","الحوسبة السحابية بدون سيرفرات","دوال برمجية عند الطلب","تشغيل الشيفرة بدون تجهيز خوادم","خدمات الحوسبة بدون إدارة بنية","تطبيقات تعمل بدون سيرفر خاص","سيرفرليس","تنفيذ الدوال في السحابة","الدفع مقابل وقت التشغيل فقط","معمارية بدون خوادم","تشغيل المهام في الخلفية سحابيا","خدمة الدوال السحابية"]
---
## Definition

A way to run code where the cloud provider manages the servers. You upload functions, and you pay only when they run.

## Where you hear it

AWS Lambda, Vercel functions, and cost discussions.

## Examples

- We run the PDF export as a serverless function.
- Serverless scales automatically, but cold starts add delay.
- The image resize runs as a serverless function that is billed per call.

## Common mistake

Believing there are no servers at all. They exist; you just do not manage them.

## Say it at work

- Let us move this notification worker to serverless so we do not pay for idle time.
- We should use a serverless architecture for the background processing to handle the traffic spikes efficiently.

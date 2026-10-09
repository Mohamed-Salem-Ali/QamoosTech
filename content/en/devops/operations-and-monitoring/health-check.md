---
id: health-check
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [monitoring, load-balancer, health-probes]
term: "Health Check"
pronunciation: "HELTH chek"
keywords: ["check if server is running","endpoint for service status","verify application availability","is the app alive","monitor service readiness","load balancer heartbeat","test if api is up","service liveness probe","check database connection status","healthcheck endpoint","server connectivity test","monitor app health","التأكد من عمل الخادم","فحص جاهزية الخدمة","مسار فحص سلامة التطبيق","اختبار اتصال الخادم","هل التطبيق يعمل حاليا","فحص حالة النظام","نقطة نهاية مراقبة الخدمة","هيلث تشك","التحقق من استجابة الخادم","فحص توفر الخدمة","مراقبة حالة السيرفر","فحص التبعيات والاتصال"]
---
## Definition

A small endpoint, often `/health`, that tells tools whether the app is running properly.

## Where you hear it

Load balancers, Kubernetes, and monitoring tools.

## Examples

- The load balancer calls `/health` every 10 seconds.
- The health check fails, so the server is removed from rotation.
- The health check returns 200 only when the database answers a ping.

## Common mistake

A health check that always returns OK. It should also check important dependencies such as the database.

## Don't confuse with

A health check tests if the app is currently running and ready, while a metric measures performance data like CPU and memory usage over time.

## Say it at work

- We need to update our health check so it actually tests the database connection.
- Please ensure the health check endpoint returns a 503 status when the service dependencies are down.

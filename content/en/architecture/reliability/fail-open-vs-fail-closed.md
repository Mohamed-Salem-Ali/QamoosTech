---
id: fail-open-vs-fail-closed
category: architecture
subcategory: reliability
level: intermediate
related: [rate-limiting, single-point-of-failure]
term: "Fail Open vs Fail Closed"
pronunciation: "FAYL OH-pen versus FAYL KLOHZD"
keywords: ["what happens when system breaks","system behavior during service outage","default state after component failure","allow or block during crash","security vs availability trade off","fail safe design patterns","fail open fail closed meaning","handling errors in critical services","system resilience strategy","default access after service failure","سلوك النظام عند تعطل المكونات","ماذا يحدث عند توقف الخدمة","استراتيجية التعامل مع أعطال النظام","السماح بالدخول عند فشل النظام","منع الوصول عند تعطل الخدمة","الفشل المفتوح مقابل الفشل المغلق","تصميم الأنظمة عند حدوث خطأ","تحديد حالة النظام عند الانهيار","مفهوم الفشل الآمن في البرمجيات","الفرق بين الفشل المفتوح والمغلق"]
---
## Definition

What a system does when a part breaks. *Fail open* keeps working without that part. *Fail closed* blocks everything until it is fixed.

## Where you hear it

Resilience, security design, and rate limiting.

## Examples

- If Redis is down, the rate limiter fails open and lets users in.
- Login must fail closed: if the auth service is down, nobody gets in.
- The payment check fails closed, so an unavailable service blocks the purchase.

## Common mistake

Always choosing fail open. For security and payments you usually want fail closed.

## Say it at work

- Let's make sure the gateway is configured to fail open for this non-critical widget.
- We decided that the payment service should fail closed to prevent any unauthorized transactions during an outage.

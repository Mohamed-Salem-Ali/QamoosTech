---
id: cold-start
category: devops
level: intermediate
related: [serverless, latency-vs-throughput, spin-up]
term: "Cold Start"
pronunciation: "KOHLD START"
keywords: ["initial delay in serverless functions","slow first request latency","serverless container spin up delay","idle function initialization time","why is my lambda slow","warm up serverless functions","prevent cold start penalty","first request takes too long","container startup time issues","kold start","serverless latency optimization","تأخير في أول طلب","بطء استجابة دالة سيرفرلس","تجهيز الموارد عند الطلب","مشكلة بدء التشغيل البارد","تحسين زمن استجابة السيرفرلس","تأخير تهيئة الحاوية الخاملة","كولد ستارت","جعل الدوال دافئة دائما","تأخير تحميل الكود الابتدائي","تجنب بطء الاستجابة الأولية"]
---

## Definition

A delay that occurs when a serverless function or container handles its first request after being idle, because the platform needs to provision resources and load the code.

## Where you hear it

In performance reviews, serverless architecture discussions, and when optimizing API latency.

## Examples

- The first API request took three seconds because of a cold start.
- We use provisioned concurrency to eliminate cold starts for critical endpoints.

## Common mistake

Assuming every request suffers the same delay, when actually subsequent requests run much faster because the container is already warm.

## Don't confuse with

Cold start refers to the initialization delay of an idle serverless function, whereas a spin-up is the general process of launching any new container or instance.

## Say it at work

- Did you notice any cold start issues after we deployed the new serverless functions?
- We are keeping a few instances warm to mitigate the cold start penalty on our main endpoints.

---
id: auto-instrumentation
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [observability, monitoring, logging]
aliases: ["instrumentation", "opentelemetry", "tracing"]
term: "Auto-Instrumentation"
pronunciation: "AW-toh-IN-struh-men-TAY-shun"
keywords: ["traces without changing code", "opentelemetry agent", "library hooks", "automatic spans", "no manual logging", "add monitoring quickly", "تتبعات دون تغيير الكود", "وكيل OpenTelemetry", "ربط المكتبات", "مقاطع تتبع تلقائية", "بلا تسجيل يدوي", "إضافة المراقبة بسرعة"]
---

## Definition

Auto-instrumentation automatically adds tracing and metrics to an application, often by a library or agent that hooks into frameworks such as web servers and database drivers, with little or no code changes.

## Where you hear it

In OpenTelemetry, Datadog and Sentry setup, and observability rollouts across many services.

## Examples

- Turn on auto-instrumentation to get HTTP and database spans for free.
- Add manual spans for the business steps it can't see.
- After the agent was installed, every database query showed up as a trace span.

## Common mistake

Relying on it alone. It sees technical calls but not your business events; add custom spans where they matter.

## Don't confuse with

Manual instrumentation, where you write the tracing code yourself and decide exactly what to record.

## Say it at work

- Is auto-instrumentation on for this service?
- Add a custom span around the payment step.

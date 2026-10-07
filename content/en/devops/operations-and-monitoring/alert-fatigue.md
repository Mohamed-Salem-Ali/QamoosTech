---
id: alert-fatigue
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [monitoring, runbook, observability]
aliases: ["alert noise", "noisy alerts"]
term: "Alert Fatigue"
pronunciation: "uh-LERT fuh-TEEG"
keywords: ["too many alerts", "people ignore notifications", "noisy monitoring", "false alarms", "page only for real problems", "tune thresholds", "تنبيهات كثيرة جداً", "الناس تتجاهل الإشعارات", "مراقبة مزعجة", "إنذارات كاذبة", "نبّه للمشكلات الحقيقية فقط", "اضبط العتبات"]
---

## Definition

Alert fatigue happens when people receive so many alerts, many of them false or unimportant, that they start ignoring them and miss the real ones.

## Where you hear it

In on-call teams, monitoring setup reviews and incident reports where "the alert was there but ignored".

## Examples

- We get 200 alerts a night; the team has alert fatigue.
- Page a human only when action is needed right now.

## Common mistake

Adding an alert for every metric "just in case". Each alert should need a human action.

## Don't confuse with

Monitoring, which collects the data. Alerting decides which signals should interrupt a person.

## Say it at work

- Delete or tune the noisy alerts.
- Is this alert actionable?

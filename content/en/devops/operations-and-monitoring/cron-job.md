---
id: cron-job
category: devops
subcategory: operations-and-monitoring
level: beginner
related: [pipeline, monitoring, logging]
aliases: ["crontab", "cron", "scheduled task", "scheduler"]
term: "Cron Job"
pronunciation: "KRON jawb"
keywords: ["scheduled task", "run every night at 2am", "crontab expression", "five star syntax", "periodic script", "scheduler", "مهمة مجدولة", "تعمل كل ليلة الثانية صباحاً", "تعبير crontab", "صيغة النجوم الخمس", "سكربت دوري", "المجدول"]
---

## Definition

A cron job is a task scheduled to run automatically at set times, defined with a cron expression like `0 2 * * *` (every day at 2:00 am).

## Where you hear it

In Linux servers, Kubernetes CronJobs, cloud schedulers and backup or cleanup scripts.

## Examples

- A cron job sends the weekly report every Monday at 8.
- The cron job failed silently because nobody checked its logs.

## Common mistake

Forgetting timezones and monitoring. A job can run at the wrong hour or fail unnoticed; log and alert on it.

## Don't confuse with

A background worker queue, which runs jobs when they are triggered. Cron runs jobs on a clock.

## Say it at work

- Add a cron job to clean up old files.
- What's the schedule expression?

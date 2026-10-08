---
id: log-level
category: devops
subcategory: operations-and-monitoring
level: beginner
related: [logging, monitoring, alert-fatigue]
aliases: ["logging level"]
term: "Log Level"
pronunciation: "log LEV-ul"
keywords: ["debug info warning error", "set log level to info", "too many debug logs", "severity of a log message", "logging levels", "تصحيح تحذير خطأ", "ضبط مستوى السجل على info", "سجلات تصحيح كثيرة", "خطورة رسالة السجل"]
---

## Definition

The severity label on a log message, such as DEBUG, INFO, WARNING, or ERROR. A log level setting hides the messages below it, so production logs stay useful and quiet.

## Where you hear it

In application configuration files, logging libraries, and when someone asks why there are no debug logs.

## Examples

- Set the log level to INFO in production.
- Switch to DEBUG for one hour to trace the bug.
- At the WARNING level, the logs show problems but not every routine request.

## Common mistake

Logging everything as ERROR, or leaving DEBUG on in production. Both hide the real problems in noise.

## Don't confuse with

A log level is the severity of one message. Logging is the practice of recording events over time.

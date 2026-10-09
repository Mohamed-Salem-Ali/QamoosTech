---
id: runbook
category: devops
subcategory: operations-and-monitoring
level: intermediate
related: [monitoring, rollback, blameless-postmortem, on-call]
aliases: ["playbook", "operational runbook"]
term: "Runbook"
pronunciation: "RUN-book"
keywords: ["step by step incident guide", "what to do when alert fires", "oncall instructions", "operational procedure", "restart checklist", "documented fix", "دليل خطوة بخطوة للحوادث", "ماذا تفعل عند التنبيه", "تعليمات المناوب", "إجراء تشغيلي", "قائمة إعادة التشغيل", "إصلاح موثّق"]
---

## Definition

A runbook is a written, step-by-step guide for handling a specific operational task or incident, such as what to check and do when a particular alert fires.

## Where you hear it

In on-call rotations, incident response, alert descriptions that link to docs, and handover documents.

## Examples

- The alert links to a runbook with the first five checks.
- Update the runbook after every incident.
- The runbook says to check the queue depth first, then restart the worker.

## Common mistake

Writing it once and never updating it. An outdated runbook is worse than none because people follow wrong steps.

## Don't confuse with

A postmortem, which looks back at an incident after it ends. A runbook guides you while it is happening.

## Say it at work

- Is there a runbook for this alert?
- Follow the runbook step by step.

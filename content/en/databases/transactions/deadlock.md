---
id: deadlock
category: databases
subcategory: transactions
level: intermediate
related: [transaction, database]
term: "Deadlock"
pronunciation: "DED-lok"
keywords: ["processes waiting for each other","database transactions stuck together","mutual waiting state in database","database locks freezing system","resolve transaction locks hanging","threads waiting on resources","system freeze due to locks","circular dependency between processes","dedlock","dead lock","العمليات تنتظر بعضها البعض","تعليق قاعدة البيانات بسبب الأقفال","توقف المعاملات في قاعدة البيانات","اعتماد متبادل بين العمليات","تعليق النظام بسبب قفل الموارد","حدوث حالة استعصاء في العمليات","مشكلة الأقفال المتداخلة","ديدلوك","التجمد المتبادل للعمليات"]
---

## Definition

A deadlock occurs when two or more processes are unable to proceed because each is waiting for the other to release a resource, such as a database lock. This results in a state where neither process can complete its task.

## Where you hear it

Database performance monitoring, transaction management discussions, and troubleshooting system hangs.

## Examples

- The system terminated the transaction because a deadlock was detected.
- We need to optimize our query order to prevent frequent deadlocks.

## Common mistake

Confusing a deadlock with a simple slow query; a deadlock is a specific state of mutual dependency, whereas a slow query is just a performance bottleneck.

## Don't confuse with

Deadlock is often confused with a race condition; a deadlock is a state of mutual waiting where no process can proceed, while a race condition occurs when the system's output depends on the uncontrollable timing or sequence of events.

## Say it at work

- I think we hit a deadlock in the staging environment, so I'm going to restart the service to clear the locks.
- Please review the attached logs, as they indicate that a deadlock is preventing the transaction from committing successfully.

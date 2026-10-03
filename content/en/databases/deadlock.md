---
id: deadlock
category: databases
level: intermediate
related: [transaction, database]
term: "Deadlock"
pronunciation: "DED-lok"
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

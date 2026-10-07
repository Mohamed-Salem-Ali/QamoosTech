---
id: compensating-transaction
category: architecture
subcategory: patterns
level: intermediate
related: [transaction, transactional-outbox, event-driven]
aliases: ["saga", "saga pattern", "compensation"]
term: "Compensating Transaction"
pronunciation: "KOM-pen-say-ting tran-ZAK-shun"
keywords: ["undo a step with another step", "saga rollback", "refund after failure", "cancel previous action", "no distributed transaction", "business level undo", "التراجع عن خطوة بخطوة أخرى", "تراجع الـ saga", "استرداد بعد الفشل", "إلغاء إجراء سابق", "بلا معاملة موزعة", "تراجع على مستوى العمل"]
---

## Definition

A compensating transaction undoes the effect of an earlier step by performing an opposite action, such as refunding a payment, when a later step in a multi-step process fails.

## Where you hear it

In saga and microservice designs, booking and payment flows, and discussions where one database transaction can't span services.

## Examples

- Shipping failed, so the saga runs a compensating transaction to refund the payment.
- Each step needs a defined compensation.

## Common mistake

Assuming it restores the exact earlier state. A refund isn't "never charged"; other effects (emails, logs) remain.

## Don't confuse with

A database rollback, which erases uncommitted changes. A compensating transaction acts after commit with a new, opposite change.

## Say it at work

- What's the compensation for this step?
- Make the compensation idempotent.

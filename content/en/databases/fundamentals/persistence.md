---
id: persistence
category: databases
subcategory: fundamentals
level: beginner
related: [database, schema, orm]
aliases: ["persistent storage", "data persistence"]
term: "Persistence"
pronunciation: "per-SIS-tens"
keywords: ["keep data after program stops", "save to database or file", "data survives restart", "persistent storage", "in memory vs stored", "durable data", "الاحتفاظ بالبيانات بعد توقف البرنامج", "الحفظ في قاعدة بيانات أو ملف", "البيانات تنجو من إعادة التشغيل", "تخزين دائم", "الذاكرة مقابل التخزين", "بيانات دائمة"]
---

## Definition

Persistence means keeping data after the program stops, by saving it somewhere durable such as a database or a file, instead of holding it only in memory.

## Where you hear it

In architecture discussions, ORM documentation ("the persistence layer"), and when deciding where data should live.

## Examples

- The list is lost on restart because nothing persists it.
- The persistence layer hides whether we use files or a database.
- The cart survives a restart because it is saved to the database.

## Common mistake

Treating a cache or a variable as storage. Anything only in memory disappears when the process ends.

## Don't confuse with

A cache, which is a fast, temporary copy meant to be thrown away. Persistent data is the permanent record.

## Say it at work

- Where do we persist this: the database or a file?
- Add a persistence layer so the logic doesn't know about SQL.

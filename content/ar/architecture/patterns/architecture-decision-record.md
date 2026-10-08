---
id: architecture-decision-record
category: architecture
subcategory: patterns
level: intermediate
related: [design-doc, rfc, design-pattern]
term: "Architecture Decision Record (ADR)"
translation: "سجل قرار المعمارية"
pronunciation: "إيه دي آر"
keywords: ["تسجيل سبب اختيار شيء", "وثيقة قصيرة لكل قرار معماري", "لماذا اخترنا قاعدة البيانات هذه", "سجل القرارات في المستودع", "record why we chose this", "short document per architecture decision", "why did we pick this database", "decision log in the repository", "superseded decision"]
---

## التعريف

سجل قصير لقرار معماري واحد: سياقه، والقرار نفسه، وما يترتب عليه. تُحفظ سجلات القرارات في المستودع ليعرف من يأتي بعد ذلك لماذا بُني النظام بهذه الطريقة.

## أين تسمعه؟

في مستودعات الشيفرة، ومراجعات المعمارية، وعند السؤال: «لماذا اخترنا قاعدة البيانات هذه؟»

## أمثلة

- We wrote an ADR about choosing PostgreSQL over MongoDB.
  - كتبنا سجل قرار حول اختيار PostgreSQL بدلاً من MongoDB.
- The ADR lists the trade-offs we accepted.
  - يذكر سجل القرار المقايضات التي قبلناها.

## خطأ شائع

تعديل سجل قديم ليطابق قراراً جديداً. اكتب سجلاً جديداً يحل محل القديم، ليبقى التاريخ واضحاً.

## لا تخلطه مع

وثيقة التصميم تُكتب قبل البناء وقد تتغير، أما سجل القرار فيوثّق قراراً واحداً ويُحفظ كتاريخ.

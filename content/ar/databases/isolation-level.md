---
id: isolation-level
category: databases
level: intermediate
related: [database, transaction]
term: "Isolation Level"
pronunciation: "آيسوليشن ليفل"
---

## التعريف

هو إعداد في قاعدة البيانات يحدد مدى ظهور التغييرات التي تجريها عملية (Transaction) معينة للعمليات الأخرى التي تعمل في نفس الوقت. يوازن هذا الإعداد بين دقة البيانات وبين سرعة أداء النظام.

## أين تسمعه؟

عند ضبط إعدادات قاعدة البيانات، أو في نقاشات تحسين الأداء، أو عند حل مشاكل تتعلق بتضارب البيانات.

## أمثلة

- We set the isolation level to Serializable to prevent phantom reads in our financial reports.
  - قمنا بضبط مستوى العزل على Serializable لمنع حدوث قراءة البيانات الوهمية (phantom reads) في تقاريرنا المالية.
- Changing the isolation level to Read Committed can improve performance by reducing lock contention.
  - تغيير مستوى العزل إلى Read Committed قد يحسن الأداء عن طريق تقليل التنافس على الأقفال (lock contention).

## خطأ شائع

الاعتقاد بأن مستوى العزل الأعلى هو دائماً الخيار الأفضل، متجاهلين أن المستويات العالية قد تقلل من قدرة النظام على معالجة العمليات المتزامنة وتسبب بطئاً في الأداء.

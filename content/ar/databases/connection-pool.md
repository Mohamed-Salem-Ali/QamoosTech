---
id: connection-pool
category: databases
level: intermediate
related: [database, query, latency-vs-throughput]
term: "Connection Pool"
translation: "مجموعة الاتصالات"
pronunciation: "كُونيكْشِن بُول"
---

## التعريف

مجموعة من اتصالات قواعد البيانات الجاهزة والمحفوظة لإعادة الاستخدام، مما يتجنب التكلفة العالية لفتح اتصال جديد مع كل طلب.

## أين تسمعه؟

عند ضبط إعدادات قاعدة البيانات، أو تحسين أداء الخادم الخلفي (Backend)، أو استكشاف أخطاء حدود الاتصال.

## أمثلة

- We configured a connection pool to handle sudden spikes in user traffic.
  - قمنا بإعداد مجموعة اتصالات للتعامل مع الارتفاعات المفاجئة في حركة مرور المستخدمين.
- The application crashed because the connection pool size was set too low.
  - تعطل التطبيق لأن حجم مجموعة الاتصالات تم ضبطه على قيمة منخفضة جداً.

## خطأ شائع

الاعتقاد بأن تعيين حجم مجموعة الاتصالات برقم كبير جداً يحسن الأداء دائماً، بينما قد يؤدي في الواقع إلى إرهاق خادم قاعدة البيانات.

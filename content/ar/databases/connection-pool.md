---
id: connection-pool
category: databases
level: intermediate
related: [database, query, latency-vs-throughput]
term: "Connection Pool"
translation: "مجمع اتصالات"
pronunciation: "كُونيكْشِن بُول"
---

## التعريف

مجمع من اتصالات قواعد البيانات الجاهزة والمحفوظة لإعادة الاستخدام، مما يتجنب التكلفة العالية لفتح اتصال جديد مع كل طلب.

## أين تسمعه؟

عند ضبط إعدادات قاعدة البيانات، أو تحسين أداء الخادم الخلفي (Backend)، أو استكشاف أخطاء حدود الاتصال.

## أمثلة

- We configured a connection pool to handle sudden spikes in user traffic.
  - قمنا بإعداد مجمع اتصالات للتعامل مع الارتفاعات المفاجئة في حركة مرور المستخدمين.
- The application crashed because the connection pool size was set too low.
  - تعطل التطبيق لأن حجم مجمع الاتصالات تم ضبطه على قيمة منخفضة جداً.

## خطأ شائع

الاعتقاد بأن تعيين حجم مجمع الاتصالات برقم كبير جداً يحسن الأداء دائماً، بينما قد يؤدي في الواقع إلى إرهاق خادم قاعدة البيانات.

## لا تخلطه مع

غالباً ما يتم الخلط بين مجمع الاتصالات وحد أقصى للاتصالات؛ فالمجمع هو ذاكرة مؤقتة للاتصالات النشطة لإعادة استخدامها، بينما الحد الأقصى هو أكبر عدد من الاتصالات المتزامنة التي تسمح بها قاعدة البيانات.

## قلها في العمل

- We should check if the connection pool is exhausted before we start investigating the database latency.
  - يجب أن نتحقق مما إذا كان مجمع الاتصالات قد استُنفد قبل أن نبدأ في فحص زمن استجابة قاعدة البيانات.
- Please review the current connection pool settings in the configuration file to ensure they align with our expected traffic load.
  - يرجى مراجعة إعدادات مجمع الاتصالات الحالية في ملف الإعدادات للتأكد من توافقها مع حمل حركة المرور المتوقع لدينا.

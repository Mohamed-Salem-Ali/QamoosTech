---
id: graphql
category: web-apis
level: intermediate
related: [restful-api, endpoint]
term: "GraphQL"
translation: "جراف كيو إل"
pronunciation: "جرافكيو إل"
keywords: ["جلب البيانات بدقة","بديل لـ rest api","لغة استعلام البيانات","جلب الحقول المطلوبة فقط","واجهة برمجة تطبيقات مرنة","استعلامات الواجهة الأمامية","جراف كيو إل","تقليل البيانات غير الضرورية","نقطة نهاية واحدة للبيانات","تصميم استعلامات api","query specific data fields","alternative to rest api","single endpoint api style","fetch exact data needed","graph query language","api for frontend developers","avoid overfetching api data","schema based data fetching","flexible api request format","grapqhl typo","grapql tech"]
---
## التعريف

أسلوب API يرسل فيه العميل استعلامًا واحدًا يحدد الحقول التي يريدها بالضبط، فيعيد الخادم هذه الحقول فقط.

## أين تسمعه؟

الفرق التي تركز على الواجهات، وتطبيقات الجوال، ونقاشات «REST أم GraphQL».

## أمثلة

- With GraphQL the app fetches the user and orders in one request.
  - مع GraphQL يجلب التطبيق المستخدم وطلباته في طلب واحد.
- The query asks only for `name` and `email`.
  - يطلب الاستعلام `name` و`email` فقط.

## خطأ شائع

الاعتقاد أن GraphQL أفضل من REST دائمًا. فهو يضيف تعقيدًا مثل التخزين المؤقت والتحكم في تكلفة الاستعلامات.

## لا تخلطه مع

غالبًا ما يتم الخلط بين GraphQL وREST، ولكن بينما تستخدم REST نقاط نهاية متعددة وثابتة لموارد مختلفة، تستخدم GraphQL نقطة نهاية واحدة يطلب فيها العملاء الشكل الدقيق للبيانات التي يحتاجونها.

## قلها في العمل

- Let's migrate this user profile view to GraphQL so we can stop fetching unused fields over the mobile network.
  - دعنا نقترح نقل عرض ملف المستخدم هذا إلى GraphQL لكي نتوقف عن جلب حقول غير مستخدمة عبر شبكة الجوال.
- Please review the new GraphQL schema changes to ensure the query complexity limits are properly configured.
  - يرجى مراجعة تغييرات مخطط GraphQL الجديدة للتأكد من تكوين حدود تعقيد الاستعلام بشكل صحيح.

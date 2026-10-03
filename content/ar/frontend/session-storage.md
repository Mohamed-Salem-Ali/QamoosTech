---
id: session-storage
category: frontend
level: beginner
related: [cache]
term: "Session Storage"
pronunciation: "سيشن ستوريج"
---

## التعريف

آلية لتخزين البيانات في المتصفح تسمح بحفظ أزواج من المفاتيح والقيم (key-value pairs) لجلسة واحدة فقط. تبقى البيانات محفوظة طالما أن علامة التبويب أو نافذة المتصفح مفتوحة، وتُحذف فور إغلاقها.

## أين تسمعه؟

في نقاشات تطوير الواجهات الأمامية (Frontend) عند الحديث عن إدارة الحالة (State Management)، أو تفضيلات المستخدم المؤقتة، أو حفظ بيانات النماذج (Forms).

## أمثلة

- Use Session Storage to save the current step of a multi-page form so the user doesn't lose progress if they refresh the page.
  - استخدم Session Storage لحفظ الخطوة الحالية في نموذج متعدد الصفحات حتى لا يفقد المستخدم تقدمه إذا قام بتحديث الصفحة.
- We store the temporary filter settings in Session Storage so they reset automatically when the user closes the tab.
  - نقوم بتخزين إعدادات الفلترة المؤقتة في Session Storage لكي تُمسح تلقائياً عند إغلاق المستخدم لعلامة التبويب.

## خطأ شائع

الخلط بينها وبين Local Storage؛ يجب تذكر أن بيانات Session Storage تُحذف بمجرد إغلاق علامة التبويب، بينما تبقى بيانات Local Storage محفوظة بشكل دائم حتى يتم حذفها برمجياً أو يدوياً.

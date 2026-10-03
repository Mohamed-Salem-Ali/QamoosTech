---
id: session-storage
category: frontend
level: beginner
related: [cache]
term: "Session Storage"
pronunciation: "سيشن ستوريج"
keywords: ["تخزين البيانات مؤقتا في المتصفح","حفظ بيانات النموذج عند التحديث","تخزين مؤقت لعلامة التبويب","ذاكرة المتصفح للجلسة الواحدة","الفرق بين التخزين المحلي والمؤقت","حفظ حالة المستخدم في المتصفح","تخزين بيانات الجلسة الحالية","بيانات المتصفح التي تحذف بالإغلاق","سيشن ستوريج","تخزين قيم ومفاتيح مؤقتة","temporary browser data storage","save form state on refresh","browser tab specific memory","store data until tab closes","difference between local and session","temporary key value pairs","frontend short term storage","web storage for current session","session storage vs local storage","keep data during page reload"]
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

## لا تخلطه مع

الخلط بين Session Storage و Local Storage: بيانات Session Storage تُحذف عند انتهاء الجلسة بإغلاق علامة التبويب، بينما تبقى بيانات Local Storage محفوظة حتى بعد إغلاق المتصفح وإعادة فتحه.

## قلها في العمل

- Let's move these temporary form inputs to Session Storage so the data clears automatically when the user leaves.
  - دعونا ننقل مدخلات النموذج المؤقتة هذه إلى Session Storage حتى تُمسح البيانات تلقائياً عندما يغادر المستخدم.
- I have implemented Session Storage to ensure the user's current filter state is maintained during page refreshes.
  - لقد قمت بتنفيذ Session Storage لضمان الحفاظ على حالة الفلترة الحالية للمستخدم أثناء تحديث الصفحة.

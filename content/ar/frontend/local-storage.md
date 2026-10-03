---
id: local-storage
category: frontend
level: beginner
related: [cache, cookie]
term: "Local Storage"
pronunciation: "لوكال ستوريج"
keywords: ["تخزين البيانات في المتصفح","الحفظ المحلي في المتصفح","تخزين تفضيلات المستخدم محلياً","حفظ البيانات بدون تاريخ إنهاء","التخزين المؤقت في المتصفح","لوكال ستوريج","تخزين المفتاح والقيمة محلياً","حفظ حالة التطبيق بالمتصفح","تخزين البيانات على جهاز المستخدم","save data in browser","persistent client side storage","browser key value store","store user preferences locally","browser storage without expiration","lokal storage","web storage api","save state in browser","client storage like cookies","keep data after browser close"]
---

## التعريف

واجهة برمجة تطبيقات (API) تتيح لمواقع الويب تخزين البيانات على شكل أزواج من المفتاح والقيمة (key-value pairs) مباشرة في متصفح المستخدم. على عكس ملفات تعريف الارتباط (cookies)، لا تنتهي صلاحية هذه البيانات وتظل محفوظة حتى بعد إغلاق المتصفح.

## أين تسمعه؟

يُستخدم هذا المصطلح عند تطوير واجهات المستخدم (Frontend) لمناقشة حفظ بيانات المستخدم أو تفضيلاته أو حالة التطبيق محلياً في المتصفح.

## أمثلة

- Use Local Storage to save the user's preferred theme setting.
  - استخدم Local Storage لحفظ إعدادات السمة (Theme) المفضلة لدى المستخدم.
- We save the shopping cart items in Local Storage so they remain after a page refresh.
  - نقوم بحفظ عناصر سلة التسوق في Local Storage لتبقى موجودة بعد تحديث الصفحة.

## خطأ شائع

تخزين معلومات حساسة مثل كلمات المرور أو الرموز الأمنية (tokens) في Local Storage، لأن أي سكربت يعمل على الصفحة يمكنه الوصول إليها، مما يجعلها غير آمنة للبيانات الخاصة.

## لا تخلطه مع

يحفظ Local Storage البيانات بشكل دائم حتى يتم حذفها صراحة، بينما يقوم Session Storage بحذف البيانات بمجرد إغلاق تبويب أو نافذة المتصفح.

## قلها في العمل

- Can we save this filter preference in Local Storage so it stays when the user comes back?
  - هل يمكننا حفظ تفضيل الفلتر هذا في Local Storage ليبقى عندما يعود المستخدم؟
- Please ensure that no sensitive auth tokens are being stored in Local Storage.
  - يرجى التأكد من عدم تخزين أي رموز مصادقة حساسة في Local Storage.

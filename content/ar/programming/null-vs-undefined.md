---
id: null-vs-undefined
category: programming
level: beginner
related: [variable]
term: "Null vs Undefined"
pronunciation: "نال فيرسوس أنديفايند"
---

## التعريف

`null` يُمثّل غياباً مقصوداً لأي قيمة برمجية، بينما تعني `undefined` أن المتغيّر قد تم الإعلان عنه ولكن لم يُسند إليه أي قيمة بعد.

## أين تسمعه؟

أثناء مراجعة الكود، أو تتبّع الأخطاء البرمجية الناتجة عن بيانات ناقصة، أو عند فحص بيانات استجابة واجهات البرمجة.

## أمثلة

- Declaring a variable without a value automatically sets its state to `undefined`.
  - الإعلان عن متغيّر بدون قيمة يحدد حالته تلقائياً كـ `undefined`.
- Developers explicitly assign `null` to clear a variable or indicate a missing resource.
  - يقوم المطورون بتعيين `null` صراحةً لتفريغ متغيّر أو للإشارة إلى مورد مفقود.

## خطأ شائع

التعامل معهما كقيمتين متطابقتين تماماً، مما يؤدي إلى أخطاء غير متوقعة في الأنواع عند التحقق من الخصائص الاختيارية.

## قلها في العمل

- Let's check if the user profile is null or undefined before we render the avatar.
  - دعنا نتحقق مما إذا كان ملف المستخدم null أو undefined قبل أن نقوم بعرض الصورة الرمزية.
- Please ensure the function handles both null and undefined parameters correctly to prevent runtime errors.
  - يرجى التأكد من أن الدالة تتعامل مع كل من معاملات null و undefined بشكل صحيح لمنع أخطاء وقت التشغيل.

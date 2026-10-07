---
id: null-vs-undefined
category: programming
subcategory: language-basics
level: beginner
related: [variable]
tags: [javascript]
term: "Null vs Undefined"
pronunciation: "نال فيرسوس أنديفايند"
keywords: ["الفرق بين نال وأنديفايند","متغير بدون قيمة برمجية","الفرق بين null و undefined","معنى غياب القيمة برمجياً","متى نستخدم null","متغير تم تعريفه بدون قيمة","التحقق من القيم الفارغة","الفرق بين القيمتين الفارغتين","مشكلة القيم غير المعرفة","تفريغ المتغيرات في البرمجة","difference between null and undefined","variable has no value","check if variable is empty","intentional absence of value","javascript null vs undefined","unassigned variable state","missing data in javascript","null vs undefined comparison","handle empty variables","why is my variable undefined"]
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

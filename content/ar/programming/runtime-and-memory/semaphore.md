---
id: semaphore
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [mutex, thread, rate-limiting]
aliases: ["counting semaphore"]
term: "Semaphore"
translation: "السيمافور"
pronunciation: "سيمافور"
keywords: ["تحديد الوصول المتزامن", "عداد التصاريح", "ما لا يزيد عن N في الوقت نفسه", "حد مجمّع الاتصالات", "الحصول والتحرير", "سيمافور asyncio", "limit concurrent access", "counter of permits", "at most n at once", "connection pool limit", "acquire and release", "asyncio semaphore"]
---

## التعريف

السيمافور (Semaphore) عداد يتحكم في عدد الخيوط أو المهام التي تستخدم مورداً في الوقت نفسه. يأخذ كل مستخدم تصريحاً ويعيده عند الانتهاء؛ وإن نفدت التصاريح انتظر التالي.

## أين تسمعه؟

في كود التزامن (تحديد التنزيلات أو اتصالات قاعدة البيانات المتوازية)، ومقررات نظم التشغيل والمقابلات.

## أمثلة

- A semaphore of 5 keeps us to five parallel requests.
  - سيمافور بقيمة 5 يبقينا عند خمسة طلبات متوازية.
- Release the permit in a `finally` block.
  - حرّر التصريح في كتلة `finally`.

## خطأ شائع

عدم تحرير التصريح عند حدوث خطأ. تتسرب الخانات حتى لا يعمل شيء.

## لا تخلطه مع

الـ mutex الذي يسمح بحامل واحد بالضبط في كل مرة.

## قلها في العمل

- Limit it with a semaphore so we don't overload the API.
  - حدّه بسيمافور حتى لا نرهق الـ API.
- What's the semaphore size?
  - ما حجم السيمافور؟

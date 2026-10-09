---
id: mutex
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [data-race, semaphore, deadlock]
aliases: ["lock", "mutual exclusion", "critical section"]
term: "Mutex"
translation: "قفل التبادل الحصري"
pronunciation: "ميوتكس"
keywords: ["خيط واحد فقط في كل مرة", "قفل حول بيانات مشتركة", "المقطع الحرج", "الحصول والتحرير", "الاستبعاد المتبادل", "القفل في threading", "only one thread at a time", "lock around shared data", "critical section", "acquire and release", "mutual exclusion", "threading.lock"]
---

## التعريف

الـ mutex (قفل الاستبعاد المتبادل) يسمح لخيط واحد فقط في كل مرة بدخول مقطع حرج، وهو الكود الذي يلمس بيانات مشتركة، فلا تفسد الخيوط عمل بعضها.

## أين تسمعه؟

في الكود متعدد الخيوط، و`threading.Lock` في بايثون، و`sync.Mutex` في Go، ونقاشات الأقفال في قواعد البيانات.

## أمثلة

- Take the mutex before updating the shared counter.
  - احصل على القفل قبل تحديث العداد المشترك.
- Hold the lock for as short a time as possible.
  - أمسك القفل أقصر وقت ممكن.
- The mutex stops two goroutines from updating the balance at the same time.
  - يمنع القفل المتبادل (mutex) خيطين من تحديث الرصيد في الوقت نفسه.

## خطأ شائع

نسيان تحرير القفل عند مسار الخطأ، أو أخذ قفلين بترتيب مختلف. كلاهما يؤدي إلى الجمود.

## لا تخلطه مع

السيمافور الذي يسمح بدخول N خيوط. والـ mutex حالة خاصة حيث N يساوي 1.

## قلها في العمل

- Wrap this in a lock.
  - ضع هذا داخل قفل.
- Use `with lock:` so it is always released.
  - استخدم `with lock:` ليُحرَّر دائماً.

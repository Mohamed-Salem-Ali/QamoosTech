---
id: data-race
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [race-condition, mutex, thread]
aliases: ["data races"]
term: "Data Race"
translation: "سباق البيانات"
pronunciation: "داتا ريس"
keywords: ["خيطان يكتبان المتغير نفسه", "بلا قفل", "وصول غير متزامن", "سلوك غير معرّف", "كاشف السباق", "تحديث ضائع", "two threads write same variable", "no lock", "unsynchronised access", "undefined behaviour", "race detector", "lost update"]
---

## التعريف

سباق البيانات (Data Race) يحدث حين يصل خيطان إلى الذاكرة نفسها في الوقت نفسه ويكتب أحدهما على الأقل دون ما ينظم الوصول. والنتيجة غير متوقعة.

## أين تسمعه؟

في Go (`go test -race`)، ونقاشات التزامن في C++ وجافا، وأخطاء تختفي عند إضافة طباعة.

## أمثلة

- Two goroutines incrementing the same counter without a lock is a data race.
  - جورتينان تزيدان العداد نفسه بلا قفل سباق بيانات.
- The race detector flagged line 42.
  - نبّه كاشف السباق إلى السطر 42.

## خطأ شائع

الظن بأن `counter += 1` ذرية. هي تقرأ وتجمع وتكتب بخطوات منفصلة يمكن للخيوط تداخلها.

## لا تخلطه مع

حالة التسابق وهي الخلل الأعم حيث يغيّر التوقيت النتيجة. أما سباق البيانات فنوع الوصول إلى الذاكرة تحديداً.

## قلها في العمل

- Run the tests with the race detector on.
  - شغّل الاختبارات مع كاشف السباق.
- Protect the shared map with a mutex.
  - احمِ الخريطة المشتركة بقفل.

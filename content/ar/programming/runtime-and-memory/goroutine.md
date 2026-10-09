---
id: goroutine
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [coroutine, thread, data-race]
aliases: ["goroutines", "go routine", "channel"]
term: "Goroutine"
translation: "الجورتين"
pronunciation: "جورتين"
keywords: ["الكلمة go", "خيط خفيف في Go", "آلاف منها معاً", "قنوات للتواصل", "يجدولها مشغّل Go", "التزامن في Go", "go keyword", "lightweight thread in go", "thousands at once", "channels to communicate", "scheduled by go runtime", "concurrency in go"]
---

## التعريف

الجورتين (Goroutine) وحدة العمل المتزامن الخفيفة في Go. تبدؤها بالكلمة `go` ويجدول مشغّل Go آلافاً منها على بضعة خيوط في نظام التشغيل.

## أين تسمعه؟

في كود Go ودروسها، ومقابلات وظائف Go، ونقاشات التزامن التي تقارن Go بـ async أو الخيوط.

## أمثلة

- Launch a goroutine per request and send results over a channel.
  - أطلق جورتين لكل طلب وأرسل النتائج عبر قناة.
- Leaking goroutines that wait forever is a common bug.
  - تسرب جورتينات تنتظر للأبد خلل شائع.
- Each incoming job runs in its own goroutine and reports back on a channel.
  - تعمل كل مهمة واردة في goroutine خاصة بها، وتُبلغ عن نتيجتها عبر القناة.

## خطأ شائع

تشغيل جورتينات دون طريقة لإيقافها أو انتظارها. استخدم WaitGroup أو context أو قناة للتحكم بها.

## لا تخلطه مع

خيط نظام التشغيل الأثقل بكثير. تبدأ الجورتينات صغيرة ورخيصة الإنشاء بأعداد كبيرة.

## قلها في العمل

- Run this in a goroutine.
  - شغّل هذا في جورتين.
- Use `go test -race` to check the goroutines.
  - استخدم `go test -race` لفحص الجورتينات.

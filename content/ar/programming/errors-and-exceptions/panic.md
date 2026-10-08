---
id: panic
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, traceback, fail-fast]
aliases: ["runtime panic", "unrecoverable error"]
term: "Panic"
translation: "الانهيار الفوري"
pronunciation: "بانيك"
keywords: ["program crashes on a bug", "unrecoverable error in go", "rust panic macro", "stop the program right away", "index out of range crash", "panic vs returning an error", "الانهيار الفوري في البرنامج", "توقف فوري بسبب خطأ برمجي", "انهيار لا يمكن استرداده", "الفرق بين panic والخطأ المُعاد", "خطأ يوقف المهمة الحالية", "إيقاف البرنامج فوراً"]
---

## التعريف

إشارة إلى أن البرنامج وصل إلى حالة لا يستطيع المتابعة منها بأمان. في Go وRust يوقف الـ panic المهمة الحالية ويفكّ مكدس التنفيذ. وهو للأخطاء البرمجية والحالات المستحيلة، لا للإخفاقات المتوقعة مثل غياب ملف.

## أين تسمعه؟

في شيفرة Go وRust، وفي سجلات الأعطال التي تبدأ بـ "panic:"، وفي مراجعات الشيفرة حول متى تُرجع خطأً بدل الانهيار الفوري.

## أمثلة

- The program panics because the code indexed past the end of the slice.
  - ينهار البرنامج بسبب panic لأن الشيفرة تجاوزت آخر عنصر في المصفوفة.
- Return an error for a missing file; keep panic for real bugs in our own code.
  - أرجِع خطأً عند غياب الملف، واحتفظ بـ panic للأخطاء الحقيقية في شيفرتنا.
- In Go, a panic in any goroutine crashes the whole program unless something recovers it.
  - في Go يُسقط أي panic في أي goroutine البرنامج كله ما لم يلتقطه شيء ما.

## خطأ شائع

استخدام panic للإخفاقات العادية مثل المدخلات الخاطئة من المستخدم. لا يستطيع المستدعي معالجته بنظافة، وقد يُسقط طلب واحد خدمة كاملة.

## لا تخلطه مع

الاستثناء في Python أو Java خطأ متوقع يُفترض أن يلتقطه المستدعي. أما panic فيدل على خطأ برمجي أو حالة لا يمكن استرداد البرنامج منها بأمان، لذلك لا ينبغي أن تعتمد الشيفرة العادية على التقاطه.

## قلها في العمل

- Bad input should return an error, not panic. Only a real bug should panic.
  - على المدخل الخاطئ أن يُرجع خطأً لا panic، ولا يُسمح بـ panic إلا لخطأ برمجي حقيقي.
- Which goroutine recovers this panic, if any?
  - أي goroutine تلتقط هذا الـ panic، إن كانت هناك واحدة؟

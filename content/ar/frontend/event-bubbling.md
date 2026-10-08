---
id: event-bubbling
category: frontend
level: intermediate
related: [event-driven, event-delegation]
term: "Event Bubbling"
translation: "انتشار الأحداث"
pronunciation: "إيفينت بابلينج"
keywords: ["انتقال الحدث للأعلى في dom","توقف الحدث عند العناصر الأب","تفعيل الحدث في العناصر المتداخلة","آلية تصاعد الأحداث في جافا سكريبت","منع وصول الحدث للعنصر الأب","شرح تفويض الأحداث في البرمجة","كيفية إيقاف تصاعد الأحداث","انتقال الحدث من الابن للأب","الفرق بين bubbling و capturing","تداخل مستمعي الأحداث في المتصفح","event propagation up dom tree","stop child click triggering parent","how to handle nested events","event delegation pattern explanation","events moving to parent elements","js event bubbling behavior","preventing event propagation in js","event bubbling vs capturing","click event propagates to container","event listener hierarchy in dom"]
---

## التعريف

هي آلية في نموذج كائن المستند (DOM) حيث ينتقل الحدث الذي يقع على عنصر فرعي إلى الأعلى ليصل إلى العناصر الأب. تسمح هذه الخاصية بمعالجة الأحداث من خلال مستمع أحداث واحد موضوع على العنصر الحاوي بدلاً من وضع مستمع لكل عنصر فرعي.

## أين تسمعه؟

يُستخدم هذا المصطلح عند إدارة مستمعي الأحداث (event listeners) في JavaScript، أو عند اكتشاف أسباب تفعيل أحداث غير متوقعة، أو عند تطبيق نمط تفويض الأحداث (event delegation).

## أمثلة

- Clicking a button inside a div triggers the click event on the button first, then the div.
  - النقر على زر داخل عنصر div يؤدي إلى تفعيل حدث النقر على الزر أولاً، ثم على عنصر div.
- You can use event delegation to attach one listener to a list instead of adding listeners to every list item.
  - يمكنك استخدام تفويض الأحداث لإضافة مستمع واحد للقائمة بدلاً من إضافة مستمع لكل عنصر داخل القائمة.

## خطأ شائع

ينسى المطورون غالباً أن الأحداث تنتقل للأعلى (تتصاعد) بشكل افتراضي، مما قد يؤدي إلى تفعيل عدة دوال معالجة عن غير قصد، وهو أمر يمكن إيقافه باستخدام `event.stopPropagation()`.

## لا تخلطه مع

تنتقل خاصية Event Bubbling للأعلى من العنصر المستهدف إلى العناصر الأب، بينما تنتقل خاصية Event Capturing للأسفل من الجذر إلى العنصر المستهدف.

## قلها في العمل

- Make sure to call event.stopPropagation here, otherwise event bubbling will trigger the parent container as well.
  - تأكد من استدعاء event.stopPropagation هنا وإلا فإن Event Bubbling سيفعل الحاويات الأب أيضاً.
- We can refactor this component to rely on event bubbling instead of attaching separate listeners to every single child.
  - يمكننا إعادة هيكلة هذا المكون ليعتمد على Event Bubbling بدلاً من إرفاق مستمعين منفصلين بكل عنصر فرعي.

---
id: event-bubbling
category: frontend
level: intermediate
related: [event-driven]
term: "Event Bubbling"
pronunciation: "إيفينت بابلينج"
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

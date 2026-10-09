---
id: gradient-descent
category: ai-data
level: intermediate
related: [backpropagation, training-data, overfitting]
aliases: ["sgd", "learning rate", "optimizer", "loss function"]
term: "Gradient Descent"
translation: "النزول التدريجي"
pronunciation: "جريديانت ديسنت"
keywords: ["تقليل الخطأ خطوة بخطوة", "معدل التعلم", "اتبع المنحدر نزولاً", "المُحسِّن", "‏SGD وAdam", "تدريب نموذج", "minimize the loss step by step", "learning rate", "follow the slope downhill", "optimizer", "sgd adam", "training a model"]
---

## التعريف

النزول التدريجي (Gradient Descent) هو الطريقة التي تتعلم بها معظم نماذج تعلم الآلة: يعدّل المعاملات تعديلاً صغيراً مراراً في اتجاه يقلل الخطأ (الخسارة)، كمن يمشي نزولاً من تل.

## أين تسمعه؟

في مقررات تعلم الآلة، وسجلات التدريب (الخسارة تنخفض)، وإعدادات المُحسِّن، وأدلة الضبط الدقيق.

## أمثلة

- Gradient descent updates the weights using the gradient of the loss.
  - يحدّث النزول التدريجي الأوزان باستخدام تدرج الخسارة.
- A learning rate that is too large makes the loss bounce around.
  - معدل تعلم كبير جداً يجعل الخسارة تتذبذب.
- Each step moves the weights a small amount against the gradient, so the loss goes down.
  - تحرّك كل خطوة الأوزان قليلاً عكس التدرّج، فينخفض الخطأ.

## خطأ شائع

اختيار معدل التعلم بالتخمين. العالي جداً يتباعد والمنخفض جداً يطول؛ اضبطه.

## لا تخلطه مع

الانتشار العكسي الذي يحسب التدرجات. أما النزول التدريجي فيستخدمها لتحديث النموذج.

## قلها في العمل

- What optimizer and learning rate are we using?
  - أي مُحسِّن ومعدل تعلم نستخدم؟
- The loss stopped decreasing.
  - توقفت الخسارة عن الانخفاض.

---
id: activation-function
category: ai-data
level: intermediate
related: [backpropagation, gradient-descent, training-data]
aliases: ["relu", "softmax", "sigmoid"]
term: "Activation Function"
translation: "دالة التنشيط"
pronunciation: "أكتيفيشن فنكشن"
keywords: ["تضيف اللاخطية", "‏ReLU وsigmoid وsoftmax", "تقرر مخرج العصبون", "بين الطبقات", "بدونها الشبكة خطية فقط", "ضغط القيم", "adds non linearity", "relu sigmoid softmax", "decides neuron output", "between layers", "without it a network is just linear", "squash values"]
---

## التعريف

دالة التنشيط (Activation Function) دالة صغيرة تُطبَّق على مخرج كل عصبون في شبكة عصبية، مثل ReLU أو softmax. تضيف اللاخطية فتتعلم الشبكة أنماطاً معقدة بدل علاقات خطية فقط.

## أين تسمعه؟

في كود الشبكات العصبية ومقرراتها، ووصف معماريات النماذج، وتصحيح العصبونات الميتة.

## أمثلة

- ReLU is the usual activation between hidden layers.
  - ‏ReLU هي دالة التنشيط المعتادة بين الطبقات المخفية.
- Softmax turns the final scores into probabilities.
  - تحوّل softmax الدرجات النهائية إلى احتمالات.
- Without an activation function, stacking layers would still behave like one linear layer.
  - بدون دالة تفعيل، لن يختلف تكديس الطبقات عن طبقة خطية واحدة.

## خطأ شائع

تكديس طبقات بلا دالة تنشيط. تنهار إلى طبقة خطية واحدة ولا تتعلم شيئاً إضافياً.

## لا تخلطه مع

دالة الخسارة التي تقيس الخطأ في النهاية. أما التنشيط فيعمل داخل الشبكة.

## قلها في العمل

- Which activation do you use here?
  - أي دالة تنشيط تستخدم هنا؟
- Swap ReLU for GELU and compare.
  - بدّل ReLU بـ GELU وقارن.

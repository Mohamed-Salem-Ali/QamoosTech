---
id: backpropagation
category: ai-data
level: intermediate
related: [gradient-descent, activation-function, training-data]
aliases: ["backprop", "backward pass"]
term: "Backpropagation"
translation: "الانتشار العكسي"
pronunciation: "باك بروباجيشن"
keywords: ["حساب التدرجات للخلف", "كيف تتعلم الشبكات العصبية", "قاعدة السلسلة", "الخطأ يعود عبر الطبقات", "تحديث كل وزن", "خطوة التدريب", "compute gradients backwards", "how neural networks learn", "chain rule", "error flows back through layers", "update every weight", "training step"]
---

## التعريف

الانتشار العكسي (Backpropagation) خوارزمية تحسب مقدار مساهمة كل وزن في الشبكة العصبية في الخطأ بإرسال الخطأ للخلف عبر الطبقات، ليتمكن النزول التدريجي من تعديل الأوزان.

## أين تسمعه؟

في مقررات التعلم العميق، ووثائق الأطر (`loss.backward()`)، وشروح كيفية عمل التدريب.

## أمثلة

- PyTorch computes the gradients when you call `loss.backward()`.
  - تحسب PyTorch التدرجات عند استدعاء `loss.backward()`.
- Each training step is a forward pass, backpropagation, then a weight update.
  - كل خطوة تدريب مرور أمامي ثم انتشار عكسي ثم تحديث الأوزان.
- Backpropagation computed the gradient for every layer in one backward pass.
  - حسبت خوارزمية الانتشار الخلفي (backpropagation) التدرّج لكل طبقة في مرور خلفي واحد.

## خطأ شائع

الظن بأن الانتشار العكسي هو التعلم نفسه. هو يحسب التدرجات فقط والمُحسِّن يجري التحديث.

## لا تخلطه مع

الاستدلال (Inference) استخدام نموذج مدرّب للتنبؤ بالمرور الأمامي فقط.

## قلها في العمل

- Zero the gradients before the next backward pass.
  - صفّر التدرجات قبل المرور العكسي التالي.
- Backprop is the expensive part of training.
  - الانتشار العكسي هو الجزء المكلف من التدريب.

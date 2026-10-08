---
id: overfitting
category: ai-data
level: intermediate
related: [fine-tuning, underfitting]
term: "Overfitting"
pronunciation: "أوفرفيتينج"
translation: "فرط الملاءمة / الإفراط في الملاءمة"
keywords: ["فرط الملاءمة في النماذج","النموذج يحفظ بيانات التدريب","مشكلة الإفراط في التعلم","أوفرفيتينج في التعلم الآلي","النموذج لا يعمل على بيانات جديدة","دقة عالية في التدريب وضعف في الاختبار","تجنب حفظ بيانات التدريب","لماذا يفشل النموذج في الاختبار","الإفراط في مطابقة البيانات","مشاكل تدريب النماذج الذكية","model memorizing training data","poor performance on test data","high training accuracy low validation","preventing model from overlearning","model captures noise not patterns","over fit","overfitting in machine learning","model too complex for data","overfitted model","why is my model failing validation","avoiding model memorization"]
---

## التعريف

خطأ في النمذجة يحدث عندما يتعلم نموذج التعلم الآلي بيانات التدريب بدرجة زائدة عن اللزوم، بما في ذلك التشويش والبيانات الشاذة فيها، مما يجعله يفشل في التعامل مع البيانات الجديدة وغير المتوقعة.

## أين تسمعه؟

في نقاشات مسارات عمل التعلم الآلي، وتقييم تدريب النماذج، ومراجعات كود علم البيانات.

## أمثلة

- The model shows high accuracy on the training set, but its performance drops significantly during testing due to overfitting.
  - يُظهر النموذج دقة عالية في بيانات التدريب، لكن أداءه ينخفض بشكل كبير أثناء الاختبار بسبب فرط الملاءمة.
- We need to add regularization techniques to prevent the neural network from overfitting.
  - نحتاج إلى إضافة تقنيات التنظيم لمنع الشبكة العصبية من الإفراط في الملاءمة.

## خطأ شائع

الاعتقاد بأن الوصول إلى معدل خطأ قريب من الصفر على بيانات التدريب يعني أن النموذج جاهز للإنتاج.

## لا تخلطه مع

فرط الملاءمة مقابل نقص الملاءمة: يحدث فرط الملاءمة عندما يلتقط النموذج التشويش بدلاً من الأنماط، بينما يحدث نقص الملاءمة عندما يكون النموذج بسيطاً جداً بحيث لا يستطيع التقاط الهيكل الأساسي للبيانات.

## قلها في العمل

- I think the model is overfitting because the training loss is extremely low but the validation accuracy is stalling.
  - أعتقد أن النموذج يعاني من فرط الملاءمة لأن خسارة التدريب منخفضة للغاية ولكن دقة التحقق لا تتحسن.
- Please review the training logs, as the current metrics suggest the model is overfitting on the training set.
  - يرجى مراجعة سجلات التدريب، حيث تشير المقاييس الحالية إلى أن النموذج يعاني من فرط الملاءمة في مجموعة بيانات التدريب.

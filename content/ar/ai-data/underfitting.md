---
id: underfitting
category: ai-data
level: intermediate
related: [overfitting, training-data, gradient-descent]
aliases: ["high bias", "bias and variance"]
term: "Underfitting"
translation: "نقص التعلّم"
pronunciation: "أندرفيتينج"
keywords: ["نموذج بسيط جداً", "ضعيف حتى على بيانات التدريب", "انحياز مرتفع", "لا يتعلم النمط", "ميزات أو سعة أكبر", "درّب لفترة أطول", "model too simple", "poor on training data too", "high bias", "not learning the pattern", "more features or capacity", "train longer"]
---

## التعريف

نقص التعلّم (Underfitting) يعني أن النموذج بسيط جداً أو مدرَّب قليلاً فلا يلتقط النمط في البيانات، فيكون أداؤه سيئاً حتى على بيانات التدريب.

## أين تسمعه؟

في تقييم نماذج تعلم الآلة، ونقاشات الانحياز والتباين، ومراجعة منحنيات التدريب.

## أمثلة

- Both training and validation scores are low, so the model is underfitting.
  - درجتا التدريب والتحقق منخفضتان إذن النموذج ناقص التعلم.
- Try a bigger model or more informative features.
  - جرّب نموذجاً أكبر أو ميزات أغنى.

## خطأ شائع

إضافة بيانات أكثر لعلاجه. البيانات الأكثر تفيد الإفراط في التعلم؛ أما نقص التعلم فيحتاج غالباً نموذجاً أقدر.

## لا تخلطه مع

الإفراط في التعلم حيث ينجح النموذج على بيانات التدريب ويفشل على الجديدة.

## قلها في العمل

- It's underfitting; the training loss is still high.
  - إنه نقص تعلم؛ خسارة التدريب ما زالت عالية.
- Increase the model capacity.
  - زد سعة النموذج.

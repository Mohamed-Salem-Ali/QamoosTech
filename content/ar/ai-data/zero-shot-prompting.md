---
id: zero-shot-prompting
category: ai-data
level: intermediate
related: [llm, prompt-engineering]
term: "Zero-shot Prompting"
pronunciation: "زيرو شوت برومبتينج"
keywords: ["توجيه النموذج بدون أمثلة مسبقة","الطلب من الذكاء الاصطناعي بدون أمثلة","استخدام النموذج اللغوي بدون أمثلة","كتابة الأوامر بدون أمثلة توضيحية","تقنية زيرو شوت برومبتينج","الاعتماد على معرفة النموذج السابقة","سؤال النموذج مباشرة بدون أمثلة","برمجة الأوامر بدون أمثلة","prompt llm without examples","zero shot learning","ask ai without examples","zero shot text generation","prompting without training data","zero shot inference","direct prompt without examples","zeroshot prompt technique","base llm instruction prompt"]
---

## التعريف

تقنية Zero-shot prompting هي طلب تنفيذ مهمة من نموذج لغوي ضخم (LLM) دون تزويده بأي أمثلة توضيحية داخل نص الطلب (Prompt). يعتمد النموذج في هذه الحالة كلياً على معرفته المسبقة لفهم التعليمات وتوليد النتيجة.

## أين تسمعه؟

في اجتماعات مهندسي الذكاء الاصطناعي، أو عند قراءة وثائق هندسة الأوامر (Prompt Engineering)، أو عند مناقشة تحسين أداء النماذج اللغوية.

## أمثلة

- "Try a zero-shot prompting approach first to see if the model can classify the sentiment without examples."
  - جرب نهج Zero-shot prompting أولاً لترى ما إذا كان بإمكان النموذج تصنيف المشاعر دون الحاجة لأمثلة.
- "The zero-shot prompting results were surprisingly accurate for this simple summarization task."
  - كانت نتائج الـ Zero-shot prompting دقيقة بشكل مفاجئ في مهمة التلخيص البسيطة هذه.

## خطأ شائع

الاعتقاد بأن Zero-shot prompting ستنجح دائماً في المهام المعقدة أو التخصصية جداً التي تتطلب سياقاً أو تنسيقاً محدداً، مما يؤدي غالباً إلى نتائج ضعيفة كان يمكن تحسينها باستخدام تقنية Few-shot prompting.

## لا تخلطه مع

تعتمد تقنية Zero-shot prompting على طلب تنفيذ المهمة دون أمثلة، بينما تتضمن تقنية Few-shot prompting إضافة عدد قليل من الأمثلة داخل نص الطلب لتوجيه مخرجات النموذج بشكل أفضل.

## قلها في العمل

- Can we test this extraction logic with zero-shot prompting before we spend time building a full few-shot example set?
  - هل يمكننا اختبار منطق الاستخراج هذا باستخدام zero-shot prompting قبل أن نضيّع وقتاً في بناء مجموعة أمثلة متكاملة لـ few-shot؟
- I updated the evaluation script to compare the zero-shot prompting accuracy against our previous few-shot baseline.
  - لقد قمت بتحديث سكريبت التقييم لمقارنة دقة الـ zero-shot prompting مع خط الأساس السابق لـ few-shot.

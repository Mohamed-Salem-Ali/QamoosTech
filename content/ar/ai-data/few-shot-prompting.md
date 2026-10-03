---
id: few-shot-prompting
category: ai-data
level: intermediate
related: [prompt-engineering, llm]
term: "Few-shot Prompting"
pronunciation: "فيو شوت برومبتنج"
translation: "التوجيه بالأمثلة القليلة"
---

## التعريف

تزويد نموذج اللغات الكبير بأمثلة قليلة داخل النص التوجيهي (Prompt) لمساعدته في فهم الشكل المطلوب أو السلوك المرغوب.

## أين تسمعه؟

عند محاولة تحسين نتائج النموذج، أو كتابة التوجيهات النظامية، أو رفع دقة الإجابات من دون الحاجة لإعادة التدريب.

## أمثلة

- We used few-shot prompting to teach the model how to format JSON responses.
  - استخدِمنَا التوجيه بالأمثلة القليلة لتعليم النموذج كيفية تنسيق ردود بصيغة JSON.
- Adding three classification examples via few-shot prompting fixed the incorrect category outputs.
  - إضافة ثلاثة أمثلة للتصنيف عبر التوجيه بالأمثلة القليلة أصلحت مخرجات التصنيف الخاطئة.

## خطأ شائع

الاعتقاد بأنك بحاجة إلى العشرات من الأمثلة، بينما عادة ما يكفي مثالان إلى خمسة أمثلة مختارة بعناية ليفهم النموذج النمط المطلوب.

## لا تخلطه مع

يتم الخلط أحياناً بين التوجيه بالأمثلة القليلة (Few-shot prompting) والضبط الدقيق (Fine-tuning)؛ فبينما يعتمد الأول على تقديم أمثلة داخل النص التوجيهي أثناء التشغيل، يتطلب الثاني تحديث أوزان النموذج بشكل دائم باستخدام مجموعة بيانات كبيرة.

## قلها في العمل

- Let's try adding a few-shot prompting section to the system message to see if it stabilizes the output format.
  - دعونا نجرب إضافة قسم للتوجيه بالأمثلة القليلة في رسالة النظام لنرى ما إذا كان ذلك سيجعل تنسيق المخرجات أكثر استقراراً.
- I have updated the prompt with few-shot prompting examples to help the model better understand the required extraction logic.
  - لقد قمت بتحديث النص التوجيهي باستخدام أمثلة التوجيه بالأمثلة القليلة لمساعدة النموذج على فهم منطق الاستخراج المطلوب بشكل أفضل.

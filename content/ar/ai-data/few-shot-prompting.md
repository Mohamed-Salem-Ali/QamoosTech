---
id: few-shot-prompting
category: ai-data
level: intermediate
related: [prompt-engineering, llm]
term: "Few-shot Prompting"
pronunciation: "فيو شوت برومبتنج"
translation: "التوجيه بالأمثلة القليلة"
keywords: ["تعليم النموذج عبر أمثلة","توجيه الذكاء الاصطناعي بأمثلة","تحسين نتائج النموذج بأمثلة قليلة","التوجيه بالأمثلة داخل البرومبت","تقديم نماذج للإجابة للذكاء الاصطناعي","تزويد النموذج بأمثلة توضيحية","طريقة فيو شوت برومبتنج","تحسين دقة النموذج بدون تدريب","استخدام أمثلة قليلة للبرومبت","توجيه النموذج بأمثلة محددة","teach ai with examples","prompting with input output pairs","how to guide llm output","few shot learning technique","improve llm accuracy with examples","few shot prompt engineering","in context learning examples","giving model sample responses","fewshot prompting","few shot prompt method"]
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

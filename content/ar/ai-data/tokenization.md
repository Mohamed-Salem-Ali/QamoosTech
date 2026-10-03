---
id: tokenization
category: ai-data
level: beginner
related: [llm, token]
term: "Tokenization"
pronunciation: "توكنايزيشن"
keywords: ["تقسيم النصوص إلى وحدات","تحويل الكلام إلى توكنز","تجزئة الكلمات للذكاء الاصطناعي","كيف تفهم النماذج النصوص","معالجة النصوص قبل النموذج","تقطيع الجمل إلى أجزاء","طريقة عمل التوكنايزيشن","تجهيز البيانات للنماذج اللغوية","تحويل النص إلى أرقام","وحدات بناء النصوص البرمجية","breaking text into pieces","how llms read words","split string into tokens","text preprocessing for ai","convert sentences to units","subword segmentation method","tokanization spelling","prepare text for models","count tokens in text","splitting words into chunks"]
---

## التعريف

هي عملية تقسيم النصوص الخام إلى وحدات أصغر تُسمى "Tokens" (مثل الكلمات، أجزاء الكلمات، أو الحروف). تُعد هذه الوحدات اللبنات الأساسية التي تستخدمها نماذج الذكاء الاصطناعي اللغوية لمعالجة وفهم البيانات المدخلة.

## أين تسمعه؟

في النقاشات المتعلقة بحدود الإدخال في النماذج اللغوية الكبيرة (LLMs)، وخطوات معالجة البيانات، وإعدادات تدريب النماذج.

## أمثلة

- The model failed because the input text exceeded the maximum tokenization limit.
  - فشل النموذج لأن النص المدخل تجاوز الحد الأقصى لعملية الـ Tokenization.
- Our preprocessing script handles tokenization before sending the data to the API.
  - يقوم سكربت المعالجة المسبقة لدينا بإجراء الـ Tokenization قبل إرسال البيانات إلى الـ API.

## خطأ شائع

الاعتقاد بأن الـ Token الواحد يساوي دائماً كلمة واحدة، بينما في الواقع تقوم معظم أدوات الـ Tokenization الحديثة بتقسيم الكلمات إلى أجزاء أصغر للتعامل مع المفردات المعقدة.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Tokenization والـ Stemming؛ فبينما تقوم الـ Tokenization بتقسيم النص إلى وحدات منفصلة، يقوم الـ Stemming بإرجاع الكلمات إلى أصلها أو جذرها الأساسي.

## قلها في العمل

- We need to check if our current tokenization strategy is efficient enough for these long documents.
  - نحتاج إلى التحقق مما إذا كانت استراتيجية الـ Tokenization الحالية لدينا فعالة بما يكفي لهذه المستندات الطويلة.
- Please review the updated configuration to ensure the tokenization process correctly handles special characters.
  - يرجى مراجعة الإعدادات المحدثة للتأكد من أن عملية الـ Tokenization تتعامل مع الرموز الخاصة بشكل صحيح.

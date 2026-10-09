---
id: temperature
category: ai-data
level: intermediate
related: [llm, prompt-engineering, token]
term: "Temperature"
translation: "درجة الحرارة"
pronunciation: "تيمبريتشر"
keywords: ["التحكم في عشوائية مخرجات النموذج","جعل إجابات الذكاء الاصطناعي إبداعية","تقليل تكرار النصوص في النموذج","معامل ضبط عشوائية النماذج اللغوية","تغيير مدى تنوع إجابات الذكاء","ضبط احتمالية اختيار الكلمات","جعل مخرجات النموذج أكثر دقة","تعديل إعدادات توليد النصوص","تيمبريتشر في النماذج اللغوية","التحكم في تنوع إجابات الـ ai","control randomness of llm output","make ai model more creative","reduce repetitive text from model","llm hyperparameter for variety","adjust ai text predictability","how to change model randomness","make ai responses less deterministic","ai token selection probability","configure generative ai model settings","tweak model output diversity"]
---

## التعريف

هي معامل ضبط (hyperparameter) في النماذج اللغوية الكبيرة (LLMs) يتحكم في مدى عشوائية النص المُوَلَّد. القيم المنخفضة تجعل المخرجات أكثر ثباتاً وتركيزاً، بينما القيم العالية تجعلها أكثر إبداعاً وتنوعاً.

## أين تسمعه؟

- عند ضبط إعدادات النموذج في طلبات الـ API.
- عند تحديد استراتيجيات كتابة الـ Prompts للمهام الإبداعية.
- عند محاولة حل مشكلة تكرار الإجابات أو عدم منطقيتها.

## أمثلة

- Set the temperature to 0.2 for factual tasks to ensure consistency.
  - اضبط الـ Temperature على 0.2 للمهام التي تتطلب حقائق لضمان الاتساق.
- Increase the temperature to 0.8 if you want the model to generate more creative stories.
  - ارفع الـ Temperature إلى 0.8 إذا كنت تريد من النموذج توليد قصص أكثر إبداعاً.
- A temperature of 0 gives the most consistent answers for the data extraction task.
  - تعطي درجة الحرارة 0 أكثر الإجابات ثباتاً لمهمة استخراج البيانات.

## خطأ شائع

الاعتقاد بأن رفع درجة الحرارة يجعل النموذج "أذكى"؛ في الواقع، هي تزيد فقط من احتمالية اختيار كلمات أقل شيوعاً، مما قد يؤدي إلى زيادة نسبة الهلوسة (hallucinations) في النتائج.

## لا تخلطه مع

تتحكم درجة الحرارة (Temperature) في عشوائية اختيار الكلمات، بينما يحدد معامل (top_p) مجموعة الكلمات المتاحة بناءً على احتمالاتها التراكمية.

## قلها في العمل

- Let us try bumping up the temperature slightly in our next test to see if we get more varied responses.
  - دعنا نحاول رفع الـ temperature قليلاً في اختبارنا القادم لنرى ما إذا كنا سنحصل على إجابات أكثر تنوعاً.
- Please ensure the temperature parameter is set to zero in the production configuration for all factual retrieval tasks.
  - يرجى التأكد من ضبط معامل الـ temperature على الصفر في إعدادات الإنتاج لجميع مهام استرجاع الحقائق.

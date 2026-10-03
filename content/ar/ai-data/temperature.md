---
id: temperature
category: ai-data
level: intermediate
related: [llm, prompt-engineering, token]
term: "Temperature"
pronunciation: "تيمبريتشر"
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

## خطأ شائع

الاعتقاد بأن رفع درجة الحرارة يجعل النموذج "أذكى"؛ في الواقع، هي تزيد فقط من احتمالية اختيار كلمات أقل شيوعاً، مما قد يؤدي إلى زيادة نسبة الهلوسة (hallucinations) في النتائج.

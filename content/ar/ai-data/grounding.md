---
id: grounding
category: ai-data
level: intermediate
related: [llm, hallucination, rag]
term: "Grounding"
pronunciation: "جراوندينج"
---

## التعريف

عملية ربط نموذج لغوي ضخم (LLM) بمصادر بيانات خارجية وموثوقة لضمان دقة وصحة الإجابات. تساعد هذه العملية في منع النموذج من اختلاق معلومات غير صحيحة (الهلوسة) عبر إجباره على الاعتماد على بيانات حقيقية بدلاً من الاكتفاء بمعلوماته الداخلية.

## أين تسمعه؟

في الاجتماعات التقنية حول بنية الذكاء الاصطناعي، أو عند تنفيذ تقنية RAG، أو عند مناقشة طرق تحسين موثوقية روبوتات المحادثة.

## أمثلة

- We need to implement grounding so the AI answers based on our company's internal documentation.
  - نحتاج إلى تطبيق Grounding لكي يجيب الذكاء الاصطناعي بناءً على وثائق الشركة الداخلية.
- Grounding the model with real-time data significantly reduced the number of incorrect responses.
  - ربط النموذج ببيانات لحظية قلل بشكل ملحوظ من عدد الإجابات غير الصحيحة.

## خطأ شائع

الاعتقاد بأن Grounding هو نفس عملية Fine-tuning؛ فبينما تقوم Fine-tuning بتعديل أوزان النموذج الداخلية، يقوم Grounding بتزويد النموذج بسياق خارجي أثناء وقت التشغيل (Inference).

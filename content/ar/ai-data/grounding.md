---
id: grounding
category: ai-data
level: intermediate
related: [llm, hallucination, rag]
term: "Grounding"
translation: "تأريض النموذج"
pronunciation: "جراوندينج"
keywords: ["ربط النموذج بمصادر خارجية","منع هلوسة الذكاء الاصطناعي","جعل إجابات الذكاء الاصطناعي دقيقة","تزويد النموذج بسياق خارجي","الاعتماد على بيانات موثوقة","تقليل أخطاء روبوت المحادثة","جراوندينج للنماذج اللغوية","الفرق بين جراوندينج والضبط الدقيق","تحسين دقة ردود الذكاء الاصطناعي","ربط النموذج بوثائق الشركة","make ai stick to facts","stop llm from hallucinating","link chatbot to external data","provide context to llm","verify ai model responses","prevent ai from lying","connect model to trusted sources","improve chatbot accuracy with data","grounding vs fine tuning","how to reduce ai hallucinations"]
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
- When the answer is grounded in the policy document, the bot cites the exact clause.
  - حين تُربط الإجابة بوثيقة السياسة، يستشهد الروبوت بالبند الدقيق.

## خطأ شائع

الاعتقاد بأن Grounding هو نفس عملية Fine-tuning؛ فبينما تقوم Fine-tuning بتعديل أوزان النموذج الداخلية، يقوم Grounding بتزويد النموذج بسياق خارجي أثناء وقت التشغيل (Inference).

## لا تخلطه مع

يزود Grounding النموذج اللغوي بسياق خارجي أثناء وقت الاستدلال، بينما تقوم عملية Fine-tuning بتعديل أوزان النموذج الداخلية بشكل دائم باستخدام مجموعة بيانات جديدة.

## قلها في العمل

- Let's check if the grounding pipeline is fetching the latest documents correctly before we merge this PR.
  - دعونا نتحقق مما إذا كان مسار Grounding يجلب أحدث المستندات بشكل صحيح قبل أن ندمج طلب السحب هذا.
- We need to improve the grounding mechanism to ensure the chatbot references the updated product specs.
  - نحتاج إلى تحسين آلية Grounding لضمان أن روبوت المحادثة يشير إلى مواصفات المنتج المحدثة.

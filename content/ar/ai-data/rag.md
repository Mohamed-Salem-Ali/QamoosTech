---
id: rag
category: ai-data
level: intermediate
related: [embeddings, llm, hallucination]
term: "RAG (Retrieval-Augmented Generation)"
translation: "التوليد المعزَّز بالاسترجاع"
pronunciation: "راج"
---
## التعريف

تقنية يبحث فيها النظام أولًا عن مستندات ذات صلة ثم يمررها إلى الـ LLM لتستند إجابته إلى بيانات حقيقية.

## أين تسمعه؟

روبوتات الدردشة المبنية على مستندات الشركة.

## أمثلة

- The support bot uses RAG to answer from our documentation.
  - يستخدم روبوت الدعم RAG للإجابة من توثيقنا.
- RAG reduces hallucinations, but it does not remove them.
  - يقلّل RAG الهلوسة لكنه لا يزيلها.

## خطأ شائع

الاعتقاد أن RAG يجعل الإجابات صحيحة دائمًا. قد يخطئ الاسترجاع في إيجاد المستند الصحيح.

## لا تخلطه مع

يقوم RAG بتحديث ما يعرفه نموذج اللغات الكبير عبر جلب المستندات، بينما يُعدِّل الضبط الدقيق أوزان النموذج نفسها لتعلم أساليب أو حقائق جديدة.

## قلها في العمل

- Let us check if setting up a RAG pipeline will help reduce those hallucination issues in the chatbot.
  - دعنا نتحقق مما إذا كان إعداد خط أنابيب RAG سيساعد في تقليل مشكلات الهلوسة تلك في روبوت الدردشة.
- We need to update our document retriever configuration to improve the accuracy of the RAG responses.
  - نحتاج إلى تحديث إعدادات مسترجع المستندات لتحسين دقة استجابات RAG.

---
id: chunking
category: ai-data
level: intermediate
related: [embeddings, rag, token]
term: "Chunking"
pronunciation: "تشنكينج"
translation: "تقطيع النص"
---

## التعريف

الـ Chunking (تقطيع النص) هو عملية تقسيم المستندات الكبيرة إلى أجزاء أصغر وأسهل للإدارة قبل تحويلها إلى تضمينات متجهة. يضمن هذا أن النص يناسب نافذة سياق النموذج ويحسن دقة استرجاع المعلومات في أنظمة التوليد المعزز بالاسترجاع (RAG).

## أين تسمعه؟

في خطوط أنابيب معالجة البيانات، أو عند بناء تطبيقات التوليد المعزز بالاسترجاع (RAG)، أو عند مناقشة إدخال البيانات في قواعد البيانات المتجهة.

## أمثلة

- We need to configure the chunking strategy to split documents by paragraph instead of fixed character counts.
  - نحتاج إلى ضبط استراتيجية التقطيع لتقسيم المستندات حسب الفقرات بدلاً من أعداد الحروف الثابتة.
- Poor chunking can cut sentences in half and ruin the semantic meaning of the retrieved context.
  - التقطيع السيئ قد يقطع الجمل إلى نصفين ويفسد المعنى الدلالي للسياق المسترجع.

## خطأ شائع

الاعتقاد بأن الأجزاء الأكبر أفضل دائمًا لاحتوائها على سياق أكثر، مع تجاهل حقيقة أن نماذج التضمين تعمل بشكل أفضل على الأجزاء المركزة والمختصرة.

---
id: chunking
category: ai-data
level: intermediate
related: [embeddings, rag, token]
term: "Chunking"
pronunciation: "تشنكينج"
translation: "تقطيع النص"
keywords: ["تقطيع النص إلى أجزاء صغيرة","تقسيم المستندات الكبيرة لنموذج الذكاء الاصطناعي","تجهيز البيانات لنظام راغ","استراتيجية تقطيع المستندات","تقطيع النصوص لتوليد التضمينات","تشنكينج النصوص","تقسيم النص إلى مقاطع دلالية","تجزئة المستندات الطويلة","split large documents for embeddings","divide text into smaller segments","prepare documents for rag","text splitting strategy","segment documents for vector database","document chunking","chunking","tshinking","split text by paragraph"]
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
- Chunking the handbook by section gave the chatbot better answers than fixed-size pages.
  - أعطى تقطيع الدليل حسب الأقسام روبوت المحادثة إجابات أفضل من الصفحات ذات الحجم الثابت.

## خطأ شائع

الاعتقاد بأن الأجزاء الأكبر أفضل دائمًا لاحتوائها على سياق أكثر، مع تجاهل حقيقة أن نماذج التضمين تعمل بشكل أفضل على الأجزاء المركزة والمختصرة.

## لا تخلطه مع

الـ Chunking يقسم النص إلى قطاعات دلالية لتضمينها، بينما الترقيم (Tokenization) يجزئ النص إلى أصغر وحدات فرعية للكلمات يعالجها مُرمز النموذج.

## قلها في العمل

- Let's adjust the chunking size so our retrieval step pulls more relevant context.
  - دعنا نعدل حجم تقطيع النص لكي تجلب خطوة الاسترجاع الخاصة بنا سياقاً أكثر صلة.
- We are updating the preprocessing pipeline to improve the chunking strategy for PDF documents.
  - نحن نقوم بتحديث خط أنابيب معالجة البيانات لتحسين استراتيجية تقطيع النص لمستندات البي دي إف.

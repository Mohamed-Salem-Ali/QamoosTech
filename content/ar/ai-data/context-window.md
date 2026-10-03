---
id: context-window
category: ai-data
level: beginner
related: [llm, prompt-engineering, token]
term: "Context Window"
pronunciation: "كونتيكست ويندو"
translation: "نافذة السياق"
---

## التعريف

الحد الأقصى من النص، مقاساً بالـ tokens، الذي يمكن لنماذج اللغات الكبيرة معالجته وتذكره في تفاعل واحد. وهي تشمل كلاً من مدخلات الـ prompt والرد الذي يولده النموذج.

## أين تسمعه؟

- نقاشات بنية نماذج الذكاء الاصطناعي
- اجتماعات تحسين الـ prompts
- تقييم أسعار واجهات برمجة التطبيقات (APIs)

## أمثلة

- We need to shorten our system prompt to fit within the model's context window.
  - نحتاج إلى تقصير الـ system prompt لكي يناسب نافذة السياق الخاصة بالنموذج.
- Uploading this large PDF failed because it exceeds the context window of our current LLM.
  - فشل رفع هذا الملف الكبير لأنه يتجاوز نافذة السياق لنموذج اللغات الكبير الحالي.

## خطأ شائع

الاعتقاد بأن النموذج يتذكر كل شيء قلته في محادثات سابقة ومنفصلة، مع نسيان أن نافذة السياق تنطبق فقط على الجلسة النشطة الحالية.

---
id: chain-of-thought
category: ai-data
level: intermediate
related: [llm, prompt-engineering]
term: "Chain-of-Thought"
pronunciation: "تشين أوف ثوت"
keywords: ["التفكير خطوة بخطوة","تحسين منطق النماذج اللغوية","تفكيك المسائل المعقدة للذكاء الاصطناعي","تقنية تسلسل الأفكار","إجبار النموذج على إظهار خطواته","هندسة أوامر التفكير المنطقي","توليد خطوات الحل المنطقي","تطوير دقة استنتاج النموذج","تشين أوف ثوت","استراتيجية التفكير المتسلسل","let's think step by step","force llm to show work","reasoning steps for ai","prompting for complex logic","cot prompting technique","improving llm reasoning accuracy","step by step prompt engineering","breaking down model tasks","chain of thought reasoning","logical reasoning in prompts"]
---

## التعريف

هي تقنية في هندسة الأوامر (Prompt Engineering) تُستخدم لتشجيع النماذج اللغوية الكبيرة على تفكيك المسائل المعقدة إلى خطوات منطقية متسلسلة قبل تقديم الإجابة النهائية. تساعد هذه الطريقة في تحسين دقة النموذج في المهام التي تتطلب تحليلاً منطقياً أو رياضياً.

## أين تسمعه؟

في الأبحاث المتعلقة بالذكاء الاصطناعي، وورش عمل هندسة الأوامر، وعند محاولة تحسين أداء النماذج اللغوية في المهام المعقدة.

## أمثلة

- Adding "Let's think step-by-step" to your prompt is a simple way to trigger Chain-of-Thought reasoning.
  - إضافة عبارة "لنُفكر خطوة بخطوة" إلى الأمر هي طريقة بسيطة لتفعيل منطق Chain-of-Thought.
- We implemented Chain-of-Thought to improve the model's accuracy on our internal logic-heavy datasets.
  - قمنا بتطبيق تقنية Chain-of-Thought لتحسين دقة النموذج في التعامل مع بياناتنا الداخلية التي تتطلب تحليلاً منطقياً.

## خطأ شائع

الاعتقاد بأن Chain-of-Thought هو ميزة تقنية مدمجة في هيكلية النموذج، بينما هو في الحقيقة استراتيجية صياغة أوامر (Prompting) تُستخدم لتوجيه عملية توليد النص.

## لا تخلطه مع

غالباً ما يتم الخلط بين Chain-of-Thought و Chain-of-Verification؛ فبينما يركز Chain-of-Thought على توليد خطوات منطقية للوصول إلى استنتاج، يتضمن Chain-of-Verification قيام النموذج بالتحقق من صحة إجاباته السابقة لتقليل الهلوسة.

## قلها في العمل

- If the model keeps getting these math problems wrong, we should try applying a Chain-of-Thought approach to force it to show its work.
  - إذا استمر النموذج في إعطاء إجابات خاطئة لهذه المسائل الرياضية، يجب أن نجرب تطبيق نهج Chain-of-Thought لإجباره على إظهار خطوات الحل.
- I have updated the system prompt to include Chain-of-Thought instructions, which should improve the reasoning quality for our complex user queries.
  - لقد قمت بتحديث أمر النظام ليشمل تعليمات Chain-of-Thought، مما سيؤدي إلى تحسين جودة الاستنتاج لاستفسارات المستخدمين المعقدة.

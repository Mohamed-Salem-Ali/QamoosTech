---
id: monolith-vs-microservices
category: architecture
subcategory: patterns
level: intermediate
related: [scalability, separation-of-concerns]
term: "Monolith vs Microservices"
translation: "النظام الموحّد مقابل الخدمات المصغّرة"
pronunciation: "مونوليث مقابل ميكروسيرفيسز"
keywords: ["الفرق بين النظام الموحد والخدمات المصغرة","هل نستخدم المونوليث أم الميكروسيرفيس","تحويل النظام الموحد الى خدمات مصغرة","معمارية البرمجيات الموحدة والموزعة","مقارنة بين المونوليث والخدمات المصغرة","مميزات وعيوب الميكروسيرفيس","متى نستخدم الخدمات المصغرة","التطبيق وحيد الوحدة مقابل الخدمات","monolithic architecture vs microservices","single unit application vs distributed services","difference between monolith and microservices","should we use microservices or monolith","breaking down a monolith into services","monolith vs microservice pros and cons","choosing software architecture style","moving from monolith to microservices"]
---
## التعريف

الـ *monolith* تطبيق واحد يُنشر كوحدة واحدة، أما الـ *microservices* فتقسّمه إلى خدمات صغيرة كثيرة تتواصل فيما بينها.

## أين تسمعه؟

نقاشات المعمارية والمقابلات.

## أمثلة

- We started with a monolith because the team is small.
  - بدأنا بنظام monolith لأن الفريق صغير.
- Microservices add network calls, so debugging is harder.
  - تضيف الـ microservices استدعاءات شبكة، لذلك يصعب تتبع الأخطاء.

## خطأ شائع

اختيار microservices مبكرًا جدًا. للفرق الصغيرة غالبًا يكون monolith جيد التنظيم أبسط وأسرع.

## قلها في العمل

- Let's discuss if this feature should live in our monolith or as a separate microservice.
  - دعنا نناقش ما إذا كان ينبغي لهذه الميزة أن تعيش في نظامنا الموحّد أو كخدمة مصغّرة منفصلة.
- Moving from a monolith to microservices will help us scale this specific module independently.
  - الإنقال من النظام الموحّد إلى الخدمات المصغّرة سيساعدنا في توسيع نطاق هذا الجزء المحدد بشكل مستقل.

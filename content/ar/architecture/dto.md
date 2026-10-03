---
id: dto
category: architecture
level: intermediate
related: [payload, dependency-injection]
term: "DTO (Data Transfer Object)"
translation: "كائن نقل البيانات"
pronunciation: "دي تي أو"
---
## التعريف

كائن بسيط يصف الشكل الدقيق للبيانات المنتقلة بين أجزاء التطبيق، ويُستخدم كثيرًا للتحقق من الطلبات الواردة.

## أين تسمعه؟

NestJS وتصميم الـ API والتحقق من المدخلات.

## أمثلة

- The `CreateUserDto` rejects requests without a valid email.
  - يرفض `CreateUserDto` الطلبات التي ليس فيها بريد صالح.
- Do not return the database entity directly. Use a response DTO.
  - لا تُرجع كيان قاعدة البيانات مباشرة. استخدم response DTO.

## خطأ شائع

وضع منطق العمل داخل الـ DTO. الـ DTO ينقل البيانات ويتحقق منها فقط.

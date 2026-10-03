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

## لا تخلطه مع

غالباً ما يتم الخلط بين DTO و Entity؛ فبينما يمثل الـ Entity مخطط قاعدة البيانات وحالة العمل، فإن الـ DTO هو مجرد حاوية بيانات تُستخدم لنقل المعلومات بين طبقات التطبيق.

## قلها في العمل

- Can you check if the new DTO includes all the fields required by the frontend?
  - هل يمكنك التحقق مما إذا كان الـ DTO الجديد يتضمن جميع الحقول التي يحتاجها الـ frontend؟
- I have updated the DTO to include an optional phone number field for the user registration endpoint.
  - لقد قمت بتحديث الـ DTO ليشمل حقل رقم هاتف اختياري لنقطة نهاية تسجيل المستخدم.

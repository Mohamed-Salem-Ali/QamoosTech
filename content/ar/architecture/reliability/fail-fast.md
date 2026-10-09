---
id: fail-fast
category: architecture
subcategory: reliability
level: intermediate
related: [fail-open-vs-fail-closed, input-validation, graceful-degradation, panic]
tags: [python]
aliases: ["fail early", "fail loudly"]
term: "Fail Fast"
translation: "الفشل المبكر"
pronunciation: "فيل فاست"
keywords: ["الإبلاغ عن المشكلات مبكراً", "التوقف عند أول علامة بيانات سيئة", "رسالة خطأ واضحة", "التحقق في البداية", "الفشل بصوت عالٍ لا بصمت", "فحص الإعدادات عند التشغيل", "report problems early", "stop at the first sign of bad data", "clear error message", "validate at the start", "crash loudly not silently", "check config on startup"]
---

## التعريف

الفشل المبكر (Fail Fast) يعني اكتشاف المشكلة بأبكر وقت ممكن والتوقف بخطأ واضح، بدل حمل البيانات السيئة إلى الداخل حيث تسبب أعطالاً مربكة لاحقاً.

## أين تسمعه؟

في مبادئ التصميم، وفحوص بدء التشغيل للإعدادات الناقصة، والتحقق من المدخلات، ومراجعات كتل `except: pass` الصامتة.

## أمثلة

- The app refuses to start if the database URL is missing.
  - يرفض التطبيق العمل إذا كان رابط قاعدة البيانات مفقوداً.
- Validate the input at the top and raise a clear error.
  - تحقق من المدخلات في البداية وارفع خطأً واضحاً.
- The script stops at the first missing environment variable instead of failing later.
  - يتوقف السكربت عند أول متغيّر بيئة مفقود، بدل أن يفشل لاحقاً.

## خطأ شائع

التقاط الأخطاء ومتابعة العمل بقيمة افتراضية. عندها تظهر المشكلة الحقيقية بعيداً عن سببها.

## لا تخلطه مع

الفشل المفتوح أو المغلق وهو عمّا يسمح به النظام عند حدوث عطل. أما الفشل المبكر فعن الملاحظة والإبلاغ مبكراً.

## قلها في العمل

- Let's fail fast on bad config.
  - لنفشل مبكراً عند سوء الإعداد.
- A clear early error beats a mystery crash later.
  - خطأ مبكر واضح أفضل من عطل غامض لاحقاً.

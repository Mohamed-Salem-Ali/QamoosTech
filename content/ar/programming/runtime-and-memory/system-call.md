---
id: system-call
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [process, context-switch, virtual-memory]
aliases: ["syscall", "kernel call"]
term: "System Call"
translation: "استدعاء النظام"
pronunciation: "سيستم كول"
keywords: ["طلب من نظام التشغيل", "قراءة وكتابة وفتح ملف", "النواة تقوم بالعمل", "من فضاء المستخدم إلى فضاء النواة", "اختصار syscall", "أداة strace", "ask the operating system", "read write open a file", "kernel does the work", "user space to kernel space", "syscall", "strace"]
---

## التعريف

استدعاء النظام (System Call) هو الطريقة التي يطلب بها برنامج من نواة نظام التشغيل فعل شيء لا يستطيعه بنفسه، كقراءة ملف أو فتح اتصال شبكة أو بدء عملية.

## أين تسمعه؟

في مقررات نظم التشغيل، وضبط الأداء (`strace`)، وأمان الحاويات (seccomp)، وتصحيح الأخطاء منخفض المستوى.

## أمثلة

- `open()` in Python ends up as an `open` system call.
  - تنتهي `open()` في بايثون كاستدعاء نظام `open`.
- Too many small writes mean too many system calls.
  - كتابات صغيرة كثيرة تعني استدعاءات نظام كثيرة.

## خطأ شائع

نسيان أن لكل استدعاء نظام كلفة. تجميع القراءات والكتابات غالباً أسرع بكثير.

## لا تخلطه مع

استدعاء الدالة العادي الذي يبقى داخل برنامجك وهو رخيص.

## قلها في العمل

- Trace the syscalls with strace.
  - تتبّع استدعاءات النظام بـ strace.
- Buffer the output to cut down on system calls.
  - خزّن المخرجات مؤقتاً لتقليل استدعاءات النظام.

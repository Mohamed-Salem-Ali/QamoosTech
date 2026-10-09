---
id: unix-signal
category: devops
subcategory: command-line
level: intermediate
related: [process, zombie-process, exit-code]
aliases: ["sigterm", "sigkill", "sigint", "kill -9", "graceful shutdown"]
term: "Unix Signal"
translation: "إشارة نظام التشغيل"
pronunciation: "يونكس سيجنال"
keywords: ["الإشارات SIGTERM وSIGKILL وSIGINT", "الاختصار Ctrl C", "طلب إيقاف عملية", "إيقاف سلس", "الأمر kill", "إشارة الإيقاف في Kubernetes", "sigterm sigkill sigint", "ctrl c", "ask a process to stop", "graceful shutdown", "kill command", "kubernetes stop signal"]
---

## التعريف

إشارة نظام يونكس (Unix Signal) رسالة قصيرة يرسلها نظام التشغيل إلى عملية. `SIGTERM` تطلب منها التوقف بلطف (فتستطيع التنظيف) و`SIGINT` هي Ctrl+C، و`SIGKILL` تنهيها فوراً ولا يمكن التقاطها.

## أين تسمعه؟

في أوامر `kill`، وسلوك الإيقاف في Docker وKubernetes (SIGTERM ثم SIGKILL)، وكود الإيقاف السلس.

## أمثلة

- Handle SIGTERM so the app finishes in-flight requests before exiting.
  - عالج SIGTERM ليُنهي التطبيق الطلبات الجارية قبل الخروج.
- Kubernetes sends SIGTERM, waits 30 seconds, then SIGKILL.
  - يرسل Kubernetes الإشارة SIGTERM وينتظر 30 ثانية ثم SIGKILL.
- On deploy, the process receives SIGTERM and closes its connections before it exits.
  - عند النشر تتلقى العملية الإشارة SIGTERM وتغلق اتصالاتها قبل أن تنتهي.

## خطأ شائع

استخدام `kill -9` أولاً. لا يعطي البرنامج فرصة لحفظ البيانات أو تحرير الأقفال؛ جرّب SIGTERM أولاً.

## لا تخلطه مع

رمز الخروج الذي تعيده العملية بعد انتهائها. أما الإشارة فتُرسل إلى عملية تعمل.

## قلها في العمل

- Does the app handle SIGTERM?
  - هل يعالج التطبيق SIGTERM؟
- Exit code 137 means it was killed by SIGKILL.
  - رمز الخروج 137 يعني أنه قُتل بـ SIGKILL.

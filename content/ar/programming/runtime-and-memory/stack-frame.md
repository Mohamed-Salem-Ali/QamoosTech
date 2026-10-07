---
id: stack-frame
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [call-stack, recursion, stack-overflow]
aliases: ["activation record", "call frame"]
term: "Stack Frame"
translation: "إطار المكدس"
pronunciation: "ستاك فريم"
keywords: ["سجل استدعاء دالة واحد", "المتغيرات المحلية للاستدعاء", "عنوان العودة", "يُنشأ عند الاستدعاء ويُزال عند العودة", "إطارات في مكدس الاستدعاءات", "المصحح يعرض الإطارات", "one function call record", "local variables of a call", "return address", "created on call removed on return", "frames on the call stack", "debugger shows frames"]
---

## التعريف

إطار المكدس (Stack Frame) كتلة ذاكرة تُنشأ على مكدس الاستدعاءات لاستدعاء دالة واحد. تحمل معاملات ذلك الاستدعاء ومتغيراته المحلية ومكان العودة.

## أين تسمعه؟

في المصححات وتقارير التتبّع (كل سطر إطار)، ونقاشات الاستدعاء الذاتي، وشروح كيفية عمل الدوال.

## أمثلة

- Each recursive call adds a new stack frame.
  - كل استدعاء ذاتي يضيف إطار مكدس جديداً.
- In the debugger, select the frame to see its local variables.
  - في المصحح اختر الإطار لترى متغيراته المحلية.

## خطأ شائع

الظن بأن المتغيرات المحلية مشتركة بين الاستدعاءات. لكل استدعاء إطاره ونسخه الخاصة.

## لا تخلطه مع

مكدس الاستدعاءات وهو كومة الإطارات كلها. أما إطار المكدس فمدخل واحد فيها.

## قلها في العمل

- Which frame is this variable in?
  - في أي إطار هذا المتغير؟
- Walk up one frame to see the caller.
  - اصعد إطاراً واحداً لترى المستدعي.

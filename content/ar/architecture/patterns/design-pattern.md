---
id: design-pattern
category: architecture
subcategory: patterns
level: intermediate
related: [separation-of-concerns, dependency-injection, registry-pattern]
term: "Design Pattern"
translation: "نمط تصميم"
pronunciation: "ديزاين باترن"
keywords: ["حلول برمجية جاهزة ومجرربة","أنماط البرمجة كائنية التوجه","حل لمشكلة تصميم متكررة","قالب تصميم الكود المصدري","الأنماط البرمجية الشهيرة","نمط تصميم","ديزاين باترن","أنماط التصميم الهندسية","proven solution to common problem","singleton factory observer patterns","reusable code structure solution","common programming best practices","software engineering design templates","how to structure classes","object oriented design solutions","design pattern","디자인 패턴"]
---
## التعريف

حل مجرَّب وقابل لإعادة الاستخدام لمشكلة تصميم شائعة، وله اسم يعرفه الجميع، مثل Singleton وFactory وObserver.

## أين تسمعه؟

المقابلات ومراجعات الشيفرة ونقاشات المعمارية.

## أمثلة

- This is the Observer pattern: subscribers get notified on every change.
  - هذا نمط Observer: يُبلَّغ المشتركون عند كل تغيير.
- Do not force a pattern where a simple function is enough.
  - لا تفرض نمطًا حيث تكفي دالة بسيطة.
- The shop uses a factory pattern to create the right payment handler for each country.
  - يستخدم المتجر نمط المصنع (factory) لإنشاء معالج الدفع المناسب لكل دولة.

## خطأ شائع

استخدام الأنماط لمجرد الظهور بمظهر متقدم. استخدم النمط فقط عندما يحل مشكلة حقيقية.

## لا تخلطه مع

غالباً ما يتم الخلط بين أنماط التصميم والأنماط المعمارية؛ فبينما يحل نمط التصميم مشكلة محددة داخل وحدة أو فئة برمجية واحدة، يوفر النمط المعماري استراتيجية عالية المستوى لهيكلية التطبيق بالكامل.

## قلها في العمل

- I think we should use the Strategy design pattern here to make our validation logic more flexible.
  - أعتقد أنه يجب علينا استخدام نمط التصميم Strategy هنا لجعل منطق التحقق لدينا أكثر مرونة.
- Please review the pull request, as I have refactored the module to implement the Factory design pattern.
  - يرجى مراجعة طلب السحب، حيث قمت بإعادة هيكلة الوحدة لتطبيق نمط التصميم Factory.

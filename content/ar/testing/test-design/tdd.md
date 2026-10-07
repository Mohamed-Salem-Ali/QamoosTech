---
id: tdd
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, refactoring, ci-cd]
term: "TDD (Test-Driven Development)"
translation: "التطوير الموجه بالاختبارات"
pronunciation: "تي-دي-دي"
keywords: ["كتابة الاختبار قبل الكود","دورة الفشل والنجاح البرمجية","التطوير المعتمد على الاختبار","منهجية تي دي دي","كتابة اختبارات تفشل أولا","تصميم البرمجيات عبر الاختبار","طريقة التطوير بالاختبارات","دورة إعادة هيكلة الكود","مفهوم التطوير الموجه بالاختبار","تطوير البرمجيات بالاختبارات أولا","write tests before code","red green refactor cycle","test first development","test driven approach","tdd methodology","automated unit testing process","developing software with tests","writing failing tests first","test based design technique","tdd cycle explained","test driven workflow"]
---

## التعريف

عملية تطوير برمجيات تكتب فيها اختباراً برمجياً يفشل أولاً قبل كتابة كود التنفيذ الفعلي، وذلك عبر دورة تتضمن: الفشل، ثم النجاح، ثم إعادة الهيكلة.

## أين تسمعه؟

في جلسات التخطيط للفريق، وجلسات البرمجة المشتركة، واجتماعات التقييم الرشيقة (Scrum).

## أمثلة

- We practice TDD to ensure every new feature has automated test coverage from day one.
  - نحن نطبق التطوير الموجه بالاختبارات لنضمن أن كل ميزة جديدة تمتلك تغطية اختبارات أوتوماتيكية من اليوم الأول.
- Writing the test first in TDD helps clarify the requirements before we touch the implementation code.
  - كتابة الاختبار أولاً في التطوير الموجه بالاختبارات تساعد على توضيح المتطلبات قبل أن نلمس كود التنفيذ.

## خطأ شائع

الاعتقاد بأن منهجية TDD هي تقنية اختبار بحتة، بينما هي في الأساس تقنية لتصميم البرمجيات.

## لا تخلطه مع

غالباً ما يتم الخلط بين TDD و BDD؛ فبينما يركز TDD على اختبار وحدات الكود من منظور المطور، يركز BDD على اختبار سلوك النظام من منظور المستخدم باستخدام لغة طبيعية.

## قلها في العمل

- Let's try to use TDD for this new module so we don't end up with a bunch of untested spaghetti code.
  - دعونا نحاول استخدام TDD لهذا الموديول الجديد حتى لا ينتهي بنا المطاف بكود متشابك وغير مختبر.
- I have updated the pull request to include the failing tests, adhering to the TDD approach we agreed upon.
  - لقد قمت بتحديث طلب السحب ليشمل الاختبارات التي تفشل، التزاماً بمنهجية TDD التي اتفقنا عليها.

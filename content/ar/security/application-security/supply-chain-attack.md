---
id: supply-chain-attack
category: security
subcategory: application-security
level: intermediate
related: [vulnerability, package-dependency, lock-file]
aliases: ["typosquatting", "dependency confusion", "malicious package", "sca"]
term: "Supply Chain Attack"
translation: "هجوم سلسلة التوريد"
pronunciation: "سبلاي تشين أتاك"
keywords: ["هجوم عبر اعتمادية", "حزمة خبيثة", "تقليد أسماء الحزم", "بناء مخترق", "مكتبة موثوقة مسمومة", "هجمات npm وPyPI", "attack through a dependency", "malicious package", "typosquatting", "compromised build", "trusted library poisoned", "npm pypi attack"]
---

## التعريف

هجوم سلسلة التوريد (Supply Chain Attack) يخترق شيئاً تعتمد عليه، كمكتبة أو أداة بناء أو خادم تحديثات، فيصلك كود المهاجم عبر برمجيات تثق بها.

## أين تسمعه؟

في أخبار الأمان (event-stream وSolarWinds)، وتدقيقات الاعتماديات (`npm audit` وDependabot)، وتقوية CI/CD.

## أمثلة

- A look-alike package name pulled malware into the build.
  - اسم حزمة مشابه سحب برمجية خبيثة إلى البناء.
- Pin versions and verify hashes to reduce supply chain risk.
  - ثبّت الإصدارات وتحقق من الهاشات لتقليل خطر سلسلة التوريد.
- After the attack on the popular package, every build that installed it was at risk.
  - بعد الهجوم على الحزمة الشائعة، صار كل بناء ثبّتها معرّضاً للخطر.

## خطأ شائع

الوثوق بحزمة لأنها شائعة أو لأن اسمها "يبدو صحيحاً". افحص الاسم بالضبط والمشرفين وتغييرات الإصدار.

## لا تخلطه مع

هجوم مباشر على خادمك أو كودك. هنا يمر المهاجم عبر مورّد.

## قلها في العمل

- Run a dependency audit in CI.
  - شغّل تدقيق الاعتماديات في CI.
- Use a lock file and review updates.
  - استخدم ملف قفل وراجع التحديثات.

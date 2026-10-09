---
id: git-hook
category: git
level: intermediate
related: [linting, ci-cd, git-ignore]
term: "Git Hook"
translation: "خطّاف Git"
pronunciation: "غيت هوك"
keywords: ["سكربت يعمل قبل الالتزام", "فحص قبل الدفع", "مجلد الخطافات في Git", "منع الالتزام عند فشل الاختبارات", "script that runs before commit", "run lint before commit", "git pre-push check", "hooks folder in git", "block a commit if tests fail"]
---

## التعريف

سكربت يشغّله Git تلقائياً عند نقطة معينة من سير العمل، مثل قبل الالتزام أو بعد الدفع، ليفحص العمل أو يجهّزه.

## أين تسمعه؟

في المشاريع التي تشغّل أدوات الفحص أو الاختبارات قبل حفظ الشيفرة، وفي أدلة إعداد الفريق.

## أمثلة

- The git hook stops the commit if the linter fails.
  - يوقف الخطاف الالتزام إذا فشلت أداة الفحص.
- Hooks live in the .git/hooks folder and are not shared by default.
  - توجد الخطافات في المجلد .git/hooks ولا تُشارك افتراضياً.
- The pre-commit hook runs the formatter, so unformatted code never reaches the repository.
  - يشغّل خطاف ما قبل الإيداع المنسّق، فلا يصل كود غير منسّق إلى المستودع أبداً.

## خطأ شائع

الاعتماد على خطاف محلي كفحص وحيد. يستطيع أي شخص تجاوزه بالخيار --no-verify، لذا شغّل الفحوص نفسها في CI.

## لا تخلطه مع

خطاف Git يعمل على جهاز المطور وحده، أما فحص CI فيعمل على الخادم مع كل تغيير.

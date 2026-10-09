---
id: git-submodule
category: git
level: intermediate
related: [repository, commit]
term: "Git Submodule"
translation: "مستودع فرعي"
pronunciation: "جيت سب مودول"
keywords: ["تضمين مستودع داخل مستودع","مستودع جيت فرعي","ربط مشاريع جيت ببعضها","إدارة المستودعات المتداخلة","استخدام مستودع داخل مستودع آخر","تحديث مؤشر المستودع الفرعي","الفرق بين سب مودول وسب تري","جيت سب مودول","استنساخ مستودع مع الملحقات","مستودع خارجي داخل مشروع","include repo inside another","git nested repository","manage shared code dependencies","git submodule vs subtree","link external repository pointer","git submodule recursive clone","git sub module","tracking external git project","git submodule update pointer","embedded git repository"]
---
## التعريف

مستودع Git مخزّن داخل مستودع آخر ومثبّت عند إيداع محدد. يتيح للمشروع تضمين شيفرة مشروع آخر، ويسجّل المستودع الأب النسخة التي يستخدمها.

## أين تسمعه؟

المشاريع التي تشارك شيفرة مشتركة بين المستودعات.

## أمثلة

- Clone with `--recurse-submodules` to get the nested repo.
  - استنسخ باستخدام `--recurse-submodules` للحصول على المستودع المتداخل.
- The submodule points to an old commit.
  - الـ submodule يشير إلى commit قديم.
- The shared theme lives in a submodule, so each site pins the version it uses.
  - يعيش القالب المشترك في وحدة فرعية (submodule)، فيثبّت كل موقع النسخة التي يستخدمها.

## خطأ شائع

تحديث المستودع الفرعي ونسيان حفظ المؤشر الجديد في المستودع الأب.

## لا تخلطه مع

الفرق بين Git Submodule و Git Subtree هو أن الـ submodule يبقي المستودعات كيانات منفصلة مرتبطة بمؤشر، بينما يقوم الـ subtree بدمج محتويات المستودع الفرعي مباشرة داخل تاريخ المستودع الأب.

## قلها في العمل

- I'm having trouble pulling the latest changes; did you remember to update the Git submodule pointer?
  - أواجه مشكلة في سحب آخر التغييرات؛ هل تذكرت تحديث مؤشر الـ Git submodule؟
- Please ensure the Git submodule is initialized correctly in the CI pipeline to avoid build failures.
  - يرجى التأكد من تهيئة الـ Git submodule بشكل صحيح في مسار الـ CI لتجنب فشل عملية البناء.

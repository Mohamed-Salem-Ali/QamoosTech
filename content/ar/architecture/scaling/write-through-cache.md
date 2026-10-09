---
id: write-through-cache
category: architecture
subcategory: scaling
level: intermediate
related: [cache-aside, cache, eventual-consistency]
aliases: ["write-back cache", "write behind", "write-through"]
term: "Write-Through Cache"
translation: "الذاكرة المؤقتة المتزامنة الكتابة"
pronunciation: "رايت ثرو كاش"
keywords: ["الكتابة إلى الذاكرة وقاعدة البيانات", "الذاكرة المؤقتة محدثة دائماً", "الذاكرة المؤقتة المؤجلة الكتابة", "الكتابة المتأخرة", "كتابة أبطأ", "تبقي الذاكرة حديثة", "write to cache and database", "cache always up to date", "write-back cache", "write behind", "slower writes", "keeps cache fresh"]
---

## التعريف

في الذاكرة المؤقتة المتزامنة الكتابة (Write-Through) تذهب كل كتابة إلى الذاكرة المؤقتة وقاعدة البيانات معاً، فلا تكون قراءات الذاكرة قديمة. أما ذاكرة write-back فتكتب أولاً في الذاكرة وتحفظ في قاعدة البيانات لاحقاً.

## أين تسمعه؟

في نقاشات استراتيجيات التخزين المؤقت، ووحدات تحكم التخزين، وإعدادات الـ ORM أو CDN.

## أمثلة

- Write-through keeps reads fast and correct, but each write is slower.
  - الكتابة المتزامنة تُبقي القراءات سريعة وصحيحة لكن كل كتابة أبطأ.
- Write-back risks losing data if the cache dies before it flushes.
  - تخاطر write-back بفقد البيانات إذا مات الكاش قبل التفريغ.
- The write-through cache updates the database and the cache in the same request.
  - يُحدّث الكاش ذو الكتابة المباشرة قاعدة البيانات والكاش في الطلب نفسه.

## خطأ شائع

اختيار write-back لبيانات مهمة. إذا فشلت الذاكرة قبل الحفظ ضاعت البيانات.

## لا تخلطه مع

الـ cache-aside حيث يملأ التطبيق الذاكرة عند القراءة بدل كل كتابة.

## قلها في العمل

- We use write-through for the settings table.
  - نستخدم الكتابة المتزامنة لجدول الإعدادات.
- What happens on a crash with write-back?
  - ماذا يحدث عند انهيار مع write-back؟

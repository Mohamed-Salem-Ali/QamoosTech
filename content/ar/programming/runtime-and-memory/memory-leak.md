---
id: memory-leak
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [garbage-collection, virtual-memory, reference]
aliases: ["memory leaks", "leak"]
term: "Memory Leak"
translation: "تسرب الذاكرة"
pronunciation: "ميموري ليك"
keywords: ["الذاكرة تكبر ولا تصغر", "مراجع منسية", "إعادة التشغيل تحلها", "انهيار نفاد الذاكرة", "ذاكرة مؤقتة بلا حد", "الكومة تواصل النمو", "memory grows and never shrinks", "forgotten references", "restart fixes it", "out of memory crash", "cache without a limit", "heap keeps growing"]
---

## التعريف

تسرب الذاكرة (Memory Leak) خلل يحتفظ فيه البرنامج بذاكرة لم يعد يحتاجها، فيزداد استخدامه للذاكرة مع الوقت حتى يبطؤ أو ينهار.

## أين تسمعه؟

في مراقبة الإنتاج (الذاكرة ترتفع لساعات)، وقتل OOM في الحاويات، وتحقيقات الأداء.

## أمثلة

- Memory climbs 50 MB an hour, so we have a leak.
  - ترتفع الذاكرة 50 ميجابايت في الساعة، إذن لدينا تسرب.
- An unbounded in-memory cache is a classic leak.
  - ذاكرة مؤقتة بلا حد هي تسرب كلاسيكي.
- The listener was never removed, so every page visit kept one more object in memory.
  - لم يُزَل المستمع أبداً، فبقي كل زيارة للصفحة تحتفظ بكائن إضافي في الذاكرة.

## خطأ شائع

الظن بأن اللغات ذات جامع القمامة لا تتسرب. الكائنات التي ما زالت مُشار إليها (في قائمة عامة أو ذاكرة مؤقتة) لا تُجمع أبداً.

## لا تخلطه مع

استخدام ذاكرة مرتفع لكنه ثابت. أما التسرب فذاكرة تنمو بلا حد.

## قلها في العمل

- Take a heap snapshot to find what's growing.
  - التقط لقطة للكومة لمعرفة ما ينمو.
- Restarting hides the leak; we still need to fix it.
  - إعادة التشغيل تخفي التسرب؛ ويجب أن نصلحه.

---
id: livelock
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [deadlock, starvation]
term: "Livelock"
translation: "القفل الحي"
pronunciation: "لايف لوك"
keywords: ["البرنامج يعمل ولا يصل إلى نتيجة", "عمليتان تتراجعان لبعضهما باستمرار", "تفاعل متبادل دون تقدم", "خيوط تتنازل لبعضها إلى ما لا نهاية", "threads keep reacting but make no progress", "two processes keep backing off from each other", "the program runs but never finishes", "polite retry loop with no progress", "tasks yield to each other forever"]
---

## التعريف

القفل الحي (Livelock) يحدث حين تتفاعل خيوط أو عمليات مع بعضها باستمرار وتغيّر حالتها، لكن لا يتقدم أيٌّ منها. وعلى عكس الجمود المتبادل (Deadlock)، لا شيء محجوز؛ هي فقط تتنازل لبعضها بلا نهاية.

## أين تسمعه؟

في أخطاء التزامن، حين يعمل البرنامج دون أن يحدث شيء، وفي تصميم إعادة المحاولة حين تتراجع العملاء كلها في الوقت نفسه.

## أمثلة

- Two processes keep backing off and retrying, so neither ever takes the lock.
  - تتراجع عمليتان وتعيدان المحاولة باستمرار، فلا تأخذ أيٌّ منهما القفل أبداً.
- The CPU is at 100 percent, yet no request finishes. That looks like a livelock.
  - المعالج عند 100 في المئة، ومع ذلك لا ينتهي أي طلب. يبدو هذا قفلاً حياً.
- Random jitter in the retry delay helps break a livelock.
  - يساعد التأخير العشوائي في إعادة المحاولة على كسر القفل الحي.

## خطأ شائع

تسمية كل برنامج عالق جموداً متبادلاً. إذا كانت الخيوط تعمل وتتفاعل، فهذا قفل حي، والحل مختلف: أضف عشوائية أو قاعدة واضحة لكسر التعادل.

## لا تخلطه مع

الجمود المتبادل (Deadlock) توقف تام: خيوط تنتظر بعضها ولا تتحرك أيٌّ منها. القفل الحي حركة بلا تقدم: الخيوط تتحرك باستمرار دون أن تنتهي. والتجويع (Starvation) يعني أن خيطاً لا يحصل على دوره أبداً بينما يأخذ الآخرون أدوارهم.

## قلها في العمل

- It is not a deadlock, because the threads keep retrying each other.
  - ليس جموداً متبادلاً، فالخيوط تعيد المحاولة مع بعضها باستمرار.
- Can we add a random backoff so they stop colliding?
  - هل نضيف تراجعاً عشوائياً حتى يكفّا عن التصادم؟

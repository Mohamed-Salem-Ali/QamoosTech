# Developer Slang & Technical Jargon

Informal terms you'll hear in engineering teams, Slack channels, and tech Twitter. Understanding these makes you fluent in engineering culture, not just engineering code.

---

### "Yak shaving"
- **Pronunciation**: /jæk ˈʃeɪvɪŋ/
- **Arabic**: حلاقة الياك (تسلسل مهام تبتعد عن الهدف الأصلي)
- **Meaning**: A series of tasks that each seem necessary but take you further and further from the original goal. You wanted to fix a bug, but first you need to update a dependency, which requires upgrading Node, which breaks the build tool, which...
- **Usage Examples**:
  - *Formal*: "I spent the morning yak shaving — I tried to add a simple test but ended up upgrading the entire test framework."
  - *Casual*: "This is classic yak shaving. I just wanted to change a button color."
- **Common Mistake**: Confusing yak shaving with legitimate dependency work. Sometimes you *do* need to upgrade Node to fix the bug. The key question is: "Am I still solving the original problem, or have I lost the plot?"

---

### "Bikeshedding"
- **Pronunciation**: /ˈbaɪkˌʃɛdɪŋ/
- **Arabic**: الجدال حول تفاصيل تافهة
- **Meaning**: Spending disproportionate time debating trivial details (like the color of a button) while ignoring important decisions (like the database architecture). Named after Parkinson's "law of triviality."
- **Usage Examples**:
  - *Formal*: "Let's avoid bikeshedding on the error message wording and focus on whether the error handling strategy is correct."
  - *Casual*: "We've been bikeshedding this variable name for 20 minutes. Just pick one."
- **Common Mistake**: Calling every discussion "bikeshedding" to shut it down. Naming conventions *do* matter. The term applies when the time spent is wildly disproportionate to the importance of the decision.

---

### "Ship it"
- **Pronunciation**: /ʃɪp ɪt/
- **Arabic**: انشره! / أطلقه!
- **Meaning**: Deploy the code, release the feature, make it live. Used as encouragement to stop polishing and get it in front of users.
- **Usage Examples**:
  - *Formal*: "The feature is tested, reviewed, and behind a feature flag. Let's ship it and iterate based on real user feedback."
  - *Casual*: "LGTM — ship it! 🚀"
- **Common Mistake**: Using "ship it" to justify skipping tests or code review. The phrase implies the work is *done* and *ready* — not that you should cut corners to go faster.

---

### "Tech debt"
- **Pronunciation**: /tɛk dɛt/
- **Arabic**: الدين التقني
- **Meaning**: The accumulated cost of shortcuts, workarounds, and deferred improvements in a codebase. Like financial debt, it accrues "interest" — the longer you wait to address it, the more expensive it becomes.
- **Usage Examples**:
  - *Formal*: "We allocated 20% of each sprint to paying down tech debt, focusing on the modules with the highest bug frequency."
  - *Casual*: "This entire service is held together with tech debt and prayers."
- **Common Mistake**: Treating all tech debt as bad. *Strategic* tech debt (taking a deliberate shortcut to hit a deadline, with a plan to fix it) is a valid engineering decision. *Accidental* tech debt (shortcuts taken without awareness) is the dangerous kind.

---

### "LGTM"
- **Pronunciation**: /ˌɛl dʒiː tiː ˈɛm/ (Looks Good To Me)
- **Arabic**: يبدو جيداً لي
- **Meaning**: A code review approval. The reviewer has read the changes and is satisfied that the code is correct, well-structured, and ready to merge.
- **Usage Examples**:
  - *Formal*: "I've reviewed the changes and tested the edge cases — LGTM, approved."
  - *Casual*: "LGTM 👍"
- **Common Mistake**: Giving an "LGTM" without actually reading the code. Rubber-stamping reviews defeats the entire purpose. If you don't have time to review properly, say so — don't approve blindly.

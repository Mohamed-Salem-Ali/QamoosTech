# Patterns

---

### Spaced Repetition (SM-2 Algorithm)
- **Pronunciation**: "SPAYSD rep-uh-TI-shun" · سبيسد ريبيتيشن
- **Arabic**: التكرار المتباعد
- **Definition**: A learning technique based on reviewing material at increasing intervals. The SM-2 algorithm tracks three values per item: ease factor (how easy you find it), interval (days until next review), and repetitions (consecutive correct recalls). Items you struggle with are shown more frequently.
- **Context**: EdTech products, flashcard systems, quiz platforms.
- **Usage Examples**:
  - *Formal*: "I implemented a real SM-2 spaced-repetition engine that computes ease factor, interval, and repetitions from attempts — the server controls the schedule, not the client."
  - *Casual*: "The flashcard system uses spaced repetition — it'll show you the ones you keep getting wrong more often."
- **Common Mistake**: Implementing spaced repetition on the client side. If a user switches devices, their progress is lost. Store the SM-2 state (ease factor, interval, next review date) server-side and sync it.
- **Related Terms**: Flashcards, Cognitive Science, Anki, Leitner System

---


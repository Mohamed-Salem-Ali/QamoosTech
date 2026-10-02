# Python

---

### Pythonic
- **Pronunciation**: "pie-THON-ik" · بايثونيك
- **Arabic**: بأسلوب بايثوني
- **Definition**: Code that follows Python's design philosophy — clean, readable, and using the language's built-in features idiomatically. A Pythonic solution uses list comprehensions, context managers, generators, and duck typing rather than porting patterns from other languages.
- **Context**: Code reviews, pair programming, Python style discussions.
- **Usage Examples**:
  - *Formal*: "We refactored the data-processing module to be more Pythonic, replacing explicit loops with list comprehensions and generator expressions."
  - *Casual*: "That nested for-loop with an if-check? There's a much more Pythonic way to write it."
- **Common Mistake**: Overusing comprehensions to the point of unreadability. A one-liner list comprehension with three nested conditions is not "Pythonic" — it's clever but unreadable. If it doesn't fit on one line clearly, use a regular loop.
- **Related Terms**: PEP 8, Duck Typing, List Comprehension, Generator

---

### Decorator
- **Pronunciation**: "DEK-oh-ray-ter" · ديكوريتر
- **Arabic**: مُزخرف (دالة تُغلِّف دالة أخرى)
- **Definition**: A function that wraps another function to extend its behavior without modifying its code. In Python, applied with the `@` syntax. In Django, used extensively for permissions, caching, and request handling.
- **Context**: Python/Django backend code, middleware design, DRY patterns.
- **Usage Examples**:
  - *Formal*: "We use custom decorators to enforce role-based permissions on Django views — `@require_role('admin')` checks the JWT claims before the view executes."
  - *Casual*: "Just slap a `@login_required` on that view — Django handles the redirect automatically."
- **Common Mistake**: Forgetting `@functools.wraps(fn)` inside your custom decorator. Without it, the wrapped function loses its original name and docstring, which breaks debugging and documentation tools.
- **Related Terms**: Higher-order Function, Middleware, `@property`, `@staticmethod`

---


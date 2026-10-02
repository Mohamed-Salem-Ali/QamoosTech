# Typescript

---

### Type Narrowing
- **Pronunciation**: "type NAR-oh-ing" · تايب ناروينج
- **Arabic**: تضييق النوع
- **Definition**: The process by which TypeScript automatically refines a variable's type based on control-flow checks (like `if`, `typeof`, `instanceof`, or custom type guards). This lets you safely access type-specific properties without explicit casting.
- **Context**: TypeScript development, code reviews, type safety discussions.
- **Usage Examples**:
  - *Formal*: "We use discriminated unions with type narrowing to handle API responses — the `status` field determines whether the response body contains `data` or `error`."
  - *Casual*: "Add a type guard here — TypeScript doesn't know it's a string at this point."
- **Common Mistake**: Using `as` type assertions instead of proper type guards. `as` tells the compiler "trust me" but provides no runtime safety. A type guard (`if ('field' in obj)`) gives you both compile-time and runtime safety.
- **Related Terms**: Type Guard, Discriminated Union, `typeof`, `instanceof`, Type Assertion

---


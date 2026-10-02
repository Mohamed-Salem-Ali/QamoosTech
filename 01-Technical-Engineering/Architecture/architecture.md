# System Architecture & Design

---

### Multi-tenant SaaS
- **Pronunciation**: "MUL-tee TEN-unt saz" · مَلتي تِنانت ساز
- **Arabic**: البرمجيات كخدمة متعددة المستأجرين
- **Definition**: A software architecture where a single application instance serves multiple customers (tenants), keeping each tenant's data strictly isolated. Tenants share the same infrastructure but see only their own data.
- **Context**: System design interviews, SaaS product architecture, database schema discussions.
- **Usage Examples**:
  - *Formal*: "We enforce tenant isolation via PostgreSQL row-level security across 45 tables in our multi-tenant SaaS."
  - *Casual*: "Is this feature tenant-scoped, or does every org get it?"
- **Common Mistake**: Confusing multi-tenancy strategies. "Shared database, shared schema" (with RLS) is different from "one database per tenant." The first is cheaper to operate; the second gives stronger isolation. Know which you're using and why.
- **Related Terms**: Tenant Isolation, Row-Level Security (RLS), Single-tenant, Horizontal Scaling

---

### RBAC (Role-Based Access Control)
- **Pronunciation**: "AR-back" or spelled out "ar-bee-ay-see" · آر باك
- **Arabic**: التحكم في الوصول بناءً على الأدوار
- **Definition**: A security model where permissions are assigned to roles (e.g., Admin, Doctor, Receptionist), and users are assigned roles. API endpoints check the user's role before allowing the request to proceed.
- **Context**: Authorization design, API middleware, security audits.
- **Usage Examples**:
  - *Formal*: "I designed 132 permission-guarded endpoints using RBAC with subscription-tier and role-based guards enforced across every API layer."
  - *Casual*: "The receptionist role shouldn't have access to billing — let's fix the RBAC config."
- **Common Mistake**: Hardcoding role checks (`if user.role === 'admin'`) throughout the codebase instead of using middleware or decorators. This makes role changes a nightmare. Centralize authorization logic.
- **Related Terms**: Authentication vs Authorization, ACL, Middleware, Guards

---

### RAG (Retrieval-Augmented Generation)
- **Pronunciation**: "RAG" (rhymes with "bag") · راج
- **Arabic**: التوليد المعزز بالاسترجاع
- **Definition**: An AI architecture that improves LLM responses by first retrieving relevant documents from a knowledge base, then passing them as context to the model. This grounds the LLM's answers in real data instead of relying solely on training data.
- **Context**: AI feature design, chatbot architecture, knowledge base systems.
- **Usage Examples**:
  - *Formal*: "We built an AI assistant pairing a RAG knowledge base with a confirm-before-write action agent, with per-user rate limiting and output-token caps."
  - *Casual*: "The chatbot is hallucinating — we need RAG to keep it grounded in our actual docs."
- **Common Mistake**: Assuming RAG eliminates hallucinations entirely. It reduces them significantly, but the LLM can still hallucinate or misinterpret retrieved context. Always validate critical outputs.
- **Related Terms**: Vector Database, Embeddings, LLM, Semantic Search, Chunking

---

### Fail Open vs Fail Closed
- **Pronunciation**: "fayl OH-pen" vs "fayl KLOZD" · فيل أوبن / فيل كلوزد
- **Arabic**: فشل مفتوح مقابل فشل مغلق
- **Definition**: A system design decision about what happens when a dependency fails. *Fail open* means the system continues operating (possibly without the failed feature). *Fail closed* means the system blocks or halts entirely until the dependency recovers.
- **Context**: Resilience engineering, rate limiting, security systems, circuit breakers.
- **Usage Examples**:
  - *Formal*: "The Redis-backed usage limiter fails open — if Redis is unavailable, users can still access the app without rate limits rather than being blocked entirely."
  - *Casual*: "Should the paywall fail open or closed? Open means free access during outages; closed means nobody gets in."
- **Common Mistake**: Always defaulting to fail-open. For security-critical systems (authentication, payment), you usually want fail-closed. For non-critical features (analytics, usage counters), fail-open preserves user experience.
- **Related Terms**: Graceful Degradation, Circuit Breaker, Availability, Fault Tolerance

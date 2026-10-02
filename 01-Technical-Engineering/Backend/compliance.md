# Compliance

---

### GDPR-Compliant Deletion
- **Pronunciation**: "jee-dee-pee-AR" · جي دي بي آر
- **Arabic**: متوافق مع اللائحة العامة لحماية البيانات
- **Definition**: Designing data deletion flows that comply with the GDPR's "right to be forgotten" — when a user requests deletion, all their personal data must be permanently removed from all systems, backups, and third-party integrations.
- **Context**: User account management, privacy engineering, compliance audits.
- **Usage Examples**:
  - *Formal*: "I implemented a two-step GDPR-compliant deletion flow: soft-delete with a 30-day grace period, then hard-delete across all storage and audit logs."
  - *Casual*: "The user wants their account deleted — make sure the GDPR flow catches everything, including the analytics pipeline."
- **Common Mistake**: Only deleting from the primary database and forgetting about backups, caches, search indexes, analytics platforms, and third-party services. True GDPR compliance requires a deletion cascade across every system that holds the user's data.
- **Related Terms**: Right to Be Forgotten, PII, Data Retention Policy, Soft Delete

---

### Audit Logging
- **Pronunciation**: "AW-dit LOG-ing" · أوديت لوجينج
- **Arabic**: سجل التدقيق
- **Definition**: Recording a chronological trail of system activities — who did what, when, and from where. Used for security investigations, compliance requirements, and debugging production issues.
- **Context**: Security-sensitive applications, healthcare, fintech, any regulated industry.
- **Usage Examples**:
  - *Formal*: "We added async audit-logging middleware across all endpoints, capturing the user, action, timestamp, and IP address in an append-only table."
  - *Casual*: "Check the audit log — we need to see who modified that patient record."
- **Common Mistake**: Making audit logs editable or deletable. Audit logs must be append-only (immutable) to be trustworthy. If someone can tamper with the logs, they're useless for investigations.
- **Related Terms**: Immutable Log, Compliance, Middleware, Traceability


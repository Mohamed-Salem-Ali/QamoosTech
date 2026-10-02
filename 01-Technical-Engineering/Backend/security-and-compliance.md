# Security & Compliance

---

### Field-Level Encryption
- **Pronunciation**: /fiːld ˌlɛvəl ɪnˈkrɪpʃən/
- **Arabic**: التشفير على مستوى الحقل
- **Definition**: Encrypting individual data fields within a database record rather than encrypting the entire database or disk. This means even if someone has database access, they can't read specific sensitive columns without the decryption key.
- **Context**: Healthcare data (HIPAA), financial data (PCI-DSS), any system storing PII.
- **Usage Examples**:
  - *Formal*: "We protect patient PII with field-level encryption and hashed lookups, ensuring that national IDs and phone numbers are never stored in plaintext."
  - *Casual*: "The phone column is encrypted at the field level — you'll need the key to query it."
- **Common Mistake**: Encrypting fields and then logging them in plaintext elsewhere (error logs, API responses, debug output). The encryption is pointless if the decrypted value leaks through a side channel.
- **Related Terms**: Encryption at Rest, PII, Hashing, AES, Key Management

---

### GDPR-Compliant Deletion
- **Pronunciation**: /ˌdʒiː diː piː ˈɑːr/
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
- **Pronunciation**: /ˈɔːdɪt ˈlɒɡɪŋ/
- **Arabic**: سجل التدقيق
- **Definition**: Recording a chronological trail of system activities — who did what, when, and from where. Used for security investigations, compliance requirements, and debugging production issues.
- **Context**: Security-sensitive applications, healthcare, fintech, any regulated industry.
- **Usage Examples**:
  - *Formal*: "We added async audit-logging middleware across all endpoints, capturing the user, action, timestamp, and IP address in an append-only table."
  - *Casual*: "Check the audit log — we need to see who modified that patient record."
- **Common Mistake**: Making audit logs editable or deletable. Audit logs must be append-only (immutable) to be trustworthy. If someone can tamper with the logs, they're useless for investigations.
- **Related Terms**: Immutable Log, Compliance, Middleware, Traceability

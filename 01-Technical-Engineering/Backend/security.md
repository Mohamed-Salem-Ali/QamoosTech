# Security

---

### Field-Level Encryption
- **Pronunciation**: "feeld LEV-ul en-KRIP-shun" · فيلد ليفل إنكريبشن
- **Arabic**: التشفير على مستوى الحقل
- **Definition**: Encrypting individual data fields within a database record rather than encrypting the entire database or disk. This means even if someone has database access, they can't read specific sensitive columns without the decryption key.
- **Context**: Healthcare data (HIPAA), financial data (PCI-DSS), any system storing PII.
- **Usage Examples**:
  - *Formal*: "We protect patient PII with field-level encryption and hashed lookups, ensuring that national IDs and phone numbers are never stored in plaintext."
  - *Casual*: "The phone column is encrypted at the field level — you'll need the key to query it."
- **Common Mistake**: Encrypting fields and then logging them in plaintext elsewhere (error logs, API responses, debug output). The encryption is pointless if the decrypted value leaks through a side channel.
- **Related Terms**: Encryption at Rest, PII, Hashing, AES, Key Management

---


---
id: encryption
category: security
subcategory: data-protection
level: intermediate
related: [hashing, field-level-encryption]
term: "Encryption"
pronunciation: "en-KRIP-shun"
keywords: ["make data unreadable","scramble sensitive information","secure data with keys","protect files from unauthorized access","data at rest security","encrypting user information","how to hide data","reversible data protection","encoding data for privacy","encryption vs hashing","data obfuscation techniques","protecting database fields","تحويل البيانات لرموز غير مفهومة","حماية البيانات من الاختراق","تأمين المعلومات الحساسة","طريقة قفل البيانات بمفتاح","تشفير قاعدة البيانات","إخفاء محتوى الملفات","الفرق بين التشفير والهاش","حماية البيانات اثناء النقل","إنكريبشن","تأمين البيانات المخزنة","جعل البيانات غير قابلة للقراءة","تشفير البيانات الحساسة"]
---
## Definition

Turning readable data into unreadable data using a key, so only someone with the right key can read it again.

## Where you hear it

HTTPS, databases, and compliance.

## Examples

- Data is encrypted in transit with HTTPS and at rest in the database.
- Without the key, the encrypted file is useless.

## Common mistake

Storing the key next to the encrypted data. Keep keys in a separate, protected place.

## Don't confuse with

Encryption is often confused with hashing; encryption is a two-way function designed to be reversible with a key, whereas hashing is a one-way function meant to be irreversible.

## Say it at work

- We need to make sure all sensitive user data is handled with encryption before it hits the database.
- Please ensure that the configuration files are stored using encryption to comply with our security standards.

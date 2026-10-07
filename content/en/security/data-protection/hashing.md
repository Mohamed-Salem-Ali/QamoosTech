---
id: hashing
category: security
subcategory: data-protection
level: intermediate
related: [encryption, authentication-vs-authorization]
term: "Hashing"
pronunciation: "HASH-ing"
keywords: ["turn data into fixed length fingerprint","store passwords safely without plaintext","one way cryptographic function","difference between hash and encryption","check data integrity safely","generate password hash with bcrypt","convert text to irreversible string","hash function for security","تحويل البيانات إلى بصمة ثابتة","تخزين كلمات المرور بشكل آمن","دالة تشفير لا يمكن عكسها","الفرق بين التشفير والتجزئة","خوارزمية الهاش لكلمات المرور","التحقق من سلامة البيانات بالهاش","عمل تشفير باتجاه واحد","حفظ كلمة المرور كهاش"]
---
## Definition

Turning data into a fixed-length fingerprint that cannot be reversed. It is used to store passwords safely.

## Where you hear it

Password storage and data integrity checks.

## Examples

- We store a hash of the password, never the password itself.
- Use bcrypt or Argon2 for passwords.

## Common mistake

Mixing up hashing and encryption. You can decrypt encrypted data, but you cannot "un-hash" a hash.

## Don't confuse with

Hashing is often confused with encryption; the key difference is that encryption is a two-way function designed to be reversible with a key, whereas hashing is a one-way process meant to be irreversible.

## Say it at work

- Make sure we are hashing the user's password before saving it to the database.
- I have updated the authentication module to use a stronger hashing algorithm for better security.

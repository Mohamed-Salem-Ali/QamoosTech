---
id: entropy
category: security
subcategory: data-protection
level: intermediate
related: [secret-management, salt, block-cipher]
aliases: ["randomness", "secure random", "csprng"]
term: "Entropy"
pronunciation: "EN-truh-pee"
keywords: ["amount of randomness", "unpredictable bits", "strong keys need good randomness", "password strength", "secure random source", "dev urandom", "مقدار العشوائية", "بتات لا يمكن توقعها", "المفاتيح القوية تحتاج عشوائية جيدة", "قوة كلمة المرور", "مصدر عشوائي آمن", "‏/dev/urandom"]
---

## Definition

In security, entropy measures how unpredictable something is. A secret with high entropy, such as a long random key, is very hard to guess.

## Where you hear it

In key and token generation, password policy talks, and security reviews of `random` vs `secrets`.

## Examples

- Generate tokens with `secrets.token_urlsafe`, which draws on the OS entropy source.
- A password made of a common word has very low entropy.
- The reset token has 128 bits of entropy, so it cannot be guessed in practice.

## Common mistake

Using `random.random()` for tokens or keys. It is predictable; use a cryptographically secure generator.

## Don't confuse with

Length is not the same as entropy. A long but predictable value, such as a word followed by digits, can have low entropy, while randomness is what gives a secret its strength.

## Say it at work

- Where does this key get its entropy?
- Use the OS random source.

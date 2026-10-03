---
id: salt
category: security
level: intermediate
related: [hashing, authentication-vs-authorization]
term: "Salt"
pronunciation: "SAWLT"
keywords: ["random string added to password","prevent rainbow table attacks","make password hashing unique","secure user passwords from cracking","protect passwords with random data","password hashing security technique","add random bits to password hash","prevent dictionary attacks on passwords","بيانات عشوائية لكلمات المرور","منع هجمات جداول قوس قزح","تأمين كلمات المرور من الاختراق","حماية الهاش بقيم عشوائية","إضافة بيانات عشوائية للتجزئة","حماية كلمات المرور المسجلة","سولت كلمات المرور","تجنب اختراق الهاش بالتخمين"]
---

## Definition

Salt is a random string of data added to a password before it is hashed to ensure that identical passwords result in unique hash values. This technique prevents attackers from using precomputed tables, known as rainbow tables, to crack passwords.

## Where you hear it

In security audits, user authentication system design, and database schema reviews.

## Examples

- Always generate a unique salt for every user during the registration process.
- Storing the salt alongside the hashed password in the database is standard practice.

## Common mistake

Thinking that a salt is a form of encryption; it is not, because it is not intended to be secret or reversible, but rather to make brute-force attacks computationally expensive.

## Don't confuse with

Salt differs from pepper in password security because a salt randomizes the hash to prevent rainbow table attacks, while a pepper adds a secret system-wide key that provides an extra layer of defense even if the database is leaked.

## Say it at work

- Make sure we store the salt in a separate column alongside the password hash.
- We need to update the user registration service to generate a cryptographically secure random salt for every new account.

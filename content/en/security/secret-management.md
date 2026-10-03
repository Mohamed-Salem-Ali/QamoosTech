---
id: secret-management
category: security
level: intermediate
related: [encryption, environment-variable]
term: "Secret Management"
pronunciation: "SEE-krit MAN-ij-ment"
keywords: ["secure storage for api keys","how to store passwords safely","prevent hardcoded credentials","centralized credential rotation","managing sensitive environment variables","vault for application secrets","secure access to database passwords","protecting private keys in code","best practices for secret storage","storing configuration secrets safely","تخزين كلمات المرور بشكل آمن","طريقة حفظ مفاتيح البرمجة","حماية بيانات الاعتماد الحساسة","إدارة مفاتيح الدخول المشفرة","تجنب كتابة كلمات السر برمجيا","نظام حفظ الأسرار والرموز","تحديث بيانات الاعتماد تلقائيا","تخزين آمن للمفاتيح الخاصة","سيكرت مانيدجمنت","أدوات حماية الأسرار البرمجية"]
---

## Definition

Secret management is the secure storage, access control, and rotation of sensitive credentials like database passwords, API keys, and private keys. It prevents credentials from being exposed in source code or insecure configuration files.

## Where you hear it

During security reviews, when setting up cloud infrastructure, or when planning how applications connect to databases.

## Examples

- We use a dedicated vault service for secret management instead of hardcoding API keys.
- Proper secret management requires rotating database credentials every ninety days.

## Common mistake

Treating secret management the same as regular environment variables, which can accidentally expose sensitive credentials in plain text logs or repository history.

## Don't confuse with

Secret management is often confused with environment variables; while environment variables are simple key-value pairs for configuration, secret management provides encryption, access auditing, and automatic rotation for sensitive data.

## Say it at work

- We need to stop storing these keys in our config files and move them into our secret management system.
- Please ensure that the new service integration follows our established secret management policies to avoid hardcoding credentials.

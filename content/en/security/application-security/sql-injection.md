---
id: sql-injection
category: security
subcategory: application-security
level: beginner
related: [vulnerability, database, query]
term: "SQL Injection (SQLi)"
pronunciation: "ES-KYOO-EL in-JEK-shun"
keywords: ["hack database via input form","sqli vulnerability","sql injection","bypass login with quotes","malicious sql query execution","unsafe string concatenation in queries","sanitize user input for database","prevent database hacking attacks","use prepared statements","parameterized queries","ثغرة حقن قواعد البيانات","اختراق قاعدة البيانات عبر المدخلات","حقن إس كيو إل","تجاوز تسجيل الدخول بثغرة","تأمين المدخلات ضد الاختراق","منع حقن قاعدة البيانات","استخدام الاستعلامات المجهزة","ثغرة sqli الأمنية","دمج النصوص في الاستعلامات"]
---

## Definition

A security vulnerability that occurs when user input is incorrectly handled and executed as part of a database query, potentially allowing attackers to read, modify, or delete sensitive data.

## Where you hear it

In security audits, penetration testing reports, and code reviews when checking input validation.

## Examples

- The attacker exploited an SQL injection vulnerability in the login form to bypass authentication.
- Always use parameterized queries to prevent SQL injection in your application.
- Escaping quotes by hand is not enough to stop SQL injection; use parameters instead.

## Common mistake

Trusting input data from users and concatenating strings directly into SQL statements instead of using prepared statements or an ORM.

## Don't confuse with

SQL injection is often confused with Cross-Site Scripting (XSS); while SQL injection targets the database layer, XSS targets the client-side browser by injecting malicious scripts into web pages.

## Say it at work

- We need to make sure all these input fields are sanitized to avoid any potential SQL injection risks.
- I have updated the code to use prepared statements, which effectively mitigates the SQL injection vulnerability found in the previous module.

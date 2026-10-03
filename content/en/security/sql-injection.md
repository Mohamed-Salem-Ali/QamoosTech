---
id: sql-injection
category: security
level: beginner
related: [vulnerability, database, query]
term: "SQL Injection (SQLi)"
pronunciation: "ES-KYOO-EL in-JEK-shun"
---

## Definition

A security vulnerability that occurs when user input is incorrectly handled and executed as part of a database query, potentially allowing attackers to read, modify, or delete sensitive data.

## Where you hear it

In security audits, penetration testing reports, and code reviews when checking input validation.

## Examples

- The attacker exploited an SQL injection vulnerability in the login form to bypass authentication.
- Always use parameterized queries to prevent SQL injection in your application.

## Common mistake

Trusting input data from users and concatenating strings directly into SQL statements instead of using prepared statements or an ORM.

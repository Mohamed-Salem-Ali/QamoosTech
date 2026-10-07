---
id: brute-force-attack
category: security
subcategory: application-security
level: beginner
related: [authentication-vs-authorization, vulnerability]
term: "Brute-Force Attack"
pronunciation: "BROOT-fors uh-TAK"
keywords: ["guess passwords by trying every combination","automated password guessing attack","try all password combinations","prevent password guessing scripts","burt force attack","brute force login attempt","trial and error password hacking","systematic password guessing","block repeated login failures","هجوم تخمين كلمات المرور","تجربة كل الاحتمالات لكلمة السر","هجوم التجربة والخطأ الأمني","اختراق حسابات بتجربة كل الباسوردات","بروت فورس أتاك","منع تخمين كلمات المرور المتكرر","هجمات التخمين الآلي للباسورد","حظر محاولات تسجيل الدخول الفاشلة"]
---

## Definition

A brute-force attack is a trial-and-error method used to guess information, such as passwords or encryption keys, by systematically trying every possible combination.

## Where you hear it

In security audits, server logs, and discussions about authentication security.

## Examples

- The server blocked the IP address after detecting a brute-force attack on the login page.
- We implemented account lockout policies to prevent brute-force attacks.

## Common mistake

Thinking that a brute-force attack is the same as a dictionary attack; while they are similar, a brute-force attack tries all possible character combinations, whereas a dictionary attack only tries words from a predefined list.

## Don't confuse with

Brute-force attack is often confused with credential stuffing; while brute-force attempts to guess credentials by trying all combinations, credential stuffing uses previously leaked username and password pairs to gain unauthorized access.

## Say it at work

- We should check the logs to see if someone is attempting a brute-force attack on our API endpoints.
- Please review the security report, as it indicates that our login service is vulnerable to a brute-force attack.

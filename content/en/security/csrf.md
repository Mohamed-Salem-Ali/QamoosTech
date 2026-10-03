---
id: csrf
category: security
level: intermediate
related: [authentication-vs-authorization, vulnerability, cookie]
term: "Cross-Site Request Forgery (CSRF)"
pronunciation: "KROSS-SYT REE-kwest FOR-jer-ee"
keywords: ["cross site request forgery","stop unauthorized requests from browser","prevent cross site forgery","csrf vulnerability protection","anti forgery tokens for forms","secure state changing endpoints","force user browser actions exploit","site forgery attack prevention","session riding vulnerability","corsf spelling mistake","تزوير الطلبات عبر المواقع","ثغرة تزوير الطلبات","حماية تطبيق الويب من التزوير","منع تنفيذ طلبات غير مصرح بها","رموز الحماية ضد التزوير","ثغرة تخدع المتصفح لتنفيذ إجراءات","تأمين نقاط النهاية ضد الاختراق","كروس سايت ريكويست فورجري","حماية النماذج من الهجمات"]
---

## Definition

CSRF is a security vulnerability that tricks an authenticated user into executing unwanted actions on a web application where they are currently logged in. It exploits the trust a site has in the user's browser by forcing the browser to send unauthorized requests.

## Where you hear it

- During security audits or code reviews.
- When discussing web application authentication mechanisms.
- While configuring security headers or middleware.

## Examples

- The application is vulnerable to CSRF because it lacks anti-forgery tokens.
- We must implement CSRF protection on all state-changing endpoints.

## Common mistake

Confusing CSRF with Cross-Site Scripting (XSS). While XSS involves injecting malicious scripts into a page, CSRF focuses on forcing the user to perform unintended actions using their existing session credentials.

## Don't confuse with

CSRF is often confused with Session Hijacking. While CSRF forces the victim's browser to perform an action on their behalf, Session Hijacking involves stealing the session token to impersonate the user entirely.

## Say it at work

- Did we remember to add the anti-forgery tokens to the new form, or are we leaving it exposed to CSRF?
- Please ensure that all state-changing API endpoints are protected against CSRF attacks before we merge this PR.

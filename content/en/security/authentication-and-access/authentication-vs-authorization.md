---
id: authentication-vs-authorization
category: security
subcategory: authentication-and-access
level: beginner
related: [jwt, rbac, oauth, csrf]
term: "Authentication vs Authorization"
pronunciation: "aw-then-tih-KAY-shun versus aw-thor-ih-ZAY-shun"
keywords: ["difference between login and permissions","authn vs authz explained","how to verify identity and access","who are you vs what can you do","difference between authentication and authorization","check user identity and privileges","is login the same as access rights","managing user identity and permissions","security concepts for api design","authentication versus authorization meaning","الفرق بين المصادقة والتفويض","الفرق بين تسجيل الدخول والصلاحيات","التحقق من الهوية مقابل السماح بالوصول","ما هو الفرق بين auth و authz","كيف أفرق بين المصادقة والتفويض","شرح مفاهيم الأمان في البرمجة","التحقق من هوية المستخدم وصلاحياته","معنى المصادقة والتفويض في البرمجة","الفرق بين authentication و authorization","هل المصادقة هي نفسها التفويض"]
---
## Definition

*Authentication* checks who you are (login). *Authorization* checks what you are allowed to do.

## Where you hear it

Security, API design, and interviews.

## Examples

- Authentication passed, but authorization failed, so the API returned 403.
- Check authorization on the server for every action.
- Login works, but a regular user who opens the admin page still gets a 403.

## Common mistake

Using the two words as if they were the same. Remember: authN = who you are, authZ = what you can do.

## Say it at work

- Let us make sure our middleware handles authentication before passing the request to the authorization layer.
- Could you please update the pull request to ensure that authorization checks are performed after successful authentication?

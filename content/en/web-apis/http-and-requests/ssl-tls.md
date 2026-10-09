---
id: ssl-tls
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [encryption, authentication-vs-authorization]
term: "SSL / TLS"
pronunciation: "es-es-el / tee-el-es"
keywords: ["encrypt data between client and server","secure website with https certificate","fix err ssl protocol error","website security certificate configuration","tls encryption protocol","ssl certificate renewal","secure connection between browser and server","http traffic encryption","transport layer security","secure sockets layer","تشفير البيانات بين المتصفح والخادم","تأمين الموقع بشهادة الحماية","بروتوكول التشفير الآمن","تجديد شهادة الموقع الإلكتروني","حل مشكلة خطأ الشهادة الأمنية","طبقة المقابس الآمنة","أمان طبقة النقل","إعداد شهادات الأمان للموقع","حماية الاتصال بين العميل والخادم"]
---

## Definition

Security protocols that encrypt data transmitted between a client and a server, protecting it from interception and tampering.

## Where you hear it

During server setup, security audits, domain certificate configuration, or when troubleshooting `ERR_SSL_PROTOCOL_ERROR`.

## Examples

- The server is configured to redirect all incoming HTTP traffic to HTTPS using SSL / TLS.
- We need to renew the SSL / TLS certificate before it expires next month.
- The browser shows a padlock because the site uses TLS 1.3 for every connection.

## Common mistake

Thinking SSL is still actively used, when in fact it has been completely replaced by its secure successor, TLS.

## Don't confuse with

SSL/TLS is often confused with HTTPS; while SSL/TLS is the underlying cryptographic protocol that secures the connection, HTTPS is the actual application protocol that uses SSL/TLS to transfer data securely.

## Say it at work

- We should check if the load balancer is correctly terminating the SSL/TLS connection before passing the traffic to our internal service.
- Please ensure the server configuration enforces modern SSL/TLS versions to comply with our current security policy.

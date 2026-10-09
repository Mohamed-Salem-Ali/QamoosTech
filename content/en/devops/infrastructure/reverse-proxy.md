---
id: reverse-proxy
category: devops
subcategory: infrastructure
level: intermediate
related: [load-balancer, http-header, development-server, forward-proxy]
term: "Reverse Proxy"
pronunciation: "rih-VERS PROK-see"
keywords: ["server in front of app","handle https certificates server","route requests to backend","fix 502 bad gateway","nginx routing configuration","ssl termination server","forward vs reverse proxy","proxy server for backend","distribute traffic to servers","خادم امام التطبيق لتوجيه الطلبات","حل مشكلة 502 bad gateway","توجيه الطلبات الى السيرفر الخلفي","وكيل عكسي","الفرق بين الوكيل الامامي والعكسي","ادارة شهادات ssl على السيرفر","اعدادات سيرفر nginx","سيرفر لاستقبال طلبات المستخدمين"]
---
## Definition

A server in front of your app that receives requests from users and forwards them to the app. It can also handle HTTPS and caching.

## Where you hear it

Nginx setups and production troubleshooting ("502 Bad Gateway").

## Examples

- Nginx works as a reverse proxy in front of our Node app.
- The 502 error means the proxy cannot reach the app.
- The reverse proxy terminates HTTPS and forwards plain requests to the app on port 3000.

## Common mistake

Confusing it with a forward proxy. A forward proxy sits in front of users; a reverse proxy sits in front of servers.

## Don't confuse with

A reverse proxy is the front door for one or more servers: it terminates HTTPS, can cache, and forwards requests. A load balancer is a reverse proxy whose main job is spreading requests across several identical servers.

## Say it at work

- We should configure the reverse proxy to handle SSL termination so our app doesn't have to deal with certificates.
- I have updated the reverse proxy configuration to route all API requests to the new microservice instance.

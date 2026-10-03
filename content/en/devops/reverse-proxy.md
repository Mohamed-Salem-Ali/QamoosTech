---
id: reverse-proxy
category: devops
level: intermediate
related: [load-balancer, http-header]
term: "Reverse Proxy"
pronunciation: "rih-VERS PROK-see"
---
## Definition

A server in front of your app that receives requests from users and forwards them to the app. It can also handle HTTPS and caching.

## Where you hear it

Nginx setups and production troubleshooting ("502 Bad Gateway").

## Examples

- Nginx works as a reverse proxy in front of our Node app.
- The 502 error means the proxy cannot reach the app.

## Common mistake

Confusing it with a forward proxy. A forward proxy sits in front of users; a reverse proxy sits in front of servers.

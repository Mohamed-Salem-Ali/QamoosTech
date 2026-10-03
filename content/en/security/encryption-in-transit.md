---
id: encryption-in-transit
category: security
level: beginner
related: [encryption]
term: "Encryption in Transit"
pronunciation: "en-KRIP-shun in TRAN-zit"
---

## Definition

Encryption in transit is the process of securing data while it is being transferred between two points, such as a client and a server. It ensures that even if the data is intercepted, it remains unreadable to unauthorized parties.

## Where you hear it

During security audits, infrastructure setup, and when configuring SSL/TLS certificates.

## Examples

- We must enforce HTTPS to ensure encryption in transit for all API requests.
- The security policy requires encryption in transit for all data moving between microservices.

## Common mistake

Confusing it with encryption at rest, which protects data stored on a physical disk rather than data currently moving across a network.

## Don't confuse with

Encryption in transit is often confused with encryption at rest; the former secures data moving across a network, while the latter protects data stored on physical or cloud storage media.

## Say it at work

- Let's double-check our load balancer configuration to ensure encryption in transit is enabled for all incoming traffic.
- The security audit report indicates that we need to implement TLS 1.3 to improve our encryption in transit standards.

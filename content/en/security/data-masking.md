---
id: data-masking
category: security
level: intermediate
related: [pii, encryption, staging-vs-production]
term: "Data Masking"
pronunciation: "DAY-tuh MAS-king"
---

## Definition

Data masking is the process of hiding original sensitive information by replacing it with realistic but fake data. It ensures that confidential details remain protected while keeping the structure usable for testing and development.

## Where you hear it

- In security reviews before sharing databases with external vendors.
- When setting up staging and testing environments with production-like data.
- During discussions about compliance and protecting user privacy.

## Examples

- We need to apply data masking to the user table before copying it to the staging environment.
- The script replaces real email addresses with random ones during the data masking process.

## Common mistake

Thinking data masking is the same as encryption. Unlike encryption, masked data is not meant to be decrypted back to its original form; it is permanently altered for safe use outside production.

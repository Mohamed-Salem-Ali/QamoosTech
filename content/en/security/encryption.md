---
id: encryption
category: security
level: intermediate
related: [hashing, field-level-encryption]
term: "Encryption"
pronunciation: "en-KRIP-shun"
---
## Definition

Turning readable data into unreadable data using a key, so only someone with the right key can read it again.

## Where you hear it

HTTPS, databases, and compliance.

## Examples

- Data is encrypted in transit with HTTPS and at rest in the database.
- Without the key, the encrypted file is useless.

## Common mistake

Storing the key next to the encrypted data. Keep keys in a separate, protected place.

## Don't confuse with

Encryption is often confused with hashing; encryption is a two-way function designed to be reversible with a key, whereas hashing is a one-way function meant to be irreversible.

## Say it at work

- We need to make sure all sensitive user data is handled with encryption before it hits the database.
- Please ensure that the configuration files are stored using encryption to comply with our security standards.

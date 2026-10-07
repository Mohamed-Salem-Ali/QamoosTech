---
id: supply-chain-attack
category: security
subcategory: application-security
level: intermediate
related: [vulnerability, package-dependency, lock-file]
aliases: ["typosquatting", "dependency confusion", "malicious package", "sca"]
term: "Supply Chain Attack"
pronunciation: "suh-PLY CHAYN uh-TAK"
keywords: ["attack through a dependency", "malicious package", "typosquatting", "compromised build", "trusted library poisoned", "npm pypi attack", "هجوم عبر اعتمادية", "حزمة خبيثة", "تقليد أسماء الحزم", "بناء مخترق", "مكتبة موثوقة مسمومة", "هجمات npm وPyPI"]
---

## Definition

A supply chain attack compromises something you depend on, such as a library, a build tool or an update server, so the attacker's code reaches you through software you trust.

## Where you hear it

In security news (event-stream, SolarWinds), dependency audits (`npm audit`, Dependabot) and CI/CD hardening.

## Examples

- A look-alike package name pulled malware into the build.
- Pin versions and verify hashes to reduce supply chain risk.

## Common mistake

Trusting a package because it is popular or the name "looks right". Check the exact name, the maintainers and the release changes.

## Don't confuse with

A direct attack on your own server or code. Here the attacker goes through a supplier instead.

## Say it at work

- Run a dependency audit in CI.
- Use a lock file and review updates.

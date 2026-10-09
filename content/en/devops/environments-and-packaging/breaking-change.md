---
id: breaking-change
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [semantic-versioning, backward-compatibility, version-pinning]
aliases: ["breaking changes"]
term: "Breaking Change"
pronunciation: "BRAY-king chaynj"
keywords: ["change that breaks existing users", "incompatible update", "upgrade breaks my code", "remove a function from the library", "major version change", "تغيير يكسر المستخدمين الحاليين", "تحديث غير متوافق", "التحديث كسر الشيفرة", "حذف دالة من المكتبة"]
---

## Definition

A change to a library, API, or product that stops existing code from working, so users must change their code or setup to keep going.

## Where you hear it

In release notes, upgrade guides, and discussions about a new major version.

## Examples

- The new version removes the old login method, which is a breaking change.
- Mark breaking changes clearly in the release notes.
- The v3 release renamed the user_id field, a breaking change for every client.

## Common mistake

Shipping a breaking change in a minor or patch version. Users trust those numbers, so breaking changes belong in a major version.

## Don't confuse with

A breaking change stops existing code from working. A deprecation warns that something will be removed later but still works now.

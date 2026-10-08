---
id: base64
category: web-apis
subcategory: data-formats
level: beginner
related: [json, utf-8, protocol-buffers]
aliases: ["base 64", "base64 encoding"]
term: "Base64"
pronunciation: "BAYS SIX-ty-FOUR"
keywords: ["encode binary as text", "base64 string in json", "decode base64 to file", "data url for an image", "base64 is not encryption", "larger payload than raw bytes", "ترميز Base64", "تحويل البيانات الثنائية إلى نص", "فك ترميز نص Base64", "صورة مضمنة كنص", "Base64 ليس تشفيراً", "حجم أكبر من البيانات الأصلية"]
---

## Definition

A way to write binary data using only plain letters, digits, + and /. Every three bytes become four characters, so the text is about a third larger. It lets files travel inside JSON, HTML or email.

## Where you hear it

In data URLs, JSON APIs that carry files, authentication tokens, and email attachments.

## Examples

- The API sends the uploaded image as a base64 string inside the JSON body.
- Decode the base64 string before saving it to disk.
- Base64 makes a payload about a third larger, so avoid it for large files.

## Common mistake

Treating base64 as protection. It hides nothing, and anyone can decode it back to the original bytes in one step.

## Don't confuse with

Encryption scrambles data with a key, so only someone with the key can read it. Base64 only changes how the bytes are written down, and it needs no key at all.

## Say it at work

- The file comes in as base64, so decode it before you save it.
- Can we upload the file directly instead of putting base64 inside the JSON?

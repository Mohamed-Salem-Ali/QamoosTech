---
id: utf-8
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [unicode, content-type, url-encoding, escape-sequence, base64]
aliases: ["utf8"]
term: "UTF-8"
pronunciation: "YOO-TEE-EF AYT"
keywords: ["text encoding standard", "save file as utf-8", "arabic characters become question marks", "encoding error", "open file with encoding utf-8", "charset utf-8 header", "معيار ترميز النصوص", "حفظ الملف بصيغة UTF-8", "الحروف العربية تتحول إلى علامات استفهام", "خطأ في الترميز", "فتح ملف بترميز utf-8", "ترويسة charset utf-8"]
---

## Definition

UTF-8 is the most common way to store Unicode text as bytes. It uses one byte for basic English letters and more bytes for other characters.

## Where you hear it

When saving or reading text files, setting a database or web page encoding, and fixing garbled Arabic.

## Examples

- Always open the file with `encoding="utf-8"`.
- The response header declares the charset as UTF-8.

## Common mistake

Relying on the system's default encoding. On some machines it is not UTF-8, so Arabic text breaks.

## Don't confuse with

Unicode itself, which is the list of characters rather than how they are saved.

## Say it at work

- Set the encoding to UTF-8 on both the file and the database.
- The Arabic turns into question marks because the file isn't saved as UTF-8.

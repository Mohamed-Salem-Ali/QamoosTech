---
id: unicode
category: programming
subcategory: text-and-data-formats
level: intermediate
related: [utf-8, data-type, url-encoding, escape-sequence]
term: "Unicode"
pronunciation: "YOO-ni-kohd"
keywords: ["characters from every language", "arabic text in code", "emoji in strings", "code point of a character", "character set standard", "garbled text problem", "حروف كل اللغات", "النص العربي في الكود", "الإيموجي في النصوص", "الرمز الرقمي للحرف", "معيار مجموعة الأحرف", "مشكلة ظهور النص مشوهاً"]
---

## Definition

Unicode is the standard that gives every character from every writing system a unique number, so one program can handle Arabic, English, emoji and more.

## Where you hear it

In discussions about text bugs, internationalisation, and databases or files that must store Arabic correctly.

## Examples

- Python strings are Unicode, so Arabic text works without special handling.
- The emoji is one Unicode character but takes several bytes when stored.

## Common mistake

Mixing up Unicode with an encoding. Unicode is the list of numbered characters; UTF-8 is one way of storing them as bytes.

## Don't confuse with

UTF-8, which is an encoding that turns Unicode characters into bytes.

## Say it at work

- Store the names as Unicode text so Arabic characters are not lost.
- That garbled text is a Unicode problem, not a font problem.

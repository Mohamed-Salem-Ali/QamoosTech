---
id: escape-sequence
category: programming
subcategory: text-and-data-formats
level: beginner
related: [unicode, utf-8, regular-expression]
aliases: ["escape character"]
term: "Escape Sequence"
pronunciation: "ih-SKAYP SEE-kwens"
keywords: ["backslash n new line", "escape quotes inside a string", "backslash in string literal", "unescaped quote breaks string", "escape special characters", "tab character in code", "تسلسل الهروب", "الشرطة المائلة العكسية في النص", "هروب علامة الاقتباس داخل النص", "سطر جديد داخل النص", "حرف خاص داخل السلسلة", "علامة اقتباس غير محمية"]
---

## Definition

A combination of characters that stands for something a string cannot show directly. In many languages a backslash starts one: \n is a new line, \t is a tab, and \" is a quotation mark inside a double-quoted string.

## Where you hear it

In string literals, log output, regular expressions, and bug reports where a quote broke a query.

## Examples

- print('Line one\nLine two') shows the two lines on separate rows.
- Write a quote inside a double-quoted string by escaping it: "She said \"hi\"".
- A Windows path such as C:\new\folder needs care, because \n inside it is read as a new line.

## Common mistake

Joining user text into a query or shell command without escaping it. A quote in the input can end the string early and change what the command does.

## Don't confuse with

An escape sequence is written inside a string in the source code. Character encoding, such as UTF-8, decides how a character is stored as bytes, which is a separate question.

## Say it at work

- The JSON broke because the log message had an unescaped quote.
- Did we escape the backslashes once or twice in this string?

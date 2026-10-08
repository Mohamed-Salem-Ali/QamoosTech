---
id: parsing
category: programming
subcategory: text-and-data-formats
level: beginner
related: [serialization, regular-expression, json, xml]
aliases: ["parse"]
term: "Parsing"
pronunciation: "PAR-sing"
keywords: ["read text into structure", "turn string into objects", "parse json response", "invalid input fails to parse", "parser error message", "check the format of input", "تحليل النص إلى بنية", "تحويل النص إلى كائنات", "تحليل استجابة JSON", "فشل قراءة المدخل", "رسالة خطأ المحلل", "التحقق من صيغة المدخل"]
---

## Definition

Turning raw text into a structure a program can use. A parser reads a string, such as a date or a JSON document, checks that it follows the rules, and produces values such as numbers, lists or objects.

## Where you hear it

In request handlers that read bodies, in compiler courses, and in error messages such as "failed to parse".

## Examples

- The parser turns the string 2026-10-08 into a date value.
- A missing comma makes the JSON fail to parse, so the server returns a 400 error.
- Parse the uploaded CSV once at the edge, then work with typed values.

## Common mistake

Writing a regular expression by hand for a structured format, or trusting input that was never checked. Use the format's own parser library.

## Don't confuse with

Parsing reads text into a structure. Serialization does the reverse, turning a structure into text, such as writing an object out as JSON.

## Say it at work

- The import fails to parse row 3; can you check the date format?
- Let's parse the config once at startup instead of on every request.

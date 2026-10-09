---
id: xml
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, serialization, protocol-buffers, parsing]
aliases: ["extensible markup language"]
term: "XML"
pronunciation: "ex-em-el"
keywords: ["extensible markup language", "tags and attributes format", "xml document", "soap messages use xml", "parse xml file", "لغة الترميز الموسعة", "صيغة الوسوم والسمات", "مستند XML", "تحليل ملف XML"]
---

## Definition

A text format that describes data with nested tags, such as <order><id>7</id></order>. It is verbose, but it has schemas and is still common in older enterprise and government systems.

## Where you hear it

In SOAP web services, configuration files, RSS feeds, and older integrations.

## Examples

- The partner sends invoices as XML files.
- Parse the XML with a library instead of searching the text.
- The bank's export is an XML file with one order element per transaction.

## Common mistake

Parsing XML with regular expressions. The format is nested and has rules, so a real parser is needed.

## Don't confuse with

XML is verbose and tag-based. JSON is shorter and maps directly to objects in most languages.

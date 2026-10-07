---
id: input-validation
category: security
subcategory: application-security
level: beginner
related: [fail-fast, sql-injection, xss]
tags: [python]
aliases: ["data validation", "validate input", "user input validation"]
term: "Input Validation"
pronunciation: "IN-poot val-ih-DAY-shun"
keywords: ["check data before accepting", "reject bad input", "never trust user input", "type length range checks", "validate on the server", "allow list not block list", "فحص البيانات قبل قبولها", "رفض المدخلات السيئة", "لا تثق بمدخلات المستخدم أبداً", "فحص النوع والطول والمدى", "التحقق على الخادم", "قائمة السماح لا المنع"]
---

## Definition

Input validation checks that data is of the expected type, length, range and format before the program accepts it, and rejects anything else.

## Where you hear it

In security checklists, API design, forms, CLI tools, and every bug report about weird data.

## Examples

- Validate the amount is a positive number before saving it.
- Client-side checks are for convenience; the server must validate again.

## Common mistake

Validating only in the browser. Anyone can send requests directly and skip it.

## Don't confuse with

Escaping or parameterised queries, which protect the output and the database. Validation is the first layer, not the only one.

## Say it at work

- Add validation for the empty and negative cases.
- Use an allow list of accepted values.

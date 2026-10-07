---
id: type-conversion
category: programming
subcategory: language-basics
level: beginner
related: [data-type, variable, dynamic-typing]
aliases: ["type casting", "casting", "typecast"]
term: "Type Conversion"
pronunciation: "TYPE kun-VER-zhun"
keywords: ["change string to number", "int('5') python", "casting types", "convert number to string", "valueerror when converting", "implicit vs explicit conversion", "تحويل نص إلى رقم", "int('5') في بايثون", "تحويل الأنواع", "تحويل رقم إلى نص", "خطأ ValueError عند التحويل", "التحويل الصريح والضمني"]
---

## Definition

Type conversion changes a value from one type to another, for example turning the text "42" into the number 42.

## Where you hear it

When reading user input or files, parsing data from an API, and in error messages such as `ValueError`.

## Examples

- Input arrives as text, so convert it to an integer before adding.
- The conversion fails if the text is not a valid number.

## Common mistake

Converting without handling bad input. `int("abc")` raises an error, so validate or catch it.

## Don't confuse with

Type checking, which asks what type a value has. Conversion actually changes it into another type.

## Say it at work

- Cast the query parameter to an integer before using it.
- Wrap the conversion in a try block in case the value is not numeric.

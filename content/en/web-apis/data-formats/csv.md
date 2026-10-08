---
id: csv
category: web-apis
subcategory: data-formats
level: beginner
related: [json, serialization, utf-8]
aliases: ["comma-separated values"]
term: "CSV"
pronunciation: "see-ess-vee"
keywords: ["comma separated values file", "export to spreadsheet", "open csv in excel", "tabular data text file", "csv import", "ملف قيم مفصولة بفواصل", "تصدير إلى جدول بيانات", "فتح ملف CSV في إكسل", "استيراد CSV"]
---

## Definition

A plain text format for tabular data, where each line is a row and the values in a row are separated by commas. It is simple and widely supported, but it has no standard for types or nested data.

## Where you hear it

In data exports, bank statements, and imports into spreadsheets or databases.

## Examples

- Export the orders as a CSV file for the accountant.
- A comma inside a value must be quoted, or the columns shift.
- Open the CSV file in a spreadsheet to check that the first row holds the column names.

## Common mistake

Splitting CSV lines on commas by hand. Quoted values can contain commas, so use a CSV library.

## Don't confuse with

CSV is flat tables only. JSON can hold nested data and typed values.

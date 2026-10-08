---
id: ndjson
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, csv, lazy-evaluation]
aliases: ["newline-delimited JSON"]
term: "NDJSON"
pronunciation: "en-dee-JAY-son"
keywords: ["newline delimited json", "one json object per line", "stream json records", "log file in json lines", "jsonl format", "JSON مفصول بأسطر جديدة", "كائن JSON في كل سطر", "بث سجلات JSON", "صيغة JSON Lines"]
---

## Definition

A format with one valid JSON object on each line, separated by newline characters. It lets programs read large files or streams one record at a time, without loading everything into memory.

## Where you hear it

In large data exports, log pipelines, and bulk import APIs.

## Examples

- Each line of the export is one order in NDJSON.
- Read the file line by line so it never fits fully in memory.

## Common mistake

Treating an NDJSON file as one big JSON array. Each line must be parsed on its own.

## Don't confuse with

NDJSON has one record per line. A JSON array holds all records inside one set of brackets.

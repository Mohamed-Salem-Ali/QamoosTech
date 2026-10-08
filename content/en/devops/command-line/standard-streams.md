---
id: standard-streams
category: devops
subcategory: command-line
level: beginner
related: [cli, exit-code, logging]
tags: [python]
aliases: ["stdout", "stderr", "stdin", "standard output", "standard error"]
term: "Standard Streams"
pronunciation: "STAN-derd STREEMZ"
keywords: ["stdout and stderr", "print vs error output", "redirect output to a file", "2> redirect", "pipe results", "errors go to stderr", "مجرى النتائج ومجرى الأخطاء", "الطباعة مقابل مخرجات الخطأ", "إعادة توجيه المخرجات إلى ملف", "إعادة توجيه الأخطاء", "تمرير النتائج", "الأخطاء تذهب إلى مجرى الخطأ"]
---

## Definition

Standard streams are the channels every program uses: standard input (stdin), standard output (stdout) for results, and standard error (stderr) for error messages.

## Where you hear it

When redirecting output (`> file`, `2> errors.txt`), chaining commands with pipes, and reading CI logs.

## Examples

- Print the results to stdout and the errors to stderr.
- Redirecting stdout to a file still shows the errors on screen.
- The script writes the report to stdout, so you can pipe it into a file.

## Common mistake

Sending errors to stdout. They end up mixed into the data that the next command in a pipe reads.

## Don't confuse with

Logging, which records events with levels and timestamps. Streams are only where output goes.

## Say it at work

- Send the progress messages to stderr so they don't pollute the output.
- Pipe stdout into `grep`.

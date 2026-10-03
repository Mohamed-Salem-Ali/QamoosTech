---
id: exception
category: programming
level: beginner
related: [debugging]
term: "Exception"
pronunciation: "ik-SEP-shun"
---
## Definition

An error that happens while the program runs. It stops normal flow unless your code catches and handles it.

## Where you hear it

Stack traces, logs, `try/catch`, and bug reports.

## Examples

- The service throws an exception when the file is missing.
- Catch the exception and show a friendly message.

## Common mistake

Catching every exception and ignoring it. The error disappears from sight but not from reality.

## Don't confuse with

An exception represents a runtime error that your code can handle, whereas a syntax error prevents the code from compiling or running at all.

## Say it at work

- Make sure to add a specific try-catch block here so we don't let this exception crash the background worker.
- Please wrap the database call in a try-catch block and log the exception details for further investigation.

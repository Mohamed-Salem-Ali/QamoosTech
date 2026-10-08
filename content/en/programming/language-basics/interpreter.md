---
id: interpreter
category: programming
subcategory: language-basics
level: beginner
related: [repl, data-type, variable]
tags: [python]
term: "Interpreter"
pronunciation: "in-TER-pruh-ter"
keywords: ["program that runs code line by line", "python interpreter version", "interpreted vs compiled language", "what runs my python script", "javascript engine runs code", "run code without compiling", "برنامج ينفذ الكود سطراً بسطر", "إصدار مفسر بايثون", "الفرق بين اللغة المفسرة والمترجمة", "ما الذي يشغّل سكريبت بايثون", "تشغيل الكود دون ترجمة", "محرك جافاسكريبت"]
---

## Definition

An interpreter is a program that reads your code and runs it step by step, instead of first translating the whole program into a separate machine-code file.

## Where you hear it

In Python and JavaScript courses, when comparing interpreted and compiled languages, and when someone asks which Python version runs a script.

## Examples

- The interpreter stops and reports the error as soon as it reaches the faulty line.
- Which interpreter version does your virtual environment use?
- The interpreter reports a syntax error on line 12 before the script runs anything.

## Common mistake

Believing an interpreted language never compiles anything. Many interpreters turn code into bytecode first; the real difference is in how the program is run.

## Don't confuse with

A compiler, which translates the whole program ahead of time into a file the computer can run directly.

## Say it at work

- Check which interpreter your editor is using; it may not be the one in the virtual environment.
- The script fails on the CI interpreter because it is an older version.

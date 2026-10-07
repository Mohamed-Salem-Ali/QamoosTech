---
id: cli
category: devops
subcategory: command-line
level: beginner
related: [exit-code, standard-streams, entry-point]
tags: [python]
aliases: ["command line interface", "command-line tool", "subcommand", "command line"]
term: "CLI"
pronunciation: "SEE-el-EYE"
keywords: ["command line interface", "program you run by typing", "terminal tool", "subcommands and flags", "git commit style commands", "arguments and options", "واجهة سطر الأوامر", "برنامج تشغله بالكتابة", "أداة في الطرفية", "أوامر فرعية وخيارات", "أوامر بأسلوب git commit", "المعاملات والخيارات"]
---

## Definition

A CLI (command-line interface) is a program you use by typing commands in a terminal. Many have subcommands, like `git commit`, plus arguments and options.

## Where you hear it

In developer tools, automation scripts, DevOps work, and when building small tools for yourself or a team.

## Examples

- I built a CLI to add tasks from the terminal.
- Each subcommand does one job: `add`, `list`, `done`.

## Common mistake

Printing everything to one stream and always returning success. A good CLI uses exit codes and separates results from errors.

## Don't confuse with

A GUI, which you use with windows and clicks. A CLI is text in, text out, so it is easy to automate.

## Say it at work

- Give the CLI a `--help` option.
- We can script this because it's a CLI.

---
id: linting
category: testing
subcategory: tools-and-quality
level: beginner
related: [quality-gate, code-review, git-hook, type-checker]
aliases: ["linter", "ruff"]
term: "Linting"
pronunciation: "LIN-ting"
keywords: ["automatic code quality check","find syntax errors automatically","check for unused variables","enforce coding standards tool","static code analysis tool","fix common programming mistakes","automated style guide checker","linter configuration issues","prevent bad code patterns","code smell detection tool","فحص جودة الكود تلقائيا","أداة اكتشاف أخطاء البرمجة","تطبيق معايير كتابة الكود","البحث عن متغيرات غير مستخدمة","فحص أخطاء الصيغة البرمجية","أداة مراجعة الكود الآلية","تحسين جودة الشيفرة برمجيا","التأكد من سلامة الكود","تطبيق قواعد البرمجة القياسية","اكتشاف المشاكل في الكود"]
---
## Definition

Running a tool (a linter such as ESLint) that automatically finds style problems and likely mistakes in your code.

## Where you hear it

CI checks and team coding standards.

## Examples

- The linter found an unused variable.
- Run the linter before you push.
- The linting step fails the build when a variable is declared and never used.

## Common mistake

Disabling lint rules whenever they are annoying. Fix the cause, or agree on the rule with the team.

## Don't confuse with

Linting is often confused with formatting; linting focuses on finding potential logic errors and code quality issues, while formatting only manages the visual style and layout of the code.

## Say it at work

- Could you please check why the linting is failing in the current branch?
- I have updated the configuration to ensure the linting process catches these specific syntax patterns.

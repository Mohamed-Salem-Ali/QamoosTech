---
id: sandbox
category: testing
subcategory: mocking-and-test-doubles
level: beginner
related: [staging-vs-production, integration-test]
term: "Sandbox"
pronunciation: "SAND-boks"
keywords: ["isolated testing environment","safe space to test code","test api without real data","experimental development environment","mock environment for testing","test payment gateway safely","run untrusted code safely","sandbox","test environment","بيئة اختبار معزولة","بيئة تجريبية آمنة","تشغيل الأكواد بشكل آمن","بيئة الفحص للاختبار","اختبار واجهات البرمجة بأمان","بيئة محاكاة الإنتاج","ساندبوكس","بيئة الـ sandbox"]
---

## Definition

A sandbox is an isolated environment where software developers can test code, run experiments, or execute untrusted programs without affecting the live application or real data. It acts as a safe, contained space that mimics production settings.

## Where you hear it

- During the setup of a new API integration.
- When testing a new feature before deploying to production.
- While experimenting with third-party software libraries.

## Examples

- We need to test the payment gateway integration in the sandbox environment first.
- Please run your migration scripts in the sandbox to ensure they don't corrupt the production database.
- Test the webhook in the sandbox so real customers do not receive fake orders.

## Common mistake

Thinking that a sandbox environment is identical to production in terms of performance or data volume, which can lead to unexpected issues when the code is finally deployed.

## Don't confuse with

A sandbox is an isolated space for experiments and untrusted code, while a staging environment is a pre-production stage designed to closely mimic the live system for final release validation.

## Say it at work

- I am going to test the new API keys in the sandbox before we push anything to production.
- Please ensure all payment webhooks are verified against the sandbox environment in this pull request.

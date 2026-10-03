---
id: environment-variable
category: devops
level: beginner
related: [staging-vs-production, containerization]
term: "Environment Variable"
pronunciation: "en-VY-run-ment VAIR-ee-uh-bul"
keywords: ["store secrets outside code","database url in config","env file configuration","api key storage setting","runtime system variables","pass configuration to app","hidden settings for deployment","environment variables","env var","dotenv file","حفظ الإعدادات خارج الكود","تخزين مفاتيح الربط بأمان","متغيرات بيئة العمل","إعدادات قاعدة البيانات الخارجية","ملف المتغيرات البيئية","متغير بيئة","إنفايرونمنت فيريابل","إعدادات التشغيل الخارجية"]
---
## Definition

A setting stored outside the code, such as a database URL or an API key, so each environment can use different values.

## Where you hear it

Deployment guides and `.env` files.

## Examples

- Put the API key in an environment variable, not in the code.
- The app crashed because `DATABASE_URL` was not set.

## Common mistake

Committing the `.env` file to Git. That leaks secrets to everyone who can see the repo.

## Don't confuse with

Environment variables are often confused with configuration files, but environment variables are injected at runtime by the system, whereas configuration files are static files bundled with the application.

## Say it at work

- Make sure you update the environment variable for the new API endpoint before you restart the service.
- I have updated the deployment configuration to include the required environment variable for the staging server.

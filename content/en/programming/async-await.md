---
id: async-await
category: programming
level: intermediate
related: [callback]
term: "Async / Await"
pronunciation: "AY-sink uh-WAYT"
keywords: ["write non blocking code easily","wait for network call completion","handle promises without then callbacks","asynchronous programming keywords","sequential code for slow tasks","avoid callback hell easily","javascript async await syntax","python async functions","await database query result","async await keywords","كتابة تعليمة برمجية غير متزامنة","انتظار طلب الشبكة بدون حظر","التعامل مع الوعود بدون كول باك","جملة الانتظار في البرمجة","منع حظر الخيط الرئيسي","البرمجة غير المتزامنة ببساطة","تشغيل المهام بشكل غير متزامن","استخدام أسينك أويت في الكود","الفرق بين المتزامن وغير المتزامن"]
---
## Definition

Keywords that let you write code that waits for slow work, like a network call, in a simple top-to-bottom style.

## Where you hear it

JavaScript, TypeScript, Python, and C# code, plus interviews.

## Examples

- Use `await` to wait for the database query to finish.
- You forgot `await`, so you got a promise instead of the data.

## Common mistake

Awaiting things one by one when they could run together. Independent calls can run in parallel.

## Don't confuse with

Async / await is often mixed up with multithreading, but async/await handles waiting without blocking the thread, whereas multithreading runs multiple tasks on different threads at the same time.

## Say it at work

- Can we refactor this function to use async/await so it is easier to read?
- Please wrap the API call in an async/await block to handle the response properly.

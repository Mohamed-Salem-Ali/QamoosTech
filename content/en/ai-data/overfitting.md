---
id: overfitting
category: ai-data
level: intermediate
related: [fine-tuning, underfitting]
term: "Overfitting"
pronunciation: "OH-ver-fit-ing"
keywords: ["model memorizing training data","poor performance on test data","high training accuracy low validation","preventing model from overlearning","model captures noise not patterns","over fit","overfitting in machine learning","model too complex for data","overfitted model","why is my model failing validation","avoiding model memorization","فرط الملاءمة في النماذج","النموذج يحفظ بيانات التدريب","مشكلة الإفراط في التعلم","أوفرفيتينج في التعلم الآلي","النموذج لا يعمل على بيانات جديدة","دقة عالية في التدريب وضعف في الاختبار","تجنب حفظ بيانات التدريب","لماذا يفشل النموذج في الاختبار","الإفراط في مطابقة البيانات","مشاكل تدريب النماذج الذكية"]
---

## Definition

A modeling error that occurs when a machine learning model learns the training data too well, including its noise and outliers, causing it to perform poorly on new, unseen data.

## Where you hear it

In machine learning pipeline discussions, model training evaluations, and data science code reviews.

## Examples

- The model shows high accuracy on the training set, but its performance drops significantly during testing due to overfitting.
- We need to add regularization techniques to prevent the neural network from overfitting.

## Common mistake

Believing that achieving a near-zero error rate on training data means the model is ready for production.

## Don't confuse with

Overfitting vs. underfitting: Overfitting occurs when a model captures noise instead of patterns, whereas underfitting happens when a model is too simple to capture the underlying structure of the data.

## Say it at work

- I think the model is overfitting because the training loss is extremely low but the validation accuracy is stalling.
- Please review the training logs, as the current metrics suggest the model is overfitting on the training set.

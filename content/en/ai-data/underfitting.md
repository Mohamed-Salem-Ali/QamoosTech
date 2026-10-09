---
id: underfitting
category: ai-data
level: intermediate
related: [overfitting, training-data, gradient-descent]
aliases: ["high bias", "bias and variance"]
term: "Underfitting"
pronunciation: "UN-der-FIT-ing"
keywords: ["model too simple", "poor on training data too", "high bias", "not learning the pattern", "more features or capacity", "train longer", "نموذج بسيط جداً", "ضعيف حتى على بيانات التدريب", "انحياز مرتفع", "لا يتعلم النمط", "ميزات أو سعة أكبر", "درّب لفترة أطول"]
---

## Definition

Underfitting means a model is too simple or too lightly trained to capture the pattern in the data, so it performs badly even on the training data.

## Where you hear it

In ML model evaluation, bias/variance discussions and training-curve reviews.

## Examples

- Both training and validation scores are low, so the model is underfitting.
- Try a bigger model or more informative features.
- A straight line cannot follow the curve in the data, so the model underfits.

## Common mistake

Adding more data to fix it. More data helps overfitting; underfitting usually needs a more capable model.

## Don't confuse with

Overfitting, where the model does great on training data but poorly on new data.

## Say it at work

- It's underfitting; the training loss is still high.
- Increase the model capacity.

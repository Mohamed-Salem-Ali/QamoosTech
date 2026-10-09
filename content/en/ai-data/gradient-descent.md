---
id: gradient-descent
category: ai-data
level: intermediate
related: [backpropagation, training-data, overfitting]
aliases: ["sgd", "learning rate", "optimizer", "loss function"]
term: "Gradient Descent"
pronunciation: "GRAY-dee-ent dih-SENT"
keywords: ["minimize the loss step by step", "learning rate", "follow the slope downhill", "optimizer", "sgd adam", "training a model", "تقليل الخطأ خطوة بخطوة", "معدل التعلم", "اتبع المنحدر نزولاً", "المُحسِّن", "‏SGD وAdam", "تدريب نموذج"]
---

## Definition

Gradient descent is the method most machine-learning models use to learn: it repeatedly adjusts the parameters a little in the direction that reduces the error (the loss), like walking downhill.

## Where you hear it

In ML courses, training logs (loss going down), optimizer settings and fine-tuning guides.

## Examples

- Gradient descent updates the weights using the gradient of the loss.
- A learning rate that is too large makes the loss bounce around.
- Each step moves the weights a small amount against the gradient, so the loss goes down.

## Common mistake

Choosing a learning rate by guesswork. Too high diverges, too low takes forever; tune it.

## Don't confuse with

Backpropagation, which computes the gradients. Gradient descent uses them to update the model.

## Say it at work

- What optimizer and learning rate are we using?
- The loss stopped decreasing.

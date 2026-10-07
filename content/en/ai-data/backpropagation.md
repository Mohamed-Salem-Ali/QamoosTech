---
id: backpropagation
category: ai-data
level: intermediate
related: [gradient-descent, activation-function, training-data]
aliases: ["backprop", "backward pass"]
term: "Backpropagation"
pronunciation: "BAK-prop-uh-GAY-shun"
keywords: ["compute gradients backwards", "how neural networks learn", "chain rule", "error flows back through layers", "update every weight", "training step", "حساب التدرجات للخلف", "كيف تتعلم الشبكات العصبية", "قاعدة السلسلة", "الخطأ يعود عبر الطبقات", "تحديث كل وزن", "خطوة التدريب"]
---

## Definition

Backpropagation is the algorithm that works out how much each weight in a neural network contributed to the error, by sending the error backwards through the layers, so gradient descent can adjust the weights.

## Where you hear it

In deep learning courses, framework docs (`loss.backward()`) and explanations of how training works.

## Examples

- PyTorch computes the gradients when you call `loss.backward()`.
- Each training step is a forward pass, backpropagation, then a weight update.

## Common mistake

Thinking backpropagation is the learning itself. It only computes gradients; the optimizer does the update.

## Don't confuse with

Inference, the forward-only use of a trained model to make predictions.

## Say it at work

- Zero the gradients before the next backward pass.
- Backprop is the expensive part of training.

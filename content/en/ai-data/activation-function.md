---
id: activation-function
category: ai-data
level: intermediate
related: [backpropagation, gradient-descent, training-data]
aliases: ["relu", "softmax", "sigmoid"]
term: "Activation Function"
pronunciation: "AK-tih-VAY-shun FUNK-shun"
keywords: ["adds non linearity", "relu sigmoid softmax", "decides neuron output", "between layers", "without it a network is just linear", "squash values", "تضيف اللاخطية", "‏ReLU وsigmoid وsoftmax", "تقرر مخرج العصبون", "بين الطبقات", "بدونها الشبكة خطية فقط", "ضغط القيم"]
---

## Definition

An activation function is a small function applied to each neuron's output in a neural network, such as ReLU or softmax. It adds non-linearity, which lets the network learn complex patterns instead of just straight-line relationships.

## Where you hear it

In neural network code and courses, model architecture descriptions and debugging dead neurons.

## Examples

- ReLU is the usual activation between hidden layers.
- Softmax turns the final scores into probabilities.

## Common mistake

Stacking layers with no activation. They collapse into a single linear layer and learn nothing extra.

## Don't confuse with

A loss function, which measures the error at the end. Activations act inside the network.

## Say it at work

- Which activation do you use here?
- Swap ReLU for GELU and compare.

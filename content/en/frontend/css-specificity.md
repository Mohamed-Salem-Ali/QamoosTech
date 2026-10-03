---
id: css-specificity
category: frontend
level: beginner
related: []
term: "CSS Specificity"
pronunciation: "SEE-ESS spess-ih-FISS-ih-tee"
---

## Definition

CSS Specificity is the algorithm browsers use to determine which CSS rule applies to an element when multiple rules target the same selector. It acts as a ranking system based on the types of selectors used, such as IDs, classes, or tags.

## Where you hear it

During UI debugging, when writing custom styles, or when trying to override existing framework styles.

## Examples

- The ID selector has higher specificity than the class selector.
- I had to increase the specificity of my rule to override the default library style.

## Common mistake

Assuming that the order of the CSS file is the only thing that matters, ignoring that a more specific selector will always win regardless of its position in the file.

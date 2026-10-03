---
id: css-specificity
category: frontend
level: beginner
related: []
term: "CSS Specificity"
pronunciation: "SEE-ESS spess-ih-FISS-ih-tee"
keywords: ["css selector priority order","override existing framework styles","why is my css not applying","css weights and selectors","element selector ranking algorithm","fix overridden css rules","css specificity vs cascade","make css rule more specific","css specificity calculation","ترتيب أولوية محددات سي إس إس","حل مشكلة عدم تطبيق التنسيقات","تجاوز تنسيقات ملفات سي إس إس","أولوية الكلاسات والآي دي في سي إس إس","لماذا لا يعمل كود السي إس إس","حساب وزن المحددات في سي إس إس","الفرق بين الأولوية والتسلسل في سي إس إس","توليف أولوية تنسيقات الويب"]
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

## Don't confuse with

CSS Specificity is often confused with the CSS Cascade; while specificity determines which rule has higher priority based on selector weight, the cascade determines the final style by considering source order, specificity, and inheritance.

## Say it at work

- I'm struggling to override this button color because of a specificity issue with the parent container's selector.
- Please check the CSS specificity of your new rules, as they are currently being overridden by the base styles.

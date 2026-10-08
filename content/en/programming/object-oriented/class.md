---
id: class
category: programming
subcategory: object-oriented
level: beginner
related: [object, inheritance, interface, dataclass]
term: "Class"
pronunciation: "KLAS"
keywords: ["blueprint for creating objects","object oriented programming blueprint","define data and behavior template","klas","kelas","create new object blueprint","code template for objects","group data and methods together","java python typescript class","مخطط لإنشاء الكائنات","قالب البرمجة كائنية التوجه","كلاس","تعريف الكائنات في البرمجة","مخطط البيانات والسلوك","إنشاء كلاس جديد","هيكل الكائن البرمجي"]
---
## Definition

A blueprint that groups data and the functions that work on that data. Each object created from a class holds its own copy of the data.

## Where you hear it

Object-oriented programming in Java, Python, TypeScript, and C#.

## Examples

- Create a `Invoice` class with a `calculateTotal` method.
- This class is doing too much. Let's split it.
- The Invoice class has a method that calculates the total from its items.

## Common mistake

Putting everything in one giant class. Small classes with one responsibility are easier to test.

## Don't confuse with

Class defines the blueprint and structure for creating objects, while an object is the actual instance of that class living in memory.

## Say it at work

- Let's create a new class for the payment processing logic to keep things modular.
- Please ensure this class handles only single-responsibility tasks before we merge the pull request.

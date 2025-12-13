import { ContentSection } from '@/types/module';

export const jsIntroSections: ContentSection[] = [
  {
    heading: "What is JavaScript?",
    content: `JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications.

## Key Features

- **Dynamic Typing**: Variables can hold values of any type
- **First-Class Functions**: Functions are treated as values
- **Prototype-Based OOP**: Objects can inherit from other objects
- **Event-Driven**: Responds to user interactions and other events`,
    codeExample: `// JavaScript basics
console.log("Hello, World!");

// Variables
let name = "Prathap";
const age = 25;
var city = "Jaipur";

// Functions
function greet(person) {
  return \`Hello, \${person}!\`;
}

console.log(greet(name)); // Hello, Prathap!`
  },
  {
    heading: "Data Types",
    content: `JavaScript has several primitive data types and one complex type:

| Type | Description | Example |
|------|-------------|---------|
| String | Text data | "Hello" |
| Number | Numeric data | 42, 3.14 |
| Boolean | true/false | true |
| Undefined | Uninitialized | undefined |
| Null | Intentional absence | null |
| Symbol | Unique identifier | Symbol() |
| BigInt | Large integers | 9007199254740991n |
| Object | Complex data | { key: value } |`,
    codeExample: `// Primitive types
const str = "Hello";           // String
const num = 42;                // Number
const bool = true;             // Boolean
const undef = undefined;       // Undefined
const nul = null;              // Null
const sym = Symbol("id");      // Symbol
const bigInt = 9007199254740991n; // BigInt

// Object type
const obj = {
  name: "JavaScript",
  year: 1995
};

// Type checking
console.log(typeof str);    // "string"
console.log(typeof num);    // "number"
console.log(typeof bool);   // "boolean"`
  }
];

export const variablesSections: ContentSection[] = [
  {
    heading: "Variables in JavaScript",
    content: `JavaScript provides three ways to declare variables:

- **let**: Block-scoped, can be reassigned
- **const**: Block-scoped, cannot be reassigned
- **var**: Function-scoped, can be reassigned (legacy)

## Best Practices

1. Use **const** by default
2. Use **let** when you need to reassign
3. Avoid **var** in modern JavaScript`,
    codeExample: `// const - cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error!

// let - can be reassigned
let count = 0;
count = count + 1; // OK

// var - function scoped (avoid)
var oldWay = "legacy";

// Block scope demonstration
if (true) {
  let blockScoped = "only here";
  const alsoBlockScoped = "only here too";
  var functionScoped = "escapes block";
}

// console.log(blockScoped); // Error!
console.log(functionScoped); // "escapes block"`
  }
];

export const functionsSections: ContentSection[] = [
  {
    heading: "Functions in JavaScript",
    content: `Functions are first-class citizens in JavaScript, meaning they can be:
- Assigned to variables
- Passed as arguments
- Returned from other functions

## Function Types

1. **Function Declaration**: Hoisted, named
2. **Function Expression**: Not hoisted
3. **Arrow Function**: Concise syntax, lexical this`,
    codeExample: `// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function(a, b) {
  return a - b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Arrow Function with body
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

// Higher-order function
const calculate = (operation, a, b) => operation(a, b);

console.log(calculate(add, 5, 3));      // 8
console.log(calculate(multiply, 4, 2)); // 8`
  },
  {
    heading: "Closures",
    content: `A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.

Closures are commonly used for:
- Data privacy
- Function factories
- Maintaining state`,
    codeExample: `// Closure example - counter
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1

// count is not accessible directly
// console.log(count); // Error!`
  }
];

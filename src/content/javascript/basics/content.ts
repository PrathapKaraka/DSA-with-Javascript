import { ContentSection } from '@/types/module';

export const jsIntroSections: ContentSection[] = [
  {
    content: `
# Introduction to JavaScript

JavaScript is a high-level, interpreted programming language that powers the interactive web. It's one of the core technologies alongside HTML and CSS.

## Why Learn JavaScript?

- **Universal**: Runs in browsers, servers (Node.js), mobile apps, and IoT
- **In-demand**: Most popular programming language for web development
- **Versatile**: Frontend, backend, mobile, desktop applications
- **Large Ecosystem**: npm has millions of packages
`
  },
  {
    heading: 'How JavaScript Works',
    content: `
JavaScript is executed by a JavaScript engine:
- **V8**: Chrome, Node.js
- **SpiderMonkey**: Firefox
- **JavaScriptCore**: Safari

The engine parses, compiles (JIT), and executes your code.
`,
    codeExample: `// Your first JavaScript program
console.log("Hello, World!");

// JavaScript can run in browser console
// or in Node.js environment

// Variables
let message = "Welcome to JavaScript!";
console.log(message);

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Developer")); // Hello, Developer!`
  },
  {
    heading: 'JavaScript vs ECMAScript',
    content: `
**ECMAScript** is the specification, **JavaScript** is the implementation.

| Version | Year | Key Features |
|---------|------|--------------|
| ES5 | 2009 | strict mode, JSON, Array methods |
| ES6/ES2015 | 2015 | let/const, arrow functions, classes, promises |
| ES2016+ | 2016+ | async/await, spread operator, optional chaining |
`
  }
];

export const variablesSections: ContentSection[] = [
  {
    content: `
# Variables and Data Types

Variables are containers for storing data values. JavaScript provides three ways to declare variables.

## Variable Declaration

| Keyword | Scope | Reassignable | Hoisted |
|---------|-------|--------------|---------|
| var | Function | Yes | Yes (undefined) |
| let | Block | Yes | No (TDZ) |
| const | Block | No | No (TDZ) |
`
  },
  {
    heading: 'var, let, and const',
    content: `Understanding the differences is crucial for interviews.`,
    codeExample: `// var - function scoped, hoisted
console.log(x); // undefined (hoisted)
var x = 5;

// let - block scoped, temporal dead zone
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// const - block scoped, cannot reassign
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

// But const objects/arrays can be mutated
const user = { name: "John" };
user.name = "Jane"; // This works!
user.age = 25; // This also works!
// user = {}; // This fails!

// Block scope demonstration
if (true) {
  var a = 1;   // Function scoped - accessible outside
  let b = 2;   // Block scoped - not accessible outside
  const c = 3; // Block scoped - not accessible outside
}
console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError`
  },
  {
    heading: 'Primitive Data Types',
    content: `JavaScript has 7 primitive types (immutable).`,
    codeExample: `// 1. String
const str = "Hello";
const str2 = 'World';
const str3 = \`Template literal: \${str}\`;

// 2. Number (integers and floats)
const int = 42;
const float = 3.14;
const negative = -10;
const infinity = Infinity;
const notANumber = NaN;

// 3. Boolean
const isTrue = true;
const isFalse = false;

// 4. Undefined - declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// 5. Null - intentional absence of value
const empty = null;

// 6. Symbol - unique identifier (ES6)
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (always unique)

// 7. BigInt - large integers (ES2020)
const bigNumber = 9007199254740991n;
const anotherBig = BigInt("9007199254740991");`
  },
  {
    heading: 'Type Checking and Coercion',
    content: `JavaScript is dynamically typed - types are determined at runtime.`,
    codeExample: `// typeof operator
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (historical bug!)
console.log(typeof Symbol());   // "symbol"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are objects)
console.log(typeof function(){}); // "function"

// Type Coercion - Implicit
console.log("5" + 3);      // "53" (number to string)
console.log("5" - 3);      // 2 (string to number)
console.log("5" * "2");    // 10
console.log(true + 1);     // 2 (true becomes 1)
console.log(false + 1);    // 1 (false becomes 0)

// Explicit Type Conversion
console.log(Number("42"));     // 42
console.log(String(42));       // "42"
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14`
  },
  {
    heading: 'Interview Question: Truthy & Falsy',
    content: `
**Falsy values** (evaluate to false):
- \`false\`, \`0\`, \`-0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`

**Everything else is truthy**, including:
- \`"0"\`, \`"false"\`, \`[]\`, \`{}\`, \`function(){}\`
`,
    codeExample: `// Common interview question
console.log(Boolean([]));     // true (empty array is truthy!)
console.log(Boolean({}));     // true (empty object is truthy!)
console.log(Boolean("0"));    // true (non-empty string)
console.log(Boolean(" "));    // true (space is a character)

// Practical usage
const name = "";
if (name) {
  console.log("Has name");
} else {
  console.log("No name"); // This runs
}

// Nullish coalescing (??) vs OR (||)
const value1 = 0 || "default";  // "default" (0 is falsy)
const value2 = 0 ?? "default";  // 0 (only null/undefined trigger ??)

const value3 = "" || "default"; // "default"
const value4 = "" ?? "default"; // "" (empty string, not null/undefined)`
  }
];

export const operatorsSections: ContentSection[] = [
  {
    content: `
# Operators in JavaScript

Operators perform operations on values and variables.

## Types of Operators

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Special Operators
`
  },
  {
    heading: 'Arithmetic & Assignment',
    content: `Basic mathematical and assignment operations.`,
    codeExample: `// Arithmetic Operators
console.log(10 + 5);  // 15 - Addition
console.log(10 - 5);  // 5 - Subtraction
console.log(10 * 5);  // 50 - Multiplication
console.log(10 / 5);  // 2 - Division
console.log(10 % 3);  // 1 - Modulus (remainder)
console.log(2 ** 3);  // 8 - Exponentiation (ES2016)

// Increment/Decrement
let a = 5;
console.log(a++); // 5 (post-increment, returns then increments)
console.log(a);   // 6
console.log(++a); // 7 (pre-increment, increments then returns)

let b = 5;
console.log(b--); // 5
console.log(--b); // 3

// Assignment Operators
let x = 10;
x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 4;  // x = x % 4 = 2
x **= 3; // x = x ** 3 = 8`
  },
  {
    heading: 'Comparison Operators',
    content: `Understanding == vs === is critical for interviews.`,
    codeExample: `// Loose Equality (==) - performs type coercion
console.log(5 == "5");     // true
console.log(0 == false);   // true
console.log(null == undefined); // true
console.log("" == false);  // true

// Strict Equality (===) - no type coercion
console.log(5 === "5");    // false
console.log(0 === false);  // false
console.log(null === undefined); // false

// Always prefer === in production code!

// Other comparison operators
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false
console.log(5 !== 3); // true

// String comparison (lexicographic)
console.log("apple" < "banana"); // true
console.log("a" < "b");          // true
console.log("2" > "10");         // true (compares "2" with "1")

// Interview gotcha
console.log(NaN === NaN);  // false (NaN is not equal to anything)
console.log(Number.isNaN(NaN)); // true (proper way to check)`
  },
  {
    heading: 'Logical Operators',
    content: `Logical operators with short-circuit evaluation.`,
    codeExample: `// AND (&&) - returns first falsy or last value
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false (short-circuits)
console.log("hello" && "world"); // "world"
console.log(0 && "hello");   // 0

// OR (||) - returns first truthy or last value
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
console.log("" || "default"); // "default"
console.log("hello" || "default"); // "hello"

// NOT (!)
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true
console.log(!"");     // true
console.log(!!"hello"); // true (double NOT for boolean conversion)

// Nullish Coalescing (??) - ES2020
const a = null ?? "default";     // "default"
const b = undefined ?? "default"; // "default"
const c = 0 ?? "default";        // 0 (0 is not null/undefined)
const d = "" ?? "default";       // "" (empty string is not null/undefined)

// Optional Chaining (?.) - ES2020
const user = { name: "John", address: { city: "NYC" } };
console.log(user?.address?.city);    // "NYC"
console.log(user?.contact?.phone);   // undefined (no error)
console.log(user.contact?.phone);    // undefined
// console.log(user.contact.phone);  // TypeError!`
  },
  {
    heading: 'Ternary & Spread Operators',
    content: `Conditional and spread/rest operators.`,
    codeExample: `// Ternary Operator
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested ternary (avoid for readability)
const score = 85;
const grade = score >= 90 ? "A" 
            : score >= 80 ? "B" 
            : score >= 70 ? "C" 
            : "F";
console.log(grade); // "B"

// Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Destructuring with rest
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }`
  }
];

export const functionsSections: ContentSection[] = [
  {
    content: `
# Functions in JavaScript

Functions are first-class citizens - they can be assigned to variables, passed as arguments, and returned from other functions.

## Function Types

1. Function Declaration
2. Function Expression
3. Arrow Functions
4. IIFE (Immediately Invoked Function Expression)
5. Generator Functions
`
  },
  {
    heading: 'Function Declaration vs Expression',
    content: `Key difference: hoisting behavior.`,
    codeExample: `// Function Declaration - hoisted
console.log(add(2, 3)); // 5 (works due to hoisting)

function add(a, b) {
  return a + b;
}

// Function Expression - not hoisted
// console.log(subtract(5, 3)); // TypeError: subtract is not a function

const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(5, 3)); // 2

// Named Function Expression (useful for recursion/debugging)
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // 120

// Default Parameters (ES6)
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}
console.log(greet());           // "Hello, Guest!"
console.log(greet("John"));     // "Hello, John!"
console.log(greet("John", "Hi")); // "Hi, John!"`
  },
  {
    heading: 'Arrow Functions',
    content: `
Concise syntax with lexical \`this\` binding.

**Key Differences from Regular Functions:**
- No own \`this\` (inherits from enclosing scope)
- No \`arguments\` object
- Cannot be used as constructors
- No \`prototype\` property
`,
    codeExample: `// Arrow Function Syntax
const add = (a, b) => a + b;
const square = x => x * x; // Single param: no parentheses needed
const greet = () => "Hello!"; // No params: empty parentheses

// Multi-line arrow function
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};

console.log(calculate(3, 4)); // { sum: 7, product: 12 }

// Returning object literal (wrap in parentheses)
const makeUser = (name, age) => ({ name, age });
console.log(makeUser("John", 25)); // { name: "John", age: 25 }

// 'this' behavior difference
const obj = {
  name: "Object",
  regularFunc: function() {
    console.log(this.name); // "Object"
  },
  arrowFunc: () => {
    console.log(this.name); // undefined (inherits from outer scope)
  },
  delayedGreet: function() {
    // Arrow function preserves 'this' from enclosing scope
    setTimeout(() => {
      console.log(this.name); // "Object"
    }, 100);
  }
};

obj.regularFunc();
obj.arrowFunc();`
  },
  {
    heading: 'IIFE and Closures',
    content: `Immediately Invoked Function Expressions and closures for data privacy.`,
    codeExample: `// IIFE - Immediately Invoked Function Expression
(function() {
  const privateVar = "I'm private";
  console.log(privateVar);
})();
// console.log(privateVar); // ReferenceError

// IIFE with arrow function
(() => {
  console.log("Arrow IIFE");
})();

// IIFE with parameters
const result = ((a, b) => a + b)(5, 3);
console.log(result); // 8

// Closures - function remembers its lexical scope
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
// console.log(count); // ReferenceError - count is private

// Closure Interview Question
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // 4, 4, 4 (var is function-scoped)
}

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log(j), 100); // 1, 2, 3 (let is block-scoped)
}`
  },
  {
    heading: 'Higher-Order Functions',
    content: `Functions that take functions as arguments or return functions.`,
    codeExample: `// Function as argument (callback)
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// Function returning function (currying)
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Arrow function currying
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6

// Partial application
const greet = (greeting, name) => \`\${greeting}, \${name}!\`;
const sayHello = greet.bind(null, "Hello");
console.log(sayHello("John")); // "Hello, John!"

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const double2 = x => x * 2;
const square2 = x => x * x;

const compute = compose(square2, double2, addOne);
console.log(compute(3)); // ((3 + 1) * 2)² = 64`
  },
  {
    heading: 'call, apply, and bind',
    content: `Methods to control \`this\` context - very common in interviews.`,
    codeExample: `const person = {
  name: "John",
  greet: function(greeting, punctuation) {
    return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
  }
};

const anotherPerson = { name: "Jane" };

// call - invokes immediately with arguments
console.log(person.greet.call(anotherPerson, "Hi", "!"));
// "Hi, I'm Jane!"

// apply - invokes immediately with arguments as array
console.log(person.greet.apply(anotherPerson, ["Hello", "?"]));
// "Hello, I'm Jane?"

// bind - returns new function with bound 'this'
const janeGreet = person.greet.bind(anotherPerson);
console.log(janeGreet("Hey", ".")); // "Hey, I'm Jane."

// bind with preset arguments (partial application)
const janeHello = person.greet.bind(anotherPerson, "Hello");
console.log(janeHello("!")); // "Hello, I'm Jane!"

// Practical example: borrowing methods
const numbers = { 0: 1, 1: 2, 2: 3, length: 3 };
const arr = Array.prototype.slice.call(numbers);
console.log(arr); // [1, 2, 3]

// Interview: Implement bind polyfill
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};`
  }
];

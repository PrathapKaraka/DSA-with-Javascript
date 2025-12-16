import { ContentSection } from '@/types/module';

export const introductionSections: ContentSection[] = [
  {
    heading: 'What is JavaScript?',
    content: `JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's one of the core technologies of the World Wide Web, alongside HTML and CSS.

**Key Characteristics:**
- **Dynamic typing**: Variables can hold any type of data
- **First-class functions**: Functions are treated as values
- **Prototype-based**: Objects can inherit from other objects
- **Single-threaded**: Uses an event loop for async operations
- **Multi-paradigm**: Supports OOP, functional, and event-driven programming`,
    codeExample: `// JavaScript can run in browsers and servers (Node.js)
console.log("Hello, JavaScript!");

// Dynamic typing
let value = 42;        // number
value = "hello";       // now a string
value = true;          // now a boolean

// First-class functions
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

const sayHello = greet;
console.log(sayHello("World")); // "Hello, World!"`
  },
  {
    heading: 'JavaScript Engine & Runtime',
    content: `**JavaScript Engine**: Parses and executes JavaScript code
- V8 (Chrome, Node.js)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)

**Runtime Environment**: Provides additional APIs
- Browser: DOM, Web APIs, fetch
- Node.js: File system, HTTP, OS access`,
    codeExample: `// Browser environment
console.log(window);           // Global object in browser
console.log(document);         // DOM access

// Node.js environment
// console.log(global);        // Global object in Node.js
// console.log(process);       // Process information

// Both environments
console.log(typeof globalThis); // "object" - universal global`
  }
];

export const variablesSections: ContentSection[] = [
  {
    heading: 'Variable Declarations: var, let, const',
    content: `JavaScript has three ways to declare variables:

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Reassignment | Yes | Yes | No |
| Redeclaration | Yes | No | No |

**TDZ (Temporal Dead Zone)**: The period between entering scope and declaration where accessing the variable throws an error.`,
    codeExample: `// var - function scoped, hoisted
console.log(x); // undefined (hoisted)
var x = 10;

function varExample() {
  var a = 1;
  if (true) {
    var a = 2; // Same variable!
    console.log(a); // 2
  }
  console.log(a); // 2
}

// let - block scoped
function letExample() {
  let b = 1;
  if (true) {
    let b = 2; // Different variable
    console.log(b); // 2
  }
  console.log(b); // 1
}

// const - block scoped, cannot reassign
const PI = 3.14159;
// PI = 3.14; // TypeError!

// But objects/arrays can be mutated
const user = { name: 'John' };
user.name = 'Jane'; // OK
// user = {}; // TypeError!

const arr = [1, 2, 3];
arr.push(4); // OK
// arr = []; // TypeError!`
  },
  {
    heading: 'Data Types',
    content: `JavaScript has 8 data types:

**Primitive Types (7):**
1. \`number\` - integers and floats (64-bit)
2. \`string\` - text data
3. \`boolean\` - true/false
4. \`undefined\` - uninitialized variable
5. \`null\` - intentional absence of value
6. \`symbol\` - unique identifier (ES6)
7. \`bigint\` - large integers (ES2020)

**Reference Type (1):**
8. \`object\` - collections of properties (includes arrays, functions, dates)`,
    codeExample: `// Primitive types
const num = 42;
const float = 3.14;
const str = "Hello";
const bool = true;
let undef;
const nul = null;
const sym = Symbol('id');
const big = 9007199254740991n;

// Type checking
console.log(typeof num);       // "number"
console.log(typeof str);       // "string"
console.log(typeof bool);      // "boolean"
console.log(typeof undef);     // "undefined"
console.log(typeof nul);       // "object" (historical bug!)
console.log(typeof sym);       // "symbol"
console.log(typeof big);       // "bigint"

// Reference types
const obj = { name: 'John' };
const arr = [1, 2, 3];
const fn = function() {};

console.log(typeof obj);       // "object"
console.log(typeof arr);       // "object"
console.log(typeof fn);        // "function"

// Better type checking
console.log(Array.isArray(arr));           // true
console.log(obj === null);                 // false
console.log(Object.prototype.toString.call(arr)); // "[object Array]"`
  },
  {
    heading: 'Type Coercion',
    content: `JavaScript automatically converts types in certain contexts. Understanding coercion is crucial for interviews.

**Implicit Coercion**: Automatic conversion by JavaScript
**Explicit Coercion**: Manual conversion using constructors or methods`,
    codeExample: `// String coercion
console.log("5" + 3);        // "53" (number to string)
console.log("5" + true);     // "5true"
console.log("5" + null);     // "5null"
console.log("5" + undefined); // "5undefined"

// Number coercion
console.log("5" - 3);        // 2 (string to number)
console.log("5" * "2");      // 10
console.log("5" / "2");      // 2.5
console.log(+"5");           // 5 (unary plus)
console.log(+true);          // 1
console.log(+false);         // 0
console.log(+null);          // 0
console.log(+undefined);     // NaN

// Boolean coercion (Falsy values)
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(false));     // false

// Everything else is truthy
console.log(Boolean("0"));       // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

// Equality coercion
console.log(5 == "5");       // true (type coercion)
console.log(5 === "5");      // false (strict equality)
console.log(null == undefined); // true
console.log(null === undefined); // false`
  }
];

export const operatorsSections: ContentSection[] = [
  {
    heading: 'Operators Overview',
    content: `JavaScript operators perform operations on values and variables.

**Categories:**
- Arithmetic: \`+ - * / % **\`
- Assignment: \`= += -= *= /= %=\`
- Comparison: \`== === != !== > < >= <=\`
- Logical: \`&& || ! ??\`
- Bitwise: \`& | ^ ~ << >> >>>\`
- Ternary: \`? :\`
- Type: \`typeof instanceof\``,
    codeExample: `// Arithmetic operators
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1 (remainder)
console.log(10 ** 3);  // 1000 (exponentiation)

// Increment/Decrement
let a = 5;
console.log(a++);  // 5 (post-increment)
console.log(a);    // 6
console.log(++a);  // 7 (pre-increment)

// Assignment operators
let b = 10;
b += 5;  // b = b + 5 = 15
b -= 3;  // b = b - 3 = 12
b *= 2;  // b = b * 2 = 24
b /= 4;  // b = b / 4 = 6
b %= 4;  // b = b % 4 = 2
b **= 3; // b = b ** 3 = 8`
  },
  {
    heading: 'Comparison & Logical Operators',
    content: `Understanding the difference between \`==\` and \`===\` is a common interview question.

**\`==\` (Abstract Equality)**: Compares with type coercion
**\`===\` (Strict Equality)**: Compares without type coercion

**Logical Operators** return the value that determined the result, not just true/false.`,
    codeExample: `// Comparison operators
console.log(5 == "5");    // true (coerced)
console.log(5 === "5");   // false (strict)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

// Object comparison (by reference)
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;
console.log(obj1 == obj2);  // false
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true

// Logical AND (&&) - returns first falsy or last value
console.log(true && "hello");   // "hello"
console.log(false && "hello");  // false
console.log("a" && "b" && "c"); // "c"
console.log("a" && 0 && "c");   // 0

// Logical OR (||) - returns first truthy or last value
console.log(false || "hello");  // "hello"
console.log("" || "default");   // "default"
console.log("a" || "b");        // "a"
console.log(0 || "" || null);   // null

// Nullish coalescing (??) - only checks null/undefined
console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");    // 0 (0 is not nullish)
console.log("" ?? "default");   // "" (empty string is not nullish)

// Short-circuit evaluation
const user = null;
const name = user && user.name; // null (doesn't error)
const displayName = name || "Guest"; // "Guest"`
  },
  {
    heading: 'Optional Chaining & Spread/Rest',
    content: `Modern JavaScript operators that are frequently asked about in interviews.

**Optional Chaining (\`?.\`)**: Safely access nested properties
**Spread (\`...\`)**: Expand iterables
**Rest (\`...\`)**: Collect remaining elements`,
    codeExample: `// Optional chaining
const user = {
  name: 'John',
  address: {
    city: 'New York'
  }
};

console.log(user?.name);           // "John"
console.log(user?.address?.city);  // "New York"
console.log(user?.phone?.number);  // undefined (no error)

// Optional chaining with methods
const obj = {
  greet: () => "Hello"
};
console.log(obj.greet?.());       // "Hello"
console.log(obj.farewell?.());    // undefined

// Optional chaining with arrays
const arr = [1, 2, 3];
console.log(arr?.[0]);            // 1
console.log(arr?.[10]);           // undefined

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Shallow copy
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.nested.b = 999; // Also changes original!

// Rest operator
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }`
  }
];

export const functionsSections: ContentSection[] = [
  {
    heading: 'Function Declarations & Expressions',
    content: `Functions are first-class citizens in JavaScript - they can be assigned to variables, passed as arguments, and returned from other functions.

**Function Declaration**: Hoisted, available before definition
**Function Expression**: Not hoisted, available after definition
**Arrow Function**: Concise syntax, no own \`this\``,
    codeExample: `// Function Declaration (hoisted)
console.log(greet("World")); // Works!
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression (not hoisted)
// console.log(add(2, 3)); // Error!
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

// Named Function Expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

// Arrow Functions
const multiply = (a, b) => a * b;
const square = x => x * x;  // Single param, no parens needed
const getObject = () => ({ key: 'value' }); // Return object

// Arrow functions and 'this'
const obj = {
  name: 'Object',
  regularFn: function() {
    console.log(this.name); // "Object"
  },
  arrowFn: () => {
    console.log(this.name); // undefined (lexical this)
  }
};

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log('Executed immediately!');
})();

// Modern IIFE with arrow
(() => {
  console.log('Arrow IIFE!');
})();`
  },
  {
    heading: 'Parameters & Arguments',
    content: `JavaScript functions have flexible parameter handling with default values, rest parameters, and the arguments object.`,
    codeExample: `// Default parameters
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}
console.log(greet());              // "Hello, Guest!"
console.log(greet('John'));        // "Hello, John!"
console.log(greet('John', 'Hi'));  // "Hi, John!"

// Default with expression
function getDate(date = new Date()) {
  return date.toISOString();
}

// Rest parameters (must be last)
function sum(first, ...rest) {
  return rest.reduce((acc, val) => acc + val, first);
}
console.log(sum(1, 2, 3, 4)); // 10

// Arguments object (not in arrow functions)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(oldSum(1, 2, 3, 4)); // 10

// Destructuring parameters
function printUser({ name, age, city = 'Unknown' }) {
  console.log(\`\${name}, \${age}, from \${city}\`);
}
printUser({ name: 'John', age: 30 });

// Array destructuring in params
function getFirstTwo([first, second]) {
  return [first, second];
}
console.log(getFirstTwo([1, 2, 3, 4])); // [1, 2]`
  },
  {
    heading: 'Higher-Order Functions',
    content: `Higher-order functions either take functions as arguments or return functions. They're fundamental to functional programming in JavaScript.`,
    codeExample: `// Function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15

// Function returning function (closure)
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Practical examples
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling with: \${args}\`);
    const result = fn(...args);
    console.log(\`Result: \${result}\`);
    return result;
  };
}

const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs call and result

// Function composition
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const double2 = x => x * 2;
const square2 = x => x * x;

const composed = compose(square2, double2, addOne);
console.log(composed(3)); // ((3 + 1) * 2)² = 64`
  },
  {
    heading: 'Closures (Interview Essential)',
    content: `A closure is a function that has access to variables from its outer scope even after the outer function has returned. This is one of the most important concepts in JavaScript interviews.`,
    codeExample: `// Basic closure
function outer() {
  const message = "Hello from outer!";
  
  function inner() {
    console.log(message); // Access outer variable
  }
  
  return inner;
}

const myFunc = outer();
myFunc(); // "Hello from outer!" - closure preserves access

// Practical: Counter
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// Classic interview question: Loop + Closure
// Problem: All print 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 100);
}

// Solution 1: Use let (block scope)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 100);
}

// Solution 2: IIFE
for (var k = 0; k < 3; k++) {
  (function(k) {
    setTimeout(() => console.log('IIFE:', k), 100);
  })(k);
}

// Solution 3: Closure factory
function createPrinter(value) {
  return function() {
    console.log('closure:', value);
  };
}

for (var m = 0; m < 3; m++) {
  setTimeout(createPrinter(m), 100);
}

// Private variables with closure
function createPerson(name) {
  let _age = 0; // Private
  
  return {
    getName: () => name,
    getAge: () => _age,
    setAge: (age) => {
      if (age > 0) _age = age;
    }
  };
}

const person = createPerson('John');
console.log(person.getName()); // "John"
person.setAge(30);
console.log(person.getAge()); // 30`
  }
];

export const controlFlowSections: ContentSection[] = [
  {
    heading: 'Conditional Statements',
    content: `Control flow statements determine the order of execution based on conditions.`,
    codeExample: `// if-else
const age = 20;

if (age < 13) {
  console.log('Child');
} else if (age < 20) {
  console.log('Teenager');
} else {
  console.log('Adult');
}

// Ternary operator
const status = age >= 18 ? 'Adult' : 'Minor';

// Nested ternary (use sparingly)
const category = 
  age < 13 ? 'Child' :
  age < 20 ? 'Teenager' :
  age < 60 ? 'Adult' : 'Senior';

// switch statement
const day = 'Monday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Weekday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend');
    break;
  default:
    console.log('Invalid day');
}

// Object lookup (alternative to switch)
const dayTypes = {
  Monday: 'Weekday',
  Tuesday: 'Weekday',
  Saturday: 'Weekend',
  Sunday: 'Weekend'
};
console.log(dayTypes[day] || 'Unknown');`
  },
  {
    heading: 'Loops',
    content: `JavaScript provides multiple ways to iterate over data structures.`,
    codeExample: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
  console.log(count++);
}

// do-while (runs at least once)
let num = 0;
do {
  console.log(num++);
} while (num < 3);

// for...in (object keys)
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(\`\${key}: \${obj[key]}\`);
}

// for...of (iterables)
const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item);
}

// for...of with index
for (const [index, value] of arr.entries()) {
  console.log(\`\${index}: \${value}\`);
}

// Loop control
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip iteration
  if (i === 7) break;    // Exit loop
  console.log(i);        // 0, 1, 2, 4, 5, 6
}

// Labeled statements
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}

// Array iteration methods (preferred)
arr.forEach((item, index) => console.log(index, item));
const doubled = arr.map(item => item + item);
const filtered = [1, 2, 3, 4].filter(n => n > 2);`
  }
];

import { ContentSection } from '@/types/module';

export const es6BasicsSections: ContentSection[] = [
  {
    content: `
# ES6+ Features

ECMAScript 2015 (ES6) and later versions introduced many powerful features.

## Key ES6 Features

- let/const
- Arrow functions
- Template literals
- Destructuring
- Spread/Rest operators
- Classes
- Modules
- Promises
- Symbols
- Iterators/Generators
`
  },
  {
    heading: 'Template Literals',
    content: `Multi-line strings and string interpolation.`,
    codeExample: `// Basic interpolation
const name = "John";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // "Hello, John!"

// Expressions in templates
const a = 5, b = 10;
console.log(\`Sum: \${a + b}\`); // "Sum: 15"
console.log(\`Result: \${a > b ? "a" : "b"} is larger\`);

// Multi-line strings
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Welcome back!</p>
  </div>
\`;

// Nested templates
const items = ["apple", "banana", "orange"];
const list = \`
  <ul>
    \${items.map(item => \`<li>\${item}</li>\`).join("")}
  </ul>
\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : "";
    return result + str + value;
  }, "");
}

const user = "John";
const action = "logged in";
console.log(highlight\`User \${user} has \${action}.\`);
// "User <mark>John</mark> has <mark>logged in</mark>."

// Raw strings
console.log(String.raw\`Hello\\nWorld\`); // "Hello\\nWorld" (no newline)`
  },
  {
    heading: 'Enhanced Object Literals',
    content: `Shorter syntax for object creation.`,
    codeExample: `const name = "John";
const age = 30;

// Property shorthand
const user = { name, age }; // { name: "John", age: 30 }

// Method shorthand
const obj = {
  greet() {  // Instead of greet: function() {}
    return "Hello";
  },
  // Async method
  async fetchData() {
    return await fetch("/api/data");
  },
  // Generator method
  *generateIds() {
    yield 1;
    yield 2;
  }
};

// Computed property names
const prop = "dynamic";
const computed = {
  [prop]: "value",
  [\`\${prop}Method\`]() {
    return "dynamic method";
  }
};
console.log(computed.dynamic);       // "value"
console.log(computed.dynamicMethod()); // "dynamic method"

// Getter and Setter
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(person.fullName); // "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName); // "Jane"`
  },
  {
    heading: 'Classes',
    content: `ES6 classes - syntactic sugar over prototypes.`,
    codeExample: `// Class declaration
class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance method
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
  
  // Getter
  get info() {
    return \`\${this.name}, \${this.age}\`;
  }
  
  // Static method
  static create(name, age) {
    return new Person(name, age);
  }
  
  // Static property
  static species = "Homo sapiens";
}

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"
console.log(Person.species); // "Homo sapiens"

// Inheritance
class Employee extends Person {
  constructor(name, age, role) {
    super(name, age); // Call parent constructor
    this.role = role;
  }
  
  greet() {
    return \`\${super.greet()}, I'm a \${this.role}\`;
  }
  
  work() {
    return \`\${this.name} is working\`;
  }
}

const emp = new Employee("Jane", 25, "Developer");
console.log(emp.greet()); // "Hello, I'm Jane, I'm a Developer"
console.log(emp instanceof Employee); // true
console.log(emp instanceof Person);   // true

// Private fields (ES2022)
class BankAccount {
  #balance = 0; // Private field
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); // SyntaxError`
  },
  {
    heading: 'Symbols',
    content: `Unique and immutable primitive values.`,
    codeExample: `// Creating symbols
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false (always unique)

// As object keys (hidden from iteration)
const id = Symbol("id");
const user = {
  name: "John",
  [id]: 12345
};

console.log(user[id]); // 12345
console.log(Object.keys(user)); // ["name"] (symbol not included)
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Global symbol registry
const globalSym = Symbol.for("global");
const sameSym = Symbol.for("global");
console.log(globalSym === sameSym); // true

console.log(Symbol.keyFor(globalSym)); // "global"

// Well-known symbols
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // [Function: values]

// Custom iterator
const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

console.log([...range]); // [1, 2, 3, 4, 5]

// Symbol.toStringTag
class MyClass {
  get [Symbol.toStringTag]() {
    return "MyClass";
  }
}
console.log(Object.prototype.toString.call(new MyClass()));
// "[object MyClass]"`
  },
  {
    heading: 'Iterators and Generators',
    content: `Custom iteration behavior.`,
    codeExample: `// Generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Spread with generator
console.log([...numberGenerator()]); // [1, 2, 3]

// Infinite generator
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const inf = infiniteSequence();
console.log(inf.next().value); // 0
console.log(inf.next().value); // 1
console.log(inf.next().value); // 2

// Passing values to generators
function* conversation() {
  const name = yield "What's your name?";
  const hobby = yield \`Hello \${name}! What's your hobby?\`;
  return \`Nice! \${name} likes \${hobby}\`;
}

const convo = conversation();
console.log(convo.next().value);        // "What's your name?"
console.log(convo.next("John").value);  // "Hello John! What's your hobby?"
console.log(convo.next("coding").value); // "Nice! John likes coding"

// Generator for pagination
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = paginate(items, 3);
console.log(pages.next().value); // [1, 2, 3]
console.log(pages.next().value); // [4, 5, 6]
console.log(pages.next().value); // [7, 8, 9]
console.log(pages.next().value); // [10]`
  }
];

export const modulesSections: ContentSection[] = [
  {
    content: `
# ES6 Modules

Organize code into reusable modules.

## Module Benefits

- Encapsulation
- Reusability
- Dependency management
- Clear interfaces
`
  },
  {
    heading: 'Export and Import',
    content: `Named and default exports.`,
    codeExample: `// math.js - Named exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// user.js - Default export
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// Also can have named exports alongside default
export const USER_ROLES = ["admin", "user", "guest"];

// main.js - Importing
import User, { USER_ROLES } from "./user.js";
import { add, multiply, PI } from "./math.js";

// Rename imports
import { add as sum } from "./math.js";

// Import all as namespace
import * as math from "./math.js";
console.log(math.add(1, 2));
console.log(math.PI);

// Dynamic import (code splitting)
async function loadModule() {
  const module = await import("./math.js");
  console.log(module.add(1, 2));
}

// Conditional import
const moduleName = condition ? "./moduleA.js" : "./moduleB.js";
const module = await import(moduleName);

// Re-exporting
// index.js
export { add, multiply } from "./math.js";
export { default as User } from "./user.js";
export * from "./utils.js"; // Re-export everything`
  },
  {
    heading: 'Module Patterns',
    content: `Common patterns for organizing modules.`,
    codeExample: `// Barrel exports (index.js)
// components/index.js
export { Button } from "./Button";
export { Input } from "./Input";
export { Modal } from "./Modal";

// Usage
import { Button, Input, Modal } from "./components";

// Singleton pattern with modules
// logger.js
class Logger {
  constructor() {
    this.logs = [];
  }
  
  log(message) {
    this.logs.push({ message, timestamp: new Date() });
    console.log(message);
  }
}

export default new Logger(); // Same instance everywhere

// Factory pattern
// userFactory.js
export function createUser(type) {
  switch (type) {
    case "admin":
      return new AdminUser();
    case "guest":
      return new GuestUser();
    default:
      return new RegularUser();
  }
}

// Configuration module
// config.js
const config = {
  apiUrl: process.env.API_URL || "http://localhost:3000",
  timeout: 5000,
  maxRetries: 3
};

export default Object.freeze(config); // Immutable config

// Plugin pattern
// plugins/index.js
const plugins = new Map();

export function registerPlugin(name, plugin) {
  plugins.set(name, plugin);
}

export function getPlugin(name) {
  return plugins.get(name);
}

export function executePlugin(name, ...args) {
  const plugin = plugins.get(name);
  if (plugin) {
    return plugin.execute(...args);
  }
  throw new Error(\`Plugin \${name} not found\`);
}`
  }
];

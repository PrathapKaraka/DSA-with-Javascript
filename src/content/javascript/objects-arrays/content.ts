import { ContentSection } from '@/types/module';

export const objectsSections: ContentSection[] = [
  {
    content: `
# Objects in JavaScript

Objects are collections of key-value pairs. They're the most fundamental data structure in JavaScript.

## Creating Objects

1. Object Literal
2. Constructor Function
3. Object.create()
4. ES6 Classes
`
  },
  {
    heading: 'Object Basics',
    content: `Creating and manipulating objects.`,
    codeExample: `// Object Literal
const person = {
  name: "John",
  age: 30,
  "full-name": "John Doe", // Quoted key for special characters
  greet() { // Method shorthand (ES6)
    return \`Hello, I'm \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name);        // "John" (dot notation)
console.log(person["full-name"]); // "John Doe" (bracket notation)

const key = "age";
console.log(person[key]); // 30 (dynamic key access)

// Adding/Modifying properties
person.email = "john@example.com";
person.age = 31;

// Deleting properties
delete person.email;

// Checking property existence
console.log("name" in person);           // true
console.log(person.hasOwnProperty("age")); // true

// Computed property names (ES6)
const propName = "score";
const obj = {
  [propName]: 100,
  [\`\${propName}Double\`]: 200
};
console.log(obj.score);       // 100
console.log(obj.scoreDouble); // 200`
  },
  {
    heading: 'Object Methods',
    content: `Built-in Object methods for manipulation.`,
    codeExample: `const user = { name: "John", age: 30, city: "NYC" };

// Object.keys() - array of keys
console.log(Object.keys(user)); // ["name", "age", "city"]

// Object.values() - array of values
console.log(Object.values(user)); // ["John", 30, "NYC"]

// Object.entries() - array of [key, value] pairs
console.log(Object.entries(user)); 
// [["name", "John"], ["age", 30], ["city", "NYC"]]

// Object.fromEntries() - reverse of entries
const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }

// Object.assign() - shallow copy/merge
const target = { a: 1 };
const source = { b: 2, c: 3 };
const merged = Object.assign(target, source);
console.log(merged); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: 1, b: 2, c: 3 } (mutated!)

// Better: spread operator for immutable merge
const merged2 = { ...target, ...source };

// Object.freeze() - prevent modifications
const frozen = Object.freeze({ a: 1 });
frozen.a = 2;      // Silently fails (or error in strict mode)
frozen.b = 3;      // Silently fails
console.log(frozen); // { a: 1 }

// Object.seal() - prevent adding/deleting, allow modification
const sealed = Object.seal({ a: 1 });
sealed.a = 2;      // Works
sealed.b = 3;      // Fails
delete sealed.a;   // Fails
console.log(sealed); // { a: 2 }

// Check if frozen/sealed
console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true`
  },
  {
    heading: 'Object Destructuring',
    content: `Extract values from objects into variables.`,
    codeExample: `const user = {
  name: "John",
  age: 30,
  address: {
    city: "NYC",
    country: "USA"
  }
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // "John" 30

// Renaming variables
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "John" 30

// Default values
const { name: n, email = "N/A" } = user;
console.log(n, email); // "John" "N/A"

// Nested destructuring
const { address: { city, country } } = user;
console.log(city, country); // "NYC" "USA"

// Rest in destructuring
const { name: nm, ...rest } = user;
console.log(nm);   // "John"
console.log(rest); // { age: 30, address: {...} }

// Function parameter destructuring
function printUser({ name, age, city = "Unknown" }) {
  console.log(\`\${name}, \${age}, \${city}\`);
}
printUser({ name: "Jane", age: 25 }); // "Jane, 25, Unknown"

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1`
  },
  {
    heading: 'Prototypes and Inheritance',
    content: `Understanding JavaScript's prototype chain.`,
    codeExample: `// Every object has a prototype
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// Constructor functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"
console.log(john.hasOwnProperty("name"));  // true
console.log(john.hasOwnProperty("greet")); // false (on prototype)

// Prototype chain
function Employee(name, age, role) {
  Person.call(this, name, age); // Call parent constructor
  this.role = role;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
  return \`\${this.name} is working as \${this.role}\`;
};

const emp = new Employee("Jane", 25, "Developer");
console.log(emp.greet()); // "Hello, I'm Jane"
console.log(emp.work());  // "Jane is working as Developer"

// instanceof
console.log(emp instanceof Employee); // true
console.log(emp instanceof Person);   // true
console.log(emp instanceof Object);   // true`
  }
];

export const arraysSections: ContentSection[] = [
  {
    content: `
# Arrays in JavaScript

Arrays are ordered collections that can hold any type of value.

## Key Characteristics

- Zero-indexed
- Dynamic size
- Can hold mixed types
- Actually special objects
`
  },
  {
    heading: 'Array Basics',
    content: `Creating and basic operations.`,
    codeExample: `// Creating arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(3); // [empty × 3]
const arr3 = Array.of(1, 2, 3); // [1, 2, 3]
const arr4 = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const arr5 = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]

// Accessing elements
console.log(arr1[0]);  // 1
console.log(arr1[-1]); // undefined (use arr1.at(-1) for last element)
console.log(arr1.at(-1)); // 3 (ES2022)

// Length
console.log(arr1.length); // 3
arr1.length = 2; // Truncates array
console.log(arr1); // [1, 2]

// Check if array
console.log(Array.isArray([1, 2]));   // true
console.log(Array.isArray("hello"));  // false

// Spread operator
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]`
  },
  {
    heading: 'Mutating Array Methods',
    content: `Methods that modify the original array.`,
    codeExample: `const arr = [1, 2, 3];

// push/pop - end of array
arr.push(4);      // [1, 2, 3, 4] - returns new length
arr.pop();        // [1, 2, 3] - returns removed element (4)

// unshift/shift - beginning of array
arr.unshift(0);   // [0, 1, 2, 3] - returns new length
arr.shift();      // [1, 2, 3] - returns removed element (0)

// splice - add/remove at any position
const arr2 = [1, 2, 3, 4, 5];
// splice(startIndex, deleteCount, ...itemsToAdd)
arr2.splice(2, 1);        // [1, 2, 4, 5] - removed 3
arr2.splice(2, 0, 3);     // [1, 2, 3, 4, 5] - inserted 3
arr2.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4, 5] - replaced

// reverse
const arr3 = [1, 2, 3];
arr3.reverse(); // [3, 2, 1]

// sort
const nums = [10, 2, 5, 1];
nums.sort(); // [1, 10, 2, 5] - sorts as strings!
nums.sort((a, b) => a - b); // [1, 2, 5, 10] - numeric ascending
nums.sort((a, b) => b - a); // [10, 5, 2, 1] - numeric descending

// fill
const arr4 = [1, 2, 3, 4];
arr4.fill(0);       // [0, 0, 0, 0]
arr4.fill(5, 1, 3); // [0, 5, 5, 0]

// copyWithin
const arr5 = [1, 2, 3, 4, 5];
arr5.copyWithin(0, 3); // [4, 5, 3, 4, 5]`
  },
  {
    heading: 'Non-Mutating Array Methods',
    content: `Methods that return new arrays.`,
    codeExample: `const arr = [1, 2, 3, 4, 5];

// slice - extract portion
console.log(arr.slice(1, 3));  // [2, 3]
console.log(arr.slice(-2));    // [4, 5]
console.log(arr.slice());      // [1, 2, 3, 4, 5] (shallow copy)

// concat - merge arrays
console.log(arr.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]

// join - array to string
console.log(arr.join("-")); // "1-2-3-4-5"

// includes - check existence
console.log(arr.includes(3)); // true

// indexOf/lastIndexOf - find index
console.log(arr.indexOf(3));     // 2
console.log([1,2,3,2].lastIndexOf(2)); // 3

// find/findIndex - find with condition
console.log(arr.find(x => x > 3));      // 4
console.log(arr.findIndex(x => x > 3)); // 3

// flat - flatten nested arrays
const nested = [1, [2, [3, [4]]]];
console.log(nested.flat());     // [1, 2, [3, [4]]]
console.log(nested.flat(2));    // [1, 2, 3, [4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]

// ES2023: toSorted, toReversed, toSpliced (immutable versions)
const nums = [3, 1, 2];
console.log(nums.toSorted());   // [1, 2, 3]
console.log(nums);              // [3, 1, 2] (unchanged)
console.log(nums.toReversed()); // [2, 1, 3]`
  },
  {
    heading: 'Array Iteration Methods',
    content: `Functional programming with arrays - very common in interviews.`,
    codeExample: `const numbers = [1, 2, 3, 4, 5];

// forEach - iterate (no return value)
numbers.forEach((num, index) => {
  console.log(\`\${index}: \${num}\`);
});

// map - transform elements
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - select elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - accumulate to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const max = numbers.reduce((a, b) => Math.max(a, b));
console.log(max); // 5

// reduceRight - reduce from right
const result = [[1, 2], [3, 4]].reduceRight((acc, curr) => acc.concat(curr));
console.log(result); // [3, 4, 1, 2]

// every - check if all pass
console.log(numbers.every(n => n > 0)); // true

// some - check if any pass
console.log(numbers.some(n => n > 4)); // true

// flatMap - map then flatten
const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// Chaining methods
const users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 35, active: true }
];

const activeNames = users
  .filter(u => u.active)
  .map(u => u.name)
  .sort();
  
console.log(activeNames); // ["Bob", "John"]`
  },
  {
    heading: 'Interview: Implement Array Methods',
    content: `Common interview question - implement map, filter, reduce.`,
    codeExample: `// Implement map
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Implement filter
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Implement reduce
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;
  
  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }
  
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
};

// Test
console.log([1, 2, 3].myMap(x => x * 2));    // [2, 4, 6]
console.log([1, 2, 3].myFilter(x => x > 1)); // [2, 3]
console.log([1, 2, 3].myReduce((a, b) => a + b, 0)); // 6`
  }
];

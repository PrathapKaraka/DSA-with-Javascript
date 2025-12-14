import { ContentSection } from '@/types/module';

export const interviewConceptsSections: ContentSection[] = [
  {
    content: `
# JavaScript Interview Concepts

Key concepts frequently asked in technical interviews.

## Topics Covered

- Hoisting
- Scope and Closures
- this keyword
- Event Loop
- Prototypes
- Memory Management
`
  },
  {
    heading: 'Hoisting',
    content: `Variables and functions are moved to the top during compilation.`,
    codeExample: `// Function declarations are fully hoisted
console.log(greet()); // "Hello!"

function greet() {
  return "Hello!";
}

// var is hoisted but undefined
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Equivalent to:
var x;
console.log(x); // undefined
x = 5;

// let and const are hoisted but in TDZ
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function expressions are NOT hoisted
// console.log(add(2, 3)); // TypeError: add is not a function
var add = function(a, b) {
  return a + b;
};

// Interview Question: What's the output?
var a = 1;
function foo() {
  console.log(a); // undefined (hoisted local 'a')
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1`
  },
  {
    heading: 'Scope Chain and Closures',
    content: `How JavaScript resolves variable references.`,
    codeExample: `// Scope chain
const global = "global";

function outer() {
  const outerVar = "outer";
  
  function inner() {
    const innerVar = "inner";
    console.log(innerVar);  // "inner" (local)
    console.log(outerVar);  // "outer" (closure)
    console.log(global);    // "global" (global)
  }
  
  inner();
}

outer();

// Closure - function remembers its lexical scope
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // 'multiplier' is remembered
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Classic interview question: Loop with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (i is shared, loop finishes before setTimeout)

// Fix 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

// Fix 2: IIFE (creates new scope)
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 100);
  })(i);
}
// Output: 0, 1, 2`
  },
  {
    heading: 'The "this" Keyword',
    content: `\`this\` refers to the execution context.`,
    codeExample: `// Global context
console.log(this); // window (browser) or {} (Node.js module)

// Object method
const obj = {
  name: "Object",
  getName() {
    return this.name; // 'this' is obj
  }
};
console.log(obj.getName()); // "Object"

// Lost context
const getName = obj.getName;
console.log(getName()); // undefined (this is window/global)

// Fix with bind
const boundGetName = obj.getName.bind(obj);
console.log(boundGetName()); // "Object"

// Arrow function - no own 'this'
const obj2 = {
  name: "Object2",
  getName: () => {
    return this.name; // 'this' from enclosing scope
  },
  getNameRegular() {
    const arrow = () => this.name; // 'this' is obj2
    return arrow();
  }
};
console.log(obj2.getName()); // undefined
console.log(obj2.getNameRegular()); // "Object2"

// Event handlers
button.addEventListener("click", function() {
  console.log(this); // button element
});

button.addEventListener("click", () => {
  console.log(this); // window (arrow function)
});

// Constructor
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // "John"

// Explicit binding
function greet() {
  return \`Hello, \${this.name}\`;
}
const user = { name: "Jane" };
console.log(greet.call(user));  // "Hello, Jane"
console.log(greet.apply(user)); // "Hello, Jane"
console.log(greet.bind(user)()); // "Hello, Jane"`
  },
  {
    heading: 'Debouncing and Throttling',
    content: `Rate-limiting function execution - common interview question.`,
    codeExample: `// Debounce - execute after delay, reset on new calls
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage: Search input
const searchInput = document.getElementById("search");
const debouncedSearch = debounce((query) => {
  console.log("Searching:", query);
  // API call here
}, 300);

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

// Throttle - execute at most once per interval
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: Scroll handler
const throttledScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 100);

window.addEventListener("scroll", throttledScroll);

// Throttle with trailing call
function throttleWithTrailing(fn, limit) {
  let lastCall = 0;
  let lastArgs = null;
  let timeoutId = null;

  return function(...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCall = now;
      fn.apply(this, args);
    } else {
      lastArgs = args;
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          lastCall = Date.now();
          timeoutId = null;
          fn.apply(this, lastArgs);
        }, remaining);
      }
    }
  };
}`
  }
];

export const codingProblemsSections: ContentSection[] = [
  {
    content: `
# JavaScript Coding Problems

Common coding challenges asked in interviews.

## Problem Categories

- Array manipulation
- String processing
- Object operations
- Algorithm implementation
- Utility functions
`
  },
  {
    heading: 'Array Problems',
    content: `Common array manipulation challenges.`,
    codeExample: `// 1. Flatten nested array
function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// 2. Remove duplicates
function unique(arr) {
  return [...new Set(arr)];
}
// Or without Set
function uniqueWithFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 3. Find intersection of arrays
function intersection(arr1, arr2) {
  const set = new Set(arr1);
  return arr2.filter(item => set.has(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// 4. Chunk array
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// 5. Group by property
function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    (groups[value] = groups[value] || []).push(item);
    return groups;
  }, {});
}

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 }
];
console.log(groupBy(users, "age"));
// { 25: [{...}, {...}], 30: [{...}] }

// 6. Find missing number in sequence
function findMissing(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5])); // 3`
  },
  {
    heading: 'String Problems',
    content: `String manipulation challenges.`,
    codeExample: `// 1. Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// Or without built-ins
function reverseStringManual(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2. Check palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// 3. Find first non-repeating character
function firstUnique(str) {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of str) {
    if (count[char] === 1) return char;
  }
  return null;
}
console.log(firstUnique("aabbcdef")); // "c"

// 4. Anagram check
function areAnagrams(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // true

// 5. Longest substring without repeating
function longestUnique(str) {
  const seen = new Map();
  let start = 0;
  let maxLength = 0;
  
  for (let end = 0; end < str.length; end++) {
    if (seen.has(str[end]) && seen.get(str[end]) >= start) {
      start = seen.get(str[end]) + 1;
    }
    seen.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}
console.log(longestUnique("abcabcbb")); // 3 ("abc")

// 6. String compression
function compress(str) {
  let result = "";
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  
  return result.length < str.length ? result : str;
}
console.log(compress("aabbbcccc")); // "a2b3c4"`
  },
  {
    heading: 'Object/Utility Problems',
    content: `Object manipulation and utility implementations.`,
    codeExample: `// 1. Deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  
  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// 2. Deep equal
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a === null || b === null) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  return keysA.every(key => deepEqual(a[key], b[key]));
}

// 3. Flatten object
function flattenObject(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], newKey));
    } else {
      acc[newKey] = obj[key];
    }
    return acc;
  }, {});
}

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
// { "a.b.c": 1, "d": 2 }

// 4. Memoize function
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveFn = memoize((n) => {
  console.log("Computing...");
  return n * 2;
});
console.log(expensiveFn(5)); // "Computing..." 10
console.log(expensiveFn(5)); // 10 (cached)

// 5. Curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// 6. Compose functions
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;

const composed = compose(subtract5, multiply2, add10);
console.log(composed(5)); // ((5 + 10) * 2) - 5 = 25`
  },
  {
    heading: 'Output-Based Questions',
    content: `Predict the output - common interview format.`,
    codeExample: `// Question 1
console.log(1 + "2" + "2");   // "122"
console.log(1 + +"2" + "2");  // "32" (+"2" = 2)
console.log(1 + -"1" + "2");  // "02"
console.log(+"1" + "1" + "2"); // "112"

// Question 2
console.log(typeof null);        // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number"
console.log(typeof []);          // "object"

// Question 3
console.log([] == false);    // true
console.log([] == ![]);      // true ([] == false == true)
console.log({} == {});       // false (different references)

// Question 4
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo(); // undefined (hoisted x shadows global)

// Question 5
console.log(0.1 + 0.2 === 0.3); // false (floating point)
console.log(0.1 + 0.2);         // 0.30000000000000004

// Question 6
const arr = [1, 2, 3];
arr[10] = 10;
console.log(arr.length); // 11
console.log(arr.filter(x => x === undefined).length); // 0 (holes aren't undefined)

// Question 7
function test() {
  return
  {
    name: "John"
  };
}
console.log(test()); // undefined (ASI inserts semicolon after return)

// Question 8
console.log(1 < 2 < 3); // true (1 < 2 = true, true < 3 = 1 < 3 = true)
console.log(3 > 2 > 1); // false (3 > 2 = true, true > 1 = 1 > 1 = false)

// Question 9
const a = { x: 1 };
const b = { x: 1 };
console.log(a == b);  // false
console.log(a === b); // false
const c = a;
console.log(a === c); // true

// Question 10
console.log("5" - 3);   // 2
console.log("5" + 3);   // "53"
console.log("5" - "3"); // 2
console.log("5" * "3"); // 15`
  }
];

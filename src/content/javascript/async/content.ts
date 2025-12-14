import { ContentSection } from '@/types/module';

export const asyncBasicsSections: ContentSection[] = [
  {
    content: `
# Asynchronous JavaScript

JavaScript is single-threaded but handles async operations through the Event Loop.

## Why Async?

- Network requests (API calls)
- File operations
- Timers
- User interactions
- Database operations
`
  },
  {
    heading: 'The Event Loop',
    content: `
Understanding the event loop is crucial for interviews.

**Execution Order:**
1. Call Stack (synchronous code)
2. Microtask Queue (Promises, queueMicrotask)
3. Macrotask Queue (setTimeout, setInterval, I/O)
`,
    codeExample: `console.log("1"); // Sync

setTimeout(() => console.log("2"), 0); // Macrotask

Promise.resolve().then(() => console.log("3")); // Microtask

console.log("4"); // Sync

// Output: 1, 4, 3, 2

// More complex example
console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("End");

// Output: Start, End, Promise 1, Promise 2, setTimeout 1, setTimeout 2`
  },
  {
    heading: 'Callbacks',
    content: `The original way to handle async - leads to callback hell.`,
    codeExample: `// Simple callback
function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: "Hello" });
  }, 1000);
}

fetchData((error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(result.data);
});

// Callback Hell (Pyramid of Doom)
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    getOrderDetails(orders[0].id, (err, details) => {
      if (err) return handleError(err);
      getShippingInfo(details.shippingId, (err, shipping) => {
        if (err) return handleError(err);
        // Finally use the data
        console.log(shipping);
      });
    });
  });
});

// Node.js style error-first callbacks
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});`
  }
];

export const promisesSections: ContentSection[] = [
  {
    content: `
# Promises

Promises represent a value that may be available now, later, or never.

## Promise States

| State | Description |
|-------|-------------|
| Pending | Initial state, not fulfilled or rejected |
| Fulfilled | Operation completed successfully |
| Rejected | Operation failed |
`
  },
  {
    heading: 'Creating and Using Promises',
    content: `Promise basics and chaining.`,
    codeExample: `// Creating a Promise
const promise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});

// Consuming a Promise
promise
  .then(result => {
    console.log(result); // "Operation successful!"
    return "Next value";
  })
  .then(next => {
    console.log(next); // "Next value"
  })
  .catch(error => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Cleanup"); // Always runs
  });

// Promise shortcuts
const resolved = Promise.resolve("Immediate value");
const rejected = Promise.reject(new Error("Immediate error"));

resolved.then(console.log); // "Immediate value"
rejected.catch(err => console.log(err.message)); // "Immediate error"

// Returning promises from then
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "John" }), 100);
  });
}

function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 100);
  });
}

fetchUser(1)
  .then(user => {
    console.log(user); // { id: 1, name: "John" }
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log(posts); // ["Post 1", "Post 2"]
  });`
  },
  {
    heading: 'Promise Static Methods',
    content: `Handling multiple promises.`,
    codeExample: `const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);
const pFail = Promise.reject(new Error("Failed"));

// Promise.all - all must succeed
Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // [1, 2, 3]
  .catch(err => console.error(err));

// If one fails, all fails
Promise.all([p1, pFail, p3])
  .then(results => console.log(results))
  .catch(err => console.error(err.message)); // "Failed"

// Promise.allSettled - get all results regardless of failure
Promise.allSettled([p1, pFail, p3])
  .then(results => console.log(results));
// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: Error: Failed },
//   { status: "fulfilled", value: 3 }
// ]

// Promise.race - first to settle (resolve or reject)
Promise.race([p1, p2, p3])
  .then(first => console.log(first)); // 1 (p1 resolves immediately)

// Promise.any - first to succeed (ES2021)
Promise.any([pFail, p2, p3])
  .then(first => console.log(first)); // 3 (first successful)

// All reject → AggregateError
Promise.any([pFail, Promise.reject("err2")])
  .catch(err => console.log(err.errors)); // Array of all errors`
  },
  {
    heading: 'Error Handling in Promises',
    content: `Proper error handling patterns.`,
    codeExample: `// Errors propagate through the chain
Promise.resolve()
  .then(() => {
    throw new Error("Error in then");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch(err => {
    console.error(err.message); // "Error in then"
    return "Recovered";
  })
  .then(value => {
    console.log(value); // "Recovered"
  });

// Returning rejected promise
Promise.resolve()
  .then(() => {
    return Promise.reject(new Error("Rejected"));
  })
  .catch(err => console.error(err.message)); // "Rejected"

// Re-throwing errors
Promise.resolve()
  .then(() => {
    throw new Error("Original error");
  })
  .catch(err => {
    console.log("Logging error:", err.message);
    throw err; // Re-throw to propagate
  })
  .catch(err => {
    console.log("Final handler:", err.message);
  });

// Unhandled rejection (bad practice)
// Always add .catch() or handle in try/catch with async/await

// Interview: Promise that times out
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), ms);
  });
  return Promise.race([promise, timeout]);
}

const slow = new Promise(resolve => setTimeout(() => resolve("Done"), 5000));
withTimeout(slow, 1000).catch(err => console.log(err.message)); // "Timeout"`
  }
];

export const asyncAwaitSections: ContentSection[] = [
  {
    content: `
# Async/Await

Syntactic sugar over Promises that makes async code look synchronous.

## Key Points

- \`async\` function always returns a Promise
- \`await\` pauses execution until Promise settles
- Can only use \`await\` inside \`async\` function
- Makes code more readable and maintainable
`
  },
  {
    heading: 'Async/Await Basics',
    content: `Writing cleaner async code.`,
    codeExample: `// Async function declaration
async function fetchData() {
  return "Data"; // Automatically wrapped in Promise.resolve()
}

fetchData().then(console.log); // "Data"

// Async arrow function
const fetchUser = async (id) => {
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user;
};

// Using await
async function getUser() {
  console.log("Fetching...");
  
  const user = await fetchUser(1);
  console.log("User:", user);
  
  const posts = await fetchPosts(user.id);
  console.log("Posts:", posts);
  
  return { user, posts };
}

// Equivalent Promise chain
function getUserPromise() {
  console.log("Fetching...");
  
  return fetchUser(1)
    .then(user => {
      console.log("User:", user);
      return fetchPosts(user.id)
        .then(posts => ({ user, posts }));
    });
}

// Await any Promise
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function demo() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
  await delay(1000);
  console.log("After 2 seconds");
}`
  },
  {
    heading: 'Error Handling with try/catch',
    content: `Handling errors in async/await.`,
    codeExample: `// Basic try/catch
async function fetchWithError() {
  try {
    const response = await fetch("/api/data");
    
    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error; // Re-throw if needed
  } finally {
    console.log("Cleanup");
  }
}

// Multiple await with individual error handling
async function processData() {
  let user, posts;
  
  try {
    user = await fetchUser(1);
  } catch (err) {
    console.error("Failed to fetch user");
    return null;
  }
  
  try {
    posts = await fetchPosts(user.id);
  } catch (err) {
    console.error("Failed to fetch posts");
    posts = []; // Default value
  }
  
  return { user, posts };
}

// Error handling wrapper
function handleAsync(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

const safeFetch = handleAsync(async (url) => {
  const res = await fetch(url);
  return res.json();
});`
  },
  {
    heading: 'Parallel vs Sequential Execution',
    content: `Optimizing async operations.`,
    codeExample: `// Sequential (slow) - 3 seconds total
async function sequential() {
  const a = await delay(1000).then(() => "A");
  const b = await delay(1000).then(() => "B");
  const c = await delay(1000).then(() => "C");
  return [a, b, c];
}

// Parallel (fast) - 1 second total
async function parallel() {
  const [a, b, c] = await Promise.all([
    delay(1000).then(() => "A"),
    delay(1000).then(() => "B"),
    delay(1000).then(() => "C")
  ]);
  return [a, b, c];
}

// Start parallel, await later
async function startParallel() {
  // Start all immediately
  const promiseA = fetchA();
  const promiseB = fetchB();
  const promiseC = fetchC();
  
  // Await when needed
  const a = await promiseA;
  const b = await promiseB;
  const c = await promiseC;
  
  return [a, b, c];
}

// Process array in parallel
async function processAllUsers(userIds) {
  const users = await Promise.all(
    userIds.map(id => fetchUser(id))
  );
  return users;
}

// Process array sequentially (when order matters)
async function processUsersSequentially(userIds) {
  const users = [];
  for (const id of userIds) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
}

// Controlled concurrency
async function processWithLimit(items, limit, fn) {
  const results = [];
  const executing = new Set();
  
  for (const item of items) {
    const promise = fn(item).then(result => {
      executing.delete(promise);
      return result;
    });
    
    executing.add(promise);
    results.push(promise);
    
    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}`
  },
  {
    heading: 'Common Async Patterns',
    content: `Practical patterns used in real applications.`,
    codeExample: `// Retry pattern
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${retries}\`);
      await delay(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
}

// Debounce async
function debounceAsync(fn, ms) {
  let timeoutId;
  return async (...args) => {
    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(async () => {
        const result = await fn(...args);
        resolve(result);
      }, ms);
    });
  };
}

// Cache async results
function memoizeAsync(fn) {
  const cache = new Map();
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = await fn(...args);
    cache.set(key, result);
    return result;
  };
}

const cachedFetch = memoizeAsync(async (id) => {
  console.log("Fetching...");
  return fetchUser(id);
});

await cachedFetch(1); // "Fetching..."
await cachedFetch(1); // Returns cached (no log)

// Async iterator
async function* asyncGenerator() {
  yield await fetchData(1);
  yield await fetchData(2);
  yield await fetchData(3);
}

for await (const data of asyncGenerator()) {
  console.log(data);
}`
  }
];

export const stackIntroSections = [
  {
    content: `
# Introduction to Stacks

A **stack** is a linear data structure that follows the **LIFO** (Last In, First Out) principle.

## Operations

- **push(item)**: Add item to top - O(1)
- **pop()**: Remove item from top - O(1)
- **peek()/top()**: View top item - O(1)
- **isEmpty()**: Check if empty - O(1)
`
  },
  {
    heading: 'Real-world Applications',
    content: `
- Browser history (back button)
- Undo operations in editors
- Function call stack
- Expression evaluation
- Parentheses matching
`
  },
  {
    heading: 'Stack Implementation',
    content: `A simple stack implementation using an array.`,
    codeExample: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}`
  },
  {
    heading: 'Valid Parentheses Problem',
    content: `A classic stack problem - check if brackets are balanced.`,
    codeExample: `function isValidParentheses(s) {
  const stack = new Stack();
  const map = { ')': '(', '}': '{', ']': '[' };
  
  for (const char of s) {
    if (char in map) {
      if (stack.isEmpty() || stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  
  return stack.isEmpty();
}

// Examples
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([)]"));   // false`
  }
];

export const queueIntroSections = [
  {
    content: `
# Introduction to Queues

A **queue** is a linear data structure that follows the **FIFO** (First In, First Out) principle.

## Operations

- **enqueue(item)**: Add item to rear - O(1)
- **dequeue()**: Remove item from front - O(1)
- **front()**: View front item - O(1)
- **isEmpty()**: Check if empty - O(1)
`
  },
  {
    heading: 'Types of Queues',
    content: `
1. **Simple Queue**: Basic FIFO
2. **Circular Queue**: Rear connects to front
3. **Priority Queue**: Elements have priorities
4. **Deque**: Double-ended queue
`
  },
  {
    heading: 'Queue Implementation',
    content: `A simple queue implementation using an array.`,
    codeExample: `class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) {
    this.items.push(item);
  }
  
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }
  
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}`
  },
  {
    heading: 'BFS Using Queue',
    content: `Breadth-First Search uses a queue for level-order traversal.`,
    codeExample: `function bfs(graph, start) {
  const visited = new Set();
  const queue = new Queue();
  
  queue.enqueue(start);
  visited.add(start);
  
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}`
  }
];

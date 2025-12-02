export interface SubModule {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
}

export interface Module {
  id: string;
  title: string;
  icon: string;
  subModules: SubModule[];
}

export const dsaModules: Module[] = [
  {
    id: "arrays",
    title: "Arrays",
    icon: "📊",
    subModules: [
      {
        id: "arrays-intro",
        title: "Introduction to Arrays",
        content: `
# Introduction to Arrays

An **array** is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

## Key Characteristics

- **Fixed Size**: Arrays have a fixed size that must be declared at initialization
- **Indexed Access**: Elements can be accessed using indices (0-based in JavaScript)
- **Homogeneous**: Typically stores elements of the same type
- **Contiguous Memory**: Elements are stored in adjacent memory locations

## Time Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Access    | O(1)    | O(1)  |
| Search    | O(n)    | O(n)  |
| Insert    | O(n)    | O(n)  |
| Delete    | O(n)    | O(n)  |

## When to Use Arrays

- When you need fast access to elements by index
- When the size of the collection is known beforehand
- When you need to iterate through all elements frequently
        `,
        codeExample: `// Creating arrays in JavaScript
const numbers = [1, 2, 3, 4, 5];
const fruits = new Array('apple', 'banana', 'orange');

// Accessing elements
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 5

// Modifying elements
numbers[2] = 10;
console.log(numbers); // [1, 2, 10, 4, 5]

// Array methods
numbers.push(6);      // Add to end
numbers.pop();        // Remove from end
numbers.unshift(0);   // Add to beginning
numbers.shift();      // Remove from beginning`
      },
      {
        id: "arrays-two-pointers",
        title: "Two Pointers Technique",
        content: `
# Two Pointers Technique

The **two pointers** technique is a pattern where two pointers iterate through the data structure until one or both of them satisfy a condition.

## Types of Two Pointers

1. **Same Direction**: Both pointers move in the same direction (fast & slow)
2. **Opposite Direction**: Pointers start from opposite ends and move toward each other

## Common Use Cases

- Finding pairs with a specific sum in a sorted array
- Removing duplicates from sorted array
- Reversing an array
- Detecting cycles (fast/slow pointers)

## Time Complexity

Usually reduces O(n²) brute force solutions to O(n).
        `,
        codeExample: `// Two Sum in Sorted Array
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [-1, -1];
}

// Example usage
const sorted = [1, 2, 3, 4, 6, 8, 9];
console.log(twoSum(sorted, 10)); // [2, 5] -> 3 + 8 = 10`
      },
      {
        id: "arrays-sliding-window",
        title: "Sliding Window",
        content: `
# Sliding Window Technique

The **sliding window** technique is used to perform operations on a specific window size of an array or string.

## How It Works

1. Create a window (subarray) of size k
2. Slide the window by one element at a time
3. Update the result based on the new window

## Types

- **Fixed Size Window**: Window size remains constant
- **Variable Size Window**: Window expands/contracts based on conditions

## Common Problems

- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
        `,
        codeExample: `// Maximum sum subarray of size k
function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;
  
  let maxSum = 0;
  let windowSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9`
      }
    ]
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    icon: "🔗",
    subModules: [
      {
        id: "ll-intro",
        title: "Introduction",
        content: `
# Introduction to Linked Lists

A **linked list** is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

## Types of Linked Lists

1. **Singly Linked List**: Each node has data and a pointer to next
2. **Doubly Linked List**: Each node has pointers to both next and previous
3. **Circular Linked List**: Last node points back to the first node

## Advantages over Arrays

- Dynamic size
- Efficient insertions/deletions at any position
- No memory waste (only allocates what's needed)

## Disadvantages

- No random access (must traverse from head)
- Extra memory for storing pointers
- Not cache-friendly
        `,
        codeExample: `// Node class for Singly Linked List
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Add to end
  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  // Print list
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}`
      },
      {
        id: "ll-reversal",
        title: "Reversing a Linked List",
        content: `
# Reversing a Linked List

Reversing a linked list is a fundamental operation that's commonly asked in interviews.

## Approaches

1. **Iterative**: Use three pointers (prev, current, next)
2. **Recursive**: Reverse recursively and fix pointers

## Time & Space Complexity

| Approach | Time | Space |
|----------|------|-------|
| Iterative | O(n) | O(1) |
| Recursive | O(n) | O(n) |
        `,
        codeExample: `// Iterative approach
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const next = current.next;  // Store next
    current.next = prev;        // Reverse pointer
    prev = current;             // Move prev forward
    current = next;             // Move current forward
  }
  
  return prev;  // New head
}

// Recursive approach
function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }
  
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}`
      }
    ]
  },
  {
    id: "stacks-queues",
    title: "Stacks & Queues",
    icon: "📚",
    subModules: [
      {
        id: "stack-intro",
        title: "Stack Introduction",
        content: `
# Introduction to Stacks

A **stack** is a linear data structure that follows the **LIFO** (Last In, First Out) principle.

## Operations

- **push(item)**: Add item to top - O(1)
- **pop()**: Remove item from top - O(1)
- **peek()/top()**: View top item - O(1)
- **isEmpty()**: Check if empty - O(1)

## Real-world Applications

- Browser history (back button)
- Undo operations in editors
- Function call stack
- Expression evaluation
- Parentheses matching
        `,
        codeExample: `// Stack implementation using array
class Stack {
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
}

// Valid Parentheses problem
function isValidParentheses(s) {
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
}`
      },
      {
        id: "queue-intro",
        title: "Queue Introduction",
        content: `
# Introduction to Queues

A **queue** is a linear data structure that follows the **FIFO** (First In, First Out) principle.

## Operations

- **enqueue(item)**: Add item to rear - O(1)
- **dequeue()**: Remove item from front - O(1)
- **front()**: View front item - O(1)
- **isEmpty()**: Check if empty - O(1)

## Types of Queues

1. **Simple Queue**: Basic FIFO
2. **Circular Queue**: Rear connects to front
3. **Priority Queue**: Elements have priorities
4. **Deque**: Double-ended queue
        `,
        codeExample: `// Queue implementation
class Queue {
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
}

// BFS using Queue
function bfs(graph, start) {
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
    ]
  },
  {
    id: "trees",
    title: "Trees",
    icon: "🌳",
    subModules: [
      {
        id: "tree-intro",
        title: "Binary Trees",
        content: `
# Binary Trees

A **binary tree** is a hierarchical data structure where each node has at most two children, referred to as left and right child.

## Terminology

- **Root**: Topmost node
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node

## Types of Binary Trees

1. **Full Binary Tree**: Every node has 0 or 2 children
2. **Complete Binary Tree**: All levels filled except possibly last
3. **Perfect Binary Tree**: All internal nodes have 2 children
4. **Balanced Binary Tree**: Height difference of subtrees ≤ 1
        `,
        codeExample: `// Binary Tree Node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Tree Traversals
function inorder(root, result = []) {
  if (root) {
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
  }
  return result;
}

function preorder(root, result = []) {
  if (root) {
    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
  }
  return result;
}

function postorder(root, result = []) {
  if (root) {
    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.val);
  }
  return result;
}`
      },
      {
        id: "bst",
        title: "Binary Search Trees",
        content: `
# Binary Search Trees (BST)

A **BST** is a binary tree where for each node:
- All values in left subtree are **less** than node's value
- All values in right subtree are **greater** than node's value

## Time Complexity

| Operation | Average | Worst (unbalanced) |
|-----------|---------|-------------------|
| Search    | O(log n)| O(n)              |
| Insert    | O(log n)| O(n)              |
| Delete    | O(log n)| O(n)              |

## Self-Balancing BSTs

- AVL Trees
- Red-Black Trees
- Splay Trees
        `,
        codeExample: `class BST {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
  
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
}`
      }
    ]
  },
  {
    id: "graphs",
    title: "Graphs",
    icon: "🕸️",
    subModules: [
      {
        id: "graph-intro",
        title: "Graph Basics",
        content: `
# Introduction to Graphs

A **graph** is a non-linear data structure consisting of **vertices** (nodes) connected by **edges**.

## Graph Terminology

- **Vertex/Node**: Fundamental unit of graph
- **Edge**: Connection between two vertices
- **Degree**: Number of edges connected to a vertex
- **Path**: Sequence of vertices connected by edges
- **Cycle**: Path that starts and ends at same vertex

## Types of Graphs

1. **Directed vs Undirected**
2. **Weighted vs Unweighted**
3. **Cyclic vs Acyclic**
4. **Connected vs Disconnected**

## Graph Representations

1. **Adjacency Matrix**: 2D array of size V×V
2. **Adjacency List**: Array of lists
        `,
        codeExample: `// Graph using Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Remove for directed
  }
  
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1]
      .filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2]
      .filter(v => v !== v1);
  }
}

// Example
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('B', 'C');
console.log(g.adjacencyList);
// { A: ['B'], B: ['A', 'C'], C: ['B'] }`
      },
      {
        id: "graph-traversal",
        title: "Graph Traversals",
        content: `
# Graph Traversals

## Depth-First Search (DFS)

Explores as far as possible along each branch before backtracking.

**Use Cases:**
- Path finding
- Cycle detection
- Topological sorting
- Connected components

## Breadth-First Search (BFS)

Explores all neighbors at current depth before moving to next level.

**Use Cases:**
- Shortest path (unweighted)
- Level order traversal
- Finding connected components
        `,
        codeExample: `// DFS - Recursive
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// DFS - Iterative with Stack
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  
  while (stack.length > 0) {
    const vertex = stack.pop();
    
    if (!visited.has(vertex)) {
      visited.add(vertex);
      console.log(vertex);
      
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// BFS
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  
  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);
    
    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`
      }
    ]
  },
  {
    id: "sorting",
    title: "Sorting Algorithms",
    icon: "🔢",
    subModules: [
      {
        id: "sort-comparison",
        title: "Sorting Overview",
        content: `
# Sorting Algorithms Overview

## Comparison of Algorithms

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

## When to Use What?

- **Small data**: Insertion Sort
- **Nearly sorted**: Insertion Sort, Bubble Sort
- **General purpose**: Merge Sort, Quick Sort
- **Memory constrained**: Heap Sort, Quick Sort
        `,
        codeExample: `// Quick Sort
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return [...result, ...left.slice(i), ...right.slice(j)];
}`
      }
    ]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    icon: "🧩",
    subModules: [
      {
        id: "dp-intro",
        title: "DP Introduction",
        content: `
# Dynamic Programming

**Dynamic Programming (DP)** is an optimization technique that solves complex problems by breaking them into simpler subproblems.

## Key Concepts

1. **Overlapping Subproblems**: Same subproblems solved multiple times
2. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems

## Approaches

### Top-Down (Memoization)
- Start with the original problem
- Recursively break down into subproblems
- Cache results to avoid recomputation

### Bottom-Up (Tabulation)
- Start with smallest subproblems
- Build up to the original problem
- Typically uses iteration with a table
        `,
        codeExample: `// Fibonacci - Multiple approaches

// 1. Naive Recursive - O(2^n)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// 2. Memoization (Top-Down) - O(n)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// 3. Tabulation (Bottom-Up) - O(n)
function fibTab(n) {
  if (n <= 1) return n;
  
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 4. Space Optimized - O(n) time, O(1) space
function fibOptimized(n) {
  if (n <= 1) return n;
  
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`
      }
    ]
  }
];

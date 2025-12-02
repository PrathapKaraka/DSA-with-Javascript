export const linkedListIntroContent = `
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
`;

export const linkedListIntroCode = `// Node class for Singly Linked List
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
}`;

export const linkedListReversalContent = `
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
`;

export const linkedListReversalCode = `// Iterative approach
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
}`;

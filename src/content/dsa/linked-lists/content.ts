export const linkedListSections = [
  {
    content: `
# Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

## Types of Linked Lists

1. **Singly Linked List**: Each node points to next
2. **Doubly Linked List**: Each node points to next and previous
3. **Circular Linked List**: Last node points to first

## Time Complexities

| Operation | Time Complexity |
|-----------|----------------|
| Access    | O(n)           |
| Search    | O(n)           |
| Insert    | O(1)*          |
| Delete    | O(1)*          |

*When you have a reference to the node
`
  },
  {
    heading: 'Singly Linked List Implementation',
    content: `Basic implementation of a singly linked list.`,
    codeExample: `class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}`
  },
  {
    heading: 'Fast and Slow Pointers',
    content: `Detect cycles and find middle elements.`,
    codeExample: `function hasCycle(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  
  return false;
}`
  },
  {
    heading: 'Reverse a Linked List',
    content: `Classic linked list problem.`,
    codeExample: `function reverseList(head) {
  let prev = null, current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}`
  }
];

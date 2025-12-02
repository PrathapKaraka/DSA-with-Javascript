export const binaryTreeContent = `
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
`;

export const binaryTreeCode = `// Binary Tree Node
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
}`;

export const bstContent = `
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
`;

export const bstCode = `class BST {
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
}`;

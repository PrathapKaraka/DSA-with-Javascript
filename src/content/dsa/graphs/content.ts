export const graphBasicsSections = [
  {
    content: `
# Introduction to Graphs

A **graph** is a non-linear data structure consisting of **vertices** (nodes) connected by **edges**.

## Graph Terminology

- **Vertex/Node**: Fundamental unit of graph
- **Edge**: Connection between two vertices
- **Degree**: Number of edges connected to a vertex
- **Path**: Sequence of vertices connected by edges
- **Cycle**: Path that starts and ends at same vertex
`
  },
  {
    heading: 'Types of Graphs',
    content: `
1. **Directed vs Undirected**
2. **Weighted vs Unweighted**
3. **Cyclic vs Acyclic**
4. **Connected vs Disconnected**
`
  },
  {
    heading: 'Graph Representations',
    content: `
1. **Adjacency Matrix**: 2D array of size V×V
2. **Adjacency List**: Array of lists
`
  },
  {
    heading: 'Graph Implementation',
    content: `Graph implementation using adjacency list.`,
    codeExample: `class Graph {
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
  }
];

export const graphTraversalSections = [
  {
    content: `
# Graph Traversals

## Depth-First Search (DFS)

Explores as far as possible along each branch before backtracking.

**Use Cases:**
- Path finding
- Cycle detection
- Topological sorting
- Connected components
`
  },
  {
    heading: 'DFS - Recursive',
    content: `The recursive approach is clean and intuitive.`,
    codeExample: `function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`
  },
  {
    heading: 'DFS - Iterative with Stack',
    content: `Use an explicit stack for iterative DFS.`,
    codeExample: `function dfsIterative(graph, start) {
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
}`
  },
  {
    heading: 'Breadth-First Search (BFS)',
    content: `
Explores all neighbors at current depth before moving to next level.

**Use Cases:**
- Shortest path (unweighted)
- Level order traversal
- Finding connected components
`,
    codeExample: `function bfs(graph, start) {
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
];

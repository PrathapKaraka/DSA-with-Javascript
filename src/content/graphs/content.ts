export const graphBasicsContent = `
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
`;

export const graphBasicsCode = `// Graph using Adjacency List
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
// { A: ['B'], B: ['A', 'C'], C: ['B'] }`;

export const graphTraversalContent = `
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
`;

export const graphTraversalCode = `// DFS - Recursive
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
}`;

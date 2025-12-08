export const dpIntroSections = [
  {
    content: `
# Dynamic Programming

**Dynamic Programming (DP)** is an optimization technique that solves complex problems by breaking them into simpler subproblems.

## Key Concepts

1. **Overlapping Subproblems**: Same subproblems solved multiple times
2. **Optimal Substructure**: Optimal solution contains optimal solutions to subproblems
`
  },
  {
    heading: 'Top-Down (Memoization)',
    content: `
- Start with the original problem
- Recursively break down into subproblems
- Cache results to avoid recomputation
`
  },
  {
    heading: 'Bottom-Up (Tabulation)',
    content: `
- Start with smallest subproblems
- Build up to the original problem
- Typically uses iteration with a table
`
  },
  {
    heading: 'Fibonacci - Naive Recursive',
    content: `
The naive approach has exponential time complexity O(2^n).
`,
    codeExample: `function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// Very slow for large n
console.log(fibNaive(10)); // 55`
  },
  {
    heading: 'Fibonacci - Memoization',
    content: `
Top-down approach with caching reduces to O(n).
`,
    codeExample: `function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(50)); // 12586269025`
  },
  {
    heading: 'Fibonacci - Tabulation',
    content: `
Bottom-up approach with iteration.
`,
    codeExample: `function fibTab(n) {
  if (n <= 1) return n;
  
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibTab(50)); // 12586269025`
  },
  {
    heading: 'Fibonacci - Space Optimized',
    content: `
O(n) time with O(1) space by keeping only last two values.
`,
    codeExample: `function fibOptimized(n) {
  if (n <= 1) return n;
  
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

console.log(fibOptimized(50)); // 12586269025`
  }
];

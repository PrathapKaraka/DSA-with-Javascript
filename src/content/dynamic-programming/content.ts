export const dpIntroContent = `
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
`;

export const dpIntroCode = `// Fibonacci - Multiple approaches

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
}`;

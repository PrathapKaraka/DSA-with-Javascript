export const arraySections = [
  {
    content: `
# Arrays

Arrays are one of the most fundamental data structures in programming. They store elements in contiguous memory locations, allowing for efficient access using indices.

## Key Concepts

- **Fixed-size** (in most languages) or **dynamic** (like JavaScript arrays)
- **Zero-indexed** (first element is at index 0)
- **Homogeneous** (typically store same type of elements)

## Time Complexities

| Operation | Time Complexity |
|-----------|----------------|
| Access    | O(1)           |
| Search    | O(n)           |
| Insert    | O(n)           |
| Delete    | O(n)           |
`
  },
  {
    heading: 'Two Pointers Pattern',
    content: `Use two pointers to traverse the array from different positions.`,
    codeExample: `function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  
  return [-1, -1];
}`
  },
  {
    heading: 'Sliding Window Pattern',
    content: `Maintain a window of elements as you traverse.`,
    codeExample: `function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }
  
  return maxSum;
}`
  },
  {
    heading: 'Practice Problems',
    content: `
1. Two Sum
2. Best Time to Buy and Sell Stock
3. Contains Duplicate
4. Product of Array Except Self
5. Maximum Subarray
`
  }
];

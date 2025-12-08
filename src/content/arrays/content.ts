// Introduction to Arrays - Multiple sections with code examples

export const arraysIntroSections = [
  {
    content: `
# Introduction to Arrays

An **array** is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

## Key Characteristics

- **Fixed Size**: Arrays have a fixed size that must be declared at initialization
- **Indexed Access**: Elements can be accessed using indices (0-based in JavaScript)
- **Homogeneous**: Typically stores elements of the same type
- **Contiguous Memory**: Elements are stored in adjacent memory locations
`,
    codeExample: `// Creating arrays in JavaScript
const numbers = [1, 2, 3, 4, 5];
const fruits = new Array('apple', 'banana', 'orange');

// Accessing elements
console.log(numbers[0]); // 1
console.log(numbers[numbers.length - 1]); // 5`
  },
  {
    heading: 'Time Complexity',
    content: `
Understanding time complexity is crucial for choosing the right data structure.

| Operation | Average | Worst |
|-----------|---------|-------|
| Access    | O(1)    | O(1)  |
| Search    | O(n)    | O(n)  |
| Insert    | O(n)    | O(n)  |
| Delete    | O(n)    | O(n)  |
`
  },
  {
    heading: 'Basic Array Operations',
    content: `
JavaScript provides many built-in methods for array manipulation.
`,
    codeExample: `// Modifying elements
const numbers = [1, 2, 3, 4, 5];
numbers[2] = 10;
console.log(numbers); // [1, 2, 10, 4, 5]

// Array methods
numbers.push(6);      // Add to end: [1, 2, 10, 4, 5, 6]
numbers.pop();        // Remove from end: [1, 2, 10, 4, 5]
numbers.unshift(0);   // Add to beginning: [0, 1, 2, 10, 4, 5]
numbers.shift();      // Remove from beginning: [1, 2, 10, 4, 5]`
  },
  {
    heading: 'When to Use Arrays',
    content: `
Arrays are ideal when:

- You need fast access to elements by index
- The size of the collection is known beforehand
- You need to iterate through all elements frequently
- Memory locality matters for performance
`
  }
];

// Two Pointers Technique - Multiple sections
export const twoPointersSections = [
  {
    content: `
# Two Pointers Technique

The **two pointers** technique is a pattern where two pointers iterate through the data structure until one or both of them satisfy a condition.

## Types of Two Pointers

1. **Same Direction**: Both pointers move in the same direction (fast & slow)
2. **Opposite Direction**: Pointers start from opposite ends and move toward each other
`
  },
  {
    heading: 'Common Use Cases',
    content: `
- Finding pairs with a specific sum in a sorted array
- Removing duplicates from sorted array
- Reversing an array
- Detecting cycles (fast/slow pointers)

## Time Complexity

Usually reduces O(n²) brute force solutions to O(n).
`
  },
  {
    heading: 'Two Sum in Sorted Array',
    content: `
A classic problem solved efficiently with two pointers.
`,
    codeExample: `function twoSum(arr, target) {
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
    heading: 'Remove Duplicates from Sorted Array',
    content: `
Another common two pointer problem.
`,
    codeExample: `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let slow = 0;
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  
  return slow + 1;
}

// Example
const arr = [1, 1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(arr)); // 4 (unique elements)`
  }
];

// Sliding Window Technique - Multiple sections
export const slidingWindowSections = [
  {
    content: `
# Sliding Window Technique

The **sliding window** technique is used to perform operations on a specific window size of an array or string.

## How It Works

1. Create a window (subarray) of size k
2. Slide the window by one element at a time
3. Update the result based on the new window
`
  },
  {
    heading: 'Types of Sliding Window',
    content: `
- **Fixed Size Window**: Window size remains constant
- **Variable Size Window**: Window expands/contracts based on conditions

## Common Problems

- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
`
  },
  {
    heading: 'Fixed Window - Maximum Sum Subarray',
    content: `
Find the maximum sum of a subarray of size k.
`,
    codeExample: `function maxSumSubarray(arr, k) {
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
  },
  {
    heading: 'Variable Window - Longest Substring Without Repeating',
    content: `
Find the length of the longest substring without repeating characters.
`,
    codeExample: `function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")`
  }
];

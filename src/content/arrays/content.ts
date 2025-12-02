export const arraysIntroContent = `
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
`;

export const arraysIntroCode = `// Creating arrays in JavaScript
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
numbers.shift();      // Remove from beginning`;

export const twoPointersContent = `
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
`;

export const twoPointersCode = `// Two Sum in Sorted Array
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
console.log(twoSum(sorted, 10)); // [2, 5] -> 3 + 8 = 10`;

export const slidingWindowContent = `
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
`;

export const slidingWindowCode = `// Maximum sum subarray of size k
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

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9`;

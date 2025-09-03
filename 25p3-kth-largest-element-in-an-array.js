// Kth Largest Element in an Array
// Given an unsorted array of integers nums and an integer k, return the kth largest element in the array.

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// By kth largest element, we mean the kth largest element in the sorted order, not the kth distinct element.

// Follow-up: Can you solve it without sorting?

// Example 1:

// Input: nums = [2,3,1,5,4], k = 2

// Output: 4
// Example 2:

// Input: nums = [2,3,1,1,5,5,4], k = 3

// Output: 4
// Constraints:

// 1 <= k <= nums.length <= 10000
// -1000 <= nums[i] <= 1000

// Sorting solution:
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1]
};

// tc: O(n log n) due to using the sort method

// Max Heap Solution:

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
      const maxHeap = new MaxPriorityQueue(); // creates a new instance of the max-heap

      // add every number from the nums array into the max-heap
      for (const num of nums) {
        maxHeap.enqueue(num);
      } // After this loop, the largest number in the entire array is at the front of the heap.

      // runs k - 1 times, and each time it removes the largest element currently in the heap. After this loop finishes, the 1st, 2nd, ... up to the (k-1)th largest elements have been removed.
      for (let i = 0; i < k - 1; i++) {
        maxHeap.dequeue();
      }

      // The element now at the front of the heap is the k-th largest element. maxHeap.front().element correctly retrieves this value.
      return maxHeap.front().element;
    }
}

// Time: O(n log n) - because you add all n elements to the heap.
// Space: O(n) - because the heap stores all n elements.


// Optimal Max Heap Solution:

// The most optimal solution uses a min-heap of a fixed size k. This approach is better because it reduces both the time and space complexity.

// Time Complexity: O(N log k)
// Space Complexity: O(k)
// This is an improvement over your current solution's O(N log N) time and O(N) space.

// The Logic
// Create a min-heap that will store, at most, k elements.
// Iterate through each number in the nums array.
// For each number, add it to the min-heap.
// If adding the number makes the heap's size larger than k, immediately remove the smallest element (which is at the top of the min-heap).
// By doing this, the min-heap always maintains a collection of the k largest elements seen so far.
// After iterating through all the numbers, the smallest element remaining in the heap is the k-th largest element of the entire array.

class MinHeapSolution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
      // Create a min-heap.
      const minHeap = new MinPriorityQueue();

      for (const num of nums) {
        // Add the current number to the heap.
        minHeap.enqueue(num);

        // If the heap size exceeds k, remove the smallest element.
        if (minHeap.size() > k) {
          minHeap.dequeue();
        }
      }

      // The root of the min-heap is now the k-th largest element.
      return minHeap.front().element;
    }
}

// Time Complexity: O(N log k)
// Space Complexity: O(k)
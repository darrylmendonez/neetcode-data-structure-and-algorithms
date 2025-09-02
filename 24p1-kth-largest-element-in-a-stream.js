// Kth Largest Element in a Stream
// Design a class to find the kth largest integer in a stream of values, including duplicates. E.g. the 2nd largest from [1, 2, 3, 3] is 3. The stream is not necessarily sorted.

// Implement the following methods:

// constructor(int k, int[] nums) Initializes the object given an integer k and the stream of integers nums.
// int add(int val) Adds the integer val to the stream and returns the kth largest integer in the stream.
// Example 1:

// Input:
// ["KthLargest", [3, [1, 2, 3, 3]], "add", [3], "add", [5], "add", [6], "add", [7], "add", [8]]

// Output:
// [null, 3, 3, 3, 5, 6]

// Explanation:
// KthLargest kthLargest = new KthLargest(3, [1, 2, 3, 3]);
// kthLargest.add(3);   // return 3
// kthLargest.add(5);   // return 3
// kthLargest.add(6);   // return 3
// kthLargest.add(7);   // return 5
// kthLargest.add(8);   // return 6
// Constraints:

// 1 <= k <= 1000
// 0 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -1000 <= val <= 1000
// There will always be at least k integers in the stream when you search for the kth integer.

import { Heap } from 'heap-js'; // Corrected import path

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;

        // Initialize a min-heap with the initial numbers
        this.heap = new Heap();
        this.heap.init(nums);

        // Keep popping the smallest elements until the heap only contains the k largest elements
        while (this.heap.size() > this.k) {
            this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Add the new value to the heap
        this.heap.push(val);

        // If the heap size exceeds k, remove the smallest element
        if (this.heap.size() > this.k) {
            this.heap.pop();
        }

        // The root of the min-heap is the kth largest element
        return this.heap.peek();
    }
}

// Test the solution:
const kthLargest = new KthLargest(3, [1, 2, 3, 3]);
console.log(kthLargest.add(3));   // Expected output: 3
console.log(kthLargest.add(5));   // Expected output: 3
console.log(kthLargest.add(6));   // Expected output: 3
console.log(kthLargest.add(7));   // Expected output: 5
console.log(kthLargest.add(8));   // Expected output: 6

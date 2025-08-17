// Remove Element
// You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.

// After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.

// Note:

// The order of the elements which are not equal to val does not matter.
// It is not necessary to consider elements beyond the first k positions of the array.
// To be accepted, the first k elements of nums must contain only elements not equal to val.
// Return k as the final result.

// Example 1:

// Input: nums = [1,1,2,3,4], val = 1

// Output: [2,3,4]
// Explanation: You should return k = 3 as we have 3 elements which are not equal to val = 1.

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2

// Output: [0,1,3,0,4]
// Explanation: You should return k = 5 as we have 5 elements which are not equal to val = 2.

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    // two pointers solution
    removeElement(nums, val) {
      let k = 0; // left pointer
      for (let i = 0; i < nums.length; i++) { // i is the right pointer
        if (nums[i] !== val) { // if the i value doesn't equal val
          nums[k] = nums[i]; // then assign the left pointer, k, to i's value
          k++; // increment left pointer
        }
      }
      return k; // the number of numbers that are not the val will be equal to the value of k
    }
}

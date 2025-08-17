// Concatenation of Array
// You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// Example 1:

// Input: nums = [1,4,1,2]

// Output: [1,4,1,2,1,4,1,2]
// Example 2:

// Input: nums = [22,21,20,1]

// Output: [22,21,20,1,22,21,20,1]
// Constraints:

// 1 <= nums.length <= 1000.
// 1 <= nums[i] <= 1000

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // Iteration (two pass) solution
    getConcatenation(nums) {
      const ans = [];
      for (let i = 0; i < nums.length; i++) {
        for (let num of nums) {
          ans.push(num);
        }
      }
      return ans;
    }
    // - Time complexity: O(n)
    // - Space complexity: O(n) for the output array.

    // iternation (one pass) solution with the Array object
      // instead of creating an empty array, we can use JS's Array object to generate an array of undefined values with the length of two times the length of nums
    getConcatenation2(nums) {
      let n = nums.length;
      let ans = new Array(2 * n); // use JavaScript's Array object to generate an array with two times the length of nums filled with undefined values
      for (let i = 0; i < n; i++) {
        ans[i] = ans[i + n] = nums[i];
      }
      return ans;
    }
    // - Time complexity: O(n)
    // - Space complexity: O(n) for the output array.

}
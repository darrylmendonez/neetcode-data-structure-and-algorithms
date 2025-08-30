// Subsets
// Given an array nums of unique integers, return all possible subsets of nums.

// The solution set must not contain duplicate subsets. You may return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [7]

// Output: [[],[7]]
// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset = [];

        const dfs = (i) => {
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            dfs(i + 1);

            subset.pop();
            dfs(i + 1);
        }

        dfs(0);
        return result;
    }
}

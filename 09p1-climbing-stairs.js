// Climbing Stairs
// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

// Return the number of distinct ways to climb to the top of the staircase.

// Example 1:

// Input: n = 2

// Output: 2
// Explanation:

// 1 + 1 = 2
// 2 = 2
// Example 2:

// Input: n = 3

// Output: 3
// Explanation:

// 1 + 1 + 1 = 3
// 1 + 2 = 3
// 2 + 1 = 3
// Constraints:

// 1 <= n <= 30

// Recursion - Depth First Search (DFS) - Solution:

class RecursionSolution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dfs = (i) => { // helper function that calculates the number of ways to climb to the top starting from step i


            if (i >= n) return i == n;
            // Base cases:
              // If i > n, you've overshot the top of the stairs. This is an invalid path, so i == n is false, which JavaScript coerces to 0.
              // If i === n, you've landed exactly on the top step. This is one valid path, so i == n is true, which JavaScript coerces to 1.


            return dfs(i + 1) + dfs(i + 2);
            // Recursive step: core of the logic
              // From any given step i, you have two choices:
                // Take 1 step to i + 1.
                // Take 2 steps to i + 2.
              // The total number of ways from step i is the sum of the ways from these two possible next steps.

        };
        return dfs(0); // Initial call: starts the process from the ground (step 0).
    }
}

// time complexity: O(2^n)
  // because the dfs function makes two recursive calls (dfs(i + 1) and dfs(i + 2)). This creates a binary recursion tree that grows exponentially with the input n. The function ends up re-calculating the results for the same steps multiple times, which makes it very inefficient for larger values of n.
  // a better approach would be to use Dynamic Programming so we can cache or memoize function calls and reuse the result



// Dynamic Programming Solution:

// visualize with a descision tree:

// n = 5

//                    0
//            1                 2
//        2       3         3       4
//    3     4   4   5      4  5    5  6
//  4   5  5  6... 
// running out of space but continue the drawing until each branch reaches 5 or more
// once done, count how many times 5 appears
// notice that there are two instances of 2 but the branches they create are exactly the same
  // So instead of recalculating the second 2 we can just reuse the work from the first 2
// Same with all instances of 3, calculate once and then reuse solution for other instances
// Same with 4, etc...
// This gives you an O(n) time complexity. Each sub problem is only being solved once
// We are caching the result, also known as memoization
// So we can start at the bottom, meaning start at 5 which is also our value of n, and work our way up
  // This is called Bottom-up Dynamic Programming
    // meaning work backwards
      // start at the 5th step
  // create array with length of 5 and all items undefined: DP = [      ]
  // If you start at the fifth step, how many ways to get to the fifth step? 1, take zero steps: DP = [      1] 
  // At fourth step, how many ways to get to fifth step? 1, take one step: DP = [     1, 1]
  // At 3rd step, how many ways..? Just add two prev numbers, so 2: DP = [    2, 1, 1]
  // At 4th..? add two prev, 3 + 2 = 5: DP = [  5, 3, 2, 1, 1]
  // 5 + 3 = 8: DP = [8, 5, 3, 2, 1, 1]

// we don't even need an array, we only need the two prev numbers
  // Or we just need two variables being shifted n - 1 times

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
      let one = 1
      let two = 1
      for (let i = 0; i < n - 1; i++) {
        const temp = one;
        one = one + two;
        two = temp;
      }
      return one;
    }
}
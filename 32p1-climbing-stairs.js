// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

// Brute Force: Top-Down Recursion Solution
const bruteForce = (n) => {
  const dfs = (i) => {
    if (i >= n) {
      return i === n; // boolean will coerce to 0 or 1
    }
    return dfs(i + 1) + dfs(i + 2);
  };
  return dfs(0);
}
// Time Complexity: O(2^n) because it recalculates the same subproblems over and over again. This redundancy grows exponentially as n increases.

console.log(bruteForce(2)); // 2
console.log(bruteForce(3)); // 3
console.log(bruteForce(5)); // 8

// Optimal: DP - Bottom Up Solution
var climbStairs = function(n) {
    if (n < 2) {
      return n;
    }
    let num1 = 1;
    let num2 = 1;
    let currentSum;
    let i = 2;
    while (i <= n) {
      currentSum = num1 + num2;
      num1 = num2;
      num2 = currentSum;
      i++;
    }
    return currentSum;
};

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(5)) // 8
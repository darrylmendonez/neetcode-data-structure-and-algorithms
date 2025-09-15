// 63. Unique Paths II
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1
 

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// Brute Force Dynamic Programming Top-Down solution:
var uniquePathsWithObstaclesBruteForce = function(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));

  const dfs = (r, c) => {
    if (
      r === m || // if we're below the grid
      c === n || // if we're to the right of the grid
      obstacleGrid[r][c] === 1 // if this cell is blocked
    ) {
      return 0;
    }

    // set end point cell to 1
    if (r === m - 1 && c === n - 1) {
      return 1;
    }

    // we've already computed the value in this position
    if (dp[r][c] !== -1) {
      return dp[r][c];
    }
    dp[r][c] = dfs(r + 1, c) + dfs(r, c + 1);
    return dp[r][c];
  };
  return dfs(0, 0);
};

console.log(uniquePathsWithObstaclesBruteForce([[0,0,0],[0,1,0],[0,0,0]])) // 2
console.log(uniquePathsWithObstaclesBruteForce([[0,1],[0,0]])) // 1

// Dynamic Programming Solution
var uniquePathsWithObstaclesDynamicProgramming = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // add an extra slot so we don't need to worry about going out of bounds later
    const dp = new Array(n + 1).fill(0);
    dp[n - 1] = 1;
    for (let r = m - 1; r >= 0; r--) {
      for (let c = n - 1; c >= 0; c--) {

        // if cell is blocked off
        if (obstacleGrid[r][c] === 1) {
          dp[c] = 0; // set current column to 0 since no path can use this cell

        // if cell is not blocked off
        // since we added an extra slot when we initialized dp, we don't need to worry if we're at the rightmost column. The extra slot has a 0 so when we need to check the value to the right in our rightmost column, we can just add a 0 which will have no impact in our calculation for finding the value for the current column - dp[c]
        } else {

          // at the start of the calculation, dp[c] holds the value from the row below (calculated in the previous outer loop).
          // dp[c + 1] holds the value for the cell to the right (which was just calculated in the current inner loop).
          // add these together to update the value of dp[c]
          dp[c] += dp[c + 1];
        }
      }
    }
    return dp[0];
};

// TC: O(n * m)
// SC: O(n)

console.log(uniquePathsWithObstaclesDynamicProgramming([[0,0,0],[0,1,0],[0,0,0]])) // 2
console.log(uniquePathsWithObstaclesDynamicProgramming([[0,1],[0,0]])) // 1

// var uniquePathsWithObstacles = function(obstacleGrid) {
    
// };
// 695. Max Area of Island
// Medium
// Topics
// premium lock icon
// Companies
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();

    const dfs = (r, c) => {
      const pos = r + ',' + c;
      if (
        r < 0 ||
        c < 0 ||
        r >= rows ||
        c >= cols ||
        grid[r][c] === 0 || // Corrected typo: grid, not grids
        visited.has(pos)      // Added check for already visited cells
      ) {
        return 0;
      }

      visited.add(pos); // Mark current cell as visited

      // The area is 1 (for the current cell) + the area of its neighbors
      let currentArea = 1; 
      for (const [dr, dc] of directions) {
        currentArea += dfs(r + dr, c + dc);
      }
      return currentArea;
    }

    let maxArea = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pos = r + ',' + c;
        if (
          grid[r][c] === 1 && // Check if the cell is land
          !visited.has(pos) // and has not been visited yet
        ) {
          maxArea = Math.max(maxArea, dfs(r, c));
        }
      }
    }

    return maxArea
};
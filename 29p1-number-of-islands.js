// 200. Number of Islands
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an m x n 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) {
      return 0;
    }

    let result = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();

    const directions = [
      [-1, 0],  // up
      [1, 0],   // down
      [0, -1],  // left
      [0, 1],   // right
    ];

    const bfs = (startRow, startCol) => {
      const queue = new Queue();
      const startPos = startRow + ',' + startCol;
      
      queue.push([startRow, startCol]);
      visited.add(startPos);

      while (!queue.isEmpty()) {
        const [row, col] = queue.pop();
        for (const [rowOffset, colOffset] of directions) {
          const neighborRow = row + rowOffset;
          const neighborCol = col + colOffset;
          const neighborPos = neighborRow + ',' + neighborCol;

          if (
            neighborRow >= 0 && // is neighbor within top boundary
            neighborCol >= 0 && // is neighbor within left boundary
            neighborRow < rows && // is neighbor within bottom boundary
            neighborCol < cols && // is neighbor within right boundary
            grid[neighborRow][neighborCol] === '1' && // is neighbor cell land
            !visited.has(neighborPos) // has neighbor not been visited
          ) {
            queue.push([neighborRow, neighborCol]);
            visited.add(neighborPos);
          }
        }
      }
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const currPosition = grid[r][c];
        const currPosAsString = r + ',' + c;
        if (
          currPosition === '1' && // Check for land
          !visited.has(currPosAsString) // and if it has not been visited yet
        ) {
          bfs(r, c);
          result++;
        }
      }
    }

    return result;
};
// 1091. Shortest Path in Binary Matrix
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

 

// Example 1:


// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:


// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1
 

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  if (
    grid[0][0] === 1 || // starting cell is 1
    grid[grid.length - 1][grid[0].length - 1] === 1 // ending cell is 1
  ) {
    return -1;
  }
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    const queue = [];

    visited.add('0,0');
    queue.push([0, 0]);

    let length = 1;
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [r, c] = queue.shift();

        // if we've reached the ending cell
        if (
          r === rows - 1 &&
          c === cols - 1
        ) {
          return length;
        }

        const directions = [
          [0, 1],
          [0, -1],
          [1, 0],
          [-1, 0],
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ];

        for (const [dr, dc] of directions) {
          const newR = r + dr;
          const newC = c + dc;
          const pos = newR + ',' + newC;

          if (
            newR < 0 ||
            newC < 0 ||
            newR >= rows ||
            newC >= cols ||
            grid[newR][newC] === 1 ||
            visited.has(pos)
          ) {
            continue;
          }
          visited.add(pos);
          queue.push([newR, newC]);
        }
      }
      length++;
    }
    return -1;
};

console.log(shortestPathBinaryMatrix([[0,1],[1,0]])); // 2
console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]])); // 4
console.log(shortestPathBinaryMatrix([[1,0,0],[1,1,0],[1,1,0]])); // -1

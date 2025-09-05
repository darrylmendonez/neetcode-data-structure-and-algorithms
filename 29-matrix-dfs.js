// Graphs - Matrix DFS

//    0  1   2   3
//   _______________
// 0 |  0  0   0   0 
// 1 |  1  1   0   0
// 2 |  0  0   0   1
// 3 |  0  1   0   0

// Q: Count the unique paths from the top left to the bottom right. A single path may only move along 0's and can't visit the same cell more than once.

let matrix = [[0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]];

const dfs = (grid, r, c, visit) => {

  // get dimensions of matrix
  const ROWS = grid.length;
  const COLS = grid[0].length;

  // Create a unique string key for the current cell (e.g., "0,1")
  const pos = r + ',' + c;

  if (
    Math.min(r, c) < 0 ||
    r === ROWS ||
    c === COLS ||
    visit.has(pos) || // Use visit.has() to check if the cell has been visited
    grid[r][c] === 1
  ) {
    return 0;
  }

  // if we've made it to the bottom right square, the end point
  if (
    r === (ROWS - 1) &&
    c === (COLS - 1)
  ) {
    return 1;
  }

  visit.add(pos); // Use visit.add() to mark the cell as visited

  // Track how many ways from this position to the destination.
  let count = 0;

  // Check all 4 directions from current position
  count += dfs(grid, r + 1, c, visit); // Check down
  count += dfs(grid, r - 1, c, visit); // Check up
  count += dfs(grid, r, c + 1, visit); // Check right
  count += dfs(grid, r, c - 1, visit); // Check left

  visit.delete(pos); // Use visit.delete() to un-mark for backtracking
  return count;
}

// Pass a new Set() directly into the initial function call.
console.log(dfs(matrix, 0, 0, new Set()));

// time complexity: O(4 ^ (r * c)) where 4 is the number of branches (up, down, left, right) raised to the power of the height of the tree which is r * c where r is the number of rows and c is the number of columns or more commonly referred with n and m so O(4 ^ (n * m))
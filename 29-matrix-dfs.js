// Graphs - Matrix DFS

//    0  1   2   3
//   _______________
// 0 |  0  0   0   0 
// 1 |  1  1   0   0
// 2 |  0  0   0   1
// 3 |  0  1   0   0

// Q: Count the unique paths from the top left to the bottom right. A single path may only move along 0's and can't visit the same cell more than once.

// Brainstorm: 
  // Use DFS to recursively check each valid position to see which directions are valid to go to until we reach the destination. Once we reach the destination, return 1 which will get added to a Count tracker

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

  // all conditions of being blocked - out-of-bounds, already visited, or cell is a 1
  if (
    Math.min(r, c) < 0 || // out of bounds going up or to the left. We can simplify using the min method because if the min of r & c is out of bounds, then it doesn't matter if the other is out of bounds either

    r === ROWS || // if r is out of bounds going down
    c === COLS || // if c is out of bounds going right
    
    visit.has(pos) || // check if the cell has been visited

    grid[r][c] === 1 // if cell has a 1 value
  ) {
    return 0;
  }

  // if we've made it to the destination - the bottom right square
  if (
    r === (ROWS - 1) &&
    c === (COLS - 1)
  ) {
    return 1;
  }

  // if it's a valid cell then mark it as visited
  visit.add(pos);

  // Track how many ways from this position to the destination.
  let count = 0;

  // Check all 4 directions from current position
  count += dfs(grid, r + 1, c, visit); // Check down
  count += dfs(grid, r - 1, c, visit); // Check up
  count += dfs(grid, r, c + 1, visit); // Check right
  count += dfs(grid, r, c - 1, visit); // Check left

  // Un-mark cell to unvisited for backtracking. This allows us to pop back to a cell that has another way of reaching the destination. As we return count to each previous cell in the path we took to reach the destination, we will also be checking if there is another path. So we need to mark these cells that we are popping out of as unvisited so that they can be used again for other paths.
  visit.delete(pos); 

  return count; // As we pop back to each cell we are returning the current count of the number of valid paths. Once we reach back to the starting cell, the top-left, we will have the total number of valid paths
}

// Pass a new Set() directly into the initial function call.
console.log(dfs(matrix, 0, 0, new Set()));

// time complexity: O(4 ^ (r * c)) where 4 is the number of branches (up, down, left, right) raised to the power of the height of the tree which is r * c where r is the number of rows and c is the number of columns or more commonly referred with n and m so O(4 ^ (n * m))
// Dynamic Programming - 2-Dimension

// Count paths

// Q: Count the number of unique paths from the top left to the bottom right. You are only allowed to move down or to the right.

//    0   1   2   3
// 0
// 1
// 2
// 3 

// Brute Force Solution

const bruteForce = (r, c, rows, cols) => {
  // if we're out-of-bounds
  if (
    r === rows || // if we're one row below the grid
    c === cols // if we're one column to the right of the grid
  ) {
    return 0;
  }

  // if we're at the end position
  if (
    r === rows - 1 &&
    c === cols - 1
  ) {
    return 1;
  }

  return (bruteForce(r + 1, c, rows, cols) + bruteForce(r, c + 1, rows, cols));
}

// TC & SC: O(2^(n + m)) - an exponential solution

console.log(bruteForce(0, 0, 4, 4));

// Top-Down Dynamic Approach - using caching to avoid repeating calculations

const memoization = (r ,c, rows, cols, cache) => {
  if (
    r === rows ||
    c === cols
  ) {
    return 0;
  }
  if (cache[r][c] > 0) {
    return cache[r][c];
  }
  if (
    r === rows - 1 &&
    c === cols - 1
  ) {
    return 1;
  }
  cache[r][c] = (memoization(r + 1, c, rows, cols, cache) +
    memoization(r, c + 1, rows, cols,cache));
  return cache[r][c];
}

const rows = 4;
const cols = 4;
const cache = Array.from({ length: rows }, () => new Array(cols).fill(0));

console.log(memoization(0, 0, 4, 4, cache));

// TC & SC: O(n * m)

// Bottom-Up Approach:

const dp = (rows, cols) => {

  // represents the row below the grid which at initialization is all zeros - the row below the grid
  let prevRow = new Array(cols).fill(0);

  // iterate from the bottom of the grid (rows - 1) up to the top row (0)
  for (let i = rows - 1; i >= 0; i--) {
    const currRow = new Array(cols).fill(0);

    // set the rightmost cell to 1. Any cell in the last column will only have one path which is to move down
    currRow[cols - 1] = 1;

    // for each row, iterate from right to left (cols - 2 to 0). The reason we start at cols - 2 is because we know the cell in the last column will be 1 which we just assigned to with currRow[cols - 1] = 1 above.
    for (let j = cols - 2; j >= 0; j--) {

      // the number of paths from the current cell (i, j) is the sum of:
      // - the number of paths from the cell to the right: currRow[j + 1]
      // - the number of paths from the cell below: prevFow[]
      currRow[j] = currRow[j + 1] + prevRow[j];
    }

    // after a full row is computed, prevRow is updated to currRow, preparing for the calculation of the row above it in the next loop
    prevRow = currRow;
  }

  // after the loop completes, the final prevRow holds the values for the top row (row 0). The answer, the number of paths from the top-left corner, is therefore prevRow[0]
  return prevRow[0];
}

// TC: O(n * m) where n is the number of rows and m is the number of columns
// SC: O(m) where m is the number of columns

console.log(dp(4, 4));

//      0   1   2   3
// 0   20   10  4   1
// 1   10   6   3   1
// 2   4    3   2   1
// 3   1    1   1   1

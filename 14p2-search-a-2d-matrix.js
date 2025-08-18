// Search a 2D Matrix
// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

// Example 1:



// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

// Output: true
// Example 2:



// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

// Output: false
// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10000 <= matrix[i][j], target <= 10000

// use binary search twice
// first perform binary search to find the row that could potentially have the target
// once the potential array is found, perform binary search on this array as well until we find the target

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
      const numberOfRows = matrix.length;
      const numberOfColumns = matrix[0].length;

      let topRow = 0;
      let bottomRow = numberOfRows - 1;

      while (topRow <= bottomRow) {
        let middleRow = Math.floor((topRow + bottomRow) / 2);
        if (target > matrix[middleRow][numberOfColumns - 1]) {
          topRow = middleRow + 1;
        } else if (target < matrix[middleRow][0]) {
          bottomRow = middleRow - 1;
        } else {
          break;
        }
      }

      if (topRow > bottomRow) {
        return false;
      }

      let row = Math.floor((topRow + bottomRow) / 2);
      let left = 0;
      let right = numberOfColumns - 1;

      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target > matrix[row][middle]) {
          left = middle + 1;
        } else if (target < matrix[row][middle]) {
          right = middle - 1;
        } else {
          return true;
        }
      }
      return false;
    }
}

// time complexity:  O(log(m * n)) - sum of both binary searches O(log(m) + log(n)) time complexity, which is equivalent to O(log(m * n))

// space complexity: O(1) - only using a few variables to keep track of pointers regardless of the size of the matrix

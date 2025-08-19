// 278. First Bad Version
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1
 

// Constraints:

// 1 <= bad <= n <= 231 - 1

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        let result = -1; // establish a result var and initialize to -1 as there is no such thing as a version -1
        while (left <= right) {
          const middle = Math.floor((left + right) / 2);
          if (isBadVersion(middle)) {
            result = middle; // if we find a bad version, set version number to result
            right = middle - 1; // then set right to left of middle to run binary search again
          } else { // didn't find a bad version
            left = middle + 1; // so set let to right of middle and run binary search again
          }
        }
        return result; // once while loop is complete the first bad version will be the value of result
    };
};
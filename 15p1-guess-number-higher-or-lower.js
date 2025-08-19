// Guess Number Higher Or Lower
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// 0: your guess is equal to the number I picked (i.e. num == pick).
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// Return the number that I picked.

// Example 1:

// Input: n = 5, pick = 3

// Output: 3
// Example 2:

// Input: n = 15, pick = 10

// Output: 10
// Example 3:

// Input: n = 1, pick = 1

// Output: 1
// Constraints:

// 1 <= pick <= n <= ((2^31)-1)

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
      let left = 1;
      let right = n;

      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (guess(middle) > 0) { // if the number picked, the hidden answer, is higher than guess, which is the value of the middle
          left = middle + 1;
        } else if (guess(middle) < 0) { // if the number picked, the hidden answer, is lower than the guess, which is the value of the middle
          right = middle - 1;
        } else { // if the guess is correct, the middle value is the number picked, the hidden answer
          return middle; 
        }
      }
      return;
    }
}

// time complexity: O(log n) - by guessing the middle value, we eliminate half the values every time. So how many times can we eliminate half of the values of an array before we're left with a single value? That is the O(log base 2 n) algorithm where n is the size of the input array. - O(log n)
// space complexity: O(1) - we're just using pointer variables which only take up O(c) space or constant space which reduces to O(1) space. -  O(1)

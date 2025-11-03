// Sorting
  // Insertion Sort

  // given an array of numbers sort in ascending order:

  //  indecis:  0  1  2  3  4
  const nums = [2, 3, 4, 1, 6];

  // use two pointers to compare and starting at the fist two elements
  // if the first one is greater than the second one then swap the values and then increment both counters
  // then compare again
    // If they're sorted then increment the counter
    // If not, we need swap their values but we also need to check the previous index and compare those two values until we find a previous value that is less than or equal to the current

  for (let i = 1; i < num.length; i++) {
    let j = i - 1; // reset j back to be directly to the left of i
    while (
      j >= 0 && // make sure we're not out-of-bounds
      arr[j + 1] < arr[j] // make sure the right pointer is less than the left pointer
    ) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--; // decrement to compare the index to the left to arr[j]
    }
  }

  // the comparison arr[j + 1] < arr[j] keeps our array stable. If we had an array [7, 3, 7], when we get to the point where we are comparing both 7's, the 7 that appears first would remain on the left of the second 7. This happens because the comparison is <. If it was <=, the 7's would swap. By using only <, we ensure that our sorting is considered stable because it preserves the order of elements that are the same

  // because we have a while loop nested in a for loop, it may seem that the time complexity is O(n^2). But in the while loop we only iterate j - 1 times in the worst case scenario where the array is sorted in descending order - ex: [4,3,2,1]. To visualize this on a 4 x 4 matrix, or a 4^2 matrix:

  // 

  // Where x's are where the while loop iterated. Remember we're just comparing the numbers to the left of j and executing the while loop when the right pointer is less than the left pointer. Also, don't forget we're skipping the first loop because we don't need to compare index 0. This actually makes the matrix look like:
  
  // -ooo
  // xxoo
  // xxxo
  // xxxx

  // where the dash means we skipped it - let i = 1 in the for loop
  
  // So for the while loop we're not iterating through each item, even in the worst case scenario so in theory, the time complexity is O((n^2)/2) or 0(1/2 * n^2) but we generally don't care about constants so we round it to O(n^2) but just wanted to point out that it is different than most nested for-loops and how it's different.

  // Also worth mentioning, that the best case scenario, where the array is already sorted the time complexity is O(n) because it's linear and we never have to execute the while loop
  
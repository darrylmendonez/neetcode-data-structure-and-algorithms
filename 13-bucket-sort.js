// Bucket Sort

// Super efficient sorting algorithm that runs in O(n) time complexity but has a lot of constraints which is why it is not used often despite having a fast time complexity
  // Constraints:
    // if all values that you're sorting fit in a finite range

  
  // For a bucket sort, we iterate through the input array and count how often an element appears and store that in another array

  [2, 1, 2 , 0, 0, 2] // example input array
  [0, 0, 0] // example of an initialized counts array

// idx:     0  1  2
           [2, 1, 3] // updated counts array

  // in this case, 0 appears 2 times, 1 appears 1 time, and 2 appears 3 times. The value of each element in the counts array represents the number of times each number appears in the input array. Keep in mind that the index does not necessarily reflect the value of the element in the input array.

  // once we have the counts arr updated, we can just replace the elements in arr. We know that the 0's will go first and that we have 2 of them so we can replace the first two elements in arr with 0's. and we continue the same process... We don't even need to swap the initial values, just simply replace them. So far, all other sort algorithms required us to swap the elements - insertion, merge, and quick sort. But with bucket sort we don't have to bother with swapping.


  // psuedo code:
  const arr = [2, 1, 2 , 0, 0, 2]
  const counts = [0, 0, 0]
  for (let i = 0; i < arr.length; i++) {
    counts[n]++;
  }

  let i = 0;
  for (let n = 0; n < counts.length; n++) {
    for (let j = 0; j < counts[n]; j++) {
      arr[i] = n;
      i++;
    }
  }
  return arr;

  // time complexity: O(n) - even though we have a nested loop, doesn't mean it's O(n^2). The nested loop doesn't run every single time. the i pointer increments everytime the code actually runs and evaluates. The i pointer starts at the beginning and keeps being incremented until it goes out of bounds. in the example the nested loop only ran 2 times, then 1 time, and then 3 times and all of those will total up to be n, which is why this nested for-loop is still O(n) not O(n^2). Also, the for-loop where we iterate through the input array one time, so that is also O(n) and when added together we get O(2n) which reduces to O(n).

  // space complexity: O(1) - we used a counts array. The size of the array can go up to the size of the input array which is a fixed size which will be a constant so that means the space complexity is O(c), where c stands for constant, and that just reduces to O(1).
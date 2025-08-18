// Binary Search - Search Array

// Search array is an algorithm for searching a sorted array.
  // we start with a left and right pointers
  // the left pointer points at index 0
  // the right pointer points at the last index
  // while the left pointer is <= the right pointer...
    // a middle pointer points at the middle index
      // if the length of the array is odd, then we can calculate the middle and round down to find the middle index
    // if target > the mid pointer value, we move the left pointer to the index after the middle pointer
    // else if the target is less than the mid pointer value, we move the right pointer before the middle pointer
    // else the middle pointer value is the target so we return the mid pointer value
  // if the while loop finishes without returning the mid, then the target is not in the array so we return -1 to indicate that

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = (left + right) / 2;
      if (target > arr[mid]) {
        left = mid + 1;
      } else if (target < arr[mid]) {
        right = mid - 1;
      } else {
        return mid;
      }
    }
      return -1;
  }

  // time complexity: O(logn) - how many times can you divide n by 2 until it's equal 1 because that will tell us how many times the while loop executes. Inside the while loop we're just doing a constant time  operation, O(c), so that doesn't matter. But O(logn) is the worst case which is much more efficient than O(n)
  
  // space complexity: O(1) - we're just allocating a few pointers, no arrays or anything of variable length therefore it's just O(1)
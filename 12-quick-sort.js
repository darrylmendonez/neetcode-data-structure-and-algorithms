// QuickSort

// Pivot Value - usually the right-most value
// Take the input array and partition it into two pieces, a left and a right array
// iterate through every single value in the input array except the pivot value and compare the current value to the pivot value
// any value that is less than or equal to the pivot value goes in the left array.
// any value that is more goes on the right side
// then we can swap the pivot point to where the right array starts
// the partition can be done in place and we don't need to allocate any extra memory. we can do it in just a single array
// now that we have the right and left arrays broken up correctly, we can recursively quickSort both arrays again
  // keep in mind the pivot value is already where it needs to be.

  const quickSort = (arr, start, end) => {
    if (end - start + 1 <= 1) { // check to see if the current arr has one or zero elements
      return arr; // return arr because it has length 0 or 1, which means it is already sorted
    }

    const pivot = arr[end];
    let left = start;

    // Partition: elements smaller than pivot on left side
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        const temp = arr[left];
        arr[left] = arr[i];
        arr[i] = temp;
        left++;
      }
    }

    // Move pivot in-between left & right sides
    arr[end] = arr[left];
    arr[left] = pivot;

    // recursively quick sort left array
    quickSort(arr, start, left - 1);

    // recursively quick sort right array
    quickSort(arr, left + 1, end);

    return arr;
  }

const nums = [7, 3, 7, 4, 5];
console.log(quickSort(nums, 0, nums.length - 1));

  // Is quick sort considered stable?
  // No, because if there are duplicate elements, quick sorting will not preserve the relative order of values when there is a tie between them.
  // Example:

  // 5 is the pivot value
  // [7, 3, 7, 4, 5] 

  // comparing the first element to the pivot, 7 > 5, so it stays in place
  // [7, 3, 7, 4, 5]
  
  // comparing the 2nd element, 3 swaps with first element, 7, since 3 < 5
  // [3, 7, 7, 4, 5] 

  // comparing the 3rd element which is the second 7, 7 < 5 so second 7 remains 
  // [3, 7, 7, 4, 5] 

  // comparing the 4th element, 4, 4 < 5, so this would then swap with the first 7
  // [3, 4, 7, 7, 5] 
  // Unstable behaviour: so now the first 7 is after the second 7 thus, the order of elements that are of equal value are no longer in their original order. This is why quick sort is considered an unstable algorithm. The order of equivalent characters in the input array can never be guaranteed.

  // Time complexity of quick sort is generally O(nlogn) but in worse case scenario, which is when the input array is in descending order, then it would be O(n^2) because you would have to move every single element to the left.

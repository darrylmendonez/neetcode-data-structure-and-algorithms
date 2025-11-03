// Merge Sort

// The main idea of merge sort is to take the input array and split it into two approximate halves. And then take those two halves and split them into two approximate halves. And continue splitting each subarrays until you can't split them anymore and you're left with indiviual elements for us to then sort.

// idx:        0  1  2  3  4
             [3, 2, 4, 1, 6]

        [3, 2, 4]             [1, 6]

      [3, 2]  [4]           [1]     [6]

  [3]   [2]

// This technique is called Divide & Conquer because we're taking the original problem and dividing it into sub problems and we're solving those subproblems before we solve the original problem

// Sort [3] & [2] in [3, 2] to become [2, 3]:
             [3, 2, 4, 1, 6]

        [3, 2, 4]             [1, 6]

      [2, 3]  [4]           [1]     [6]

//  [3]   [2]

// sort [2, 3] & [4] in [3, 2, 4] to become [2, 3, 4]:
             [3, 2, 4, 1, 6]

        [2, 3, 4]             [1, 6]
                            [1]     [6]
//     [2, 3]  [4]           
      
//  [3]   [2]

// sort [1] & [6] in [1, 6] which remains [1, 6]:
             [3, 2, 4, 1, 6]

        [2, 3, 4]             [1, 6]
                        // [1]     [6]
//     [2, 3]  [4]           
      
//  [3]   [2]

// sort [2, 3, 4] & [1, 6] in [3, 2, 4, 1, 6] to become [1, 2, 3,  4, 6]:
             [1, 2, 3,  4, 6]

        // [2, 3, 4]          [1, 6]
                        // [1]     [6]
//     [2, 3]  [4]           
      
//  [3]   [2]

const mergeSort = (nums, start, end) => {
  if (end - start + 1 <= 1) {
    return nums;
  }
  const mid = Math.floor((start + end) / 2);
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);
  merge(nums, start, mid, end);
  return nums;
}

const merge = (nums, start, mid, end) => {
  let length1 = mid - start + 1;
  let length2 = end - mid;
  const leftArray = new Array(length1);
  const rightArray = new Array(length2);
  for (let i = 0; i < length1; i++) {
    leftArray[i] = nums[start + i];
  }
  for (let j = 0; j < length2; j++) {
    rightArray[j] = nums[mid + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = start;
  while (i < length1 && j < length2) {
    if (leftArray[i] <= rightArray[j]) {
      nums[k] = leftArray[i];
      i++;
    } else {
      nums[k] = rightArray[j];
      j++;
    }
    k++;
  }
  while (i < length1) {
    nums[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < length2) {
    nums[k] = rightArray[j];
    j++;
    k++;
  }
}


// time complexity of MergeSort: O(nlogn)
  // MergeSort is preferred over InsertionSort because it has a better time complexity. 
    // InserionSort's time complexity is O(n^2)

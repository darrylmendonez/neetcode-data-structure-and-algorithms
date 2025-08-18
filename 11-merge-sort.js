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


// time complexity of MergeSort: O(nlogn)
  // MergeSort is preferred over InsertionSort because it has a better time complexity. 
    // InserionSort's time complexity is O(n^2)

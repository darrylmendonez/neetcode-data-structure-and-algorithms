// Heap / Priority Queue

  // Minimum priority 
  // Maximum priority

  // 1) Structure property
    // A Heap is considered a Complete Binary Tree
      // meaning that every single level is fill with non-null nodes except the last level. The last level is allowed to have nodes that are null
    // As we add values, they are added from left to right so if the last level has missing nodes, then it should at the end of the level
  // 2) Order property
    // Minmum priority
      // The root is the smallest value in the tree
      // recursively, for the root node, the children should have a higher value then the root. and so on... the children of the root, should also have children that are of higher value than itself.
    // Maximum priority
      // the opposite of Minimum priority
        // the root is the largest value in the tree
        // children of each node is smaller than their parent
    
  // Heaps are allowed to have duplicates. This isn't true for Binary Search Trees but it is true for Heaps

  // under the hood, Heaps are arrays
    // they start at index 1 not 0 like most arrays



//                          14
//                      19        16
//                  21     26   19   68
//              65    30  

//       0  1   2   3   4   5   6   7   8   9
//      [x, 14, 19, 16, 21, 26, 19, 68, 65, 30]

// we skip index 0, so the first item is at index 1
  // the reason we do this is so that we can use math formulas to help us identify the indices of nodes
    // leftChild = 2 * i
    // rightChild = 2 * i + 1
    // parent = 1 / 2

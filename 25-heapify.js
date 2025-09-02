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
    // parent = i / 2


// If we're asked to push 17 into our Heap / Priority Queue...

//                          14
//                      19        16
//                  21     26   19   68
//              65    30  

//       0  1   2   3   4   5   6   7   8   9
//      [x, 14, 19, 16, 21, 26, 19, 68, 65, 30]

// ... we would want it to be the left child of 26 so that we keep it contiguous to abide by the Structure Property
// for the Order Property, the smaller needs to be the parent. So if 17 starts out at index 10 in the array, we can find the parent by using the formula parent = i / 2. This would take us to index 5 and we would swap the two values. Then we would continue this process until the order of the tree is correct. Swap 17 with the new parent which is 19 found at index 2. Then we would check the parent of index 2 which is the root node with a value of 14 and we see that it is less than 17 so we now have the correct order.

const heapify = (self, arr) => {
  // 0-th position is moved to the end
  arr.push(arr[0]);

  self.heap = arr;
  let curr = Math.floor((self.heap.length - 1) / 2)
  while (curr > 0) {

    // Percolate down
    let idx = curr;
    const leftChild = 2 * idx;
    const rightChild = 2 * idx + 1;
    const parent = idx / 2;
    while (leftChild < self.heap.length) {
      if (
        rightChild < self.heap.length
        && self.heap[rightChild] < self.heap[leftChild]
        && self.heap[idx] > self.heap[rightChild]
      ) {

        // Swap right child
        const temp = self.heap[idx];
        self.heap[idx] = self.heap[rightChild];
        self.heap[rightChild] = temp;
        idx = rightChild;
      } else if (self.heap[idx] > self.heap[leftChild]) {

        // Swap left child
        const temp = self.heap[idx];
        self.heap[idx] = self.heap[leftChild];
        self.heap[leftChild] = temp;
        idx = leftChild;
      } else {
        break;
      }
      curr--;
    }
  }
}

// Benefits of Heaps
  // Building a heap (or Heapify) runs in linear time - O(n)
  // You can push and pop from the heap in O(log n) time
  // We can get the min or max in O(1) time
  // Time complexity for sorting is O(n * log n)

// Downside of Heaps:
  // We can't just search for a random element in O(log n) time like we can in BST's since BST's have an order.
    // In BST's the left child is always lesser than the parent and the right child is always greater than the parent

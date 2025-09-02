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

class Heap {
  constructor() {
    this.heap = [0];
  }

  // insert
  push(this, val) {
    this.heap.push(val);
    idx = this.heap.length - 1;

    const parent = i / 2;

    // Percolate up
    while (this.heap[i] < this.heap[Math.floor(parent)]) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(parent)];
      this.heap[Math.floor(parent)] = temp;
      idx = Math.floor(parent);
    }
  }

  // remove
  pop() {
    if (this.heap.length === 1) {
      return null;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const result = this.heap[1];

    // Move last value to root
    this.heap[1] = this.heap.pop();
    let idx = 1;

    const leftChild = 2 * idx;
    const rightChild = (2 * idx) + 1;

    // Percolate down
    while (leftChild < this.heap.length) { // while we have a left child

      if (
        (rightChild < this.heap.length) // do we also have a right child?
        && (this.heap[rightChild] < this.heap[leftChild]) // and is the right child less than the left child?
        && (this.heap[idx] > this.heap[rightChild]) // and is the current node greater than the right child?
      ) {

        // Swap right child
        const temp = this.heap[idx];
        this.heap[idx] = this.heap[rightChild];
        this.heap[rightChild] = temp;
        idx = rightChild;

      } else if (this.heap[idx] > this.heap[leftChild]) { // is the current node greater than the left child

        // Swap left child
        const temp = this.heap[idx];
        this.heap[idx] = this.heap[leftChild];
        this.heap[leftChild] = temp;
        idx = leftChild;
      } else { // the node is already in the proper position
        break; // so we can break out of the loop
      }
    }
    return result;
  }
}

// time complexity: O(log n) where n is the number of values in the heap AKA the array. It essentially come from perculating down
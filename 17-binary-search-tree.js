// Binary Search Trees (BST)

//            2
//        1       3
//     4

// Binary Search Trees are just like Binary Trees except they have a sorted property
  // For every single node on the left sub-tree of a particular node has to be less than the value of that particular node
  //  and every single node on the right sub-tree of a particular node has to be greater than the value of that particular node
  // and there are no duplicate values in a binary search tree

  // time complexity: since BST's are sorted, we can follow the same logic as binary search

  const search = (root, target) => {
    if (!root) return false;

    if (target > root.val) {
      return search(root.right, target)
    } else if (target < root.val) {
      return search(root.left, target)
    } else {
      return true
    }
  }

  // time complexity: O(log n) assuming the bst is roughly balanced
    // if it's not balanced then the TC would be O(h) where h is the height or we can just say O(n)
// tree maze

// Q1: Determine if a path exists from the root of the tree to a leaf node. It may not contain any zereos. If a path exists return true, if not, return false.

//                4
//            0       1
//              7   2   0


// Backtracking
  // a brute force solution would be to check every single path until we find a path that works
  // we check the root. is it a 0? no, it's a 4 so that is valid so far.
  // now we check the left child. it is a 0 so now this path is invalid.
  // we don't need to check the right child because we already know this path is invalid
  // we can back track to the parent node, which is 4
  // now we can check the right child
  // is it 0? no, it's 1 so it's valid
  // check is left child. is it 0? no it's 2
  // check 2's left child. it's null
  // check 2's right child. it's null
  // since both childs are null, then we have found a leaf node that is valid which means we found a valid path. We can return true and we don't have to bother checking any other nodes.

  const canReachLeaf = (root) => {
    if (!root || root.val === 0) {
      return false;
    }

    if (!root.left && !root.right) { // it is a valid node but is it a leaf node?
      return true; // we have found the leaf node so return true
    }

    if (canReachLeaf(root.left)) { // does it have a left child?
      return true;
    }
    if (canReachLeaf(root.right)) { // does it have a right child?
      return true;
    }
    return false;
  }

  // time complexity: O(n) since worst case we would have to visit every node



  // Q2: Return the valid path from the root to the leaf node as an array. Assume that there is either 0 or 1 valid paths.

//                   4
//            0             1
//              7       3        2
//                        0

  const leafPath = (root, path) => {
    if (!root || root.val === 0) {
      return false;
    }
    path.push(root.val);

    if (!root.left && !root.right) { // is it a leaf node?
      return true;
    }
    if (canReachLeaf(root.left)) { // does it have a left child?
      return true;
    }
    if (canReachLeaf(root.right)) { // does it have a right child?
      return true;
    }
    path.pop();
    return false;
  }

  // time complexity: O(n) since worst case we would have to visit every node
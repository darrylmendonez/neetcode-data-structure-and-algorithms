// Binary Search Tree - Insert

// insert(root, 6)
//              4

// option 1:
//              6
//            4

// option 2:
//              4
//                 6

// option 2 is easier because it's easier to insert a node as a leaf node

const insert = (root, val) => {
  if (!root) { // base case: given the recursive calls, the function has traversed down and found an empty spot where the new node should be placed
    return new TreeNode(val);
  }

  if (val > root.val) {
    root.right = insert(root.right, val);
  } else if (val < root.val) {
    root.left = insert(root.left, val);
  }
  return root; // Return the (possibly modified) root node
}

// How it works:
// Imagine you are inserting val into root.right. The call is root.right = insert(root.right, val). If root.right was initially null, the insert function immediately hits this base case. It creates new TreeNode(val) and returns it. This returned node is then assigned to root.right, effectively linking the new node into the tree as the right child of root.

// time complexity: O(log n)

// Binary Search Tree - Remove

//              4
//           3     6
//        2      5   7


const minValueNode = (root) => {
  let curr = root;
  while (curr && curr.left) {
    curr = curr.left;
  }
  return curr;
}

const remove = (root, val) => {
  if (!root) return null;

  if (val > root.val) {
    root.right = remove(root.right, val);
  } else if (val < root.val) {
    root.left = remove(root.left, val);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      const minNode = minValueNode(root.right);
      root.val = minNode.val;
      root.right = remove(root.right, minNode.val);
    }
  }
  return root;
}

// time complexity: O(log n)
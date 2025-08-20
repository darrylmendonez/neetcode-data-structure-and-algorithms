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


// Remove
  // given a node to remove, we first, of course, have to search for it. 
    // is the val greater than, less than, or equal to the root.val?
    // if it's greater than, we check root.right
    // less than, we check root.left
    // and we continue traversing until we find the node equal to val
  // once we find and remove a node, we then have to return to the parent the rest of the tree that the removed node was originally pointing to
  // so there are three scenarios - removing a node that has 0 children, 1 child, or 2 children
    // For 0 children:
      // to remove the node with no children, we would just return null to the parent since it has no children for the parent to point to with its left pointer. By changing the parent node to point to null with its left pointer, we are removing the current node from the BST.
    // For 1 child:
      // we can't return null because then we would also be removing the children from the node we are removing. Instead, we return the child node of the node we're removing to the parent node to point to it with either its left or right pointer depending on if its less than or greater than the parent respectively
    // For 2 children:
      // we want to replace the current node - the node we're removing - with the minumum value node from its right subtree so we don't have to worry about if any of the nodes on one side need to be moved to another side. The best thing to do is to pick the minimum value node from the right sub tree of the current node, the node we're removing. This will ensure that the tree is still a valid BST.
      
      // minValueNode:
        // starting at the root as the current node, if it is not null and it's left pointer is not null, then we can move down to its left child and keep checking if that node has a left child, until we find a node that doesn't have a left child.
        // Once we find a child, with no left child, that will be the minimum value node.


        const minValueNode = (root) => {
          let curr = root;
          while (
            curr
            && curr.left // if the current node has a left child that is not null
          ) {
            curr = curr.left; // then we can move down to the left child
          }
          return curr; // once we find the child with no left child, then we have found our minimum value node
        }

      // technically, we can also change the largest value from the left sub tree of the node we're removing. Either way works but we'll stick with the minimum value from the right sub tree.

const remove = (root, val) => {
  if (!root) return null; // base case

  // search for val
  if (val > root.val) {
    root.right = remove(root.right, val);
  } else if (val < root.val) {
    root.left = remove(root.left, val);

  // at this point, we've found the val in the BST:
  } else {

    // when root has 0 or 1 children:
    if (!root.left) { // are we missing the left child?
      return root.right; // yes, then return the non-null child which is the right child, which will delete the current node by having the pointer point at root.right instead
    } else if (!root.right) { // are we missing the right child?
      return root.left; // yes, then return the non-null child which is the left child, which will delete the current node by having the pointer point at root.left instead

    // when root has 2 children:
    } else {
      const minNode = minValueNode(root.right); // find the minimum value node from the right subtree and return it
      root.val = minNode.val; // change the value of the current node - the node we're removing - to the minumum value node
      root.right = remove(root.right, minNode.val); // since we have two copies of the minimum value node, we have to remove the one that's a leaf node so we recursively call the remove function on it. Since we know that this is a node has less than 2 children, then this recursive function will not fire again. the if or the else if statements= will definitely execute preventing this else statement with the remove function from firing.
    }

  }
  return root;
}

// time complexity: O(log n)
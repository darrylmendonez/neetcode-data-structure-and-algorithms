// Depth-First Search

//                              4
//                          3         6
//                      2           5    7

// In an array we can iterate through the array from left to right.
// This can also be done in a Binary Search Tree although not as simple
// inorder traversal - going through nodes of a BST in order
  // before processing the root, in this case 4, we need to process the entire left subtree
  // we will need a recursive function to go through each node in sorted order
  // so we need to traverse down the tree by going down the left of each child until we find one that has a null left child, in this case 2. This will make it the lowest value node.
  // from here, we process the node - print, add to array, or whatever we're doing as we iterate through each node in ascending order
  // next we check if there is a right child, if so we process. In this case, 2 does not have a right child
  // then we pop back up to the parent and process that, 3
  // then we check if there is a right child, if so process. In this case, 3 does not have a right child
  // we pop back up to the root, 4, and process that
  // now we can check the right child of the root, which is 4
  // before we process that, we recursively check if it has a left child until we find the minimum value node of this right subtree just like we did for the left subtree of the root
  // in this case 5 is the minimum value node of the root's right subtree
  // from here we repeat the process we did when we found the 2 node in the left subtree of the root
  // process the 5,
  // check if it has a right child. no it doesn't
  // so pop back up to parent, and process - 6
  // then check right child, 7
  // has no left child, so process 7
  // has no right child, so we're done

  // solution: 2, 3, 4, 5, 6, 7

  const inorder = (root) => {
    if (!root) return;
    inorder(root.left); // keep going to the left until we reach a node that has null for its left child
    console.log(root.val); // process or, in this case, print the current node's value
    inorder(root.right); // check right child
  }

// time complexity: O(n) - we traverse every single node once so that makes the TC the size of the tree - O(n)



// preorder traversal
  // instead of traversing in inorder order, what if we wanted to start at the root node and then visit it's children and do that recursively
  // we can modify the inorder function slightly by processing the root.val first, then recursively call the left child, then the right

  const preorder = (root) => {
    if (!root) return;
    console.log(root.val); // process or, in this case, print the current node's value
    preorder(root.left); // check left child
    preorder(root.right); // check right child
  }



// postorder traversal
  // when we want to traverse all the values in the left subtree and then traverse all the values on the right and then process the root node

  const postorder = (root) => {
    if (!root) return;
    postorder(root.left); // check left child
    postorder(root.right); // check right child
    console.log(root.val); // process or, in this case, print the current node's value
  }

// reverse inorder

  const reverseInorder = (root) => {
    if (!root) return;
    reverseInorder(root.right); // keep going to the right until we reach a node that has null for its right child
    console.log(root.val); // process or, in this case, print the current node's value
    reverseInorder(root.left); // check left child
  }



// Why is it called Depth-First-Search?
  // because we went as deep as we can down the tree and then we make our way up but because we go all the way down is why we call it DFS.
  
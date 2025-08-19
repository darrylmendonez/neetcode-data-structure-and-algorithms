// 700. Search in a Binary Search Tree
// Easy
// Topics
// premium lock icon
// Companies
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

// Example 1:


// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:


// Input: root = [4,2,7,1,3], val = 5
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 107
// root is a binary search tree.
// 1 <= val <= 107

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (
    !root // if current node is null, then return null
    || root.val === val // if the current node's value matches the target val, we found the node so we return the root node
  ) {
    return root;
  }
  return val < root.val
    ? searchBST(root.left, val) // if the val is less than the current val, search to the left
    : searchBST(root.right, val); // if the val is greater than the current val, search to the right
};

// time complexity: O(log n) because we are eliminating half of the tree at each step as long as we have a roughly balanced tree
  // if it's not balanced then the TC would be O(h) where h is the height or we can just say O(n)
    // like if there are just right child nodes or if there are only just left child nodes (which is essentially a singly linked list)
// Delete Node in a BST
// You are given a root node reference of a BST and a key, delete the node with the given key in the BST, if present. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: There can be multiple results after deleting the node, return any one of them.

// Example 1:



// Input: root = [5,3,9,1,4], key = 3

// Output: [5,4,9,1]
// Explanation: Another valid answer is:



// Example 2:

// Input: root = [5,3,6,null,4,null,10,null,null,7], key = 3

// Output: [5,4,6,null,null,null,10,7]
// Constraints:

// 0 <= The number of nodes in the tree <= 10,000.
// -100,000 <= key, Node.val <= 100,000
// All the values Node.val are unique.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
      // base case
      if (!root) return null;

      // search for key node
      if (key > root.val) {
        root.right = this.deleteNode(root.right, key);
      } else if (key < root.val) {
        root.left = this.deleteNode(root.left, key);

      // found key node
      } else {

        // if key node has 0 or 1 children
        if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;

          // if key node has 2 children
        } else {
          const minNode = this.minValueNode(root.right);
          root.val = minNode.val;
          root.right = this.deleteNode(root.right, minNode.val);
        }
        
      }
      return root;
    }

    minValueNode(root) {
      let curr = root;
      while (curr && curr.left) {
        curr = curr.left;
      }
      return curr;
    }
}

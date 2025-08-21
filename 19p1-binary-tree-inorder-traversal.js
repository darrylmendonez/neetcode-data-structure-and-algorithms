// Binary Tree Inorder Traversal
// You are given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [4,2,5,1,6,3,7]
// Example 2:



// Input: root = [1,2,3,null,4,5,null]

// Output: [2,4,1,5,3]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

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
     * @return {number[]}
     */

    // recursive solution
    recursiveInorderTraversal(root) {
      const result = [];

      const inorder = (root) => {
      if (!root) return;

      inorder(root.left); // keep going to the left until we reach a node that has null for its left child
      result.push(root.val); // push the current node's value to result
      inorder(root.right); // check right child
      }

      inorder(root); // call the recursive function
      return result;
    }

    // iterative solution
    iterativeInorderTraversal(root) {
      const result = [];
      const stack = [];

      let current = root;

      while (current || stack.length > 0) {
        while (current) {
          stack.push(current) // add current node to the stack so we remember to go back to it later
          current = current.left; // move down to left child
        } // once this loop exits that must mean current is null
        current = stack.pop(); // so we go back up to the parent
        result.push(current.val); // push the current value to the result array
        current = current.right; // check the right child
      } // once we exit this loop we will have traversed the whole binary tree
      return result;
    }
}

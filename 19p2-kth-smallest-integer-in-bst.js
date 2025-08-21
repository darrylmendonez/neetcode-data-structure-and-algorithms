// Kth Smallest Integer in BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:



// Input: root = [2,1,3], k = 1

// Output: 1
// Example 2:



// Input: root = [4,3,5,2,null], k = 4

// Output: 5
// Constraints:

// 1 <= k <= The number of nodes in the tree <= 1000.
// 0 <= Node.val <= 1000

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
     * @param {number} k
     * @return {number}
     */

    // Depth-First-Search - Inorder solution:
    inorderKthSmallest(root, k) {
      const arr = [];

      const inorder = (root) => {
        if (!root) return;
        inorder(root.left); // keep going to the left until we reach a node that has null for its left child
        arr.push(root.val); // push the current node's value to result
        inorder(root.right); // check right child
      }

      inorder(root, k); // call the recursive function
      return arr[k - 1];
    }
    // time complexity: O(n) - It always traverses the entire tree to build the full sorted array, regardless of the value of k.
    // space complexity: O(n) - It stores all N node values in an array, plus the recursion stack space (which can be O(N) in a skewed tree).

    // OPTIMAL - iterative solution
      // It doesn't need to visit every node if k is small.
    iterativeKthSmallest(root, k) {
      const stack = [];
      let current = root;

      while (stack.length > 0 || current !== null) {
        while (current !== null) {
          stack.push(current); // add current node to the stack so we remember to go back to it later
          current = current.left; // move down to left child
        } // once this loop exits that must mean current is null

        current = stack.pop(); // so we go back up to the parent
        k--; // since we just processed the next smallest element we can decrement k
        if (k === 0) { // once k equals 0 , it means the current node is the k-th smallest element
          return current.val; // we can return this value and terminate the rest of the function
        }
        current = current.right;
      }
    }
    // time complexity: O(n) - O(H + k), where H is the height of the tree. It stops as soon as the k-th element is found. In the worst case (k=N), it's O(N), but for smaller k, it's much faster.
    // space complexity: O(n) - O(H). The space is determined by the height of the tree for the stack. For a balanced tree, this is O(log N), which is significantly better.

}

// Binary Tree Level Order Traversal
// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [[1],[2,3],[4,5,6,7]]
// Example 2:

// Input: root = [1]

// Output: [[1]]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= The number of nodes in the tree <= 1000.
// -1000 <= Node.val <= 1000

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
   * @return {number[][]}
   */
  levelOrder(root) {
    const result = [];

    if (!root) {
      return result;
    }

    const queue = new Queue();
    queue.push(root);

    while (!queue.isEmpty()) {
      const levelSize = queue.size(); // Store the size of the current level
      const level = [];

      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.pop();
        level.push(currentNode.val);

        // Check for null before pushing children to the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
      result.push(level);
    }
    return result;
  }
}

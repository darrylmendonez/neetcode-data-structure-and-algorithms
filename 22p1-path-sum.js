// 112. Path Sum
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {

    // create helper function
    const dfs = (currentNode, currentSum) => { // define helper function inside outer function because we need to pass in a parameter that the outer function doesn't have

      // base case:
      if (!currentNode) {
        return false;
      }


      currentSum += currentNode.val // if currentNode is not null, then take the val of currentNode and add to currentSum

      // if its a leaf node:
      if (!currentNode.left && !currentNode.right) { 
        return targetSum === currentSum // yes, it's a leaf node. Is targetSum equal to currentSum? Return true or false
      }

      // if it's not a leaf node, then run dfs on left and right side and return:
      return (
        dfs(currentNode.left, currentSum)
        || dfs(currentNode.right, currentSum)
      )
    }

    return dfs(root, 0); // initial dfs call;

};

// time complexity: O(n) - we have to visit each node on the tree where n is the number of nodes on the tree
// space complexity: O(n) - where n is the height of the tree. Worst case, which is if the tree is like a linked list and we would definitely have to vist every node. If it's a balanced tree then the space complexity is O(log n) since we wouldn't necessarily have to visit every node. We may find the solution before we do and we would stop but since we generally go with the worst case scenario then the space complexity is big O(n).
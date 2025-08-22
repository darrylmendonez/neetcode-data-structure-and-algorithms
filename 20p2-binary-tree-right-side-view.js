// Binary Tree Right Side View
// You are given the root of a binary tree. Return only the values of the nodes that are visible from the right side of the tree, ordered from top to bottom.

// Example 1:



// Input: root = [1,2,3]

// Output: [1,3]
// Example 2:



// Input: root = [1,2,3,4,5,6,7]

// Output: [1,3,7]
// Constraints:

// 0 <= number of nodes in the tree <= 100
// -100 <= Node.val <= 100

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
    rightSideView(root) {
        const result = [];

        if (!root) {
            return result;
        }

        const queue = new Queue();
        queue.enqueue(root);

        while (!queue.isEmpty()) {
            const levelSize = queue.size(); // Store the size of the current level
            let rightmostNodeVal;

            for (let i = 0; i < levelSize; i++) { // Loop exactly 'levelSize' times
                const currentNode = queue.dequeue();
                rightmostNodeVal = currentNode.val; // rightmostNodeVal will get updated with every iteration of the for loop but when it ends, it will be storing the correct rightmost node value so by the time it gets pushed to result, the value will be correct

                // Check for null before adding children to the queue
                if (currentNode.left !== null) {
                    queue.enqueue(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.enqueue(currentNode.right);
                }
            }
            result.push(rightmostNodeVal); // Add the value of the rightmost node of the level
        }
        return result;
    }
}

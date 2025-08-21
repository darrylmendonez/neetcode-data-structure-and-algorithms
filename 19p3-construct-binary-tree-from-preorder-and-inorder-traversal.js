// Construct Binary Tree from Preorder and Inorder Traversal
// You are given two integer arrays preorder and inorder.

// preorder is the preorder traversal of a binary tree
// inorder is the inorder traversal of the same tree
// Both arrays are of the same size and consist of unique values.
// Rebuild the binary tree from the preorder and inorder traversals and return its root.

// Example 1:



// Input: preorder = [1,2,3,4], inorder = [2,1,3,4]

// Output: [1,2,3,null,null,null,4]
// Example 2:

// Input: preorder = [1], inorder = [1]

// Output: [1]
// Constraints:

// 1 <= inorder.length <= 1000.
// inorder.length == preorder.length
// -1000 <= preorder[i], inorder[i] <= 1000

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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */

    // example: 
      // preorder = [3, 9, 20, 15, 7]
      // inorder = [9, 3, 15, 20, 7]

    // brainstorm:
      // const result = [];
      // the first value in preorder traversal is always the root node - 3, push 3 to result
      // we can find the root in the inorder array.
        // every value to the left of the root will go on the left subtree of the root - 9, push 9 to result
        // every value to the right of the root will go on the right subtree of the root - 15, 20, 7
      // so far, we have result = [3, 9]
      // now, we can ignore 3 & 9 from both the preorder and inorder arrays
        // preorder = [20, 15, 7]
        // inorder = [15, 20, 7]
      // now we can recursively, repeat the same process
        // the first value in preorder is the root, so we can push 20. result = [3, 9, 20]
        // looking at inorder, we see that 15 is the only value to the left of 20, so let's push that, result = [3, 9, 20, 15]
        // and 7 is the only value to the right of 20 in the inorder array, so we can push that, result = [3, 9, 20, 15, 7]
      // there are no more items in either array we we can return our result

    buildTree(preorder, inorder) {
      // base case: when there are no nodes to traverse
      if (!preorder.length || !inorder.length) {
        return null; // we have no values so we don't need to create a node
      }

      const root = new TreeNode(preorder[0]); // the first value of preorder is always the root
      const middle = inorder.indexOf(preorder[0]); // Find the root in inorder; elements to the left form the left subtree, and elements to the right form the right subtree.

      // build the left subtree recursively:
      root.left = this.buildTree(
        preorder.slice(1, middle + 1), // start at index 1 since index 0 is the root node and end at the middle. in JS, the second argument in the slice method is noninclusive so it really ends at the middle
        inorder.slice(0, middle), // start at 0 index and go upto but do not include middle
      );

      // build the right subtree recursively:
      root.right = this.buildTree(
        preorder.slice(middle + 1), // every value after the middle. If we don't give a second argument to the slice method, it will automatically go to the end of the array
        inorder.slice(middle + 1), // every value after the middle. 
      );

      return root; // Return the root of the constructed
    }
}

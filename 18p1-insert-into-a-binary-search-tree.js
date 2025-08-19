// Insert into a Binary Search Tree
// You are given the root node of a binary search tree (BST) and a value val to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Note: There may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// Example 1:



// Input: root = [5,3,9,1,4], val = 6

// Output: [5,3,9,1,4,6]
// Example 2:

// Input: root = [5,3,6,null,4,null,10,null,null,7], val = 9

// Output: [5,3,6,null,4,null,10,null,null,7,null,null,9]
// Constraints:

// 0 <= The number of nodes in the tree <= 10,000.
// -100,000,000 <= val, Node.val <= 100,000,000
// All the values Node.val are unique.
// It's guaranteed that val does not exist in the original BST.

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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
      if (!root) { // base case: given the recursive calls, the function has traversed down and found an empty spot where the new node should be placed
        return new TreeNode(val);
      }
      if (val > root.val) {
        root.right = this.insertIntoBST(root.right, val);
      } else if (val < root.val) {
        root.left = this.insertIntoBST(root.left, val);
      }
      return root; // Return the (possibly modified) root node
    }
}

// How it works:
// Imagine you are inserting val into root.right. The call is root.right = insert(root.right, val). If root.right was initially null, the insert function immediately hits this base case. It creates new TreeNode(val) and returns it. This returned node is then assigned to root.right, effectively linking the new node into the tree as the right child of root.
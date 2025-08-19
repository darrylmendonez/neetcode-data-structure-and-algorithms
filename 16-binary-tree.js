// Binary Trees


// the top of a binary tree is called the root node
//         2            parent node
//      1     3         child nodes


// If a node doesn't have a child node then it is also known as a leaf node
// a binary tree is guaranteed to have leaf nodes
// binary trees are not allowed to have cycles - meaning leaf nodes can't point back to the root
  // also child nodes can't point at sibling nodes
// every node have to be connected to each other
// the height - starting at a node, it is the number of nodes it takes to go all the way down
// depth - the measure of the path from a node to the root node starting with the starting node until and including the root node
// descendant - is any child or any other node that comes beneath a given node
  // for a root node, every other node in the tree is a descendant of that node
// ancestor. - any parent or above that goes up a chain

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

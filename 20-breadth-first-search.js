// Breadth-First-Search

// Instead of going all the way down to the bottom of the tree like in DFS, we search layer by layer starting at the top, which is called the root ironically

// BFS is also known as Level-Order-Traversal

// starting at the root, we can process the root (print, push to array, etc...),
// the check the left child. If there is one then process it
// then check the left child of the root. If there is one, then process it.
// Now we need to check if the root.left has any children but how do we go back to that?
// Unlike DFS, recursion won't help here
// We can use a queue - first in, first out
// this allows us to visit each node once

const bfs = (root) => {
  let queue = [];
  
  if (root !== null) {
    queue.push(root); // we append the root node to our queue.
  }

  let level = 0;
  while (queue.length > 0) { // loop while queue is not empty
    console.log("level " + level + ": "); // print current level
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) { // loop through the queue
      let current = queue.shift(); // remove nodes in the current level. shift method removes first item in array. queues are FIFO - first in, first out
      console.log(current.val + " ");

      // if node has children, we append them to the queue from left to right
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }

    } // current level ends
    level++; // increment level before proceeding to the next loop in the outter loop, which is the while loop
    console.log();
  }
  // queue becomes empty once we've visited all the nodes. Outter loop will terminate

}

// time complexity: O(n) - even though we have a nested loop, we are only visiting each node once, therefore, O(n)
// space complexity: O(n) where n is the number of nodes in the tree

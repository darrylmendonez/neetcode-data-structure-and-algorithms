// Matrix - BFS

// Q: Find the length of the shortest path from the top left of the grid to the bottom right

//  _______________
// |  0  0   0   0 
// |  1  1   0   0
// |  0  0   0   1
// |  0  1   0   0

let grid = [[0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 1],
            [0, 1, 0, 0]];

const bfs = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const visit = new Set();

  // use a queue to store all the cells to be visited
  let queue = new Array();

  queue.push([0, 0]); // Add the starting point
  visit.add('0,0');

  let length = 0;
  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let [r, c] = queue.shift(); // remove first coordinate point from queue

      // check if we've reached the destination
      if (
        r === rows - 1 && // is r the last row?
        c === cols - 1 // and is c the last col?
      ) {
        return length;
      }

      // we can directly build the four neighbors
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
      ]

      // check each neighbor
      for(const [dr, dc] of directions) {
        const newR = r + dr;
        const newC = c + dc;
        const pos = newR + ',' + newC;

        // if it's an invalid cell, then skip it
        if (
          newR < 0 ||
          newC < 0 ||
          newR >= rows ||
          newC >= cols ||
          visit.has(pos) ||
          grid[newR][newC] === 1
        ) {
          continue; // skip current loop
        }

        // if valid cell, add valid neighbor cell...
        queue.push([newR, newC]); // to the queue
        visit.add(pos); // and to the visit hashmap
      }
    }
    length++;
  }
  return -1;
}

console.log(bfs(grid));

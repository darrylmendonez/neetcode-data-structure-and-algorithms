// Graphs - Adjacency List

// class GraphNode {
//   constructor(val) {
//     this.val = val;
//     this.neighbors = [];
//   }
// }

// or use a HashMap
// const adjList = {
//   "A": [],
//   "B": []
// }

// Given directed edges, build an adjacency list
const edges = [["A", "B"], ["B", "C"], ["B", "E"], ["C", "E"], ["E", "D"]];

const adjList = {};

for (const [src, dst] of edges) {
  if (adjList.src === undefined) {
    adjList[src] = [];
  }
  if (adjList[dst] === undefined) {
    adjList[dst] = [];
  }
  adjList[src].push(dst);
}


// DFS Solution

// Count paths (backtracking)
const dfs = (node, target, adjList, visit) => {
  if (visit[node] !== undefined) {
    return 0;
  }
  if (node === target) {
    return 1;
  }

  let count = 0;
  visit.add(node);
  for (const neighbor of adjList[node]) {
    count += dfs(neighbor, target, adjList, visit)
  }
  visit.delete(node);

  return count;
}

console.log(dfs("A", "E", adjList, new Set()));

// O(n^v) - exponential because of backtracking. As the size of the graph grows so does the exponent so that is why dfs is very inefficient

// BFS Solution

// Shortest path from node to target

const bfs = (node, target, adjList) => {
  let length = 0;
  const visit = new Set();
  visit.add(node);
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift();
      if (target === curr) {
        return length;
      }
      for (const neighbor of adjList[curr]) {
        if (visit[neighbor] === undefined) {
          visit.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    length++;
  }
  return length;
}

console.log(bfs("A", "E", adjList));

// TC: O(v + e) where v is the number of vertices and e is the number of edges in the graph and where in the worst case we have to visit each vertex and each edge
// SP: O(v) where v is the number of vertices

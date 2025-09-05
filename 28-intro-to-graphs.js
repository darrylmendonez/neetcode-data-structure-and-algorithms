// Intro to Graphs

// Graphs

// 1. Matrix
// 2. Adjacency Matrix
// 3. Adjancency List

// Vertices - another name for Nodes
// Edges - another word for Pointers that connect nodes together

// E <= V^2
  // The number of edges is equal to the number of vertices squared

// Directed Graph - if the pointers have a direction, that means we have a Directed Graph

// Undirected Graph - the edges don't have a direction so you can go in both directions for each edge

// Matrix 
  // Essentially a 2-dimensional arrays
  // Instead of using x & y to implement coorediates, it is much easier to understand if you use r for rows and c for columns

  // Matrix (2D Grid)
const grid = [[0, 0, 0, 0],
              [1, 1, 0, 0],
              [0, 0, 0, 1],
              [0, 1, 0, 0]];

// Assume:
// 0 - Free
// 1 - Blocked

//    0  1   2   3
//   _______________
// 0 |  0  0   0   0 
// 1 |  1  1   0   0
// 2 |  0  0   0   1
// 3 |  0  1   0   0

grid[1][2] === 0 // true
// since grid is an array, we would find an element within this grid like this where the 1 is the row and the 2 is the column

// Adjacency Matrix

const adjMatrix = [[0, 0, 0, 0],
                   [1, 1, 0, 0],
                   [0, 0, 0, 1],
                   [0, 1, 0, 0]];

// an edge exists from v1 to v2
adjMatrix[v1][v2] === 1; // true

// an edge exists from v2 to v1
adjMatrix[v2][v1] === 1; // true

// No edge exists from v1 to v2
adjMatrix[v1][v2] === 0; // true

// No edge exists from v2 to v1
adjMatrix[v2][v1] === 0; // true

// the order that you index it represents the order that your checking or, in other words, the direction the edge is going

// Why is it rare to use an adjacency matrix?
  // We need to use a lot of space just to represent a graph, we have to use an entire matrix
  // That means the space complexity is O(v^2) where v is the number of vertices
  // By using an Adjacency List we can reduce the space complexity to O(v) where v is the number of vertices


  // Adjacency List

class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = new Array();
    }
}

// This is more space efficient than Adjacency Matrices since we're just declaring an array because we're only containing pointers for nodes that actually exist.
  // we're not declaring two pointers for every single GraphNode or three or five. We're just declaring an array and it could be empty or it could have some pointers.
// What if we had undirected edges?
  // If we have undirected edges then its safe to assume that we have pointers going both ways
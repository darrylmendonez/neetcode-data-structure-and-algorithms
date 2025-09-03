import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// K Closest Points to Origin
// You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.

// Return the k closest points to the origin (0, 0).

// The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).

// You may return the answer in any order.

// Example 1:



// Input: points = [[0,2],[2,2]], k = 1

// Output: [[0,2]]
// Explanation : The distance between (0, 2) and the origin (0, 0) is 2. The distance between (2, 2) and the origin is sqrt(2^2 + 2^2) = 2.82842. So the closest point to the origin is (0, 2).

// Example 2:

// Input: points = [[0,2],[2,0],[2,2]], k = 2

// Output: [[0,2],[2,0]]
// Explanation: The output [2,0],[0,2] would also be accepted.

// Constraints:

// 1 <= k <= points.length <= 1000
// -100 <= points[i][0], points[i][1] <= 100



class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
      // Initialize a min-heap with no special constructor arguments.
      const minHeap = new MinPriorityQueue();

      for (const [x, y] of points) {
        const dist = (x ** 2) + (y ** 2);
        // Enqueue the point [x, y] with its distance as the priority.
        minHeap.enqueue([x, y], dist);
      }

      const result = [];
      for (let i = 0; i < k; i++) {
        // Dequeue the element with the smallest priority (distance).
        // The element itself is the point [x, y].
        const { element } = minHeap.dequeue();
        result.push(element);
      }

      return result;
    }
}

// --- Testing Code ---
const solution = new Solution();

// Test with Example 1
const points1 = [[0,2],[2,2]];
const k1 = 1;
const result1 = solution.kClosest(points1, k1);
console.log(`Test Case 1: Input: points = ${JSON.stringify(points1)}, k = ${k1}`);
console.log(`Output: ${JSON.stringify(result1)}`);
console.log('Expected: [[0,2]]');
console.log('---');

// Test with Example 2
const points2 = [[0,2],[2,0],[2,2]];
const k2 = 2;
const result2 = solution.kClosest(points2, k2);
console.log(`Test Case 2: Input: points = ${JSON.stringify(points2)}, k = ${k2}`);
console.log(`Output: ${JSON.stringify(result2)}`);
console.log('Expected: [[0,2],[2,0]] (order may vary)');
console.log('---');

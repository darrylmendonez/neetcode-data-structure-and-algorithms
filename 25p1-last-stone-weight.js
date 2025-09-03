// Last Stone Weight
// You are given an array of integers stones where stones[i] represents the weight of the ith stone.

// We want to run a simulation on the stones as follows:

// At each step we choose the two heaviest stones, with weight x and y and smash them togethers
// If x == y, both stones are destroyed
// If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// Continue the simulation until there is no more than one stone remaining.

// Return the weight of the last remaining stone or return 0 if none remain.

// Example 1:

// Input: stones = [2,3,6,2,4]

// Output: 1
// Explanation:
// We smash 6 and 4 and are left with a 2, so the array becomes [2,3,2,2].
// We smash 3 and 2 and are left with a 1, so the array becomes [1,2,2].
// We smash 2 and 2, so the array becomes [1].

// Example 2:

// Input: stones = [1,2]

// Output: 1
// Constraints:

// 1 <= stones.length <= 20
// 1 <= stones[i] <= 100

class MinHeap {
  constructor() {
    this.data = [];
  }

  // Get index helpers
  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  // Swap helper
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // Insert (like heappush)
  push(val) {
    this.data.push(val);
    let i = this.data.length - 1;
    while (i > 0 && this.data[i] < this.data[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // Pop (like heappop)
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.data.pop();

    const root = this.data[0];
    this.data[0] = this.data.pop();
    this.heapify(0);
    return root;
  }

  // Heapify down
  heapify(i) {
    let smallest = i;
    let left = this.left(i);
    let right = this.right(i);

    if (left < this.size() && this.data[left] < this.data[smallest]) {
      smallest = left;
    }
    if (right < this.size() && this.data[right] < this.data[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }

  peek() {
    return this.data.length > 0 ? this.data[0] : null;
  }

  size() {
    return this.data.length;
  }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
      const maxHeap = new MinHeap();

      // To simulate a max-heap with a min-heap, we push negative values.
      // The smallest negative value is the largest positive value.
      for (const stone of stones) {
        maxHeap.push(-stone); // Push the negative of each stone weight
      }

      // Continue smashing until one or zero stones are left.
      while (maxHeap.size() > 1) {
        // Pop the two smallest negative numbers (which are the two largest positive numbers)
        const first = -maxHeap.pop(); // Heaviest stone (convert back to positive)
        const second = -maxHeap.pop(); // Second heaviest stone (convert back to positive)

        if (first > second) { // If they are not equal...
            maxHeap.push(-(first - second)); // push the negative of the difference back.
        }
        // If they are equal, both are destroyed, so we do nothing.
      }

      // If one stone is left, return its weight (converted back to positive). Otherwise, return 0.
      return maxHeap.size() === 1 ? -maxHeap.peek() : 0;
    }
}

// --- Testing Code ---
const solution = new Solution();

// Test with Example 1
const stones1 = [2, 3, 6, 2, 4];
const result1 = solution.lastStoneWeight(stones1);
console.log(`Test Case 1: Input: [${stones1}], Output: ${result1}`); // Expected: 1

// Test with Example 2
const stones2 = [1, 2];
const result2 = solution.lastStoneWeight(stones2);
console.log(`Test Case 2: Input: [${stones2}], Output: ${result2}`); // Expected: 1

// Test with no stones left
const stones3 = [2, 2];
const result3 = solution.lastStoneWeight(stones3);
console.log(`Test Case 3: Input: [${stones3}], Output: ${result3}`); // Expected: 0


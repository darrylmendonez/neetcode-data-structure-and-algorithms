// 146. LRU Cache
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

 

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
 

// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.




class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {

  /**
   * @param {number} capacity 
   */
  constructor(capacity) {
    this.cap = capacity;
    this.cache = new Map(); // map key to node

    // left = LRU, right = most recent
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  // IMPORTANT: Write out get & put functions first then come back to write remove and insert funcctions
  // remove helper function needed for get & put function
  /**
   * @param {Node} node
   */
  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  // IMPORTANT: Write out get & put functions first then come back to write remove and insert funcctions
  // insert helper function needed for get & put function
  /**
   * @param {Node} node
   */
  insert(node) {
    const prev = this.right.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.right;
    this.right.prev = node;
  }

  /** 
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);

      // update most recent
      this.remove(node); // remove from list
      this.insert(node); // and then reinsert at right

      return node.val;
    }
    return -1;
  };

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }
    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.insert(newNode);

    // does the length of cache exceed capacity?
    if (this.cache.size > this.cap) {

      // remove from the list and delete the LRU from the hashmap
      const lru = this.left.next;
      this.remove(lru);
      this.cache.delete(lru.key); // this is why we stored the key in our Node class
    }
  };
};

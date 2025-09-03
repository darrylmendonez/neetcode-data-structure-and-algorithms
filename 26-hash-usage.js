// Hash Usage

// Hash Sets / Maps

// Operation          TreeMap         HashMap
// Insert             O(log n)        O(1)
// Remove             O(log n)        O(1)
// Search             O(log n)        O(1)
// Inorder            O(n)            O(n log n)


// HashMap's don't have any order
  // so if you need to traverse through them, you basically have to take all of the keys and then sort them which is a O(n log n) time complexity

  const names = [
    "alice",
    "brad",
    "collin",
    "brad",
    "dylan",
    "kim"
  ]

  const countMap = {};

  for (const name of names) {
    if (!countMap[name]) {
      countMap[name] = 1;
    } else {
      countMap[name] += 1;
    }
  }
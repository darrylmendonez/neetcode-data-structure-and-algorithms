// Bit Manipulation

// TRUTH TABLES

// AND
// 0 & 0 returns 0
// 0 & 1 returns 0
// 1 & 0 returns 0
// 1 & 1 returns 1

// OR
// 0 | 0 returns 0
// 0 | 1 returns 1
// 1 | 0 returns 1
// 1 | 1 returns 1

// XOR
// 0 ^ 0 returns 0
// 0 ^ 1 returns 1
// 1 ^ 0 returns 1
// 1 ^ 1 returns 0

// Negation Operator ~
// n returns ~n

// Bit Shifting (to the left)
// n = 1
// n = n << 1
// n = n >> 1

  // Example:
  // 001 << 1 // 1
  // 010 // 2
  // 100 // 4
  // 000 // Would be 8 if we had another column on the left

  // notice that we're multiplying by 2 with each step

  // 1011
  // 5432


  // 10^3 10^2 10^1 10^0

  // Bit Shifting (to the right)
  // 100 >> 1 // 4
  // 010 // 2
  // 001 // 1
  // 000 // 0

  // Notice that we're dividing by 2 with each step

  // Example problem:
  // Given a number, cound the number of bits: 23 -> 10111

  const countBits = (n) => {
    let count = 0;
    while (n > 0) {
      if ((n & 1) === 1) {
        count++;
      }
      n = n >> 1; // same as n // 2 (or dividing by 2)
    }
    return count;
  }

  // 23 = 10111
  console.log(countBits(23));
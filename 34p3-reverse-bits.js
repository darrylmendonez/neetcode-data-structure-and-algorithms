// 190. Reverse Bits
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Reverse bits of a given 32 bits signed integer.

 

// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000
// Example 2:

// Input: n = 2147483644

// Output: 1073741822

// Explanation:

// Integer	Binary
// 2147483644	01111111111111111111111111111100
// 1073741822	00111111111111111111111111111110
 

// Constraints:

// 0 <= n <= 231 - 2
// n is even.
 

// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) { 
      const currBit = (n >> i) & 1; // take n and shift it to the right, and then compare n and i with an AND operator, so that the currBit will be eitheer 1 or 0
      result = result | (currBit << (31 - i));
    }
    return result >>> 0; // ensure unsigned 32-bit result
};

// tc: O(1) because it's not going to scale since we only looping up to 31 times
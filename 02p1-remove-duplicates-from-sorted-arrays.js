// Remove Duplicates From Sorted Array
// You are given an integer array nums sorted in non-decreasing order. Your task is to remove duplicates from nums in-place so that each element appears only once.

// After removing the duplicates, return the number of unique elements, denoted as k, such that the first k elements of nums contain the unique elements.

// Note:

// The order of the unique elements should remain the same as in the original array.
// It is not necessary to consider elements beyond the first k positions of the array.
// To be accepted, the first k elements of nums must contain all the unique elements.
// Return k as the final result.

// Example 1:

// Input: nums = [1,1,2,3,4]

// Output: [1,2,3,4]
// Explanation: You should return k = 4 as we have four unique elements.

// Example 2:

// Input: nums = [2,10,10,30,30,30]

// Output: [2,10,30]
// Explanation: You should return k = 3 as we have three unique elements.

// Constraints:

// 1 <= nums.length <= 30,000
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.


const removeDuplicates = (nums) => {
  let l = 0;
  let r = 0;

  let n = nums.length;
  while (r < n) {
    nums[l] = nums[r];
    while (
      r < n
      && nums[r] === nums[l] // if they are the same...
    ) {
      r++; // then move the right pointer to the next index
    }
    l++; // once nums[r] does not equal nums[l], then move left pointer to the next index
  }
  return l; // the index of l, will also be the number of how many unique chars there are in the array
}

console.log(removeDuplicates([2,10,10,30,30,30])) // 3

console.log(removeDuplicates([2,2,10,30,30,30])) // 3

console.log(removeDuplicates([2,3,10,30,30,30])) // 4
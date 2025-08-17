// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const dummy = { // create a dummy so you don't have to worry about inserting into an empty list
    val: 0,
    next: null,
  };
  let tail = dummy;

  while (list1 && list2) { // while both lists are not null
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next
    } else {
      tail.next = list2
      list2 = list2.next
    }
    tail = tail.next;
  }
  // if one of the lists are null or one list is longer than the other, then point the tail list to the rest of the non-null list
  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2
  }
  return dummy.next; // return the list
};
// Merge K Sorted Linked Lists
// You are given an array of k linked lists lists, where each list is sorted in ascending order.

// Return the sorted linked list that is the result of merging all of the individual linked lists.

// Example 1:

// Input: lists = [[1,2,4],[1,3,5],[3,6]]

// Output: [1,1,2,3,3,4,5,6]
// Example 2:

// Input: lists = []

// Output: []
// Example 3:

// Input: lists = [[]]

// Output: []
// Constraints:

// 0 <= lists.length <= 1000
// 0 <= lists[i].length <= 100
// -1000 <= lists[i][j] <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
      if (!lists || lists.length === 0) return null;
      if (lists.length === 1) return lists[0];

      for (let i = 1; i < lists.length; i++) {

        // Merge the previous result (lists[i-1]) with the current list (lists[i])
        // and store it in the current position.
        lists[i] = this.mergeList(lists[i - 1], lists[i]);
      }
      return lists[lists.length - 1];
    }

    /**
     * @param {ListNode} l1
     * @param  {ListNode} l2
     * @return {ListNode}
     */

    // helper function that takes two sorted linked lists and merges them into a single sorted list:
    mergeList(l1, l2) {

       // create a dummy so you don't have to worry about inserting into an empty list
      const dummy = new ListNode();

      let tail = dummy;

      while (l1 && l2) { // while both lists are not null because that's when we can compare the two values
        if (l1.val < l2.val) {
          tail.next = l1;
          l1 = l1.next;
        } else {
          tail.next = l2;
          l2 = l2.next;
        }
        tail = tail.next;
      }

      // if one of the lists are null or one list is longer than the other, then point the tail list to the rest of the non-null list
      if (l1) {
        tail.next = l1; // taking the remaining portion of l1 and inserting it into the end of the list
      }
      if (l2) {
        tail.next = l2; // taking the remaining portion of l2 and inserting it into the end of the list
      }
      return dummy.next; // return the list
    }
}

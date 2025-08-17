// Reverse Linked List
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Iteration Solution

class IterationSolution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
      let prev = null;
      let curr = head;

      while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
      return prev;
    }
}

// time complexity: O(n) because it has to iterate through each node
// space complexity: O(1) because we're just using pointers; no data structures

// Recursive Solution

class RecursiveSolution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

      // base case:
      if (!head) { // if head is null
        return null; // then return null
      }

      let newHead = head; // maintain the current head in the recursive call
      if (head.next) { // if there is still a sub-problem, if we can keep reversing
        newHead = this.reverseList(head.next); // then we're gonna have our recursive call and whatever it returns will be saved to newHead
        head.next.next = head; // reverse the link between the next ListNode and head
      }
      head.next = null; // if head happens to be the first ListNode, we're setting the next pointer to null, because since it's reversed now, it'll be the last item in the list and it won't have a next
      return newHead;
    }
}
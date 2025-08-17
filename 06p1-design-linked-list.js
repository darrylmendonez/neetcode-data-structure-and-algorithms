// 707. Design Linked List
// Medium
// Topics
// premium lock icon
// Companies
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3
 

// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

class ListNode {
  /**
   * @constructor
   * @param {number} val
   */
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    // create dummy nodes so we don't have to worry about inserting nodes to an empty list
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    // connect these two nodes together
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let cur = this.head.next;
    while (cur && index > 0) {
      cur = cur.next; // increment pointer
      index--; // decrement index
    }
    if (
      cur // make sure cur is not out of bounds
      && cur !== this.tail // make sure we're not at the dummy node at the end
      && index === 0 // if not, then that means the while loop exited before we were able to reach the index we wanted to reach. That would happen if our linked list was too small to delete this index, which means that index didn't exist.
    ) {
      return cur.val;
    }
    return -1; // index is invalid, therefore, return -1 as indicated in problem description
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new ListNode(val);
    const next = this.head.next;
    const prev = this.head;
    // these next four lines get repeated a lot and could be turned into a helper function. We're talking the prev's next pointer and pointing it to the new node, we're taking the next's prev pointer and pointing it back at the new node. Then we're taking the new node's next and prev pointers and pointint them at the next and prev nodes respectively
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new ListNode(val);
    const next = this.tail;
    const prev = this.tail.prev;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    let cur = this.head.next;
    while (cur && index > 0) {
      cur = cur.next;
      index--;
    }
    if (cur && index === 0) {
      const node = new ListNode(val);
      const next = cur;
      const prev = cur.prev;
      prev.next = node;
      next.prev = node;
      node.next = next;
      node.prev = prev;
    }
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    let cur = this.head.next;
    while (cur && index > 0) {
      cur = cur.next;
      index--;
    }
    if (cur && cur !== this.tail && index === 0) {
      const next = cur.next;
      const prev = cur.prev;
      // since we're deleting a node, all we really need to do is update the next.prev to point to prev and update prev.next to point to next. This way the deleted node is no longer being pointed to from its surrounding nodes. It essentially is no longer connected to any other node. Typically garbage collection will delete this node on its own depending on what language and operating system you're using
      next.prev = prev;
      prev.next = next;
    }
  }
}

// - Time complexity:
//     - O(1)O(1) time for initialization.
//     - O(1)O(1) time for addAtHead()addAtHead(), addAtTail()addAtTail().
//     - O(n)O(n) time for get()get(), addAtIndex()addAtIndex(), deleteAtIndex()deleteAtIndex().
// - Space complexity: O(n)O(n)

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
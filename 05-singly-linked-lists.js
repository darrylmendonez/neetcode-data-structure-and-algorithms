// linked lists are made up of list nodes
// each item has a value and a next pointer
// the pointer points to the next list node in the linked list.
  // this connects multiple list nodes together which forms a linked list
                // value, pointer  
  // ListNode1 = { "red", ListNode2 }
  // ListNode2 = { "blue", ListNode3 }
  // ListNode3 = { "green", null }


  // cur = ListNode1
  // while (cur != null)
    // cur = cur.next

// time complexity O(n)

// keep track of the first item by setting var head to the first item (ListNode1)
// keep track of the last item by setting var tail to the last item (ListNode3)
// if you need to add a new item to the end, then set tail.next to it (ListNode4) and set tail = ListNode4 or tail = tail.next. Time complexity O(1)

// if you wanted to remove and element such as ListNode2, you would take the previous element and point it at the next element:
  // ex: head.next = head.next.next
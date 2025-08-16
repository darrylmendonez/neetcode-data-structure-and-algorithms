// 155. Min Stack
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.


// Approach:
// push, pop, and top, are already built in and can be done in O(1) time
// How to get min?
// Example stack: [-2, 0, -3]
// Cycle through each element and compare each but that would be O(n)
// When the stack initially was only [-2], meaning before 0 & -3 were pushed, the min value was -2
// Then when the 0 was pushed, the min value was still -2
// So what if we are capturing the min value as a single value?
    // Let's say we add a -2 to the stack. Now -2 is in two positions. But if we pop the new -2, how will we know if there is another -2?
    // So it would be better to maintain the minimum value with another stack. Let's call it minStack
// stack: [-2], minStack: [-2]
// stack: [-2, 0], minStack: [-2, -2]
// stack: [-2, 0, -3], minStack: [-2, -2, -3]
// now we can always keep track of the minValue and it will be in O(1)


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /** 
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length -1],
        );
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


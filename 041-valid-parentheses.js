// 20. Valid Parentheses
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    const closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for(let char of s) {
        if(closeToOpen[char]) { // if the char is a closing bracket
            if(
                stack.length > 0 && 
                stack[stack.length - 1] === closeToOpen[char]) { // check if the last element in the stack is the matching opening bracket
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char); // if it's an opening bracket, push it onto the stack
        }
    }
    if (stack.length === 0) { // if the stack is empty, all brackets were matched
        return true;
    }
    return false; // if there are unmatched opening brackets, return false
};

console.log(isValid("()")); // true

console.log(isValid("()[]{}")); // true

console.log(isValid("(]")); // false

console.log(isValid("([])")); // true

console.log(isValid("([)]")); // false

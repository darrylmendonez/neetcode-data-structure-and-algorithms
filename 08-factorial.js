// Recursion

// One-branch recursion
  // n! = n * (n - 1) * (n - 2) * ... * 1
  // 5! = 5 * 4 * 3 * 2 * 1
  // notice: 5! = 5 * 4!
    // the subproblem here is 4!
  // n! = n * (n - 1)!
    // the subproblem is (n - 1)!

  // you can imagine the recursion of subproblems like a one-branch tree:
    // 5! -> 4! -> 3! -> 2! -> 1!
      // 1! is the base case which is mapped to 1
      // 1! = 1 so that is what is returned for the 2! subproblem
      // 2! = 2 so that is what is returned for the 3! subproblem
      // 3! = 6 so that is what is returned for the 4! subproblem
      // 4! = 24 so that is what is returned for the 5! subproblem
      // 5! = 120 and we can stop there since n = 5

  // time complexity: O(n) because it takes n function calls
    // which is the same as the iteration solution
      // see 05p1-reverse-linked-list.js
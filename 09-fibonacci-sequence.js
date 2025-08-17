// Recursion
  // Two-Branch
    // Fibonacci Number: F(n) = F(n - 1) + F(n - 2)
      // base cases: F(0) = 0, F(1) = 1

      // F(2) = F(1) + F(0)
      //      = 1 + 0
      // F(2) = 1

      // F(3) = F(2) + F(1)
      //      = 1 + 1
      // F(3) = 2

      // as. you can see, we have subproblems which is why we can use recursion

      // Two-Branch tree of F(5):

                              // F(5)
                // F(4)                      F(3)
      //  F(3)           F(2)          f(2)        f(1)
  //  F(2)     f(1)   F(1)  F(0)    F(1)  F(0)
// F(1)  F(0)

// height of tree = 5 (longest path: 5, 4, 3, 2, 1 or 5 levels of the tree)

      // int fib(int n) {
        // if (n <= 1) {
          // return n  
        // }
        // return fib(n - 1) + fib(n - 2);
      // }
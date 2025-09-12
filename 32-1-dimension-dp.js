// Dynamic Programming
  // 1-Dimension - Fibonacci
    // F(0) = 0, F(1) = 1
    // F(n) = F(n - 1) + F(n - 2)

// Brute Force Solution
const bruteForce = (n) => {
  if (n <= 1) {
    return n
  }
  return bruteForce(n - 1) + bruteForce(n - 2);
}

console.log(bruteForce(10));

// Suboptimal Solution
// Memoization solution also known as Top-Down Dynamic Programming
const memoization = (n, cache) => {

  // if n is 1 or 0, return its value
  if (n <= 1) {
    return n;
  }

  // check if n is in our cache already
  if (cache[n] !== undefined) {
    return cache[n];
  }

  // add n to our cache
  cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);
  return cache[n];
}

console.log(memoization(10, {}));

// Optimal Solution: Bottom Up Dynamic Programming Solution

const dp = (n) => {
  if (n < 2) {
    return n;
  }
  let num1 = 0;
  let num2 = 1;
  let currentSum;
  let i = 2;
  while (i <= n){
    currentSum = num1 + num2;
    num1 = num2;
    num2 = currentSum
    i++;
  };
  return currentSum;
}

console.log(dp(10));
// Binary Search - Search Range

// Concept:
  // Imagine you picked a number from 1 - 100 and asked your friend to guess the number you were thinking of. There are three outcomes. Either their guess is correct, too small or too large.

  // After every guess, you would tell them if their guess was correct, too small or too large. Your friend would then adjust their next guess accordingly.

// Even though we are not given a target, we can still use Binary Search to guess the number as long as we're being told if the guess was too high, too low, or that it is correct.

// In many problems, comparing the guess to the target is done by a predefined function or some math equation. For example, in this problem assume we are given a function isCorrect(n) that returns 1 if n is too big, -1 if n is too small and 0 if n is correct.

// Return 1 if n is too big, -1 if too small, 0 if correct
function isCorrect(n) {
  if (n > 10) {
    return 1;
  } else if (n < 10) {
    return -1;
  } else {
    return 0;
  }
}

// For questions like these, a predefined method API is given, in this case, isCorrect and you are required to treat the function as a black-box and use it within your own binary search method

const binarySearchRange = (low, high) => {
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (isCorrect(middle) > answer) {
      high = middle - 1;
    } else if (isCorrect(middle) < answer) {
      low = middle + 1;
    } else {
      return middle;
    }

  }
  return -1;
}
# Big O Time Complexity Explained

# Source: https://www.youtube.com/watch?v=BgLTDT03QtU

# O(1) - Constant Time
  # Array
  nums = [1, 2, 3]
  nums.append(4)    # push to end
  nums.pop()        # pop from end
  nums[0]           # lookup
  nums[1]
  nums[2]


  # HashMap / Set
  hashMap = {}
  hashMap["key"] = 10     # insert
  print("key" in hashMap) # lookup
  print(hashMap["key"])   # lookup
  hashMap.pop("key")      # remove


# O(n) - Linear Time
  # as our input size grows, our time will also grow proportionately
  nums = [1, 2, 3]
  sum(nums)           # sum of array
  for n in nums:      # looping
      print(n)

  nums.insert(1, 100) # insert middle
  nums.remove(100)    # remove middle
  print(100 in nums)  # search

  import heapq
  heapq.heapify(nums) # build heap

  # sometimes even nested loops can be O(n)
  # (e.g. monotonic stack or sliding window)

# O(n^2) - Quadratic time complexity
  # The runtime of the algorithm grows quadratically with the input size. For example, iterating through an array of size n and then iterating through an array of size n again is O(n^2) because it takes n * n operations to complete.

  # Even if the inner loop does not run for the entire length of the outer loop, the time complexity is still O(n^2) because the outer loop runs n times and the inner loop runs proportionally to the length of the input array.

  # Often when you have a a nested loop, typically from a 2-dimensional array, and you need to loop through each item in each array
  # Also, if you have a single array but need to compare each element to every other element in the array, this would also be a O(n^2) time complexity

# O( n^3 ) - Cubic time complexity
  # The runtime of the algorithm grows cubically with the input size. For example, iterating through an array of size n and then iterating through an array of size n again and then iterating through an array of size n again is O(n^3) because it takes n * n * n operations to complete.

  # Get every triplet of elements in array
  nums = [1, 2, 3]
  for i in range(len(nums)):
      for j in range(i + 1, len(nums)):
          for k in range(j + 1, len(nums)):
              print(nums[i], nums[j], nums[k])

# O( logn ) - Logarithmic time complexity
  # The runtime of the algorithm grows logarithmically with the input size. For example, searching for an element in a sorted array is O(logn).
  # If you are not familiar with log math, this just means that the number of times you can divide a number, n, by 2 until you get to 1 is logn.
  # This is why binary search is O(logn) because you can eliminate half of the elements in the array each time you make a comparison.
  # Much more efficient than O(n) - linear time - and a lot closer to O(1) - constant time. 

  # Binary search
  nums = [1, 2, 3, 4, 5]
  target = 6
  l, r = 0, len(nums) - 1
  while l <= r:
      m = (l + r) // 2
      if target < nums[m]:
          r = m - 1
      elif target > nums[m]:
          l = m + 1
      else:
          print(m)
          break

  # Binary Search on BST
  def search(root, target):
      if not root:
          return False
      if target < root.val:
          return search(root.left, target)
      elif target > root.val:
          return search(root.right, target)
      else: 
          return True

  # Heap Push and Pop
  import heapq
  minHeap = []
  heapq.heappush(minHeap, 5)
  heapq.heappop(minHeap)


# O( nlogn )
# The runtime of the algorithm grows linearly with the input size and the logarithm of the input size. For example, sorting an array is O(nlogn) because it takes n operations to sort the array and logn operations to sort each element. Slower than O(n) - linear time but not as slow as O(n^2) - quadratic time
# Most common algorithms of O(nlogn) is sorting, like merge sorting, heap sort, etc... and most built-in sorting algorithms


# O(2^n) Exponential time complexity
  # The runtime of the algorithm grows exponentially with the input size. For example, generating all permutations of an array is O(2^n) because there are 2^n possible permutations.
  # Common for recursion, binary trees, decision trees, fibonacci sequence


# O( sqrt(n) ) - Square root time complexity
  # The runtime of the algorithm grows as the square root of the input size. For example, finding all factors of a number is O(sqrt(n)) because there are sqrt(n) possible factors.

  # Get all factors of n
  import math
  n = 12
  factors = set()
  for i in range(1, int(math.sqrt(n)) + 1):
      if n % i == 0:
          factors.add(i)
          factors.add(n // i)


# O( n! ) - Factorial time complexity
  # The runtime of the algorithm grows factorially with the input size. For example, generating all permutations of an array is O(n!) because there are n! possible permutations.
  # Mainly occurs wiht permutations and Traveling Sales Person problem

  # Permutations
  def permute(nums):
      def backtrack(path, nums):
          if not nums:
              res.append(path)
              return
          for i in range(len(nums)):
              backtrack(path + [nums[i]], nums[:i] + nums[i + 1:])
      res = []
      backtrack([], nums)
      return res

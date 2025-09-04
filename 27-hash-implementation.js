// Hash Implementation

// Hash Sets/Maps

// hashmap.put("Alice", "NYC")
// hashmap.put("Brad", "Chicago")
// hashmap.put("Collin", "Seattle")

//        HashMap
//  Index       Key, Value
//    0
//    1         Alice, NYC
//    2
//    3         Brad, Chicago
//    4   
//    5
//    6
//    7



// When we insert a key-value pair into a hashmap, under the hood, the key is converted into some integer via some kind of algorithm and it is used to help assign it to an appropriate index and the value of the index will be the key-value pair. 
  // Hashing - So if the size of the hashmap, which is an array under the hood, is 2, the key would be converted to some integer. Then that integer would be modded by the size of the hashmap (divided and then take the remainder) and whatever the remainder is would be its index. This is called Hashing
    // Collision - It's possible with hashing that a key-value pair can wind up with the same index as another. This is called Collision.
      // To avoid collisions, we resize the array once it becomes half-full. Then using the same algorithm as before, we determine new integers for each index that is filled and mod them to find their new indices and place them there.
        // This process of increasing the array size and then moving all the elements into their new position Rehashing the Array
          // It's an expensive process but since it won't happen that often it is still considered efficient
      // However, even with Rehashing the Array, it's still possible to have collisions. In this case there are many ways to handle this.
        // Chaining - One way is to store the inserted key-value pair at the index that is already full anyway by chaining them with a linked list. This is called Chaining
          // The downside is we have to maintain that memory and the pointers and when we call that index, we'd have to traverse through the linked list
        // Open-Addressing - if the index is already occupied, we just try the next index. So if index 1 is already taken, then we just add 1 to the index, so we would check if 2 is empty and if not, we would continue the process until we find one that is empty.
          // When we try to read that element, then we would have to find the initial index assigned to it and see if its there. If it's not then we check the next index, and then the next one, and so on until we find it.
            // The downside to Open-Addressing is that it will lead to a lot of clusters and we have to keep traversing through them to find the element we want
              // There are ways of handling Open-Addressing better such as if the index is already taken up, then take the index and square it and see if that index is available or apply some kind of algorithm to better handle Open-Addressing and avoid clusters.
// In constant time, we can get the index that Alice is stored at and then we can go to that index and see what city she lives in. This is why Hashmaps are so efficient
// When we maintain the size of an array, it's more optimal for the size of the array to be a prime number. This winds up being better at helping to avoid collisions. So for instance, once the array becomes half-full instead of just doubling the size of the array, we would double the size of the array and then look for the next number higher than that number that is an array and use that as the new size of the array

class Pair {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

class HashMap {
    constructor() {
        this.size = 0;
        this.capacity = 2;
        this.map = new Array(this.capacity).fill(null);
    }

  // convert key to an integer
  hash(key) {
      let index = 0;
      for (let i = 0; i < key.length; i++) {
          index+= key.charCodeAt(i); // convert it to the ascii key of that integer
      }
      return index % this.capacity; // the index will likely be out of bounds for the capacity of the array so we mod it so it remains in-bounds
  }

  // assume we are using the Open-Address approach
  get(key) {
      let index = this.hash(key);
      while (this.map[index] != null) {
          if (this.map[index].key == key) {
              return this.map[index].val;
          }  
          index += 1;
          index = index % this.capacity; // bring us back in-bounds
      }    
      return null;
  }

  put(key, val) {
      let index = this.hash(key);

      while (true) { // the return statments will terminate the while loop

          // is this index empty? 
          if (this.map[index] == null) {
              this.map[index] = new Pair(key, val);
              this.size += 1;

              // if the size is greater than or equal to the capacity, we rehash
              if (this.size >= this.capacity / 2) {
                  this.rehash();
              }
              return;

          // is the key of this already the key we're looking for
          } else if (this.map[index].key == key) {
              this.map[index].val = val;
              return;
          }
          index += 1;
          index = index % this.capacity;
      }    
  }

  remove(key) {
      if (this.get(key) == null) {
          return;
      }
      
      let index = this.hash(key);
      while (true) {
          if (this.map[index].key == key) {
              // Removing an element using open-addressing actually causes a bug,
              // because we may create a hole in the list, and our get() may 
              // stop searching early when it reaches this hole.
              this.map[index] = null;
              this.size -= 1;
              return;
          }    
          index += 1;
          index = index % this.capacity;
      }
  }

  rehash() {
      this.capacity = 2 * this.capacity; // double capacity
      let newMap = new Array(this.capacity).fill(null);
      let oldMap = this.map;
      this.map = newMap;
      this.size = 0; // the put function will increment the size by 1 anyway so we reset the size to 0 and it will increase in the following for-loop
      for (let i = 0; i < oldMap.length; i++) {
          if (oldMap[i]) {
              this.put(oldMap[i].key, oldMap[i].val)
          }
      }
  }

  print() {
      for (let i = 0; i < this.map.length; i++) {
          if (this.map[i]) {
              console.log(this.map[i].key + " " + this.map[i].val)
          }
      }
  }
}

// The time complexity for all operations - insert, remove, & search - is O(1) on average, but this is only the case if we have a good hash function and a low number of collisions. In the worst case, the time complexity could be O(n).
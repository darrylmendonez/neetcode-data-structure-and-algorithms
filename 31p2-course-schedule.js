// 207. Course Schedule
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    // initialize map with index as keys and empty arrays as values. The index will represent the courses. The empty arrays will be used to list the prereqs for each course
    const prereqMap = new Map();
    for (const i = 0; i < numCourses; i++) {
      preMap.set(i, []);
    }

    // add the prereqs for each course
    for (const [course, prereq] of prerequisites) {
      prereqMap.get(course).push(prereq);
    }

    // store all courses along the current DFS path
    const visitSet = new Set();


    const dfs = (currCourse) => {

      // if currCourse has already been visited
      if (visitSet.has(currCourse)) {
        // cycle detected meaning this currCourse cannot be completed
        return false;
      }

      // if currCourse doesn't have any prereqs
      if (prereqMap.get(currCourse).length === 0) {
        return true; // it can definitely be completed
      }

      visitSet.add(currCourse); // we are currently visiting this course

      // recursively run dfs on currCourse's prereqs
      for (const prereq of prereqMap.get(currCourse)) {
        if (!dfs(prereq)) { // if we can find one prereq that can't be completed...
          return false; // then we can return false for the entire function
        }
      }

      // currCourse can be definitely be taken...
      visitSet.delete(currCourse); // so we can remove from visitSet since we are done visiting it
      prereqMap.set(currCourse, []); // set it's prereq to an empty list so that if we come back to this course, and we run dfq on it again it will return true immediately.
      return true;
    };

    // loop through all the courses because not all courses are necessarily connected
    for (let i = 0; i < numCourses; i++) {
      if (!dfs(i)) {
        return false;
      }
    }
    return true;
};

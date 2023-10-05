

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...


function findMinValue(arr) {
  if (arr.length === 0) {
      return undefined; 
  }

  let minValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];
      }
  }

  return minValue; // Return the minimum value found in the array.
}

function sortNumbers(arr) {
  let sortedArray = [];

  while (arr.length > 0) {
      let minValue = findMinValue(arr); 
      sortedArray.push(minValue); 
      arr.splice(arr.indexOf(minValue), 1);
  }

  return sortedArray; 
}


// Call the sortNumbers function and print the sorted array
let sortedNums = sortNumbers(nums2);
console.log(sortedNums);



/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];

let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

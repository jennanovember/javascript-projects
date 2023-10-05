//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
let nums1 = [5, 10, 2, 42];

function findMinValue(nums1) {
    if (nums1.length === 0) {
        return undefined;
    }
let minValue = nums1[0];

for (let i = 1; i < nums1.length; i++) {
    if (nums1[i] < minValue) {
        minValue = nums1[i];

        return minValue
    }
}
}

let minValue = (nums1);
console.log(minValue);
//Sample arrays for testing:



let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



//Using one of the test arrays as the argument, call your function inside the console.log statement below.


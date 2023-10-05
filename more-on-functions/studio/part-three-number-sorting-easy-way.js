//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

//Sort each array in decending order.

let ascendingOrder = nums3.slice().sort((a, b) => a - b);

let descendingOrder = nums3.slice().sort((a, b) => b - a);

console.log("Ascending Order:", ascendingOrder);
console.log("Descending Order:", descendingOrder);






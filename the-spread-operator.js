/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log("Second array: ", arr2);
console.log("First array: ", arr1);

// Copying an array
let arr3 = [4, 5, 6]
let arr4 = [...arr3] //this operator spreads the value of the third array into the fourth array giving a simple way to create aa entirely new object
arr4.push(7)
console.log("Third array:", arr3)
console.log("Fourth array, copy of third array:", arr4)


// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = {... obj1, d: 4 }     //simply copy of object 1 into object 2 and even add a new key:pair value
let obj3 = {... obj1, b: 5 }     // we can copy the object and overwrite value of key with new value
console.log("First object: ", obj1);
console.log("Second object: ", obj2);
console.log("Third object: ", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"]
console.log(arr5)
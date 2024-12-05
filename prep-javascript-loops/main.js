// create your loops here.

alert('connected');

// WHILE LOOPS
// 1.
// Define a function named whileLoop1 with no parameters
function whileLoop1() {
  // create a new array
  let array1 = [];
  // declare an index variable with an initial value of 0
  let index1 = 0;
  // use a while loop to add the numbers 0 - 9 to the new array using the .push method on the new array to push the index variable value into the new array for each iteration of the loop
  while (index1 < 10) {
    array1.push(index1);
    index1++;
  }
  return array1;
}

// 2.
// define a new variable named whileLoop1Result
const whileLoop1Result = whileLoop1();
// log the whileLoop1Result variable to the console
console.log(whileLoop1Result);

// 3.
// Define a function named whileLoop2 with no parameters
function whileLoop2() {
  // create a new array
  let array2 = [];
  // declare an index variable with an initial value of 0
  let index2 = 0;
  // use a while loop to add the numbers 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 to the new array using the .push method on the new array to push the index variable value into the new array for each iteration of the loop
  while (index2 < 20) {
    array2.push(index2);
    index2 = index2 + 2;
  }
  return array2;
}

// 4.
// define a new variable named whileLoop2Result
const whileLoop2Result = whileLoop2();
// log the whileLoop2 variable to the console
console.log(whileLoop2Result);

// FOR LOOPS
// 1.
// Define a function named forLoop1 with no parameters
function forLoop1() {
  let array3 = [];
  for (let index3 = 0; index3 < 10; index3++) {
    array3.push(index3);
  }
  return array3;
}

// 2.
// define a new variable named forLoop1Result, call the forLoop1 function and assign the return value to the forLoop1Result variable
const forLoop1Result = forLoop1();

// log the forLoop1Result variable to the console
console.log(forLoop1Result);

// 3.
// Define a function named forLoop2 with no parameters
function forLoop2() {
  //create a new array named array4
  let array4 = [];
  for (let index4 = 100; index4 >= 0; 'Time till explosion: ' + index4--) {
    console.log('Time till explosion: ' + index4);
    array4.push[index4];
  }
}

// 4.
// call the forLoop2 function and confirm the 100 "Time to explosion" messages print to the console
console.log(forLoop2());

//FOR IN LOOPS
// 1.
// Define the following object
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

// 1.
// Define a function named forInLoop1 with one parameter name object
function forInLoop1(object) {
  // create a new array
  let array5 = [];
  for (const key in object) {
    array5.push(key);
  }
  return array5;
}

// 2.
// define a new variable named forInLoop1Result
const forinLoop1Result = forInLoop1(object);
// log the forInLoop1Result variable to the console
console.log(forinLoop1Result);

// 3.
// Define a function named forInLoop2 with one parameter named object
function forInLoop2(object) {
  // create a new array
  let array6 = [];
  for (const key in object) {
    array6.push(object[key]);
  }
  return array6;
}

// 4.
// define a new variable named forInLoop2Result and call the forInLoop2 function with the person object as an argument and assign the return value to the forInLoop2Result variable
const forInLoop2Result = forInLoop2(object);

// log the forInLoop2Result variable to the console
console.log(forInLoop2Result);

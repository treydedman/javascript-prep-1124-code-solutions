alert('connected');

//addTwoNumbers
// defining a function named addTwoNumbers with two parameters named num1 and num2
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// assigning the return value to a variable named sum
const sum = addTwoNumbers(2, 2);

// logging the variable named sum to the console
console.log('The sum of addTwoNumbers is: ' + sum);

// convertHoursToMinutes
// defining a function named convertHoursToMinutes with one parameter named hours
function convertHoursToMinutes(hours) {
  return hours * 60;
}

// assigning the return value to a variable named minutes
const minutes = convertHoursToMinutes(3);

// logging the variable named minutes to the console
console.log('The result of convertHoursToMinutes is: ' + minutes);

// getGreeting
// defining a function named getGreeting with one parameter named name
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

// assigning the return value to a variable named greeting
const greeting = getGreeting('Rob');

// logging the variable named greeting to the console
console.log(greeting);

//addAndMultiplyBy5
// defining a function named addAndMultiplyBy5 with two parameters named num1 and num2
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

// assigning the return value to a variable named sumTimesFive
const sumTimesFive = addAndMultiplyBy5(3, 2);

// logging the variable named sumTimesFive to the console
console.log('The result of sumTimesFive is: ' + sumTimesFive);

//multiplyAndDivideBy5
// defining a function named multiplyAndDivideBy5 with two parameters named num1 and num2
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

// assigning the return value to a variable named productDividedByFive
const productDividedByFive = multiplyAndDivideBy5(10, 10);

// logging the variable named productDividedByFive to the console
console.log('The result of productDividedByFive is: ' + productDividedByFive);

//subtractTwoNumbers
// defining a function named subtractTwoNumbers with two parameters named num1 and num2
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

// assigning the return value to a variable named difference
const difference = subtractTwoNumbers(7, 4);

// logging the variable named difference to the console
console.log('The difference of subtractTwoNumbers is: ' + difference);

//getCircleCircumference
// defining a function named getCircleCircumference with one parameter named radius
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

// assigning the return value to a variable named circumference
const circumference = getCircleCircumference(4);

// logging the variable name circumference to the console
console.log('The result of getCircleCircumference is: ' + circumference);

//getFullName
// defining a function named getFullName with two parameters named firstName and lastName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

// assigning the return value to a variable named fullName
const fullName = getFullName('Jane', 'Doe');

// logging the variable fullName to the console
console.log('Her fullName is: ' + fullName);

//cube
// defining a function named cube with one parameter named number
function cube(number) {
  return number ** 3;
}

// assigning the return value to a variable named cubed
const cubed = cube(5);

// logging the variable cubed to the console
console.log('The result of cubed is: ' + cubed);

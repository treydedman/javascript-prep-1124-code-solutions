/* Your JS goes in this file */
alert('connected');

// 1.
//  defining a function named isAdult with a single parameter named age
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// 2.
// defining a new variable named isAdultResult to test the isAdult function
const isAdultResult = isAdult(24);

// logging the isAdultResult variable to the console
console.log('The result of age is: ' + isAdultResult);

// 3.
// defining a function named didStudentPass with one parameter named score
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

// 4.
// defining a new variable named didStudentPassResult to test the function didStudentPass
const didStudentPassResult = didStudentPass(65);

// logging didStudentPassResult to the console
console.log('Did the student pass? ' + didStudentPassResult);

// 5.
// defining a function named gradeCalculator with one parameter named score
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

// 6.
// defining a new variable named gradeCalculatorResult
const gradeCalculatorResult = gradeCalculator(96);

// logging gradeCalculatorResult to the console
console.log('The grade result is: ' + gradeCalculatorResult);

// 7.
// defining a function named seasonMessenger with one parameter named season
function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

// 8.
// defining a new variable named seasonMessengerResult
const seasonMessengerResult = seasonMessenger('winter');

// logging the variable seasonMessengerResult to the console
console.log('Wow, ' + seasonMessengerResult);

// 9.
// defining a function named dayDetector with one parameter named dayOfTheWeek
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

// 10.
// defining a new variable named dayDetectorResult
const dayDetectorResult = dayDetector('saturday');

// logging the variable dayDetectorResult to the console
console.log(dayDetectorResult);

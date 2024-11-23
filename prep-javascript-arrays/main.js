// insuring it is connected
alert('connected');

// declaring a new variable named languages and defining a new array
const languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];

// logging the variable languages to the console
console.log(languages);

// declaring a new variable named firstElement and assigning it the first index of the languages array
const firstElement = languages[0];

// logging the variable firstElement to the console
console.log('The first index or element of the array is: ' + firstElement);

// declaring a new variable named thirdElement and assigning it the third element of the languages array
const thirdElement = languages[2];

// logging the variable thirdElement to the console
console.log('The third element of the array is: ' + thirdElement);

// declaring a new variable named length and assigning it the length of the languages array
const length = languages.length;

//logging the variable length to the console
console.log('The length of the array is: ' + length);

// declaring a new variable named lastElement and assigning it the last index of the languages array using the length variable
const lastElement = languages[languages.length - 1]; //works but may be wrong as it doesn't use the length variable

// logging the variable lastElement to the console
console.log('The last element of the array is: ' + lastElement);

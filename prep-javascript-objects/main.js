console.log('Connected!');

const person = {
  firstName: 'Nolan',
  lastName: 'Ryan',
  hobby: 'baseball',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The full name is: ' + fullName);

person.job = 'jr dev';
console.log('current job: ' + person.job);

person['previousJob'] = 'pitcher';
console.log('previous job: ' + person['previousJob']);

console.log('the complete person object: ', person);

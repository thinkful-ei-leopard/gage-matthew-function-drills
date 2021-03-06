/* eslint-disable strict */
function getYearOfBirth(age) {
  if(age < 0) {
    throw new Error('Age cannot be less than zero.');
  }
  return 2020 - age;
}

function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error('Name and Age need to be defined.');
  }
  if(typeof name !== 'string' || typeof age !== 'number' || Number.isNaN(age)) {
    throw new TypeError('Name must be a string and Age must be a number!');
  }
  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old! I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Gage', 25);
  console.log(greeting1);
} catch (error) {
  console.log(`You have an error! ${error.name}: ${error.message}.`);
}
/* eslint-disable strict */
function getYearOfBirth(age) {
  if(age < 0) {
    throw new Error('Age cannot be less than zero.');
  }
  return 2020 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth();
  return `Hi, my name is ${name} and I'm ${age} years old! I was born in ${yearOfBirth}.`;
}

try {
  const greeting1 = createGreeting('Gage', 25);
  console.log(greeting1);
} catch (error) {
  console.log(`You have an error! ${error.name}: ${error.message}.`);
}
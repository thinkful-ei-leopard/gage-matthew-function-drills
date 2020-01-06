/* eslint-disable strict */
function getYearOfBirth(age) {
    return 2020 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth();
  return `Hi, my name is ${name} and I'm ${age} years old! I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Gage', 25);
console.log(greeting1);
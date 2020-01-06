/* eslint-disable strict */
function createJediName(firstName, lastName) {
  return lastName.substring(0, 3) + firstName.substring(0,2);
}

console.log(createJediName('Gage', 'Eide'));

function beyond(number) {
  if(!isFinite(number)) {
    console.log('and Beyond!');
  } else if(isFinite(number)) {
    if(number > 0) {
      console.log('To Infinity');
    } else if(number < 0) {
      console.log('To Negative Infinity');
    } else {
      console.log('Staying Home');
    }
  }
}

beyond('hello');

function decode(word) {
  if (word[0] === 'a') {
    return word[1];
  } else if (word[0] === 'b') {
    return word[2];
  } else if (word[0] === 'c') {
    return word[3];
  } else if (word[0] === 'd') {
    return word[4];
  } else {
    return ' ';
  }
}
let words = ['craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop']
words.forEach((word) => console.log(decode(word)));

function daysInAMonth(month, leapYear = false) {
  let days = 0;
  switch (month) {
    case 'January':
      days = 31;
      break;
    case 'February':
      days = (leapYear ? 29 : 28);
      break;
    case 'March':
      days = 31;
      break;
    case 'April':
      days = 30;
      break;
    case 'May':
      days = 31;
      break;
    case 'June':
      days = 30;
      break;
    case 'July':
      days = 31;
      break;
    case 'August':
      days = 31;
      break;
    case 'September':
      days = 30;
      break;
    case 'October':
      days = 31;
      break;
    case 'November':
      days = 30;
      break;
    case 'December':
      days = 31;
      break;
    default:
      throw new Error("Must provide a valid month!");
      break;
  }
  return `${month} has ${days} days.`;
}

try {
  console.log(daysInAMonth('Bob'));
} catch (error) {
  console.log(error);
}


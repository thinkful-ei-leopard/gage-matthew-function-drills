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

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num <1 || num >3) {
        throw new Error('Please pick a number between 1 and 3. PLEASE.')
    }
    //1 = rock, 2 = scissors, 3 = paper
    if (num === 1) {
        switch (randomNo) {
            case 1:
                return `It's a tie!`;
                break;
            case 2:
                return `You Win!`;
                break;
            case 3:
               return `You Lost!`;
               break;
            default:
                throw new Error(`Something went wrong!`)
                break;
        }
    }
    else if (num === 2) {
        switch (randomNo) {
            case 1:
                return `You Lose!`;
                break;
            case 2:
                return `It's a Tie!`;
                break;
            case 3:
               return `You Win!`;
               break;
            default:
                throw new Error(`Something went wrong!`)
                break;
        }
    }
    else if (num === 3) {
        switch (randomNo) {
            case 1:
                return `You Win!`;
                break;
            case 2:
                return `You Lose!`;
                break;
            case 3:
               return `It's a Tie!`;
               break;
            default:
                throw new Error(`Something went wrong!`)
                break;
        }
    }
}

try {
    console.log(rockPaperScissors(-4));
} catch(error) {
    console.log(error)
}
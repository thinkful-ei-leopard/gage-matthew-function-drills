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
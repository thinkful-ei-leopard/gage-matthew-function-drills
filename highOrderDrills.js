// function repeat(fn, n) {
//     for(let i = 0; i <= n; i++) {
//         fn();
//     }
// }

// function hello() {
//     console.log("Hello world.");
// }

// function goodbye() {
//     console.log("Goodbye world.");
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

// function filter(arr, callback) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i]) === true) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//     // This is known as a "predicate function" - it's a function that 
//     // only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// function hazardWarningCreator(typeOfWarning) {
//     let warningCounter = 0;

//     return function(location) {
//         warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
//     }
// }

// const rockWarning = hazardWarningCreator('Rocks on the Road');
// const tornadoWarning = hazardWarningCreator('Tornado in Area');
// const gammaRayBurstWarning = hazardWarningCreator('A Star Burst near us');

// rockWarning('Apple St and Zebra Ave');
// rockWarning('Microsoft St and Monichrome Ave');

// tornadoWarning('Main St and Central Ave');
// tornadoWarning('Avocado Pl and Pineapple Way');
// tornadoWarning('Cedar St and Dogwood St');

// gammaRayBurstWarning('Earth');
// gammaRayBurstWarning('Pluto');
// gammaRayBurstWarning('Saturn');

// let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// turtleMovements.filter(function(item) {
//     return item[0] >= 0 && item[1] >= 0;
// }).map(item => item[0]+item[1])
// .forEach((item, i) => console.log(`Movement #${i+1}: ${item} step(s)`))

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let arr = input.split(' ');

console.log(arr.reduce(function(accumulator, currentValue) {
    if(currentValue.length === 3) {
        return accumulator += ' ';
    } else {
        return accumulator += currentValue[currentValue.length - 1].toUpperCase();
    }
}, ''));
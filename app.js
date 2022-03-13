// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2, 3);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems); //split characters into an array
// console.log(arrayListItems);

// const hobbies = ['cooking', 'coding', 'watching tv'];
// const personalData = [33, 'Soul', { moreDetail: [] }];

// const analyticsData = [
//   //multi-dimensonal arrays
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['sports', 'cooking'];
// hobbies.push('coding');
// hobbies.unshift('reading');
// hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// console.log(hobbies);

// hobbies[5] = 'exercising';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'good food');
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// hobbies.splice(2, 3);
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice(-1, -3);
const addedArrays = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(testResults, addedArrays);

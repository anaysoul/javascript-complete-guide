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

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(-1, -3);
// const addedArrays = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, addedArrays);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Max' })); //doesnt work

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });
// manuel.name = 'Anna';
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });
// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

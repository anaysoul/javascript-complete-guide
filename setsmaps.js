// const ids = new Set(['hi', 'from', 'set!']);
// ids.add(2);
// console.log(ids);
// console.log(ids.has(2));

// if (ids.has('hi')) {
//   ids.delete('hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'Soul' };
// const person2 = { name: 'max' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, { date: '2 weeks ago', price: 100 });
// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

// WeakSet
let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);
console.log(persons);

// .. some operations
// person = null;

console.log(persons);

// WeakMap
const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);

const h1 = document.getElementById('main-title');

h1.textContent = 'A New Title!';
h1.style.color = 'blue';
h1.style.backgroundColor = 'pink';

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li'); // live changes available

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

// traversing child nodes
const ul = document.querySelector('ul');
ul.children[1];

// using parentNode & parentElement
const li = document.querySelector('li');
li.parentElement.style.color = 'pink';

// selecting sibling elements
const ol = document.querySelector('ol');
ol.previousElementSibling; // header
ol.nextElementSibling; // input

// DOM traversal vs query methods
const OL = document.body.firstElementChild.nextElementSibling;
const firstLi = OL.firstElementChild;
console.log(firstLi);

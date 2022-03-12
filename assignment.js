const task1 = document.getElementById('task-1');
task1.style.color = 'white';
task1.style.backgroundColor = 'black';

const task1a = document.body.querySelector('li');
task1a.style.color = 'yellow';
task1a.style.backgroundColor = 'grey';

const task3 = document.querySelector('h1');
task3.textContent = 'Assignment - Solved';

const task2 = document.head.querySelector('title');
task2.textContent = 'Assignment - Solved';

const task2a = document.querySelector('title');
task2a.textContent = 'ASSIGNMNET - SOLVED';

const section = document.querySelector('section');
// section.style.backgroundColor = 'blue';
section.className = ''; //remove class

const button = document.querySelector('button');
button.addEventListener('click', () => {
  //   if (section.className === 'red-bg visible') {
  //     section.className = 'red-bg invisible';
  //   } else {
  //     section.className = 'red-bg visible';
  //   }
  //   section.classList.toggle('visibile');
  section.classList.toggle('invisible');
});

// Adding elements via HTML in code
const list = document.querySelector('ol');
list.innerHTML += '<li>Item 4</li>';
const newLi = document.createElement('li');
list.appendChild(newLi);
newLi.textContent = 'Item 5';

// inserting DOM elements
list.prepend(newLi);
list.lastElementChild.before(newLi);

// clonging DOM nodes
const newLi2 = newLi.cloneNode(true);
list.append(newLi2);

// live node lists vs static node lists
const list1 = document.querySelector('ol');
const listItems = document.querySelectorAll('li');
const listItems2 = list.getElementsByTagName('li');
console.log(listItems2);
const newLi3 = document.createElement('li');
list.append(newLi2, newLi3);

// removing elements
// list.remove(); // not supported on IE
list.parentElement.removeChild(list);

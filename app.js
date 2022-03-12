const h1 = document.getElementById('main-title');

h1.textContent = 'A New Title!';
h1.style.color = 'blue';
h1.style.backgroundColor = 'pink';

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li'); // live changes available

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

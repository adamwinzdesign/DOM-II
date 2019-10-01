// Your code goes here

// add reporting/messaging div
const newDiv = document.createElement('div');
const newBtn = document.createElement('button');
const textContain = document.createElement('div');
const reportText = document.createElement('p');

const introSelector = document.querySelector('.intro');

newDiv.style.height = '5rem';
newDiv.style.display = 'flex';
newDiv.style.justifyContent = 'space-evenly';
newDiv.style.alignItems = 'center';
newDiv.style.margin = '2rem 0';

newBtn.style.padding = '1rem';
newBtn.style.fontSize = '1.5rem';
newBtn.style.cursor = 'pointer';
newBtn.style.backgroundColor = '#B0D4DD';

reportText.style.padding = '1rem';
reportText.style.display = 'flex';
reportText.style.alignItems = 'center';
reportText.style.justifyContent = 'center';
reportText.style.fontSize = '1.5rem';
reportText.style.backgroundColor = '#B0D4DD';
reportText.style.width = '30rem';

introSelector.prepend(newDiv);
newDiv.prepend(newBtn);
newDiv.append(textContain);
textContain.append(reportText);
newBtn.textContent = 'Click Me!';
reportText.textContent = 'I\'ll be reporting!';

// resize
window.addEventListener('resize', () => {
  reportText.textContent = 'Window resizing!'
});

// scroll
window.addEventListener('scroll', () => {
  reportText.textContent = 'User scrolling!'
});

// keydown
window.addEventListener('keydown', () => {
  reportText.textContent = 'User has pressed a key!';
});

// keyup
window.addEventListener('keyup', () => {
  reportText.textContent = 'User has released a key!';
});

// dblclick
newBtn.addEventListener('dblclick', () => {
  reportText.textContent = 'User doubleclicked!'
});

// mousedown
newBtn.addEventListener('mousedown', () => {
  reportText.textContent = 'User clicked once!'
});

// mouseup
newBtn.addEventListener('mouseup', () => {
  reportText.textContent = 'User released the mouse button!'
});

// mouseenter

// mouseleave

// online


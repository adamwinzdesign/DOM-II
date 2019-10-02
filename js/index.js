// Your code goes here

// test to determine if it is possible to change the fonts on the page for fun
const testLink = document.createElement('link');
const head = document.querySelector('head');
head.append(testLink);
testLink.href = 'https://fonts.googleapis.com/css?family=Lobster&display=swap';
testLink.rel = 'stylesheet';


// add reporting/messaging div
const newDiv = document.createElement('div');
const newBtn = document.createElement('button');
const textContain = document.createElement('div');
const reportText = document.createElement('p');

const introSelector = document.querySelector('.intro');

newDiv.style.height = '8rem';
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
// reportText.textContent = 'I\'ll be reporting!'; // line is only necessary if load event is changed or removed because this default text will not display while window is still listening for load event.

// add div with nested elements to demonstrate bubbling and the suppression thereof
const bubbleOuter = document.createElement('div');
const bubbleInner = document.createElement('div');
const bubbleText = document.createElement('p');

newDiv.append(bubbleOuter);
bubbleOuter.prepend(bubbleInner);
bubbleInner.prepend(bubbleText);

bubbleOuter.style.height = '10rem';
bubbleOuter.style.width = '22rem';
bubbleOuter.style.backgroundColor = '#B0D4DD';
bubbleOuter.style.display = 'flex';
bubbleOuter.style.justifyContent = 'center';
bubbleOuter.style.alignItems = 'center';

bubbleInner.style.height = '6rem';
bubbleInner.style.width = '18rem';
bubbleInner.style.backgroundColor = '#FFFFFF';
bubbleInner.style.display = 'flex';
bubbleInner.style.justifyContent = 'center';
bubbleInner.style.alignItems = 'center';

bubbleText.textContent = 'Everyday I\'m Bubblin\'';
bubbleText.style.fontSize = '1.5rem';
bubbleText.style.padding = '0';

const body = document.querySelector("body");

body.addEventListener('click', () => {
  body.style.backgroundColor = 'black';
})

bubbleInner.addEventListener('click', () => {
  bubbleInner.style.backgroundColor = 'red';
})

bubbleOuter.addEventListener('click', (event) => {
  bubbleOuter.style.backgroundColor = 'darkblue';
  // uncomment the following line to stop event propagation
  event.stopPropagation();
})

bubbleText.addEventListener('click', () => {
  console.log('bubbleText clicked!');
  bubbleText.style.fontFamily = 'Lobster';
});

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
newBtn.addEventListener('dblclick', (event) => {
  reportText.textContent = 'User doubleclicked!';
  event.stopPropagation();
});

// mousedown
newBtn.addEventListener('mousedown', (event) => {
  reportText.textContent = 'User clicked once!';
  event.stopPropagation();
});

// mouseup
newBtn.addEventListener('mouseup', (event) => {
  reportText.textContent = 'User released the mouse button!';
  event.stopPropagation();
});

//auxclick test to see if it is causing bubbling
newBtn.addEventListener('auxclick', (event) => {
  event.stopPropagation();
})

// mouseenter
newBtn.addEventListener('mouseenter', () => {
  reportText.textContent = 'User moved the mouse into the button!'
});

// mouseleave
newBtn.addEventListener('mouseout', () => {
  reportText.textContent = 'User moved the mouse out of the button!'
});

// load
window.addEventListener('load', () => {
  reportText.textContent = 'Window is loaded!';
});

// prevent default link behavior
const stopLink = document.querySelectorAll('.nav-link');

stopLink.forEach(addEventListener('click', (event) => {  
  event.preventDefault();
}));

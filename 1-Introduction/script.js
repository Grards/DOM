// Select the title, modify and display him
let title = document.querySelector('title');
title = "Here is the new title";
console.log(title);

// Change the color of body to pink
const body = document.querySelector('body');
body.style.backgroundColor = '#FF69B4';

// Display children of body
const bodyChildren = document.body.children;
for (const child of bodyChildren)
 {
  console.log(child);
}

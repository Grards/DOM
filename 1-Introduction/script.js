/**
 * This function generate an hex color
 * @returns randomColor 
 */
function randomColor(){
  let rgb = [
    parseInt((Math.random() * 255)),
    parseInt((Math.random() * 255)),
    parseInt((Math.random() * 255))
  ];
  let red = rgb[0].toString(16);
  let green = rgb[1].toString(16);
  let blue = rgb[2].toString(16);
  let randomColor = "#"+red+green+blue;
  return randomColor;
}

// Select the title, modify and display him
let title = document.querySelector('title');
title.innerHTML = "Here is the new title";
console.log(title);

// Change the color of body
const body = document.querySelector('body');
// body.style.backgroundColor = '#FF69B4'; // Pink colour
body.style.backgroundColor = randomColor();

// Display children of body in the console.
const bodyChildren = document.body.children;
for (const child of bodyChildren)
 {
  console.log(child);
}

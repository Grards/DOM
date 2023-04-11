/**
 * This function generate an hex color
 * @returns randomColor 
 */
function randomColor(){
  let rgb = [parseInt((Math.random() * 256)),parseInt((Math.random() * 256)),parseInt((Math.random() * 256))];
  let red = rgb[0].toString(16);
  let green = rgb[1].toString(16);
  let blue = rgb[2].toString(16);
  let randomColor = "#"+red+green+blue;
  return randomColor;
}

// Add an attribute to the elements who have "important" class.
const important = document.querySelectorAll('.important');
for(const child of important){
  child.setAttribute("title","test");
  console.log(child);
}

// If img className isn't "important", then -> display none.
const img = document.querySelectorAll('img');
for(const childImg of img){
  if(childImg.className != "important" ){
    childImg.style.display = "none";
  }
}

// Display all paragraphs and if paragraphs have a class, then display it.
const allParagraphs = document.querySelectorAll('p');
for(const childParagraphs of allParagraphs){
  if(childParagraphs.className){
    console.log("We have a paragraph with a className : " + childParagraphs.className);
  }else{
    // Display a random color text for each paragraph who have not a class
    childParagraphs.style.color=randomColor();
    console.log("The actual color is : " + randomColor());
  }
}



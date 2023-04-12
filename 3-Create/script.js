/* 
Exercises :
Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
*/
const learners = ["Abel Fortunati","Alexandra Petit","Anthony Denayer","Benjamin Mayeur","Bruno Lafont","Delphine Lecorney",
"Emilien Volkaert","Ethan Dias Marques","Ismaël Mesmoudi","Jodie Addis","Julien Arnould","Louka Cadau","Loïc Lion","Luciano Ciarrocchi",
"Marine Fassin","Nikko Di Bernardo","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas Moermans","Willy Seghers"];

/**
 * This function creates random colors, first in rgb, then transformed into hexadecimal. The function returns both types of values.
 * @returns randomColor, rgb
 */
function randomColor() {
  let rgb = [
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255)
  ];

  // The padStart() method allows to complete the current string with a given string in order to obtain a string of fixed length. 
  // To reach this length, the complementary string can be repeated. The current string is completed from the beginning. 
  let red = rgb[0].toString(16).padStart(2,"0");
  let green = rgb[1].toString(16).padStart(2,"0");
  let blue = rgb[2].toString(16).padStart(2,"0");
  let randomColor = "#" + red + green + blue;

  return [randomColor, rgb];
}

const articleLearners = document.querySelector("article");
const shuffledLearners = learners.sort(() => Math.random() - 0.5);

// Everytime we load the page, the order of the peoples changes.
shuffledLearners.forEach ((learner) => {
  // For each learner, we must create ...
  const sectionLearner = document.createElement("section");
  const paragraphLearner = document.createElement("p");
  const node = document.createTextNode(learner);

  // We complete the differents tags with ...
  paragraphLearner.appendChild(node);
  sectionLearner.appendChild(paragraphLearner);
  articleLearners.appendChild(sectionLearner);

  // We verify if the random colour of the background is too brigth or dark. And we change de colour of the font.
  const [backgroundColour, rgbColour] = randomColor();
  const brightness = Math.round(((parseInt(rgbColour[0]) * 299) + (parseInt(rgbColour[1]) * 587) + (parseInt(rgbColour[2]) * 114)) / 1000);
  console.log("test : " + brightness);
  const textColour = (brightness > 125) ? 'black' : 'white';

  // Some styles for the fun.
  sectionLearner.style.color = textColour;
  sectionLearner.style.backgroundColor = backgroundColour;
  sectionLearner.style.padding= "15px";
  sectionLearner.style.margin= "15px auto";
  sectionLearner.style.textAlign="center";
  sectionLearner.style.fontFamily='"Gill Sans", sans-serif';
  sectionLearner.style.fontWeight='700';
  sectionLearner.style.fontSize="24px";
});
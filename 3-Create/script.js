/* 
Exercises :
Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
*/
const learners = ["Abel Fortunati","Alexandra Petit","Anthony Denayer","Benjamin Mayeur","Bruno Lafont","Delphine Lecorney",
"Emilien Volkaert","Ethan Dias Marques","Ismaël Mesmoudi","Jodie Addis","Julien Arnould","Louka Cadau","Loïc Lion","Luciano Ciarrocchi",
"Marine Fassin","Nikko Di Bernardo","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas Moermans","Willy Seghers"];

function randomColor() {
  let rgb = [
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255)
  ];

  let red = rgb[0].toString(16).padStart(2,"0");
  let green = rgb[1].toString(16).padStart(2,"0");
  let blue = rgb[2].toString(16).padStart(2,"0");
  let randomColor = "#" + red + green + blue;
  return randomColor;
}

const articleLearners = document.querySelector("article");
const shuffledLearners = learners.sort(() => Math.random() - 0.5);

shuffledLearners.forEach ((learner) => {
  const sectionLearner = document.createElement("section");
  const paragraphLearner = document.createElement("p");
  const node = document.createTextNode(learner);
  paragraphLearner.appendChild(node);
  sectionLearner.appendChild(paragraphLearner);
  articleLearners.appendChild(sectionLearner);

  const color = randomColor();

  sectionLearner.style.backgroundColor = color;
  sectionLearner.style.padding= "15px";
  sectionLearner.style.margin= "15px auto";
  sectionLearner.style.borderRadius= "40px";
  sectionLearner.style.textAlign="center";
  sectionLearner.style.fontFamily='"Gill Sans", sans-serif';
  sectionLearner.style.fontWeight='700';
  sectionLearner.style.fontSize="24px";
  sectionLearner.style.width="400px";
  sectionLearner.addEventListener('mouseenter',() => sectionLearner.style.color="white");
  sectionLearner.addEventListener('mouseleave',() => sectionLearner.style.color="black");
});
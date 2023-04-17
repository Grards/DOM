// Select the last child of the <ol> tag and put it at the beginning of the list 
const ol = document.querySelector("ol");
ol.prepend(ol.lastElementChild);


// Move the <h2> of the third section in the second one and vice-versa
// Retrieval of h2 elements from sections 2 and 3
const secondSectionTitle = document.querySelector("section:nth-of-type(2) h2");
const thirdSectionTitle = document.querySelector("section:nth-of-type(3) h2");

// Exchange of titles
const temp = secondSectionTitle.textContent;
secondSectionTitle.textContent = thirdSectionTitle.textContent;
thirdSectionTitle.textContent = temp;


//Delete the last section from the DOM, we don't need it anyways
const thirdSection = document.querySelector("section:nth-of-type(3)");
thirdSection.remove();
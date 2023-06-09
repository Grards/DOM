/*  EXO 1 : Use childNodes to list all the children from the <ul> */

const ul = document.querySelector('ul')
// childNotes give an array who contain #text (who are tabs) and li elements.  
// I prefer use children who give only li elements.
const ulChildren = ul.children 

// console.log("Here's the favorite franchises : ")
// console.log("================================")
// for(let child of ulChildren){
//     console.log(child.textContent)
// }

for(let child of ul.childNodes){
    /* EXO 2 :
    
    Write a for loop to iterate over every child. In this loop:

    * Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1)
    * Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list
    * Since Fast and Furious is the most important franchise ever, add a class .important to the element
    * Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element
    * Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.
    (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).

    */ 
    if(child.nodeType === 1 && child.textContent == "Fast and Furious"){
        ul.prepend(child)
        child.classList.add("important")
        child.addEventListener("click", (e) =>{
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family")
        })
    }else{
        child.addEventListener("click", (e) =>{
            alert(child.textContent)
        })

    }
}


/* EXO 3 : 
(*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
*/

const body = document.querySelector("body")
body.addEventListener("keyup", (e) => {
    if(e.key === "r"){
        
    }
})
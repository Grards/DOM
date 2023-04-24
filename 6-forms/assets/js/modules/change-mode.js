export const toggleDarkmode = document.getElementById("toggle-darkmode")
const body = document.querySelector("body")

export function w(){
  switch(toggleDarkmode.selectedIndex){
    // dark Mode
    case(0):
      body.style.backgroundColor="black";
      body.style.color="white";
      break;
    // light Mode
    case(1):
      body.style.backgroundColor="white";
      body.style.color="black";
      break;
    default:
      body.style.backgroundColor="black";
      body.style.color="white";
      break;
  }
}
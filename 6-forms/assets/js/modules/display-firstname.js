export const firstname = document.getElementById("firstname");

export function displayFirstname(){
  const displayFirstname = document.querySelector("#display-firstname");
  displayFirstname.innerHTML = firstname.value;
}
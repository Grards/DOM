export const pwd = document.getElementById("pwd");
export const pwdConfirm = document.getElementById("pwd-confirm");


export function password(){
  let pwdValue = pwd.value
  if(pwdValue.length < 6){
    pwd.style.border="1px solid red"
    pwd.style.padding="2px 3px"
  }else{
    pwd.style.border="1px solid black"
  }
  passwordVerify()
}

export function passwordVerify(){
  let pwdValue = pwd.value
  let pwdConfirmValue = pwdConfirm.value
  if(pwdValue != pwdConfirmValue || pwdConfirmValue.length < 6){
    pwdConfirm.style.border="1px solid red"
    pwdConfirm.style.padding="2px 3px"
  }else{
    console.log("La vérification du password est ok !")
    pwdConfirm.style.border="1px solid black";
  }
}
export const age = document.getElementById("age");

export function theTruth(){
  const theTruth = document.getElementById("a-hard-truth");
  if(age.value < 18){
    console.log("T'es trop jeune pour connaître la vérité vraie.")
    theTruth.style.visibility="hidden";
  }else{
    theTruth.style.visibility="visible";
  }
}
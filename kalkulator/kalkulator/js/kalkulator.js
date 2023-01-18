const nummer1 = document.getElementById("nummer1");
const nummer2 = document.getElementById("nummer2");
const gangeBtn = document.getElementById("gangeBtn");
const plussBtn = document.getElementById("plussBtn");
const resultat = document.getElementById("resultat");

gangeBtn.addEventListener("click", function () {
  let nummer1Value = Number(nummer1.value);
  let nummer2Value = Number(nummer2.value);
  let gangeResultat = nummer1Value * nummer2Value;
  resultat.innerHTML = "Resultat: " + gangeResultat;
});

plussBtn.addEventListener("click", function () {
  let nummer1Value = Number(nummer1.value);
  let nummer2Value = Number(nummer2.value);
  let plussResultat = nummer1Value + nummer2Value;
  resultat.innerHTML = "Resultat: " + plussResultat;
});

const aNum = prompt("tast in et tall") * 1
const someNum = prompt("tast in et til tall") * 1
function addOneTo(aNum){
  return aNum + someNum;
}
console.log(addOneTo(aNum))
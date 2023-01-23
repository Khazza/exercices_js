//Génération du nombre magique
var magicNumber = Math.floor(Math.random() * 100);

//Ajout de l'écouteur d'événement sur le bouton
document.getElementById("button1").addEventListener("click", verif);
console.log(magicNumber);
function verif() {
  //Récupération de la saisie de l'utilisateur
  var userInput = document.getElementById("textBox1").value;

  //Vérification de la saisie
  if (userInput == magicNumber) {
    alert("Vous avez trouvé le nombre magique!");
  } else if (userInput < magicNumber) {
    alert( "Trop petit");
  } else {
    alert ( "Trop grand");
  }
}
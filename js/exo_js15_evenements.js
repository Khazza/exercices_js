//Génération du nombre magique
var magicNumber = Math.floor(Math.random() * 100);

//Ajout de l'écouteur d'événement sur le bouton
document.getElementById("button1").addEventListener("click", verif);
console.log(magicNumber);
function verif() {
  //Récupération de la saisie de l'utilisateur
  var userInput = document.getElementById("textBox1").value;
console.log(magicNumber);
  //Vérification de la saisie
  if (userInput == magicNumber) {
    alert("Vous avez trouvé le nombre magique!");
    // //Ajout d'une option pour relancer le script
    // var playAgain = confirm("Voulez-vous rejouer?");
    // if (playAgain) {
    //   magicNumber = Math.floor(Math.random() * 100);
    // }
  } else if (userInput < magicNumber) {
    alert("Trop petit");
  } else {
    alert("Trop grand");
  }
}

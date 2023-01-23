// --------------- Exercice ---------------
// // Déclaration du tableau pour stocker les valeurs saisies
// var values = [];

// // Boucle pour saisir les valeurs
// while (true) {
//     // Demande de saisie à l'utilisateur
//     var value = parseInt(window.prompt("Entrez une valeur numérique :"));

//     // Si l'utilisateur entre 0, on sort de la boucle
//     if (value == 0) {
//         break;
//     }

//     // Ajout de la valeur saisie au tableau
//     values.push(value);
// }

// // Initialisation des variables pour calculer la somme et la moyenne
// var sum = 0;

// // Boucle pour calculer la somme et la moyenne
// for (var i = 0; i < values.length; i++) {
//     // Ajout de la valeur actuelle à la somme
//     sum += values[i];
// }

// // Calcul de la moyenne
// var avg = sum / values.length;

// // Affichage du résultat
// console.log("Nombre de valeurs saisies : " + values.length);
// console.log("Somme : " + sum);
// console.log("Moyenne : " + avg);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Déclaration d'un tableau vide pour stocker les valeurs saisies
var values = [];

// Boucle pour demander à l'utilisateur de saisir des valeurs
while (true) {
    // Demande à l'utilisateur de saisir une valeur numérique
    var value = parseInt(window.prompt("Entrez une valeur numérique :"));

    // Sort de la boucle si l'utilisateur a saisi 0
    if (value == 0) {
        break;
    }

    // Ajoute la valeur saisie au tableau
    values.push(value);
}

// Utilise la fonction reduce pour calculer la somme et la moyenne des valeurs saisies
console.log("Nombre de valeurs saisies : " + values.length);
console.log("Somme : " + values.reduce((a, b) => a + b, 0));
console.log("Moyenne : " + values.reduce((a, b) => a + b, 0) / values.length);
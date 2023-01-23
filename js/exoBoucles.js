// --------------- Exercice ---------------
// Exercice 1 - Saisie --------------------
// ---------PREMIER NOUVEL ESSAI-----------
// let names = [];

// while (true) {
//   let name = prompt("Entrez un prénom:");
//   if (name === "") {
//     break;
//   }
//   names.push(name);
// }

// console.log("Nombre de prénoms saisis: " + names.length);
// console.log("Prénoms saisis: " + names.join(", "));

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// --------- SECOND NOUVEL ESSAI ----------
// // Initialiser compteur de prénoms à 0
// let nameCount = 0;

// // Initialiser une variable pour stocker les prénoms
// let names = "";

// // Demander un prénom à l'utilisateur
// while (true) {
//   let name = prompt(
//     "Entrez un prénom (laissez vide ou cliquez sur annuler pour quitter) :"
//   );

//   // Si l'utilisateur clique sur annuler ou laisse le champ vide, sortir de la boucle
//   if (name == null || name === "") {
//     break;
//   }

//   // Incrémenter le compteur de prénoms
//   nameCount++;

//   // Ajouter le prénom à la liste des prénoms saisis
//   names += name + ", ";
// }

// // Afficher le nombre de prénoms saisis sur la console
// console.log("Nombre de prénoms saisis : " + nameCount);

// // Afficher la liste des prénoms saisis sur la console
// console.log("Liste des prénoms saisis : " + names);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 2 - Entiers inférieurs à N ----
// var n = prompt("Saisissez un nombre :");
// for(let i=0 ; i<n ; i++){
//     console.log(i);
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 3 - Moyenne -------------------
 // Initialisation des variables pour stocker la somme et le nombre d'entiers
// let somme = 0;
// let compteur = 0;

// while (true) {
//     // Demande à l'utilisateur de saisir un entier
//     let saisie = prompt("Saisissez un entier (0 pour arrêter ou cliquez sur annuler):");

//     // Vérifie si la saisie est valide
//     if (saisie === null || saisie === "0" || saisie === "") {
//         break;
//     }

//     // Convertit la saisie en nombre
//     let nombre = Number(saisie);

//     // Vérifie si la saisie est un nombre valide
//     if (!isNaN(nombre)) {
//         // Ajoute le nombre à la somme
//         somme += nombre;
//         // Incrémente le compteur
//         compteur++;
//     } else {
//         // Informe l'utilisateur que la saisie n'est pas valide
//         alert("Saisie non valide. Veuillez saisir un entier.");
//     }
// }
// // Calcule la moyenne
// let moyenne = somme / compteur;

// // Affiche la somme et la moyenne
// console.log("Somme: " + somme);
// console.log("Moyenne: " + moyenne);


// ----------- Version simple -------------
// let somme = 0, compteur = 0;
// while (true) {
//     let nombre = parseInt(prompt("Saisissez un entier (0 pour arrêter):"));
//     if (!nombre) break;
//     if(!isNaN(nombre)) {
//         somme += nombre;
//         compteur++;
//     }else{
//         alert("Saisie non valide. Veuillez saisir un entier.");
//     }
// }
// console.log("Somme: " + somme);
// console.log("Moyenne: " + (somme/compteur));


// Exercice 4 - Multiples -----------------
// // Demande à l'utilisateur de saisir un nombre entier pour N
// let N = prompt("Saisissez un nombre de multiples pour N :");

// // Demande à l'utilisateur de saisir un nombre entier pour X
// let X = prompt("Entrez un nombre entier pour X :");

// // Boucle pour calculer les N premiers multiples de X
// for (let i = 1; i <= N; i++) {
//   // Affiche le résultat de chaque multiplication
//   console.log(i + " x " + X + " = " + i * X);
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// EXERCICE 5 - NOMBRE DE VOYELLES

// let word = prompt("Entrez un mot :").toLowerCase();
// let vowels = "aeiouy";
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//   let currentLetter = word.substring(i, i+1);
//   if (vowels.indexOf(currentLetter) != -1) {
//     count++;
//   }
// }
// alert("Le nombre de voyelles dans le mot '" + word + "' est : " + count);
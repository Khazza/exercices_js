// --------------- Exercice ---------------
// Exercice 1 -----------------------------
// // Demande à l'utilisateur de saisir un nombre
// var number = prompt("Entrez un nombre :");

// // Utilisation de l'opérateur modulo % pour vérifier si le nombre est pair
// if (number % 2 == 0) {
//   console.log("Le nombre " + number + " est pair.");
// } else {
//   console.log("Le nombre " + number + " est impair.");
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 2 - Age -----------------------
// Demande l'année de naissance à l'utilisateur
// let birthYear = prompt("Quel est votre année de naissance ?");

// // Calcule l'âge de l'utilisateur en utilisant l'année actuelle
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;

// // Affiche l'âge de l'utilisateur
// console.log("Vous avez " + age + " ans.");

// // Vérifie si l'utilisateur est majeur ou mineur
// if (age >= 18) {
//   console.log("Vous êtes majeur.");
// } else {
//   console.log("Vous êtes mineur.");
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 3 - Calculette ----------------
// // Déclaration des variables pour stocker les nombres et l'opérateur saisis
// let num1, num2, op;

// // Demande de saisie du premier nombre
// num1 = prompt("Entrez le premier nombre :");
// // Demande de saisie de l'opérateur
// op = prompt("Entrez l'opérateur (+, -, *, /) :");
// // Demande de saisie du second nombre
// num2 = prompt("Entrez le deuxième nombre :");

// // Conversion des nombres saisis en entiers
// num1 = parseInt(num1);
// num2 = parseInt(num2);



// // Vérification de l'opérateur saisi
// if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
//   // Affichage d'un message d'erreur si l'opérateur est incorrect
//   console.log("Erreur : opérateur incorrect. Veuillez entrer +, -, * ou /.");
// } else {
//   // Calcul et affichage du résultat
//   if (op === "+") {
//     console.log(num1 + num2);
//   } else if (op === "-") {
//     console.log(num1 - num2);
//   } else if (op === "*") {
//     console.log(num1 * num2);
//   } else if (op === "/") {
//     if (num2 === 0) {
//       console.log("Erreur : division par 0");
//     } else {
//       console.log(num1 / num2);
//     }
//   }
// }
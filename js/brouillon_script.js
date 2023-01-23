// var num = 1 ;
// var prenom = "Jean" ;

// alert(num);
// alert(prenom);

// var myVar; // le type de la variable myVar est undefined
// myVar = 324;    // type number
// myVar = "Bonjour";  // type string
// myVar = true; // type boolean
// myVar = new Array(); // type object

// EXERCICE 1
// var reponse1 = window.prompt("Saisissez votre nom");
// var reponse2 = window.prompt("Saisissez votre prenom");
// if (window.confirm("Etes-vous un homme?") == true)
// {
//   window.alert("Bonjour Monsieur "+ reponse1 +" "+ reponse2 + "\nBienvenue sur notre site web !")
// }

// EXERCICE 2
// var a = 100
// alert("Ceci est une chaine de caracteres : " + a + ".");
// var b = a--;
// var c = a;
// var d != true;

// EXERCICE 1 - PARITE (07 CONDITIONS)
// var a = prompt("Entrez un nombre");
// if(a%2 == 0)
// {
//   alert("Nombre pair");
// }
// else{
//   alert("Nombre impair")
// }

// EXERCICE 2 - AGE (07CONDITIONS)
// var date = prompt("Entrez votre année de naissance");

//   alert(" Vous avez: " + (2023 - date) + " ans.")
//   if (date > 2005) {
//   alert("Vous  êtes mineur");
//   }

//   else {
//   alert("Vous êtes majeur");
// }

// EXERCICE 3 - CALCULETTE (07CONDITIONS)
// var nbr1 = prompt("Saisissez un nombre: ");
// var op = prompt("Saisissez votre opération (+, -, * ou /):");
// var nbr2 = prompt("Saisissez un second nombre: ");

// nbr1 = parseInt(nbr1);
// nbr2 = parseInt(nbr2);
// switch (op) {
//   case "-":
//     alert(nbr1 - nbr2);
//     break;

//   case "*":
//     alert(nbr1 * nbr2);
//     break;

//   case "/":
//     alert(nbr1 / nbr2);
//     break;

//   case "+":
//     alert(nbr1 + nbr2);
//     break;

//   default:
//     alert("Erreur: opérateur inconnu");
// }

// JS08 : Les boucles
// console.log("Table de multiplication par 5");
// console.log("=============================");

// for (i=0; i<=10; i++)
// {
//     resultat = 5 * i;

//     console.log("5 * "+i+" = "+resultat);
// }

// // instructions exécutées après le for (i vaut 10)
// console.log("fin de la boucle");

// ---------------------------- LES BOUCLES----------------------------
// EXERCICE 1 - SAISIE (JS 08 BOUCLES)
// EXERCICE 1
// var i=1;
// var table = [];
// var prenom = "";

// do {
//     prenom = prompt("Saisissez le prénom N°" + i++ + " :");
//     if (prenom != "" && prenom != null) {
//         table.push(prenom);
//     }

// } while(prenom != null && prenom != "");

// console.log("Il y à: " + table.length + " prénoms.");
// console.log("Voici la liste des prénoms: " +table + ".");

// EXERCICE 2
// var n = prompt("Saisissez un nombre :");
// for(let i=0 ; i<n ; i++){
//     console.log(i);
// }

// EXERCICE 3
// let sum = 0;
// let i = 0;
// let input = prompt("Entrez un entier (0 pour arrêter) :");

// while (input != 0) {
//   sum += parseInt(input);
//   i++;
//   input = prompt("Entrez un entier (0 pour arrêter) :");
// }

// if (i > 0) {
//   let average = sum / i;
//   alert("Somme : " + sum);
//   alert("Moyenne : " + average);
// } else {
//   alert("Aucune valeur saisie.");
// }

// EXERCICE 4 - MULTIPLES
// var N = window.prompt("Saisissez un nombre de multiples :");
// var X = window.prompt("Saisissez un entier :");
// var i = 0;
// while (i < N) {
//     i++;
//     resultat = X * i;
//     console.log(X + "x" +i+ " = " +resultat);
// }

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

// ----------------------------LES FONCTIONS----------------------------
// let x = window.prompt("Entrez un nombre :");
// let y = window.prompt("Entrez un second nombre :");
// function produit(x, y) {
//     return x * y;

// }

// function afficheImg(image) {
//     document.getElementById("image").innerHTML = "pokpok";
// }

// EXERCICE 2
// function strtok(str1, str2, n){
//     var mots = str1.split(str2);
//     return mots[n-1];
// }

// ----------------------------LES TABLEAUX----------------------------
// // EXERCICE 1
// let size = parseInt(prompt("Entrez la taille du tableau:"));
// let array = new Array(size);

// for (let i = 0; i < size; i++) {
//     array[i] = parseInt(prompt("Entrez la valeur pour l'index " + i + ":"));
// }
// alert(array);

// EXERCICE 2

// Fonction pour lire un entier au clavier
// function getInteger() {
//     return parseInt(prompt("Entrez un entier :"));
//   }
  
//   // Fonction pour créer et initialiser le tableau
//   function initTab() {
//     var n = getInteger();
//     var tab = new Array(n);
//     return tab;
//   }
  
//   // Fonction pour saisir les valeur du tableau
//   function saisieTab(tab) {
//     for (var i = 0; i < tab.length; i++) {
//       tab[i] = getInteger();
//     }
//   }addEventListener
//     for (var i = 0; i < tab.length; i++) {
//       console.log("Poste " + i + " : " + tab[i]);
//     }
  
//   // Fonction pour afficher un valeur précise du tableau
//   function rechercheTab(tab) {
//     var i = getInteger();
//     console.log("Poste " + i + " : " + tab[i]);
//   }
  
//   // Fonction pour afficher le maximum et la moyenne des valeurs
//   function infoTab(tab) {
//     var max = tab[0];
//     var sum = 0;
//     for (var i = 0; i < tab.length; i++) {
//       if (tab[i] > max) {
//         max = tab[i];
//       }
//       sum += tab[i];
//     }
//     var avg = sum / tab.length;
//     console.log("Maximum : " + max);
//     console.log("Moyenne : " + avg);
//   }
  
//   var tab = initTab();
//   saisieTab(tab);
//   afficheTab(tab);
//   rechercheTab(tab);
//   infoTab(tab);
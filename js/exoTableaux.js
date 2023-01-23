// --------------- Exercice ---------------
// Exercice 1 -----------------------------
// // Initialiser un tableau vide
// let monTableau = [];

// // Demander à l'utilisateur la taille du tableau
// let taille = prompt("Entrez la taille du tableau:");

// // Utiliser une boucle pour récupérer les entrées de l'utilisateur pour chaque élément du tableau
// for (let i = 0; i < taille; i++) {
//   let valeur = prompt("Entrez une valeur pour l'élément " + (i + 1) + ":");
//   // Ajouter la valeur au tableau
//   monTableau.push(valeur);
// }

// // Utiliser une boucle pour afficher le contenu du tableau
// console.log("Le contenu du tableau est:");
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]);
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 2 -----------------------------
// Fonction pour lire un entier au clavier
function GetInteger(promptMessage) {
    return parseInt(prompt(promptMessage));
}

// Fonction pour créer et initialiser le tableau
function InitTab() {
    var n = GetInteger("Entrez le nombre de postes souhaité :");
    var tab = new Array(n);
    return tab;
}

// Fonction pour saisir les différents postes du tableau
function SaisieTab(tab) {
    for (var i = 0; i < tab.length; i++) {
        tab[i] = GetInteger("Entrez le contenu du poste " + (i + 1) + " :");
    }
}

// Fonction pour afficher tous les postes du tableau
function AfficheTab(tab) {
    console.log("Contenu du tableau :");
    for (var i = 0; i < tab.length; i++) {
        console.log("tab[" + i + "] = " + tab[i]);
    }
}

// Fonction pour afficher le contenu d'un poste de tableau dont le rang est saisi au clavier
function RechercheTab(tab) {
    var i = GetInteger("Entrez le rang du poste à afficher :");
    console.log("Contenu de tab[" + i + "] : " + tab[i]);
}

// Fonction pour afficher le maximum et la moyenne des postes
function InfoTab(tab) {
    var max = tab[0];
    var somme = 0;
    for (var i = 0; i < tab.length; i++) {
        somme += tab[i];
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    var moy = somme / tab.length;
    console.log("Maximum : " + max);
    console.log("Moyenne : " + moy);
}

// Programme principal
var monTab = InitTab();
SaisieTab(monTab);
AfficheTab(monTab);
RechercheTab(monTab);
InfoTab(monTab);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// Exercice 3 -----------------------------
// let numbers = [5, 3, 8, 2, 1, 4];
// console.log(bubbleSort(numbers)); // Affiche [1, 2, 3, 4, 5, 8]

// function bubbleSort(arr) {
//     // Boucler jusqu'à ce que tous les éléments soient triés
//     for (let i = 0; i < arr.length; i++) {
//         // Boucler jusqu'à la dernière position de l'élément échangé
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             // Comparer chaque paire d'éléments
//             if (arr[j] > arr[j + 1]) {
//                 // Échanger les éléments si l'élément de droite est plus petit
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
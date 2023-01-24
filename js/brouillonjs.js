// document.querySelector("form").addEventListener("submit", function(event) {
//     // Empêche l'envoi de formulaire par défaut
//     event.preventDefault();
    
//     // Utilisé pour vérifier si tous les champs sont valides
//     var valid = true;
    
//     // Vérifie si le champ societe contient au moins 1 caractère
//     var societe = document.getElementById("societe");
//     if (!societe.value || societe.value.length < 1) {
//       valid = false;
//       societe.classList.add("required");
//     } else {
//       societe.classList.remove("required");
//     }
  
//     // Vérifie si le champ personne_a_contacter contient au moins 1 caractère
//     var personne_a_contacter = document.getElementById("personne_a_contacter");
//     if (!personne_a_contacter.value || personne_a_contacter.value.length < 1) {
//       valid = false;
//       personne_a_contacter.classList.add("required");
//     } else {
//       personne_a_contacter.classList.remove("required");
//     }

//     // Vérifie si le champ ville contient au moins 1 caractère
//     var ville = document.getElementById("ville");
//     if (!ville.value || ville.value.length < 1) {
//       valid = false;
//       ville.classList.add("required");
//     } else {
//       ville.classList.remove("required");
//     }
    
//     // Vérifie si le champ email contient au moins le caractère "@"
//     var email = document.getElementById("email");
//     if (!email.value || !email.value.includes("@")) {
//       valid = false;
//       email.classList.add("required");
//     } else {
//       email.classList.remove("required");
//     }
    
//     // Si un des champs n'est pas valide affiche un message d'erreur
//     if (!valid) {
//       alert("Veuillez vérifier les champs requis.");
//     } else {
//       // Envoyer le formulaire
//     }
//   });

//   // Récupération de l'élément le code postal
// const codePostal = document.getElementById("code_postal");

// // Ajout d'un écouteur d'événement pour l'événement "blu r"
// codePostal.addEventListener("blur", function() {
//   // Récupération de la valeur
//   const codePostalValue = codePostal.value;

//   // Vérification si la valeur entrée contient bien 5 caractères
//   if (codePostalValue.length !== 5) {
//     // Si la longueur n'est pas égale à 5, affiche un message d'erreur
//     alert("Le code postal doit comporter 5 caractères numériques");
//   }
// });
// // Récupération de la liste déroulante et de la zone de texte
// const select = document.getElementById("environnement_technique");
// const textInput = document.getElementById("environnement_technique_text");

// // Ajout d'un écouteur d'événement "change" sur la liste déroulante
// select.addEventListener("change", function () {
//   // Récupération des options sélectionnées
//   const selectedOptions = select.selectedOptions;

//   // Initialisation de la variable pour stocker les valeurs sélectionnées
//   let selectedValues = "";

//   // Boucle sur les options sélectionnées pour les ajouter à la variable
//   for (let i = 0; i < selectedOptions.length; i++) {
//     const option = selectedOptions[i];
//     if (option.value !== "option1") {
//       selectedValues += option.value + " ";
//     }
//   }
//   // Mise à jour de la valeur de la zone de texte avec les valeurs sélectionnées
//   textInput.value = selectedValues;
// });
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// // Fonction pour vérifier si le champ société comporte au moins 1 caractère
// function validerSociete() {
//     // Récupération de la valeur du champ
//     var societe = document.getElementById("societe").value;
    
//     // Vérification de la longueur de la valeur du champ
//     if (societe.length < 1) {
//       alert("Le champ société doit comporter au moins 1 caractère.");
//       return false;
//     }
//     // Si tout est valide, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
//   function validerPersonne_a_contacter() {
//     // Récupération de la valeur du champ
//     var personne_a_contacter = document.getElementById("personne_a_contacter").value;
    
//     // Vérification de la longueur de la valeur du champ
//     if (personne_a_contacter.length < 1) {
//       alert("Le champ société doit comporter au moins 1 caractère.");
//       return false;
//     }
//     // Si tout est valide, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
//   function validerVille() {
//     // Récupération de la valeur du champ
//     var ville = document.getElementById("ville").value;
    
//     // Vérification de la longueur de la valeur du champ
//     if (ville.length < 1) {
//       alert("Le champ société doit comporter au moins 1 caractère.");
//       return false;
//     }
//     // Si tout est valide, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
//   // Fonction pour vérifier si le champ e-mail comporte au moins le caractère @
// function validerEmail() {
//     // Récupération de la valeur du champ e-mail
//     var email = document.getElementById("email").value;
    
//     // Vérification de la présence du caractère @ dans la valeur du champ e-mail
//     if (!email.includes("@")) {
//       alert("Le champ e-mail doit comporter le caractère @.");
//       return false;
//     }
//     // Si tout est valide, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
//   // Fonction pour vérifier si le champ code postal comporte au moins 5 caractères numériques
// function validerCodePostal() {
//     // Récupération de la valeur du champ code postal
//     var codePostal = document.getElementById("code_postal").value;
    
//     // Vérification de la longueur de la valeur du champ code postal
//     if (codePostal.length < 5) {
//       alert("Le champ code postal doit comporter au moins 5 caractères numériques.");
//       return false;
//     }
//     // Vérification si la valeur du champ code postal est numérique
//     if(isNaN(codePostal)){
//       alert("Le champ code postal doit être numérique.");
//       return false;
//     }
//     // Si tout est valide, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
// // Fonction pour vérifier si les champs ville, personne_a_contacter et societe sont remplis
// function validerChampsObligatoires() {
//     // Récupération des valeurs des champs ville, personne_a_contacter et societe
//     var ville = document.getElementById("ville").value;
//     var personneAContacter = document.getElementById("personne_a_contacter").value;
//     var societe = document.getElementById("societe").value;
    
//     // Initialisation d'un tableau pour stocker les champs non remplis
//     var champsNonRemplis = [];
    
//     // Vérification de la longueur de la valeur des champs ville, personne_a_contacter et societe
//     if (ville.length < 1) {
//       champsNonRemplis.push("ville");
//     }
//     if (personneAContacter.length < 1) {
//       champsNonRemplis.push("personne à contacter");
//     }
//     if (societe.length < 1) {
//       champsNonRemplis.push("société");
//     }
    
//     // Si au moins un champ n'est pas rempli, afficher une alerte indiquant les champs concernés
//     if (champsNonRemplis.length > 0) {
//       var message = "Les champs suivants doivent être remplis : " + champsNonRemplis.join(", ") + ".";
//       alert(message);
//       return false;
//     }
    
//     // Si tous les champs sont remplis, la fonction renvoie true
//     return true;
//   }

// // ---------------------------------------------------------------------------------------------------------
//   // Fonction pour valider tous les champs du formulaire
// function validerFormulaire() {
//     // Récupération de tous les champs de formulaire
//     var champs = document.querySelectorAll("input, select, textarea");
    
//     // Initialisation d'un tableau pour stocker les champs non valides
//     var champsNonValides = [];
    
//     // Boucle sur tous les champs pour vérifier la validité
//     for (var i = 0; i < champs.length; i++) {
//       var champ = champs[i];
      
//       // Vérification de la validité de chaque champ en appelant les fonctions de validation
//       if (!validerSociete(champ)) {
//         champsNonValides.push(champ);
//       }
//       if (!validerEmail(champ)) {
//         champsNonValides.push(champ);
//       }
//       if (!validerCodePostal(champ)) {
//         champsNonValides.push(champ);
//       }
//       if (!validerChampsObligatoires(champ)) {
//         champsNonValides.push(champ);
//       }
//     }
// }
// // ---------------------------------------------------------------------------------------------------------
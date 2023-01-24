document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var requiredFields = ["societe", "personne_a_contacter", "code_postal", "ville", "email"];
    var valid = true;
    // supprime les anciens messages d'erreur
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(message) {
      message.remove();
    });
    
    requiredFields.forEach(function(field) {
      var input = document.getElementById(field);
      if (!input.value) {
        valid = false;
        input.classList.add("required");
        // ajoute un élément span pour afficher le message d'erreur à côté de l'input
        input.insertAdjacentHTML("afterend", '<span class="error-message"> Ce champ est requis.</span>');
      } else {
        input.classList.remove("required");
        // Vérifie si le champ email contient un @
        if (field === "email" && !input.value.includes("@")) {
          valid = false;
          // ajoute un élément span pour afficher le message d'erreur à côté de l'input
          input.insertAdjacentHTML("afterend", '<span class="error-message"> Veuillez entrer une adresse email valide.</span>');
        }
        // Vérifie si le champ code_postal contient au moins 5 caractères numériques
        if (field === "code_postal" && !/^\d{5}$/.test(input.value)) {
          valid = false;
          // ajoute un élément span pour afficher le message d'erreur à côté de l'input
          input.insertAdjacentHTML("afterend", '<span class="error-message"> Veuillez entrer un code postal valide (5 chiffres).</span>');
        }
      }
    });
    
    if (!valid) {
      // Si un des champs obligatoires n'a pas été rempli, affiche un message d'erreur
      // input.insertAdjacentHTML("afterend", '<span class="error-message">Veuillez remplir tous les champs obligatoires.</span>');
    } else {
      // Envoyer le formulaire
    }
  });

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

  // Récupération de la liste déroulante et de la zone de texte
const select = document.getElementById("environnement_technique");
const textInput = document.getElementById("environnement_technique_text");

// Ajout d'un écouteur d'événement "change" sur la liste déroulante
select.addEventListener("change", function () {
  // Récupération des options sélectionnées
  const selectedOptions = select.selectedOptions;

  // Initialisation de la variable pour stocker les valeurs sélectionnées
  let selectedValues = "";

  // Boucle sur les options sélectionnées pour les ajouter à la variable
  for (let i = 0; i < selectedOptions.length; i++) {
    const option = selectedOptions[i];
    if (option.value !== "option1") {
      selectedValues += option.value + " ";
    }
  }
  // Mise à jour de la valeur de la zone de texte avec les valeurs sélectionnées
  textInput.value = selectedValues;
});
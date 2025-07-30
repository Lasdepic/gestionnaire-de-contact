const divFormCreateUser = document.createElement("div");
divFormCreateUser.classList.add("divFormCreateUser");
document.body.appendChild(divFormCreateUser);

// nom
const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom";
divFormCreateUser.appendChild(nomLabel);
const nomInput = document.createElement("input");
divFormCreateUser.appendChild(nomInput);

// prenom
const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom";
divFormCreateUser.appendChild(prenomLabel);
const prenomInput = document.createElement("input");
divFormCreateUser.appendChild(prenomInput);

// numero
const numeroLabel = document.createElement("label");
numeroLabel.textContent = "Numéro";
numeroLabel.type = "number";
divFormCreateUser.appendChild(numeroLabel);
const numeroInput = document.createElement("input");
numeroInput.placeholder = "Entrez votre numero de telephone";

numeroInput.setAttribute("type", "number");
divFormCreateUser.appendChild(numeroInput);

// buttonValidation
const boutonValidation = document.createElement("button");
boutonValidation.classList.add("boutonValidation");
boutonValidation.textContent = "Valider";
divFormCreateUser.appendChild(boutonValidation);

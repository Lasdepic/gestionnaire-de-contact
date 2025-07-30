const container = document.createElement("div");
document.body.appendChild(container);

const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom";
container.appendChild(nomLabel);
const nomInput = document.createElement("input");
container.appendChild(nomInput);

const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom";
container.appendChild(prenomLabel);
const prenomInput = document.createElement("input");
container.appendChild(prenomInput);

const numeroLabel = document.createElement("label");
numeroLabel.textContent = "Numéro";
container.appendChild(numeroLabel);
const numeroInput = document.createElement("input");
container.appendChild(numeroInput);

const boutonValidation = document.createElement("button");
boutonValidation.textContent = "Valider";
container.appendChild(boutonValidation);

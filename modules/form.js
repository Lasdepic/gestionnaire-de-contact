const container = document.createElement("div");
document.body.appendChild(container);

export const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom";
container.appendChild(nomLabel);
export const nomInput = document.createElement("input");
container.appendChild(nomInput);

export const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom";
container.appendChild(prenomLabel);
export const prenomInput = document.createElement("input");
container.appendChild(prenomInput);

export const numeroLabel = document.createElement("label");
numeroLabel.textContent = "Numéro";
container.appendChild(numeroLabel);
export const numeroInput = document.createElement("input");
container.appendChild(numeroInput);

export const boutonValidation = document.createElement("button");
boutonValidation.textContent = "Valider";
container.appendChild(boutonValidation);

export const boutonSuppression = document.createElement("button");
boutonSuppression.textContent = "Supprimer";
container.appendChild(boutonSuppression);



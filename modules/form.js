
<<<<<<< HEAD
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


=======
import { addContactFromForm } from "./script.js";
import { mainPage } from "./app.js";
export let nomInput, prenomInput, numeroInput, divFormCreateUser;

export function addUserDiv() {
  divFormCreateUser = document.createElement("div");
  divFormCreateUser.classList.add("divFormCreateUser");

  const exitButton = document.createElement("button");
  exitButton.id = "exitBtn";
  exitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
  divFormCreateUser.appendChild(exitButton);

  const titleCreateContact = document.createElement("h3");
  divFormCreateUser.appendChild(titleCreateContact)
  titleCreateContact.textContent = "Cree un nouveau contact"

  // Nom
  const nomLabel = document.createElement("label");
  nomLabel.textContent = "Nom";
  divFormCreateUser.appendChild(nomLabel);

  nomInput = document.createElement("input");
  divFormCreateUser.appendChild(nomInput);

  // Prénom
  const prenomLabel = document.createElement("label");
  prenomLabel.textContent = "Prénom";
  divFormCreateUser.appendChild(prenomLabel);

  prenomInput = document.createElement("input");
  divFormCreateUser.appendChild(prenomInput);

  // Numéro
  const numeroLabel = document.createElement("label");
  numeroLabel.textContent = "Numéro de téléphone";
  divFormCreateUser.appendChild(numeroLabel);

  numeroInput = document.createElement("input");
  numeroInput.setAttribute("type", "number");
  numeroInput.placeholder = "Entrez un numero de téléphone";
  divFormCreateUser.appendChild(numeroInput);

  // Bouton validation
  const boutonValidation = document.createElement("button");
  boutonValidation.textContent = "Valider";
  boutonValidation.id = "btnValidation";
  divFormCreateUser.appendChild(boutonValidation);

  // Exit form
  exitButton.addEventListener("click", () => {
    document.body.removeChild(divFormCreateUser);
  });

  boutonValidation.addEventListener("click", () =>{
    addContactFromForm();
    document.body.removeChild(divFormCreateUser);
  })
}

>>>>>>> dev

// -------------------------------------------------------------------------------------------------------------
// import de la page form
 import {usersCount} from "./app.js"

import {
  nomInput,
  prenomInput,
  numeroInput,
} from "./form.js";

// création de tableau

export let listeContact = [
  {
    nom: "Deafiaa",
    prenom: "Carla",
    phone: 90291,
  },
  {
    nom: "Clément",
    prenom: "Jordan",
    phone: 34070,
  },
  {
    nom: "Bali",
    prenom: "Eszter",
    phone: 34000,
  },
];

// -------------------------------------------------------------------------------------------------------------

// // Ajout des contact

  function addContact(contact, userArray) {
    userArray.push(contact);
    return userArray;
}

// créattion des contact à partir des inputs

export function createContactFromInputs() {
  const nom = nomInput.value.trim();
  const prenom = prenomInput.value.trim();
  const phone = numeroInput.value.trim();
  return {
    nom: nom,
    prenom: prenom,
    phone: phone,
  };
}

// une fois ajouter, les inputs ce vides
export function clearInputs() {

  nomInput.value = "";
  prenomInput.value = "";
  numeroInput.value = "";
}

// ajout contact depuis le form
export function addContactFromForm() {
  const newContact = createContactFromInputs();
  if (newContact) {
    addContact(newContact, listeContact);
    clearInputs();
    console.log("Contact ajouté:", newContact);
    console.log("Liste actuelle:", listeContact);
  }
}

// suppression contact depuis le form
export function deleteContactFromForm() {

  const contactToDelete = createContactFromInputs();
  if (contactToDelete.nom && contactToDelete.prenom && contactToDelete.phone) {
    deleteContact(listeContact, contactToDelete);
    clearInputs();
    usersCount--;
    console.log("Contact supprimé:", contactToDelete);
    console.log("Liste actuelle:", listeContact);
  } else {
    console.log("Veuillez remplir tous les champs pour supprimer un contact");
  }
}

// Supprimer des contacts

export function deleteContact(userArray, contact) {

  for (let i = 0; i < userArray.length; i++) {
    if (
      userArray[i].nom === contact.nom &&
      userArray[i].prenom === contact.prenom &&
      userArray[i].phone === contact.phone
    ) {
      userArray.splice(i, 1);
      break;
    }
  }
  return userArray;
}

// -------------------------------------------------------------------------------------------------------------



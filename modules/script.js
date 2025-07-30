// -------------------------------------------------------------------------------------------------------------

// création de tableau

let listeContact = [{
    nom: "nom",
    prenom: "prenom",
    phone: "phone"
}];

// -------------------------------------------------------------------------------------------------------------

// Ajout des contact

export function addContact(contact, userArray) {
    userArray.push(contact);
    return userArray;
}

// -------------------------------------------------------------------------------------------------------------

// Supprimer des contacts

export function deleteContact(userArray, contact) {
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].nom === contact.nom &&
            userArray[i].prenom === contact.prenom &&
            userArray[i].phone === contact.phone) {
            userArray.splice(i, 1);
            break;
        }
    }
    return userArray;
}

// -------------------------------------------------------------------------------------------------------------

// Test des function

console.log(addContact({
    nom: "Clement",
    prenom: "Jordan",
    phone: "0613947403"
}, listeContact));

console.log(addContact({
    nom: "Bali",
    prenom: "Ester",
    phone: "0613947403"
}, listeContact));

console.log(addContact({
    nom: "Defiaa",
    prenom: "Carla",
    phone: "0613947403"
}, listeContact));

// test suppr utilisateur

deleteContact({
    nom: "Defiaa",
    prenom: "Carla",
    phone: "0613947403"
}, listeContact);


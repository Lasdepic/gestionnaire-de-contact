import {} from "./modules/app.js"
import {} from "./modules/form.js"
import {} from "./modules/script.js"

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

deleteContact(listeContact, {
    nom: "Clement",
    prenom: "Jordan",
    phone: "0613947403"
});
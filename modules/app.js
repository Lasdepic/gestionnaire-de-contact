
import { listeContact, deleteContact} from "./script.js";
import { divFormCreateUser } from "./form.js";
export let usersCount = 0;

export function mainPage() {
  const sectionMain = document.createElement("section");
  const titleContact = document.createElement("h2");
  const userIcons = document.createElement("h3");
  const userMainDiv = document.createElement("div");
  const userListP = document.createElement("h4");
  const sectionUserList = document.createElement("section");
  const addUser = document.createElement("button");
  const contactCounter = document.createElement("p");
  const actualisationBtn = document.createElement("button");

  userMainDiv.classList.add("mainDiv");
  sectionUserList.classList.add("sectionCards");

  actualisationBtn.id = "actBtn";
  addUser.id = "addUserBtn";
  contactCounter.id = "contactCounter";


  document.body.appendChild(sectionMain);
  sectionMain.appendChild(titleContact);
  sectionMain.appendChild(userMainDiv);
  userMainDiv.append(
    userIcons,
    actualisationBtn,
    sectionUserList,
    addUser,
    contactCounter
  );

  titleContact.textContent = "Your Contacts";
  userIcons.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="125px" viewBox="0 -960 960 960" width="125px" fill="#5ee8f5a6"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>`;
  userListP.textContent = "User list empty";
  addUser.innerHTML = `Add user <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c45698"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
  actualisationBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c45698"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>`

  //* boutton afficher la popup creation nouveau contact

  addUser.addEventListener("click", () => {
    document.body.appendChild(divFormCreateUser);
  })

actualisationBtn.addEventListener("click", listActualisation);

const svgRefresh = actualisationBtn.querySelector("svg");

listActualisation()

function listActualisation(){
sectionUserList.innerHTML = "";
usersCount = 0;
svgRefresh.classList.add("spin");

svgRefresh.addEventListener('animationend', () => {
    svgRefresh.classList.remove('spin');
  }, { once: true });

  listeContact.forEach((element) => {
    usersCount++;
    contactCounter.innerHTML = `Vous avez ${usersCount} contacts`;
    const divContactList = document.createElement("div");
    const nomContact = document.createElement("p");
    const telContact = document.createElement("p");
    const divContactText = document.createElement("div");
    const divContactBtn = document.createElement("div");
    const deleteContactBtn = document.createElement("button");
    const profilePictures = document.createElement("img");
    const divPpText = document.createElement("div");

    divContactList.classList.add("divCard");
    divContactBtn.classList.add("divBtnCard");
    profilePictures.classList.add("ppImg");
    profilePictures.setAttribute("src", "https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png");

    divContactText.id = "divContactText";

    sectionUserList.appendChild(divContactList);
    divContactList.append(divPpText, divContactBtn);
    divPpText.append(profilePictures, divContactText);
    divContactText.append(nomContact, telContact);
    divContactBtn.append(deleteContactBtn);

    nomContact.textContent = `- ${element.nom.toUpperCase()} ${element.prenom}`;
    telContact.textContent = `- ${element.phone}`;
    deleteContactBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8e8e8eff"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>`;

    deleteContactBtn.addEventListener('click', () =>{
      deleteContact(listeContact, element);
      listActualisation();
    })
  });
}
}


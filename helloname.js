function cleanData(userInput) {
    return DOMPurify.sanitize(userInput);
}

function mojaFunkcija() {
    let ime = document.querySelector("#ime");
    let prezime = document.querySelector("#prezime");
    let poruka = document.querySelector("#poruka");
    poruka.innerHTML = "Dobrodošao " + ime.value + cleanData(prezime.value);
}

let passwordList = [];
let exposePasswords = false;

function storePassword() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    passwordList.push({ username, password });
    updatePasswordList();
}

function updatePasswordList() {
    let passwordListElement = document.querySelector("#passwordList");
    passwordListElement.innerHTML = "";

    passwordList.forEach((entry) => {
        let listItem = document.createElement("li");
        listItem.textContent = `Username: ${entry.username}, Password: ${exposePasswords ? entry.password : "********"}`;
        passwordListElement.appendChild(listItem);
    });
}

function toggleExposure() {
    exposePasswords = !exposePasswords;
    updatePasswordList();
}
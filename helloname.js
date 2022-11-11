function cleanData(userInput){
    return DOMPurify.sanitize(userInput);
}

function mojaFunkcija() {
    let ime = document.querySelector("#ime");
    let prezime = document.querySelector("#prezime");
    let poruka = document.querySelector("#poruka");

   

    poruka.innerHTML = "Dobrodošao " + ime.value + cleanData(prezime.value);
}
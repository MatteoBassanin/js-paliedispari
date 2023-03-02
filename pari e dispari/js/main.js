// chiediamo all utente 2 valori
// un numero da 1 a 5
// e se + pari e dispari



const numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numeroUtente);

const oddEvenUser = prompt("Indovina se il numero è pari o dispari");
console.log(oddEvenUser);

let randomNumberForComputer

console.log(numeroCasualeComputer(randomNumberForComputer));


function numeroCasualeComputer(numeroComputer) {
    const randomNumberComputer = Math.floor(Math.random() * 4) + 1;
    return randomNumberComputer;
}

let sommaNumeri = numeroUtente + numeroCasualeComputer(randomNumberForComputer);
console.log(sommaNumeri);


let numerovalore


function vincitore (valore){

    let result = "";

    if (sommaNumeri % 2 == 0 ){
        result = "pari";
    }else {
        result = "dispari";
    }

    return result
}
console.log(vincitore(numerovalore));

// if (oddEvenUser == vi)
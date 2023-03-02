let parolaInserita = prompt("inserisci una parola per verificare se è palindroma");

let parolaInvertita;
console.log(parolaPalindroma(parolaInserita));

console.log(parolaInserita);




if( parolaInserita == parolaPalindroma(parolaInserita)){
    console.log("la parola è palindroma");
}else{
    console.log("la parola non è palindroma");
}




function parolaPalindroma(controllo){

    parolaInvertita = "";

    let i = controllo - 1;

    while (i >= 0 ){
        parolaInvertita += controllo[i];
        i--;
    }
    return parolaInvertita;
}















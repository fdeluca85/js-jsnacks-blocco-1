
// alert("ciao")

// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// let somma = 0;


        // ****for
// for (let i = 0; i < 5; i++) {
//     numeri = parseInt(prompt("Inserisci un numero"))
//     somma = somma + numeri
// }
// console.log('la somma è '+ somma);


        // ****while
// let i = 0;
// while (i < 5) {
//     numeri = parseInt(prompt("Inserisci un numero"))
//     somma = somma + numeri
//     i++;
//     console.log(numeri);
// }
// console.log('la somma è '+ somma);


// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const  parola1 = prompt("inserisci una parola");
const  parola2 = prompt("inserisci una parola");
console.log(parola1);
console.log(parola2);

if   (parola1.length > parola2.length){
console.log("la parola piú lunga è " + parola1); 
}
else if(parola1.length < parola2.length ){
    console.log("la parola piú lunga è " + parola2);
}
else{
     console.log(parola1 + " e " + parola2);
}



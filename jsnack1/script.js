
// alert("ciao")

// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

let somma = 0;


        // ****for
for (let i = 0; i < 5; i++) {
    numeri = parseInt(prompt("Inserisci un numero"))
    somma = somma + numeri
}
console.log('la somma è '+ somma);


        // ****while
// let i = 0;
// while (i < 5) {
//     numeri = parseInt(prompt("Inserisci un numero"))
//     somma = somma + numeri
//     i++;
//     console.log(numeri);
// }
// console.log('la somma è '+ somma);



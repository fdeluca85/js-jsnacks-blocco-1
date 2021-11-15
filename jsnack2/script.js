
// alert("ciao")

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


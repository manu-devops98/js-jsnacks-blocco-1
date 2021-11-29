/* Stampa il cubo dei primi N numeri,
 dove N è un numero indicato dall’utente. */

 const numberUser = parseInt(prompt('Inserisci numero'));
 
for (let i = 0; i < numberUser; i++) {  
    console.log(Math.pow(i, 3));
}




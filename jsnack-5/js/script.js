/* Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */

let numbers = []; 

for (let i = 0; i < 6; i++) {
    const numberUser = parseInt(prompt('Inserisci numero'));

    if (numberUser % 2 == 1) {
        numbers.push(numberUser);
    } 
}
console.log(numbers);

/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const list = ['MARIO', 'CHIARA', 'FRANCESCO', 'FILIPPO', 'LUCA', 'SARA', 'GIULIA', 'FEDERICO'];

let userName = prompt('Inserisci nome').toUpperCase();
const container = document.querySelector('.container');
let welcome = document.createElement('h1');

let find = false;
for (let i = 0; i < list.length; i++) {
  if (userName.toUpperCase() == list[i]) {
    find = true;
  }
}
  
  if (find) {
    welcome = 'Benvenuto alla festa ' + userName;
  } else {
    welcome = 'Non sei nella lista degli invitati';
  }
container.append(welcome);

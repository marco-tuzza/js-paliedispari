// Gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// Facciamo scegliere un numero al nostro giocatore
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
    // Assicuriamoci che inserisca un carattere numerico compreso tra 1 e 5
    if (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1) {
        var pari = undefined
        alert('Si prega di inserire solo caratteri numerici e numeri compresi tra 1 e 5');
    } else {
        console.log('Hai scelto : ' + numeroUtente);
    }

// Facciamo scegliere tra pari e dispari
var sceltaUtente = prompt('Scrivi "P" per scegliere pari o "D" per scegliere dispari')
// Per comodità, assicuriamoci che la lettera digitata dal giocatore venga letta come un carattere maiuscolo
var sceltaUtente = sceltaUtente.toUpperCase();
    // Mostriamo all'utente la scelta appena fatta o un messaggio di errore in caso di scelta non valida
    if (sceltaUtente == 'P') {
        console.log('Hai scelto Pari');
    } else if (sceltaUtente == 'D') {
        console.log('Hai scelto Dispari');
    } else {
        alert('Si prega di inserire "P" per scegliere pari o "D" per scegliere dispari');
    }


// Generiamo un numero casuale tra 1 e 5
var numeroComputer = (Math.ceil(Math.random() * 5))
console.log('Il computer ha scelto: ' + numeroComputer);

// Sommiamo il numero selto dall'utente con quello scelto dal computer
var sommaRisultati = parseInt(numeroUtente + numeroComputer)
console.log('La somma dei due numeri è ' + sommaRisultati);

// Creiamo delle condizioni di vittoria e sconfitta che tengano in considerazione le scelte prese in precedenza dall'utente e l'esito della divisione per due della somma dei numeri scelti da utente e computer.
// Creiamo anche un messaggio di errore nel caso in cui l'utente abbia sbagliato qualcosa durante il processo di compilazione del gioco
    if (sceltaUtente == 'P' && sommaRisultati % 2 == 0) {
        alert('Hai vinto!');
    } else if (sceltaUtente == 'P' && sommaRisultati % 2 == 1) {
        alert('Hai perso!');
    } else if (sceltaUtente == 'D' && sommaRisultati % 2 == 0) {
        alert('Hai perso!');
    } else if (sceltaUtente == 'D' && sommaRisultati % 2 == 1) {
        alert('Hai vinto!');
    } else {
        alert('Qualcosa è andato storto, riprova');
    }

// Scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// Chiediamo all'utente di fornirci una parola
var parolaUtente = palindromo(prompt('Scegli una parola'))
// Per evitare confusione tra lettere maiuscole e minuscole, che potrebbero compromettere il risultato finale, facciamo in modo che la parola scelta dall'utente venga trasformata in testo maiuscolo
function palindromo(parola) {
var parolaMaiuscola = parola.toUpperCase();
// Dobbiamo verificare se la parola è palindroma, per farlo dobbiamo prenderla, leggerla al contrario e vedere se è rimasta invariata.
// Per facilitare il processo, prendiamo la parola e la scomponiamo, lettera per lettera
var parolaDivisa = parolaMaiuscola.split('')
// Una volta divisa la parola per lettere, prendiamo le lettere e le disponiamo al contrario
var parolaContrario = parolaDivisa.reverse()
// Ora che le nostre lettere sono nell'ordine inverso possiamo unirle nuovamente per ottenere la stessa parola iniziale, ma al contrario
var parolaPalindromo = parolaDivisa.join('')
// A questo punto ci basta mettere al confronto le due parole per verificare se esse sono uguali
if (parolaMaiuscola == parolaPalindromo) {
    return console.log('La parola ' + parola + ' è una parola palindroma');
} else {
    return console.log('La parola ' + parola + ' non è una parola palindroma');
}

}

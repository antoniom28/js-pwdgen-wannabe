let nomeUtente = prompt('Inserisci il tuo Nome');
while(nomeUtente.length === 0)
    nomeUtente = prompt('Errore! Devi inserire il tuo Nome');

let cognomeUtente = prompt('Inserisci il tuo Cognome');
while(cognomeUtente.length === 0)
    cognomeUtente = prompt('Errore! Devi inserire il tuo Cognome');

let coloreUtente = prompt('Il tuo colore preferito');
while(coloreUtente.length === 0)
    coloreUtente = prompt('Errore! Devi inserire il tuo colore preferito');

let numeroPassword = nomeUtente.length + cognomeUtente.length + coloreUtente.length;
document.writeln('Password generata : ' + nomeUtente + cognomeUtente + coloreUtente + numeroPassword);
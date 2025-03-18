/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 10;
const b = 9;
console.log(" il primo numero è " + a);
console.log(" il secondo numero è " + b);
if (a > b) {
  console.log(a + " è maggiore di " + b);
} else {
  console.log(b + " è più grande di " + a);
}*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 4;
console.log(" il numero è " + a);
if (a != 5) {
  console.log("not equals");
}*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 25;
console.log(" il numero è " + a);
if (a % 25 == 0) {
  console.log("divisibile per 5");
}*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 8;
const b = 0;
console.log(" il primo numero è " + a);
console.log(" il secondo numero è " + b);
if (a === 8 || b === 8) {
  console.log("Il valore del primo numero o del secondo numero è 8");
} else if (a + b === 8 || a - b === 8 || b - a === 8) {
  console.log("L'addizione o la sottrazione del primo numero e del secondo numero è uguale a 8");
}*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const totalShoppingCart = 40;
const carrello = 50;
const spedizione = 10;
const tot = totalShoppingCart + spedizione;
if (totalShoppingCart >= carrello) {
  console.log("Hai speso almeno 50, quindi avrai la spedizione in omaggio. Il totale è " + totalShoppingCart);
} else {
  console.log("Non hai speso almeno 50, quindi dovrai pagare la spedizione. Il totale è " + tot);
}*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const totalShoppingCart = 65;
const carrello = 50;
const spedizione = 10;
const black = totalShoppingCart - (totalShoppingCart * 20) / 100;
const tot = black + spedizione;
console.log("Oggi è il Black friday. Hai lo sconto del 20% sulla spesa. Paghi " + black);
if (black >= carrello) {
  console.log("Hai speso almeno 50, quindi avrai la spedizione in omaggio. Il totale è " + black);
} else {
  console.log("Non hai speso almeno 50, quindi dovrai pagare la spedizione. Il totale è " + tot);
}*/
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 10;
const b = 0;
const c = 10;
let primo;
let secondo;
let terzo;
if (a >= b && a >= c && b >= c) {
  primo = a;
  secondo = b;
  terzo = c;
} else if (a >= b && a >= c && c >= b) {
  primo = a;
  secondo = c;
  terzo = b;
} else if (b >= a && b >= c && a >= c) {
  primo = b;
  secondo = a;
  terzo = c;
} else if (b >= a && b >= c && c >= a) {
  primo = b;
  secondo = c;
  terzo = a;
} else if (c >= a && c >= b && a >= b) {
  primo = c;
  secondo = a;
  terzo = b;
} else if (c >= a && c >= b && b >= a) {
  primo = c;
  secondo = b;
  terzo = a;
} else if (a == b && b == c) {
  primo = a;
  secondo = b;
  terzo = c;
}
console.log(primo);
console.log(secondo);
console.log(terzo);*/
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 10;
console.log(" il numero è " + a);
console.log(typeof a);*/
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const a = 11;
if (a % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}*/
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let val = 10;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me["city"]);*/
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
delete me.lastName;
console.log(me);*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.skills.pop();
console.log(me);*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const lista = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);*/
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*const lastIndex = lista.lenght - 1;
lista.splice(lastIndex, 1, 100);
console.log(array);*/

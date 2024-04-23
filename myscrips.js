"use strict";

let text1 = document.getElementById("text");

const username = prompt('inserisci il tuo nome');
const userlastname = prompt('inserisci il tuo cognome');
const color = prompt('inserisci il tuo colore preferito');

let correntext = username + '' + userlastname + '' + color + Math.round(Math.random() * 100);

console.log(correntext)

text1.innerHTML = correntext;
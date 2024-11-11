"use strict";

/* ------------------------------------------------------------------------------------------------
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri 
che ha visto precedentemente, nell'ordine che preferisce. 
(Per favorire il lavoro vostro e dei tutor mettete inizialmente un timer di 5-10 sec e non 30) 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.
------------------------------------------------------------------------------------------------ */

// Variabli da elementi HTML

const randomNumbers = document.getElementById("numbers-list");

const sendAnswer = document.getElementById("answers-form");

// Array vuoti per i numeri generati, le risposte dell'utente e i numeri indovinati;


let userNumbers = [];
let numbersGuessed = [];

// Countdown 

let seconds = 10;
const timer = setInterval(function () {
    if (seconds > 1) {
        countdown.innerHTML = --seconds;
    } else {
        countdown.innerHTML = "Inserisci i numeri di Simon"
        instructions.innerHTML = "";
        randomNumbers.innerHTML = "";
        sendAnswer.classList.toggle("d-none")
        clearInterval(timer);
    }
}, 1000);

// Funzione per creare i <li> che conterranno i numeri casuali

function createGuess(index) {
    let numbersToGuess = [];
    for (let i = 0; i < index; i++) {
        const guess = document.createElement("li");
        numbersToGuess.push(randNumGen(1, 50));
        guess.innerHTML = numbersToGuess[i];
        randomNumbers.appendChild(guess)
    }
}

createGuess(5)


// 
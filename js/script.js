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
const randomNumbers = document.getElementById("numbers-list");
const message = document.getElementById("message");
// Countdown 

let seconds = 10;
const timer = setInterval(function () {
    if (seconds > 1) {
        countdown.innerHTML = seconds--;
    } else {
        countdown.innerHTML = "Inserisci i numeri di Simon"
        instructions.innerHTML = "";
        randomNumbers.innerHTML = "";
        sendAnswer.classList.toggle("d-none")
        clearInterval(timer);
    }
}, 1000);



// Controllo della corrispondenza dei numeri randomici con i numeri dell'utente;
// Stampa risultato: quanti numeri indovinati(quali numeri indovinati);

// Array vuoti per i numeri generati, le risposte dell'utente e i numeri indovinati;

const sendAnswer = document.getElementById("answers-form");
const inputs = document.querySelectorAll("input");

sendAnswer.addEventListener("submit", function (event) {
    event.preventDefault();
    let userNumbers = [];
    let numbersGuessed = [];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        let input = inputs[i].value;
        userNumbers.push(parseInt(input));
        console.log(userNumbers)
    } for (let i = 0; i < answer.length; i++) {
    if (userNumbers.includes(answer[i])) {
        counter++;
        numbersGuessed.push(answer[i]);
    }
    message.innerHTML = (`Hai indovinato ${counter} numeri(${numbersGuessed.join(", ")})`);
    }
})


/* FUNZIONI */

// Funzione per creare i <li> che conterranno i numeri casuali


function createGuess(index) {
    let numbersToGuess = [];
    for (let i = 0; i < index; i++) {
        const liEl = document.createElement("li");
        //
        const rand = randNumGen(1, 50)
        liEl.innerHTML = rand;
        //
        randomNumbers.appendChild(liEl);
        //
        
        if(!numbersToGuess.includes(rand[i])) {
            numbersToGuess.push(rand);
            console.log(numbersToGuess);
        }
    }
    return numbersToGuess;
}

let answer = createGuess(5)


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

// Elementi HTML per interaginre da JS con la pagina da browser;

const sendAnswer = document.getElementById("answers-form");
const inputs = document.querySelectorAll("input");

let answer = createGuess(5); // array di numeri random senza ripetizioni creato dalla funzione

sendAnswer.addEventListener("submit", function (event) {
    event.preventDefault();
    let userNumbers = [];
    let numbersGuessed = [];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        let input = inputs[i].value;
        userNumbers.push(parseInt(input));
        console.log(userNumbers)
    } for (let k = 0; k < answer.length; k++) {
        if (userNumbers.includes(answer[k])) {
            counter++;
            numbersGuessed.push(answer[k]);
        }
        message.innerHTML = (`Hai indovinato ${counter} numeri(${numbersGuessed.join(", ")})`);
    }
})


/* FUNZIONI */

// Funzione per creare i <li> che conterranno i numeri casuali


function createGuess(index) {
    let numbersToGuess = [];
    //
    while (numbersToGuess.length < index) { // iteration N volte
        const rand = randNumGen(1, 50)
        if (!numbersToGuess.includes(rand)) {
            numbersToGuess.push(rand);
            //
            const liEl = document.createElement("li");
            liEl.innerHTML = rand;
            //
            randomNumbers.appendChild(liEl);
        }
    }
    return numbersToGuess;
}

// // iterazione stabilita
// for (let i = 0; i < index; i++) {

//     if(!numbersToGuess.includes(rand)) {
//         numbersToGuess.push(rand);
//         console.log(numbersToGuess);
//     }
// }
// 


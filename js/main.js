"use strict";

// Generar número aleatorio

const max = 100;
debugger;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Prevent button

const tryButton = document.querySelector(".form__button");

function stopForm(ev) {
  ev.preventDefault();
}

tryButton.addEventListener("click", stopForm);

// Comparar randomNumber y userNumber cuando se pincha el botón de prueba

const userNumberElement = document.querySelector(".js-form__input");

const clue = document.querySelector(".js-clue");

const randomNumber = getRandomNumber(max);

function handleGame(ev) {
  const userNumberValue = parseInt(userNumberElement.value);
  userNumberValue;
  if (randomNumber === parseInt(userNumberValue)) {
    clue.innerHTML = "Has ganado campeona!!!";
  } else if (parseInt(userNumberValue) < 1 || parseInt(userNumberValue) > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (randomNumber < parseInt(userNumberValue)) {
    clue.innerHTML = "Demasiado alto";
  } else if (randomNumber > parseInt(userNumberValue)) {
    clue.innerHTML = "Demasiado bajo";
  }
}

tryButton.addEventListener("click", handleGame);
console.log(randomNumber);

// Bucle para intentos

const rounds = document.querySelector(".js-rounds");

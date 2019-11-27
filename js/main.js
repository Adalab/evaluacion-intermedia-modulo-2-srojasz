"use strict";

const max = 100;
const tryButton = document.querySelector(".form__button");
const userNumberElement = document.querySelector(".js-form__input");
const clue = document.querySelector(".js-clue");
const randomNumber = getRandomNumber(max);
const counter = document.querySelector(".js-rounds");
let rounds = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function logicGame(ev) {
  const userNumberValue = parseInt(userNumberElement.value);
  userNumberValue;
  if (randomNumber === parseInt(userNumberValue)) {
    clue.innerHTML = "Has ganado campeona!!!";
  } else if (parseInt(userNumberValue) < 1 || parseInt(userNumberValue) > 100) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (randomNumber < parseInt(userNumberValue)) {
    clue.innerHTML = "Demasiado alto";
  } else {
    clue.innerHTML = "Demasiado bajo";
  }
}

const count = function() {
  rounds = rounds + 1;
  counter.innerHTML = `Número de intentos:${rounds}`;
};

function handleForm(ev) {
  ev.preventDefault();
  logicGame();
  count();
}

tryButton.addEventListener("click", handleForm);
console.log(randomNumber);

// Bucle para intentos

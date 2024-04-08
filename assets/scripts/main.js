'use strict';

let inputDay = document.getElementById('date__inputs-day');
let inputMonth = document.getElementById('date__inputs-month');
let inputYear = document.getElementById('date__inputs-year');

let outputDay = document.getElementById('date__outputs-day');
let outputMonth = document.getElementById('date__outputs-month');
let outputYear = document.getElementById('date__outputs-year');

let btn = document.getElementById('date__arrow-button');

let errorTextDay = document.getElementById('inputs-day--errorText');
let errorTextMonth = document.getElementById('inputs-month--errorText');
let errorTextYear = document.getElementById('inputs-year--errorText');

let inputsTitles = document.querySelectorAll('.date__inputs-titles');

const date = new Date();

// inputDay.value = inputMonth.value = inputYear.value = '';

btn.addEventListener('click', function () {
  outputYear.textContent = date.getFullYear() - inputYear.value;
  outputMonth.textContent = date.getMonth() + 1 - inputMonth.value;
  outputDay.textContent = date.getDate() - inputDay.value;

  if (outputMonth.textContent <= 0) {
    outputYear.textContent = outputYear.textContent - 1;
    outputMonth.textContent = 12 + Number(outputMonth.textContent);
  }

  if (outputDay.textContent <= 0) {
    outputMonth.textContent = outputMonth.textContent - 1;
    outputDay.textContent = 31 + Number(outputDay.textContent);
  }
});

let error = false;
if (error === true) {
  inputDay.classList.add('errorBorderRed');
  inputMonth.classList.add('errorBorderRed');
  inputYear.classList.add('errorBorderRed');
  inputsTitles.forEach((el) => el.classList.add('errorTextRed'));
} else {
  inputDay.classList.remove('errorBorderRed');
  inputMonth.classList.remove('errorBorderRed');
  inputYear.classList.remove('errorBorderRed');
  inputsTitles.forEach((el) => el.classList.remove('errorTextRed'));
}

inputDay.addEventListener('input', function () {});

inputMonth.addEventListener('input', function () {});

inputYear.addEventListener('input', function () {});
// TODO
// juste des nombres et positifs
// mois entre 1 et 12
// jours entre 1 et 31 et fevrier 28 sauf annees bisextiles 29
// jours par rapport aux nombres de jours par mois

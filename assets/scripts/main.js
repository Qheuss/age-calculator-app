'use strict';

let inputDay = document.getElementById('date__inputs-day');
let inputMonth = document.getElementById('date__inputs-month');
let inputYear = document.getElementById('date__inputs-year');

let outputDay = document.getElementById('date__outputs-day');
let outputMonth = document.getElementById('date__outputs-month');
let outputYear = document.getElementById('date__outputs-year');

let btn = document.getElementById('date__arrow-button');

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

// TODO
// juste des nombres et positifs
// mois entre 1 et 12
// jours entre 1 et 31 et fevrier 28 sauf annees bisextiles 29
// jours par rapport aux nombres de jours par mois

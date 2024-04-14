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

let date = new Date();

let error = false;

// reset values when refresh
inputDay.value = inputMonth.value = inputYear.value = '';

// calculator
btn.addEventListener('click', function () {
  // outputs values
  outputYear.textContent = date.getFullYear() - inputYear.value;
  outputMonth.textContent = date.getMonth() + 1 - inputMonth.value;
  outputDay.textContent = date.getDate() - inputDay.value;

  // color reset for the outputs
  outputDay.style.color = '#854dff';
  outputMonth.style.color = '#854dff';
  outputYear.style.color = '#854dff';

  // if outputs are negative
  if (outputDay.textContent <= 0) {
    outputMonth.textContent = outputMonth.textContent - 1;
    outputDay.textContent = 31 + Number(outputDay.textContent);
    if (outputDay.textContent <= 0) {
      outputDay.style.color = '#ff5757';
      outputDay.textContent = 'ERR';
    }
  }

  if (outputMonth.textContent <= 0) {
    outputYear.textContent = outputYear.textContent - 1;
    outputMonth.textContent = 12 + Number(outputMonth.textContent);
    if (outputMonth.textContent <= 0) {
      outputMonth.style.color = '#ff5757';
      outputMonth.textContent = 'ERR';
    }
  }

  if (outputYear.textContent < 0) {
    outputYear.style.color = '#ff5757';
    outputYear.textContent = 'ERR';
  }
});

// inputs event listeners
inputDay.addEventListener('input', function () {
  checkErrors(inputDay, errorTextDay, dayPerMonth(inputMonth));
  errorInput();
});
inputMonth.addEventListener('input', function () {
  checkErrors(inputMonth, errorTextMonth, 12);
  errorInput();
});
inputYear.addEventListener('input', function () {
  checkErrors(inputYear, errorTextYear, date.getFullYear());
  errorInput();
});

// check values for errors
function checkErrors(input, errorText, numberOf) {
  // check type of value
  if (
    isNaN(input.value) ||
    (Number(input.value) <= 0 && !(input.value.length === 0)) ||
    Number(input.value) > numberOf
  ) {
    error = true;
    if (input === inputDay) {
      errorText.textContent = 'Must be a valid day';
    } else if (input === inputMonth) {
      errorText.textContent = 'Must be a valid month';
    } else {
      if (Number(inputYear.value) > numberOf) {
        errorText.textContent = 'Must be in the past';
      } else {
        errorText.textContent = 'Must be a valid year';
      }
    }
  }

  // check if empty
  else if (input.value.length === 0) {
    error = true;
    errorText.textContent = 'This field is required';
  } else {
    error = false;
    errorText.textContent = '';
  }
}

// number of days per month
function dayPerMonth(month) {
  switch (month.value) {
    case ('1', '3', '5', '7', '8', '10', '12'):
      return 31;
    case ('4', '6', '9', '11'):
      return 30;
    case '2':
      // check if leap year
      if (
        (Number(inputYear.value) % 4 === 0 &&
          Number(inputYear.value) % 100 > 0) ||
        Number(inputYear.value) % 400 === 0
      ) {
        return 29;
      } else {
        return 28;
      }

    default:
      return 31;
  }
}

// error red borders
function errorInput() {
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
}

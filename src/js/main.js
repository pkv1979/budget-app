let btnStart = document.getElementById('start');

let budget = document.getElementsByClassName('budget-value')[0];
let daybudget = document.getElementsByClassName('daybudget-value')[0];
let level = document.getElementsByClassName('level-value')[0];
let expenses = document.getElementsByClassName('expenses-value')[0];
let optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0];
let income = document.getElementsByClassName('income-value')[0];
let monthSavings = document.getElementsByClassName('monthsavings-value')[0];
let yearSavings = document.getElementsByClassName('yearsavings-value')[0];

let expensesItems = document.getElementsByClassName('expenses-item');

let btnExpenses = document.getElementsByTagName('button')[0];
let btnOptionalExpenses = document.getElementsByTagName('button')[1];
let btnCountBudget = document.getElementsByTagName('button')[2];

let optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');
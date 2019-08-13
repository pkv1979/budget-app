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

let money;
let time;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

btnExpenses.disabled = true;
btnOptionalExpenses.disabled = true;
btnCountBudget.disabled = true;

btnStart.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }

  appData.budget = money;
  appData.timeData = time;
  budget.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();

  btnExpenses.disabled = false;
btnOptionalExpenses.disabled = false;
btnCountBudget.disabled = false;
});

btnExpenses.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItems.length; i++) {
    let expansesName = expensesItems[i].value;
    let expansesPrice = +expensesItems[++i].value;
    
    appData.expenses[expansesName] = expansesPrice;
    sum += expansesPrice;
  }
  expenses.textContent = sum;
});

btnOptionalExpenses.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let optExpenses = optionalExpensesItems[i].value;
    appData.optionalExpenses[i] = optExpenses;
    optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCountBudget.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = +((appData.budget - +expenses.textContent) / 30).toFixed(2);
    daybudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 100) {
      level.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 || appData.moneyPerDay <= 2000) {
      level.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      level.textContent = 'Высокий уровень достатка';
    } else {
      level.textContent = 'Произошла ошибка';
    }
  } else {
    daybudget.textContent = 'Произошла ошибка';
  }
});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  income.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
    appData.yearIncome = (sum / 100 * percent).toFixed(2);

    monthSavings.textContent = appData.monthIncome;
    yearSavings.textContent = appData.yearIncome;
  }
});

choosePercent.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12 * percent).toFixed(2);
    appData.yearIncome = (sum / 100 * percent).toFixed(2);

    monthSavings.textContent = appData.monthIncome;
    yearSavings.textContent = appData.yearIncome;
  }
});
"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
};

function doWhile(text) {
    let item;
        do {
            item = prompt(text);  
        } while (isNumber(item));   

        return item;         
}

const getAllServicePrices = function () {
    let sum;
    
    function quastionPrice() {
        do {
            sum = prompt("Сколько это будет стоить?");  
        } while (!isNumber(sum));         
    };
    
    function quastionService1() {  
        doWhile("Какой дополнительный тип услуги нужен?")     
    };
    function quastionService2() {
        doWhile("Какой дополнительный тип услуги нужен?")       
    };

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            quastionService1();
            quastionPrice();
        } else if (i === 1) {
            quastionService2();
            quastionPrice();
        }
    }
    return sum;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function () {
    return Number(screenPrice) + Number(allServicePrices);
}

const getServicePercentPrices = function () {  
    return Number(fullPrice) - (Number(rollback) / 100);
}

function getTitle() {    
    if (title.charAt(0) == ' ') {
        return title.charAt(1).toUpperCase() + title.slice(2);
    } else {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
}

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price <= 30000 && price >= 15000) {
    return "Даем скидку в 5%";
  } else if (15000 > price && price >= 0) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title); 
showTypeOf(adaptive); 
showTypeOf(screenPrice); 

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice)); //сообщение о скидке пользователю
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length); //типы экранов для разработки
console.log(servicePercentPrice); // стоимость за вычетом процента отката посреднику

console.log("Стоимость верстки экранов " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей");





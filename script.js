"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = prompt("Сколько будет стоить данная работа?");
let adaptive = prompt("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

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

let getAllServicePrices = function () {
  return Number(screenPrice) + Number(servicePrice1);
};
allServicePrices = getAllServicePrices();

function getFullPrice() {
    return Number(screenPrice) + Number(allServicePrices);
}
fullPrice = getFullPrice();

function getTitle() {    
    if (title.charAt(0) == ' ') {
        return title.charAt(1).toUpperCase() + title.slice(2);
    } else {
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
}

function getServicePercentPrices() {    
    return Number(fullPrice) - Number(rollback);
}
servicePercentPrice = getServicePercentPrices();


console.log(allServicePrices); // сумма всех дополнительных услуг
console.log(servicePercentPrice); // стоимость за вычетом процента отката посреднику

showTypeOf(title); 
showTypeOf(screens); 
showTypeOf(screenPrice); 

console.log(getRollbackMessage(fullPrice)); //сообщение о скидке пользователю
console.log(screens); //типы экранов для разработки
"use strict";
let title = prompt("Как называется ваш проект?");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

let screenPrice = prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

let adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(!!adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1 + " " + "руб.");



let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2 + " " + "руб.");

let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(fullPrice + " " + "руб.");

let servicePercentPrice = Math.ceil(fullPrice - 15);


if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice < 30000 && fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
} else if (15000 > fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}
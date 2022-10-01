let title = "projectGLO";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 14;
let rollback = 88;
let fullPrice = 100500000;
let adaptive = true;

console.log(title); //название проекта
console.log(fullPrice); // з/п
console.log(adaptive); //булевое значение

console.log(screens.length); //длина строки

console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей' + ';' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей.'); //стоимость в рублях

console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей' + ';' + ' ' + 'Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей.'); //стоимость в рублях

console.log(screens.toLowerCase()); //нижний регистр
console.log(screens.split(',')); //перевод в массив

console.log(fullPrice * (rollback/100)); //процент отката

console.log('не работает гит');
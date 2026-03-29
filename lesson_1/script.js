/* 
1. Вывести в терминал строку “Hello World!”
2. Создать переменную для каждого типа данных
3. Вывести в консоль редактора кода созданные переменные
4. Вывести ее тип через оператор typeof и функцию typeof
5. Попробовать изменить переменную объявленную через const
6. Попробовать изменить переменную с типом object объявленную через const
7. Попробовать изменить переменную с типом object объявленную через let
8. Попробовать изменить переменную с типом object объявленную через var
9. Установить редактор кода VS Code
10. Ознакомиться с системой контроля версий GitHub (завести аккаунт) 
*/

// 1. Вывести в терминал строку “Hello World!”
console.log('Hello World!') // ??? Я ведь правильно понял, что тут пока не требуется ничего, кроме простого вывода Hello World в консоль редактора?

// 2. Создать переменную для каждого типа данных
// 1) Number
let myAge = 35; //делаю переменную, значение которой может в будущем изменяться
console.log(myAge);
console.log(typeof myAge); // возвращаю тип аргумента через оператор typeof

const myBirthday = '20.11.1990'; //делаю const, неизменную дату рождения
// myBirthday = '22.03.2000'; // попробовал изменить переменную, объявленную через const и у меня выдало ожидаемыую ошибку "Uncaught TypeError: Assignment to constant variable."
console.log(myBirthday);
console.log(typeof '20.11.1990'); // возвращаю тип аргумента через прямой ввод значения переменной (??? Это подарзумевалось под "вывести через функцию typeof"?)

let timeBeforeVacantToilet = Infinity; //делаю Infinity
console.log(timeBeforeVacantToilet); // А могу и просто значение переменной указать без указания ее имени

let menQuantityNeeded = "3 землекопа"/2; //делаю NaN - полтора землекопа :-)
console.log(menQuantityNeeded);

// 2) BigInt
const mySalary = 99999999999999999999999999999999n; //пишу с помощью суффикса 'n'
console.log(mySalary);

const hoursToLearnFrontend = BigInt(9999999999999999999999999999999999999); //вызываю конструктор Bigint
console.log(hoursToLearnFrontend);
/* Вопросы по BigInt:
1) В консоли этот тип данных всегда отображается в виде конкретного числа или она должна выдавать BigInt? А то не пойму, всё ли у меня ок, если в консоли именно числа...
2) В моих примерах (моя Зарплата и время Для Изучения Фронтенда) можно использовать let? Пока не совсем понимаю, чем должен быть обусловлен выбор const или let в некоторых конкретных случаях, хотя в целом общий подход к их использованию вопросов не вызывает.
*/

// 3) String
let userName = 'Михаил';
console.log(userName);

let userGreeting = `Привет, ${userName}!`; // пробую обратные кавычки и вставляю выражение
alert(userGreeting);

// 4) Boolean
let isMale = true;
let isFemale = false;
console.log(isMale);
console.log(isFemale);

// 5) Null
let ownDogs = null;
console.log(ownDogs);

// 6) Undefined
let ownCats;
console.log(ownCats);

// 7) Symbol
const symbolExample = Symbol('name'); // пока не смог ничего придумать своего, тупо взял под копирку с занятия, т.к. сама концепция символа мне пока не очень понятна
console.log(symbolExample);

// 8) Object 
let lesson = {
    name: 'JavaScript занятие №1',
    date: '17.03.2026',
    students: 5
}

lesson = {
    name: 'CSS FlexBox',
    date: '04.03.2026',
    students: 3
}
// поменял значение переменной, получилось
console.log(lesson);

const game = {
    name: 'Финал Чемпионата Мира',
    date: '01.07.2026',
    place: 'Мексика'
}
console.log(game);

/* game = {
    name: 'Финал Кубка Стэнли',
    date: '15.07.2023',
    place: 'Лас-Вегас'
} */    
// попробовал изменить переменную const, выдает ошибку

var user = {
    name: 'Михаил',
    surname: 'Долгов',
    age: 35,
    country: 'Russia'
}

user = {
    name: 'Зинедин',
    surname: 'Зидан',
    age: 56,
    country: 'Франция'
}
console.log(user);
// изменил переменную, получилось.

console.log ('test');
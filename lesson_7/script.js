// 1. Что выведет функция?
// function f() {
//     alert(this);
// }
// let user = {
//     g: f.bind(null),
// };
// user.g(); // сначала я ответил, что браузер выведет null, но когда проверил, понял, что ошибся, видимо держал в уме strict mode...Немного сложноватый концепт пока что

//2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f(); // нет не сможем, т.к. первый bind - это "замок", который нельзя открыть вторым bind. Новый bind - новая функция, а не измененная старая


//3. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
//     alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "Вася"
// });

// alert( bound.test ); // значение функции не изменится, поскольку bind его не копирует, а создает новую функцию, у которой нет свойства test. Таким образом команда alert( bound.test ) выведет undefined


// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//         else fail();
// }
// let user = {
//     name: 'Вася',
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };

// askPassword(user.loginOk, user.loginFail);
/* некорректная запись аргументов приводит к потере this:
например, аргумент user.loginOk уходит в параметр ok, параметр ok - это ссылка на функцию loginOk, которая без контекста не знает, что принадлежит объекту user, это исправляется засчет привязки контекста при помощи bind(user). Корректный вызов - askPassword(user.loginOk.bind(user), user.loginFail.bind(user));   */


// // 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false). Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//         else fail();
// }
// let user = {
//     name: 'John',
//     login(result) {
//         alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
// /* Попробую своим корявым языком объяснить...
// Сначала смотрю на параметры askPassword, вижу, что появился аргумент result (true/false), значит аргументы должны быть указаны при вызове askPassword(), то есть мы вызываем ранее объявленную функцию askPassword, которой аргументами "аргумент для параметра 'ok'" и "аргумент для параметра 'fail')" передаем два параметра "ok/fail", которые в свою очередь являются ссылками на метод объекта  */


//6. Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value. из переменной elem.
// const elem = {value: 'Привет'}
// function func(surname, name) {
//     alert(this.value + ', ' + surname + ' ' + name);
// }

// //Тут напишите конструкцию с bind()

// let boundFunc = func.bind(elem); //это мое решение. Чтобы браузер показал корректные результаты, надо вместо func ниже в вызовах использовать boundFunc, иначе будет "undefined, Иванов Иван и тд"

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 7. Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// function curry (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(curry(1)(2)(3));


//8. Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

function createTimer(start, end) {
    let count = start;

    const step = setInterval(() => {
        console.log(count);
        count--;
        if(count <= end) {
            console.log(count + ' сек. - таймер завершен');
            clearInterval(step);
        }
    }, 1000); // VSCode сам предложил мне стрелочную функцию для setInterval и указал Interval там, где я его должен прописать, круто! В общем я тупо в готовый шаблон формулы загнал условие завершения и всё
    return step;
}

createTimer(100,90);


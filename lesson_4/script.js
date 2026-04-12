// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл for.


// 1. Выведите столбец чисел от 1 до 100.
// делаю через while

// let i=1;
// while (i <= 100) {
// console.log(i);
// i++;
// }

// делаю через for

// for (let i = 1; i <= 100; i++ ) {
//     console.log (i);
// }


// 2. Выведите столбец чисел от 11 до 33.
// делаю через while

// let i=11;
// while (i >= 11 && i <= 33) {
//     console.log(i);
//     i++;
// }

//  делаю через for

// for (let i = 11; i >= 11 && i <= 33; i++) {
//     console.log(i)
// }

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.
// делаю через while
// способ 1 
// let i=0;
// while (i <=100) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// способ 2
// let i=0;
// while (i <= 100) {
//     console.log(i);
//     i +=2;
// }


//  делаю через for
// способ 1
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// способ 2
// for (let i = 0; i <= 100; i +=2) {
//         console.log(i);
// }



// С помощью цикла найдите сумму чисел от 1 до 100.
// делаю через while 
// let i=1;
// let sum=0;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log(sum) //5050


// делаю через for
// let sum=0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Задачи общие.
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n=1000;
// let num=0;

// while (n >= 50) {
//     n = n / 2;
//     num++;
// }

// console.log(n); // 31.25
// console.log(num); //5



// ДЗ ПО ФУНКЦИЯМ

// 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// 1 способ - expression
// const calcSquare = function (a) {
//     console.log(a ** 2);
// }
// calcSquare(8);//64

// 2 способ - arrow
// const calcSquare = (a) => {
//     console.log(a ** 2);
// }
// calcSquare(8);//64

// 3 способ - declaration
// function calcSquare (a) {
//     console.log(a ** 2);
// }
// calcSquare(8);//64




// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// 1 способ - expression
// const calcSum = function (a,b) {
//     console.log(a + b);
// }
// calcSum (5,3); //8

// 2 способ - arrow
// const calcSum = (a,b) => {
//     console.log(a + b);
// }
// calcSum(5,3); //8

// 3 способ - declaration
// function calcSum (a,b) {
//     console.log(a + b);
// }
// calcSum(5,3);//8




// 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// со способами объявления функций потренировался, дальше буду делать каким-то одним наиболее удобным

// const divideDifference = function (num1,num2,num3) {
//     console.log((num1 - num2) / num3);
// }

// divideDifference(10,4,3);//2


// 4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const getDayName = function (dayNumber) {
//     if (dayNumber < 1 || dayNumber > 7) { //добавил проверку
//     return 'Некорректный номер дня недели';
    
// }
//     if (dayNumber === 1) {
//         return 'Понедельник';
//     } else if (dayNumber === 2) {
//         return 'Вторник';
//     } else if (dayNumber === 3) {
//         return 'Среда';
//     } else if (dayNumber === 4) {
//         return 'Четверг';
//     } else if (dayNumber === 5) {
//         return 'Пятница';
//     } else if (dayNumber === 6) {
//         return 'Суббота';
//     } else if (dayNumber === 7) {
//         return 'Воскресенье';
//     } 
// }

// console.log(getDayName(2))//вторник
// console.log(getDayName(10))//проверка провалена - "Некорректный номер дня недели"



// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// const checkEqual = function (a,b) {
//     if (a === b) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkEqual(2,3));//false


// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

// const isSumGreaterThan10 = function (a,b) {
//     if (a + b > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isSumGreaterThan10(5,5));//false

//7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// const isNegative = function (a) {
//     if (a < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isNegative(-5));//true

//8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = function (a) {
//     if (a > 0 && a < 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isNumberInRange(4));

//9. *Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.


// const getDigitsSum = function (integerValue) {
//     let sum = 0;
//     let a = integerValue;

//     while (a > 0) {
//         let digit=a % 10; // получаю последнюю цифру, здесь: 2
//         sum = sum + digit; // прибавляю получившуюся цифру к общей сумме, здесь: 0 + 2 = 2
//         a = Math.floor(a / 10); //беру только целую часть результата выражения, здесь: а = 18. Далее цикл повторяется для а=18, снова получаем последнюю цифру 8, прибавляем ее к сумме 2+8=10 и тд. до тех пор, пока а > 0
//     }
    
//     return sum;
// }

// console.log(getDigitsSum(182)); //11

/* Это жесть какая-то, я два часа не мог осилить эту задачу, в итоге уже полез в нейронки и стал выяснять аккуратно, откуда заходить и только тогда увидел способы, как в условном целом числе 182 получить цифры 1, 8 и 2. 
Более того, я не смог самостятельно догадаться из формулировки задачи, что здесь нужны циклы. В итоге уже просто сдался стал разбираться с готовым решением. Логику понял и даже сам себе всё закомментировал, повторил, но всё равно не понимаю, как можно к этому прийти сейчас самостоятельно */ 



// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// беру вспомогательную функцию из пред. задачи:
// const getDigitsSum = function (integerValue) {
//     let sum = 0;              
//     let a = integerValue;

//     while (a > 0) {
//         let digit = a % 10;
//         sum += digit;
//         a = Math.floor(a / 10);
//     }

//     return sum;               
// }

// // перебираю годы
// for (let year = 1; year <= 2020; year++) {
//     if (getDigitsSum(year) === 13) {
//         console.log(year); // куча годов в консоли
//     }
// }




//11. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = function (integerValue) {
//     if (integerValue % 2 ===0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(17)); // false

//12. *Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Можно использовать функцию getDigitsSum из 9 задачи

// let num = 91;

// const getDigitsSum = function (integerValue) {
//     let sum = 0;              
//     let a = integerValue;

//     while (a > 0) {
//         let digit = a % 10;
//         sum += digit;
//         a = Math.floor(a / 10);
//     }

//     return sum;               
// }

// while (num > 9) { 
//     num = getDigitsSum(num);
// }

// console.log (num); //10


// 13. * Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.

// const isPalindrome = (string) => {
//     const reversedString = string.split("").reverse().join(""); // ААААААААА КАЙФ!!!!!!!
//     return string === reversedString;
// }

// console.log(isPalindrome('довод')); //true




// задача *из презентации - это же та же самая задача, что я только что решил (строки - палиндромы)

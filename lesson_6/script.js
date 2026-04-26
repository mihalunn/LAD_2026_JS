// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// const arr = ['Привет','я', 'изучаю', 'JavaScript'];

// const newArr = arr.map ((el) => {
//     return el.length;
// })

// console.log(newArr); // 6, 1, 6, 10


// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

                // const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

                // const currentSums = (numbers) => {
                //     const newNumbers = numbers.reduce((acc,cur) => {
                //         return newAcc = acc[-1] + cur;
                //     },[0]);
                // }

                // console.log(currentSums(numbers)); //нет у меня не получается

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];

// const currentSums = (numbers) => {
//     return numbers.reduce((acc,cur) => {
//         const lastSum = acc.length === 0 ? 0 : acc[acc.length -1];
//         const newSum = lastSum + cur;
//         return [...acc, newSum];
//     }, []);
// };

// console.log(currentSums(numbers));


//3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0,1,2,3,4,5,6,7];

// const arrOfPairs = [];
// for (let i=0; i < arr.length; i++) {
//     for (let j=i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === 7) {
//             arrOfPairs.push([arr[i],arr[j]]);
//         }
//     }
// }

// console.log(arrOfPairs); // [0,7], [1,6], [2,5], [3,4] 


// 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
// const str = 'Сегодня я снова делаю домашку до глубокой ночи';

// const arrOfFirstLetters = str.split(' ').map(word => word[0]);

// console.log(arrOfFirstLetters);


//5. Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.


        // Вариант 1 (его рожал долго, но в конце уже злился из-за undefined, никак не мог его убрать из результата, пришлось еще фильт добавлять в конце)
        // const str = 'Сегодня я снова делаю домашку до глубокой ночи';

        // const arr = str.split('').map((char, i) => {
        //     //делаю проверку, чтобы i не был с края
        //     if (i === 0 || i === str.length - 1) {
        //         return undefined;
        //     } else {
        //         return str[i-1] + str[i] + str[i+1];
        //     }
        // }).filter (item => item !== undefined);

        // console.log(arr); 

// Вариант 2 (гораздо лучше!)
// const str = 'Сегодня я снова делаю домашку до глубокой ночи';
// const arr = [];

// for (let i = 1; i < str.length - 1; i++) {
//     arr.push(str[i-1] + str[i] + str[i+1]);
// }

// console.log(arr);

// 6. Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const unorderedArray = [7,1,4,9,2,5];

// unorderedArray.sort((a,b) => b - a);

// console.log(unorderedArray);



// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

//ВАРИАНТ 1 (выводит в консоль массив)
// const arr1 = [5,2,7];
// const arr2 = [9,1,4,6];
// const arr3 = [6,8,3];

// const arrCombined = arr1.concat(arr2, arr3);
// const arrOrderedByDescent = arrCombined.sort((a,b) => b - a);

// function arrDividedBySpace(arrOrderedByDescent) {
//     return arrOrderedByDescent.join(' ');
// }

// console.log(arrOrderedByDescent); // [9, 8, 7, 6, 6, 5, 4, 3, 2, 1]

//ВАРИАНТ 2 (выводит в консоль строку)
// const arr1 = [5,2,7];
// const arr2 = [9,1,4,6];
// const arr3 = [6,8,3];

// const arrCombined = arr1.concat(arr2, arr3);
// const arrOrderedByDescent = arrCombined.sort((a,b) => b - a);

// console.log(arrOrderedByDescent.join(' ')); // 9 8 7 6 6 5 4 3 2 1



//8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const matrix = [[1, 2, 3], [4, 5], [6]];

// const newArr = matrix[0].concat(matrix[1], matrix[2]); /* можно было и через flat() расплющить массивы, но до этого я сам не додумался, сразу конкатом сделал и потом поискал другие возможные решения, где уже вычитал, что можно было проще */
// const sumOfEl = newArr.reduce((acc, cur) => {
//     return acc + cur;
// },0);

// console.log(sumOfEl); //21



//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1,2,3,4,5,6,7,8,9];
// const reversedArr = [];
// //с конца пойду + условие, чтобы не выйти за начало массива
// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// } 

// console.log(reversedArr);



//10. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [1,2,3,4,5,6,7,8,9];
// let sum = 0;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     count++;
//     if (sum > 10) 
//         break;
// }

// console.log(count); //5



//11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value,num) => {
//     let result = [];
//     for (let i = 0; i < num; i++) {
//         result.push(value);
//     }
//     return result;
// }

// console.log(arrayFill('x',5)); // ['x', 'x', 'x', 'x', 'x']


// Из презентации:

// 1. Написать функцию которая будет принимать два массива, и будет сравнивать их, если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false. 

// ВАРИАНТ 1 (длинный)
// const compareArrays = (arr1,arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// console.log(compareArrays([2,3,4],[2,3,4])); //true

// ВАРИАНТ 2 (короткий)
// const compareArrays = (arr1,arr2) =>
//     arr1.length === arr2.length && arr1.every((elem,i) => elem === arr2[i]);

// console.log(compareArrays([2,3,4],[2,3,4])); //true



//2. Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

// const calcSumOfEvenElements = (...args) => {
//     let sum = 0;
//     for (let elem of args) {
//         if (elem % 2 === 0) {
//             sum += elem;
//         }
//     }
//     return sum;
// }

// console.log(calcSumOfEvenElements(1,2,3,4)); //6


//3. Написать функцию которая будет принимать два массива, и в качестве результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// ВАРИАНТ 1 (длинный)
// const showIdenticalElements = (arr1,arr2) => {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }       
//     }
//     return result;
// }

// console.log(showIdenticalElements([1,2,3,4,5,6,7,8],[2,6,8])); //[2, 6, 8]

// ВАРИАНТ 2 (короткий)
// const showIdenticalElements = (arr1, arr2) => 
//     arr1.filter(elem => arr2.some(item => item === elem));

// console.log(showIdenticalElements([1,2,3,4,5,6,7,8],[2,6,8])); //[2, 6, 8]

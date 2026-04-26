// 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
// const str = 'Test string';

// const stringToarray = function(str) {
//     return str.split(' ');
// }

// console.log(stringToarray(str)); // [ "Test", "string"]


// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// const str = 'Тестовая строка';

// const deleteСharacters = function(str, length) {
//     return str.slice(0, length);
// }

// console.log(deleteСharacters(str,6));


// 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.


// const insertDash = function(str) {
//     return str.toUpperCase().split(' ').join('-'); //разбиваю на слова, склеиваю с тире и потом привожу к верхнему регистру
// }
// console.log(insertDash('Тестовая строка третьего задания'));


// 4. Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// const setFirstCharToUpperCase = function(str) {
//     return str[0].toUpperCase();
// }

// console.log(setFirstCharToUpperCase('тестовая строка четвертого задания'));

// 5. Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// const capitalize = function (str) {
//     return str.split(' ').map(function(word) {
//         return word[0].toUpperCase() + word.slice(1);
//     }).join(' ');  
// }

// console.log(capitalize('Тестовая строка пятого задания'));


//6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// const changeRegister = function(str) {

//     const chars = str.split('');
//     const newChars = chars.map(function(char) {
//         if (char === char.toUpperCase()) {
//             return char.toLowerCase();
//         } else {
//             return char.toUpperCase();
//         }
//     });

//     return newChars.join('');
// }

// console.log(changeRegister('КаЖдЫй ОхОтНиК'));


//7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// const removeChar = function(str) {
//     const chars = str.split('');
//     const newChars = chars.filter(function(char) {
//         return char.match(/[^a-zA-Z0-9]/); //нашел такой лайфхак и применил к нему "не" правда сначала по ошибке пытался использовать /\w/
//     });

//     return newChars.join('');
// }

// console.log(removeChar('!1@2#4%4^7*7*9)090(*76'));

// 8. Напишите функцию zeros(num, length), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

// const zeros = function(num, length) {
//     const sign = num < 0 ? '-' : '+'; // создаю переменную для знака + или -
//     const absNum = Math.abs(num);
//     const numToString = absNum.toString();
//     const zerosToAdd = length - 1 - numToString.length; // -1 - вычитаю знак + или - для подсчета кол-ва нулей и потом вычитаю кол-во символов
//     const zeros = '0'.repeat(zerosToAdd);
//     const result = sign + zeros + numToString;

//     return result.slice(0,length);
// }

// console.log(zeros(-42,6)); //-00042

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const comparison = function(str1, str2) {
//     const newStr1 = str1.toUpperCase(); // просто привожу все строки к одному регистру и сравниваю
//     const newStr2 = str2.toUpperCase();

//     return newStr1 === newStr2;
// }

// console.log(comparison('Тестовая строка номер один','Вторая тестовая строка')); //false


// 10. Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// const insensitiveSearch = function(str1, str2) {
//     const newStr1 = str1.toUpperCase();
//     const newStr2 = str2.toUpperCase();

//     return newStr1.indexOf(newStr2) !==-1; // ну или >= 0  --- без разницы
// }

// console.log(insensitiveSearch('Когда я осилю функции JS, я неделю не буду открывать ноутбук','НЕ БУДУ ОТКРЫВАТЬ НОУТБУК')); //true


// 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// const initCap = function(str) {
//     const words = str.split(' ');

//     const camelWords = words.map(function(word,index) {
//         return word[0].toUpperCase() + word.slice(1).toLowerCase(); // объединяю первую заглавную букву слова с остатком слова без этой буквы (все буквы в нижнем регистре)
//     });

//     return camelWords.join('');
// }

// console.log(initCap('Привет! Как дела? Когда вёрстку начнешь?')); //Привет!КакДела?КогдаВёрсткуНачнешь?



//12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

const initSnake = function(str) {
    let result = ''; // пустая строка, где тут будет накапливаться результат в стиле snake_case  

    for (let i = 0; i < str.length; i++) {          //прохожусь по всем символам строки от i=0 и до конца
        if ((str[i]) === str[i].toUpperCase() && i > 0) {  // задаю условие, что текущий символ БОЛЬШОЙ буквой и он не первый в индексации
            result = result + '_'; // добавляю подчеркиваяние перед новой большой буквой (слово в CamelCase)
        }
        result = result + str[i].toLowerCase(); // добавляю текущий символ в нижнем регистре
    }
    return result;
}

console.log(initSnake('ПриветКакДелаЯJavaScript')); //привет_как_дела_я_java_script


//13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// const repeatStr = function(str,n) {
//     return str.repeat(n)
// }

// console.log(repeatStr('Скоро лето', 15));

//14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

/*         Вариант 1 (мой, долго не получалоьс и мне не нравится. Второй вариант сделал, когда вычитал про lastIndexOf()). Еще ипришлось экранировать слэши везде, даже в тестовой строке. Долго не мог понять, в чем проблема, про экранирование нашел гуглением.  */

// const path = function(pathname) {
//     let lastSlashPos = -1; 
    
//     for (let i = 0; i < pathname.length; i++) {
//         if (pathname[i] === '\\') {
//             lastSlashPos = i;
//         }
//     }
    
//     return pathname.slice(lastSlashPos + 1); 
// }

// console.log(path('C:\\Users\\User\\OneDrive\\Desktop\\Lad_frontend_2026\\js_lessons\\lesson_5\\index.js')) //index.js


        // Вариант 2 (использую lastIndexOf())
// const path = function(pathname) {
//     const lastSlashPos = pathname.lastIndexOf('\\');  
//     return pathname.slice(lastSlashPos + 1);          // ← Берёт после него
// }

// console.log(path('C:\\Users\\User\\OneDrive\\Desktop\\Lad_frontend_2026\\js_lessons\\lesson_5\\index.js')) //index.js


//15. Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// const endsWith = function (str, str1) {
//     return str.slice(-str1.length) === str1; //беру последние(-) str1.length символов (окончание str)    
// }

// console.log(endsWith('Привет всем, кто не сдался','не сдался')); //true

                //16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

                // const getSubstr = function(str, char, pos) {

                // }
                // пока не могу решить 16-18 (мозги не работают уже...)


// 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// const count = function(str, stringsearch) {
//     let stringsearchLength = '';
//     return stringsearchLength = stringsearch.length;
// }

// console.log(count('Завтра постараюсь заняться версткой','заняться')); //8

// 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// const strip = function(str) {
//     return str.trim().split(' ').filter(function(word) {
//         return word.length > 0;
//     }) 
//     .join(' ');
// }

// console.log(strip(' Тестовая     строка     двадцатого задания       '));

//21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

        //Вариант 1 (длинный)

// const cutString = function(str,n) {
//     const words = str.split(' ');
//     const wordsCount = words.length;
//     const wordsToCut = wordsCount - n;
//     const wordsToKeep = wordsCount - wordsToCut;

//     return words.slice(0,wordsToKeep).join(' ');
// }

// console.log(cutString('Привет, я тестовая строка двадцать первого задания!',3)); //Привет, я тестовая

        //Вариант 2 (короткий)

// const cutString = function(str,n) {
//     return str.split(' ').slice(0, n).join(' ');
// }

// console.log(cutString('Привет, я тестовая строка двадцать первого задания!',3));//Привет, я тестовая


// 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// const findWord = function(word,str) {
//     return str.includes(word);
// }

// console.log(findWord('достаточно','На сегодня, пожалуй, достаточно'))
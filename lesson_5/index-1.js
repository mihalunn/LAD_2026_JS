//1234
// const getDigitsSum = (digit) => {
//     let result = 0;
//     // const stringifyDigit = String(Math.abs(digit));

//     digit = digit < 0 ? -digit : digit; 
//     const stringifyDigit = String(digit);

//     for(let i = 0; i < stringifyDigit.length; i++) {
//         // if(i === 0 && stringifyDigit[0] === '-') continue;
//         result += +stringifyDigit[i];
//     }
//     return result;
// }

// console.log(getDigitsSum(123));

const key = 'age';

const user = {
    name: 'Sergey',
    'user-car': 'BMW',
    [key]: 40,
    sayName: function() {
        console.log(user.name);
    },
    sayAge() {
        console.log(user.age);
    },
    showCar: () => console.log(user['user-car'])
}




//1 добавление свойств
//user.age = 40;
// user['age'] = 40;
// user[key] = 40;
// console.log(user['user-car']);

//2 изменение свойств
// user.age = 41;
// console.log(user);

//3 Удаление свойств
// delete user["user-car"];
// delete user.age;
// Object.freeze(user);
// user.name = 'Sharik';
// console.log(user);

//Методы
// user.showCar();

// const myFavoriteFilm = {
//     showName: function() {
//         return "Venom"
//     },
//     release: 2018,
//     director: "Рубен Фляйшер",
//     country: "USA",
// }

// myFavoriteFilm.revenue = 856085151+"$";

// console.log(myFavoriteFilm.showName());

// delete myFavoriteFilm.release;

// console.log(myFavoriteFilm)

// let myFavouriteFilm = {
//     title: "Gladiator",
//     date: 2000,
//     director: "Ridley Scott",
//     country: "USA",
// }

// myFavouriteFilm['box-office'] = 10000000000000000;
// myFavouriteFilm.showTitle =  function() {
//     console.log(myFavouriteFilm.title);
// }
// delete myFavouriteFilm.date;

// console.log(myFavouriteFilm);
// myFavouriteFilm.showTitle();

// const str  = 'Hello Ivan';
// console.log(str.toUpperCase()); 

// const num = 1.2345;
// console.log(num.toFixed);

// console.log(4.1e9)
// console.log(parseInt('200px')); 
// console.log( parseFloat('12.5em') ); 

// const test = undefined;

// test.toString();
// String(test);

// console.log(Math.random())

// let num = 12.76;
// console.log( Math.ceil(num) ); 
// console.log( Math.floor(num) ); 
// console.log( Math.round(num) ); 
// console.log(+num.toFixed(1));

// console.log( Math.max(3, 5, -10, 0, 1) ); 


// const str = 'test string';
// str[0] = 'q';

// console.log(str);

// console.log(str.length) //11
// console.log(str[100]);

// console.log(str.slice(-2))


// const inputValue = '    Sergey  Lushkin   '
// console.log(inputValue.trim())
// console.log('t'.codePointAt())
// console.log('T'.codePointAt())

// console.log(str.indexOf('str'))

// console.log(str.includes('str'))

// const getRandomNumber = (min, max) => {
//     const range = max - min;
//     return Math.round(min + range * Math.random());
// }
// console.log(getRandomNumber(0, 1));

// const checkIsUpper = (str, n) => str[n] === str[n].toUpperCase();
// const str = "Test";
// console.log(checkIsUpper(str, 1));

let str="Вышел ежик из тумана"

const doReplacement = (str, )
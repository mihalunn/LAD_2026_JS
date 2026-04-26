// const fruits = ['apple', 'banana', 'pineapple'];


// fruits[1] = 'orange';

// fruits.weight = '50kg';


// console.log(Array.isArray([]));

// const arr = new Array();

//  console.log(fruits);

const usersList = [
    {
        id: 0,
        name: 'Sergey',
        age: 40
    },
        {
        id: 1,
        name: 'Ivan',
        age: 20
    },
    {
        id: 2,
        name: 'Sergey',
        age: 25
    },
]

// console.log(usersList[0].name);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// fruits.length = 1;

// console.log(String(fruits));


// const fruits = ['apple', 'banana', 'pineapple'];

//1.
// fruits.push('orange', 'cherry');

//2.
// fruits.unshift('orange', 'cherry');

//3.
//fruits.pop();

//4.
// fruits.shift();

// console.log(fruits);

// console.log(fruits.includes('apple'));

// const foundElement = fruits.find((el) => el === 'banana');

// const foundElement = usersList.find((el) => {
//     // console.log(Object.values(el))
//     if(Object.values(el).includes('Sergey')) {
//     }
//     // return el.age && el.id === 1 && el.name.includes('Sergey')
// })
//  console.log(foundElement);


// const filteredUsersList = usersList.filter((user, idx) => {
//     return user.name.includes('Iv');
// })

// console.log(filteredUsersList);

// const arr = [1, 2, 3, 4];

// const newArray = arr.map((el, idx) => {
//     if(idx % 2 === 0) return el * 10;
//     return el;
// })

// console.log(newArray);


// const arr = [1, 2, 3, 4];
// arr.forEach((e) => {
//     console.log(e);
// }); 

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((acc, cur) => {
//     return acc + cur
// })

// console.log(sum);

// const arr = [3,2,3,4,-2, 4]
// function sumNumbers(arr){
//     let sumNumber = 0;
//     arr.forEach(element => {
//         if (element % 2 === 0 && element > 0){
//             sumNumber += element;
//         }

//     });
//     return sumNumber;
// }

// console.log(sumNumbers(arr));

// const sumEvenNum = (arr) => {
//     return arr.reduce((acc,curr) => {
//     if (curr % 2 === 0 && curr > 0) {
//         return acc + curr;
//     }
//     return acc;
// }, 0)
// }

// console.log(sumEvenNum(arr));

// let result = arr.reduce((acc, cur) => {   
//     return acc + ((cur % 2 === 0 && cur > 0 ) ? cur : 0)
// }, 0)

// console.log(result)



// const arr = [3,2,3,4,-2, 4];
// const createUniqueArray = (arr) => {
//     const uniqueArray = [];
//     arr.forEach((el) => {
//         if(!uniqueArray.includes(el)) {
//             uniqueArray.push(el);
//         }
//     })
//     return uniqueArray;
// }

// console.log(createUniqueArray(arr));

// let firstObj = { a : 'Hello' };

//1 способ копирования
// let secondObj = Object.assign({}, firstObj);

// secondObj.a = 'test';

// console.log(firstObj , secondObj );

// const user = {
//     name: "Sergey",
//     age: 40,
// }

// //2 способ копирования
// // const admin = {...user};
// // admin.role = 'admin';

// // console.log(user, admin);

// //3 способ копирования (глубокое копирование)

// const admin = JSON.parse(JSON.stringify(user));
// admin.role = 'admin';
// console.log(user, admin);


// let example = (a, b, ...args) => {
//     console.log(args); // массив остаточных аргументов
//     return a + b;
// }
// console.log(example(1, 2, 3))

// const arr = [1, 2, 3];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(el => console.log(el))

// for(let elem of arr) {
//     console.log(elem);
// }

const user = {
    name: "Sergey",
    age: 40,
}

// for(let key in user) {
//     console.log(key); //ключи
//     console.log(user[key]); //значения
// }

console.log(Object.keys(user));
console.log(Object.values(user));
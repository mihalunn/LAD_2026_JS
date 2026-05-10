// function createTimer(start, end) {

//     console.log(start);
//     const step = setInterval(() => {
//         start--;
//         console.log(start);
//         if(start <= end) {
//             console.log(start + ' сек. - таймер завершен');
//             clearInterval(step);
//         }
//     }, 1000); // VSCode сам предложил мне стрелочную функцию для setInterval и указал Interval там, где я его должен прописать, круто! В общем я тупо в готовый шаблон формулы загнал условие завершения и всё
//     return step;
// }

// createTimer(10, 0)

// const animal = Object.freeze({
//     hasTail: true,
//     legs: 4,
//     sayName() {
//         console.log(this.name)
//     }
// })

// const dog = {
//     name: 'Sharik',
//     age: 4
// }

// const newDog = Object.create(animal, {
//     name: {
//         value: 'Rex'
//     },
//     age: {
//         value: 1
//     }
// })

// dog.__proto__ = animal;

// console.log(dog.__proto__)
// dog.__proto__.legs = 10
// console.log(animal)

// function CreateUser(name, age) {
//     this.name = name;
//     this.age  = age; 
    // this.sayHi = function() {
    //     console.log( "Меня зовут: " + this.name );
    // };

// }

// CreateUser.prototype.sayHi = function() {
//         console.log( "Меня зовут: " + this.name );
//     };

// const user1 = new CreateUser('Sergey', 40);
// const user2 = new CreateUser('Ivan', 20);
// console.log(user1, user2);
// user1.sayHi();

// console.log(CreateUser.prototype === user1.__proto__)

// function CreatePostcard (from,to) {
//     this.from = from,
//     this.to = to,
//     this.show = function() {
//         console.log(`С приветом из ${this.from} в ${this.to}`);
//     }
// }

// CreatePostcard.prototype.changeFrom = function (from) {
//   this.from = from;
// };



// const postcard = new CreatePostcard('NN', 'Minsk');

// postcard.changeFrom("Владивосток");
// console.log(postcard);


// console.log(postcard);
// postcard.show();


// class User {
//     // #name = ''
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//         // this.#name = name
//     }

//     #salary = 1000

//     sayName() {
//         console.log(`Меня зовут ${this.name}`)
//     }

//     get salary() {
//         return this.#salary
//     }

//     set salary(value) {
//         if(value < this.#salary) {
//             console.log('Не согласен с оффером!')
//         } else {
//             console.log('Согласен с оффером!')
//             this.#salary = value
//         }
//     }

//     static country = 'Russia'

// }

// class Admin extends User {
//     constructor(name, age, role) {
//         super(name, age)
//         this.role = role
//     }
// }

// const admin = new Admin('Igor', 18, 'super admin')

// console.log(admin)

// const user = new User('Sergey', 40);
// user.sayName()
// user.#name;
// console.log(user)
// user.showSalary();
// user.salary = 500

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const person = new Person("Дмитрий", "Фёдоров");
// console.log(person.getFullName());

// class People {

// 	constructor(name, surname){
// 	this.name = name;
// 	this.surname = surname;
// };

// getFullName(){
//     const fullName = this.name + this.surname;
//     console.log(fullName);
// };

// };

// const person = new People("Дмитрий", "Фёдоров");
// person.getFullName()

class People {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName = function () {
        console.log(`${this.name} ${this.surname}`)
    }
}
const person = new People("Дмитрий", "Фёдоров");
person.getFullName()
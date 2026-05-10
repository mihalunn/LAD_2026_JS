// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.
// class Worker {
//     constructor (name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.#rate = rate;
//         this.#days = days;
//         this.#validate(rate,days); //про эту проверку вычитал, когда запросил нейронку, как можно улучшить мой код (он работал четко, но не учитывал возможные ошибки типа указания отрицательной ставки или отработанных дней)
//     }

//     #rate; //сделал свойства приватными, чтобы доступ был только через методы - защита от внешних изменений
//     #days;

//     #validate (rate, days) {
//         if (rate < 0) {
//             console.log('Ошибка! Значение не может быть отрицательным.');
//         }
//         if (days < 0 ) {
//             days = 0;
//         }
//     }

//     getSalary() {
//         return this.#rate * this.#days;
//     }
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// const worker1 = new Worker ('Михаил','Долгов',7000,21);

// console.log(worker1.getFullName());
// console.log(worker1.getSalary());

//2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.
// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.#workers = workers;
//     }

//     #workers;

//     getSalary() {
//         return super.getSalary() * this.#workers;
//     }
// }

// const boss = new Boss ('Майкл','Скотт',10000,21,5);

// console.log(boss.getFullName());
// console.log(boss.getSalary());


// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения.
// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.#rate = rate;
//         this.#days = days;
//         this.#validate(rate,days); 
//     }

//     #rate; 
//     #days;
//     #validate(rate, days) {
//         if (rate < 0) {
//             console.log('Ошибка! Значение не может быть отрицательным.'); // потом узнал, что в этих случаях надо использовать throw new Error(''), тк вывод в консоль не блокирует rate и он остается отрицательным
//         }
//         if (days < 0 ) {
//             this.#days = 0;
//         }
//     }

//     get rate() {
//         return this.#rate;
//     }

//     set rate(rateValue) {
//         if (rateValue < 7000) {
//             console.log('Маловато будет!');
//         } else {
//             console.log('Сойдет');
//             this.#rate = rateValue;
//         }
//     }

//     get days() {
//         return this.#days;
//     }

//     set days(daysValue) {
//         if (daysValue < 0) {
//             console.log('Дни не могут быть отрицательными!');
//         } else {
//             this.#days = daysValue;
//         }
//     }

//     getSalary() {
//         return this.#rate * this.#days;
//     }
//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// const worker1 = new Worker ('Михаил','Долгов',7000,21);

// console.log(worker1.getFullName());
// console.log(worker1.getSalary());
// console.log(worker1.rate);// 7000
// console.log(worker1.days);// 21

// worker1.days = 25;
// console.log(worker1.getSalary());// 175000

// worker1.rate = 500;// "Маловато будет!"
// worker1.rate = 10000; // "Сойдет"


//4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//     constructor() {}
//     reverse(str) {
//         return str.split('').reverse().join('')
//     }
//     ucFirst(str) {
//         if (!str) return str; // добавил проверку на пустую строку
//         return str[0].toUpperCase() + str.slice(1);
//     }
//     ucWords(str) {
//         return str.split(' ').map(word => this.ucFirst(word)).join(' ')
//     }
// }

// const myString1 = new MyString();

// console.log(myString1.reverse('здарова, бандиты!')); //!ытиднаб ,аворадз
// console.log(myString1.ucFirst('здарова, бандиты!')); //Здарова, бандиты!
// console.log(myString1.ucWords('здарова, бандиты!')); //Здарова, Бандиты!


//5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//     constructor() {}
//     isEmail(str) {
//         if (typeof str !== 'string') return false;
//         // возьму регулярное выражение, логику проверки символов для каждой части адрес я понял
//         return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/.test(str); // самый короткий способ из опробованных, сразу возвращает true/false, как требуется по условию задачи. Можно прописать проверку через if (regex.test(str)) {...} else {...}, но это дольше
//     }
//     isDomain(str) {
//         if (typeof str !== 'string') return false;
//         // аналогично возьму существующее regexp (не самое большое, главное чтобы РФ домены тоже захватывал), хотя доменты типа mail.google.com не пройдут проверку, но это не самое важное пока
//         return /^[a-zа-я0-9-]+\.[a-zа-я]{2,}$/i.test(str); // я руки целовал того, кто регулярки придумал. Всего одна строка вместо 30-50!
//     }
//     isDate(str) {
//         if (typeof str !== 'string') return false;
//         return /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/.test(str);
//     }
//     isPhone(str) {
//         if (typeof str !== 'string') return false;
//         return /^(\+7|8)?[\s-]?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(str); // взял regexp с учетом пробелов/дефисов
//     }   
// }

// const validator = new Validator();

// console.log(validator.isEmail('mihaildolgov44@gmail.com')); // true
// console.log(validator.isDomain('gmail.com'));// true
// console.log(validator.isDate('10.05.20256'));// false
// console.log(validator.isPhone('89013928017'));// true


//Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно с помощью new Date.

// class User {
//     constructor(name, surname) {
//         this.name = name,
//         this.surname = surname
//     }

//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name,surname);
//         this.year = year;
//     }

//     getCourse() {
//         const currentYear = new Date().getFullYear();// круто)))
//         const course = currentYear - this.year;

//         if (course < 1) return 1;
//         if (course > 5) return 5; // если будет больше, значит закончил, всё равно покажет 5
//         return course;
//     }
// }

// const student = new Student('Михаил', 'Долгов', 2026);

// console.log(student.getFullName());  // 'Михаил Долгов'
// console.log(student.getCourse());    // 1

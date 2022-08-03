/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего заданияconst numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
/* const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; */

/* for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} */
    
/* if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибкаs');
}

console.log(personalMovieDB); */


/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello world');
console.log(num);
 */


/* function calc(a, b) {
    return (a + b);

}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */


/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); */


/* const logger = function () {
    console.log('Hello');
};

logger(); */

/* 
const calc = (a, b) => {
    console.log('1');
    return a + b;
}; */



/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr); */




/* const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res); */




/* function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test(); */


/* function doNothing() { };
console.log(doNothing() === undefined); */



/* const str = 'test';
const arr = [1, 2, 4];
console.log(arr.length); */


/* let number = 5;
const leftBorderWidth = 1;

const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);

{
    let result = 50;
}
console.log(result); */


/* const userName = 'John';
let userNumber = 25;
userNumber = 24;
 */


/* const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plum', 'orange', 6, {}, 'apple'];
console.log(arr[2]); */

/* const storeName = 'Auchan';
let storeDescription = {
    budget: 10000,
    employees: ['Vadym', 'Anna', 'Leo'],
    products: {
        apple: 5,
        bread: 12
    },
    open: true
}; */

/* for (let i = 1; i < 10; i++) {
    i++;
    console.log(i);
} */
    
/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */

/* let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
} */


/* const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers); */

/* const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Нас колько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} 

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
} */


/* function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('hello'); */


/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); */



/* function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum); */




/* const logger = function () {
    console.log('go');
};

logger(); */



/* const calc = (a, b) => a + b; */

/* function sayHello(name) {
    return 'Hi ${name}!';
}
sayHello('Антон'); */



/* function returnNeighboringNumbers(num) {
    return [num - 1, num , num + 1];
}
returnNeighboringNumbers(5); */


/* const str = 'teSt';
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);
console.log(str.toLowerCase()); */



/* const fruit = 'Some fruit';

console.log(fruit.indexOf('')); */


/* const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5)); */



/* const num = 12.2;
console.log(Math.round(num)); */


/* const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */




/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Нас колько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
        }
    } 
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
    } else {
    console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
 */

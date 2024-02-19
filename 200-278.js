// 200 Основы работы с пользовательскими функциями в JavaScript
function name200() {
    console.log("Ksusha");
}
name200()

function sum100() {
    let sum200_2=0
    for (let i=0; i<=100; i++) {
        sum200_2+=i;
    }
    console.log(sum200_2)
}
sum100()

// 201 Параметры функций в JavaScript
function cube201(num201) {
    console.log(num201**3)
}
cube201(2)

function cube201_2(num201_2) {
    if (num201_2>0) {
        console.log('+++')
    } else {
        console.log('---')
    }
}
cube201_2(-2)

// 202 Несколько параметров функций в JavaScript
function sum202(n202,n2021,n2022) {
    console.log(n202+n2021+n2022)
}
sum202(1,2,3)

// 205 Инструкция return в JavaScript
function func5(num5) {
	return num5 ** 3;
}

let res5 = func5(6);
console.log(res5)

function func5_2(num5_2) {
    return (Math.sqrt(num5_2));
}
let f5 = func5_2(3);
let f6 = func5_2(4);
console.log(f5+f6)


// 206 Последовательный вызов функций в JavaScript
/* Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части. 
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

console.log(round(sqrt(2))) */

// 209 Применение return в циклах в JavaScript
function f209(n209) {
    kol9 = 0;
    while (n209>=10) {
        n209/=2;
        kol9++;
    }
    return kol9;
}
console.log(f209(50))

// 211 Флаги в функциях JavaScript
function isPositive11(arr11) {
	for (let elem11 of arr11) {
		if (elem11%2!=0) {
			return false;
		}
	}
	return true;
}

console.log(isPositive11([2,4]))

// 214 Поиск ошибок в коде с функциями JavaScript
function func1() {
	return(3);
}
function func2() {
	return(5);
}
console.log( func1(3) + func2(5) );

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}
console.log(sum([1, 2, 3, 4, 5]));

let res = sum([1, 2, 3, 4, 5]);
function sum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	} 
	return sum;
}
console.log(res);

// 215 Практика на функции в JavaScript
function findDivisors(num) {
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    
    return divisors;
}
let result = findDivisors(12);
console.log(result); 


function reverseString(str) {
    return str.split('').reverse().join('');
}
let reversedStr = reverseString("hello");
console.log(reversedStr);

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
let capitalizedStr = capitalizeFirstLetter("hello world");
console.log(capitalizedStr); 


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let randomElement = getRandomElement([1, 2, 3, 4, 5]);
console.log(randomElement); 

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
let primeCheck = isPrime(17);
console.log(primeCheck); 

// 224 Функция как переменная в JavaScript
function func24(str24) {
    return 'Hello World';
}
console.log(func24())

// 237 Массив с анонимными функциями в JavaScript
let arr37 = [
    function(){return 1},
    function(){return 2},
    function(){return 3}
];

let sum37 = arr37[0]() + arr37[1]() + arr37[2]();
console.log(sum37);

for (let i37 = 0; i37 < arr37.length; i37++){
    console.log(arr37[i37]());
}

// 238 Объект с анонимными функциями в JavaScript
let obj38 = {
    func1: function () {return 1;},
    func2: function () {return 2;},
    func3: function () {return 3;}
};
console.log(obj38.func1() + obj38.func2() + obj38.func3());
let sum38 = 0;
for (let key38 in obj38){
    sum38 += obj38[key38]();
}
console.log(sum38);

// 240 Передача функций параметрами в JavaScript
test40(
    function () {return 1;},
    function () {return 2;},
    function () {return 3;}
)
function test40(f1, f2, f3){
    console.log(f1() + f2() + f3());
}

// 241 Именованные функции-параметры в JavaScript
function test41(f41, f412, f413) {
    alert(f41() + f412() + f413());
}
function func41() {
    return 1;
}
function func412() {
    return 2;
}
function func413() {
    return 3;
}
test41(func41, func412, func413);

// 242 Параметры передаваемых функций в JavaScript
test42(function(num42) {
	return num42 * num42 * num42;
});
function test42(func42) {
	console.log(func42(3));
}

let func42_2 = function(a42, b42){
    return a42 + b42;
}
test42_2(func42_2);
function test42_2(func42_2){
    console.log(func42_2(2, 3));
}

// 243 Передача числа параметром в JavaScript
test43(3,
    function(num43){return num43 * num43;},
    function (num43){return num43 * num43 * num43;});
function test43(num43, func431, func432) {
    console.log(func431(num43) + func432(num43));
}

// 244 Применение передачи функции параметром в JavaScript
function test44(arr44, func44) {
    for (let i44 = 0; i44 < arr44.length; i44++){
        arr44[i44] = func44(arr44[i44]);
    }
    return arr44;
}
let result44 = test44([1, 2, 3], function (num44) {
    return num44 * num44 * num44;
});
console.log(result44);

// 245 Вложенные функции в JavaScript
function func45(num451, num452) {
    function square45(num451) {
        return num451 * num451;
    }
    function cube45(num452){
        return num452 * num452 * num452;
    }
    return square45(num451) + cube45(num452);
}
console.log(func45(2, 3));

// 250 Функция, возвращающая функцию в JavaScript
function func1() {
    return function () {
        return 1;
    }
}
function func2() {
    return function () {
        return 2;
    }
}
console.log(func1()() + func2()());

// 251 Любой уровень вложенности в JavaScript
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func51() {
    return function () {
        return function () {
            return function () {
                return function () {
                    return '!';
                }
            }
        }
    }
}
console.log(func51()()()()());

// 252 Параметры возвращаемой функции в JavaScript
function func52(num521) {
    return function (num522) {
        return function (num523) {
            return num521 + num522 + num523;
        }
    }
}
console.log(func52(2)(3)(4));

// 261 Счетчик на замыканиях в JavaScript
function test61(){
    let num61 = 10;
    return function(){
        console.log(num61);
        num61--;
    }
}
let func61 = test61();
func61();
func61();
func61();
func61();

// 269 Множественные вызовы IIFE в JavaScript
/* 1) Допишите следующий код так, чтобы его запуск алертом выводил '!':
(function() {
    return function () {
        return function () {
            alert('!');
        }
    }
})()()();

   2) Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
    return function (num2) {
        alert(num1 + num2);
    }
})(1)(2);

   3) Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
    return function (num2) {
        return function (num3) {
            alert(num1 + num2 + num3);
        }
    }
})(1)(2)(3); */

// 272 Замыкания и вызов функции на месте в JavaScript
let func72 = (function () {
    let num72 = 1;
    return function () {
        if (num72 == 5){
            console.log(num72);
            num72 = 1;
        } else {
            console.log(num72);
            num72++;
        }
    }
})();
func72();
func72();
func72();
func72();
func72();
func72();
func72();
func72();
func72();

// 275 Сумма элементов массива при рекурсии в JavaScript
let arr75 = [1, 2, 3, 4, 5];
function getSum(arr75) {
	let sum75 = arr75.shift();
	if (arr75.length !== 0) {
		sum75 += getSum(arr75);
	}
	return sum75;
}
console.log(getSum(arr75));

// 278 Манипуляции с элементами в JavaScript
const arr78 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function squareElements(arr78) {
    return arr78.map((element) => {
        if (Array.isArray(element)) {
            return squareElements(element);
        } else {
            return Math.pow(element, 2);
        }
    });
}
const squaredArr = squareElements(arr78);
console.log(squaredArr);
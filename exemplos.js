"use strict";
   
const prefix = "username_";
   
let userName = "Jack";
//const userName = "Adam";
   
let prefixedUserName;
//const prefixedUserName;
   
userName = "John";
prefixedUserName = prefix + userName;
   
console.log(prefixedUserName /*+ prefixedUserName2*/);
//console.log(prefixedUserName2);

let counter = 100;
//let counter = 200;
counter = 300;
console.log(counter)

let age = 32;
age = age + 1;
console.log(age);

let height = 180;
{
let height = 200;
height = height + 10;
}
 console.log(height);

 let x = 10 / 100;
{
console.log(typeof (x));
}

let y = 100 / 0;
console.log(y)

/*let z = 20n + 10;
console.log(z)*/

let n = "Alice" + 10;
console.log(n)

let c = "abcdefg".slice(2, 4)// extrai os caracteres da posição 2 até a posição 4 (não incluída), resultando em "cd".
console.log(c)

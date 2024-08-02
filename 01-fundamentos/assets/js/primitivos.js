/* String */

let nombre = 'Peter Parker';
console.log(nombre);

console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.33;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); // undefined

let soyNull = null;
console.log(typeof soyNull); // object

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 == symbol2);
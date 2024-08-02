let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log(`Largo ${juegos.length}`);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr);
})

let nuevaLongitud = juegos.push('F-Zero'); // Inserta al FINAL y regresa el length
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem'); // Inserta al INICIO y regresa el length
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); // Saca el ultimo elemento y regresa el valor
console.log({ juegoBorrado, juegos });

console.log(juegos);
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); // borra varios elementos splice(inicio,cuantosElimina), retorna los elments eliminados
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid'); // retorna el indice sino -1
console.log(metroidIndex);
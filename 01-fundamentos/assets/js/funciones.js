function saludar(nombre) {
    console.log(arguments);
    console.log("hola ", nombre);
    return 10; // si no hay return devuelve undefined
}

const saludar2 = function (nombre) {
    console.log("hola ", nombre);
}

const retornoDeSaludar = saludar('Benji', 40, true, 'México');
saludar2('Martinez');

// Funciones de flecha o lambda functions

const saludarFlecha = (name) => console.log('Hola ', name);

saludarFlecha('Benjamin');

console.log({ retornoDeSaludar });

const sumar = (a, b) => a + b;

console.log(sumar(10, 10));

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());
const myName = 'Benji';

let saludoDia = `Hola ${myName} buenos dias!`;

function saludoNoche(name) {
    const myName = 'Goku'
    console.log(`myName en la fn() vale: ${myName}`);
    let saludoDia = `Hola ${name} buenas noches!`;
    return saludoDia;
}

console.log(`myName fuera de la fn() vale: ${myName}`);
console.log(saludoDia);
console.log(saludoNoche(myName));
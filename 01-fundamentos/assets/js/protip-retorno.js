/* function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
} */


const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona('Benji', 'Martinez');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'Benji', 'Hola');

// el spread de una variable ...variable genera un arreglo [1,2,3,n]
const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({ edad, args });
    return args;
}

const [casado, vivo, name, saludo] = imprimeArgumentos2(10, true, false, 'Benji', 'Hola');
console.log({ casado, vivo, name, saludo });

const { nombre, apellido } = crearPersona('Mich', 'Mendez');
console.log({ apellido, nombre });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, trajes }) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
}

imprimePropiedades(tony);
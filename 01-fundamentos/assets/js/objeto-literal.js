let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: - 118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log("nombre", personaje.nombre);
console.log("nombre", personaje['nombre']);
console.log("No. trajes", personaje.trajes.length);
console.log("Ultimo traje", personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Ultima pelicula: ', personaje['ultima-pelicula']);

// Mas detalles

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
// const { title, description, state } = Object.fromEntries([...data.entries()]);

// el freeze restringe alterar el objeto en las entidades directas o hijas
Object.freeze(personaje);

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'México';
personaje.codeName = 'Lex Luthor';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
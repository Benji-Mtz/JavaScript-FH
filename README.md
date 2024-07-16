## ¿Que version de Javascript debo usar?

- ES5
  - Soportada en todos los navegadores web.
- ES6/ES2015, ES7/ES2016, ES8/ES2017
  - Soportados en la mayoria de los navegadores moderno.
  - Pero no por todos los navegadores web.
  - Muchas características pueden ser implementadas con `polyfills`.

`Polyfill`: Es un código que provee el funcionamiento de una nueva característica de JavaScript (ES6) tipo arrow functions, spread etc, en versiones viejas como ES5.

## Var vs Let vs Const

Practicamente `var` solo es utilizado en navegadores viejos ademas de que vive dentro del objeto `window` por lo que si creamos una variable como `var myName = 'Hola'` es muy facil que sin querer sobreescriba alguna variable como `window.myName`.

Para evitar esto se creo `let` y `const` ya que asi se evita sobrescribir sobre alguna variable dentro del objeto `window` o alguna otra variable dependiendo del scope o ámbito de donde se encuentre

```js
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
```

Resultados

```sh
myName fuera de la fn() vale: Benji
Hola Benji buenos dias!
myName en la fn() vale: Goku
Hola Benji buenas noches!
```
Asi limitamos los scopes de las variables en cada parte del programa o en algunos metodos o funciones para no sobreescribirlos.


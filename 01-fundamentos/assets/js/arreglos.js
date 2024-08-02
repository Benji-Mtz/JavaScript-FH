// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = ['Silent Hill', 'Resident Evil 1', 'King of Fighters'];
console.log({ videoJuegos });

let arregloCosas = [
    true,
    213,
    'Benji',
    1 + 2,
    function () { },
    () => { },
    { a: 1, b: 2 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log({ arregloCosas });
console.log(arregloCosas[7][4][1]);
//Lev1_1 ForEach
console.log('%c Lev1_1 ForEach', 'color: purple; font-weight:900, text-decoration:underline');

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
console.log(getraenke);
getraenke.sort();
console.log(getraenke);
let out = document.getElementById('out');
getraenke.forEach(elt => out.innerHTML += `<p>${elt}</p>`);

//Lev1_2 Map()
console.log('%c Lev1_2 Map()', 'color: purple; font-weight:900, text-decoration:underline');
console.log(' ');

let getraenke2 = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let upperDrinks = getraenke2.map(elt => {
    console.log('upperDrinks test');
    return elt.toLocaleUpperCase();
})
console.log(upperDrinks);

//Lev1_3 Map()
console.log('%c Lev1_3 Map()', 'color: purple; font-weight:900, text-decoration:underline');
console.log(' ');

let arraynum = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
console.log(arraynum);
let oof = arraynum.map(elt => elt * 2).sort((a, b) => a - b);
console.log(oof);

//Lev1_5 ForEach()
console.log('%c Lev1_5 ForEach()', 'color: purple; font-weight:900, text-decoration:underline');
console.log(' ');

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
console.log('test checkNumber');
console.log(checkNumber);

checkNumber.forEach(function (elt, c, a) { //elt Element, c = Index, A (potentieller Array)
    if (elt % 3 === 0) {
        checkNumber[c] = elt += 100;
    } else { return }
});

console.log('test result');
console.log(checkNumber);

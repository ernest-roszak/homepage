const name = 'Ernest';
let age = '30'

console.log(
    `Hej nazywam się ${name} i mam ${age} lat`
    );

const heading = document.querySelector('.header__title--js'); 
console.log(heading);
heading.innerHTML = `Hej nazywam się ${name} i mam ${age} lat` 

function calculate(myNumber) {
    console.log (`Dostałem ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber*7;
} 



const myResult = calculate(age);
console.log (`Wynik działania to ${myResult}`);


function greatOld (age, name) {
    console.log(
        `Witaj odwiedzający, nazywam się ${name} i mam ${age} lat ` 
    );
}
const great = (age, name) => {
    console.log(
        `Witaj odwiedzający, nazywam się ${name} i mam ${age} lat ` 
    );
}

great (age, name);
great (18, 'Janusz');
great (age, 'IZKA')

const suma = (age) => age*5


console.log(suma(7));

function newHeading (querySelectorContent, content){
     const newThings = document.querySelector(querySelectorContent);
     newThings.innerHTML = content;

    
}
newHeading ('.section-main__title--js', 'Sprawdzam jak działa ten cały JS' );

const citroen = {
color: 'balck',
przebieg: 120000,
travel: (road) => {
    console.log(`${road}, nie dojedzie tak daleko`)
},
doors: 5,
name: 'citroen',
model: 'c4',
silnik: {
    pojemnosc: 1600,
    rodzaj: 'HDI',
     paliwo: 'deasel'
},
rok: 2011,
}
console.log(citroen.silnik.pojemnosc);
console.log(typeof citroen);
console.log(citroen);
citroen.travel('Dania');

const dupa = 'model'

console.log(citroen[dupa]); 

const funkcjaDupa = (dupa) => {
    console.log(`Wybrana przez Ciebie opcja to ${citroen[dupa] }. Dziekujemy za zainteresowanie`);
}
funkcjaDupa('model')

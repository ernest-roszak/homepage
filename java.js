const name = 'Ernest';
let age = '30'

console.log(
    `Hej nazywam się ${name} i mam ${age} lat`
    );

const heading = document.querySelector('.h1__title--js'); 
console.log(heading);
heading.innerHTML = `Hej nazywam się ${name} i mam ${age} lat`
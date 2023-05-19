
// Funcion ante-invocada
// Funcion tradicional
// (function () {
//     statements
// })();
// Funcion moderna flecha
// (() => {
//     statements
// })();

(()=>{
const msg:string = 'Hola mundo';
console.log(msg);
// comando para compilat tsc ** crea archivo en .js
// comando para inicializar tsc --init ***Crea archivo de configuraicon
// comando para entrar en modo observador tsc -- watch or tsc -w 

const hero = {
    name: 'Iroman',
    age: 45
}

hero.age = 50;

console.log(hero.age +1 )

////----------------------

const a:number = 10;
let b:number   = 10;
let c; // typo any cualquier cosa

c = 3;
c = 'string';
c = [];
c = {};
c = true;

function sayHelo(msg:string){
    console.log(msg);
    
}

})()
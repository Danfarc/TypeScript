/* import { Hero } from "./classes/Hero";
// Otra manera de importar
// import * as HeroClasses  from './classes/Hero'
// Importacion por defecto
import powers from './data/powers';
//console.log('Hola Mundo!');
const iroman:Hero = new Hero('Iroman',1,42);
//const iroman:HeroClasses.Hero = new HeroClasses.Hero('Iroman',3000,42);
console.log({iroman});
//console.log(powers)
console.log(iroman.power); */

import { genericFuntionArrowShort } from "../generics/generics"
import { Villain } from "../interfaces";
/* import { Hero } from "./interfaces/hero";
import { Villain } from "./interfaces/villain";
 */
/* import { genericFunctionArrow, genericFuntion, printObject } from "./generics/generics";
printObject('HOla');
const name:string = 'Daniel';
console.log(genericFuntion(3.123).toFixed(2));
console.log(genericFuntion( name ).toUpperCase());
console.log(genericFuntion( new Date() ).getDate());
console.log (genericFunctionArrow(3)); */

const deadpool = {
    name: 'Deadpoll',
    realName: 'Wade Winston',
    dangerLevel: 130
}

console.log( genericFuntionArrowShort<Villain>(deadpool).dangerLevel);
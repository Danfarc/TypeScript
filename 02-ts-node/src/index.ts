/* import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
.then( pokemon => console.log(pokemon))
.catch( error => console.error(error))
.finally( () => console.log('Fin del getPokemon')) */

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

//(Pokemon.prototype as any).customName = 'Pikachu';

//charmander.publicApi = 'https://daniel-arana.com'
console.log(charmander);

//charmander.savePokemonToDB(1);

import axios from "axios"
import { Pokemon } from '../interfaces';


export const getPokemon =async (pokemonId:number):Promise<Pokemon> => {

     //const resp = await axios.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
     //console.log(resp.data.abilities[1].ability.name);
     //return resp.data;
     const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
     return data;
    
}

// pokeapi.co
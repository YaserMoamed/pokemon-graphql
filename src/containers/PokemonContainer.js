import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/getPokemon'
import Pokemon from '../components/Pokemon';
export const PokemonContainer = () => {
     const  {data: { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
         variables: {first: 9},
     });
     return(
         <div className="container">
             {
             pokemons && 
              pokemons.map(pokemon =>
                  <Pokemon key={pokemon.id} pokemon={pokemon} />
            )}
         </div>
     )
}



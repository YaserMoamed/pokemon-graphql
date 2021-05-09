import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/getPokemon'
export const PokemonContainer = () => {
     const  {data: { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
         variables: {first: 9},
     });
     return(
         <div className="pokemon">
             {
             pokemons && 
              pokemons.map(pokemon =>
                   JSON.stringify(pokemon, null, 2)
            )}
         </div>
     )
}



import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonContainer} from './containers/PokemonContainer';
import './App.css'
function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app'
  });
  return (
    <ApolloProvider client={client}>
      <main>
        <h1>I am a Pokemon!</h1>
      </main>
      <PokemonContainer />
    </ApolloProvider>
  );
}

export default App;

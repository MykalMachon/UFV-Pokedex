import PokeSearch from '@components/PokeSearch';
import PokeFinder from '@components/PokeFinder';
import { useReducer } from 'react';

const Pokedex = () => {
  const pokeReducer = (currState, action) => {
    switch (action.type) {
      case 'UPDATE_SEARCH_QUERY':
        return {
          ...currState,
          searchQuery: action.payload,
        };
      case 'INIT_SEARCH':
        return {
          ...currState,
          searchQuery: action.payload,
        };
      case 'SEARCH_SUCCESS':
        return {
          ...currState,
          currPokemon: action.payload,
        };
      case 'SEARCH_ERROR':
        return {
          ...currState,
          currPokemon: false,
        };
      default:
        throw new Error(
          'Improper action.type was dispatched to PokeReducer in Pokedex.js'
        );
    }
  };

  const [state, dispatch] = useReducer(pokeReducer, {
    currPokemon: null,
    searchQuery: '',
  });

  return (
    <section id="pokedex">
      <PokeSearch dispatch={dispatch} />
      <PokeFinder pokeName={state.searchQuery} dispatch={dispatch} />
    </section>
  );
};

export default Pokedex;

import { ErrorBoundary } from 'react-error-boundary';

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
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={() => {
          console.log('error is caught');
        }}
      >
        <PokeSearch dispatch={dispatch} />
        <PokeFinder pokeName={state.searchQuery} dispatch={dispatch} />
      </ErrorBoundary>
    </section>
  );
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default Pokedex;

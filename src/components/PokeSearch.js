import { useState } from 'react';

const PokeSearch = ({ dispatch }) => {
  const [query, setQuery] = useState('');

  const initSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: 'INIT_SEARCH',
      payload: query,
    });
  };

  return (
    <form onSubmit={initSearch}>
      <label htmlFor="search">Enter a Pokemon</label>
      <input
        type="text"
        name="search"
        placeholder="pikachu, charizard, etc..."
        autoComplete="false"
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PokeSearch;

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
    <form
      onSubmit={initSearch}
      className="flex flex-col gap-4 px-5 py-3 m-4 text-red-100 bg-red-500 rounded md:m-0"
    >
      <label htmlFor="search">Enter a Pokemon</label>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="search"
          placeholder="pikachu, charizard, etc..."
          autoComplete="none"
          className="col-span-2 px-4 py-2 text-red-600 placeholder-current bg-red-200 border-2 border-red-600 rounded focus:outline-none focus:ring-2 focus:ring-red-600 "
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
          value={query}
        />
        <div className="grid self-end">
          <button
            className="self-end px-4 py-2 bg-red-700 border border-red-600 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default PokeSearch;

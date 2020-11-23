import { useEffect, useState } from 'react';
import * as Pokedex from 'pokeapi-js-wrapper';

const PokeFinder = ({ pokeName }) => {
  const [pokedex, setPokedex] = useState(() => {
    return new Pokedex.Pokedex();
  });

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(null);
    const getPokemon = async () => {
      const pokeBase = pokedex.getPokemonByName(pokeName || 'charmander');
      const pokeSpecies = pokedex.getPokemonSpeciesByName(
        pokeName || 'charmander'
      );
      const pokemonObj = {
        ...(await pokeBase),
        ...(await pokeSpecies),
      };
      console.log(pokemonObj);
      setPokemon(pokemonObj);
    };
    getPokemon();
  }, [pokeName]);

  if (pokemon) {
    return (
      <section className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="grid place-items-center col-span-1 row-span-1">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48"
          />
        </div>
        <div className="col-span-2 grid gap-4">
          <div className="border border-red-300 border rounded col-span-2">
            <div className="bg-red-500 py-2 px-4 rounded-t">
              <span className="text-red-100 font-normal mr-4">
                #{pokemon.id}
              </span>
              <span className="text-red-100 font-normal mr-4 uppercase">
                {pokemon.name}
              </span>
            </div>
            <div className="bg-red-100 py-2 px-4 rounded-b border-top border-t-4 border-red-300">
              <span>The electric rat pokemon</span>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-3 grid-rows-3 col-span-2">
            <div className="border border-red-300 row-span-2 rounded grid place-items-center bg-red-100 py-2 px-4">
              <p className="text-sm capitalize ">Shiny {pokemon.name}</p>
              <img
                src={pokemon.sprites.front_shiny}
                alt={`Shiny version of ${pokemon.name}`}
              />
            </div>
            <div className="border border-red-300 col-span-2 flex gap-3 rounded">
              <p>Electric</p>
              <p>Flying</p>
            </div>
            <div className="border border-red-300 col-span-2 row-span-2 grid align-items-center py-2 px-4 bg-red-100 rounded">
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}oz</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="text-xl capitalize"></p>
          <p>{pokemon.flavor_text_entries[1].flavor_text.replace('', ' ')}</p>
        </div>
      </section>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default PokeFinder;

import { useEffect, useState } from 'react';

const PokeFinder = ({ pokeName }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon(null);
    const getPokemon = async () => {
      try {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const pokeBase = (
          await fetch(
            `https://pokeapi.co/api/v2/pokemon/${
              pokeName || `${randomNumber}`
            }/`
          )
        ).json();
        const pokeSpecies = (
          await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${
              pokeName || `${randomNumber}`
            }/`
          )
        ).json();
        const pokemonObj = {
          ...(await pokeBase),
          ...(await pokeSpecies),
        };
        setPokemon(pokemonObj);
      } catch (err) {
        throw new Error(`No Pokemon "${pokeName}" was found`);
      }
    };
    getPokemon();
  }, [pokeName]);

  if (pokemon) {
    return (
      <section className="grid grid-cols-1 grid-rows-2 gap-4 m-4 mt-4 md:m-0 md:grid-rows-1 md:grid-cols-3 md:mt-6">
        <div className="grid col-span-1 row-span-2 place-items-center">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48"
          />
        </div>
        <div className="grid col-span-2 row-span-1 gap-4">
          <div className="col-span-2 border border-red-300 rounded">
            <div className="px-4 py-2 bg-red-500 rounded-t">
              <span className="mr-4 font-normal text-red-100">
                #{pokemon.id}
              </span>
              <span className="mr-4 font-normal text-red-100 uppercase">
                {pokemon.name}
              </span>
            </div>
            <div className="px-4 py-2 border-t-4 border-red-300 rounded-b bg-red-50 border-top">
              <span>
                {pokemon.flavor_text_entries[1].flavor_text.replace('', ' ')}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 col-span-2 grid-rows-2 gap-4">
            <div className="grid row-span-2 px-4 py-2 border border-red-300 rounded bg-red-50 place-items-center">
              <p className="text-sm capitalize ">Shiny {pokemon.name}</p>
              <img
                src={pokemon.sprites.front_shiny}
                alt={`Shiny version of ${pokemon.name}`}
              />
            </div>
            <div className="col-span-2 gap-3 px-4 py-2 border border-red-300 rounded bg-red-50">
              <p>Types: </p>
              <div className="flex">
                {pokemon.types.map((type) => {
                  return (
                    <p key={type.type.name} className="mr-4">
                      {type.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="grid col-span-2 row-span-1 px-4 py-2 border border-red-300 rounded bg-red-50 align-items-center">
              <p>Height: {pokemon.height * 10} cm</p>
              <p>Weight: {pokemon.weight} hgm</p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="grid grid-cols-1 grid-rows-2 gap-4 m-4 mt-4 md:m-0 md:grid-rows-1 md:grid-cols-3 md:mt-6 animate-pulse">
        <div className="grid col-span-1 row-span-2 place-items-center w-52 h-80">
          <div className="w-48 h-56 bg-red-300" />
        </div>
        <div className="grid col-span-2 row-span-1 gap-4">
          <div className="col-span-2 border border-red-300 rounded">
            <div className="px-4 py-2 bg-red-500 rounded-t">
              <div className="w-24 h-4 bg-red-300 rounded"></div>
            </div>
            <div className="h-8 px-4 py-2 pt-2 border-t-4 border-red-300 rounded-b bg-red-50 border-top">
              <div className="w-full h-4 mb-2 bg-red-300 rounded"></div>
              <div className="w-48 h-4 bg-red-300 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 col-span-2 grid-rows-2 gap-4">
            <div className="grid row-span-2 px-4 py-2 border border-red-300 rounded bg-red-50 place-items-center">
              <div className="w-24 h-24 mb-2 bg-red-300 rounded"></div>
            </div>
            <div className="col-span-2 gap-3 px-4 py-2 border border-red-300 rounded bg-red-50">
              <div className="w-32 h-4 mb-2 bg-red-300 rounded"></div>
              <div className="w-48 h-4 bg-red-300 rounded"></div>
            </div>
            <div className="grid col-span-2 row-span-1 px-4 py-2 border border-red-300 rounded bg-red-50">
              <div className="w-56 h-4 mb-2 bg-red-300 rounded"></div>
              <div className="w-56 h-4 bg-red-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default PokeFinder;

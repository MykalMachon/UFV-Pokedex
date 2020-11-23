// import PokeFinder from '@components/PokeFinder';
import Pokedex from '@components/Pokedex';
import dynamic from 'next/dynamic';

// This is the home page
const HomePage = () => {
  return (
    <>
      <main>
        <h1 className="text-xl text-gray-900">UFV Pokedex</h1>
        <p className="text-lg text-gray-600 my-2">
          This website will get random pokemon (like a pokedex) using the
          PokeAPI
        </p>
        <Pokedex />
      </main>
    </>
  );
};

export default HomePage;

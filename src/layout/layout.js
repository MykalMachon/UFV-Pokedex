import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <main>
      <div className="flex flex-col items-center w-full">
        <img
          src="/pokemon_logo.png"
          alt="Pokemon Logo"
          width="256px"
          height="104px"
        />
        <nav className="mt-4 navigation_bar">
          <ul className="flex gap-4 flex-rows">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="grid w-full mt-8 place-items-center">
        <div className="w-full max-w-2xl">{children}</div>
      </div>
      <footer className="grid w-full mt-8 place-items-center">
        UFV Pokedex App - CIS 341 2020
      </footer>
    </main>
  );
};

export default Layout;

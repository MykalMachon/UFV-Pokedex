import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <main>
      <div className="flex w-full items-center flex-col">
        <img
          src="/pokemon_logo.png"
          alt="Pokemon Logo"
          width="256px"
          height="104px"
        />
        <nav className="navigation_bar mt-4">
          <ul className="flex flex-rows gap-4">
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
      <div className="w-full grid place-items-center mt-8">
        <div className="max-w-2xl w-full">{children}</div>
      </div>
      <footer className="w-full grid place-items-center mt-8">
        UFV Pokedex App - COMP 390 2020
      </footer>
    </main>
  );
};

export default Layout;

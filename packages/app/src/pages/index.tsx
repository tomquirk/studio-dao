import type { NextPage } from "next";

import { Button } from "../Button";

const HomePage: NextPage = () => {
  // TODO: figure out how to conditionally apply body class
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-10">
        <a href="/">
          <img src="/logo.svg" className="w-[200px]" alt="StudioDAO logo" />
        </a>
        <nav>
          <ul className="flex">
            <li>
              <a href="#" className="p-4">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="p-4">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="p-4">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="p-4">
                Discord
              </a>
            </li>
          </ul>
        </nav>
        <Button>Connect</Button>
      </div>
      <div
        className="min-h-[640px] bg-center bg-cover bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="bg-zinc-800/80">
          <div className="container mx-auto flex justify-between py-4">
            <div>Current treasury cycle</div>
            <div>Earn Green-light Power</div>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-end items-center">
          <div className="flex justify-center items-end gap-16">
            <div className="w-[40rem]">
              <h1 className="text-6xl font-dmserif">Owned by filmmakers.</h1>
              <p>
                Welcome to StudioDAO – a movie studio owned by filmmakers and
                fans. Your Green-light power is your voting power. Use it to
                choose which films get made. Grow it by supporting more films &
                staying active in our community:
              </p>
            </div>
            <div>
              <ul>
                <li>Green-light films</li>
                <li>Make movies</li>
                <li>Watch movies</li>
              </ul>
              <div className="flex gap-4">
                <Button>Join StudioDAO</Button>
                <Button>Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

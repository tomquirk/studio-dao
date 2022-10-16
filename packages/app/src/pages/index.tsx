import type { NextPage } from "next";

import { Button } from "../Button";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-2 flex justify-between items-center py-8">
        <a href="#">
          <img src="/logo.svg" className="w-48" alt="StudioDAO logo" />
        </a>
        <nav>
          <ul className="flex">
            <li>
              <a
                href="#"
                className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
              >
                Discord
              </a>
            </li>
          </ul>
        </nav>
        <Button size="sm">Connect</Button>
      </div>
      <div className="space-y-48">
        <div
          className="min-h-[640px] bg-center bg-cover bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url(/hero.png)" }}
        >
          <div className="bg-zinc-800/80">
            <div className="container mx-auto px-2 flex justify-between py-4">
              <div>Current treasury cycle</div>
              <div>Earn Green-light Power</div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-end items-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
            <div className="relative max-w-5xl px-2 flex justify-center items-end gap-24 pb-16 -mb-16">
              <div className="space-y-4">
                <h1 className="text-6xl font-dmserif text-white">
                  Owned by <span className="text-emerald-500">filmmakers</span>.
                </h1>
                <p>
                  Welcome to StudioDAO – a movie studio owned by filmmakers and
                  fans. Your Green-light power is your voting power. Use it to
                  choose which films get made. Grow it by supporting more films
                  & staying active in our community:
                </p>
              </div>
              <div className="space-y-6">
                <ul>
                  <li className="flex gap-2">
                    <span>❇️</span> Green-light films
                  </li>
                  <li className="flex gap-2">
                    <span>🎥</span> Make movies
                  </li>
                  <li className="flex gap-2">
                    <span>🍿</span> Watch movies
                  </li>
                </ul>
                <div className="flex gap-2 w-max">
                  <Button>Join StudioDAO</Button>
                  <Button variant="secondary">Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-2 space-y-16">
          <div className="max-w-xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-dmserif text-white">
              Today’s Green-light vote
            </h2>
            <p className="max-w-prose mx-auto">
              Current active proposals. Your Green-light power allows you to
              vote daily to allocate funds to a film.{" "}
              <a
                href="#"
                className="text-emerald-500 hover:underline hover:underline-offset-2"
              >
                Learn more &rarr;
              </a>
            </p>
          </div>
          <div className="p-16 border rounded-xl border-zinc-600 flex items-center justify-center">
            TODO
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-2 space-y-16">
          <div className="max-w-xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-dmserif text-white">
              StudioDAO Box Office
            </h2>
            <p className="max-w-prose mx-auto">
              You buy a ticket for a movie that’s already been made. You buy a
              Super Ticket to see a movie get made.{" "}
              <a
                href="#"
                className="text-emerald-500 hover:underline hover:underline-offset-2"
              >
                Learn more &rarr;
              </a>
            </p>
          </div>
          <div className="space-y-8">
            <div className="p-16 border rounded-xl border-zinc-600 flex items-center justify-center">
              TODO
            </div>
            <Button className="mx-auto">View all projects</Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-2 space-y-12">
          <div className="max-w-xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-dmserif text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                How do I green-light a film?
              </h4>
              <p>
                Lorem ipsum dolor sit amet. Rem saepe animi et natus autem qui
                tempora quia non animi laudantium eum autem vero. Et quisquam
                laborum qui quasi quia quo enim libero ea voluptatibus nobis!
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                How to join StudioDAO?
              </h4>
              <p>
                Lorem ipsum dolor sit amet. Rem saepe animi et natus autem qui
                tempora quia non animi laudantium eum autem vero. Et quisquam
                laborum qui quasi quia quo enim libero ea voluptatibus nobis!
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                What’s a Hero NFT?
              </h4>
              <p>
                Lorem ipsum dolor sit amet. Rem saepe animi et natus autem qui
                tempora quia non animi laudantium eum autem vero. Et quisquam
                laborum qui quasi quia quo enim libero ea voluptatibus nobis!
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-white">
                How do I get Green-light Power?
              </h4>
              <p>
                Lorem ipsum dolor sit amet. Rem saepe animi et natus autem qui
                tempora quia non animi laudantium eum autem vero. Et quisquam
                laborum qui quasi quia quo enim libero ea voluptatibus nobis!
              </p>
            </div>
          </div>

          <Button className="mx-auto">Learn more</Button>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center divide-y divide-zinc-700">
          <a href="#">
            <img src="/logo.svg" className="w-36" alt="StudioDAO logo" />
          </a>
          <nav>
            <ul className="flex">
              <li>
                <a
                  href="#"
                  className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-2 py-4 mt-16 flex justify-between text-zinc-600">
        <div className="flex gap-6">
          <span>© 2022 StudioDAO Backlot, LLC. All rights are reserved.</span>
          <a
            href="https://www.studiodao.xyz/privacy-policy"
            className="hover:underline hover:underline-offset-2"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.studiodao.xyz/terms-of-use"
            className="hover:underline hover:underline-offset-2"
          >
            Terms of Use
          </a>
        </div>
        <a
          href="https://juicebox.money/"
          className="hover:underline hover:underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Juicebox
        </a>
      </div>
    </div>
  );
};

export default HomePage;

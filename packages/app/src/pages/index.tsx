import { ApolloProvider } from "@apollo/client";
import { ConnectKitButton } from "connectkit";
import type { NextPage } from "next";

import { Button } from "../Button";
import apolloClient from "../graphql/apollo";
import { UserNftList } from "../UserNftList";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 flex flex-col relative py-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-grow flex flex-col md:flex-row md:items-center gap-2">
            <a href="#" className="flex-shrink-0">
              <img src="/logo.svg" className="w-48" alt="StudioDAO logo" />
            </a>
            <nav className="flex-grow md:flex md:items-center md:justify-center">
              <ul className="flex -m-3">
                <li>
                  <a
                    href="#"
                    className="inline-flex px-3 py-2 hover:underline hover:underline-offset-2"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex px-3 py-2 hover:underline hover:underline-offset-2"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex px-3 py-2 hover:underline hover:underline-offset-2"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex px-3 py-2 hover:underline hover:underline-offset-2"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, address, ensName }) => (
              <Button
                size="sm"
                variant={isConnected ? "secondary" : "primary"}
                className="self-start sm:self-auto max-w-[9rem]"
                onClick={show}
                pending={isConnecting}
              >
                <span className="flex-grow min-w-0 overflow-hidden text-ellipsis">
                  {isConnected ? ensName || address : "Connect"}
                </span>
              </Button>
            )}
          </ConnectKitButton.Custom>
        </div>
      </div>

      <div className="space-y-32 sm:space-y-48">
        <div
          className="md:min-h-[480px] lg:min-h-[640px] bg-center bg-cover bg-no-repeat flex flex-col"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="bg-zinc-800/90">
            <div className="max-w-5xl mx-auto px-6 flex justify-between py-4">
              <div>Current treasury cycle</div>
              <div className="hidden sm:block">Earn Green-light Power</div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-end items-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-900 md:from-transparent md:to-zinc-900" />
            <div className="relative max-w-5xl px-6 flex flex-col md:flex-row md:justify-center md:items-end gap-12 md:gap-24 py-12 -mb-16">
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

        <div className="max-w-5xl mx-auto px-6 space-y-16">
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

        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <div className="mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-dmserif text-white">Your Slate</h2>
            <p>
              Your super ticket collection. Support all our movies to multiply
              your green-light power.
            </p>
            <a
              href="#TODO"
              className="text-emerald-500 hover:underline hover:underline-offset-2"
            >
              Learn more
            </a>
            <ApolloProvider client={apolloClient}>
              <UserNftList />
            </ApolloProvider>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 space-y-16">
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
          <div className="space-y-8 sm:space-y-12">
            <div className="flex flex-col md:flex-row bg-black/20 rounded-lg overflow-hidden">
              <img
                src="/hero.png"
                className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
              />
              <div className="flex-grow flex flex-col justify-between p-8 md:p-12 gap-8">
                <div className="space-y-4">
                  <h5 className="font-dmserif text-3xl">
                    Unlikely Love Stories: Tender Vittles
                  </h5>
                  <p className="text-zinc-500">By Rosa Tran & Derek Smith</p>
                  <p>
                    From the artists and minds behind Robot Chicken, Anomalisa
                    and Final Space comes a slightly fucked-up, adorably twisted
                    take on love. Unlikely Love Stories is a darkly-comedic
                    animated anthology that explores the highest highs – and
                    very low lows – of unexpected love in the most unexpected
                    places.
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button size="sm">Contribute</Button>
                  <Button size="sm" variant="secondary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-black/20 rounded-lg overflow-hidden">
              <img
                src="/hero.png"
                className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
              />
              <div className="flex-grow flex flex-col justify-between p-8 md:p-12 gap-8">
                <div className="space-y-4">
                  <h5 className="font-dmserif text-3xl">
                    Unlikely Love Stories: Tender Vittles
                  </h5>
                  <p className="text-zinc-500">By Rosa Tran & Derek Smith</p>
                  <p>
                    From the artists and minds behind Robot Chicken, Anomalisa
                    and Final Space comes a slightly fucked-up, adorably twisted
                    take on love. Unlikely Love Stories is a darkly-comedic
                    animated anthology that explores the highest highs – and
                    very low lows – of unexpected love in the most unexpected
                    places.
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button size="sm">Contribute</Button>
                  <Button size="sm" variant="secondary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-black/20 rounded-lg overflow-hidden">
              <img
                src="/hero.png"
                className="flex-shrink-0 md:w-72 lg:w-96 h-56 md:h-auto aspect-square object-cover"
              />
              <div className="flex-grow flex flex-col justify-between p-8 md:p-12 gap-8">
                <div className="space-y-4">
                  <h5 className="font-dmserif text-3xl">
                    Unlikely Love Stories: Tender Vittles
                  </h5>
                  <p className="text-zinc-500">By Rosa Tran & Derek Smith</p>
                  <p>
                    From the artists and minds behind Robot Chicken, Anomalisa
                    and Final Space comes a slightly fucked-up, adorably twisted
                    take on love. Unlikely Love Stories is a darkly-comedic
                    animated anthology that explores the highest highs – and
                    very low lows – of unexpected love in the most unexpected
                    places.
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button size="sm">Contribute</Button>
                  <Button size="sm" variant="secondary">
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Button className="mx-auto" variant="secondary">
            View all projects
          </Button>
        </div>

        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="max-w-xl mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-dmserif text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
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
                  className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex px-4 sm:px-6 py-4 hover:underline hover:underline-offset-2"
                >
                  Discord
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="px-6 py-4 mt-16 flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-between text-zinc-600">
        <a
          href="https://juicebox.money/"
          className="hover:underline hover:underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Runs with Juicebox, secured by Ethereum
        </a>
        <div className="flex flex-col md:flex-row gap-x-6">
          <span>© 2022 StudioDAO Backlot, LLC.</span>
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
      </div>
    </div>
  );
};

export default HomePage;

import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { EthereumProviders } from "../EthereumProviders";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>StudioDAO</title>
      </Head>
      <EthereumProviders>
        <Component {...pageProps} />
      </EthereumProviders>
      <ToastContainer position="bottom-right" draggable={false} />
    </>
  );
};

export default App;

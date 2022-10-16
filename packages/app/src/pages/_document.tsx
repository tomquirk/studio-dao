import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="bg-zinc-900 text-white font-dmsans">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

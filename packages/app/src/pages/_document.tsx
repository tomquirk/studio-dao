import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="bg-zinc-900 text-zinc-300 font-dmsans leading-relaxed">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

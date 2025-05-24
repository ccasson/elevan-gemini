import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Elevan: Empowering OnlyFans creators to maximize their potential and earnings. Partner with us for expert management and growth strategies." />
        <meta name="keywords" content="OnlyFans agency, OnlyFans management, creator management, Elevan, content creator, social media growth" />
        {/* IMPORTANT: Create a favicon.ico file and place it in your `public` folder.
          You can generate one from an image (e.g., your logo) using an online favicon generator.
        */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Fonts are imported in globals.css now */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import Head from "next/head";
import { NextSeo } from "next-seo";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7c3aed" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextSeo
        title="Peyk Inc."
        description="Bridge the gap between idea and reality"
        canonical="https://peyk.io"
        openGraph={{
          url: "https://peyk.io/",
          title: "Peyk Inc.",
          description: "Bridge the gap between idea and reality",
          images: [{ url: "https://peyk.io/peyk_ico.png" }],
          site_name: "Peyk",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

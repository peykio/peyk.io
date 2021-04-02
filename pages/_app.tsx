import { NextSeo } from "next-seo";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
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
      />
      <Component {...pageProps} />
    </>
  );
}

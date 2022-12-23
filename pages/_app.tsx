import "../styles/globals.css";
import type { AppProps } from "next/app";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

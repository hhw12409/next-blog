import Head from "next/head";
import META_DATA from "../data/metadata";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{META_DATA.title}</title>
      </Head>
    </div>
  );
}

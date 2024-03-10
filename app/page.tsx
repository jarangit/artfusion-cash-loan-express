import Head from "next/head";
import Image from "next/image";
import Banner from "./components/banner";
import How from "./components/how";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cash Loans Express</title>
      </Head>
      <div className="min-h-screen">
        <Banner />
        <How />
      </div>
    </>
  );
}

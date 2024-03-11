import Head from "next/head";
import Image from "next/image";
import Banner from "./components/banner";
import How from "./components/how";
import Lean from "./components/lean";
import FAQ from "./components/FAQ";
import Column from "./components/column";

export default function Home() {
   var _lg_form_init_ = {
     aid: "13405",
     template: "elvis-us",
   };
  return (
    <>
      <Head>
        <title>Cash Loans Express</title>
      </Head>
      <Column className="min-h-screen gap-24">
        <Banner />
        <How />
        <Lean />
        <FAQ />
      </Column>
    </>
  );
}

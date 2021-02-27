import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { MainBlock } from "../components/MainBlock";
import { Filters } from "../components/Filters";

export default function Home() {
  return (
    <div>
      <Head>
        <title>UNTITLED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainBlock />
      <Filters
        filters={["Ярко-розовые", "Нежно-розовые", "Красные", "Бордовые"]}
      />
    </div>
  );
}

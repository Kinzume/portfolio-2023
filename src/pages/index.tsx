import Head from "next/head";
import Intro from "../components/Intro/Intro";
import { Featured } from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leander Abaya | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Leander Abaya - Web Developer Portfolio"
        />
      </Head>
      <main className="space-y-12 bg-background px-2 md:px-0">
        <Intro />
        <Featured />
      </main>
    </>
  );
}

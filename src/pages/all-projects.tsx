import Head from "next/head";
import { All } from "../components/Projects/Projects";

export default function Page() {
  return (
    <>
      <Head>
        <title>All Projects</title>
        <meta
          name="description"
          content="All projects completed by Leander Abaya"
        />
      </Head>
      <main className="bg-background py-12 px-2 md:px-0">
        <All />
      </main>
    </>
  );
}

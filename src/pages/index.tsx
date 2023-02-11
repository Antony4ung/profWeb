import Head from "next/head";
import { Barlow } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100","200","300","400","500"]
});

export default function Index() {
  return (
    <>
      <Head>
        <title>Aung Myat Thu</title>
      </Head>

      <nav>
        <Header />
      </nav>

      <main className={barlow.className}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

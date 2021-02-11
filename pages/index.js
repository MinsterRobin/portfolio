//import Head from 'next/head';
import styles from '../styles/Home.module.css';
import data from '../components/data.json';
import Navbar from '../components/navbar';
import About from "../components/about";
import Separator from "../components/separator";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div>
      <header>
        <title>{data.title}</title>
      </header>
      <body className={styles.mainContainer}>
        <Navbar />
        <About />
        <Separator />
        <Skills />
      </body>
    </div>
  )
}

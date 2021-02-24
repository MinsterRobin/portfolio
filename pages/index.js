//import Head from 'next/head';
import styles from '../styles/Home.module.css';
import data from '../components/data.js';
import Navbar from '../components/navbar';
import About from "../components/about";
import Separator from "../components/separator";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Exps from "../components/exps";
import Footer_js from "../components/footer"
import React, {useState} from "react";
import Language_Context from "../components/language-context";

export default function Home() {
    const [language, setLanguage] = useState("fr");
    return (
        <div>
            <header>
                <title>{data.title}</title>
            </header>
            <Language_Context.Provider value={[language, setLanguage]}>
                <body className={styles.mainContainer}>
                    <Navbar />
                    <div className={styles.c_content}>
                        <About />
                        <Separator />
                        <Skills />
                        <Separator />
                        <Exps/>
                        <Separator/>
                        <Contact />
                    </div>
                    <Footer_js />
                </body>
            </Language_Context.Provider>
        </div>
    )
}

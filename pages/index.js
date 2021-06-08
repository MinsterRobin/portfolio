import Head from 'next/head';
import data from '../components/data.js';
import Navbar from '../components/navbar';
import About from "../components/about";
import Separator from "../components/separator";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Exps from "../components/exps";
import Footer_js from "../components/footer"
import React, {useEffect, useState} from "react";
import Language_Context from "../components/language-context";
import styled, {ThemeProvider} from "styled-components";

const App_SC = styled.div`
    .mainContainer {
        width: 100%;
        color: white;
        margin: auto;
        overflow: hidden;
    }
    
    .c_main_content {
        display: flex;
        width: 100%;
        max-width: 1600px;
        min-width: 180px;
        margin: 70px auto 0;
        padding: 0 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    /* Medium devices up to 992px (Tablets) */
    @media (min-width: 768px) {
        .c_main_content {
            padding: 0 40px;
        }
        
        .name {
            font-size: 24px;
        }
    }
`;

const Home = () => {
    const [languageContext, setLanguageContext] = useState({
        currentLanguage: "fr",
        languageTransition_Animation_TextOpacity: "1",
        languageTransition_Animation_Delay: "300ms"
    });
    const [hasMounted, setHasMounted] = React.useState(false);

    useEffect(() => {
        setHasMounted(true);
    },[]);

    if (!hasMounted) {
        return null;
    }

    return (
        <App_SC>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_package/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <meta charSet="utf-8"/>

                <meta name="author" content="Robin Minster"/>
                <meta name="description"
                    content="Je suis Robin Minster et développeur Frontend freelance. Je développe des sites Web, interfaces ainsi que des maquettes."
                />
                <meta name="keywords"
                    content="Robin Minster, Robin, Minster, Robin Minster, robin minster, minster, minster developer, minster développeur, Robin Développeur, Developer, Web Developer, Reactjs / Nextjs Developer, Web, Développeur, Développeur Web, Developpeur Web, Full Stack, Full Stack Developer, Développeur Full Stack, ISEN, ISEN Brest, YNCREA, yncréa, YNCREA Ouest, Sopra Steria, Sopra-Steria, OpenClassrooms, Developer, Bootstrap, CSS3, Git, HTML5, Javascript, Linux, MySQL, Node.js, Node, Reactjs, Nextjs, React.js, Next.js, React, Next Node, Freelance Developer, Développeur Freelance, Best web developer, Best Freelance Developer, Experienced developer, Meilleur développeur freelance, Figma, UX, UI, maquette, Rennes"
                />

                <meta property="og:title" content={data.title} />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:type" content="website" />
                <meta property="og:description"
                    content="Développeur Fullstack Freelance. Je développe des sites Web, interfaces ainsi que des maquettes."
                />
                <meta property="og:url" content="https://robin-minster.fr" />
                <meta property="og:site_name" content="Robin Minster" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap"
                    rel="stylesheet"
                />

                <title>{data.title}</title>
            </Head>
            
            <ThemeProvider theme={languageContext}>
                <Language_Context.Provider value={[languageContext, setLanguageContext]}>
                    <main className="mainContainer">
                        <Navbar />
                        <div className="c_main_content">
                            <About />
                            <Separator />
                            <Skills />
                            <Separator />
                            <Exps/>
                            <Contact />
                        </div>
                        <Footer_js />
                    </main>
                </Language_Context.Provider>
            </ThemeProvider>
        </App_SC>
    )
};

export default Home;

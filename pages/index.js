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
import styled from "styled-components";

export default function Home() {
    const [language, setLanguage] = useState("fr");

    const App = styled.div`
        .mainContainer {
            width: 100%;
            background-color: #111111;
            color: white;
            margin: auto;
        }
        
        .c_content {
            display: flex;
            gap: 200px;
            width: 100%;
            max-width: 1600px;
            min-width: 180px;
            margin: 75px auto 0;
            padding: 0 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        /* Medium devices up to 992px (Tablets) */
        @media (min-width: 768px) {
            .c_content {
                padding: 0 40px;
            }
            
            .name {
                font-size: 24px;
            }
        }
    `;

    return (
        <App>
            <header>
                <title>{data.title}</title>
            </header>
            <Language_Context.Provider value={[language, setLanguage]}>
                <body className="mainContainer">
                    <Navbar />
                    <div className="c_content">
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
        </App>
    )
}

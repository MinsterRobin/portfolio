import {Link, animateScroll as Scroll} from "react-scroll";
import Image from "next/image";
import React, {useContext, useState} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useContext(Language_Context);

    const Mobile_Menu = styled.div`
        position: absolute;
        z-index: 10;
        max-width: 350px;
        max-height: ${({open}) => open ? "700px" : "0"};
        top: 20px;
        left: 20px;
        right: 20px;
        height: 70vh;
        
        display: flex;   
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        
        background: linear-gradient(270deg, rgba(23,23,23,0) 0%, #FDB7B7 20%, #F9DCDC 50%, #FDB7B7 80%, rgba(23,23,23,0) 100%);
        overflow: hidden;
        
        transition: max-height ease-in-out 0.8s;
      
        &::before {
            content: "";
            position: absolute;
            top: 0; right: 0; left: 0; bottom: 0;
            background: linear-gradient(270deg, #1B1B1B 0%, #131313 100%, #131313 100%);
            margin: 2px;
            border-radius: 4px;
        }
        
        @media (min-width: 992px) {
            display: none;
        }
        
        .mobile_link {
            z-index: 1;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0.2em;
        }
    `;

    const Nav_bar = styled.div`
        z-index: 2;
        position: fixed;
        height: 70px;
        width: 100%;
        top: 0;
        background: linear-gradient(#171717 1.84%, #0E0E0E 98.16%);
        box-shadow: 0 3px 9px #0E0E0E;
            
        .container {
            max-width: 1600px;
            width: 100%;
            height: 100%;
            top: 0;
            padding: 0 20px;
            margin: 0 auto;
        }
        
        .c_nav_desktop {
            height: 100%;
            display: none;
            justify-content: space-between;
            align-items: center;
        }
        
        .name {
            font-weight: 600;
            font-size: 20px;
            letter-spacing: 0.1em;
        }
        
        .c_links {
            display: grid;
            grid-template-columns: 150px 150px 60px 150px 150px;
            grid-template-rows: auto auto;
            align-items: center;
            width: 660px;
            margin-top: 13px;
            height: 40px;
        }
        
        .link {
            width: 150px;
            cursor: pointer;
            text-align: center;
            font-size: 16px;
        }
        
        #exps {
            grid-column: 4;        
        }
        
        #contact {
            grid-column: 5;  
        }
        
        .c_logo {
            position: relative;
            grid-row: 1;
            grid-column: 3;
            display: flex;
            justify-content: center;
            width: 60px;
        }
        
        .logo {
            width: 50px;
        }
        
        .eye {
            position: absolute;
            height: 7px;
            width: 7px;
            top: 10px;
            right: 22px;
            border-radius: 50%;
            background-color: #F9DCDC;
            transition: 0.4s ease-in-out;
        }
        
        .c_underline {
            display: flex;
            grid-column: 1/-1;
            height: 10px;
        }
        
        .underline { 
            margin-bottom: 0;
            margin-right: 0;
            border: none;
            height: 1px;
            background: linear-gradient(to right, #111111 15%, #FDB7B7 45%, #F9DCDC, #FDB7B7 55%, #171717 85%);
            width: 150px;
            transition: 0.4s ease-in-out;
        }
        
        #about:hover ~ .c_underline > hr {
            margin-right: 510px;
        }
        
        #skills:hover ~ .c_underline > hr {
            margin-right: 360px;
        }
        
        #exps:hover ~ .c_underline > hr {
            margin-right: 150px;
        }
        
        #about:hover ~ .c_logo > .eye {
            right: 27px;
        }
        
        #skills:hover ~ .c_logo > .eye {
            right: 24px;
        }
        
        #exps:hover ~ .c_logo > .eye {
            right: 20px;
        }
        
        #contact:hover ~ .c_logo > .eye {
            right: 17px;
        }
            
        .language {
            cursor: pointer;
            font-weight: normal;
            font-size: 14px;
        }
        
        #lg_en {
            text-decoration: ${language === "eng" ? 'overline' : ''};
        }
        
        #lg_fr {
            text-decoration: ${language === "fr" ? 'overline' : ''};
        }
        
        .c_nav_mobile {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .hamburger_menu {
            height: 100%;
            display: flex;
        }
        
        /* Medium devices up to 992px (Tablets) */
        @media (min-width: 768px) {
            .container {
                padding: 0 40px;
            }
        
            .name {
                font-size: 24px;
            }
        }
        
        /* Large devices up to 1200px (Desktops) */
        @media (min-width: 992px) {
            .c_nav_desktop {
                display: flex;
            }
        
            .c_nav_mobile {
                display: none;
            }
        }
    `;

    return(
        <Nav_bar>

            <Mobile_Menu open={open}>
                <Link
                    className="mobile_link" id="about"
                    to="s_about" smooth={true} offset={-80} duration={800}
                    onClick={() => setOpen(!open)} >
                    {data[language].nav.about}
                </Link>
                <Link
                    className="mobile_link" id="skills"
                    to="s_skills" smooth={true} offset={-200} duration={800}
                    onClick={() => setOpen(!open)} >
                    {data[language].nav.skills}
                </Link>
                <div className="c_logo"><img className="logo" src={"/logo-navbar.svg"} alt="Logo" /></div>
                <Link
                    className="mobile_link" id="exps"
                    to="s_exps" smooth={true} offset={-200} duration={800}
                    onClick={() => setOpen(!open)} >
                    {data[language].nav.exps}
                </Link>
                <Link
                    className="mobile_link" id="contact"
                    to="s_contact" smooth={true} offset={-200} duration={800}
                    onClick={() => setOpen(!open)} >
                    {data[language].nav.contact}
                </Link>
            </Mobile_Menu>

            <nav className="container">
                <div className="c_nav_desktop">
                    <a className="name" id="test">Robin Minster</a>
                    <div className="c_links">
                        <Link
                            className="link" id="about"
                            to="s_about" smooth={true} offset={-80} duration={800} >
                            {data[language].nav.about}
                        </Link>
                        <Link
                            className="link" id="skills"
                            to="s_skills" smooth={true} offset={-200} duration={800} >
                            {data[language].nav.skills}
                        </Link>

                        <Link
                            className="link" id="exps"
                            to="s_exps" smooth={true} offset={-200} duration={800} >
                            {data[language].nav.exps}
                        </Link>
                        <Link
                            className="link" id="contact"
                            to="s_contact" smooth={true} offset={-200} duration={800} >
                            {data[language].nav.contact}
                        </Link>
                        <div className="c_logo">
                            <img className="logo" src={"/Logo-No_eye.svg"} alt="Logo" />
                            <div className="eye" />
                        </div>

                        <div className="c_underline"><hr className="underline"/></div>
                    </div>

                    <a  className="language"
                        onClick={() => {
                            setLanguage(language === "fr" ? "eng" : "fr");
                        }}>
                        <span id="lg_en">EN</span> | <span id="lg_fr">FR</span>
                    </a>

                </div>


                <div className="c_nav_mobile">
                    <a className="name">Robin Minster</a>
                    <img className="logo" src={"/logo-navbar.svg"} alt="Logo Portfolio" />
                    <div className="hamburger_menu" onClick={() => setOpen(!open)}>
                        <Image src="/menu.svg" alt="Hamburger Menu" width="20px" height="20px"/>
                    </div>
                </div>
            </nav>
        </Nav_bar>
    );
};

export default Navbar;
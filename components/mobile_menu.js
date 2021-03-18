import {Link, animateScroll as Scroll} from "react-scroll";
import Image from "next/image";
import React, {useContext, useState} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";
import LanguageSelector from "./LanguageSelector";

const Mobile_Menu_SC = styled.div`
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    transform: translateX(${props => props.open ? "0vw" : "100vw"});
    
    background-color: #111111;
    
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    
    overflow: hidden;    
    
    transition: transform ease-in-out 400ms;
    
    @media (min-width: 992px) {
        display: none;
    }
    
    .mobile_link {
        z-index: 1;
        font-size: 20px;
        font-weight: 400;
    }
`;

const Mobile_Menu = (props) => {
    const [language] = useContext(Language_Context);

    return(
        <Mobile_Menu_SC open={props.open}>
            <Link
                className="mobile_link" id="about"
                to="s_about" smooth={true} offset={-80} duration={800}
                onClick={() => props.setOpen(!open)} >
                {data[language].nav.about}
            </Link>
            <Link
                className="mobile_link" id="skills"
                to="s_skills" smooth={true} offset={-200} duration={800}
                onClick={() => props.setOpen(!open)} >
                {data[language].nav.skills}
            </Link>
            <Link
                className="mobile_link" id="exps"
                to="s_exps" smooth={true} offset={-200} duration={800}
                onClick={() => props.setOpen(!open)} >
                {data[language].nav.exps}
            </Link>
            <Link
                className="mobile_link" id="contact"
                to="s_contact" smooth={true} offset={-200} duration={800}
                onClick={() => props.setOpen(!open)} >
                {data[language].nav.contact}
            </Link>
            <LanguageSelector />
        </Mobile_Menu_SC>
    );
};

export default Mobile_Menu;
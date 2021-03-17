import {Link, animateScroll as Scroll} from "react-scroll";
import Image from "next/image";
import React, {useContext, useState} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";

const Mobile_Menu_SC = styled.div`
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    transform: translateX(${props => props.open ? "0vw" : "100vw"});
    
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    
    // background: linear-gradient(to left, #F9DCDC 0%, #FDB7B7 35.94%, #131313 100%, #111111 100%);
    overflow: hidden;
    
    transition: transform ease-in-out 400ms;
  
    &::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        //background: linear-gradient(270deg, #1B1B1B 0%, #131313 100%, #131313 100%);
        background-color: #111111;
        margin: 1px;
        border-radius: 4px;
    }
    
    @media (min-width: 992px) {
        display: none;
    }
    
    .mobile_link {
        z-index: 1;
        font-size: 20px;
        font-weight: 400;
    }
    
    .language-selector {
        z-index: 1;
    }
`;

const Mobile_Menu = (props) => {
    const [language, setLanguage] = useContext(Language_Context);

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
            <a className="language-selector">EN | FR</a>
        </Mobile_Menu_SC>
    );
};

export default Mobile_Menu;
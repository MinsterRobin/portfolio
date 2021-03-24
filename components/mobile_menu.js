import React, {useContext} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";
import LanguageSelector from "./LanguageSelector";

const Mobile_Menu_SC = styled.div`
    position: absolute;    
    width: 100vw;
    height: calc(100vh - 70px);
    top: 70px;
    right: 0;
    transform: translateX(${props => props.open ? "0vw" : "100vw"});
    
    background: linear-gradient(#0E0E0E 0%, #111111 3%);
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    
    overflow: hidden;
    
    transition: transform ease-in-out 400ms;
    
    .c_mobile_links {
        margin: 0;
        height: 100%;
        max-height: 250px;
        display: flex;   
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    @media (min-width: 992px) {
        display: none;
    }
    
    .mobile_link {
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }
    
    .mobile_link:hover {
        opacity: 0.85;
        transition: 200ms ease-in-out opacity;
    }
`;

const Mobile_Menu = (props) => {
    const [language] = useContext(Language_Context);

    return(
        <Mobile_Menu_SC open={props.open}>
            <div className="c_mobile_links">
                <a
                    href="/#about"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[language].nav.about}
                </a>
                <a
                    href="/#skills"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[language].nav.skills}
                </a>
                <a
                    href="/#experiences"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[language].nav.exps}
                </a>
                <a
                    href="/#contact"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[language].nav.contact}
                </a>
                <LanguageSelector />
            </div>
        </Mobile_Menu_SC>
    );
};

export default Mobile_Menu;
import React, {useContext} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";
import LanguageSelector from "./LanguageSelector";
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";
import {animated, useSpring} from "react-spring";

const Mobile_Menu_SC = animated(styled.div`
    position: absolute;    
    width: 100vw;
    height: calc(100vh - 70px);
    top: 70px;
    right: 0;
    
    background: linear-gradient(#0E0E0E 0%, #111111 3%);
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    
    overflow: hidden;
    
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
`);

const MobileLink_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
        transition: 200ms ease-in-out opacity;
    }
`;

const Mobile_Menu = (props) => {
    const [languageContext] = useContext(Language_Context);
    const springTransition = useSpring({
        transform: props.open ? "translateX(0vw)" : "translate(100vw)",
    });

    return(
        <Mobile_Menu_SC style={springTransition} open={props.open}>
            <div className="c_mobile_links">

                <MobileLink_SC as="a"
                    href="/#about"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[languageContext.currentLanguage].nav.about}
                </MobileLink_SC>

                <MobileLink_SC as="a"
                    href="/#skills"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[languageContext.currentLanguage].nav.skills}
                </MobileLink_SC>

                <MobileLink_SC as="a"
                    href="/#experiences"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[languageContext.currentLanguage].nav.exps}
                </MobileLink_SC>

                <MobileLink_SC as="a"
                    href="/#contact"
                    className="mobile_link"
                    onClick={() => props.setOpen(!open)} >
                    {data[languageContext.currentLanguage].nav.contact}
                </MobileLink_SC>

                <LanguageSelector />

            </div>
        </Mobile_Menu_SC>
    );
};

export default Mobile_Menu;
import React, {useContext, useState} from "react";
import styled from "styled-components";
import Language_Context from "../components/language-context";
import data from "./data";
import Mobile_Menu from "./mobile_menu";
import HamburgerMenu from "./HamburgerMenu";
import LanguageSelector from "./LanguageSelector";
import {config, useSpring, animated } from 'react-spring';
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";

const Nav_bar = styled.div`
    z-index: 10;
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
    
    .link:hover {
        opacity: 0.85;
        transition: 300ms ease-in-out opacity;
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
        z-index: 10;
        position: absolute;
        height: 7px;
        width: 7px;
        top: 10px;
        right: 22px;
        border-radius: 50%;
        background-color: #F9DCDC;
        //transition: 0.4s ease-in-out;
    }
    
    .c_underline {
        display: flex;
        grid-column: 1/-1;
        height: 10px;
    }
    
    .underline { 
        margin-bottom: 0;
        //margin-right: 0;
        border: none;
        height: 1px;
        background: linear-gradient(to right, #111111 15%, #FDB7B7 45%, #F9DCDC, #FDB7B7 55%, #111111 85%);
        width: 150px;
    }
             
    .c_nav_mobile {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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

const A_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    width: 150px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [languageContext] = useContext(Language_Context);
    const [linkHoverPosition, setLinkHover] = useState(
        {
            underline_margin_right: "0px",
            eye_position_right: "22px"
        }
    );

    const underlinePropsSpring = useSpring( {
        marginRight: linkHoverPosition.underline_margin_right,
        config: config.slow
    });

    const springProps_Eye = useSpring({
        right: linkHoverPosition.eye_position_right,
        config: config.stiff
    });

    return (
        <Nav_bar>
            <Mobile_Menu open={open} setOpen={setOpen}/>
            <nav className="container">
                <div className="c_nav_desktop">
                    <p className="name">Robin Minster</p>
                    <div className="c_links">
                        <A_SC as="a"
                            href={"/#about"}
                            id="hover_about"
                            onMouseEnter={() => setLinkHover({
                                underline_margin_right: "510px",
                                eye_position_right: "27px"
                            })}
                            onMouseLeave={() => setLinkHover({
                                underline_margin_right: "0px",
                                eye_position_right: "22px"
                            })}
                        >
                            {data[languageContext.currentLanguage].nav.about}
                        </A_SC>

                        <A_SC as="a"
                            href="/#skills"
                            id="hover_skills"
                            onMouseEnter={() => setLinkHover({
                                underline_margin_right: "360px",
                                eye_position_right: "24px"
                            })}
                            onMouseLeave={() => setLinkHover({
                                underline_margin_right: "0px",
                                eye_position_right: "22px"
                            })}
                        >
                            {data[languageContext.currentLanguage].nav.skills}
                        </A_SC>

                        <A_SC as="a"
                            href="/#experiences"
                            id="hover_exps"
                            onMouseEnter={() => setLinkHover({
                                underline_margin_right: "150px",
                                eye_position_right: "20px"
                            })}
                            onMouseLeave={() => setLinkHover({
                                underline_margin_right: "0px",
                                eye_position_right: "22px"
                            })}
                        >
                            {data[languageContext.currentLanguage].nav.exps}
                        </A_SC>

                        <A_SC as="a"
                            href="/#contact"
                            id="hover_contact"
                            onMouseEnter={() => setLinkHover({
                                underline_margin_right: "0px",
                                eye_position_right: "17px"
                            })}
                            onMouseLeave={() => setLinkHover({
                                underline_margin_right: "0px",
                                eye_position_right: "22px"
                            })}
                        >
                            {data[languageContext.currentLanguage].nav.contact}
                        </A_SC>

                        <div className="c_logo">
                            <img className="logo" src={"/Logo-No_eye.svg"} alt="Logo" />
                            <animated.div style={springProps_Eye} className="eye" />
                        </div>

                        <div className="c_underline"><animated.hr style={underlinePropsSpring} className="underline"/></div>
                    </div>
                    <LanguageSelector/>
                </div>

                <div className="c_nav_mobile">
                    <p className="name">Robin Minster</p>
                    <img className="logo" src={"/logo-navbar.svg"} alt="Logo Portfolio" />
                    <HamburgerMenu open={open} setOpen={setOpen}/>
                </div>
            </nav>
        </Nav_bar>
    );
};

export default Navbar;
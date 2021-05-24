import data from "./data";
import Language_Context from "./language-context";
import {useContext, useRef, useState} from "react";
import styled from "styled-components";
import {CopyToClipboard} from "react-copy-to-clipboard";
import useIsInViewport from "./useIsInViewport";
import {animated} from "react-spring";
import SpringAnimation from "./Animations/SpringAnimation";

const Contact_SC = animated(styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 200px;
    
    .b_content {
        position: relative;
        width: 100%;
        max-width: 750px;
        border-radius: 5px;
        background: linear-gradient(270deg, #F9DCDC 0%, #FDB7B7 35.94%, #131313 100%, #111111 100%);
        box-shadow: 10px 0 15px #232323, -10px 0 15px #0B0B0B;                
        overflow: hidden;
    }
    
    .b_content::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: linear-gradient(270deg, #1B1B1B 0%, #131313 100%, #131313 100%);
        margin: 2px;
        border-radius: 4px;
    }
    
    .c_contact_content {
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    
    h3 {
        z-index: 0;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        margin: 0;
    }
    
    .b_button {     
        margin-top: 25px; 
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        background: linear-gradient(270deg, #F9DCDC 0%, #FDB7B7 35.94%, #171717 99%);
        padding: 2px;
    }
    
    .b_button::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: #171717;
        margin: 1px;
        border-radius: 2px;
    }
    
    .button:hover {
        transition: all 100ms ease-in-out;
        box-shadow: inset 2px 4px 5px #0B0B0B, inset -2px -4px 5px #232323;
    }
    
    .button {
        position: relative;
        padding: 7px 40px;
    
        background-color: transparent;
        font-weight: normal;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`);

const Text_SC = animated(styled.div`
        text-align: center;
        font-size: 24px;
        font-style: normal;
        letter-spacing: 0.2em;
        margin: 0 0 80px 0; 
`);

const ContactInfos_SC = styled.div`    
    position: absolute;

    z-index: ${props => props.isOpen ? "1" : "-1"};
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    max-width: 746px;
    margin: 2px;
    overflow: hidden;
    
    background: linear-gradient(to right, #1B1B1B 0%, #131313 100%, #131313 100%);
    opacity: ${props => props.isOpen ? "1" : "0"};
    transition: opacity 400ms ease-in-out;
    
    .info_h3 {
        font-size: 20px;
    }
`;

const Email_SC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    .c_email {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    
    .a_email {
        font-size: 16px;
    }
    
    .img_copy {
        padding: 0;
        margin: auto 0 auto 15px;
        height: 20px;
        cursor: pointer;
    }
    
    .img_copy:hover {
        opacity: 0.6;
        transition: opacity ease-in-out 100ms;
    }
    
    .c_underline_animate {
        height: 1px;
        position: relative;
        width: 100%;        
    }
`;

const Underline_SC = styled.hr`
    position: absolute;
    border: none;
    height: 1px;
    width: 100%;
    margin: 0;
    opacity: ${props => props.isHover ? "0" : "1"};
    background: linear-gradient(${props => props.direction === "left" ? "to left" : "to right"}, #F9DCDC 0%, #FDB7B7 35.94%, #171717 99%);
    transition: opacity 0.8s ease-in-out;
`;

const CopyLabel_SC = styled.p`
    font-size: 14px;
    font-weight: lighter;
    margin: 0;
    opacity: ${props => props.isCopied ? "1" : "0"};
    transition: opacity ease-in-out 500ms;
`;

const Contact = () => {
    const [language] = useContext(Language_Context);
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isCopied, setCopied] = useState(false);

    const wrapperRef = useRef(null);
    const isInViewport = useIsInViewport(wrapperRef);

    return (
        <Contact_SC className="c_section" id={"contact"} ref={wrapperRef}>
            <Text_SC as="h2" style={SpringAnimation(isInViewport)}>{data[language].contact.title}</Text_SC>

            <animated.div style={SpringAnimation(isInViewport,300)} className="b_content">
                <ContactInfos_SC isOpen={isOpen}>
                    <div className="c_contact_content">

                        <h3 className="info_h3">{data[language].contact.h3_info}</h3>

                        <Email_SC>

                            <div className="c_email">
                                <a
                                    className="a_email"
                                    href="mailto:minster.robin.pro@gmail.com"
                                    onMouseEnter={() => {setIsHover(!isHover)}}
                                    onMouseLeave={() => {setIsHover(!isHover)}}
                                >{data.email}</a>

                                <CopyToClipboard text={data.email}>
                                    <img src={"/Copy.svg"} alt="Copy To Clipboard" className="img_copy" onClick={() => {
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 3000);
                                    }}/>
                                </CopyToClipboard>
                            </div>

                            <div className="c_underline_animate">
                                <Underline_SC isHover={isHover} direction={"left"}/>
                                <Underline_SC isHover={!isHover} direction={"right"}/>
                            </div>

                            <CopyLabel_SC isCopied={isCopied}>{data[language].contact.copy_label}</CopyLabel_SC>

                        </Email_SC>

                    </div>
                </ContactInfos_SC>

                <div className="c_contact_content">
                    <h3>{data[language].contact.h3}</h3>
                    <div className="b_button">
                        <div className="button" onClick={() => {setIsOpen(!isOpen)}}>{data[language].contact.button}</div>
                    </div>
                </div>
            </animated.div>
        </Contact_SC>

    );
};

export default Contact;
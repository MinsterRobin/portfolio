import styled from "styled-components";
import React, {useState} from "react";
import ReactCursorPosition from "react-cursor-position";
import Social from "./Social";
import data from "./data";
import {Anim_FirstAppear_FadeInUp} from "./animations";
import {useSpring, animated} from "react-spring";

const Footer_SC = styled.div`
    margin-top: 150px;
    display: grid;
    width: 100%;
    background-color: #171717;
    
    .border_top {
        width: 100%;
        background: linear-gradient(to right, #111111, rgba(253, 183, 183, 0.8414) 36.46%, #F9DCDC);
        margin: 0;
        height: 2px;
        top: 0;
        border: none;
    }
    
    .c_footer_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0;
    }
    
    .logo {
        width: 266px;
    }
   
    .c_socials {
        margin-top: 70px;
        display: flex;
        max-width: 750px;
        padding: 0 20px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    .c_logo {
        position: relative;
    }   
        
    .c_eye {
        position: absolute;
        top: 35px;
        left: 90px;
        width: 125px;
        height: 70px;
    }
`;

const Eye = animated(styled.div`
    position: absolute;
`);

const mapRange = (amount, fromMin, fromMax, toMin, toMax) => {
    return toMin + (amount - fromMin) * (toMax - toMin) / (fromMax - fromMin);
};

const Footer = () => {
    return (
        <Footer_SC>
            <ReactCursorPosition>
                <hr className="border_top" />
                <CursorPositionGetter />
            </ReactCursorPosition>
        </Footer_SC>
    );
};

const CursorPositionGetter = (props) => {
    const originEyePos = {x: "45px", y: "13px"};
    const [eyePos, setEyePos] = useState(originEyePos);
    const [isHover, setIsHover] = useState(false);

    const springProps_Eye = useSpring({
        transform: isHover ? "translateX(" + eyePos.x + ") translateY(" + eyePos.y + ")" : "translateX(" + originEyePos.x + ") translateY(" + originEyePos.y + ")",
        config: { mass: 0.5, tension: 300, friction: 24 }
    });

    const {
        elementDimensions: {
            height = 0
        } = {},
        position: {
            x = 0,
            y = 0
        } = {}
    } = props;

    return (
        <div
            onMouseMove={() => {
                setEyePos({
                        x: mapRange(x, 0, window.innerWidth, 0, 85) + "px",
                        y: mapRange(y, 0, height, 0, 28) + "px",
                    });
                }}
            onMouseEnter={() => {setIsHover(true)}}
            onMouseLeave={() => {setIsHover(false)}}
        >
            <div className="c_footer_content">
                <div className="c_logo">
                    <img className="logo" src={"/Footer-Logo.svg"} alt="Footer Logo" />
                    <div className="c_eye">
                        <Anim_FirstAppear_FadeInUp animation_duration="1.5s" width="100%">
                        <Eye style={springProps_Eye} eyePos={eyePos} isHover={isHover}>
                            <img src={"/Eye.svg"} alt="logo-eye" />
                        </Eye>
                        </Anim_FirstAppear_FadeInUp>
                    </div>
                </div>

                <div className="c_socials">
                    {data.socials_list.map((social) => {
                        return (
                            <Social
                                key={social.key}
                                src_logo={social.src_logo}
                                alt={social.alt}
                                url={social.url}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Footer;
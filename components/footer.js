import styled from "styled-components";
import React, {useState} from "react";
import ReactCursorPosition from "react-cursor-position";

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
        gap: 70px;
    }
    
    .logo {
        width: 266px;
    }
   
    .c_socials {
        display: flex;
        max-width: 750px;
        padding: 0 20px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    
    .c_social {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
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
    
    .social_logo {
        width: 20px;
    }
    
    .social_ring {
        background-color: transparent;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all 0.8s;
    }
    
    .social_ring:hover {
        transform: rotateZ(20deg);
    }
`;

const Eye = styled.div`
    position: absolute;
    transform: translateX(${props => props.eyePos.x}) translateY(${props => props.eyePos.y});
    transition: ${props => props.isHover ? "0ms" : "300ms"} ease-in-out;
`;

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
    const [eyePos, setEyePos] = useState({x: "50px", y: "13px"});
    const [isHover, setIsHover] = useState(false);

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
            onMouseLeave={() => {
                setEyePos({x:"50px", y:"13px"});
                setIsHover( false);
            }}
        >
            <div className="c_footer_content">
                <div className="c_logo">
                    <img className="logo" src={"/Footer-Logo.svg"} alt="Footer Logo" />
                    <div className="c_eye">
                        <Eye eyePos={eyePos} isHover={isHover}>
                            <img src={"/Eye.svg"} alt="logo-eye" />
                        </Eye>
                    </div>
                </div>

                <div className="c_socials">
                    <div className="c_social" >
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Linkedin.svg"} alt={"Linkedin Logo"}/>
                    </div>
                    <div className="c_social" >
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Mail.svg"} alt={"Mail Logo"}/>
                    </div>
                    <div className="c_social" >
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Malt.svg"} alt={"Malt Logo"}/>
                    </div>
                    <div className="c_social" >
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Github.svg"} alt={"Github Logo"}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
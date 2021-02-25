import style from "../styles/Footer.module.css";
import styled from "styled-components";

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
    
    .c_content {
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
    
    .social_ring:hover{
        transform: rotateZ(20deg);
    }

`;

const Footer = () => {
    return (
        <Footer_SC >
            <hr className="border_top" />
            <div className="c_content">
                <img className="logo" src={"/Portfolio-Logo_Big.svg"} alt="Footer Logo" />
                <div className="c_socials">
                    <div className="c_social">
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Linkedin.svg"} alt={"Linkedin Logo"}/>
                    </div>
                    <div className="c_social">
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Mail.svg"} alt={"Mail Logo"}/>
                    </div>
                    <div className="c_social">
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Malt.svg"} alt={"Malt Logo"}/>
                    </div>
                    <div className="c_social">
                        <img className="social_ring" src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className="social_logo" src={"/Github.svg"} alt={"Github Logo"}/>
                    </div>
                </div>
            </div>
        </Footer_SC>
    );
};

export default Footer;
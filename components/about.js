import styled from "styled-components";
import data from "../components/data.js";
import Language_Context from "../components/language-context";
import {useContext, useRef} from "react";
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";
import {useSpring, animated, config} from "react-spring";
import useIsInViewport from "./useIsInViewport";

const About_SC = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    margin: 10px auto;

    width: 100%;
    min-width: 180px;
    
    .c_grid {
        display: grid;
        grid-template: auto 1fr auto  / 1fr;        
        width: 100%;
        gap: 40px;
    }
    
    .child_1 {
        position: relative;
    }
    
    .child_2 {
        position: relative;
    }
    
    .child_3 {
        position: relative;
    }
    
    .b_img {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(to left, #F9DCDC 0%, #FDB7B7 35.94%, #131313 100%, #111111 100%);
        box-shadow: 7px 0 15px #232323, -10px 0 15px #0B0B0B;
        z-index: 1;
    }
    
    .b_img::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: linear-gradient(270deg, #1B1B1B 0%, #131313 100%, #131313 100%);
        margin: 2px;
        border-radius: 4px;
    }
    
    .c_img {
        position: relative;
        margin: 40px;
        width: 100%;
        height: 100%;
        max-width: 450px;
        max-height: 243px;
    }
    
    /*TODO fusionner avec c_img ?*/
    .img {
        width: 100%;
        height: 100%;
    }
    
    .h1_span {
        font-weight: normal;
        font-size: 24px;
        letter-spacing: initial;
        margin: auto;
    }
    
    .h2 {
        font-weight: normal;
        font-size: 16px;
        margin: auto;
    }
    
    .h3 {
        position: relative;
        text-align: left;
        font-size: 16px;
        font-weight: normal;
        margin: auto;
    }
    
    /* Medium devices up to 992px (Tablets) */
    @media (min-width: 768px) {
        .child_1 {
            grid-column: 1/-1;
        }
    
        .c_grid {
            grid-template: auto 1fr / repeat(2, 1fr);
        }
    
        .h2 {
            font-size: 24px;
        }
    
        .h1_span {
            font-size: 40px;
            letter-spacing: 0.08em;
        }
    }
    
    /* Large devices up to 1200px (Desktops) */
    @media (min-width: 992px) {
        .child_1 {
            grid-column: auto;
        }
    
        .child_2 {
            grid-row: 1/-1;
        }
    }
    
    @media (min-height: 700px) {
        align-items: center;
        height: 86vh;
    }
`;

const H1_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.08em;
    margin: auto;
`;

const H2_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-weight: normal;
    font-size: 16px;
    margin: auto;
`;

const About = () => {
    const [languageContext] = useContext(Language_Context);

    const springProps_FadeIn_Right = (delay) => {
        return useSpring({
            from: {
                transform: "translate(-10%, 0)",
                opacity: 0,
                overflow: "hidden",
            },
            to: {
                transform: "translate(0, 0)",
                opacity: 1,
                overflow: "hidden",
            },
            overflow: "hidden",
            delay: delay ? delay : 200,
            config: config.slow,
        });
    };

    const springProps_FadeIn_Top = (delay) => {
        return useSpring({
            from: {
                transform: "translate(0, 10%)",
                opacity: 0
            },
            to: {
                transform: "translate(0, 0)",
                opacity: 1
            },
            delay: delay ? delay : 200,
            config: config.slow,
        });
    };


    return (

        <About_SC id="about">
            <div className="c_grid">

                <animated.div className="child_1" style={springProps_FadeIn_Right(200)}>
                    <H1_SC className="h1">
                        {data[languageContext.currentLanguage].about.h1}<br/><span className="h1_span">{data[languageContext.currentLanguage].about.h1_span}</span>
                    </H1_SC>
                </animated.div>

                <div className="child_2">
                    <div  className="b_img">
                        <animated.div style={springProps_FadeIn_Top(400)} className="c_img">
                            <img className="img" src={"/Portfolio-Logo_Big.svg"} alt="Logo Large"/>
                        </animated.div>
                    </div>
                </div>

                <animated.div className="child_3" style={springProps_FadeIn_Right(600)}>
                    <H2_SC className="h2">{data[languageContext.currentLanguage].about.h2}</H2_SC>
                </animated.div>

            </div>
        </About_SC>

    )
};

export default About;
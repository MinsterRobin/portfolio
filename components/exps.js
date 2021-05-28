import Exp_Card from "../components/exp_card";
import styled from "styled-components";
import data from "../components/data.js";
import Language_Context from "./language-context";
import React, {useContext, useRef} from "react";
import useIsInViewport from "./useIsInViewport";
import {animated} from "react-spring";
import SectionTitle from "./SectionTitle";

/*------------------ STYLE ------------------*/
const Exps_Section = animated(styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 200px;
    overflow: hidden;
    
    h2 {
        text-align: center;
        font-size: 24px;
        font-style: normal;
        letter-spacing: 0.2em;
        margin: 0 0 80px 0;
    }
`);

const Card_Grid = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    
    .container {
        width: 450px;
    }
    
    @media (min-width: 579px) {
        grid-auto-rows: 150px;
    }
`;

const Deck = styled.hr `
    display: none;
    z-index: 1;

    width: 100%;
    max-width: 600px;
    height: 2px;
    
    background: linear-gradient(to right, #111111, #FDB7B7 35%, #F9DCDC 50%, #FDB7B7 65%, #111111);
    box-shadow: 0 -2px 5px #252525, 0 2px 5px #000000;
    margin: 0;
    border: transparent;
    
    @media (min-width: 579px) {
        display: initial;
    }
`;

/*------------------ COMPONENT ------------------*/
const Exps = () => {
    const [languageContext] = useContext(Language_Context);
    const wrapperRef = useRef(null);
    const isInViewport = useIsInViewport(wrapperRef);

    return(
        <Exps_Section id={"experiences"} ref={wrapperRef}>

            <SectionTitle>{data[languageContext.currentLanguage].exps.title}</SectionTitle>

            <Card_Grid>
                {data[languageContext.currentLanguage].exps.cards.map((card, index)=> {
                    return (
                        <Exp_Card
                            key={index}
                            src_logo={card.src_logo} alt_logo={card.alt_logo}
                            title={card.title} subtitle={card.subtitle}
                            description={card.description}
                            technos_list={card.technos_list}
                            appearance_animation_trigger={isInViewport}
                            appearance_animation_delay={200 + ((data[languageContext.currentLanguage].exps.cards.length * 200) - (index * 200) )}
                        />
                    )
                })}
            </Card_Grid>
            <Deck/>
        </Exps_Section>
    );
};

export default Exps;
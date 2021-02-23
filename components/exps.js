import Exp_Card from "../components/exp_card";
import styled from "styled-components";
import data from "../components/data.js";
import { v4 as uuidv4 } from 'uuid';

/*------------------ STYLE ------------------*/
const Exps_Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    h2 {
        text-align: center;
        font-size: 24px;
        font-style: normal;
        letter-spacing: 0.2em;
        margin: 0 0 80px 0;
    }
`;

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

const Deck = styled.div `
    display: none;
    z-index: 1;
    height: 240px;
    width: 100%;
    max-width: 600px;
    background-color: #111111;
    
    .deck_hr {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #111111, #FDB7B7 35%, #F9DCDC 50%, #FDB7B7 65%, #111111);
        box-shadow: 0 -2px 5px #252525, 0 2px 5px #000000;
        margin: 0;
        border: transparent;
    }
    
    @media (min-width: 579px) {
        display: initial;
    }
`;

/*------------------ COMPONENT ------------------*/
const Exps = () => {
    return(
        <Exps_Section id={"s_exps"}>
            <h2>Expériences</h2>
            <Card_Grid>
                {data.exps.cards.map((card)=> {
                    return (
                        <Exp_Card
                            key={uuidv4()}
                            src_logo={card.src_logo} alt_logo={card.alt_logo}
                            title={card.title} subtitle={card.subtitle}
                            description={card.description}
                            technos_list={card.technos_list}
                        />
                    )
                })}
            </Card_Grid>
            <Deck>
                <hr className="deck_hr" />
            </Deck>
        </Exps_Section>
    );
};

export default Exps;
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import {animated, useSpring} from "react-spring";
import SpringAnimation from "./Animations/SpringAnimation";
import {useState} from "react";
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";

const Exp_Card_SC = animated(styled.div`
    width: 100%;
    max-width: 450px;
    perspective: 400px;
    
    .c_card {
        min-height: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    
        border-radius: 16px;
        background: linear-gradient(180deg, #F9DCDC 0%, rgba(225, 167, 165, 0) 72.4%);
        box-shadow: 0 -10px 8px #0B0B0B;
    }
    
    
    .c_card::before {
        content: "";
        position: absolute;
        top: 0; right: 0; left: 0; bottom: 0;
        background: linear-gradient(0deg, #111111 19.47%, #171717 98.68%);
        margin: 2px;
        border-radius: 15px;
    }
   
    .card_content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
        gap: 18px;
    }
    
    .img {
        max-width: 180px;
        max-height: 50px;
    }
    
    .c_title {
        display: flex;
        flex-direction: column;
    }
    
    .hr {
        width: 150px;
    }
    
    .c_list_technos {
        display: flex;
        flex-wrap: wrap;    
        justify-content: center;
        gap: 10px;
        max-width: 300px;
    }
    
    .c_list_technos > p {
        margin: 0;
        font-size: 16px;
        font-weight: 300;
        text-decoration: underline;
    }
`);

const H3_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-size: 20px;
    font-weight: 500;
    margin: 0;  
`;

const P_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-size: 16px;
    font-weight: 300;
    margin: 0;
`;

const Exp_card = (props) => {
    const [cardIsHover, setCardIsHover] = useState(false);

    const springProps_ExpCard_UpTranslation = useSpring({
        transform: cardIsHover ? "scale(1.02, 1.02) translate(0, -240px) rotateX(1deg)" : "scale(1, 1) translate(0, 0px) rotateX(-1deg)",
        config: { mass: 1, tension: 100, friction: 16 }
    });

    return (
        <Exp_Card_SC
            onMouseEnter={() => setCardIsHover(true)}
            onMouseLeave={() => setCardIsHover(false)}
            style={SpringAnimation(props.appearance_animation_trigger, props.appearance_animation_delay)}>

            <animated.div className="c_card" style={springProps_ExpCard_UpTranslation}>
                <div className="card_content">
                    <img className="img" src={props.src_logo} alt={props.alt_logo}/>

                    <div className="c_title">
                        <H3_SC className="h3">{props.title}</H3_SC>
                        <hr className="hr" />
                        <H3_SC className="h3">{props.subtitle}</H3_SC>
                    </div>
                    <P_SC className="p">{props.description}</P_SC>

                    <div className="c_list_technos">
                        {props.technos_list.map((item) => {
                            return <p key={uuidv4()}>{item}</p>
                        })}
                    </div>
                </div>
            </animated.div>
      </Exp_Card_SC>
  );
};

export default Exp_card;
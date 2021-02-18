import style from "../styles/Exps.module.css";
import Exp_Card from "../components/exp_card";
import styled from "styled-components";
import data from "../components/data.js";

/*const C_grid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 200px);
    
    .cell1 {
        width: 450px;
        transition: all 0.8s;
    }
    
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;      
        background-color: red;
    }
    
    .cell2 {
        z-index: 2;
        width: 450px;
        background-color: blue;
    }
    
    .cell1:hover {
        transform: scale(1.02, 1.02) translate(0, -240px) rotateX(1deg);
    }
`;*/

const Card_Grid = styled.div`
    display: grid;
    grid-auto-rows: 150px;
    
    .container {
        width: 450px;
    }
`;

const Deck = styled.div `
    z-index: 4;
    height: 250px;
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
    
    .deck_body {
    
    }
`;

const Exps = () => {
    return(
        <div className={style.c_section} id={"s_exps"}>
            <h2 className={style.h2}>Expériences</h2>
                <Card_Grid>
                    {data.exps.cards.map((card)=> {
                        return (
                            <Exp_Card
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
                    <div className="deck_body" />
                </Deck>


            {/*<div className={style.c_cards}>*/}
{/*                <Exp_Card top={@100px} bot={"inherit"}/>
                <Exp_Card top={"inherit"} bot={0}/>*/}
{/*                <div className={style.c_card_transform_1}>
                    <div className={style.c_card}>
                        <div className={style.card_content}>
                            <img className={style.img} src={"/Logo_Sopra-Steria.svg"} alt="Logo Sopra-Steria"/>
                            <div className={style.c_title}>
                                <h3 className={style.h3}>Développeur Back-End</h3>
                                <hr className={style.hr} />
                                <h3 className={style.h3}>Stage technicien</h3>
                            </div>
                            <p className={style.p}><b>S</b>opra Steria a été retenue fin 2012 pour réaliser l’architecture et l’intégration du <b>S</b>ystème d’<b>I</b>nformation des <b>A</b>rmées (<b>SIA</b>). Dans le but d’optimiser l’indutrialisation du projet et sa gestion, <b>Sopra Steria</b> développe ses propres outils couplés à la suite logiciel <b>IBM Jazz</b>. J’ai pu participer au développement de ces outils.</p>
                            <div className={style.c_list_technos}>
                                <p>Docker</p>
                                <p>SoapUI</p>
                                <p>IBM Jazz</p>
                                <p>Jenkins</p>
                                <p>JSON</p>
                                <p>XML</p>
                                <p>Java</p>
                            </div>
                        </div>
                    </div>
                </div>*/}

{/*                <div className={style.c_card_transform_2}>
                    <div className={style.c_card}>
                        <div className={style.card_content}>
                            <img className={style.img} src={"/Logo_Sopra-Steria.svg"} alt="Logo Sopra-Steria"/>
                            <div className={style.c_title}>
                                <h3 className={style.h3}>Développeur Back-End</h3>
                                <hr className={style.hr} />
                                <h3 className={style.h3}>Alternant technicien</h3>
                            </div>
                            <p className={style.p}>J’ai pu intégrer un projet initié en 2009 consistant à fournir un suivi technique de l’application <b>SIM@T</b> (<b>S</b>ystème d’Information de la <b>MA</b>intenance <b>T</b>errestre) dans le but de le maintenir en condition opérationnelle en le modernisant et en le corrigeant selon les demandes de la <b>SIMMT</b>.</p>
                            <div className={style.c_list_technos}>
                                <p>SVN</p>
                                <p>SoapUI</p>
                                <p>Oracle SQL Developer</p>
                                <p>Tomcat</p>
                                <p>Maven</p>
                                <p>J2EE</p>
                                <p>IntelliJ</p>
                                <p>ALM HP</p>
                            </div>
                        </div>
                    </div>
                </div>*/}

{/*                <div className={style.c_card_deck}>
                    <hr className={style.card_deck_hr}/>
                    <div className={style.card_deck_hidder} />
                </div>*/}
{/*            </div>*/}

        </div>
    );
};

export default Exps;
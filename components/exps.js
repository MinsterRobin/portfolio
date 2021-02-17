import style from "../styles/Exps.module.css";

const Exps = () => {
    return(
        <div className={style.c_section} id={"s_exps"}>
            <h2 className={style.h2}>Expériences</h2>
            <div className={style.c_cards}>

                <div className={style.c_card_transform_1}>
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
                </div>

                <div className={style.c_card_transform_2}>
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
                </div>

                <div className={style.c_card_deck}>
                    <hr className={style.card_deck_hr}/>
                    <div className={style.card_deck_hidder} />
                </div>
            </div>

        </div>
    );
};

export default Exps;
import style from "../styles/About.module.css";
/*import Image from "next/image"*/

const About = () => {
    return (

        <div className={style.c_section}>

            {/*DESKTOP VERSION*/}
{/*            <div className={style.c_desktop}>
                <div className={style.b_img}>
                    <div className={style.c_img}><Image className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large" layout="fill" /></div>
                </div>
                <div className={style.c_bio}>
                    <h1 className={style.h1}>Hello ! Je suis Robin. Je suis un développeur Web full-stack.</h1>

                    <h2 className={style.h2}>Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. En tant que développeur React, je me propose pour mener à bien vos projets !</h2>
                </div>
            </div>*/}

            {/*TABLET VERSION*/}
{/*            <div className={style.c_tablet}>
                <h1 className={style.h1_tablet}>Hello ! Je suis Robin. Je suis un développeur Web full-stack.</h1>
                <div className={style.c_sub}>
                    <div className={style.b_img}>
                        <div className={style.c_img}><Image className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large" layout="fill"/></div>
                    </div>

                    <div className={style.c_bio}>
                        <h2 className={style.h2}>Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. En tant que développeur React, je me propose pour mener à bien vos projets !</h2>
                    </div>
                </div>
            </div>*/}

            {/*GRID LAYOUT WRAP*/}
            <div className={style.c_grid}>
                <div className={style.child_1}><h1 className={style.h1}>Hello ! Je suis Robin.<br/> <span className={style.h1_span}>Je suis un développeur Web full-stack.</span></h1></div>
                <div className={style.child_2}>
                    <div className={style.b_img}>
                        <div className={style.c_img}><img className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large"/></div>
                    </div>
                </div>
                <div className={style.child_3}><h2 className={style.h2}>Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. <br/> <br/> En tant que développeur React, je me propose pour mener à bien vos projets !</h2></div>
            </div>


            {/*MOBILE VERSION*/}
{/*            <div className={style.c_mobile}>
                <div>
                    <h1 className={style.h1}>Hello ! Je suis Robin.</h1>
                    <h2 className={style.h2}>Je suis un développeur Web full-stack.</h2>
                </div>
                <div className={style.c_img}><Image className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large" layout="fill" /></div>
                <div className={style.b_img}>
                    <h3 className={style.h3}>Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. En tant que développeur React, je me propose pour mener à bien vos projets !</h3>
                </div>
            </div>*/}

            {/*TEST VERSION*/}
{/*            <div className={style.c_test}>
                <div className={style.c_1}>123456789</div>
                <div className={style.c_2}>2dsjfhjskdfjf lskdf ljqsmf sdf </div>
            </div>*/}
        </div>
    );
};

export default About;
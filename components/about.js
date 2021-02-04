import style from "../styles/About.module.css";
import Image from "next/image"

const About = () => {
    return (

        <div className={style.c_section}>
            <div className={style.b_img}>
                <div className={style.c_img}><Image className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large" layout="fill" /></div>
            </div>
            <div className={style.c_bio}>
                <h1 className={style.h1}>Hello ! Je suis Robin. Je suis un développeur Web full-stack.</h1>
                <h2 className={style.h2}>Jeune auto-entrepreneur passionné par l’informatique et les nouvelles technologies, je suis titulaire d’un diplôme d’ingénieur spécialisé en génie logiciel. En tant que développeur React, je me propose pour mener à bien vos projets !</h2>
            </div>
        </div>
    );
};

export default About;
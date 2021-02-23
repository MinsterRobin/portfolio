import style from "../styles/About.module.css";
import data from "../components/data.js";
import Language_Context from "../components/language-context";
import {useContext} from "react";

const About = () => {
    const [language] = useContext(Language_Context);
    return (
        <div className={style.c_section} id={"s_about"}>

            {/*GRID LAYOUT WRAP*/}
            <div className={style.c_grid}>
                <div className={style.child_1}><h1 className={style.h1}>{data[language].about.h1}<br/> <span className={style.h1_span}>{data[language].about.h1_span}</span></h1></div>
                <div className={style.child_2}>
                    <div className={style.b_img}>
                        <div className={style.c_img}><img className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large"/></div>
                    </div>
                </div>
                <h2 className={style.h2}>{data[language].about.h2}</h2>
            </div>

        </div>
    );
};

export default About;
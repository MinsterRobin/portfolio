import style from "../styles/About.module.css";
/*import Image from "next/image"*/
import data from "../components/data";

const About = () => {
    return (

        <div className={style.c_section}>

            {/*GRID LAYOUT WRAP*/}
            <div className={style.c_grid}>
                <div className={style.child_1}><h1 className={style.h1}>{data.about.h1}<br/> <span className={style.h1_span}>{data.about.h1_span}</span></h1></div>
                <div className={style.child_2}>
                    <div className={style.b_img}>
                        <div className={style.c_img}><img className={style.img} src={"/Portfolio-Logo_Big.svg"} alt="Logo Large"/></div>
                    </div>
                </div>
                <h2 className={style.h2}>{data.about.h2}</h2>
            </div>

        </div>
    );
};

export default About;
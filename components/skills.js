import style from "../styles/Skills.module.css";
import data from "./data";
import Language_Context from "./language-context";
import {useContext} from "react";

const Skills = () => {
    const [language] = useContext(Language_Context);

    return (
        <div className={style.c_section} id={"s_skills"}>
            <h2 className={style.h2}>Compétences</h2>
            <div className={style.c_grid}>

                <div className={style.child_1}>
                    <div className={style.c_skill_hero}>
                        <h3 className={style.h3}>{data[language].skills.developer.title}</h3>
                        <img src={data[language].skills.developer.src_logo} alt={data[language].skills.developer.alt_logo} className={style.img}/>
                    </div>
                    <div className={style.c_skill_list}>
                        {data[language].skills.developer.skills_list.map((skill) => {
                            return(<p className={style.p}>{skill}</p>);
                        })}
                    </div>
                </div>

                <div className={style.child_2}>
                    <div className={style.c_skill_list}>
                        {data[language].skills.designer.skills_list.map((skill) => {
                            return(<p className={style.p}>{skill}</p>);
                        })}
                    </div>
                    <div className={style.c_skill_hero}>
                        <h3 className={style.h3}>{data[language].skills.designer.title}</h3>
                        <img src={data[language].skills.designer.src_logo} alt={data[language].skills.designer.alt_logo} className={style.img}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
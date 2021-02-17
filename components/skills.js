import style from "../styles/Skills.module.css";

const Skills = () => {
  return (
      <div className={style.c_section} id={"s_skills"}>
          <h2 className={style.h2}>Compétences</h2>
          <div className={style.c_grid}>
              <div className={style.child_1}>
                  <div className={style.c_skill_hero}>
                      <h3 className={style.h3}>Développeur</h3>
                      <img src={"/Pf-Developer_Icon.svg"} alt="Developer_Icon" className={style.img}/>
                  </div>
                  <div className={style.c_skill_list}>
                      <p className={style.p}>React.js</p>
                      <p className={style.p}>Styled Components</p>
                      <p className={style.p}>Express</p>
                      <p className={style.p}>MongoDB</p>
                      <p className={style.p}>MySQL</p>
                      <p className={style.p}>Git</p>
                  </div>
              </div>
              <div className={style.child_2}>
                  <div className={style.c_skill_list}>
                      <p className={style.p}>Figma</p>
                      <p className={style.p}>Dessin Vectoriel</p>
                      <p className={style.p}>Mockup</p>
                      <p className={style.p}>Wireframing</p>
                      <p className={style.p}>UI Design</p>
                  </div>
                  <div className={style.c_skill_hero}>
                      <h3 className={style.h3}>Designer</h3>
                      <img src={"/Pf-Designer_Icon.svg"} alt="Developer_Icon" className={style.img}/>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Skills;
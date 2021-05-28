import styled from "styled-components";
import data from "./data";
import Language_Context from "./language-context";
import {v4 as uuidv4} from "uuid";
import React, {useContext, useRef} from "react";
import useIsInViewport from "./useIsInViewport";
import Text_LanguageBased_OpacityTransition_SC from "./Text_LanguageBased_OpacityTransition_SC";
import SectionTitle from "./SectionTitle";
import SpringAnimation from "./Animations/SpringAnimation";
import {animated} from "react-spring";

const Skills_SC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 200px;

    .c_grid {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
    
        width: 100%;
        height: 400px;
        max-width: 400px;
    }
    
    .child_1 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    
        border: 2px solid;
        border-image: linear-gradient(27deg, #F9DCDC 0%, #FDB7B7 20.39%, #111111 50%) 1;
        background: linear-gradient(27deg, #171717 0%, #111111 50%);
        box-shadow: -10px 6px 10px #0B0B0B;
    }
    
    .child_2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    
        border: 2px solid;
        border-image: linear-gradient(207deg, #F9DCDC 0%, #FDB7B7 20.39%, #111111 50%) 1;
        background: linear-gradient(207deg, #171717 0%, #111111 50%);
        box-shadow: 10px -1px 10px -7px #000000;
    }
    
    .c_skill_hero {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 0;
    }
    
    .c_skill_list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .p {
        margin: 3px 0;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
    }
       
    .img {
        height: 50px;
    }        
`;

const H3_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    text-decoration: underline;
    margin: 0;
    height: 40%;
`;

const C_Skill_List_SC = styled(Text_LanguageBased_OpacityTransition_SC)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Skills = () => {
    const [languageContext] = useContext(Language_Context);
    const wrapperSkillsLine1_Ref = useRef(null);
    const wrapperSkillsLine2_Ref = useRef(null);
    const skillsLine1_isInViewport = useIsInViewport(wrapperSkillsLine1_Ref);
    const skillsLine2_isInViewport = useIsInViewport(wrapperSkillsLine2_Ref);

        return (
            <Skills_SC id={"skills"}>

                <SectionTitle>{data[languageContext.currentLanguage].skills.title}</SectionTitle>

                <animated.div className="c_grid">
                    <div className="child_1" ref={wrapperSkillsLine1_Ref}>
                        <div className="c_skill_hero">
                            <H3_SC><animated.div style={SpringAnimation(skillsLine1_isInViewport, 300)}>{data[languageContext.currentLanguage].skills.developer.title}</animated.div></H3_SC>
                            <animated.img style={SpringAnimation(skillsLine1_isInViewport, 400)} src={data[languageContext.currentLanguage].skills.developer.src_logo} alt={data[languageContext.currentLanguage].skills.developer.alt_logo} className="img"/>
                        </div>
                        <C_Skill_List_SC>
                            {data[languageContext.currentLanguage].skills.developer.skills_list.map((skill, index) => {
                                return(<animated.p style={SpringAnimation(skillsLine1_isInViewport, (500 + 100 * index))} className="p" key={uuidv4()}>{skill}</animated.p>);
                            })}
                        </C_Skill_List_SC>
                    </div>


                    <div className="child_2" ref={wrapperSkillsLine2_Ref}>
                        <C_Skill_List_SC>
                            {data[languageContext.currentLanguage].skills.designer.skills_list.map((skill, index) => {
                                return(<animated.p style={SpringAnimation(skillsLine2_isInViewport, (500 + 100 * index))} className="p" key={uuidv4()} >{skill}</animated.p>);
                            })}
                        </C_Skill_List_SC>
                        <div className="c_skill_hero">
                            <H3_SC className="h3"><animated.div style={SpringAnimation(skillsLine2_isInViewport, 300)}>{data[languageContext.currentLanguage].skills.designer.title}</animated.div></H3_SC>
                            <animated.img style={SpringAnimation(skillsLine2_isInViewport, 400)} src={data[languageContext.currentLanguage].skills.designer.src_logo} alt={data[languageContext.currentLanguage].skills.designer.alt_logo} className="img"/>
                        </div>
                    </div>
                </animated.div>

            </Skills_SC>
    );
};

export default Skills;
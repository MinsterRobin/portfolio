import styled from "styled-components";
import data from "./data";
import Language_Context from "./language-context";
import {v4 as uuidv4} from "uuid";
import useIsInViewport from "use-is-in-viewport";
import {Anim_FirstAppear_FadeInUp, FadeIn} from "./animations";
import {useRef, useState, useContext, useEffect} from "react";

const Skills_SC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 200px;
    text-align: center;
    
    .h2 {
        font-size: 30px;
        font-style: normal;
        letter-spacing: 0.2em;
        margin: 0 0 80px 0;
    }
    
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
    
    .h3 {
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        text-decoration: underline;
        margin: 0;
        height: 40%;
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

const Skills = () => {
    const [language] = useContext(Language_Context);

        return (
            <Anim_FirstAppear_FadeInUp animation_duration="1.5s">
                <Skills_SC id={"skills"}>
                    <h2 className="h2">{data[language].skills.title}</h2>

                    <div className="c_grid">

                            <div className="child_1">
                                <div className="c_skill_hero">
                                    <h3 className="h3">{data[language].skills.developer.title}</h3>
                                    <img src={data[language].skills.developer.src_logo} alt={data[language].skills.developer.alt_logo} className="img"/>
                                </div>
                                <div className="c_skill_list">
                                    {data[language].skills.developer.skills_list.map((skill) => {
                                        return(<p key={uuidv4()} className="p">{skill}</p>);
                                    })}
                                </div>
                            </div>


                            <div className="child_2">
                                <div className="c_skill_list">
                                    {data[language].skills.designer.skills_list.map((skill) => {
                                        return(<p key={uuidv4()} className="p">{skill}</p>);
                                    })}
                                </div>
                                <div className="c_skill_hero">
                                    <h3 className="h3">{data[language].skills.designer.title}</h3>
                                    <img src={data[language].skills.designer.src_logo} alt={data[language].skills.designer.alt_logo} className="img"/>
                                </div>
                            </div>

                    </div>

                </Skills_SC>
            </Anim_FirstAppear_FadeInUp>

    );
};

export default Skills;
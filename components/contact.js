import style from "../styles/Contact.module.css";
import data from "./data";
import Language_Context from "./language-context";
import {useContext} from "react";

const Contact = () => {
    const [language] = useContext(Language_Context);
    return(
        <div className={style.c_section} id={"s_contact"}>
            <h2 className={style.h2}>{data[language].contact.title}</h2>
            <div className={style.c_content}>
                <h3 className={style.h3}>{data[language].contact.h3}</h3>
                <div className={style.b_button}>
                    <div className={style.button}>{data[language].contact.button}</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
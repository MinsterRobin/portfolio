import style from "../styles/Contact.module.css";

const Contact = () => {
    return(
        <div className={style.c_section}>
            <h2 className={style.h2}>Contact</h2>
            <div className={style.c_content}>
                <h3 className={style.h3}>Envie de me soumettre votre projet ?</h3>
                <div className={style.b_button}>
                    <div className={style.button}>Discutons !</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
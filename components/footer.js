import style from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={style.c_section}>
            <hr className={style.border_top} />
            <div className={style.c_content}>
                <img className={style.logo} src={"/Portfolio-Logo_Big.svg"} alt="Footer Logo" />
                <div className={style.c_socials}>
                    <div className={style.c_social}>
                        <img className={style.social_ring} src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className={style.social_logo} src={"/Linkedin.svg"} alt={"Linkedin Logo"}/>
                    </div>
                    <div className={style.c_social}>
                        <img className={style.social_ring} src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className={style.social_logo} src={"/Mail.svg"} alt={"Mail Logo"}/>
                    </div>
                    <div className={style.c_social}>
                        <img className={style.social_ring} src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className={style.social_logo} src={"/Malt.svg"} alt={"Malt Logo"}/>
                    </div>
                    <div className={style.c_social}>
                        <img className={style.social_ring} src={"Social_Ring.svg"} alt="Social Ring"/>
                        <img className={style.social_logo} src={"/Github.svg"} alt={"Github Logo"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
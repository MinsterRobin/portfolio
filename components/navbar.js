import style from "../styles/navbar.module.css";
import Image from "next/image";

export default () => {
    return(
        <nav className={style.container}>
            <div className={style.logoContainer}>
                <Image src="/logo-navbar.svg" alt="Logo Portfolio" width="80px" height="41px"/>
                <a className={style.link}>Robin Minster</a>
            </div>
            <a className={style.link}>À propos</a>
            <a className={style.link}>Compétences</a>
            <a className={style.link}>Expériences</a>
            <a className={style.link}>Contact</a>
            <a className={style.link}>EN | FR</a>
        </nav>
    );
}
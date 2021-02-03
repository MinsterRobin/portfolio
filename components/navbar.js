import style from "../styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return(
        <header className={style.box}>
            <nav className={style.container}>
                <div className={style.c_nav_desktop}>
                    <div className={style.c_logo}>
                        <div><Image src="/logo-navbar.svg" alt="Logo Portfolio" width="80px" height="41px"/></div>
                        <a className={style.name}>Robin Minster</a>
                    </div>
                    <a className={style.link}>À propos</a>
                    <a className={style.link}>Compétences</a>
                    <a className={style.link}>Expériences</a>
                    <a className={style.link}>Contact</a>
                    <a className={style.language}>EN | FR</a>
                </div>

                <div className={style.c_nav_mobile}>
                    <a className={style.name}>Robin Minster</a>
                    <div><Image src="/logo-navbar.svg" alt="Logo Portfolio" width="45px" height="35px"/></div>
                    <div className={style.hamburger_menu}>
                        <Image src="/menu.svg" alt="Hamburger Menu" width="20px" height="20px"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
import style from "../styles/navbar.module.css";
import {Link, animateScroll as Scroll} from "react-scroll";
import Image from "next/image";
import React, {useState} from "react";
import styled from "styled-components";

const Mobile_Menu = styled.div`
  display: ${({open}) => open ? "flex" : "none"};
  top: 20px;
  left: 20px;
  right: 20px;
  height: 70vh;
  position: absolute;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 992px) {
    display: none;
    {}
  }
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <header className={style.box}>

            <Mobile_Menu open={open}>
{/*                <Link>À propos</Link>
                <Link>Compétences</Link>
                <Link>Expériences</Link>
                <Link>Contact</Link>*/}
            </Mobile_Menu>

            <nav className={style.container}>
                <div className={style.c_nav_desktop}>
                    <a className={style.name} >Robin Minster</a>
                    <div className={style.c_links}>
                        <Link className={style.link} id={style.about}
                            to="s_about" smooth={true} offset={-80} duration={800} >
                            À propos
                        </Link>
                        <Link className={style.link} id={style.skills}
                              to="s_skills" smooth={true} offset={-200} duration={800} >
                            Compétences
                        </Link>
                        <div className={style.c_logo}><img className={style.logo} src={"/logo-navbar.svg"} alt="Logo" /></div>
                        <Link className={style.link} id={style.exps}
                              to="s_exps" smooth={true} offset={-200} duration={800} >
                            Expériences
                        </Link>
                        <Link className={style.link} id={style.contact}
                              to="s_contact" smooth={true} offset={-200} duration={800} >
                            Contact
                        </Link>
                        <div className={style.c_underline}><hr className={style.underline}/></div>
                    </div>
                    <a className={style.language}>EN | FR</a>
                </div>

                <div className={style.c_nav_mobile}>
                    <a className={style.name}>Robin Minster</a>
                    <img className={style.logo} src={"/logo-navbar.svg"} alt="Logo Portfolio" />
                    <div className={style.hamburger_menu} onClick={() => setOpen(!open)}>
                        <Image src="/menu.svg" alt="Hamburger Menu" width="20px" height="20px"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
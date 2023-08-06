import React, { useState } from 'react';
import NavbarCSS from './Navbar.module.css';
import NavPic from '../../images/bg_nav_center.jpg'
import BCBLogo from '../../images/logo_bc.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({ open, setOpen }) {

    return (
        <div className={NavbarCSS.navbar}>
            <div className={NavbarCSS.top}>
                <a href="#">
                    <img className={NavbarCSS.logo} src={BCBLogo} alt="" />
                </ a>
            </div>
            <div className={NavbarCSS.actualNavbar}>
                <div className={NavbarCSS.column}>
                    <div className={NavbarCSS.main}>
                        <a href="#"><p>Acesso à informação</p></a>
                        <a href="#"><p>Política monetária</p></a>
                        <a href="#"><p>Estabilidade financeira</p></a>
                    </div>
                    <SideMenu open={open} func={setOpen} />
                </div>
                <div className={NavbarCSS.logoColumn}>
                    <img className={NavbarCSS.logoShape} src={NavPic} alt="" />
                </div>
                <div className={NavbarCSS.column}>
                    <div className={NavbarCSS.main}>
                        <a href="#"><p>Estatísticas</p></a>
                        <a href="#"><p>Cédulas e moedas</p></a>
                        <a href="#"><p>Publicações e pesquisas</p></a>
                    </div>

                    <a href="#" className={NavbarCSS.search}>
                        <FontAwesomeIcon icon={faSearch} />
                    </a>

                </div>
            </div>
        </div>
    )
}

function SideMenu({ open, func }) {

    let [thisOpen, setThisOpen] = useState(false)

    if (thisOpen == true) {
        return (
            <button style={{ paddingBottom: '9px' }} className={NavbarCSS.barsMenu}>
                <div style={{ transform: 'translateY(10px) rotate(45deg)' }} className={NavbarCSS.menuLine}></div>
                <div style={{ display: 'none' }} className={NavbarCSS.menuLine}></div>
                <div style={{ transform: 'rotate(-45deg)' }} className={NavbarCSS.menuLine}></div>
            </button>
        )
    }

    return (
        <button onClick={() => func(true)} className={NavbarCSS.barsMenu}>
            <div className={NavbarCSS.menuLine}></div>
            <div className={NavbarCSS.menuLine}></div>
            <div className={NavbarCSS.menuLine}></div>
        </button>
    )
}

export default Navbar;
